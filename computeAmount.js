const calculator = () => {
    let total = 0;
    function lacs(amt) {
      total = total + amt * 100000;
      return this;
    }
  
    function thousand(amt) {
      total = total + amt * 1000;
      return this
    }
  
    function hundred(amt) {
      total = total + amt * 100;
      return this
    }
  
    function value() {
      return total;
    }
    return { lacs, value, hundred, thousand };
  };
  
  let result = calculator().lacs(1).thousand(2).hundred(4).value();
  console.log(result);