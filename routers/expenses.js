const a0_0x1c0214=a0_0x4d58;(function(_0x5d9ea4,_0x34c265){const _0x4617a3=a0_0x4d58,_0xfebdd0=_0x5d9ea4();while(!![]){try{const _0x393e1f=parseInt(_0x4617a3(0x1f2))/0x1*(parseInt(_0x4617a3(0x228))/0x2)+-parseInt(_0x4617a3(0x203))/0x3+-parseInt(_0x4617a3(0x218))/0x4*(parseInt(_0x4617a3(0x20c))/0x5)+-parseInt(_0x4617a3(0x21f))/0x6*(-parseInt(_0x4617a3(0x1f8))/0x7)+-parseInt(_0x4617a3(0x229))/0x8*(-parseInt(_0x4617a3(0x1ff))/0x9)+parseInt(_0x4617a3(0x211))/0xa*(parseInt(_0x4617a3(0x21e))/0xb)+parseInt(_0x4617a3(0x212))/0xc*(-parseInt(_0x4617a3(0x219))/0xd);if(_0x393e1f===_0x34c265)break;else _0xfebdd0['push'](_0xfebdd0['shift']());}catch(_0x18b254){_0xfebdd0['push'](_0xfebdd0['shift']());}}}(a0_0x69d7,0x94975));const express=require(a0_0x1c0214(0x210)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require('../models/all_models'),auth=require('../middleware/auth'),users=require(a0_0x1c0214(0x1ee));router[a0_0x1c0214(0x222)](a0_0x1c0214(0x1f1),auth,async(_0x288814,_0x2f99e9)=>{const _0x51cf45=a0_0x1c0214;try{const {username:_0x24d093,email:_0x487d60,role:_0x5e0e35}=_0x288814[_0x51cf45(0x1eb)],_0x4e5488=_0x288814[_0x51cf45(0x1eb)],_0xce736d=await profile[_0x51cf45(0x21d)]({'email':_0x4e5488[_0x51cf45(0x224)]}),_0x115af8=await master_shop['find']();if(_0x115af8[0x0][_0x51cf45(0x1fc)]==_0x51cf45(0x223)){var _0x537806=users['English'];console['log'](_0x537806);}else{if(_0x115af8[0x0][_0x51cf45(0x1fc)]==_0x51cf45(0x205))var _0x537806=users[_0x51cf45(0x205)];else{if(_0x115af8[0x0][_0x51cf45(0x1fc)]==_0x51cf45(0x216))var _0x537806=users[_0x51cf45(0x216)];else{if(_0x115af8[0x0][_0x51cf45(0x1fc)]==_0x51cf45(0x226))var _0x537806=users[_0x51cf45(0x226)];else{if(_0x115af8[0x0][_0x51cf45(0x1fc)]==_0x51cf45(0x21b))var _0x537806=users[_0x51cf45(0x21b)];else{if(_0x115af8[0x0][_0x51cf45(0x1fc)]==_0x51cf45(0x220))var _0x537806=users[_0x51cf45(0x225)];else{if(_0x115af8[0x0][_0x51cf45(0x1fc)]==_0x51cf45(0x1fa))var _0x537806=users[_0x51cf45(0x1fa)];else{if(_0x115af8[0x0][_0x51cf45(0x1fc)]==_0x51cf45(0x1f4))var _0x537806=users['Arabic'];}}}}}}}const _0x48ae75=await expenses_type[_0x51cf45(0x208)]({}),_0x1c3e10=await Promise['all'](_0x48ae75['map'](async _0x2b2b94=>{const _0x4e377d=_0x51cf45,_0x97df7b=await all_expenses['countDocuments']({'type':_0x2b2b94[_0x4e377d(0x1f3)]});return{..._0x2b2b94[_0x4e377d(0x1ea)](),'count':_0x97df7b};}));_0x2f99e9[_0x51cf45(0x1ed)](_0x51cf45(0x20d),{'success':_0x288814[_0x51cf45(0x1f0)]('success'),'errors':_0x288814[_0x51cf45(0x1f0)](_0x51cf45(0x1f5)),'role':_0x4e5488,'profile':_0xce736d,'master_shop':_0x115af8,'language':_0x537806,'expensesData':_0x1c3e10});}catch(_0x12d18e){console[_0x51cf45(0x221)](_0x12d18e);}}),router[a0_0x1c0214(0x1f7)]('/type',auth,async(_0x5d67ff,_0x565ce9)=>{const _0x27f9c3=a0_0x1c0214;try{const {name:_0x462d7a}=_0x5d67ff[_0x27f9c3(0x201)],_0x5eb56a=new expenses_type({'name':_0x462d7a}),_0x556a70=await expenses_type['findOne']({'name':_0x462d7a});if(_0x556a70)_0x5d67ff[_0x27f9c3(0x1f0)](_0x27f9c3(0x1f5),_0x462d7a+_0x27f9c3(0x1f9));else{_0x5d67ff[_0x27f9c3(0x1f0)]('success',_0x462d7a+'\x20expenses\x20is\x20add\x20successfully');const _0x13a738=await _0x5eb56a[_0x27f9c3(0x21a)]();}_0x565ce9[_0x27f9c3(0x213)](_0x27f9c3(0x20a));}catch(_0x5013c0){console[_0x27f9c3(0x221)](_0x5013c0);}}),router[a0_0x1c0214(0x1f7)](a0_0x1c0214(0x206),auth,async(_0x3ec1af,_0xedbda7)=>{const _0x4b95f8=a0_0x1c0214;try{const _0x566c77=_0x3ec1af['params']['id'],_0x58a27b=await expenses_type['findById'](_0x566c77),_0x4b6770=await expenses_type[_0x4b95f8(0x214)](_0x566c77,_0x3ec1af['body']),_0x2381ab=await all_expenses[_0x4b95f8(0x21c)]({'type':_0x58a27b[_0x4b95f8(0x1f3)]},{'$set':{'type':_0x3ec1af[_0x4b95f8(0x201)][_0x4b95f8(0x1f3)]}});_0x3ec1af[_0x4b95f8(0x1f0)](_0x4b95f8(0x1ec),_0x4b95f8(0x217)),_0xedbda7[_0x4b95f8(0x213)](_0x4b95f8(0x20a));}catch(_0x5a89a){console['log'](_0x5a89a);}}),router[a0_0x1c0214(0x222)](a0_0x1c0214(0x204),auth,async(_0x5500c7,_0xac234f)=>{const _0x3a6113=a0_0x1c0214;try{const _0x6efdc8=_0x5500c7['params']['id'],_0x580042=await expenses_type[_0x3a6113(0x20f)](_0x6efdc8);_0x5500c7['flash']('success',_0x3a6113(0x20b)),_0xac234f[_0x3a6113(0x213)]('/all_expenses/type');}catch(_0x22646a){console['log'](_0x22646a);}}),router['get'](a0_0x1c0214(0x1f6),auth,async(_0x1c1734,_0x4966d1)=>{const _0x2fe857=a0_0x1c0214;try{const {username:_0x239975,email:_0x54b4e4,role:_0x3a2734}=_0x1c1734[_0x2fe857(0x1eb)],_0x13e216=_0x1c1734['user'],_0x3e0cf2=await profile[_0x2fe857(0x21d)]({'email':_0x13e216['email']}),_0x351429=await master_shop['find']();console[_0x2fe857(0x221)]('master',_0x351429);const _0x4798f7=await expenses_type[_0x2fe857(0x208)]({}),_0x27554f=await all_expenses['find']({});console[_0x2fe857(0x221)](_0x27554f);if(_0x351429[0x0]['language']==_0x2fe857(0x223)){var _0x63800a=users[_0x2fe857(0x1ef)];console[_0x2fe857(0x221)](_0x63800a);}else{if(_0x351429[0x0][_0x2fe857(0x1fc)]==_0x2fe857(0x205))var _0x63800a=users[_0x2fe857(0x205)];else{if(_0x351429[0x0][_0x2fe857(0x1fc)]==_0x2fe857(0x216))var _0x63800a=users[_0x2fe857(0x216)];else{if(_0x351429[0x0][_0x2fe857(0x1fc)]==_0x2fe857(0x226))var _0x63800a=users[_0x2fe857(0x226)];else{if(_0x351429[0x0][_0x2fe857(0x1fc)]==_0x2fe857(0x21b))var _0x63800a=users[_0x2fe857(0x21b)];else{if(_0x351429[0x0][_0x2fe857(0x1fc)]==_0x2fe857(0x220))var _0x63800a=users[_0x2fe857(0x225)];else{if(_0x351429[0x0]['language']==_0x2fe857(0x1fa))var _0x63800a=users['Chinese'];else{if(_0x351429[0x0]['language']==_0x2fe857(0x1f4))var _0x63800a=users[_0x2fe857(0x1fe)];}}}}}}}_0x4966d1['render'](_0x2fe857(0x207),{'success':_0x1c1734[_0x2fe857(0x1f0)](_0x2fe857(0x1ec)),'errors':_0x1c1734['flash']('errors'),'role':_0x13e216,'profile':_0x3e0cf2,'data':_0x4798f7,'expenses_data':_0x27554f,'master_shop':_0x351429,'language':_0x63800a});}catch(_0x94d52a){console[_0x2fe857(0x221)](_0x94d52a);}}),router[a0_0x1c0214(0x222)](a0_0x1c0214(0x215),auth,async(_0x44dd08,_0x5ec6de)=>{const _0x559424=a0_0x1c0214;try{const {username:_0x23e83a,email:_0xab2a6d,role:_0x4cd32e}=_0x44dd08['user'],_0x42bff1=_0x44dd08[_0x559424(0x1eb)],_0x36b39d=await profile['findOne']({'email':_0x42bff1['email']}),_0x18bdcd=await master_shop['find']();console['log'](_0x559424(0x1fb),_0x18bdcd);const _0x225aa5=await expenses_type[_0x559424(0x208)]({});if(_0x18bdcd[0x0][_0x559424(0x1fc)]==_0x559424(0x223)){var _0xccc520=users[_0x559424(0x1ef)];console[_0x559424(0x221)](_0xccc520);}else{if(_0x18bdcd[0x0]['language']=='Hindi')var _0xccc520=users[_0x559424(0x205)];else{if(_0x18bdcd[0x0][_0x559424(0x1fc)]==_0x559424(0x216))var _0xccc520=users[_0x559424(0x216)];else{if(_0x18bdcd[0x0][_0x559424(0x1fc)]==_0x559424(0x226))var _0xccc520=users[_0x559424(0x226)];else{if(_0x18bdcd[0x0][_0x559424(0x1fc)]==_0x559424(0x21b))var _0xccc520=users[_0x559424(0x21b)];else{if(_0x18bdcd[0x0][_0x559424(0x1fc)]=='Portuguese\x20(BR)')var _0xccc520=users['Portuguese'];else{if(_0x18bdcd[0x0][_0x559424(0x1fc)]==_0x559424(0x1fa))var _0xccc520=users[_0x559424(0x1fa)];else{if(_0x18bdcd[0x0][_0x559424(0x1fc)]==_0x559424(0x1f4))var _0xccc520=users[_0x559424(0x1fe)];}}}}}}}_0x5ec6de[_0x559424(0x1ed)](_0x559424(0x202),{'success':_0x44dd08[_0x559424(0x1f0)]('success'),'errors':_0x44dd08[_0x559424(0x1f0)](_0x559424(0x1f5)),'role':_0x42bff1,'profile':_0x36b39d,'data':_0x225aa5,'master_shop':_0x18bdcd,'language':_0xccc520});}catch(_0x5cbfcf){console['log'](_0x5cbfcf);}}),router['post'](a0_0x1c0214(0x215),auth,async(_0x434cea,_0x59a437)=>{const _0x1dc825=a0_0x1c0214;try{const {type:_0x343248,date:_0x1ea265,amount:_0x3c6ade,note:_0x345a47}=_0x434cea['body'],_0xe1b105=new all_expenses({'type':_0x343248,'date':_0x1ea265,'amount':_0x3c6ade,'note':_0x345a47}),_0x8d634=await _0xe1b105[_0x1dc825(0x21a)]();_0x59a437[_0x1dc825(0x213)](_0x1dc825(0x227));}catch(_0x275dca){console[_0x1dc825(0x221)](_0x275dca);}}),router[a0_0x1c0214(0x222)](a0_0x1c0214(0x20e),auth,async(_0x373368,_0x1f9283)=>{const _0x31f076=a0_0x1c0214;try{const {username:_0x4e5548,email:_0x118606,role:_0x521c1d}=_0x373368['user'],_0x550f1e=_0x373368['user'],_0x44be70=await profile['findOne']({'email':_0x550f1e[_0x31f076(0x224)]}),_0x2cac56=await master_shop[_0x31f076(0x208)]();console[_0x31f076(0x221)](_0x31f076(0x1fb),_0x2cac56);const _0xc9172b=await expenses_type[_0x31f076(0x208)]({});console[_0x31f076(0x221)](_0xc9172b);const _0x5bc663=await all_expenses[_0x31f076(0x200)](_0x373368['params']['id']);console[_0x31f076(0x221)](_0x5bc663);if(_0x2cac56[0x0]['language']==_0x31f076(0x223)){var _0x10de9a=users[_0x31f076(0x1ef)];console[_0x31f076(0x221)](_0x10de9a);}else{if(_0x2cac56[0x0]['language']==_0x31f076(0x205))var _0x10de9a=users[_0x31f076(0x205)];else{if(_0x2cac56[0x0]['language']==_0x31f076(0x216))var _0x10de9a=users['German'];else{if(_0x2cac56[0x0][_0x31f076(0x1fc)]=='Spanish')var _0x10de9a=users[_0x31f076(0x226)];else{if(_0x2cac56[0x0][_0x31f076(0x1fc)]==_0x31f076(0x21b))var _0x10de9a=users[_0x31f076(0x21b)];else{if(_0x2cac56[0x0][_0x31f076(0x1fc)]=='Portuguese\x20(BR)')var _0x10de9a=users[_0x31f076(0x225)];else{if(_0x2cac56[0x0][_0x31f076(0x1fc)]=='Chinese')var _0x10de9a=users[_0x31f076(0x1fa)];else{if(_0x2cac56[0x0][_0x31f076(0x1fc)]==_0x31f076(0x1f4))var _0x10de9a=users[_0x31f076(0x1fe)];}}}}}}}_0x1f9283[_0x31f076(0x1ed)](_0x31f076(0x209),{'success':_0x373368['flash']('success'),'errors':_0x373368[_0x31f076(0x1f0)](_0x31f076(0x1f5)),'role':_0x550f1e,'profile':_0x44be70,'data':_0xc9172b,'expenses_data':_0x5bc663,'master_shop':_0x2cac56,'language':_0x10de9a});}catch(_0x1d8377){console[_0x31f076(0x221)](_0x1d8377);}}),router['post']('/view/:id',auth,async(_0x109d7a,_0x5c678a)=>{const _0xd14d04=a0_0x1c0214;try{const _0x290653=_0x109d7a['params']['id'];console[_0xd14d04(0x221)](_0x290653);const _0x410e09=await all_expenses[_0xd14d04(0x214)](_0x290653,_0x109d7a['body']);console[_0xd14d04(0x221)](_0x410e09),_0x109d7a[_0xd14d04(0x1f0)](_0xd14d04(0x1ec),_0xd14d04(0x217)),_0x5c678a[_0xd14d04(0x213)](_0xd14d04(0x227));}catch(_0x1d33a7){console[_0xd14d04(0x221)](_0x1d33a7);}}),module[a0_0x1c0214(0x1fd)]=router;function a0_0x4d58(_0x5e5bf0,_0x259ce5){const _0x69d73b=a0_0x69d7();return a0_0x4d58=function(_0x4d5826,_0x2c9626){_0x4d5826=_0x4d5826-0x1ea;let _0x58d8=_0x69d73b[_0x4d5826];return _0x58d8;},a0_0x4d58(_0x5e5bf0,_0x259ce5);}function a0_0x69d7(){const _0x2d0b27=['success','render','../public/language/languages.json','English','flash','/type','2xTnWYP','name','Arabic\x20(ae)','errors','/view','post','113953tjXUQb','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','Chinese','master','language','exports','Arabic','101763IhagqA','findById','body','add_expenses','1387077kcjjdh','/type/delete/:id','Hindi','/type/:id','expenses','find','edit_expenses','/all_expenses/type','Expenses\x20data\x20delete\x20successfully','85APQHVf','expenses_type','/view/:id','findByIdAndDelete','express','11766070EMjGOk','25283928zSxOkB','redirect','findByIdAndUpdate','/view/add_expenses','German','expenses\x20data\x20update\x20successfully','36744zNNWAi','13pGICYS','save','French','updateMany','findOne','11TEndcf','312CqMfBP','Portuguese\x20(BR)','log','get','English\x20(US)','email','Portuguese','Spanish','/all_expenses/view','440390ZBpNBA','616VxzIqU','toJSON','user'];a0_0x69d7=function(){return _0x2d0b27;};return a0_0x69d7();}