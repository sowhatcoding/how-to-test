import { orderChocoPie } from "../../../order/self";
import { makeChocoPie, saveMoney } from "../../../order/self/dependency";

jest.mock("../../../order/self/dependency");

test("enough money to buy, return change and ordered chocopie", () => {
  // given
  const count = 5;
  const money = 3000;

  const param = {
    count,
    money,
  };

  // @ts-ignore
  makeChocoPie.mockReturnValue({ size: "regular" });

  // when
  const result = orderChocoPie(param);
  const { chocoPies, change } = result;

  // then
  expect(makeChocoPie).toHaveBeenCalled();
  expect(saveMoney).toHaveBeenCalled();
  expect(chocoPies.length).toBe(count);
  expect(change).toBe(money - count * 500);
});

test("not enough money to buy, return all money and no chocopie", () => {
  // given
  const count = 5;
  const money = 2000;

  const param = {
    count,
    money,
  };

  // @ts-ignore
  makeChocoPie.mockReturnValue({ size: "regular" });

  // when
  const result = orderChocoPie(param);
  const { chocoPies, change } = result;

  // then
  expect(makeChocoPie).toHaveBeenCalledTimes(0);
  expect(saveMoney).toHaveBeenCalledTimes(0);
  expect(chocoPies.length).toBe(0);
  expect(change).toBe(money);
});
