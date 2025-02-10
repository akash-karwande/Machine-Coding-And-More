// count() 1
// count() 2
// count() 3


const counter  = (() => {
    let count = 0;
     function inner() {
        count++;
        return count
    }
    inner.reset = function() {
        count = 0
    }
    return inner
})()

console.log(counter)

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter.reset())
console.log(counter())
