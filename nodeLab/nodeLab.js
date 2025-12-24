// const fs = require("fs");

// const data= fs.readFileSync("example.txt", "utf-8");
// //blocking 
// console.log(data)

const express = require('express');

const app = express();



const items=[]
const posts=[]

const data=[
    {
        id:1,
        title:"first post",
        content:"this is my first post",
        comments:[
            {
            id:1,
            content:"first comment"
            }
        ]
    },
    {
        id:2,
        title:"second post",    
        content:"this is my second post",
        comments:[
            {
            id:1,
            content:"second comment"    
            }
        ]
    }
]

app.get('/', (request, response)=>{   //when you receive a get request on the root path, respond with "hello world"
    response.send("hello world")
})

app.post("/items",(req,res)=>{
    items.push(req.body)
    console.log(items);
    res.end()
})

app.get("/posts",(req,res)=>{
    res.json(data);
})

app.post("/posts", (req, res)=>{
    // const newPost= req.body;

    const newPost ={
        id: posts.length + 1,
        title: req.body['title'],
        content: req.body['content']
    }
    console.log(`adding this new post ${JSON.stringify(post)}`)
    posts.push(newPost);
    res.status(201);
    res.end();



})




app.get("/posts/:id/comments",(req,res)=>{

    const id = parseInt(req.params.id);
    const post = posts[id];
    const comments=post['comments'];
    res.json(comments);
    
})

app.post("/posts/:id/comments",(req,res)=>{
    const id = parseInt(req.params.id);
    const post = posts[id];
    const comment=req.body
    post['comments'].push(comment);
})

app.listen(3000);
