const a0_0x4f4d7c=a0_0x11e0;function a0_0x11e0(_0x5aa1af,_0x1b05c3){const _0x48c2ae=a0_0x48c2();return a0_0x11e0=function(_0x11e027,_0x123153){_0x11e027=_0x11e027-0xb1;let _0x580a28=_0x48c2ae[_0x11e027];return _0x580a28;},a0_0x11e0(_0x5aa1af,_0x1b05c3);}(function(_0x322b14,_0x2894f7){const _0x2e5172=a0_0x11e0,_0x9befdf=_0x322b14();while(!![]){try{const _0x17eafa=parseInt(_0x2e5172(0xe2))/0x1*(-parseInt(_0x2e5172(0xbc))/0x2)+parseInt(_0x2e5172(0xc9))/0x3+-parseInt(_0x2e5172(0xcf))/0x4*(-parseInt(_0x2e5172(0xf0))/0x5)+-parseInt(_0x2e5172(0xdb))/0x6+-parseInt(_0x2e5172(0xec))/0x7+parseInt(_0x2e5172(0xc0))/0x8*(-parseInt(_0x2e5172(0xee))/0x9)+-parseInt(_0x2e5172(0xf4))/0xa*(-parseInt(_0x2e5172(0xe4))/0xb);if(_0x17eafa===_0x2894f7)break;else _0x9befdf['push'](_0x9befdf['shift']());}catch(_0x2514e4){_0x9befdf['push'](_0x9befdf['shift']());}}}(a0_0x48c2,0xcbd93));function a0_0x48c2(){const _0x3c2d6c=['email','get','save','133087ydcbtN','/view/:id','8481VWrGnH','/all_expenses/view','add_expenses','redirect','map','express','Spanish','Arabic\x20(ae)','7102774oLUxPu','findByIdAndUpdate','82143vRmxof','exports','5520215eMbqfp','language','/view/add_expenses','flash','4580zvKWbc','all','Expenses\x20data\x20delete\x20successfully','findById','errors','\x20expenses\x20is\x20add\x20successfully','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','German','expenses\x20data\x20update\x20successfully','Portuguese\x20(BR)','French','name','Portuguese','2XTqXbF','render','master','countDocuments','296YYVBsM','expenses_type','/type','../public/language/languages.json','edit_expenses','findByIdAndDelete','params','expenses','../middleware/auth','3980754bsUzws','post','user','/type/:id','Chinese','/view','4NBJYwz','Hindi','findOne','updateMany','body','success','English','/type/delete/:id','Arabic','/all_expenses/type','log','toJSON','2781888tjRMed','find','English\x20(US)','Router'];a0_0x48c2=function(){return _0x3c2d6c;};return a0_0x48c2();}const express=require(a0_0x4f4d7c(0xe9)),app=express(),router=express[a0_0x4f4d7c(0xde)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require('../models/all_models'),auth=require(a0_0x4f4d7c(0xc8)),users=require(a0_0x4f4d7c(0xc3));router[a0_0x4f4d7c(0xe0)](a0_0x4f4d7c(0xc2),auth,async(_0x4825fe,_0xb868ce)=>{const _0x7f3066=a0_0x4f4d7c;try{const {username:_0x5b32c6,email:_0x37e098,role:_0x5ae96b}=_0x4825fe[_0x7f3066(0xcb)],_0x1ca68a=_0x4825fe[_0x7f3066(0xcb)],_0x282a15=await profile[_0x7f3066(0xd1)]({'email':_0x1ca68a[_0x7f3066(0xdf)]}),_0x4bfd02=await master_shop[_0x7f3066(0xdc)]();if(_0x4bfd02[0x0][_0x7f3066(0xf1)]==_0x7f3066(0xdd)){var _0x5b0ef2=users[_0x7f3066(0xd5)];console[_0x7f3066(0xd9)](_0x5b0ef2);}else{if(_0x4bfd02[0x0][_0x7f3066(0xf1)]==_0x7f3066(0xd0))var _0x5b0ef2=users[_0x7f3066(0xd0)];else{if(_0x4bfd02[0x0]['language']==_0x7f3066(0xb6))var _0x5b0ef2=users[_0x7f3066(0xb6)];else{if(_0x4bfd02[0x0]['language']==_0x7f3066(0xea))var _0x5b0ef2=users[_0x7f3066(0xea)];else{if(_0x4bfd02[0x0][_0x7f3066(0xf1)]==_0x7f3066(0xb9))var _0x5b0ef2=users[_0x7f3066(0xb9)];else{if(_0x4bfd02[0x0]['language']==_0x7f3066(0xb8))var _0x5b0ef2=users[_0x7f3066(0xbb)];else{if(_0x4bfd02[0x0][_0x7f3066(0xf1)]==_0x7f3066(0xcd))var _0x5b0ef2=users[_0x7f3066(0xcd)];else{if(_0x4bfd02[0x0][_0x7f3066(0xf1)]==_0x7f3066(0xeb))var _0x5b0ef2=users[_0x7f3066(0xd7)];}}}}}}}const _0x257dee=await expenses_type['find']({}),_0xc26f48=await Promise[_0x7f3066(0xf5)](_0x257dee[_0x7f3066(0xe8)](async _0xcbec6a=>{const _0x5e8741=_0x7f3066,_0x46e238=await all_expenses[_0x5e8741(0xbf)]({'type':_0xcbec6a['name']});return{..._0xcbec6a[_0x5e8741(0xda)](),'count':_0x46e238};}));_0xb868ce['render'](_0x7f3066(0xc1),{'success':_0x4825fe[_0x7f3066(0xf3)]('success'),'errors':_0x4825fe[_0x7f3066(0xf3)](_0x7f3066(0xb3)),'role':_0x1ca68a,'profile':_0x282a15,'master_shop':_0x4bfd02,'language':_0x5b0ef2,'expensesData':_0xc26f48});}catch(_0x1b8250){console[_0x7f3066(0xd9)](_0x1b8250);}}),router['post'](a0_0x4f4d7c(0xc2),auth,async(_0x8034ba,_0x2a1f39)=>{const _0x550aba=a0_0x4f4d7c;try{const {name:_0x371e30}=_0x8034ba[_0x550aba(0xd3)],_0xca62ff=new expenses_type({'name':_0x371e30}),_0x3d0245=await expenses_type[_0x550aba(0xd1)]({'name':_0x371e30});if(_0x3d0245)_0x8034ba[_0x550aba(0xf3)]('errors',_0x371e30+_0x550aba(0xb5));else{_0x8034ba[_0x550aba(0xf3)](_0x550aba(0xd4),_0x371e30+_0x550aba(0xb4));const _0x4937aa=await _0xca62ff['save']();}_0x2a1f39[_0x550aba(0xe7)](_0x550aba(0xd8));}catch(_0x2a8c07){console[_0x550aba(0xd9)](_0x2a8c07);}}),router[a0_0x4f4d7c(0xca)](a0_0x4f4d7c(0xcc),auth,async(_0x41ed28,_0x26e6ce)=>{const _0x4455ba=a0_0x4f4d7c;try{const _0x450c90=_0x41ed28[_0x4455ba(0xc6)]['id'],_0x2d696d=await expenses_type[_0x4455ba(0xb2)](_0x450c90),_0x3810da=await expenses_type[_0x4455ba(0xed)](_0x450c90,_0x41ed28[_0x4455ba(0xd3)]),_0x3c780c=await all_expenses[_0x4455ba(0xd2)]({'type':_0x2d696d[_0x4455ba(0xba)]},{'$set':{'type':_0x41ed28[_0x4455ba(0xd3)]['name']}});_0x41ed28[_0x4455ba(0xf3)](_0x4455ba(0xd4),'expenses\x20data\x20update\x20successfully'),_0x26e6ce[_0x4455ba(0xe7)](_0x4455ba(0xd8));}catch(_0x4eb72c){console[_0x4455ba(0xd9)](_0x4eb72c);}}),router[a0_0x4f4d7c(0xe0)](a0_0x4f4d7c(0xd6),auth,async(_0x20c56e,_0x5550ae)=>{const _0x57ee83=a0_0x4f4d7c;try{const _0x2a822b=_0x20c56e[_0x57ee83(0xc6)]['id'],_0xa2a3e=await expenses_type[_0x57ee83(0xc5)](_0x2a822b);_0x20c56e[_0x57ee83(0xf3)]('success',_0x57ee83(0xb1)),_0x5550ae[_0x57ee83(0xe7)](_0x57ee83(0xd8));}catch(_0x348c74){console[_0x57ee83(0xd9)](_0x348c74);}}),router[a0_0x4f4d7c(0xe0)](a0_0x4f4d7c(0xce),auth,async(_0x2eb349,_0x39e466)=>{const _0x3db1a3=a0_0x4f4d7c;try{const {username:_0x1d9210,email:_0x57da75,role:_0x356ea4}=_0x2eb349['user'],_0x23ee10=_0x2eb349['user'],_0x2dca8a=await profile[_0x3db1a3(0xd1)]({'email':_0x23ee10['email']}),_0x3283dc=await master_shop[_0x3db1a3(0xdc)]();console[_0x3db1a3(0xd9)]('master',_0x3283dc);const _0x6e9fb9=await expenses_type[_0x3db1a3(0xdc)]({}),_0x24c5a3=await all_expenses[_0x3db1a3(0xdc)]({});console[_0x3db1a3(0xd9)](_0x24c5a3);if(_0x3283dc[0x0]['language']==_0x3db1a3(0xdd)){var _0x50716c=users[_0x3db1a3(0xd5)];console[_0x3db1a3(0xd9)](_0x50716c);}else{if(_0x3283dc[0x0][_0x3db1a3(0xf1)]==_0x3db1a3(0xd0))var _0x50716c=users[_0x3db1a3(0xd0)];else{if(_0x3283dc[0x0][_0x3db1a3(0xf1)]==_0x3db1a3(0xb6))var _0x50716c=users['German'];else{if(_0x3283dc[0x0][_0x3db1a3(0xf1)]==_0x3db1a3(0xea))var _0x50716c=users[_0x3db1a3(0xea)];else{if(_0x3283dc[0x0][_0x3db1a3(0xf1)]==_0x3db1a3(0xb9))var _0x50716c=users['French'];else{if(_0x3283dc[0x0]['language']==_0x3db1a3(0xb8))var _0x50716c=users[_0x3db1a3(0xbb)];else{if(_0x3283dc[0x0][_0x3db1a3(0xf1)]==_0x3db1a3(0xcd))var _0x50716c=users['Chinese'];else{if(_0x3283dc[0x0][_0x3db1a3(0xf1)]==_0x3db1a3(0xeb))var _0x50716c=users[_0x3db1a3(0xd7)];}}}}}}}_0x39e466['render'](_0x3db1a3(0xc7),{'success':_0x2eb349[_0x3db1a3(0xf3)](_0x3db1a3(0xd4)),'errors':_0x2eb349[_0x3db1a3(0xf3)]('errors'),'role':_0x23ee10,'profile':_0x2dca8a,'data':_0x6e9fb9,'expenses_data':_0x24c5a3,'master_shop':_0x3283dc,'language':_0x50716c});}catch(_0x17a00b){console[_0x3db1a3(0xd9)](_0x17a00b);}}),router[a0_0x4f4d7c(0xe0)](a0_0x4f4d7c(0xf2),auth,async(_0x2c55ec,_0x4e5470)=>{const _0x4c350b=a0_0x4f4d7c;try{const {username:_0x12cbca,email:_0xe27340,role:_0x21e462}=_0x2c55ec[_0x4c350b(0xcb)],_0x4d9e69=_0x2c55ec[_0x4c350b(0xcb)],_0x296b1e=await profile[_0x4c350b(0xd1)]({'email':_0x4d9e69['email']}),_0x461c59=await master_shop[_0x4c350b(0xdc)]();console[_0x4c350b(0xd9)](_0x4c350b(0xbe),_0x461c59);const _0xb71b2b=await expenses_type['find']({});if(_0x461c59[0x0][_0x4c350b(0xf1)]==_0x4c350b(0xdd)){var _0x2f123c=users[_0x4c350b(0xd5)];console[_0x4c350b(0xd9)](_0x2f123c);}else{if(_0x461c59[0x0][_0x4c350b(0xf1)]==_0x4c350b(0xd0))var _0x2f123c=users[_0x4c350b(0xd0)];else{if(_0x461c59[0x0][_0x4c350b(0xf1)]==_0x4c350b(0xb6))var _0x2f123c=users[_0x4c350b(0xb6)];else{if(_0x461c59[0x0][_0x4c350b(0xf1)]==_0x4c350b(0xea))var _0x2f123c=users[_0x4c350b(0xea)];else{if(_0x461c59[0x0][_0x4c350b(0xf1)]=='French')var _0x2f123c=users['French'];else{if(_0x461c59[0x0][_0x4c350b(0xf1)]==_0x4c350b(0xb8))var _0x2f123c=users[_0x4c350b(0xbb)];else{if(_0x461c59[0x0]['language']==_0x4c350b(0xcd))var _0x2f123c=users['Chinese'];else{if(_0x461c59[0x0]['language']==_0x4c350b(0xeb))var _0x2f123c=users[_0x4c350b(0xd7)];}}}}}}}_0x4e5470[_0x4c350b(0xbd)](_0x4c350b(0xe6),{'success':_0x2c55ec['flash'](_0x4c350b(0xd4)),'errors':_0x2c55ec[_0x4c350b(0xf3)]('errors'),'role':_0x4d9e69,'profile':_0x296b1e,'data':_0xb71b2b,'master_shop':_0x461c59,'language':_0x2f123c});}catch(_0x44ae48){console[_0x4c350b(0xd9)](_0x44ae48);}}),router[a0_0x4f4d7c(0xca)](a0_0x4f4d7c(0xf2),auth,async(_0xfc6494,_0x2705cf)=>{const _0x25279d=a0_0x4f4d7c;try{const {type:_0x3618a6,date:_0x239e41,amount:_0x362c7c,note:_0x23efa3}=_0xfc6494['body'],_0x2fb933=new all_expenses({'type':_0x3618a6,'date':_0x239e41,'amount':_0x362c7c,'note':_0x23efa3}),_0x4f5955=await _0x2fb933[_0x25279d(0xe1)]();_0x2705cf[_0x25279d(0xe7)](_0x25279d(0xe5));}catch(_0x10eb7b){console[_0x25279d(0xd9)](_0x10eb7b);}}),router[a0_0x4f4d7c(0xe0)](a0_0x4f4d7c(0xe3),auth,async(_0xf37a47,_0x9b16cf)=>{const _0x207a69=a0_0x4f4d7c;try{const {username:_0x28fddb,email:_0x6b07e5,role:_0x54820b}=_0xf37a47[_0x207a69(0xcb)],_0x2a6acc=_0xf37a47[_0x207a69(0xcb)],_0x5d45c3=await profile[_0x207a69(0xd1)]({'email':_0x2a6acc[_0x207a69(0xdf)]}),_0x35e042=await master_shop['find']();console[_0x207a69(0xd9)](_0x207a69(0xbe),_0x35e042);const _0x44796c=await expenses_type[_0x207a69(0xdc)]({});console[_0x207a69(0xd9)](_0x44796c);const _0x2c9edd=await all_expenses[_0x207a69(0xb2)](_0xf37a47[_0x207a69(0xc6)]['id']);console[_0x207a69(0xd9)](_0x2c9edd);if(_0x35e042[0x0]['language']==_0x207a69(0xdd)){var _0x56d16e=users[_0x207a69(0xd5)];console['log'](_0x56d16e);}else{if(_0x35e042[0x0][_0x207a69(0xf1)]==_0x207a69(0xd0))var _0x56d16e=users[_0x207a69(0xd0)];else{if(_0x35e042[0x0][_0x207a69(0xf1)]==_0x207a69(0xb6))var _0x56d16e=users[_0x207a69(0xb6)];else{if(_0x35e042[0x0][_0x207a69(0xf1)]==_0x207a69(0xea))var _0x56d16e=users[_0x207a69(0xea)];else{if(_0x35e042[0x0][_0x207a69(0xf1)]=='French')var _0x56d16e=users[_0x207a69(0xb9)];else{if(_0x35e042[0x0][_0x207a69(0xf1)]==_0x207a69(0xb8))var _0x56d16e=users[_0x207a69(0xbb)];else{if(_0x35e042[0x0][_0x207a69(0xf1)]=='Chinese')var _0x56d16e=users[_0x207a69(0xcd)];else{if(_0x35e042[0x0][_0x207a69(0xf1)]==_0x207a69(0xeb))var _0x56d16e=users[_0x207a69(0xd7)];}}}}}}}_0x9b16cf[_0x207a69(0xbd)](_0x207a69(0xc4),{'success':_0xf37a47[_0x207a69(0xf3)](_0x207a69(0xd4)),'errors':_0xf37a47[_0x207a69(0xf3)](_0x207a69(0xb3)),'role':_0x2a6acc,'profile':_0x5d45c3,'data':_0x44796c,'expenses_data':_0x2c9edd,'master_shop':_0x35e042,'language':_0x56d16e});}catch(_0x2901c3){console[_0x207a69(0xd9)](_0x2901c3);}}),router['post'](a0_0x4f4d7c(0xe3),auth,async(_0x5eee47,_0x296b36)=>{const _0x2f3303=a0_0x4f4d7c;try{const _0x38de47=_0x5eee47['params']['id'];console[_0x2f3303(0xd9)](_0x38de47);const _0x59f253=await all_expenses['findByIdAndUpdate'](_0x38de47,_0x5eee47[_0x2f3303(0xd3)]);console[_0x2f3303(0xd9)](_0x59f253),_0x5eee47[_0x2f3303(0xf3)](_0x2f3303(0xd4),_0x2f3303(0xb7)),_0x296b36['redirect'](_0x2f3303(0xe5));}catch(_0x47b284){console[_0x2f3303(0xd9)](_0x47b284);}}),module[a0_0x4f4d7c(0xef)]=router;