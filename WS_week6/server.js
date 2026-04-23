var express = require("express")
const path = require('path');
var app = express()
var port = process.env.port || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Addition of two numbers
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)){
        return res.status(400).json({ error: 'Please provide valid numbers' });
    }
    res.json({ result: a + b });
});

// Subtract two numbers
app.get('/subtract', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)){
        return res.status(400).json({ error: 'Please provide valid numbers' });
    }
    res.json({ result: a - b });
});

// Multiply two numbers
app.get('/multiply', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)){
        return res.status(400).json({ error: 'Please provide valid numbers' });
    }

    res.json({ result: a * b });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
