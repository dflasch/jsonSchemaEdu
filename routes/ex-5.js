var express = require('express');
var router = express.Router();

var schemaRefs = {
  "artist_description": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "enum": ["string"]
      },
      "founded_in":{
        "type": "string",
        "enum":["number","integer"]
      },
      "biography":{
        "type":"string",
        "enum":["string"]
      }
    },
    "required":["name","founded_in","biography"]
  }
};

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
    },
    "properties": { "$ref": "artist_description" }
  },
  "required":["$schema","$id","title","type","properties"]
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ex-5',
    { title: 'Aufgabe 5',
      description: 'Das Schema aus Aufgabe 4 soll nun erweitert werden. Ziel dieser Aufgabe ist es, einen Künstler/Band ' +
      'zu beschreiben. Es soll mindestens der Name des Künstlers/Band ("name"), das Gründungsjahr "founded_in", und eine Biographie ("biography") angegeben ' +
      'werden. Darüber hinaus sind wieder die Felder mit Meta-Informationen $schema, $id, title und type nötig. Eine gültige' +
      'Json-Datei könnte z.B. folgendermaßen aussehen:',
      schema:schema,
      schemaRefs:schemaRefs
    });
});

module.exports = router;
