//Creating the function with generic and assign it with similar identifier type

function identity<Type>(arg: Type): Type {
  return arg;
}

const myIdentity: <Type>(arg: Type) => Type = identity;

//Using type parameter in generics

function getValue<Type, Key extends keyof Type>(
  obj: Type,
  key: Key
): Type[Key] {
  return obj[key];
}

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

//Q-from above array of object which have similar type create the generic function which create the array of  value of specific key

function extractValueFromKeys<T, Key extends keyof T>(
  arr: T[],
  key: Key
): T[Key][] {
  return arr.map((item) => item[key]);
}

console.log(extractValueFromKeys(usersArray, "email"));
