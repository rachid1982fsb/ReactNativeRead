'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('../mushaf-wbw.json');
let pages = JSON.parse(rawdata);



// const CreatePagesFiles = ()=>{
//     let lineId = 0
//     let newPages = pages.map(page =>  {
//         return page.map( line =>  {
//           lineId++
//           return {...line, lineId}
//         })
//     }
//     )
//     return newPages
// }

const CreatePagesFiles = ()=>{
    pages.forEach((page, index) => {
        console.log(JSON.stringify(page))
        fs.writeFileSync(`${index+1}.json`, JSON.stringify(page))
    })
}
CreatePagesFiles()
// let data = JSON.stringify(AddLineId());
// fs.writeFileSync('MushafLindId.json', data);

// console.log(CreatePagesFiles());


