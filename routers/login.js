function a0_0x6235(_0x5d7210,_0x5f4892){const _0x464b9c=a0_0x464b();return a0_0x6235=function(_0x623592,_0x3c5926){_0x623592=_0x623592-0x17c;let _0x3e3b6c=_0x464b9c[_0x623592];return _0x3e3b6c;},a0_0x6235(_0x5d7210,_0x5f4892);}const a0_0x1cffad=a0_0x6235;function a0_0x464b(){const _0x4b9dfb=['password','secret_key','/validate','findById','find','login','email','/logout','post','findOne','jwt','log','/staff/:id','5641152AYCwox','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','/login','staff','validate','cookie','104270wRomer','login\x20successfully','errors','params','username','exports','login\x20master','sign','21006720WmOFeF','render','warehouse_category','your\x20password\x20is\x20wrong','4GBkgBN','bcryptjs','body','29JbIozz','get','success','8067825zfegsX','express','status','redirect','your\x20email\x20is\x20not\x20register','Disabled','1701606NNfKte','flash','/index','Router','jsonwebtoken','203508ufBctR','clearCookie','role','compare','9961343pXRFFI','name','../models/all_models','env'];a0_0x464b=function(){return _0x4b9dfb;};return a0_0x464b();}(function(_0x3fb1cf,_0x3d2f06){const _0x10062e=a0_0x6235,_0x51b8fc=_0x3fb1cf();while(!![]){try{const _0x57dcb3=parseInt(_0x10062e(0x1b1))/0x1*(parseInt(_0x10062e(0x1a2))/0x2)+parseInt(_0x10062e(0x182))/0x3*(-parseInt(_0x10062e(0x1ae))/0x4)+-parseInt(_0x10062e(0x17c))/0x5+-parseInt(_0x10062e(0x187))/0x6+-parseInt(_0x10062e(0x18b))/0x7+parseInt(_0x10062e(0x19c))/0x8+parseInt(_0x10062e(0x1aa))/0x9;if(_0x57dcb3===_0x3d2f06)break;else _0x51b8fc['push'](_0x51b8fc['shift']());}catch(_0x3e7d2d){_0x51b8fc['push'](_0x51b8fc['shift']());}}}(a0_0x464b,0xdeffd));const express=require(a0_0x1cffad(0x17d)),app=express(),router=express[a0_0x1cffad(0x185)](),{sing_up,staff,profile,master_shop}=require(a0_0x1cffad(0x18d)),bcrypt=require(a0_0x1cffad(0x1af)),jwt=require(a0_0x1cffad(0x186)),auth=require('../middleware/auth');router[a0_0x1cffad(0x1b2)]('/',async(_0x6ee668,_0x4c94f2)=>{const _0x15778e=a0_0x1cffad;try{const _0x539f68=await master_shop[_0x15778e(0x193)]();_0x4c94f2['render'](_0x15778e(0x194),{'success':_0x6ee668[_0x15778e(0x183)](_0x15778e(0x1b3)),'errors':_0x6ee668[_0x15778e(0x183)](_0x15778e(0x1a4)),'master_shop':_0x539f68});}catch(_0x5ebd22){console[_0x15778e(0x19a)](_0x5ebd22);}}),router[a0_0x1cffad(0x1b2)](a0_0x1cffad(0x191),async(_0xc06a4e,_0x59a202)=>{const _0x2386e2=a0_0x1cffad;try{const _0x1f1b94=await master_shop[_0x2386e2(0x193)]();_0x59a202[_0x2386e2(0x1ab)](_0x2386e2(0x1a0),{'success':_0xc06a4e[_0x2386e2(0x183)](_0x2386e2(0x1b3)),'errors':_0xc06a4e['flash'](_0x2386e2(0x1a4)),'master_shop':_0x1f1b94});}catch(_0x150e20){console['log'](_0x150e20);}}),router[a0_0x1cffad(0x1b2)](a0_0x1cffad(0x19e),async(_0x6581d5,_0x42822d)=>{const _0x5328fc=a0_0x1cffad;try{const _0x5954e3=await master_shop[_0x5328fc(0x193)]();console['log'](_0x5328fc(0x1a8),_0x5954e3),_0x42822d[_0x5328fc(0x1ab)](_0x5328fc(0x194),{'success':_0x6581d5[_0x5328fc(0x183)]('success'),'errors':_0x6581d5[_0x5328fc(0x183)](_0x5328fc(0x1a4)),'master_shop':_0x5954e3});}catch(_0x2b49eb){console[_0x5328fc(0x19a)](_0x2b49eb);}}),router[a0_0x1cffad(0x197)]('/login',async(_0x5caab8,_0x4c250c)=>{const _0x12d367=a0_0x1cffad;try{const _0x325196=_0x5caab8[_0x12d367(0x1b0)]['email'],_0x233d3c=await sing_up['findOne']({'email':_0x325196});if(!_0x233d3c)return _0x5caab8['flash'](_0x12d367(0x1a4),_0x12d367(0x180)),_0x4c250c['redirect'](_0x12d367(0x19e));const _0x597b56=await staff['findOne']({'email':_0x233d3c[_0x12d367(0x195)]});var _0x329f18=_0x597b56['warehouse_category'];if(_0x233d3c['role']==_0x12d367(0x19f)){const _0x56e505=await staff[_0x12d367(0x198)]({'email':_0x233d3c[_0x12d367(0x195)]});if(_0x56e505['status']==_0x12d367(0x181))return _0x5caab8[_0x12d367(0x183)](_0x12d367(0x1a4),_0x12d367(0x19d)),_0x4c250c[_0x12d367(0x17f)](_0x12d367(0x19e));_0x329f18=_0x56e505['warehouse_category'];}const _0xd1c55=_0x5caab8[_0x12d367(0x1b0)][_0x12d367(0x18f)],_0x22beec=await bcrypt[_0x12d367(0x18a)](_0xd1c55,_0x233d3c[_0x12d367(0x18f)]);if(_0x22beec==![])return _0x5caab8[_0x12d367(0x183)]('errors',_0x12d367(0x1ad)),_0x4c250c[_0x12d367(0x17f)]('/login');const _0x557ffd=jwt[_0x12d367(0x1a9)]({'username':_0x233d3c[_0x12d367(0x1a6)],'email':_0x233d3c[_0x12d367(0x195)],'role':_0x233d3c[_0x12d367(0x189)],'warehouse_category':_0x329f18},process[_0x12d367(0x18e)][_0x12d367(0x190)]);_0x4c250c[_0x12d367(0x1a1)](_0x12d367(0x199),_0x557ffd,{'expires':new Date(0xe677d213a700)}),_0x5caab8[_0x12d367(0x183)]('success',_0x12d367(0x1a3)),_0x4c250c[_0x12d367(0x17f)](_0x12d367(0x184));}catch(_0x2f20e7){console['log'](_0x2f20e7);}}),router['get'](a0_0x1cffad(0x19b),async(_0x320ad8,_0x51fb67)=>{const _0x483ad0=a0_0x1cffad;try{const _0x31f182=_0x320ad8[_0x483ad0(0x1a5)]['id'],_0x108a1b=await staff[_0x483ad0(0x192)]({'_id':_0x31f182});_0x108a1b[_0x483ad0(0x17e)]==_0x483ad0(0x181)&&(_0x320ad8[_0x483ad0(0x183)]('errors',_0x483ad0(0x19d)),_0x51fb67['redirect']('/staff/view'));const _0x2e0deb=await sing_up[_0x483ad0(0x198)]({'email':_0x108a1b[_0x483ad0(0x195)]});var _0x2c1fdf=_0x108a1b['warehouse_category'];if(_0x2e0deb[_0x483ad0(0x189)]==_0x483ad0(0x19f)){const _0xfe1cc8=await staff[_0x483ad0(0x198)]({'name':_0x2e0deb[_0x483ad0(0x18c)]});_0x2c1fdf=_0xfe1cc8[_0x483ad0(0x1ac)];}const _0x2638c9=jwt['sign']({'username':_0x2e0deb[_0x483ad0(0x1a6)],'email':_0x2e0deb[_0x483ad0(0x195)],'role':_0x2e0deb[_0x483ad0(0x189)],'warehouse_category':_0x2c1fdf},process[_0x483ad0(0x18e)]['secret_key']);_0x51fb67[_0x483ad0(0x1a1)](_0x483ad0(0x199),_0x2638c9,{'expires':new Date(0xe677d213a700)}),_0x320ad8[_0x483ad0(0x183)](_0x483ad0(0x1b3),'login\x20successfully'),_0x51fb67[_0x483ad0(0x17f)]('/index');}catch(_0x2ba1bb){console[_0x483ad0(0x19a)](_0x2ba1bb);}}),router[a0_0x1cffad(0x1b2)](a0_0x1cffad(0x196),(_0xbd1901,_0x5498f0)=>{const _0xbe09b0=a0_0x1cffad;_0x5498f0[_0xbe09b0(0x188)]('jwt'),_0x5498f0['redirect']('/login');}),module[a0_0x1cffad(0x1a7)]=router;