// const timer =()=>{
//     const date = new Date();
//     const HH = date.getHours();
//     const MM = date.getMinutes();
//     const SS = date.getSeconds();
//     const extension = date.getTimezoneOffset();
//     console.log(HH, ":", MM, ":", SS, extension);

//     setTimeout(timer, 1000);
// }

// timer();

setInterval(()=>{
    const date = new Date();
    const HH = date.getHours();
    const MM = date.getMinutes();
    const SS = date.getSeconds();
    const extension = (HH >= 12)? "PM": "AM";
    console.log(HH, ":", MM, ":", SS, extension);
}, 1000);