const a0_0x5bbd2a=a0_0x1ce7;function a0_0x1ce7(_0x13388e,_0x13d977){const _0x3e7118=a0_0x3e71();return a0_0x1ce7=function(_0x1ce77c,_0x344b80){_0x1ce77c=_0x1ce77c-0x1b2;let _0x3d0c34=_0x3e7118[_0x1ce77c];return _0x3d0c34;},a0_0x1ce7(_0x13388e,_0x13d977);}function a0_0x3e71(){const _0x40c959=['$product.adjust_qty','$to_warehouse','Portuguese\x20(BR)','$product.from_quantity','/fg_line','/index','$return_sale','$product.quantity','flash','9wVxewh','Raw\x20Materials','35228pUCIvd','../public/language/languages.json','$product.product_name','45IVfdJb','$product','json','German','Spanish','success','153192hPakCv','get','20cuSiHN','user','../middleware/auth','/fg_out_line','/fg_trf_line','/rm_chart','$sale_product','length','exports','729553JiViRK','index','aggregate','$from_warehouse','780432KUPBEu','$return_sale.sale_qty','/raw_out_line','$product.to_quantity','/fg_adj_line','log','find','2410qUARwy','1045884FSybbS','French','$total_amount','122aZUzEb','$sale_product.quantity','78EWudbw','913654CvGWcq','/fg_chart','Chinese','Finished\x20Goods','Arabic','$total_price','$date','language','Hindi','warehouse_category','English','True','English\x20(US)','render'];a0_0x3e71=function(){return _0x40c959;};return a0_0x3e71();}(function(_0x4b83c0,_0x468cf0){const _0x15b763=a0_0x1ce7,_0x38e9e7=_0x4b83c0();while(!![]){try{const _0x1415a9=-parseInt(_0x15b763(0x1be))/0x1*(parseInt(_0x15b763(0x1c2))/0x2)+parseInt(_0x15b763(0x1c4))/0x3*(-parseInt(_0x15b763(0x1de))/0x4)+-parseInt(_0x15b763(0x1e1))/0x5*(-parseInt(_0x15b763(0x1e7))/0x6)+parseInt(_0x15b763(0x1c5))/0x7+-parseInt(_0x15b763(0x1b7))/0x8*(-parseInt(_0x15b763(0x1dc))/0x9)+-parseInt(_0x15b763(0x1e9))/0xa*(-parseInt(_0x15b763(0x1b3))/0xb)+-parseInt(_0x15b763(0x1bf))/0xc;if(_0x1415a9===_0x468cf0)break;else _0x38e9e7['push'](_0x38e9e7['shift']());}catch(_0x2b5fe0){_0x38e9e7['push'](_0x38e9e7['shift']());}}}(a0_0x3e71,0x1f181));const express=require('express'),app=express(),router=express['Router'](),auth=require(a0_0x5bbd2a(0x1eb)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished}=require('../models/all_models'),users=require(a0_0x5bbd2a(0x1df));router[a0_0x5bbd2a(0x1e8)](a0_0x5bbd2a(0x1d8),auth,async(_0x290cf2,_0x539086)=>{const _0x59c3e0=a0_0x5bbd2a;try{const {username:_0x11f71e,email:_0x4fb9f7,role:_0x1936d1}=_0x290cf2[_0x59c3e0(0x1ea)],_0x23b8a0=_0x290cf2['user'];var _0x255434;if(_0x23b8a0[_0x59c3e0(0x1ce)]==_0x59c3e0(0x1dd)){const _0x2abdf4=await product[_0x59c3e0(0x1bd)]({'product_category':_0x59c3e0(0x1dd)});_0x255434=_0x2abdf4[_0x59c3e0(0x1f0)];}else{if(_0x23b8a0['warehouse_category']==_0x59c3e0(0x1c8)){const _0x26832b=await product[_0x59c3e0(0x1bd)]({'product_category':_0x59c3e0(0x1c8)});_0x255434=_0x26832b['length'];}else{const _0x226f42=await product[_0x59c3e0(0x1bd)]();_0x255434=_0x226f42[_0x59c3e0(0x1f0)];}}const _0x170a89=await profile['findOne']({'email':_0x23b8a0['email']}),_0x3acb64=await master_shop[_0x59c3e0(0x1bd)](),_0x2805c0=await sales[_0x59c3e0(0x1b5)]([{'$group':{'_id':null,'total_price':{'$sum':_0x59c3e0(0x1ca)}}}]),_0x204d24=await sales[_0x59c3e0(0x1b5)]([{'$unwind':_0x59c3e0(0x1ef)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$sale_product.quantity'}}}]),_0x425577=await sales_return[_0x59c3e0(0x1b5)]([{'$group':{'_id':null,'total':{'$sum':_0x59c3e0(0x1c1)}}}]),_0xa9abd1=await sales_return['aggregate']([{'$unwind':_0x59c3e0(0x1d9)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x59c3e0(0x1b8)}}}]),_0x231463=await purchases[_0x59c3e0(0x1b5)]([{'$group':{'_id':null,'total_amount':{'$sum':'$total_amount'}}}]),_0x283a42=await purchases_return[_0x59c3e0(0x1b5)]([{'$group':{'_id':null,'total':{'$sum':_0x59c3e0(0x1c1)}}}]),_0x2e3546=await purchases_return[_0x59c3e0(0x1b5)]([{'$unwind':'$return_product'},{'$group':{'_id':null,'totalQuantity':{'$sum':'$return_product.return_qty'}}}]),_0x592b7a=await purchases[_0x59c3e0(0x1b5)]([{'$unwind':_0x59c3e0(0x1e2)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x59c3e0(0x1da)}}}]),_0x7ab23b=await purchases[_0x59c3e0(0x1b5)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0xc653e6=await sales[_0x59c3e0(0x1b5)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x362a30=await transfers[_0x59c3e0(0x1b5)]([{'$unwind':'$product'},{'$group':{'_id':_0x59c3e0(0x1e0),'fromWarehouse':{'$first':_0x59c3e0(0x1b6)},'toWareHouse':{'$first':_0x59c3e0(0x1d4)},'FromtotalQuantity':{'$sum':_0x59c3e0(0x1d6)},'TototalQuantity':{'$sum':'$product.to_quantity'}}}]),_0x18024c=await categories[_0x59c3e0(0x1bd)](),_0x563cfc=await product[_0x59c3e0(0x1bd)](),_0x3d6696=await suppliers['find'](),_0x10606d=await customer['find']();if(_0x3acb64[0x0][_0x59c3e0(0x1cc)]==_0x59c3e0(0x1d1))var _0x5ecc80=users[_0x59c3e0(0x1cf)];else{if(_0x3acb64[0x0][_0x59c3e0(0x1cc)]==_0x59c3e0(0x1cd))var _0x5ecc80=users[_0x59c3e0(0x1cd)];else{if(_0x3acb64[0x0][_0x59c3e0(0x1cc)]==_0x59c3e0(0x1e4))var _0x5ecc80=users[_0x59c3e0(0x1e4)];else{if(_0x3acb64[0x0][_0x59c3e0(0x1cc)]==_0x59c3e0(0x1e5))var _0x5ecc80=users[_0x59c3e0(0x1e5)];else{if(_0x3acb64[0x0]['language']==_0x59c3e0(0x1c0))var _0x5ecc80=users[_0x59c3e0(0x1c0)];else{if(_0x3acb64[0x0][_0x59c3e0(0x1cc)]==_0x59c3e0(0x1d5))var _0x5ecc80=users['Portuguese'];else{if(_0x3acb64[0x0][_0x59c3e0(0x1cc)]==_0x59c3e0(0x1c7))var _0x5ecc80=users[_0x59c3e0(0x1c7)];else{if(_0x3acb64[0x0][_0x59c3e0(0x1cc)]=='Arabic\x20(ae)')var _0x5ecc80=users[_0x59c3e0(0x1c9)];}}}}}}}_0x539086[_0x59c3e0(0x1d2)](_0x59c3e0(0x1b4),{'success':_0x290cf2['flash'](_0x59c3e0(0x1e6)),'errors':_0x290cf2[_0x59c3e0(0x1db)]('errors'),'role':_0x23b8a0,'profile':_0x170a89,'sale':_0x2805c0[0x0],'sales_return':_0x425577[0x0],'purchases':_0x231463[0x0],'purchases_return':_0x283a42[0x0],'purchases_table':_0x7ab23b,'sales_table':_0xc653e6,'categories':_0x18024c['length'],'product':_0x563cfc[_0x59c3e0(0x1f0)],'suppliers':_0x3d6696[_0x59c3e0(0x1f0)],'customer':_0x10606d[_0x59c3e0(0x1f0)],'master_shop':_0x3acb64,'language':_0x5ecc80,'sale_QTY':_0x204d24[0x0],'purchases_QTY':_0x592b7a[0x0],'sales_return_QTY':_0xa9abd1[0x0],'purchases_return_QTY':_0x2e3546[0x0],'transfer_table':_0x362a30,'product_cnt':_0x255434});}catch(_0x32404e){console[_0x59c3e0(0x1bc)](_0x32404e);}}),router[a0_0x5bbd2a(0x1e8)]('/raw_line',auth,async(_0x457e41,_0x1abcb5)=>{const _0x28d586=a0_0x5bbd2a;try{const _0x592bb2=await purchases[_0x28d586(0x1b5)]([{'$unwind':_0x28d586(0x1e2)},{'$group':{'_id':_0x28d586(0x1cb),'totalQuantity':{'$sum':_0x28d586(0x1da)},'date':{'$first':_0x28d586(0x1cb)}}},{'$sort':{'date':0x1}}]);_0x1abcb5['json'](_0x592bb2);}catch(_0x54e1c8){_0x1abcb5[_0x28d586(0x1e3)](_0x54e1c8);}}),router[a0_0x5bbd2a(0x1e8)](a0_0x5bbd2a(0x1b9),auth,async(_0x2e65aa,_0x2ac131)=>{const _0x1ea621=a0_0x5bbd2a;try{const _0x507c20=await sales[_0x1ea621(0x1b5)]([{'$match':{'finalize':_0x1ea621(0x1d0)}},{'$unwind':_0x1ea621(0x1ef)},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x1ea621(0x1c3)},'date':{'$first':_0x1ea621(0x1cb)}}},{'$sort':{'date':0x1}}]);_0x2ac131['json'](_0x507c20);}catch(_0xfd84d2){_0x2ac131[_0x1ea621(0x1e3)](_0xfd84d2);}}),router[a0_0x5bbd2a(0x1e8)]('/raw_adj_line',auth,async(_0x5257ee,_0x27d2c2)=>{const _0xbf4630=a0_0x5bbd2a;try{const _0x54fa97=await adjustment['aggregate']([{'$match':{'finalize':_0xbf4630(0x1d0)}},{'$unwind':_0xbf4630(0x1e2)},{'$group':{'_id':_0xbf4630(0x1cb),'totalQuantity':{'$sum':_0xbf4630(0x1d3)},'date':{'$first':_0xbf4630(0x1cb)}}},{'$sort':{'date':0x1}}]);_0x27d2c2['json'](_0x54fa97);}catch(_0x30759d){_0x27d2c2[_0xbf4630(0x1e3)](_0x30759d);}}),router[a0_0x5bbd2a(0x1e8)]('/raw_trf_line',auth,async(_0x32cfad,_0x891fb7)=>{const _0x19c216=a0_0x5bbd2a;try{const _0xba88cd=await transfers[_0x19c216(0x1b5)]([{'$match':{'finalize':_0x19c216(0x1d0)}},{'$unwind':_0x19c216(0x1e2)},{'$group':{'_id':_0x19c216(0x1cb),'totalQuantity':{'$sum':_0x19c216(0x1ba)},'date':{'$first':_0x19c216(0x1cb)}}},{'$sort':{'date':0x1}}]);_0x891fb7[_0x19c216(0x1e3)](_0xba88cd);}catch(_0x1bcbb2){_0x891fb7[_0x19c216(0x1e3)](_0x1bcbb2);}}),router[a0_0x5bbd2a(0x1e8)](a0_0x5bbd2a(0x1d7),auth,async(_0x46311,_0x155fa5)=>{const _0x4f3d9d=a0_0x5bbd2a;try{const _0x1599e0=await purchases_finished[_0x4f3d9d(0x1b5)]([{'$unwind':_0x4f3d9d(0x1e2)},{'$group':{'_id':_0x4f3d9d(0x1cb),'totalQuantity':{'$sum':'$product.quantity'},'date':{'$first':_0x4f3d9d(0x1cb)}}},{'$sort':{'date':0x1}}]);_0x155fa5['json'](_0x1599e0);}catch(_0xdeabb6){_0x155fa5['json'](_0xdeabb6);}}),router[a0_0x5bbd2a(0x1e8)](a0_0x5bbd2a(0x1ec),auth,async(_0x2bf97e,_0x174905)=>{const _0xed8ac1=a0_0x5bbd2a;try{const _0x259ca2=await sales_finished[_0xed8ac1(0x1b5)]([{'$match':{'finalize':_0xed8ac1(0x1d0)}},{'$unwind':_0xed8ac1(0x1ef)},{'$group':{'_id':'$date','totalQuantity':{'$sum':'$sale_product.quantity'},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0x174905['json'](_0x259ca2);}catch(_0x48672f){_0x174905[_0xed8ac1(0x1e3)](_0x48672f);}}),router[a0_0x5bbd2a(0x1e8)](a0_0x5bbd2a(0x1bb),auth,async(_0x50b791,_0x192434)=>{const _0x4c9dc0=a0_0x5bbd2a;try{const _0x53148b=await adjustment_finished['aggregate']([{'$match':{'finalize':_0x4c9dc0(0x1d0)}},{'$unwind':_0x4c9dc0(0x1e2)},{'$group':{'_id':_0x4c9dc0(0x1cb),'totalQuantity':{'$sum':_0x4c9dc0(0x1d3)},'date':{'$first':_0x4c9dc0(0x1cb)}}},{'$sort':{'date':0x1}}]);_0x192434[_0x4c9dc0(0x1e3)](_0x53148b);}catch(_0x106453){_0x192434[_0x4c9dc0(0x1e3)](_0x106453);}}),router[a0_0x5bbd2a(0x1e8)](a0_0x5bbd2a(0x1ed),auth,async(_0x22db3d,_0x325a4f)=>{const _0x2a2890=a0_0x5bbd2a;try{const _0x29a776=await transfers_finished[_0x2a2890(0x1b5)]([{'$match':{'finalize':_0x2a2890(0x1d0)}},{'$unwind':_0x2a2890(0x1e2)},{'$group':{'_id':_0x2a2890(0x1cb),'totalQuantity':{'$sum':_0x2a2890(0x1ba)},'date':{'$first':_0x2a2890(0x1cb)}}},{'$sort':{'date':0x1}}]);_0x325a4f[_0x2a2890(0x1e3)](_0x29a776);}catch(_0x377c06){_0x325a4f['json'](_0x377c06);}}),router['get'](a0_0x5bbd2a(0x1ee),auth,async(_0xb58450,_0x220db7)=>{const _0x372666=a0_0x5bbd2a;try{const _0x1c1b10=await purchases[_0x372666(0x1b5)]([{'$unwind':'$product'},{'$group':{'_id':_0x372666(0x1cb),'totalQuantity':{'$sum':_0x372666(0x1da)},'date':{'$first':_0x372666(0x1cb)}}},{'$sort':{'date':0x1}}]),_0xfbd4f9=await sales['aggregate']([{'$match':{'finalize':_0x372666(0x1d0)}},{'$unwind':_0x372666(0x1ef)},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x372666(0x1c3)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]),_0x190bab=await adjustment[_0x372666(0x1b5)]([{'$match':{'finalize':_0x372666(0x1d0)}},{'$unwind':_0x372666(0x1e2)},{'$group':{'_id':_0x372666(0x1cb),'totalQuantity':{'$sum':_0x372666(0x1d3)},'date':{'$first':_0x372666(0x1cb)}}},{'$sort':{'date':0x1}}]),_0x3ffaed=await transfers[_0x372666(0x1b5)]([{'$match':{'finalize':_0x372666(0x1d0)}},{'$unwind':_0x372666(0x1e2)},{'$group':{'_id':'$date','totalQuantity':{'$sum':'$product.to_quantity'},'date':{'$first':_0x372666(0x1cb)}}},{'$sort':{'date':0x1}}]);_0x220db7[_0x372666(0x1e3)]({'purchases':_0x1c1b10,'sales':_0xfbd4f9,'adjustment':_0x190bab,'transfer':_0x3ffaed});}catch(_0x1bbf1e){_0x220db7['json'](_0x1bbf1e);}}),router[a0_0x5bbd2a(0x1e8)](a0_0x5bbd2a(0x1c6),auth,async(_0x3bb759,_0x8833f0)=>{const _0x8f84a0=a0_0x5bbd2a;try{const _0x18000f=await product[_0x8f84a0(0x1bd)]({'product_category':_0x8f84a0(0x1c8)});_0x8833f0[_0x8f84a0(0x1e3)]({'count':_0x18000f[_0x8f84a0(0x1f0)]});}catch(_0x1c0ad4){_0x8833f0['json'](_0x1c0ad4);}}),module[a0_0x5bbd2a(0x1b2)]=router;