import { BusinessUnit } from "@/models/interfaces";

// Data for Business units and sub-business units
const businessUnits: BusinessUnit[] = [
  {
    id: 0,
    name: "Reliance Retail",
    img: "/src/assets/img/logos/reliance-retail.svg",
    subBusinessUnits: [
      {
        id: 1,
        name: "Reliance Digital",
        img: "/src/assets/img/logos/reliance-retail.svg",
      },
      {
        id: 2,
        name: "Netmeds",
        img: "/src/assets/img/logos/netmeds.svg",
      },
      {
        id: 3,
        name: "Reliance Jewels",
        img: "/src/assets/img/logos/reliance-jewels.svg",
      },
      {
        id: 4,
        name: "Reliance Trends",
        img: "/src/assets/img/logos/trends.svg",
      },
      {
        id: 5,
        name: "Reliance Smart",
        img: "/src/assets/img/logos/reliance-smart.svg",
      },
      {
        id: 6,
        name: "Reliance Trends",
        img: "/src/assets/img/logos/trends.svg",
      },
      {
        id: 7,
        name: "Reliance Smart",
        img: "/src/assets/img/logos/reliance-smart.svg",
      },
    ],
  },
  {
    id: 8,
    name: "RBML - Jio BP",
    img: "src/assets/img/logos/reliance-bp.svg",
  },
  {
    id: 9,
    name: "Reliance Foundation",
    img: "src/assets/img/logos/reliance-foundation.svg",
  },
  {
    id: 10,
    name: "Reliance Life Sciences",
    img: "src/assets/img/logos/reliance-lifesciences.svg",
  },
  {
    id: 11,
    name: "Oil to Chemicals",
    img: "src/assets/img/logos/reliance-chemicals.svg",
  },
];

// Export the business units data array
export default businessUnits;
