const a0_0x386ff1=a0_0x3c42;(function(_0x16b7a9,_0xf10682){const _0x47431d=a0_0x3c42,_0x2a2284=_0x16b7a9();while(!![]){try{const _0x40dfd9=parseInt(_0x47431d(0xa0))/0x1*(parseInt(_0x47431d(0xa9))/0x2)+parseInt(_0x47431d(0xd2))/0x3+parseInt(_0x47431d(0xae))/0x4*(-parseInt(_0x47431d(0xb1))/0x5)+parseInt(_0x47431d(0xc9))/0x6*(parseInt(_0x47431d(0xb6))/0x7)+parseInt(_0x47431d(0xbb))/0x8*(parseInt(_0x47431d(0xaa))/0x9)+parseInt(_0x47431d(0xad))/0xa+-parseInt(_0x47431d(0xdc))/0xb;if(_0x40dfd9===_0xf10682)break;else _0x2a2284['push'](_0x2a2284['shift']());}catch(_0x29f368){_0x2a2284['push'](_0x2a2284['shift']());}}}(a0_0x2881,0xd0bd1));const express=require(a0_0x386ff1(0xd4)),app=express(),router=express['Router'](),bcrypt=require(a0_0x386ff1(0xcc)),{sing_up,staff,profile,master_shop,email_settings}=require(a0_0x386ff1(0xa7)),auth=require(a0_0x386ff1(0x95)),nodemailer=require(a0_0x386ff1(0xd5));router[a0_0x386ff1(0xa3)](a0_0x386ff1(0x9d),async(_0xebebbb,_0x1a576b)=>{const _0x4e31d9=a0_0x386ff1,_0x511438=await master_shop['find']();_0x1a576b[_0x4e31d9(0x91)](_0x4e31d9(0xd7),{'success':_0xebebbb[_0x4e31d9(0xd6)](_0x4e31d9(0xc0)),'errors':_0xebebbb[_0x4e31d9(0xd6)](_0x4e31d9(0x9f)),'master_shop':_0x511438});});function generateRandomAlphanumericString(_0x1a97b2=0x6){const _0x53752c=a0_0x386ff1,_0x43b472=_0x53752c(0xdb);let _0x2412a4='';for(let _0x3ec64e=0x0;_0x3ec64e<_0x1a97b2;_0x3ec64e++){const _0x5a2b34=Math['floor'](Math['random']()*_0x43b472[_0x53752c(0xc5)]);_0x2412a4+=_0x43b472[_0x5a2b34];}return _0x2412a4;}function a0_0x3c42(_0x309179,_0x44cc05){const _0x28814a=a0_0x2881();return a0_0x3c42=function(_0x3c42e1,_0x48d4c5){_0x3c42e1=_0x3c42e1-0x8f;let _0x293e2c=_0x28814a[_0x3c42e1];return _0x293e2c;},a0_0x3c42(_0x309179,_0x44cc05);}function a0_0x2881(){const _0x53b9bd=['Password\x20Reset\x20-\x20','image','findOne','../models/all_models','site_title','327622sDUmiO','1125ucggwV','</h5>','post','6726620OiZSvE','4LRHAPV','name','password','1583105JEelJv','/../public','code','json','<p>Hello\x20','7XNSISc','isUsed','<h5>','</head><body>','/login/','101096tqDMFu','createTransport','/upload/','Email\x20Not\x20Found\x20please\x20check\x20your\x20email','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','success','<p>Hello,\x20<br>\x20We\x20have\x20sent\x20you\x20this\x20email\x20in\x20response\x20to\x20your\x20request\x20to\x20reset\x20please\x20copy\x20this\x20code\x20<h1><b>','body','<div>','Password\x20Successfuly\x20Reset\x20-\x20','length','exports','<!DOCTYPE\x20html>','/forgotPassword/code','9786720XnDdLA',',\x20<br>Your\x20password\x20has\x20been\x20successfully\x20reset.\x20You\x20can\x20now\x20log\x20in\x20with\x20your\x20new\x20password.</p>','hash','bcryptjs','port','/code/','sendMail','redirect','logo','4075926ECsXuW','</body></html>','express','nodemailer','flash','email_reset','host','Error\x20Occurs','save','ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789','57388232QbvSoR','False','/forgotPassword/code/','Email\x20sent\x20successfully','render','</div>','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','True','../middleware/auth','Logo.png','email_code','<html><head><title></title>','<hr\x20class=\x22my-3\x22>','error','/code_password/','email','/view','<strong>\x20Regards\x20</strong>','errors','7zRODJa','find','log','get'];a0_0x2881=function(){return _0x53b9bd;};return a0_0x2881();}router[a0_0x386ff1(0xac)](a0_0x386ff1(0x9d),async(_0x1efb0c,_0x346cd2)=>{const _0xd99891=a0_0x386ff1,{email:_0x563ee0}=_0x1efb0c[_0xd99891(0xc2)],_0x54bcd5=await sing_up[_0xd99891(0xa6)]({'email':_0x563ee0});var _0x577d50=generateRandomAlphanumericString();const _0x47a291=await bcrypt['hash'](_0x577d50,0xa);if(_0x54bcd5){_0x54bcd5[_0xd99891(0xb3)]=_0x577d50,_0x54bcd5['isUsed']='False';const _0x38b078=_0x54bcd5['save'](),_0x3a55f5=await master_shop[_0xd99891(0xa1)](),_0x2ad72a=await email_settings[_0xd99891(0xa6)]();let _0x2db474=nodemailer[_0xd99891(0xbc)]({'host':_0x2ad72a['host'],'port':Number(_0x2ad72a[_0xd99891(0xcd)]),'secure':![],'auth':{'user':_0x2ad72a[_0xd99891(0x9c)],'pass':_0x2ad72a[_0xd99891(0xb0)]}}),_0x28833f={'from':_0x2ad72a['email'],'to':_0x54bcd5['email'],'subject':_0xd99891(0xa4)+_0x3a55f5[0x0]['site_title'],'attachments':[{'filename':_0xd99891(0x96),'path':__dirname+_0xd99891(0xb2)+_0xd99891(0xbd)+_0x3a55f5[0x0][_0xd99891(0xa5)],'cid':_0xd99891(0xd1)}],'html':_0xd99891(0xc7)+'<html><head><title></title>'+'</head><body>'+_0xd99891(0xc3)+_0xd99891(0xbf)+_0xd99891(0xc3)+'<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>'+_0xd99891(0x92)+_0xd99891(0x92)+_0xd99891(0xc3)+_0xd99891(0xc1)+_0x577d50+'</b></h1></p>'+_0xd99891(0x92)+_0xd99891(0x99)+_0xd99891(0xc3)+'<strong>\x20Regards\x20</strong>'+_0xd99891(0xb8)+_0x3a55f5[0x0][_0xd99891(0xa8)]+_0xd99891(0xab)+_0xd99891(0x92)+_0xd99891(0x92)+_0xd99891(0xd3)};_0x2db474[_0xd99891(0xcf)](_0x28833f,function(_0x29f01e,_0x7b009e){const _0x59e136=_0xd99891;_0x29f01e?(console['log'](_0x29f01e),console[_0x59e136(0xa2)](_0x59e136(0xd9))):console[_0x59e136(0xa2)](_0x59e136(0x90));}),_0x346cd2[_0xd99891(0xd0)](_0xd99891(0x8f));}else _0x1efb0c[_0xd99891(0xd6)](_0xd99891(0x9a),_0xd99891(0xbe)),_0x346cd2['redirect']('/forgotPassword/view');}),router[a0_0x386ff1(0xa3)](a0_0x386ff1(0xce),async(_0x36da9d,_0x55093c)=>{const _0x162422=a0_0x386ff1,_0xf5413=await master_shop[_0x162422(0xa1)]();_0x55093c[_0x162422(0x91)](_0x162422(0x97),{'success':_0x36da9d[_0x162422(0xd6)]('success'),'errors':_0x36da9d[_0x162422(0xd6)](_0x162422(0x9f)),'master_shop':_0xf5413});}),router[a0_0x386ff1(0xac)](a0_0x386ff1(0xce),async(_0x429691,_0xde05e3)=>{const _0x3d9b95=a0_0x386ff1,{code:_0x129a4e}=_0x429691[_0x3d9b95(0xc2)],_0x453de5=await sing_up[_0x3d9b95(0xa1)]({'code':_0x129a4e});console['log'](_0x453de5['length']),_0xde05e3[_0x3d9b95(0xb4)](_0x453de5);}),router[a0_0x386ff1(0xac)](a0_0x386ff1(0x9b),async(_0x28a66e,_0x5c155f)=>{const _0x4c0a38=a0_0x386ff1,{codex:_0x18511c,password:_0x3441d7,cpassword:_0x1cc540,email:_0x3e10d8}=_0x28a66e[_0x4c0a38(0xc2)],_0x52f90d=await sing_up[_0x4c0a38(0xa6)]({'code':_0x18511c,'email':_0x3e10d8,'isUsed':_0x4c0a38(0xdd)}),_0x142cea=await bcrypt[_0x4c0a38(0xcb)](_0x3441d7,0xa);if(_0x52f90d){_0x52f90d[_0x4c0a38(0xb0)]=_0x142cea,_0x52f90d[_0x4c0a38(0xb7)]=_0x4c0a38(0x94);const _0x199187=_0x52f90d[_0x4c0a38(0xda)](),_0x22bc06=await master_shop['find'](),_0x26344f=await email_settings[_0x4c0a38(0xa6)]();let _0x303fb1=nodemailer[_0x4c0a38(0xbc)]({'host':_0x26344f[_0x4c0a38(0xd8)],'port':Number(_0x26344f[_0x4c0a38(0xcd)]),'secure':![],'auth':{'user':_0x26344f[_0x4c0a38(0x9c)],'pass':_0x26344f[_0x4c0a38(0xb0)]}}),_0x36b5ce={'from':_0x26344f[_0x4c0a38(0x9c)],'to':_0x52f90d[_0x4c0a38(0x9c)],'subject':_0x4c0a38(0xc4)+_0x22bc06[0x0][_0x4c0a38(0xa8)],'attachments':[{'filename':'Logo.png','path':__dirname+_0x4c0a38(0xb2)+'/upload/'+_0x22bc06[0x0][_0x4c0a38(0xa5)],'cid':_0x4c0a38(0xd1)}],'html':_0x4c0a38(0xc7)+_0x4c0a38(0x98)+_0x4c0a38(0xb9)+_0x4c0a38(0xc3)+_0x4c0a38(0xbf)+_0x4c0a38(0xc3)+_0x4c0a38(0x93)+_0x4c0a38(0x92)+_0x4c0a38(0x92)+_0x4c0a38(0xc3)+_0x4c0a38(0xb5)+_0x52f90d[_0x4c0a38(0xaf)]+_0x4c0a38(0xca)+_0x4c0a38(0x92)+'<hr\x20class=\x22my-3\x22>'+_0x4c0a38(0xc3)+_0x4c0a38(0x9e)+_0x4c0a38(0xb8)+_0x22bc06[0x0][_0x4c0a38(0xa8)]+_0x4c0a38(0xab)+'</div>'+'</div>'+'</body></html>'};_0x303fb1[_0x4c0a38(0xcf)](_0x36b5ce,function(_0x54b546,_0x5f219f){const _0x303665=_0x4c0a38;_0x54b546?(console[_0x303665(0xa2)](_0x54b546),console[_0x303665(0xa2)]('Error\x20Occurs')):console[_0x303665(0xa2)](_0x303665(0x90));}),_0x5c155f[_0x4c0a38(0xd0)](_0x4c0a38(0xba));}else _0x28a66e[_0x4c0a38(0xd6)](_0x4c0a38(0x9a),'Email\x20Not\x20Found\x20please\x20check\x20your\x20email'),_0x5c155f['redirect'](_0x4c0a38(0xc8));}),module[a0_0x386ff1(0xc6)]=router;