var car = {
  color: "red",
  year: "1234",
  speeed: (a = null) => {
    return `${a} is fast`;
  },
};
delete car.year;

var arr = ["string", 0, "pli"];

arr.unshift("new");

console.log(arr);
