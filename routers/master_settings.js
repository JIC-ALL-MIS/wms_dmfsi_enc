const a0_0x188253=a0_0x52af;(function(_0x18780b,_0x423afa){const _0x4908fb=a0_0x52af,_0x52ba76=_0x18780b();while(!![]){try{const _0x1c13b9=-parseInt(_0x4908fb(0x146))/0x1*(-parseInt(_0x4908fb(0x12d))/0x2)+parseInt(_0x4908fb(0x11c))/0x3+parseInt(_0x4908fb(0x149))/0x4+parseInt(_0x4908fb(0x119))/0x5+parseInt(_0x4908fb(0x124))/0x6*(parseInt(_0x4908fb(0x143))/0x7)+parseInt(_0x4908fb(0x134))/0x8*(parseInt(_0x4908fb(0x129))/0x9)+-parseInt(_0x4908fb(0x110))/0xa;if(_0x1c13b9===_0x423afa)break;else _0x52ba76['push'](_0x52ba76['shift']());}catch(_0x213165){_0x52ba76['push'](_0x52ba76['shift']());}}}(a0_0x4fde,0xa5539));function a0_0x52af(_0x17da22,_0x34550c){const _0x4fde69=a0_0x4fde();return a0_0x52af=function(_0x52af87,_0x3ad49a){_0x52af87=_0x52af87-0x103;let _0x4ce504=_0x4fde69[_0x52af87];return _0x4ce504;},a0_0x52af(_0x17da22,_0x34550c);}function a0_0x4fde(){const _0x45704f=['exports','master_settings','2303067kgWeYh','success','/view/supervisors','Arabic\x20(ae)','2nd\x20master_shop_data','FGSnumber','RMSName','en-US','196590rBTLUE','supervisor_settings','../public/language/languages.json','English\x20(US)','timezone','108JioQHX','RMSEmail','Portuguese\x20(BR)','save','37322KyrSfc','FGSEmail','render','port','master_shop_data','get','findOne','540008QKAGzi','/view/email/edit_settings','log','Portuguese','diskStorage','redirect','user','French','English','shop\x20setting\x20edit\x20successfully','errors','master\x20settings\x20email_data','currency','site_title','host','21SMKNCN','body','multer','26nekvIY','FGSName','/master_shop/view','3889784kalJTj','find','currency_placement','image','Router','German','Chinese','Hindi','toLocaleString','file','timezones-list','post','email','/view/edit_settings','./public/upload','Arabic','params','/view/email','29071840XZJMJi','../middleware/auth','express','hidden','Spanish','/master_shop/view/supervisors','flash','master','language','2253665YgpgMm'];a0_0x4fde=function(){return _0x45704f;};return a0_0x4fde();}const express=require(a0_0x188253(0x112)),app=express(),router=express[a0_0x188253(0x14d)](),multer=require(a0_0x188253(0x145)),{profile,master_shop,email_settings,supervisor_settings}=require('../models/all_models'),auth=require(a0_0x188253(0x111));var timezones=require(a0_0x188253(0x108));const users=require(a0_0x188253(0x126)),storage=multer[a0_0x188253(0x138)]({'destination':(_0x4dc666,_0xaf5181,_0x30ab81)=>{const _0x54b657=a0_0x188253;_0x30ab81(null,_0x54b657(0x10c));},'filename':(_0x2dbff7,_0x51d3d5,_0x18aa0c)=>{_0x18aa0c(null,Date['now']()+_0x51d3d5['originalname']);}}),upload=multer({'storage':storage});router[a0_0x188253(0x132)]('/view',auth,async(_0x55c970,_0x2e20b0)=>{const _0xfe5706=a0_0x188253;try{const {username:_0x2636f5,email:_0x5d1ba9,role:_0xcc110f}=_0x55c970[_0xfe5706(0x13a)],_0x1535aa=_0x55c970[_0xfe5706(0x13a)],_0x4741c4=await profile[_0xfe5706(0x133)]({'email':_0x1535aa[_0xfe5706(0x10a)]}),_0x271551=await master_shop['find']();console[_0xfe5706(0x136)](_0xfe5706(0x117),_0x271551);const _0x70a12f=new Date()[_0xfe5706(0x106)]('en-US',{'timeZone':_0x271551[0x0][_0xfe5706(0x128)]});console[_0xfe5706(0x136)](_0xfe5706(0x128),_0x70a12f);if(_0x271551[0x0][_0xfe5706(0x118)]=='English\x20(US)'){var _0x5c94bb=users[_0xfe5706(0x13c)];console[_0xfe5706(0x136)](_0x5c94bb);}else{if(_0x271551[0x0]['language']==_0xfe5706(0x105))var _0x5c94bb=users[_0xfe5706(0x105)];else{if(_0x271551[0x0][_0xfe5706(0x118)]=='German')var _0x5c94bb=users['German'];else{if(_0x271551[0x0][_0xfe5706(0x118)]==_0xfe5706(0x114))var _0x5c94bb=users[_0xfe5706(0x114)];else{if(_0x271551[0x0][_0xfe5706(0x118)]==_0xfe5706(0x13b))var _0x5c94bb=users[_0xfe5706(0x13b)];else{if(_0x271551[0x0][_0xfe5706(0x118)]==_0xfe5706(0x12b))var _0x5c94bb=users[_0xfe5706(0x137)];else{if(_0x271551[0x0][_0xfe5706(0x118)]==_0xfe5706(0x104))var _0x5c94bb=users[_0xfe5706(0x104)];else{if(_0x271551[0x0][_0xfe5706(0x118)]=='Arabic\x20(ae)')var _0x5c94bb=users[_0xfe5706(0x10d)];}}}}}}}_0x2e20b0[_0xfe5706(0x12f)](_0xfe5706(0x11b),{'success':_0x55c970[_0xfe5706(0x116)](_0xfe5706(0x11d)),'errors':_0x55c970[_0xfe5706(0x116)](_0xfe5706(0x13e)),'role':_0x1535aa,'profile':_0x4741c4,'master_shop':_0x271551,'timezones':timezones,'language':_0x5c94bb});}catch(_0x1643af){console[_0xfe5706(0x136)](_0x1643af);}}),router[a0_0x188253(0x132)]('/:id',auth,async(_0x5f0286,_0x414be3)=>{const _0xd62d7e=a0_0x188253;try{console[_0xd62d7e(0x136)](_0xd62d7e(0x118)),console[_0xd62d7e(0x136)](_0x5f0286[_0xd62d7e(0x10e)]['id']);const _0x3d7e6e=await master_shop[_0xd62d7e(0x133)]();_0x3d7e6e[_0xd62d7e(0x118)]=_0x5f0286['params']['id'],await _0x3d7e6e[_0xd62d7e(0x12c)](),console[_0xd62d7e(0x136)](_0xd62d7e(0x117),_0x3d7e6e);}catch(_0x498de9){console[_0xd62d7e(0x136)](_0x498de9);}}),router[a0_0x188253(0x109)](a0_0x188253(0x10b),auth,upload['single'](a0_0x188253(0x14c)),async(_0x24ec67,_0xebc0da)=>{const _0x4ba0bc=a0_0x188253;try{const {site_title:_0xcd9066,currency:_0x2d0b5e,currency_placement:_0x5686bb,timezone:_0x17aec8}=_0x24ec67[_0x4ba0bc(0x144)];if(_0x24ec67[_0x4ba0bc(0x144)][_0x4ba0bc(0x113)]==0x0){const _0x3bd0a1=await master_shop[_0x4ba0bc(0x133)]();console[_0x4ba0bc(0x136)](_0x4ba0bc(0x131),_0x3bd0a1);if(_0x3bd0a1==''){const _0x1563a4=new master_shop({'site_title':_0xcd9066,'image':image,'currency':_0x2d0b5e,'currency_placement':_0x5686bb,'timezone':_0x17aec8}),_0x1ac64f=await _0x1563a4[_0x4ba0bc(0x12c)]();}else _0x3bd0a1['site_title']=_0xcd9066,_0x3bd0a1['currency']=_0x2d0b5e,_0x3bd0a1[_0x4ba0bc(0x14b)]=_0x5686bb,_0x3bd0a1[_0x4ba0bc(0x128)]=_0x17aec8,await _0x3bd0a1['save']();}else{const _0x4b34b4=_0x24ec67[_0x4ba0bc(0x107)]['filename'],_0x168db5=await master_shop['findOne']();console[_0x4ba0bc(0x136)](_0x4ba0bc(0x120),_0x168db5);if(_0x168db5==null){console[_0x4ba0bc(0x136)]('1',_0xcd9066);const _0x203838=new master_shop({'site_title':_0xcd9066,'image':_0x4b34b4,'currency':_0x2d0b5e,'currency_placement':_0x5686bb,'timezone':_0x17aec8}),_0x1e2b6b=await _0x203838['save']();}else console[_0x4ba0bc(0x136)]('2',_0xcd9066),_0x168db5[_0x4ba0bc(0x141)]=_0xcd9066,_0x168db5[_0x4ba0bc(0x14c)]=_0x4b34b4,_0x168db5[_0x4ba0bc(0x140)]=_0x2d0b5e,_0x168db5[_0x4ba0bc(0x14b)]=_0x5686bb,_0x168db5[_0x4ba0bc(0x128)]=_0x17aec8,await _0x168db5[_0x4ba0bc(0x12c)]();}_0x24ec67['flash']('success',_0x4ba0bc(0x13d)),_0xebc0da[_0x4ba0bc(0x139)](_0x4ba0bc(0x148));}catch(_0x31f9fe){console['log'](_0x31f9fe);}}),router[a0_0x188253(0x132)](a0_0x188253(0x10f),auth,async(_0x2e9b9b,_0x50e82b)=>{const _0xc48860=a0_0x188253;try{const {username:_0xde0d6a,email:_0x55a3d7,role:_0x3bcfac}=_0x2e9b9b['user'],_0x370afe=_0x2e9b9b[_0xc48860(0x13a)],_0x2685a1=await profile[_0xc48860(0x133)]({'email':_0x370afe[_0xc48860(0x10a)]}),_0x124d8a=await master_shop[_0xc48860(0x14a)]();console[_0xc48860(0x136)]('master',_0x124d8a);const _0x238378=await email_settings['findOne']();console[_0xc48860(0x136)](_0xc48860(0x13f),_0x238378);if(_0x124d8a[0x0][_0xc48860(0x118)]==_0xc48860(0x127)){var _0x5aa386=users[_0xc48860(0x13c)];console[_0xc48860(0x136)](_0x5aa386);}else{if(_0x124d8a[0x0][_0xc48860(0x118)]==_0xc48860(0x105))var _0x5aa386=users[_0xc48860(0x105)];else{if(_0x124d8a[0x0][_0xc48860(0x118)]==_0xc48860(0x103))var _0x5aa386=users[_0xc48860(0x103)];else{if(_0x124d8a[0x0][_0xc48860(0x118)]==_0xc48860(0x114))var _0x5aa386=users[_0xc48860(0x114)];else{if(_0x124d8a[0x0][_0xc48860(0x118)]=='French')var _0x5aa386=users[_0xc48860(0x13b)];else{if(_0x124d8a[0x0][_0xc48860(0x118)]==_0xc48860(0x12b))var _0x5aa386=users[_0xc48860(0x137)];else{if(_0x124d8a[0x0][_0xc48860(0x118)]=='Chinese')var _0x5aa386=users['Chinese'];else{if(_0x124d8a[0x0][_0xc48860(0x118)]==_0xc48860(0x11f))var _0x5aa386=users[_0xc48860(0x10d)];}}}}}}}_0x50e82b[_0xc48860(0x12f)]('email_settings',{'success':_0x2e9b9b[_0xc48860(0x116)](_0xc48860(0x11d)),'errors':_0x2e9b9b[_0xc48860(0x116)](_0xc48860(0x13e)),'role':_0x370afe,'profile':_0x2685a1,'master_shop':_0x124d8a,'email':_0x238378,'language':_0x5aa386});}catch(_0x51e1d2){console[_0xc48860(0x136)](_0x51e1d2);}}),router[a0_0x188253(0x109)](a0_0x188253(0x135),auth,async(_0x2ebe80,_0x5d9915)=>{const _0x56691b=a0_0x188253;try{const {host:_0x292dca,port:_0x14d8ff,email:_0x87b2d1,password:_0x5b40c1}=_0x2ebe80[_0x56691b(0x144)],_0x8227c8=await email_settings[_0x56691b(0x133)]();if(_0x8227c8==null){const _0x2327bb=new email_settings({'host':_0x292dca,'port':_0x14d8ff,'email':_0x87b2d1,'password':_0x5b40c1});await _0x2327bb[_0x56691b(0x12c)]();}else _0x8227c8[_0x56691b(0x142)]=_0x292dca,_0x8227c8[_0x56691b(0x130)]=_0x14d8ff,_0x8227c8[_0x56691b(0x10a)]=_0x87b2d1,_0x8227c8['password']=_0x5b40c1,await _0x8227c8[_0x56691b(0x12c)]();_0x2ebe80[_0x56691b(0x116)](_0x56691b(0x11d),_0x56691b(0x13d)),_0x5d9915[_0x56691b(0x139)]('/master_shop/view/email');}catch(_0x4b312e){console[_0x56691b(0x136)](_0x4b312e);}}),router[a0_0x188253(0x132)](a0_0x188253(0x11e),auth,async(_0xe3c457,_0x1e5961)=>{const _0x1d2907=a0_0x188253;try{const {username:_0x3e5cd2,email:_0x59f498,role:_0x12fbeb}=_0xe3c457[_0x1d2907(0x13a)],_0x593372=_0xe3c457[_0x1d2907(0x13a)],_0x5cebc9=await supervisor_settings[_0x1d2907(0x14a)](),_0x33daeb=await profile[_0x1d2907(0x133)]({'email':_0x593372['email']}),_0x1b8126=await master_shop['find'](),_0x48453b=new Date()[_0x1d2907(0x106)](_0x1d2907(0x123),{'timeZone':_0x1b8126[0x0][_0x1d2907(0x128)]});if(_0x1b8126[0x0][_0x1d2907(0x118)]==_0x1d2907(0x127)){var _0x362c4d=users[_0x1d2907(0x13c)];console['log'](_0x362c4d);}else{if(_0x1b8126[0x0][_0x1d2907(0x118)]==_0x1d2907(0x105))var _0x362c4d=users[_0x1d2907(0x105)];else{if(_0x1b8126[0x0][_0x1d2907(0x118)]==_0x1d2907(0x103))var _0x362c4d=users[_0x1d2907(0x103)];else{if(_0x1b8126[0x0][_0x1d2907(0x118)]==_0x1d2907(0x114))var _0x362c4d=users[_0x1d2907(0x114)];else{if(_0x1b8126[0x0][_0x1d2907(0x118)]==_0x1d2907(0x13b))var _0x362c4d=users[_0x1d2907(0x13b)];else{if(_0x1b8126[0x0]['language']=='Portuguese\x20(BR)')var _0x362c4d=users[_0x1d2907(0x137)];else{if(_0x1b8126[0x0][_0x1d2907(0x118)]==_0x1d2907(0x104))var _0x362c4d=users[_0x1d2907(0x104)];else{if(_0x1b8126[0x0][_0x1d2907(0x118)]==_0x1d2907(0x11f))var _0x362c4d=users[_0x1d2907(0x10d)];}}}}}}}_0x1e5961[_0x1d2907(0x12f)](_0x1d2907(0x125),{'success':_0xe3c457[_0x1d2907(0x116)](_0x1d2907(0x11d)),'errors':_0xe3c457[_0x1d2907(0x116)](_0x1d2907(0x13e)),'role':_0x593372,'profile':_0x33daeb,'master_shop':_0x1b8126,'supervisor_data':_0x5cebc9[0x0],'timezones':timezones,'language':_0x362c4d});}catch(_0x2ad8de){console[_0x1d2907(0x136)](_0x2ad8de);}}),router['post'](a0_0x188253(0x11e),auth,async(_0x47fe1b,_0x2c1d60)=>{const _0x29dd73=a0_0x188253;try{const {rm_name:_0x5ca7fe,fg_name:_0x23e65f,rm_email:_0x596415,fg_email:_0x1a54a,rm_mobilenum:_0x3b6309,fg_number:_0x3b72e7}=_0x47fe1b['body'],_0x4658f5=await supervisor_settings[_0x29dd73(0x133)]();if(_0x4658f5==null){const _0x2cc9b7=new supervisor_settings({'RMSName':_0x5ca7fe,'RMSEmail':_0x596415,'RMSnumber':_0x3b6309,'FGSName':_0x23e65f,'FGSEmail':_0x1a54a,'FGSnumber':_0x3b72e7});await _0x2cc9b7['save']();}else _0x4658f5[_0x29dd73(0x122)]=_0x5ca7fe,_0x4658f5[_0x29dd73(0x12a)]=_0x596415,_0x4658f5['RMSnumber']=_0x3b6309,_0x4658f5[_0x29dd73(0x147)]=_0x23e65f,_0x4658f5[_0x29dd73(0x12e)]=_0x1a54a,_0x4658f5[_0x29dd73(0x121)]=_0x3b72e7,await _0x4658f5['save']();_0x47fe1b[_0x29dd73(0x116)]('success','shop\x20setting\x20edit\x20successfully'),_0x2c1d60['redirect'](_0x29dd73(0x115));}catch(_0x2f5655){console[_0x29dd73(0x136)](_0x2f5655);}}),module[a0_0x188253(0x11a)]=router;