const a0_0xc2f574=a0_0x370c;function a0_0x5027(){const _0x480322=['Hindi','48353KorIkS','email','log','$product.product_name','$return_sale.sale_qty','index','Spanish','2955339buTtFG','render','$from_warehouse','exports','$sale_product.quantity','German','35202nzirtp','232NSNcPt','success','176248yJhNzf','14bSnuRj','137130aEMlkE','$return_product.return_qty','$product.from_quantity','335xTbrFW','length','master','../models/all_models','Arabic','$sale_product','$return_sale','$total_amount','find','role_data','user','language','French','8229sWdVyL','Chinese','errors','aggregate','flash','$product','815530zRoNHg','Router','../middleware/auth','3TNizFo','6168xOMLdK','../public/language/languages.json','English\x20(US)','$to_warehouse','Portuguese\x20(BR)','22neMLmo'];a0_0x5027=function(){return _0x480322;};return a0_0x5027();}function a0_0x370c(_0x4a6baa,_0x190da5){const _0x50274b=a0_0x5027();return a0_0x370c=function(_0x370cd3,_0x24531f){_0x370cd3=_0x370cd3-0xd1;let _0x2307be=_0x50274b[_0x370cd3];return _0x2307be;},a0_0x370c(_0x4a6baa,_0x190da5);}(function(_0x4bb834,_0x5bf641){const _0x43bbbb=a0_0x370c,_0xda710d=_0x4bb834();while(!![]){try{const _0x29a3ea=parseInt(_0x43bbbb(0xf5))/0x1*(parseInt(_0x43bbbb(0xd3))/0x2)+parseInt(_0x43bbbb(0xed))/0x3*(-parseInt(_0x43bbbb(0xd2))/0x4)+parseInt(_0x43bbbb(0xd7))/0x5*(-parseInt(_0x43bbbb(0x102))/0x6)+-parseInt(_0x43bbbb(0xd4))/0x7*(-parseInt(_0x43bbbb(0x103))/0x8)+parseInt(_0x43bbbb(0xfc))/0x9+-parseInt(_0x43bbbb(0xea))/0xa*(parseInt(_0x43bbbb(0xf3))/0xb)+parseInt(_0x43bbbb(0xee))/0xc*(-parseInt(_0x43bbbb(0xe4))/0xd);if(_0x29a3ea===_0x5bf641)break;else _0xda710d['push'](_0xda710d['shift']());}catch(_0x2a455d){_0xda710d['push'](_0xda710d['shift']());}}}(a0_0x5027,0x4b855));const express=require('express'),app=express(),router=express[a0_0xc2f574(0xeb)](),auth=require(a0_0xc2f574(0xec)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers}=require(a0_0xc2f574(0xda)),users=require(a0_0xc2f574(0xef));router['get']('/index',auth,async(_0x35c325,_0x10be50)=>{const _0x1f8110=a0_0xc2f574;try{const {username:_0xb2662,email:_0x13b315,role:_0x318eb5}=_0x35c325[_0x1f8110(0xe1)],_0x2efe6c=_0x35c325[_0x1f8110(0xe1)];console[_0x1f8110(0xf7)](_0x1f8110(0xe0),_0x2efe6c);const _0x170f60=await profile['findOne']({'email':_0x2efe6c[_0x1f8110(0xf6)]});console[_0x1f8110(0xf7)]('profile_data',_0x170f60);const _0x4f65b3=await master_shop[_0x1f8110(0xdf)]();console[_0x1f8110(0xf7)](_0x1f8110(0xd9),_0x4f65b3);const _0x42cd25=await sales['aggregate']([{'$group':{'_id':null,'total_price':{'$sum':'$total_price'}}}]),_0x5399ba=await sales['aggregate']([{'$unwind':_0x1f8110(0xdc)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x1f8110(0x100)}}}]),_0xc4d325=await sales_return[_0x1f8110(0xe7)]([{'$group':{'_id':null,'total':{'$sum':_0x1f8110(0xde)}}}]),_0x35adf0=await sales_return['aggregate']([{'$unwind':_0x1f8110(0xdd)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x1f8110(0xf9)}}}]),_0x2139d6=await purchases[_0x1f8110(0xe7)]([{'$group':{'_id':null,'total_amount':{'$sum':_0x1f8110(0xde)}}}]),_0x3defa0=await purchases_return[_0x1f8110(0xe7)]([{'$group':{'_id':null,'total':{'$sum':'$total_amount'}}}]),_0x238898=await purchases_return[_0x1f8110(0xe7)]([{'$unwind':'$return_product'},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x1f8110(0xd5)}}}]),_0x541725=await purchases['aggregate']([{'$unwind':'$product'},{'$group':{'_id':null,'totalQuantity':{'$sum':'$product.quantity'}}}]),_0x4438e1=await purchases['aggregate']([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x19d567=await sales[_0x1f8110(0xe7)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x3e9187=await transfers[_0x1f8110(0xe7)]([{'$unwind':_0x1f8110(0xe9)},{'$group':{'_id':_0x1f8110(0xf8),'fromWarehouse':{'$first':_0x1f8110(0xfe)},'toWareHouse':{'$first':_0x1f8110(0xf1)},'FromtotalQuantity':{'$sum':_0x1f8110(0xd6)},'TototalQuantity':{'$sum':'$product.to_quantity'}}}]),_0x3c4cfa=await categories[_0x1f8110(0xdf)](),_0xb2d1ba=await product[_0x1f8110(0xdf)](),_0x5059df=await suppliers[_0x1f8110(0xdf)](),_0x409e13=await customer['find']();console[_0x1f8110(0xf7)](_0x409e13[_0x1f8110(0xd8)]);if(_0x4f65b3[0x0][_0x1f8110(0xe2)]==_0x1f8110(0xf0)){var _0x1d08b8=users['English'];console['log'](_0x1d08b8);}else{if(_0x4f65b3[0x0][_0x1f8110(0xe2)]==_0x1f8110(0xf4))var _0x1d08b8=users[_0x1f8110(0xf4)];else{if(_0x4f65b3[0x0][_0x1f8110(0xe2)]==_0x1f8110(0x101))var _0x1d08b8=users[_0x1f8110(0x101)];else{if(_0x4f65b3[0x0][_0x1f8110(0xe2)]==_0x1f8110(0xfb))var _0x1d08b8=users[_0x1f8110(0xfb)];else{if(_0x4f65b3[0x0]['language']==_0x1f8110(0xe3))var _0x1d08b8=users['French'];else{if(_0x4f65b3[0x0][_0x1f8110(0xe2)]==_0x1f8110(0xf2))var _0x1d08b8=users['Portuguese'];else{if(_0x4f65b3[0x0][_0x1f8110(0xe2)]==_0x1f8110(0xe5))var _0x1d08b8=users[_0x1f8110(0xe5)];else{if(_0x4f65b3[0x0][_0x1f8110(0xe2)]=='Arabic\x20(ae)')var _0x1d08b8=users[_0x1f8110(0xdb)];}}}}}}}_0x10be50[_0x1f8110(0xfd)](_0x1f8110(0xfa),{'success':_0x35c325['flash'](_0x1f8110(0xd1)),'errors':_0x35c325[_0x1f8110(0xe8)](_0x1f8110(0xe6)),'role':_0x2efe6c,'profile':_0x170f60,'sale':_0x42cd25[0x0],'sales_return':_0xc4d325[0x0],'purchases':_0x2139d6[0x0],'purchases_return':_0x3defa0[0x0],'purchases_table':_0x4438e1,'sales_table':_0x19d567,'categories':_0x3c4cfa['length'],'product':_0xb2d1ba[_0x1f8110(0xd8)],'suppliers':_0x5059df['length'],'customer':_0x409e13['length'],'master_shop':_0x4f65b3,'language':_0x1d08b8,'sale_QTY':_0x5399ba[0x0],'purchases_QTY':_0x541725[0x0],'sales_return_QTY':_0x35adf0[0x0],'purchases_return_QTY':_0x238898[0x0],'transfer_table':_0x3e9187});}catch(_0x273a3f){console[_0x1f8110(0xf7)](_0x273a3f);}}),module[a0_0xc2f574(0xff)]=router;