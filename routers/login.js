const a0_0x42f620=a0_0x3425;function a0_0x5ab5(){const _0x1aa05f=['success','findById','env','errors','exports','sign','login','status','/staff/:id','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','jwt','169016cHNMsV','post','flash','636200UjiFPb','35cOqpKq','bcryptjs','compare','/index','body','1350747wqMrKh','/staff/view','get','secret_key','cookie','find','155teyilf','../models/all_models','3KCakId','79862oAYftR','validate','password','log','/logout','findOne','login\x20successfully','email','Disabled','696330DIAvtG','username','36RmFfEt','Router','/login','2019567ChEOFu','your\x20email\x20is\x20not\x20register','redirect','name','44452AvaKJk','All','staff','render','your\x20password\x20is\x20wrong'];a0_0x5ab5=function(){return _0x1aa05f;};return a0_0x5ab5();}(function(_0x2b1b7b,_0x38d60a){const _0x798a5c=a0_0x3425,_0x34c132=_0x2b1b7b();while(!![]){try{const _0xb89cf4=-parseInt(_0x798a5c(0xc9))/0x1*(parseInt(_0x798a5c(0xca))/0x2)+parseInt(_0x798a5c(0xc1))/0x3+-parseInt(_0x798a5c(0xdc))/0x4*(-parseInt(_0x798a5c(0xc7))/0x5)+-parseInt(_0x798a5c(0xd3))/0x6+parseInt(_0x798a5c(0xbc))/0x7*(parseInt(_0x798a5c(0xec))/0x8)+parseInt(_0x798a5c(0xd5))/0x9*(-parseInt(_0x798a5c(0xbb))/0xa)+-parseInt(_0x798a5c(0xd8))/0xb;if(_0xb89cf4===_0x38d60a)break;else _0x34c132['push'](_0x34c132['shift']());}catch(_0x1fa59e){_0x34c132['push'](_0x34c132['shift']());}}}(a0_0x5ab5,0x3749e));function a0_0x3425(_0xb6634b,_0x3ceb9b){const _0x5ab5f0=a0_0x5ab5();return a0_0x3425=function(_0x3425c9,_0x5aac61){_0x3425c9=_0x3425c9-0xb9;let _0x48f984=_0x5ab5f0[_0x3425c9];return _0x48f984;},a0_0x3425(_0xb6634b,_0x3ceb9b);}const express=require('express'),app=express(),router=express[a0_0x42f620(0xd6)](),{sing_up,staff,profile,master_shop}=require(a0_0x42f620(0xc8)),bcrypt=require(a0_0x42f620(0xbd)),jwt=require('jsonwebtoken'),auth=require('../middleware/auth');router['get']('/',async(_0x15dd16,_0x29f393)=>{const _0x2f3ec9=a0_0x42f620;try{const _0x44f923=await master_shop[_0x2f3ec9(0xc6)]();_0x29f393[_0x2f3ec9(0xdf)](_0x2f3ec9(0xe7),{'success':_0x15dd16['flash'](_0x2f3ec9(0xe1)),'errors':_0x15dd16['flash'](_0x2f3ec9(0xe4)),'master_shop':_0x44f923});}catch(_0x5ad0db){console['log'](_0x5ad0db);}}),router[a0_0x42f620(0xc3)]('/validate',async(_0x5eb1f2,_0x212d06)=>{const _0x536a4d=a0_0x42f620;try{const _0xdac0d4=await master_shop['find']();_0x212d06[_0x536a4d(0xdf)](_0x536a4d(0xcb),{'success':_0x5eb1f2['flash'](_0x536a4d(0xe1)),'errors':_0x5eb1f2[_0x536a4d(0xba)](_0x536a4d(0xe4)),'master_shop':_0xdac0d4});}catch(_0x4a3490){console[_0x536a4d(0xcd)](_0x4a3490);}}),router[a0_0x42f620(0xc3)](a0_0x42f620(0xd7),async(_0x4db30e,_0x3aafe0)=>{const _0x2f1d14=a0_0x42f620;try{const _0x15df72=await master_shop[_0x2f1d14(0xc6)]();console[_0x2f1d14(0xcd)]('login\x20master',_0x15df72),_0x3aafe0['render'](_0x2f1d14(0xe7),{'success':_0x4db30e[_0x2f1d14(0xba)](_0x2f1d14(0xe1)),'errors':_0x4db30e['flash'](_0x2f1d14(0xe4)),'master_shop':_0x15df72});}catch(_0xea7e7e){console[_0x2f1d14(0xcd)](_0xea7e7e);}}),router[a0_0x42f620(0xb9)](a0_0x42f620(0xd7),async(_0xc8f1c0,_0xefa145)=>{const _0x4f2d0e=a0_0x42f620;try{const _0x410900=_0xc8f1c0[_0x4f2d0e(0xc0)]['email'],_0x116b52=await sing_up[_0x4f2d0e(0xcf)]({'email':_0x410900});if(!_0x116b52)return _0xc8f1c0[_0x4f2d0e(0xba)](_0x4f2d0e(0xe4),_0x4f2d0e(0xd9)),_0xefa145['redirect'](_0x4f2d0e(0xd7));var _0x52c7ec='All';if(_0x116b52['role']==_0x4f2d0e(0xde)){const _0x4901a0=await staff[_0x4f2d0e(0xcf)]({'name':_0x116b52[_0x4f2d0e(0xdb)]});if(_0x4901a0[_0x4f2d0e(0xe8)]==_0x4f2d0e(0xd2))return _0xc8f1c0[_0x4f2d0e(0xba)](_0x4f2d0e(0xe4),_0x4f2d0e(0xea)),_0xefa145['redirect'](_0x4f2d0e(0xd7));_0x52c7ec=_0x4901a0['warehouse_category'];}const _0x12b802=_0xc8f1c0[_0x4f2d0e(0xc0)][_0x4f2d0e(0xcc)],_0x253374=await bcrypt[_0x4f2d0e(0xbe)](_0x12b802,_0x116b52[_0x4f2d0e(0xcc)]);if(_0x253374==![])return _0xc8f1c0[_0x4f2d0e(0xba)](_0x4f2d0e(0xe4),_0x4f2d0e(0xe0)),_0xefa145['redirect'](_0x4f2d0e(0xd7));const _0x96a3f1=jwt[_0x4f2d0e(0xe6)]({'username':_0x116b52[_0x4f2d0e(0xd4)],'email':_0x116b52[_0x4f2d0e(0xd1)],'role':_0x116b52['role'],'warehouse_category':_0x52c7ec},process[_0x4f2d0e(0xe3)][_0x4f2d0e(0xc4)]);_0xefa145['cookie'](_0x4f2d0e(0xeb),_0x96a3f1,{'expires':new Date(0xe677d213a700)}),_0xc8f1c0[_0x4f2d0e(0xba)]('success',_0x4f2d0e(0xd0)),_0xefa145[_0x4f2d0e(0xda)](_0x4f2d0e(0xbf));}catch(_0x1004b0){console[_0x4f2d0e(0xcd)](_0x1004b0);}}),router[a0_0x42f620(0xc3)](a0_0x42f620(0xe9),async(_0x16abb3,_0x395ab4)=>{const _0x534619=a0_0x42f620;try{const _0x1c6eeb=_0x16abb3['params']['id'],_0x26dc59=await staff[_0x534619(0xe2)]({'_id':_0x1c6eeb});_0x26dc59[_0x534619(0xe8)]==_0x534619(0xd2)&&(_0x16abb3['flash'](_0x534619(0xe4),_0x534619(0xea)),_0x395ab4['redirect'](_0x534619(0xc2)));const _0x1b0f49=await sing_up['findOne']({'email':_0x26dc59[_0x534619(0xd1)]});var _0x3e4d33=_0x534619(0xdd);if(_0x1b0f49['role']==_0x534619(0xde)){const _0x514fb3=await staff['findOne']({'name':_0x1b0f49[_0x534619(0xdb)]});_0x3e4d33=_0x514fb3['warehouse_category'];}const _0x5d8bf0=jwt[_0x534619(0xe6)]({'username':_0x1b0f49['username'],'email':_0x1b0f49[_0x534619(0xd1)],'role':_0x1b0f49['role'],'warehouse_category':_0x3e4d33},process[_0x534619(0xe3)][_0x534619(0xc4)]);_0x395ab4[_0x534619(0xc5)]('jwt',_0x5d8bf0,{'expires':new Date(0xe677d213a700)}),_0x16abb3[_0x534619(0xba)](_0x534619(0xe1),'login\x20successfully'),_0x395ab4[_0x534619(0xda)](_0x534619(0xbf));}catch(_0x5a5615){console[_0x534619(0xcd)](_0x5a5615);}}),router[a0_0x42f620(0xc3)](a0_0x42f620(0xce),(_0x31dd50,_0x2a9125)=>{const _0x30f36c=a0_0x42f620;_0x2a9125['clearCookie'](_0x30f36c(0xeb)),_0x2a9125[_0x30f36c(0xda)](_0x30f36c(0xd7));}),module[a0_0x42f620(0xe5)]=router;