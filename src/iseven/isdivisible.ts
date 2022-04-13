export class IsDivisible {
  constructor(public readonly divisor: number) {
    if (!Number.isInteger(divisor) || divisor < 0) {
      throw new DivisorIsNotAPositiveInteger(
        'divisor must be a positive integer',
      );
    }
  }

  public canDivide(num: number): boolean {
    return num % this.divisor == 0;
  }
}

export class DivisorIsNotAPositiveInteger extends RangeError {}
