var fs = require('fs');
var path = require('path');
const { isBuffer } = require('util');

// // reading file

// // var file = path.join('./docs', 'blog.txt');

// fs.readFile('./docs/new.txt', 'utf8',  (err, data) =>{
//     if(err) throw err;
//     console.log(data);
// }
// );  

// // Append file

// fs.appendFile('/docs/blog.txt', 'Hello World', (err) =>{
//     if(err) throw err;
//     console.log('File written successfully');
// }
// );

// // Write File

fs.writeFile('/docs/blog.txt', 'Hello World', (err) =>{
    if(err) throw err;
    console.log('File updated successfully');
}
);

// // Rename File

fs.rename('./docs/blog.txt','./docs/new.txt',(err) =>{
    if(err) throw err;
    console.log('File renamed successfully');
}
);


// fs.mkdir('./newFOLDER',(err)=>{
//     if(err) throw err;
//     console.log('Folder created successfully');
// })

// fs.rmdir('./newFOLDER',(err)=>{
//     if(err) throw err;
//     console.log('Folder removed successfully');
// }
// );

// fs.unlink('./docs/delete.txt',(err)=>{
//     if(err) throw err;
//     console.log('File deleted successfully');
// })