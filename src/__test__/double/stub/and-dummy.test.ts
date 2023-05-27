import { orderChocoPie } from "../../../order/cowork/me";

// Dummy
function saveMoneyDummy(totalPrice: number) {}

// Stub
function makeChocoPieStub() {
  return { size: "regular" };
}

test("[dummy, stub] enough money to buy, return change and ordered chocopie", () => {
  // given
  const count = 5;
  const money = 3000;

  const param = {
    count,
    money,
    saveMoney: saveMoneyDummy,
    makeChocoPie: makeChocoPieStub,
  };

  // when
  const result = orderChocoPie(param);
  const { chocoPies, change } = result;

  // then
  expect(chocoPies.length).toBe(count);
  expect(change).toBe(money - count * 500);
});

test("[dummy, stub] not enough money to buy, return all money and no chocopie", () => {
  // given
  const count = 5;
  const money = 2000;

  const param = {
    count,
    money,
    saveMoney: saveMoneyDummy,
    makeChocoPie: makeChocoPieStub,
  };

  // when
  const result = orderChocoPie(param);
  const { chocoPies, change } = result;

  // then
  expect(chocoPies.length).toBe(0);
  expect(change).toBe(money);
});
