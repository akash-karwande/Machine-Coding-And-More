// sum()(2)(4)...() --> 6

function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

let res = sum(3)(2)(4)();

// console.log(res)

// console.log(compute(1, 1, 1));



// Write a function curry() that converts f(a,b,c) into a curried function
// f(a)(b)(c) with placeholder ( _ ) support.

function curry(fn) {
    return function curriedFunc(...args) {
        if(args.length >=  fn.length) {
            return fn(...args)
        } else {
            return function(...next) {
                return curriedFunc(...args, ...next)
            }
        }
    }
}

const numSum = (a, b, c, d) => a + b + c + d;

let totalSum = curry(numSum)

console.log(totalSum(1)(2)(3)(4));