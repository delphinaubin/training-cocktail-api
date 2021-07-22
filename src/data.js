const cocktails = [
  {
    id: "1",
    name: "Mojito",
    ingredients: [
      { id: "1", quantity: 6 },
      { id: "2", quantity: 15 },
      { id: "3", quantity: 60 },
      { id: "4", quantity: 15 },
      { id: "5", quantity: 15 },
      { id: "6", quantity: 6 },
    ],
  },
  {
    id: "2",
    name: "Margarita",
    ingredients: [
      { id: "7", quantity: 45 },
      { id: "8", quantity: 22.5 },
      { id: "2", quantity: 22.5 },
      { id: "9", quantity: 5 },
    ],
  },
  {
    id: "3",
    name: "Maï Taï",
    ingredients: [
      { id: "2", quantity: 15 },
      { id: "3", quantity: 50 },
      { id: "8", quantity: 10 },
      { id: "10", quantity: 10 },
    ],
  },
  {
    id: "4",
    name: "Russian Spring Punch",
    ingredients: [
      { id: "12", quantity: 7.5 },
      { id: "13", quantity: 7.5 },
      { id: "14", quantity: 7 },
      { id: "15", quantity: 50 },
      { id: "16", quantity: 50 },
      { id: "5", quantity: 10 },
    ],
  },
  {
    id: "5",
    name: "Daiquiri",
    ingredients: [
      { id: "3", quantity: 60 },
      { id: "2", quantity: 20 },
      { id: "5", quantity: 10 },
    ],
  },
  {
    id: "6",
    name: "Aperol Spritz",
    ingredients: [
      { id: "4", quantity: 30 },
      { id: "17", quantity: 60 },
      { id: "18", quantity: 90 },
    ],
  },
];

const ingredients = [
  {
    id: "1",
    name: "Menthe",
    unit: "feuille",
  },
  {
    id: "2",
    name: "Citron vert",
    unit: "ml",
  },
  {
    id: "3",
    name: "Rhum",
    unit: "ml",
  },
  {
    id: "4",
    name: "Perrier",
    unit: "ml",
  },
  {
    id: "5",
    name: "Sirop de sucre",
    unit: "ml",
  },
  {
    id: "6",
    name: "Angustora",
    unit: "dash",
  },
  {
    id: "7",
    name: "Tequilla",
    unit: "ml",
  },
  {
    id: "8",
    name: "Cointreau",
    unit: "ml",
  },
  {
    id: "9",
    name: "Sirop d'agave",
    unit: "ml",
  },
  {
    id: "10",
    name: "Sirop d'orgeat",
    unit: "ml",
  },
  {
    id: "11",
    name: "Citron jaune",
    unit: "ml",
  },
  {
    id: "12",
    name: "Crème de cassis",
    unit: "ml",
  },
  {
    id: "13",
    name: "Crème de framboises",
    unit: "ml",
  },
  {
    id: "14",
    name: "Framboise",
    unit: "pièce",
  },
  {
    id: "15",
    name: "Vodka",
    unit: "ml",
  },
  {
    id: "16",
    name: "Champagne",
    unit: "ml",
  },
  {
    id: "17",
    name: "Aperol",
    unit: "ml",
  },
  {
    id: "18",
    name: "Prosseco",
    unit: "ml",
  },
];

module.exports = {
  ingredients,
  cocktails,
};
