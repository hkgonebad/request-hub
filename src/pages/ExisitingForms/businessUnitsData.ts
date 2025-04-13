import { BusinessUnit } from "@/models/interfaces";

// Data for Marvel departments and teams
const businessUnits: BusinessUnit[] = [
  {
    id: 0,
    name: "Avengers Division",
    img: "/src/assets/img/logos/avengers.png",
    subBusinessUnits: [
      {
        id: 1,
        name: "Core Team",
        img: "/src/assets/img/logos/avengers.png",
      },
      {
        id: 2,
        name: "New Avengers",
        img: "/src/assets/img/logos/avengers.png",
      },
      {
        id: 3,
        name: "Young Avengers",
        img: "/src/assets/img/logos/avengers.png",
      },
      {
        id: 4,
        name: "West Coast",
        img: "/src/assets/img/logos/avengers.png",
      },
      {
        id: 5,
        name: "Secret Avengers",
        img: "/src/assets/img/logos/avengers.png",
      },
      {
        id: 6,
        name: "Mighty Avengers",
        img: "/src/assets/img/logos/avengers.png",
      },
      {
        id: 7,
        name: "Dark Avengers",
        img: "/src/assets/img/logos/avengers.png",
      },
    ],
  },
  {
    id: 8,
    name: "X-Men Division",
    img: "src/assets/img/logos/xmen.jpg",
  },
  {
    id: 9,
    name: "Fantastic Four",
    img: "src/assets/img/logos/fantastic4.jpg",
  },
  {
    id: 10,
    name: "Defenders",
    img: "src/assets/img/logos/defenders.png",
  },
  {
    id: 11,
    name: "Guardians of the Galaxy",
    img: "src/assets/img/logos/guardiansofgalaxy.png",
  },
];

// Export the business units data array
export default businessUnits;
