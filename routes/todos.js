var express = require('express');
var router = express.Router();
let dataStore = [];
let indexCounter = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(dataStore);
});

/* GET single user Listing */
router.get('/:id', function(req, res, next) {
  if(req.params){
    if(req.params['id']){
      var foundEle = dataStore.filter((singleRecord)=>{
        if(singleRecord.id==req.params['id']){
          return singleRecord;
        }
      });
      res.send(foundEle);
    }
    
  }else{
    res.send('Id not sent');
  }
});

router.post('/', function(req, res, next) {

  let title = req.body.title;
  let desc = req.body.description;

  if(title){
    indexCounter++;
    dataStore.push({'id':indexCounter,'title':title,'desc':desc});
    res.send('Data Inserted:'+indexCounter);
  }else{
    res.send('Not Inserted');
  }
});


router.delete('/:id',function(req,res,next){

  if(req.params){
    if(req.params['id']){
      dataStore = dataStore.filter((singleRecord)=>{
        if(singleRecord.id!=req.params['id']){
          return singleRecord;
        }
      });
      res.send(dataStore);
    }
    
  }else{
    res.send('Id not sent');
  }
})
module.exports = router;
