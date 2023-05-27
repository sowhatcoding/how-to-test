import { getChocoPie, originalChocoPie } from "../../pie/process";

describe("integration test using getChocoPie function", () => {
  test("expect getChocoPie function return original choco-pie", () => {
    // when
    const chocoPie = getChocoPie();

    // then
    expect(chocoPie).toEqual(originalChocoPie);
  });
});
