const a0_0x20df48=a0_0x29e5;(function(_0x2f9850,_0x321aca){const _0x47a53d=a0_0x29e5,_0x3c30c4=_0x2f9850();while(!![]){try{const _0x189e9e=-parseInt(_0x47a53d(0x1d1))/0x1*(parseInt(_0x47a53d(0x1f4))/0x2)+-parseInt(_0x47a53d(0x1dc))/0x3*(parseInt(_0x47a53d(0x1f7))/0x4)+-parseInt(_0x47a53d(0x20f))/0x5*(-parseInt(_0x47a53d(0x1e6))/0x6)+parseInt(_0x47a53d(0x20c))/0x7+parseInt(_0x47a53d(0x1e5))/0x8*(parseInt(_0x47a53d(0x1fb))/0x9)+-parseInt(_0x47a53d(0x20a))/0xa+parseInt(_0x47a53d(0x203))/0xb*(parseInt(_0x47a53d(0x1f8))/0xc);if(_0x189e9e===_0x321aca)break;else _0x3c30c4['push'](_0x3c30c4['shift']());}catch(_0x34d5dc){_0x3c30c4['push'](_0x3c30c4['shift']());}}}(a0_0x1531,0x87d84));const express=require(a0_0x20df48(0x1f6)),app=express(),router=express[a0_0x20df48(0x1db)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require(a0_0x20df48(0x1fc)),auth=require(a0_0x20df48(0x1d2)),users=require('../public/language/languages.json');router['get'](a0_0x20df48(0x1e7),auth,async(_0x1228b6,_0x331e5c)=>{const _0x5d9bdc=a0_0x20df48;try{const {username:_0x100747,email:_0x49ca62,role:_0x3969e2}=_0x1228b6[_0x5d9bdc(0x1d7)],_0x2a5944=_0x1228b6[_0x5d9bdc(0x1d7)],_0x3886ff=await profile[_0x5d9bdc(0x1d3)]({'email':_0x2a5944[_0x5d9bdc(0x1de)]}),_0x11a46c=await master_shop[_0x5d9bdc(0x204)]();if(_0x11a46c[0x0][_0x5d9bdc(0x1cf)]==_0x5d9bdc(0x1cd)){var _0x279373=users[_0x5d9bdc(0x1e1)];console[_0x5d9bdc(0x1df)](_0x279373);}else{if(_0x11a46c[0x0][_0x5d9bdc(0x1cf)]==_0x5d9bdc(0x1f0))var _0x279373=users[_0x5d9bdc(0x1f0)];else{if(_0x11a46c[0x0][_0x5d9bdc(0x1cf)]==_0x5d9bdc(0x1eb))var _0x279373=users[_0x5d9bdc(0x1eb)];else{if(_0x11a46c[0x0]['language']=='Spanish')var _0x279373=users[_0x5d9bdc(0x206)];else{if(_0x11a46c[0x0]['language']=='French')var _0x279373=users['French'];else{if(_0x11a46c[0x0][_0x5d9bdc(0x1cf)]==_0x5d9bdc(0x210))var _0x279373=users[_0x5d9bdc(0x1ce)];else{if(_0x11a46c[0x0][_0x5d9bdc(0x1cf)]==_0x5d9bdc(0x207))var _0x279373=users[_0x5d9bdc(0x207)];else{if(_0x11a46c[0x0][_0x5d9bdc(0x1cf)]=='Arabic\x20(ae)')var _0x279373=users[_0x5d9bdc(0x208)];}}}}}}}const _0x5351ce=await expenses_type['find']({}),_0x960fce=await Promise[_0x5d9bdc(0x1d0)](_0x5351ce[_0x5d9bdc(0x1fa)](async _0x3fabbc=>{const _0x4bf6db=_0x5d9bdc,_0x3ada84=await all_expenses[_0x4bf6db(0x202)]({'type':_0x3fabbc[_0x4bf6db(0x1fd)]});return{..._0x3fabbc[_0x4bf6db(0x1d9)](),'count':_0x3ada84};}));_0x331e5c[_0x5d9bdc(0x20d)]('expenses_type',{'success':_0x1228b6['flash'](_0x5d9bdc(0x1e8)),'errors':_0x1228b6[_0x5d9bdc(0x1d5)](_0x5d9bdc(0x20b)),'role':_0x2a5944,'profile':_0x3886ff,'master_shop':_0x11a46c,'language':_0x279373,'expensesData':_0x960fce});}catch(_0x3c5230){console['log'](_0x3c5230);}}),router['post'](a0_0x20df48(0x1e7),auth,async(_0x570fe9,_0x3f29ed)=>{const _0x4ef3fe=a0_0x20df48;try{const {name:_0xac3db5}=_0x570fe9['body'],_0x3aa5cd=new expenses_type({'name':_0xac3db5}),_0x151a48=await expenses_type[_0x4ef3fe(0x1d3)]({'name':_0xac3db5});if(_0x151a48)_0x570fe9['flash'](_0x4ef3fe(0x20b),_0xac3db5+_0x4ef3fe(0x1d4));else{_0x570fe9[_0x4ef3fe(0x1d5)](_0x4ef3fe(0x1e8),_0xac3db5+_0x4ef3fe(0x1e3));const _0x77f76a=await _0x3aa5cd[_0x4ef3fe(0x1ee)]();}_0x3f29ed[_0x4ef3fe(0x1e9)](_0x4ef3fe(0x1ea));}catch(_0x56552d){console[_0x4ef3fe(0x1df)](_0x56552d);}}),router[a0_0x20df48(0x1ed)](a0_0x20df48(0x1e0),auth,async(_0x4c1d2d,_0x4ade65)=>{const _0x3a2b63=a0_0x20df48;try{const _0x4a86d3=_0x4c1d2d[_0x3a2b63(0x200)]['id'],_0x110089=await expenses_type[_0x3a2b63(0x1e4)](_0x4a86d3),_0xba0f4f=await expenses_type[_0x3a2b63(0x1f3)](_0x4a86d3,_0x4c1d2d['body']),_0x513799=await all_expenses['updateMany']({'type':_0x110089[_0x3a2b63(0x1fd)]},{'$set':{'type':_0x4c1d2d[_0x3a2b63(0x1f2)][_0x3a2b63(0x1fd)]}});_0x4c1d2d['flash'](_0x3a2b63(0x1e8),_0x3a2b63(0x1ff)),_0x4ade65[_0x3a2b63(0x1e9)](_0x3a2b63(0x1ea));}catch(_0x22a94e){console[_0x3a2b63(0x1df)](_0x22a94e);}}),router[a0_0x20df48(0x1da)](a0_0x20df48(0x201),auth,async(_0x20516d,_0x2fbbcb)=>{const _0x471e45=a0_0x20df48;try{const _0x2b95ce=_0x20516d[_0x471e45(0x200)]['id'],_0x176ff6=await expenses_type[_0x471e45(0x1fe)](_0x2b95ce);_0x20516d['flash'](_0x471e45(0x1e8),_0x471e45(0x1f9)),_0x2fbbcb[_0x471e45(0x1e9)](_0x471e45(0x1ea));}catch(_0x13c05e){console[_0x471e45(0x1df)](_0x13c05e);}}),router['get'](a0_0x20df48(0x1f5),auth,async(_0x42bb2e,_0x5e33eb)=>{const _0x2dfd41=a0_0x20df48;try{const {username:_0xf42ac4,email:_0x3db805,role:_0x590879}=_0x42bb2e[_0x2dfd41(0x1d7)],_0x3aa1bd=_0x42bb2e[_0x2dfd41(0x1d7)],_0x4a6766=await profile[_0x2dfd41(0x1d3)]({'email':_0x3aa1bd['email']}),_0x58a9ce=await master_shop['find']();console[_0x2dfd41(0x1df)](_0x2dfd41(0x1e2),_0x58a9ce);const _0x39930a=await expenses_type[_0x2dfd41(0x204)]({}),_0x34138b=await all_expenses[_0x2dfd41(0x204)]({});console[_0x2dfd41(0x1df)](_0x34138b);if(_0x58a9ce[0x0][_0x2dfd41(0x1cf)]==_0x2dfd41(0x1cd)){var _0x42fcca=users[_0x2dfd41(0x1e1)];console[_0x2dfd41(0x1df)](_0x42fcca);}else{if(_0x58a9ce[0x0][_0x2dfd41(0x1cf)]==_0x2dfd41(0x1f0))var _0x42fcca=users[_0x2dfd41(0x1f0)];else{if(_0x58a9ce[0x0][_0x2dfd41(0x1cf)]==_0x2dfd41(0x1eb))var _0x42fcca=users[_0x2dfd41(0x1eb)];else{if(_0x58a9ce[0x0][_0x2dfd41(0x1cf)]==_0x2dfd41(0x206))var _0x42fcca=users[_0x2dfd41(0x206)];else{if(_0x58a9ce[0x0][_0x2dfd41(0x1cf)]==_0x2dfd41(0x20e))var _0x42fcca=users[_0x2dfd41(0x20e)];else{if(_0x58a9ce[0x0][_0x2dfd41(0x1cf)]==_0x2dfd41(0x210))var _0x42fcca=users[_0x2dfd41(0x1ce)];else{if(_0x58a9ce[0x0]['language']==_0x2dfd41(0x207))var _0x42fcca=users[_0x2dfd41(0x207)];else{if(_0x58a9ce[0x0]['language']==_0x2dfd41(0x1d6))var _0x42fcca=users[_0x2dfd41(0x208)];}}}}}}}_0x5e33eb['render'](_0x2dfd41(0x1dd),{'success':_0x42bb2e['flash'](_0x2dfd41(0x1e8)),'errors':_0x42bb2e[_0x2dfd41(0x1d5)]('errors'),'role':_0x3aa1bd,'profile':_0x4a6766,'data':_0x39930a,'expenses_data':_0x34138b,'master_shop':_0x58a9ce,'language':_0x42fcca});}catch(_0x221d1e){console[_0x2dfd41(0x1df)](_0x221d1e);}}),router[a0_0x20df48(0x1da)](a0_0x20df48(0x209),auth,async(_0x5ddf32,_0x1f661c)=>{const _0x364768=a0_0x20df48;try{const {username:_0xf1ab6c,email:_0x340da5,role:_0x1dead7}=_0x5ddf32[_0x364768(0x1d7)],_0x34cba7=_0x5ddf32[_0x364768(0x1d7)],_0x57b4b4=await profile[_0x364768(0x1d3)]({'email':_0x34cba7[_0x364768(0x1de)]}),_0x2eee80=await master_shop[_0x364768(0x204)]();console[_0x364768(0x1df)](_0x364768(0x1e2),_0x2eee80);const _0x137f1c=await expenses_type[_0x364768(0x204)]({});if(_0x2eee80[0x0][_0x364768(0x1cf)]==_0x364768(0x1cd)){var _0x33e0de=users['English'];console[_0x364768(0x1df)](_0x33e0de);}else{if(_0x2eee80[0x0][_0x364768(0x1cf)]=='Hindi')var _0x33e0de=users[_0x364768(0x1f0)];else{if(_0x2eee80[0x0][_0x364768(0x1cf)]==_0x364768(0x1eb))var _0x33e0de=users[_0x364768(0x1eb)];else{if(_0x2eee80[0x0][_0x364768(0x1cf)]=='Spanish')var _0x33e0de=users['Spanish'];else{if(_0x2eee80[0x0][_0x364768(0x1cf)]==_0x364768(0x20e))var _0x33e0de=users['French'];else{if(_0x2eee80[0x0][_0x364768(0x1cf)]==_0x364768(0x210))var _0x33e0de=users['Portuguese'];else{if(_0x2eee80[0x0]['language']==_0x364768(0x207))var _0x33e0de=users[_0x364768(0x207)];else{if(_0x2eee80[0x0]['language']==_0x364768(0x1d6))var _0x33e0de=users[_0x364768(0x208)];}}}}}}}_0x1f661c[_0x364768(0x20d)](_0x364768(0x1ec),{'success':_0x5ddf32[_0x364768(0x1d5)](_0x364768(0x1e8)),'errors':_0x5ddf32[_0x364768(0x1d5)](_0x364768(0x20b)),'role':_0x34cba7,'profile':_0x57b4b4,'data':_0x137f1c,'master_shop':_0x2eee80,'language':_0x33e0de});}catch(_0x6cde9d){console[_0x364768(0x1df)](_0x6cde9d);}}),router[a0_0x20df48(0x1ed)](a0_0x20df48(0x209),auth,async(_0x2b8c23,_0x5e8cc5)=>{const _0x5dadb4=a0_0x20df48;try{const {type:_0x58e780,date:_0x5bea49,amount:_0xf8ad51,note:_0x579290}=_0x2b8c23['body'],_0x3e66c9=new all_expenses({'type':_0x58e780,'date':_0x5bea49,'amount':_0xf8ad51,'note':_0x579290}),_0x36c865=await _0x3e66c9[_0x5dadb4(0x1ee)]();_0x5e8cc5[_0x5dadb4(0x1e9)](_0x5dadb4(0x1d8));}catch(_0xe79edc){console['log'](_0xe79edc);}}),router[a0_0x20df48(0x1da)](a0_0x20df48(0x205),auth,async(_0x1edcc1,_0x3f5a3d)=>{const _0x1f53fc=a0_0x20df48;try{const {username:_0x82ecbb,email:_0x41056a,role:_0x267e56}=_0x1edcc1['user'],_0x3e2075=_0x1edcc1['user'],_0x2c324e=await profile[_0x1f53fc(0x1d3)]({'email':_0x3e2075[_0x1f53fc(0x1de)]}),_0x5206af=await master_shop[_0x1f53fc(0x204)]();console[_0x1f53fc(0x1df)](_0x1f53fc(0x1e2),_0x5206af);const _0x3c230d=await expenses_type[_0x1f53fc(0x204)]({});console[_0x1f53fc(0x1df)](_0x3c230d);const _0x13265d=await all_expenses[_0x1f53fc(0x1e4)](_0x1edcc1[_0x1f53fc(0x200)]['id']);console['log'](_0x13265d);if(_0x5206af[0x0][_0x1f53fc(0x1cf)]==_0x1f53fc(0x1cd)){var _0xb5c71c=users[_0x1f53fc(0x1e1)];console['log'](_0xb5c71c);}else{if(_0x5206af[0x0][_0x1f53fc(0x1cf)]==_0x1f53fc(0x1f0))var _0xb5c71c=users['Hindi'];else{if(_0x5206af[0x0]['language']=='German')var _0xb5c71c=users[_0x1f53fc(0x1eb)];else{if(_0x5206af[0x0][_0x1f53fc(0x1cf)]=='Spanish')var _0xb5c71c=users[_0x1f53fc(0x206)];else{if(_0x5206af[0x0][_0x1f53fc(0x1cf)]==_0x1f53fc(0x20e))var _0xb5c71c=users[_0x1f53fc(0x20e)];else{if(_0x5206af[0x0][_0x1f53fc(0x1cf)]=='Portuguese\x20(BR)')var _0xb5c71c=users[_0x1f53fc(0x1ce)];else{if(_0x5206af[0x0]['language']==_0x1f53fc(0x207))var _0xb5c71c=users[_0x1f53fc(0x207)];else{if(_0x5206af[0x0][_0x1f53fc(0x1cf)]==_0x1f53fc(0x1d6))var _0xb5c71c=users[_0x1f53fc(0x208)];}}}}}}}_0x3f5a3d[_0x1f53fc(0x20d)](_0x1f53fc(0x1f1),{'success':_0x1edcc1[_0x1f53fc(0x1d5)]('success'),'errors':_0x1edcc1[_0x1f53fc(0x1d5)]('errors'),'role':_0x3e2075,'profile':_0x2c324e,'data':_0x3c230d,'expenses_data':_0x13265d,'master_shop':_0x5206af,'language':_0xb5c71c});}catch(_0x5cf151){console[_0x1f53fc(0x1df)](_0x5cf151);}}),router[a0_0x20df48(0x1ed)](a0_0x20df48(0x205),auth,async(_0xfcead1,_0x52a2a6)=>{const _0x3df38a=a0_0x20df48;try{const _0x2c7bcb=_0xfcead1[_0x3df38a(0x200)]['id'];console[_0x3df38a(0x1df)](_0x2c7bcb);const _0x5384b4=await all_expenses[_0x3df38a(0x1f3)](_0x2c7bcb,_0xfcead1[_0x3df38a(0x1f2)]);console[_0x3df38a(0x1df)](_0x5384b4),_0xfcead1['flash'](_0x3df38a(0x1e8),'expenses\x20data\x20update\x20successfully'),_0x52a2a6['redirect'](_0x3df38a(0x1d8));}catch(_0x4d7f57){console['log'](_0x4d7f57);}}),module[a0_0x20df48(0x1ef)]=router;function a0_0x29e5(_0x38b6a3,_0x3304b2){const _0x153143=a0_0x1531();return a0_0x29e5=function(_0x29e5bb,_0x304a94){_0x29e5bb=_0x29e5bb-0x1cd;let _0x52c891=_0x153143[_0x29e5bb];return _0x52c891;},a0_0x29e5(_0x38b6a3,_0x3304b2);}function a0_0x1531(){const _0x3d0230=['name','findByIdAndDelete','expenses\x20data\x20update\x20successfully','params','/type/delete/:id','countDocuments','115247cigfkn','find','/view/:id','Spanish','Chinese','Arabic','/view/add_expenses','6391060MwUYTV','errors','2324651TiTjMM','render','French','5GLqbSY','Portuguese\x20(BR)','English\x20(US)','Portuguese','language','all','743347hXwrMl','../middleware/auth','findOne','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','flash','Arabic\x20(ae)','user','/all_expenses/view','toJSON','get','Router','3uaJymr','expenses','email','log','/type/:id','English','master','\x20expenses\x20is\x20add\x20successfully','findById','8amLefe','6387594yOtHSX','/type','success','redirect','/all_expenses/type','German','add_expenses','post','save','exports','Hindi','edit_expenses','body','findByIdAndUpdate','2qhjrXL','/view','express','4382564hLzKgi','660LaSLwy','Expenses\x20data\x20delete\x20successfully','map','9554283TwWxGM','../models/all_models'];a0_0x1531=function(){return _0x3d0230;};return a0_0x1531();}