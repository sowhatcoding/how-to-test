import { sum } from "../sum";

describe("sum function test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 1 - 2 to equal -1", () => {
    expect(sum(1, -2)).toBe(-1);
    // expect + matcher : 기대한대로 함수가 동작하는지 확인
    // expect : 테스트 결과값
    // matcher : 테스트 수행 결과값 확인
  });

  test("adds 1 + 2 is less than 5", () => {
    expect(sum(1, 2)).toBeLessThan(5);
    // toLessThan: 적은지
  });

  test("adds 1 + 2 is greater than 1", () => {
    expect(sum(1, 2)).toBeGreaterThan(1);
    // toGreaterThan : 많은지
  });
});
