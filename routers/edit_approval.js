function a0_0x52a1(){const _0x28f682=['/transfer','isAllowEdit','outF','/view','log','/transfer_finished','errors','732DnMtFR','Portuguese\x20(BR)','flash','1419592noNfTU','English','312882NzxISp','Arabic','/adjustment','40832wSuBiP','French','invoice','Chinese','find','email','147DRxTyf','../public/language/languages.json','423282DzsmHO','1518951xOOujV','187330bsGbud','message','22NNeGWc','get','body','/outgoing_finished','success','/outgoing','False','Arabic\x20(ae)','post','Transfer\x20Finished\x20Goods','language','Hindi','English\x20(US)','adj','trff','155YLOzDG','trf','user','express','Spanish','36tUnjyz','Portuguese','edit_approvals_view','../models/all_models','render','German','Outgoing\x20Finished\x20Goods','nodemailer','10586900dwxCse','findOne','Adjustment\x20Finished\x20Goods','approvals_view','Router','save','json'];a0_0x52a1=function(){return _0x28f682;};return a0_0x52a1();}function a0_0x3b96(_0x16f8b1,_0xab9635){const _0x52a10b=a0_0x52a1();return a0_0x3b96=function(_0x3b961d,_0x131391){_0x3b961d=_0x3b961d-0x83;let _0x2763d4=_0x52a10b[_0x3b961d];return _0x2763d4;},a0_0x3b96(_0x16f8b1,_0xab9635);}const a0_0x343665=a0_0x3b96;(function(_0x3287bf,_0x372380){const _0x5c60d2=a0_0x3b96,_0x45f94e=_0x3287bf();while(!![]){try{const _0x1b379e=parseInt(_0x5c60d2(0x9e))/0x1+-parseInt(_0x5c60d2(0xa1))/0x2*(-parseInt(_0x5c60d2(0x92))/0x3)+parseInt(_0x5c60d2(0x95))/0x4*(parseInt(_0x5c60d2(0xb0))/0x5)+parseInt(_0x5c60d2(0x9d))/0x6*(-parseInt(_0x5c60d2(0x9b))/0x7)+parseInt(_0x5c60d2(0x90))/0x8*(-parseInt(_0x5c60d2(0xb5))/0x9)+-parseInt(_0x5c60d2(0xbd))/0xa+-parseInt(_0x5c60d2(0x9f))/0xb*(-parseInt(_0x5c60d2(0x8d))/0xc);if(_0x1b379e===_0x372380)break;else _0x45f94e['push'](_0x45f94e['shift']());}catch(_0x29a80f){_0x45f94e['push'](_0x45f94e['shift']());}}}(a0_0x52a1,0xbc5a2));const express=require(a0_0x343665(0xb3)),app=express(),router=express[a0_0x343665(0x83)](),auth=require('../middleware/auth'),{profile,master_shop,sales_finished,adjustment_finished,transfers_finished,sales,adjustment,transfers}=require(a0_0x343665(0xb8)),users=require(a0_0x343665(0x9c)),nodemailer=require(a0_0x343665(0xbc));router[a0_0x343665(0xa2)](a0_0x343665(0x89),auth,async(_0x3ac014,_0x411257)=>{const _0x184503=a0_0x343665;try{const {username:_0x15d7f6,email:_0x2e0dd1,role:_0x5bde09}=_0x3ac014[_0x184503(0xb2)],_0x3877ee=_0x3ac014[_0x184503(0xb2)],_0x58f4ec=await profile[_0x184503(0xbe)]({'email':_0x3877ee['email']}),_0x260ca1=await master_shop[_0x184503(0x99)](),_0xd121d8=await sales[_0x184503(0x99)]({'finalize':'False'}),_0x1df32f=await adjustment['find']({'finalize':'False'}),_0x57e3e5=await transfers[_0x184503(0x99)]({'finalize':_0x184503(0xa7)});if(_0x260ca1[0x0][_0x184503(0xab)]==_0x184503(0xad))var _0x174573=users[_0x184503(0x91)];else{if(_0x260ca1[0x0][_0x184503(0xab)]=='Hindi')var _0x174573=users['Hindi'];else{if(_0x260ca1[0x0][_0x184503(0xab)]==_0x184503(0xba))var _0x174573=users[_0x184503(0xba)];else{if(_0x260ca1[0x0]['language']==_0x184503(0xb4))var _0x174573=users[_0x184503(0xb4)];else{if(_0x260ca1[0x0]['language']==_0x184503(0x96))var _0x174573=users['French'];else{if(_0x260ca1[0x0][_0x184503(0xab)]==_0x184503(0x8e))var _0x174573=users['Portuguese'];else{if(_0x260ca1[0x0][_0x184503(0xab)]==_0x184503(0x98))var _0x174573=users['Chinese'];else{if(_0x260ca1[0x0]['language']==_0x184503(0xa8))var _0x174573=users[_0x184503(0x93)];}}}}}}}_0x411257[_0x184503(0xb9)](_0x184503(0xb7),{'success':_0x3ac014['flash']('success'),'errors':_0x3ac014[_0x184503(0x8f)]('errors'),'role':_0x3877ee,'profile':_0x58f4ec,'master_shop':_0x260ca1,'language':_0x174573,'sales':_0xd121d8,'adjustment':_0x1df32f,'transfer':_0x57e3e5});}catch(_0x569500){console['log'](_0x569500);}}),router[a0_0x343665(0xa2)](a0_0x343665(0xa6),auth,async(_0x5e80a7,_0x306570)=>{const _0x2f760f=a0_0x343665;try{const {username:_0x539ce0,email:_0x535642,role:_0x465acc}=_0x5e80a7[_0x2f760f(0xb2)],_0x263458=_0x5e80a7['user'],_0x150c1b=await profile[_0x2f760f(0xbe)]({'email':_0x263458[_0x2f760f(0x9a)]}),_0x2494cf=await master_shop[_0x2f760f(0x99)](),_0x527ddf=await sales[_0x2f760f(0x99)]({'finalize':_0x2f760f(0xa7)}),_0x48c538={'name':'Outgoing\x20Raw\x20materials','code':'out'};if(_0x2494cf[0x0][_0x2f760f(0xab)]==_0x2f760f(0xad))var _0x2bb981=users[_0x2f760f(0x91)];else{if(_0x2494cf[0x0][_0x2f760f(0xab)]==_0x2f760f(0xac))var _0x2bb981=users[_0x2f760f(0xac)];else{if(_0x2494cf[0x0]['language']==_0x2f760f(0xba))var _0x2bb981=users[_0x2f760f(0xba)];else{if(_0x2494cf[0x0][_0x2f760f(0xab)]==_0x2f760f(0xb4))var _0x2bb981=users[_0x2f760f(0xb4)];else{if(_0x2494cf[0x0][_0x2f760f(0xab)]==_0x2f760f(0x96))var _0x2bb981=users[_0x2f760f(0x96)];else{if(_0x2494cf[0x0][_0x2f760f(0xab)]==_0x2f760f(0x8e))var _0x2bb981=users[_0x2f760f(0xb6)];else{if(_0x2494cf[0x0][_0x2f760f(0xab)]==_0x2f760f(0x98))var _0x2bb981=users[_0x2f760f(0x98)];else{if(_0x2494cf[0x0][_0x2f760f(0xab)]==_0x2f760f(0xa8))var _0x2bb981=users['Arabic'];}}}}}}}_0x306570[_0x2f760f(0xb9)]('approvals_view',{'success':_0x5e80a7[_0x2f760f(0x8f)](_0x2f760f(0xa5)),'errors':_0x5e80a7[_0x2f760f(0x8f)](_0x2f760f(0x8c)),'role':_0x263458,'profile':_0x150c1b,'master_shop':_0x2494cf,'language':_0x2bb981,'data':_0x527ddf,'titleName':_0x48c538});}catch(_0x2dc27d){console[_0x2f760f(0x8a)](_0x2dc27d);}}),router['post']('/outgoing',auth,async(_0x46f2d1,_0x115ec3)=>{const _0x140027=a0_0x343665;try{const {id:_0x5de379,invoice:_0x5420c5,value:_0x373b5e}=_0x46f2d1[_0x140027(0xa3)],_0x5cc45c=await sales[_0x140027(0xbe)]({'_id':_0x5de379,'invoice':_0x5420c5});_0x5cc45c[_0x140027(0x87)]=_0x373b5e;const _0x45eac7=await _0x5cc45c[_0x140027(0x84)]();_0x115ec3[_0x140027(0x85)]({'status':0xc8,'data':{'BoolData':_0x45eac7[_0x140027(0x87)],'InvoiceNum':_0x45eac7[_0x140027(0x97)]}});}catch(_0x36b9f3){return console[_0x140027(0x8a)](_0x36b9f3),{'status':0x194,'data':_0x36b9f3[_0x140027(0xa0)]};}}),router[a0_0x343665(0xa2)](a0_0x343665(0x94),auth,async(_0x34135f,_0x67dde2)=>{const _0x4702e8=a0_0x343665;try{const {username:_0x2b1534,email:_0x409408,role:_0x1c7861}=_0x34135f[_0x4702e8(0xb2)],_0x118e3d=_0x34135f[_0x4702e8(0xb2)],_0x3b9c93=await profile[_0x4702e8(0xbe)]({'email':_0x118e3d[_0x4702e8(0x9a)]}),_0x2ff913=await master_shop[_0x4702e8(0x99)](),_0x3fbaa3=await adjustment[_0x4702e8(0x99)]({'finalize':'False'}),_0x5181f9={'name':'Adjustment\x20Raw\x20materials','code':_0x4702e8(0xae)};if(_0x2ff913[0x0][_0x4702e8(0xab)]==_0x4702e8(0xad))var _0x372e09=users[_0x4702e8(0x91)];else{if(_0x2ff913[0x0][_0x4702e8(0xab)]==_0x4702e8(0xac))var _0x372e09=users[_0x4702e8(0xac)];else{if(_0x2ff913[0x0]['language']==_0x4702e8(0xba))var _0x372e09=users[_0x4702e8(0xba)];else{if(_0x2ff913[0x0][_0x4702e8(0xab)]==_0x4702e8(0xb4))var _0x372e09=users[_0x4702e8(0xb4)];else{if(_0x2ff913[0x0][_0x4702e8(0xab)]==_0x4702e8(0x96))var _0x372e09=users[_0x4702e8(0x96)];else{if(_0x2ff913[0x0][_0x4702e8(0xab)]==_0x4702e8(0x8e))var _0x372e09=users['Portuguese'];else{if(_0x2ff913[0x0][_0x4702e8(0xab)]=='Chinese')var _0x372e09=users[_0x4702e8(0x98)];else{if(_0x2ff913[0x0][_0x4702e8(0xab)]==_0x4702e8(0xa8))var _0x372e09=users[_0x4702e8(0x93)];}}}}}}}_0x67dde2['render'](_0x4702e8(0xc0),{'success':_0x34135f[_0x4702e8(0x8f)](_0x4702e8(0xa5)),'errors':_0x34135f['flash'](_0x4702e8(0x8c)),'role':_0x118e3d,'profile':_0x3b9c93,'master_shop':_0x2ff913,'language':_0x372e09,'data':_0x3fbaa3,'titleName':_0x5181f9});}catch(_0x22e6e6){console[_0x4702e8(0x8a)](_0x22e6e6);}}),router['post'](a0_0x343665(0x94),auth,async(_0x511679,_0x582f30)=>{const _0x318870=a0_0x343665;try{const {id:_0x1f8a6a,invoice:_0x18649a,value:_0xb5df1b}=_0x511679[_0x318870(0xa3)],_0x18a48d=await adjustment[_0x318870(0xbe)]({'_id':_0x1f8a6a,'invoice':_0x18649a});_0x18a48d[_0x318870(0x87)]=_0xb5df1b;const _0x19fc23=await _0x18a48d[_0x318870(0x84)]();_0x582f30['json']({'status':0xc8,'data':{'BoolData':_0x19fc23[_0x318870(0x87)],'InvoiceNum':_0x19fc23[_0x318870(0x97)]}});}catch(_0x2eb368){return{'status':0x194,'data':_0x2eb368[_0x318870(0xa0)]};}}),router[a0_0x343665(0xa2)]('/transfer',auth,async(_0x1e8290,_0x24202d)=>{const _0x4d0b82=a0_0x343665;try{const {username:_0x2db0c9,email:_0x5eef8b,role:_0x2bf70e}=_0x1e8290[_0x4d0b82(0xb2)],_0x45d356=_0x1e8290[_0x4d0b82(0xb2)],_0x5eafbe=await profile[_0x4d0b82(0xbe)]({'email':_0x45d356['email']}),_0x27d92f=await master_shop[_0x4d0b82(0x99)](),_0x164e2d=await transfers['find']({'finalize':'False'}),_0x394cd1={'name':'Transfer\x20Raw\x20materials','code':_0x4d0b82(0xb1)};if(_0x27d92f[0x0]['language']==_0x4d0b82(0xad))var _0x1d911d=users['English'];else{if(_0x27d92f[0x0][_0x4d0b82(0xab)]==_0x4d0b82(0xac))var _0x1d911d=users[_0x4d0b82(0xac)];else{if(_0x27d92f[0x0][_0x4d0b82(0xab)]=='German')var _0x1d911d=users[_0x4d0b82(0xba)];else{if(_0x27d92f[0x0][_0x4d0b82(0xab)]==_0x4d0b82(0xb4))var _0x1d911d=users['Spanish'];else{if(_0x27d92f[0x0][_0x4d0b82(0xab)]==_0x4d0b82(0x96))var _0x1d911d=users[_0x4d0b82(0x96)];else{if(_0x27d92f[0x0][_0x4d0b82(0xab)]==_0x4d0b82(0x8e))var _0x1d911d=users[_0x4d0b82(0xb6)];else{if(_0x27d92f[0x0]['language']==_0x4d0b82(0x98))var _0x1d911d=users[_0x4d0b82(0x98)];else{if(_0x27d92f[0x0]['language']==_0x4d0b82(0xa8))var _0x1d911d=users['Arabic'];}}}}}}}_0x24202d[_0x4d0b82(0xb9)](_0x4d0b82(0xc0),{'success':_0x1e8290['flash']('success'),'errors':_0x1e8290[_0x4d0b82(0x8f)](_0x4d0b82(0x8c)),'role':_0x45d356,'profile':_0x5eafbe,'master_shop':_0x27d92f,'language':_0x1d911d,'data':_0x164e2d,'titleName':_0x394cd1});}catch(_0x3feb05){console['log'](_0x3feb05);}}),router[a0_0x343665(0xa9)](a0_0x343665(0x86),auth,async(_0x41f9bd,_0x2f00e3)=>{const _0x5d231f=a0_0x343665;try{const {id:_0x1a9ee6,invoice:_0x1e6e01,value:_0x3dc11a}=_0x41f9bd[_0x5d231f(0xa3)],_0x4cd37a=await transfers[_0x5d231f(0xbe)]({'_id':_0x1a9ee6,'invoice':_0x1e6e01});_0x4cd37a[_0x5d231f(0x87)]=_0x3dc11a;const _0x198294=await _0x4cd37a[_0x5d231f(0x84)]();_0x2f00e3['json']({'status':0xc8,'data':{'BoolData':_0x198294[_0x5d231f(0x87)],'InvoiceNum':_0x198294[_0x5d231f(0x97)]}});}catch(_0x131de9){return{'status':0x194,'data':_0x131de9[_0x5d231f(0xa0)]};}}),router[a0_0x343665(0xa2)](a0_0x343665(0xa4),auth,async(_0x213539,_0x23977b)=>{const _0x586d3d=a0_0x343665;try{const {username:_0x1289c4,email:_0x342eb8,role:_0x22898a}=_0x213539[_0x586d3d(0xb2)],_0x1c6fc2=_0x213539['user'],_0x316b95=await profile[_0x586d3d(0xbe)]({'email':_0x1c6fc2['email']}),_0x4390e3=await master_shop['find'](),_0x1fef55=await sales_finished[_0x586d3d(0x99)]({'finalize':_0x586d3d(0xa7)}),_0x5753b8={'name':_0x586d3d(0xbb),'code':_0x586d3d(0x88)};if(_0x4390e3[0x0]['language']=='English\x20(US)')var _0xbd7a73=users['English'];else{if(_0x4390e3[0x0][_0x586d3d(0xab)]==_0x586d3d(0xac))var _0xbd7a73=users[_0x586d3d(0xac)];else{if(_0x4390e3[0x0]['language']==_0x586d3d(0xba))var _0xbd7a73=users[_0x586d3d(0xba)];else{if(_0x4390e3[0x0][_0x586d3d(0xab)]==_0x586d3d(0xb4))var _0xbd7a73=users[_0x586d3d(0xb4)];else{if(_0x4390e3[0x0]['language']==_0x586d3d(0x96))var _0xbd7a73=users[_0x586d3d(0x96)];else{if(_0x4390e3[0x0][_0x586d3d(0xab)]==_0x586d3d(0x8e))var _0xbd7a73=users[_0x586d3d(0xb6)];else{if(_0x4390e3[0x0][_0x586d3d(0xab)]==_0x586d3d(0x98))var _0xbd7a73=users['Chinese'];else{if(_0x4390e3[0x0][_0x586d3d(0xab)]==_0x586d3d(0xa8))var _0xbd7a73=users[_0x586d3d(0x93)];}}}}}}}_0x23977b[_0x586d3d(0xb9)]('approvals_view',{'success':_0x213539[_0x586d3d(0x8f)](_0x586d3d(0xa5)),'errors':_0x213539[_0x586d3d(0x8f)](_0x586d3d(0x8c)),'role':_0x1c6fc2,'profile':_0x316b95,'master_shop':_0x4390e3,'language':_0xbd7a73,'data':_0x1fef55,'titleName':_0x5753b8});}catch(_0x1206ff){console[_0x586d3d(0x8a)](_0x1206ff);}}),router[a0_0x343665(0xa9)](a0_0x343665(0xa4),auth,async(_0x5b2b52,_0x2e1834)=>{const _0x283a50=a0_0x343665;try{const {id:_0x2d52b6,invoice:_0x5e19ed,value:_0x38213c}=_0x5b2b52[_0x283a50(0xa3)],_0x4bd347=await sales_finished[_0x283a50(0xbe)]({'_id':_0x2d52b6,'invoice':_0x5e19ed});_0x4bd347[_0x283a50(0x87)]=_0x38213c;const _0x2e9eb5=await _0x4bd347['save']();_0x2e1834[_0x283a50(0x85)]({'status':0xc8,'data':{'BoolData':_0x2e9eb5[_0x283a50(0x87)],'InvoiceNum':_0x2e9eb5[_0x283a50(0x97)]}});}catch(_0x298b71){return console['log'](_0x298b71),{'status':0x194,'data':_0x298b71[_0x283a50(0xa0)]};}}),router['get']('/adjustment_finished',auth,async(_0x3405fb,_0x10a9ec)=>{const _0x1b8a79=a0_0x343665;try{const {username:_0x2e025b,email:_0x3cc44a,role:_0x5c652a}=_0x3405fb[_0x1b8a79(0xb2)],_0x4a36c5=_0x3405fb[_0x1b8a79(0xb2)],_0xf9f85a=await profile[_0x1b8a79(0xbe)]({'email':_0x4a36c5[_0x1b8a79(0x9a)]}),_0x33c631=await master_shop[_0x1b8a79(0x99)](),_0xea26c2=await adjustment_finished[_0x1b8a79(0x99)]({'finalize':_0x1b8a79(0xa7)}),_0x3b8d14={'name':_0x1b8a79(0xbf),'code':'adjf'};if(_0x33c631[0x0][_0x1b8a79(0xab)]==_0x1b8a79(0xad))var _0x411187=users[_0x1b8a79(0x91)];else{if(_0x33c631[0x0][_0x1b8a79(0xab)]==_0x1b8a79(0xac))var _0x411187=users[_0x1b8a79(0xac)];else{if(_0x33c631[0x0][_0x1b8a79(0xab)]==_0x1b8a79(0xba))var _0x411187=users[_0x1b8a79(0xba)];else{if(_0x33c631[0x0][_0x1b8a79(0xab)]==_0x1b8a79(0xb4))var _0x411187=users[_0x1b8a79(0xb4)];else{if(_0x33c631[0x0][_0x1b8a79(0xab)]==_0x1b8a79(0x96))var _0x411187=users[_0x1b8a79(0x96)];else{if(_0x33c631[0x0]['language']=='Portuguese\x20(BR)')var _0x411187=users['Portuguese'];else{if(_0x33c631[0x0][_0x1b8a79(0xab)]=='Chinese')var _0x411187=users[_0x1b8a79(0x98)];else{if(_0x33c631[0x0][_0x1b8a79(0xab)]==_0x1b8a79(0xa8))var _0x411187=users[_0x1b8a79(0x93)];}}}}}}}_0x10a9ec[_0x1b8a79(0xb9)](_0x1b8a79(0xc0),{'success':_0x3405fb['flash'](_0x1b8a79(0xa5)),'errors':_0x3405fb[_0x1b8a79(0x8f)](_0x1b8a79(0x8c)),'role':_0x4a36c5,'profile':_0xf9f85a,'master_shop':_0x33c631,'language':_0x411187,'data':_0xea26c2,'titleName':_0x3b8d14});}catch(_0x4e6beb){console['log'](_0x4e6beb);}}),router[a0_0x343665(0xa9)]('/adjustment_finished',auth,async(_0x1e204a,_0x48f253)=>{const _0xf1c3e8=a0_0x343665;try{const {id:_0x1d36d2,invoice:_0x4fd214,value:_0x424852}=_0x1e204a[_0xf1c3e8(0xa3)],_0xf0989c=await adjustment_finished[_0xf1c3e8(0xbe)]({'_id':_0x1d36d2,'invoice':_0x4fd214});_0xf0989c['isAllowEdit']=_0x424852;const _0x24c9ca=await _0xf0989c[_0xf1c3e8(0x84)]();_0x48f253[_0xf1c3e8(0x85)]({'status':0xc8,'data':{'BoolData':_0x24c9ca[_0xf1c3e8(0x87)],'InvoiceNum':_0x24c9ca[_0xf1c3e8(0x97)]}});}catch(_0x3b5d0e){return{'status':0x194,'data':_0x3b5d0e['message']};}}),router[a0_0x343665(0xa2)](a0_0x343665(0x8b),auth,async(_0x358b34,_0xdf545)=>{const _0x5e0a5f=a0_0x343665;try{const {username:_0x56d7f7,email:_0xc5bf41,role:_0x3699d0}=_0x358b34[_0x5e0a5f(0xb2)],_0x45eaf0=_0x358b34['user'],_0x304a7d=await profile[_0x5e0a5f(0xbe)]({'email':_0x45eaf0[_0x5e0a5f(0x9a)]}),_0xf724c4=await master_shop[_0x5e0a5f(0x99)](),_0x2fe179=await transfers_finished['find']({'finalize':_0x5e0a5f(0xa7)}),_0x375687={'name':_0x5e0a5f(0xaa),'code':_0x5e0a5f(0xaf)};if(_0xf724c4[0x0]['language']==_0x5e0a5f(0xad))var _0x1166ca=users['English'];else{if(_0xf724c4[0x0][_0x5e0a5f(0xab)]==_0x5e0a5f(0xac))var _0x1166ca=users[_0x5e0a5f(0xac)];else{if(_0xf724c4[0x0]['language']==_0x5e0a5f(0xba))var _0x1166ca=users[_0x5e0a5f(0xba)];else{if(_0xf724c4[0x0]['language']==_0x5e0a5f(0xb4))var _0x1166ca=users[_0x5e0a5f(0xb4)];else{if(_0xf724c4[0x0]['language']==_0x5e0a5f(0x96))var _0x1166ca=users['French'];else{if(_0xf724c4[0x0][_0x5e0a5f(0xab)]==_0x5e0a5f(0x8e))var _0x1166ca=users[_0x5e0a5f(0xb6)];else{if(_0xf724c4[0x0][_0x5e0a5f(0xab)]==_0x5e0a5f(0x98))var _0x1166ca=users['Chinese'];else{if(_0xf724c4[0x0][_0x5e0a5f(0xab)]=='Arabic\x20(ae)')var _0x1166ca=users[_0x5e0a5f(0x93)];}}}}}}}_0xdf545[_0x5e0a5f(0xb9)](_0x5e0a5f(0xc0),{'success':_0x358b34[_0x5e0a5f(0x8f)](_0x5e0a5f(0xa5)),'errors':_0x358b34['flash'](_0x5e0a5f(0x8c)),'role':_0x45eaf0,'profile':_0x304a7d,'master_shop':_0xf724c4,'language':_0x1166ca,'data':_0x2fe179,'titleName':_0x375687});}catch(_0x1e1f1){console[_0x5e0a5f(0x8a)](_0x1e1f1);}}),router[a0_0x343665(0xa9)]('/transfer_finished',auth,async(_0x31f89a,_0x4e4c37)=>{const _0x3b0d8b=a0_0x343665;try{const {id:_0x2fbef5,invoice:_0xd26b76,value:_0x2e224b}=_0x31f89a[_0x3b0d8b(0xa3)],_0x5487e4=await transfers_finished[_0x3b0d8b(0xbe)]({'_id':_0x2fbef5,'invoice':_0xd26b76});_0x5487e4[_0x3b0d8b(0x87)]=_0x2e224b;const _0x96b022=await _0x5487e4[_0x3b0d8b(0x84)]();_0x4e4c37['json']({'status':0xc8,'data':{'BoolData':_0x96b022[_0x3b0d8b(0x87)],'InvoiceNum':_0x96b022[_0x3b0d8b(0x97)]}});}catch(_0xb1f23d){return{'status':0x194,'data':_0xb1f23d['message']};}}),module['exports']=router;