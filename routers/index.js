const a0_0x35050d=a0_0x353f;(function(_0x51f38e,_0x2df0fd){const _0x4f508d=a0_0x353f,_0x109c4d=_0x51f38e();while(!![]){try{const _0x1ead5c=parseInt(_0x4f508d(0xf4))/0x1*(-parseInt(_0x4f508d(0xe1))/0x2)+parseInt(_0x4f508d(0x107))/0x3*(-parseInt(_0x4f508d(0x104))/0x4)+parseInt(_0x4f508d(0xeb))/0x5*(-parseInt(_0x4f508d(0x11a))/0x6)+parseInt(_0x4f508d(0xe0))/0x7*(-parseInt(_0x4f508d(0x116))/0x8)+parseInt(_0x4f508d(0xef))/0x9+-parseInt(_0x4f508d(0xf3))/0xa+parseInt(_0x4f508d(0x112))/0xb;if(_0x1ead5c===_0x2df0fd)break;else _0x109c4d['push'](_0x109c4d['shift']());}catch(_0x36db7f){_0x109c4d['push'](_0x109c4d['shift']());}}}(a0_0x1b63,0xdb137));function a0_0x1b63(){const _0x122170=['Arabic','$total_amount','$product','/fg_out_line','67105225bscdxp','index','../public/language/languages.json','json','8NiCFLf','$product.product_name','$return_product.return_qty','Finished\x20Goods','6293418umhEvp','French','success','../models/all_models','Portuguese','/fg_line','express','Chinese','$total_price','11783821FzCwni','1004GzuoRn','Arabic\x20(ae)','English','$sale_product.quantity','/fg_adj_line','$return_product','/index','/raw_trf_line','Raw\x20Materials','True','5OqdtIg','$product.adjust_qty','Portuguese\x20(BR)','exports','11371671wBfCak','flash','log','findOne','16845980UXWQZW','1031xGdVGK','$return_sale.sale_qty','render','email','language','Hindi','Spanish','$product.from_quantity','/rm_chart','German','aggregate','$date','$product.quantity','user','../middleware/auth','$sale_product','27732qGejzJ','$return_sale','$product.to_quantity','663vOLnhT','length','/fg_trf_line','warehouse_category','get','find','/raw_line'];a0_0x1b63=function(){return _0x122170;};return a0_0x1b63();}function a0_0x353f(_0x153731,_0xa0e29b){const _0x1b6357=a0_0x1b63();return a0_0x353f=function(_0x353fda,_0x491318){_0x353fda=_0x353fda-0xde;let _0x8510db=_0x1b6357[_0x353fda];return _0x8510db;},a0_0x353f(_0x153731,_0xa0e29b);}const express=require(a0_0x35050d(0x120)),app=express(),router=express['Router'](),auth=require(a0_0x35050d(0x102)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished}=require(a0_0x35050d(0x11d)),users=require(a0_0x35050d(0x114));router['get'](a0_0x35050d(0xe7),auth,async(_0x5213f9,_0x12feb9)=>{const _0x2c4a0c=a0_0x35050d;try{const {username:_0xffa0ce,email:_0x591af3,role:_0x37fd10}=_0x5213f9['user'],_0xd3f8ec=_0x5213f9[_0x2c4a0c(0x101)];var _0x57f36c;if(_0xd3f8ec[_0x2c4a0c(0x10a)]==_0x2c4a0c(0xe9)){const _0x3f41a0=await product[_0x2c4a0c(0x10c)]({'product_category':'Raw\x20Materials'});_0x57f36c=_0x3f41a0[_0x2c4a0c(0x108)];}else{if(_0xd3f8ec['warehouse_category']==_0x2c4a0c(0x119)){const _0x1a493a=await product[_0x2c4a0c(0x10c)]({'product_category':'Finished\x20Goods'});_0x57f36c=_0x1a493a[_0x2c4a0c(0x108)];}else{const _0x11f2f6=await product[_0x2c4a0c(0x10c)]();_0x57f36c=_0x11f2f6[_0x2c4a0c(0x108)];}}const _0x35bd56=await profile[_0x2c4a0c(0xf2)]({'email':_0xd3f8ec[_0x2c4a0c(0xf7)]}),_0xc9427c=await master_shop[_0x2c4a0c(0x10c)](),_0x2f669e=await sales[_0x2c4a0c(0xfe)]([{'$group':{'_id':null,'total_price':{'$sum':_0x2c4a0c(0xdf)}}}]),_0x519ff2=await sales['aggregate']([{'$unwind':_0x2c4a0c(0x103)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x2c4a0c(0xe4)}}}]),_0x3d6287=await sales_return[_0x2c4a0c(0xfe)]([{'$group':{'_id':null,'total':{'$sum':_0x2c4a0c(0x10f)}}}]),_0xc21212=await sales_return[_0x2c4a0c(0xfe)]([{'$unwind':_0x2c4a0c(0x105)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x2c4a0c(0xf5)}}}]),_0x1e6076=await purchases[_0x2c4a0c(0xfe)]([{'$group':{'_id':null,'total_amount':{'$sum':_0x2c4a0c(0x10f)}}}]),_0x28adb5=await purchases_return['aggregate']([{'$group':{'_id':null,'total':{'$sum':'$total_amount'}}}]),_0x1b861f=await purchases_return[_0x2c4a0c(0xfe)]([{'$unwind':_0x2c4a0c(0xe6)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x2c4a0c(0x118)}}}]),_0x1166a0=await purchases[_0x2c4a0c(0xfe)]([{'$unwind':_0x2c4a0c(0x110)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x2c4a0c(0x100)}}}]),_0x1741f8=await purchases[_0x2c4a0c(0xfe)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x1d34da=await sales[_0x2c4a0c(0xfe)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x39a5ca=await transfers[_0x2c4a0c(0xfe)]([{'$unwind':_0x2c4a0c(0x110)},{'$group':{'_id':_0x2c4a0c(0x117),'fromWarehouse':{'$first':'$from_warehouse'},'toWareHouse':{'$first':'$to_warehouse'},'FromtotalQuantity':{'$sum':_0x2c4a0c(0xfb)},'TototalQuantity':{'$sum':_0x2c4a0c(0x106)}}}]),_0x595bfd=await categories[_0x2c4a0c(0x10c)](),_0x134b42=await product[_0x2c4a0c(0x10c)](),_0x1da7ba=await suppliers[_0x2c4a0c(0x10c)](),_0x2583b1=await customer['find']();if(_0xc9427c[0x0][_0x2c4a0c(0xf8)]=='English\x20(US)')var _0x4eab28=users[_0x2c4a0c(0xe3)];else{if(_0xc9427c[0x0][_0x2c4a0c(0xf8)]==_0x2c4a0c(0xf9))var _0x4eab28=users['Hindi'];else{if(_0xc9427c[0x0][_0x2c4a0c(0xf8)]==_0x2c4a0c(0xfd))var _0x4eab28=users['German'];else{if(_0xc9427c[0x0][_0x2c4a0c(0xf8)]==_0x2c4a0c(0xfa))var _0x4eab28=users[_0x2c4a0c(0xfa)];else{if(_0xc9427c[0x0][_0x2c4a0c(0xf8)]=='French')var _0x4eab28=users[_0x2c4a0c(0x11b)];else{if(_0xc9427c[0x0][_0x2c4a0c(0xf8)]==_0x2c4a0c(0xed))var _0x4eab28=users[_0x2c4a0c(0x11e)];else{if(_0xc9427c[0x0][_0x2c4a0c(0xf8)]==_0x2c4a0c(0xde))var _0x4eab28=users[_0x2c4a0c(0xde)];else{if(_0xc9427c[0x0][_0x2c4a0c(0xf8)]==_0x2c4a0c(0xe2))var _0x4eab28=users[_0x2c4a0c(0x10e)];}}}}}}}_0x12feb9[_0x2c4a0c(0xf6)](_0x2c4a0c(0x113),{'success':_0x5213f9[_0x2c4a0c(0xf0)](_0x2c4a0c(0x11c)),'errors':_0x5213f9[_0x2c4a0c(0xf0)]('errors'),'role':_0xd3f8ec,'profile':_0x35bd56,'sale':_0x2f669e[0x0],'sales_return':_0x3d6287[0x0],'purchases':_0x1e6076[0x0],'purchases_return':_0x28adb5[0x0],'purchases_table':_0x1741f8,'sales_table':_0x1d34da,'categories':_0x595bfd[_0x2c4a0c(0x108)],'product':_0x134b42['length'],'suppliers':_0x1da7ba[_0x2c4a0c(0x108)],'customer':_0x2583b1[_0x2c4a0c(0x108)],'master_shop':_0xc9427c,'language':_0x4eab28,'sale_QTY':_0x519ff2[0x0],'purchases_QTY':_0x1166a0[0x0],'sales_return_QTY':_0xc21212[0x0],'purchases_return_QTY':_0x1b861f[0x0],'transfer_table':_0x39a5ca,'product_cnt':_0x57f36c});}catch(_0x97f89c){console[_0x2c4a0c(0xf1)](_0x97f89c);}}),router['get'](a0_0x35050d(0x10d),auth,async(_0xcd9d1b,_0x10b3cb)=>{const _0x93172e=a0_0x35050d;try{const _0x11b899=await purchases[_0x93172e(0xfe)]([{'$unwind':_0x93172e(0x110)},{'$group':{'_id':_0x93172e(0xff),'totalQuantity':{'$sum':_0x93172e(0x100)},'date':{'$first':_0x93172e(0xff)}}},{'$sort':{'date':0x1}}]);_0x10b3cb['json'](_0x11b899);}catch(_0x18c129){_0x10b3cb[_0x93172e(0x115)](_0x18c129);}}),router['get']('/raw_out_line',auth,async(_0x4192fe,_0x22a579)=>{const _0x5e258e=a0_0x35050d;try{const _0x5dc60d=await sales['aggregate']([{'$match':{'finalize':_0x5e258e(0xea)}},{'$unwind':_0x5e258e(0x103)},{'$group':{'_id':_0x5e258e(0xff),'totalQuantity':{'$sum':_0x5e258e(0xe4)},'date':{'$first':_0x5e258e(0xff)}}},{'$sort':{'date':0x1}}]);_0x22a579[_0x5e258e(0x115)](_0x5dc60d);}catch(_0x5f1063){_0x22a579[_0x5e258e(0x115)](_0x5f1063);}}),router[a0_0x35050d(0x10b)]('/raw_adj_line',auth,async(_0x48829f,_0xf6b823)=>{const _0x58d299=a0_0x35050d;try{const _0x4cf05b=await adjustment[_0x58d299(0xfe)]([{'$match':{'finalize':_0x58d299(0xea)}},{'$unwind':_0x58d299(0x110)},{'$group':{'_id':_0x58d299(0xff),'totalQuantity':{'$sum':_0x58d299(0xec)},'date':{'$first':_0x58d299(0xff)}}},{'$sort':{'date':0x1}}]);_0xf6b823[_0x58d299(0x115)](_0x4cf05b);}catch(_0x1236a4){_0xf6b823[_0x58d299(0x115)](_0x1236a4);}}),router[a0_0x35050d(0x10b)](a0_0x35050d(0xe8),auth,async(_0x4e41bf,_0x5ac7e2)=>{const _0x274363=a0_0x35050d;try{const _0x41b300=await transfers['aggregate']([{'$match':{'finalize':_0x274363(0xea)}},{'$unwind':_0x274363(0x110)},{'$group':{'_id':_0x274363(0xff),'totalQuantity':{'$sum':'$product.to_quantity'},'date':{'$first':_0x274363(0xff)}}},{'$sort':{'date':0x1}}]);_0x5ac7e2[_0x274363(0x115)](_0x41b300);}catch(_0x1f1715){_0x5ac7e2[_0x274363(0x115)](_0x1f1715);}}),router['get'](a0_0x35050d(0x11f),auth,async(_0x2cc04a,_0x39f161)=>{const _0x985ae1=a0_0x35050d;try{const _0x58bb62=await purchases_finished[_0x985ae1(0xfe)]([{'$unwind':_0x985ae1(0x110)},{'$group':{'_id':_0x985ae1(0xff),'totalQuantity':{'$sum':_0x985ae1(0x100)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0x39f161[_0x985ae1(0x115)](_0x58bb62);}catch(_0x5df017){_0x39f161[_0x985ae1(0x115)](_0x5df017);}}),router['get'](a0_0x35050d(0x111),auth,async(_0x199fdb,_0x3adc48)=>{const _0x408220=a0_0x35050d;try{const _0x73de95=await sales_finished[_0x408220(0xfe)]([{'$match':{'finalize':_0x408220(0xea)}},{'$unwind':_0x408220(0x103)},{'$group':{'_id':_0x408220(0xff),'totalQuantity':{'$sum':_0x408220(0xe4)},'date':{'$first':_0x408220(0xff)}}},{'$sort':{'date':0x1}}]);_0x3adc48['json'](_0x73de95);}catch(_0x5cac6c){_0x3adc48[_0x408220(0x115)](_0x5cac6c);}}),router[a0_0x35050d(0x10b)](a0_0x35050d(0xe5),auth,async(_0x42011e,_0x4a2551)=>{const _0x5ad601=a0_0x35050d;try{const _0x3b13f8=await adjustment_finished[_0x5ad601(0xfe)]([{'$match':{'finalize':'True'}},{'$unwind':_0x5ad601(0x110)},{'$group':{'_id':_0x5ad601(0xff),'totalQuantity':{'$sum':_0x5ad601(0xec)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0x4a2551[_0x5ad601(0x115)](_0x3b13f8);}catch(_0x26103c){_0x4a2551['json'](_0x26103c);}}),router[a0_0x35050d(0x10b)](a0_0x35050d(0x109),auth,async(_0x81bf14,_0x236616)=>{const _0x192790=a0_0x35050d;try{const _0x3ca2fd=await transfers_finished[_0x192790(0xfe)]([{'$match':{'finalize':_0x192790(0xea)}},{'$unwind':_0x192790(0x110)},{'$group':{'_id':_0x192790(0xff),'totalQuantity':{'$sum':_0x192790(0x106)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0x236616[_0x192790(0x115)](_0x3ca2fd);}catch(_0x25dc94){_0x236616[_0x192790(0x115)](_0x25dc94);}}),router['get'](a0_0x35050d(0xfc),auth,async(_0x5d223d,_0xc0b654)=>{const _0x3b199e=a0_0x35050d;try{const _0x1eed5f=await purchases[_0x3b199e(0xfe)]([{'$unwind':_0x3b199e(0x110)},{'$group':{'_id':_0x3b199e(0xff),'totalQuantity':{'$sum':_0x3b199e(0x100)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]),_0x4b40c4=await sales['aggregate']([{'$match':{'finalize':_0x3b199e(0xea)}},{'$unwind':_0x3b199e(0x103)},{'$group':{'_id':_0x3b199e(0xff),'totalQuantity':{'$sum':'$sale_product.quantity'},'date':{'$first':_0x3b199e(0xff)}}},{'$sort':{'date':0x1}}]),_0x2b159e=await adjustment[_0x3b199e(0xfe)]([{'$match':{'finalize':_0x3b199e(0xea)}},{'$unwind':_0x3b199e(0x110)},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x3b199e(0xec)},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]),_0x387661=await transfers[_0x3b199e(0xfe)]([{'$match':{'finalize':'True'}},{'$unwind':'$product'},{'$group':{'_id':_0x3b199e(0xff),'totalQuantity':{'$sum':_0x3b199e(0x106)},'date':{'$first':_0x3b199e(0xff)}}},{'$sort':{'date':0x1}}]);_0xc0b654[_0x3b199e(0x115)]({'purchases':_0x1eed5f,'sales':_0x4b40c4,'adjustment':_0x2b159e,'transfer':_0x387661});}catch(_0x497820){_0xc0b654['json'](_0x497820);}}),router[a0_0x35050d(0x10b)]('/fg_chart',auth,async(_0x5352d5,_0x5960e4)=>{const _0x16337c=a0_0x35050d;try{const _0x5df911=await product[_0x16337c(0x10c)]({'product_category':'Finished\x20Goods'});_0x5960e4[_0x16337c(0x115)]({'count':_0x5df911[_0x16337c(0x108)]});}catch(_0x3f4354){_0x5960e4[_0x16337c(0x115)](_0x3f4354);}}),module[a0_0x35050d(0xee)]=router;