const a0_0x2ee9cf=a0_0x35e0;(function(_0x897801,_0xb0e69a){const _0x379ec4=a0_0x35e0,_0x4b7d26=_0x897801();while(!![]){try{const _0x2dc7e6=-parseInt(_0x379ec4(0x13a))/0x1*(parseInt(_0x379ec4(0x130))/0x2)+-parseInt(_0x379ec4(0x11e))/0x3+parseInt(_0x379ec4(0x13b))/0x4*(-parseInt(_0x379ec4(0x112))/0x5)+parseInt(_0x379ec4(0x113))/0x6*(-parseInt(_0x379ec4(0x106))/0x7)+-parseInt(_0x379ec4(0x13e))/0x8+parseInt(_0x379ec4(0x108))/0x9*(parseInt(_0x379ec4(0x13d))/0xa)+parseInt(_0x379ec4(0x10b))/0xb;if(_0x2dc7e6===_0xb0e69a)break;else _0x4b7d26['push'](_0x4b7d26['shift']());}catch(_0x1619ae){_0x4b7d26['push'](_0x4b7d26['shift']());}}}(a0_0x1379,0xadfd8));function a0_0x35e0(_0x35cf56,_0xb1bdd){const _0x137920=a0_0x1379();return a0_0x35e0=function(_0x35e0a1,_0x8010de){_0x35e0a1=_0x35e0a1-0x106;let _0x5036dc=_0x137920[_0x35e0a1];return _0x5036dc;},a0_0x35e0(_0x35cf56,_0xb1bdd);}const express=require(a0_0x2ee9cf(0x131)),app=express(),router=express[a0_0x2ee9cf(0x12e)](),{profile,master_shop,categories,brands,units,product,warehouse,purchases}=require('../models/all_models'),auth=require(a0_0x2ee9cf(0x115)),users=require(a0_0x2ee9cf(0x12d));router[a0_0x2ee9cf(0x132)]('/view',auth,async(_0x9dc785,_0x2ec14f)=>{const _0x5c4d54=a0_0x2ee9cf;try{const {username:_0x508f72,email:_0x5d8ff6,role:_0x4c25c8}=_0x9dc785[_0x5c4d54(0x120)],_0x4ec0ce=_0x9dc785[_0x5c4d54(0x120)],_0x5cd533=await profile[_0x5c4d54(0x13c)]({'email':_0x4ec0ce['email']}),_0x47da7f=await master_shop['find']();console['log'](_0x5c4d54(0x142),_0x47da7f);const _0x17e4a9=await warehouse[_0x5c4d54(0x119)]();var _0x4458c9=[_0x5c4d54(0x143),_0x5c4d54(0x122),_0x5c4d54(0x11c),'Rack\x20B',_0x5c4d54(0x141),'Rack\x20D',_0x5c4d54(0x136),'Rack\x20F',_0x5c4d54(0x125),'Shelves'],_0xaa8d24=[_0x5c4d54(0x128),_0x5c4d54(0x118)],_0x83675c=[_0x5c4d54(0x12c),_0x5c4d54(0x127),_0x5c4d54(0x121)];if(_0x47da7f[0x0][_0x5c4d54(0x11d)]=='English\x20(US)'){var _0xaad1c1=users['English'];console[_0x5c4d54(0x133)](_0xaad1c1);}else{if(_0x47da7f[0x0][_0x5c4d54(0x11d)]==_0x5c4d54(0x10e))var _0xaad1c1=users['Hindi'];else{if(_0x47da7f[0x0][_0x5c4d54(0x11d)]==_0x5c4d54(0x123))var _0xaad1c1=users[_0x5c4d54(0x123)];else{if(_0x47da7f[0x0]['language']==_0x5c4d54(0x111))var _0xaad1c1=users[_0x5c4d54(0x111)];else{if(_0x47da7f[0x0][_0x5c4d54(0x11d)]==_0x5c4d54(0x13f))var _0xaad1c1=users[_0x5c4d54(0x13f)];else{if(_0x47da7f[0x0][_0x5c4d54(0x11d)]==_0x5c4d54(0x117))var _0xaad1c1=users[_0x5c4d54(0x11b)];else{if(_0x47da7f[0x0][_0x5c4d54(0x11d)]=='Chinese')var _0xaad1c1=users['Chinese'];else{if(_0x47da7f[0x0]['language']==_0x5c4d54(0x116))var _0xaad1c1=users[_0x5c4d54(0x10a)];}}}}}}}_0x2ec14f[_0x5c4d54(0x144)](_0x5c4d54(0x138),{'success':_0x9dc785['flash']('success'),'errors':_0x9dc785[_0x5c4d54(0x140)](_0x5c4d54(0x135)),'user':_0x17e4a9,'profile':_0x5cd533,'master_shop':_0x47da7f,'role':_0x4ec0ce,'language':_0xaad1c1,'rooms_data':_0x4458c9,'rawfinished_data':_0xaa8d24,'vategory_data':_0x83675c});}catch(_0x4618e3){console[_0x5c4d54(0x133)](_0x4618e3);}}),router[a0_0x2ee9cf(0x10c)](a0_0x2ee9cf(0x126),auth,async(_0x5aca18,_0x34aa81)=>{const _0x470d81=a0_0x2ee9cf;try{const {name:_0x3efdae,address:_0x9de72c,status:_0x558ab6,Room_name:_0x5d8026,rawfinished:_0x6220ec,category_name:_0x56bf00}=_0x5aca18['body'],_0x29b0cb=new warehouse({'name':_0x3efdae,'address':_0x9de72c,'status':_0x558ab6,'room':_0x5d8026,'warehouse_category':_0x6220ec,'category':_0x56bf00}),_0x20bca5=await warehouse[_0x470d81(0x13c)]({'name':_0x3efdae,'room':_0x5d8026});_0x20bca5?_0x5aca18[_0x470d81(0x140)]('errors',_0x3efdae+_0x470d81(0x129)):_0x5aca18[_0x470d81(0x140)](_0x470d81(0x139),_0x3efdae+_0x470d81(0x110));const _0x27997c=await _0x29b0cb['save']();_0x34aa81[_0x470d81(0x11a)](_0x470d81(0x134));}catch(_0x132351){console[_0x470d81(0x133)](_0x132351);}}),router[a0_0x2ee9cf(0x132)](a0_0x2ee9cf(0x124),auth,async(_0x3daad9,_0x4de72e)=>{const _0x28144e=a0_0x2ee9cf;try{const _0x43cc27=_0x3daad9['params']['id'],_0x4f9fd7=await master_shop['find']();console[_0x28144e(0x133)](_0x28144e(0x142),_0x4f9fd7);const _0x8cf105=await warehouse['findById'](_0x43cc27);if(_0x4f9fd7[0x0][_0x28144e(0x11d)]=='English\x20(US)'){var _0x3c7902=users['English'];console['log'](_0x3c7902);}else{if(_0x4f9fd7[0x0][_0x28144e(0x11d)]=='Hindi')var _0x3c7902=users['Hindi'];else{if(_0x4f9fd7[0x0]['language']==_0x28144e(0x123))var _0x3c7902=users[_0x28144e(0x123)];else{if(_0x4f9fd7[0x0][_0x28144e(0x11d)]=='Spanish')var _0x3c7902=users[_0x28144e(0x111)];else{if(_0x4f9fd7[0x0][_0x28144e(0x11d)]=='French')var _0x3c7902=users['French'];else{if(_0x4f9fd7[0x0][_0x28144e(0x11d)]==_0x28144e(0x117))var _0x3c7902=users[_0x28144e(0x11b)];else{if(_0x4f9fd7[0x0][_0x28144e(0x11d)]==_0x28144e(0x12b))var _0x3c7902=users['Chinese'];else{if(_0x4f9fd7[0x0][_0x28144e(0x11d)]==_0x28144e(0x116))var _0x3c7902=users[_0x28144e(0x10a)];}}}}}}}_0x4de72e['render'](_0x28144e(0x138),{'success':_0x3daad9[_0x28144e(0x140)](_0x28144e(0x139)),'errors':_0x3daad9['flash']('errors'),'master_shop':_0x4f9fd7,'user':_0x8cf105,'language':_0x3c7902});}catch(_0x5cbfc8){console[_0x28144e(0x133)](_0x5cbfc8);}}),router[a0_0x2ee9cf(0x10c)](a0_0x2ee9cf(0x124),auth,async(_0x55e69b,_0x29759c)=>{const _0x57b773=a0_0x2ee9cf;try{const _0x5d80a2=_0x55e69b[_0x57b773(0x10d)]['id'],_0x3bfca4=await warehouse['findById'](_0x5d80a2);console['log']('edit\x20warehouse\x20data',_0x3bfca4[_0x57b773(0x12f)]);const {name:_0x3eec0d,address:_0x530ada,status:_0x2477b9,Room_name:_0x4cea09}=_0x55e69b[_0x57b773(0x10f)],_0x25bdd0=await warehouse[_0x57b773(0x107)](_0x5d80a2);console['log'](_0x57b773(0x137),_0x25bdd0);const _0x464081=await purchases[_0x57b773(0x119)]({'warehouse_name':_0x3bfca4['name'],'room':_0x4cea09});console[_0x57b773(0x133)](_0x57b773(0x12a),_0x464081),_0x3bfca4['name']=_0x3eec0d,_0x3bfca4['address']=_0x530ada,_0x3bfca4[_0x57b773(0x109)]=_0x2477b9,_0x3bfca4['room']=_0x4cea09;const _0x131c41=await _0x3bfca4[_0x57b773(0x114)]();_0x55e69b[_0x57b773(0x140)](_0x57b773(0x139),'warehouse\x20data\x20update\x20successfully'),_0x29759c['redirect'](_0x57b773(0x134));}catch(_0x4305a2){console[_0x57b773(0x133)](_0x4305a2);}}),module[a0_0x2ee9cf(0x11f)]=router;function a0_0x1379(){const _0x264491=['Chinese','ALL','../public/language/languages.json','Router','name','1286LyiDZy','express','get','log','/warehouse/view','errors','Rack\x20E','edit\x20warehouse\x20warehouse_data','warehouse','success','863fQdKkp','796388pgVyaT','findOne','10kZqlLc','2283480ducDwK','French','flash','Rack\x20C','master','Rack\x201','render','1526NRmftq','findById','11927781jrdCtz','status','Arabic','20296848PqNEDq','post','params','Hindi','body','\x20warehouse\x20is\x20add\x20successfully','Spanish','5HeywTa','7692NUurLb','save','../middleware/auth','Arabic\x20(ae)','Portuguese\x20(BR)','Finished\x20Goods','find','redirect','Portuguese','Rack\x20A','language','3416688mlXgFZ','exports','user','Ingredients','Rack\x202','German','/view/:id','Receiving\x20Area','/view','Packaging','Raw\x20Materials','\x20warehouse\x20is\x20alredy\x20added.\x20please\x20choose\x20another','edit\x20warehouse\x20purchases_data'];a0_0x1379=function(){return _0x264491;};return a0_0x1379();}