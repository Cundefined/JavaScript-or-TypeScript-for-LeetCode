function mySqrt(x: number): number {
  if (x <= 1) {
    return x;
  }

  let left: number = 1;
  let right: number = x >> 1;

  while (left + 1 < right) {
    let mid: number = left + ((right - left) >> 1);

    if (mid === x / mid) {
      return mid;
    } else if (mid < x / mid) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (right > x / right) {
    return left;
  }
  return right;
}
