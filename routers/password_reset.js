const a0_0x14215d=a0_0x342a;(function(_0x403228,_0x33c369){const _0x44f121=a0_0x342a,_0x12e91b=_0x403228();while(!![]){try{const _0x39ebf2=parseInt(_0x44f121(0x181))/0x1*(parseInt(_0x44f121(0x19e))/0x2)+-parseInt(_0x44f121(0x180))/0x3+parseInt(_0x44f121(0x187))/0x4+-parseInt(_0x44f121(0x1b7))/0x5*(parseInt(_0x44f121(0x178))/0x6)+-parseInt(_0x44f121(0x1a3))/0x7+-parseInt(_0x44f121(0x194))/0x8*(parseInt(_0x44f121(0x1a6))/0x9)+-parseInt(_0x44f121(0x183))/0xa*(-parseInt(_0x44f121(0x18a))/0xb);if(_0x39ebf2===_0x33c369)break;else _0x12e91b['push'](_0x12e91b['shift']());}catch(_0xe5c73c){_0x12e91b['push'](_0x12e91b['shift']());}}}(a0_0x5a5f,0xf0422));function a0_0x5a5f(){const _0x57bd04=['/code/','/../public','8400140qoIXgR','save','</h5>','126qhWAQn','flash','/login/','sendMail','</head><body>','Error\x20Occurs','nodemailer','<strong>\x20Regards\x20</strong>','Router','Logo.png','../models/all_models','<div>','Email\x20Not\x20Found\x20please\x20check\x20your\x20email','redirect','site_title','port','floor','5061305qNgyvj','length','/forgotPassword/view','render','express','/forgotPassword/code/','/view','body','log','6GLlikb','random','find','True','<p>Hello,\x20<br>\x20We\x20have\x20sent\x20you\x20this\x20email\x20in\x20response\x20to\x20your\x20request\x20to\x20reset\x20please\x20copy\x20this\x20code\x20<h1><b>','post','get','findOne','3482814sVkFdj','153107MvPGSG','host','13194340TRRdqV','json','<html><head><title></title>','createTransport','6988120gdPTZK','</div>','logo','22jJesjo','Email\x20sent\x20successfully','Password\x20Reset\x20-\x20','Password\x20Successfuly\x20Reset\x20-\x20','email','hash','name','errors','False','error','628760SsWKfp','success','</body></html>','image','/upload/','<hr\x20class=\x22my-3\x22>','password','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','<!DOCTYPE\x20html>','isUsed','14bXRLHJ','<h5>','email_code'];a0_0x5a5f=function(){return _0x57bd04;};return a0_0x5a5f();}const express=require(a0_0x14215d(0x173)),app=express(),router=express[a0_0x14215d(0x1ae)](),bcrypt=require('bcryptjs'),{sing_up,staff,profile,master_shop,email_settings}=require(a0_0x14215d(0x1b0)),auth=require('../middleware/auth'),nodemailer=require(a0_0x14215d(0x1ac));router[a0_0x14215d(0x17e)](a0_0x14215d(0x175),async(_0xed8013,_0xa4f4bf)=>{const _0x2e46d7=a0_0x14215d,_0x39ca1e=await master_shop[_0x2e46d7(0x17a)]();_0xa4f4bf[_0x2e46d7(0x172)]('email_reset',{'success':_0xed8013[_0x2e46d7(0x1a7)](_0x2e46d7(0x195)),'errors':_0xed8013[_0x2e46d7(0x1a7)](_0x2e46d7(0x191)),'master_shop':_0x39ca1e});});function generateRandomAlphanumericString(_0x15045c=0x6){const _0x3461a5=a0_0x14215d,_0x331c99='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';let _0x5c37f6='';for(let _0x40995a=0x0;_0x40995a<_0x15045c;_0x40995a++){const _0x48400f=Math[_0x3461a5(0x1b6)](Math[_0x3461a5(0x179)]()*_0x331c99[_0x3461a5(0x1b8)]);_0x5c37f6+=_0x331c99[_0x48400f];}return _0x5c37f6;}function a0_0x342a(_0x5ed3bb,_0x37b0fa){const _0x5a5f5e=a0_0x5a5f();return a0_0x342a=function(_0x342a40,_0x2590d1){_0x342a40=_0x342a40-0x172;let _0x295c20=_0x5a5f5e[_0x342a40];return _0x295c20;},a0_0x342a(_0x5ed3bb,_0x37b0fa);}router[a0_0x14215d(0x17d)]('/view',async(_0x45f5e3,_0x55a3dc)=>{const _0x592b2b=a0_0x14215d,{email:_0x4ce0bc}=_0x45f5e3[_0x592b2b(0x176)],_0x715d1a=await sing_up[_0x592b2b(0x17f)]({'email':_0x4ce0bc});var _0x1856dc=generateRandomAlphanumericString();const _0x4927a8=await bcrypt[_0x592b2b(0x18f)](_0x1856dc,0xa);if(_0x715d1a){_0x715d1a['code']=_0x1856dc,_0x715d1a[_0x592b2b(0x19d)]=_0x592b2b(0x192);const _0x4f8073=_0x715d1a[_0x592b2b(0x1a4)](),_0x5adf66=await master_shop[_0x592b2b(0x17a)](),_0x442cd3=await email_settings[_0x592b2b(0x17f)]();let _0x36051d=nodemailer[_0x592b2b(0x186)]({'host':_0x442cd3['host'],'port':Number(_0x442cd3['port']),'secure':![],'auth':{'user':_0x442cd3[_0x592b2b(0x18e)],'pass':_0x442cd3[_0x592b2b(0x19a)]}}),_0x5daf73={'from':_0x442cd3[_0x592b2b(0x18e)],'to':_0x715d1a['email'],'subject':_0x592b2b(0x18c)+_0x5adf66[0x0][_0x592b2b(0x1b4)],'attachments':[{'filename':_0x592b2b(0x1af),'path':__dirname+_0x592b2b(0x1a2)+_0x592b2b(0x198)+_0x5adf66[0x0][_0x592b2b(0x197)],'cid':'logo'}],'html':'<!DOCTYPE\x20html>'+_0x592b2b(0x185)+_0x592b2b(0x1aa)+'<div>'+_0x592b2b(0x19b)+_0x592b2b(0x1b1)+'<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>'+_0x592b2b(0x188)+_0x592b2b(0x188)+'<div>'+_0x592b2b(0x17c)+_0x1856dc+'</b></h1></p>'+'</div>'+'<hr\x20class=\x22my-3\x22>'+_0x592b2b(0x1b1)+_0x592b2b(0x1ad)+_0x592b2b(0x19f)+_0x5adf66[0x0][_0x592b2b(0x1b4)]+_0x592b2b(0x1a5)+'</div>'+_0x592b2b(0x188)+_0x592b2b(0x196)};_0x36051d[_0x592b2b(0x1a9)](_0x5daf73,function(_0x1b5c3a,_0x2844d1){const _0xd190d1=_0x592b2b;_0x1b5c3a?(console[_0xd190d1(0x177)](_0x1b5c3a),console[_0xd190d1(0x177)](_0xd190d1(0x1ab))):console[_0xd190d1(0x177)](_0xd190d1(0x18b));}),_0x55a3dc[_0x592b2b(0x1b3)](_0x592b2b(0x174));}else _0x45f5e3[_0x592b2b(0x1a7)](_0x592b2b(0x193),_0x592b2b(0x1b2)),_0x55a3dc[_0x592b2b(0x1b3)](_0x592b2b(0x1b9));}),router[a0_0x14215d(0x17e)](a0_0x14215d(0x1a1),async(_0xf77454,_0x184ace)=>{const _0x1c2769=a0_0x14215d,_0x6512b7=await master_shop[_0x1c2769(0x17a)]();_0x184ace[_0x1c2769(0x172)](_0x1c2769(0x1a0),{'success':_0xf77454[_0x1c2769(0x1a7)](_0x1c2769(0x195)),'errors':_0xf77454['flash']('errors'),'master_shop':_0x6512b7});}),router[a0_0x14215d(0x17d)](a0_0x14215d(0x1a1),async(_0x4650a9,_0x1c0978)=>{const _0xa2ede4=a0_0x14215d,{code:_0x2a45cd}=_0x4650a9[_0xa2ede4(0x176)],_0x15b138=await sing_up['find']({'code':_0x2a45cd});console['log'](_0x15b138[_0xa2ede4(0x1b8)]),_0x1c0978[_0xa2ede4(0x184)](_0x15b138);}),router[a0_0x14215d(0x17d)]('/code_password/',async(_0x19abad,_0x111f78)=>{const _0x5dc3dd=a0_0x14215d,{codex:_0x41e381,password:_0x5798a3,cpassword:_0x456fb2,email:_0x3c0cce}=_0x19abad[_0x5dc3dd(0x176)],_0x245a96=await sing_up[_0x5dc3dd(0x17f)]({'code':_0x41e381,'email':_0x3c0cce,'isUsed':_0x5dc3dd(0x192)}),_0x2bf3e2=await bcrypt['hash'](_0x5798a3,0xa);if(_0x245a96){_0x245a96[_0x5dc3dd(0x19a)]=_0x2bf3e2,_0x245a96[_0x5dc3dd(0x19d)]=_0x5dc3dd(0x17b);const _0x4c6a99=_0x245a96[_0x5dc3dd(0x1a4)](),_0x437b35=await master_shop[_0x5dc3dd(0x17a)](),_0xc37424=await email_settings[_0x5dc3dd(0x17f)]();let _0x33a6a7=nodemailer[_0x5dc3dd(0x186)]({'host':_0xc37424[_0x5dc3dd(0x182)],'port':Number(_0xc37424[_0x5dc3dd(0x1b5)]),'secure':![],'auth':{'user':_0xc37424[_0x5dc3dd(0x18e)],'pass':_0xc37424[_0x5dc3dd(0x19a)]}}),_0x367d46={'from':_0xc37424[_0x5dc3dd(0x18e)],'to':_0x245a96[_0x5dc3dd(0x18e)],'subject':_0x5dc3dd(0x18d)+_0x437b35[0x0][_0x5dc3dd(0x1b4)],'attachments':[{'filename':_0x5dc3dd(0x1af),'path':__dirname+_0x5dc3dd(0x1a2)+_0x5dc3dd(0x198)+_0x437b35[0x0][_0x5dc3dd(0x197)],'cid':_0x5dc3dd(0x189)}],'html':_0x5dc3dd(0x19c)+_0x5dc3dd(0x185)+_0x5dc3dd(0x1aa)+_0x5dc3dd(0x1b1)+'<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>'+_0x5dc3dd(0x1b1)+'<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>'+_0x5dc3dd(0x188)+_0x5dc3dd(0x188)+_0x5dc3dd(0x1b1)+'<p>Hello\x20'+_0x245a96[_0x5dc3dd(0x190)]+',\x20<br>Your\x20password\x20has\x20been\x20successfully\x20reset.\x20You\x20can\x20now\x20log\x20in\x20with\x20your\x20new\x20password.</p>'+'</div>'+_0x5dc3dd(0x199)+'<div>'+'<strong>\x20Regards\x20</strong>'+'<h5>'+_0x437b35[0x0]['site_title']+_0x5dc3dd(0x1a5)+_0x5dc3dd(0x188)+_0x5dc3dd(0x188)+_0x5dc3dd(0x196)};_0x33a6a7['sendMail'](_0x367d46,function(_0x345c23,_0x2a60d9){const _0x2191af=_0x5dc3dd;_0x345c23?(console['log'](_0x345c23),console[_0x2191af(0x177)](_0x2191af(0x1ab))):console['log'](_0x2191af(0x18b));}),_0x111f78['redirect'](_0x5dc3dd(0x1a8));}else _0x19abad[_0x5dc3dd(0x1a7)](_0x5dc3dd(0x193),'Email\x20Not\x20Found\x20please\x20check\x20your\x20email'),_0x111f78[_0x5dc3dd(0x1b3)]('/forgotPassword/code');}),module['exports']=router;