//Utility types means creating types from types

//Awaited types

function giveAsyncData(): Promise<() => Promise<string>> {
  return new Promise((resolve, reject) => {
    resolve(
      () =>
        new Promise((resolve, reject) => {
          resolve("done");
        })
    );
  });
}
const data = giveAsyncData()
  .then((asyncFunc) => asyncFunc())
  .then((data) => data);

//Partial type

type StudentInfo = {
  name: string;
  age: number;
  isPass: boolean;
  isNaughty?: boolean;
};

function updateStudent(stud: StudentInfo, updatedData: Partial<StudentInfo>) {
  return { ...stud, ...updatedData };
}

const stud1: StudentInfo = {
  name: "kim",
  age: 40,
  isPass: false,
  isNaughty: false,
};

console.log(updateStudent(stud1, { isNaughty: true }));

//Required
const stud2: Required<StudentInfo> = {
  name: "tim",
  age: 3,
  isPass: false,
  isNaughty: true,
};

//Readonly

const stu3: Readonly<StudentInfo> = {
  age: 3,
  isPass: false,
  name: "lex",
};

// stu3.age = 3;

//Record

type Jobs = "SWE" | "Marketing" | "Typing";

type Info = {
  vacancies: number;
  salary: number;
};

type JobSheet = Record<Jobs, Info>;

const jobSheet1: JobSheet = {
  Marketing: {
    salary: 1234,
    vacancies: 12,
  },
  SWE: {
    salary: 1234,
    vacancies: 12,
  },
  Typing: {
    salary: 1234,
    vacancies: 12,
  },
};

//Pick

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type SaturatedTodoType = Pick<Todo, "description">;

//Omit

type SaturatedTodoType2 = Omit<Todo, "title">;

//Exclude

type CharSet = Exclude<"a" | "b" | "c" | "d", "a">;

type Shapes =
  | {
      kind: "circle";
      radius: number;
    }
  | {
      kind: "square";
      side: number;
    }
  | {
      kind: "rectangle";
      width: number;
      height: number;
    };

//Extract
type CircleShape = Extract<Shapes, { kind: "circle" }>;

//Parameter type

function doShit(arg1: string, arg2: number): string {
  return "yep";
}

type SomeType = Parameters<typeof doShit>;

//ReturnType

type SomeType2 = ReturnType<typeof doShit>;

//Non-nullable
type NotNull = NonNullable<"jim" | "" | null | undefined>;

//Instance type

class C {
  x = 0;
  y = 2;
}

type CTestType = InstanceType<typeof C>;

const ct1: CTestType = {
  x: 0,
  y: 2,
};

type T1 = Uppercase<"jim">;
