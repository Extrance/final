const express = require('express');
const body = require('body-parser');
const app = express();

app.get('/square' , (req,res) => {
  var s = req.query.string;
  var a = {result: string_square(s)}
  res.json(a)
})

function string_square(s) {
  try {
    var len = s.length;
    return len*len;
  }
  catch(e) {
    return -1;
  }
}

app.listen(3000 || process.env.PORT, () => console.log('App is online on port 4000'))
