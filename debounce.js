function debounce(fn, delay) {
    let timer;
    return function() {
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn()
        }, delay)
    }
}

function fn() {
    console.log('fetching data...')
}

const betterFunction = debounce(fn, 300);