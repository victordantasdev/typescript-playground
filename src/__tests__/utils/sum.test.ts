import { sum } from "../../utils/sum"

describe('sum', () => {
  it('should sum two numbers', () => {
    expect(sum(35, 7)).toBe(42);
  });
})
