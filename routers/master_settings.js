function a0_0x2c51(){const _0x1986c1=['user','timezone','log','2061zjQnTA','English','./public/upload','Arabic\x20(ae)','8896Danueh','/view','single','master_settings','Chinese','/view/supervisors','save','RMSnumber','errors','Portuguese','currency','master','en-US','language','filename','172238inAvXd','RMSEmail','timezones-list','post','/master_shop/view','German','params','2nd\x20master_shop_data','RMSName','../middleware/auth','6009kiSxpW','/view/edit_settings','/:id','308FOcEur','host','Spanish','4yjFUnU','5620BLOMqK','flash','body','express','toLocaleString','English\x20(US)','currency_placement','image','6RiSogb','/master_shop/view/email','password','email_settings','167186ORAfCI','2177707bbKINS','/view/email/edit_settings','hidden','email','find','../models/all_models','/view/email','FGSName','master\x20settings\x20email_data','FGSEmail','exports','get','Portuguese\x20(BR)','supervisor_settings','24DtUPLT','site_title','originalname','shop\x20setting\x20edit\x20successfully','Hindi','port','Router','master_shop_data','success','Arabic','redirect','findOne','French','render','1595225fOhSjH'];a0_0x2c51=function(){return _0x1986c1;};return a0_0x2c51();}function a0_0x5012(_0x38ea89,_0x580aa2){const _0x2c517b=a0_0x2c51();return a0_0x5012=function(_0x50128c,_0x2b6145){_0x50128c=_0x50128c-0x179;let _0x3b1912=_0x2c517b[_0x50128c];return _0x3b1912;},a0_0x5012(_0x38ea89,_0x580aa2);}const a0_0xa9f842=a0_0x5012;(function(_0x5173f8,_0x333d07){const _0x2baa94=a0_0x5012,_0x289746=_0x5173f8();while(!![]){try{const _0x51afb3=-parseInt(_0x2baa94(0x19b))/0x1*(-parseInt(_0x2baa94(0x1a8))/0x2)+parseInt(_0x2baa94(0x195))/0x3*(parseInt(_0x2baa94(0x198))/0x4)+parseInt(_0x2baa94(0x1c5))/0x5*(-parseInt(_0x2baa94(0x1a4))/0x6)+parseInt(_0x2baa94(0x1a9))/0x7+parseInt(_0x2baa94(0x17c))/0x8*(-parseInt(_0x2baa94(0x1c9))/0x9)+-parseInt(_0x2baa94(0x19c))/0xa+-parseInt(_0x2baa94(0x18b))/0xb*(parseInt(_0x2baa94(0x1b7))/0xc);if(_0x51afb3===_0x333d07)break;else _0x289746['push'](_0x289746['shift']());}catch(_0x130bb1){_0x289746['push'](_0x289746['shift']());}}}(a0_0x2c51,0x2f655));const express=require(a0_0xa9f842(0x19f)),app=express(),router=express[a0_0xa9f842(0x1bd)](),multer=require('multer'),{profile,master_shop,email_settings,supervisor_settings}=require(a0_0xa9f842(0x1ae)),auth=require(a0_0xa9f842(0x194));var timezones=require(a0_0xa9f842(0x18d));const users=require('../public/language/languages.json'),storage=multer['diskStorage']({'destination':(_0x51a475,_0xe403ac,_0x461f6f)=>{const _0x3b1efd=a0_0xa9f842;_0x461f6f(null,_0x3b1efd(0x17a));},'filename':(_0x59bac1,_0x33bdab,_0x23692b)=>{const _0x5096b0=a0_0xa9f842;_0x23692b(null,Date['now']()+_0x33bdab[_0x5096b0(0x1b9)]);}}),upload=multer({'storage':storage});router[a0_0xa9f842(0x1b4)](a0_0xa9f842(0x17d),auth,async(_0x3749e3,_0x3ab29f)=>{const _0x5e1ffc=a0_0xa9f842;try{const {username:_0x30ddcd,email:_0x4d14e8,role:_0x4ab6de}=_0x3749e3[_0x5e1ffc(0x1c6)],_0xa6ccb9=_0x3749e3[_0x5e1ffc(0x1c6)],_0x372bf6=await profile['findOne']({'email':_0xa6ccb9[_0x5e1ffc(0x1ac)]}),_0xf306e1=await master_shop[_0x5e1ffc(0x1ad)]();console['log'](_0x5e1ffc(0x187),_0xf306e1);const _0x150524=new Date()[_0x5e1ffc(0x1a0)](_0x5e1ffc(0x188),{'timeZone':_0xf306e1[0x0][_0x5e1ffc(0x1c7)]});console[_0x5e1ffc(0x1c8)](_0x5e1ffc(0x1c7),_0x150524);if(_0xf306e1[0x0][_0x5e1ffc(0x189)]==_0x5e1ffc(0x1a1)){var _0x1bf4d7=users[_0x5e1ffc(0x179)];console['log'](_0x1bf4d7);}else{if(_0xf306e1[0x0][_0x5e1ffc(0x189)]==_0x5e1ffc(0x1bb))var _0x1bf4d7=users[_0x5e1ffc(0x1bb)];else{if(_0xf306e1[0x0]['language']==_0x5e1ffc(0x190))var _0x1bf4d7=users[_0x5e1ffc(0x190)];else{if(_0xf306e1[0x0][_0x5e1ffc(0x189)]==_0x5e1ffc(0x19a))var _0x1bf4d7=users['Spanish'];else{if(_0xf306e1[0x0]['language']=='French')var _0x1bf4d7=users[_0x5e1ffc(0x1c3)];else{if(_0xf306e1[0x0][_0x5e1ffc(0x189)]=='Portuguese\x20(BR)')var _0x1bf4d7=users[_0x5e1ffc(0x185)];else{if(_0xf306e1[0x0][_0x5e1ffc(0x189)]==_0x5e1ffc(0x180))var _0x1bf4d7=users['Chinese'];else{if(_0xf306e1[0x0][_0x5e1ffc(0x189)]==_0x5e1ffc(0x17b))var _0x1bf4d7=users[_0x5e1ffc(0x1c0)];}}}}}}}_0x3ab29f[_0x5e1ffc(0x1c4)](_0x5e1ffc(0x17f),{'success':_0x3749e3[_0x5e1ffc(0x19d)](_0x5e1ffc(0x1bf)),'errors':_0x3749e3['flash']('errors'),'role':_0xa6ccb9,'profile':_0x372bf6,'master_shop':_0xf306e1,'timezones':timezones,'language':_0x1bf4d7});}catch(_0x5ec1d9){console[_0x5e1ffc(0x1c8)](_0x5ec1d9);}}),router[a0_0xa9f842(0x1b4)](a0_0xa9f842(0x197),auth,async(_0x526784,_0x358838)=>{const _0x269978=a0_0xa9f842;try{console[_0x269978(0x1c8)](_0x269978(0x189)),console[_0x269978(0x1c8)](_0x526784[_0x269978(0x191)]['id']);const _0x58beb4=await master_shop[_0x269978(0x1c2)]();_0x58beb4[_0x269978(0x189)]=_0x526784[_0x269978(0x191)]['id'],await _0x58beb4[_0x269978(0x182)](),console[_0x269978(0x1c8)](_0x269978(0x187),_0x58beb4);}catch(_0x248503){console[_0x269978(0x1c8)](_0x248503);}}),router[a0_0xa9f842(0x18e)](a0_0xa9f842(0x196),auth,upload[a0_0xa9f842(0x17e)](a0_0xa9f842(0x1a3)),async(_0x26da73,_0x5533d4)=>{const _0x50dd3f=a0_0xa9f842;try{const {site_title:_0x5028dd,currency:_0x5ebebc,currency_placement:_0x4b6807,timezone:_0x4cafdc}=_0x26da73[_0x50dd3f(0x19e)];if(_0x26da73[_0x50dd3f(0x19e)][_0x50dd3f(0x1ab)]==0x0){const _0x3df42c=await master_shop[_0x50dd3f(0x1c2)]();console[_0x50dd3f(0x1c8)](_0x50dd3f(0x1be),_0x3df42c);if(_0x3df42c==''){const _0x24e400=new master_shop({'site_title':_0x5028dd,'image':image,'currency':_0x5ebebc,'currency_placement':_0x4b6807,'timezone':_0x4cafdc}),_0xcdb057=await _0x24e400[_0x50dd3f(0x182)]();}else _0x3df42c[_0x50dd3f(0x1b8)]=_0x5028dd,_0x3df42c[_0x50dd3f(0x186)]=_0x5ebebc,_0x3df42c[_0x50dd3f(0x1a2)]=_0x4b6807,_0x3df42c[_0x50dd3f(0x1c7)]=_0x4cafdc,await _0x3df42c['save']();}else{const _0x17e4fb=_0x26da73['file'][_0x50dd3f(0x18a)],_0x451253=await master_shop[_0x50dd3f(0x1c2)]();console['log'](_0x50dd3f(0x192),_0x451253);if(_0x451253==null){console['log']('1',_0x5028dd);const _0x2d627b=new master_shop({'site_title':_0x5028dd,'image':_0x17e4fb,'currency':_0x5ebebc,'currency_placement':_0x4b6807,'timezone':_0x4cafdc}),_0x2816f6=await _0x2d627b[_0x50dd3f(0x182)]();}else console[_0x50dd3f(0x1c8)]('2',_0x5028dd),_0x451253[_0x50dd3f(0x1b8)]=_0x5028dd,_0x451253['image']=_0x17e4fb,_0x451253[_0x50dd3f(0x186)]=_0x5ebebc,_0x451253[_0x50dd3f(0x1a2)]=_0x4b6807,_0x451253[_0x50dd3f(0x1c7)]=_0x4cafdc,await _0x451253['save']();}_0x26da73[_0x50dd3f(0x19d)](_0x50dd3f(0x1bf),_0x50dd3f(0x1ba)),_0x5533d4[_0x50dd3f(0x1c1)](_0x50dd3f(0x18f));}catch(_0x2e7313){console['log'](_0x2e7313);}}),router['get'](a0_0xa9f842(0x1af),auth,async(_0x434130,_0x1144e8)=>{const _0x5a46fc=a0_0xa9f842;try{const {username:_0x4ad23d,email:_0x553e3e,role:_0x3c122f}=_0x434130[_0x5a46fc(0x1c6)],_0x329664=_0x434130[_0x5a46fc(0x1c6)],_0xca3378=await profile[_0x5a46fc(0x1c2)]({'email':_0x329664[_0x5a46fc(0x1ac)]}),_0x360c39=await master_shop[_0x5a46fc(0x1ad)]();console[_0x5a46fc(0x1c8)](_0x5a46fc(0x187),_0x360c39);const _0x37b662=await email_settings[_0x5a46fc(0x1c2)]();console[_0x5a46fc(0x1c8)](_0x5a46fc(0x1b1),_0x37b662);if(_0x360c39[0x0][_0x5a46fc(0x189)]==_0x5a46fc(0x1a1)){var _0x4df514=users[_0x5a46fc(0x179)];console['log'](_0x4df514);}else{if(_0x360c39[0x0][_0x5a46fc(0x189)]==_0x5a46fc(0x1bb))var _0x4df514=users['Hindi'];else{if(_0x360c39[0x0][_0x5a46fc(0x189)]==_0x5a46fc(0x190))var _0x4df514=users[_0x5a46fc(0x190)];else{if(_0x360c39[0x0][_0x5a46fc(0x189)]==_0x5a46fc(0x19a))var _0x4df514=users[_0x5a46fc(0x19a)];else{if(_0x360c39[0x0][_0x5a46fc(0x189)]==_0x5a46fc(0x1c3))var _0x4df514=users['French'];else{if(_0x360c39[0x0][_0x5a46fc(0x189)]==_0x5a46fc(0x1b5))var _0x4df514=users[_0x5a46fc(0x185)];else{if(_0x360c39[0x0][_0x5a46fc(0x189)]==_0x5a46fc(0x180))var _0x4df514=users['Chinese'];else{if(_0x360c39[0x0][_0x5a46fc(0x189)]=='Arabic\x20(ae)')var _0x4df514=users['Arabic'];}}}}}}}_0x1144e8[_0x5a46fc(0x1c4)](_0x5a46fc(0x1a7),{'success':_0x434130[_0x5a46fc(0x19d)]('success'),'errors':_0x434130[_0x5a46fc(0x19d)]('errors'),'role':_0x329664,'profile':_0xca3378,'master_shop':_0x360c39,'email':_0x37b662,'language':_0x4df514});}catch(_0x1aa3a2){console[_0x5a46fc(0x1c8)](_0x1aa3a2);}}),router[a0_0xa9f842(0x18e)](a0_0xa9f842(0x1aa),auth,async(_0x4d9f36,_0x39f7f6)=>{const _0x5e30aa=a0_0xa9f842;try{const {host:_0x5f5945,port:_0x21fd94,email:_0x5471cb,password:_0x31188e}=_0x4d9f36[_0x5e30aa(0x19e)],_0x40febe=await email_settings[_0x5e30aa(0x1c2)]();if(_0x40febe==null){const _0x5cdb8d=new email_settings({'host':_0x5f5945,'port':_0x21fd94,'email':_0x5471cb,'password':_0x31188e});await _0x5cdb8d['save']();}else _0x40febe[_0x5e30aa(0x199)]=_0x5f5945,_0x40febe[_0x5e30aa(0x1bc)]=_0x21fd94,_0x40febe[_0x5e30aa(0x1ac)]=_0x5471cb,_0x40febe[_0x5e30aa(0x1a6)]=_0x31188e,await _0x40febe[_0x5e30aa(0x182)]();_0x4d9f36['flash'](_0x5e30aa(0x1bf),_0x5e30aa(0x1ba)),_0x39f7f6[_0x5e30aa(0x1c1)](_0x5e30aa(0x1a5));}catch(_0xf25e93){console[_0x5e30aa(0x1c8)](_0xf25e93);}}),router[a0_0xa9f842(0x1b4)]('/view/supervisors',auth,async(_0x543468,_0x198fc5)=>{const _0x3b43a9=a0_0xa9f842;try{const {username:_0x2af9bd,email:_0x7d5b3a,role:_0x25a74e}=_0x543468[_0x3b43a9(0x1c6)],_0x4049c0=_0x543468[_0x3b43a9(0x1c6)],_0x2f83de=await supervisor_settings[_0x3b43a9(0x1ad)](),_0x51b05d=await profile[_0x3b43a9(0x1c2)]({'email':_0x4049c0['email']}),_0x2963c3=await master_shop[_0x3b43a9(0x1ad)](),_0x5589de=new Date()[_0x3b43a9(0x1a0)]('en-US',{'timeZone':_0x2963c3[0x0][_0x3b43a9(0x1c7)]});if(_0x2963c3[0x0][_0x3b43a9(0x189)]=='English\x20(US)'){var _0x22f374=users[_0x3b43a9(0x179)];console['log'](_0x22f374);}else{if(_0x2963c3[0x0][_0x3b43a9(0x189)]=='Hindi')var _0x22f374=users['Hindi'];else{if(_0x2963c3[0x0][_0x3b43a9(0x189)]==_0x3b43a9(0x190))var _0x22f374=users[_0x3b43a9(0x190)];else{if(_0x2963c3[0x0][_0x3b43a9(0x189)]==_0x3b43a9(0x19a))var _0x22f374=users[_0x3b43a9(0x19a)];else{if(_0x2963c3[0x0][_0x3b43a9(0x189)]==_0x3b43a9(0x1c3))var _0x22f374=users[_0x3b43a9(0x1c3)];else{if(_0x2963c3[0x0][_0x3b43a9(0x189)]==_0x3b43a9(0x1b5))var _0x22f374=users[_0x3b43a9(0x185)];else{if(_0x2963c3[0x0]['language']=='Chinese')var _0x22f374=users[_0x3b43a9(0x180)];else{if(_0x2963c3[0x0][_0x3b43a9(0x189)]==_0x3b43a9(0x17b))var _0x22f374=users['Arabic'];}}}}}}}_0x198fc5[_0x3b43a9(0x1c4)](_0x3b43a9(0x1b6),{'success':_0x543468[_0x3b43a9(0x19d)](_0x3b43a9(0x1bf)),'errors':_0x543468[_0x3b43a9(0x19d)](_0x3b43a9(0x184)),'role':_0x4049c0,'profile':_0x51b05d,'master_shop':_0x2963c3,'supervisor_data':_0x2f83de[0x0],'timezones':timezones,'language':_0x22f374});}catch(_0x215885){console['log'](_0x215885);}}),router[a0_0xa9f842(0x18e)](a0_0xa9f842(0x181),auth,async(_0x7dfff4,_0x399a6c)=>{const _0x5eaa5b=a0_0xa9f842;try{const {rm_name:_0x5f4848,fg_name:_0x233f26,rm_email:_0x17c304,fg_email:_0x323292,rm_mobilenum:_0xbdf82d,fg_number:_0x58e728}=_0x7dfff4['body'],_0xeba5b8=await supervisor_settings['findOne']();if(_0xeba5b8==null){const _0x33e9a1=new supervisor_settings({'RMSName':_0x5f4848,'RMSEmail':_0x17c304,'RMSnumber':_0xbdf82d,'FGSName':_0x233f26,'FGSEmail':_0x323292,'FGSnumber':_0x58e728});await _0x33e9a1[_0x5eaa5b(0x182)]();}else _0xeba5b8[_0x5eaa5b(0x193)]=_0x5f4848,_0xeba5b8[_0x5eaa5b(0x18c)]=_0x17c304,_0xeba5b8[_0x5eaa5b(0x183)]=_0xbdf82d,_0xeba5b8[_0x5eaa5b(0x1b0)]=_0x233f26,_0xeba5b8[_0x5eaa5b(0x1b2)]=_0x323292,_0xeba5b8['FGSnumber']=_0x58e728,await _0xeba5b8[_0x5eaa5b(0x182)]();_0x7dfff4[_0x5eaa5b(0x19d)](_0x5eaa5b(0x1bf),_0x5eaa5b(0x1ba)),_0x399a6c[_0x5eaa5b(0x1c1)]('/master_shop/view/supervisors');}catch(_0x295557){console['log'](_0x295557);}}),module[a0_0xa9f842(0x1b3)]=router;