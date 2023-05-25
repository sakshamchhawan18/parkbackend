const express = require('express')
var cookies = require("cookie-parser");
const app= express();
const sequelize = require('./utils/db')
const {ParkingSpotModel} = require("./models/parkingSpot");
sequelize.sync(
    {force:true}
)
.then(async result => {
   
    for (let i = 0; i < 10; i++) {
        await ParkingSpotModel.create({
            name: `parking spot name ${i}`,
            address: `parking spot address ${i}`
        })
    }
})
const PORT = 3000
app.use(express.json())
app.use(cookies())
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')

app.use(require('./routes/webRoutes/screens'));
require("./utils/allRoutes")(app);

app.listen(PORT,()=>{
    console.log(`Live on http://localhost:${PORT}`)
});