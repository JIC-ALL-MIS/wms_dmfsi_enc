const a0_0x20495e=a0_0x1896;(function(_0x149b78,_0x39171f){const _0x4501e6=a0_0x1896,_0x1676f5=_0x149b78();while(!![]){try{const _0x219940=-parseInt(_0x4501e6(0xe8))/0x1*(-parseInt(_0x4501e6(0xd9))/0x2)+-parseInt(_0x4501e6(0xeb))/0x3*(parseInt(_0x4501e6(0xd5))/0x4)+-parseInt(_0x4501e6(0xf3))/0x5+-parseInt(_0x4501e6(0xe4))/0x6+parseInt(_0x4501e6(0xe6))/0x7*(parseInt(_0x4501e6(0xd8))/0x8)+-parseInt(_0x4501e6(0xe7))/0x9+parseInt(_0x4501e6(0xd4))/0xa;if(_0x219940===_0x39171f)break;else _0x1676f5['push'](_0x1676f5['shift']());}catch(_0x493c6a){_0x1676f5['push'](_0x1676f5['shift']());}}}(a0_0x24ca,0xba965));function a0_0x24ca(){const _0x39e3cf=['post','sing_up_staff','../models/all_models','errors','2912250rONJxC','login\x20master','985516ofYoWp','10957896XfqQQm','144566PuvuIi','Disabled','staff','3hAJcqx','find','../middleware/auth','render','body','hash','express','Router','1889075CkyYug','bcryptjs','27077670CVEBHO','3483824WIjTdB','flash','sing_up','8MaRWkz','12iDDraF','log','/sing_up_staff','save','success','/sing_up','get'];a0_0x24ca=function(){return _0x39e3cf;};return a0_0x24ca();}function a0_0x1896(_0xa299c5,_0xb32e27){const _0x24ca58=a0_0x24ca();return a0_0x1896=function(_0x189661,_0x2ac211){_0x189661=_0x189661-0xd3;let _0x5a9777=_0x24ca58[_0x189661];return _0x5a9777;},a0_0x1896(_0xa299c5,_0xb32e27);}const express=require(a0_0x20495e(0xf1)),app=express(),router=express[a0_0x20495e(0xf2)](),bcrypt=require(a0_0x20495e(0xd3)),{sing_up,staff,profile,master_shop}=require(a0_0x20495e(0xe2)),auth=require(a0_0x20495e(0xed));router[a0_0x20495e(0xdf)](a0_0x20495e(0xde),(_0x4c50ed,_0x51e79f)=>{const _0x210d9f=a0_0x20495e;_0x51e79f[_0x210d9f(0xee)](_0x210d9f(0xd7),{'success':_0x4c50ed[_0x210d9f(0xd6)](_0x210d9f(0xdd)),'errors':_0x4c50ed[_0x210d9f(0xd6)](_0x210d9f(0xe3))});}),router['post'](a0_0x20495e(0xde),async(_0x11d2d0,_0x54159d)=>{const _0x2c5678=a0_0x20495e;try{console['log'](_0x11d2d0[_0x2c5678(0xef)]);const {name:_0x111ae0,email:_0x392da8,password:_0x166cbb,role:_0x2394bb}=_0x11d2d0[_0x2c5678(0xef)];console[_0x2c5678(0xda)](_0x2394bb);const _0x38f612=await bcrypt[_0x2c5678(0xf0)](_0x166cbb,0xa),_0x55ecaf=new sing_up({'name':_0x111ae0,'email':_0x392da8,'password':_0x38f612,'role':'admin'}),_0x291e49=await _0x55ecaf['save'](),_0x4352e5=new profile({'firstname':_0x111ae0,'email':_0x392da8}),_0x45a215=await _0x4352e5[_0x2c5678(0xdc)]();_0x11d2d0[_0x2c5678(0xd6)](_0x2c5678(0xdd),'welcome\x20'+_0x111ae0),_0x54159d['redirect']('/login');}catch(_0x9a8025){console[_0x2c5678(0xda)](_0x9a8025);}}),router[a0_0x20495e(0xdf)](a0_0x20495e(0xdb),async(_0x8a4d27,_0x200f64)=>{const _0x345aeb=a0_0x20495e;try{const _0x3d8150=await master_shop[_0x345aeb(0xec)]();console[_0x345aeb(0xda)](_0x345aeb(0xe5),_0x3d8150),_0x200f64[_0x345aeb(0xee)](_0x345aeb(0xe1),{'success':_0x8a4d27[_0x345aeb(0xd6)](_0x345aeb(0xdd)),'errors':_0x8a4d27[_0x345aeb(0xd6)](_0x345aeb(0xe3)),'master_shop':_0x3d8150});}catch(_0x3e29c6){console[_0x345aeb(0xda)](_0x3e29c6);}}),router[a0_0x20495e(0xe0)](a0_0x20495e(0xdb),async(_0x525901,_0xe06902)=>{const _0x36ff35=a0_0x20495e;try{console[_0x36ff35(0xda)](_0x525901[_0x36ff35(0xef)]);const {name:_0x2bc5d9,email:_0x4cde60,password:_0x1ae195,mobile:_0x2d75ac}=_0x525901[_0x36ff35(0xef)],_0x4464ac=await bcrypt['hash'](_0x1ae195,0xa),_0x1c1167=new sing_up({'name':_0x2bc5d9,'email':_0x4cde60,'password':_0x4464ac,'mobile':_0x2d75ac,'role':_0x36ff35(0xea)}),_0xad6e6d=await _0x1c1167['save'](),_0x1e4e0b=new staff({'name':_0x2bc5d9,'email':_0x4cde60,'mobile':_0x2d75ac,'status':_0x36ff35(0xe9)}),_0x41a10c=await _0x1e4e0b[_0x36ff35(0xdc)](),_0x47cc26=new profile({'firstname':_0x2bc5d9,'email':_0x4cde60}),_0xca47fe=await _0x47cc26[_0x36ff35(0xdc)]();_0x525901[_0x36ff35(0xd6)](_0x36ff35(0xdd),'Your\x20information\x20will\x20be\x20sent\x20to\x20the\x20administration\x20for\x20approval.!'),_0xe06902['redirect']('/sing_up_staff');}catch(_0x412c1e){console['log'](_0x412c1e);}}),module['exports']=router;