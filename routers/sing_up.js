const a0_0x5a3ccb=a0_0x5ab9;function a0_0x5ab9(_0x465cae,_0x44af12){const _0x3c2982=a0_0x3c29();return a0_0x5ab9=function(_0x5ab9f7,_0x3043c2){_0x5ab9f7=_0x5ab9f7-0x169;let _0xc5430c=_0x3c2982[_0x5ab9f7];return _0xc5430c;},a0_0x5ab9(_0x465cae,_0x44af12);}(function(_0x419c59,_0x16b1b6){const _0x7f215=a0_0x5ab9,_0x5153d5=_0x419c59();while(!![]){try{const _0x1dfdb2=-parseInt(_0x7f215(0x17d))/0x1*(-parseInt(_0x7f215(0x184))/0x2)+-parseInt(_0x7f215(0x17e))/0x3+parseInt(_0x7f215(0x18a))/0x4*(parseInt(_0x7f215(0x178))/0x5)+parseInt(_0x7f215(0x177))/0x6*(-parseInt(_0x7f215(0x180))/0x7)+-parseInt(_0x7f215(0x17b))/0x8*(-parseInt(_0x7f215(0x17a))/0x9)+parseInt(_0x7f215(0x174))/0xa*(parseInt(_0x7f215(0x183))/0xb)+-parseInt(_0x7f215(0x182))/0xc*(parseInt(_0x7f215(0x179))/0xd);if(_0x1dfdb2===_0x16b1b6)break;else _0x5153d5['push'](_0x5153d5['shift']());}catch(_0x3c29fb){_0x5153d5['push'](_0x5153d5['shift']());}}}(a0_0x3c29,0x9c626));const express=require(a0_0x5a3ccb(0x188)),app=express(),router=express[a0_0x5a3ccb(0x170)](),bcrypt=require('bcryptjs'),{sing_up,staff,profile,master_shop}=require(a0_0x5a3ccb(0x16f)),auth=require('../middleware/auth');router[a0_0x5a3ccb(0x169)]('/sing_up',(_0x127ca5,_0x47f657)=>{const _0x32788a=a0_0x5a3ccb;_0x47f657[_0x32788a(0x17c)](_0x32788a(0x175),{'success':_0x127ca5[_0x32788a(0x16a)](_0x32788a(0x16d)),'errors':_0x127ca5[_0x32788a(0x16a)]('errors')});}),router['post'](a0_0x5a3ccb(0x18d),async(_0x17a213,_0x4bc0af)=>{const _0x138df3=a0_0x5a3ccb;try{console[_0x138df3(0x16c)](_0x17a213[_0x138df3(0x172)]);const {name:_0x22335a,email:_0x1ecba3,password:_0xa8e621,role:_0x264a5b}=_0x17a213[_0x138df3(0x172)];console[_0x138df3(0x16c)](_0x264a5b);const _0x24a0ff=await bcrypt[_0x138df3(0x16b)](_0xa8e621,0xa),_0x128248=new sing_up({'name':_0x22335a,'email':_0x1ecba3,'password':_0x24a0ff,'role':_0x138df3(0x18b)}),_0x47a182=await _0x128248['save'](),_0x1754e7=new profile({'firstname':_0x22335a,'email':_0x1ecba3}),_0x17d479=await _0x1754e7[_0x138df3(0x185)]();_0x17a213[_0x138df3(0x16a)](_0x138df3(0x16d),_0x138df3(0x171)+_0x22335a),_0x4bc0af['redirect'](_0x138df3(0x173));}catch(_0x387a95){console[_0x138df3(0x16c)](_0x387a95);}}),router['get'](a0_0x5a3ccb(0x16e),async(_0x50ad13,_0x3b2dc7)=>{const _0x523cb5=a0_0x5a3ccb;try{const _0x1ebc35=await master_shop[_0x523cb5(0x17f)]();console[_0x523cb5(0x16c)](_0x523cb5(0x189),_0x1ebc35),_0x3b2dc7['render']('sing_up_staff',{'success':_0x50ad13['flash']('success'),'errors':_0x50ad13[_0x523cb5(0x16a)](_0x523cb5(0x18c)),'master_shop':_0x1ebc35});}catch(_0x3dbd4c){console[_0x523cb5(0x16c)](_0x3dbd4c);}}),router['post'](a0_0x5a3ccb(0x16e),async(_0x214ff1,_0x36f4a4)=>{const _0x49ac2d=a0_0x5a3ccb;try{console['log'](_0x214ff1['body']);const {name:_0x33bd2b,email:_0x161391,password:_0x4fd13d,mobile:_0x1b1ae1}=_0x214ff1[_0x49ac2d(0x172)],_0x54373b=await bcrypt[_0x49ac2d(0x16b)](_0x4fd13d,0xa),_0x25401a=new sing_up({'name':_0x33bd2b,'email':_0x161391,'password':_0x54373b,'mobile':_0x1b1ae1,'role':_0x49ac2d(0x181)}),_0x7af452=await _0x25401a[_0x49ac2d(0x185)](),_0x809a81=new staff({'name':_0x33bd2b,'email':_0x161391,'mobile':_0x1b1ae1,'status':_0x49ac2d(0x186)}),_0x5e181b=await _0x809a81[_0x49ac2d(0x185)](),_0x38ccdf=new profile({'firstname':_0x33bd2b,'email':_0x161391}),_0x402a6a=await _0x38ccdf[_0x49ac2d(0x185)]();_0x214ff1[_0x49ac2d(0x16a)](_0x49ac2d(0x16d),_0x49ac2d(0x187)),_0x36f4a4[_0x49ac2d(0x176)](_0x49ac2d(0x16e));}catch(_0x3b9cb4){console[_0x49ac2d(0x16c)](_0x3b9cb4);}}),module['exports']=router;function a0_0x3c29(){const _0x3ffbaf=['staff','704532UZITHi','51601tPLFHX','263272iUjTpv','save','Disabled','Your\x20information\x20will\x20be\x20sent\x20to\x20the\x20administration\x20for\x20approval.!','express','login\x20master','639172JDLvye','admin','errors','/sing_up','get','flash','hash','log','success','/sing_up_staff','../models/all_models','Router','welcome\x20','body','/login','1750zmuKWl','sing_up','redirect','18TgoTwI','30XWEuLU','273BHJcRC','1071909vaftHO','40aRAFMP','render','8pGuEfB','2154456cnyFEI','find','1952167SFnRmE'];a0_0x3c29=function(){return _0x3ffbaf;};return a0_0x3c29();}