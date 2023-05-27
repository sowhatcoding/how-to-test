import { orderChocoPie } from "../../../order/cowork/me";

test("[mock] enough money to buy, but choco pie factory is not working, return all money and no chocopie", () => {
  // given
  const count = 5;
  const money = 3000;

  const makeChocoPieMock = jest.fn();
  makeChocoPieMock.mockImplementation(() => {
    const isFactoryWorking = false;
    if (isFactoryWorking === false) {
      throw new Error();
    }

    return { size: "regular" };
  });

  const saveMoneyMock = jest.fn();
  saveMoneyMock.mockImplementation((totalPrice: number) => {});

  const param = {
    count,
    money,
    saveMoney: saveMoneyMock,
    makeChocoPie: makeChocoPieMock,
  };

  // when
  const result = orderChocoPie(param);
  const { chocoPies, change } = result;

  // then
  expect(makeChocoPieMock).toHaveBeenCalled();
  expect(saveMoneyMock).toHaveBeenCalledTimes(0);
  expect(chocoPies.length).toBe(0);
  expect(change).toBe(money);
});

test("[mock] not enough money to buy, return all money and no chocopie", () => {
  // given
  const count = 5;
  const money = 2000;

  const makeChocoPieMock = jest.fn(() => {
    const isFactoryWorking = false;
    if (isFactoryWorking === false) {
      throw new Error();
    }

    return { size: "regular" };
  });

  const saveMoneyMock = jest.fn((totalPrice: number) => {});

  const param = {
    count,
    money,
    saveMoney: saveMoneyMock,
    makeChocoPie: makeChocoPieMock,
  };

  // when
  const result = orderChocoPie(param);
  const { chocoPies, change } = result;

  // then
  expect(makeChocoPieMock).toHaveBeenCalledTimes(0);
  expect(saveMoneyMock).toHaveBeenCalledTimes(0);
  expect(chocoPies.length).toBe(0);
  expect(change).toBe(money);
});

test("[mock] enough money to buy, return change and ordered chocopie", () => {
  // given
  const count = 5;
  const money = 3000;

  const makeChocoPieMock = jest.fn(() => {
    return { size: "regular" };
  });

  const saveMoneyMock = jest.fn((totalPrice: number) => {});

  const param = {
    count,
    money,
    saveMoney: saveMoneyMock,
    makeChocoPie: makeChocoPieMock,
  };

  // when
  const result = orderChocoPie(param);
  const { chocoPies, change } = result;

  // then
  expect(makeChocoPieMock).toHaveBeenCalled();
  expect(saveMoneyMock).toHaveBeenCalled();
  expect(chocoPies.length).toBe(count);
  expect(change).toBe(money - count * 500);
});
