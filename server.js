var express = require('express');
var app = express();

app.get('/:id', function (req, res) {
  res.send(JSONDate(req.params.id));
});

app.listen(8080);

function JSONDate (DATE){
    if (Number(DATE)){
        var date=new Date (Number(DATE));
        var unix=true;
    }
    else{
         date= new Date (DATE);
         unix=false;
    }
    var months=['January','February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];
    var unixDate=date.getTime();
    var isoDate=months[date.getMonth()]+" "+date.getDate()+', '+date.getFullYear();
    var jsonDate={natural:isoDate,unixe:unixDate};
    return jsonDate;
}