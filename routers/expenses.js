const a0_0x58a23c=a0_0x2fe9;(function(_0x2383a4,_0x5b7b29){const _0x2a59b6=a0_0x2fe9,_0x2da048=_0x2383a4();while(!![]){try{const _0x677728=-parseInt(_0x2a59b6(0xd1))/0x1+-parseInt(_0x2a59b6(0xdf))/0x2*(parseInt(_0x2a59b6(0x100))/0x3)+parseInt(_0x2a59b6(0xe1))/0x4+parseInt(_0x2a59b6(0xdc))/0x5*(-parseInt(_0x2a59b6(0xe2))/0x6)+-parseInt(_0x2a59b6(0xe0))/0x7+-parseInt(_0x2a59b6(0xf0))/0x8+parseInt(_0x2a59b6(0x10a))/0x9;if(_0x677728===_0x5b7b29)break;else _0x2da048['push'](_0x2da048['shift']());}catch(_0x65465d){_0x2da048['push'](_0x2da048['shift']());}}}(a0_0x40ce,0xcfe99));function a0_0x2fe9(_0x59c802,_0x2a0694){const _0x40cef3=a0_0x40ce();return a0_0x2fe9=function(_0x2fe90b,_0x501a43){_0x2fe90b=_0x2fe90b-0xd1;let _0x564621=_0x40cef3[_0x2fe90b];return _0x564621;},a0_0x2fe9(_0x59c802,_0x2a0694);}function a0_0x40ce(){const _0x2fa3f3=['6532164NhueLb','4090140mWLcPb','Spanish','/view','expenses_type','name','../middleware/auth','Chinese','expenses','user','/all_expenses/view','flash','log','German','exports','9639752AkVBqJ','English\x20(US)','updateMany','Portuguese','Expenses\x20data\x20delete\x20successfully','save','language','all','/view/add_expenses','errors','params','add_expenses','body','get','find','Arabic\x20(ae)','25248VRpMVg','/type','/type/delete/:id','Arabic','findOne','findById','Router','findByIdAndUpdate','/view/:id','\x20expenses\x20is\x20add\x20successfully','31408497EdJdOd','../public/language/languages.json','express','post','redirect','38072XiCzZU','success','English','master','Hindi','expenses\x20data\x20update\x20successfully','French','email','Portuguese\x20(BR)','edit_expenses','countDocuments','5qSUsdb','render','/all_expenses/type','368pJOWIP','5585930AhkUtX'];a0_0x40ce=function(){return _0x2fa3f3;};return a0_0x40ce();}const express=require(a0_0x58a23c(0x10c)),app=express(),router=express[a0_0x58a23c(0x106)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require('../models/all_models'),auth=require(a0_0x58a23c(0xe7)),users=require(a0_0x58a23c(0x10b));router[a0_0x58a23c(0xfd)](a0_0x58a23c(0x101),auth,async(_0x20d76d,_0x59c61f)=>{const _0x5cde79=a0_0x58a23c;try{const {username:_0x12e37e,email:_0x1c7dfd,role:_0x435575}=_0x20d76d[_0x5cde79(0xea)],_0x2c5e59=_0x20d76d[_0x5cde79(0xea)],_0x539ead=await profile[_0x5cde79(0x104)]({'email':_0x2c5e59['email']}),_0x5703a5=await master_shop[_0x5cde79(0xfe)]();if(_0x5703a5[0x0][_0x5cde79(0xf6)]==_0x5cde79(0xf1)){var _0x41c37d=users[_0x5cde79(0xd3)];console[_0x5cde79(0xed)](_0x41c37d);}else{if(_0x5703a5[0x0]['language']==_0x5cde79(0xd5))var _0x41c37d=users['Hindi'];else{if(_0x5703a5[0x0][_0x5cde79(0xf6)]==_0x5cde79(0xee))var _0x41c37d=users[_0x5cde79(0xee)];else{if(_0x5703a5[0x0][_0x5cde79(0xf6)]==_0x5cde79(0xe3))var _0x41c37d=users[_0x5cde79(0xe3)];else{if(_0x5703a5[0x0]['language']==_0x5cde79(0xd7))var _0x41c37d=users[_0x5cde79(0xd7)];else{if(_0x5703a5[0x0][_0x5cde79(0xf6)]==_0x5cde79(0xd9))var _0x41c37d=users[_0x5cde79(0xf3)];else{if(_0x5703a5[0x0][_0x5cde79(0xf6)]=='Chinese')var _0x41c37d=users[_0x5cde79(0xe8)];else{if(_0x5703a5[0x0][_0x5cde79(0xf6)]==_0x5cde79(0xff))var _0x41c37d=users[_0x5cde79(0x103)];}}}}}}}const _0x3f8e53=await expenses_type[_0x5cde79(0xfe)]({}),_0x425db0=await Promise[_0x5cde79(0xf7)](_0x3f8e53['map'](async _0x5ac240=>{const _0x4f9d11=_0x5cde79,_0x3bea6a=await all_expenses[_0x4f9d11(0xdb)]({'type':_0x5ac240[_0x4f9d11(0xe6)]});return{..._0x5ac240['toJSON'](),'count':_0x3bea6a};}));_0x59c61f[_0x5cde79(0xdd)](_0x5cde79(0xe5),{'success':_0x20d76d[_0x5cde79(0xec)](_0x5cde79(0xd2)),'errors':_0x20d76d['flash'](_0x5cde79(0xf9)),'role':_0x2c5e59,'profile':_0x539ead,'master_shop':_0x5703a5,'language':_0x41c37d,'expensesData':_0x425db0});}catch(_0x42e2c9){console[_0x5cde79(0xed)](_0x42e2c9);}}),router['post'](a0_0x58a23c(0x101),auth,async(_0x2dec91,_0x2d79ec)=>{const _0x2b488e=a0_0x58a23c;try{const {name:_0x465161}=_0x2dec91[_0x2b488e(0xfc)],_0x16791a=new expenses_type({'name':_0x465161}),_0x3386a2=await expenses_type[_0x2b488e(0x104)]({'name':_0x465161});if(_0x3386a2)_0x2dec91[_0x2b488e(0xec)]('errors',_0x465161+'\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another');else{_0x2dec91[_0x2b488e(0xec)](_0x2b488e(0xd2),_0x465161+_0x2b488e(0x109));const _0xa69a88=await _0x16791a[_0x2b488e(0xf5)]();}_0x2d79ec[_0x2b488e(0x10e)](_0x2b488e(0xde));}catch(_0x2456b8){console[_0x2b488e(0xed)](_0x2456b8);}}),router['post']('/type/:id',auth,async(_0x180eb3,_0x318b11)=>{const _0x5c9bd5=a0_0x58a23c;try{const _0x5b810a=_0x180eb3[_0x5c9bd5(0xfa)]['id'],_0x130595=await expenses_type[_0x5c9bd5(0x105)](_0x5b810a),_0x558702=await expenses_type['findByIdAndUpdate'](_0x5b810a,_0x180eb3[_0x5c9bd5(0xfc)]),_0xe29bab=await all_expenses[_0x5c9bd5(0xf2)]({'type':_0x130595[_0x5c9bd5(0xe6)]},{'$set':{'type':_0x180eb3[_0x5c9bd5(0xfc)][_0x5c9bd5(0xe6)]}});_0x180eb3[_0x5c9bd5(0xec)](_0x5c9bd5(0xd2),'expenses\x20data\x20update\x20successfully'),_0x318b11[_0x5c9bd5(0x10e)](_0x5c9bd5(0xde));}catch(_0x318303){console[_0x5c9bd5(0xed)](_0x318303);}}),router[a0_0x58a23c(0xfd)](a0_0x58a23c(0x102),auth,async(_0xf9308c,_0x611e4a)=>{const _0x3e56b4=a0_0x58a23c;try{const _0xa4237a=_0xf9308c[_0x3e56b4(0xfa)]['id'],_0x22596e=await expenses_type['findByIdAndDelete'](_0xa4237a);_0xf9308c[_0x3e56b4(0xec)](_0x3e56b4(0xd2),_0x3e56b4(0xf4)),_0x611e4a['redirect']('/all_expenses/type');}catch(_0x2dbee9){console['log'](_0x2dbee9);}}),router[a0_0x58a23c(0xfd)](a0_0x58a23c(0xe4),auth,async(_0x282845,_0x30727d)=>{const _0x572379=a0_0x58a23c;try{const {username:_0x2b9305,email:_0x3cc90a,role:_0x5c40e1}=_0x282845['user'],_0x3ab5f8=_0x282845[_0x572379(0xea)],_0x43e6be=await profile[_0x572379(0x104)]({'email':_0x3ab5f8[_0x572379(0xd8)]}),_0xab7846=await master_shop[_0x572379(0xfe)]();console[_0x572379(0xed)](_0x572379(0xd4),_0xab7846);const _0x21ef55=await expenses_type[_0x572379(0xfe)]({}),_0x35f2e3=await all_expenses['find']({});console[_0x572379(0xed)](_0x35f2e3);if(_0xab7846[0x0]['language']==_0x572379(0xf1)){var _0x14b6a1=users[_0x572379(0xd3)];console[_0x572379(0xed)](_0x14b6a1);}else{if(_0xab7846[0x0][_0x572379(0xf6)]=='Hindi')var _0x14b6a1=users[_0x572379(0xd5)];else{if(_0xab7846[0x0][_0x572379(0xf6)]==_0x572379(0xee))var _0x14b6a1=users['German'];else{if(_0xab7846[0x0]['language']=='Spanish')var _0x14b6a1=users[_0x572379(0xe3)];else{if(_0xab7846[0x0][_0x572379(0xf6)]==_0x572379(0xd7))var _0x14b6a1=users[_0x572379(0xd7)];else{if(_0xab7846[0x0]['language']=='Portuguese\x20(BR)')var _0x14b6a1=users[_0x572379(0xf3)];else{if(_0xab7846[0x0][_0x572379(0xf6)]==_0x572379(0xe8))var _0x14b6a1=users[_0x572379(0xe8)];else{if(_0xab7846[0x0][_0x572379(0xf6)]=='Arabic\x20(ae)')var _0x14b6a1=users[_0x572379(0x103)];}}}}}}}_0x30727d[_0x572379(0xdd)](_0x572379(0xe9),{'success':_0x282845[_0x572379(0xec)]('success'),'errors':_0x282845[_0x572379(0xec)](_0x572379(0xf9)),'role':_0x3ab5f8,'profile':_0x43e6be,'data':_0x21ef55,'expenses_data':_0x35f2e3,'master_shop':_0xab7846,'language':_0x14b6a1});}catch(_0x54e035){console[_0x572379(0xed)](_0x54e035);}}),router[a0_0x58a23c(0xfd)](a0_0x58a23c(0xf8),auth,async(_0x3f2f5f,_0x10e735)=>{const _0x5002f0=a0_0x58a23c;try{const {username:_0x11c782,email:_0x2ca247,role:_0x5cba58}=_0x3f2f5f['user'],_0x395c8e=_0x3f2f5f[_0x5002f0(0xea)],_0x927f38=await profile[_0x5002f0(0x104)]({'email':_0x395c8e[_0x5002f0(0xd8)]}),_0x1d6788=await master_shop[_0x5002f0(0xfe)]();console['log'](_0x5002f0(0xd4),_0x1d6788);const _0x24dbf5=await expenses_type[_0x5002f0(0xfe)]({});if(_0x1d6788[0x0][_0x5002f0(0xf6)]==_0x5002f0(0xf1)){var _0x27eebf=users[_0x5002f0(0xd3)];console[_0x5002f0(0xed)](_0x27eebf);}else{if(_0x1d6788[0x0]['language']==_0x5002f0(0xd5))var _0x27eebf=users[_0x5002f0(0xd5)];else{if(_0x1d6788[0x0][_0x5002f0(0xf6)]==_0x5002f0(0xee))var _0x27eebf=users[_0x5002f0(0xee)];else{if(_0x1d6788[0x0][_0x5002f0(0xf6)]=='Spanish')var _0x27eebf=users[_0x5002f0(0xe3)];else{if(_0x1d6788[0x0][_0x5002f0(0xf6)]==_0x5002f0(0xd7))var _0x27eebf=users[_0x5002f0(0xd7)];else{if(_0x1d6788[0x0][_0x5002f0(0xf6)]==_0x5002f0(0xd9))var _0x27eebf=users[_0x5002f0(0xf3)];else{if(_0x1d6788[0x0][_0x5002f0(0xf6)]=='Chinese')var _0x27eebf=users[_0x5002f0(0xe8)];else{if(_0x1d6788[0x0][_0x5002f0(0xf6)]==_0x5002f0(0xff))var _0x27eebf=users[_0x5002f0(0x103)];}}}}}}}_0x10e735[_0x5002f0(0xdd)](_0x5002f0(0xfb),{'success':_0x3f2f5f[_0x5002f0(0xec)](_0x5002f0(0xd2)),'errors':_0x3f2f5f['flash'](_0x5002f0(0xf9)),'role':_0x395c8e,'profile':_0x927f38,'data':_0x24dbf5,'master_shop':_0x1d6788,'language':_0x27eebf});}catch(_0xa6e5a8){console['log'](_0xa6e5a8);}}),router['post']('/view/add_expenses',auth,async(_0x5ee379,_0x44c309)=>{const _0x2b9754=a0_0x58a23c;try{const {type:_0x2ea48e,date:_0x3a503d,amount:_0x5a2ff2,note:_0x13116f}=_0x5ee379[_0x2b9754(0xfc)],_0x1de943=new all_expenses({'type':_0x2ea48e,'date':_0x3a503d,'amount':_0x5a2ff2,'note':_0x13116f}),_0x1d662c=await _0x1de943[_0x2b9754(0xf5)]();_0x44c309['redirect'](_0x2b9754(0xeb));}catch(_0x4d2d83){console[_0x2b9754(0xed)](_0x4d2d83);}}),router[a0_0x58a23c(0xfd)](a0_0x58a23c(0x108),auth,async(_0x436b7a,_0x59ff53)=>{const _0x57eef6=a0_0x58a23c;try{const {username:_0x2ad735,email:_0x3a4bb5,role:_0x3bc3e8}=_0x436b7a[_0x57eef6(0xea)],_0x5226a4=_0x436b7a[_0x57eef6(0xea)],_0x5f163e=await profile[_0x57eef6(0x104)]({'email':_0x5226a4[_0x57eef6(0xd8)]}),_0x44d57c=await master_shop[_0x57eef6(0xfe)]();console[_0x57eef6(0xed)]('master',_0x44d57c);const _0x2a00c7=await expenses_type[_0x57eef6(0xfe)]({});console[_0x57eef6(0xed)](_0x2a00c7);const _0x2a0756=await all_expenses[_0x57eef6(0x105)](_0x436b7a['params']['id']);console[_0x57eef6(0xed)](_0x2a0756);if(_0x44d57c[0x0][_0x57eef6(0xf6)]==_0x57eef6(0xf1)){var _0x13ede2=users['English'];console['log'](_0x13ede2);}else{if(_0x44d57c[0x0]['language']==_0x57eef6(0xd5))var _0x13ede2=users[_0x57eef6(0xd5)];else{if(_0x44d57c[0x0][_0x57eef6(0xf6)]==_0x57eef6(0xee))var _0x13ede2=users['German'];else{if(_0x44d57c[0x0][_0x57eef6(0xf6)]==_0x57eef6(0xe3))var _0x13ede2=users[_0x57eef6(0xe3)];else{if(_0x44d57c[0x0][_0x57eef6(0xf6)]==_0x57eef6(0xd7))var _0x13ede2=users[_0x57eef6(0xd7)];else{if(_0x44d57c[0x0][_0x57eef6(0xf6)]==_0x57eef6(0xd9))var _0x13ede2=users[_0x57eef6(0xf3)];else{if(_0x44d57c[0x0]['language']==_0x57eef6(0xe8))var _0x13ede2=users['Chinese'];else{if(_0x44d57c[0x0][_0x57eef6(0xf6)]==_0x57eef6(0xff))var _0x13ede2=users['Arabic'];}}}}}}}_0x59ff53['render'](_0x57eef6(0xda),{'success':_0x436b7a[_0x57eef6(0xec)](_0x57eef6(0xd2)),'errors':_0x436b7a[_0x57eef6(0xec)]('errors'),'role':_0x5226a4,'profile':_0x5f163e,'data':_0x2a00c7,'expenses_data':_0x2a0756,'master_shop':_0x44d57c,'language':_0x13ede2});}catch(_0x2818ca){console[_0x57eef6(0xed)](_0x2818ca);}}),router[a0_0x58a23c(0x10d)](a0_0x58a23c(0x108),auth,async(_0x2e7b65,_0x5e7036)=>{const _0x58b20d=a0_0x58a23c;try{const _0x1af4e8=_0x2e7b65['params']['id'];console[_0x58b20d(0xed)](_0x1af4e8);const _0xb3e2aa=await all_expenses[_0x58b20d(0x107)](_0x1af4e8,_0x2e7b65[_0x58b20d(0xfc)]);console[_0x58b20d(0xed)](_0xb3e2aa),_0x2e7b65['flash'](_0x58b20d(0xd2),_0x58b20d(0xd6)),_0x5e7036[_0x58b20d(0x10e)](_0x58b20d(0xeb));}catch(_0x1eaf89){console['log'](_0x1eaf89);}}),module[a0_0x58a23c(0xef)]=router;