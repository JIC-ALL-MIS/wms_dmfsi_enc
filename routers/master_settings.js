function a0_0x38cc(){const _0x5d03ba=['render','email_settings','multer','../public/language/languages.json','log','195630yhqeYH','shop\x20setting\x20edit\x20successfully','success','toLocaleString','single','express','en-US','email','Portuguese\x20(BR)','RMSEmail','18636BRSiLh','timezones-list','Arabic\x20(ae)','originalname','/view/email/edit_settings','diskStorage','FGSName','password','language','22012dpHGXY','master\x20settings\x20email_data','timezone','save','master','file','Chinese','6PtsVJC','English','1565470GgFaXc','2FconWa','post','German','Spanish','Router','/view/edit_settings','hidden','Portuguese','27555ZavAJf','/view/supervisors','/master_shop/view','16209fWnmuu','body','English\x20(US)','flash','currency_placement','FGSnumber','master_shop_data','/master_shop/view/email','50hiQuZP','French','findOne','exports','redirect','/view','currency','/view/email','site_title','errors','image','params','Arabic','488HieFjA','get','Hindi','235403yrUYNF','find','user','/master_shop/view/supervisors'];a0_0x38cc=function(){return _0x5d03ba;};return a0_0x38cc();}const a0_0x286d13=a0_0x32a6;(function(_0x3fc6d5,_0x542577){const _0x1fdb87=a0_0x32a6,_0x2c8eb8=_0x3fc6d5();while(!![]){try{const _0x518905=-parseInt(_0x1fdb87(0xc1))/0x1*(-parseInt(_0x1fdb87(0xb7))/0x2)+parseInt(_0x1fdb87(0xed))/0x3+parseInt(_0x1fdb87(0xf7))/0x4*(parseInt(_0x1fdb87(0xd4))/0x5)+-parseInt(_0x1fdb87(0xbe))/0x6*(-parseInt(_0x1fdb87(0xe4))/0x7)+parseInt(_0x1fdb87(0xe1))/0x8*(parseInt(_0x1fdb87(0xcc))/0x9)+-parseInt(_0x1fdb87(0xc0))/0xa+parseInt(_0x1fdb87(0xc9))/0xb;if(_0x518905===_0x542577)break;else _0x2c8eb8['push'](_0x2c8eb8['shift']());}catch(_0x43b694){_0x2c8eb8['push'](_0x2c8eb8['shift']());}}}(a0_0x38cc,0x1e17c));function a0_0x32a6(_0x341eec,_0x517cca){const _0x38ccaf=a0_0x38cc();return a0_0x32a6=function(_0x32a648,_0x1b07e6){_0x32a648=_0x32a648-0xb4;let _0x2fe50c=_0x38ccaf[_0x32a648];return _0x2fe50c;},a0_0x32a6(_0x341eec,_0x517cca);}const express=require(a0_0x286d13(0xf2)),app=express(),router=express[a0_0x286d13(0xc5)](),multer=require(a0_0x286d13(0xea)),{profile,master_shop,email_settings,supervisor_settings}=require('../models/all_models'),auth=require('../middleware/auth');var timezones=require(a0_0x286d13(0xf8));const users=require(a0_0x286d13(0xeb)),storage=multer[a0_0x286d13(0xfc)]({'destination':(_0x32f968,_0x1674eb,_0x14426e)=>{_0x14426e(null,'./public/upload');},'filename':(_0xab9e89,_0x4ab6c1,_0x191947)=>{const _0x27056f=a0_0x286d13;_0x191947(null,Date['now']()+_0x4ab6c1[_0x27056f(0xfa)]);}}),upload=multer({'storage':storage});router[a0_0x286d13(0xe2)](a0_0x286d13(0xd9),auth,async(_0x59ea93,_0x3177af)=>{const _0xbe8e55=a0_0x286d13;try{const {username:_0x26b73b,email:_0x448592,role:_0x29660e}=_0x59ea93[_0xbe8e55(0xe6)],_0xf4aec5=_0x59ea93[_0xbe8e55(0xe6)],_0x382554=await profile['findOne']({'email':_0xf4aec5[_0xbe8e55(0xf4)]}),_0x44fa7a=await master_shop[_0xbe8e55(0xe5)]();console['log']('master',_0x44fa7a);const _0x19380e=new Date()[_0xbe8e55(0xf0)](_0xbe8e55(0xf3),{'timeZone':_0x44fa7a[0x0][_0xbe8e55(0xb9)]});console['log']('timezone',_0x19380e);if(_0x44fa7a[0x0][_0xbe8e55(0xb6)]==_0xbe8e55(0xce)){var _0x1128d1=users[_0xbe8e55(0xbf)];console[_0xbe8e55(0xec)](_0x1128d1);}else{if(_0x44fa7a[0x0]['language']==_0xbe8e55(0xe3))var _0x1128d1=users[_0xbe8e55(0xe3)];else{if(_0x44fa7a[0x0][_0xbe8e55(0xb6)]==_0xbe8e55(0xc3))var _0x1128d1=users[_0xbe8e55(0xc3)];else{if(_0x44fa7a[0x0][_0xbe8e55(0xb6)]==_0xbe8e55(0xc4))var _0x1128d1=users[_0xbe8e55(0xc4)];else{if(_0x44fa7a[0x0]['language']==_0xbe8e55(0xd5))var _0x1128d1=users['French'];else{if(_0x44fa7a[0x0][_0xbe8e55(0xb6)]==_0xbe8e55(0xf5))var _0x1128d1=users[_0xbe8e55(0xc8)];else{if(_0x44fa7a[0x0]['language']==_0xbe8e55(0xbd))var _0x1128d1=users['Chinese'];else{if(_0x44fa7a[0x0]['language']=='Arabic\x20(ae)')var _0x1128d1=users[_0xbe8e55(0xe0)];}}}}}}}_0x3177af[_0xbe8e55(0xe8)]('master_settings',{'success':_0x59ea93[_0xbe8e55(0xcf)]('success'),'errors':_0x59ea93['flash'](_0xbe8e55(0xdd)),'role':_0xf4aec5,'profile':_0x382554,'master_shop':_0x44fa7a,'timezones':timezones,'language':_0x1128d1});}catch(_0x1925f0){console[_0xbe8e55(0xec)](_0x1925f0);}}),router[a0_0x286d13(0xe2)]('/:id',auth,async(_0x4ea40d,_0x2c6bf3)=>{const _0x3fbe46=a0_0x286d13;try{console['log'](_0x3fbe46(0xb6)),console[_0x3fbe46(0xec)](_0x4ea40d[_0x3fbe46(0xdf)]['id']);const _0x3b14f3=await master_shop[_0x3fbe46(0xd6)]();_0x3b14f3[_0x3fbe46(0xb6)]=_0x4ea40d[_0x3fbe46(0xdf)]['id'],await _0x3b14f3['save'](),console[_0x3fbe46(0xec)](_0x3fbe46(0xbb),_0x3b14f3);}catch(_0x922535){console['log'](_0x922535);}}),router[a0_0x286d13(0xc2)](a0_0x286d13(0xc6),auth,upload[a0_0x286d13(0xf1)](a0_0x286d13(0xde)),async(_0x2dc486,_0x13f815)=>{const _0xefda90=a0_0x286d13;try{const {site_title:_0x169024,currency:_0x531fc0,currency_placement:_0x5ac6a1,timezone:_0x4fd092}=_0x2dc486['body'];if(_0x2dc486[_0xefda90(0xcd)][_0xefda90(0xc7)]==0x0){const _0x52e136=await master_shop[_0xefda90(0xd6)]();console[_0xefda90(0xec)](_0xefda90(0xd2),_0x52e136);if(_0x52e136==''){const _0x5a2f11=new master_shop({'site_title':_0x169024,'image':image,'currency':_0x531fc0,'currency_placement':_0x5ac6a1,'timezone':_0x4fd092}),_0x293b64=await _0x5a2f11[_0xefda90(0xba)]();}else _0x52e136[_0xefda90(0xdc)]=_0x169024,_0x52e136[_0xefda90(0xda)]=_0x531fc0,_0x52e136[_0xefda90(0xd0)]=_0x5ac6a1,_0x52e136[_0xefda90(0xb9)]=_0x4fd092,await _0x52e136['save']();}else{const _0x3a6706=_0x2dc486[_0xefda90(0xbc)]['filename'],_0x5cddc9=await master_shop[_0xefda90(0xd6)]();console[_0xefda90(0xec)]('2nd\x20master_shop_data',_0x5cddc9);if(_0x5cddc9==null){console[_0xefda90(0xec)]('1',_0x169024);const _0x5b1a2c=new master_shop({'site_title':_0x169024,'image':_0x3a6706,'currency':_0x531fc0,'currency_placement':_0x5ac6a1,'timezone':_0x4fd092}),_0x3a7724=await _0x5b1a2c[_0xefda90(0xba)]();}else console[_0xefda90(0xec)]('2',_0x169024),_0x5cddc9[_0xefda90(0xdc)]=_0x169024,_0x5cddc9[_0xefda90(0xde)]=_0x3a6706,_0x5cddc9['currency']=_0x531fc0,_0x5cddc9[_0xefda90(0xd0)]=_0x5ac6a1,_0x5cddc9[_0xefda90(0xb9)]=_0x4fd092,await _0x5cddc9[_0xefda90(0xba)]();}_0x2dc486['flash'](_0xefda90(0xef),_0xefda90(0xee)),_0x13f815['redirect'](_0xefda90(0xcb));}catch(_0x48a71b){console[_0xefda90(0xec)](_0x48a71b);}}),router[a0_0x286d13(0xe2)](a0_0x286d13(0xdb),auth,async(_0x1d63ad,_0x15a766)=>{const _0x231ac4=a0_0x286d13;try{const {username:_0x39f4b4,email:_0x31bb7b,role:_0x4aa66e}=_0x1d63ad[_0x231ac4(0xe6)],_0x3f7a01=_0x1d63ad[_0x231ac4(0xe6)],_0x5846a5=await profile[_0x231ac4(0xd6)]({'email':_0x3f7a01[_0x231ac4(0xf4)]}),_0x5ebd41=await master_shop[_0x231ac4(0xe5)]();console[_0x231ac4(0xec)](_0x231ac4(0xbb),_0x5ebd41);const _0x5f5a55=await email_settings[_0x231ac4(0xd6)]();console[_0x231ac4(0xec)](_0x231ac4(0xb8),_0x5f5a55);if(_0x5ebd41[0x0][_0x231ac4(0xb6)]=='English\x20(US)'){var _0x56fa94=users[_0x231ac4(0xbf)];console[_0x231ac4(0xec)](_0x56fa94);}else{if(_0x5ebd41[0x0][_0x231ac4(0xb6)]==_0x231ac4(0xe3))var _0x56fa94=users[_0x231ac4(0xe3)];else{if(_0x5ebd41[0x0]['language']==_0x231ac4(0xc3))var _0x56fa94=users[_0x231ac4(0xc3)];else{if(_0x5ebd41[0x0]['language']==_0x231ac4(0xc4))var _0x56fa94=users['Spanish'];else{if(_0x5ebd41[0x0][_0x231ac4(0xb6)]==_0x231ac4(0xd5))var _0x56fa94=users[_0x231ac4(0xd5)];else{if(_0x5ebd41[0x0][_0x231ac4(0xb6)]==_0x231ac4(0xf5))var _0x56fa94=users[_0x231ac4(0xc8)];else{if(_0x5ebd41[0x0][_0x231ac4(0xb6)]==_0x231ac4(0xbd))var _0x56fa94=users['Chinese'];else{if(_0x5ebd41[0x0][_0x231ac4(0xb6)]==_0x231ac4(0xf9))var _0x56fa94=users[_0x231ac4(0xe0)];}}}}}}}_0x15a766['render'](_0x231ac4(0xe9),{'success':_0x1d63ad[_0x231ac4(0xcf)](_0x231ac4(0xef)),'errors':_0x1d63ad['flash'](_0x231ac4(0xdd)),'role':_0x3f7a01,'profile':_0x5846a5,'master_shop':_0x5ebd41,'email':_0x5f5a55,'language':_0x56fa94});}catch(_0x2ff28e){console['log'](_0x2ff28e);}}),router['post'](a0_0x286d13(0xfb),auth,async(_0x3c590d,_0x227ea0)=>{const _0x360cda=a0_0x286d13;try{const {host:_0x279f96,port:_0x131cd1,email:_0x1ec2df,password:_0xf52665}=_0x3c590d[_0x360cda(0xcd)],_0x1a3843=await email_settings[_0x360cda(0xd6)]();if(_0x1a3843==null){const _0x138faa=new email_settings({'host':_0x279f96,'port':_0x131cd1,'email':_0x1ec2df,'password':_0xf52665});await _0x138faa[_0x360cda(0xba)]();}else _0x1a3843['host']=_0x279f96,_0x1a3843['port']=_0x131cd1,_0x1a3843[_0x360cda(0xf4)]=_0x1ec2df,_0x1a3843[_0x360cda(0xb5)]=_0xf52665,await _0x1a3843[_0x360cda(0xba)]();_0x3c590d['flash'](_0x360cda(0xef),_0x360cda(0xee)),_0x227ea0['redirect'](_0x360cda(0xd3));}catch(_0x2021b2){console[_0x360cda(0xec)](_0x2021b2);}}),router[a0_0x286d13(0xe2)](a0_0x286d13(0xca),auth,async(_0x14865c,_0x4fde2a)=>{const _0x3f4e19=a0_0x286d13;try{const {username:_0x5a7fc0,email:_0xd03c6f,role:_0x32e7a8}=_0x14865c[_0x3f4e19(0xe6)],_0x7bd0c4=_0x14865c[_0x3f4e19(0xe6)],_0x2d11dd=await supervisor_settings[_0x3f4e19(0xe5)](),_0x2ad1bd=await profile[_0x3f4e19(0xd6)]({'email':_0x7bd0c4[_0x3f4e19(0xf4)]}),_0x1b7b64=await master_shop[_0x3f4e19(0xe5)](),_0x4fcb0f=new Date()['toLocaleString'](_0x3f4e19(0xf3),{'timeZone':_0x1b7b64[0x0]['timezone']});if(_0x1b7b64[0x0]['language']==_0x3f4e19(0xce)){var _0x19bd08=users['English'];console[_0x3f4e19(0xec)](_0x19bd08);}else{if(_0x1b7b64[0x0][_0x3f4e19(0xb6)]==_0x3f4e19(0xe3))var _0x19bd08=users['Hindi'];else{if(_0x1b7b64[0x0][_0x3f4e19(0xb6)]==_0x3f4e19(0xc3))var _0x19bd08=users['German'];else{if(_0x1b7b64[0x0][_0x3f4e19(0xb6)]==_0x3f4e19(0xc4))var _0x19bd08=users[_0x3f4e19(0xc4)];else{if(_0x1b7b64[0x0][_0x3f4e19(0xb6)]=='French')var _0x19bd08=users[_0x3f4e19(0xd5)];else{if(_0x1b7b64[0x0][_0x3f4e19(0xb6)]=='Portuguese\x20(BR)')var _0x19bd08=users['Portuguese'];else{if(_0x1b7b64[0x0][_0x3f4e19(0xb6)]==_0x3f4e19(0xbd))var _0x19bd08=users[_0x3f4e19(0xbd)];else{if(_0x1b7b64[0x0][_0x3f4e19(0xb6)]==_0x3f4e19(0xf9))var _0x19bd08=users[_0x3f4e19(0xe0)];}}}}}}}_0x4fde2a[_0x3f4e19(0xe8)]('supervisor_settings',{'success':_0x14865c[_0x3f4e19(0xcf)](_0x3f4e19(0xef)),'errors':_0x14865c['flash'](_0x3f4e19(0xdd)),'role':_0x7bd0c4,'profile':_0x2ad1bd,'master_shop':_0x1b7b64,'supervisor_data':_0x2d11dd[0x0],'timezones':timezones,'language':_0x19bd08});}catch(_0x5bb41d){console[_0x3f4e19(0xec)](_0x5bb41d);}}),router[a0_0x286d13(0xc2)](a0_0x286d13(0xca),auth,async(_0x38e3fd,_0x31cdeb)=>{const _0x50abd7=a0_0x286d13;try{const {rm_name:_0x4f5a66,fg_name:_0x3f6b76,rm_email:_0x5f4408,fg_email:_0x1cbddb,rm_mobilenum:_0x1132f3,fg_number:_0x59aa61}=_0x38e3fd['body'],_0x3f323b=await supervisor_settings['findOne']();if(_0x3f323b==null){const _0x56f166=new supervisor_settings({'RMSName':_0x4f5a66,'RMSEmail':_0x5f4408,'RMSnumber':_0x1132f3,'FGSName':_0x3f6b76,'FGSEmail':_0x1cbddb,'FGSnumber':_0x59aa61});await _0x56f166[_0x50abd7(0xba)]();}else _0x3f323b['RMSName']=_0x4f5a66,_0x3f323b[_0x50abd7(0xf6)]=_0x5f4408,_0x3f323b['RMSnumber']=_0x1132f3,_0x3f323b[_0x50abd7(0xb4)]=_0x3f6b76,_0x3f323b['FGSEmail']=_0x1cbddb,_0x3f323b[_0x50abd7(0xd1)]=_0x59aa61,await _0x3f323b[_0x50abd7(0xba)]();_0x38e3fd['flash'](_0x50abd7(0xef),_0x50abd7(0xee)),_0x31cdeb[_0x50abd7(0xd8)](_0x50abd7(0xe7));}catch(_0x43c9ce){console[_0x50abd7(0xec)](_0x43c9ce);}}),module[a0_0x286d13(0xd7)]=router;