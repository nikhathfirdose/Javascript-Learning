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
    console.log(a + b);
  };
  second();
};

first();
