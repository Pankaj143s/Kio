//Automotive Battery
//banner
import automotiveBanner1 from "../../assets/product-page/Automotive/carBanner.jpg";
import automotiveBanner2 from "../../assets/product-page/Automotive/carBanner2.jpg";
// applications
import one from "../../assets/product-page/Automotive/ApplicationsIcons/one.png";
import two from "../../assets/product-page/Automotive/ApplicationsIcons/two.png";
import three from "../../assets/product-page/Automotive/ApplicationsIcons/three.png";

import automotivefeatureImg from "../../assets/product-page/Automotive/featuresBatteryIcon.png";

//Ranges of Battery
import { automotiveBattery } from "./battery-list/autometiveBattery";
//Slider

import KP40 from "../../assets/product-page/Automotive/slider-images/KPT40.jpg";
import KP700 from "../../assets/product-page/Automotive/slider-images/KPT700.png";
import KP1000 from "../../assets/product-page/Automotive/slider-images/KPT1000.png";
import KP50 from "../../assets/product-page/Automotive/slider-images/KPT50.png";
import KP18 from "../../assets/product-page/Automotive/slider-images/KPT18.png";
//Inverter

import inverterBanner from "../../assets/product-page/Inverter/inverterBanner.jpg";
import inverterImg from "../../assets/product-page/Inverter/featuresBattery.png";
import { inverterBattery } from "./battery-list/inverterBattery";
// Inverter Slider

import inverterSlider from "../../assets/product-page/Inverter/slider-images/image-1.png";

// Marine
import marineBanner from "../../assets/product-page/Marine/marineBanner.jpg";
import marineImg from "../../assets/product-page/Marine/featuresBattery.png";
import { marineBattery } from "./battery-list/marineBattery";

//E-Rickshaw

import eRickshawBanner from "../../assets/product-page/ERickshaw/eRickshawBanner.jpg";

import eRikshawImg from "../../assets/product-page/ERickshaw/eRickshawFeaturesBattery.png";
import { eRikshawBattery } from "./battery-list/e-rickshawBattery";

export const products = [
  {
    id: 1,
    name: "Automotive",
    title: "Automotive Batteries",
    bannerDesc: `When power stops, life stops. Before the light goes out, let our batteries take your load.Experience Meets Innovation to Deliver Next-Gen Batteries
`,
    bannerImage: automotiveBanner1,
    tagline: "Rev Up Your Drive with Reliable Energy",
    desc: `Elevate Your Drive with Advanced Technology: Our Automotive
    Batteries Redefine Performance. Featuring high-surface carbon for
    enhanced discharge capabilities and rapid deep cycle recovery, our
    batteries are designed to thrive in the face of frequent and
    prolonged power demands. Crafted with a special-grade polyethylene
    separator, our batteries boast high volume porosity and superior
    mechanical strength. With minimal water top-up requirements and an
    impressive life expectancy of up to 5-6 years, these batteries
    guarantee a reliable and enduring power source. Whether for everyday
    commuting or heavy-duty industrial applications, our automotive
    batteries are engineered to power your journey with lasting
    brilliance`,
    featureSectionImage: automotivefeatureImg,

    features: [
      {
        id: 1,
        title: "Capacity. 150 Ah.",
      },
      {
        id: 2,
        title: "Battery Type. Tall Tubular.",
      },
      {
        id: 3,
        title: "Voltage. 12 V.",
      },
      {
        id: 4,
        title: "Color. Red And White.",
      },
      {
        id: 5,
        title: "Phase. Single Phase.",
      },
      {
        id: 6,
        title: "Features. Long Back Up.",
      },
      {
        id: 7,
        title: "Battery Warrenty. 60 Months.",
      },
    ],
    slider: [KP40, KP700, KP1000, KP50, KP18],
    rangesOfBatteries: automotiveBattery,
    applicationDetails: [
      {
        id: 1,
        img: one,
      },
      {
        id: 2,
        img: two,
      },
      {
        id: 3,
        img: three,
      },
    ],
  },
  {
    id: 2,
    name: "Inverter",
    bannerImage: inverterBanner,

    tagline: "Power Back up for Every Need",
    desc: `We use high surface carbon in our tubular batteries. It not only improves the discharge performance of the batteries but also ensures fast recovery in the deep cycle. Suited for frequent and long power cuts these batteries have a long life cycle and can lighten up every moment of your life. Use of special grade polyethylene separator results in high volume porosity and higher mechanical strength. Our tubular batteries require low water top up and have a life expectancy up to 5-6 years. From household application to industrial use these batteries will run for life and power your world with brightness forever`,
    featureSectionImage: inverterImg,

    features: [
      {
        id: 1,
        title: "Long back up",
      },
      {
        id: 2,
        title: "60-month warranty",
      },
      {
        id: 3,
        title: "Excellent cycle life",
      },
      {
        id: 4,
        title: "Deep discharge capabilities",
      },
      {
        id: 5,
        title: "Efficiency",
      },
      {
        id: 6,
        title: "Rapid charging",
      },
      {
        id: 7,
        title: "Safety",
      },
    ],

    slider: inverterSlider,
    rangesOfBatteries: inverterBattery,

    // applicationDetails: [
    //   {
    //     id: 1,
    //     img: home,
    //   },
    //   {
    //     id: 2,
    //     img: work,
    //   },
    // ],
  },
  {
    id: 3,
    name: "Marine",
    bannerImage: marineBanner,

    tagline: "Uninterrupted Energy on the Open Seas",
    desc: `Navigate with Confidence: Our Marine Batteries Set Sail with High Surface Carbon for Peak Performance. Specially crafted for deep cycles, these batteries offer swift recovery and enduring power in the roughest waters. Featuring a unique polyethylene separator, they boast superior porosity and robust mechanical strength. Designed for low water top-up, these marine batteries have an impressive life expectancy of up to 5-6 years. Whether for leisure or professional marine applications, our batteries are built to endure, lighting up your maritime adventures with unwavering reliability`,
    featureSectionImage: marineImg,

    features: [
      {
        id: 1,
        title: "Capacity. 200 Ah.",
      },
      {
        id: 2,
        title: "Battery Type. Tall Tubular.",
      },
      {
        id: 3,
        title: "Voltage. 12 V.",
      },
      {
        id: 4,
        title: "Long Back Up",
      },
      {
        id: 5,
        title: "Size. 120x96x200 mm.",
      },
      {
        id: 6,
        title: "Frequency. 50 Hz.",
      },
      {
        id: 7,
        title: "Phase. Single Phase",
      },
    ],
    rangesOfBatteries: marineBattery,

    // applicationDetails: [
    //   {
    //     id: 1,
    //     img: boatwithcontainer,
    //   },
    // ],
    // advantages: [
    //   {
    //     id: 1,
    //     title: "High starting power",
    //     desc: "combines CCA and low temp performance",
    //   },
    //   {
    //     id: 2,
    //     title: "Corrosion-resistant",
    //     desc: "Protects against corrosive elements.",
    //   },
    //   {
    //     id: 3,
    //     title: "Vibration-resistant",
    //     desc: "Withstands vehicle movement vibrations.",
    //   },
    //   {
    //     id: 4,
    //     title: "Spill-proof",
    //     desc: "Safeguards against leaks, ideal for marine environments.",
    //   },
    //   {
    //     id: 5,
    //     title: "Extended accessory power",
    //     desc: "highlights high reserve capacity",
    //   },
    // ],
  },
  {
    id: 4,
    name: "E-Rickshaw",
    bannerImage: eRickshawBanner,

    tagline: "Uninterrupted Energy on the Open Seas",
    desc: `Empower Your E-Rickshaw with Cutting-Edge Energy: Our tubular batteries, featuring high surface carbon technology, elevate the performance of E-Rickshaws with enhanced discharge capabilities and rapid deep cycle recovery. Specially designed for prolonged and frequent use in demanding urban environments, these batteries boast an extended life cycle, providing reliable power for an uninterrupted journey. The utilization of advanced polyethylene separators ensures optimal porosity and mechanical strength, minimizing maintenance with low water top-ups. With a life expectancy of up to 5-6 years, our tubular batteries are engineered to meet the rigorous demands of E-Rickshaws, lighting up the path for sustainable and efficient transportation, from city streets to industrial zones`,
    featureSectionImage: eRikshawImg,

    features: [
      {
        id: 1,
        title: "Capacity. 150 Ah.",
      },
      {
        id: 2,
        title: "Battery Type. Tall Tubular.",
      },
      {
        id: 3,
        title: "Voltage. 12 V.",
      },
      {
        id: 4,
        title: "Color. Red And White.",
      },
      {
        id: 5,
        title: "Phase. Single Phase.",
      },
      {
        id: 6,
        title: "Features. Long Back Up.",
      },
      {
        id: 7,
        title: "Battery Warrenty. 60 Months.",
      },
    ],
    rangesOfBatteries: eRikshawBattery,

    // applicationDetails: [
    //   {
    //     id: 1,
    //     img: transport,
    //   },
    // ],
    // advantages: [
    //   {
    //     id: 1,
    //     title: "Durable",
    //     desc: "Corrosion-resistant, handles deep discharge.",
    //   },
    //   {
    //     id: 2,
    //     title: "High Performance",
    //     desc: "Thicker plates, faster charging.",
    //   },
    //   {
    //     id: 3,
    //     title: "Long-lasting",
    //     desc: "Special additives for consistent mileage and reduced water loss.",
    //   },
    //   {
    //     id: 4,
    //     title: "Vibration-resistant",
    //     desc: "Handles rough roads.",
    //   },
    //   {
    //     id: 5,
    //     title: "Rapid Charging Capability",
    //     desc: "Rapid charging boosts productivity and profitability.",
    //   },
    // ],
  },
];
