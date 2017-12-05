var express = require('express');
var router = express.Router();
var schema = {
  "type":"object",
  "properties" : {
    "$schema": {
      "type":"string"
    },
    "id":{
      "type":"string"
    },
    "title":{
      "type":"string"
    },
    "type":{
      "type":"string"
    }
  },
  "required":["$schema","$id","title","type"]
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ex-4',
    { title: 'Aufgabe 4',
      description: 'Die Aufgabe besteht nun darin, ein gültiges Json-Schema zu definieren. Zum Einstieg genügt es, ' +
      'ein Schema mit den vier Bestandteilen Schema-Definition ($schema), der Id ($id), dem Titel und dem Typ ' +
      'zu definieren.',
      schema: schema
    });
});

module.exports = router;
