const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set("strictQuery", false);


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`I AM LISTENING ON PORT ${PORT}`)
})

// oksana VrIEzPYhTK9ti2DA VrIEzPYhTK9ti2DA