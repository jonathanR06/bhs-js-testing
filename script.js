/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 *   
 *    
 python -m http.server
* 
 */

function sleep_in(weekday,vacation){
  return (!weekday || vacation);
}

function monkey_trouble(asmile, bsmile){
  return asmile == bsmile
}

function string_times(str, n) {
  return str.repeat(n);
}


function front_times(wrd, amt) {
  let front = wrd.slice(0, 3);
  return front.repeat(amt);
}

function string_bits(lett) {
  let result = "";
  
  for (let i = 0; i < lett.length; i += 2) {
    result += lett[i];
  }
  
  return result;
}

function caughtSpeeding(speed, ticket) {
  let allowance = ticket ? 5 : 0;

  if (speed <= 60 + allowance) {
    return 0;
  } else if (speed <= 80 + allowance) {
    return 1;
  } else {
    return 2;
  }
}

function fizz_buzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n + "!";
  }
}

function specialEleven(n) {
  return n % 11 === 0 || n % 11 === 1;
}

function withoutDoubles(die1, die2, noDoubles) {
  if (noDoubles && die1 === die2) {
    die1 = (die1 === 6) ? 1 : die1 + 1;
  }
  return die1 + die2;
}

function left2(str) {
  return str.slice(2) + str.slice(0, 2);
}
