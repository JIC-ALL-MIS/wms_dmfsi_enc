const a0_0x15d8c0=a0_0x5b0e;(function(_0x510a14,_0x3b2da1){const _0x354c6d=a0_0x5b0e,_0x22ca2a=_0x510a14();while(!![]){try{const _0xe6e6cb=parseInt(_0x354c6d(0x12b))/0x1*(parseInt(_0x354c6d(0x13c))/0x2)+parseInt(_0x354c6d(0x139))/0x3*(parseInt(_0x354c6d(0x149))/0x4)+-parseInt(_0x354c6d(0x166))/0x5+-parseInt(_0x354c6d(0x138))/0x6+-parseInt(_0x354c6d(0x155))/0x7*(parseInt(_0x354c6d(0x134))/0x8)+parseInt(_0x354c6d(0x165))/0x9*(parseInt(_0x354c6d(0x125))/0xa)+parseInt(_0x354c6d(0x13f))/0xb*(parseInt(_0x354c6d(0x141))/0xc);if(_0xe6e6cb===_0x3b2da1)break;else _0x22ca2a['push'](_0x22ca2a['shift']());}catch(_0x5c1616){_0x22ca2a['push'](_0x22ca2a['shift']());}}}(a0_0x54b9,0xdb559));const express=require('express'),app=express(),router=express[a0_0x15d8c0(0x16d)](),bcrypt=require(a0_0x15d8c0(0x158)),{sing_up,staff,profile,master_shop,email_settings}=require(a0_0x15d8c0(0x16f)),auth=require('../middleware/auth'),nodemailer=require('nodemailer');function a0_0x54b9(){const _0x124eb0=['email','json','<!DOCTYPE\x20html>','save','103760wHYphX','length','<div>','/view','10661292zcEqXs','352059mwoCRt','findOne','<p>Hello\x20','295958WWPgNl','site_title','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','55SPeHTT','find','3665244TMSjHn','exports','redirect','<h5>','isUsed','True','email_code','/upload/','28mtacTe','/code_password/','</div>','render','Password\x20Successfuly\x20Reset\x20-\x20','success','<hr\x20class=\x22my-3\x22>','errors','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','post','get','Logo.png','315CXFzSB','<p>Hello,\x20<br>\x20We\x20have\x20sent\x20you\x20this\x20email\x20in\x20response\x20to\x20your\x20request\x20to\x20reset\x20please\x20copy\x20this\x20code\x20<h1><b>','Email\x20Not\x20Found\x20please\x20check\x20your\x20email','bcryptjs','ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789','/forgotPassword/code','logo','body','</body></html>','flash','error','</h5>','sendMail','/../public','/code/','False','9EgHPey','197870EfHcOZ','password',',\x20<br>Your\x20password\x20has\x20been\x20successfully\x20reset.\x20You\x20can\x20now\x20log\x20in\x20with\x20your\x20new\x20password.</p>','<strong>\x20Regards\x20</strong>','</b></h1></p>','host','port','Router','Password\x20Reset\x20-\x20','../models/all_models','log','619690rBjGIO','Email\x20sent\x20successfully','image','hash','createTransport','Error\x20Occurs','6fdnAHl','floor','/login/','<html><head><title></title>','code'];a0_0x54b9=function(){return _0x124eb0;};return a0_0x54b9();}router[a0_0x15d8c0(0x153)](a0_0x15d8c0(0x137),async(_0x841cf7,_0x37bbf9)=>{const _0x2d343b=a0_0x15d8c0,_0xece55d=await master_shop[_0x2d343b(0x140)]();_0x37bbf9[_0x2d343b(0x14c)]('email_reset',{'success':_0x841cf7[_0x2d343b(0x15e)](_0x2d343b(0x14e)),'errors':_0x841cf7[_0x2d343b(0x15e)]('errors'),'master_shop':_0xece55d});});function generateRandomAlphanumericString(_0x23ce9d=0x6){const _0x157e5e=a0_0x15d8c0,_0x4f0b9a=_0x157e5e(0x159);let _0x47f38b='';for(let _0x4a4f5b=0x0;_0x4a4f5b<_0x23ce9d;_0x4a4f5b++){const _0x10c7f5=Math[_0x157e5e(0x12c)](Math['random']()*_0x4f0b9a[_0x157e5e(0x135)]);_0x47f38b+=_0x4f0b9a[_0x10c7f5];}return _0x47f38b;}function a0_0x5b0e(_0xafe30,_0xd7dfca){const _0x54b951=a0_0x54b9();return a0_0x5b0e=function(_0x5b0e84,_0x121209){_0x5b0e84=_0x5b0e84-0x124;let _0x5aef41=_0x54b951[_0x5b0e84];return _0x5aef41;},a0_0x5b0e(_0xafe30,_0xd7dfca);}router[a0_0x15d8c0(0x152)](a0_0x15d8c0(0x137),async(_0x3e4e03,_0x764e16)=>{const _0x46cb6f=a0_0x15d8c0,{email:_0x4f95d0}=_0x3e4e03['body'],_0x205c09=await sing_up[_0x46cb6f(0x13a)]({'email':_0x4f95d0});var _0x18b062=generateRandomAlphanumericString();const _0x36d2ee=await bcrypt[_0x46cb6f(0x128)](_0x18b062,0xa);if(_0x205c09){_0x205c09[_0x46cb6f(0x12f)]=_0x18b062,_0x205c09[_0x46cb6f(0x145)]=_0x46cb6f(0x164);const _0x58db01=_0x205c09[_0x46cb6f(0x133)](),_0x1cb749=await master_shop[_0x46cb6f(0x140)](),_0x29da7b=await email_settings[_0x46cb6f(0x13a)]();let _0xdaa82=nodemailer[_0x46cb6f(0x129)]({'host':_0x29da7b['host'],'port':Number(_0x29da7b['port']),'secure':![],'auth':{'user':_0x29da7b[_0x46cb6f(0x130)],'pass':_0x29da7b[_0x46cb6f(0x167)]}}),_0x1e9a46={'from':_0x29da7b['email'],'to':_0x205c09[_0x46cb6f(0x130)],'subject':_0x46cb6f(0x16e)+_0x1cb749[0x0][_0x46cb6f(0x13d)],'attachments':[{'filename':_0x46cb6f(0x154),'path':__dirname+_0x46cb6f(0x162)+_0x46cb6f(0x148)+_0x1cb749[0x0][_0x46cb6f(0x127)],'cid':'logo'}],'html':_0x46cb6f(0x132)+_0x46cb6f(0x12e)+'</head><body>'+_0x46cb6f(0x136)+_0x46cb6f(0x151)+_0x46cb6f(0x136)+_0x46cb6f(0x13e)+_0x46cb6f(0x14b)+'</div>'+_0x46cb6f(0x136)+_0x46cb6f(0x156)+_0x18b062+_0x46cb6f(0x16a)+_0x46cb6f(0x14b)+_0x46cb6f(0x14f)+_0x46cb6f(0x136)+_0x46cb6f(0x169)+_0x46cb6f(0x144)+_0x1cb749[0x0]['site_title']+_0x46cb6f(0x160)+'</div>'+'</div>'+_0x46cb6f(0x15d)};_0xdaa82[_0x46cb6f(0x161)](_0x1e9a46,function(_0x39c313,_0x3bfbe0){const _0x1c0a3d=_0x46cb6f;_0x39c313?(console[_0x1c0a3d(0x124)](_0x39c313),console[_0x1c0a3d(0x124)](_0x1c0a3d(0x12a))):console['log']('Email\x20sent\x20successfully');}),_0x764e16['redirect']('/forgotPassword/code/');}else _0x3e4e03[_0x46cb6f(0x15e)](_0x46cb6f(0x15f),_0x46cb6f(0x157)),_0x764e16[_0x46cb6f(0x143)]('/forgotPassword/view');}),router[a0_0x15d8c0(0x153)](a0_0x15d8c0(0x163),async(_0x5e45f4,_0x53e8b9)=>{const _0x170a74=a0_0x15d8c0,_0x240e0f=await master_shop['find']();_0x53e8b9[_0x170a74(0x14c)](_0x170a74(0x147),{'success':_0x5e45f4[_0x170a74(0x15e)]('success'),'errors':_0x5e45f4[_0x170a74(0x15e)](_0x170a74(0x150)),'master_shop':_0x240e0f});}),router[a0_0x15d8c0(0x152)](a0_0x15d8c0(0x163),async(_0x5c7342,_0x465fc9)=>{const _0x66a81b=a0_0x15d8c0,{code:_0x57f0a1}=_0x5c7342[_0x66a81b(0x15c)],_0x30158f=await sing_up[_0x66a81b(0x140)]({'code':_0x57f0a1});console[_0x66a81b(0x124)](_0x30158f['length']),_0x465fc9[_0x66a81b(0x131)](_0x30158f);}),router[a0_0x15d8c0(0x152)](a0_0x15d8c0(0x14a),async(_0x10f7d8,_0x189db5)=>{const _0x3c8fc6=a0_0x15d8c0,{codex:_0x5137b1,password:_0x47a694,cpassword:_0xc39e57,email:_0x5aea05}=_0x10f7d8[_0x3c8fc6(0x15c)],_0x46e367=await sing_up[_0x3c8fc6(0x13a)]({'code':_0x5137b1,'email':_0x5aea05,'isUsed':_0x3c8fc6(0x164)}),_0x1c96c7=await bcrypt[_0x3c8fc6(0x128)](_0x47a694,0xa);if(_0x46e367){_0x46e367[_0x3c8fc6(0x167)]=_0x1c96c7,_0x46e367['isUsed']=_0x3c8fc6(0x146);const _0x2247b0=_0x46e367[_0x3c8fc6(0x133)](),_0x432474=await master_shop[_0x3c8fc6(0x140)](),_0x40e802=await email_settings[_0x3c8fc6(0x13a)]();let _0x78fbc5=nodemailer[_0x3c8fc6(0x129)]({'host':_0x40e802[_0x3c8fc6(0x16b)],'port':Number(_0x40e802[_0x3c8fc6(0x16c)]),'secure':![],'auth':{'user':_0x40e802[_0x3c8fc6(0x130)],'pass':_0x40e802[_0x3c8fc6(0x167)]}}),_0x318ac5={'from':_0x40e802[_0x3c8fc6(0x130)],'to':_0x46e367['email'],'subject':_0x3c8fc6(0x14d)+_0x432474[0x0]['site_title'],'attachments':[{'filename':'Logo.png','path':__dirname+_0x3c8fc6(0x162)+_0x3c8fc6(0x148)+_0x432474[0x0][_0x3c8fc6(0x127)],'cid':_0x3c8fc6(0x15b)}],'html':_0x3c8fc6(0x132)+_0x3c8fc6(0x12e)+'</head><body>'+_0x3c8fc6(0x136)+'<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>'+_0x3c8fc6(0x136)+_0x3c8fc6(0x13e)+_0x3c8fc6(0x14b)+'</div>'+_0x3c8fc6(0x136)+_0x3c8fc6(0x13b)+_0x46e367['name']+_0x3c8fc6(0x168)+_0x3c8fc6(0x14b)+'<hr\x20class=\x22my-3\x22>'+_0x3c8fc6(0x136)+'<strong>\x20Regards\x20</strong>'+_0x3c8fc6(0x144)+_0x432474[0x0][_0x3c8fc6(0x13d)]+_0x3c8fc6(0x160)+_0x3c8fc6(0x14b)+_0x3c8fc6(0x14b)+_0x3c8fc6(0x15d)};_0x78fbc5[_0x3c8fc6(0x161)](_0x318ac5,function(_0xe5d3e1,_0x15ace1){const _0x39b55c=_0x3c8fc6;_0xe5d3e1?(console[_0x39b55c(0x124)](_0xe5d3e1),console[_0x39b55c(0x124)](_0x39b55c(0x12a))):console[_0x39b55c(0x124)](_0x39b55c(0x126));}),_0x189db5['redirect'](_0x3c8fc6(0x12d));}else _0x10f7d8['flash'](_0x3c8fc6(0x15f),_0x3c8fc6(0x157)),_0x189db5['redirect'](_0x3c8fc6(0x15a));}),module[a0_0x15d8c0(0x142)]=router;