const a0_0xffafdc=a0_0x3637;function a0_0x1e90(){const _0x1d2cda=['flash','ALL','findOne','edit\x20warehouse\x20data','errors','Chinese','user','status','Rack\x20B','French','room','10XDumdi','Hindi','render','Ingredients','Shelves','/view','../models/all_models','/view/:id','980385hSkuBU','Rack\x201','Rack\x20F','find','2857005hjnzAR','log','German','post','edit\x20warehouse\x20purchases_data','Router','Arabic','../middleware/auth','exports','285060KoCGAk','1112360EWpuXx','get','name','warehouse','Raw\x20Materials','redirect','Receiving\x20Area','body','success','English','language','save','/warehouse/view','3691qKDrui','7OCbqwM','master','params','English\x20(US)','Packaging','address','Rack\x20E','../public/language/languages.json','593792qKjNUb','findById','\x20warehouse\x20is\x20add\x20successfully','Rack\x20C','Rack\x202','Arabic\x20(ae)','Portuguese\x20(BR)','4rMhgPd','371982sBnedt','Portuguese','Spanish'];a0_0x1e90=function(){return _0x1d2cda;};return a0_0x1e90();}(function(_0x1d3bfd,_0x344394){const _0x214205=a0_0x3637,_0xc27a3a=_0x1d3bfd();while(!![]){try{const _0x3318d7=parseInt(_0x214205(0x215))/0x1*(parseInt(_0x214205(0x225))/0x2)+-parseInt(_0x214205(0x226))/0x3+parseInt(_0x214205(0x208))/0x4+-parseInt(_0x214205(0x1fa))/0x5+-parseInt(_0x214205(0x207))/0x6+parseInt(_0x214205(0x216))/0x7*(-parseInt(_0x214205(0x21e))/0x8)+parseInt(_0x214205(0x1fe))/0x9*(parseInt(_0x214205(0x1f2))/0xa);if(_0x3318d7===_0x344394)break;else _0xc27a3a['push'](_0xc27a3a['shift']());}catch(_0x3a43a2){_0xc27a3a['push'](_0xc27a3a['shift']());}}}(a0_0x1e90,0x27558));function a0_0x3637(_0x595aeb,_0x1ed268){const _0x1e901b=a0_0x1e90();return a0_0x3637=function(_0x363777,_0x4bedf4){_0x363777=_0x363777-0x1e8;let _0x10d001=_0x1e901b[_0x363777];return _0x10d001;},a0_0x3637(_0x595aeb,_0x1ed268);}const express=require('express'),app=express(),router=express[a0_0xffafdc(0x203)](),{profile,master_shop,categories,brands,units,product,warehouse,purchases}=require(a0_0xffafdc(0x1f8)),auth=require(a0_0xffafdc(0x205)),users=require(a0_0xffafdc(0x21d));router[a0_0xffafdc(0x209)](a0_0xffafdc(0x1f7),auth,async(_0x27c2d9,_0x11456f)=>{const _0x55e7f3=a0_0xffafdc;try{const {username:_0x3f52bf,email:_0x2aec8e,role:_0x540cbd}=_0x27c2d9[_0x55e7f3(0x1ed)],_0x51d5c6=_0x27c2d9['user'],_0x481299=await profile[_0x55e7f3(0x1e9)]({'email':_0x51d5c6['email']}),_0x3ca71a=await master_shop['find']();console[_0x55e7f3(0x1ff)]('master',_0x3ca71a);const _0x4bc14e=await warehouse[_0x55e7f3(0x1fd)]();var _0x39e34a=[_0x55e7f3(0x1fb),_0x55e7f3(0x222),'Rack\x20A',_0x55e7f3(0x1ef),_0x55e7f3(0x221),'Rack\x20D',_0x55e7f3(0x21c),_0x55e7f3(0x1fc),_0x55e7f3(0x20e),_0x55e7f3(0x1f6)],_0x48cb0d=[_0x55e7f3(0x20c),'Finished\x20Goods'],_0xcf77ef=[_0x55e7f3(0x1e8),_0x55e7f3(0x21a),_0x55e7f3(0x1f5)];if(_0x3ca71a[0x0]['language']==_0x55e7f3(0x219)){var _0x28dd4d=users[_0x55e7f3(0x211)];console['log'](_0x28dd4d);}else{if(_0x3ca71a[0x0][_0x55e7f3(0x212)]=='Hindi')var _0x28dd4d=users['Hindi'];else{if(_0x3ca71a[0x0][_0x55e7f3(0x212)]=='German')var _0x28dd4d=users[_0x55e7f3(0x200)];else{if(_0x3ca71a[0x0][_0x55e7f3(0x212)]=='Spanish')var _0x28dd4d=users[_0x55e7f3(0x228)];else{if(_0x3ca71a[0x0][_0x55e7f3(0x212)]==_0x55e7f3(0x1f0))var _0x28dd4d=users[_0x55e7f3(0x1f0)];else{if(_0x3ca71a[0x0][_0x55e7f3(0x212)]==_0x55e7f3(0x224))var _0x28dd4d=users[_0x55e7f3(0x227)];else{if(_0x3ca71a[0x0][_0x55e7f3(0x212)]=='Chinese')var _0x28dd4d=users[_0x55e7f3(0x1ec)];else{if(_0x3ca71a[0x0]['language']=='Arabic\x20(ae)')var _0x28dd4d=users['Arabic'];}}}}}}}_0x11456f[_0x55e7f3(0x1f4)]('warehouse',{'success':_0x27c2d9[_0x55e7f3(0x229)](_0x55e7f3(0x210)),'errors':_0x27c2d9['flash'](_0x55e7f3(0x1eb)),'user':_0x4bc14e,'profile':_0x481299,'master_shop':_0x3ca71a,'role':_0x51d5c6,'language':_0x28dd4d,'rooms_data':_0x39e34a,'rawfinished_data':_0x48cb0d,'vategory_data':_0xcf77ef});}catch(_0x1705e6){console['log'](_0x1705e6);}}),router[a0_0xffafdc(0x201)](a0_0xffafdc(0x1f7),auth,async(_0x3f4a0c,_0x41b3ec)=>{const _0x21bebe=a0_0xffafdc;try{const {name:_0xf15430,address:_0x5de589,status:_0x4d772e,Room_name:_0x40b669,rawfinished:_0x53cc95,category_name:_0x52c35f}=_0x3f4a0c[_0x21bebe(0x20f)],_0x2c95e9=new warehouse({'name':_0xf15430,'address':_0x5de589,'status':_0x4d772e,'room':_0x40b669,'warehouse_category':_0x53cc95,'category':_0x52c35f}),_0x59c313=await warehouse[_0x21bebe(0x1e9)]({'name':_0xf15430,'room':_0x40b669});_0x59c313?_0x3f4a0c['flash'](_0x21bebe(0x1eb),_0xf15430+'\x20warehouse\x20is\x20alredy\x20added.\x20please\x20choose\x20another'):_0x3f4a0c[_0x21bebe(0x229)]('success',_0xf15430+_0x21bebe(0x220));const _0x1a8548=await _0x2c95e9[_0x21bebe(0x213)]();_0x41b3ec[_0x21bebe(0x20d)](_0x21bebe(0x214));}catch(_0x26b737){console[_0x21bebe(0x1ff)](_0x26b737);}}),router[a0_0xffafdc(0x209)]('/view/:id',auth,async(_0x391d34,_0x571de8)=>{const _0x32822a=a0_0xffafdc;try{const _0x3a199e=_0x391d34[_0x32822a(0x218)]['id'],_0x27c6a2=await master_shop[_0x32822a(0x1fd)]();console[_0x32822a(0x1ff)](_0x32822a(0x217),_0x27c6a2);const _0x4268db=await warehouse['findById'](_0x3a199e);if(_0x27c6a2[0x0][_0x32822a(0x212)]=='English\x20(US)'){var _0xd0c1e5=users[_0x32822a(0x211)];console[_0x32822a(0x1ff)](_0xd0c1e5);}else{if(_0x27c6a2[0x0][_0x32822a(0x212)]=='Hindi')var _0xd0c1e5=users[_0x32822a(0x1f3)];else{if(_0x27c6a2[0x0][_0x32822a(0x212)]==_0x32822a(0x200))var _0xd0c1e5=users['German'];else{if(_0x27c6a2[0x0][_0x32822a(0x212)]=='Spanish')var _0xd0c1e5=users[_0x32822a(0x228)];else{if(_0x27c6a2[0x0][_0x32822a(0x212)]==_0x32822a(0x1f0))var _0xd0c1e5=users[_0x32822a(0x1f0)];else{if(_0x27c6a2[0x0][_0x32822a(0x212)]=='Portuguese\x20(BR)')var _0xd0c1e5=users[_0x32822a(0x227)];else{if(_0x27c6a2[0x0][_0x32822a(0x212)]=='Chinese')var _0xd0c1e5=users[_0x32822a(0x1ec)];else{if(_0x27c6a2[0x0][_0x32822a(0x212)]==_0x32822a(0x223))var _0xd0c1e5=users[_0x32822a(0x204)];}}}}}}}_0x571de8[_0x32822a(0x1f4)](_0x32822a(0x20b),{'success':_0x391d34[_0x32822a(0x229)](_0x32822a(0x210)),'errors':_0x391d34[_0x32822a(0x229)]('errors'),'master_shop':_0x27c6a2,'user':_0x4268db,'language':_0xd0c1e5});}catch(_0x50ed85){console[_0x32822a(0x1ff)](_0x50ed85);}}),router[a0_0xffafdc(0x201)](a0_0xffafdc(0x1f9),auth,async(_0x822d87,_0x237c4b)=>{const _0x49354e=a0_0xffafdc;try{const _0x296498=_0x822d87[_0x49354e(0x218)]['id'],_0x390d1b=await warehouse[_0x49354e(0x21f)](_0x296498);console[_0x49354e(0x1ff)](_0x49354e(0x1ea),_0x390d1b[_0x49354e(0x20a)]);const {name:_0x54603e,address:_0x200008,status:_0x1b2e5c,Room_name:_0x3a4f8f}=_0x822d87[_0x49354e(0x20f)],_0x49522e=await warehouse[_0x49354e(0x21f)](_0x296498);console[_0x49354e(0x1ff)]('edit\x20warehouse\x20warehouse_data',_0x49522e);const _0x1f1b4a=await purchases['find']({'warehouse_name':_0x390d1b[_0x49354e(0x20a)],'room':_0x3a4f8f});console[_0x49354e(0x1ff)](_0x49354e(0x202),_0x1f1b4a),_0x390d1b['name']=_0x54603e,_0x390d1b[_0x49354e(0x21b)]=_0x200008,_0x390d1b[_0x49354e(0x1ee)]=_0x1b2e5c,_0x390d1b[_0x49354e(0x1f1)]=_0x3a4f8f;const _0x7fb5bf=await _0x390d1b['save']();_0x822d87[_0x49354e(0x229)](_0x49354e(0x210),'warehouse\x20data\x20update\x20successfully'),_0x237c4b['redirect'](_0x49354e(0x214));}catch(_0x589292){console[_0x49354e(0x1ff)](_0x589292);}}),module[a0_0xffafdc(0x206)]=router;