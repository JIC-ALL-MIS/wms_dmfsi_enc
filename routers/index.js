const a0_0x5171af=a0_0xe4d7;(function(_0x5be7b9,_0x309a0a){const _0x29e697=a0_0xe4d7,_0x383979=_0x5be7b9();while(!![]){try{const _0x30da99=-parseInt(_0x29e697(0xec))/0x1*(parseInt(_0x29e697(0x107))/0x2)+-parseInt(_0x29e697(0xe3))/0x3*(-parseInt(_0x29e697(0xfd))/0x4)+parseInt(_0x29e697(0xf6))/0x5+parseInt(_0x29e697(0x109))/0x6+-parseInt(_0x29e697(0x100))/0x7+parseInt(_0x29e697(0xea))/0x8+parseInt(_0x29e697(0x103))/0x9;if(_0x30da99===_0x309a0a)break;else _0x383979['push'](_0x383979['shift']());}catch(_0x3985a0){_0x383979['push'](_0x383979['shift']());}}}(a0_0x16d5,0xa88c1));const express=require(a0_0x5171af(0xeb)),app=express(),router=express['Router'](),auth=require(a0_0x5171af(0xee)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers}=require('../models/all_models'),users=require(a0_0x5171af(0xfc));function a0_0xe4d7(_0xcecf55,_0xccfb95){const _0x16d523=a0_0x16d5();return a0_0xe4d7=function(_0xe4d74,_0xc1b264){_0xe4d74=_0xe4d74-0xd9;let _0x59a56d=_0x16d523[_0xe4d74];return _0x59a56d;},a0_0xe4d7(_0xcecf55,_0xccfb95);}function a0_0x16d5(){const _0x177839=['$return_sale.sale_qty','5765820kDBFCV','Arabic\x20(ae)','index','$to_warehouse','French','German','$product','$product.product_name','Chinese','$from_warehouse','Portuguese','English\x20(US)','127041abMOpr','success','flash','aggregate','findOne','Spanish','$sale_product','996000QRrqNI','express','14468qqObIo','/index','../middleware/auth','$return_sale','Hindi','$product.quantity','$total_amount','get','length','$product.from_quantity','5570785sHnMLY','user','log','$return_product.return_qty','errors','language','../public/language/languages.json','28iaUxGm','$total_price','exports','8932070RqcBNn','Arabic','find','1873719WlmTJb','Portuguese\x20(BR)','$product.to_quantity','email','102dTFqrk'];a0_0x16d5=function(){return _0x177839;};return a0_0x16d5();}router[a0_0x5171af(0xf3)](a0_0x5171af(0xed),auth,async(_0x379d72,_0x5d36dc)=>{const _0x477c16=a0_0x5171af;try{const {username:_0x3f9309,email:_0x27b66b,role:_0x4c40bd}=_0x379d72['user'],_0xf77eac=_0x379d72[_0x477c16(0xf7)];console[_0x477c16(0xf8)]('role_data',_0xf77eac);const _0x9ed52c=await profile[_0x477c16(0xe7)]({'email':_0xf77eac[_0x477c16(0x106)]});console['log']('profile_data',_0x9ed52c);const _0x3399c3=await master_shop[_0x477c16(0x102)]();console[_0x477c16(0xf8)]('master',_0x3399c3);const _0x3e54dd=await sales[_0x477c16(0xe6)]([{'$group':{'_id':null,'total_price':{'$sum':_0x477c16(0xfe)}}}]),_0x48efad=await sales[_0x477c16(0xe6)]([{'$unwind':_0x477c16(0xe9)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$sale_product.quantity'}}}]),_0x42bf3f=await sales_return[_0x477c16(0xe6)]([{'$group':{'_id':null,'total':{'$sum':_0x477c16(0xf2)}}}]),_0x354116=await sales_return['aggregate']([{'$unwind':_0x477c16(0xef)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x477c16(0x108)}}}]),_0xca60e3=await purchases['aggregate']([{'$group':{'_id':null,'total_amount':{'$sum':_0x477c16(0xf2)}}}]),_0x3cd0e2=await purchases_return['aggregate']([{'$group':{'_id':null,'total':{'$sum':'$total_amount'}}}]),_0x406755=await purchases_return[_0x477c16(0xe6)]([{'$unwind':'$return_product'},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x477c16(0xf9)}}}]),_0x46c649=await purchases[_0x477c16(0xe6)]([{'$unwind':_0x477c16(0xdd)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x477c16(0xf1)}}}]),_0x13eff1=await purchases[_0x477c16(0xe6)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x38cc40=await sales[_0x477c16(0xe6)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x385a9f=await transfers[_0x477c16(0xe6)]([{'$unwind':_0x477c16(0xdd)},{'$group':{'_id':_0x477c16(0xde),'fromWarehouse':{'$first':_0x477c16(0xe0)},'toWareHouse':{'$first':_0x477c16(0xda)},'FromtotalQuantity':{'$sum':_0x477c16(0xf5)},'TototalQuantity':{'$sum':_0x477c16(0x105)}}}]),_0x571e2c=await categories[_0x477c16(0x102)](),_0x5bf5e4=await product['find'](),_0xb378f=await suppliers['find'](),_0xa146f0=await customer['find']();console['log'](_0xa146f0[_0x477c16(0xf4)]);if(_0x3399c3[0x0][_0x477c16(0xfb)]==_0x477c16(0xe2)){var _0x53d470=users['English'];console[_0x477c16(0xf8)](_0x53d470);}else{if(_0x3399c3[0x0][_0x477c16(0xfb)]==_0x477c16(0xf0))var _0x53d470=users[_0x477c16(0xf0)];else{if(_0x3399c3[0x0]['language']==_0x477c16(0xdc))var _0x53d470=users[_0x477c16(0xdc)];else{if(_0x3399c3[0x0][_0x477c16(0xfb)]==_0x477c16(0xe8))var _0x53d470=users[_0x477c16(0xe8)];else{if(_0x3399c3[0x0][_0x477c16(0xfb)]==_0x477c16(0xdb))var _0x53d470=users['French'];else{if(_0x3399c3[0x0][_0x477c16(0xfb)]==_0x477c16(0x104))var _0x53d470=users[_0x477c16(0xe1)];else{if(_0x3399c3[0x0]['language']=='Chinese')var _0x53d470=users[_0x477c16(0xdf)];else{if(_0x3399c3[0x0]['language']==_0x477c16(0x10a))var _0x53d470=users[_0x477c16(0x101)];}}}}}}}_0x5d36dc['render'](_0x477c16(0xd9),{'success':_0x379d72[_0x477c16(0xe5)](_0x477c16(0xe4)),'errors':_0x379d72[_0x477c16(0xe5)](_0x477c16(0xfa)),'role':_0xf77eac,'profile':_0x9ed52c,'sale':_0x3e54dd[0x0],'sales_return':_0x42bf3f[0x0],'purchases':_0xca60e3[0x0],'purchases_return':_0x3cd0e2[0x0],'purchases_table':_0x13eff1,'sales_table':_0x38cc40,'categories':_0x571e2c[_0x477c16(0xf4)],'product':_0x5bf5e4['length'],'suppliers':_0xb378f['length'],'customer':_0xa146f0[_0x477c16(0xf4)],'master_shop':_0x3399c3,'language':_0x53d470,'sale_QTY':_0x48efad[0x0],'purchases_QTY':_0x46c649[0x0],'sales_return_QTY':_0x354116[0x0],'purchases_return_QTY':_0x406755[0x0],'transfer_table':_0x385a9f});}catch(_0x4ec33a){console['log'](_0x4ec33a);}}),module[a0_0x5171af(0xff)]=router;