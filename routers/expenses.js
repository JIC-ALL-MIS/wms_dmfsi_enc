const a0_0x81594a=a0_0x461f;function a0_0x461f(_0x1f5866,_0x1836f2){const _0x17be2a=a0_0x17be();return a0_0x461f=function(_0x461f10,_0x3cf8b4){_0x461f10=_0x461f10-0x1ed;let _0x59a454=_0x17be2a[_0x461f10];return _0x59a454;},a0_0x461f(_0x1f5866,_0x1836f2);}(function(_0x1be0a1,_0x43394c){const _0x512ebf=a0_0x461f,_0x30c220=_0x1be0a1();while(!![]){try{const _0x544715=-parseInt(_0x512ebf(0x1fd))/0x1+-parseInt(_0x512ebf(0x218))/0x2*(-parseInt(_0x512ebf(0x225))/0x3)+-parseInt(_0x512ebf(0x208))/0x4+-parseInt(_0x512ebf(0x1f4))/0x5+-parseInt(_0x512ebf(0x204))/0x6*(parseInt(_0x512ebf(0x1fb))/0x7)+parseInt(_0x512ebf(0x220))/0x8+parseInt(_0x512ebf(0x20c))/0x9;if(_0x544715===_0x43394c)break;else _0x30c220['push'](_0x30c220['shift']());}catch(_0x5804ea){_0x30c220['push'](_0x30c220['shift']());}}}(a0_0x17be,0x514e2));const express=require(a0_0x81594a(0x21d)),app=express(),router=express[a0_0x81594a(0x210)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require(a0_0x81594a(0x1f5)),auth=require(a0_0x81594a(0x1f6)),users=require(a0_0x81594a(0x201));function a0_0x17be(){const _0x10c746=['282XHHmOw','success','user','updateMany','1461084ivHhmc','/view','expenses','Portuguese\x20(BR)','11910330YxfRAV','Spanish','save','post','Router','expenses\x20data\x20update\x20successfully','Arabic','/view/:id','params','edit_expenses','Hindi','Expenses\x20data\x20delete\x20successfully','48616NfRRXk','German','log','French','master','express','add_expenses','/all_expenses/type','2226872NDHLqT','all','render','get','Chinese','6oWhyVZ','English','errors','body','Portuguese','Arabic\x20(ae)','redirect','/view/add_expenses','findOne','email','name','/type','\x20expenses\x20is\x20add\x20successfully','3059300BgBZxm','../models/all_models','../middleware/auth','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','language','expenses_type','find','19271UsLzXX','English\x20(US)','210797AoCfQB','findByIdAndUpdate','/all_expenses/view','flash','../public/language/languages.json','map','/type/:id'];a0_0x17be=function(){return _0x10c746;};return a0_0x17be();}router['get'](a0_0x81594a(0x1f2),auth,async(_0x101793,_0x391efc)=>{const _0x1588bc=a0_0x81594a;try{const {username:_0x49a5c6,email:_0x3a4708,role:_0x11c755}=_0x101793[_0x1588bc(0x206)],_0x3bd63e=_0x101793[_0x1588bc(0x206)],_0x376cb6=await profile['findOne']({'email':_0x3bd63e['email']}),_0x183b64=await master_shop['find']();if(_0x183b64[0x0][_0x1588bc(0x1f8)]==_0x1588bc(0x1fc)){var _0xa4bccb=users[_0x1588bc(0x226)];console[_0x1588bc(0x21a)](_0xa4bccb);}else{if(_0x183b64[0x0]['language']==_0x1588bc(0x216))var _0xa4bccb=users[_0x1588bc(0x216)];else{if(_0x183b64[0x0][_0x1588bc(0x1f8)]=='German')var _0xa4bccb=users[_0x1588bc(0x219)];else{if(_0x183b64[0x0][_0x1588bc(0x1f8)]=='Spanish')var _0xa4bccb=users[_0x1588bc(0x20d)];else{if(_0x183b64[0x0][_0x1588bc(0x1f8)]=='French')var _0xa4bccb=users[_0x1588bc(0x21b)];else{if(_0x183b64[0x0]['language']==_0x1588bc(0x20b))var _0xa4bccb=users[_0x1588bc(0x229)];else{if(_0x183b64[0x0][_0x1588bc(0x1f8)]==_0x1588bc(0x224))var _0xa4bccb=users['Chinese'];else{if(_0x183b64[0x0]['language']=='Arabic\x20(ae)')var _0xa4bccb=users['Arabic'];}}}}}}}const _0xf87330=await expenses_type[_0x1588bc(0x1fa)]({}),_0x406c2d=await Promise[_0x1588bc(0x221)](_0xf87330[_0x1588bc(0x202)](async _0x23ae45=>{const _0x5df212=_0x1588bc,_0x37c2b5=await all_expenses['countDocuments']({'type':_0x23ae45[_0x5df212(0x1f1)]});return{..._0x23ae45['toJSON'](),'count':_0x37c2b5};}));_0x391efc[_0x1588bc(0x222)](_0x1588bc(0x1f9),{'success':_0x101793[_0x1588bc(0x200)](_0x1588bc(0x205)),'errors':_0x101793[_0x1588bc(0x200)](_0x1588bc(0x227)),'role':_0x3bd63e,'profile':_0x376cb6,'master_shop':_0x183b64,'language':_0xa4bccb,'expensesData':_0x406c2d});}catch(_0x40bb5f){console[_0x1588bc(0x21a)](_0x40bb5f);}}),router[a0_0x81594a(0x20f)](a0_0x81594a(0x1f2),auth,async(_0xd03ff1,_0x1233d8)=>{const _0x1a18c0=a0_0x81594a;try{const {name:_0x27ed2d}=_0xd03ff1[_0x1a18c0(0x228)],_0x2b5647=new expenses_type({'name':_0x27ed2d}),_0x495738=await expenses_type[_0x1a18c0(0x1ef)]({'name':_0x27ed2d});if(_0x495738)_0xd03ff1['flash'](_0x1a18c0(0x227),_0x27ed2d+_0x1a18c0(0x1f7));else{_0xd03ff1['flash'](_0x1a18c0(0x205),_0x27ed2d+_0x1a18c0(0x1f3));const _0x4ed119=await _0x2b5647[_0x1a18c0(0x20e)]();}_0x1233d8[_0x1a18c0(0x1ed)](_0x1a18c0(0x21f));}catch(_0x4183a9){console[_0x1a18c0(0x21a)](_0x4183a9);}}),router[a0_0x81594a(0x20f)](a0_0x81594a(0x203),auth,async(_0x200d0e,_0x5728ec)=>{const _0x17f66f=a0_0x81594a;try{const _0x4f4b2c=_0x200d0e[_0x17f66f(0x214)]['id'],_0x6550f8=await expenses_type['findById'](_0x4f4b2c),_0x46ea3f=await expenses_type[_0x17f66f(0x1fe)](_0x4f4b2c,_0x200d0e[_0x17f66f(0x228)]),_0x450ace=await all_expenses[_0x17f66f(0x207)]({'type':_0x6550f8['name']},{'$set':{'type':_0x200d0e['body'][_0x17f66f(0x1f1)]}});_0x200d0e['flash'](_0x17f66f(0x205),'expenses\x20data\x20update\x20successfully'),_0x5728ec[_0x17f66f(0x1ed)](_0x17f66f(0x21f));}catch(_0xf31251){console[_0x17f66f(0x21a)](_0xf31251);}}),router[a0_0x81594a(0x223)]('/type/delete/:id',auth,async(_0x580ac8,_0x429ddb)=>{const _0x398e20=a0_0x81594a;try{const _0xb91c1=_0x580ac8['params']['id'],_0x5957dc=await expenses_type['findByIdAndDelete'](_0xb91c1);_0x580ac8[_0x398e20(0x200)](_0x398e20(0x205),_0x398e20(0x217)),_0x429ddb[_0x398e20(0x1ed)]('/all_expenses/type');}catch(_0xd2d39a){console[_0x398e20(0x21a)](_0xd2d39a);}}),router[a0_0x81594a(0x223)](a0_0x81594a(0x209),auth,async(_0x2a3051,_0x2a2755)=>{const _0x29c752=a0_0x81594a;try{const {username:_0x100327,email:_0x47ec44,role:_0x1c1499}=_0x2a3051[_0x29c752(0x206)],_0x5ba784=_0x2a3051[_0x29c752(0x206)],_0x4289b8=await profile[_0x29c752(0x1ef)]({'email':_0x5ba784[_0x29c752(0x1f0)]}),_0x5ca43f=await master_shop[_0x29c752(0x1fa)]();console[_0x29c752(0x21a)](_0x29c752(0x21c),_0x5ca43f);const _0x2762df=await expenses_type[_0x29c752(0x1fa)]({}),_0x25bf90=await all_expenses[_0x29c752(0x1fa)]({});console[_0x29c752(0x21a)](_0x25bf90);if(_0x5ca43f[0x0][_0x29c752(0x1f8)]==_0x29c752(0x1fc)){var _0x55e3c7=users['English'];console[_0x29c752(0x21a)](_0x55e3c7);}else{if(_0x5ca43f[0x0][_0x29c752(0x1f8)]=='Hindi')var _0x55e3c7=users[_0x29c752(0x216)];else{if(_0x5ca43f[0x0][_0x29c752(0x1f8)]=='German')var _0x55e3c7=users[_0x29c752(0x219)];else{if(_0x5ca43f[0x0]['language']==_0x29c752(0x20d))var _0x55e3c7=users[_0x29c752(0x20d)];else{if(_0x5ca43f[0x0][_0x29c752(0x1f8)]==_0x29c752(0x21b))var _0x55e3c7=users['French'];else{if(_0x5ca43f[0x0][_0x29c752(0x1f8)]==_0x29c752(0x20b))var _0x55e3c7=users['Portuguese'];else{if(_0x5ca43f[0x0]['language']==_0x29c752(0x224))var _0x55e3c7=users[_0x29c752(0x224)];else{if(_0x5ca43f[0x0][_0x29c752(0x1f8)]==_0x29c752(0x22a))var _0x55e3c7=users[_0x29c752(0x212)];}}}}}}}_0x2a2755['render'](_0x29c752(0x20a),{'success':_0x2a3051[_0x29c752(0x200)](_0x29c752(0x205)),'errors':_0x2a3051[_0x29c752(0x200)](_0x29c752(0x227)),'role':_0x5ba784,'profile':_0x4289b8,'data':_0x2762df,'expenses_data':_0x25bf90,'master_shop':_0x5ca43f,'language':_0x55e3c7});}catch(_0x216532){console['log'](_0x216532);}}),router['get']('/view/add_expenses',auth,async(_0x244b3f,_0x30635c)=>{const _0x3deb06=a0_0x81594a;try{const {username:_0x2d668f,email:_0x11d711,role:_0x113446}=_0x244b3f[_0x3deb06(0x206)],_0x27f9f0=_0x244b3f['user'],_0x302b19=await profile[_0x3deb06(0x1ef)]({'email':_0x27f9f0[_0x3deb06(0x1f0)]}),_0x3f033a=await master_shop[_0x3deb06(0x1fa)]();console['log'](_0x3deb06(0x21c),_0x3f033a);const _0xbde006=await expenses_type[_0x3deb06(0x1fa)]({});if(_0x3f033a[0x0]['language']==_0x3deb06(0x1fc)){var _0x1ad11f=users[_0x3deb06(0x226)];console[_0x3deb06(0x21a)](_0x1ad11f);}else{if(_0x3f033a[0x0][_0x3deb06(0x1f8)]=='Hindi')var _0x1ad11f=users[_0x3deb06(0x216)];else{if(_0x3f033a[0x0][_0x3deb06(0x1f8)]==_0x3deb06(0x219))var _0x1ad11f=users[_0x3deb06(0x219)];else{if(_0x3f033a[0x0]['language']==_0x3deb06(0x20d))var _0x1ad11f=users[_0x3deb06(0x20d)];else{if(_0x3f033a[0x0][_0x3deb06(0x1f8)]==_0x3deb06(0x21b))var _0x1ad11f=users[_0x3deb06(0x21b)];else{if(_0x3f033a[0x0][_0x3deb06(0x1f8)]==_0x3deb06(0x20b))var _0x1ad11f=users[_0x3deb06(0x229)];else{if(_0x3f033a[0x0][_0x3deb06(0x1f8)]==_0x3deb06(0x224))var _0x1ad11f=users[_0x3deb06(0x224)];else{if(_0x3f033a[0x0][_0x3deb06(0x1f8)]=='Arabic\x20(ae)')var _0x1ad11f=users[_0x3deb06(0x212)];}}}}}}}_0x30635c[_0x3deb06(0x222)](_0x3deb06(0x21e),{'success':_0x244b3f[_0x3deb06(0x200)](_0x3deb06(0x205)),'errors':_0x244b3f['flash'](_0x3deb06(0x227)),'role':_0x27f9f0,'profile':_0x302b19,'data':_0xbde006,'master_shop':_0x3f033a,'language':_0x1ad11f});}catch(_0x3e2961){console[_0x3deb06(0x21a)](_0x3e2961);}}),router[a0_0x81594a(0x20f)](a0_0x81594a(0x1ee),auth,async(_0x5b8dac,_0x135d12)=>{const _0xabc9fb=a0_0x81594a;try{const {type:_0xa1567,date:_0x211eba,amount:_0xfa99fe,note:_0x2b0644}=_0x5b8dac[_0xabc9fb(0x228)],_0x335048=new all_expenses({'type':_0xa1567,'date':_0x211eba,'amount':_0xfa99fe,'note':_0x2b0644}),_0x440f5a=await _0x335048[_0xabc9fb(0x20e)]();_0x135d12['redirect'](_0xabc9fb(0x1ff));}catch(_0x444ee2){console[_0xabc9fb(0x21a)](_0x444ee2);}}),router[a0_0x81594a(0x223)](a0_0x81594a(0x213),auth,async(_0x3e6757,_0x11de52)=>{const _0x408d2d=a0_0x81594a;try{const {username:_0x106bb3,email:_0x371d1e,role:_0x5956b0}=_0x3e6757[_0x408d2d(0x206)],_0x5191d2=_0x3e6757[_0x408d2d(0x206)],_0x4c7cd6=await profile[_0x408d2d(0x1ef)]({'email':_0x5191d2['email']}),_0x48fd4e=await master_shop[_0x408d2d(0x1fa)]();console['log'](_0x408d2d(0x21c),_0x48fd4e);const _0x22791f=await expenses_type[_0x408d2d(0x1fa)]({});console['log'](_0x22791f);const _0x37fa2d=await all_expenses['findById'](_0x3e6757[_0x408d2d(0x214)]['id']);console[_0x408d2d(0x21a)](_0x37fa2d);if(_0x48fd4e[0x0]['language']=='English\x20(US)'){var _0x25f2f7=users['English'];console[_0x408d2d(0x21a)](_0x25f2f7);}else{if(_0x48fd4e[0x0][_0x408d2d(0x1f8)]==_0x408d2d(0x216))var _0x25f2f7=users[_0x408d2d(0x216)];else{if(_0x48fd4e[0x0]['language']==_0x408d2d(0x219))var _0x25f2f7=users[_0x408d2d(0x219)];else{if(_0x48fd4e[0x0][_0x408d2d(0x1f8)]==_0x408d2d(0x20d))var _0x25f2f7=users[_0x408d2d(0x20d)];else{if(_0x48fd4e[0x0][_0x408d2d(0x1f8)]==_0x408d2d(0x21b))var _0x25f2f7=users[_0x408d2d(0x21b)];else{if(_0x48fd4e[0x0][_0x408d2d(0x1f8)]==_0x408d2d(0x20b))var _0x25f2f7=users[_0x408d2d(0x229)];else{if(_0x48fd4e[0x0][_0x408d2d(0x1f8)]=='Chinese')var _0x25f2f7=users[_0x408d2d(0x224)];else{if(_0x48fd4e[0x0]['language']==_0x408d2d(0x22a))var _0x25f2f7=users[_0x408d2d(0x212)];}}}}}}}_0x11de52['render'](_0x408d2d(0x215),{'success':_0x3e6757[_0x408d2d(0x200)](_0x408d2d(0x205)),'errors':_0x3e6757[_0x408d2d(0x200)](_0x408d2d(0x227)),'role':_0x5191d2,'profile':_0x4c7cd6,'data':_0x22791f,'expenses_data':_0x37fa2d,'master_shop':_0x48fd4e,'language':_0x25f2f7});}catch(_0x189065){console[_0x408d2d(0x21a)](_0x189065);}}),router[a0_0x81594a(0x20f)](a0_0x81594a(0x213),auth,async(_0x559da8,_0x2b5cd4)=>{const _0x2fac75=a0_0x81594a;try{const _0x56af0a=_0x559da8['params']['id'];console[_0x2fac75(0x21a)](_0x56af0a);const _0x24b002=await all_expenses[_0x2fac75(0x1fe)](_0x56af0a,_0x559da8[_0x2fac75(0x228)]);console[_0x2fac75(0x21a)](_0x24b002),_0x559da8[_0x2fac75(0x200)]('success',_0x2fac75(0x211)),_0x2b5cd4[_0x2fac75(0x1ed)](_0x2fac75(0x1ff));}catch(_0x5c94fc){console[_0x2fac75(0x21a)](_0x5c94fc);}}),module['exports']=router;