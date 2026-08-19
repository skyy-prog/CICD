import express from 'express'
const app = express();
const port = 8080;  
app.get("/", (req, res) => {
    return res.json({ success: "hello world" });
});

app.listen(port, '0.0.0.0', () => console.log(`Server listening on port ${port}`));
//              