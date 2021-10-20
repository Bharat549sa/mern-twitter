



const express =require ("express")
const app = express();
app.get("/", (req, res)=> {
    res.send("hello app")
})

const port = proccess.env.Port || 5000;

app.addEventListener(port, () => console.log('SErver is running'));