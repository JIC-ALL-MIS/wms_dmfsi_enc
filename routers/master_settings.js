const a0_0x16102e=a0_0x251c;(function(_0xc679a8,_0x4822aa){const _0x46e9c1=a0_0x251c,_0x37bf13=_0xc679a8();while(!![]){try{const _0x367920=-parseInt(_0x46e9c1(0xb6))/0x1+-parseInt(_0x46e9c1(0xbd))/0x2*(-parseInt(_0x46e9c1(0xf0))/0x3)+-parseInt(_0x46e9c1(0xbc))/0x4+parseInt(_0x46e9c1(0xd1))/0x5*(-parseInt(_0x46e9c1(0xaa))/0x6)+parseInt(_0x46e9c1(0xeb))/0x7*(-parseInt(_0x46e9c1(0xbe))/0x8)+parseInt(_0x46e9c1(0xe0))/0x9*(-parseInt(_0x46e9c1(0xd8))/0xa)+-parseInt(_0x46e9c1(0xb8))/0xb*(-parseInt(_0x46e9c1(0xee))/0xc);if(_0x367920===_0x4822aa)break;else _0x37bf13['push'](_0x37bf13['shift']());}catch(_0xd005c1){_0x37bf13['push'](_0x37bf13['shift']());}}}(a0_0x1555,0x6a31e));const express=require(a0_0x16102e(0xb2)),app=express(),router=express[a0_0x16102e(0xc0)](),multer=require(a0_0x16102e(0xe6)),{profile,master_shop,email_settings,supervisor_settings}=require(a0_0x16102e(0xd6)),auth=require(a0_0x16102e(0xda));var timezones=require(a0_0x16102e(0xd5));function a0_0x1555(){const _0x5a612d=['post','language','master_shop_data','Hindi','37585MWDTHB','English\x20(US)','success','timezone','timezones-list','../models/all_models','get','1000290ymaTSd','currency','../middleware/auth','/master_shop/view/email','body','/view/edit_settings','filename','master','72Qknkyo','French','German','host','master_settings','params','multer','errors','findOne','site_title','master\x20settings\x20email_data','175931WFHZaG','/view/email','originalname','3084wMYDgg','en-US','1101945Ngswof','Arabic\x20(ae)','FGSnumber','redirect','currency_placement','user','port','shop\x20setting\x20edit\x20successfully','password','Spanish','email_settings','72ePcbWC','save','/view/supervisors','Portuguese\x20(BR)','image','find','Portuguese','RMSName','express','flash','now','/view','133567RFYwkQ','Chinese','73579PoDfOe','single','exports','FGSEmail','599536RgzIJD','2sGRqst','152GiQPSZ','English','Router','Arabic','log','./public/upload','hidden','/master_shop/view/supervisors','/master_shop/view','../public/language/languages.json','/view/email/edit_settings','toLocaleString','FGSName','diskStorage','email'];a0_0x1555=function(){return _0x5a612d;};return a0_0x1555();}function a0_0x251c(_0x1841f7,_0x144cf3){const _0x155517=a0_0x1555();return a0_0x251c=function(_0x251c7e,_0x883dc5){_0x251c7e=_0x251c7e-0xa5;let _0x217dbd=_0x155517[_0x251c7e];return _0x217dbd;},a0_0x251c(_0x1841f7,_0x144cf3);}const users=require(a0_0x16102e(0xc7)),storage=multer[a0_0x16102e(0xcb)]({'destination':(_0x73604,_0xf586f0,_0x6c14f3)=>{const _0x58ac7d=a0_0x16102e;_0x6c14f3(null,_0x58ac7d(0xc3));},'filename':(_0x38bf92,_0x4f3947,_0x10d9e8)=>{const _0x359b61=a0_0x16102e;_0x10d9e8(null,Date[_0x359b61(0xb4)]()+_0x4f3947[_0x359b61(0xed)]);}}),upload=multer({'storage':storage});router[a0_0x16102e(0xd7)](a0_0x16102e(0xb5),auth,async(_0x4419d8,_0x18d233)=>{const _0x3b28b0=a0_0x16102e;try{const {username:_0x50cffa,email:_0x4a4dbe,role:_0xcdbaa3}=_0x4419d8[_0x3b28b0(0xf5)],_0x2858d6=_0x4419d8['user'],_0x33482d=await profile[_0x3b28b0(0xe8)]({'email':_0x2858d6[_0x3b28b0(0xcc)]}),_0x1623a1=await master_shop[_0x3b28b0(0xaf)]();console[_0x3b28b0(0xc2)](_0x3b28b0(0xdf),_0x1623a1);const _0x4bad08=new Date()[_0x3b28b0(0xc9)](_0x3b28b0(0xef),{'timeZone':_0x1623a1[0x0][_0x3b28b0(0xd4)]});console['log'](_0x3b28b0(0xd4),_0x4bad08);if(_0x1623a1[0x0][_0x3b28b0(0xce)]==_0x3b28b0(0xd2)){var _0x197b19=users['English'];console['log'](_0x197b19);}else{if(_0x1623a1[0x0]['language']==_0x3b28b0(0xd0))var _0x197b19=users[_0x3b28b0(0xd0)];else{if(_0x1623a1[0x0][_0x3b28b0(0xce)]==_0x3b28b0(0xe2))var _0x197b19=users[_0x3b28b0(0xe2)];else{if(_0x1623a1[0x0][_0x3b28b0(0xce)]==_0x3b28b0(0xa8))var _0x197b19=users[_0x3b28b0(0xa8)];else{if(_0x1623a1[0x0]['language']==_0x3b28b0(0xe1))var _0x197b19=users['French'];else{if(_0x1623a1[0x0]['language']==_0x3b28b0(0xad))var _0x197b19=users[_0x3b28b0(0xb0)];else{if(_0x1623a1[0x0]['language']==_0x3b28b0(0xb7))var _0x197b19=users[_0x3b28b0(0xb7)];else{if(_0x1623a1[0x0][_0x3b28b0(0xce)]=='Arabic\x20(ae)')var _0x197b19=users['Arabic'];}}}}}}}_0x18d233['render'](_0x3b28b0(0xe4),{'success':_0x4419d8[_0x3b28b0(0xb3)]('success'),'errors':_0x4419d8['flash']('errors'),'role':_0x2858d6,'profile':_0x33482d,'master_shop':_0x1623a1,'timezones':timezones,'language':_0x197b19});}catch(_0x3042fb){console[_0x3b28b0(0xc2)](_0x3042fb);}}),router[a0_0x16102e(0xd7)]('/:id',auth,async(_0x4ad2ab,_0x4067bb)=>{const _0x592aa8=a0_0x16102e;try{console[_0x592aa8(0xc2)](_0x592aa8(0xce)),console[_0x592aa8(0xc2)](_0x4ad2ab[_0x592aa8(0xe5)]['id']);const _0x4651b6=await master_shop[_0x592aa8(0xe8)]();_0x4651b6['language']=_0x4ad2ab['params']['id'],await _0x4651b6[_0x592aa8(0xab)](),console[_0x592aa8(0xc2)]('master',_0x4651b6);}catch(_0x2785a3){console[_0x592aa8(0xc2)](_0x2785a3);}}),router['post'](a0_0x16102e(0xdd),auth,upload[a0_0x16102e(0xb9)]('image'),async(_0x10df6f,_0xc96a62)=>{const _0x39aaae=a0_0x16102e;try{const {site_title:_0xac77d7,currency:_0x5f10d9,currency_placement:_0xb53c8c,timezone:_0x1074af}=_0x10df6f['body'];if(_0x10df6f[_0x39aaae(0xdc)][_0x39aaae(0xc4)]==0x0){const _0x53753e=await master_shop[_0x39aaae(0xe8)]();console[_0x39aaae(0xc2)](_0x39aaae(0xcf),_0x53753e);if(_0x53753e==''){const _0x1ea42c=new master_shop({'site_title':_0xac77d7,'image':image,'currency':_0x5f10d9,'currency_placement':_0xb53c8c,'timezone':_0x1074af}),_0x191bb1=await _0x1ea42c[_0x39aaae(0xab)]();}else _0x53753e['site_title']=_0xac77d7,_0x53753e[_0x39aaae(0xd9)]=_0x5f10d9,_0x53753e[_0x39aaae(0xf4)]=_0xb53c8c,_0x53753e['timezone']=_0x1074af,await _0x53753e[_0x39aaae(0xab)]();}else{const _0x2d72cd=_0x10df6f['file'][_0x39aaae(0xde)],_0x333bfd=await master_shop[_0x39aaae(0xe8)]();console[_0x39aaae(0xc2)]('2nd\x20master_shop_data',_0x333bfd);if(_0x333bfd==null){console[_0x39aaae(0xc2)]('1',_0xac77d7);const _0x4d0417=new master_shop({'site_title':_0xac77d7,'image':_0x2d72cd,'currency':_0x5f10d9,'currency_placement':_0xb53c8c,'timezone':_0x1074af}),_0x1bca2a=await _0x4d0417[_0x39aaae(0xab)]();}else console[_0x39aaae(0xc2)]('2',_0xac77d7),_0x333bfd[_0x39aaae(0xe9)]=_0xac77d7,_0x333bfd[_0x39aaae(0xae)]=_0x2d72cd,_0x333bfd[_0x39aaae(0xd9)]=_0x5f10d9,_0x333bfd[_0x39aaae(0xf4)]=_0xb53c8c,_0x333bfd[_0x39aaae(0xd4)]=_0x1074af,await _0x333bfd[_0x39aaae(0xab)]();}_0x10df6f[_0x39aaae(0xb3)](_0x39aaae(0xd3),_0x39aaae(0xa6)),_0xc96a62['redirect'](_0x39aaae(0xc6));}catch(_0x3782de){console[_0x39aaae(0xc2)](_0x3782de);}}),router[a0_0x16102e(0xd7)](a0_0x16102e(0xec),auth,async(_0x3d711e,_0x13a5f9)=>{const _0x3eca30=a0_0x16102e;try{const {username:_0x2796d1,email:_0x3d4176,role:_0x2b9074}=_0x3d711e[_0x3eca30(0xf5)],_0x206b86=_0x3d711e[_0x3eca30(0xf5)],_0x85b34=await profile['findOne']({'email':_0x206b86['email']}),_0x47eb4c=await master_shop[_0x3eca30(0xaf)]();console[_0x3eca30(0xc2)](_0x3eca30(0xdf),_0x47eb4c);const _0x1a3769=await email_settings['findOne']();console[_0x3eca30(0xc2)](_0x3eca30(0xea),_0x1a3769);if(_0x47eb4c[0x0][_0x3eca30(0xce)]=='English\x20(US)'){var _0x4f9bcd=users['English'];console[_0x3eca30(0xc2)](_0x4f9bcd);}else{if(_0x47eb4c[0x0][_0x3eca30(0xce)]==_0x3eca30(0xd0))var _0x4f9bcd=users[_0x3eca30(0xd0)];else{if(_0x47eb4c[0x0]['language']==_0x3eca30(0xe2))var _0x4f9bcd=users[_0x3eca30(0xe2)];else{if(_0x47eb4c[0x0][_0x3eca30(0xce)]=='Spanish')var _0x4f9bcd=users[_0x3eca30(0xa8)];else{if(_0x47eb4c[0x0]['language']==_0x3eca30(0xe1))var _0x4f9bcd=users[_0x3eca30(0xe1)];else{if(_0x47eb4c[0x0]['language']==_0x3eca30(0xad))var _0x4f9bcd=users[_0x3eca30(0xb0)];else{if(_0x47eb4c[0x0][_0x3eca30(0xce)]==_0x3eca30(0xb7))var _0x4f9bcd=users[_0x3eca30(0xb7)];else{if(_0x47eb4c[0x0][_0x3eca30(0xce)]==_0x3eca30(0xf1))var _0x4f9bcd=users[_0x3eca30(0xc1)];}}}}}}}_0x13a5f9['render'](_0x3eca30(0xa9),{'success':_0x3d711e[_0x3eca30(0xb3)](_0x3eca30(0xd3)),'errors':_0x3d711e['flash'](_0x3eca30(0xe7)),'role':_0x206b86,'profile':_0x85b34,'master_shop':_0x47eb4c,'email':_0x1a3769,'language':_0x4f9bcd});}catch(_0x13c8b3){console[_0x3eca30(0xc2)](_0x13c8b3);}}),router['post'](a0_0x16102e(0xc8),auth,async(_0x487b59,_0x4e639f)=>{const _0x41d975=a0_0x16102e;try{const {host:_0x3575f4,port:_0xde7ac,email:_0x31bf1a,password:_0x1c4b37}=_0x487b59[_0x41d975(0xdc)],_0x402d39=await email_settings[_0x41d975(0xe8)]();if(_0x402d39==null){const _0x5c96b4=new email_settings({'host':_0x3575f4,'port':_0xde7ac,'email':_0x31bf1a,'password':_0x1c4b37});await _0x5c96b4['save']();}else _0x402d39[_0x41d975(0xe3)]=_0x3575f4,_0x402d39[_0x41d975(0xa5)]=_0xde7ac,_0x402d39[_0x41d975(0xcc)]=_0x31bf1a,_0x402d39[_0x41d975(0xa7)]=_0x1c4b37,await _0x402d39[_0x41d975(0xab)]();_0x487b59[_0x41d975(0xb3)](_0x41d975(0xd3),_0x41d975(0xa6)),_0x4e639f['redirect'](_0x41d975(0xdb));}catch(_0x48479c){console[_0x41d975(0xc2)](_0x48479c);}}),router[a0_0x16102e(0xd7)]('/view/supervisors',auth,async(_0x57ce4e,_0x2cacf6)=>{const _0x8af180=a0_0x16102e;try{const {username:_0x2c3573,email:_0x199e64,role:_0x53f3de}=_0x57ce4e['user'],_0x2e323a=_0x57ce4e[_0x8af180(0xf5)],_0x28dd00=await supervisor_settings[_0x8af180(0xaf)](),_0x3b1349=await profile[_0x8af180(0xe8)]({'email':_0x2e323a['email']}),_0x5cb3f7=await master_shop[_0x8af180(0xaf)](),_0xb52fae=new Date()['toLocaleString'](_0x8af180(0xef),{'timeZone':_0x5cb3f7[0x0][_0x8af180(0xd4)]});if(_0x5cb3f7[0x0][_0x8af180(0xce)]=='English\x20(US)'){var _0x4a9078=users[_0x8af180(0xbf)];console[_0x8af180(0xc2)](_0x4a9078);}else{if(_0x5cb3f7[0x0][_0x8af180(0xce)]==_0x8af180(0xd0))var _0x4a9078=users[_0x8af180(0xd0)];else{if(_0x5cb3f7[0x0][_0x8af180(0xce)]=='German')var _0x4a9078=users[_0x8af180(0xe2)];else{if(_0x5cb3f7[0x0][_0x8af180(0xce)]==_0x8af180(0xa8))var _0x4a9078=users['Spanish'];else{if(_0x5cb3f7[0x0][_0x8af180(0xce)]==_0x8af180(0xe1))var _0x4a9078=users[_0x8af180(0xe1)];else{if(_0x5cb3f7[0x0]['language']==_0x8af180(0xad))var _0x4a9078=users[_0x8af180(0xb0)];else{if(_0x5cb3f7[0x0][_0x8af180(0xce)]==_0x8af180(0xb7))var _0x4a9078=users[_0x8af180(0xb7)];else{if(_0x5cb3f7[0x0][_0x8af180(0xce)]==_0x8af180(0xf1))var _0x4a9078=users[_0x8af180(0xc1)];}}}}}}}_0x2cacf6['render']('supervisor_settings',{'success':_0x57ce4e['flash'](_0x8af180(0xd3)),'errors':_0x57ce4e['flash'](_0x8af180(0xe7)),'role':_0x2e323a,'profile':_0x3b1349,'master_shop':_0x5cb3f7,'supervisor_data':_0x28dd00[0x0],'timezones':timezones,'language':_0x4a9078});}catch(_0x165c8f){console[_0x8af180(0xc2)](_0x165c8f);}}),router[a0_0x16102e(0xcd)](a0_0x16102e(0xac),auth,async(_0x1ecd49,_0x37df5f)=>{const _0x5ccb95=a0_0x16102e;try{const {rm_name:_0x519068,fg_name:_0x2f429f,rm_email:_0x5e691e,fg_email:_0x56a6d3,rm_mobilenum:_0xca9a6d,fg_number:_0x1d27c8}=_0x1ecd49[_0x5ccb95(0xdc)],_0x2ff73d=await supervisor_settings[_0x5ccb95(0xe8)]();if(_0x2ff73d==null){const _0x2a8ade=new supervisor_settings({'RMSName':_0x519068,'RMSEmail':_0x5e691e,'RMSnumber':_0xca9a6d,'FGSName':_0x2f429f,'FGSEmail':_0x56a6d3,'FGSnumber':_0x1d27c8});await _0x2a8ade[_0x5ccb95(0xab)]();}else _0x2ff73d[_0x5ccb95(0xb1)]=_0x519068,_0x2ff73d['RMSEmail']=_0x5e691e,_0x2ff73d['RMSnumber']=_0xca9a6d,_0x2ff73d[_0x5ccb95(0xca)]=_0x2f429f,_0x2ff73d[_0x5ccb95(0xbb)]=_0x56a6d3,_0x2ff73d[_0x5ccb95(0xf2)]=_0x1d27c8,await _0x2ff73d[_0x5ccb95(0xab)]();_0x1ecd49[_0x5ccb95(0xb3)](_0x5ccb95(0xd3),_0x5ccb95(0xa6)),_0x37df5f[_0x5ccb95(0xf3)](_0x5ccb95(0xc5));}catch(_0x18b8a1){console[_0x5ccb95(0xc2)](_0x18b8a1);}}),module[a0_0x16102e(0xba)]=router;