import { BusinessUnit } from "@/models/interfaces";

// Data for Marvel departments and teams
const businessUnits: BusinessUnit[] = [
  {
    id: 0,
    name: "Avengers Division",
    img: "/src/assets/img/logos/avengers.svg",
    subBusinessUnits: [
      {
        id: 1,
        name: "Core Team",
        img: "/src/assets/img/logos/core-team.svg",
      },
      {
        id: 2,
        name: "New Avengers",
        img: "/src/assets/img/logos/new-avengers.svg",
      },
      {
        id: 3,
        name: "Young Avengers",
        img: "/src/assets/img/logos/young-avengers.svg",
      },
      {
        id: 4,
        name: "West Coast",
        img: "/src/assets/img/logos/west-coast.svg",
      },
      {
        id: 5,
        name: "Secret Avengers",
        img: "/src/assets/img/logos/secret-avengers.svg",
      },
      {
        id: 6,
        name: "Mighty Avengers",
        img: "/src/assets/img/logos/mighty-avengers.svg",
      },
      {
        id: 7,
        name: "Dark Avengers",
        img: "/src/assets/img/logos/dark-avengers.svg",
      },
    ],
  },
  {
    id: 8,
    name: "X-Men Division",
    img: "src/assets/img/logos/x-men.svg",
  },
  {
    id: 9,
    name: "Fantastic Four",
    img: "src/assets/img/logos/fantastic-four.svg",
  },
  {
    id: 10,
    name: "Defenders",
    img: "src/assets/img/logos/defenders.svg",
  },
  {
    id: 11,
    name: "Guardians of the Galaxy",
    img: "src/assets/img/logos/guardians.svg",
  },
];

// Export the business units data array
export default businessUnits;
