const express=require('express');
const path=require('path');
const app=express();
const mongoose = require('mongoose');
const Blog=require('./models/blog');

const URI='mongodb://0.0.0.0:27017/note-tuts';
// const uri1='mongodb+srv://vscode:1234@cluster0.11sty.mongodb.net/crashcourse?retryWrites=true&w=majority'

mongoose.connect(URI)
.then(
    (result)=> 
    {
        console.log('DB connected')
        app.listen(80,()=>{
            console.log('Server Started on http://localhost:80');
        })

    }
)
.catch((err)=> console.log(err));

app.set('view engine','pug');

app.use(express.static('images'));

app.get('/',(req,res)=>{
    res.status(200);
    res.render('stepbystepform',{title: "EXP CRASH"});
}
);

app.get('/formvalid',(req,res)=>{
    res.status(200);
    res.render('../form-Validation/validation')
}
);

app.get('/formvalidation',(req,res)=>{
    res.redirect('/formvalid');
});

// adding 404 page
// app.get('*',(req,res)=>{
//     res.status(404);
//     res.render('404',{title: "404"});
// }
// );

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
      title: 'new blog',
      snippet: 'about my new blog',
      body: 'more about my new blog'
    })
  
    blog.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
  


