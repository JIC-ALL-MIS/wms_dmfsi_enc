function a0_0x6df2(){const _0x50ba87=['params','find','email','7rPteco','English\x20(US)','post','Arabic\x20(ae)','success','Hindi','1139820JROucB','name','../models/all_models','all','/view','get','flash','Spanish','user','expenses_type','190gyZqbm','649384urVpDr','findById','472NNsuUg','save','/type','add_expenses','/all_expenses/view','language','Arabic','1366ULfUod','findOne','edit_expenses','/view/add_expenses','Router','1165840POvEFA','render','findByIdAndUpdate','79803iWXmVH','log','express','countDocuments','French','findByIdAndDelete','Portuguese','body','../public/language/languages.json','3324OugHEE','11qiTWgG','master','77jiBidV','updateMany','errors','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','/type/delete/:id','Chinese','Expenses\x20data\x20delete\x20successfully','English','redirect','expenses\x20data\x20update\x20successfully','/all_expenses/type','7504212LSWoJc','exports','/type/:id','Portuguese\x20(BR)','/view/:id','German'];a0_0x6df2=function(){return _0x50ba87;};return a0_0x6df2();}const a0_0x30e2c2=a0_0x92c4;(function(_0x3b1fc2,_0x3d6cc4){const _0x4d2f65=a0_0x92c4,_0xb0af3d=_0x3b1fc2();while(!![]){try{const _0x5f53bf=parseInt(_0x4d2f65(0xc2))/0x1*(-parseInt(_0x4d2f65(0xae))/0x2)+-parseInt(_0x4d2f65(0xbf))/0x3*(-parseInt(_0x4d2f65(0xa7))/0x4)+parseInt(_0x4d2f65(0xb3))/0x5+parseInt(_0x4d2f65(0x9a))/0x6+-parseInt(_0x4d2f65(0x94))/0x7*(-parseInt(_0x4d2f65(0xa5))/0x8)+-parseInt(_0x4d2f65(0xb6))/0x9*(-parseInt(_0x4d2f65(0xa4))/0xa)+parseInt(_0x4d2f65(0xc0))/0xb*(-parseInt(_0x4d2f65(0xcd))/0xc);if(_0x5f53bf===_0x3d6cc4)break;else _0xb0af3d['push'](_0xb0af3d['shift']());}catch(_0x5bd254){_0xb0af3d['push'](_0xb0af3d['shift']());}}}(a0_0x6df2,0x1ea92));const express=require(a0_0x30e2c2(0xb8)),app=express(),router=express[a0_0x30e2c2(0xb2)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require(a0_0x30e2c2(0x9c)),auth=require('../middleware/auth'),users=require(a0_0x30e2c2(0xbe));function a0_0x92c4(_0x397cd8,_0x4a725c){const _0x6df20a=a0_0x6df2();return a0_0x92c4=function(_0x92c43d,_0x21a2ac){_0x92c43d=_0x92c43d-0x8c;let _0x1c3b60=_0x6df20a[_0x92c43d];return _0x1c3b60;},a0_0x92c4(_0x397cd8,_0x4a725c);}router['get'](a0_0x30e2c2(0xa9),auth,async(_0x4ad385,_0x5b54a5)=>{const _0x13a921=a0_0x30e2c2;try{const {username:_0x3e22e5,email:_0x18d05e,role:_0x25db6f}=_0x4ad385[_0x13a921(0xa2)],_0x3a333d=_0x4ad385[_0x13a921(0xa2)],_0x3abc8b=await profile[_0x13a921(0xaf)]({'email':_0x3a333d[_0x13a921(0x93)]}),_0x1f45f6=await master_shop[_0x13a921(0x92)]();if(_0x1f45f6[0x0][_0x13a921(0xac)]==_0x13a921(0x95)){var _0x2573eb=users[_0x13a921(0xc9)];console[_0x13a921(0xb7)](_0x2573eb);}else{if(_0x1f45f6[0x0][_0x13a921(0xac)]=='Hindi')var _0x2573eb=users[_0x13a921(0x99)];else{if(_0x1f45f6[0x0][_0x13a921(0xac)]=='German')var _0x2573eb=users[_0x13a921(0x90)];else{if(_0x1f45f6[0x0][_0x13a921(0xac)]=='Spanish')var _0x2573eb=users['Spanish'];else{if(_0x1f45f6[0x0][_0x13a921(0xac)]=='French')var _0x2573eb=users[_0x13a921(0xba)];else{if(_0x1f45f6[0x0]['language']==_0x13a921(0x8e))var _0x2573eb=users['Portuguese'];else{if(_0x1f45f6[0x0][_0x13a921(0xac)]=='Chinese')var _0x2573eb=users[_0x13a921(0xc7)];else{if(_0x1f45f6[0x0][_0x13a921(0xac)]=='Arabic\x20(ae)')var _0x2573eb=users[_0x13a921(0xad)];}}}}}}}const _0x1a75c9=await expenses_type['find']({}),_0x460bb1=await Promise[_0x13a921(0x9d)](_0x1a75c9['map'](async _0x1f135e=>{const _0xef90ac=_0x13a921,_0x1c491a=await all_expenses[_0xef90ac(0xb9)]({'type':_0x1f135e[_0xef90ac(0x9b)]});return{..._0x1f135e['toJSON'](),'count':_0x1c491a};}));_0x5b54a5['render'](_0x13a921(0xa3),{'success':_0x4ad385[_0x13a921(0xa0)](_0x13a921(0x98)),'errors':_0x4ad385[_0x13a921(0xa0)](_0x13a921(0xc4)),'role':_0x3a333d,'profile':_0x3abc8b,'master_shop':_0x1f45f6,'language':_0x2573eb,'expensesData':_0x460bb1});}catch(_0x1a7da4){console[_0x13a921(0xb7)](_0x1a7da4);}}),router[a0_0x30e2c2(0x96)](a0_0x30e2c2(0xa9),auth,async(_0x54fcc3,_0x3dddfc)=>{const _0x4e7a85=a0_0x30e2c2;try{const {name:_0x46c1aa}=_0x54fcc3['body'],_0x5938b2=new expenses_type({'name':_0x46c1aa}),_0x3cec9d=await expenses_type[_0x4e7a85(0xaf)]({'name':_0x46c1aa});if(_0x3cec9d)_0x54fcc3[_0x4e7a85(0xa0)](_0x4e7a85(0xc4),_0x46c1aa+_0x4e7a85(0xc5));else{_0x54fcc3['flash'](_0x4e7a85(0x98),_0x46c1aa+'\x20expenses\x20is\x20add\x20successfully');const _0x2d55f4=await _0x5938b2['save']();}_0x3dddfc['redirect']('/all_expenses/type');}catch(_0x133ea6){console[_0x4e7a85(0xb7)](_0x133ea6);}}),router[a0_0x30e2c2(0x96)](a0_0x30e2c2(0x8d),auth,async(_0x2d31b8,_0x24d69f)=>{const _0x229012=a0_0x30e2c2;try{const _0xd28a30=_0x2d31b8[_0x229012(0x91)]['id'],_0x317823=await expenses_type['findById'](_0xd28a30),_0x1ea29e=await expenses_type['findByIdAndUpdate'](_0xd28a30,_0x2d31b8[_0x229012(0xbd)]),_0x5993d0=await all_expenses[_0x229012(0xc3)]({'type':_0x317823[_0x229012(0x9b)]},{'$set':{'type':_0x2d31b8['body'][_0x229012(0x9b)]}});_0x2d31b8['flash'](_0x229012(0x98),_0x229012(0xcb)),_0x24d69f[_0x229012(0xca)]('/all_expenses/type');}catch(_0x43413){console[_0x229012(0xb7)](_0x43413);}}),router[a0_0x30e2c2(0x9f)](a0_0x30e2c2(0xc6),auth,async(_0x539351,_0x5edf01)=>{const _0x1a43ba=a0_0x30e2c2;try{const _0x55044f=_0x539351[_0x1a43ba(0x91)]['id'],_0x42d7be=await expenses_type[_0x1a43ba(0xbb)](_0x55044f);_0x539351[_0x1a43ba(0xa0)](_0x1a43ba(0x98),_0x1a43ba(0xc8)),_0x5edf01[_0x1a43ba(0xca)](_0x1a43ba(0xcc));}catch(_0x22ad1b){console[_0x1a43ba(0xb7)](_0x22ad1b);}}),router[a0_0x30e2c2(0x9f)](a0_0x30e2c2(0x9e),auth,async(_0x12f22c,_0x2cc842)=>{const _0x1a2d43=a0_0x30e2c2;try{const {username:_0x3c64b4,email:_0x190c46,role:_0x1333df}=_0x12f22c[_0x1a2d43(0xa2)],_0xb9d1ef=_0x12f22c[_0x1a2d43(0xa2)],_0x33fa2b=await profile['findOne']({'email':_0xb9d1ef[_0x1a2d43(0x93)]}),_0x111b72=await master_shop[_0x1a2d43(0x92)]();console[_0x1a2d43(0xb7)](_0x1a2d43(0xc1),_0x111b72);const _0x11d422=await expenses_type[_0x1a2d43(0x92)]({}),_0x1ca8a4=await all_expenses[_0x1a2d43(0x92)]({});console[_0x1a2d43(0xb7)](_0x1ca8a4);if(_0x111b72[0x0][_0x1a2d43(0xac)]=='English\x20(US)'){var _0x5afcf7=users[_0x1a2d43(0xc9)];console['log'](_0x5afcf7);}else{if(_0x111b72[0x0]['language']==_0x1a2d43(0x99))var _0x5afcf7=users[_0x1a2d43(0x99)];else{if(_0x111b72[0x0][_0x1a2d43(0xac)]==_0x1a2d43(0x90))var _0x5afcf7=users['German'];else{if(_0x111b72[0x0][_0x1a2d43(0xac)]=='Spanish')var _0x5afcf7=users['Spanish'];else{if(_0x111b72[0x0][_0x1a2d43(0xac)]==_0x1a2d43(0xba))var _0x5afcf7=users[_0x1a2d43(0xba)];else{if(_0x111b72[0x0][_0x1a2d43(0xac)]==_0x1a2d43(0x8e))var _0x5afcf7=users[_0x1a2d43(0xbc)];else{if(_0x111b72[0x0][_0x1a2d43(0xac)]==_0x1a2d43(0xc7))var _0x5afcf7=users[_0x1a2d43(0xc7)];else{if(_0x111b72[0x0]['language']==_0x1a2d43(0x97))var _0x5afcf7=users[_0x1a2d43(0xad)];}}}}}}}_0x2cc842[_0x1a2d43(0xb4)]('expenses',{'success':_0x12f22c['flash'](_0x1a2d43(0x98)),'errors':_0x12f22c[_0x1a2d43(0xa0)]('errors'),'role':_0xb9d1ef,'profile':_0x33fa2b,'data':_0x11d422,'expenses_data':_0x1ca8a4,'master_shop':_0x111b72,'language':_0x5afcf7});}catch(_0x443b2e){console[_0x1a2d43(0xb7)](_0x443b2e);}}),router[a0_0x30e2c2(0x9f)](a0_0x30e2c2(0xb1),auth,async(_0x3abf00,_0x48dd98)=>{const _0x39927f=a0_0x30e2c2;try{const {username:_0x577318,email:_0x150212,role:_0x14a65c}=_0x3abf00[_0x39927f(0xa2)],_0x4c68aa=_0x3abf00[_0x39927f(0xa2)],_0xd519a3=await profile['findOne']({'email':_0x4c68aa[_0x39927f(0x93)]}),_0x4591ba=await master_shop[_0x39927f(0x92)]();console[_0x39927f(0xb7)](_0x39927f(0xc1),_0x4591ba);const _0x342ab1=await expenses_type[_0x39927f(0x92)]({});if(_0x4591ba[0x0][_0x39927f(0xac)]=='English\x20(US)'){var _0x39f693=users[_0x39927f(0xc9)];console['log'](_0x39f693);}else{if(_0x4591ba[0x0][_0x39927f(0xac)]==_0x39927f(0x99))var _0x39f693=users[_0x39927f(0x99)];else{if(_0x4591ba[0x0][_0x39927f(0xac)]==_0x39927f(0x90))var _0x39f693=users[_0x39927f(0x90)];else{if(_0x4591ba[0x0][_0x39927f(0xac)]==_0x39927f(0xa1))var _0x39f693=users[_0x39927f(0xa1)];else{if(_0x4591ba[0x0]['language']==_0x39927f(0xba))var _0x39f693=users[_0x39927f(0xba)];else{if(_0x4591ba[0x0]['language']==_0x39927f(0x8e))var _0x39f693=users[_0x39927f(0xbc)];else{if(_0x4591ba[0x0][_0x39927f(0xac)]==_0x39927f(0xc7))var _0x39f693=users['Chinese'];else{if(_0x4591ba[0x0][_0x39927f(0xac)]==_0x39927f(0x97))var _0x39f693=users['Arabic'];}}}}}}}_0x48dd98[_0x39927f(0xb4)](_0x39927f(0xaa),{'success':_0x3abf00[_0x39927f(0xa0)](_0x39927f(0x98)),'errors':_0x3abf00[_0x39927f(0xa0)](_0x39927f(0xc4)),'role':_0x4c68aa,'profile':_0xd519a3,'data':_0x342ab1,'master_shop':_0x4591ba,'language':_0x39f693});}catch(_0x1f996d){console[_0x39927f(0xb7)](_0x1f996d);}}),router[a0_0x30e2c2(0x96)]('/view/add_expenses',auth,async(_0xfdf0e1,_0xe9b56c)=>{const _0x13486f=a0_0x30e2c2;try{const {type:_0x5d065b,date:_0x5cd4b9,amount:_0x2b8df1,note:_0x4736f5}=_0xfdf0e1['body'],_0x25f03d=new all_expenses({'type':_0x5d065b,'date':_0x5cd4b9,'amount':_0x2b8df1,'note':_0x4736f5}),_0x312c76=await _0x25f03d[_0x13486f(0xa8)]();_0xe9b56c[_0x13486f(0xca)](_0x13486f(0xab));}catch(_0x42b395){console[_0x13486f(0xb7)](_0x42b395);}}),router[a0_0x30e2c2(0x9f)](a0_0x30e2c2(0x8f),auth,async(_0x48e081,_0xfc9e36)=>{const _0x3535be=a0_0x30e2c2;try{const {username:_0x1ecbb2,email:_0x33b09f,role:_0x2a62f1}=_0x48e081[_0x3535be(0xa2)],_0x32a32c=_0x48e081['user'],_0x51bc9d=await profile[_0x3535be(0xaf)]({'email':_0x32a32c[_0x3535be(0x93)]}),_0x39bba7=await master_shop[_0x3535be(0x92)]();console[_0x3535be(0xb7)]('master',_0x39bba7);const _0x1d4bdc=await expenses_type[_0x3535be(0x92)]({});console[_0x3535be(0xb7)](_0x1d4bdc);const _0x1e7c93=await all_expenses[_0x3535be(0xa6)](_0x48e081['params']['id']);console[_0x3535be(0xb7)](_0x1e7c93);if(_0x39bba7[0x0][_0x3535be(0xac)]=='English\x20(US)'){var _0x1a9aa2=users[_0x3535be(0xc9)];console[_0x3535be(0xb7)](_0x1a9aa2);}else{if(_0x39bba7[0x0][_0x3535be(0xac)]==_0x3535be(0x99))var _0x1a9aa2=users[_0x3535be(0x99)];else{if(_0x39bba7[0x0][_0x3535be(0xac)]=='German')var _0x1a9aa2=users[_0x3535be(0x90)];else{if(_0x39bba7[0x0][_0x3535be(0xac)]==_0x3535be(0xa1))var _0x1a9aa2=users[_0x3535be(0xa1)];else{if(_0x39bba7[0x0][_0x3535be(0xac)]==_0x3535be(0xba))var _0x1a9aa2=users[_0x3535be(0xba)];else{if(_0x39bba7[0x0]['language']==_0x3535be(0x8e))var _0x1a9aa2=users['Portuguese'];else{if(_0x39bba7[0x0][_0x3535be(0xac)]==_0x3535be(0xc7))var _0x1a9aa2=users['Chinese'];else{if(_0x39bba7[0x0][_0x3535be(0xac)]==_0x3535be(0x97))var _0x1a9aa2=users[_0x3535be(0xad)];}}}}}}}_0xfc9e36['render'](_0x3535be(0xb0),{'success':_0x48e081['flash'](_0x3535be(0x98)),'errors':_0x48e081[_0x3535be(0xa0)](_0x3535be(0xc4)),'role':_0x32a32c,'profile':_0x51bc9d,'data':_0x1d4bdc,'expenses_data':_0x1e7c93,'master_shop':_0x39bba7,'language':_0x1a9aa2});}catch(_0x11fcee){console[_0x3535be(0xb7)](_0x11fcee);}}),router['post'](a0_0x30e2c2(0x8f),auth,async(_0xe5ccb2,_0x5387bc)=>{const _0x1a0043=a0_0x30e2c2;try{const _0x3c80bf=_0xe5ccb2[_0x1a0043(0x91)]['id'];console['log'](_0x3c80bf);const _0x530023=await all_expenses[_0x1a0043(0xb5)](_0x3c80bf,_0xe5ccb2[_0x1a0043(0xbd)]);console['log'](_0x530023),_0xe5ccb2[_0x1a0043(0xa0)](_0x1a0043(0x98),'expenses\x20data\x20update\x20successfully'),_0x5387bc[_0x1a0043(0xca)](_0x1a0043(0xab));}catch(_0x31e247){console[_0x1a0043(0xb7)](_0x31e247);}}),module[a0_0x30e2c2(0x8c)]=router;