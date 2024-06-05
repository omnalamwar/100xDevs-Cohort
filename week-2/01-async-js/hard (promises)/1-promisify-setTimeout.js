/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve();}, n * 1000);
    });    
    return promise;
}

wait(10).then(()=>console.log("Promise resolved after 10 seconds"));
module.exports = wait;


// function wait(n) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve();
//       }, n * 1000);
//     });
//   }
  
//   wait(5).then(() => console.log("Promise resolved after n seconds"));
  
//   module.exports = wait;