const a0_0x5f231a=a0_0x1ee3;(function(_0x56c939,_0x305074){const _0xfa0f47=a0_0x1ee3,_0x5b7b5a=_0x56c939();while(!![]){try{const _0x13e1a8=parseInt(_0xfa0f47(0xa7))/0x1+parseInt(_0xfa0f47(0x7a))/0x2*(-parseInt(_0xfa0f47(0xae))/0x3)+parseInt(_0xfa0f47(0x8c))/0x4+-parseInt(_0xfa0f47(0x6d))/0x5+-parseInt(_0xfa0f47(0x7f))/0x6+parseInt(_0xfa0f47(0x74))/0x7*(parseInt(_0xfa0f47(0x9e))/0x8)+parseInt(_0xfa0f47(0x88))/0x9*(parseInt(_0xfa0f47(0xaf))/0xa);if(_0x13e1a8===_0x305074)break;else _0x5b7b5a['push'](_0x5b7b5a['shift']());}catch(_0x13da05){_0x5b7b5a['push'](_0x5b7b5a['shift']());}}}(a0_0x35b7,0x854e0));const express=require(a0_0x5f231a(0xb3)),app=express(),router=express['Router'](),multer=require('multer'),{profile,master_shop,email_settings,supervisor_settings}=require('../models/all_models'),auth=require('../middleware/auth');var timezones=require(a0_0x5f231a(0x70));function a0_0x35b7(){const _0x43bb02=['host','hidden','362256LdYmSv','German','2nd\x20master_shop_data','email','Spanish','Chinese','RMSnumber','English','errors','Hindi','site_title','Arabic\x20(ae)','save','currency_placement','supervisor_settings','image','FGSName','/master_shop/view/supervisors','8JRBCdz','post','findOne','English\x20(US)','Portuguese','success','FGSEmail','currency','password','419383jbspvd','RMSEmail','Portuguese\x20(BR)','filename','get','log','timezone','27AWLalr','2640VFEhne','/:id','find','redirect','express','flash','Arabic','/view','2329900hHqWdi','en-US','diskStorage','timezones-list','body','master','render','4397400fnxlln','/view/email/edit_settings','originalname','email_settings','/view/email','/master_shop/view/email','56186waEBLe','French','language','./public/upload','params','6285516UbcQCJ','/view/edit_settings','shop\x20setting\x20edit\x20successfully','FGSnumber','toLocaleString','master_settings','user','/view/supervisors','/master_shop/view','40032YYCpEb','RMSName'];a0_0x35b7=function(){return _0x43bb02;};return a0_0x35b7();}function a0_0x1ee3(_0x15254e,_0x1d963d){const _0x35b73c=a0_0x35b7();return a0_0x1ee3=function(_0x1ee3a2,_0x4d4b2b){_0x1ee3a2=_0x1ee3a2-0x6a;let _0x5e8efc=_0x35b73c[_0x1ee3a2];return _0x5e8efc;},a0_0x1ee3(_0x15254e,_0x1d963d);}const users=require('../public/language/languages.json'),storage=multer[a0_0x5f231a(0x6f)]({'destination':(_0x3b47c6,_0x435c91,_0x74b843)=>{const _0x4b3496=a0_0x5f231a;_0x74b843(null,_0x4b3496(0x7d));},'filename':(_0x69467d,_0x128876,_0x2df2b6)=>{const _0x1b4e65=a0_0x5f231a;_0x2df2b6(null,Date['now']()+_0x128876[_0x1b4e65(0x76)]);}}),upload=multer({'storage':storage});router['get'](a0_0x5f231a(0x6c),auth,async(_0x1c518a,_0x5adb35)=>{const _0x4202c7=a0_0x5f231a;try{const {username:_0x40f07f,email:_0x3d2636,role:_0x26827d}=_0x1c518a['user'],_0x5398ea=_0x1c518a[_0x4202c7(0x85)],_0x51cd5d=await profile[_0x4202c7(0xa0)]({'email':_0x5398ea[_0x4202c7(0x8f)]}),_0x4e96e8=await master_shop[_0x4202c7(0xb1)]();console[_0x4202c7(0xac)](_0x4202c7(0x72),_0x4e96e8);const _0x2d520c=new Date()[_0x4202c7(0x83)](_0x4202c7(0x6e),{'timeZone':_0x4e96e8[0x0][_0x4202c7(0xad)]});console['log'](_0x4202c7(0xad),_0x2d520c);if(_0x4e96e8[0x0][_0x4202c7(0x7c)]==_0x4202c7(0xa1)){var _0xf3c8c=users['English'];console[_0x4202c7(0xac)](_0xf3c8c);}else{if(_0x4e96e8[0x0][_0x4202c7(0x7c)]==_0x4202c7(0x95))var _0xf3c8c=users[_0x4202c7(0x95)];else{if(_0x4e96e8[0x0][_0x4202c7(0x7c)]==_0x4202c7(0x8d))var _0xf3c8c=users[_0x4202c7(0x8d)];else{if(_0x4e96e8[0x0][_0x4202c7(0x7c)]==_0x4202c7(0x90))var _0xf3c8c=users[_0x4202c7(0x90)];else{if(_0x4e96e8[0x0][_0x4202c7(0x7c)]==_0x4202c7(0x7b))var _0xf3c8c=users['French'];else{if(_0x4e96e8[0x0][_0x4202c7(0x7c)]==_0x4202c7(0xa9))var _0xf3c8c=users['Portuguese'];else{if(_0x4e96e8[0x0][_0x4202c7(0x7c)]=='Chinese')var _0xf3c8c=users[_0x4202c7(0x91)];else{if(_0x4e96e8[0x0][_0x4202c7(0x7c)]=='Arabic\x20(ae)')var _0xf3c8c=users[_0x4202c7(0x6b)];}}}}}}}_0x5adb35[_0x4202c7(0x73)](_0x4202c7(0x84),{'success':_0x1c518a['flash'](_0x4202c7(0xa3)),'errors':_0x1c518a[_0x4202c7(0x6a)]('errors'),'role':_0x5398ea,'profile':_0x51cd5d,'master_shop':_0x4e96e8,'timezones':timezones,'language':_0xf3c8c});}catch(_0x116b4d){console[_0x4202c7(0xac)](_0x116b4d);}}),router[a0_0x5f231a(0xab)](a0_0x5f231a(0xb0),auth,async(_0x199cb5,_0x747d0a)=>{const _0x427d7e=a0_0x5f231a;try{console[_0x427d7e(0xac)](_0x427d7e(0x7c)),console[_0x427d7e(0xac)](_0x199cb5[_0x427d7e(0x7e)]['id']);const _0x53e150=await master_shop['findOne']();_0x53e150['language']=_0x199cb5['params']['id'],await _0x53e150['save'](),console['log'](_0x427d7e(0x72),_0x53e150);}catch(_0x1504a1){console[_0x427d7e(0xac)](_0x1504a1);}}),router[a0_0x5f231a(0x9f)](a0_0x5f231a(0x80),auth,upload['single'](a0_0x5f231a(0x9b)),async(_0x116424,_0x35ed70)=>{const _0x2c647f=a0_0x5f231a;try{const {site_title:_0x5980ff,currency:_0x53ea8b,currency_placement:_0x401758,timezone:_0x52d7db}=_0x116424[_0x2c647f(0x71)];if(_0x116424['body'][_0x2c647f(0x8b)]==0x0){const _0x391d9d=await master_shop[_0x2c647f(0xa0)]();console[_0x2c647f(0xac)]('master_shop_data',_0x391d9d);if(_0x391d9d==''){const _0x24e202=new master_shop({'site_title':_0x5980ff,'image':image,'currency':_0x53ea8b,'currency_placement':_0x401758,'timezone':_0x52d7db}),_0x480167=await _0x24e202['save']();}else _0x391d9d['site_title']=_0x5980ff,_0x391d9d[_0x2c647f(0xa5)]=_0x53ea8b,_0x391d9d['currency_placement']=_0x401758,_0x391d9d[_0x2c647f(0xad)]=_0x52d7db,await _0x391d9d['save']();}else{const _0x243e1a=_0x116424['file'][_0x2c647f(0xaa)],_0x212063=await master_shop[_0x2c647f(0xa0)]();console[_0x2c647f(0xac)](_0x2c647f(0x8e),_0x212063);if(_0x212063==null){console[_0x2c647f(0xac)]('1',_0x5980ff);const _0x19d614=new master_shop({'site_title':_0x5980ff,'image':_0x243e1a,'currency':_0x53ea8b,'currency_placement':_0x401758,'timezone':_0x52d7db}),_0x13feec=await _0x19d614[_0x2c647f(0x98)]();}else console[_0x2c647f(0xac)]('2',_0x5980ff),_0x212063[_0x2c647f(0x96)]=_0x5980ff,_0x212063[_0x2c647f(0x9b)]=_0x243e1a,_0x212063['currency']=_0x53ea8b,_0x212063[_0x2c647f(0x99)]=_0x401758,_0x212063[_0x2c647f(0xad)]=_0x52d7db,await _0x212063[_0x2c647f(0x98)]();}_0x116424[_0x2c647f(0x6a)](_0x2c647f(0xa3),'shop\x20setting\x20edit\x20successfully'),_0x35ed70[_0x2c647f(0xb2)](_0x2c647f(0x87));}catch(_0x309490){console['log'](_0x309490);}}),router[a0_0x5f231a(0xab)](a0_0x5f231a(0x78),auth,async(_0x45b7a8,_0x7833c3)=>{const _0x42c266=a0_0x5f231a;try{const {username:_0x576c22,email:_0x3ef7d1,role:_0x201491}=_0x45b7a8['user'],_0x408588=_0x45b7a8[_0x42c266(0x85)],_0x5ab9c8=await profile[_0x42c266(0xa0)]({'email':_0x408588[_0x42c266(0x8f)]}),_0x430baa=await master_shop[_0x42c266(0xb1)]();console[_0x42c266(0xac)](_0x42c266(0x72),_0x430baa);const _0x7eb0c5=await email_settings[_0x42c266(0xa0)]();console['log']('master\x20settings\x20email_data',_0x7eb0c5);if(_0x430baa[0x0][_0x42c266(0x7c)]==_0x42c266(0xa1)){var _0x4873e6=users[_0x42c266(0x93)];console[_0x42c266(0xac)](_0x4873e6);}else{if(_0x430baa[0x0][_0x42c266(0x7c)]==_0x42c266(0x95))var _0x4873e6=users[_0x42c266(0x95)];else{if(_0x430baa[0x0]['language']==_0x42c266(0x8d))var _0x4873e6=users['German'];else{if(_0x430baa[0x0][_0x42c266(0x7c)]=='Spanish')var _0x4873e6=users[_0x42c266(0x90)];else{if(_0x430baa[0x0][_0x42c266(0x7c)]==_0x42c266(0x7b))var _0x4873e6=users[_0x42c266(0x7b)];else{if(_0x430baa[0x0][_0x42c266(0x7c)]=='Portuguese\x20(BR)')var _0x4873e6=users[_0x42c266(0xa2)];else{if(_0x430baa[0x0]['language']==_0x42c266(0x91))var _0x4873e6=users[_0x42c266(0x91)];else{if(_0x430baa[0x0][_0x42c266(0x7c)]==_0x42c266(0x97))var _0x4873e6=users[_0x42c266(0x6b)];}}}}}}}_0x7833c3[_0x42c266(0x73)](_0x42c266(0x77),{'success':_0x45b7a8[_0x42c266(0x6a)](_0x42c266(0xa3)),'errors':_0x45b7a8['flash'](_0x42c266(0x94)),'role':_0x408588,'profile':_0x5ab9c8,'master_shop':_0x430baa,'email':_0x7eb0c5,'language':_0x4873e6});}catch(_0x20cafe){console[_0x42c266(0xac)](_0x20cafe);}}),router[a0_0x5f231a(0x9f)](a0_0x5f231a(0x75),auth,async(_0x4e8811,_0x54de62)=>{const _0x5de806=a0_0x5f231a;try{const {host:_0x44185b,port:_0x4d8e1b,email:_0x4e1153,password:_0x4c2d3a}=_0x4e8811['body'],_0x360bab=await email_settings['findOne']();if(_0x360bab==null){const _0x342e2a=new email_settings({'host':_0x44185b,'port':_0x4d8e1b,'email':_0x4e1153,'password':_0x4c2d3a});await _0x342e2a['save']();}else _0x360bab[_0x5de806(0x8a)]=_0x44185b,_0x360bab['port']=_0x4d8e1b,_0x360bab[_0x5de806(0x8f)]=_0x4e1153,_0x360bab[_0x5de806(0xa6)]=_0x4c2d3a,await _0x360bab[_0x5de806(0x98)]();_0x4e8811['flash'](_0x5de806(0xa3),_0x5de806(0x81)),_0x54de62[_0x5de806(0xb2)](_0x5de806(0x79));}catch(_0x19a4e4){console['log'](_0x19a4e4);}}),router[a0_0x5f231a(0xab)](a0_0x5f231a(0x86),auth,async(_0x560995,_0x530943)=>{const _0x1d268d=a0_0x5f231a;try{const {username:_0x5b1aad,email:_0x14f95c,role:_0x45c1da}=_0x560995['user'],_0x1357ce=_0x560995[_0x1d268d(0x85)],_0x21cecc=await supervisor_settings[_0x1d268d(0xb1)](),_0x50bc29=await profile['findOne']({'email':_0x1357ce[_0x1d268d(0x8f)]}),_0x131737=await master_shop[_0x1d268d(0xb1)](),_0x385038=new Date()[_0x1d268d(0x83)](_0x1d268d(0x6e),{'timeZone':_0x131737[0x0][_0x1d268d(0xad)]});if(_0x131737[0x0][_0x1d268d(0x7c)]==_0x1d268d(0xa1)){var _0x293a95=users[_0x1d268d(0x93)];console['log'](_0x293a95);}else{if(_0x131737[0x0][_0x1d268d(0x7c)]=='Hindi')var _0x293a95=users[_0x1d268d(0x95)];else{if(_0x131737[0x0]['language']==_0x1d268d(0x8d))var _0x293a95=users['German'];else{if(_0x131737[0x0]['language']==_0x1d268d(0x90))var _0x293a95=users['Spanish'];else{if(_0x131737[0x0][_0x1d268d(0x7c)]==_0x1d268d(0x7b))var _0x293a95=users[_0x1d268d(0x7b)];else{if(_0x131737[0x0][_0x1d268d(0x7c)]==_0x1d268d(0xa9))var _0x293a95=users['Portuguese'];else{if(_0x131737[0x0]['language']=='Chinese')var _0x293a95=users[_0x1d268d(0x91)];else{if(_0x131737[0x0][_0x1d268d(0x7c)]==_0x1d268d(0x97))var _0x293a95=users['Arabic'];}}}}}}}_0x530943[_0x1d268d(0x73)](_0x1d268d(0x9a),{'success':_0x560995[_0x1d268d(0x6a)](_0x1d268d(0xa3)),'errors':_0x560995[_0x1d268d(0x6a)](_0x1d268d(0x94)),'role':_0x1357ce,'profile':_0x50bc29,'master_shop':_0x131737,'supervisor_data':_0x21cecc[0x0],'timezones':timezones,'language':_0x293a95});}catch(_0x59cff3){console['log'](_0x59cff3);}}),router[a0_0x5f231a(0x9f)](a0_0x5f231a(0x86),auth,async(_0x1b51f4,_0x526436)=>{const _0x5ea6f2=a0_0x5f231a;try{const {rm_name:_0x4cb179,fg_name:_0x4a420a,rm_email:_0x395c87,fg_email:_0x590712,rm_mobilenum:_0x332653,fg_number:_0x4e3c74}=_0x1b51f4[_0x5ea6f2(0x71)],_0x4325b1=await supervisor_settings['findOne']();if(_0x4325b1==null){const _0x1acb1d=new supervisor_settings({'RMSName':_0x4cb179,'RMSEmail':_0x395c87,'RMSnumber':_0x332653,'FGSName':_0x4a420a,'FGSEmail':_0x590712,'FGSnumber':_0x4e3c74});await _0x1acb1d[_0x5ea6f2(0x98)]();}else _0x4325b1[_0x5ea6f2(0x89)]=_0x4cb179,_0x4325b1[_0x5ea6f2(0xa8)]=_0x395c87,_0x4325b1[_0x5ea6f2(0x92)]=_0x332653,_0x4325b1[_0x5ea6f2(0x9c)]=_0x4a420a,_0x4325b1[_0x5ea6f2(0xa4)]=_0x590712,_0x4325b1[_0x5ea6f2(0x82)]=_0x4e3c74,await _0x4325b1[_0x5ea6f2(0x98)]();_0x1b51f4[_0x5ea6f2(0x6a)](_0x5ea6f2(0xa3),_0x5ea6f2(0x81)),_0x526436['redirect'](_0x5ea6f2(0x9d));}catch(_0x45525d){console[_0x5ea6f2(0xac)](_0x45525d);}}),module['exports']=router;