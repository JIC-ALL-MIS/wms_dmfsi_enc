const a0_0x21ebcf=a0_0x2e3b;function a0_0x2e3b(_0x4e5bfe,_0x4b83b4){const _0x71a75=a0_0x71a7();return a0_0x2e3b=function(_0x2e3b2b,_0x4fb742){_0x2e3b2b=_0x2e3b2b-0xac;let _0x30ddad=_0x71a75[_0x2e3b2b];return _0x30ddad;},a0_0x2e3b(_0x4e5bfe,_0x4b83b4);}(function(_0x18094f,_0x4f64d1){const _0x28efbf=a0_0x2e3b,_0x118908=_0x18094f();while(!![]){try{const _0x5c38a1=-parseInt(_0x28efbf(0xd7))/0x1+-parseInt(_0x28efbf(0xd8))/0x2+-parseInt(_0x28efbf(0xd4))/0x3*(-parseInt(_0x28efbf(0xcc))/0x4)+-parseInt(_0x28efbf(0xaf))/0x5*(-parseInt(_0x28efbf(0xc1))/0x6)+parseInt(_0x28efbf(0xba))/0x7+parseInt(_0x28efbf(0xb4))/0x8+-parseInt(_0x28efbf(0xad))/0x9;if(_0x5c38a1===_0x4f64d1)break;else _0x118908['push'](_0x118908['shift']());}catch(_0xf217e){_0x118908['push'](_0x118908['shift']());}}}(a0_0x71a7,0x96f46));const express=require('express'),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require(a0_0x21ebcf(0xe2)),auth=require(a0_0x21ebcf(0xc8)),users=require(a0_0x21ebcf(0xd6));router[a0_0x21ebcf(0xbb)](a0_0x21ebcf(0xb0),auth,async(_0x5ec954,_0x54e292)=>{const _0x3ff64a=a0_0x21ebcf;try{const {username:_0x5aaf41,email:_0x593ad9,role:_0x4df90c}=_0x5ec954['user'],_0x3bb93c=_0x5ec954[_0x3ff64a(0xc6)],_0x268c7d=await profile[_0x3ff64a(0xda)]({'email':_0x3bb93c[_0x3ff64a(0xd3)]}),_0x36fd22=await master_shop['find']();if(_0x36fd22[0x0]['language']==_0x3ff64a(0xc2)){var _0xa6b82b=users[_0x3ff64a(0xc5)];console['log'](_0xa6b82b);}else{if(_0x36fd22[0x0][_0x3ff64a(0xb5)]==_0x3ff64a(0xd0))var _0xa6b82b=users[_0x3ff64a(0xd0)];else{if(_0x36fd22[0x0][_0x3ff64a(0xb5)]==_0x3ff64a(0xac))var _0xa6b82b=users[_0x3ff64a(0xac)];else{if(_0x36fd22[0x0][_0x3ff64a(0xb5)]==_0x3ff64a(0xb8))var _0xa6b82b=users[_0x3ff64a(0xb8)];else{if(_0x36fd22[0x0]['language']==_0x3ff64a(0xe4))var _0xa6b82b=users[_0x3ff64a(0xe4)];else{if(_0x36fd22[0x0][_0x3ff64a(0xb5)]=='Portuguese\x20(BR)')var _0xa6b82b=users[_0x3ff64a(0xbe)];else{if(_0x36fd22[0x0]['language']==_0x3ff64a(0xe5))var _0xa6b82b=users[_0x3ff64a(0xe5)];else{if(_0x36fd22[0x0][_0x3ff64a(0xb5)]==_0x3ff64a(0xc4))var _0xa6b82b=users[_0x3ff64a(0xe7)];}}}}}}}const _0x39748e=await expenses_type[_0x3ff64a(0xce)]({}),_0x2d1a10=await Promise[_0x3ff64a(0xb1)](_0x39748e[_0x3ff64a(0xdc)](async _0x42347b=>{const _0x2bc71f=_0x3ff64a,_0x1e4ff3=await all_expenses[_0x2bc71f(0xe0)]({'type':_0x42347b[_0x2bc71f(0xb2)]});return{..._0x42347b[_0x2bc71f(0xc9)](),'count':_0x1e4ff3};}));_0x54e292[_0x3ff64a(0xdd)]('expenses_type',{'success':_0x5ec954[_0x3ff64a(0xb7)](_0x3ff64a(0xae)),'errors':_0x5ec954[_0x3ff64a(0xb7)](_0x3ff64a(0xe8)),'role':_0x3bb93c,'profile':_0x268c7d,'master_shop':_0x36fd22,'language':_0xa6b82b,'expensesData':_0x2d1a10});}catch(_0x109e54){console[_0x3ff64a(0xca)](_0x109e54);}}),router[a0_0x21ebcf(0xd2)](a0_0x21ebcf(0xb0),auth,async(_0x31754a,_0x386fcb)=>{const _0x1e963a=a0_0x21ebcf;try{const {name:_0x27c73c}=_0x31754a[_0x1e963a(0xd1)],_0x31fd3a=new expenses_type({'name':_0x27c73c}),_0x35224b=await expenses_type[_0x1e963a(0xda)]({'name':_0x27c73c});if(_0x35224b)_0x31754a[_0x1e963a(0xb7)](_0x1e963a(0xe8),_0x27c73c+_0x1e963a(0xbf));else{_0x31754a[_0x1e963a(0xb7)](_0x1e963a(0xae),_0x27c73c+_0x1e963a(0xcb));const _0x307fed=await _0x31fd3a[_0x1e963a(0xb6)]();}_0x386fcb['redirect']('/all_expenses/type');}catch(_0x4bcba5){console[_0x1e963a(0xca)](_0x4bcba5);}}),router[a0_0x21ebcf(0xd2)]('/type/:id',auth,async(_0xfaed29,_0x354ebf)=>{const _0x2d54fa=a0_0x21ebcf;try{const _0x5daccc=_0xfaed29[_0x2d54fa(0xdb)]['id'],_0x29514f=await expenses_type[_0x2d54fa(0xc3)](_0x5daccc),_0x501309=await expenses_type[_0x2d54fa(0xe6)](_0x5daccc,_0xfaed29[_0x2d54fa(0xd1)]),_0x104d19=await all_expenses[_0x2d54fa(0xb3)]({'type':_0x29514f[_0x2d54fa(0xb2)]},{'$set':{'type':_0xfaed29[_0x2d54fa(0xd1)][_0x2d54fa(0xb2)]}});_0xfaed29[_0x2d54fa(0xb7)](_0x2d54fa(0xae),'expenses\x20data\x20update\x20successfully'),_0x354ebf[_0x2d54fa(0xd5)]('/all_expenses/type');}catch(_0x18e910){console[_0x2d54fa(0xca)](_0x18e910);}}),router[a0_0x21ebcf(0xbb)](a0_0x21ebcf(0xcd),auth,async(_0x431198,_0x4cc985)=>{const _0x4126f2=a0_0x21ebcf;try{const _0x2265a7=_0x431198[_0x4126f2(0xdb)]['id'],_0x355ff8=await expenses_type[_0x4126f2(0xe9)](_0x2265a7);_0x431198[_0x4126f2(0xb7)](_0x4126f2(0xae),_0x4126f2(0xc7)),_0x4cc985[_0x4126f2(0xd5)](_0x4126f2(0xe1));}catch(_0x2356f5){console[_0x4126f2(0xca)](_0x2356f5);}}),router[a0_0x21ebcf(0xbb)](a0_0x21ebcf(0xde),auth,async(_0x286fac,_0xc7b4a2)=>{const _0x1d2b7b=a0_0x21ebcf;try{const {username:_0x421a49,email:_0x48fa05,role:_0x4e921b}=_0x286fac[_0x1d2b7b(0xc6)],_0x2b1c81=_0x286fac[_0x1d2b7b(0xc6)],_0x576cba=await profile[_0x1d2b7b(0xda)]({'email':_0x2b1c81[_0x1d2b7b(0xd3)]}),_0x1df240=await master_shop[_0x1d2b7b(0xce)]();console['log'](_0x1d2b7b(0xe3),_0x1df240);const _0x4084c2=await expenses_type[_0x1d2b7b(0xce)]({}),_0x1f9d7d=await all_expenses[_0x1d2b7b(0xce)]({});console[_0x1d2b7b(0xca)](_0x1f9d7d);if(_0x1df240[0x0][_0x1d2b7b(0xb5)]==_0x1d2b7b(0xc2)){var _0x53f2a2=users[_0x1d2b7b(0xc5)];console[_0x1d2b7b(0xca)](_0x53f2a2);}else{if(_0x1df240[0x0][_0x1d2b7b(0xb5)]==_0x1d2b7b(0xd0))var _0x53f2a2=users[_0x1d2b7b(0xd0)];else{if(_0x1df240[0x0][_0x1d2b7b(0xb5)]==_0x1d2b7b(0xac))var _0x53f2a2=users['German'];else{if(_0x1df240[0x0][_0x1d2b7b(0xb5)]==_0x1d2b7b(0xb8))var _0x53f2a2=users['Spanish'];else{if(_0x1df240[0x0][_0x1d2b7b(0xb5)]==_0x1d2b7b(0xe4))var _0x53f2a2=users[_0x1d2b7b(0xe4)];else{if(_0x1df240[0x0]['language']==_0x1d2b7b(0xcf))var _0x53f2a2=users[_0x1d2b7b(0xbe)];else{if(_0x1df240[0x0][_0x1d2b7b(0xb5)]=='Chinese')var _0x53f2a2=users[_0x1d2b7b(0xe5)];else{if(_0x1df240[0x0][_0x1d2b7b(0xb5)]=='Arabic\x20(ae)')var _0x53f2a2=users[_0x1d2b7b(0xe7)];}}}}}}}_0xc7b4a2[_0x1d2b7b(0xdd)](_0x1d2b7b(0xbc),{'success':_0x286fac[_0x1d2b7b(0xb7)]('success'),'errors':_0x286fac[_0x1d2b7b(0xb7)](_0x1d2b7b(0xe8)),'role':_0x2b1c81,'profile':_0x576cba,'data':_0x4084c2,'expenses_data':_0x1f9d7d,'master_shop':_0x1df240,'language':_0x53f2a2});}catch(_0x360b5d){console['log'](_0x360b5d);}}),router[a0_0x21ebcf(0xbb)](a0_0x21ebcf(0xbd),auth,async(_0x56b307,_0x4f3f60)=>{const _0x55f614=a0_0x21ebcf;try{const {username:_0x5863b7,email:_0x2214e5,role:_0x3986c8}=_0x56b307[_0x55f614(0xc6)],_0x40bfbc=_0x56b307[_0x55f614(0xc6)],_0x9eb610=await profile['findOne']({'email':_0x40bfbc[_0x55f614(0xd3)]}),_0x52ec28=await master_shop[_0x55f614(0xce)]();console[_0x55f614(0xca)](_0x55f614(0xe3),_0x52ec28);const _0x3fa371=await expenses_type[_0x55f614(0xce)]({});if(_0x52ec28[0x0][_0x55f614(0xb5)]==_0x55f614(0xc2)){var _0x5cfd97=users['English'];console[_0x55f614(0xca)](_0x5cfd97);}else{if(_0x52ec28[0x0][_0x55f614(0xb5)]==_0x55f614(0xd0))var _0x5cfd97=users[_0x55f614(0xd0)];else{if(_0x52ec28[0x0][_0x55f614(0xb5)]=='German')var _0x5cfd97=users[_0x55f614(0xac)];else{if(_0x52ec28[0x0][_0x55f614(0xb5)]==_0x55f614(0xb8))var _0x5cfd97=users['Spanish'];else{if(_0x52ec28[0x0][_0x55f614(0xb5)]==_0x55f614(0xe4))var _0x5cfd97=users[_0x55f614(0xe4)];else{if(_0x52ec28[0x0][_0x55f614(0xb5)]==_0x55f614(0xcf))var _0x5cfd97=users[_0x55f614(0xbe)];else{if(_0x52ec28[0x0][_0x55f614(0xb5)]==_0x55f614(0xe5))var _0x5cfd97=users[_0x55f614(0xe5)];else{if(_0x52ec28[0x0][_0x55f614(0xb5)]==_0x55f614(0xc4))var _0x5cfd97=users['Arabic'];}}}}}}}_0x4f3f60[_0x55f614(0xdd)]('add_expenses',{'success':_0x56b307[_0x55f614(0xb7)]('success'),'errors':_0x56b307['flash']('errors'),'role':_0x40bfbc,'profile':_0x9eb610,'data':_0x3fa371,'master_shop':_0x52ec28,'language':_0x5cfd97});}catch(_0x3da4f3){console['log'](_0x3da4f3);}}),router['post'](a0_0x21ebcf(0xbd),auth,async(_0x34c3ce,_0x4dab5a)=>{const _0x5d1881=a0_0x21ebcf;try{const {type:_0x23cafc,date:_0x2a5651,amount:_0x180fa7,note:_0x4e31c8}=_0x34c3ce[_0x5d1881(0xd1)],_0x9bc4da=new all_expenses({'type':_0x23cafc,'date':_0x2a5651,'amount':_0x180fa7,'note':_0x4e31c8}),_0xa3711=await _0x9bc4da[_0x5d1881(0xb6)]();_0x4dab5a['redirect'](_0x5d1881(0xd9));}catch(_0xbb92cf){console['log'](_0xbb92cf);}}),router[a0_0x21ebcf(0xbb)](a0_0x21ebcf(0xc0),auth,async(_0x507b14,_0x4175bd)=>{const _0x23a7c0=a0_0x21ebcf;try{const {username:_0x98c1eb,email:_0x4260d0,role:_0x10ac54}=_0x507b14[_0x23a7c0(0xc6)],_0x504ebf=_0x507b14['user'],_0x3e55db=await profile['findOne']({'email':_0x504ebf[_0x23a7c0(0xd3)]}),_0x3d6b0e=await master_shop[_0x23a7c0(0xce)]();console['log'](_0x23a7c0(0xe3),_0x3d6b0e);const _0x48564c=await expenses_type[_0x23a7c0(0xce)]({});console[_0x23a7c0(0xca)](_0x48564c);const _0x243bf3=await all_expenses[_0x23a7c0(0xc3)](_0x507b14[_0x23a7c0(0xdb)]['id']);console[_0x23a7c0(0xca)](_0x243bf3);if(_0x3d6b0e[0x0]['language']==_0x23a7c0(0xc2)){var _0x35bd4c=users[_0x23a7c0(0xc5)];console[_0x23a7c0(0xca)](_0x35bd4c);}else{if(_0x3d6b0e[0x0][_0x23a7c0(0xb5)]==_0x23a7c0(0xd0))var _0x35bd4c=users['Hindi'];else{if(_0x3d6b0e[0x0][_0x23a7c0(0xb5)]==_0x23a7c0(0xac))var _0x35bd4c=users[_0x23a7c0(0xac)];else{if(_0x3d6b0e[0x0][_0x23a7c0(0xb5)]==_0x23a7c0(0xb8))var _0x35bd4c=users[_0x23a7c0(0xb8)];else{if(_0x3d6b0e[0x0][_0x23a7c0(0xb5)]==_0x23a7c0(0xe4))var _0x35bd4c=users['French'];else{if(_0x3d6b0e[0x0][_0x23a7c0(0xb5)]==_0x23a7c0(0xcf))var _0x35bd4c=users['Portuguese'];else{if(_0x3d6b0e[0x0][_0x23a7c0(0xb5)]==_0x23a7c0(0xe5))var _0x35bd4c=users[_0x23a7c0(0xe5)];else{if(_0x3d6b0e[0x0]['language']=='Arabic\x20(ae)')var _0x35bd4c=users[_0x23a7c0(0xe7)];}}}}}}}_0x4175bd['render'](_0x23a7c0(0xb9),{'success':_0x507b14[_0x23a7c0(0xb7)](_0x23a7c0(0xae)),'errors':_0x507b14['flash'](_0x23a7c0(0xe8)),'role':_0x504ebf,'profile':_0x3e55db,'data':_0x48564c,'expenses_data':_0x243bf3,'master_shop':_0x3d6b0e,'language':_0x35bd4c});}catch(_0xa84b14){console[_0x23a7c0(0xca)](_0xa84b14);}}),router[a0_0x21ebcf(0xd2)](a0_0x21ebcf(0xc0),auth,async(_0x3b1844,_0x42973f)=>{const _0x3dba99=a0_0x21ebcf;try{const _0x500c4d=_0x3b1844[_0x3dba99(0xdb)]['id'];console[_0x3dba99(0xca)](_0x500c4d);const _0x32a247=await all_expenses['findByIdAndUpdate'](_0x500c4d,_0x3b1844['body']);console[_0x3dba99(0xca)](_0x32a247),_0x3b1844['flash'](_0x3dba99(0xae),_0x3dba99(0xdf)),_0x42973f[_0x3dba99(0xd5)](_0x3dba99(0xd9));}catch(_0x510e45){console[_0x3dba99(0xca)](_0x510e45);}}),module['exports']=router;function a0_0x71a7(){const _0x2057bf=['countDocuments','/all_expenses/type','../models/all_models','master','French','Chinese','findByIdAndUpdate','Arabic','errors','findByIdAndDelete','German','15433308yJkBeA','success','20465ltJajw','/type','all','name','updateMany','8284608tZHNkA','language','save','flash','Spanish','edit_expenses','2330447cZDnrq','get','expenses','/view/add_expenses','Portuguese','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','/view/:id','864XsWQQt','English\x20(US)','findById','Arabic\x20(ae)','English','user','Expenses\x20data\x20delete\x20successfully','../middleware/auth','toJSON','log','\x20expenses\x20is\x20add\x20successfully','4oRphwW','/type/delete/:id','find','Portuguese\x20(BR)','Hindi','body','post','email','3264054mvgSHr','redirect','../public/language/languages.json','71877VcveFP','1281816vyiiXi','/all_expenses/view','findOne','params','map','render','/view','expenses\x20data\x20update\x20successfully'];a0_0x71a7=function(){return _0x2057bf;};return a0_0x71a7();}