type Footballer = {
  position: string;
  goals: number;
  trophies: string[];
};

type trophyType = Footballer["trophies"];

type UnionIndexType = Footballer["goals" | "position"];

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type PersonType = (typeof MyArray)[number];
type PersonType2 = (typeof MyArray)[number]["age"];
