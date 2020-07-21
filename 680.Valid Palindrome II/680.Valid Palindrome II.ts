 function validPalindrome(s: string): boolean {
     if (s.length <= 1) {
         return true;
     }

     function isPalindrome (left: number, right: number): boolean {
         while (left < right) {
             if (s[left] !== s[right]) {
                 return false;
             }

             left++;
             right--;

         }

         return true;
     }

     let left: number = 0;
     let right: number = s.length - 1;

     while (left < right) {
         if (s[left] !== s[right]) {
             const skip: boolean = isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
             return skip;
         }

         left++;
         right--;

     }

     return true;
 }
