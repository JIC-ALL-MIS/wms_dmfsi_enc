const a0_0x16d2a4=a0_0x296f;(function(_0x1294d5,_0x36b0f0){const _0x1fc708=a0_0x296f,_0x20ecfb=_0x1294d5();while(!![]){try{const _0x14c2b0=-parseInt(_0x1fc708(0xf0))/0x1*(-parseInt(_0x1fc708(0xb4))/0x2)+-parseInt(_0x1fc708(0xbe))/0x3*(-parseInt(_0x1fc708(0xcb))/0x4)+parseInt(_0x1fc708(0xef))/0x5+-parseInt(_0x1fc708(0xdc))/0x6*(-parseInt(_0x1fc708(0xb5))/0x7)+parseInt(_0x1fc708(0xdd))/0x8*(parseInt(_0x1fc708(0xba))/0x9)+-parseInt(_0x1fc708(0xc9))/0xa*(-parseInt(_0x1fc708(0xd4))/0xb)+-parseInt(_0x1fc708(0xf5))/0xc*(parseInt(_0x1fc708(0xe3))/0xd);if(_0x14c2b0===_0x36b0f0)break;else _0x20ecfb['push'](_0x20ecfb['shift']());}catch(_0x280b86){_0x20ecfb['push'](_0x20ecfb['shift']());}}}(a0_0x37d9,0xe97d4));function a0_0x296f(_0x9757b6,_0x288f51){const _0x37d992=a0_0x37d9();return a0_0x296f=function(_0x296fc4,_0xc6382e){_0x296fc4=_0x296fc4-0xb3;let _0x5d8489=_0x37d992[_0x296fc4];return _0x5d8489;},a0_0x296f(_0x9757b6,_0x288f51);}const express=require(a0_0x16d2a4(0xcf)),app=express(),router=express[a0_0x16d2a4(0xb6)](),bcrypt=require(a0_0x16d2a4(0xc0)),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require(a0_0x16d2a4(0xea)),auth=require(a0_0x16d2a4(0xec)),users=require('../public/language/languages.json');router['get'](a0_0x16d2a4(0xcc),auth,async(_0x374087,_0x22197a)=>{const _0x1611fc=a0_0x16d2a4;try{const {username:_0x173bee,email:_0x1d7595,role:_0x51fbcd}=_0x374087[_0x1611fc(0xb7)],_0xacd801=_0x374087[_0x1611fc(0xb7)],_0x458958=await profile[_0x1611fc(0xbf)]({'email':_0xacd801[_0x1611fc(0xe4)]}),_0x9f5e1c=await master_shop[_0x1611fc(0xe2)]();console['log'](_0x1611fc(0xc1),_0x9f5e1c),warehouse_data=await warehouse[_0x1611fc(0xbd)]([{'$match':{'status':_0x1611fc(0xc3)}},{'$group':{'_id':_0x1611fc(0xdf),'name':{'$first':_0x1611fc(0xdf)}}}]);const _0x4a5820=await staff['find']();console[_0x1611fc(0xf4)](_0x4a5820);if(_0x9f5e1c[0x0]['language']==_0x1611fc(0xf1)){var _0x56f61e=users['English'];console[_0x1611fc(0xf4)](_0x56f61e);}else{if(_0x9f5e1c[0x0][_0x1611fc(0xe7)]==_0x1611fc(0xb9))var _0x56f61e=users[_0x1611fc(0xb9)];else{if(_0x9f5e1c[0x0][_0x1611fc(0xe7)]==_0x1611fc(0xd2))var _0x56f61e=users['German'];else{if(_0x9f5e1c[0x0]['language']==_0x1611fc(0xd7))var _0x56f61e=users[_0x1611fc(0xd7)];else{if(_0x9f5e1c[0x0][_0x1611fc(0xe7)]==_0x1611fc(0xe6))var _0x56f61e=users['French'];else{if(_0x9f5e1c[0x0]['language']==_0x1611fc(0xca))var _0x56f61e=users[_0x1611fc(0xda)];else{if(_0x9f5e1c[0x0][_0x1611fc(0xe7)]==_0x1611fc(0xce))var _0x56f61e=users['Chinese'];else{if(_0x9f5e1c[0x0][_0x1611fc(0xe7)]==_0x1611fc(0xdb))var _0x56f61e=users['Arabic'];}}}}}}}let _0x1f33f9=[_0x1611fc(0xe9),'Finished\x20Goods'];_0x22197a['render'](_0x1611fc(0xe0),{'success':_0x374087[_0x1611fc(0xd3)](_0x1611fc(0xd0)),'errors':_0x374087['flash'](_0x1611fc(0xc8)),'role':_0xacd801,'profile':_0x458958,'master_shop':_0x9f5e1c,'user':_0x4a5820,'language':_0x56f61e,'warehouse':warehouse_data,'warehouse_cat':_0x1f33f9});}catch(_0x247608){console[_0x1611fc(0xf4)](_0x247608);}}),router[a0_0x16d2a4(0xb8)](a0_0x16d2a4(0xcc),auth,async(_0x2ff266,_0x1f0ad7)=>{const _0x54b935=a0_0x16d2a4;try{const {name:_0x4abb33,email:_0x5a105b,mobile:_0x46b756,password:_0x54c7e3,status:_0x129a8c,warehouse:_0x2a3671,position:_0x8768e3,warehouse_cat:_0xda55e9}=_0x2ff266[_0x54b935(0xc5)],_0x289031=await bcrypt[_0x54b935(0xd6)](_0x54c7e3,0xa),_0x4eaf51=new staff({'name':_0x4abb33,'email':_0x5a105b,'mobile':_0x46b756,'status':_0x129a8c,'warehouse':_0x2a3671,'position':_0x8768e3,'warehouse_category':_0xda55e9}),_0xda8cf7=await staff[_0x54b935(0xbf)]({'email':_0x5a105b});console[_0x54b935(0xf4)](_0xda8cf7);if(_0xda8cf7)return _0x2ff266[_0x54b935(0xd3)](_0x54b935(0xc8),_0x54b935(0xc2)+_0x5a105b+'\x20is\x20alredy\x20added.\x20please\x20choose\x20another'),_0x1f0ad7['redirect'](_0x54b935(0xde)),![];const _0xb297cd=await _0x4eaf51['save'](),_0x3f65a1=new sing_up({'name':_0x4abb33,'email':_0x5a105b,'password':_0x289031,'role':_0x54b935(0xe0)}),_0x52390c=await _0x3f65a1[_0x54b935(0xd1)](),_0x17bcc9=new profile({'firstname':_0x4abb33,'email':_0x5a105b}),_0x478592=await _0x17bcc9[_0x54b935(0xd1)]();_0x2ff266[_0x54b935(0xd3)](_0x54b935(0xd0),_0x4abb33+'\x20is\x20add\x20successfully'),_0x1f0ad7['redirect'](_0x54b935(0xbb));}catch(_0x5cf9ba){console[_0x54b935(0xf4)](_0x5cf9ba);}}),router[a0_0x16d2a4(0xd5)](a0_0x16d2a4(0xe8),auth,async(_0x2135da,_0x47542a)=>{const _0x36a4b9=a0_0x16d2a4;try{const _0x8445ef=_0x2135da[_0x36a4b9(0xbc)]['id'],_0x3fc04f=await master_shop['find'](),_0x40508e=await staff[_0x36a4b9(0xc6)](_0x8445ef);if(_0x3fc04f[0x0][_0x36a4b9(0xe7)]==_0x36a4b9(0xf1)){var _0x216880=users[_0x36a4b9(0xe5)];console[_0x36a4b9(0xf4)](_0x216880);}else{if(_0x3fc04f[0x0][_0x36a4b9(0xe7)]=='Hindi')var _0x216880=users[_0x36a4b9(0xb9)];else{if(_0x3fc04f[0x0][_0x36a4b9(0xe7)]==_0x36a4b9(0xd2))var _0x216880=users['German'];else{if(_0x3fc04f[0x0]['language']==_0x36a4b9(0xd7))var _0x216880=users[_0x36a4b9(0xd7)];else{if(_0x3fc04f[0x0][_0x36a4b9(0xe7)]==_0x36a4b9(0xe6))var _0x216880=users[_0x36a4b9(0xe6)];else{if(_0x3fc04f[0x0][_0x36a4b9(0xe7)]=='Portuguese\x20(BR)')var _0x216880=users[_0x36a4b9(0xda)];else{if(_0x3fc04f[0x0][_0x36a4b9(0xe7)]==_0x36a4b9(0xce))var _0x216880=users[_0x36a4b9(0xce)];else{if(_0x3fc04f[0x0][_0x36a4b9(0xe7)]==_0x36a4b9(0xdb))var _0x216880=users['Arabic'];}}}}}}}let _0x3bec69=[_0x36a4b9(0xe9),_0x36a4b9(0xe1)];_0x47542a[_0x36a4b9(0xc7)]('staff',{'success':_0x2135da[_0x36a4b9(0xd3)](_0x36a4b9(0xd0)),'errors':_0x2135da['flash'](_0x36a4b9(0xc8)),'master_shop':_0x3fc04f,'user':_0x40508e,'language':_0x216880,'warehouse_cat':_0x3bec69});}catch(_0x2b89a1){console[_0x36a4b9(0xf4)](_0x2b89a1);}}),router[a0_0x16d2a4(0xb8)](a0_0x16d2a4(0xe8),auth,async(_0x4a9ad0,_0x133ea8)=>{const _0xbb4e2=a0_0x16d2a4;try{const _0x5b55d0=_0x4a9ad0['params']['id'],_0x2732da=await staff[_0xbb4e2(0xc6)](_0x5b55d0),{name:_0x47bcbd,email:_0xbb38c7,mobile:_0x182408,password:_0x2eb0a9,status:_0x37284a,warehouse:_0x160ea0,position:_0x2ab38d,warehouse_cat:_0x3f7d4b}=_0x4a9ad0['body'];_0x2732da['name']=_0x47bcbd,_0x2732da[_0xbb4e2(0xe4)]=_0xbb38c7,_0x2732da[_0xbb4e2(0xd8)]=_0x182408,_0x2732da[_0xbb4e2(0xcd)]=_0x2eb0a9,_0x2732da[_0xbb4e2(0xd9)]=_0x37284a,_0x2732da[_0xbb4e2(0xf3)]=_0x160ea0,_0x2732da[_0xbb4e2(0xeb)]=_0x2ab38d,_0x2732da[_0xbb4e2(0xf2)]=_0x3f7d4b;const _0x156ffa=await _0x2732da['save'](),_0x434657=await profile['findOne']({'email':_0xbb38c7});_0x434657[_0xbb4e2(0xee)]=_0x47bcbd,_0x434657[_0xbb4e2(0xe4)]=_0xbb38c7,await _0x434657[_0xbb4e2(0xd1)](),_0x4a9ad0['flash'](_0xbb4e2(0xd0),_0xbb4e2(0xc4)),_0x133ea8[_0xbb4e2(0xed)](_0xbb4e2(0xbb));}catch(_0x2d7e71){console[_0xbb4e2(0xf4)](_0x2d7e71),_0x133ea8[_0xbb4e2(0xd9)](0xc8)['json'](_0x2d7e71);}}),module[a0_0x16d2a4(0xb3)]=router;function a0_0x37d9(){const _0x11cd44=['log','72tzpSzn','exports','258VsKaXS','5833072aldxnv','Router','user','post','Hindi','551673iVMYyI','/staff/view','params','aggregate','1266LPRfMy','findOne','bcryptjs','master','Email\x20','Enabled','staff\x20data\x20update\x20successfully','body','findById','render','errors','154780KwPGjt','Portuguese\x20(BR)','8532XVOwXr','/view','password','Chinese','express','success','save','German','flash','308bNpNrW','get','hash','Spanish','mobile','status','Portuguese','Arabic\x20(ae)','12MwnMsk','168dygzAr','back','$name','staff','Finished\x20Goods','find','11004929zvQEcE','email','English','French','language','/view/:id','Raw\x20Materials','../models/all_models','position','../middleware/auth','redirect','firstname','6711340TEgrLQ','3147hZrtJs','English\x20(US)','warehouse_category','warehouse'];a0_0x37d9=function(){return _0x11cd44;};return a0_0x37d9();}