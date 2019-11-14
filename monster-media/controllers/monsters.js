const express = require('express'),
      router = express.Router(),
      monsters = require("../models/monster");

router.get("/",(req,res)=>{
    const monsterNames = monsters.getMonsterNames();
    res.render("monsters", {monsterNames: monsterNames})
});

router.get("/:name",(req,res)=>{
    const monsterInfo = monsters
          .getMonsterInfo(req.params.name);
          console.log('monsterInfo:');
          console.log(monsterInfo);
          if(monsterInfo){
              res.render('monster',monsterInfo);
          }else{
              console.log('no info found for monster' + req.params.name);
          }
});

module.exports = router;