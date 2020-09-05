function Apple(z, x) {
  this.z = z;
  this.x = x;
  this.eat = function () {
    return "eat";
  };
  this.throw = () => {
    return "throw";
  };
}

var obj = new Apple("l", "p");
var obj2 = new Apple("a", "b");
