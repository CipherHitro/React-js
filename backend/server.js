import express from 'express';

const app = express();

app.get('/',(req,res) =>{
    res.send("Server is ready");
});

const port = process.env.PORT || 3000;

app.get('/api/jokes',(req, res) => {
    const jokes = [
        {
            id:1,
            title:"Why did the scarecrow win an award? Because he was outstanding in his field!",
        },
        {
            id:2,
            title:"Why don't skeletons fight each other? They don't have the guts.",
        },
        {
            id:3,
            title:"I ate a clock yesterday, it was very time-consuming.",
        },
    ]
    res.send(jokes);
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});