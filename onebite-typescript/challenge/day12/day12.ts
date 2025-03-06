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

function getSellersFromProducts(products: Product[]): Product["seller"][] {
  return products.map((product) => product.seller);
}

/* -------------------------------------------------------------------------- */
/*                                   Quiz 2                                   */
/* -------------------------------------------------------------------------- */

type PartialProduct = {
  [key in keyof Product]?: Product[key];
};

type ReadonlyProduct = {
  readonly [key in keyof Product]: Product[key];
};

type ReadonlyPartialProduct = {
  readonly [key in keyof Product]?: Product[key];
};

/* -------------------------------------------------------------------------- */
/*                                   Quiz 3                                   */
/* -------------------------------------------------------------------------- */

type Num = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Score = `${Num}-${Num}`;

const tc1 = "19-0";
const tc2 = "5-11";
const tc3 = "9-1";
const tc4 = "2-8";
const tc5 = "7-2";
