import { getChocoPieDough, TextureType } from "../../pie/process";

describe("test basic example using getChocoPieDough function", () => {
  // bad example
  test("getChocoPieDough function test", () => {
    const texture = TextureType.HARD;
    const dough = getChocoPieDough(texture);

    expect(dough.texture).toBe(TextureType.HARD);
  });

  // good example
  test("if getChocoPieDough input is hard texture, get hard chocopie", () => {
    // given
    const texture = TextureType.HARD;

    // when
    const dough = getChocoPieDough(texture);

    // then
    expect(dough.texture).toBe(TextureType.HARD);
  });
});
