const a0_0x2b2237=a0_0x41af;function a0_0x494f(){const _0x39f831=['14705OwKzAK','Arabic','4202588XYJwwC','Portuguese\x20(BR)','Hindi','Spanish','master','errors','toLocaleString','../public/language/languages.json','Chinese','/view','English','440822dBAmsS','get','German','318oloxaE','timezones-list','flash','success','40qeFyOd','language','509316NWDYpj','warehousemap_outgoing','6TcmWAI','log','Portuguese','327261SlYrRL','../middleware/auth','en-US','Router','15273kmmplp','855379fMHGNB','22RWTsUM','Arabic\x20(ae)','timezone','4390iqvmhr','user'];a0_0x494f=function(){return _0x39f831;};return a0_0x494f();}function a0_0x41af(_0x37c0b6,_0x35cbf5){const _0x494ff1=a0_0x494f();return a0_0x41af=function(_0x41af86,_0x3cd160){_0x41af86=_0x41af86-0x80;let _0x85903e=_0x494ff1[_0x41af86];return _0x85903e;},a0_0x41af(_0x37c0b6,_0x35cbf5);}(function(_0x146cc5,_0x251fbb){const _0x1bb919=a0_0x41af,_0x3b1398=_0x146cc5();while(!![]){try{const _0x36a527=parseInt(_0x1bb919(0x81))/0x1+-parseInt(_0x1bb919(0x99))/0x2*(parseInt(_0x1bb919(0xa4))/0x3)+parseInt(_0x1bb919(0x8e))/0x4+-parseInt(_0x1bb919(0x8c))/0x5*(parseInt(_0x1bb919(0x9c))/0x6)+-parseInt(_0x1bb919(0x86))/0x7*(-parseInt(_0x1bb919(0xa0))/0x8)+-parseInt(_0x1bb919(0x85))/0x9*(parseInt(_0x1bb919(0x8a))/0xa)+-parseInt(_0x1bb919(0x87))/0xb*(-parseInt(_0x1bb919(0xa2))/0xc);if(_0x36a527===_0x251fbb)break;else _0x3b1398['push'](_0x3b1398['shift']());}catch(_0x1768bf){_0x3b1398['push'](_0x3b1398['shift']());}}}(a0_0x494f,0xb2bc5));const express=require('express'),app=express(),router=express[a0_0x2b2237(0x84)](),multer=require('multer'),{profile,master_shop,email_settings}=require('../models/all_models'),auth=require(a0_0x2b2237(0x82));var timezones=require(a0_0x2b2237(0x9d));const users=require(a0_0x2b2237(0x95));router[a0_0x2b2237(0x9a)](a0_0x2b2237(0x97),auth,async(_0x4bbe08,_0x286f34)=>{const _0x16edcf=a0_0x2b2237;try{const {username:_0xd1341f,email:_0x200497,role:_0x323b12}=_0x4bbe08['user'],_0x3f7971=_0x4bbe08[_0x16edcf(0x8b)],_0x56556c=await profile['findOne']({'email':_0x3f7971['email']}),_0xc262c8=await master_shop['find']();console['log'](_0x16edcf(0x92),_0xc262c8);const _0x467c29=new Date()[_0x16edcf(0x94)](_0x16edcf(0x83),{'timeZone':_0xc262c8[0x0][_0x16edcf(0x89)]});console[_0x16edcf(0xa5)]('timezone',_0x467c29);if(_0xc262c8[0x0]['language']=='English\x20(US)'){var _0x44fff6=users[_0x16edcf(0x98)];console[_0x16edcf(0xa5)](_0x44fff6);}else{if(_0xc262c8[0x0][_0x16edcf(0xa1)]=='Hindi')var _0x44fff6=users[_0x16edcf(0x90)];else{if(_0xc262c8[0x0][_0x16edcf(0xa1)]=='German')var _0x44fff6=users[_0x16edcf(0x9b)];else{if(_0xc262c8[0x0]['language']==_0x16edcf(0x91))var _0x44fff6=users['Spanish'];else{if(_0xc262c8[0x0][_0x16edcf(0xa1)]=='French')var _0x44fff6=users['French'];else{if(_0xc262c8[0x0]['language']==_0x16edcf(0x8f))var _0x44fff6=users[_0x16edcf(0x80)];else{if(_0xc262c8[0x0][_0x16edcf(0xa1)]==_0x16edcf(0x96))var _0x44fff6=users[_0x16edcf(0x96)];else{if(_0xc262c8[0x0][_0x16edcf(0xa1)]==_0x16edcf(0x88))var _0x44fff6=users[_0x16edcf(0x8d)];}}}}}}}_0x286f34['render'](_0x16edcf(0xa3),{'success':_0x4bbe08[_0x16edcf(0x9e)](_0x16edcf(0x9f)),'errors':_0x4bbe08[_0x16edcf(0x9e)](_0x16edcf(0x93)),'role':_0x3f7971,'profile':_0x56556c,'master_shop':_0xc262c8,'timezones':timezones,'language':_0x44fff6});}catch(_0x3d592c){console[_0x16edcf(0xa5)](_0x3d592c);}}),module['exports']=router;