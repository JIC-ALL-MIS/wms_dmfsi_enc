const a0_0x5ae367=a0_0x60fe;(function(_0x34b400,_0x10664d){const _0x1d3335=a0_0x60fe,_0x9460ee=_0x34b400();while(!![]){try{const _0x149ae2=-parseInt(_0x1d3335(0x14b))/0x1*(-parseInt(_0x1d3335(0x16c))/0x2)+-parseInt(_0x1d3335(0x15e))/0x3*(-parseInt(_0x1d3335(0x159))/0x4)+-parseInt(_0x1d3335(0x165))/0x5*(-parseInt(_0x1d3335(0x14a))/0x6)+parseInt(_0x1d3335(0x14f))/0x7+parseInt(_0x1d3335(0x15c))/0x8+parseInt(_0x1d3335(0x148))/0x9+-parseInt(_0x1d3335(0x146))/0xa;if(_0x149ae2===_0x10664d)break;else _0x9460ee['push'](_0x9460ee['shift']());}catch(_0xaf3058){_0x9460ee['push'](_0x9460ee['shift']());}}}(a0_0x1561,0x65910));const express=require(a0_0x5ae367(0x13c)),app=express(),router=express[a0_0x5ae367(0x155)](),multer=require('multer'),{profile,master_shop,email_settings,supervisor_settings}=require(a0_0x5ae367(0x166)),auth=require(a0_0x5ae367(0x13a));var timezones=require(a0_0x5ae367(0x16e));function a0_0x60fe(_0x35dd3a,_0x36189a){const _0x156186=a0_0x1561();return a0_0x60fe=function(_0x60fe6b,_0x187206){_0x60fe6b=_0x60fe6b-0x128;let _0x29b451=_0x156186[_0x60fe6b];return _0x29b451;},a0_0x60fe(_0x35dd3a,_0x36189a);}function a0_0x1561(){const _0x48da1a=['redirect','Portuguese','master_settings','save','/view/edit_settings','Portuguese\x20(BR)','language','../middleware/auth','currency','express','email_settings','get','/master_shop/view/supervisors','success','RMSnumber','hidden','body','Chinese','FGSName','30007180YQWhLH','originalname','7353675xqyWSl','host','457350kOzjPZ','1371VMZrpW','/view/supervisors','params','FGSnumber','2751203NPvbjC','email','English','currency_placement','/view','German','Router','image','errors','single','260tcOjDu','RMSName','master\x20settings\x20email_data','4716512atmTEH','supervisor_settings','29379PwwLhL','find','Hindi','findOne','post','render','exports','35QmJwKg','../models/all_models','master','./public/upload','2nd\x20master_shop_data','password','timezone','652EhEZBE','shop\x20setting\x20edit\x20successfully','timezones-list','toLocaleString','port','site_title','French','../public/language/languages.json','RMSEmail','English\x20(US)','user','Spanish','en-US','Arabic','log','flash','Arabic\x20(ae)','/view/email'];a0_0x1561=function(){return _0x48da1a;};return a0_0x1561();}const users=require(a0_0x5ae367(0x128)),storage=multer['diskStorage']({'destination':(_0x270b05,_0x10c3f9,_0xd580ee)=>{const _0x3f7c2c=a0_0x5ae367;_0xd580ee(null,_0x3f7c2c(0x168));},'filename':(_0x52f863,_0x242a46,_0x3c33b3)=>{const _0x5646c5=a0_0x5ae367;_0x3c33b3(null,Date['now']()+_0x242a46[_0x5646c5(0x147)]);}}),upload=multer({'storage':storage});router[a0_0x5ae367(0x13e)](a0_0x5ae367(0x153),auth,async(_0x2be5bc,_0x407699)=>{const _0x37eb11=a0_0x5ae367;try{const {username:_0x1002e4,email:_0x54a5da,role:_0x186c72}=_0x2be5bc[_0x37eb11(0x12b)],_0x402d15=_0x2be5bc[_0x37eb11(0x12b)],_0x3a515a=await profile[_0x37eb11(0x161)]({'email':_0x402d15[_0x37eb11(0x150)]}),_0x290525=await master_shop[_0x37eb11(0x15f)]();console[_0x37eb11(0x12f)](_0x37eb11(0x167),_0x290525);const _0x4fe595=new Date()[_0x37eb11(0x16f)](_0x37eb11(0x12d),{'timeZone':_0x290525[0x0][_0x37eb11(0x16b)]});console['log'](_0x37eb11(0x16b),_0x4fe595);if(_0x290525[0x0][_0x37eb11(0x139)]=='English\x20(US)'){var _0x30c2e5=users[_0x37eb11(0x151)];console[_0x37eb11(0x12f)](_0x30c2e5);}else{if(_0x290525[0x0][_0x37eb11(0x139)]==_0x37eb11(0x160))var _0x30c2e5=users[_0x37eb11(0x160)];else{if(_0x290525[0x0][_0x37eb11(0x139)]==_0x37eb11(0x154))var _0x30c2e5=users[_0x37eb11(0x154)];else{if(_0x290525[0x0][_0x37eb11(0x139)]=='Spanish')var _0x30c2e5=users['Spanish'];else{if(_0x290525[0x0][_0x37eb11(0x139)]=='French')var _0x30c2e5=users[_0x37eb11(0x172)];else{if(_0x290525[0x0][_0x37eb11(0x139)]=='Portuguese\x20(BR)')var _0x30c2e5=users[_0x37eb11(0x134)];else{if(_0x290525[0x0][_0x37eb11(0x139)]==_0x37eb11(0x144))var _0x30c2e5=users['Chinese'];else{if(_0x290525[0x0][_0x37eb11(0x139)]==_0x37eb11(0x131))var _0x30c2e5=users[_0x37eb11(0x12e)];}}}}}}}_0x407699['render'](_0x37eb11(0x135),{'success':_0x2be5bc[_0x37eb11(0x130)](_0x37eb11(0x140)),'errors':_0x2be5bc[_0x37eb11(0x130)](_0x37eb11(0x157)),'role':_0x402d15,'profile':_0x3a515a,'master_shop':_0x290525,'timezones':timezones,'language':_0x30c2e5});}catch(_0x4161e1){console[_0x37eb11(0x12f)](_0x4161e1);}}),router[a0_0x5ae367(0x13e)]('/:id',auth,async(_0x505299,_0x3e3f3b)=>{const _0x320bcd=a0_0x5ae367;try{console[_0x320bcd(0x12f)](_0x320bcd(0x139)),console[_0x320bcd(0x12f)](_0x505299[_0x320bcd(0x14d)]['id']);const _0x105428=await master_shop['findOne']();_0x105428[_0x320bcd(0x139)]=_0x505299[_0x320bcd(0x14d)]['id'],await _0x105428[_0x320bcd(0x136)](),console[_0x320bcd(0x12f)](_0x320bcd(0x167),_0x105428);}catch(_0x20301){console[_0x320bcd(0x12f)](_0x20301);}}),router[a0_0x5ae367(0x162)](a0_0x5ae367(0x137),auth,upload[a0_0x5ae367(0x158)](a0_0x5ae367(0x156)),async(_0x14239a,_0x2ce8e4)=>{const _0x47a65c=a0_0x5ae367;try{const {site_title:_0x29c8da,currency:_0x1839f1,currency_placement:_0x24898d,timezone:_0x3c0c55}=_0x14239a[_0x47a65c(0x143)];if(_0x14239a[_0x47a65c(0x143)][_0x47a65c(0x142)]==0x0){const _0x58c808=await master_shop[_0x47a65c(0x161)]();console[_0x47a65c(0x12f)]('master_shop_data',_0x58c808);if(_0x58c808==''){const _0x12f275=new master_shop({'site_title':_0x29c8da,'image':image,'currency':_0x1839f1,'currency_placement':_0x24898d,'timezone':_0x3c0c55}),_0x22ca14=await _0x12f275[_0x47a65c(0x136)]();}else _0x58c808[_0x47a65c(0x171)]=_0x29c8da,_0x58c808[_0x47a65c(0x13b)]=_0x1839f1,_0x58c808[_0x47a65c(0x152)]=_0x24898d,_0x58c808[_0x47a65c(0x16b)]=_0x3c0c55,await _0x58c808[_0x47a65c(0x136)]();}else{const _0x3c74e0=_0x14239a['file']['filename'],_0x52f1aa=await master_shop[_0x47a65c(0x161)]();console[_0x47a65c(0x12f)](_0x47a65c(0x169),_0x52f1aa);if(_0x52f1aa==null){console['log']('1',_0x29c8da);const _0x18c631=new master_shop({'site_title':_0x29c8da,'image':_0x3c74e0,'currency':_0x1839f1,'currency_placement':_0x24898d,'timezone':_0x3c0c55}),_0x4c585d=await _0x18c631[_0x47a65c(0x136)]();}else console['log']('2',_0x29c8da),_0x52f1aa[_0x47a65c(0x171)]=_0x29c8da,_0x52f1aa[_0x47a65c(0x156)]=_0x3c74e0,_0x52f1aa['currency']=_0x1839f1,_0x52f1aa[_0x47a65c(0x152)]=_0x24898d,_0x52f1aa[_0x47a65c(0x16b)]=_0x3c0c55,await _0x52f1aa[_0x47a65c(0x136)]();}_0x14239a[_0x47a65c(0x130)](_0x47a65c(0x140),_0x47a65c(0x16d)),_0x2ce8e4[_0x47a65c(0x133)]('/master_shop/view');}catch(_0x27ae76){console[_0x47a65c(0x12f)](_0x27ae76);}}),router[a0_0x5ae367(0x13e)](a0_0x5ae367(0x132),auth,async(_0x282ffc,_0x42421b)=>{const _0x5a8eea=a0_0x5ae367;try{const {username:_0x45da81,email:_0x27299d,role:_0xc93ac5}=_0x282ffc[_0x5a8eea(0x12b)],_0x5095e1=_0x282ffc['user'],_0x3a1372=await profile['findOne']({'email':_0x5095e1[_0x5a8eea(0x150)]}),_0x226019=await master_shop['find']();console[_0x5a8eea(0x12f)](_0x5a8eea(0x167),_0x226019);const _0x374c44=await email_settings[_0x5a8eea(0x161)]();console[_0x5a8eea(0x12f)](_0x5a8eea(0x15b),_0x374c44);if(_0x226019[0x0][_0x5a8eea(0x139)]==_0x5a8eea(0x12a)){var _0x972578=users[_0x5a8eea(0x151)];console['log'](_0x972578);}else{if(_0x226019[0x0][_0x5a8eea(0x139)]==_0x5a8eea(0x160))var _0x972578=users['Hindi'];else{if(_0x226019[0x0]['language']==_0x5a8eea(0x154))var _0x972578=users['German'];else{if(_0x226019[0x0][_0x5a8eea(0x139)]=='Spanish')var _0x972578=users['Spanish'];else{if(_0x226019[0x0][_0x5a8eea(0x139)]==_0x5a8eea(0x172))var _0x972578=users['French'];else{if(_0x226019[0x0][_0x5a8eea(0x139)]==_0x5a8eea(0x138))var _0x972578=users[_0x5a8eea(0x134)];else{if(_0x226019[0x0][_0x5a8eea(0x139)]==_0x5a8eea(0x144))var _0x972578=users['Chinese'];else{if(_0x226019[0x0][_0x5a8eea(0x139)]=='Arabic\x20(ae)')var _0x972578=users[_0x5a8eea(0x12e)];}}}}}}}_0x42421b[_0x5a8eea(0x163)](_0x5a8eea(0x13d),{'success':_0x282ffc[_0x5a8eea(0x130)](_0x5a8eea(0x140)),'errors':_0x282ffc[_0x5a8eea(0x130)](_0x5a8eea(0x157)),'role':_0x5095e1,'profile':_0x3a1372,'master_shop':_0x226019,'email':_0x374c44,'language':_0x972578});}catch(_0x2e2d13){console[_0x5a8eea(0x12f)](_0x2e2d13);}}),router[a0_0x5ae367(0x162)]('/view/email/edit_settings',auth,async(_0x59204f,_0x37ae52)=>{const _0xe11c37=a0_0x5ae367;try{const {host:_0xeadcbf,port:_0x176a3c,email:_0x3ea409,password:_0x5c8ada}=_0x59204f['body'],_0x3882ba=await email_settings['findOne']();if(_0x3882ba==null){const _0x44a9ab=new email_settings({'host':_0xeadcbf,'port':_0x176a3c,'email':_0x3ea409,'password':_0x5c8ada});await _0x44a9ab[_0xe11c37(0x136)]();}else _0x3882ba[_0xe11c37(0x149)]=_0xeadcbf,_0x3882ba[_0xe11c37(0x170)]=_0x176a3c,_0x3882ba[_0xe11c37(0x150)]=_0x3ea409,_0x3882ba[_0xe11c37(0x16a)]=_0x5c8ada,await _0x3882ba[_0xe11c37(0x136)]();_0x59204f['flash']('success',_0xe11c37(0x16d)),_0x37ae52[_0xe11c37(0x133)]('/master_shop/view/email');}catch(_0x2e6fef){console[_0xe11c37(0x12f)](_0x2e6fef);}}),router['get'](a0_0x5ae367(0x14c),auth,async(_0x3415a2,_0x4d88b5)=>{const _0x28fd25=a0_0x5ae367;try{const {username:_0x353632,email:_0x60a38c,role:_0x201efa}=_0x3415a2[_0x28fd25(0x12b)],_0x5e6bcd=_0x3415a2[_0x28fd25(0x12b)],_0x328033=await supervisor_settings['find'](),_0x4617b6=await profile[_0x28fd25(0x161)]({'email':_0x5e6bcd[_0x28fd25(0x150)]}),_0x1cc8eb=await master_shop[_0x28fd25(0x15f)](),_0xe75e66=new Date()['toLocaleString']('en-US',{'timeZone':_0x1cc8eb[0x0]['timezone']});if(_0x1cc8eb[0x0][_0x28fd25(0x139)]==_0x28fd25(0x12a)){var _0x11b8d0=users[_0x28fd25(0x151)];console[_0x28fd25(0x12f)](_0x11b8d0);}else{if(_0x1cc8eb[0x0]['language']=='Hindi')var _0x11b8d0=users[_0x28fd25(0x160)];else{if(_0x1cc8eb[0x0]['language']==_0x28fd25(0x154))var _0x11b8d0=users[_0x28fd25(0x154)];else{if(_0x1cc8eb[0x0][_0x28fd25(0x139)]==_0x28fd25(0x12c))var _0x11b8d0=users['Spanish'];else{if(_0x1cc8eb[0x0][_0x28fd25(0x139)]==_0x28fd25(0x172))var _0x11b8d0=users['French'];else{if(_0x1cc8eb[0x0][_0x28fd25(0x139)]=='Portuguese\x20(BR)')var _0x11b8d0=users['Portuguese'];else{if(_0x1cc8eb[0x0][_0x28fd25(0x139)]==_0x28fd25(0x144))var _0x11b8d0=users[_0x28fd25(0x144)];else{if(_0x1cc8eb[0x0]['language']==_0x28fd25(0x131))var _0x11b8d0=users[_0x28fd25(0x12e)];}}}}}}}_0x4d88b5[_0x28fd25(0x163)](_0x28fd25(0x15d),{'success':_0x3415a2[_0x28fd25(0x130)](_0x28fd25(0x140)),'errors':_0x3415a2[_0x28fd25(0x130)](_0x28fd25(0x157)),'role':_0x5e6bcd,'profile':_0x4617b6,'master_shop':_0x1cc8eb,'supervisor_data':_0x328033[0x0],'timezones':timezones,'language':_0x11b8d0});}catch(_0x228b85){console[_0x28fd25(0x12f)](_0x228b85);}}),router['post'](a0_0x5ae367(0x14c),auth,async(_0x159d5e,_0x49695a)=>{const _0xb41831=a0_0x5ae367;try{const {rm_name:_0x29ff80,fg_name:_0x2fac70,rm_email:_0x3cd08f,fg_email:_0x44647a,rm_mobilenum:_0x5cb7d2,fg_number:_0x3f58a1}=_0x159d5e[_0xb41831(0x143)],_0xc14d65=await supervisor_settings[_0xb41831(0x161)]();if(_0xc14d65==null){const _0x190511=new supervisor_settings({'RMSName':_0x29ff80,'RMSEmail':_0x3cd08f,'RMSnumber':_0x5cb7d2,'FGSName':_0x2fac70,'FGSEmail':_0x44647a,'FGSnumber':_0x3f58a1});await _0x190511['save']();}else _0xc14d65[_0xb41831(0x15a)]=_0x29ff80,_0xc14d65[_0xb41831(0x129)]=_0x3cd08f,_0xc14d65[_0xb41831(0x141)]=_0x5cb7d2,_0xc14d65[_0xb41831(0x145)]=_0x2fac70,_0xc14d65['FGSEmail']=_0x44647a,_0xc14d65[_0xb41831(0x14e)]=_0x3f58a1,await _0xc14d65[_0xb41831(0x136)]();_0x159d5e[_0xb41831(0x130)](_0xb41831(0x140),_0xb41831(0x16d)),_0x49695a['redirect'](_0xb41831(0x13f));}catch(_0x31c995){console[_0xb41831(0x12f)](_0x31c995);}}),module[a0_0x5ae367(0x164)]=router;