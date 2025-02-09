const input = {
    A : (a,b,c) => a+b+c,
    B : (a,b,c) => a-b-c,   
    C : (a,b,c) => a*b-c,  
    D : {E : (a,b,c) => a*b*c },   
   }
const compute = function (a, b, c) {
    const output = {};
    for (const [key, value] of Object.entries(input)) {
      output[key] =
        typeof value === 'object'
          ? Object.values(value).at(0)(a, b, c)
          : value(a, b, c);
    }
    return output;
  };