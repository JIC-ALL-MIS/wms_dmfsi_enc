function a0_0x34c1(){var _0x38ee58=['Hindi','warehouse_data','body','2106bfrHpB','Arabic','57QAEvyL','31110ErtwPm','/Reports_product','raw','success','render','products','../middleware/auth','/view/product/:id','$product_details.product_name','master','log','Finished\x20Goods','json','$product_docs.sku','Arabic\x20(ae)','695ayoSQu','stock_report','express','email','ssd','8961780JzIbOi','English','language','name','role_data','128VTWXiF','Chinese','/Reports','French','/view/:id','status','Spanish','flash','$product_details.product_stock','/view','Portuguese\x20(BR)','product_docs','$product_details','German','511ZCSKXW','12764jiIoHb','$product_docs.unit','user','aggregate','$product_docs.brand','product_data','params','get','105291POIqkd','exports','../public/language/languages.json','$product_docs.category','errors','English\x20(US)','finish','48078kYbTOA','post','warehouse','product_details.bin_name','1160797UKTipq','find','Portuguese'];a0_0x34c1=function(){return _0x38ee58;};return a0_0x34c1();}var a0_0x82cb0c=a0_0xf65e;(function(_0x466e1d,_0x38aa83){var _0x45df07=a0_0xf65e,_0x1b325c=_0x466e1d();while(!![]){try{var _0x2f941c=parseInt(_0x45df07(0x137))/0x1+parseInt(_0x45df07(0x134))/0x2*(-parseInt(_0x45df07(0x136))/0x3)+-parseInt(_0x45df07(0x11b))/0x4*(parseInt(_0x45df07(0x102))/0x5)+parseInt(_0x45df07(0x12a))/0x6*(parseInt(_0x45df07(0x11a))/0x7)+-parseInt(_0x45df07(0x10c))/0x8*(parseInt(_0x45df07(0x123))/0x9)+parseInt(_0x45df07(0x107))/0xa+parseInt(_0x45df07(0x12e))/0xb;if(_0x2f941c===_0x38aa83)break;else _0x1b325c['push'](_0x1b325c['shift']());}catch(_0x4f644d){_0x1b325c['push'](_0x1b325c['shift']());}}}(a0_0x34c1,0xec170));function a0_0xf65e(_0x400b83,_0x7b35cc){var _0x34c1b0=a0_0x34c1();return a0_0xf65e=function(_0xf65eea,_0x711b04){_0xf65eea=_0xf65eea-0xff;var _0x3f133f=_0x34c1b0[_0xf65eea];return _0x3f133f;},a0_0xf65e(_0x400b83,_0x7b35cc);}const express=require(a0_0x82cb0c(0x104)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases}=require('../models/all_models'),auth=require(a0_0x82cb0c(0x13d)),users=require(a0_0x82cb0c(0x125));router[a0_0x82cb0c(0x122)](a0_0x82cb0c(0x115),auth,async(_0x4dbb61,_0x1a3619)=>{var _0x352dea=a0_0x82cb0c;try{const _0x56ddd9=_0x4dbb61['user'];console[_0x352dea(0x141)](_0x352dea(0x10b),_0x4dbb61[_0x352dea(0x11d)]);const _0x3cf11b=await profile['findOne']({'email':_0x56ddd9[_0x352dea(0x105)]}),_0x449f93=await master_shop[_0x352dea(0x12f)]();console['log']('master',_0x449f93);const _0x42a9df=await warehouse['find']({}),_0x164a72=await product[_0x352dea(0x12f)]({});if(_0x449f93[0x0][_0x352dea(0x109)]==_0x352dea(0x128)){var _0x4bf058=users['English'];console[_0x352dea(0x141)](_0x4bf058);}else{if(_0x449f93[0x0][_0x352dea(0x109)]==_0x352dea(0x131))var _0x4bf058=users[_0x352dea(0x131)];else{if(_0x449f93[0x0][_0x352dea(0x109)]==_0x352dea(0x119))var _0x4bf058=users[_0x352dea(0x119)];else{if(_0x449f93[0x0]['language']==_0x352dea(0x112))var _0x4bf058=users[_0x352dea(0x112)];else{if(_0x449f93[0x0][_0x352dea(0x109)]==_0x352dea(0x10f))var _0x4bf058=users[_0x352dea(0x10f)];else{if(_0x449f93[0x0][_0x352dea(0x109)]==_0x352dea(0x116))var _0x4bf058=users[_0x352dea(0x130)];else{if(_0x449f93[0x0]['language']==_0x352dea(0x10d))var _0x4bf058=users['Chinese'];else{if(_0x449f93[0x0][_0x352dea(0x109)]=='Arabic\x20(ae)')var _0x4bf058=users[_0x352dea(0x135)];}}}}}}}_0x1a3619[_0x352dea(0x13b)](_0x352dea(0x103),{'success':_0x4dbb61[_0x352dea(0x113)](_0x352dea(0x13a)),'errors':_0x4dbb61[_0x352dea(0x113)](_0x352dea(0x127)),'role':_0x56ddd9,'profile':_0x3cf11b,'master_shop':_0x449f93,'warehouse':_0x42a9df,'product':_0x164a72,'warehouse_doc':[],'product_doc':[],'language':_0x4bf058});}catch(_0xa15064){console['log'](_0xa15064);}}),router[a0_0x82cb0c(0x122)](a0_0x82cb0c(0x110),auth,async(_0x147c3e,_0x3d7621)=>{var _0x32962c=a0_0x82cb0c;try{const _0x297557=await master_shop[_0x32962c(0x12f)]();console['log'](_0x32962c(0x140),_0x297557);if(_0x147c3e[_0x32962c(0x121)]['id']==_0x32962c(0x12c)){const _0x28b693=await warehouse['find']();console[_0x32962c(0x141)](_0x28b693);if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x128)){var _0x3a0ccc=users[_0x32962c(0x108)];console['log'](_0x3a0ccc);}else{if(_0x297557[0x0]['language']==_0x32962c(0x131))var _0x3a0ccc=users['Hindi'];else{if(_0x297557[0x0]['language']==_0x32962c(0x119))var _0x3a0ccc=users[_0x32962c(0x119)];else{if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x112))var _0x3a0ccc=users[_0x32962c(0x112)];else{if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x10f))var _0x3a0ccc=users[_0x32962c(0x10f)];else{if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x116))var _0x3a0ccc=users[_0x32962c(0x130)];else{if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x10d))var _0x3a0ccc=users[_0x32962c(0x10d)];else{if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x101))var _0x3a0ccc=users['Arabic'];}}}}}}}_0x3d7621[_0x32962c(0x111)](0xc8)['json']({'data':_0x28b693,'language':_0x3a0ccc['warehouse']});}else{const _0x2495dc=await product[_0x32962c(0x12f)]();console[_0x32962c(0x141)]('111',_0x2495dc);if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x128)){var _0x3a0ccc=users[_0x32962c(0x108)];console[_0x32962c(0x141)](_0x3a0ccc);}else{if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x131))var _0x3a0ccc=users[_0x32962c(0x131)];else{if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x119))var _0x3a0ccc=users[_0x32962c(0x119)];else{if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x112))var _0x3a0ccc=users[_0x32962c(0x112)];else{if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x10f))var _0x3a0ccc=users[_0x32962c(0x10f)];else{if(_0x297557[0x0][_0x32962c(0x109)]==_0x32962c(0x116))var _0x3a0ccc=users[_0x32962c(0x130)];else{if(_0x297557[0x0]['language']==_0x32962c(0x10d))var _0x3a0ccc=users[_0x32962c(0x10d)];else{if(_0x297557[0x0][_0x32962c(0x109)]=='Arabic\x20(ae)')var _0x3a0ccc=users[_0x32962c(0x135)];}}}}}}}_0x3d7621[_0x32962c(0x111)](0xc8)[_0x32962c(0xff)]({'data':_0x2495dc,'language':_0x3a0ccc[_0x32962c(0x13c)]});}}catch(_0x3e61b0){console[_0x32962c(0x141)](_0x3e61b0);}}),router[a0_0x82cb0c(0x122)]('/view/warehouse/:id',auth,async(_0x1a9db2,_0x201757)=>{var _0x2e2212=a0_0x82cb0c;try{const _0x466253=_0x1a9db2[_0x2e2212(0x121)]['id'];console[_0x2e2212(0x141)](_0x466253);const _0x54654a=await master_shop[_0x2e2212(0x12f)]();console[_0x2e2212(0x141)](_0x2e2212(0x140),_0x54654a);const _0x10a8d3=await warehouse[_0x2e2212(0x11e)]([{'$match':{'name':_0x466253}},{'$unwind':'$product_details'},{'$lookup':{'from':_0x2e2212(0x13c),'localField':'product_details.product_name','foreignField':_0x2e2212(0x10a),'as':_0x2e2212(0x117)}},{'$unwind':'$product_docs'},{'$project':{'name':0x1,'product_name':_0x2e2212(0x13f),'product_stock':_0x2e2212(0x114),'category':_0x2e2212(0x126),'brand':_0x2e2212(0x11f),'sku':_0x2e2212(0x100),'unit':_0x2e2212(0x11c),'rak':'product_details.rak_name','bin':_0x2e2212(0x12d)}}]);console[_0x2e2212(0x141)](_0x10a8d3);if(_0x54654a[0x0][_0x2e2212(0x109)]==_0x2e2212(0x128)){var _0x583031=users[_0x2e2212(0x108)];console[_0x2e2212(0x141)](_0x583031);}else{if(_0x54654a[0x0][_0x2e2212(0x109)]==_0x2e2212(0x131))var _0x583031=users['Hindi'];else{if(_0x54654a[0x0][_0x2e2212(0x109)]==_0x2e2212(0x119))var _0x583031=users[_0x2e2212(0x119)];else{if(_0x54654a[0x0][_0x2e2212(0x109)]==_0x2e2212(0x112))var _0x583031=users[_0x2e2212(0x112)];else{if(_0x54654a[0x0][_0x2e2212(0x109)]==_0x2e2212(0x10f))var _0x583031=users[_0x2e2212(0x10f)];else{if(_0x54654a[0x0][_0x2e2212(0x109)]=='Portuguese\x20(BR)')var _0x583031=users[_0x2e2212(0x130)];else{if(_0x54654a[0x0][_0x2e2212(0x109)]=='Chinese')var _0x583031=users['Chinese'];else{if(_0x54654a[0x0][_0x2e2212(0x109)]==_0x2e2212(0x101))var _0x583031=users[_0x2e2212(0x135)];}}}}}}}_0x201757[_0x2e2212(0x111)](0xc8)[_0x2e2212(0xff)]({'data':_0x10a8d3,'language':_0x583031});}catch(_0x265146){console[_0x2e2212(0x141)](_0x265146);}}),router[a0_0x82cb0c(0x122)](a0_0x82cb0c(0x13e),auth,async(_0x1a1f50,_0x2f2a29)=>{var _0x5433c8=a0_0x82cb0c;try{const _0x583368=_0x1a1f50[_0x5433c8(0x121)]['id'];console['log'](_0x583368);const _0x3bed3b=await master_shop['find']();console[_0x5433c8(0x141)](_0x5433c8(0x140),_0x3bed3b);const _0x223595=await product['findOne']({'name':_0x583368});console['log'](_0x5433c8(0x120),_0x223595);const _0x3f7bea=await warehouse[_0x5433c8(0x11e)]([{'$unwind':'$product_details'},{'$match':{'product_details.product_name':_0x583368}},{'$project':{'name':0x1,'product_name':'$product_details.product_name','product_stock':_0x5433c8(0x114)}}]);console[_0x5433c8(0x141)](_0x5433c8(0x132),_0x3f7bea);if(_0x3bed3b[0x0][_0x5433c8(0x109)]==_0x5433c8(0x128)){var _0x2191f9=users[_0x5433c8(0x108)];console[_0x5433c8(0x141)](_0x2191f9);}else{if(_0x3bed3b[0x0][_0x5433c8(0x109)]==_0x5433c8(0x131))var _0x2191f9=users[_0x5433c8(0x131)];else{if(_0x3bed3b[0x0]['language']==_0x5433c8(0x119))var _0x2191f9=users[_0x5433c8(0x119)];else{if(_0x3bed3b[0x0]['language']==_0x5433c8(0x112))var _0x2191f9=users[_0x5433c8(0x112)];else{if(_0x3bed3b[0x0]['language']==_0x5433c8(0x10f))var _0x2191f9=users[_0x5433c8(0x10f)];else{if(_0x3bed3b[0x0]['language']=='Portuguese\x20(BR)')var _0x2191f9=users[_0x5433c8(0x130)];else{if(_0x3bed3b[0x0][_0x5433c8(0x109)]==_0x5433c8(0x10d))var _0x2191f9=users[_0x5433c8(0x10d)];else{if(_0x3bed3b[0x0][_0x5433c8(0x109)]=='Arabic\x20(ae)')var _0x2191f9=users[_0x5433c8(0x135)];}}}}}}}_0x2f2a29[_0x5433c8(0x111)](0xc8)['json']({'product_data':_0x223595,'warehouse_data':_0x3f7bea,'language':_0x2191f9});}catch(_0x499e62){console['log'](_0x499e62);}}),router[a0_0x82cb0c(0x12b)](a0_0x82cb0c(0x10e),async(_0x13b21f,_0x5267f7)=>{var _0x2ec322=a0_0x82cb0c;const {warehouseNew:_0x51db57,rooms:_0x29882e,Type:_0x17d99d,process_cat:_0x1a12cd,room_cat:_0x29c12b}=_0x13b21f[_0x2ec322(0x133)];let _0x4298c6;console['log'](_0x13b21f[_0x2ec322(0x133)]);if(_0x1a12cd==_0x2ec322(0x139))_0x4298c6=await warehouse['aggregate']([{'$match':{'name':_0x51db57,'room':_0x29882e,'warehouse_category':'Raw\x20Materials'}},{'$unwind':_0x2ec322(0x118)},{'$match':{'product_details.type':_0x17d99d,'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]);else _0x1a12cd==_0x2ec322(0x129)?_0x29882e=='All'?_0x4298c6=await warehouse[_0x2ec322(0x11e)]([{'$match':{'name':_0x51db57,'warehouse_category':_0x2ec322(0x142)}},{'$unwind':_0x2ec322(0x118)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x4298c6=await warehouse[_0x2ec322(0x11e)]([{'$match':{'name':_0x51db57,'room':_0x29882e,'warehouse_category':_0x2ec322(0x142)}},{'$unwind':_0x2ec322(0x118)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):(console[_0x2ec322(0x141)](_0x2ec322(0x106)),Include=[{'$unwind':_0x2ec322(0x118)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}],_0x4298c6=await warehouse[_0x2ec322(0x11e)](Include));_0x5267f7['json'](_0x4298c6);}),router[a0_0x82cb0c(0x12b)](a0_0x82cb0c(0x138),async(_0x3f4d1f,_0x359c1f)=>{var _0x2e4322=a0_0x82cb0c;const {warehouseNew:_0x5b5200,rooms:_0x2bc4bd,Type:_0x23fca,process_cat:_0x44937c,room_cat:_0x5a43fb}=_0x3f4d1f[_0x2e4322(0x133)],_0x466c93=await product[_0x2e4322(0x12f)]();_0x359c1f[_0x2e4322(0xff)](_0x466c93);}),module[a0_0x82cb0c(0x124)]=router;