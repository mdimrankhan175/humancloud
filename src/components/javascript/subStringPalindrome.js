function longestPalindrome(str) {
    if (!str || str.length === 0) return "";

    const substrings = [];
    const palindromes = [];

    // Generate all possible substrings
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.substring(i, j));
        }
    }

    // Check each substring for palindrome property
    for (let substring of substrings) {
        if (isPalindrome(substring)) {
            palindromes.push(substring);
        }
    }

    // Find the longest palindrome
    let longest = "";
    for (let palindrome of palindromes) {
        if (palindrome.length > longest.length) {
            longest = palindrome;
        }
    }

    return longest;
}

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

const str = "babad";
console.log(longestPalindrome(str));
