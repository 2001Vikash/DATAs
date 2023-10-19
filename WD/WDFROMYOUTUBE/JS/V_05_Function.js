// Here, we are going to study about functions.
console.log("Here, we are going to study about functions.");
let a = 5;
// this a will not work in function, if we will pass parameters, if we are not passing parameters
// then this a will also work for the function.

function sum(a, b=0){ // here if we will not pass b then 0 will be default value.
    return a+b;
}
console.log(sum(5,4));

// we can do it like this

let funct = function(a, b){
    return a * b;// if we will return, then it will work like that, other wise work as void.
}
console.log(funct(4,5));

function arraySum(i, arr = []){ // this default value that is empty.
    let sum = 0;
      if(i == arr.length - 1){
         sum += arr[i];
         return sum;
      }

      return sum += arr[i] + arraySum(i+1, arr);
}

let arr = [1,2,3,4,5];
let ans = arraySum(0, arr);
console.log(ans);

// scoping

let scoping = 20; // this will be accessible in the block, if we are not initializing, 
// means like other lang., global things can be accessible in every where but inner things can not.

{
    let scoping = 30;
    console.log(scoping);
}
console.log(scoping);

