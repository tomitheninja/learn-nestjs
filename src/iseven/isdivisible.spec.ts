import { IsDivisible, DivisorIsNotAPositiveInteger } from './isdivisible';

describe('IsDivisible', () => {
  it('Should construct with 2', () => {
    expect(() => new IsDivisible(2)).not.toThrow();
  });

  it('Should not construct with negative numbers', () => {
    expect(() => new IsDivisible(-5)).toThrowError(
      DivisorIsNotAPositiveInteger,
    );
  });

  it('Should not construct with fractions', () => {
    expect(() => new IsDivisible(0.5)).toThrowError(
      DivisorIsNotAPositiveInteger,
    );
  });

  it("Can't divide by fractions", () => {
    const divisor = new IsDivisible(1);
    expect(divisor.canDivide(0.5)).toBe(false);
    expect(divisor.canDivide(-2.4)).toBe(false);
    expect(divisor.canDivide(Math.PI)).toBe(false);
  });

  it('Everything is divisible by one', () => {
    const divisor = new IsDivisible(1);
    expect(divisor.canDivide(1)).toBe(true);
    expect(divisor.canDivide(2)).toBe(true);
    expect(divisor.canDivide(3)).toBe(true);
    expect(divisor.canDivide(7)).toBe(true);
  });

  it('Even numbers', () => {
    const divisor = new IsDivisible(2);
    expect(divisor.canDivide(1)).toBe(false);
    expect(divisor.canDivide(2)).toBe(true);
    expect(divisor.canDivide(3)).toBe(false);
    expect(divisor.canDivide(10)).toBe(true);
  });
});
