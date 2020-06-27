function longestPalindrome(s: string): string {
    if (s.length <= 1) {
        return s;
    }

    let start: number = 0;
    let maxLength: number = 1;

    function expandAroundCenter(left: number, right: number): void{
        while (left >= 0 && right <= s.length - 1 && right >= left && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }


    for (let i: number = 0; i < s.length; i++) {
        expandAroundCenter(i, i + 1);
        expandAroundCenter(i - 1, i + 1);
        }
     

     return s.substring(start, start + maxLength);
   

};