function a0_0x5b20(){const _0x75e5a8=['/index','render','$total_price','$total_amount','Spanish','$product.to_quantity','7966693tQeczd','105460RkEIVk','/raw_out_line','/raw_trf_line','87YTjSZb','$product.product_name','$product','341232NxChVm','length','$product.adjust_qty','$sale_product.quantity','English\x20(US)','German','findOne','success','errors','json','$return_product.return_qty','$sale_product','Arabic','exports','25852DHFnct','index','French','Chinese','/fg_trf_line','$return_product','2218020SAOWux','$date','../models/all_models','$return_sale','email','18789102tLNTyB','get','Arabic\x20(ae)','find','/fg_out_line','user','express','318AUmRpg','aggregate','language','log','/fg_line','English','Router','/fg_adj_line','Portuguese\x20(BR)','../public/language/languages.json','$product.quantity','Hindi','Portuguese','480MVMrmF'];a0_0x5b20=function(){return _0x75e5a8;};return a0_0x5b20();}const a0_0x3724c3=a0_0x3fca;(function(_0x307e17,_0x333e01){const _0xd509a5=a0_0x3fca,_0x1d1c62=_0x307e17();while(!![]){try{const _0x2fda27=parseInt(_0xd509a5(0xd8))/0x1+-parseInt(_0xd509a5(0xde))/0x2+parseInt(_0xd509a5(0xc7))/0x3*(parseInt(_0xd509a5(0xc4))/0x4)+parseInt(_0xd509a5(0xbc))/0x5*(-parseInt(_0xd509a5(0xaf))/0x6)+-parseInt(_0xd509a5(0xc3))/0x7+-parseInt(_0xd509a5(0xca))/0x8+parseInt(_0xd509a5(0xe3))/0x9;if(_0x2fda27===_0x333e01)break;else _0x1d1c62['push'](_0x1d1c62['shift']());}catch(_0x59ae1f){_0x1d1c62['push'](_0x1d1c62['shift']());}}}(a0_0x5b20,0x8e660));const express=require(a0_0x3724c3(0xae)),app=express(),router=express[a0_0x3724c3(0xb5)](),auth=require('../middleware/auth'),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished}=require(a0_0x3724c3(0xe0)),users=require(a0_0x3724c3(0xb8));function a0_0x3fca(_0x4f3088,_0x424b60){const _0x5b2036=a0_0x5b20();return a0_0x3fca=function(_0x3fca40,_0xd3ac9){_0x3fca40=_0x3fca40-0xae;let _0x48bd53=_0x5b2036[_0x3fca40];return _0x48bd53;},a0_0x3fca(_0x4f3088,_0x424b60);}router[a0_0x3724c3(0xe4)](a0_0x3724c3(0xbd),auth,async(_0x2c6db0,_0x131c42)=>{const _0x27270e=a0_0x3724c3;try{const {username:_0x3419fc,email:_0x53e748,role:_0x1995be}=_0x2c6db0[_0x27270e(0xe8)],_0x49e088=_0x2c6db0[_0x27270e(0xe8)],_0x30f1bb=await profile[_0x27270e(0xd0)]({'email':_0x49e088[_0x27270e(0xe2)]}),_0x203240=await master_shop['find'](),_0x343022=await sales[_0x27270e(0xb0)]([{'$group':{'_id':null,'total_price':{'$sum':_0x27270e(0xbf)}}}]),_0x344327=await sales[_0x27270e(0xb0)]([{'$unwind':_0x27270e(0xd5)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x27270e(0xcd)}}}]),_0x964fa3=await sales_return[_0x27270e(0xb0)]([{'$group':{'_id':null,'total':{'$sum':'$total_amount'}}}]),_0x56762b=await sales_return[_0x27270e(0xb0)]([{'$unwind':_0x27270e(0xe1)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$return_sale.sale_qty'}}}]),_0x4b79b3=await purchases[_0x27270e(0xb0)]([{'$group':{'_id':null,'total_amount':{'$sum':_0x27270e(0xc0)}}}]),_0x1b305a=await purchases_return[_0x27270e(0xb0)]([{'$group':{'_id':null,'total':{'$sum':_0x27270e(0xc0)}}}]),_0x5d464f=await purchases_return['aggregate']([{'$unwind':_0x27270e(0xdd)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x27270e(0xd4)}}}]),_0x55c07f=await purchases['aggregate']([{'$unwind':_0x27270e(0xc9)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$product.quantity'}}}]),_0x4f6714=await purchases[_0x27270e(0xb0)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x3caa1f=await sales[_0x27270e(0xb0)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x33b539=await transfers[_0x27270e(0xb0)]([{'$unwind':_0x27270e(0xc9)},{'$group':{'_id':_0x27270e(0xc8),'fromWarehouse':{'$first':'$from_warehouse'},'toWareHouse':{'$first':'$to_warehouse'},'FromtotalQuantity':{'$sum':'$product.from_quantity'},'TototalQuantity':{'$sum':_0x27270e(0xc2)}}}]),_0x3e7e33=await categories[_0x27270e(0xe6)](),_0x59f6df=await product['find'](),_0x334b0c=await suppliers[_0x27270e(0xe6)](),_0x938af8=await customer[_0x27270e(0xe6)]();if(_0x203240[0x0][_0x27270e(0xb1)]==_0x27270e(0xce))var _0x1f45f1=users[_0x27270e(0xb4)];else{if(_0x203240[0x0][_0x27270e(0xb1)]==_0x27270e(0xba))var _0x1f45f1=users[_0x27270e(0xba)];else{if(_0x203240[0x0]['language']==_0x27270e(0xcf))var _0x1f45f1=users[_0x27270e(0xcf)];else{if(_0x203240[0x0]['language']=='Spanish')var _0x1f45f1=users[_0x27270e(0xc1)];else{if(_0x203240[0x0][_0x27270e(0xb1)]==_0x27270e(0xda))var _0x1f45f1=users[_0x27270e(0xda)];else{if(_0x203240[0x0]['language']==_0x27270e(0xb7))var _0x1f45f1=users[_0x27270e(0xbb)];else{if(_0x203240[0x0][_0x27270e(0xb1)]==_0x27270e(0xdb))var _0x1f45f1=users[_0x27270e(0xdb)];else{if(_0x203240[0x0]['language']==_0x27270e(0xe5))var _0x1f45f1=users[_0x27270e(0xd6)];}}}}}}}_0x131c42[_0x27270e(0xbe)](_0x27270e(0xd9),{'success':_0x2c6db0['flash'](_0x27270e(0xd1)),'errors':_0x2c6db0['flash'](_0x27270e(0xd2)),'role':_0x49e088,'profile':_0x30f1bb,'sale':_0x343022[0x0],'sales_return':_0x964fa3[0x0],'purchases':_0x4b79b3[0x0],'purchases_return':_0x1b305a[0x0],'purchases_table':_0x4f6714,'sales_table':_0x3caa1f,'categories':_0x3e7e33[_0x27270e(0xcb)],'product':_0x59f6df[_0x27270e(0xcb)],'suppliers':_0x334b0c[_0x27270e(0xcb)],'customer':_0x938af8[_0x27270e(0xcb)],'master_shop':_0x203240,'language':_0x1f45f1,'sale_QTY':_0x344327[0x0],'purchases_QTY':_0x55c07f[0x0],'sales_return_QTY':_0x56762b[0x0],'purchases_return_QTY':_0x5d464f[0x0],'transfer_table':_0x33b539});}catch(_0x359565){console[_0x27270e(0xb2)](_0x359565);}}),router[a0_0x3724c3(0xe4)]('/raw_line',auth,async(_0x1cfcc0,_0x2c6353)=>{const _0x599783=a0_0x3724c3;try{const _0x155c81=await purchases['aggregate']([{'$unwind':_0x599783(0xc9)},{'$group':{'_id':_0x599783(0xdf),'totalQuantity':{'$sum':_0x599783(0xb9)},'date':{'$first':_0x599783(0xdf)}}},{'$sort':{'date':0x1}}]);_0x2c6353[_0x599783(0xd3)](_0x155c81);}catch(_0x561354){_0x2c6353[_0x599783(0xd3)](_0x561354);}}),router[a0_0x3724c3(0xe4)](a0_0x3724c3(0xc5),auth,async(_0x34f99b,_0x5e79e)=>{const _0x412429=a0_0x3724c3;try{const _0x2eb3ce=await sales['aggregate']([{'$unwind':'$sale_product'},{'$group':{'_id':_0x412429(0xdf),'totalQuantity':{'$sum':'$sale_product.quantity'},'date':{'$first':_0x412429(0xdf)}}},{'$sort':{'date':0x1}}]);_0x5e79e[_0x412429(0xd3)](_0x2eb3ce);}catch(_0xecb921){_0x5e79e[_0x412429(0xd3)](_0xecb921);}}),router[a0_0x3724c3(0xe4)]('/raw_adj_line',auth,async(_0x3e2168,_0x4c13ee)=>{const _0xfb65cc=a0_0x3724c3;try{const _0x2459fa=await adjustment[_0xfb65cc(0xb0)]([{'$unwind':_0xfb65cc(0xc9)},{'$group':{'_id':_0xfb65cc(0xdf),'totalQuantity':{'$sum':_0xfb65cc(0xcc)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0x4c13ee[_0xfb65cc(0xd3)](_0x2459fa);}catch(_0x28c6a7){_0x4c13ee[_0xfb65cc(0xd3)](_0x28c6a7);}}),router[a0_0x3724c3(0xe4)](a0_0x3724c3(0xc6),auth,async(_0x5b4e56,_0xbbbd1c)=>{const _0x2d5ac4=a0_0x3724c3;try{const _0x51b859=await purchases[_0x2d5ac4(0xb0)]([{'$unwind':'$product'},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x2d5ac4(0xb9)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0xbbbd1c[_0x2d5ac4(0xd3)](_0x51b859);}catch(_0x278948){_0xbbbd1c[_0x2d5ac4(0xd3)](_0x278948);}}),router['get'](a0_0x3724c3(0xb3),auth,async(_0x5cf934,_0x4b014c)=>{const _0x5f430f=a0_0x3724c3;try{const _0xff758d=await purchases_finished[_0x5f430f(0xb0)]([{'$unwind':_0x5f430f(0xc9)},{'$group':{'_id':_0x5f430f(0xdf),'totalQuantity':{'$sum':_0x5f430f(0xb9)},'date':{'$first':_0x5f430f(0xdf)}}},{'$sort':{'date':0x1}}]);_0x4b014c['json'](_0xff758d);}catch(_0x489850){_0x4b014c[_0x5f430f(0xd3)](_0x489850);}}),router[a0_0x3724c3(0xe4)](a0_0x3724c3(0xe7),auth,async(_0x396335,_0x3c1a9e)=>{const _0x2bb386=a0_0x3724c3;try{const _0x3f8f93=await sales_finished['aggregate']([{'$unwind':_0x2bb386(0xd5)},{'$group':{'_id':_0x2bb386(0xdf),'totalQuantity':{'$sum':_0x2bb386(0xcd)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0x3c1a9e['json'](_0x3f8f93);}catch(_0x2eab6c){_0x3c1a9e[_0x2bb386(0xd3)](_0x2eab6c);}}),router[a0_0x3724c3(0xe4)](a0_0x3724c3(0xb6),auth,async(_0x2b00a9,_0x11ede6)=>{const _0x33643b=a0_0x3724c3;try{const _0x2d096c=await adjustment_finished[_0x33643b(0xb0)]([{'$unwind':_0x33643b(0xc9)},{'$group':{'_id':_0x33643b(0xdf),'totalQuantity':{'$sum':_0x33643b(0xcc)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0x11ede6['json'](_0x2d096c);}catch(_0x202b1a){_0x11ede6['json'](_0x202b1a);}}),router[a0_0x3724c3(0xe4)](a0_0x3724c3(0xdc),auth,async(_0x5a429d,_0x2ebe30)=>{const _0x24a50b=a0_0x3724c3;try{const _0xc39070=await transfers_finished[_0x24a50b(0xb0)]([{'$unwind':_0x24a50b(0xc9)},{'$group':{'_id':_0x24a50b(0xdf),'totalQuantity':{'$sum':_0x24a50b(0xc2)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0x2ebe30['json'](_0xc39070);}catch(_0x503aa4){_0x2ebe30['json'](_0x503aa4);}}),module[a0_0x3724c3(0xd7)]=router;