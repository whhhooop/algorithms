/**
 * @param {string} s
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
function isPalindrome(str, left = 0, right = str.length - 1) {
  let i = left;
  let j = right;
  let res = true;

  while (i <= j) {
    if (str[i] != str[j]) {
      res = false;
      break;
    }

    i++;
    j--;
  }

  return res;
}

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindromeBruteForce(s) {
  let l = 0;
  let r = 0;
  let resL = 0;
  let resR = 0;

  while (r < s.length && s.length - l - 1 > resR - resL) {
    if (r - l > resR - resL && isPalindrome(s, l, r)) {
      resL = l;
      resR = r;
    }

    r = r + 1 > s.length - 1 ? 0 : r + 1;
    l = r == 0 ? l + 1 : l;
  }

  return s.slice(resL, resR + 1);
}

/**
 * @param {string} s
 * @param {number} i
 * @param {number} j
 * @return {string}
 */
function longestPalindromeDP(s, i = 0, j = s.length - 1) {
  if (i == j) {
    return s.slice(i, j + 1);
  }

  if (s[i] == s[j] && i + 1 == j) {
    return s.slice(i, j + 1);
  }

  if (s[i] == s[j]) {
    return s[i] + longestPalindromeDP(s, i + 1, j - 1) + s[j];
  }

  const fromLeft = longestPalindromeDP(s, i + 1, j);
  const fromRight = longestPalindromeDP(s, i, j - 1);

  return fromLeft.length > fromRight.length ? fromLeft : fromRight;
}
