const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000;
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
})
console.log(port)
app.listen(port, () => console.log(`Listening on port ${port}`))
