import {
  getChocoPieDough,
  getChocoPieDoughByIngredient,
  getWheat,
  TextureType,
  IngredientType,
  getInsideStuff,
  getOutsideStuff,
} from "../../pie/process";

describe("unit test for each process to make choco-pie", () => {
  test("expect default getChocoPieDough function return hard and wheat base original dough", () => {
    // given
    const texture = TextureType.HARD;

    // when
    const dough = getChocoPieDough(texture);

    // then
    expect(dough.texture).toBe(TextureType.HARD);
    expect(dough.ingredient).toBe(IngredientType.WHEAT);
  });

  test("expect default getChocoPieDoughByIngredient function return hard and wheat base original dough", () => {
    // given
    const texture = TextureType.HARD;
    const getIngredientStub = () => IngredientType.OAT; // stub

    // when
    const dough = getChocoPieDoughByIngredient(texture, getIngredientStub);

    // then
    expect(dough.texture).toBe(TextureType.HARD);
    expect(dough.ingredient).toBe(IngredientType.OAT);
  });

  test("expect getInsideStuff function return marshmallow", () => {
    // when
    const inside = getInsideStuff();

    // then
    expect(inside).toBe(IngredientType.MARSHMALLOW);
  });

  test("expect getOutsideStuff function return choco", () => {
    // when
    const outside = getOutsideStuff();

    // then
    expect(outside).toBe(IngredientType.CHOCO);
  });

  test("expect getWheat function return regular wheat", () => {
    // when
    const wheat = getWheat();

    // then
    expect(wheat).toBe(IngredientType.WHEAT);
  });
});
