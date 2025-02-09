// sum()(2)(4)...() --> 6

function sum(a) {
    return function(b) {
        if(b) return sum(a+b)
            return a
    }
}

let res = sum(3)(2)(4)();

// console.log(res)
  
  console.log(compute(1,1,1))