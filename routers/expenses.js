const a0_0x215b73=a0_0x3438;(function(_0x405909,_0x17217c){const _0xfb939e=a0_0x3438,_0x4f5540=_0x405909();while(!![]){try{const _0x5a6faf=parseInt(_0xfb939e(0x147))/0x1*(parseInt(_0xfb939e(0x140))/0x2)+-parseInt(_0xfb939e(0x170))/0x3+parseInt(_0xfb939e(0x144))/0x4*(parseInt(_0xfb939e(0x157))/0x5)+-parseInt(_0xfb939e(0x149))/0x6*(-parseInt(_0xfb939e(0x16e))/0x7)+-parseInt(_0xfb939e(0x181))/0x8+parseInt(_0xfb939e(0x169))/0x9*(parseInt(_0xfb939e(0x163))/0xa)+-parseInt(_0xfb939e(0x143))/0xb;if(_0x5a6faf===_0x17217c)break;else _0x4f5540['push'](_0x4f5540['shift']());}catch(_0x2f4af9){_0x4f5540['push'](_0x4f5540['shift']());}}}(a0_0xd3e9,0xa95b0));function a0_0xd3e9(){const _0x10106c=['findByIdAndDelete','261780qQlFqW','errors','findOne','map','/view/add_expenses','/type','../models/all_models','master','Expenses\x20data\x20delete\x20successfully','get','expenses\x20data\x20update\x20successfully','post','findByIdAndUpdate','flash','German','countDocuments','add_expenses','2417896BmhSEb','208630AYDPfq','English','all','16454020kclVDW','1252IwLJQZ','render','body','6XxtXVR','Spanish','582372bRpZmN','language','Chinese','\x20expenses\x20is\x20add\x20successfully','Arabic\x20(ae)','/all_expenses/type','email','../public/language/languages.json','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','user','expenses','save','name','log','15590nMcesV','Arabic','/type/:id','find','Portuguese\x20(BR)','findById','expenses_type','success','English\x20(US)','Hindi','/view/:id','/view','10nrKLwT','redirect','French','params','edit_expenses','../middleware/auth','7047441jiBkfx','Portuguese','/all_expenses/view','/type/delete/:id','Router','14pEtzwH'];a0_0xd3e9=function(){return _0x10106c;};return a0_0xd3e9();}const express=require('express'),app=express(),router=express[a0_0x215b73(0x16d)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require(a0_0x215b73(0x176)),auth=require(a0_0x215b73(0x168)),users=require(a0_0x215b73(0x150));function a0_0x3438(_0x1f180f,_0x3590b7){const _0xd3e95e=a0_0xd3e9();return a0_0x3438=function(_0x343843,_0x383e20){_0x343843=_0x343843-0x140;let _0x2552b2=_0xd3e95e[_0x343843];return _0x2552b2;},a0_0x3438(_0x1f180f,_0x3590b7);}router[a0_0x215b73(0x179)](a0_0x215b73(0x175),auth,async(_0x230ed2,_0x428e89)=>{const _0x2370b6=a0_0x215b73;try{const {username:_0x32dbdf,email:_0x47f716,role:_0x208afc}=_0x230ed2[_0x2370b6(0x152)],_0x2efa50=_0x230ed2[_0x2370b6(0x152)],_0x1a5e92=await profile[_0x2370b6(0x172)]({'email':_0x2efa50[_0x2370b6(0x14f)]}),_0x526062=await master_shop[_0x2370b6(0x15a)]();if(_0x526062[0x0][_0x2370b6(0x14a)]==_0x2370b6(0x15f)){var _0x1dc462=users['English'];console[_0x2370b6(0x156)](_0x1dc462);}else{if(_0x526062[0x0][_0x2370b6(0x14a)]==_0x2370b6(0x160))var _0x1dc462=users[_0x2370b6(0x160)];else{if(_0x526062[0x0][_0x2370b6(0x14a)]=='German')var _0x1dc462=users[_0x2370b6(0x17e)];else{if(_0x526062[0x0]['language']==_0x2370b6(0x148))var _0x1dc462=users[_0x2370b6(0x148)];else{if(_0x526062[0x0][_0x2370b6(0x14a)]==_0x2370b6(0x165))var _0x1dc462=users[_0x2370b6(0x165)];else{if(_0x526062[0x0]['language']==_0x2370b6(0x15b))var _0x1dc462=users[_0x2370b6(0x16a)];else{if(_0x526062[0x0][_0x2370b6(0x14a)]=='Chinese')var _0x1dc462=users[_0x2370b6(0x14b)];else{if(_0x526062[0x0]['language']=='Arabic\x20(ae)')var _0x1dc462=users[_0x2370b6(0x158)];}}}}}}}const _0xcdb9ae=await expenses_type['find']({}),_0x51c550=await Promise[_0x2370b6(0x142)](_0xcdb9ae[_0x2370b6(0x173)](async _0xf12bf7=>{const _0x15ccf4=_0x2370b6,_0x22a258=await all_expenses[_0x15ccf4(0x17f)]({'type':_0xf12bf7[_0x15ccf4(0x155)]});return{..._0xf12bf7['toJSON'](),'count':_0x22a258};}));_0x428e89['render'](_0x2370b6(0x15d),{'success':_0x230ed2[_0x2370b6(0x17d)](_0x2370b6(0x15e)),'errors':_0x230ed2[_0x2370b6(0x17d)](_0x2370b6(0x171)),'role':_0x2efa50,'profile':_0x1a5e92,'master_shop':_0x526062,'language':_0x1dc462,'expensesData':_0x51c550});}catch(_0x1ee9a2){console[_0x2370b6(0x156)](_0x1ee9a2);}}),router[a0_0x215b73(0x17b)](a0_0x215b73(0x175),auth,async(_0x5af3f3,_0x4b40f7)=>{const _0x1ed40a=a0_0x215b73;try{const {name:_0x3f8d92}=_0x5af3f3['body'],_0x27588d=new expenses_type({'name':_0x3f8d92}),_0x72b3c5=await expenses_type[_0x1ed40a(0x172)]({'name':_0x3f8d92});if(_0x72b3c5)_0x5af3f3[_0x1ed40a(0x17d)](_0x1ed40a(0x171),_0x3f8d92+_0x1ed40a(0x151));else{_0x5af3f3[_0x1ed40a(0x17d)](_0x1ed40a(0x15e),_0x3f8d92+_0x1ed40a(0x14c));const _0x5a4810=await _0x27588d[_0x1ed40a(0x154)]();}_0x4b40f7[_0x1ed40a(0x164)](_0x1ed40a(0x14e));}catch(_0x5395b7){console[_0x1ed40a(0x156)](_0x5395b7);}}),router[a0_0x215b73(0x17b)](a0_0x215b73(0x159),auth,async(_0x525573,_0x4fc061)=>{const _0x36caf2=a0_0x215b73;try{const _0x5e6aba=_0x525573['params']['id'],_0x426e08=await expenses_type[_0x36caf2(0x15c)](_0x5e6aba),_0x341c04=await expenses_type[_0x36caf2(0x17c)](_0x5e6aba,_0x525573[_0x36caf2(0x146)]),_0x2cb1b5=await all_expenses['updateMany']({'type':_0x426e08['name']},{'$set':{'type':_0x525573[_0x36caf2(0x146)][_0x36caf2(0x155)]}});_0x525573[_0x36caf2(0x17d)]('success',_0x36caf2(0x17a)),_0x4fc061[_0x36caf2(0x164)]('/all_expenses/type');}catch(_0x4ac736){console['log'](_0x4ac736);}}),router[a0_0x215b73(0x179)](a0_0x215b73(0x16c),auth,async(_0xeb6a56,_0x7fe2e0)=>{const _0xb0c110=a0_0x215b73;try{const _0x58e64d=_0xeb6a56[_0xb0c110(0x166)]['id'],_0x54cd14=await expenses_type[_0xb0c110(0x16f)](_0x58e64d);_0xeb6a56[_0xb0c110(0x17d)](_0xb0c110(0x15e),_0xb0c110(0x178)),_0x7fe2e0[_0xb0c110(0x164)](_0xb0c110(0x14e));}catch(_0x4d1be0){console[_0xb0c110(0x156)](_0x4d1be0);}}),router[a0_0x215b73(0x179)](a0_0x215b73(0x162),auth,async(_0x5ed58c,_0x43348)=>{const _0x429ba9=a0_0x215b73;try{const {username:_0x279c4e,email:_0x6df557,role:_0x1152cd}=_0x5ed58c[_0x429ba9(0x152)],_0x537e7a=_0x5ed58c[_0x429ba9(0x152)],_0x5d530e=await profile[_0x429ba9(0x172)]({'email':_0x537e7a[_0x429ba9(0x14f)]}),_0x3afd5f=await master_shop[_0x429ba9(0x15a)]();console[_0x429ba9(0x156)](_0x429ba9(0x177),_0x3afd5f);const _0xc8010a=await expenses_type[_0x429ba9(0x15a)]({}),_0x2c953e=await all_expenses[_0x429ba9(0x15a)]({});console[_0x429ba9(0x156)](_0x2c953e);if(_0x3afd5f[0x0][_0x429ba9(0x14a)]==_0x429ba9(0x15f)){var _0x4117cd=users[_0x429ba9(0x141)];console[_0x429ba9(0x156)](_0x4117cd);}else{if(_0x3afd5f[0x0][_0x429ba9(0x14a)]==_0x429ba9(0x160))var _0x4117cd=users['Hindi'];else{if(_0x3afd5f[0x0][_0x429ba9(0x14a)]==_0x429ba9(0x17e))var _0x4117cd=users[_0x429ba9(0x17e)];else{if(_0x3afd5f[0x0][_0x429ba9(0x14a)]==_0x429ba9(0x148))var _0x4117cd=users[_0x429ba9(0x148)];else{if(_0x3afd5f[0x0][_0x429ba9(0x14a)]==_0x429ba9(0x165))var _0x4117cd=users['French'];else{if(_0x3afd5f[0x0]['language']=='Portuguese\x20(BR)')var _0x4117cd=users[_0x429ba9(0x16a)];else{if(_0x3afd5f[0x0][_0x429ba9(0x14a)]==_0x429ba9(0x14b))var _0x4117cd=users[_0x429ba9(0x14b)];else{if(_0x3afd5f[0x0][_0x429ba9(0x14a)]==_0x429ba9(0x14d))var _0x4117cd=users[_0x429ba9(0x158)];}}}}}}}_0x43348[_0x429ba9(0x145)](_0x429ba9(0x153),{'success':_0x5ed58c[_0x429ba9(0x17d)](_0x429ba9(0x15e)),'errors':_0x5ed58c[_0x429ba9(0x17d)](_0x429ba9(0x171)),'role':_0x537e7a,'profile':_0x5d530e,'data':_0xc8010a,'expenses_data':_0x2c953e,'master_shop':_0x3afd5f,'language':_0x4117cd});}catch(_0x5e047a){console[_0x429ba9(0x156)](_0x5e047a);}}),router[a0_0x215b73(0x179)]('/view/add_expenses',auth,async(_0x3391a0,_0x3c7c80)=>{const _0x22fe77=a0_0x215b73;try{const {username:_0x2585dd,email:_0xd9dfd4,role:_0x181943}=_0x3391a0[_0x22fe77(0x152)],_0x33c198=_0x3391a0[_0x22fe77(0x152)],_0x4f2993=await profile['findOne']({'email':_0x33c198['email']}),_0xddc766=await master_shop[_0x22fe77(0x15a)]();console[_0x22fe77(0x156)](_0x22fe77(0x177),_0xddc766);const _0x242bc6=await expenses_type[_0x22fe77(0x15a)]({});if(_0xddc766[0x0][_0x22fe77(0x14a)]=='English\x20(US)'){var _0x286260=users[_0x22fe77(0x141)];console[_0x22fe77(0x156)](_0x286260);}else{if(_0xddc766[0x0]['language']==_0x22fe77(0x160))var _0x286260=users[_0x22fe77(0x160)];else{if(_0xddc766[0x0][_0x22fe77(0x14a)]==_0x22fe77(0x17e))var _0x286260=users[_0x22fe77(0x17e)];else{if(_0xddc766[0x0]['language']==_0x22fe77(0x148))var _0x286260=users['Spanish'];else{if(_0xddc766[0x0][_0x22fe77(0x14a)]=='French')var _0x286260=users['French'];else{if(_0xddc766[0x0]['language']==_0x22fe77(0x15b))var _0x286260=users[_0x22fe77(0x16a)];else{if(_0xddc766[0x0][_0x22fe77(0x14a)]==_0x22fe77(0x14b))var _0x286260=users['Chinese'];else{if(_0xddc766[0x0]['language']==_0x22fe77(0x14d))var _0x286260=users[_0x22fe77(0x158)];}}}}}}}_0x3c7c80[_0x22fe77(0x145)](_0x22fe77(0x180),{'success':_0x3391a0['flash'](_0x22fe77(0x15e)),'errors':_0x3391a0[_0x22fe77(0x17d)](_0x22fe77(0x171)),'role':_0x33c198,'profile':_0x4f2993,'data':_0x242bc6,'master_shop':_0xddc766,'language':_0x286260});}catch(_0xda8868){console[_0x22fe77(0x156)](_0xda8868);}}),router[a0_0x215b73(0x17b)](a0_0x215b73(0x174),auth,async(_0x33f0c1,_0x45ecfb)=>{const _0x28bd04=a0_0x215b73;try{const {type:_0x26c02a,date:_0x2a9f70,amount:_0x3e4e31,note:_0x111cf9}=_0x33f0c1[_0x28bd04(0x146)],_0x195718=new all_expenses({'type':_0x26c02a,'date':_0x2a9f70,'amount':_0x3e4e31,'note':_0x111cf9}),_0x2a3482=await _0x195718['save']();_0x45ecfb['redirect'](_0x28bd04(0x16b));}catch(_0x285b4f){console[_0x28bd04(0x156)](_0x285b4f);}}),router[a0_0x215b73(0x179)]('/view/:id',auth,async(_0x192a21,_0x1376cf)=>{const _0x51d2ab=a0_0x215b73;try{const {username:_0x4e0d9b,email:_0x229de8,role:_0x2efd62}=_0x192a21[_0x51d2ab(0x152)],_0x1ed485=_0x192a21[_0x51d2ab(0x152)],_0x5dc8be=await profile['findOne']({'email':_0x1ed485[_0x51d2ab(0x14f)]}),_0xe3c2d4=await master_shop['find']();console[_0x51d2ab(0x156)](_0x51d2ab(0x177),_0xe3c2d4);const _0x59f280=await expenses_type['find']({});console[_0x51d2ab(0x156)](_0x59f280);const _0xadce9d=await all_expenses[_0x51d2ab(0x15c)](_0x192a21[_0x51d2ab(0x166)]['id']);console['log'](_0xadce9d);if(_0xe3c2d4[0x0][_0x51d2ab(0x14a)]=='English\x20(US)'){var _0x287668=users[_0x51d2ab(0x141)];console[_0x51d2ab(0x156)](_0x287668);}else{if(_0xe3c2d4[0x0]['language']==_0x51d2ab(0x160))var _0x287668=users['Hindi'];else{if(_0xe3c2d4[0x0]['language']=='German')var _0x287668=users[_0x51d2ab(0x17e)];else{if(_0xe3c2d4[0x0][_0x51d2ab(0x14a)]==_0x51d2ab(0x148))var _0x287668=users[_0x51d2ab(0x148)];else{if(_0xe3c2d4[0x0]['language']==_0x51d2ab(0x165))var _0x287668=users['French'];else{if(_0xe3c2d4[0x0]['language']==_0x51d2ab(0x15b))var _0x287668=users[_0x51d2ab(0x16a)];else{if(_0xe3c2d4[0x0]['language']=='Chinese')var _0x287668=users[_0x51d2ab(0x14b)];else{if(_0xe3c2d4[0x0][_0x51d2ab(0x14a)]==_0x51d2ab(0x14d))var _0x287668=users[_0x51d2ab(0x158)];}}}}}}}_0x1376cf[_0x51d2ab(0x145)](_0x51d2ab(0x167),{'success':_0x192a21['flash'](_0x51d2ab(0x15e)),'errors':_0x192a21[_0x51d2ab(0x17d)](_0x51d2ab(0x171)),'role':_0x1ed485,'profile':_0x5dc8be,'data':_0x59f280,'expenses_data':_0xadce9d,'master_shop':_0xe3c2d4,'language':_0x287668});}catch(_0x191d2e){console['log'](_0x191d2e);}}),router[a0_0x215b73(0x17b)](a0_0x215b73(0x161),auth,async(_0x2b613c,_0x576d5e)=>{const _0x5b9410=a0_0x215b73;try{const _0x51e7e7=_0x2b613c[_0x5b9410(0x166)]['id'];console[_0x5b9410(0x156)](_0x51e7e7);const _0x1dc169=await all_expenses['findByIdAndUpdate'](_0x51e7e7,_0x2b613c[_0x5b9410(0x146)]);console['log'](_0x1dc169),_0x2b613c[_0x5b9410(0x17d)](_0x5b9410(0x15e),_0x5b9410(0x17a)),_0x576d5e[_0x5b9410(0x164)](_0x5b9410(0x16b));}catch(_0x2a5190){console[_0x5b9410(0x156)](_0x2a5190);}}),module['exports']=router;