// arrChunk([1,2,3], 1) --> [[1],[2],[3]]


function arrChunk (arr, size) {
    let result = []

    for (let i = 0; i < arr.length; i= i + size) {
        result.push(arr.slice(i, i + size));
    }
    return result
}
// console.log(arrChunk([1,2,3],2))