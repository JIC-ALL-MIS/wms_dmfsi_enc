const a0_0x12de24=a0_0x1510;function a0_0x1276(){const _0x5bdb6e=['aggregate','/fg_adj_line','40gnnKtd','$sale_product.curing_spmx','find','27fOIzst','5277965hmCwML','index','express','$product.quantity','440650MfxjwO','flash','441995SiMDlW','/spmx_line','German','$date','$sale_product.quantity','$product.spicemix_spmx','True','97480EFdkbn','/rm_chart','/raw_adj_line','2264zBMktf','/raw_out_line','English\x20(US)','$product.adjust_qty','French','English','1387930IXmCaL','log','$product.spicemix_spmx_qty','../middleware/auth','$sale_product.extenders_spmx_qty','/fg_chart','$product.extenders_spmx_qty','success','/raw_trf_line','/index','Arabic\x20(ae)','Portuguese','Spanish','$product.extenders_spmx','$product.to_quantity','$sale_product','exports','SPMX','email','get','/spmx_out_line','Hindi','Finished\x20Goods','$sale_product.extenders_spmx','Chinese','2007CavRFS','12EwSwMO','/raw_line','/fg_line','warehouse_category','$sale_product.curing_spmx_qty','Raw\x20Materials','../public/language/languages.json','errors','$sale_product.spicemix_spmx_qty','Arabic','Portuguese\x20(BR)','693078GbNvVT','user','length','$product.curing_spmx_qty','language','$product','json','$product.curing_spmx'];a0_0x1276=function(){return _0x5bdb6e;};return a0_0x1276();}(function(_0x47cf73,_0x3fe185){const _0x1dbb16=a0_0x1510,_0x2064f7=_0x47cf73();while(!![]){try{const _0x5007c2=-parseInt(_0x1dbb16(0x15c))/0x1+-parseInt(_0x1dbb16(0x141))/0x2+-parseInt(_0x1dbb16(0x135))/0x3*(-parseInt(_0x1dbb16(0x15f))/0x4)+parseInt(_0x1dbb16(0x155))/0x5*(-parseInt(_0x1dbb16(0x136))/0x6)+-parseInt(_0x1dbb16(0x153))/0x7*(parseInt(_0x1dbb16(0x14b))/0x8)+-parseInt(_0x1dbb16(0x14e))/0x9*(-parseInt(_0x1dbb16(0x165))/0xa)+parseInt(_0x1dbb16(0x14f))/0xb;if(_0x5007c2===_0x3fe185)break;else _0x2064f7['push'](_0x2064f7['shift']());}catch(_0x30beb6){_0x2064f7['push'](_0x2064f7['shift']());}}}(a0_0x1276,0x52d51));const express=require(a0_0x12de24(0x151)),app=express(),router=express['Router'](),auth=require(a0_0x12de24(0x168)),{profile,sales,purchases_spmx,sales_spmx,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished}=require('../models/all_models'),users=require(a0_0x12de24(0x13c));function a0_0x1510(_0x42294d,_0x1780d9){const _0x12760f=a0_0x1276();return a0_0x1510=function(_0x151055,_0x544a93){_0x151055=_0x151055-0x131;let _0xf4053=_0x12760f[_0x151055];return _0xf4053;},a0_0x1510(_0x42294d,_0x1780d9);}router[a0_0x12de24(0x178)](a0_0x12de24(0x16e),auth,async(_0x2cf5f5,_0x9e32e5)=>{const _0x4f5555=a0_0x12de24;try{const {username:_0x59143f,email:_0xdb559,role:_0x517659}=_0x2cf5f5['user'],_0x1e97da=_0x2cf5f5[_0x4f5555(0x142)];var _0xda632e;if(_0x1e97da['warehouse_category']==_0x4f5555(0x13b)){const _0x2e7f09=await product['find']({'product_category':'Raw\x20Materials'});_0xda632e=_0x2e7f09[_0x4f5555(0x143)];}else{if(_0x1e97da[_0x4f5555(0x139)]=='Finished\x20Goods'){const _0x1c7868=await product[_0x4f5555(0x14d)]({'product_category':_0x4f5555(0x132)});_0xda632e=_0x1c7868['length'];}else{if(_0x1e97da[_0x4f5555(0x139)]==_0x4f5555(0x176)){const _0x50baba=await product[_0x4f5555(0x14d)]({'product_category':_0x4f5555(0x176)});_0xda632e=_0x50baba[_0x4f5555(0x143)];}else{const _0x227665=await product[_0x4f5555(0x14d)]();_0xda632e=_0x227665['length'];}}}const _0x524276=await profile['findOne']({'email':_0x1e97da[_0x4f5555(0x177)]}),_0x590190=await master_shop['find']();if(_0x590190[0x0]['language']==_0x4f5555(0x161))var _0x90e206=users[_0x4f5555(0x164)];else{if(_0x590190[0x0][_0x4f5555(0x145)]==_0x4f5555(0x131))var _0x90e206=users[_0x4f5555(0x131)];else{if(_0x590190[0x0][_0x4f5555(0x145)]==_0x4f5555(0x157))var _0x90e206=users['German'];else{if(_0x590190[0x0][_0x4f5555(0x145)]==_0x4f5555(0x171))var _0x90e206=users[_0x4f5555(0x171)];else{if(_0x590190[0x0]['language']==_0x4f5555(0x163))var _0x90e206=users[_0x4f5555(0x163)];else{if(_0x590190[0x0]['language']==_0x4f5555(0x140))var _0x90e206=users[_0x4f5555(0x170)];else{if(_0x590190[0x0][_0x4f5555(0x145)]==_0x4f5555(0x134))var _0x90e206=users[_0x4f5555(0x134)];else{if(_0x590190[0x0][_0x4f5555(0x145)]==_0x4f5555(0x16f))var _0x90e206=users[_0x4f5555(0x13f)];}}}}}}}_0x9e32e5['render'](_0x4f5555(0x150),{'success':_0x2cf5f5[_0x4f5555(0x154)](_0x4f5555(0x16c)),'errors':_0x2cf5f5[_0x4f5555(0x154)](_0x4f5555(0x13d)),'role':_0x1e97da,'profile':_0x524276,'master_shop':_0x590190,'language':_0x90e206});}catch(_0x5eaaa9){console[_0x4f5555(0x166)](_0x5eaaa9);}}),router[a0_0x12de24(0x178)](a0_0x12de24(0x137),auth,async(_0x15bfaf,_0xf82695)=>{const _0x41a9e8=a0_0x12de24;try{const _0xca5f3a=await purchases[_0x41a9e8(0x149)]([{'$unwind':_0x41a9e8(0x146)},{'$group':{'_id':_0x41a9e8(0x158),'totalQuantity':{'$sum':_0x41a9e8(0x152)},'date':{'$first':_0x41a9e8(0x158)}}},{'$sort':{'date':-0x1}},{'$limit':0x14},{'$sort':{'date':0x1}}]);_0xf82695[_0x41a9e8(0x147)](_0xca5f3a);}catch(_0x5edf86){_0xf82695['json'](_0x5edf86);}}),router['get'](a0_0x12de24(0x160),auth,async(_0x247752,_0x2fceab)=>{const _0x45148a=a0_0x12de24;try{const _0x3a93ca=await sales['aggregate']([{'$match':{'finalize':'True'}},{'$unwind':_0x45148a(0x174)},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x45148a(0x159)},'date':{'$first':'$date'}}},{'$sort':{'date':-0x1}},{'$limit':0x14},{'$sort':{'date':0x1}}]);_0x2fceab['json'](_0x3a93ca);}catch(_0x227494){_0x2fceab['json'](_0x227494);}}),router[a0_0x12de24(0x178)](a0_0x12de24(0x15e),auth,async(_0x60db92,_0x187d79)=>{const _0xdc06bd=a0_0x12de24;try{const _0x51ba67=await adjustment['aggregate']([{'$match':{'finalize':_0xdc06bd(0x15b)}},{'$unwind':'$product'},{'$group':{'_id':_0xdc06bd(0x158),'totalQuantity':{'$sum':_0xdc06bd(0x162)},'date':{'$first':'$date'}}},{'$sort':{'date':-0x1}},{'$limit':0x14},{'$sort':{'date':0x1}}]);_0x187d79[_0xdc06bd(0x147)](_0x51ba67);}catch(_0x56688c){_0x187d79['json'](_0x56688c);}}),router[a0_0x12de24(0x178)](a0_0x12de24(0x16d),auth,async(_0x350cf2,_0x355c3d)=>{const _0x271b39=a0_0x12de24;try{const _0x2bfb39=await transfers['aggregate']([{'$match':{'finalize':'True'}},{'$unwind':_0x271b39(0x146)},{'$group':{'_id':_0x271b39(0x158),'totalQuantity':{'$sum':_0x271b39(0x173)},'date':{'$first':_0x271b39(0x158)}}},{'$sort':{'date':-0x1}},{'$limit':0x14},{'$sort':{'date':0x1}}]);_0x355c3d[_0x271b39(0x147)](_0x2bfb39);}catch(_0x4e7701){_0x355c3d[_0x271b39(0x147)](_0x4e7701);}}),router['get'](a0_0x12de24(0x138),auth,async(_0x480ff0,_0x21f2fd)=>{const _0x363146=a0_0x12de24;try{const _0x10fc26=await purchases_finished[_0x363146(0x149)]([{'$unwind':_0x363146(0x146)},{'$group':{'_id':_0x363146(0x158),'totalQuantity':{'$sum':_0x363146(0x152)},'date':{'$first':_0x363146(0x158)}}},{'$sort':{'date':-0x1}},{'$limit':0x14},{'$sort':{'date':0x1}}]);_0x21f2fd[_0x363146(0x147)](_0x10fc26);}catch(_0x62dc06){_0x21f2fd[_0x363146(0x147)](_0x62dc06);}}),router[a0_0x12de24(0x178)]('/fg_out_line',auth,async(_0x16688b,_0x274025)=>{const _0x406d6c=a0_0x12de24;try{const _0x24f288=await sales_finished[_0x406d6c(0x149)]([{'$match':{'finalize':_0x406d6c(0x15b)}},{'$unwind':_0x406d6c(0x174)},{'$group':{'_id':_0x406d6c(0x158),'totalQuantity':{'$sum':_0x406d6c(0x159)},'date':{'$first':_0x406d6c(0x158)}}},{'$sort':{'date':-0x1}},{'$limit':0x14},{'$sort':{'date':0x1}}]);_0x274025[_0x406d6c(0x147)](_0x24f288);}catch(_0x46c6b7){_0x274025[_0x406d6c(0x147)](_0x46c6b7);}}),router['get'](a0_0x12de24(0x14a),auth,async(_0x1f3b8b,_0x3ca4f3)=>{const _0x568895=a0_0x12de24;try{const _0x1896fc=await adjustment_finished[_0x568895(0x149)]([{'$match':{'finalize':_0x568895(0x15b)}},{'$unwind':_0x568895(0x146)},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x568895(0x162)},'date':{'$first':_0x568895(0x158)}}},{'$sort':{'date':-0x1}},{'$limit':0x14},{'$sort':{'date':0x1}}]);_0x3ca4f3[_0x568895(0x147)](_0x1896fc);}catch(_0x3581fa){_0x3ca4f3['json'](_0x3581fa);}}),router[a0_0x12de24(0x178)]('/fg_trf_line',auth,async(_0x9e77b1,_0x573220)=>{const _0x48b217=a0_0x12de24;try{const _0xf0cc71=await transfers_finished['aggregate']([{'$match':{'finalize':_0x48b217(0x15b)}},{'$unwind':'$product'},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x48b217(0x173)},'date':{'$first':_0x48b217(0x158)}}},{'$sort':{'date':-0x1}},{'$limit':0x14},{'$sort':{'date':0x1}}]);_0x573220[_0x48b217(0x147)](_0xf0cc71);}catch(_0x4ada86){_0x573220[_0x48b217(0x147)](_0x4ada86);}}),router[a0_0x12de24(0x178)](a0_0x12de24(0x15d),auth,async(_0x2246c1,_0x997244)=>{const _0x32c6b6=a0_0x12de24;try{const _0x403e45=await purchases['aggregate']([{'$unwind':_0x32c6b6(0x146)},{'$group':{'_id':_0x32c6b6(0x158),'totalQuantity':{'$sum':_0x32c6b6(0x152)},'date':{'$first':_0x32c6b6(0x158)}}},{'$sort':{'date':0x1}}]),_0x5dbd0d=await sales['aggregate']([{'$match':{'finalize':_0x32c6b6(0x15b)}},{'$unwind':_0x32c6b6(0x174)},{'$group':{'_id':_0x32c6b6(0x158),'totalQuantity':{'$sum':_0x32c6b6(0x159)},'date':{'$first':_0x32c6b6(0x158)}}},{'$sort':{'date':0x1}}]),_0x595a75=await adjustment[_0x32c6b6(0x149)]([{'$match':{'finalize':'True'}},{'$unwind':_0x32c6b6(0x146)},{'$group':{'_id':'$date','totalQuantity':{'$sum':'$product.adjust_qty'},'date':{'$first':_0x32c6b6(0x158)}}},{'$sort':{'date':0x1}}]),_0x781796=await transfers[_0x32c6b6(0x149)]([{'$match':{'finalize':_0x32c6b6(0x15b)}},{'$unwind':_0x32c6b6(0x146)},{'$group':{'_id':_0x32c6b6(0x158),'totalQuantity':{'$sum':_0x32c6b6(0x173)},'date':{'$first':_0x32c6b6(0x158)}}},{'$sort':{'date':0x1}}]);_0x997244[_0x32c6b6(0x147)]({'purchases':_0x403e45,'sales':_0x5dbd0d,'adjustment':_0x595a75,'transfer':_0x781796});}catch(_0x1fe09f){_0x997244[_0x32c6b6(0x147)](_0x1fe09f);}}),router[a0_0x12de24(0x178)](a0_0x12de24(0x16a),auth,async(_0x4a8f66,_0x2f31be)=>{const _0x3d9096=a0_0x12de24;try{const _0x18b025=await product[_0x3d9096(0x14d)]({'product_category':_0x3d9096(0x132)});_0x2f31be[_0x3d9096(0x147)]({'count':_0x18b025[_0x3d9096(0x143)]});}catch(_0x4b8e1e){_0x2f31be['json'](_0x4b8e1e);}}),router[a0_0x12de24(0x178)](a0_0x12de24(0x156),auth,async(_0xc678c3,_0x593b83)=>{const _0x140adc=a0_0x12de24;try{const _0x3cfb4f=await purchases_spmx[_0x140adc(0x149)]([{'$unwind':_0x140adc(0x146)},{'$group':{'_id':'$date','spicemix_spmx_qty':{'$sum':_0x140adc(0x167)},'extenders_spmx_qty':{'$sum':_0x140adc(0x16b)},'curing_spmx_qty':{'$sum':_0x140adc(0x144)},'spicemix_spmx':{'$first':_0x140adc(0x15a)},'extenders_spmx':{'$first':_0x140adc(0x172)},'curing_spmx':{'$first':_0x140adc(0x148)},'date':{'$first':_0x140adc(0x158)}}},{'$sort':{'date':-0x1}},{'$limit':0x14},{'$sort':{'date':0x1}}]);_0x593b83['json'](_0x3cfb4f);}catch(_0x45d0c6){_0x593b83[_0x140adc(0x147)](_0x45d0c6);}}),router[a0_0x12de24(0x178)](a0_0x12de24(0x179),auth,async(_0x42342c,_0x2e0d89)=>{const _0x35c99e=a0_0x12de24;try{const _0x5962fa=await sales_spmx[_0x35c99e(0x149)]([{'$unwind':_0x35c99e(0x174)},{'$group':{'_id':'$date','spicemix_spmx_qty':{'$sum':_0x35c99e(0x13e)},'extenders_spmx_qty':{'$sum':_0x35c99e(0x169)},'curing_spmx_qty':{'$sum':_0x35c99e(0x13a)},'spicemix_spmx':{'$first':'$sale_product.spicemix_spmx'},'extenders_spmx':{'$first':_0x35c99e(0x133)},'curing_spmx':{'$first':_0x35c99e(0x14c)},'date':{'$first':'$date'}}},{'$sort':{'date':-0x1}},{'$limit':0x14},{'$sort':{'date':0x1}}]);_0x2e0d89[_0x35c99e(0x147)](_0x5962fa);}catch(_0x2a8d0d){_0x2e0d89[_0x35c99e(0x147)](_0x2a8d0d);}}),module[a0_0x12de24(0x175)]=router;