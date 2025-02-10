// 1 map polyfill

var numArr = [1, 2, 3, 4];
// numArr.map((num, index, arr)=> {})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let res = numArr.myMap((num) => {
  return num * 2;
});
// console.log(res);

// 2 filter polyfill

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

// let filteredArr = numArr.filter((num) => {
//     return num > 2
// });
let filteredArr = numArr.myFilter((num) => {
  return num > 2;
});
// console.log(filteredArr)

// 3 reduce polyfill

// let sumArr = numArr.reduce((acc, num, i, arr)=>{
//     return acc+= num
// },0)
// console.log(sumArr);

Array.prototype.myReduce = function (cd, initialVal) {
  var accumulator = initialVal;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cd(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

let sumArr = numArr.myReduce((acc, num, i, arr) => {
  return (acc += num);
}, 0);
// console.log(sumArr);

// call polyfill

let obj1 = {
    name: 'Akash',
    printName: function(last, city){
        // console.log(last)
        return this.name + ' ' + last + ' from ' + city
    }
}

let obj2 = {
    name: 'Ridu',
    printName: function(last, city){
        // console.log(last)
        return this.name + ' ' + last + ' from ' + city
    }
}

Function.prototype.myCall = function(obj={}, ...args) {
    if(typeof this !== 'function') {
        throw new Error(`${this} is not callable`);
    }
    obj.fn = this;
    obj.fn(...args);
}

// obj1.printName.call(obj2, 'Karwande', 'basmat')
// obj1.printName.myCall(obj2, 'Karwande', 'basmat')

// apply polyfill

Function.prototype.myApply = function(obj={}, args=[]) {
    if(typeof this !== 'function') {
        throw new Error(`${this} is not callable`);
    }

   if(!Array.isArray(args)) {
    throw new Error(this, 'args should be array')
   }
    obj.fn = this;
    obj.fn(...args);
}
// obj1.printName.myApply(obj2, ['Karwande', 'basmat'])

// bind polyfill

Function.prototype.myBind = function(obj={}, ...args) {
    if(typeof this !== 'function') {
        throw new Error(`${this} is not callable`);
    }
    obj.fn = this;
   return function(...nextArgs) {
    return obj.fn(...args, ...nextArgs)
   }
}

let resultFn = obj1.printName.myBind(obj2, 'Karwande', 'basmat');
console.log('118',resultFn())