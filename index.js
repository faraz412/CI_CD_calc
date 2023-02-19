// index.js

//  import the crypto module
const crypto=require('crypto');


//  get a commands using process.argv
let cmd=process.argv;
const operation=cmd[2];
const num1=Number(cmd[3]);
const num2=Number(cmd[4]);

// complete the  function



switch (operation) {
  case "add":
    console.log(num1+num2);
    break;
  case "sub":
    console.log(num1-num2);
    break;
  case "mult":
    console.log(num1*num2);
    break;
  case "divide":
    console.log(num1/num2);
    break;
  case "sin":
    console.log(Math.sin(num1));
    break;
  case "cos":
    console.log(Math.cos(num1));
    break;
  case "tan":
    console.log(Math.tan(num1));
    break;
  case "random":
    if(num1){
      console.log(Math.floor(Math.random()*num1*10));
    }else if(!num1){
      console.log("Provide length for random number generation.")
    }
    break;                             
  default:
    console.log("Invalid operation");
}
