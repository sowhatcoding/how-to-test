import { orderChocoPie } from "../../order/cowork/me";

test.skip("[without test double] enough money to buy, return change and ordered chocopie", () => {
  // given
  const count = 5;
  const money = 3000;

  const param = { count, money };

  // when
  // const result = orderChocoPie(param);

  // then
});

test.skip("[without test double] not enough money to buy, return all money and no chocopie", () => {
  // given
  const count = 5;
  const money = 2000;

  const param = { count, money };

  // when
  // const result = orderChocoPie(param);

  // then
});
