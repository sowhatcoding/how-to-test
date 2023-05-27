import { orderChocoPie } from "../../../order/cowork/me";

// Dummy
function saveMoneyDummy(totalPrice: number) {}

function makeChocoPieErrorStub() {
  const isFactoryWorking = false;
  if (isFactoryWorking === false) {
    throw new Error();
  }

  return { size: "regular" };
}

test("[stub] enough money to buy, but choco pie factory is not working, return all money and no chocopie", () => {
  // given
  const count = 5;
  const money = 3000;

  const param = {
    count,
    money,
    saveMoney: saveMoneyDummy,
    makeChocoPie: makeChocoPieErrorStub,
  };

  // when
  const result = orderChocoPie(param);
  const { chocoPies, change } = result;

  // then
  expect(chocoPies.length).toBe(0);
  expect(change).toBe(money);
});

test("[stub] not enough money to buy, return all money and no chocopie", () => {
  // given
  const count = 5;
  const money = 2000;

  const param = {
    count,
    money,
    saveMoney: saveMoneyDummy,
    makeChocoPie: makeChocoPieErrorStub,
  };

  // when
  const result = orderChocoPie(param);
  const { chocoPies, change } = result;

  // then
  expect(chocoPies.length).toBe(0);
  expect(change).toBe(money);
});
