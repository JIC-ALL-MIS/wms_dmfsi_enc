const a0_0x49d1f5=a0_0x1927;function a0_0x1927(_0x387569,_0x13f0d5){const _0x4f6545=a0_0x4f65();return a0_0x1927=function(_0x192767,_0xb89ca6){_0x192767=_0x192767-0xa5;let _0x5ef047=_0x4f6545[_0x192767];return _0x5ef047;},a0_0x1927(_0x387569,_0x13f0d5);}(function(_0x4385be,_0x7d3a20){const _0x3f386f=a0_0x1927,_0x3e6b7c=_0x4385be();while(!![]){try{const _0x315abf=-parseInt(_0x3f386f(0xd7))/0x1+-parseInt(_0x3f386f(0xd2))/0x2*(parseInt(_0x3f386f(0xe2))/0x3)+-parseInt(_0x3f386f(0xd5))/0x4*(-parseInt(_0x3f386f(0xab))/0x5)+-parseInt(_0x3f386f(0xce))/0x6*(-parseInt(_0x3f386f(0xe3))/0x7)+parseInt(_0x3f386f(0xc0))/0x8*(-parseInt(_0x3f386f(0xbb))/0x9)+-parseInt(_0x3f386f(0xbf))/0xa*(parseInt(_0x3f386f(0xd4))/0xb)+parseInt(_0x3f386f(0xe4))/0xc;if(_0x315abf===_0x7d3a20)break;else _0x3e6b7c['push'](_0x3e6b7c['shift']());}catch(_0x367440){_0x3e6b7c['push'](_0x3e6b7c['shift']());}}}(a0_0x4f65,0xb95a4));const express=require(a0_0x49d1f5(0xb8)),app=express(),router=express[a0_0x49d1f5(0xe8)](),multer=require(a0_0x49d1f5(0xf1)),{profile,master_shop,email_settings,supervisor_settings}=require(a0_0x49d1f5(0xc2)),auth=require(a0_0x49d1f5(0xa7));var timezones=require(a0_0x49d1f5(0xe9));const users=require(a0_0x49d1f5(0xb1)),storage=multer[a0_0x49d1f5(0xc4)]({'destination':(_0x2ab9d8,_0x51db43,_0x1f9a16)=>{const _0x588d3f=a0_0x49d1f5;_0x1f9a16(null,_0x588d3f(0xb0));},'filename':(_0x4f111c,_0x10c032,_0x1bed1d)=>{const _0x5757f0=a0_0x49d1f5;_0x1bed1d(null,Date[_0x5757f0(0xe6)]()+_0x10c032['originalname']);}}),upload=multer({'storage':storage});router[a0_0x49d1f5(0xe5)](a0_0x49d1f5(0xb4),auth,async(_0xf7cb7c,_0x1fcf21)=>{const _0x25eb3c=a0_0x49d1f5;try{const {username:_0x2dcf35,email:_0x3dfccf,role:_0x5d3ba7}=_0xf7cb7c[_0x25eb3c(0xa9)],_0x3a47c2=_0xf7cb7c[_0x25eb3c(0xa9)],_0x468c6e=await profile[_0x25eb3c(0xf0)]({'email':_0x3a47c2[_0x25eb3c(0xe0)]}),_0x1123ce=await master_shop['find']();console[_0x25eb3c(0xea)]('master',_0x1123ce);const _0x1e4b75=new Date()[_0x25eb3c(0xee)](_0x25eb3c(0xd8),{'timeZone':_0x1123ce[0x0][_0x25eb3c(0xda)]});console[_0x25eb3c(0xea)](_0x25eb3c(0xda),_0x1e4b75);if(_0x1123ce[0x0][_0x25eb3c(0xa6)]==_0x25eb3c(0xeb)){var _0x2644f5=users[_0x25eb3c(0xa8)];console[_0x25eb3c(0xea)](_0x2644f5);}else{if(_0x1123ce[0x0][_0x25eb3c(0xa6)]==_0x25eb3c(0xc9))var _0x2644f5=users[_0x25eb3c(0xc9)];else{if(_0x1123ce[0x0][_0x25eb3c(0xa6)]==_0x25eb3c(0xde))var _0x2644f5=users[_0x25eb3c(0xde)];else{if(_0x1123ce[0x0][_0x25eb3c(0xa6)]=='Spanish')var _0x2644f5=users[_0x25eb3c(0xc8)];else{if(_0x1123ce[0x0][_0x25eb3c(0xa6)]=='French')var _0x2644f5=users[_0x25eb3c(0xc7)];else{if(_0x1123ce[0x0]['language']==_0x25eb3c(0xb2))var _0x2644f5=users['Portuguese'];else{if(_0x1123ce[0x0][_0x25eb3c(0xa6)]==_0x25eb3c(0xc6))var _0x2644f5=users[_0x25eb3c(0xc6)];else{if(_0x1123ce[0x0]['language']==_0x25eb3c(0xc3))var _0x2644f5=users[_0x25eb3c(0xef)];}}}}}}}_0x1fcf21['render'](_0x25eb3c(0xbe),{'success':_0xf7cb7c[_0x25eb3c(0xae)](_0x25eb3c(0xb6)),'errors':_0xf7cb7c[_0x25eb3c(0xae)](_0x25eb3c(0xdf)),'role':_0x3a47c2,'profile':_0x468c6e,'master_shop':_0x1123ce,'timezones':timezones,'language':_0x2644f5});}catch(_0x2bec29){console[_0x25eb3c(0xea)](_0x2bec29);}}),router['get'](a0_0x49d1f5(0xb7),auth,async(_0x5b7d54,_0x29004e)=>{const _0x30d98b=a0_0x49d1f5;try{console['log'](_0x30d98b(0xa6)),console[_0x30d98b(0xea)](_0x5b7d54[_0x30d98b(0xd0)]['id']);const _0x5b6755=await master_shop['findOne']();_0x5b6755[_0x30d98b(0xa6)]=_0x5b7d54[_0x30d98b(0xd0)]['id'],await _0x5b6755[_0x30d98b(0xcb)](),console['log'](_0x30d98b(0xa5),_0x5b6755);}catch(_0x17244f){console[_0x30d98b(0xea)](_0x17244f);}}),router['post']('/view/edit_settings',auth,upload['single'](a0_0x49d1f5(0xbd)),async(_0x2d101a,_0x45041d)=>{const _0x2b33bb=a0_0x49d1f5;try{const {site_title:_0x55b90b,currency:_0x339a6e,currency_placement:_0x11d7a0,timezone:_0x46d531}=_0x2d101a[_0x2b33bb(0xd9)];if(_0x2d101a[_0x2b33bb(0xd9)]['hidden']==0x0){const _0xe940f6=await master_shop['findOne']();console[_0x2b33bb(0xea)](_0x2b33bb(0xcd),_0xe940f6);if(_0xe940f6==''){const _0x4577ee=new master_shop({'site_title':_0x55b90b,'image':image,'currency':_0x339a6e,'currency_placement':_0x11d7a0,'timezone':_0x46d531}),_0xd1d8e6=await _0x4577ee[_0x2b33bb(0xcb)]();}else _0xe940f6['site_title']=_0x55b90b,_0xe940f6[_0x2b33bb(0xad)]=_0x339a6e,_0xe940f6[_0x2b33bb(0xd6)]=_0x11d7a0,_0xe940f6[_0x2b33bb(0xda)]=_0x46d531,await _0xe940f6[_0x2b33bb(0xcb)]();}else{const _0x647036=_0x2d101a[_0x2b33bb(0xaf)][_0x2b33bb(0xca)],_0x53dc28=await master_shop[_0x2b33bb(0xf0)]();console[_0x2b33bb(0xea)](_0x2b33bb(0xdb),_0x53dc28);if(_0x53dc28==null){console[_0x2b33bb(0xea)]('1',_0x55b90b);const _0x2851ac=new master_shop({'site_title':_0x55b90b,'image':_0x647036,'currency':_0x339a6e,'currency_placement':_0x11d7a0,'timezone':_0x46d531}),_0x58b7cd=await _0x2851ac[_0x2b33bb(0xcb)]();}else console[_0x2b33bb(0xea)]('2',_0x55b90b),_0x53dc28[_0x2b33bb(0xe7)]=_0x55b90b,_0x53dc28['image']=_0x647036,_0x53dc28[_0x2b33bb(0xad)]=_0x339a6e,_0x53dc28[_0x2b33bb(0xd6)]=_0x11d7a0,_0x53dc28['timezone']=_0x46d531,await _0x53dc28['save']();}_0x2d101a[_0x2b33bb(0xae)]('success',_0x2b33bb(0xdc)),_0x45041d[_0x2b33bb(0xbc)]('/master_shop/view');}catch(_0x136a8d){console[_0x2b33bb(0xea)](_0x136a8d);}}),router['get']('/view/email',auth,async(_0xfde5b0,_0x2a0ca7)=>{const _0x4ffde7=a0_0x49d1f5;try{const {username:_0x123224,email:_0x54bed5,role:_0x5e9201}=_0xfde5b0[_0x4ffde7(0xa9)],_0x48a33a=_0xfde5b0['user'],_0x31e2c6=await profile['findOne']({'email':_0x48a33a[_0x4ffde7(0xe0)]}),_0xcb255d=await master_shop[_0x4ffde7(0xed)]();console[_0x4ffde7(0xea)]('master',_0xcb255d);const _0x8f57e5=await email_settings[_0x4ffde7(0xf0)]();console[_0x4ffde7(0xea)](_0x4ffde7(0xaa),_0x8f57e5);if(_0xcb255d[0x0]['language']==_0x4ffde7(0xeb)){var _0x852246=users[_0x4ffde7(0xa8)];console[_0x4ffde7(0xea)](_0x852246);}else{if(_0xcb255d[0x0]['language']=='Hindi')var _0x852246=users[_0x4ffde7(0xc9)];else{if(_0xcb255d[0x0][_0x4ffde7(0xa6)]==_0x4ffde7(0xde))var _0x852246=users['German'];else{if(_0xcb255d[0x0]['language']==_0x4ffde7(0xc8))var _0x852246=users[_0x4ffde7(0xc8)];else{if(_0xcb255d[0x0][_0x4ffde7(0xa6)]=='French')var _0x852246=users['French'];else{if(_0xcb255d[0x0][_0x4ffde7(0xa6)]=='Portuguese\x20(BR)')var _0x852246=users[_0x4ffde7(0xb5)];else{if(_0xcb255d[0x0][_0x4ffde7(0xa6)]=='Chinese')var _0x852246=users[_0x4ffde7(0xc6)];else{if(_0xcb255d[0x0][_0x4ffde7(0xa6)]==_0x4ffde7(0xc3))var _0x852246=users['Arabic'];}}}}}}}_0x2a0ca7[_0x4ffde7(0xe1)]('email_settings',{'success':_0xfde5b0[_0x4ffde7(0xae)]('success'),'errors':_0xfde5b0[_0x4ffde7(0xae)](_0x4ffde7(0xdf)),'role':_0x48a33a,'profile':_0x31e2c6,'master_shop':_0xcb255d,'email':_0x8f57e5,'language':_0x852246});}catch(_0x1d2889){console['log'](_0x1d2889);}}),router[a0_0x49d1f5(0xec)]('/view/email/edit_settings',auth,async(_0x477172,_0x42cf8)=>{const _0x1c4567=a0_0x49d1f5;try{const {host:_0x35e1b0,port:_0x3f3d42,email:_0x5be152,password:_0x1ea2e7}=_0x477172[_0x1c4567(0xd9)],_0x5ca102=await email_settings['findOne']();if(_0x5ca102==null){const _0x53c82a=new email_settings({'host':_0x35e1b0,'port':_0x3f3d42,'email':_0x5be152,'password':_0x1ea2e7});await _0x53c82a['save']();}else _0x5ca102['host']=_0x35e1b0,_0x5ca102[_0x1c4567(0xd3)]=_0x3f3d42,_0x5ca102['email']=_0x5be152,_0x5ca102[_0x1c4567(0xc5)]=_0x1ea2e7,await _0x5ca102[_0x1c4567(0xcb)]();_0x477172[_0x1c4567(0xae)](_0x1c4567(0xb6),'shop\x20setting\x20edit\x20successfully'),_0x42cf8['redirect']('/master_shop/view/email');}catch(_0x28aacf){console[_0x1c4567(0xea)](_0x28aacf);}}),router['get'](a0_0x49d1f5(0xcf),auth,async(_0x48831b,_0x40e794)=>{const _0x5aafcf=a0_0x49d1f5;try{const {username:_0x1407dd,email:_0x35b2fa,role:_0x2bf9c5}=_0x48831b[_0x5aafcf(0xa9)],_0x3341c4=_0x48831b[_0x5aafcf(0xa9)],_0x1f09ab=await supervisor_settings[_0x5aafcf(0xed)](),_0x27e893=await profile[_0x5aafcf(0xf0)]({'email':_0x3341c4[_0x5aafcf(0xe0)]}),_0x1176e3=await master_shop[_0x5aafcf(0xed)](),_0x579304=new Date()[_0x5aafcf(0xee)](_0x5aafcf(0xd8),{'timeZone':_0x1176e3[0x0]['timezone']});if(_0x1176e3[0x0][_0x5aafcf(0xa6)]==_0x5aafcf(0xeb)){var _0x33f3df=users[_0x5aafcf(0xa8)];console[_0x5aafcf(0xea)](_0x33f3df);}else{if(_0x1176e3[0x0][_0x5aafcf(0xa6)]==_0x5aafcf(0xc9))var _0x33f3df=users[_0x5aafcf(0xc9)];else{if(_0x1176e3[0x0][_0x5aafcf(0xa6)]==_0x5aafcf(0xde))var _0x33f3df=users[_0x5aafcf(0xde)];else{if(_0x1176e3[0x0]['language']==_0x5aafcf(0xc8))var _0x33f3df=users[_0x5aafcf(0xc8)];else{if(_0x1176e3[0x0][_0x5aafcf(0xa6)]==_0x5aafcf(0xc7))var _0x33f3df=users['French'];else{if(_0x1176e3[0x0][_0x5aafcf(0xa6)]==_0x5aafcf(0xb2))var _0x33f3df=users[_0x5aafcf(0xb5)];else{if(_0x1176e3[0x0][_0x5aafcf(0xa6)]==_0x5aafcf(0xc6))var _0x33f3df=users[_0x5aafcf(0xc6)];else{if(_0x1176e3[0x0]['language']=='Arabic\x20(ae)')var _0x33f3df=users['Arabic'];}}}}}}}_0x40e794[_0x5aafcf(0xe1)](_0x5aafcf(0xac),{'success':_0x48831b[_0x5aafcf(0xae)](_0x5aafcf(0xb6)),'errors':_0x48831b[_0x5aafcf(0xae)](_0x5aafcf(0xdf)),'role':_0x3341c4,'profile':_0x27e893,'master_shop':_0x1176e3,'supervisor_data':_0x1f09ab[0x0],'timezones':timezones,'language':_0x33f3df});}catch(_0x4040c9){console[_0x5aafcf(0xea)](_0x4040c9);}}),router['post'](a0_0x49d1f5(0xcf),auth,async(_0x2402e5,_0x510c70)=>{const _0x1586df=a0_0x49d1f5;try{const {rm_name:_0x57e692,fg_name:_0x48e413,rm_email:_0x43265a,fg_email:_0x3a57fb,rm_mobilenum:_0x1a54f4,fg_number:_0x10cb84}=_0x2402e5[_0x1586df(0xd9)],_0x28be56=await supervisor_settings[_0x1586df(0xf0)]();if(_0x28be56==null){const _0x396745=new supervisor_settings({'RMSName':_0x57e692,'RMSEmail':_0x43265a,'RMSnumber':_0x1a54f4,'FGSName':_0x48e413,'FGSEmail':_0x3a57fb,'FGSnumber':_0x10cb84});await _0x396745[_0x1586df(0xcb)]();}else _0x28be56[_0x1586df(0xdd)]=_0x57e692,_0x28be56[_0x1586df(0xb9)]=_0x43265a,_0x28be56[_0x1586df(0xb3)]=_0x1a54f4,_0x28be56[_0x1586df(0xc1)]=_0x48e413,_0x28be56[_0x1586df(0xba)]=_0x3a57fb,_0x28be56[_0x1586df(0xcc)]=_0x10cb84,await _0x28be56['save']();_0x2402e5[_0x1586df(0xae)](_0x1586df(0xb6),_0x1586df(0xdc)),_0x510c70[_0x1586df(0xbc)]('/master_shop/view/supervisors');}catch(_0x5875d8){console[_0x1586df(0xea)](_0x5875d8);}}),module[a0_0x49d1f5(0xd1)]=router;function a0_0x4f65(){const _0x5c93ae=['express','RMSEmail','FGSEmail','18cViupu','redirect','image','master_settings','20BhJHxc','3841808KdSXNt','FGSName','../models/all_models','Arabic\x20(ae)','diskStorage','password','Chinese','French','Spanish','Hindi','filename','save','FGSnumber','master_shop_data','2070vpbxcg','/view/supervisors','params','exports','12xjBcDD','port','4565935eIGQEN','120100NNllVB','currency_placement','1002654LuGFVf','en-US','body','timezone','2nd\x20master_shop_data','shop\x20setting\x20edit\x20successfully','RMSName','German','errors','email','render','83163AuQPoP','1771HsdTpB','40695852UQyCHl','get','now','site_title','Router','timezones-list','log','English\x20(US)','post','find','toLocaleString','Arabic','findOne','multer','master','language','../middleware/auth','English','user','master\x20settings\x20email_data','40jeFkpV','supervisor_settings','currency','flash','file','./public/upload','../public/language/languages.json','Portuguese\x20(BR)','RMSnumber','/view','Portuguese','success','/:id'];a0_0x4f65=function(){return _0x5c93ae;};return a0_0x4f65();}