type Person = {
  readonly name: string;
  isActive?: boolean;
  age: number;
};

type Skill = {
  name: string;
};

type Issue = {
  problems: string;
};

//INtersection types

type Overall = Skill & Issue;

const p1: Overall = {
  name: "tim",
  problems: "nothing",
};

type ObjBody = {
  [index: string]: number;
};

for (let key in p1) {
  console.log(p1[key as keyof Overall]); //making the union literals of all keys inside the objBody
  console.log(p1[key as keyof typeof p1]);
}

interface Motion {
  velocity: number;
}

interface Circular extends Motion {
  radius: number;
}
interface Box<T> {
  box: T;
}

const box1: Box<string> = {
  box: "square box",
};

type Contents = {
  content: string;
};

const box2: Box<Contents> = {
  box: {
    content: "good content",
  },
};
