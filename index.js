const express = require("express");
const app = express();
const port = 3333;

app.use(express.static(__dirname));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/" + "exercise.html");
});

app.get("/calc", (req,res)=>{
    const display = req.query.display;
    console.log(`/calc req.query.display = ${display}`)
    let result =eval(display);
    let json_result = {
        "display": display,
        "result": result
    }
    res.send(json_result)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
