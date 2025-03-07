/* -------------------------------------------------------------------------- */
/*                                   Quiz 1                                   */
/* -------------------------------------------------------------------------- */

interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

type IsProductKey<T> = T extends keyof Product ? true : false;

/* -------------------------------------------------------------------------- */
/*                                   Quiz 2                                   */
/* -------------------------------------------------------------------------- */

type ExtractType<T, U> = T extends U ? T : never;

/* -------------------------------------------------------------------------- */
/*                                   Quiz 3                                   */
/* -------------------------------------------------------------------------- */

type InferArrayType<T> = T extends (infer R)[] ? R : never;

const arr1 = [1, 2, 3];
const arr2 = ["hello", "myname", "winterlood"];
const arr3 = [1, true, "hi"];
