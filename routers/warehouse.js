const a0_0x9c7ed2=a0_0x2621;(function(_0x3926e9,_0x3cf950){const _0x535bc0=a0_0x2621,_0x52460a=_0x3926e9();while(!![]){try{const _0x3f88ff=parseInt(_0x535bc0(0x1de))/0x1*(-parseInt(_0x535bc0(0x1f8))/0x2)+-parseInt(_0x535bc0(0x1ed))/0x3+parseInt(_0x535bc0(0x20a))/0x4*(-parseInt(_0x535bc0(0x1ec))/0x5)+-parseInt(_0x535bc0(0x1dd))/0x6*(-parseInt(_0x535bc0(0x1f2))/0x7)+-parseInt(_0x535bc0(0x1fd))/0x8*(parseInt(_0x535bc0(0x1db))/0x9)+parseInt(_0x535bc0(0x1e2))/0xa+-parseInt(_0x535bc0(0x1f9))/0xb*(parseInt(_0x535bc0(0x1f3))/0xc);if(_0x3f88ff===_0x3cf950)break;else _0x52460a['push'](_0x52460a['shift']());}catch(_0x4b61e1){_0x52460a['push'](_0x52460a['shift']());}}}(a0_0x1dd1,0xd4d82));function a0_0x1dd1(){const _0x4be697=['Arabic','/view/:id','findById','Spanish','render','save','log','238985fngpWz','722289eXdABn','exports','redirect','flash','errors','7ujPFJe','3836292smawfy','edit\x20warehouse\x20purchases_data','get','/view','Finished\x20Goods','962dGwFfR','11uGvmLa','../models/all_models','success','Chinese','540264nWmZmg','Rack\x20E','../middleware/auth','Portuguese','language','Raw\x20Materials','French','user','Ingredients','name','findOne','edit\x20warehouse\x20data','Receiving\x20Area','4YYaLFc','edit\x20warehouse\x20warehouse_data','\x20warehouse\x20is\x20alredy\x20added.\x20please\x20choose\x20another','find','room','Arabic\x20(ae)','params','Packaging','ALL','email','Rack\x20A','Rack\x201','Shelves','body','warehouse','Rack\x202','status','Hindi','English','\x20warehouse\x20is\x20add\x20successfully','108VbjEJA','Rack\x20B','6734694EVVmqN','635NkHMYo','address','express','English\x20(US)','14734430wVNtfB','/warehouse/view','German'];a0_0x1dd1=function(){return _0x4be697;};return a0_0x1dd1();}function a0_0x2621(_0x467c52,_0x3a22d3){const _0x1dd1de=a0_0x1dd1();return a0_0x2621=function(_0x26211e,_0x26eef6){_0x26211e=_0x26211e-0x1cc;let _0x5b40f4=_0x1dd1de[_0x26211e];return _0x5b40f4;},a0_0x2621(_0x467c52,_0x3a22d3);}const express=require(a0_0x9c7ed2(0x1e0)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,purchases}=require(a0_0x9c7ed2(0x1fa)),auth=require(a0_0x9c7ed2(0x1ff)),users=require('../public/language/languages.json');router[a0_0x9c7ed2(0x1f5)](a0_0x9c7ed2(0x1f6),auth,async(_0x5306a3,_0x4a4926)=>{const _0x2652d2=a0_0x9c7ed2;try{const {username:_0x58a193,email:_0x3bf1d0,role:_0x2fe7d7}=_0x5306a3[_0x2652d2(0x204)],_0x4d99e6=_0x5306a3[_0x2652d2(0x204)],_0x46fb65=await profile[_0x2652d2(0x207)]({'email':_0x4d99e6[_0x2652d2(0x1d0)]}),_0x466717=await master_shop['find']();console[_0x2652d2(0x1eb)]('master',_0x466717);const _0xabfe81=await warehouse[_0x2652d2(0x20d)]();var _0x1ccd42=[_0x2652d2(0x1d2),_0x2652d2(0x1d6),_0x2652d2(0x1d1),_0x2652d2(0x1dc),'Rack\x20C','Rack\x20D',_0x2652d2(0x1fe),'Rack\x20F',_0x2652d2(0x209),_0x2652d2(0x1d3)],_0x59910f=[_0x2652d2(0x202),_0x2652d2(0x1f7)],_0x1d7762=[_0x2652d2(0x1cf),_0x2652d2(0x1ce),_0x2652d2(0x205)];if(_0x466717[0x0][_0x2652d2(0x201)]==_0x2652d2(0x1e1)){var _0xcff1b=users[_0x2652d2(0x1d9)];console['log'](_0xcff1b);}else{if(_0x466717[0x0]['language']==_0x2652d2(0x1d8))var _0xcff1b=users[_0x2652d2(0x1d8)];else{if(_0x466717[0x0][_0x2652d2(0x201)]==_0x2652d2(0x1e4))var _0xcff1b=users[_0x2652d2(0x1e4)];else{if(_0x466717[0x0][_0x2652d2(0x201)]=='Spanish')var _0xcff1b=users['Spanish'];else{if(_0x466717[0x0][_0x2652d2(0x201)]==_0x2652d2(0x203))var _0xcff1b=users[_0x2652d2(0x203)];else{if(_0x466717[0x0][_0x2652d2(0x201)]=='Portuguese\x20(BR)')var _0xcff1b=users[_0x2652d2(0x200)];else{if(_0x466717[0x0][_0x2652d2(0x201)]==_0x2652d2(0x1fc))var _0xcff1b=users[_0x2652d2(0x1fc)];else{if(_0x466717[0x0][_0x2652d2(0x201)]==_0x2652d2(0x1cc))var _0xcff1b=users[_0x2652d2(0x1e5)];}}}}}}}_0x4a4926['render'](_0x2652d2(0x1d5),{'success':_0x5306a3[_0x2652d2(0x1f0)]('success'),'errors':_0x5306a3['flash'](_0x2652d2(0x1f1)),'user':_0xabfe81,'profile':_0x46fb65,'master_shop':_0x466717,'role':_0x4d99e6,'language':_0xcff1b,'rooms_data':_0x1ccd42,'rawfinished_data':_0x59910f,'vategory_data':_0x1d7762});}catch(_0x20421){console[_0x2652d2(0x1eb)](_0x20421);}}),router['post']('/view',auth,async(_0x2e3c9d,_0xacde98)=>{const _0x15d8da=a0_0x9c7ed2;try{const {name:_0x3cc24b,address:_0x2a9baf,status:_0x100612,Room_name:_0x2e8b27,rawfinished:_0x1eb6c9,category_name:_0x1207e9}=_0x2e3c9d['body'],_0x3dfd19=new warehouse({'name':_0x3cc24b,'address':_0x2a9baf,'status':_0x100612,'room':_0x2e8b27,'warehouse_category':_0x1eb6c9,'category':_0x1207e9}),_0x40b56f=await warehouse['findOne']({'name':_0x3cc24b,'room':_0x2e8b27});_0x40b56f?_0x2e3c9d['flash'](_0x15d8da(0x1f1),_0x3cc24b+_0x15d8da(0x20c)):_0x2e3c9d[_0x15d8da(0x1f0)](_0x15d8da(0x1fb),_0x3cc24b+_0x15d8da(0x1da));const _0x177a29=await _0x3dfd19[_0x15d8da(0x1ea)]();_0xacde98[_0x15d8da(0x1ef)](_0x15d8da(0x1e3));}catch(_0x26ba49){console[_0x15d8da(0x1eb)](_0x26ba49);}}),router['get'](a0_0x9c7ed2(0x1e6),auth,async(_0x466f0e,_0x49d155)=>{const _0x2da2c5=a0_0x9c7ed2;try{const _0x98400b=_0x466f0e[_0x2da2c5(0x1cd)]['id'],_0x244186=await master_shop[_0x2da2c5(0x20d)]();console['log']('master',_0x244186);const _0x2badf9=await warehouse[_0x2da2c5(0x1e7)](_0x98400b);if(_0x244186[0x0][_0x2da2c5(0x201)]=='English\x20(US)'){var _0x3dedc4=users[_0x2da2c5(0x1d9)];console['log'](_0x3dedc4);}else{if(_0x244186[0x0][_0x2da2c5(0x201)]=='Hindi')var _0x3dedc4=users[_0x2da2c5(0x1d8)];else{if(_0x244186[0x0][_0x2da2c5(0x201)]=='German')var _0x3dedc4=users[_0x2da2c5(0x1e4)];else{if(_0x244186[0x0][_0x2da2c5(0x201)]==_0x2da2c5(0x1e8))var _0x3dedc4=users['Spanish'];else{if(_0x244186[0x0]['language']==_0x2da2c5(0x203))var _0x3dedc4=users[_0x2da2c5(0x203)];else{if(_0x244186[0x0][_0x2da2c5(0x201)]=='Portuguese\x20(BR)')var _0x3dedc4=users['Portuguese'];else{if(_0x244186[0x0][_0x2da2c5(0x201)]=='Chinese')var _0x3dedc4=users['Chinese'];else{if(_0x244186[0x0][_0x2da2c5(0x201)]==_0x2da2c5(0x1cc))var _0x3dedc4=users[_0x2da2c5(0x1e5)];}}}}}}}_0x49d155[_0x2da2c5(0x1e9)]('warehouse',{'success':_0x466f0e[_0x2da2c5(0x1f0)](_0x2da2c5(0x1fb)),'errors':_0x466f0e[_0x2da2c5(0x1f0)]('errors'),'master_shop':_0x244186,'user':_0x2badf9,'language':_0x3dedc4});}catch(_0x24b99e){console[_0x2da2c5(0x1eb)](_0x24b99e);}}),router['post']('/view/:id',auth,async(_0x518055,_0x4cdeaf)=>{const _0x1070e3=a0_0x9c7ed2;try{const _0x4a80a6=_0x518055[_0x1070e3(0x1cd)]['id'],_0x8409d4=await warehouse['findById'](_0x4a80a6);console[_0x1070e3(0x1eb)](_0x1070e3(0x208),_0x8409d4['name']);const {name:_0x4781be,address:_0x4d224e,status:_0x44f77a,Room_name:_0x214c59}=_0x518055[_0x1070e3(0x1d4)],_0x2169a1=await warehouse['findById'](_0x4a80a6);console['log'](_0x1070e3(0x20b),_0x2169a1);const _0x3a2150=await purchases[_0x1070e3(0x20d)]({'warehouse_name':_0x8409d4[_0x1070e3(0x206)],'room':_0x214c59});console['log'](_0x1070e3(0x1f4),_0x3a2150),_0x8409d4['name']=_0x4781be,_0x8409d4[_0x1070e3(0x1df)]=_0x4d224e,_0x8409d4[_0x1070e3(0x1d7)]=_0x44f77a,_0x8409d4[_0x1070e3(0x20e)]=_0x214c59;const _0x231a03=await _0x8409d4[_0x1070e3(0x1ea)]();_0x518055[_0x1070e3(0x1f0)](_0x1070e3(0x1fb),'warehouse\x20data\x20update\x20successfully'),_0x4cdeaf[_0x1070e3(0x1ef)](_0x1070e3(0x1e3));}catch(_0x304649){console[_0x1070e3(0x1eb)](_0x304649);}}),module[a0_0x9c7ed2(0x1ee)]=router;