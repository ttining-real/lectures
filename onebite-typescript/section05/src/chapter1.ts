// * 인터페이스 확장

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // name: "hello";
  // → Animal의 name 타입의 서브 타입 (string 타입의 서브 타입 = string literal)
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
