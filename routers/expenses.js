const a0_0x49ec2a=a0_0x413b;(function(_0x419e93,_0x4c0802){const _0x5d8a68=a0_0x413b,_0x41cc47=_0x419e93();while(!![]){try{const _0x55f81d=parseInt(_0x5d8a68(0xb6))/0x1+parseInt(_0x5d8a68(0xbe))/0x2+parseInt(_0x5d8a68(0xed))/0x3*(-parseInt(_0x5d8a68(0xec))/0x4)+-parseInt(_0x5d8a68(0xd9))/0x5*(parseInt(_0x5d8a68(0xdf))/0x6)+-parseInt(_0x5d8a68(0xe1))/0x7+parseInt(_0x5d8a68(0xef))/0x8+-parseInt(_0x5d8a68(0xd5))/0x9*(parseInt(_0x5d8a68(0xe5))/0xa);if(_0x55f81d===_0x4c0802)break;else _0x41cc47['push'](_0x41cc47['shift']());}catch(_0x5668bc){_0x41cc47['push'](_0x41cc47['shift']());}}}(a0_0x2d4e,0xddec8));function a0_0x2d4e(){const _0x42fa14=['get','add_expenses','log','expenses_type','English\x20(US)','Portuguese','success','Portuguese\x20(BR)','../middleware/auth','Arabic','Router','redirect','master','all','Chinese','updateMany','\x20expenses\x20is\x20add\x20successfully','English','exports','667782BBuShX','flash','map','email','235sENIGL','expenses\x20data\x20update\x20successfully','errors','French','post','countDocuments','101508ZxkCOH','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','4801776vOBoIv','name','findOne','expenses','240JFdfTN','language','params','Arabic\x20(ae)','user','../public/language/languages.json','save','4BugYQF','1755345JHzWNB','/all_expenses/type','13523984NtYrBG','/type','edit_expenses','body','toJSON','Expenses\x20data\x20delete\x20successfully','German','1508494MKGwif','/view/add_expenses','Hindi','find','/type/:id','render','findByIdAndUpdate','Spanish','3113978TPXuSb','express','findById','/type/delete/:id'];a0_0x2d4e=function(){return _0x42fa14;};return a0_0x2d4e();}function a0_0x413b(_0xafe010,_0x3814b5){const _0x2d4e20=a0_0x2d4e();return a0_0x413b=function(_0x413b1a,_0x233d3c){_0x413b1a=_0x413b1a-0xb2;let _0x360ab9=_0x2d4e20[_0x413b1a];return _0x360ab9;},a0_0x413b(_0xafe010,_0x3814b5);}const express=require(a0_0x49ec2a(0xbf)),app=express(),router=express[a0_0x49ec2a(0xcc)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require('../models/all_models'),auth=require(a0_0x49ec2a(0xca)),users=require(a0_0x49ec2a(0xea));router['get'](a0_0x49ec2a(0xf0),auth,async(_0x363b38,_0xe09502)=>{const _0x12139f=a0_0x49ec2a;try{const {username:_0x4f18b0,email:_0x4d728e,role:_0x3d316c}=_0x363b38[_0x12139f(0xe9)],_0x57795b=_0x363b38[_0x12139f(0xe9)],_0x451360=await profile[_0x12139f(0xe3)]({'email':_0x57795b[_0x12139f(0xd8)]}),_0x48986d=await master_shop[_0x12139f(0xb9)]();if(_0x48986d[0x0][_0x12139f(0xe6)]==_0x12139f(0xc6)){var _0x477a20=users[_0x12139f(0xd3)];console[_0x12139f(0xc4)](_0x477a20);}else{if(_0x48986d[0x0][_0x12139f(0xe6)]==_0x12139f(0xb8))var _0x477a20=users[_0x12139f(0xb8)];else{if(_0x48986d[0x0][_0x12139f(0xe6)]=='German')var _0x477a20=users['German'];else{if(_0x48986d[0x0]['language']==_0x12139f(0xbd))var _0x477a20=users[_0x12139f(0xbd)];else{if(_0x48986d[0x0][_0x12139f(0xe6)]=='French')var _0x477a20=users[_0x12139f(0xdc)];else{if(_0x48986d[0x0][_0x12139f(0xe6)]==_0x12139f(0xc9))var _0x477a20=users[_0x12139f(0xc7)];else{if(_0x48986d[0x0][_0x12139f(0xe6)]=='Chinese')var _0x477a20=users[_0x12139f(0xd0)];else{if(_0x48986d[0x0][_0x12139f(0xe6)]==_0x12139f(0xe8))var _0x477a20=users[_0x12139f(0xcb)];}}}}}}}const _0x294281=await expenses_type[_0x12139f(0xb9)]({}),_0x10358d=await Promise[_0x12139f(0xcf)](_0x294281[_0x12139f(0xd7)](async _0x25fdd3=>{const _0x2be381=_0x12139f,_0x28b044=await all_expenses[_0x2be381(0xde)]({'type':_0x25fdd3[_0x2be381(0xe2)]});return{..._0x25fdd3[_0x2be381(0xb3)](),'count':_0x28b044};}));_0xe09502[_0x12139f(0xbb)](_0x12139f(0xc5),{'success':_0x363b38[_0x12139f(0xd6)](_0x12139f(0xc8)),'errors':_0x363b38['flash'](_0x12139f(0xdb)),'role':_0x57795b,'profile':_0x451360,'master_shop':_0x48986d,'language':_0x477a20,'expensesData':_0x10358d});}catch(_0x4a82c9){console['log'](_0x4a82c9);}}),router[a0_0x49ec2a(0xdd)](a0_0x49ec2a(0xf0),auth,async(_0x186003,_0x31d721)=>{const _0x1d1efb=a0_0x49ec2a;try{const {name:_0x5d779c}=_0x186003[_0x1d1efb(0xb2)],_0x18e8d9=new expenses_type({'name':_0x5d779c}),_0x34b585=await expenses_type[_0x1d1efb(0xe3)]({'name':_0x5d779c});if(_0x34b585)_0x186003['flash'](_0x1d1efb(0xdb),_0x5d779c+_0x1d1efb(0xe0));else{_0x186003[_0x1d1efb(0xd6)](_0x1d1efb(0xc8),_0x5d779c+_0x1d1efb(0xd2));const _0x57897c=await _0x18e8d9[_0x1d1efb(0xeb)]();}_0x31d721[_0x1d1efb(0xcd)](_0x1d1efb(0xee));}catch(_0x5a2b2b){console[_0x1d1efb(0xc4)](_0x5a2b2b);}}),router[a0_0x49ec2a(0xdd)](a0_0x49ec2a(0xba),auth,async(_0xbde732,_0x4def0c)=>{const _0x34312=a0_0x49ec2a;try{const _0x2b7d7b=_0xbde732[_0x34312(0xe7)]['id'],_0x5261a0=await expenses_type[_0x34312(0xc0)](_0x2b7d7b),_0x276b35=await expenses_type[_0x34312(0xbc)](_0x2b7d7b,_0xbde732[_0x34312(0xb2)]),_0x15ac39=await all_expenses[_0x34312(0xd1)]({'type':_0x5261a0[_0x34312(0xe2)]},{'$set':{'type':_0xbde732['body']['name']}});_0xbde732['flash']('success',_0x34312(0xda)),_0x4def0c[_0x34312(0xcd)](_0x34312(0xee));}catch(_0x3f1bba){console[_0x34312(0xc4)](_0x3f1bba);}}),router[a0_0x49ec2a(0xc2)](a0_0x49ec2a(0xc1),auth,async(_0x20c571,_0x48f2ef)=>{const _0x48626a=a0_0x49ec2a;try{const _0x3477f0=_0x20c571[_0x48626a(0xe7)]['id'],_0x4846f6=await expenses_type['findByIdAndDelete'](_0x3477f0);_0x20c571[_0x48626a(0xd6)](_0x48626a(0xc8),_0x48626a(0xb4)),_0x48f2ef[_0x48626a(0xcd)](_0x48626a(0xee));}catch(_0x365477){console[_0x48626a(0xc4)](_0x365477);}}),router[a0_0x49ec2a(0xc2)]('/view',auth,async(_0x4dab8e,_0x319123)=>{const _0x36fd4e=a0_0x49ec2a;try{const {username:_0x43ae7f,email:_0x4874b6,role:_0x1b8b1c}=_0x4dab8e[_0x36fd4e(0xe9)],_0x4df492=_0x4dab8e[_0x36fd4e(0xe9)],_0x25394d=await profile['findOne']({'email':_0x4df492[_0x36fd4e(0xd8)]}),_0x522751=await master_shop['find']();console[_0x36fd4e(0xc4)](_0x36fd4e(0xce),_0x522751);const _0x4c571f=await expenses_type['find']({}),_0x4e15be=await all_expenses[_0x36fd4e(0xb9)]({});console[_0x36fd4e(0xc4)](_0x4e15be);if(_0x522751[0x0][_0x36fd4e(0xe6)]==_0x36fd4e(0xc6)){var _0x25cdfe=users['English'];console[_0x36fd4e(0xc4)](_0x25cdfe);}else{if(_0x522751[0x0]['language']==_0x36fd4e(0xb8))var _0x25cdfe=users[_0x36fd4e(0xb8)];else{if(_0x522751[0x0]['language']=='German')var _0x25cdfe=users[_0x36fd4e(0xb5)];else{if(_0x522751[0x0][_0x36fd4e(0xe6)]==_0x36fd4e(0xbd))var _0x25cdfe=users['Spanish'];else{if(_0x522751[0x0][_0x36fd4e(0xe6)]=='French')var _0x25cdfe=users['French'];else{if(_0x522751[0x0][_0x36fd4e(0xe6)]=='Portuguese\x20(BR)')var _0x25cdfe=users['Portuguese'];else{if(_0x522751[0x0][_0x36fd4e(0xe6)]=='Chinese')var _0x25cdfe=users['Chinese'];else{if(_0x522751[0x0][_0x36fd4e(0xe6)]==_0x36fd4e(0xe8))var _0x25cdfe=users[_0x36fd4e(0xcb)];}}}}}}}_0x319123[_0x36fd4e(0xbb)](_0x36fd4e(0xe4),{'success':_0x4dab8e[_0x36fd4e(0xd6)](_0x36fd4e(0xc8)),'errors':_0x4dab8e[_0x36fd4e(0xd6)](_0x36fd4e(0xdb)),'role':_0x4df492,'profile':_0x25394d,'data':_0x4c571f,'expenses_data':_0x4e15be,'master_shop':_0x522751,'language':_0x25cdfe});}catch(_0x244e8e){console[_0x36fd4e(0xc4)](_0x244e8e);}}),router[a0_0x49ec2a(0xc2)]('/view/add_expenses',auth,async(_0x32fb17,_0x1c59f3)=>{const _0x3b2487=a0_0x49ec2a;try{const {username:_0x2bb2f0,email:_0x40e72d,role:_0x3df8aa}=_0x32fb17[_0x3b2487(0xe9)],_0x5a233a=_0x32fb17[_0x3b2487(0xe9)],_0x573fba=await profile[_0x3b2487(0xe3)]({'email':_0x5a233a[_0x3b2487(0xd8)]}),_0x10d883=await master_shop[_0x3b2487(0xb9)]();console[_0x3b2487(0xc4)](_0x3b2487(0xce),_0x10d883);const _0x53cb41=await expenses_type[_0x3b2487(0xb9)]({});if(_0x10d883[0x0]['language']==_0x3b2487(0xc6)){var _0xec592f=users[_0x3b2487(0xd3)];console['log'](_0xec592f);}else{if(_0x10d883[0x0][_0x3b2487(0xe6)]==_0x3b2487(0xb8))var _0xec592f=users[_0x3b2487(0xb8)];else{if(_0x10d883[0x0][_0x3b2487(0xe6)]=='German')var _0xec592f=users[_0x3b2487(0xb5)];else{if(_0x10d883[0x0][_0x3b2487(0xe6)]==_0x3b2487(0xbd))var _0xec592f=users[_0x3b2487(0xbd)];else{if(_0x10d883[0x0]['language']=='French')var _0xec592f=users[_0x3b2487(0xdc)];else{if(_0x10d883[0x0][_0x3b2487(0xe6)]==_0x3b2487(0xc9))var _0xec592f=users['Portuguese'];else{if(_0x10d883[0x0][_0x3b2487(0xe6)]=='Chinese')var _0xec592f=users[_0x3b2487(0xd0)];else{if(_0x10d883[0x0][_0x3b2487(0xe6)]==_0x3b2487(0xe8))var _0xec592f=users[_0x3b2487(0xcb)];}}}}}}}_0x1c59f3[_0x3b2487(0xbb)](_0x3b2487(0xc3),{'success':_0x32fb17[_0x3b2487(0xd6)](_0x3b2487(0xc8)),'errors':_0x32fb17[_0x3b2487(0xd6)](_0x3b2487(0xdb)),'role':_0x5a233a,'profile':_0x573fba,'data':_0x53cb41,'master_shop':_0x10d883,'language':_0xec592f});}catch(_0x170db6){console['log'](_0x170db6);}}),router['post'](a0_0x49ec2a(0xb7),auth,async(_0x4086c8,_0x571229)=>{const _0x2e3c03=a0_0x49ec2a;try{const {type:_0x561a7c,date:_0x19fece,amount:_0x396c9a,note:_0x15c8e5}=_0x4086c8[_0x2e3c03(0xb2)],_0x7711f6=new all_expenses({'type':_0x561a7c,'date':_0x19fece,'amount':_0x396c9a,'note':_0x15c8e5}),_0x1c9402=await _0x7711f6[_0x2e3c03(0xeb)]();_0x571229['redirect']('/all_expenses/view');}catch(_0x1acfb9){console[_0x2e3c03(0xc4)](_0x1acfb9);}}),router[a0_0x49ec2a(0xc2)]('/view/:id',auth,async(_0x5adc1b,_0x187443)=>{const _0x36f867=a0_0x49ec2a;try{const {username:_0x2e0da2,email:_0x4b2139,role:_0x14f577}=_0x5adc1b[_0x36f867(0xe9)],_0x5d288c=_0x5adc1b['user'],_0x357dd0=await profile[_0x36f867(0xe3)]({'email':_0x5d288c[_0x36f867(0xd8)]}),_0x5900be=await master_shop[_0x36f867(0xb9)]();console[_0x36f867(0xc4)]('master',_0x5900be);const _0x384077=await expenses_type[_0x36f867(0xb9)]({});console[_0x36f867(0xc4)](_0x384077);const _0x3e32c0=await all_expenses[_0x36f867(0xc0)](_0x5adc1b[_0x36f867(0xe7)]['id']);console['log'](_0x3e32c0);if(_0x5900be[0x0][_0x36f867(0xe6)]==_0x36f867(0xc6)){var _0x1d0114=users['English'];console['log'](_0x1d0114);}else{if(_0x5900be[0x0]['language']==_0x36f867(0xb8))var _0x1d0114=users[_0x36f867(0xb8)];else{if(_0x5900be[0x0][_0x36f867(0xe6)]==_0x36f867(0xb5))var _0x1d0114=users['German'];else{if(_0x5900be[0x0][_0x36f867(0xe6)]==_0x36f867(0xbd))var _0x1d0114=users[_0x36f867(0xbd)];else{if(_0x5900be[0x0]['language']==_0x36f867(0xdc))var _0x1d0114=users[_0x36f867(0xdc)];else{if(_0x5900be[0x0][_0x36f867(0xe6)]=='Portuguese\x20(BR)')var _0x1d0114=users[_0x36f867(0xc7)];else{if(_0x5900be[0x0][_0x36f867(0xe6)]==_0x36f867(0xd0))var _0x1d0114=users[_0x36f867(0xd0)];else{if(_0x5900be[0x0][_0x36f867(0xe6)]==_0x36f867(0xe8))var _0x1d0114=users['Arabic'];}}}}}}}_0x187443[_0x36f867(0xbb)](_0x36f867(0xf1),{'success':_0x5adc1b['flash'](_0x36f867(0xc8)),'errors':_0x5adc1b[_0x36f867(0xd6)]('errors'),'role':_0x5d288c,'profile':_0x357dd0,'data':_0x384077,'expenses_data':_0x3e32c0,'master_shop':_0x5900be,'language':_0x1d0114});}catch(_0x5da970){console[_0x36f867(0xc4)](_0x5da970);}}),router[a0_0x49ec2a(0xdd)]('/view/:id',auth,async(_0x396285,_0x15f760)=>{const _0x55a76a=a0_0x49ec2a;try{const _0x38b766=_0x396285['params']['id'];console[_0x55a76a(0xc4)](_0x38b766);const _0x42ebc0=await all_expenses['findByIdAndUpdate'](_0x38b766,_0x396285[_0x55a76a(0xb2)]);console[_0x55a76a(0xc4)](_0x42ebc0),_0x396285['flash'](_0x55a76a(0xc8),_0x55a76a(0xda)),_0x15f760[_0x55a76a(0xcd)]('/all_expenses/view');}catch(_0x55a7f9){console['log'](_0x55a7f9);}}),module[a0_0x49ec2a(0xd4)]=router;