const a0_0xa02695=a0_0x39ca;function a0_0x39ca(_0x1863e9,_0x4cf56b){const _0x5c172d=a0_0x5c17();return a0_0x39ca=function(_0x39ca33,_0x912f94){_0x39ca33=_0x39ca33-0x6c;let _0x47018e=_0x5c172d[_0x39ca33];return _0x47018e;},a0_0x39ca(_0x1863e9,_0x4cf56b);}(function(_0x338c80,_0x370196){const _0x2440e4=a0_0x39ca,_0xc5a6ea=_0x338c80();while(!![]){try{const _0xcfc782=-parseInt(_0x2440e4(0x9c))/0x1*(parseInt(_0x2440e4(0x89))/0x2)+-parseInt(_0x2440e4(0x6e))/0x3*(parseInt(_0x2440e4(0x7d))/0x4)+parseInt(_0x2440e4(0x72))/0x5*(-parseInt(_0x2440e4(0x86))/0x6)+parseInt(_0x2440e4(0x93))/0x7+-parseInt(_0x2440e4(0x71))/0x8*(parseInt(_0x2440e4(0x6c))/0x9)+parseInt(_0x2440e4(0x7c))/0xa*(-parseInt(_0x2440e4(0x99))/0xb)+parseInt(_0x2440e4(0x8f))/0xc;if(_0xcfc782===_0x370196)break;else _0xc5a6ea['push'](_0xc5a6ea['shift']());}catch(_0x20cc9d){_0xc5a6ea['push'](_0xc5a6ea['shift']());}}}(a0_0x5c17,0xc51a7));const express=require('express'),app=express(),router=express[a0_0xa02695(0x9d)](),auth=require('../middleware/auth'),{profile,master_shop,sales_finished,adjustment_finished,transfers_finished,sales,adjustment,transfers}=require(a0_0xa02695(0x6f)),users=require(a0_0xa02695(0x73)),nodemailer=require('nodemailer');function a0_0x5c17(){const _0x460bef=['French','Chinese','Arabic','save','/outgoing_finished','/adjustment','18zUJxVV','False','Adjustment\x20Finished\x20Goods','2wmpcMT','log','Portuguese\x20(BR)','/adjustment_finished','English\x20(US)','body','84815340INfAFO','German','/transfer_finished','/view','5424867YkNaJj','find','Hindi','email','exports','json','7261848hIRWNi','Transfer\x20Raw\x20materials','isAllowEdit','1399223dZzdAs','Router','outF','Spanish','Arabic\x20(ae)','out','render','language','findOne','adj','invoice','approvals_view','6823512CUHKZC','get','3GHJqpR','../models/all_models','message','16rROult','2364415ozxYRA','../public/language/languages.json','Portuguese','flash','Outgoing\x20Finished\x20Goods','errors','trff','user','/outgoing','success','20qWYDRg','5524188TEWyuz','post','English'];a0_0x5c17=function(){return _0x460bef;};return a0_0x5c17();}router[a0_0xa02695(0x6d)](a0_0xa02695(0x92),auth,async(_0x2ad63d,_0x51ae06)=>{const _0x2645fd=a0_0xa02695;try{const {username:_0x25030c,email:_0x30b167,role:_0x2bffbb}=_0x2ad63d[_0x2645fd(0x79)],_0x1da136=_0x2ad63d['user'],_0x211a73=await profile['findOne']({'email':_0x1da136[_0x2645fd(0x96)]}),_0x3142b0=await master_shop[_0x2645fd(0x94)](),_0x232c07=await sales[_0x2645fd(0x94)]({'finalize':_0x2645fd(0x87)}),_0xab7cf9=await adjustment[_0x2645fd(0x94)]({'finalize':_0x2645fd(0x87)}),_0xdde3d1=await transfers[_0x2645fd(0x94)]({'finalize':'False'});if(_0x3142b0[0x0][_0x2645fd(0xa3)]=='English\x20(US)')var _0x1fbd59=users['English'];else{if(_0x3142b0[0x0][_0x2645fd(0xa3)]==_0x2645fd(0x95))var _0x1fbd59=users['Hindi'];else{if(_0x3142b0[0x0]['language']==_0x2645fd(0x90))var _0x1fbd59=users[_0x2645fd(0x90)];else{if(_0x3142b0[0x0][_0x2645fd(0xa3)]==_0x2645fd(0x9f))var _0x1fbd59=users[_0x2645fd(0x9f)];else{if(_0x3142b0[0x0]['language']==_0x2645fd(0x80))var _0x1fbd59=users['French'];else{if(_0x3142b0[0x0][_0x2645fd(0xa3)]==_0x2645fd(0x8b))var _0x1fbd59=users[_0x2645fd(0x74)];else{if(_0x3142b0[0x0][_0x2645fd(0xa3)]==_0x2645fd(0x81))var _0x1fbd59=users[_0x2645fd(0x81)];else{if(_0x3142b0[0x0][_0x2645fd(0xa3)]==_0x2645fd(0xa0))var _0x1fbd59=users['Arabic'];}}}}}}}_0x51ae06[_0x2645fd(0xa2)]('edit_approvals_view',{'success':_0x2ad63d[_0x2645fd(0x75)](_0x2645fd(0x7b)),'errors':_0x2ad63d[_0x2645fd(0x75)](_0x2645fd(0x77)),'role':_0x1da136,'profile':_0x211a73,'master_shop':_0x3142b0,'language':_0x1fbd59,'sales':_0x232c07,'adjustment':_0xab7cf9,'transfer':_0xdde3d1});}catch(_0xadf7f2){console[_0x2645fd(0x8a)](_0xadf7f2);}}),router[a0_0xa02695(0x6d)](a0_0xa02695(0x7a),auth,async(_0x57e76e,_0x4f037c)=>{const _0x4d7605=a0_0xa02695;try{const {username:_0x30e527,email:_0x1aa247,role:_0x2ba9b3}=_0x57e76e[_0x4d7605(0x79)],_0x54b2ef=_0x57e76e['user'],_0x26d566=await profile['findOne']({'email':_0x54b2ef['email']}),_0x3559f3=await master_shop[_0x4d7605(0x94)](),_0x53d776=await sales[_0x4d7605(0x94)]({'finalize':'False'}),_0x3a42a5={'name':'Outgoing\x20Raw\x20materials','code':_0x4d7605(0xa1)};if(_0x3559f3[0x0][_0x4d7605(0xa3)]==_0x4d7605(0x8d))var _0x1d2d8c=users['English'];else{if(_0x3559f3[0x0]['language']==_0x4d7605(0x95))var _0x1d2d8c=users['Hindi'];else{if(_0x3559f3[0x0][_0x4d7605(0xa3)]==_0x4d7605(0x90))var _0x1d2d8c=users[_0x4d7605(0x90)];else{if(_0x3559f3[0x0][_0x4d7605(0xa3)]=='Spanish')var _0x1d2d8c=users[_0x4d7605(0x9f)];else{if(_0x3559f3[0x0][_0x4d7605(0xa3)]==_0x4d7605(0x80))var _0x1d2d8c=users[_0x4d7605(0x80)];else{if(_0x3559f3[0x0][_0x4d7605(0xa3)]==_0x4d7605(0x8b))var _0x1d2d8c=users[_0x4d7605(0x74)];else{if(_0x3559f3[0x0][_0x4d7605(0xa3)]==_0x4d7605(0x81))var _0x1d2d8c=users[_0x4d7605(0x81)];else{if(_0x3559f3[0x0][_0x4d7605(0xa3)]==_0x4d7605(0xa0))var _0x1d2d8c=users[_0x4d7605(0x82)];}}}}}}}_0x4f037c[_0x4d7605(0xa2)](_0x4d7605(0xa7),{'success':_0x57e76e[_0x4d7605(0x75)](_0x4d7605(0x7b)),'errors':_0x57e76e[_0x4d7605(0x75)](_0x4d7605(0x77)),'role':_0x54b2ef,'profile':_0x26d566,'master_shop':_0x3559f3,'language':_0x1d2d8c,'data':_0x53d776,'titleName':_0x3a42a5});}catch(_0x3070df){console[_0x4d7605(0x8a)](_0x3070df);}}),router['post'](a0_0xa02695(0x7a),auth,async(_0x9019af,_0x3d1c89)=>{const _0x24f681=a0_0xa02695;try{const {id:_0x3c753b,invoice:_0x1c49b2,value:_0x1651bf}=_0x9019af[_0x24f681(0x8e)],_0x3a81a5=await sales[_0x24f681(0xa4)]({'_id':_0x3c753b,'invoice':_0x1c49b2});_0x3a81a5[_0x24f681(0x9b)]=_0x1651bf;const _0x1ed3b0=await _0x3a81a5[_0x24f681(0x83)]();_0x3d1c89[_0x24f681(0x98)]({'status':0xc8,'data':{'BoolData':_0x1ed3b0['isAllowEdit'],'InvoiceNum':_0x1ed3b0[_0x24f681(0xa6)]}});}catch(_0x7442dd){return console[_0x24f681(0x8a)](_0x7442dd),{'status':0x194,'data':_0x7442dd[_0x24f681(0x70)]};}}),router[a0_0xa02695(0x6d)]('/adjustment',auth,async(_0x41014a,_0x127b00)=>{const _0x5e9b8b=a0_0xa02695;try{const {username:_0x48f22f,email:_0x4d8c3f,role:_0x51f8e3}=_0x41014a['user'],_0x7e7eb9=_0x41014a[_0x5e9b8b(0x79)],_0x1cafc1=await profile[_0x5e9b8b(0xa4)]({'email':_0x7e7eb9[_0x5e9b8b(0x96)]}),_0x256a77=await master_shop['find'](),_0x445343=await adjustment['find']({'finalize':_0x5e9b8b(0x87)}),_0xb8e91={'name':'Adjustment\x20Raw\x20materials','code':_0x5e9b8b(0xa5)};if(_0x256a77[0x0][_0x5e9b8b(0xa3)]==_0x5e9b8b(0x8d))var _0x5c9fea=users[_0x5e9b8b(0x7f)];else{if(_0x256a77[0x0][_0x5e9b8b(0xa3)]==_0x5e9b8b(0x95))var _0x5c9fea=users['Hindi'];else{if(_0x256a77[0x0][_0x5e9b8b(0xa3)]==_0x5e9b8b(0x90))var _0x5c9fea=users['German'];else{if(_0x256a77[0x0][_0x5e9b8b(0xa3)]==_0x5e9b8b(0x9f))var _0x5c9fea=users['Spanish'];else{if(_0x256a77[0x0][_0x5e9b8b(0xa3)]=='French')var _0x5c9fea=users[_0x5e9b8b(0x80)];else{if(_0x256a77[0x0][_0x5e9b8b(0xa3)]==_0x5e9b8b(0x8b))var _0x5c9fea=users[_0x5e9b8b(0x74)];else{if(_0x256a77[0x0]['language']==_0x5e9b8b(0x81))var _0x5c9fea=users[_0x5e9b8b(0x81)];else{if(_0x256a77[0x0][_0x5e9b8b(0xa3)]==_0x5e9b8b(0xa0))var _0x5c9fea=users[_0x5e9b8b(0x82)];}}}}}}}_0x127b00[_0x5e9b8b(0xa2)](_0x5e9b8b(0xa7),{'success':_0x41014a[_0x5e9b8b(0x75)](_0x5e9b8b(0x7b)),'errors':_0x41014a[_0x5e9b8b(0x75)]('errors'),'role':_0x7e7eb9,'profile':_0x1cafc1,'master_shop':_0x256a77,'language':_0x5c9fea,'data':_0x445343,'titleName':_0xb8e91});}catch(_0x3ed436){console['log'](_0x3ed436);}}),router[a0_0xa02695(0x7e)](a0_0xa02695(0x85),auth,async(_0x28bd65,_0x173e1a)=>{const _0x4a3981=a0_0xa02695;try{const {id:_0xe970c2,invoice:_0x2de3dd,value:_0x44e4db}=_0x28bd65[_0x4a3981(0x8e)],_0x8d9d4c=await adjustment[_0x4a3981(0xa4)]({'_id':_0xe970c2,'invoice':_0x2de3dd});_0x8d9d4c[_0x4a3981(0x9b)]=_0x44e4db;const _0x41ae49=await _0x8d9d4c[_0x4a3981(0x83)]();_0x173e1a[_0x4a3981(0x98)]({'status':0xc8,'data':{'BoolData':_0x41ae49[_0x4a3981(0x9b)],'InvoiceNum':_0x41ae49[_0x4a3981(0xa6)]}});}catch(_0x6c853d){return{'status':0x194,'data':_0x6c853d[_0x4a3981(0x70)]};}}),router[a0_0xa02695(0x6d)]('/transfer',auth,async(_0x519f40,_0x35cce3)=>{const _0x4a6a1c=a0_0xa02695;try{const {username:_0x24f097,email:_0x34ecc7,role:_0x1cd7d4}=_0x519f40['user'],_0x133baa=_0x519f40[_0x4a6a1c(0x79)],_0x37f48c=await profile['findOne']({'email':_0x133baa[_0x4a6a1c(0x96)]}),_0x27a1d3=await master_shop[_0x4a6a1c(0x94)](),_0xba1ba5=await transfers[_0x4a6a1c(0x94)]({'finalize':_0x4a6a1c(0x87)}),_0x4644cb={'name':_0x4a6a1c(0x9a),'code':'trf'};if(_0x27a1d3[0x0][_0x4a6a1c(0xa3)]==_0x4a6a1c(0x8d))var _0x24f99b=users[_0x4a6a1c(0x7f)];else{if(_0x27a1d3[0x0][_0x4a6a1c(0xa3)]=='Hindi')var _0x24f99b=users[_0x4a6a1c(0x95)];else{if(_0x27a1d3[0x0][_0x4a6a1c(0xa3)]==_0x4a6a1c(0x90))var _0x24f99b=users[_0x4a6a1c(0x90)];else{if(_0x27a1d3[0x0]['language']==_0x4a6a1c(0x9f))var _0x24f99b=users[_0x4a6a1c(0x9f)];else{if(_0x27a1d3[0x0]['language']==_0x4a6a1c(0x80))var _0x24f99b=users[_0x4a6a1c(0x80)];else{if(_0x27a1d3[0x0][_0x4a6a1c(0xa3)]==_0x4a6a1c(0x8b))var _0x24f99b=users[_0x4a6a1c(0x74)];else{if(_0x27a1d3[0x0][_0x4a6a1c(0xa3)]=='Chinese')var _0x24f99b=users['Chinese'];else{if(_0x27a1d3[0x0][_0x4a6a1c(0xa3)]=='Arabic\x20(ae)')var _0x24f99b=users[_0x4a6a1c(0x82)];}}}}}}}_0x35cce3['render'](_0x4a6a1c(0xa7),{'success':_0x519f40[_0x4a6a1c(0x75)](_0x4a6a1c(0x7b)),'errors':_0x519f40[_0x4a6a1c(0x75)](_0x4a6a1c(0x77)),'role':_0x133baa,'profile':_0x37f48c,'master_shop':_0x27a1d3,'language':_0x24f99b,'data':_0xba1ba5,'titleName':_0x4644cb});}catch(_0x4f7dac){console[_0x4a6a1c(0x8a)](_0x4f7dac);}}),router[a0_0xa02695(0x7e)]('/transfer',auth,async(_0x3dfaed,_0x2c8f09)=>{const _0x3bd95e=a0_0xa02695;try{const {id:_0x446911,invoice:_0x57e102,value:_0x4b6f96}=_0x3dfaed[_0x3bd95e(0x8e)],_0x1352ed=await transfers[_0x3bd95e(0xa4)]({'_id':_0x446911,'invoice':_0x57e102});_0x1352ed[_0x3bd95e(0x9b)]=_0x4b6f96;const _0x1e9db5=await _0x1352ed[_0x3bd95e(0x83)]();_0x2c8f09[_0x3bd95e(0x98)]({'status':0xc8,'data':{'BoolData':_0x1e9db5[_0x3bd95e(0x9b)],'InvoiceNum':_0x1e9db5['invoice']}});}catch(_0x28c5dd){return{'status':0x194,'data':_0x28c5dd[_0x3bd95e(0x70)]};}}),router['get']('/outgoing_finished',auth,async(_0x154f44,_0x4bcf25)=>{const _0x2f6487=a0_0xa02695;try{const {username:_0x9c91a,email:_0x4d8546,role:_0x1f418d}=_0x154f44['user'],_0x1c4777=_0x154f44[_0x2f6487(0x79)],_0xf8cd9b=await profile[_0x2f6487(0xa4)]({'email':_0x1c4777['email']}),_0x3ef873=await master_shop[_0x2f6487(0x94)](),_0x2f4339=await sales_finished[_0x2f6487(0x94)]({'finalize':_0x2f6487(0x87)}),_0x2bcfdc={'name':_0x2f6487(0x76),'code':_0x2f6487(0x9e)};if(_0x3ef873[0x0][_0x2f6487(0xa3)]==_0x2f6487(0x8d))var _0x599d3c=users[_0x2f6487(0x7f)];else{if(_0x3ef873[0x0][_0x2f6487(0xa3)]==_0x2f6487(0x95))var _0x599d3c=users[_0x2f6487(0x95)];else{if(_0x3ef873[0x0][_0x2f6487(0xa3)]==_0x2f6487(0x90))var _0x599d3c=users[_0x2f6487(0x90)];else{if(_0x3ef873[0x0][_0x2f6487(0xa3)]==_0x2f6487(0x9f))var _0x599d3c=users[_0x2f6487(0x9f)];else{if(_0x3ef873[0x0][_0x2f6487(0xa3)]=='French')var _0x599d3c=users[_0x2f6487(0x80)];else{if(_0x3ef873[0x0][_0x2f6487(0xa3)]=='Portuguese\x20(BR)')var _0x599d3c=users['Portuguese'];else{if(_0x3ef873[0x0][_0x2f6487(0xa3)]=='Chinese')var _0x599d3c=users[_0x2f6487(0x81)];else{if(_0x3ef873[0x0][_0x2f6487(0xa3)]==_0x2f6487(0xa0))var _0x599d3c=users[_0x2f6487(0x82)];}}}}}}}_0x4bcf25['render'](_0x2f6487(0xa7),{'success':_0x154f44[_0x2f6487(0x75)](_0x2f6487(0x7b)),'errors':_0x154f44['flash'](_0x2f6487(0x77)),'role':_0x1c4777,'profile':_0xf8cd9b,'master_shop':_0x3ef873,'language':_0x599d3c,'data':_0x2f4339,'titleName':_0x2bcfdc});}catch(_0x55d839){console[_0x2f6487(0x8a)](_0x55d839);}}),router[a0_0xa02695(0x7e)](a0_0xa02695(0x84),auth,async(_0x3309c5,_0x31a308)=>{const _0x35198a=a0_0xa02695;try{const {id:_0x2190a0,invoice:_0x70ede7,value:_0x35f0ca}=_0x3309c5[_0x35198a(0x8e)],_0x1e9347=await sales_finished[_0x35198a(0xa4)]({'_id':_0x2190a0,'invoice':_0x70ede7});_0x1e9347[_0x35198a(0x9b)]=_0x35f0ca;const _0x1afdcb=await _0x1e9347[_0x35198a(0x83)]();_0x31a308[_0x35198a(0x98)]({'status':0xc8,'data':{'BoolData':_0x1afdcb[_0x35198a(0x9b)],'InvoiceNum':_0x1afdcb['invoice']}});}catch(_0x55ea6f){return console['log'](_0x55ea6f),{'status':0x194,'data':_0x55ea6f[_0x35198a(0x70)]};}}),router[a0_0xa02695(0x6d)]('/adjustment_finished',auth,async(_0x14c3a3,_0x5e2c27)=>{const _0x1b9f0e=a0_0xa02695;try{const {username:_0x5e4e18,email:_0x1d837f,role:_0x36147f}=_0x14c3a3[_0x1b9f0e(0x79)],_0x5d794e=_0x14c3a3[_0x1b9f0e(0x79)],_0x178d8b=await profile[_0x1b9f0e(0xa4)]({'email':_0x5d794e[_0x1b9f0e(0x96)]}),_0x1ef611=await master_shop['find'](),_0x3128c3=await adjustment_finished['find']({'finalize':_0x1b9f0e(0x87)}),_0x556d2b={'name':_0x1b9f0e(0x88),'code':'adjf'};if(_0x1ef611[0x0][_0x1b9f0e(0xa3)]=='English\x20(US)')var _0x475503=users[_0x1b9f0e(0x7f)];else{if(_0x1ef611[0x0][_0x1b9f0e(0xa3)]==_0x1b9f0e(0x95))var _0x475503=users['Hindi'];else{if(_0x1ef611[0x0][_0x1b9f0e(0xa3)]=='German')var _0x475503=users[_0x1b9f0e(0x90)];else{if(_0x1ef611[0x0]['language']=='Spanish')var _0x475503=users[_0x1b9f0e(0x9f)];else{if(_0x1ef611[0x0]['language']=='French')var _0x475503=users[_0x1b9f0e(0x80)];else{if(_0x1ef611[0x0][_0x1b9f0e(0xa3)]==_0x1b9f0e(0x8b))var _0x475503=users['Portuguese'];else{if(_0x1ef611[0x0][_0x1b9f0e(0xa3)]==_0x1b9f0e(0x81))var _0x475503=users[_0x1b9f0e(0x81)];else{if(_0x1ef611[0x0]['language']==_0x1b9f0e(0xa0))var _0x475503=users[_0x1b9f0e(0x82)];}}}}}}}_0x5e2c27['render']('approvals_view',{'success':_0x14c3a3[_0x1b9f0e(0x75)]('success'),'errors':_0x14c3a3['flash'](_0x1b9f0e(0x77)),'role':_0x5d794e,'profile':_0x178d8b,'master_shop':_0x1ef611,'language':_0x475503,'data':_0x3128c3,'titleName':_0x556d2b});}catch(_0x156868){console[_0x1b9f0e(0x8a)](_0x156868);}}),router[a0_0xa02695(0x7e)](a0_0xa02695(0x8c),auth,async(_0xecf582,_0x4271e4)=>{const _0x1e7b43=a0_0xa02695;try{const {id:_0x21fe8b,invoice:_0x2fde29,value:_0xa766c3}=_0xecf582[_0x1e7b43(0x8e)],_0x4545d4=await adjustment_finished['findOne']({'_id':_0x21fe8b,'invoice':_0x2fde29});_0x4545d4[_0x1e7b43(0x9b)]=_0xa766c3;const _0x2213bb=await _0x4545d4[_0x1e7b43(0x83)]();_0x4271e4[_0x1e7b43(0x98)]({'status':0xc8,'data':{'BoolData':_0x2213bb[_0x1e7b43(0x9b)],'InvoiceNum':_0x2213bb['invoice']}});}catch(_0x5460e5){return{'status':0x194,'data':_0x5460e5[_0x1e7b43(0x70)]};}}),router[a0_0xa02695(0x6d)](a0_0xa02695(0x91),auth,async(_0xbeadbf,_0x41f09c)=>{const _0x27e30b=a0_0xa02695;try{const {username:_0x3b7225,email:_0x5d46ef,role:_0x4183db}=_0xbeadbf[_0x27e30b(0x79)],_0x5cc5ea=_0xbeadbf['user'],_0x556c41=await profile[_0x27e30b(0xa4)]({'email':_0x5cc5ea[_0x27e30b(0x96)]}),_0x750ee3=await master_shop['find'](),_0x5e5e5e=await transfers_finished[_0x27e30b(0x94)]({'finalize':'False'}),_0x35c178={'name':'Transfer\x20Finished\x20Goods','code':_0x27e30b(0x78)};if(_0x750ee3[0x0][_0x27e30b(0xa3)]==_0x27e30b(0x8d))var _0x291973=users[_0x27e30b(0x7f)];else{if(_0x750ee3[0x0][_0x27e30b(0xa3)]==_0x27e30b(0x95))var _0x291973=users[_0x27e30b(0x95)];else{if(_0x750ee3[0x0][_0x27e30b(0xa3)]=='German')var _0x291973=users[_0x27e30b(0x90)];else{if(_0x750ee3[0x0][_0x27e30b(0xa3)]=='Spanish')var _0x291973=users['Spanish'];else{if(_0x750ee3[0x0]['language']==_0x27e30b(0x80))var _0x291973=users[_0x27e30b(0x80)];else{if(_0x750ee3[0x0][_0x27e30b(0xa3)]=='Portuguese\x20(BR)')var _0x291973=users[_0x27e30b(0x74)];else{if(_0x750ee3[0x0][_0x27e30b(0xa3)]=='Chinese')var _0x291973=users['Chinese'];else{if(_0x750ee3[0x0][_0x27e30b(0xa3)]==_0x27e30b(0xa0))var _0x291973=users[_0x27e30b(0x82)];}}}}}}}_0x41f09c[_0x27e30b(0xa2)](_0x27e30b(0xa7),{'success':_0xbeadbf[_0x27e30b(0x75)](_0x27e30b(0x7b)),'errors':_0xbeadbf[_0x27e30b(0x75)](_0x27e30b(0x77)),'role':_0x5cc5ea,'profile':_0x556c41,'master_shop':_0x750ee3,'language':_0x291973,'data':_0x5e5e5e,'titleName':_0x35c178});}catch(_0x32da3c){console['log'](_0x32da3c);}}),router[a0_0xa02695(0x7e)](a0_0xa02695(0x91),auth,async(_0x38caa3,_0x4437b2)=>{const _0x223c2f=a0_0xa02695;try{const {id:_0x5c71a2,invoice:_0x5a637f,value:_0x4c54e0}=_0x38caa3['body'],_0xe8d94d=await transfers_finished['findOne']({'_id':_0x5c71a2,'invoice':_0x5a637f});_0xe8d94d[_0x223c2f(0x9b)]=_0x4c54e0;const _0x425643=await _0xe8d94d[_0x223c2f(0x83)]();_0x4437b2['json']({'status':0xc8,'data':{'BoolData':_0x425643[_0x223c2f(0x9b)],'InvoiceNum':_0x425643[_0x223c2f(0xa6)]}});}catch(_0x22e855){return{'status':0x194,'data':_0x22e855[_0x223c2f(0x70)]};}}),module[a0_0xa02695(0x97)]=router;