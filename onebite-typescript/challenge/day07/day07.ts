/* -------------------------------------------------------------------------- */
/*                                   Quiz 1                                   */
/* -------------------------------------------------------------------------- */

function introduce(name = "이정환", tall?: number) {
  if (!tall) {
    console.log(`안녕하세요 ${name}입니다!`);
  } else {
    console.log(`안녕하세요 ${name}입니다. 키는 ${tall}입니다`);
  }
}

introduce();
introduce("이정환");
introduce("이정환", 175);

/* -------------------------------------------------------------------------- */
/*                                   Quiz 2                                   */
/* -------------------------------------------------------------------------- */

type Func = (a: number, b: string) => boolean;

const func: Func = (a, b) => {
  console.log(a.toFixed());
  console.log(b.toLocaleLowerCase());
  return true;
};
