function Apple(z, x) {
  this.z = z;
  this.x = x;
  this.eat = function () {
    return "eat it ";
  };
  this.throw = () => {
    return "throw";
  };
}

var obj = new Apple("l", "p");
var obj2 = new Apple("a", "b");
// console.log(obj.eat());

first = () => {
  a = "first";
  console.log(a);
  second = () => {
    b = "inside";
    console.log(`${a}   ${b}`);
  };
  return second();
};

function average() {
  let s1 = prompt("Enter Math marks:");
  let s2 = prompt("Enter Physics marks:");
  let s3 = prompt("Enter Chemistry marks:");
  avg = (parseInt(s1) + parseInt(s2) + parseInt(s3)) / 3;
  if (avg < 70) {
    Grade = "C";
  } else if (avg > 70 && avg < 90) {
    Grade = "B";
  } else {
    Grade = "A";
  }
  return Grade;
}
document.write(average());
