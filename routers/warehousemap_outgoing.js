const a0_0x10ff51=a0_0x1017;function a0_0x1017(_0x4e2010,_0x493b10){const _0x48b59a=a0_0x48b5();return a0_0x1017=function(_0x1017e1,_0x59ec55){_0x1017e1=_0x1017e1-0x8e;let _0x245246=_0x48b59a[_0x1017e1];return _0x245246;},a0_0x1017(_0x4e2010,_0x493b10);}(function(_0x4b73ac,_0x5ba858){const _0x555d1a=a0_0x1017,_0x19d6b0=_0x4b73ac();while(!![]){try{const _0x7bda60=parseInt(_0x555d1a(0xa8))/0x1+parseInt(_0x555d1a(0x97))/0x2+parseInt(_0x555d1a(0x94))/0x3+-parseInt(_0x555d1a(0x8f))/0x4*(parseInt(_0x555d1a(0xad))/0x5)+-parseInt(_0x555d1a(0x9f))/0x6*(-parseInt(_0x555d1a(0xa4))/0x7)+-parseInt(_0x555d1a(0xb0))/0x8*(parseInt(_0x555d1a(0x9d))/0x9)+-parseInt(_0x555d1a(0x8e))/0xa*(parseInt(_0x555d1a(0xb3))/0xb);if(_0x7bda60===_0x5ba858)break;else _0x19d6b0['push'](_0x19d6b0['shift']());}catch(_0x4ed68f){_0x19d6b0['push'](_0x19d6b0['shift']());}}}(a0_0x48b5,0x539a5));const express=require(a0_0x10ff51(0x90)),app=express(),router=express[a0_0x10ff51(0xa5)](),multer=require(a0_0x10ff51(0xae)),{profile,master_shop,email_settings}=require(a0_0x10ff51(0xb1)),auth=require('../middleware/auth');var timezones=require(a0_0x10ff51(0x93));const users=require(a0_0x10ff51(0xb5));router[a0_0x10ff51(0xb2)](a0_0x10ff51(0xa3),auth,async(_0x335d91,_0x5ef7b2)=>{const _0x19a08c=a0_0x10ff51;try{const {username:_0x4c7b77,email:_0x433fd9,role:_0x5b0994}=_0x335d91[_0x19a08c(0xaf)],_0x5f098e=_0x335d91['user'],_0xa0a0f6=await profile[_0x19a08c(0xa7)]({'email':_0x5f098e[_0x19a08c(0x9c)]}),_0x1f4bd4=await master_shop['find']();console[_0x19a08c(0xa9)](_0x19a08c(0x95),_0x1f4bd4);const _0x1b79b0=new Date()['toLocaleString'](_0x19a08c(0x9b),{'timeZone':_0x1f4bd4[0x0][_0x19a08c(0x92)]});console[_0x19a08c(0xa9)](_0x19a08c(0x92),_0x1b79b0);if(_0x1f4bd4[0x0]['language']==_0x19a08c(0xaa)){var _0x33b87c=users['English'];console[_0x19a08c(0xa9)](_0x33b87c);}else{if(_0x1f4bd4[0x0][_0x19a08c(0x91)]==_0x19a08c(0xa2))var _0x33b87c=users[_0x19a08c(0xa2)];else{if(_0x1f4bd4[0x0][_0x19a08c(0x91)]==_0x19a08c(0x9e))var _0x33b87c=users[_0x19a08c(0x9e)];else{if(_0x1f4bd4[0x0][_0x19a08c(0x91)]==_0x19a08c(0x9a))var _0x33b87c=users[_0x19a08c(0x9a)];else{if(_0x1f4bd4[0x0][_0x19a08c(0x91)]==_0x19a08c(0xab))var _0x33b87c=users[_0x19a08c(0xab)];else{if(_0x1f4bd4[0x0][_0x19a08c(0x91)]=='Portuguese\x20(BR)')var _0x33b87c=users[_0x19a08c(0xa1)];else{if(_0x1f4bd4[0x0]['language']==_0x19a08c(0xac))var _0x33b87c=users[_0x19a08c(0xac)];else{if(_0x1f4bd4[0x0]['language']==_0x19a08c(0xa0))var _0x33b87c=users[_0x19a08c(0xa6)];}}}}}}}_0x5ef7b2['render'](_0x19a08c(0xb4),{'success':_0x335d91[_0x19a08c(0x99)](_0x19a08c(0x98)),'errors':_0x335d91[_0x19a08c(0x99)](_0x19a08c(0x96)),'role':_0x5f098e,'profile':_0xa0a0f6,'master_shop':_0x1f4bd4,'timezones':timezones,'language':_0x33b87c});}catch(_0xab4e4c){console[_0x19a08c(0xa9)](_0xab4e4c);}}),module[a0_0x10ff51(0xb6)]=router;function a0_0x48b5(){const _0xae3cbe=['multer','user','871544AYfKSG','../models/all_models','get','2365BJiSlo','warehousemap_outgoing','../public/language/languages.json','exports','61570qzWGlr','373492gBLCSj','express','language','timezone','timezones-list','1297023UkvVlH','master','errors','1023814GzvHSa','success','flash','Spanish','en-US','email','9PWfJnE','German','6YBrByz','Arabic\x20(ae)','Portuguese','Hindi','/view','2604889CCjXmw','Router','Arabic','findOne','552133fFgoRw','log','English\x20(US)','French','Chinese','5ZCHPhD'];a0_0x48b5=function(){return _0xae3cbe;};return a0_0x48b5();}