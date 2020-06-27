function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let i: number = 0, j:number = 0, maxLength:number = 0;

    if (s.length === 0) {
        return 0;
    } 
    
    for (i; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            maxLength = Math.max(maxLength, set.size);
        } else {
            while (set.has(s[i])) {
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
        }
    }

    return maxLength;
};