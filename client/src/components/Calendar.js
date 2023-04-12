import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays, eachDayOfInterval } from "date-fns";
import { useEffect, useState, useRef } from "react";

// css files to make the Calendar work
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Calendar = ({ range, setRange, id }) => {
  const [open, setOpen] = useState(false);

  // useRef for hiding the calendar when clicking outside of the calendar
  const refOne = useRef(null);
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  //
  // calculate 32 days from start date to limit user to 32 day rentals at a time
  const maxEndDate = addDays(range[0].startDate, 32);
  //

  // disable date ranges that the car is booked:
  const [bookedDays, setBookedDays] = useState([]);
  const [calendarLoading, setCalendarLoading] = useState(false);
  console.log(bookedDays);

  // Fetch for the specific cars reserved days:
  useEffect(() => {
    if (open) {
      fetch(`/cars/${id}/availability`)
        .then((response) => response.json())
        .then((data) => {
          setBookedDays(data.data);
          setCalendarLoading(false);
        })
        .catch((error) => {
          setCalendarLoading(false);
          console.error("Error fetching availability:", error);
        });
    }
  }, [open, id]);

  //
  // Disable the dates fetched for that car
  // Loop through each reservation in bookedDays

  const disabledDates = bookedDays.flatMap((reservation) => {
    const startDate = new Date(reservation.startDate);
    const endDate = new Date(reservation.endDate);
    return eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    });
  });

  return (
    <div className="calendarWrap">
      <input
        value={` ${format(range[0].startDate, "dd/MM/yyyy")}  to  ${format(
          range[0].endDate,
          "dd/MM/yyyy"
        )}`}
        readOnly
        className="inputBox"
        onClick={() => {
          setOpen((open) => !open);
          setCalendarLoading(true);
        }}
      />
      <div ref={refOne}>
        {open && (
          <>
            {calendarLoading ? (
              <div>Loading...</div>
            ) : (
              <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={1}
                direction="vertical"
                className="calendarElement"
                minDate={new Date()}
                disabledDates={disabledDates}
                maxDate={maxEndDate}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Calendar;
