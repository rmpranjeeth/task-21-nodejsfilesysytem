const express = require('express');
const fs = require('fs');
require("dotenv").config();

const app = express();

//Body parser
app.use(express.json())

//file creation
  let timeStamp = new Date()
  let dat = timeStamp.getDate();
  let month = timeStamp.getMonth();
  let year = timeStamp.getFullYear();
  let hours = timeStamp.getHours()
  let minutes = timeStamp.getMinutes()
  let seconds = timeStamp.getSeconds()
  let date = `${year}${month}${dat}`;
  let dateTime = `${date}-${hours}${minutes}${seconds}`
  
  fs.appendFile(`./Files/${dateTime}.txt`, `${timeStamp}`, function (err) {
    if (err) {
      console.log(err)
      console.log('done')
    }
  })
  
  fs.readdir('./Files', (err, files) => {
    if (err) console.log(err)
    else {
      app.get('/', function (req, res) {
        res.send(files);
      })
    }
    console.log(files)
  })


//port
const PORT=process.env.PORT || 5000  ;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

