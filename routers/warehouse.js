function a0_0x35f9(_0x20d8b6,_0x16c5b8){const _0x362398=a0_0x3623();return a0_0x35f9=function(_0x35f954,_0x71c21){_0x35f954=_0x35f954-0x1da;let _0x4f1994=_0x362398[_0x35f954];return _0x4f1994;},a0_0x35f9(_0x20d8b6,_0x16c5b8);}const a0_0x6655db=a0_0x35f9;(function(_0x13297d,_0x2adb17){const _0x8d1340=a0_0x35f9,_0x53d81e=_0x13297d();while(!![]){try{const _0x576d49=parseInt(_0x8d1340(0x205))/0x1*(-parseInt(_0x8d1340(0x1dd))/0x2)+-parseInt(_0x8d1340(0x207))/0x3*(-parseInt(_0x8d1340(0x216))/0x4)+-parseInt(_0x8d1340(0x1de))/0x5+-parseInt(_0x8d1340(0x1ee))/0x6+parseInt(_0x8d1340(0x1eb))/0x7+parseInt(_0x8d1340(0x1f6))/0x8*(-parseInt(_0x8d1340(0x1fb))/0x9)+-parseInt(_0x8d1340(0x201))/0xa*(-parseInt(_0x8d1340(0x1fd))/0xb);if(_0x576d49===_0x2adb17)break;else _0x53d81e['push'](_0x53d81e['shift']());}catch(_0x224526){_0x53d81e['push'](_0x53d81e['shift']());}}}(a0_0x3623,0x3c2c3));function a0_0x3623(){const _0x304a34=['Rack\x20B','master','warehouse','French','/warehouse/view','../models/all_models','Hindi','user','\x20warehouse\x20is\x20add\x20successfully','/view/:id','3290154BtPzPg','log','success','922188SAqnPh','find','findOne','Rack\x202','\x20warehouse\x20is\x20alredy\x20added.\x20please\x20choose\x20another','Spanish','Arabic','exports','7104AJdtly','language','Rack\x20A','Arabic\x20(ae)','Ingredients','3393NKceHx','Portuguese\x20(BR)','88WQBTaF','save','findById','Rack\x20C','650740dvusML','Rack\x20F','Finished\x20Goods','English','1vPpIuh','render','309GufaOU','body','Packaging','post','English\x20(US)','Portuguese','params','errors','address','redirect','express','Shelves','Chinese','name','Rack\x201','4164bqyJUz','Rack\x20D','Router','flash','424334uclysZ','753645lAYkRj','edit\x20warehouse\x20data','German'];a0_0x3623=function(){return _0x304a34;};return a0_0x3623();}const express=require(a0_0x6655db(0x211)),app=express(),router=express[a0_0x6655db(0x1db)](),{profile,master_shop,categories,brands,units,product,warehouse,purchases}=require(a0_0x6655db(0x1e6)),auth=require('../middleware/auth'),users=require('../public/language/languages.json');router['get']('/view',auth,async(_0x3b6a94,_0x48efbe)=>{const _0xa4c936=a0_0x6655db;try{const {username:_0x4e0460,email:_0x50f7af,role:_0x489223}=_0x3b6a94[_0xa4c936(0x1e8)],_0x5d54b7=_0x3b6a94[_0xa4c936(0x1e8)],_0x3c54d3=await profile[_0xa4c936(0x1f0)]({'email':_0x5d54b7['email']}),_0x481b18=await master_shop[_0xa4c936(0x1ef)]();console[_0xa4c936(0x1ec)](_0xa4c936(0x1e2),_0x481b18);const _0x45f5be=await warehouse[_0xa4c936(0x1ef)]();var _0x322eab=[_0xa4c936(0x215),_0xa4c936(0x1f1),_0xa4c936(0x1f8),_0xa4c936(0x1e1),_0xa4c936(0x200),_0xa4c936(0x1da),'Rack\x20E',_0xa4c936(0x202),'Receiving\x20Area',_0xa4c936(0x212)],_0x145c77=['Raw\x20Materials',_0xa4c936(0x203)],_0x318a23=['ALL',_0xa4c936(0x209),_0xa4c936(0x1fa)];if(_0x481b18[0x0]['language']==_0xa4c936(0x20b)){var _0x4adb79=users[_0xa4c936(0x204)];console[_0xa4c936(0x1ec)](_0x4adb79);}else{if(_0x481b18[0x0][_0xa4c936(0x1f7)]==_0xa4c936(0x1e7))var _0x4adb79=users[_0xa4c936(0x1e7)];else{if(_0x481b18[0x0][_0xa4c936(0x1f7)]==_0xa4c936(0x1e0))var _0x4adb79=users[_0xa4c936(0x1e0)];else{if(_0x481b18[0x0][_0xa4c936(0x1f7)]==_0xa4c936(0x1f3))var _0x4adb79=users[_0xa4c936(0x1f3)];else{if(_0x481b18[0x0][_0xa4c936(0x1f7)]==_0xa4c936(0x1e4))var _0x4adb79=users[_0xa4c936(0x1e4)];else{if(_0x481b18[0x0][_0xa4c936(0x1f7)]==_0xa4c936(0x1fc))var _0x4adb79=users[_0xa4c936(0x20c)];else{if(_0x481b18[0x0][_0xa4c936(0x1f7)]=='Chinese')var _0x4adb79=users['Chinese'];else{if(_0x481b18[0x0][_0xa4c936(0x1f7)]==_0xa4c936(0x1f9))var _0x4adb79=users[_0xa4c936(0x1f4)];}}}}}}}_0x48efbe[_0xa4c936(0x206)](_0xa4c936(0x1e3),{'success':_0x3b6a94[_0xa4c936(0x1dc)](_0xa4c936(0x1ed)),'errors':_0x3b6a94[_0xa4c936(0x1dc)]('errors'),'user':_0x45f5be,'profile':_0x3c54d3,'master_shop':_0x481b18,'role':_0x5d54b7,'language':_0x4adb79,'rooms_data':_0x322eab,'rawfinished_data':_0x145c77,'vategory_data':_0x318a23});}catch(_0x400a67){console[_0xa4c936(0x1ec)](_0x400a67);}}),router[a0_0x6655db(0x20a)]('/view',auth,async(_0x3df649,_0x18ae09)=>{const _0xeda6d7=a0_0x6655db;try{const {name:_0x4bfe3d,address:_0x395a22,status:_0x1c7ebd,Room_name:_0x4ddcbc,rawfinished:_0x2a63b8,category_name:_0x2dd052}=_0x3df649[_0xeda6d7(0x208)],_0x338f7c=new warehouse({'name':_0x4bfe3d,'address':_0x395a22,'status':_0x1c7ebd,'room':_0x4ddcbc,'main_category':_0x2a63b8,'category':_0x2dd052}),_0x564a89=await warehouse[_0xeda6d7(0x1f0)]({'name':_0x4bfe3d,'room':_0x4ddcbc});_0x564a89?_0x3df649[_0xeda6d7(0x1dc)](_0xeda6d7(0x20e),_0x4bfe3d+_0xeda6d7(0x1f2)):_0x3df649['flash'](_0xeda6d7(0x1ed),_0x4bfe3d+_0xeda6d7(0x1e9));const _0x40bc08=await _0x338f7c[_0xeda6d7(0x1fe)]();_0x18ae09[_0xeda6d7(0x210)](_0xeda6d7(0x1e5));}catch(_0x402a59){console[_0xeda6d7(0x1ec)](_0x402a59);}}),router['get']('/view/:id',auth,async(_0x387743,_0x5a0843)=>{const _0x3d02db=a0_0x6655db;try{const _0x4e0fc5=_0x387743[_0x3d02db(0x20d)]['id'],_0x2562bc=await master_shop[_0x3d02db(0x1ef)]();console[_0x3d02db(0x1ec)](_0x3d02db(0x1e2),_0x2562bc);const _0x22674c=await warehouse[_0x3d02db(0x1ff)](_0x4e0fc5);if(_0x2562bc[0x0][_0x3d02db(0x1f7)]==_0x3d02db(0x20b)){var _0x4c4554=users[_0x3d02db(0x204)];console[_0x3d02db(0x1ec)](_0x4c4554);}else{if(_0x2562bc[0x0][_0x3d02db(0x1f7)]==_0x3d02db(0x1e7))var _0x4c4554=users[_0x3d02db(0x1e7)];else{if(_0x2562bc[0x0]['language']=='German')var _0x4c4554=users[_0x3d02db(0x1e0)];else{if(_0x2562bc[0x0][_0x3d02db(0x1f7)]==_0x3d02db(0x1f3))var _0x4c4554=users[_0x3d02db(0x1f3)];else{if(_0x2562bc[0x0][_0x3d02db(0x1f7)]=='French')var _0x4c4554=users[_0x3d02db(0x1e4)];else{if(_0x2562bc[0x0]['language']==_0x3d02db(0x1fc))var _0x4c4554=users[_0x3d02db(0x20c)];else{if(_0x2562bc[0x0][_0x3d02db(0x1f7)]==_0x3d02db(0x213))var _0x4c4554=users[_0x3d02db(0x213)];else{if(_0x2562bc[0x0][_0x3d02db(0x1f7)]=='Arabic\x20(ae)')var _0x4c4554=users[_0x3d02db(0x1f4)];}}}}}}}_0x5a0843['render'](_0x3d02db(0x1e3),{'success':_0x387743[_0x3d02db(0x1dc)]('success'),'errors':_0x387743[_0x3d02db(0x1dc)](_0x3d02db(0x20e)),'master_shop':_0x2562bc,'user':_0x22674c,'language':_0x4c4554});}catch(_0x34bf08){console[_0x3d02db(0x1ec)](_0x34bf08);}}),router[a0_0x6655db(0x20a)](a0_0x6655db(0x1ea),auth,async(_0x1fd717,_0x103b1c)=>{const _0x4307c3=a0_0x6655db;try{const _0x131ea1=_0x1fd717[_0x4307c3(0x20d)]['id'],_0xc4f9dc=await warehouse[_0x4307c3(0x1ff)](_0x131ea1);console[_0x4307c3(0x1ec)](_0x4307c3(0x1df),_0xc4f9dc['name']);const {name:_0x44ab69,address:_0xa7f77b,status:_0x4e1555,Room_name:_0xa9a642}=_0x1fd717['body'],_0x4d9940=await warehouse[_0x4307c3(0x1ff)](_0x131ea1);console[_0x4307c3(0x1ec)]('edit\x20warehouse\x20warehouse_data',_0x4d9940);const _0x488937=await purchases[_0x4307c3(0x1ef)]({'warehouse_name':_0xc4f9dc[_0x4307c3(0x214)],'room':_0xa9a642});console[_0x4307c3(0x1ec)]('edit\x20warehouse\x20purchases_data',_0x488937),_0xc4f9dc['name']=_0x44ab69,_0xc4f9dc[_0x4307c3(0x20f)]=_0xa7f77b,_0xc4f9dc['status']=_0x4e1555,_0xc4f9dc['room']=_0xa9a642;const _0x31eef4=await _0xc4f9dc[_0x4307c3(0x1fe)]();_0x1fd717[_0x4307c3(0x1dc)](_0x4307c3(0x1ed),'warehouse\x20data\x20update\x20successfully'),_0x103b1c['redirect'](_0x4307c3(0x1e5));}catch(_0x382ad6){console[_0x4307c3(0x1ec)](_0x382ad6);}}),module[a0_0x6655db(0x1f5)]=router;