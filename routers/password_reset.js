const a0_0x4c02ea=a0_0x2a71;(function(_0x184da1,_0x37b045){const _0x2136d1=a0_0x2a71,_0x4995c2=_0x184da1();while(!![]){try{const _0x36b628=parseInt(_0x2136d1(0x174))/0x1+parseInt(_0x2136d1(0x1ab))/0x2*(-parseInt(_0x2136d1(0x178))/0x3)+-parseInt(_0x2136d1(0x18d))/0x4+parseInt(_0x2136d1(0x180))/0x5+-parseInt(_0x2136d1(0x1a1))/0x6+-parseInt(_0x2136d1(0x18c))/0x7*(-parseInt(_0x2136d1(0x1a3))/0x8)+parseInt(_0x2136d1(0x19e))/0x9;if(_0x36b628===_0x37b045)break;else _0x4995c2['push'](_0x4995c2['shift']());}catch(_0xbf83dd){_0x4995c2['push'](_0x4995c2['shift']());}}}(a0_0x2b69,0xe38b1));const express=require(a0_0x4c02ea(0x197)),app=express(),router=express[a0_0x4c02ea(0x177)](),bcrypt=require(a0_0x4c02ea(0x1b2)),{sing_up,staff,profile,master_shop,email_settings}=require('../models/all_models'),auth=require(a0_0x4c02ea(0x182)),nodemailer=require(a0_0x4c02ea(0x1a0));function a0_0x2b69(){const _0x382aa7=['<p>Hello,\x20<br>\x20We\x20have\x20sent\x20you\x20this\x20email\x20in\x20response\x20to\x20your\x20request\x20to\x20reset\x20please\x20copy\x20this\x20code\x20<h1><b>','True','Password\x20Reset\x20-\x20','errors','/code/','body','<hr\x20class=\x22my-3\x22>','email_code','</body></html>','password','Error\x20Occurs','createTransport','json','save','45370ycnSlV','/upload/','error','Router','6KYcEbs','port','</h5>','Email\x20sent\x20successfully','Email\x20Not\x20Found\x20please\x20check\x20your\x20email','/../public','redirect','site_title','1000095FcaRXI','log','../middleware/auth','exports','<h5>','isUsed','host','/code_password/','length','ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>',',\x20<br>Your\x20password\x20has\x20been\x20successfully\x20reset.\x20You\x20can\x20now\x20log\x20in\x20with\x20your\x20new\x20password.</p>','7DpkSdh','5555148TlsSDw','code','random','</head><body>','findOne','</div>','find','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','/view','sendMail','express','hash','Password\x20Successfuly\x20Reset\x20-\x20','False','<p>Hello\x20','/login/','floor','28863963zgHZiU','image','nodemailer','4042998YeMCum','success','1648024ASnwTP','post','<html><head><title></title>','name','<div>','get','render','/forgotPassword/code','663862EqTRqS','</b></h1></p>','Logo.png','email','<strong>\x20Regards\x20</strong>','flash','logo','bcryptjs'];a0_0x2b69=function(){return _0x382aa7;};return a0_0x2b69();}function a0_0x2a71(_0x4fb846,_0x535e4e){const _0x2b69ac=a0_0x2b69();return a0_0x2a71=function(_0x2a71d9,_0x44ef5){_0x2a71d9=_0x2a71d9-0x169;let _0x2c0868=_0x2b69ac[_0x2a71d9];return _0x2c0868;},a0_0x2a71(_0x4fb846,_0x535e4e);}router['get'](a0_0x4c02ea(0x195),async(_0x284609,_0x46cbdb)=>{const _0x1fca42=a0_0x4c02ea,_0x31a634=await master_shop[_0x1fca42(0x193)]();_0x46cbdb[_0x1fca42(0x1a9)]('email_reset',{'success':_0x284609[_0x1fca42(0x1b0)]('success'),'errors':_0x284609[_0x1fca42(0x1b0)](_0x1fca42(0x169)),'master_shop':_0x31a634});});function generateRandomAlphanumericString(_0x3231cc=0x6){const _0x3d3310=a0_0x4c02ea,_0x3381d1=_0x3d3310(0x189);let _0x5a9821='';for(let _0x5b26ab=0x0;_0x5b26ab<_0x3231cc;_0x5b26ab++){const _0x580ea0=Math[_0x3d3310(0x19d)](Math[_0x3d3310(0x18f)]()*_0x3381d1[_0x3d3310(0x188)]);_0x5a9821+=_0x3381d1[_0x580ea0];}return _0x5a9821;}router[a0_0x4c02ea(0x1a4)](a0_0x4c02ea(0x195),async(_0x13d0de,_0x16eef6)=>{const _0x491206=a0_0x4c02ea,{email:_0x5807aa}=_0x13d0de[_0x491206(0x16b)],_0x4c9b58=await sing_up[_0x491206(0x191)]({'email':_0x5807aa});var _0x12f883=generateRandomAlphanumericString();const _0xcc409f=await bcrypt['hash'](_0x12f883,0xa);if(_0x4c9b58){_0x4c9b58[_0x491206(0x18e)]=_0x12f883,_0x4c9b58['isUsed']=_0x491206(0x19a);const _0x150572=_0x4c9b58[_0x491206(0x173)](),_0x58dee4=await master_shop[_0x491206(0x193)](),_0x1497bf=await email_settings[_0x491206(0x191)]();let _0x11336e=nodemailer[_0x491206(0x171)]({'host':_0x1497bf[_0x491206(0x186)],'port':Number(_0x1497bf[_0x491206(0x179)]),'secure':![],'auth':{'user':_0x1497bf[_0x491206(0x1ae)],'pass':_0x1497bf[_0x491206(0x16f)]}}),_0x1a3b18={'from':_0x1497bf[_0x491206(0x1ae)],'to':_0x4c9b58['email'],'subject':_0x491206(0x1b5)+_0x58dee4[0x0][_0x491206(0x17f)],'attachments':[{'filename':_0x491206(0x1ad),'path':__dirname+_0x491206(0x17d)+_0x491206(0x175)+_0x58dee4[0x0][_0x491206(0x19f)],'cid':_0x491206(0x1b1)}],'html':'<!DOCTYPE\x20html>'+_0x491206(0x1a5)+_0x491206(0x190)+_0x491206(0x1a7)+_0x491206(0x18a)+_0x491206(0x1a7)+_0x491206(0x194)+_0x491206(0x192)+_0x491206(0x192)+_0x491206(0x1a7)+_0x491206(0x1b3)+_0x12f883+_0x491206(0x1ac)+_0x491206(0x192)+_0x491206(0x16c)+_0x491206(0x1a7)+_0x491206(0x1af)+_0x491206(0x184)+_0x58dee4[0x0][_0x491206(0x17f)]+_0x491206(0x17a)+_0x491206(0x192)+'</div>'+'</body></html>'};_0x11336e[_0x491206(0x196)](_0x1a3b18,function(_0x59ffc8,_0x29b69e){const _0x1a887c=_0x491206;_0x59ffc8?(console['log'](_0x59ffc8),console[_0x1a887c(0x181)]('Error\x20Occurs')):console[_0x1a887c(0x181)](_0x1a887c(0x17b));}),_0x16eef6[_0x491206(0x17e)]('/forgotPassword/code/');}else _0x13d0de[_0x491206(0x1b0)](_0x491206(0x176),'Email\x20Not\x20Found\x20please\x20check\x20your\x20email'),_0x16eef6[_0x491206(0x17e)]('/forgotPassword/view');}),router[a0_0x4c02ea(0x1a8)](a0_0x4c02ea(0x16a),async(_0x84cf80,_0x2ea1cc)=>{const _0x195538=a0_0x4c02ea,_0x553c64=await master_shop[_0x195538(0x193)]();_0x2ea1cc[_0x195538(0x1a9)](_0x195538(0x16d),{'success':_0x84cf80[_0x195538(0x1b0)](_0x195538(0x1a2)),'errors':_0x84cf80[_0x195538(0x1b0)]('errors'),'master_shop':_0x553c64});}),router[a0_0x4c02ea(0x1a4)](a0_0x4c02ea(0x16a),async(_0x595cdc,_0x226a88)=>{const _0x54411e=a0_0x4c02ea,{code:_0x5a7383}=_0x595cdc[_0x54411e(0x16b)],_0x3c1ab7=await sing_up[_0x54411e(0x193)]({'code':_0x5a7383});console['log'](_0x3c1ab7[_0x54411e(0x188)]),_0x226a88[_0x54411e(0x172)](_0x3c1ab7);}),router[a0_0x4c02ea(0x1a4)](a0_0x4c02ea(0x187),async(_0x4dd6bf,_0x53501c)=>{const _0x1ad2fb=a0_0x4c02ea,{codex:_0x23aa65,password:_0x2981f2,cpassword:_0x25895a,email:_0x5b9a7e}=_0x4dd6bf[_0x1ad2fb(0x16b)],_0x5ac212=await sing_up[_0x1ad2fb(0x191)]({'code':_0x23aa65,'email':_0x5b9a7e,'isUsed':_0x1ad2fb(0x19a)}),_0x37a7e5=await bcrypt[_0x1ad2fb(0x198)](_0x2981f2,0xa);if(_0x5ac212){_0x5ac212[_0x1ad2fb(0x16f)]=_0x37a7e5,_0x5ac212[_0x1ad2fb(0x185)]=_0x1ad2fb(0x1b4);const _0x18be03=_0x5ac212[_0x1ad2fb(0x173)](),_0x292d0f=await master_shop[_0x1ad2fb(0x193)](),_0x992f21=await email_settings['findOne']();let _0x9f245c=nodemailer[_0x1ad2fb(0x171)]({'host':_0x992f21[_0x1ad2fb(0x186)],'port':Number(_0x992f21['port']),'secure':![],'auth':{'user':_0x992f21['email'],'pass':_0x992f21['password']}}),_0x1f5743={'from':_0x992f21[_0x1ad2fb(0x1ae)],'to':_0x5ac212[_0x1ad2fb(0x1ae)],'subject':_0x1ad2fb(0x199)+_0x292d0f[0x0]['site_title'],'attachments':[{'filename':'Logo.png','path':__dirname+_0x1ad2fb(0x17d)+_0x1ad2fb(0x175)+_0x292d0f[0x0][_0x1ad2fb(0x19f)],'cid':_0x1ad2fb(0x1b1)}],'html':'<!DOCTYPE\x20html>'+_0x1ad2fb(0x1a5)+'</head><body>'+_0x1ad2fb(0x1a7)+_0x1ad2fb(0x18a)+'<div>'+_0x1ad2fb(0x194)+_0x1ad2fb(0x192)+_0x1ad2fb(0x192)+'<div>'+_0x1ad2fb(0x19b)+_0x5ac212[_0x1ad2fb(0x1a6)]+_0x1ad2fb(0x18b)+_0x1ad2fb(0x192)+_0x1ad2fb(0x16c)+_0x1ad2fb(0x1a7)+_0x1ad2fb(0x1af)+_0x1ad2fb(0x184)+_0x292d0f[0x0][_0x1ad2fb(0x17f)]+_0x1ad2fb(0x17a)+_0x1ad2fb(0x192)+'</div>'+_0x1ad2fb(0x16e)};_0x9f245c['sendMail'](_0x1f5743,function(_0x3addfa,_0x22f44a){const _0x3d2212=_0x1ad2fb;_0x3addfa?(console[_0x3d2212(0x181)](_0x3addfa),console[_0x3d2212(0x181)](_0x3d2212(0x170))):console[_0x3d2212(0x181)](_0x3d2212(0x17b));}),_0x53501c[_0x1ad2fb(0x17e)](_0x1ad2fb(0x19c));}else _0x4dd6bf[_0x1ad2fb(0x1b0)](_0x1ad2fb(0x176),_0x1ad2fb(0x17c)),_0x53501c['redirect'](_0x1ad2fb(0x1aa));}),module[a0_0x4c02ea(0x183)]=router;