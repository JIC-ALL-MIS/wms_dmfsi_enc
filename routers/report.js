function a0_0x2a3a(_0x2465de,_0x12bd10){var _0x56817a=a0_0x5681();return a0_0x2a3a=function(_0x2a3ab4,_0x3bb4dd){_0x2a3ab4=_0x2a3ab4-0x1b2;var _0x12ec83=_0x56817a[_0x2a3ab4];return _0x12ec83;},a0_0x2a3a(_0x2465de,_0x12bd10);}var a0_0x2cc23d=a0_0x2a3a;(function(_0x1a3c34,_0x1621eb){var _0x402c27=a0_0x2a3a,_0xb2fd26=_0x1a3c34();while(!![]){try{var _0x18ee2f=-parseInt(_0x402c27(0x1ca))/0x1+parseInt(_0x402c27(0x1df))/0x2*(parseInt(_0x402c27(0x1c6))/0x3)+-parseInt(_0x402c27(0x1d4))/0x4+-parseInt(_0x402c27(0x1da))/0x5+-parseInt(_0x402c27(0x1c4))/0x6+-parseInt(_0x402c27(0x1dd))/0x7*(-parseInt(_0x402c27(0x1c5))/0x8)+parseInt(_0x402c27(0x1eb))/0x9;if(_0x18ee2f===_0x1621eb)break;else _0xb2fd26['push'](_0xb2fd26['shift']());}catch(_0x2dca43){_0xb2fd26['push'](_0xb2fd26['shift']());}}}(a0_0x5681,0x78362));const express=require(a0_0x2cc23d(0x1c3)),app=express(),router=express[a0_0x2cc23d(0x1d9)](),{profile,master_shop,product,customer,suppliers,purchases,purchases_return,sales,sales_return,adjustment,transfers,all_expenses}=require('../models/all_models'),auth=require(a0_0x2cc23d(0x1e5)),users=require(a0_0x2cc23d(0x1b6));function a0_0x5681(){var _0x5552d7=['622hhlVzY','Portuguese','customer_report','Hindi','/supplier','/purchases','../middleware/auth','$sale_product.product_name','render','purchases_report','/expense','/sale_return','6548949yihPyi','Portuguese\x20(BR)','/product','purchases_return_report','exports','../public/language/languages.json','errors','sales_report','/transfer','supplier_report','adjustment_report','product_report','sales_return_report','aggregate','German','English\x20(US)','Arabic\x20(ae)','English','express','3298584NvemsC','304BorGCK','4791xsnirI','log','language','$return_sale.product_name','608818bVCQXi','findOne','Arabic','/adjustment','master','success','French','$product.product_name','get','find','281480jDtfpl','email','expense_report','user','/purchase_return','Router','1302980lbvSaD','Chinese','flash','139559MvoHYh','Spanish'];a0_0x5681=function(){return _0x5552d7;};return a0_0x5681();}router[a0_0x2cc23d(0x1d2)](a0_0x2cc23d(0x1b3),auth,async(_0x2113bf,_0x3adcbf)=>{var _0x559032=a0_0x2cc23d;try{const {username:_0x4a2b1c,email:_0x4f52d5,role:_0x589439}=_0x2113bf[_0x559032(0x1d7)],_0x41a046=_0x2113bf[_0x559032(0x1d7)],_0x2b5977=await profile[_0x559032(0x1cb)]({'email':_0x41a046[_0x559032(0x1d5)]}),_0x3d3111=await master_shop[_0x559032(0x1d3)]();console[_0x559032(0x1c7)]('master',_0x3d3111);const _0x475e5d=await product[_0x559032(0x1d3)]();console[_0x559032(0x1c7)](_0x475e5d);if(_0x3d3111[0x0][_0x559032(0x1c8)]==_0x559032(0x1c0)){var _0x5e3918=users[_0x559032(0x1c2)];console[_0x559032(0x1c7)](_0x5e3918);}else{if(_0x3d3111[0x0][_0x559032(0x1c8)]==_0x559032(0x1e2))var _0x5e3918=users[_0x559032(0x1e2)];else{if(_0x3d3111[0x0][_0x559032(0x1c8)]==_0x559032(0x1bf))var _0x5e3918=users[_0x559032(0x1bf)];else{if(_0x3d3111[0x0][_0x559032(0x1c8)]==_0x559032(0x1de))var _0x5e3918=users[_0x559032(0x1de)];else{if(_0x3d3111[0x0]['language']==_0x559032(0x1d0))var _0x5e3918=users[_0x559032(0x1d0)];else{if(_0x3d3111[0x0][_0x559032(0x1c8)]==_0x559032(0x1b2))var _0x5e3918=users[_0x559032(0x1e0)];else{if(_0x3d3111[0x0][_0x559032(0x1c8)]==_0x559032(0x1db))var _0x5e3918=users['Chinese'];else{if(_0x3d3111[0x0][_0x559032(0x1c8)]==_0x559032(0x1c1))var _0x5e3918=users[_0x559032(0x1cc)];}}}}}}}_0x3adcbf[_0x559032(0x1e7)](_0x559032(0x1bc),{'success':_0x2113bf[_0x559032(0x1dc)](_0x559032(0x1cf)),'errors':_0x2113bf[_0x559032(0x1dc)](_0x559032(0x1b7)),'role':_0x41a046,'profile':_0x2b5977,'master_shop':_0x3d3111,'alldata':_0x475e5d,'language':_0x5e3918});}catch(_0x38b212){console['log'](_0x38b212);}}),router['get']('/customer',auth,async(_0x416ee0,_0x2a6342)=>{var _0x177697=a0_0x2cc23d;try{const {username:_0x19ce0f,email:_0x41218c,role:_0x5f541c}=_0x416ee0[_0x177697(0x1d7)],_0x32a262=_0x416ee0[_0x177697(0x1d7)],_0x4402e1=await profile[_0x177697(0x1cb)]({'email':_0x32a262[_0x177697(0x1d5)]}),_0x13afe6=await master_shop[_0x177697(0x1d3)]();console[_0x177697(0x1c7)]('master',_0x13afe6);const _0x1f5f06=await customer[_0x177697(0x1d3)]();console[_0x177697(0x1c7)](_0x1f5f06);if(_0x13afe6[0x0][_0x177697(0x1c8)]==_0x177697(0x1c0)){var _0x46acae=users[_0x177697(0x1c2)];console[_0x177697(0x1c7)](_0x46acae);}else{if(_0x13afe6[0x0]['language']=='Hindi')var _0x46acae=users[_0x177697(0x1e2)];else{if(_0x13afe6[0x0][_0x177697(0x1c8)]==_0x177697(0x1bf))var _0x46acae=users['German'];else{if(_0x13afe6[0x0][_0x177697(0x1c8)]==_0x177697(0x1de))var _0x46acae=users[_0x177697(0x1de)];else{if(_0x13afe6[0x0][_0x177697(0x1c8)]==_0x177697(0x1d0))var _0x46acae=users['French'];else{if(_0x13afe6[0x0][_0x177697(0x1c8)]=='Portuguese\x20(BR)')var _0x46acae=users[_0x177697(0x1e0)];else{if(_0x13afe6[0x0][_0x177697(0x1c8)]==_0x177697(0x1db))var _0x46acae=users[_0x177697(0x1db)];else{if(_0x13afe6[0x0]['language']==_0x177697(0x1c1))var _0x46acae=users[_0x177697(0x1cc)];}}}}}}}_0x2a6342['render'](_0x177697(0x1e1),{'success':_0x416ee0['flash']('success'),'errors':_0x416ee0[_0x177697(0x1dc)]('errors'),'role':_0x32a262,'profile':_0x4402e1,'master_shop':_0x13afe6,'alldata':_0x1f5f06,'language':_0x46acae});}catch(_0x4aa2d8){console[_0x177697(0x1c7)](_0x4aa2d8);}}),router[a0_0x2cc23d(0x1d2)](a0_0x2cc23d(0x1e3),auth,async(_0x45dd9f,_0x3f02db)=>{var _0x20ddf8=a0_0x2cc23d;try{const {username:_0x77c662,email:_0x2faafd,role:_0x4b06fc}=_0x45dd9f[_0x20ddf8(0x1d7)],_0x30ade9=_0x45dd9f['user'],_0xd0b843=await profile['findOne']({'email':_0x30ade9[_0x20ddf8(0x1d5)]}),_0x37a426=await master_shop['find']();console[_0x20ddf8(0x1c7)](_0x20ddf8(0x1ce),_0x37a426);const _0x45d252=await suppliers[_0x20ddf8(0x1d3)]();console[_0x20ddf8(0x1c7)](_0x45d252);if(_0x37a426[0x0]['language']==_0x20ddf8(0x1c0)){var _0x4e49e9=users[_0x20ddf8(0x1c2)];console['log'](_0x4e49e9);}else{if(_0x37a426[0x0][_0x20ddf8(0x1c8)]=='Hindi')var _0x4e49e9=users[_0x20ddf8(0x1e2)];else{if(_0x37a426[0x0][_0x20ddf8(0x1c8)]==_0x20ddf8(0x1bf))var _0x4e49e9=users[_0x20ddf8(0x1bf)];else{if(_0x37a426[0x0][_0x20ddf8(0x1c8)]==_0x20ddf8(0x1de))var _0x4e49e9=users[_0x20ddf8(0x1de)];else{if(_0x37a426[0x0][_0x20ddf8(0x1c8)]=='French')var _0x4e49e9=users[_0x20ddf8(0x1d0)];else{if(_0x37a426[0x0][_0x20ddf8(0x1c8)]==_0x20ddf8(0x1b2))var _0x4e49e9=users[_0x20ddf8(0x1e0)];else{if(_0x37a426[0x0][_0x20ddf8(0x1c8)]==_0x20ddf8(0x1db))var _0x4e49e9=users[_0x20ddf8(0x1db)];else{if(_0x37a426[0x0][_0x20ddf8(0x1c8)]==_0x20ddf8(0x1c1))var _0x4e49e9=users[_0x20ddf8(0x1cc)];}}}}}}}_0x3f02db['render'](_0x20ddf8(0x1ba),{'success':_0x45dd9f[_0x20ddf8(0x1dc)](_0x20ddf8(0x1cf)),'errors':_0x45dd9f[_0x20ddf8(0x1dc)](_0x20ddf8(0x1b7)),'role':_0x30ade9,'profile':_0xd0b843,'master_shop':_0x37a426,'alldata':_0x45d252,'language':_0x4e49e9});}catch(_0x518fd5){console[_0x20ddf8(0x1c7)](_0x518fd5);}}),router[a0_0x2cc23d(0x1d2)](a0_0x2cc23d(0x1e4),auth,async(_0x2fb613,_0x36c811)=>{var _0x39c7fe=a0_0x2cc23d;try{const {username:_0xe3d143,email:_0x4a4120,role:_0x3e0b90}=_0x2fb613[_0x39c7fe(0x1d7)],_0x1b0832=_0x2fb613[_0x39c7fe(0x1d7)],_0x15fe46=await profile[_0x39c7fe(0x1cb)]({'email':_0x1b0832['email']}),_0x313065=await master_shop[_0x39c7fe(0x1d3)]();console[_0x39c7fe(0x1c7)](_0x39c7fe(0x1ce),_0x313065);const _0x31a93e=await purchases[_0x39c7fe(0x1be)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x39c7fe(0x1d1),'payable':0x1}}]);console['log']('purchases\x20report',_0x31a93e);if(_0x313065[0x0]['language']==_0x39c7fe(0x1c0)){var _0x405e41=users[_0x39c7fe(0x1c2)];console['log'](_0x405e41);}else{if(_0x313065[0x0][_0x39c7fe(0x1c8)]=='Hindi')var _0x405e41=users[_0x39c7fe(0x1e2)];else{if(_0x313065[0x0][_0x39c7fe(0x1c8)]==_0x39c7fe(0x1bf))var _0x405e41=users[_0x39c7fe(0x1bf)];else{if(_0x313065[0x0][_0x39c7fe(0x1c8)]=='Spanish')var _0x405e41=users[_0x39c7fe(0x1de)];else{if(_0x313065[0x0][_0x39c7fe(0x1c8)]=='French')var _0x405e41=users[_0x39c7fe(0x1d0)];else{if(_0x313065[0x0][_0x39c7fe(0x1c8)]==_0x39c7fe(0x1b2))var _0x405e41=users[_0x39c7fe(0x1e0)];else{if(_0x313065[0x0][_0x39c7fe(0x1c8)]=='Chinese')var _0x405e41=users[_0x39c7fe(0x1db)];else{if(_0x313065[0x0][_0x39c7fe(0x1c8)]==_0x39c7fe(0x1c1))var _0x405e41=users[_0x39c7fe(0x1cc)];}}}}}}}_0x36c811['render'](_0x39c7fe(0x1e8),{'success':_0x2fb613[_0x39c7fe(0x1dc)](_0x39c7fe(0x1cf)),'errors':_0x2fb613[_0x39c7fe(0x1dc)](_0x39c7fe(0x1b7)),'role':_0x1b0832,'profile':_0x15fe46,'master_shop':_0x313065,'alldata':_0x31a93e,'language':_0x405e41});}catch(_0xfa3862){console[_0x39c7fe(0x1c7)](_0xfa3862);}}),router[a0_0x2cc23d(0x1d2)](a0_0x2cc23d(0x1d8),auth,async(_0x2b204e,_0x4eb531)=>{var _0x1347c3=a0_0x2cc23d;try{const {username:_0xbd080d,email:_0x89701b,role:_0x12413f}=_0x2b204e['user'],_0x47781c=_0x2b204e['user'],_0x16cdae=await profile[_0x1347c3(0x1cb)]({'email':_0x47781c[_0x1347c3(0x1d5)]}),_0x162f37=await master_shop['find']();console[_0x1347c3(0x1c7)](_0x1347c3(0x1ce),_0x162f37);const _0x3caf77=await purchases_return[_0x1347c3(0x1be)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':'$return_product.product_name','receivable':0x1}}]);console['log']('purchases_return_report',_0x3caf77);if(_0x162f37[0x0][_0x1347c3(0x1c8)]==_0x1347c3(0x1c0)){var _0x1c8277=users['English'];console['log'](_0x1c8277);}else{if(_0x162f37[0x0][_0x1347c3(0x1c8)]==_0x1347c3(0x1e2))var _0x1c8277=users[_0x1347c3(0x1e2)];else{if(_0x162f37[0x0]['language']==_0x1347c3(0x1bf))var _0x1c8277=users[_0x1347c3(0x1bf)];else{if(_0x162f37[0x0][_0x1347c3(0x1c8)]==_0x1347c3(0x1de))var _0x1c8277=users[_0x1347c3(0x1de)];else{if(_0x162f37[0x0][_0x1347c3(0x1c8)]==_0x1347c3(0x1d0))var _0x1c8277=users[_0x1347c3(0x1d0)];else{if(_0x162f37[0x0][_0x1347c3(0x1c8)]==_0x1347c3(0x1b2))var _0x1c8277=users[_0x1347c3(0x1e0)];else{if(_0x162f37[0x0][_0x1347c3(0x1c8)]==_0x1347c3(0x1db))var _0x1c8277=users['Chinese'];else{if(_0x162f37[0x0][_0x1347c3(0x1c8)]==_0x1347c3(0x1c1))var _0x1c8277=users[_0x1347c3(0x1cc)];}}}}}}}_0x4eb531['render'](_0x1347c3(0x1b4),{'success':_0x2b204e[_0x1347c3(0x1dc)](_0x1347c3(0x1cf)),'errors':_0x2b204e[_0x1347c3(0x1dc)]('errors'),'role':_0x47781c,'profile':_0x16cdae,'master_shop':_0x162f37,'alldata':_0x3caf77,'language':_0x1c8277});}catch(_0x12e063){console[_0x1347c3(0x1c7)](_0x12e063);}}),router[a0_0x2cc23d(0x1d2)]('/sale',auth,async(_0x2b2321,_0x5db11b)=>{var _0x38c14e=a0_0x2cc23d;try{const {username:_0x4681b2,email:_0x5e8e74,role:_0x11391b}=_0x2b2321[_0x38c14e(0x1d7)],_0x5caa0f=_0x2b2321['user'],_0x104248=await profile[_0x38c14e(0x1cb)]({'email':_0x5caa0f[_0x38c14e(0x1d5)]}),_0x1296cb=await master_shop[_0x38c14e(0x1d3)]();console[_0x38c14e(0x1c7)]('master',_0x1296cb);const _0x4330c7=await sales['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x38c14e(0x1e6),'receivable_amount':0x1}}]);console[_0x38c14e(0x1c7)](_0x4330c7);if(_0x1296cb[0x0][_0x38c14e(0x1c8)]==_0x38c14e(0x1c0)){var _0x47d2a3=users[_0x38c14e(0x1c2)];console[_0x38c14e(0x1c7)](_0x47d2a3);}else{if(_0x1296cb[0x0][_0x38c14e(0x1c8)]==_0x38c14e(0x1e2))var _0x47d2a3=users['Hindi'];else{if(_0x1296cb[0x0][_0x38c14e(0x1c8)]==_0x38c14e(0x1bf))var _0x47d2a3=users['German'];else{if(_0x1296cb[0x0][_0x38c14e(0x1c8)]==_0x38c14e(0x1de))var _0x47d2a3=users[_0x38c14e(0x1de)];else{if(_0x1296cb[0x0][_0x38c14e(0x1c8)]==_0x38c14e(0x1d0))var _0x47d2a3=users[_0x38c14e(0x1d0)];else{if(_0x1296cb[0x0]['language']==_0x38c14e(0x1b2))var _0x47d2a3=users[_0x38c14e(0x1e0)];else{if(_0x1296cb[0x0][_0x38c14e(0x1c8)]==_0x38c14e(0x1db))var _0x47d2a3=users[_0x38c14e(0x1db)];else{if(_0x1296cb[0x0][_0x38c14e(0x1c8)]=='Arabic\x20(ae)')var _0x47d2a3=users[_0x38c14e(0x1cc)];}}}}}}}_0x5db11b[_0x38c14e(0x1e7)](_0x38c14e(0x1b8),{'success':_0x2b2321['flash'](_0x38c14e(0x1cf)),'errors':_0x2b2321[_0x38c14e(0x1dc)](_0x38c14e(0x1b7)),'role':_0x5caa0f,'profile':_0x104248,'master_shop':_0x1296cb,'alldata':_0x4330c7,'language':_0x47d2a3});}catch(_0x5f0107){console[_0x38c14e(0x1c7)](_0x5f0107);}}),router[a0_0x2cc23d(0x1d2)](a0_0x2cc23d(0x1ea),auth,async(_0x16adeb,_0x5b412)=>{var _0x493873=a0_0x2cc23d;try{const {username:_0x56528a,email:_0x584d5d,role:_0x4035dd}=_0x16adeb['user'],_0x3eef2f=_0x16adeb['user'],_0x43166b=await profile['findOne']({'email':_0x3eef2f['email']}),_0x83d1e5=await master_shop[_0x493873(0x1d3)]();console[_0x493873(0x1c7)]('master',_0x83d1e5);const _0x1da3ec=await sales_return[_0x493873(0x1be)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x493873(0x1c9),'payable_to_customer':0x1}}]);console[_0x493873(0x1c7)](_0x1da3ec);if(_0x83d1e5[0x0][_0x493873(0x1c8)]==_0x493873(0x1c0)){var _0x498a0d=users['English'];console[_0x493873(0x1c7)](_0x498a0d);}else{if(_0x83d1e5[0x0][_0x493873(0x1c8)]==_0x493873(0x1e2))var _0x498a0d=users['Hindi'];else{if(_0x83d1e5[0x0][_0x493873(0x1c8)]==_0x493873(0x1bf))var _0x498a0d=users[_0x493873(0x1bf)];else{if(_0x83d1e5[0x0][_0x493873(0x1c8)]==_0x493873(0x1de))var _0x498a0d=users[_0x493873(0x1de)];else{if(_0x83d1e5[0x0][_0x493873(0x1c8)]==_0x493873(0x1d0))var _0x498a0d=users[_0x493873(0x1d0)];else{if(_0x83d1e5[0x0][_0x493873(0x1c8)]==_0x493873(0x1b2))var _0x498a0d=users[_0x493873(0x1e0)];else{if(_0x83d1e5[0x0][_0x493873(0x1c8)]==_0x493873(0x1db))var _0x498a0d=users[_0x493873(0x1db)];else{if(_0x83d1e5[0x0][_0x493873(0x1c8)]==_0x493873(0x1c1))var _0x498a0d=users[_0x493873(0x1cc)];}}}}}}}_0x5b412[_0x493873(0x1e7)](_0x493873(0x1bd),{'success':_0x16adeb[_0x493873(0x1dc)](_0x493873(0x1cf)),'errors':_0x16adeb[_0x493873(0x1dc)](_0x493873(0x1b7)),'role':_0x3eef2f,'profile':_0x43166b,'master_shop':_0x83d1e5,'alldata':_0x1da3ec,'language':_0x498a0d});}catch(_0x19ee9a){console[_0x493873(0x1c7)](_0x19ee9a);}}),router[a0_0x2cc23d(0x1d2)](a0_0x2cc23d(0x1cd),auth,async(_0x16701e,_0x1ec598)=>{var _0x3f23ab=a0_0x2cc23d;try{const {username:_0x1cbcb4,email:_0x2b3ad9,role:_0x450fa7}=_0x16701e[_0x3f23ab(0x1d7)],_0x202ea8=_0x16701e[_0x3f23ab(0x1d7)],_0x5b1c6d=await profile[_0x3f23ab(0x1cb)]({'email':_0x202ea8[_0x3f23ab(0x1d5)]}),_0x1cf305=await master_shop[_0x3f23ab(0x1d3)]();console['log'](_0x3f23ab(0x1ce),_0x1cf305);const _0x493ba5=await adjustment['find']();console[_0x3f23ab(0x1c7)](_0x493ba5);if(_0x1cf305[0x0]['language']==_0x3f23ab(0x1c0)){var _0x507842=users[_0x3f23ab(0x1c2)];console[_0x3f23ab(0x1c7)](_0x507842);}else{if(_0x1cf305[0x0][_0x3f23ab(0x1c8)]=='Hindi')var _0x507842=users[_0x3f23ab(0x1e2)];else{if(_0x1cf305[0x0][_0x3f23ab(0x1c8)]=='German')var _0x507842=users['German'];else{if(_0x1cf305[0x0][_0x3f23ab(0x1c8)]=='Spanish')var _0x507842=users[_0x3f23ab(0x1de)];else{if(_0x1cf305[0x0][_0x3f23ab(0x1c8)]==_0x3f23ab(0x1d0))var _0x507842=users[_0x3f23ab(0x1d0)];else{if(_0x1cf305[0x0][_0x3f23ab(0x1c8)]==_0x3f23ab(0x1b2))var _0x507842=users[_0x3f23ab(0x1e0)];else{if(_0x1cf305[0x0][_0x3f23ab(0x1c8)]==_0x3f23ab(0x1db))var _0x507842=users[_0x3f23ab(0x1db)];else{if(_0x1cf305[0x0]['language']==_0x3f23ab(0x1c1))var _0x507842=users[_0x3f23ab(0x1cc)];}}}}}}}_0x1ec598[_0x3f23ab(0x1e7)](_0x3f23ab(0x1bb),{'success':_0x16701e['flash'](_0x3f23ab(0x1cf)),'errors':_0x16701e[_0x3f23ab(0x1dc)](_0x3f23ab(0x1b7)),'role':_0x202ea8,'profile':_0x5b1c6d,'master_shop':_0x1cf305,'alldata':_0x493ba5,'language':_0x507842});}catch(_0x24cb3c){console[_0x3f23ab(0x1c7)](_0x24cb3c);}}),router[a0_0x2cc23d(0x1d2)](a0_0x2cc23d(0x1b9),auth,async(_0x4854dd,_0x492a94)=>{var _0x3a21be=a0_0x2cc23d;try{const {username:_0x5946f4,email:_0x295622,role:_0x5f44bd}=_0x4854dd[_0x3a21be(0x1d7)],_0x17a30b=_0x4854dd[_0x3a21be(0x1d7)],_0x9d022d=await profile[_0x3a21be(0x1cb)]({'email':_0x17a30b[_0x3a21be(0x1d5)]}),_0x579afa=await master_shop[_0x3a21be(0x1d3)]();console[_0x3a21be(0x1c7)](_0x3a21be(0x1ce),_0x579afa);const _0x32f92b=await transfers['find']();console[_0x3a21be(0x1c7)](_0x32f92b);if(_0x579afa[0x0][_0x3a21be(0x1c8)]==_0x3a21be(0x1c0)){var _0xd2287d=users[_0x3a21be(0x1c2)];console[_0x3a21be(0x1c7)](_0xd2287d);}else{if(_0x579afa[0x0][_0x3a21be(0x1c8)]=='Hindi')var _0xd2287d=users['Hindi'];else{if(_0x579afa[0x0][_0x3a21be(0x1c8)]==_0x3a21be(0x1bf))var _0xd2287d=users['German'];else{if(_0x579afa[0x0][_0x3a21be(0x1c8)]=='Spanish')var _0xd2287d=users['Spanish'];else{if(_0x579afa[0x0]['language']==_0x3a21be(0x1d0))var _0xd2287d=users[_0x3a21be(0x1d0)];else{if(_0x579afa[0x0]['language']==_0x3a21be(0x1b2))var _0xd2287d=users['Portuguese'];else{if(_0x579afa[0x0][_0x3a21be(0x1c8)]==_0x3a21be(0x1db))var _0xd2287d=users[_0x3a21be(0x1db)];else{if(_0x579afa[0x0]['language']==_0x3a21be(0x1c1))var _0xd2287d=users['Arabic'];}}}}}}}_0x492a94[_0x3a21be(0x1e7)]('transfer_report',{'success':_0x4854dd[_0x3a21be(0x1dc)](_0x3a21be(0x1cf)),'errors':_0x4854dd[_0x3a21be(0x1dc)](_0x3a21be(0x1b7)),'role':_0x17a30b,'profile':_0x9d022d,'master_shop':_0x579afa,'alldata':_0x32f92b,'language':_0xd2287d});}catch(_0x4329fd){console[_0x3a21be(0x1c7)](_0x4329fd);}}),router[a0_0x2cc23d(0x1d2)](a0_0x2cc23d(0x1e9),auth,async(_0x39a81d,_0x330c90)=>{var _0x361a08=a0_0x2cc23d;try{const {username:_0x36c889,email:_0x29b3e5,role:_0x3932ac}=_0x39a81d[_0x361a08(0x1d7)],_0x4daeff=_0x39a81d[_0x361a08(0x1d7)],_0x8bf1eb=await profile[_0x361a08(0x1cb)]({'email':_0x4daeff['email']}),_0x4ea7b9=await master_shop['find']();console['log'](_0x361a08(0x1ce),_0x4ea7b9);const _0x3409a8=await all_expenses['find']();console[_0x361a08(0x1c7)](_0x3409a8);if(_0x4ea7b9[0x0][_0x361a08(0x1c8)]==_0x361a08(0x1c0)){var _0x443393=users[_0x361a08(0x1c2)];console['log'](_0x443393);}else{if(_0x4ea7b9[0x0]['language']==_0x361a08(0x1e2))var _0x443393=users[_0x361a08(0x1e2)];else{if(_0x4ea7b9[0x0][_0x361a08(0x1c8)]==_0x361a08(0x1bf))var _0x443393=users[_0x361a08(0x1bf)];else{if(_0x4ea7b9[0x0][_0x361a08(0x1c8)]=='Spanish')var _0x443393=users[_0x361a08(0x1de)];else{if(_0x4ea7b9[0x0][_0x361a08(0x1c8)]==_0x361a08(0x1d0))var _0x443393=users[_0x361a08(0x1d0)];else{if(_0x4ea7b9[0x0][_0x361a08(0x1c8)]==_0x361a08(0x1b2))var _0x443393=users[_0x361a08(0x1e0)];else{if(_0x4ea7b9[0x0][_0x361a08(0x1c8)]==_0x361a08(0x1db))var _0x443393=users[_0x361a08(0x1db)];else{if(_0x4ea7b9[0x0][_0x361a08(0x1c8)]==_0x361a08(0x1c1))var _0x443393=users[_0x361a08(0x1cc)];}}}}}}}_0x330c90[_0x361a08(0x1e7)](_0x361a08(0x1d6),{'success':_0x39a81d[_0x361a08(0x1dc)](_0x361a08(0x1cf)),'errors':_0x39a81d[_0x361a08(0x1dc)]('errors'),'role':_0x4daeff,'profile':_0x8bf1eb,'master_shop':_0x4ea7b9,'alldata':_0x3409a8,'language':_0x443393});}catch(_0x1b14c5){console[_0x361a08(0x1c7)](_0x1b14c5);}}),module[a0_0x2cc23d(0x1b5)]=router;