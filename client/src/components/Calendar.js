import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { useEffect, useState, useRef } from "react";

// css files to make the Calendar work
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Calendar = () => {
  // state for date
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  // state for opening and closing the calendar
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

  //

  //

  return (
    <div className="calendarWrap">
      <input
        value={` ${format(range[0].startDate, "dd/MM/yyyy")}  to  ${format(
          range[0].endDate,
          "dd/MM/yyyy"
        )}`}
        readOnly
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />
      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="vertical"
            className="calendarElement"
            minDate={new Date()} // find a way to change the min date dynamically based on the latest date in the mongoDb reservation collection
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
