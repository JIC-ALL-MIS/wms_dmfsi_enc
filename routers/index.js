const a0_0x56d6af=a0_0x1b16;function a0_0x3c76(){const _0x437f71=['$sale_product','get','$product.quantity','$return_sale.sale_qty','Spanish','9263220viCxyb','role_data','findOne','23848wnbdho','Router','../middleware/auth','aggregate','$total_amount','343479rdpdph','318cRtrCP','Arabic\x20(ae)','index','flash','English','French','$from_warehouse','email','English\x20(US)','success','length','Portuguese\x20(BR)','$product.to_quantity','$return_sale','../public/language/languages.json','/index','Arabic','$product.product_name','render','Hindi','240KqumvP','Portuguese','$return_product.return_qty','2fdrWzp','4923bUCohb','11304CDSsSq','237iVWiWR','$sale_product.quantity','Chinese','7628nqTaUH','36134vfGseI','errors','$to_warehouse','2789865JBMbdf','log','exports','profile_data','user','$product.from_quantity','language','find','$product'];a0_0x3c76=function(){return _0x437f71;};return a0_0x3c76();}(function(_0x218d99,_0x33c2b4){const _0x2ea085=a0_0x1b16,_0x53ed37=_0x218d99();while(!![]){try{const _0x13d8cf=-parseInt(_0x2ea085(0xd0))/0x1*(parseInt(_0x2ea085(0xe8))/0x2)+parseInt(_0x2ea085(0xeb))/0x3*(-parseInt(_0x2ea085(0xee))/0x4)+parseInt(_0x2ea085(0xf2))/0x5+parseInt(_0x2ea085(0xd1))/0x6*(parseInt(_0x2ea085(0xef))/0x7)+parseInt(_0x2ea085(0xea))/0x8*(-parseInt(_0x2ea085(0xe9))/0x9)+parseInt(_0x2ea085(0xc8))/0xa+-parseInt(_0x2ea085(0xcb))/0xb*(-parseInt(_0x2ea085(0xe5))/0xc);if(_0x13d8cf===_0x33c2b4)break;else _0x53ed37['push'](_0x53ed37['shift']());}catch(_0x405bef){_0x53ed37['push'](_0x53ed37['shift']());}}}(a0_0x3c76,0x826b6));const express=require('express'),app=express(),router=express[a0_0x56d6af(0xcc)](),auth=require(a0_0x56d6af(0xcd)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers}=require('../models/all_models'),users=require(a0_0x56d6af(0xdf));function a0_0x1b16(_0x2dea2b,_0x142e5d){const _0x3c7675=a0_0x3c76();return a0_0x1b16=function(_0x1b16da,_0x5f3cff){_0x1b16da=_0x1b16da-0xbb;let _0x262bac=_0x3c7675[_0x1b16da];return _0x262bac;},a0_0x1b16(_0x2dea2b,_0x142e5d);}router[a0_0x56d6af(0xc4)](a0_0x56d6af(0xe0),auth,async(_0x28c629,_0x359949)=>{const _0x5057b2=a0_0x56d6af;try{const {username:_0x1e0819,email:_0x8b10be,role:_0xb383b8}=_0x28c629[_0x5057b2(0xbe)],_0x4a7b5a=_0x28c629[_0x5057b2(0xbe)];console['log'](_0x5057b2(0xc9),_0x4a7b5a);const _0x4f4d49=await profile[_0x5057b2(0xca)]({'email':_0x4a7b5a[_0x5057b2(0xd8)]});console[_0x5057b2(0xbb)](_0x5057b2(0xbd),_0x4f4d49);const _0x2a2908=await master_shop['find']();console[_0x5057b2(0xbb)]('master',_0x2a2908);const _0x24e3d8=await sales[_0x5057b2(0xce)]([{'$group':{'_id':null,'total_price':{'$sum':'$total_price'}}}]),_0x26a038=await sales[_0x5057b2(0xce)]([{'$unwind':_0x5057b2(0xc3)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5057b2(0xec)}}}]),_0x2fc976=await sales_return[_0x5057b2(0xce)]([{'$group':{'_id':null,'total':{'$sum':_0x5057b2(0xcf)}}}]),_0x714e70=await sales_return[_0x5057b2(0xce)]([{'$unwind':_0x5057b2(0xde)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5057b2(0xc6)}}}]),_0x45586c=await purchases['aggregate']([{'$group':{'_id':null,'total_amount':{'$sum':_0x5057b2(0xcf)}}}]),_0x2bb2bc=await purchases_return[_0x5057b2(0xce)]([{'$group':{'_id':null,'total':{'$sum':_0x5057b2(0xcf)}}}]),_0x326159=await purchases_return[_0x5057b2(0xce)]([{'$unwind':'$return_product'},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5057b2(0xe7)}}}]),_0x10a1d5=await purchases[_0x5057b2(0xce)]([{'$unwind':_0x5057b2(0xc2)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5057b2(0xc5)}}}]),_0x15009a=await purchases[_0x5057b2(0xce)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x44054c=await sales[_0x5057b2(0xce)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x172756=await transfers[_0x5057b2(0xce)]([{'$unwind':_0x5057b2(0xc2)},{'$group':{'_id':_0x5057b2(0xe2),'fromWarehouse':{'$first':_0x5057b2(0xd7)},'toWareHouse':{'$first':_0x5057b2(0xf1)},'FromtotalQuantity':{'$sum':_0x5057b2(0xbf)},'TototalQuantity':{'$sum':_0x5057b2(0xdd)}}}]),_0x29345b=await categories[_0x5057b2(0xc1)](),_0x3c8534=await product['find'](),_0x5eba33=await suppliers[_0x5057b2(0xc1)](),_0x36545c=await customer[_0x5057b2(0xc1)]();console[_0x5057b2(0xbb)](_0x36545c[_0x5057b2(0xdb)]);if(_0x2a2908[0x0][_0x5057b2(0xc0)]==_0x5057b2(0xd9)){var _0x253328=users[_0x5057b2(0xd5)];console[_0x5057b2(0xbb)](_0x253328);}else{if(_0x2a2908[0x0]['language']==_0x5057b2(0xe4))var _0x253328=users[_0x5057b2(0xe4)];else{if(_0x2a2908[0x0][_0x5057b2(0xc0)]=='German')var _0x253328=users['German'];else{if(_0x2a2908[0x0]['language']==_0x5057b2(0xc7))var _0x253328=users['Spanish'];else{if(_0x2a2908[0x0][_0x5057b2(0xc0)]==_0x5057b2(0xd6))var _0x253328=users['French'];else{if(_0x2a2908[0x0]['language']==_0x5057b2(0xdc))var _0x253328=users[_0x5057b2(0xe6)];else{if(_0x2a2908[0x0][_0x5057b2(0xc0)]==_0x5057b2(0xed))var _0x253328=users[_0x5057b2(0xed)];else{if(_0x2a2908[0x0]['language']==_0x5057b2(0xd2))var _0x253328=users[_0x5057b2(0xe1)];}}}}}}}_0x359949[_0x5057b2(0xe3)](_0x5057b2(0xd3),{'success':_0x28c629['flash'](_0x5057b2(0xda)),'errors':_0x28c629[_0x5057b2(0xd4)](_0x5057b2(0xf0)),'role':_0x4a7b5a,'profile':_0x4f4d49,'sale':_0x24e3d8[0x0],'sales_return':_0x2fc976[0x0],'purchases':_0x45586c[0x0],'purchases_return':_0x2bb2bc[0x0],'purchases_table':_0x15009a,'sales_table':_0x44054c,'categories':_0x29345b[_0x5057b2(0xdb)],'product':_0x3c8534[_0x5057b2(0xdb)],'suppliers':_0x5eba33[_0x5057b2(0xdb)],'customer':_0x36545c['length'],'master_shop':_0x2a2908,'language':_0x253328,'sale_QTY':_0x26a038[0x0],'purchases_QTY':_0x10a1d5[0x0],'sales_return_QTY':_0x714e70[0x0],'purchases_return_QTY':_0x326159[0x0],'transfer_table':_0x172756});}catch(_0x351bf0){console['log'](_0x351bf0);}}),module[a0_0x56d6af(0xbc)]=router;