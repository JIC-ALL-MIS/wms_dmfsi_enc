function a0_0x2363(){const _0x51ca4e=['305718VDRSPq','Chinese','log','1011744GNqYYL','customer_payment_report','find','English','295369KCCTSK','success','Portuguese','Router','email','exports','express','German','findOne','2bVkIYv','supplier_payment_report','user','1585glXkBW','1020033aaIERD','41152DLnZfi','language','master','Spanish','Portuguese\x20(BR)','Arabic\x20(ae)','render','4248nDXmhe','Hindi','errors','/supplier','get','French','2519328XlRFDL','English\x20(US)','../public/language/languages.json','flash','Arabic','../middleware/auth','/customer'];a0_0x2363=function(){return _0x51ca4e;};return a0_0x2363();}const a0_0x181466=a0_0x3e71;(function(_0x3ddaca,_0x3bf629){const _0xeea55d=a0_0x3e71,_0x4cef42=_0x3ddaca();while(!![]){try{const _0x25e8b4=parseInt(_0xeea55d(0x6d))/0x1*(-parseInt(_0xeea55d(0x76))/0x2)+-parseInt(_0xeea55d(0x8f))/0x3+parseInt(_0xeea55d(0x7b))/0x4+-parseInt(_0xeea55d(0x79))/0x5*(-parseInt(_0xeea55d(0x82))/0x6)+parseInt(_0xeea55d(0x88))/0x7+-parseInt(_0xeea55d(0x69))/0x8+parseInt(_0xeea55d(0x7a))/0x9;if(_0x25e8b4===_0x3bf629)break;else _0x4cef42['push'](_0x4cef42['shift']());}catch(_0x2a4cbe){_0x4cef42['push'](_0x4cef42['shift']());}}}(a0_0x2363,0x2cf9e));const express=require(a0_0x181466(0x73)),app=express(),router=express[a0_0x181466(0x70)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require('../models/all_models'),auth=require(a0_0x181466(0x8d)),users=require(a0_0x181466(0x8a));function a0_0x3e71(_0x9fab04,_0x4048ee){const _0x2363e6=a0_0x2363();return a0_0x3e71=function(_0x3e712a,_0x799965){_0x3e712a=_0x3e712a-0x68;let _0x5053d9=_0x2363e6[_0x3e712a];return _0x5053d9;},a0_0x3e71(_0x9fab04,_0x4048ee);}router[a0_0x181466(0x86)](a0_0x181466(0x85),auth,async(_0x34fb67,_0x48cc6b)=>{const _0x37b818=a0_0x181466;try{const {username:_0x1f034d,email:_0x57887a,role:_0x638b8b}=_0x34fb67['user'],_0x26b75c=_0x34fb67[_0x37b818(0x78)],_0x22bfab=await profile[_0x37b818(0x75)]({'email':_0x26b75c[_0x37b818(0x71)]}),_0x2c7d03=await master_shop['find']();console['log'](_0x37b818(0x7d),_0x2c7d03);const _0x3924d2=await suppliers_payment[_0x37b818(0x6b)]();console[_0x37b818(0x68)](_0x3924d2);if(_0x2c7d03[0x0][_0x37b818(0x7c)]==_0x37b818(0x89)){var _0x3b6c7f=users[_0x37b818(0x6c)];console[_0x37b818(0x68)](_0x3b6c7f);}else{if(_0x2c7d03[0x0][_0x37b818(0x7c)]==_0x37b818(0x83))var _0x3b6c7f=users[_0x37b818(0x83)];else{if(_0x2c7d03[0x0][_0x37b818(0x7c)]==_0x37b818(0x74))var _0x3b6c7f=users[_0x37b818(0x74)];else{if(_0x2c7d03[0x0]['language']=='Spanish')var _0x3b6c7f=users['Spanish'];else{if(_0x2c7d03[0x0][_0x37b818(0x7c)]==_0x37b818(0x87))var _0x3b6c7f=users[_0x37b818(0x87)];else{if(_0x2c7d03[0x0][_0x37b818(0x7c)]==_0x37b818(0x7f))var _0x3b6c7f=users[_0x37b818(0x6f)];else{if(_0x2c7d03[0x0][_0x37b818(0x7c)]==_0x37b818(0x90))var _0x3b6c7f=users[_0x37b818(0x90)];else{if(_0x2c7d03[0x0][_0x37b818(0x7c)]==_0x37b818(0x80))var _0x3b6c7f=users[_0x37b818(0x8c)];}}}}}}}_0x48cc6b[_0x37b818(0x81)](_0x37b818(0x77),{'success':_0x34fb67[_0x37b818(0x8b)](_0x37b818(0x6e)),'errors':_0x34fb67[_0x37b818(0x8b)](_0x37b818(0x84)),'role':_0x26b75c,'profile':_0x22bfab,'suppliers_data':_0x3924d2,'master_shop':_0x2c7d03,'language':_0x3b6c7f});}catch(_0x42e64e){console[_0x37b818(0x68)](_0x42e64e);}}),router[a0_0x181466(0x86)](a0_0x181466(0x8e),auth,async(_0x360cb5,_0x5579a6)=>{const _0x279759=a0_0x181466;try{const {username:_0x15fe36,email:_0xb7e7d4,role:_0x2a3b2d}=_0x360cb5[_0x279759(0x78)],_0x43e41a=_0x360cb5[_0x279759(0x78)],_0x3ed226=await profile['findOne']({'email':_0x43e41a[_0x279759(0x71)]}),_0x3e7cff=await master_shop['find']();console[_0x279759(0x68)](_0x279759(0x7d),_0x3e7cff);const _0x3a79b7=await customer_payment[_0x279759(0x6b)]();console[_0x279759(0x68)](_0x3a79b7);if(_0x3e7cff[0x0][_0x279759(0x7c)]=='English\x20(US)'){var _0x1b5d7f=users['English'];console['log'](_0x1b5d7f);}else{if(_0x3e7cff[0x0][_0x279759(0x7c)]==_0x279759(0x83))var _0x1b5d7f=users[_0x279759(0x83)];else{if(_0x3e7cff[0x0][_0x279759(0x7c)]==_0x279759(0x74))var _0x1b5d7f=users[_0x279759(0x74)];else{if(_0x3e7cff[0x0][_0x279759(0x7c)]==_0x279759(0x7e))var _0x1b5d7f=users[_0x279759(0x7e)];else{if(_0x3e7cff[0x0][_0x279759(0x7c)]==_0x279759(0x87))var _0x1b5d7f=users[_0x279759(0x87)];else{if(_0x3e7cff[0x0][_0x279759(0x7c)]==_0x279759(0x7f))var _0x1b5d7f=users[_0x279759(0x6f)];else{if(_0x3e7cff[0x0][_0x279759(0x7c)]==_0x279759(0x90))var _0x1b5d7f=users[_0x279759(0x90)];else{if(_0x3e7cff[0x0][_0x279759(0x7c)]=='Arabic\x20(ae)')var _0x1b5d7f=users[_0x279759(0x8c)];}}}}}}}_0x5579a6['render'](_0x279759(0x6a),{'success':_0x360cb5[_0x279759(0x8b)](_0x279759(0x6e)),'errors':_0x360cb5[_0x279759(0x8b)](_0x279759(0x84)),'role':_0x43e41a,'profile':_0x3ed226,'customer_data':_0x3a79b7,'master_shop':_0x3e7cff,'language':_0x1b5d7f});}catch(_0x473cdc){console[_0x279759(0x68)](_0x473cdc);}}),module[a0_0x181466(0x72)]=router;