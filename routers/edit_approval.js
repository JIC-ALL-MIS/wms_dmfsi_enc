function a0_0x2dc1(){const _0x2ec65b=['42248530upVxMY','7KNuVoL','/outgoing','French','Arabic\x20(ae)','render','find','Outgoing\x20Finished\x20Goods','5405416ekcnbA','nodemailer','flash','json','2986520rswxoJ','edit_approvals_view','Chinese','Hindi','/view','findOne','244eZDJEV','invoice','11679849Ztlhfq','adjf','trf','../public/language/languages.json','False','Portuguese\x20(BR)','290PVPXxk','9689dIxPCo','Router','/adjustment_finished','Portuguese','log','25926llyemc','post','outF','language','English','save','Spanish','message','Arabic','success','adj','/adjustment','isAllowEdit','Adjustment\x20Finished\x20Goods','body','/outgoing_finished','German','express','email','Adjustment\x20Raw\x20materials','English\x20(US)','errors','user','Transfer\x20Finished\x20Goods','Outgoing\x20Raw\x20materials','approvals_view','../middleware/auth','Transfer\x20Raw\x20materials','../models/all_models','trff','get','1776726UHJpks'];a0_0x2dc1=function(){return _0x2ec65b;};return a0_0x2dc1();}const a0_0x24f9aa=a0_0x1d5d;(function(_0x317194,_0x2e237c){const _0x4eb322=a0_0x1d5d,_0x216309=_0x317194();while(!![]){try{const _0x16dd28=parseInt(_0x4eb322(0x10b))/0x1*(-parseInt(_0x4eb322(0x102))/0x2)+-parseInt(_0x4eb322(0xef))/0x3+parseInt(_0x4eb322(0xfc))/0x4+-parseInt(_0x4eb322(0x10a))/0x5*(parseInt(_0x4eb322(0x110))/0x6)+parseInt(_0x4eb322(0xf1))/0x7*(-parseInt(_0x4eb322(0xf8))/0x8)+-parseInt(_0x4eb322(0x104))/0x9+parseInt(_0x4eb322(0xf0))/0xa;if(_0x16dd28===_0x2e237c)break;else _0x216309['push'](_0x216309['shift']());}catch(_0x5c1e1c){_0x216309['push'](_0x216309['shift']());}}}(a0_0x2dc1,0xed947));function a0_0x1d5d(_0x5d745b,_0x10984f){const _0x2dc1d2=a0_0x2dc1();return a0_0x1d5d=function(_0x1d5dcd,_0x4904f4){_0x1d5dcd=_0x1d5dcd-0xdf;let _0xded0b1=_0x2dc1d2[_0x1d5dcd];return _0xded0b1;},a0_0x1d5d(_0x5d745b,_0x10984f);}const express=require(a0_0x24f9aa(0xe1)),app=express(),router=express[a0_0x24f9aa(0x10c)](),auth=require(a0_0x24f9aa(0xea)),{profile,master_shop,sales_finished,adjustment_finished,transfers_finished,sales,adjustment,transfers}=require(a0_0x24f9aa(0xec)),users=require(a0_0x24f9aa(0x107)),nodemailer=require(a0_0x24f9aa(0xf9));router['get'](a0_0x24f9aa(0x100),auth,async(_0x59b56c,_0x39afcc)=>{const _0x779a59=a0_0x24f9aa;try{const {username:_0x441c3f,email:_0xad079b,role:_0x2d4545}=_0x59b56c[_0x779a59(0xe6)],_0x3372b0=_0x59b56c[_0x779a59(0xe6)],_0x1b35d1=await profile['findOne']({'email':_0x3372b0[_0x779a59(0xe2)]}),_0x523d9f=await master_shop[_0x779a59(0xf6)](),_0x54f7b5=await sales[_0x779a59(0xf6)]({'finalize':'False'}),_0x56a3e7=await adjustment['find']({'finalize':_0x779a59(0x108)}),_0x39c04e=await transfers[_0x779a59(0xf6)]({'finalize':_0x779a59(0x108)});if(_0x523d9f[0x0][_0x779a59(0x113)]=='English\x20(US)')var _0x41b3e4=users[_0x779a59(0x114)];else{if(_0x523d9f[0x0][_0x779a59(0x113)]==_0x779a59(0xff))var _0x41b3e4=users[_0x779a59(0xff)];else{if(_0x523d9f[0x0][_0x779a59(0x113)]==_0x779a59(0xe0))var _0x41b3e4=users[_0x779a59(0xe0)];else{if(_0x523d9f[0x0][_0x779a59(0x113)]==_0x779a59(0x116))var _0x41b3e4=users[_0x779a59(0x116)];else{if(_0x523d9f[0x0][_0x779a59(0x113)]==_0x779a59(0xf3))var _0x41b3e4=users[_0x779a59(0xf3)];else{if(_0x523d9f[0x0][_0x779a59(0x113)]==_0x779a59(0x109))var _0x41b3e4=users[_0x779a59(0x10e)];else{if(_0x523d9f[0x0][_0x779a59(0x113)]=='Chinese')var _0x41b3e4=users['Chinese'];else{if(_0x523d9f[0x0][_0x779a59(0x113)]=='Arabic\x20(ae)')var _0x41b3e4=users[_0x779a59(0x118)];}}}}}}}_0x39afcc['render'](_0x779a59(0xfd),{'success':_0x59b56c[_0x779a59(0xfa)](_0x779a59(0x119)),'errors':_0x59b56c['flash']('errors'),'role':_0x3372b0,'profile':_0x1b35d1,'master_shop':_0x523d9f,'language':_0x41b3e4,'sales':_0x54f7b5,'adjustment':_0x56a3e7,'transfer':_0x39c04e});}catch(_0x4c1df7){console['log'](_0x4c1df7);}}),router[a0_0x24f9aa(0xee)](a0_0x24f9aa(0xf2),auth,async(_0x52ddff,_0x11221b)=>{const _0x2c6d8a=a0_0x24f9aa;try{const {username:_0x56362c,email:_0x159286,role:_0x7fed2f}=_0x52ddff['user'],_0x566f49=_0x52ddff[_0x2c6d8a(0xe6)],_0xaddc3=await profile['findOne']({'email':_0x566f49['email']}),_0x193be5=await master_shop['find'](),_0x54b971=await sales['find']({'finalize':_0x2c6d8a(0x108)}),_0x3f6877={'name':_0x2c6d8a(0xe8),'code':'out'};if(_0x193be5[0x0][_0x2c6d8a(0x113)]==_0x2c6d8a(0xe4))var _0x2497af=users[_0x2c6d8a(0x114)];else{if(_0x193be5[0x0]['language']==_0x2c6d8a(0xff))var _0x2497af=users[_0x2c6d8a(0xff)];else{if(_0x193be5[0x0][_0x2c6d8a(0x113)]==_0x2c6d8a(0xe0))var _0x2497af=users[_0x2c6d8a(0xe0)];else{if(_0x193be5[0x0]['language']==_0x2c6d8a(0x116))var _0x2497af=users['Spanish'];else{if(_0x193be5[0x0]['language']=='French')var _0x2497af=users[_0x2c6d8a(0xf3)];else{if(_0x193be5[0x0]['language']==_0x2c6d8a(0x109))var _0x2497af=users[_0x2c6d8a(0x10e)];else{if(_0x193be5[0x0][_0x2c6d8a(0x113)]=='Chinese')var _0x2497af=users[_0x2c6d8a(0xfe)];else{if(_0x193be5[0x0][_0x2c6d8a(0x113)]=='Arabic\x20(ae)')var _0x2497af=users[_0x2c6d8a(0x118)];}}}}}}}_0x11221b['render'](_0x2c6d8a(0xe9),{'success':_0x52ddff['flash'](_0x2c6d8a(0x119)),'errors':_0x52ddff['flash'](_0x2c6d8a(0xe5)),'role':_0x566f49,'profile':_0xaddc3,'master_shop':_0x193be5,'language':_0x2497af,'data':_0x54b971,'titleName':_0x3f6877});}catch(_0x17d8c3){console[_0x2c6d8a(0x10f)](_0x17d8c3);}}),router['post'](a0_0x24f9aa(0xf2),auth,async(_0x260f81,_0x147a48)=>{const _0x3c0562=a0_0x24f9aa;try{const {id:_0x5f5bb8,invoice:_0x6e6c1c,value:_0x1096ff}=_0x260f81[_0x3c0562(0x11e)],_0x4b9d39=await sales[_0x3c0562(0x101)]({'_id':_0x5f5bb8,'invoice':_0x6e6c1c});_0x4b9d39['isAllowEdit']=_0x1096ff;const _0x4bb665=await _0x4b9d39[_0x3c0562(0x115)]();_0x147a48[_0x3c0562(0xfb)]({'status':0xc8,'data':{'BoolData':_0x4bb665[_0x3c0562(0x11c)],'InvoiceNum':_0x4bb665[_0x3c0562(0x103)]}});}catch(_0x4e6f6d){return console[_0x3c0562(0x10f)](_0x4e6f6d),{'status':0x194,'data':_0x4e6f6d[_0x3c0562(0x117)]};}}),router['get'](a0_0x24f9aa(0x11b),auth,async(_0x44c754,_0x3c6a53)=>{const _0xe2013f=a0_0x24f9aa;try{const {username:_0x4ee8d7,email:_0x55fcf8,role:_0x2670fd}=_0x44c754[_0xe2013f(0xe6)],_0x403141=_0x44c754[_0xe2013f(0xe6)],_0x3312eb=await profile[_0xe2013f(0x101)]({'email':_0x403141['email']}),_0x2ee9be=await master_shop[_0xe2013f(0xf6)](),_0x14f5f5=await adjustment[_0xe2013f(0xf6)]({'finalize':_0xe2013f(0x108)}),_0x5437a9={'name':_0xe2013f(0xe3),'code':_0xe2013f(0x11a)};if(_0x2ee9be[0x0][_0xe2013f(0x113)]==_0xe2013f(0xe4))var _0x2533d1=users[_0xe2013f(0x114)];else{if(_0x2ee9be[0x0][_0xe2013f(0x113)]==_0xe2013f(0xff))var _0x2533d1=users[_0xe2013f(0xff)];else{if(_0x2ee9be[0x0][_0xe2013f(0x113)]==_0xe2013f(0xe0))var _0x2533d1=users['German'];else{if(_0x2ee9be[0x0][_0xe2013f(0x113)]==_0xe2013f(0x116))var _0x2533d1=users['Spanish'];else{if(_0x2ee9be[0x0]['language']==_0xe2013f(0xf3))var _0x2533d1=users[_0xe2013f(0xf3)];else{if(_0x2ee9be[0x0]['language']==_0xe2013f(0x109))var _0x2533d1=users['Portuguese'];else{if(_0x2ee9be[0x0][_0xe2013f(0x113)]==_0xe2013f(0xfe))var _0x2533d1=users[_0xe2013f(0xfe)];else{if(_0x2ee9be[0x0]['language']==_0xe2013f(0xf4))var _0x2533d1=users[_0xe2013f(0x118)];}}}}}}}_0x3c6a53[_0xe2013f(0xf5)](_0xe2013f(0xe9),{'success':_0x44c754[_0xe2013f(0xfa)](_0xe2013f(0x119)),'errors':_0x44c754[_0xe2013f(0xfa)](_0xe2013f(0xe5)),'role':_0x403141,'profile':_0x3312eb,'master_shop':_0x2ee9be,'language':_0x2533d1,'data':_0x14f5f5,'titleName':_0x5437a9});}catch(_0xdc3f5e){console[_0xe2013f(0x10f)](_0xdc3f5e);}}),router['post'](a0_0x24f9aa(0x11b),auth,async(_0x335823,_0x4931ac)=>{const _0x3955ab=a0_0x24f9aa;try{const {id:_0x193880,invoice:_0x4bdbc4,value:_0x3e01ea}=_0x335823[_0x3955ab(0x11e)],_0x799ee1=await adjustment[_0x3955ab(0x101)]({'_id':_0x193880,'invoice':_0x4bdbc4});_0x799ee1[_0x3955ab(0x11c)]=_0x3e01ea;const _0x10751c=await _0x799ee1['save']();_0x4931ac[_0x3955ab(0xfb)]({'status':0xc8,'data':{'BoolData':_0x10751c['isAllowEdit'],'InvoiceNum':_0x10751c[_0x3955ab(0x103)]}});}catch(_0xb9ec58){return{'status':0x194,'data':_0xb9ec58['message']};}}),router[a0_0x24f9aa(0xee)]('/transfer',auth,async(_0x4016ef,_0x33730d)=>{const _0x3d2c03=a0_0x24f9aa;try{const {username:_0x2479ac,email:_0x5b1fa2,role:_0x2db580}=_0x4016ef['user'],_0x575467=_0x4016ef['user'],_0x3eb71c=await profile[_0x3d2c03(0x101)]({'email':_0x575467[_0x3d2c03(0xe2)]}),_0x4e193e=await master_shop[_0x3d2c03(0xf6)](),_0x2e8b1d=await transfers[_0x3d2c03(0xf6)]({'finalize':_0x3d2c03(0x108)}),_0x36dd82={'name':_0x3d2c03(0xeb),'code':_0x3d2c03(0x106)};if(_0x4e193e[0x0][_0x3d2c03(0x113)]==_0x3d2c03(0xe4))var _0x5c0289=users[_0x3d2c03(0x114)];else{if(_0x4e193e[0x0][_0x3d2c03(0x113)]=='Hindi')var _0x5c0289=users[_0x3d2c03(0xff)];else{if(_0x4e193e[0x0][_0x3d2c03(0x113)]==_0x3d2c03(0xe0))var _0x5c0289=users[_0x3d2c03(0xe0)];else{if(_0x4e193e[0x0][_0x3d2c03(0x113)]==_0x3d2c03(0x116))var _0x5c0289=users[_0x3d2c03(0x116)];else{if(_0x4e193e[0x0][_0x3d2c03(0x113)]=='French')var _0x5c0289=users['French'];else{if(_0x4e193e[0x0][_0x3d2c03(0x113)]=='Portuguese\x20(BR)')var _0x5c0289=users[_0x3d2c03(0x10e)];else{if(_0x4e193e[0x0][_0x3d2c03(0x113)]==_0x3d2c03(0xfe))var _0x5c0289=users[_0x3d2c03(0xfe)];else{if(_0x4e193e[0x0][_0x3d2c03(0x113)]==_0x3d2c03(0xf4))var _0x5c0289=users[_0x3d2c03(0x118)];}}}}}}}_0x33730d[_0x3d2c03(0xf5)]('approvals_view',{'success':_0x4016ef[_0x3d2c03(0xfa)]('success'),'errors':_0x4016ef[_0x3d2c03(0xfa)](_0x3d2c03(0xe5)),'role':_0x575467,'profile':_0x3eb71c,'master_shop':_0x4e193e,'language':_0x5c0289,'data':_0x2e8b1d,'titleName':_0x36dd82});}catch(_0x1467d2){console['log'](_0x1467d2);}}),router['post']('/transfer',auth,async(_0x406707,_0x24dfce)=>{const _0x1014c6=a0_0x24f9aa;try{const {id:_0x12fb4a,invoice:_0x251c2c,value:_0x50ff1c}=_0x406707[_0x1014c6(0x11e)],_0x3f88ac=await transfers['findOne']({'_id':_0x12fb4a,'invoice':_0x251c2c});_0x3f88ac[_0x1014c6(0x11c)]=_0x50ff1c;const _0x3b081d=await _0x3f88ac[_0x1014c6(0x115)]();_0x24dfce[_0x1014c6(0xfb)]({'status':0xc8,'data':{'BoolData':_0x3b081d[_0x1014c6(0x11c)],'InvoiceNum':_0x3b081d['invoice']}});}catch(_0xfe8992){return{'status':0x194,'data':_0xfe8992[_0x1014c6(0x117)]};}}),router[a0_0x24f9aa(0xee)]('/outgoing_finished',auth,async(_0x2a0d36,_0x37646a)=>{const _0x418db0=a0_0x24f9aa;try{const {username:_0x3b0d15,email:_0x2289e3,role:_0x13a39d}=_0x2a0d36[_0x418db0(0xe6)],_0x226cea=_0x2a0d36[_0x418db0(0xe6)],_0x12e598=await profile[_0x418db0(0x101)]({'email':_0x226cea[_0x418db0(0xe2)]}),_0x5a846b=await master_shop['find'](),_0x56b9cc=await sales_finished[_0x418db0(0xf6)]({'finalize':_0x418db0(0x108)}),_0x1d6fbf={'name':_0x418db0(0xf7),'code':_0x418db0(0x112)};if(_0x5a846b[0x0]['language']=='English\x20(US)')var _0x100d80=users[_0x418db0(0x114)];else{if(_0x5a846b[0x0][_0x418db0(0x113)]==_0x418db0(0xff))var _0x100d80=users[_0x418db0(0xff)];else{if(_0x5a846b[0x0]['language']==_0x418db0(0xe0))var _0x100d80=users['German'];else{if(_0x5a846b[0x0]['language']==_0x418db0(0x116))var _0x100d80=users[_0x418db0(0x116)];else{if(_0x5a846b[0x0][_0x418db0(0x113)]==_0x418db0(0xf3))var _0x100d80=users['French'];else{if(_0x5a846b[0x0][_0x418db0(0x113)]==_0x418db0(0x109))var _0x100d80=users[_0x418db0(0x10e)];else{if(_0x5a846b[0x0][_0x418db0(0x113)]==_0x418db0(0xfe))var _0x100d80=users[_0x418db0(0xfe)];else{if(_0x5a846b[0x0][_0x418db0(0x113)]==_0x418db0(0xf4))var _0x100d80=users[_0x418db0(0x118)];}}}}}}}_0x37646a['render'](_0x418db0(0xe9),{'success':_0x2a0d36['flash'](_0x418db0(0x119)),'errors':_0x2a0d36[_0x418db0(0xfa)](_0x418db0(0xe5)),'role':_0x226cea,'profile':_0x12e598,'master_shop':_0x5a846b,'language':_0x100d80,'data':_0x56b9cc,'titleName':_0x1d6fbf});}catch(_0x12a3e1){console[_0x418db0(0x10f)](_0x12a3e1);}}),router['post'](a0_0x24f9aa(0xdf),auth,async(_0x90f2bc,_0x29b80f)=>{const _0x3db09c=a0_0x24f9aa;try{const {id:_0x4dae89,invoice:_0xb0cd27,value:_0x2c2c12}=_0x90f2bc[_0x3db09c(0x11e)],_0x25f416=await sales_finished['findOne']({'_id':_0x4dae89,'invoice':_0xb0cd27});_0x25f416['isAllowEdit']=_0x2c2c12;const _0xff6c2b=await _0x25f416[_0x3db09c(0x115)]();_0x29b80f[_0x3db09c(0xfb)]({'status':0xc8,'data':{'BoolData':_0xff6c2b['isAllowEdit'],'InvoiceNum':_0xff6c2b[_0x3db09c(0x103)]}});}catch(_0x2fa0e7){return console['log'](_0x2fa0e7),{'status':0x194,'data':_0x2fa0e7[_0x3db09c(0x117)]};}}),router[a0_0x24f9aa(0xee)]('/adjustment_finished',auth,async(_0x5ae0df,_0x355a1b)=>{const _0x50dcfb=a0_0x24f9aa;try{const {username:_0x5315a7,email:_0x1451f2,role:_0x9b064f}=_0x5ae0df[_0x50dcfb(0xe6)],_0x3780a8=_0x5ae0df['user'],_0x18dc88=await profile['findOne']({'email':_0x3780a8['email']}),_0x44112a=await master_shop[_0x50dcfb(0xf6)](),_0x157da7=await adjustment_finished[_0x50dcfb(0xf6)]({'finalize':'False'}),_0x29b94f={'name':_0x50dcfb(0x11d),'code':_0x50dcfb(0x105)};if(_0x44112a[0x0][_0x50dcfb(0x113)]=='English\x20(US)')var _0x28f668=users[_0x50dcfb(0x114)];else{if(_0x44112a[0x0]['language']==_0x50dcfb(0xff))var _0x28f668=users['Hindi'];else{if(_0x44112a[0x0][_0x50dcfb(0x113)]==_0x50dcfb(0xe0))var _0x28f668=users[_0x50dcfb(0xe0)];else{if(_0x44112a[0x0][_0x50dcfb(0x113)]=='Spanish')var _0x28f668=users['Spanish'];else{if(_0x44112a[0x0][_0x50dcfb(0x113)]==_0x50dcfb(0xf3))var _0x28f668=users[_0x50dcfb(0xf3)];else{if(_0x44112a[0x0][_0x50dcfb(0x113)]==_0x50dcfb(0x109))var _0x28f668=users['Portuguese'];else{if(_0x44112a[0x0][_0x50dcfb(0x113)]=='Chinese')var _0x28f668=users[_0x50dcfb(0xfe)];else{if(_0x44112a[0x0][_0x50dcfb(0x113)]==_0x50dcfb(0xf4))var _0x28f668=users[_0x50dcfb(0x118)];}}}}}}}_0x355a1b[_0x50dcfb(0xf5)](_0x50dcfb(0xe9),{'success':_0x5ae0df[_0x50dcfb(0xfa)](_0x50dcfb(0x119)),'errors':_0x5ae0df[_0x50dcfb(0xfa)]('errors'),'role':_0x3780a8,'profile':_0x18dc88,'master_shop':_0x44112a,'language':_0x28f668,'data':_0x157da7,'titleName':_0x29b94f});}catch(_0x475a47){console[_0x50dcfb(0x10f)](_0x475a47);}}),router[a0_0x24f9aa(0x111)](a0_0x24f9aa(0x10d),auth,async(_0x5c267f,_0x19703b)=>{const _0x346073=a0_0x24f9aa;try{const {id:_0x2e6acd,invoice:_0x4bdbf3,value:_0x20fcd9}=_0x5c267f[_0x346073(0x11e)],_0x57ec10=await adjustment_finished['findOne']({'_id':_0x2e6acd,'invoice':_0x4bdbf3});_0x57ec10[_0x346073(0x11c)]=_0x20fcd9;const _0x2edf85=await _0x57ec10[_0x346073(0x115)]();_0x19703b[_0x346073(0xfb)]({'status':0xc8,'data':{'BoolData':_0x2edf85[_0x346073(0x11c)],'InvoiceNum':_0x2edf85[_0x346073(0x103)]}});}catch(_0x4a2178){return{'status':0x194,'data':_0x4a2178[_0x346073(0x117)]};}}),router['get']('/transfer_finished',auth,async(_0x1884a1,_0xa7d55d)=>{const _0x18a733=a0_0x24f9aa;try{const {username:_0x27e744,email:_0x3866eb,role:_0x4d2056}=_0x1884a1[_0x18a733(0xe6)],_0x205b43=_0x1884a1[_0x18a733(0xe6)],_0x464234=await profile['findOne']({'email':_0x205b43[_0x18a733(0xe2)]}),_0x5ee7e7=await master_shop[_0x18a733(0xf6)](),_0x464c28=await transfers_finished[_0x18a733(0xf6)]({'finalize':_0x18a733(0x108)}),_0x38160b={'name':_0x18a733(0xe7),'code':_0x18a733(0xed)};if(_0x5ee7e7[0x0][_0x18a733(0x113)]==_0x18a733(0xe4))var _0x410136=users['English'];else{if(_0x5ee7e7[0x0][_0x18a733(0x113)]=='Hindi')var _0x410136=users[_0x18a733(0xff)];else{if(_0x5ee7e7[0x0][_0x18a733(0x113)]==_0x18a733(0xe0))var _0x410136=users[_0x18a733(0xe0)];else{if(_0x5ee7e7[0x0][_0x18a733(0x113)]==_0x18a733(0x116))var _0x410136=users[_0x18a733(0x116)];else{if(_0x5ee7e7[0x0][_0x18a733(0x113)]=='French')var _0x410136=users[_0x18a733(0xf3)];else{if(_0x5ee7e7[0x0]['language']=='Portuguese\x20(BR)')var _0x410136=users[_0x18a733(0x10e)];else{if(_0x5ee7e7[0x0][_0x18a733(0x113)]==_0x18a733(0xfe))var _0x410136=users[_0x18a733(0xfe)];else{if(_0x5ee7e7[0x0][_0x18a733(0x113)]==_0x18a733(0xf4))var _0x410136=users[_0x18a733(0x118)];}}}}}}}_0xa7d55d[_0x18a733(0xf5)](_0x18a733(0xe9),{'success':_0x1884a1[_0x18a733(0xfa)](_0x18a733(0x119)),'errors':_0x1884a1['flash'](_0x18a733(0xe5)),'role':_0x205b43,'profile':_0x464234,'master_shop':_0x5ee7e7,'language':_0x410136,'data':_0x464c28,'titleName':_0x38160b});}catch(_0x451d25){console['log'](_0x451d25);}}),router[a0_0x24f9aa(0x111)]('/transfer_finished',auth,async(_0x5bf103,_0x8a9e48)=>{const _0x492d5a=a0_0x24f9aa;try{const {id:_0x1c4fb0,invoice:_0x20e001,value:_0x1c0902}=_0x5bf103[_0x492d5a(0x11e)],_0x3bd096=await transfers_finished['findOne']({'_id':_0x1c4fb0,'invoice':_0x20e001});_0x3bd096[_0x492d5a(0x11c)]=_0x1c0902;const _0x2fc03e=await _0x3bd096[_0x492d5a(0x115)]();_0x8a9e48['json']({'status':0xc8,'data':{'BoolData':_0x2fc03e['isAllowEdit'],'InvoiceNum':_0x2fc03e[_0x492d5a(0x103)]}});}catch(_0x75e36f){return{'status':0x194,'data':_0x75e36f[_0x492d5a(0x117)]};}}),module['exports']=router;