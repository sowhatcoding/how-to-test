interface IOrderParam {
  count: number;
  money: number;
  saveMoney: (totalPrice: number) => void;
  makeChocoPie: () => object;
}

interface IOrderResult {
  chocoPies: object[];
  change: number;
}

function orderChocoPie(param: IOrderParam): IOrderResult {
  const { count, money, saveMoney, makeChocoPie } = param;
  const chocoPiePrice = 500;
  const totalPrice = count * chocoPiePrice;

  if (totalPrice > money) {
    return {
      chocoPies: [],
      change: money,
    };
  }

  const pies = [];

  try {
    for (let i = 0; i < count; i++) {
      const pie = makeChocoPie();
      pies.push(pie);
    }
  } catch (error) {
    // console.log(error);
    return {
      chocoPies: [],
      change: money,
    };
  }

  saveMoney(totalPrice);

  return {
    chocoPies: pies,
    change: money - totalPrice,
  };
}

export { orderChocoPie };
