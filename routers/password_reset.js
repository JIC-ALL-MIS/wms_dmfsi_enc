const a0_0x2b2cd0=a0_0x8e21;(function(_0x5b0bd7,_0x58bf73){const _0xc56c24=a0_0x8e21,_0x282d3d=_0x5b0bd7();while(!![]){try{const _0x2badce=parseInt(_0xc56c24(0x180))/0x1*(parseInt(_0xc56c24(0x16d))/0x2)+parseInt(_0xc56c24(0x187))/0x3*(-parseInt(_0xc56c24(0x15d))/0x4)+-parseInt(_0xc56c24(0x16b))/0x5*(-parseInt(_0xc56c24(0x1a1))/0x6)+parseInt(_0xc56c24(0x17f))/0x7*(-parseInt(_0xc56c24(0x186))/0x8)+-parseInt(_0xc56c24(0x184))/0x9+parseInt(_0xc56c24(0x192))/0xa*(-parseInt(_0xc56c24(0x175))/0xb)+parseInt(_0xc56c24(0x19b))/0xc*(parseInt(_0xc56c24(0x170))/0xd);if(_0x2badce===_0x58bf73)break;else _0x282d3d['push'](_0x282d3d['shift']());}catch(_0x40061a){_0x282d3d['push'](_0x282d3d['shift']());}}}(a0_0x2ef9,0xbeab8));const express=require(a0_0x2b2cd0(0x158)),app=express(),router=express['Router'](),bcrypt=require('bcryptjs'),{sing_up,staff,profile,master_shop,email_settings}=require(a0_0x2b2cd0(0x18c)),auth=require(a0_0x2b2cd0(0x193)),nodemailer=require(a0_0x2b2cd0(0x17b));router['get'](a0_0x2b2cd0(0x17a),async(_0x4839fc,_0x222afa)=>{const _0x20700c=a0_0x2b2cd0,_0x4b867f=await master_shop[_0x20700c(0x18f)]();_0x222afa[_0x20700c(0x173)](_0x20700c(0x176),{'success':_0x4839fc[_0x20700c(0x172)](_0x20700c(0x168)),'errors':_0x4839fc['flash'](_0x20700c(0x19c)),'master_shop':_0x4b867f});});function generateRandomAlphanumericString(_0x57bc6a=0x6){const _0x125513=a0_0x2b2cd0,_0x5d72c9=_0x125513(0x18e);let _0x1ba312='';for(let _0x2bcd2d=0x0;_0x2bcd2d<_0x57bc6a;_0x2bcd2d++){const _0xc6d887=Math[_0x125513(0x171)](Math[_0x125513(0x161)]()*_0x5d72c9[_0x125513(0x181)]);_0x1ba312+=_0x5d72c9[_0xc6d887];}return _0x1ba312;}router['post'](a0_0x2b2cd0(0x17a),async(_0x40eca1,_0x45e78c)=>{const _0x418df4=a0_0x2b2cd0,{email:_0x256ccc}=_0x40eca1[_0x418df4(0x16a)],_0x463e16=await sing_up['findOne']({'email':_0x256ccc});var _0x2f108a=generateRandomAlphanumericString();const _0x518ef0=await bcrypt[_0x418df4(0x1a3)](_0x2f108a,0xa);if(_0x463e16){_0x463e16[_0x418df4(0x15b)]=_0x2f108a,_0x463e16['isUsed']=_0x418df4(0x199);const _0x1c2375=_0x463e16['save'](),_0x578d86=await master_shop[_0x418df4(0x18f)](),_0x364eac=await email_settings[_0x418df4(0x18b)]();let _0x40fabd=nodemailer[_0x418df4(0x163)]({'host':_0x364eac[_0x418df4(0x178)],'port':Number(_0x364eac[_0x418df4(0x169)]),'secure':![],'auth':{'user':_0x364eac[_0x418df4(0x15a)],'pass':_0x364eac[_0x418df4(0x1a0)]}}),_0x210ae4={'from':_0x364eac[_0x418df4(0x15a)],'to':_0x463e16[_0x418df4(0x15a)],'subject':_0x418df4(0x19a)+_0x578d86[0x0][_0x418df4(0x191)],'attachments':[{'filename':'Logo.png','path':__dirname+_0x418df4(0x179)+_0x418df4(0x197)+_0x578d86[0x0][_0x418df4(0x177)],'cid':'logo'}],'html':_0x418df4(0x189)+_0x418df4(0x15f)+_0x418df4(0x17c)+_0x418df4(0x194)+_0x418df4(0x16f)+_0x418df4(0x194)+_0x418df4(0x1a2)+_0x418df4(0x164)+_0x418df4(0x164)+'<div>'+_0x418df4(0x185)+_0x2f108a+_0x418df4(0x165)+'</div>'+_0x418df4(0x190)+'<div>'+_0x418df4(0x18a)+_0x418df4(0x157)+_0x578d86[0x0][_0x418df4(0x191)]+_0x418df4(0x18d)+'</div>'+'</div>'+_0x418df4(0x1a4)};_0x40fabd['sendMail'](_0x210ae4,function(_0x6f2de9,_0x149eaf){const _0x510aac=_0x418df4;_0x6f2de9?(console[_0x510aac(0x196)](_0x6f2de9),console[_0x510aac(0x196)]('Error\x20Occurs')):console['log']('Email\x20sent\x20successfully');}),_0x45e78c[_0x418df4(0x159)](_0x418df4(0x156));}else _0x40eca1[_0x418df4(0x172)](_0x418df4(0x188),'Email\x20Not\x20Found\x20please\x20check\x20your\x20email'),_0x45e78c[_0x418df4(0x159)](_0x418df4(0x162));}),router['get'](a0_0x2b2cd0(0x166),async(_0x27ab32,_0x13e649)=>{const _0x46c6e5=a0_0x2b2cd0,_0x2ca292=await master_shop[_0x46c6e5(0x18f)]();_0x13e649['render'](_0x46c6e5(0x17e),{'success':_0x27ab32['flash'](_0x46c6e5(0x168)),'errors':_0x27ab32['flash'](_0x46c6e5(0x19c)),'master_shop':_0x2ca292});}),router[a0_0x2b2cd0(0x16e)]('/code/',async(_0x4407a6,_0x553dd2)=>{const _0x357a10=a0_0x2b2cd0,{code:_0x14a1ec}=_0x4407a6[_0x357a10(0x16a)],_0x11a3c9=await sing_up[_0x357a10(0x18f)]({'code':_0x14a1ec});console[_0x357a10(0x196)](_0x11a3c9[_0x357a10(0x181)]),_0x553dd2[_0x357a10(0x19e)](_0x11a3c9);}),router['post'](a0_0x2b2cd0(0x167),async(_0x17c46d,_0x56d7b0)=>{const _0x2bca55=a0_0x2b2cd0,{codex:_0x952e46,password:_0x2b7c31,cpassword:_0x7b75,email:_0xf88cd1}=_0x17c46d[_0x2bca55(0x16a)],_0x3dd173=await sing_up[_0x2bca55(0x18b)]({'code':_0x952e46,'email':_0xf88cd1,'isUsed':_0x2bca55(0x199)}),_0x241645=await bcrypt[_0x2bca55(0x1a3)](_0x2b7c31,0xa);if(_0x3dd173){_0x3dd173[_0x2bca55(0x1a0)]=_0x241645,_0x3dd173[_0x2bca55(0x15e)]=_0x2bca55(0x183);const _0x9af774=_0x3dd173['save'](),_0x81187d=await master_shop[_0x2bca55(0x18f)](),_0x3ff855=await email_settings[_0x2bca55(0x18b)]();let _0xecd38c=nodemailer[_0x2bca55(0x163)]({'host':_0x3ff855[_0x2bca55(0x178)],'port':Number(_0x3ff855[_0x2bca55(0x169)]),'secure':![],'auth':{'user':_0x3ff855['email'],'pass':_0x3ff855[_0x2bca55(0x1a0)]}}),_0x21dc86={'from':_0x3ff855['email'],'to':_0x3dd173[_0x2bca55(0x15a)],'subject':_0x2bca55(0x182)+_0x81187d[0x0][_0x2bca55(0x191)],'attachments':[{'filename':_0x2bca55(0x16c),'path':__dirname+_0x2bca55(0x179)+_0x2bca55(0x197)+_0x81187d[0x0]['image'],'cid':_0x2bca55(0x160)}],'html':'<!DOCTYPE\x20html>'+_0x2bca55(0x15f)+_0x2bca55(0x17c)+_0x2bca55(0x194)+'<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>'+'<div>'+_0x2bca55(0x1a2)+_0x2bca55(0x164)+_0x2bca55(0x164)+_0x2bca55(0x194)+'<p>Hello\x20'+_0x3dd173[_0x2bca55(0x19d)]+_0x2bca55(0x174)+'</div>'+_0x2bca55(0x190)+_0x2bca55(0x194)+_0x2bca55(0x18a)+'<h5>'+_0x81187d[0x0]['site_title']+_0x2bca55(0x18d)+_0x2bca55(0x164)+'</div>'+'</body></html>'};_0xecd38c[_0x2bca55(0x19f)](_0x21dc86,function(_0x506d63,_0x3313da){const _0xe17391=_0x2bca55;_0x506d63?(console[_0xe17391(0x196)](_0x506d63),console['log']('Error\x20Occurs')):console[_0xe17391(0x196)](_0xe17391(0x15c));}),_0x56d7b0[_0x2bca55(0x159)](_0x2bca55(0x195));}else _0x17c46d['flash'](_0x2bca55(0x188),_0x2bca55(0x17d)),_0x56d7b0['redirect']('/forgotPassword/code');}),module[a0_0x2b2cd0(0x198)]=router;function a0_0x8e21(_0x5844a3,_0x503249){const _0x2ef9cc=a0_0x2ef9();return a0_0x8e21=function(_0x8e2145,_0x138ca7){_0x8e2145=_0x8e2145-0x156;let _0x5ad83b=_0x2ef9cc[_0x8e2145];return _0x5ad83b;},a0_0x8e21(_0x5844a3,_0x503249);}function a0_0x2ef9(){const _0x179585=['<p>Hello,\x20<br>\x20We\x20have\x20sent\x20you\x20this\x20email\x20in\x20response\x20to\x20your\x20request\x20to\x20reset\x20please\x20copy\x20this\x20code\x20<h1><b>','1272GkSfie','905802VnKjaI','error','<!DOCTYPE\x20html>','<strong>\x20Regards\x20</strong>','findOne','../models/all_models','</h5>','ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789','find','<hr\x20class=\x22my-3\x22>','site_title','74810ZPFiWA','../middleware/auth','<div>','/login/','log','/upload/','exports','False','Password\x20Reset\x20-\x20','24MkZOLC','errors','name','json','sendMail','password','30OWwPjX','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','hash','</body></html>','/forgotPassword/code/','<h5>','express','redirect','email','code','Email\x20sent\x20successfully','20AeKYuA','isUsed','<html><head><title></title>','logo','random','/forgotPassword/view','createTransport','</div>','</b></h1></p>','/code/','/code_password/','success','port','body','1427315roKnPK','Logo.png','14eEOrds','post','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','2184429guVaFk','floor','flash','render',',\x20<br>Your\x20password\x20has\x20been\x20successfully\x20reset.\x20You\x20can\x20now\x20log\x20in\x20with\x20your\x20new\x20password.</p>','88swpDId','email_reset','image','host','/../public','/view','nodemailer','</head><body>','Email\x20Not\x20Found\x20please\x20check\x20your\x20email','email_code','1379DASrdA','188659GyJSRn','length','Password\x20Successfuly\x20Reset\x20-\x20','True','6319521ENzjgs'];a0_0x2ef9=function(){return _0x179585;};return a0_0x2ef9();}