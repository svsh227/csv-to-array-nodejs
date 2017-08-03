
var express = require('express');
var app = express();
var fs=require('fs');
var fcsv = require('fast-csv');

var convertToArray=function(){
    var stream = fs.createReadStream(__dirname + "/Pincodelist.csv");
            fcsv
                .fromStream(stream, { headers: true })
                .on("data", function (data) {
                    console.log(data);
                })
                .on("end", function () {
                    console.log("done");
                });

}
convertToArray();

var server=app.listen(3000,function(){
    console.log("Running on port : "+ server.address().port);
});
