const fs = require('fs');

// const readOperation = async() =>{
//     // const ans = await fs.readFile('./a.txt');
//     const ans = await fs.readFile('./a.txt', "utf-8");
    
//     // let a = 0;
//     // for(let i = 0; i < 100000000000; i++){
//     //     a += i;    
//     // }
//     console.log(ans);
// }

// readOperation();

const writeOperation =async()=>{
    await fs.writeFile('./a.txt', "Hey this is new line that is being added to the a.txt", (err)=>{
        if(err)
            console.log(err);

        
        }
    );

    console.log("Operation done successfully");
}

writeOperation();