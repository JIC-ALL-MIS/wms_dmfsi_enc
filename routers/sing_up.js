function a0_0x37b4(_0x2371ab,_0x3df265){const _0x160cb0=a0_0x160c();return a0_0x37b4=function(_0x37b42e,_0x24d39d){_0x37b42e=_0x37b42e-0xfd;let _0x566892=_0x160cb0[_0x37b42e];return _0x566892;},a0_0x37b4(_0x2371ab,_0x3df265);}function a0_0x160c(){const _0x16aa9f=['18hRBWpD','Disabled','save','body','../middleware/auth','sing_up_staff','log','admin','4843797gFkXDa','find','2268TKqqvA','staff','2611096FEFsGg','flash','../models/all_models','8634uWEava','/sing_up_staff','141173ghMBxp','success','errors','9794952RcLSOI','login\x20master','express','3654275muYcaA','/sing_up','welcome\x20','10640264FnuRXP','get','Router','hash','/login','post','redirect'];a0_0x160c=function(){return _0x16aa9f;};return a0_0x160c();}const a0_0x4f33c8=a0_0x37b4;(function(_0x57ed4d,_0x5d55a2){const _0x1c130a=a0_0x37b4,_0x4630a1=_0x57ed4d();while(!![]){try{const _0x54db96=parseInt(_0x1c130a(0x112))/0x1+parseInt(_0x1c130a(0x10d))/0x2+-parseInt(_0x1c130a(0x110))/0x3*(parseInt(_0x1c130a(0x10b))/0x4)+parseInt(_0x1c130a(0x118))/0x5+-parseInt(_0x1c130a(0x115))/0x6+-parseInt(_0x1c130a(0x109))/0x7+-parseInt(_0x1c130a(0x11b))/0x8*(-parseInt(_0x1c130a(0x101))/0x9);if(_0x54db96===_0x5d55a2)break;else _0x4630a1['push'](_0x4630a1['shift']());}catch(_0x33f37f){_0x4630a1['push'](_0x4630a1['shift']());}}}(a0_0x160c,0xd72c9));const express=require(a0_0x4f33c8(0x117)),app=express(),router=express[a0_0x4f33c8(0x11d)](),bcrypt=require('bcryptjs'),{sing_up,staff,profile,master_shop}=require(a0_0x4f33c8(0x10f)),auth=require(a0_0x4f33c8(0x105));router[a0_0x4f33c8(0x11c)](a0_0x4f33c8(0x119),(_0x4c7145,_0x352655)=>{const _0x5a0bcb=a0_0x4f33c8;_0x352655['render']('sing_up',{'success':_0x4c7145['flash']('success'),'errors':_0x4c7145[_0x5a0bcb(0x10e)]('errors')});}),router[a0_0x4f33c8(0xff)](a0_0x4f33c8(0x119),async(_0xb7c438,_0x33f718)=>{const _0x39151b=a0_0x4f33c8;try{console['log'](_0xb7c438['body']);const {name:_0x4e3c67,email:_0x4d20d7,password:_0xd29e57,role:_0x493b62}=_0xb7c438[_0x39151b(0x104)];console['log'](_0x493b62);const _0x5f6f85=await bcrypt[_0x39151b(0xfd)](_0xd29e57,0xa),_0x104788=new sing_up({'name':_0x4e3c67,'email':_0x4d20d7,'password':_0x5f6f85,'role':_0x39151b(0x108)}),_0x32d698=await _0x104788[_0x39151b(0x103)](),_0x1e30e7=new profile({'firstname':_0x4e3c67,'email':_0x4d20d7}),_0x1ff84c=await _0x1e30e7[_0x39151b(0x103)]();_0xb7c438[_0x39151b(0x10e)]('success',_0x39151b(0x11a)+_0x4e3c67),_0x33f718[_0x39151b(0x100)](_0x39151b(0xfe));}catch(_0x21c3d6){console[_0x39151b(0x107)](_0x21c3d6);}}),router[a0_0x4f33c8(0x11c)](a0_0x4f33c8(0x111),async(_0x4a0c9e,_0x22af9d)=>{const _0x32a388=a0_0x4f33c8;try{const _0x4899a7=await master_shop[_0x32a388(0x10a)]();console[_0x32a388(0x107)](_0x32a388(0x116),_0x4899a7),_0x22af9d['render'](_0x32a388(0x106),{'success':_0x4a0c9e[_0x32a388(0x10e)](_0x32a388(0x113)),'errors':_0x4a0c9e[_0x32a388(0x10e)](_0x32a388(0x114)),'master_shop':_0x4899a7});}catch(_0xc9f750){console[_0x32a388(0x107)](_0xc9f750);}}),router['post'](a0_0x4f33c8(0x111),async(_0x48b8a9,_0x235080)=>{const _0x5b8141=a0_0x4f33c8;try{console[_0x5b8141(0x107)](_0x48b8a9[_0x5b8141(0x104)]);const {name:_0x26bf71,email:_0x46b4aa,password:_0x25561a,mobile:_0x4a3931}=_0x48b8a9[_0x5b8141(0x104)],_0x5d2415=await bcrypt[_0x5b8141(0xfd)](_0x25561a,0xa),_0x3d6731=new sing_up({'name':_0x26bf71,'email':_0x46b4aa,'password':_0x5d2415,'mobile':_0x4a3931,'role':_0x5b8141(0x10c)}),_0x526e54=await _0x3d6731[_0x5b8141(0x103)](),_0x4e7bdf=new staff({'name':_0x26bf71,'email':_0x46b4aa,'mobile':_0x4a3931,'status':_0x5b8141(0x102)}),_0x2c4b89=await _0x4e7bdf[_0x5b8141(0x103)](),_0x3b765b=new profile({'firstname':_0x26bf71,'email':_0x46b4aa}),_0x7f978a=await _0x3b765b['save']();_0x48b8a9['flash'](_0x5b8141(0x113),'Your\x20information\x20will\x20be\x20sent\x20to\x20the\x20administration\x20for\x20approval.!'),_0x235080[_0x5b8141(0x100)](_0x5b8141(0x111));}catch(_0x3612ed){console[_0x5b8141(0x107)](_0x3612ed);}}),module['exports']=router;