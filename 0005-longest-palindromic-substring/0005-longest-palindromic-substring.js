var longestPalindrome = function(s) {
    let t = '#' + s.split('').join('#') + '#';
    let n = t.length, p = Array(n).fill(0), center = 0, right = 0;
    let maxLen = 0, maxCenter = 0;
    
    for (let i = 0; i < n; i++) {
        p[i] = (right > i) ? Math.min(right - i, p[2 * center - i]) : 0;
        
        while (i - p[i] - 1 >= 0 && i + p[i] + 1 < n && 
               t[i - p[i] - 1] === t[i + p[i] + 1]) {
            p[i]++;
        }
        
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }
        
        if (p[i] > maxLen) {
            maxLen = p[i];
            maxCenter = i;
        }
    }
    
    let start = Math.floor((maxCenter - maxLen) / 2);
    return s.substring(start, start + maxLen);
};