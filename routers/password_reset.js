const a0_0x4cacb5=a0_0x5082;(function(_0x26677b,_0x22b3ed){const _0x221373=a0_0x5082,_0x7f95da=_0x26677b();while(!![]){try{const _0x7bc426=parseInt(_0x221373(0x1e5))/0x1+parseInt(_0x221373(0x1ea))/0x2+-parseInt(_0x221373(0x212))/0x3*(parseInt(_0x221373(0x1dc))/0x4)+-parseInt(_0x221373(0x20c))/0x5*(parseInt(_0x221373(0x20f))/0x6)+-parseInt(_0x221373(0x1f6))/0x7*(parseInt(_0x221373(0x21a))/0x8)+parseInt(_0x221373(0x217))/0x9+-parseInt(_0x221373(0x219))/0xa*(-parseInt(_0x221373(0x1fe))/0xb);if(_0x7bc426===_0x22b3ed)break;else _0x7f95da['push'](_0x7f95da['shift']());}catch(_0x4cac3b){_0x7f95da['push'](_0x7f95da['shift']());}}}(a0_0x2b24,0x9eea5));function a0_0x2b24(){const _0x351aae=['image','</head><body>','2402190wWvAhQ','redirect','</b></h1></p>','/login/','errors','findOne','find','express','<html><head><title></title>','Email\x20Not\x20Found\x20please\x20check\x20your\x20email','logo','json','133049guMhWp','<strong>\x20Regards\x20</strong>','flash','True','password','Password\x20Reset\x20-\x20','<p>Hello,\x20<br>\x20We\x20have\x20sent\x20you\x20this\x20email\x20in\x20response\x20to\x20your\x20request\x20to\x20reset\x20please\x20copy\x20this\x20code\x20<h1><b>','</h5>','33mvOyaa','code','/forgotPassword/code/','length','<h5>','sendMail','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','Email\x20sent\x20successfully','get','email','/view','False','Logo.png','host','1390JDunmX','port','email_code','13224IZAXTv','/code_password/','error','2331Jutpse','log','<!DOCTYPE\x20html>','/upload/','<div>','1031157AExdmk','success','2053010RXQcQJ','344tCmpYZ','ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','email_reset','exports','</div>','site_title','hash','</body></html>','/code/','floor','bcryptjs','3552ijmuLV','body','/../public','Error\x20Occurs','../middleware/auth','/forgotPassword/view','createTransport','random','<p>Hello\x20','839335anwelu','save','post'];a0_0x2b24=function(){return _0x351aae;};return a0_0x2b24();}const express=require(a0_0x4cacb5(0x1f1)),app=express(),router=express['Router'](),bcrypt=require(a0_0x4cacb5(0x225)),{sing_up,staff,profile,master_shop,email_settings}=require('../models/all_models'),auth=require(a0_0x4cacb5(0x1e0)),nodemailer=require('nodemailer');router[a0_0x4cacb5(0x206)](a0_0x4cacb5(0x208),async(_0x226f4b,_0x3c06bd)=>{const _0x193cea=a0_0x4cacb5,_0x48de57=await master_shop[_0x193cea(0x1f0)]();_0x3c06bd['render'](_0x193cea(0x21d),{'success':_0x226f4b['flash'](_0x193cea(0x218)),'errors':_0x226f4b[_0x193cea(0x1f8)](_0x193cea(0x1ee)),'master_shop':_0x48de57});});function a0_0x5082(_0x277b3b,_0xceb6c6){const _0x2b247a=a0_0x2b24();return a0_0x5082=function(_0x5082b9,_0x9b0c45){_0x5082b9=_0x5082b9-0x1dc;let _0x10d6d0=_0x2b247a[_0x5082b9];return _0x10d6d0;},a0_0x5082(_0x277b3b,_0xceb6c6);}function generateRandomAlphanumericString(_0x467f56=0x6){const _0x47c6a6=a0_0x4cacb5,_0x3c5040=_0x47c6a6(0x21b);let _0x4b5cd6='';for(let _0x29ae52=0x0;_0x29ae52<_0x467f56;_0x29ae52++){const _0x22409d=Math[_0x47c6a6(0x224)](Math[_0x47c6a6(0x1e3)]()*_0x3c5040['length']);_0x4b5cd6+=_0x3c5040[_0x22409d];}return _0x4b5cd6;}router[a0_0x4cacb5(0x1e7)]('/view',async(_0x2031fe,_0x2c4751)=>{const _0x4e6c06=a0_0x4cacb5,{email:_0x33b9ad}=_0x2031fe[_0x4e6c06(0x1dd)],_0x45f379=await sing_up[_0x4e6c06(0x1ef)]({'email':_0x33b9ad});var _0x22e4f9=generateRandomAlphanumericString();const _0x11fa6f=await bcrypt[_0x4e6c06(0x221)](_0x22e4f9,0xa);if(_0x45f379){_0x45f379[_0x4e6c06(0x1ff)]=_0x22e4f9,_0x45f379['isUsed']=_0x4e6c06(0x209);const _0x222dae=_0x45f379[_0x4e6c06(0x1e6)](),_0x38f9e9=await master_shop[_0x4e6c06(0x1f0)](),_0x589123=await email_settings[_0x4e6c06(0x1ef)]();let _0x395e5f=nodemailer[_0x4e6c06(0x1e2)]({'host':_0x589123[_0x4e6c06(0x20b)],'port':Number(_0x589123[_0x4e6c06(0x20d)]),'secure':![],'auth':{'user':_0x589123[_0x4e6c06(0x207)],'pass':_0x589123[_0x4e6c06(0x1fa)]}}),_0x298996={'from':_0x589123[_0x4e6c06(0x207)],'to':_0x45f379[_0x4e6c06(0x207)],'subject':_0x4e6c06(0x1fb)+_0x38f9e9[0x0]['site_title'],'attachments':[{'filename':_0x4e6c06(0x20a),'path':__dirname+'/../public'+_0x4e6c06(0x215)+_0x38f9e9[0x0][_0x4e6c06(0x1e8)],'cid':_0x4e6c06(0x1f4)}],'html':_0x4e6c06(0x214)+_0x4e6c06(0x1f2)+_0x4e6c06(0x1e9)+_0x4e6c06(0x216)+'<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>'+_0x4e6c06(0x216)+'<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>'+_0x4e6c06(0x21f)+_0x4e6c06(0x21f)+_0x4e6c06(0x216)+_0x4e6c06(0x1fc)+_0x22e4f9+_0x4e6c06(0x1ec)+'</div>'+'<hr\x20class=\x22my-3\x22>'+_0x4e6c06(0x216)+_0x4e6c06(0x1f7)+_0x4e6c06(0x202)+_0x38f9e9[0x0][_0x4e6c06(0x220)]+_0x4e6c06(0x1fd)+_0x4e6c06(0x21f)+_0x4e6c06(0x21f)+_0x4e6c06(0x222)};_0x395e5f[_0x4e6c06(0x203)](_0x298996,function(_0x5d5e00,_0x5a1a9d){const _0x50733a=_0x4e6c06;_0x5d5e00?(console[_0x50733a(0x213)](_0x5d5e00),console[_0x50733a(0x213)](_0x50733a(0x1df))):console['log'](_0x50733a(0x205));}),_0x2c4751[_0x4e6c06(0x1eb)](_0x4e6c06(0x200));}else _0x2031fe[_0x4e6c06(0x1f8)](_0x4e6c06(0x211),_0x4e6c06(0x1f3)),_0x2c4751[_0x4e6c06(0x1eb)](_0x4e6c06(0x1e1));}),router[a0_0x4cacb5(0x206)](a0_0x4cacb5(0x223),async(_0x3ca07c,_0x21b222)=>{const _0x4bd19b=a0_0x4cacb5,_0x59cd34=await master_shop[_0x4bd19b(0x1f0)]();_0x21b222['render'](_0x4bd19b(0x20e),{'success':_0x3ca07c[_0x4bd19b(0x1f8)](_0x4bd19b(0x218)),'errors':_0x3ca07c[_0x4bd19b(0x1f8)](_0x4bd19b(0x1ee)),'master_shop':_0x59cd34});}),router['post'](a0_0x4cacb5(0x223),async(_0x337bb7,_0x5b78c9)=>{const _0x740ce1=a0_0x4cacb5,{code:_0x5256dd}=_0x337bb7[_0x740ce1(0x1dd)],_0x29c8e4=await sing_up[_0x740ce1(0x1f0)]({'code':_0x5256dd});console[_0x740ce1(0x213)](_0x29c8e4[_0x740ce1(0x201)]),_0x5b78c9[_0x740ce1(0x1f5)](_0x29c8e4);}),router[a0_0x4cacb5(0x1e7)](a0_0x4cacb5(0x210),async(_0x36997a,_0x5ec99c)=>{const _0x4c128b=a0_0x4cacb5,{codex:_0x307017,password:_0x39a0b5,cpassword:_0x19e0c3,email:_0x133f22}=_0x36997a[_0x4c128b(0x1dd)],_0xc4b843=await sing_up[_0x4c128b(0x1ef)]({'code':_0x307017,'email':_0x133f22,'isUsed':_0x4c128b(0x209)}),_0x279277=await bcrypt['hash'](_0x39a0b5,0xa);if(_0xc4b843){_0xc4b843[_0x4c128b(0x1fa)]=_0x279277,_0xc4b843['isUsed']=_0x4c128b(0x1f9);const _0x16d6d2=_0xc4b843[_0x4c128b(0x1e6)](),_0xc9e05a=await master_shop[_0x4c128b(0x1f0)](),_0x5d6ed3=await email_settings['findOne']();let _0x2115ed=nodemailer[_0x4c128b(0x1e2)]({'host':_0x5d6ed3[_0x4c128b(0x20b)],'port':Number(_0x5d6ed3[_0x4c128b(0x20d)]),'secure':![],'auth':{'user':_0x5d6ed3[_0x4c128b(0x207)],'pass':_0x5d6ed3[_0x4c128b(0x1fa)]}}),_0x62fd18={'from':_0x5d6ed3[_0x4c128b(0x207)],'to':_0xc4b843[_0x4c128b(0x207)],'subject':'Password\x20Successfuly\x20Reset\x20-\x20'+_0xc9e05a[0x0][_0x4c128b(0x220)],'attachments':[{'filename':_0x4c128b(0x20a),'path':__dirname+_0x4c128b(0x1de)+_0x4c128b(0x215)+_0xc9e05a[0x0]['image'],'cid':'logo'}],'html':_0x4c128b(0x214)+_0x4c128b(0x1f2)+_0x4c128b(0x1e9)+_0x4c128b(0x216)+_0x4c128b(0x204)+'<div>'+_0x4c128b(0x21c)+_0x4c128b(0x21f)+_0x4c128b(0x21f)+_0x4c128b(0x216)+_0x4c128b(0x1e4)+_0xc4b843['name']+',\x20<br>Your\x20password\x20has\x20been\x20successfully\x20reset.\x20You\x20can\x20now\x20log\x20in\x20with\x20your\x20new\x20password.</p>'+_0x4c128b(0x21f)+'<hr\x20class=\x22my-3\x22>'+'<div>'+_0x4c128b(0x1f7)+_0x4c128b(0x202)+_0xc9e05a[0x0][_0x4c128b(0x220)]+_0x4c128b(0x1fd)+_0x4c128b(0x21f)+_0x4c128b(0x21f)+'</body></html>'};_0x2115ed[_0x4c128b(0x203)](_0x62fd18,function(_0x397969,_0xd6264c){const _0x1620c1=_0x4c128b;_0x397969?(console[_0x1620c1(0x213)](_0x397969),console[_0x1620c1(0x213)](_0x1620c1(0x1df))):console['log'](_0x1620c1(0x205));}),_0x5ec99c[_0x4c128b(0x1eb)](_0x4c128b(0x1ed));}else _0x36997a[_0x4c128b(0x1f8)]('error',_0x4c128b(0x1f3)),_0x5ec99c[_0x4c128b(0x1eb)]('/forgotPassword/code');}),module[a0_0x4cacb5(0x21e)]=router;