let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // Output ? 1
  }
  console.log(count); // Output? 0
})();

function createBase(baseNumber) {
  return function (N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  };
}

var addSix = createBase(6);
addSix(10);
addSix(21);

//   5.How do you optimise time using closures?

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  console.log(a[index]);
}

console.time("6");
find(6); // this takes 37ms
console.timeEnd("6");
console.time("12");
find(12); // this takes 135ms
console.timeEnd("12");

// Solution :

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6); // this takes 0.25 ms
console.timeEnd("6");
console.time("12");
closure(12); // this takes 0.025ms
console.timeEnd("12");


// What will be the output for the following?

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged? 333
  }, 1000);
}

// solution with let keyword
for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? 123
    }, 1000);
  }

  // // solution without let keyword or with closure

  for (var i = 0; i < 3; i++) {
    function closeure(i) {
        setTimeout(function log() {
            console.log(i); // What is logged? 123
          }, 1000);
    }

    closeure(i)
  }

  //7. How would you use a closure to create a private counter?

function counterFn () {
    let _counter = 0;

    function add(num) {
        _counter+= num

    }
    function sub(num) {
        _counter-= num

    }
    function get() {
        return _counter
    }

    return { add, get, sub}
}

let counter = counterFn();

counter.add(5);
counter.sub(1)
counter.get() // 4


// What is module pattern?

var Module = (function() {
    function privateMethod() {
        // do something
    }

    return {
        publicMethod: function() {
            // can call privateMethod();
        }
    };
})();

Module.publicMethod(); // works
Module.privateMethod(); // Uncaught ReferenceError: privateMethod is not defined


// Rewrite the function in such a way the output gets printed 
// once even though the function is called multiple times.

function once() {
    let called = 0;
    return function() {
        if(called > 0) {
            console.log("Already Subscribed");
        } else {
            console.log('Subscribed');
            called++
        }
    }
}

let isSubscribed = once();
isSubscribed(); // Subscribed
isSubscribed(); // Already Subscribed
isSubscribed(); // Already Subscribed
