const a0_0x1cabaa=a0_0x1deb;(function(_0x278479,_0x293e68){const _0x262535=a0_0x1deb,_0x1aae7e=_0x278479();while(!![]){try{const _0x2c3fc5=parseInt(_0x262535(0xd6))/0x1*(-parseInt(_0x262535(0xcf))/0x2)+-parseInt(_0x262535(0xf2))/0x3+parseInt(_0x262535(0xcd))/0x4*(-parseInt(_0x262535(0xdb))/0x5)+-parseInt(_0x262535(0xea))/0x6+parseInt(_0x262535(0xf5))/0x7+-parseInt(_0x262535(0xef))/0x8+parseInt(_0x262535(0xf9))/0x9*(parseInt(_0x262535(0xbf))/0xa);if(_0x2c3fc5===_0x293e68)break;else _0x1aae7e['push'](_0x1aae7e['shift']());}catch(_0x337776){_0x1aae7e['push'](_0x1aae7e['shift']());}}}(a0_0x137f,0x4834c));function a0_0x137f(){const _0x71ad9c=['findOne','get','errors','34648ukFSca','save','6ygjNIi','redirect','English','success','hash','render','status','141409UsxrJQ','bcryptjs','name','/view/:id','Hindi','115rYLtfb','exports','English\x20(US)','flash','/view','staff','Email\x20','Spanish','language','/staff/view','Arabic','position','../models/all_models','warehouse','express','2842536DUTPlF','find','back','mobile','Raw\x20Materials','847864wmuNiw','Chinese','Portuguese\x20(BR)','1245435ANOtKJ','json','../public/language/languages.json','1598170hmqlHt','aggregate','firstname','Portuguese','45837jcAqtm','Enabled','email','German','French','user','body','Arabic\x20(ae)','3310dlgtRm','\x20is\x20add\x20successfully','warehouse_category','Router','Finished\x20Goods','password','$name','params','findById','post','log'];a0_0x137f=function(){return _0x71ad9c;};return a0_0x137f();}const express=require(a0_0x1cabaa(0xe9)),app=express(),router=express[a0_0x1cabaa(0xc2)](),bcrypt=require(a0_0x1cabaa(0xd7)),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require(a0_0x1cabaa(0xe7)),auth=require('../middleware/auth'),users=require(a0_0x1cabaa(0xf4));function a0_0x1deb(_0x5d5609,_0x1910da){const _0x137f49=a0_0x137f();return a0_0x1deb=function(_0x1debba,_0x1fb446){_0x1debba=_0x1debba-0xbc;let _0x3d66a9=_0x137f49[_0x1debba];return _0x3d66a9;},a0_0x1deb(_0x5d5609,_0x1910da);}router['get']('/view',auth,async(_0x40d9f7,_0x37c6ff)=>{const _0x385468=a0_0x1cabaa;try{const {username:_0x4cf8ae,email:_0x4764ba,role:_0x57a442}=_0x40d9f7[_0x385468(0xbc)],_0x2c5e0f=_0x40d9f7[_0x385468(0xbc)],_0x1f089c=await profile[_0x385468(0xca)]({'email':_0x2c5e0f[_0x385468(0xfb)]}),_0x66c7fc=await master_shop[_0x385468(0xeb)]();console[_0x385468(0xc9)]('master',_0x66c7fc),warehouse_data=await warehouse[_0x385468(0xf6)]([{'$match':{'status':_0x385468(0xfa)}},{'$group':{'_id':_0x385468(0xc5),'name':{'$first':_0x385468(0xc5)}}}]);const _0x51b74a=await staff[_0x385468(0xeb)]();console['log'](_0x51b74a);if(_0x66c7fc[0x0][_0x385468(0xe3)]==_0x385468(0xdd)){var _0x5d4172=users[_0x385468(0xd1)];console[_0x385468(0xc9)](_0x5d4172);}else{if(_0x66c7fc[0x0][_0x385468(0xe3)]==_0x385468(0xda))var _0x5d4172=users[_0x385468(0xda)];else{if(_0x66c7fc[0x0][_0x385468(0xe3)]==_0x385468(0xfc))var _0x5d4172=users[_0x385468(0xfc)];else{if(_0x66c7fc[0x0][_0x385468(0xe3)]==_0x385468(0xe2))var _0x5d4172=users[_0x385468(0xe2)];else{if(_0x66c7fc[0x0][_0x385468(0xe3)]==_0x385468(0xfd))var _0x5d4172=users[_0x385468(0xfd)];else{if(_0x66c7fc[0x0][_0x385468(0xe3)]==_0x385468(0xf1))var _0x5d4172=users[_0x385468(0xf8)];else{if(_0x66c7fc[0x0]['language']==_0x385468(0xf0))var _0x5d4172=users[_0x385468(0xf0)];else{if(_0x66c7fc[0x0]['language']==_0x385468(0xbe))var _0x5d4172=users[_0x385468(0xe5)];}}}}}}}let _0x3a5acd=[_0x385468(0xee),'Finished\x20Goods'];_0x37c6ff[_0x385468(0xd4)]('staff',{'success':_0x40d9f7['flash']('success'),'errors':_0x40d9f7[_0x385468(0xde)](_0x385468(0xcc)),'role':_0x2c5e0f,'profile':_0x1f089c,'master_shop':_0x66c7fc,'user':_0x51b74a,'language':_0x5d4172,'warehouse':warehouse_data,'warehouse_cat':_0x3a5acd});}catch(_0x10b280){console[_0x385468(0xc9)](_0x10b280);}}),router['post'](a0_0x1cabaa(0xdf),auth,async(_0x1544be,_0x431fb8)=>{const _0x4b1660=a0_0x1cabaa;try{const {name:_0x31661d,email:_0x5c65a8,mobile:_0x2c3fd0,password:_0x3ee49d,status:_0x5e462c,warehouse:_0x290d32,position:_0x6d7cef,warehouse_cat:_0x4cff4f}=_0x1544be[_0x4b1660(0xbd)],_0x7a4e68=await bcrypt[_0x4b1660(0xd3)](_0x3ee49d,0xa),_0x4da708=new staff({'name':_0x31661d,'email':_0x5c65a8,'mobile':_0x2c3fd0,'status':_0x5e462c,'warehouse':_0x290d32,'position':_0x6d7cef,'warehouse_category':_0x4cff4f}),_0x267d93=await staff[_0x4b1660(0xca)]({'email':_0x5c65a8});console[_0x4b1660(0xc9)](_0x267d93);if(_0x267d93)return _0x1544be[_0x4b1660(0xde)](_0x4b1660(0xcc),_0x4b1660(0xe1)+_0x5c65a8+'\x20is\x20alredy\x20added.\x20please\x20choose\x20another'),_0x431fb8[_0x4b1660(0xd0)](_0x4b1660(0xec)),![];const _0x3fc107=await _0x4da708[_0x4b1660(0xce)](),_0x12da77=new sing_up({'name':_0x31661d,'email':_0x5c65a8,'password':_0x7a4e68,'role':_0x4b1660(0xe0)}),_0x5795a6=await _0x12da77['save'](),_0x54c9f4=new profile({'firstname':_0x31661d,'email':_0x5c65a8}),_0x1f295c=await _0x54c9f4['save']();_0x1544be[_0x4b1660(0xde)]('success',_0x31661d+_0x4b1660(0xc0)),_0x431fb8['redirect']('/staff/view');}catch(_0x8008d5){console[_0x4b1660(0xc9)](_0x8008d5);}}),router[a0_0x1cabaa(0xcb)](a0_0x1cabaa(0xd9),auth,async(_0x536138,_0x3d62d7)=>{const _0x4e8ea7=a0_0x1cabaa;try{const _0x2d8f64=_0x536138['params']['id'],_0x3fa9d1=await master_shop[_0x4e8ea7(0xeb)](),_0x975e18=await staff[_0x4e8ea7(0xc7)](_0x2d8f64);if(_0x3fa9d1[0x0][_0x4e8ea7(0xe3)]=='English\x20(US)'){var _0x499de4=users[_0x4e8ea7(0xd1)];console['log'](_0x499de4);}else{if(_0x3fa9d1[0x0][_0x4e8ea7(0xe3)]=='Hindi')var _0x499de4=users[_0x4e8ea7(0xda)];else{if(_0x3fa9d1[0x0][_0x4e8ea7(0xe3)]==_0x4e8ea7(0xfc))var _0x499de4=users[_0x4e8ea7(0xfc)];else{if(_0x3fa9d1[0x0][_0x4e8ea7(0xe3)]==_0x4e8ea7(0xe2))var _0x499de4=users[_0x4e8ea7(0xe2)];else{if(_0x3fa9d1[0x0][_0x4e8ea7(0xe3)]==_0x4e8ea7(0xfd))var _0x499de4=users[_0x4e8ea7(0xfd)];else{if(_0x3fa9d1[0x0][_0x4e8ea7(0xe3)]==_0x4e8ea7(0xf1))var _0x499de4=users[_0x4e8ea7(0xf8)];else{if(_0x3fa9d1[0x0]['language']==_0x4e8ea7(0xf0))var _0x499de4=users[_0x4e8ea7(0xf0)];else{if(_0x3fa9d1[0x0][_0x4e8ea7(0xe3)]==_0x4e8ea7(0xbe))var _0x499de4=users['Arabic'];}}}}}}}let _0x4dffec=[_0x4e8ea7(0xee),_0x4e8ea7(0xc3)];_0x3d62d7[_0x4e8ea7(0xd4)](_0x4e8ea7(0xe0),{'success':_0x536138[_0x4e8ea7(0xde)](_0x4e8ea7(0xd2)),'errors':_0x536138[_0x4e8ea7(0xde)]('errors'),'master_shop':_0x3fa9d1,'user':_0x975e18,'language':_0x499de4,'warehouse_cat':_0x4dffec});}catch(_0x3465d1){console[_0x4e8ea7(0xc9)](_0x3465d1);}}),router[a0_0x1cabaa(0xc8)]('/view/:id',auth,async(_0x2e1964,_0x2d2c98)=>{const _0x502168=a0_0x1cabaa;try{const _0x9e3267=_0x2e1964[_0x502168(0xc6)]['id'],_0x440d9c=await staff['findById'](_0x9e3267),{name:_0x4ec607,email:_0x2d9937,mobile:_0x2c23c2,password:_0x1de354,status:_0x2c8795,warehouse:_0x274fa5,position:_0xf8ff31,warehouse_cat:_0x5736fd}=_0x2e1964[_0x502168(0xbd)];_0x440d9c[_0x502168(0xd8)]=_0x4ec607,_0x440d9c['email']=_0x2d9937,_0x440d9c[_0x502168(0xed)]=_0x2c23c2,_0x440d9c[_0x502168(0xc4)]=_0x1de354,_0x440d9c[_0x502168(0xd5)]=_0x2c8795,_0x440d9c[_0x502168(0xe8)]=_0x274fa5,_0x440d9c[_0x502168(0xe6)]=_0xf8ff31,_0x440d9c[_0x502168(0xc1)]=_0x5736fd;const _0x87b9c7=await _0x440d9c[_0x502168(0xce)](),_0x3e4e2e=await profile[_0x502168(0xca)]({'email':_0x2d9937});_0x3e4e2e[_0x502168(0xf7)]=_0x4ec607,_0x3e4e2e[_0x502168(0xfb)]=_0x2d9937,await _0x3e4e2e[_0x502168(0xce)](),_0x2e1964[_0x502168(0xde)]('success','staff\x20data\x20update\x20successfully'),_0x2d2c98[_0x502168(0xd0)](_0x502168(0xe4));}catch(_0x3508e3){console[_0x502168(0xc9)](_0x3508e3),_0x2d2c98[_0x502168(0xd5)](0xc8)[_0x502168(0xf3)](_0x3508e3);}}),module[a0_0x1cabaa(0xdc)]=router;