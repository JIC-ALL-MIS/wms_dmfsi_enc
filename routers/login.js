const a0_0xcf4413=a0_0x35f9;(function(_0x833c0d,_0x5d2d14){const _0x42b046=a0_0x35f9,_0x587a7c=_0x833c0d();while(!![]){try{const _0x356a79=parseInt(_0x42b046(0xbe))/0x1*(parseInt(_0x42b046(0xda))/0x2)+parseInt(_0x42b046(0xd9))/0x3*(-parseInt(_0x42b046(0xdb))/0x4)+-parseInt(_0x42b046(0xcc))/0x5*(parseInt(_0x42b046(0xd5))/0x6)+-parseInt(_0x42b046(0xd6))/0x7+-parseInt(_0x42b046(0xd0))/0x8+parseInt(_0x42b046(0xd2))/0x9+parseInt(_0x42b046(0xc4))/0xa;if(_0x356a79===_0x5d2d14)break;else _0x587a7c['push'](_0x587a7c['shift']());}catch(_0x1a1c2f){_0x587a7c['push'](_0x587a7c['shift']());}}}(a0_0x7aa1,0x915ad));function a0_0x35f9(_0x2be995,_0x22fa00){const _0x7aa1b8=a0_0x7aa1();return a0_0x35f9=function(_0x35f946,_0x1fcd8a){_0x35f946=_0x35f946-0xbd;let _0x48e26a=_0x7aa1b8[_0x35f946];return _0x48e26a;},a0_0x35f9(_0x2be995,_0x22fa00);}const express=require(a0_0xcf4413(0xf0)),app=express(),router=express['Router'](),{sing_up,staff,profile,master_shop}=require(a0_0xcf4413(0xc6)),bcrypt=require('bcryptjs'),jwt=require(a0_0xcf4413(0xe4)),auth=require('../middleware/auth');router[a0_0xcf4413(0xed)]('/',async(_0x248047,_0x1d8bc1)=>{const _0x97907e=a0_0xcf4413;try{const _0x86bcb3=await master_shop[_0x97907e(0xeb)]();_0x1d8bc1[_0x97907e(0xde)](_0x97907e(0xe2),{'success':_0x248047[_0x97907e(0xea)](_0x97907e(0xf2)),'errors':_0x248047[_0x97907e(0xea)](_0x97907e(0xc0)),'master_shop':_0x86bcb3});}catch(_0x23dee9){console[_0x97907e(0xca)](_0x23dee9);}}),router[a0_0xcf4413(0xed)](a0_0xcf4413(0xbf),async(_0x1978cc,_0x38b053)=>{const _0x383459=a0_0xcf4413;try{const _0x3b6fe2=await master_shop[_0x383459(0xeb)]();_0x38b053[_0x383459(0xde)](_0x383459(0xf1),{'success':_0x1978cc[_0x383459(0xea)](_0x383459(0xf2)),'errors':_0x1978cc['flash'](_0x383459(0xc0)),'master_shop':_0x3b6fe2});}catch(_0xc7c15e){console[_0x383459(0xca)](_0xc7c15e);}}),router[a0_0xcf4413(0xed)](a0_0xcf4413(0xd7),async(_0x50e163,_0x25b129)=>{const _0x45a56d=a0_0xcf4413;try{const _0x3a7808=await master_shop[_0x45a56d(0xeb)]();console[_0x45a56d(0xca)](_0x45a56d(0xd8),_0x3a7808),_0x25b129[_0x45a56d(0xde)](_0x45a56d(0xe2),{'success':_0x50e163[_0x45a56d(0xea)]('success'),'errors':_0x50e163[_0x45a56d(0xea)](_0x45a56d(0xc0)),'master_shop':_0x3a7808});}catch(_0x4aca20){console[_0x45a56d(0xca)](_0x4aca20);}}),router[a0_0xcf4413(0xe0)]('/login',async(_0x1067f4,_0x41ee76)=>{const _0x259573=a0_0xcf4413;try{const _0x2a43b2=_0x1067f4[_0x259573(0xc3)][_0x259573(0xd3)],_0x3dbbe2=await sing_up['findOne']({'email':_0x2a43b2});if(!_0x3dbbe2)return _0x1067f4[_0x259573(0xea)](_0x259573(0xc0),_0x259573(0xcf)),_0x41ee76[_0x259573(0xce)]('/login');var _0x573ce6='All';if(_0x3dbbe2['role']==_0x259573(0xc9)){const _0x34ffeb=await staff[_0x259573(0xec)]({'name':_0x3dbbe2[_0x259573(0xe1)]});if(_0x34ffeb[_0x259573(0xd4)]==_0x259573(0xee))return _0x1067f4[_0x259573(0xea)]('errors',_0x259573(0xe3)),_0x41ee76[_0x259573(0xce)](_0x259573(0xd7));_0x573ce6=_0x34ffeb['warehouse_category'];}const _0x3e4884=_0x1067f4['body'][_0x259573(0xe8)],_0x3feabe=await bcrypt['compare'](_0x3e4884,_0x3dbbe2['password']);if(_0x3feabe==![])return _0x1067f4['flash'](_0x259573(0xc0),_0x259573(0xdc)),_0x41ee76['redirect'](_0x259573(0xd7));const _0x4f85d3=jwt[_0x259573(0xbd)]({'username':_0x3dbbe2[_0x259573(0xe5)],'email':_0x3dbbe2[_0x259573(0xd3)],'role':_0x3dbbe2[_0x259573(0xdd)],'warehouse_category':_0x573ce6},process[_0x259573(0xcd)][_0x259573(0xc7)]);_0x41ee76[_0x259573(0xc8)](_0x259573(0xe9),_0x4f85d3,{'expires':new Date(0xe677d213a700)}),_0x1067f4[_0x259573(0xea)](_0x259573(0xf2),_0x259573(0xcb)),_0x41ee76[_0x259573(0xce)](_0x259573(0xe6));}catch(_0x542a3a){console[_0x259573(0xca)](_0x542a3a);}}),router[a0_0xcf4413(0xed)](a0_0xcf4413(0xc2),async(_0x81c248,_0x4d0699)=>{const _0x1d4477=a0_0xcf4413;try{const _0x3fbc6a=_0x81c248['params']['id'],_0x2714ac=await staff[_0x1d4477(0xe7)]({'_id':_0x3fbc6a});_0x2714ac[_0x1d4477(0xd4)]=='Disabled'&&(_0x81c248[_0x1d4477(0xea)](_0x1d4477(0xc0),_0x1d4477(0xe3)),_0x4d0699[_0x1d4477(0xce)]('/staff/view'));const _0x244e08=await sing_up[_0x1d4477(0xec)]({'email':_0x2714ac[_0x1d4477(0xd3)]});var _0x2e83af=_0x1d4477(0xc1);if(_0x244e08[_0x1d4477(0xdd)]==_0x1d4477(0xc9)){const _0x383486=await staff[_0x1d4477(0xec)]({'name':_0x244e08[_0x1d4477(0xe1)]});_0x2e83af=_0x383486[_0x1d4477(0xef)];}const _0x2d62f8=jwt['sign']({'username':_0x244e08[_0x1d4477(0xe5)],'email':_0x244e08['email'],'role':_0x244e08[_0x1d4477(0xdd)],'warehouse_category':_0x2e83af},process['env'][_0x1d4477(0xc7)]);_0x4d0699['cookie']('jwt',_0x2d62f8,{'expires':new Date(0xe677d213a700)}),_0x81c248[_0x1d4477(0xea)](_0x1d4477(0xf2),_0x1d4477(0xcb)),_0x4d0699['redirect'](_0x1d4477(0xe6));}catch(_0x5b0c22){console[_0x1d4477(0xca)](_0x5b0c22);}}),router[a0_0xcf4413(0xed)](a0_0xcf4413(0xd1),(_0x35610f,_0x1f4357)=>{const _0x3ab029=a0_0xcf4413;_0x1f4357[_0x3ab029(0xdf)](_0x3ab029(0xe9)),_0x1f4357[_0x3ab029(0xce)](_0x3ab029(0xd7));}),module[a0_0xcf4413(0xc5)]=router;function a0_0x7aa1(){const _0xbf2809=['log','login\x20successfully','5RJfqXF','env','redirect','your\x20email\x20is\x20not\x20register','6721136cUdZFl','/logout','6477561eLwJiO','email','status','6686562cGhuRM','4523834nMdFrA','/login','login\x20master','398091NvJidR','942772fPgaQA','28eEDOda','your\x20password\x20is\x20wrong','role','render','clearCookie','post','name','login','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','jsonwebtoken','username','/index','findById','password','jwt','flash','find','findOne','get','Disabled','warehouse_category','express','validate','success','sign','1uSUVsL','/validate','errors','All','/staff/:id','body','29339680ACjeEu','exports','../models/all_models','secret_key','cookie','staff'];a0_0x7aa1=function(){return _0xbf2809;};return a0_0x7aa1();}