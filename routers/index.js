const a0_0x32f46a=a0_0x208c;function a0_0x208c(_0x744eba,_0x922b6b){const _0xe33d08=a0_0xe33d();return a0_0x208c=function(_0x208cc1,_0x542e84){_0x208cc1=_0x208cc1-0xc7;let _0x53e10e=_0xe33d08[_0x208cc1];return _0x53e10e;},a0_0x208c(_0x744eba,_0x922b6b);}(function(_0x185172,_0x36b1b3){const _0x135a0e=a0_0x208c,_0x5038b0=_0x185172();while(!![]){try{const _0xc1f3da=parseInt(_0x135a0e(0xf1))/0x1*(-parseInt(_0x135a0e(0xe8))/0x2)+-parseInt(_0x135a0e(0xe1))/0x3+parseInt(_0x135a0e(0xf6))/0x4*(parseInt(_0x135a0e(0xed))/0x5)+parseInt(_0x135a0e(0xde))/0x6*(-parseInt(_0x135a0e(0xe9))/0x7)+-parseInt(_0x135a0e(0xd8))/0x8*(parseInt(_0x135a0e(0xdb))/0x9)+-parseInt(_0x135a0e(0xea))/0xa+parseInt(_0x135a0e(0xf3))/0xb;if(_0xc1f3da===_0x36b1b3)break;else _0x5038b0['push'](_0x5038b0['shift']());}catch(_0x58647a){_0x5038b0['push'](_0x5038b0['shift']());}}}(a0_0xe33d,0x533f6));const express=require('express'),app=express(),router=express[a0_0x32f46a(0xf0)](),auth=require(a0_0x32f46a(0xcc)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished}=require(a0_0x32f46a(0xdf)),users=require(a0_0x32f46a(0xd7));function a0_0xe33d(){const _0x3117b0=['782028rouquJ','True','/fg_trf_line','Finished\x20Goods','/fg_line','$return_product.return_qty','/fg_chart','8924UEEgIn','35aqCKaI','247520AocqII','Portuguese','user','15pfuziD','errors','$product.quantity','Router','127boDGue','$to_warehouse','17656364qYeHLi','$product','language','310468yhuQGK','$product.to_quantity','Hindi','$sale_product.quantity','aggregate','findOne','find','/raw_trf_line','French','$product.adjust_qty','German','$date','$sale_product','Chinese','/rm_chart','$product.from_quantity','warehouse_category','flash','Portuguese\x20(BR)','../middleware/auth','Arabic\x20(ae)','email','$total_price','json','success','length','Arabic','Spanish','get','/index','../public/language/languages.json','75912JezVHT','Raw\x20Materials','/fg_out_line','216TAqkDV','$return_sale','index','500586stHSLF','../models/all_models','$total_amount'];a0_0xe33d=function(){return _0x3117b0;};return a0_0xe33d();}router['get'](a0_0x32f46a(0xd6),auth,async(_0x556db7,_0x5d163a)=>{const _0x467e8c=a0_0x32f46a;try{const {username:_0x5490d3,email:_0x41f4c8,role:_0x4d50ea}=_0x556db7['user'],_0x59c00b=_0x556db7[_0x467e8c(0xec)];var _0x2d3146;if(_0x59c00b[_0x467e8c(0xc9)]=='Raw\x20Materials'){const _0x88b2ea=await product['find']({'product_category':_0x467e8c(0xd9)});_0x2d3146=_0x88b2ea[_0x467e8c(0xd2)];}else{if(_0x59c00b[_0x467e8c(0xc9)]==_0x467e8c(0xe4)){const _0x1535dd=await product[_0x467e8c(0xfc)]({'product_category':_0x467e8c(0xe4)});_0x2d3146=_0x1535dd[_0x467e8c(0xd2)];}else{const _0x4f6ad1=await product[_0x467e8c(0xfc)]();_0x2d3146=_0x4f6ad1[_0x467e8c(0xd2)];}}const _0xabc1e4=await profile[_0x467e8c(0xfb)]({'email':_0x59c00b[_0x467e8c(0xce)]}),_0x2025f7=await master_shop['find'](),_0x3ee9bf=await sales[_0x467e8c(0xfa)]([{'$group':{'_id':null,'total_price':{'$sum':_0x467e8c(0xcf)}}}]),_0x3e9e70=await sales['aggregate']([{'$unwind':_0x467e8c(0x102)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$sale_product.quantity'}}}]),_0x8b90b6=await sales_return[_0x467e8c(0xfa)]([{'$group':{'_id':null,'total':{'$sum':'$total_amount'}}}]),_0x2a07b6=await sales_return[_0x467e8c(0xfa)]([{'$unwind':_0x467e8c(0xdc)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$return_sale.sale_qty'}}}]),_0x52ff6a=await purchases['aggregate']([{'$group':{'_id':null,'total_amount':{'$sum':_0x467e8c(0xe0)}}}]),_0xfe2964=await purchases_return[_0x467e8c(0xfa)]([{'$group':{'_id':null,'total':{'$sum':'$total_amount'}}}]),_0xa7821e=await purchases_return[_0x467e8c(0xfa)]([{'$unwind':'$return_product'},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x467e8c(0xe6)}}}]),_0xe7dd3e=await purchases[_0x467e8c(0xfa)]([{'$unwind':_0x467e8c(0xf4)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x467e8c(0xef)}}}]),_0x3dbf47=await purchases[_0x467e8c(0xfa)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x1733ec=await sales[_0x467e8c(0xfa)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x4bd62f=await transfers[_0x467e8c(0xfa)]([{'$unwind':'$product'},{'$group':{'_id':'$product.product_name','fromWarehouse':{'$first':'$from_warehouse'},'toWareHouse':{'$first':_0x467e8c(0xf2)},'FromtotalQuantity':{'$sum':_0x467e8c(0xc8)},'TototalQuantity':{'$sum':_0x467e8c(0xf7)}}}]),_0x8e3f8e=await categories[_0x467e8c(0xfc)](),_0x320f9d=await product[_0x467e8c(0xfc)](),_0xa0a37=await suppliers[_0x467e8c(0xfc)](),_0x1d83f5=await customer['find']();if(_0x2025f7[0x0]['language']=='English\x20(US)')var _0x4aa95d=users['English'];else{if(_0x2025f7[0x0][_0x467e8c(0xf5)]==_0x467e8c(0xf8))var _0x4aa95d=users[_0x467e8c(0xf8)];else{if(_0x2025f7[0x0]['language']=='German')var _0x4aa95d=users[_0x467e8c(0x100)];else{if(_0x2025f7[0x0][_0x467e8c(0xf5)]==_0x467e8c(0xd4))var _0x4aa95d=users[_0x467e8c(0xd4)];else{if(_0x2025f7[0x0]['language']==_0x467e8c(0xfe))var _0x4aa95d=users[_0x467e8c(0xfe)];else{if(_0x2025f7[0x0][_0x467e8c(0xf5)]==_0x467e8c(0xcb))var _0x4aa95d=users[_0x467e8c(0xeb)];else{if(_0x2025f7[0x0][_0x467e8c(0xf5)]=='Chinese')var _0x4aa95d=users[_0x467e8c(0x103)];else{if(_0x2025f7[0x0]['language']==_0x467e8c(0xcd))var _0x4aa95d=users[_0x467e8c(0xd3)];}}}}}}}_0x5d163a['render'](_0x467e8c(0xdd),{'success':_0x556db7[_0x467e8c(0xca)](_0x467e8c(0xd1)),'errors':_0x556db7[_0x467e8c(0xca)](_0x467e8c(0xee)),'role':_0x59c00b,'profile':_0xabc1e4,'sale':_0x3ee9bf[0x0],'sales_return':_0x8b90b6[0x0],'purchases':_0x52ff6a[0x0],'purchases_return':_0xfe2964[0x0],'purchases_table':_0x3dbf47,'sales_table':_0x1733ec,'categories':_0x8e3f8e[_0x467e8c(0xd2)],'product':_0x320f9d[_0x467e8c(0xd2)],'suppliers':_0xa0a37[_0x467e8c(0xd2)],'customer':_0x1d83f5['length'],'master_shop':_0x2025f7,'language':_0x4aa95d,'sale_QTY':_0x3e9e70[0x0],'purchases_QTY':_0xe7dd3e[0x0],'sales_return_QTY':_0x2a07b6[0x0],'purchases_return_QTY':_0xa7821e[0x0],'transfer_table':_0x4bd62f,'product_cnt':_0x2d3146});}catch(_0x53d112){console['log'](_0x53d112);}}),router[a0_0x32f46a(0xd5)]('/raw_line',auth,async(_0x51b28d,_0x3e07e6)=>{const _0x3dbebe=a0_0x32f46a;try{const _0x2e568b=await purchases[_0x3dbebe(0xfa)]([{'$unwind':'$product'},{'$group':{'_id':_0x3dbebe(0x101),'totalQuantity':{'$sum':_0x3dbebe(0xef)},'date':{'$first':_0x3dbebe(0x101)}}},{'$sort':{'date':0x1}}]);_0x3e07e6[_0x3dbebe(0xd0)](_0x2e568b);}catch(_0x4eb04a){_0x3e07e6[_0x3dbebe(0xd0)](_0x4eb04a);}}),router[a0_0x32f46a(0xd5)]('/raw_out_line',auth,async(_0x430157,_0x1d5fc8)=>{const _0x275391=a0_0x32f46a;try{const _0x58d034=await sales[_0x275391(0xfa)]([{'$match':{'finalize':'True'}},{'$unwind':_0x275391(0x102)},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x275391(0xf9)},'date':{'$first':_0x275391(0x101)}}},{'$sort':{'date':0x1}}]);_0x1d5fc8[_0x275391(0xd0)](_0x58d034);}catch(_0x46338b){_0x1d5fc8[_0x275391(0xd0)](_0x46338b);}}),router[a0_0x32f46a(0xd5)]('/raw_adj_line',auth,async(_0xd8c51c,_0x4b58ec)=>{const _0x27d320=a0_0x32f46a;try{const _0x2010b0=await adjustment[_0x27d320(0xfa)]([{'$match':{'finalize':_0x27d320(0xe2)}},{'$unwind':_0x27d320(0xf4)},{'$group':{'_id':_0x27d320(0x101),'totalQuantity':{'$sum':_0x27d320(0xff)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0x4b58ec[_0x27d320(0xd0)](_0x2010b0);}catch(_0x2ae4a1){_0x4b58ec['json'](_0x2ae4a1);}}),router[a0_0x32f46a(0xd5)](a0_0x32f46a(0xfd),auth,async(_0x4bd556,_0x43a2e5)=>{const _0x4d256a=a0_0x32f46a;try{const _0x3e1475=await transfers[_0x4d256a(0xfa)]([{'$match':{'finalize':'True'}},{'$unwind':'$product'},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x4d256a(0xf7)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0x43a2e5['json'](_0x3e1475);}catch(_0x1d390e){_0x43a2e5[_0x4d256a(0xd0)](_0x1d390e);}}),router[a0_0x32f46a(0xd5)](a0_0x32f46a(0xe5),auth,async(_0xfc7b84,_0x145389)=>{const _0x5d0ed4=a0_0x32f46a;try{const _0x483219=await purchases_finished[_0x5d0ed4(0xfa)]([{'$unwind':_0x5d0ed4(0xf4)},{'$group':{'_id':_0x5d0ed4(0x101),'totalQuantity':{'$sum':_0x5d0ed4(0xef)},'date':{'$first':_0x5d0ed4(0x101)}}},{'$sort':{'date':0x1}}]);_0x145389[_0x5d0ed4(0xd0)](_0x483219);}catch(_0x278f06){_0x145389['json'](_0x278f06);}}),router[a0_0x32f46a(0xd5)](a0_0x32f46a(0xda),auth,async(_0x3b5847,_0x42bd60)=>{const _0x317882=a0_0x32f46a;try{const _0x464bbb=await sales_finished[_0x317882(0xfa)]([{'$match':{'finalize':_0x317882(0xe2)}},{'$unwind':'$sale_product'},{'$group':{'_id':_0x317882(0x101),'totalQuantity':{'$sum':_0x317882(0xf9)},'date':{'$first':_0x317882(0x101)}}},{'$sort':{'date':0x1}}]);_0x42bd60[_0x317882(0xd0)](_0x464bbb);}catch(_0x59eb67){_0x42bd60['json'](_0x59eb67);}}),router[a0_0x32f46a(0xd5)]('/fg_adj_line',auth,async(_0x256be2,_0x555b8a)=>{const _0x21a4e3=a0_0x32f46a;try{const _0x9101f8=await adjustment_finished[_0x21a4e3(0xfa)]([{'$match':{'finalize':_0x21a4e3(0xe2)}},{'$unwind':'$product'},{'$group':{'_id':'$date','totalQuantity':{'$sum':'$product.adjust_qty'},'date':{'$first':_0x21a4e3(0x101)}}},{'$sort':{'date':0x1}}]);_0x555b8a['json'](_0x9101f8);}catch(_0x2b48ca){_0x555b8a['json'](_0x2b48ca);}}),router[a0_0x32f46a(0xd5)](a0_0x32f46a(0xe3),auth,async(_0x5710ad,_0x5305ad)=>{const _0x3ddd1d=a0_0x32f46a;try{const _0xc17029=await transfers_finished[_0x3ddd1d(0xfa)]([{'$match':{'finalize':_0x3ddd1d(0xe2)}},{'$unwind':_0x3ddd1d(0xf4)},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x3ddd1d(0xf7)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0x5305ad[_0x3ddd1d(0xd0)](_0xc17029);}catch(_0x2eb73d){_0x5305ad[_0x3ddd1d(0xd0)](_0x2eb73d);}}),router[a0_0x32f46a(0xd5)](a0_0x32f46a(0xc7),auth,async(_0x3a4507,_0x873f40)=>{const _0x1e72c7=a0_0x32f46a;try{const _0x1b19d7=await purchases[_0x1e72c7(0xfa)]([{'$unwind':_0x1e72c7(0xf4)},{'$group':{'_id':_0x1e72c7(0x101),'totalQuantity':{'$sum':_0x1e72c7(0xef)},'date':{'$first':_0x1e72c7(0x101)}}},{'$sort':{'date':0x1}}]),_0x428822=await sales[_0x1e72c7(0xfa)]([{'$match':{'finalize':_0x1e72c7(0xe2)}},{'$unwind':_0x1e72c7(0x102)},{'$group':{'_id':_0x1e72c7(0x101),'totalQuantity':{'$sum':'$sale_product.quantity'},'date':{'$first':_0x1e72c7(0x101)}}},{'$sort':{'date':0x1}}]),_0x2a7b85=await adjustment['aggregate']([{'$match':{'finalize':_0x1e72c7(0xe2)}},{'$unwind':_0x1e72c7(0xf4)},{'$group':{'_id':_0x1e72c7(0x101),'totalQuantity':{'$sum':_0x1e72c7(0xff)},'date':{'$first':_0x1e72c7(0x101)}}},{'$sort':{'date':0x1}}]),_0x72cd3f=await transfers['aggregate']([{'$match':{'finalize':_0x1e72c7(0xe2)}},{'$unwind':_0x1e72c7(0xf4)},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x1e72c7(0xf7)},'date':{'$first':_0x1e72c7(0x101)}}},{'$sort':{'date':0x1}}]);_0x873f40[_0x1e72c7(0xd0)]({'purchases':_0x1b19d7,'sales':_0x428822,'adjustment':_0x2a7b85,'transfer':_0x72cd3f});}catch(_0xe7fb32){_0x873f40[_0x1e72c7(0xd0)](_0xe7fb32);}}),router[a0_0x32f46a(0xd5)](a0_0x32f46a(0xe7),auth,async(_0x1a578c,_0x49189f)=>{const _0x5da95d=a0_0x32f46a;try{const _0x4fb105=await product[_0x5da95d(0xfc)]({'product_category':_0x5da95d(0xe4)});_0x49189f['json']({'count':_0x4fb105[_0x5da95d(0xd2)]});}catch(_0x4d6384){_0x49189f[_0x5da95d(0xd0)](_0x4d6384);}}),module['exports']=router;