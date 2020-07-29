class Solution {
    public int mySqrt(int x) {
        if (x <= 1) {
            return x;
          }
        
        int left = 1;
        int right = x >> 1;
        
        while (left + 1 < right) {
        int mid = left + ((right - left) >> 1);
        
        if (mid == x / mid) {
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
}