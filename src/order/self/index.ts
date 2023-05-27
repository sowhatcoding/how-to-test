import { makeChocoPie, saveMoney } from "./dependency";

interface IOrderParam {
  count: number;
  money: number;
}

interface IOrderResult {
  chocoPies: object[];
  change: number;
}

function orderChocoPie({ count, money }: IOrderParam): IOrderResult {
  const chocoPiePrice = 500;
  const totalPrice = count * chocoPiePrice;

  if (totalPrice > money) {
    return {
      chocoPies: [],
      change: money,
    };
  }

  const pies = [];

  for (let i = 0; i < count; i++) {
    const pie = makeChocoPie();
    pies.push(pie);
  }

  saveMoney(totalPrice);

  return {
    chocoPies: pies,
    change: money - totalPrice,
  };
}

export { orderChocoPie };
