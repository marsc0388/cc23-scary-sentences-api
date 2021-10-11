const express = require('express');

const app = express();

const PORT = 5000 || process.env.PORT;
app.listen(5000., () => {
    console.log(`Server Running at https://localhost:${PORT}`)
})