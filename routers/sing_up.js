const a0_0x3fcf9b=a0_0x4718;function a0_0x4718(_0x555a64,_0x25e936){const _0x240bd2=a0_0x240b();return a0_0x4718=function(_0x471899,_0x17d3b5){_0x471899=_0x471899-0x1a5;let _0x16d8d7=_0x240bd2[_0x471899];return _0x16d8d7;},a0_0x4718(_0x555a64,_0x25e936);}function a0_0x240b(){const _0x1f0a31=['1565718fcuNmn','/login','39076yNzcgs','347896vnSXiV','5hbHuPw','40757fGLwvG','1963701nWhxsi','log','login\x20master','hash','647256CrpFYT','find','flash','Your\x20information\x20will\x20be\x20sent\x20to\x20the\x20administration\x20for\x20approval.!','bcryptjs','Disabled','post','render','staff','21yWfmze','Router','../middleware/auth','2442660rCUmwH','48fccyIR','get','/sing_up_staff','success','redirect','body','/sing_up','save','errors'];a0_0x240b=function(){return _0x1f0a31;};return a0_0x240b();}(function(_0xee3082,_0x34de66){const _0x4f2034=a0_0x4718,_0x4594c1=_0xee3082();while(!![]){try{const _0x379b9e=parseInt(_0x4f2034(0x1ab))/0x1+parseInt(_0x4f2034(0x1a8))/0x2*(parseInt(_0x4f2034(0x1bd))/0x3)+parseInt(_0x4f2034(0x1a9))/0x4*(-parseInt(_0x4f2034(0x1aa))/0x5)+parseInt(_0x4f2034(0x1a6))/0x6+parseInt(_0x4f2034(0x1b9))/0x7*(-parseInt(_0x4f2034(0x1b0))/0x8)+parseInt(_0x4f2034(0x1ac))/0x9+-parseInt(_0x4f2034(0x1bc))/0xa;if(_0x379b9e===_0x34de66)break;else _0x4594c1['push'](_0x4594c1['shift']());}catch(_0x30f59a){_0x4594c1['push'](_0x4594c1['shift']());}}}(a0_0x240b,0x3f1f2));const express=require('express'),app=express(),router=express[a0_0x3fcf9b(0x1ba)](),bcrypt=require(a0_0x3fcf9b(0x1b4)),{sing_up,staff,profile,master_shop}=require('../models/all_models'),auth=require(a0_0x3fcf9b(0x1bb));router[a0_0x3fcf9b(0x1be)]('/sing_up',(_0xa6dfb4,_0x5c63cd)=>{const _0x7feaa2=a0_0x3fcf9b;_0x5c63cd[_0x7feaa2(0x1b7)]('sing_up',{'success':_0xa6dfb4[_0x7feaa2(0x1b2)]('success'),'errors':_0xa6dfb4[_0x7feaa2(0x1b2)]('errors')});}),router[a0_0x3fcf9b(0x1b6)](a0_0x3fcf9b(0x1c3),async(_0x4418dd,_0x27c7cc)=>{const _0x4e3f63=a0_0x3fcf9b;try{console[_0x4e3f63(0x1ad)](_0x4418dd[_0x4e3f63(0x1c2)]);const {name:_0x3d56f9,email:_0x186ea4,password:_0x40509a,role:_0x1e5680}=_0x4418dd[_0x4e3f63(0x1c2)];console[_0x4e3f63(0x1ad)](_0x1e5680);const _0x4a9177=await bcrypt['hash'](_0x40509a,0xa),_0x185406=new sing_up({'name':_0x3d56f9,'email':_0x186ea4,'password':_0x4a9177,'role':'admin'}),_0x1623e0=await _0x185406[_0x4e3f63(0x1c4)](),_0x1cf299=new profile({'firstname':_0x3d56f9,'email':_0x186ea4}),_0x452a86=await _0x1cf299[_0x4e3f63(0x1c4)]();_0x4418dd[_0x4e3f63(0x1b2)](_0x4e3f63(0x1c0),'welcome\x20'+_0x3d56f9),_0x27c7cc[_0x4e3f63(0x1c1)](_0x4e3f63(0x1a7));}catch(_0x49e932){console[_0x4e3f63(0x1ad)](_0x49e932);}}),router[a0_0x3fcf9b(0x1be)](a0_0x3fcf9b(0x1bf),async(_0x12cd99,_0x4d5f8d)=>{const _0x1cc8fa=a0_0x3fcf9b;try{const _0x4d2f58=await master_shop[_0x1cc8fa(0x1b1)]();console[_0x1cc8fa(0x1ad)](_0x1cc8fa(0x1ae),_0x4d2f58),_0x4d5f8d[_0x1cc8fa(0x1b7)]('sing_up_staff',{'success':_0x12cd99[_0x1cc8fa(0x1b2)](_0x1cc8fa(0x1c0)),'errors':_0x12cd99[_0x1cc8fa(0x1b2)](_0x1cc8fa(0x1a5)),'master_shop':_0x4d2f58});}catch(_0x43938b){console[_0x1cc8fa(0x1ad)](_0x43938b);}}),router[a0_0x3fcf9b(0x1b6)](a0_0x3fcf9b(0x1bf),async(_0x384b40,_0x5885f8)=>{const _0x516a78=a0_0x3fcf9b;try{console[_0x516a78(0x1ad)](_0x384b40['body']);const {name:_0x219172,email:_0x56f7fa,password:_0x554aec,mobile:_0x982c4c}=_0x384b40[_0x516a78(0x1c2)],_0x10634f=await bcrypt[_0x516a78(0x1af)](_0x554aec,0xa),_0xe74fc8=new sing_up({'name':_0x219172,'email':_0x56f7fa,'password':_0x10634f,'mobile':_0x982c4c,'role':_0x516a78(0x1b8)}),_0x30e0e0=await _0xe74fc8['save'](),_0x29c576=new staff({'name':_0x219172,'email':_0x56f7fa,'mobile':_0x982c4c,'status':_0x516a78(0x1b5)}),_0x51e246=await _0x29c576[_0x516a78(0x1c4)](),_0x8ce579=new profile({'firstname':_0x219172,'email':_0x56f7fa}),_0x5e2215=await _0x8ce579[_0x516a78(0x1c4)]();_0x384b40[_0x516a78(0x1b2)](_0x516a78(0x1c0),_0x516a78(0x1b3)),_0x5885f8[_0x516a78(0x1c1)](_0x516a78(0x1bf));}catch(_0x1f7d4a){console[_0x516a78(0x1ad)](_0x1f7d4a);}}),module['exports']=router;