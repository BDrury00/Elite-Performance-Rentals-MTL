//

//

// data for cars
const cars = [
  {
    _id: "R8",
    id: 1,
    make: "Audi",
    model: "R8",
    full: "Audi R8 Coupe V10 GT",
    description:
      "Introducing the Audi R8 Coupe V10 GT, the pinnacle of exotic sports cars. This beauty is powered by a 5.2-liter V10 engine, delivering 540 horsepower and 398 lb-ft of torque, with the ability to reach 60 mph in a mere 3.4 seconds. The R8 Coupe V10 GT boasts impressive performance features including rear-wheel drive and a 7-speed dual-clutch automatic transmission. The exterior of this exotic car is striking with sharp, aerodynamic lines and an eye-catching grey metallic paint finish. Inside, the R8 Coupe V10 GT is equally impressive with luxurious leather seats, a punchy sound system, and a virtual cockpit with advanced infotainment technology. Experience the thrill of driving a true exotic car with the Audi R8 Coupe V10 GT.",
    dailyRate: 450,
    cutoutImage: "/assets/audi-r8/cutout/audi.png",
    allImages: [
      "/assets/audi-r8/images/1.jpg",
      "/assets/audi-r8/images/2.jpg",
      "/assets/audi-r8/images/3.jpg",
      "/assets/audi-r8/images/4.jpg",
      "/assets/audi-r8/images/5.jpg",
    ],
    reservations: [],
  },
  {
    _id: "Countach",
    id: 2,
    make: "Lamborghini",
    model: "Countach LPI 800-4",
    full: "Lamborghini Countach LPI 800-4",
    description:
      "Introducing the Lamborghini Countach LPI 800-4, a true masterpiece of Italian engineering and design. This exotic car is powered by a hybrid V12 engine, delivering a jaw-dropping 802 horsepower and 531 lb-ft of torque, with the ability to reach 60 mph in just 2.8 seconds. The Countach LPI 800-4 boasts an iconic and unmistakable exterior design with sharp angles and aggressive lines. The interior is equally stunning with handcrafted leather seats, a state-of-the-art infotainment system, and advanced driver assistance features. Experience the thrill of driving a true legend with the Lamborghini Countach LPI 800-4.",
    dailyRate: 875,
    cutoutImage: "/assets/lamborghini-countach/cutout/countach.png",
    allImages: [
      "/assets/lamborghini-countach/images/1.jpg",
      "/assets/lamborghini-countach/images/2.jpg",
      "/assets/lamborghini-countach/images/3.jpg",
      "/assets/lamborghini-countach/images/4.jpg",
      "/assets/lamborghini-countach/images/5.jpg",
    ],
    reservations: [],
  },
  {
    _id: "Urus",
    id: 3,
    make: "Lamborghini",
    model: "Urus",
    full: "Lamborghini Urus",
    description:
      "Introducing the Lamborghini Urus, the world's first Super Sport Utility Vehicle. This exotic car is powered by a 4.0-liter V8 engine, delivering 650 horsepower and 627 lb-ft of torque, with the ability to reach 60 mph in just 3.5 seconds. The Urus boasts an aggressive and sleek exterior design, featuring Lamborghini's signature hexagonal grille and sharp, aerodynamic lines. The interior is just as impressive with handcrafted leather seats, a state-of-the-art infotainment system, and ample room for passengers and luggage. The Urus combines the thrill of driving a Lamborghini with the versatility of an SUV, making it the perfect exotic car for any occasion.",
    dailyRate: 350,
    cutoutImage: "/assets/lamborghini-urus/cutout/urus.png",
    allImages: [
      "/assets/lamborghini-urus/images/1.jpg",
      "/assets/lamborghini-urus/images/2.jpg",
      "/assets/lamborghini-urus/images/3.jpg",
    ],
    reservations: [],
  },
  {
    _id: "765LT-Spider",
    id: 4,
    make: "McLaren",
    model: "765LT Spider",
    full: "McLaren 765LT Spider",
    description:
      "Introducing the McLaren 765LT Spider, a true masterpiece of engineering and design. This exotic car is powered by a 4.0-liter V8 engine, delivering an astounding 755 horsepower and 590 lb-ft of torque, with the ability to reach 60 mph in just 2.7 seconds. The 765LT Spider boasts an aerodynamic and aggressive exterior design, with a retractable hardtop that allows for open-air driving. The interior is equally stunning with luxurious Alcantara and leather seats, a state-of-the-art infotainment system, and advanced driver assistance features. Experience the thrill of driving a true race-inspired exotic car with the McLaren 765LT Spider",
    dailyRate: 750,
    cutoutImage: "/assets/mclaren-765LT-spider/cutout/mclaren.png",
    allImages: [
      "/assets/mclaren-765LT-spider/images/1.jpg",
      "/assets/mclaren-765LT-spider/images/2.jpg",
      "/assets/mclaren-765LT-spider/images/3.jpg",
    ],
    reservations: [],
  },
  {
    _id: "SF90-Spider",
    id: 5,
    make: "Novitec Ferrari",
    model: "SF90 Spider",
    full: "Novitec Ferrari SF90 Spider",
    description:
      "Introducing the Novitec Ferrari SF90 Spider, a stunning exotic car that combines Ferrari's legendary performance with Novitec's cutting-edge tuning expertise. This masterpiece is powered by a hybrid V8 engine, delivering a staggering 1000 horsepower and 662 lb-ft of torque, with the ability to reach 60 mph in just 2.5 seconds. The Novitec Ferrari SF90 Spider boasts an aggressive and aerodynamic exterior design with a custom-tailored carbon fiber body kit, exclusive Novitec wheels, and a sporty yet elegant interior with handcrafted leather and carbon fiber accents. Experience the thrill of driving a true one-of-a-kind exotic car with the Novitec Ferrari SF90 Spider.",
    dailyRate: 900,
    cutoutImage: "/assets/novitec-ferrari-SF90-spider/cutout/ferrari.png",
    allImages: [
      "/assets/novitec-ferrari-SF90-spider/images/1.jpg",
      "/assets/novitec-ferrari-SF90-spider/images/2.jpg",
      "/assets/novitec-ferrari-SF90-spider/images/3.jpg",
    ],
    reservations: [],
  },
  {
    _id: "Cayman-GTS",
    id: 6,
    make: "Porsche",
    model: "Cayman GTS",
    full: "Porsche Cayman GTS",
    description:
      "Introducing the Porsche Cayman GTS, a powerful and agile exotic sports car. This beauty is powered by a 4.0-liter naturally aspirated flat-six engine, delivering 394 horsepower and 309 lb-ft of torque, with the ability to reach 60 mph in just 4.3 seconds. The Cayman GTS boasts a sleek and aerodynamic exterior design with Porsche's signature styling cues and a sporty yet refined interior with premium leather and Alcantara seats. Experience the thrill of driving a true driver's car with the Porsche Cayman GTS.",
    dailyRate: 350,
    cutoutImage: "/assets/porsche-cayman-GTS/cutout/porsche.png",
    allImages: [
      "/assets/porsche-cayman-GTS/images/1.jpg",
      "/assets/porsche-cayman-GTS/images/2.jpg",
      "/assets/porsche-cayman-GTS/images/3.jpg",
    ],
    reservations: [],
  },
];

//exports

module.exports = { cars };
