//Q-use generic in order to take explicit type in function to combine the different array types

function combine<T>(arg1: T[], arg2: T[]): T[] {
  return arg1.concat(arg2);
}

console.log(combine<number | string>([1, 2, 3], ["tim", "jerry"]));

//Overloading in function

function makeDate(timeStamps: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(morTimeStamps: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(morTimeStamps, d, y);
  } else {
    return new Date(morTimeStamps);
  }
}

//Q-make function for map

function mapIt<Input, Output>(
  arr: Input[],
  callback: (item: Input) => Output
): Output[] {
  return arr.map(callback);
}

//Using function to create the objects

type Person2 = {
  name: string;
  age: number;
  Ethnicity: string;
  getJob: () => string;
};
function MyObj(this: Person2, name: string, age: number, Ethnicity: string) {
  this.Ethnicity = Ethnicity;
  this.name = name;
  this.age = age;
  this.getJob = () => {
    return "got a job";
  };
}

MyObj.prototype.greet = function () {
  console.log(`hello ${this.name}`);
};

interface Employee extends Person2 {
  ethics: string;
  work: () => void;
}

function EmployeeObj(
  this: Employee,
  name: string,
  age: number,
  Ethnicity: string
) {
  MyObj.call(this, name, age, Ethnicity);
  this.ethics = this.ethics;
  this.work = () => {
    console.log("does the job");
  };
}

EmployeeObj.prototype = Object.create(MyObj.prototype);
