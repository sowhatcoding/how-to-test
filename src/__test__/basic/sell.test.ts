import {
  originalChocoPie,
  riceChocoPie,
  sellChocoPie,
  strawberryChocoPie,
} from "../../pie/process";

describe("unit test for sellChocoPie function", () => {
  test("customer is korean and event season, give rice chocoPie", () => {
    // given
    const isKorean = true;
    const isEvent = true;

    // when
    const pie = sellChocoPie(isKorean, isEvent);

    // then
    expect(pie).toEqual(riceChocoPie);
  });

  test("customer is korean and not event season, give original chocoPie", () => {
    // given
    const isKorean = true;
    const isEvent = false;

    // when
    const pie = sellChocoPie(isKorean, isEvent);

    // then
    expect(pie).toEqual(originalChocoPie);
  });

  test("customer is not korean, give strawberry chocoPie", () => {
    // given
    const isKorean = false;
    const isEvent = true;

    // when
    const pie = sellChocoPie(isKorean, isEvent);

    // then
    expect(pie).toEqual(strawberryChocoPie);
  });
});
