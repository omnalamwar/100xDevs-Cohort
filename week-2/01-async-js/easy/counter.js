let i = 0;
// setInterval(()=>{
//     i += 1;
//     console.log(i);
// }, 1000);


const timer = () =>{
    i++;
    console.log(i);
    setTimeout(timer, 1000);
}
timer();