const a0_0x515df3=a0_0x23f8;(function(_0x57f02b,_0x251100){const _0x58c379=a0_0x23f8,_0x1d5252=_0x57f02b();while(!![]){try{const _0x1d8bdf=-parseInt(_0x58c379(0x1d8))/0x1+-parseInt(_0x58c379(0x1d0))/0x2+parseInt(_0x58c379(0x1aa))/0x3+-parseInt(_0x58c379(0x19b))/0x4+parseInt(_0x58c379(0x1ad))/0x5+-parseInt(_0x58c379(0x1b0))/0x6*(-parseInt(_0x58c379(0x1a4))/0x7)+-parseInt(_0x58c379(0x1c1))/0x8*(-parseInt(_0x58c379(0x1bb))/0x9);if(_0x1d8bdf===_0x251100)break;else _0x1d5252['push'](_0x1d5252['shift']());}catch(_0x42a341){_0x1d5252['push'](_0x1d5252['shift']());}}}(a0_0x1824,0x9812d));function a0_0x1824(){const _0x4bcdab=['../middleware/auth','Hindi','log','42SCsQRL','find','position','warehouse','staff','Raw\x20Materials','1401150xfKbsK','Arabic\x20(ae)','findById','2359960yOTeoM','get','errors','829626TjPQmf','$name','redirect','English\x20(US)','user','flash','body','master','Portuguese','Router','French','2129805YxMqRl','../models/all_models','success','findOne','Enabled','email','32TTqUAY','\x20is\x20alredy\x20added.\x20please\x20choose\x20another','Chinese','English','/staff/view','/view/:id','Finished\x20Goods','post','back','bcryptjs','password','warehouse_category','json','params','language','1381694TQqtwN','Portuguese\x20(BR)','aggregate','exports','Spanish','/view','Arabic','save','492823laGDbC','render','3634740tFBEaG','firstname','Email\x20','staff\x20data\x20update\x20successfully','name','German'];a0_0x1824=function(){return _0x4bcdab;};return a0_0x1824();}const express=require('express'),app=express(),router=express[a0_0x515df3(0x1b9)](),bcrypt=require(a0_0x515df3(0x1ca)),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require(a0_0x515df3(0x1bc)),auth=require(a0_0x515df3(0x1a1)),users=require('../public/language/languages.json');function a0_0x23f8(_0x37e2cf,_0x3dd314){const _0x1824a0=a0_0x1824();return a0_0x23f8=function(_0x23f807,_0x51880c){_0x23f807=_0x23f807-0x19a;let _0x1b5320=_0x1824a0[_0x23f807];return _0x1b5320;},a0_0x23f8(_0x37e2cf,_0x3dd314);}router[a0_0x515df3(0x1ae)](a0_0x515df3(0x1d5),auth,async(_0xd8bc96,_0x338539)=>{const _0xd9974e=a0_0x515df3;try{const {username:_0x31e617,email:_0x2fdb16,role:_0x4c8290}=_0xd8bc96[_0xd9974e(0x1b4)],_0x12572b=_0xd8bc96[_0xd9974e(0x1b4)],_0x3cc8b7=await profile[_0xd9974e(0x1be)]({'email':_0x12572b['email']}),_0x48e224=await master_shop['find']();console[_0xd9974e(0x1a3)](_0xd9974e(0x1b7),_0x48e224),warehouse_data=await warehouse[_0xd9974e(0x1d2)]([{'$match':{'status':_0xd9974e(0x1bf)}},{'$group':{'_id':_0xd9974e(0x1b1),'name':{'$first':'$name'}}}]);const _0x1ae56e=await staff[_0xd9974e(0x1a5)]();console[_0xd9974e(0x1a3)](_0x1ae56e);if(_0x48e224[0x0][_0xd9974e(0x1cf)]==_0xd9974e(0x1b3)){var _0x5e2771=users[_0xd9974e(0x1c4)];console[_0xd9974e(0x1a3)](_0x5e2771);}else{if(_0x48e224[0x0][_0xd9974e(0x1cf)]==_0xd9974e(0x1a2))var _0x5e2771=users[_0xd9974e(0x1a2)];else{if(_0x48e224[0x0]['language']==_0xd9974e(0x1a0))var _0x5e2771=users[_0xd9974e(0x1a0)];else{if(_0x48e224[0x0][_0xd9974e(0x1cf)]==_0xd9974e(0x1d4))var _0x5e2771=users[_0xd9974e(0x1d4)];else{if(_0x48e224[0x0][_0xd9974e(0x1cf)]==_0xd9974e(0x1ba))var _0x5e2771=users[_0xd9974e(0x1ba)];else{if(_0x48e224[0x0]['language']==_0xd9974e(0x1d1))var _0x5e2771=users['Portuguese'];else{if(_0x48e224[0x0][_0xd9974e(0x1cf)]==_0xd9974e(0x1c3))var _0x5e2771=users[_0xd9974e(0x1c3)];else{if(_0x48e224[0x0][_0xd9974e(0x1cf)]==_0xd9974e(0x1ab))var _0x5e2771=users[_0xd9974e(0x1d6)];}}}}}}}let _0x191d1f=[_0xd9974e(0x1a9),'Finished\x20Goods'];_0x338539[_0xd9974e(0x19a)]('staff',{'success':_0xd8bc96[_0xd9974e(0x1b5)]('success'),'errors':_0xd8bc96[_0xd9974e(0x1b5)](_0xd9974e(0x1af)),'role':_0x12572b,'profile':_0x3cc8b7,'master_shop':_0x48e224,'user':_0x1ae56e,'language':_0x5e2771,'warehouse':warehouse_data,'warehouse_cat':_0x191d1f});}catch(_0x157fc8){console['log'](_0x157fc8);}}),router[a0_0x515df3(0x1c8)](a0_0x515df3(0x1d5),auth,async(_0x1e2971,_0x43c9c9)=>{const _0xa5e26d=a0_0x515df3;try{const {name:_0xb37ec9,email:_0x298485,mobile:_0x4ec1be,password:_0x11ec84,status:_0x39d883,warehouse:_0x536123,position:_0x564c17,warehouse_cat:_0x2d33eb}=_0x1e2971['body'],_0x4715a0=await bcrypt['hash'](_0x11ec84,0xa),_0x2f2a2a=new staff({'name':_0xb37ec9,'email':_0x298485,'mobile':_0x4ec1be,'status':_0x39d883,'warehouse':_0x536123,'position':_0x564c17,'warehouse_category':_0x2d33eb}),_0x39df4f=await staff[_0xa5e26d(0x1be)]({'email':_0x298485});console[_0xa5e26d(0x1a3)](_0x39df4f);if(_0x39df4f)return _0x1e2971[_0xa5e26d(0x1b5)]('errors',_0xa5e26d(0x19d)+_0x298485+_0xa5e26d(0x1c2)),_0x43c9c9[_0xa5e26d(0x1b2)](_0xa5e26d(0x1c9)),![];const _0x23fccf=await _0x2f2a2a[_0xa5e26d(0x1d7)](),_0x3f4ad6=new sing_up({'name':_0xb37ec9,'email':_0x298485,'password':_0x4715a0,'role':'staff'}),_0x4b0d13=await _0x3f4ad6['save'](),_0x569f08=new profile({'firstname':_0xb37ec9,'email':_0x298485}),_0x317e98=await _0x569f08['save']();_0x1e2971[_0xa5e26d(0x1b5)](_0xa5e26d(0x1bd),_0xb37ec9+'\x20is\x20add\x20successfully'),_0x43c9c9[_0xa5e26d(0x1b2)]('/staff/view');}catch(_0xcd3ddd){console[_0xa5e26d(0x1a3)](_0xcd3ddd);}}),router[a0_0x515df3(0x1ae)]('/view/:id',auth,async(_0x2c245f,_0x6df5f4)=>{const _0x2d5c68=a0_0x515df3;try{const _0x583d7a=_0x2c245f[_0x2d5c68(0x1ce)]['id'],_0x414491=await master_shop[_0x2d5c68(0x1a5)](),_0x38f058=await staff[_0x2d5c68(0x1ac)](_0x583d7a);if(_0x414491[0x0][_0x2d5c68(0x1cf)]==_0x2d5c68(0x1b3)){var _0x4ec380=users[_0x2d5c68(0x1c4)];console[_0x2d5c68(0x1a3)](_0x4ec380);}else{if(_0x414491[0x0][_0x2d5c68(0x1cf)]==_0x2d5c68(0x1a2))var _0x4ec380=users[_0x2d5c68(0x1a2)];else{if(_0x414491[0x0][_0x2d5c68(0x1cf)]==_0x2d5c68(0x1a0))var _0x4ec380=users[_0x2d5c68(0x1a0)];else{if(_0x414491[0x0][_0x2d5c68(0x1cf)]=='Spanish')var _0x4ec380=users[_0x2d5c68(0x1d4)];else{if(_0x414491[0x0][_0x2d5c68(0x1cf)]==_0x2d5c68(0x1ba))var _0x4ec380=users['French'];else{if(_0x414491[0x0][_0x2d5c68(0x1cf)]=='Portuguese\x20(BR)')var _0x4ec380=users[_0x2d5c68(0x1b8)];else{if(_0x414491[0x0][_0x2d5c68(0x1cf)]==_0x2d5c68(0x1c3))var _0x4ec380=users[_0x2d5c68(0x1c3)];else{if(_0x414491[0x0][_0x2d5c68(0x1cf)]=='Arabic\x20(ae)')var _0x4ec380=users[_0x2d5c68(0x1d6)];}}}}}}}let _0x482f6b=['Raw\x20Materials',_0x2d5c68(0x1c7)];_0x6df5f4[_0x2d5c68(0x19a)](_0x2d5c68(0x1a8),{'success':_0x2c245f[_0x2d5c68(0x1b5)](_0x2d5c68(0x1bd)),'errors':_0x2c245f[_0x2d5c68(0x1b5)](_0x2d5c68(0x1af)),'master_shop':_0x414491,'user':_0x38f058,'language':_0x4ec380,'warehouse_cat':_0x482f6b});}catch(_0x5755cc){console[_0x2d5c68(0x1a3)](_0x5755cc);}}),router[a0_0x515df3(0x1c8)](a0_0x515df3(0x1c6),auth,async(_0x1a0dbc,_0x7084c7)=>{const _0xea0009=a0_0x515df3;try{const _0x1da8de=_0x1a0dbc[_0xea0009(0x1ce)]['id'],_0x308104=await staff[_0xea0009(0x1ac)](_0x1da8de),{name:_0x2ed3c5,email:_0xcf2769,mobile:_0x31fdb5,password:_0x66bc19,status:_0x3b0694,warehouse:_0xf1cf41,position:_0x367cd4,warehouse_cat:_0x5597c0}=_0x1a0dbc[_0xea0009(0x1b6)];_0x308104[_0xea0009(0x19f)]=_0x2ed3c5,_0x308104[_0xea0009(0x1c0)]=_0xcf2769,_0x308104['mobile']=_0x31fdb5,_0x308104[_0xea0009(0x1cb)]=_0x66bc19,_0x308104['status']=_0x3b0694,_0x308104[_0xea0009(0x1a7)]=_0xf1cf41,_0x308104[_0xea0009(0x1a6)]=_0x367cd4,_0x308104[_0xea0009(0x1cc)]=_0x5597c0;const _0x53e264=await _0x308104[_0xea0009(0x1d7)](),_0x415170=await profile['findOne']({'email':_0xcf2769});_0x415170[_0xea0009(0x19c)]=_0x2ed3c5,_0x415170[_0xea0009(0x1c0)]=_0xcf2769,await _0x415170[_0xea0009(0x1d7)](),_0x1a0dbc[_0xea0009(0x1b5)]('success',_0xea0009(0x19e)),_0x7084c7[_0xea0009(0x1b2)](_0xea0009(0x1c5));}catch(_0x5bf1bf){console[_0xea0009(0x1a3)](_0x5bf1bf),_0x7084c7['status'](0xc8)[_0xea0009(0x1cd)](_0x5bf1bf);}}),module[a0_0x515df3(0x1d3)]=router;