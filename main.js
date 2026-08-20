import express from 'express' 
const app = express();
const port = 8080;  
app.get("/", (req, res) => {
    return res.json({ success: "hello world v1 and v2 after CICD" });
});

app.listen(port, '0.0.0.0', () => console.log(`Server listening on port ${port}`));
