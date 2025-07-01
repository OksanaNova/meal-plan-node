const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');

require('dotenv').config();

mongoose.set("strictQuery", false);


const PORT = 4000 || process.env.port

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log(`I AM LISTENING ON PORT ${PORT}`)
})

// oksana VrIEzPYhTK9ti2DA 

// mongodb+srv://oksana:<db_password>@cluster0.fyb72nt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0