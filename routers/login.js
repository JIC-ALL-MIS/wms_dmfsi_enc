const a0_0x5c673a=a0_0xc0bc;function a0_0xc0bc(_0x33cacb,_0x408c26){const _0x1c9358=a0_0x1c93();return a0_0xc0bc=function(_0xc0bc18,_0x20c51e){_0xc0bc18=_0xc0bc18-0xd8;let _0x13e84c=_0x1c9358[_0xc0bc18];return _0x13e84c;},a0_0xc0bc(_0x33cacb,_0x408c26);}(function(_0x2aebb5,_0x14c216){const _0x25e8bf=a0_0xc0bc,_0x32eddd=_0x2aebb5();while(!![]){try{const _0x2008b5=parseInt(_0x25e8bf(0xe3))/0x1+-parseInt(_0x25e8bf(0xde))/0x2*(-parseInt(_0x25e8bf(0xda))/0x3)+-parseInt(_0x25e8bf(0xd9))/0x4*(parseInt(_0x25e8bf(0xe1))/0x5)+parseInt(_0x25e8bf(0xfa))/0x6*(parseInt(_0x25e8bf(0x105))/0x7)+parseInt(_0x25e8bf(0xfe))/0x8*(-parseInt(_0x25e8bf(0xf1))/0x9)+parseInt(_0x25e8bf(0xdd))/0xa+parseInt(_0x25e8bf(0xeb))/0xb;if(_0x2008b5===_0x14c216)break;else _0x32eddd['push'](_0x32eddd['shift']());}catch(_0x29c5ca){_0x32eddd['push'](_0x32eddd['shift']());}}}(a0_0x1c93,0x8b853));const express=require('express'),app=express(),router=express['Router'](),{sing_up,staff,profile,master_shop}=require(a0_0x5c673a(0xf0)),bcrypt=require(a0_0x5c673a(0xfc)),jwt=require('jsonwebtoken'),auth=require('../middleware/auth');function a0_0x1c93(){const _0x38eedb=['Disabled','exports','warehouse_category','env','your\x20password\x20is\x20wrong','2388qXCSGC','2286wjcGQh','find','staff','338790ZXJjTl','1770EzuPjL','post','/validate','3035RDJRrk','role','40144NhqVZE','flash','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','validate','/logout','compare','log','findById','846824wDtOgA','errors','success','findOne','body','../models/all_models','144jIScJX','/staff/view','login\x20successfully','jwt','your\x20email\x20is\x20not\x20register','secret_key','get','email','name','2130FvkDdd','redirect','bcryptjs','render','70544NHMqDu','/index','cookie','/login','status','login','sign','4921mMzlkl','username'];a0_0x1c93=function(){return _0x38eedb;};return a0_0x1c93();}router['get']('/',async(_0x522e12,_0x3d63ea)=>{const _0x57b01f=a0_0x5c673a;try{const _0x523035=await master_shop[_0x57b01f(0xdb)]();_0x3d63ea[_0x57b01f(0xfd)](_0x57b01f(0x103),{'success':_0x522e12[_0x57b01f(0xe4)](_0x57b01f(0xed)),'errors':_0x522e12['flash'](_0x57b01f(0xec)),'master_shop':_0x523035});}catch(_0x59a8f3){console['log'](_0x59a8f3);}}),router[a0_0x5c673a(0xf7)](a0_0x5c673a(0xe0),async(_0x31a801,_0x3a33a4)=>{const _0x5d2252=a0_0x5c673a;try{const _0x5f4259=await master_shop[_0x5d2252(0xdb)]();_0x3a33a4[_0x5d2252(0xfd)](_0x5d2252(0xe6),{'success':_0x31a801[_0x5d2252(0xe4)](_0x5d2252(0xed)),'errors':_0x31a801[_0x5d2252(0xe4)]('errors'),'master_shop':_0x5f4259});}catch(_0x23a051){console[_0x5d2252(0xe9)](_0x23a051);}}),router[a0_0x5c673a(0xf7)](a0_0x5c673a(0x101),async(_0x1b499d,_0x35cc88)=>{const _0x3d4f2a=a0_0x5c673a;try{const _0x335fb7=await master_shop[_0x3d4f2a(0xdb)]();console[_0x3d4f2a(0xe9)]('login\x20master',_0x335fb7),_0x35cc88[_0x3d4f2a(0xfd)](_0x3d4f2a(0x103),{'success':_0x1b499d['flash'](_0x3d4f2a(0xed)),'errors':_0x1b499d[_0x3d4f2a(0xe4)](_0x3d4f2a(0xec)),'master_shop':_0x335fb7});}catch(_0x257472){console['log'](_0x257472);}}),router[a0_0x5c673a(0xdf)](a0_0x5c673a(0x101),async(_0x587c34,_0x1ed81b)=>{const _0x23b4d0=a0_0x5c673a;try{const _0x68f465=_0x587c34['body'][_0x23b4d0(0xf8)],_0x7c26bb=await sing_up[_0x23b4d0(0xee)]({'email':_0x68f465});if(!_0x7c26bb)return _0x587c34[_0x23b4d0(0xe4)]('errors',_0x23b4d0(0xf5)),_0x1ed81b['redirect'](_0x23b4d0(0x101));const _0xa3cc07=await staff[_0x23b4d0(0xee)]({'email':_0x7c26bb[_0x23b4d0(0xf8)]});var _0xfd24b1=_0xa3cc07[_0x23b4d0(0x109)];if(_0x7c26bb[_0x23b4d0(0xe2)]=='staff'){const _0x1c7c85=await staff[_0x23b4d0(0xee)]({'email':_0x7c26bb['email']});if(_0x1c7c85[_0x23b4d0(0x102)]==_0x23b4d0(0x107))return _0x587c34['flash'](_0x23b4d0(0xec),_0x23b4d0(0xe5)),_0x1ed81b[_0x23b4d0(0xfb)](_0x23b4d0(0x101));_0xfd24b1=_0x1c7c85[_0x23b4d0(0x109)];}const _0x360776=_0x587c34[_0x23b4d0(0xef)]['password'],_0x3f0eaa=await bcrypt[_0x23b4d0(0xe8)](_0x360776,_0x7c26bb['password']);if(_0x3f0eaa==![])return _0x587c34[_0x23b4d0(0xe4)](_0x23b4d0(0xec),_0x23b4d0(0xd8)),_0x1ed81b[_0x23b4d0(0xfb)](_0x23b4d0(0x101));const _0x11bbab=jwt[_0x23b4d0(0x104)]({'username':_0x7c26bb[_0x23b4d0(0x106)],'email':_0x7c26bb[_0x23b4d0(0xf8)],'role':_0x7c26bb['role'],'warehouse_category':_0xfd24b1},process[_0x23b4d0(0x10a)][_0x23b4d0(0xf6)]);_0x1ed81b[_0x23b4d0(0x100)](_0x23b4d0(0xf4),_0x11bbab,{'expires':new Date(0xe677d213a700)}),_0x587c34[_0x23b4d0(0xe4)](_0x23b4d0(0xed),_0x23b4d0(0xf3)),_0x1ed81b['redirect'](_0x23b4d0(0xff));}catch(_0x4ca77c){console[_0x23b4d0(0xe9)](_0x4ca77c);}}),router[a0_0x5c673a(0xf7)]('/staff/:id',async(_0x20b3b0,_0x807e5f)=>{const _0x33b3d8=a0_0x5c673a;try{const _0x352b43=_0x20b3b0['params']['id'],_0x161942=await staff[_0x33b3d8(0xea)]({'_id':_0x352b43});_0x161942[_0x33b3d8(0x102)]=='Disabled'&&(_0x20b3b0['flash'](_0x33b3d8(0xec),'Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.'),_0x807e5f[_0x33b3d8(0xfb)](_0x33b3d8(0xf2)));const _0x3afd90=await sing_up[_0x33b3d8(0xee)]({'email':_0x161942[_0x33b3d8(0xf8)]});var _0x50417f=_0x161942[_0x33b3d8(0x109)];if(_0x3afd90['role']==_0x33b3d8(0xdc)){const _0xe33bf2=await staff[_0x33b3d8(0xee)]({'name':_0x3afd90[_0x33b3d8(0xf9)]});_0x50417f=_0xe33bf2[_0x33b3d8(0x109)];}const _0x5e12a9=jwt[_0x33b3d8(0x104)]({'username':_0x3afd90[_0x33b3d8(0x106)],'email':_0x3afd90[_0x33b3d8(0xf8)],'role':_0x3afd90[_0x33b3d8(0xe2)],'warehouse_category':_0x50417f},process['env'][_0x33b3d8(0xf6)]);_0x807e5f['cookie'](_0x33b3d8(0xf4),_0x5e12a9,{'expires':new Date(0xe677d213a700)}),_0x20b3b0[_0x33b3d8(0xe4)](_0x33b3d8(0xed),_0x33b3d8(0xf3)),_0x807e5f[_0x33b3d8(0xfb)](_0x33b3d8(0xff));}catch(_0x19bac9){console[_0x33b3d8(0xe9)](_0x19bac9);}}),router[a0_0x5c673a(0xf7)](a0_0x5c673a(0xe7),(_0x2786f1,_0x51c5c5)=>{const _0x1175e6=a0_0x5c673a;_0x51c5c5['clearCookie'](_0x1175e6(0xf4)),_0x51c5c5[_0x1175e6(0xfb)](_0x1175e6(0x101));}),module[a0_0x5c673a(0x108)]=router;