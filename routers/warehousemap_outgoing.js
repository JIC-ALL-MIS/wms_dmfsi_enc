const a0_0x196317=a0_0x297c;function a0_0x5ede(){const _0x2c9cee=['../public/language/languages.json','English\x20(US)','warehousemap_outgoing','../models/all_models','2415060ICPXkv','22648gedfwX','2LVdHrq','Spanish','render','205IwOCnX','../middleware/auth','get','Chinese','en-US','timezone','474454eMgtdi','exports','timezones-list','German','master','182280HrrYwv','toLocaleString','English','user','27714KSFOaO','findOne','French','1726848eDOjnU','Arabic','flash','Portuguese','errors','log','express','623TwRoYE','3898210aqVbrq','Portuguese\x20(BR)','multer','/view','language','Hindi'];a0_0x5ede=function(){return _0x2c9cee;};return a0_0x5ede();}(function(_0x3bb08f,_0x55abb0){const _0x5eab47=a0_0x297c,_0x3bb584=_0x3bb08f();while(!![]){try{const _0x159015=parseInt(_0x5eab47(0x9e))/0x1*(parseInt(_0x5eab47(0xa7))/0x2)+parseInt(_0x5eab47(0xac))/0x3+-parseInt(_0x5eab47(0x9d))/0x4*(parseInt(_0x5eab47(0xa1))/0x5)+parseInt(_0x5eab47(0x87))/0x6*(parseInt(_0x5eab47(0x91))/0x7)+parseInt(_0x5eab47(0x8a))/0x8+-parseInt(_0x5eab47(0x9c))/0x9+-parseInt(_0x5eab47(0x92))/0xa;if(_0x159015===_0x55abb0)break;else _0x3bb584['push'](_0x3bb584['shift']());}catch(_0x23c336){_0x3bb584['push'](_0x3bb584['shift']());}}}(a0_0x5ede,0x425f2));function a0_0x297c(_0x56c612,_0x1cadd2){const _0x5edec6=a0_0x5ede();return a0_0x297c=function(_0x297c9a,_0x55ad41){_0x297c9a=_0x297c9a-0x85;let _0x31c9ae=_0x5edec6[_0x297c9a];return _0x31c9ae;},a0_0x297c(_0x56c612,_0x1cadd2);}const express=require(a0_0x196317(0x90)),app=express(),router=express['Router'](),multer=require(a0_0x196317(0x94)),{profile,master_shop,email_settings}=require(a0_0x196317(0x9b)),auth=require(a0_0x196317(0xa2));var timezones=require(a0_0x196317(0xa9));const users=require(a0_0x196317(0x98));router[a0_0x196317(0xa3)](a0_0x196317(0x95),auth,async(_0x1775db,_0x25c6af)=>{const _0x30ea48=a0_0x196317;try{const {username:_0x217d6a,email:_0x41b45a,role:_0xce46fb}=_0x1775db[_0x30ea48(0x86)],_0x5bfce7=_0x1775db['user'],_0x5c3aff=await profile[_0x30ea48(0x88)]({'email':_0x5bfce7['email']}),_0x33b598=await master_shop['find']();console[_0x30ea48(0x8f)](_0x30ea48(0xab),_0x33b598);const _0x105232=new Date()[_0x30ea48(0xad)](_0x30ea48(0xa5),{'timeZone':_0x33b598[0x0][_0x30ea48(0xa6)]});console[_0x30ea48(0x8f)](_0x30ea48(0xa6),_0x105232);if(_0x33b598[0x0][_0x30ea48(0x96)]==_0x30ea48(0x99)){var _0x45f484=users[_0x30ea48(0x85)];console[_0x30ea48(0x8f)](_0x45f484);}else{if(_0x33b598[0x0][_0x30ea48(0x96)]==_0x30ea48(0x97))var _0x45f484=users[_0x30ea48(0x97)];else{if(_0x33b598[0x0][_0x30ea48(0x96)]==_0x30ea48(0xaa))var _0x45f484=users[_0x30ea48(0xaa)];else{if(_0x33b598[0x0][_0x30ea48(0x96)]==_0x30ea48(0x9f))var _0x45f484=users[_0x30ea48(0x9f)];else{if(_0x33b598[0x0][_0x30ea48(0x96)]=='French')var _0x45f484=users[_0x30ea48(0x89)];else{if(_0x33b598[0x0][_0x30ea48(0x96)]==_0x30ea48(0x93))var _0x45f484=users[_0x30ea48(0x8d)];else{if(_0x33b598[0x0]['language']==_0x30ea48(0xa4))var _0x45f484=users[_0x30ea48(0xa4)];else{if(_0x33b598[0x0][_0x30ea48(0x96)]=='Arabic\x20(ae)')var _0x45f484=users[_0x30ea48(0x8b)];}}}}}}}_0x25c6af[_0x30ea48(0xa0)](_0x30ea48(0x9a),{'success':_0x1775db[_0x30ea48(0x8c)]('success'),'errors':_0x1775db[_0x30ea48(0x8c)](_0x30ea48(0x8e)),'role':_0x5bfce7,'profile':_0x5c3aff,'master_shop':_0x33b598,'timezones':timezones,'language':_0x45f484});}catch(_0x5be3a4){console['log'](_0x5be3a4);}}),module[a0_0x196317(0xa8)]=router;