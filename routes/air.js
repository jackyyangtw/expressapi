var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();
/* GET users listing. */
router.get('/', function(req, res, next) {
    let queries=req.query
    console.log('query: ', queries);
    let url='http://opendata.epa.gov.tw/webapi/api/rest/datastore/355000000I-000259'
    var options = {
        host: url,
        method: 'GET'
      };
    //rest-client抓完資料的callback，用json方式回傳了Open API 回傳的結果
    client.get(url, function (data, response) { 
        res.json({...data})
    });
});
module.exports = router;