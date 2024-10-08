import express from "express";
const app=express();
app.use(express.json());

const port= 3000
 
let userblog=[]

app.get('/bloginfo',(req,res)=>{
    res.json(userblog)
})
app.post('/bloginfo',(req,res)=>{
const blog=req.body.blog;
const name=req.body.name
const user={blog,name}
userblog.push(user)
res.json(user)

})
app.patch('/bloginfo/:id',(req,res)=>{
    const userid= parseInt(req.params.id)
    const {blog,name}=req.body;
    const user=userblog[userid]
    user.blog=blog
    user.name=name

    res.json(user)



    });
    
    app.delete('/bloginfo/:id', (req, res) => {
        const userid = parseInt(req.params.id);
        if (userblog[userid]) {
            userblog.splice(userid, 1); 
            res.send(`blog with ID ${userid} deleted`);
            console.log(`yassss Delet ! ${userid}`)

        
        }
    });
    
    app.listen(port,()=>{
        console.log(`Example app listeningon port ${port}`)
    })