const a0_0x5a371b=a0_0x17dc;(function(_0x115018,_0x1e7a61){const _0x350382=a0_0x17dc,_0x34d734=_0x115018();while(!![]){try{const _0x514ea9=-parseInt(_0x350382(0x75))/0x1+parseInt(_0x350382(0x82))/0x2+parseInt(_0x350382(0x7c))/0x3*(-parseInt(_0x350382(0x9e))/0x4)+parseInt(_0x350382(0xa5))/0x5*(parseInt(_0x350382(0x7a))/0x6)+parseInt(_0x350382(0x7e))/0x7+-parseInt(_0x350382(0xaa))/0x8+parseInt(_0x350382(0x81))/0x9;if(_0x514ea9===_0x1e7a61)break;else _0x34d734['push'](_0x34d734['shift']());}catch(_0x32d357){_0x34d734['push'](_0x34d734['shift']());}}}(a0_0xb98e,0xb626b));function a0_0x17dc(_0x2b3f88,_0x4140fb){const _0xb98eb8=a0_0xb98e();return a0_0x17dc=function(_0x17dcb1,_0x4f275c){_0x17dcb1=_0x17dcb1-0x73;let _0x53f75a=_0xb98eb8[_0x17dcb1];return _0x53f75a;},a0_0x17dc(_0x2b3f88,_0x4140fb);}function a0_0xb98e(){const _0x366d03=['Arabic\x20(ae)','name','790apDBjr','Portuguese','post','render','/view/:id','7445968ILtEgO','params','log','save','get','English\x20(US)','../public/language/languages.json','find','/type/:id','German','/type/delete/:id','1308166GGGRGs','../middleware/auth','Expenses\x20data\x20delete\x20successfully','add_expenses','/view/add_expenses','5268gXShzV','/all_expenses/type','9xBZAmE','\x20expenses\x20is\x20add\x20successfully','3868025AHtXmy','master','Arabic','13048614DxZUOF','2245926TzeXIp','../models/all_models','expenses','findOne','Portuguese\x20(BR)','language','findById','expenses\x20data\x20update\x20successfully','all','exports','/all_expenses/view','expenses_type','errors','French','English','flash','Chinese','redirect','findByIdAndUpdate','success','edit_expenses','body','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','Router','/type','Spanish','Hindi','express','372140oVlUuf','user','email','toJSON','map'];a0_0xb98e=function(){return _0x366d03;};return a0_0xb98e();}const express=require(a0_0x5a371b(0x9d)),app=express(),router=express[a0_0x5a371b(0x99)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require(a0_0x5a371b(0x83)),auth=require(a0_0x5a371b(0x76)),users=require(a0_0x5a371b(0xb0));router[a0_0x5a371b(0xae)](a0_0x5a371b(0x9a),auth,async(_0x3d6800,_0x22149a)=>{const _0x32d771=a0_0x5a371b;try{const {username:_0x1b55ee,email:_0x5716c1,role:_0x469115}=_0x3d6800[_0x32d771(0x9f)],_0x4a64bb=_0x3d6800[_0x32d771(0x9f)],_0x1b1a3f=await profile['findOne']({'email':_0x4a64bb['email']}),_0x550ef4=await master_shop[_0x32d771(0xb1)]();if(_0x550ef4[0x0][_0x32d771(0x87)]==_0x32d771(0xaf)){var _0x180cd0=users[_0x32d771(0x90)];console[_0x32d771(0xac)](_0x180cd0);}else{if(_0x550ef4[0x0][_0x32d771(0x87)]==_0x32d771(0x9c))var _0x180cd0=users[_0x32d771(0x9c)];else{if(_0x550ef4[0x0][_0x32d771(0x87)]==_0x32d771(0x73))var _0x180cd0=users[_0x32d771(0x73)];else{if(_0x550ef4[0x0]['language']==_0x32d771(0x9b))var _0x180cd0=users[_0x32d771(0x9b)];else{if(_0x550ef4[0x0][_0x32d771(0x87)]==_0x32d771(0x8f))var _0x180cd0=users[_0x32d771(0x8f)];else{if(_0x550ef4[0x0][_0x32d771(0x87)]==_0x32d771(0x86))var _0x180cd0=users[_0x32d771(0xa6)];else{if(_0x550ef4[0x0]['language']==_0x32d771(0x92))var _0x180cd0=users[_0x32d771(0x92)];else{if(_0x550ef4[0x0][_0x32d771(0x87)]=='Arabic\x20(ae)')var _0x180cd0=users['Arabic'];}}}}}}}const _0x27a7b1=await expenses_type[_0x32d771(0xb1)]({}),_0x5864b2=await Promise[_0x32d771(0x8a)](_0x27a7b1[_0x32d771(0xa2)](async _0x192eb6=>{const _0x4599c8=_0x32d771,_0x462052=await all_expenses['countDocuments']({'type':_0x192eb6['name']});return{..._0x192eb6[_0x4599c8(0xa1)](),'count':_0x462052};}));_0x22149a[_0x32d771(0xa8)](_0x32d771(0x8d),{'success':_0x3d6800[_0x32d771(0x91)](_0x32d771(0x95)),'errors':_0x3d6800['flash']('errors'),'role':_0x4a64bb,'profile':_0x1b1a3f,'master_shop':_0x550ef4,'language':_0x180cd0,'expensesData':_0x5864b2});}catch(_0x4d5c72){console['log'](_0x4d5c72);}}),router['post'](a0_0x5a371b(0x9a),auth,async(_0x56b803,_0x596ba6)=>{const _0x5a5905=a0_0x5a371b;try{const {name:_0x3fab94}=_0x56b803[_0x5a5905(0x97)],_0x2b8c46=new expenses_type({'name':_0x3fab94}),_0x204dc7=await expenses_type[_0x5a5905(0x85)]({'name':_0x3fab94});if(_0x204dc7)_0x56b803[_0x5a5905(0x91)]('errors',_0x3fab94+_0x5a5905(0x98));else{_0x56b803[_0x5a5905(0x91)](_0x5a5905(0x95),_0x3fab94+_0x5a5905(0x7d));const _0x23f167=await _0x2b8c46[_0x5a5905(0xad)]();}_0x596ba6[_0x5a5905(0x93)](_0x5a5905(0x7b));}catch(_0xe77134){console[_0x5a5905(0xac)](_0xe77134);}}),router[a0_0x5a371b(0xa7)](a0_0x5a371b(0xb2),auth,async(_0x57bb85,_0x14a738)=>{const _0x104f26=a0_0x5a371b;try{const _0x416fc3=_0x57bb85[_0x104f26(0xab)]['id'],_0x3886b9=await expenses_type['findById'](_0x416fc3),_0x454c80=await expenses_type[_0x104f26(0x94)](_0x416fc3,_0x57bb85[_0x104f26(0x97)]),_0xd29ce2=await all_expenses['updateMany']({'type':_0x3886b9[_0x104f26(0xa4)]},{'$set':{'type':_0x57bb85[_0x104f26(0x97)]['name']}});_0x57bb85[_0x104f26(0x91)](_0x104f26(0x95),_0x104f26(0x89)),_0x14a738[_0x104f26(0x93)](_0x104f26(0x7b));}catch(_0x427ecd){console[_0x104f26(0xac)](_0x427ecd);}}),router[a0_0x5a371b(0xae)](a0_0x5a371b(0x74),auth,async(_0x4eb052,_0x47842b)=>{const _0x2038ca=a0_0x5a371b;try{const _0x4da450=_0x4eb052[_0x2038ca(0xab)]['id'],_0x121c6b=await expenses_type['findByIdAndDelete'](_0x4da450);_0x4eb052['flash'](_0x2038ca(0x95),_0x2038ca(0x77)),_0x47842b[_0x2038ca(0x93)](_0x2038ca(0x7b));}catch(_0x49166c){console['log'](_0x49166c);}}),router['get']('/view',auth,async(_0x38e09c,_0x54ce96)=>{const _0x5687a1=a0_0x5a371b;try{const {username:_0x8d64d8,email:_0x1d4860,role:_0x3a4e5a}=_0x38e09c[_0x5687a1(0x9f)],_0x13a99e=_0x38e09c[_0x5687a1(0x9f)],_0x5adcab=await profile['findOne']({'email':_0x13a99e[_0x5687a1(0xa0)]}),_0x5c1e4f=await master_shop['find']();console[_0x5687a1(0xac)](_0x5687a1(0x7f),_0x5c1e4f);const _0x44ee40=await expenses_type['find']({}),_0x4dc873=await all_expenses[_0x5687a1(0xb1)]({});console[_0x5687a1(0xac)](_0x4dc873);if(_0x5c1e4f[0x0][_0x5687a1(0x87)]==_0x5687a1(0xaf)){var _0x5b2a06=users[_0x5687a1(0x90)];console[_0x5687a1(0xac)](_0x5b2a06);}else{if(_0x5c1e4f[0x0][_0x5687a1(0x87)]==_0x5687a1(0x9c))var _0x5b2a06=users[_0x5687a1(0x9c)];else{if(_0x5c1e4f[0x0][_0x5687a1(0x87)]==_0x5687a1(0x73))var _0x5b2a06=users[_0x5687a1(0x73)];else{if(_0x5c1e4f[0x0][_0x5687a1(0x87)]==_0x5687a1(0x9b))var _0x5b2a06=users[_0x5687a1(0x9b)];else{if(_0x5c1e4f[0x0][_0x5687a1(0x87)]==_0x5687a1(0x8f))var _0x5b2a06=users['French'];else{if(_0x5c1e4f[0x0]['language']==_0x5687a1(0x86))var _0x5b2a06=users[_0x5687a1(0xa6)];else{if(_0x5c1e4f[0x0]['language']==_0x5687a1(0x92))var _0x5b2a06=users[_0x5687a1(0x92)];else{if(_0x5c1e4f[0x0]['language']==_0x5687a1(0xa3))var _0x5b2a06=users['Arabic'];}}}}}}}_0x54ce96[_0x5687a1(0xa8)](_0x5687a1(0x84),{'success':_0x38e09c[_0x5687a1(0x91)](_0x5687a1(0x95)),'errors':_0x38e09c[_0x5687a1(0x91)]('errors'),'role':_0x13a99e,'profile':_0x5adcab,'data':_0x44ee40,'expenses_data':_0x4dc873,'master_shop':_0x5c1e4f,'language':_0x5b2a06});}catch(_0x3149e0){console[_0x5687a1(0xac)](_0x3149e0);}}),router[a0_0x5a371b(0xae)](a0_0x5a371b(0x79),auth,async(_0x5a236b,_0x32090f)=>{const _0x3bf83b=a0_0x5a371b;try{const {username:_0x386748,email:_0xd13b50,role:_0x24fc0c}=_0x5a236b[_0x3bf83b(0x9f)],_0x1f294f=_0x5a236b['user'],_0x236c67=await profile[_0x3bf83b(0x85)]({'email':_0x1f294f['email']}),_0x17b29a=await master_shop[_0x3bf83b(0xb1)]();console[_0x3bf83b(0xac)]('master',_0x17b29a);const _0x3d961a=await expenses_type['find']({});if(_0x17b29a[0x0][_0x3bf83b(0x87)]==_0x3bf83b(0xaf)){var _0x36cb86=users[_0x3bf83b(0x90)];console[_0x3bf83b(0xac)](_0x36cb86);}else{if(_0x17b29a[0x0][_0x3bf83b(0x87)]==_0x3bf83b(0x9c))var _0x36cb86=users['Hindi'];else{if(_0x17b29a[0x0][_0x3bf83b(0x87)]==_0x3bf83b(0x73))var _0x36cb86=users[_0x3bf83b(0x73)];else{if(_0x17b29a[0x0][_0x3bf83b(0x87)]==_0x3bf83b(0x9b))var _0x36cb86=users[_0x3bf83b(0x9b)];else{if(_0x17b29a[0x0][_0x3bf83b(0x87)]=='French')var _0x36cb86=users[_0x3bf83b(0x8f)];else{if(_0x17b29a[0x0][_0x3bf83b(0x87)]==_0x3bf83b(0x86))var _0x36cb86=users[_0x3bf83b(0xa6)];else{if(_0x17b29a[0x0][_0x3bf83b(0x87)]==_0x3bf83b(0x92))var _0x36cb86=users['Chinese'];else{if(_0x17b29a[0x0][_0x3bf83b(0x87)]==_0x3bf83b(0xa3))var _0x36cb86=users[_0x3bf83b(0x80)];}}}}}}}_0x32090f[_0x3bf83b(0xa8)](_0x3bf83b(0x78),{'success':_0x5a236b[_0x3bf83b(0x91)](_0x3bf83b(0x95)),'errors':_0x5a236b[_0x3bf83b(0x91)]('errors'),'role':_0x1f294f,'profile':_0x236c67,'data':_0x3d961a,'master_shop':_0x17b29a,'language':_0x36cb86});}catch(_0x3ea736){console[_0x3bf83b(0xac)](_0x3ea736);}}),router[a0_0x5a371b(0xa7)](a0_0x5a371b(0x79),auth,async(_0x3152f0,_0x25e411)=>{const _0x3e997f=a0_0x5a371b;try{const {type:_0x40901d,date:_0x5922c9,amount:_0x1b45c2,note:_0x31b53e}=_0x3152f0['body'],_0x3d9980=new all_expenses({'type':_0x40901d,'date':_0x5922c9,'amount':_0x1b45c2,'note':_0x31b53e}),_0x1d4d71=await _0x3d9980[_0x3e997f(0xad)]();_0x25e411[_0x3e997f(0x93)](_0x3e997f(0x8c));}catch(_0x54b417){console[_0x3e997f(0xac)](_0x54b417);}}),router[a0_0x5a371b(0xae)]('/view/:id',auth,async(_0x5ebaa9,_0x477fda)=>{const _0x9fd882=a0_0x5a371b;try{const {username:_0x2651d9,email:_0x1ffc71,role:_0x4c34e6}=_0x5ebaa9[_0x9fd882(0x9f)],_0x4682c3=_0x5ebaa9[_0x9fd882(0x9f)],_0x221cdb=await profile[_0x9fd882(0x85)]({'email':_0x4682c3[_0x9fd882(0xa0)]}),_0x4b4bcf=await master_shop[_0x9fd882(0xb1)]();console[_0x9fd882(0xac)](_0x9fd882(0x7f),_0x4b4bcf);const _0x4c809a=await expenses_type[_0x9fd882(0xb1)]({});console[_0x9fd882(0xac)](_0x4c809a);const _0x15aecc=await all_expenses[_0x9fd882(0x88)](_0x5ebaa9[_0x9fd882(0xab)]['id']);console[_0x9fd882(0xac)](_0x15aecc);if(_0x4b4bcf[0x0][_0x9fd882(0x87)]==_0x9fd882(0xaf)){var _0x57278d=users['English'];console[_0x9fd882(0xac)](_0x57278d);}else{if(_0x4b4bcf[0x0][_0x9fd882(0x87)]==_0x9fd882(0x9c))var _0x57278d=users[_0x9fd882(0x9c)];else{if(_0x4b4bcf[0x0][_0x9fd882(0x87)]==_0x9fd882(0x73))var _0x57278d=users[_0x9fd882(0x73)];else{if(_0x4b4bcf[0x0]['language']=='Spanish')var _0x57278d=users[_0x9fd882(0x9b)];else{if(_0x4b4bcf[0x0][_0x9fd882(0x87)]==_0x9fd882(0x8f))var _0x57278d=users[_0x9fd882(0x8f)];else{if(_0x4b4bcf[0x0][_0x9fd882(0x87)]=='Portuguese\x20(BR)')var _0x57278d=users[_0x9fd882(0xa6)];else{if(_0x4b4bcf[0x0][_0x9fd882(0x87)]=='Chinese')var _0x57278d=users[_0x9fd882(0x92)];else{if(_0x4b4bcf[0x0][_0x9fd882(0x87)]=='Arabic\x20(ae)')var _0x57278d=users[_0x9fd882(0x80)];}}}}}}}_0x477fda[_0x9fd882(0xa8)](_0x9fd882(0x96),{'success':_0x5ebaa9[_0x9fd882(0x91)](_0x9fd882(0x95)),'errors':_0x5ebaa9[_0x9fd882(0x91)](_0x9fd882(0x8e)),'role':_0x4682c3,'profile':_0x221cdb,'data':_0x4c809a,'expenses_data':_0x15aecc,'master_shop':_0x4b4bcf,'language':_0x57278d});}catch(_0x17d69e){console[_0x9fd882(0xac)](_0x17d69e);}}),router[a0_0x5a371b(0xa7)](a0_0x5a371b(0xa9),auth,async(_0x2eae17,_0x59a2f0)=>{const _0x1e41c1=a0_0x5a371b;try{const _0x2c2854=_0x2eae17['params']['id'];console['log'](_0x2c2854);const _0x4edf0e=await all_expenses['findByIdAndUpdate'](_0x2c2854,_0x2eae17[_0x1e41c1(0x97)]);console[_0x1e41c1(0xac)](_0x4edf0e),_0x2eae17[_0x1e41c1(0x91)](_0x1e41c1(0x95),_0x1e41c1(0x89)),_0x59a2f0[_0x1e41c1(0x93)](_0x1e41c1(0x8c));}catch(_0x1949ec){console[_0x1e41c1(0xac)](_0x1949ec);}}),module[a0_0x5a371b(0x8b)]=router;