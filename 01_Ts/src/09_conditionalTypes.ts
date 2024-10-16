interface Animal {
  live(): void;
}

interface Dog extends Animal {
  wolf(): void;
}

type Example1 = Dog extends Animal ? string : number;

//Use conditional type in order to tell what getting out based on type of argument function receives

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

type NameOrId<Type extends number | string> = Type extends string
  ? NameLabel
  : IdLabel;

function createProfile<Type extends number | string>(
  idOrName: Type
): NameOrId<Type> {
  throw "unimplemented";
}

let a = createProfile("ganesh");

type MessageType<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMsgContentType = MessageType<Email>;

type MessageType2<T> = T extends { message: unknown } ? T["message"] : never;

//for arrays

type ArrayItemType<Type> = Type extends Array<infer item> ? item : Type;

type Test3 = ArrayItemType<string[]>;

//for checking the what function return type is

type FuncReturn<Type> = Type extends (...arg: never[]) => infer Return
  ? Return
  : Type;

type Test4 = FuncReturn<(a: number, b: number) => number>;
