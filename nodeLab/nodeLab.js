

const express = require('express');

const app = express();
app.use(express.json());


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

app.get('/', (request, response)=>{   
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

app.post("/posts", (req, res) => {
  const newPost = {
    id: data.length + 1,
    title: req.body.title,
    content: req.body.content,
    comments: []   
  };

  console.log(`adding this new post ${JSON.stringify(newPost)}`);
  data.push(newPost);

  res.status(201).json(newPost);
});




app.get("/posts/:id/comments", (req, res) => {
  const id = parseInt(req.params.id);
  const post = data.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post.comments);
});


app.post("/posts/:id/comments", (req, res) => {
  const id = parseInt(req.params.id);
  const post = data.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  post.comments.push({
    id: post.comments.length + 1,
    content: req.body.content
  });

  res.status(201).json(post.comments);
});


app.listen(3000);
