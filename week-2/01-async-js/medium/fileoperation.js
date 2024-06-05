const fs = require('fs');

let str;
const readAndClearFileThenWrite =async()=>{
    str = fs.readFileSync('./a.txt', "utf-8");
    const result = fs.truncate('./a.txt', 0, (err)=>console.log());
    console.log(str);

    await fs.writeFile('./a.txt', str);

    console.log("Operation successful");
}

readAndClearFileThenWrite();