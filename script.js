const reverseString = (s) => {
  var left = 0;
  var right = s.length - 1;
  var temp = 0;

  while (left < right) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left = left + 1;
    right = right - 1;
  }
  console.log(s);
};

reverseString(["a", "f", "p"]);
