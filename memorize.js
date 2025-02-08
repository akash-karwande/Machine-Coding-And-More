// Memorize function

const memorize = (fn) => {
    let cacheResult = {}
    return function(...args) {
        let key= [...args].join('');
        if(cacheResult[key]) {
            console.log('cached val', cacheResult)
            return cacheResult[key]
        } else {
            let res = fn(...args);
            cacheResult[key] = res;
            return res;
        }
    }

}

const addNum = (...arr) => {
   return arr.reduce((ele, acc) => {
        acc = ele + acc;
        return acc
    }, 0)
}

let add = memorize(addNum)
// console.time()
console.log('1st',add(1,2,1,2));
console.time()
console.log('2nd',add(1,2,1,2));
console.timeEnd()