const a0_0x54b3a0=a0_0x994b;(function(_0x343ac3,_0x369d9f){const _0x301cb8=a0_0x994b,_0xebdec7=_0x343ac3();while(!![]){try{const _0x2278a5=-parseInt(_0x301cb8(0x14d))/0x1+parseInt(_0x301cb8(0x163))/0x2+parseInt(_0x301cb8(0x183))/0x3*(parseInt(_0x301cb8(0x173))/0x4)+-parseInt(_0x301cb8(0x176))/0x5*(parseInt(_0x301cb8(0x167))/0x6)+-parseInt(_0x301cb8(0x172))/0x7+parseInt(_0x301cb8(0x162))/0x8+parseInt(_0x301cb8(0x16f))/0x9;if(_0x2278a5===_0x369d9f)break;else _0xebdec7['push'](_0xebdec7['shift']());}catch(_0x38c529){_0xebdec7['push'](_0xebdec7['shift']());}}}(a0_0x5c00,0x4eaba));const express=require(a0_0x54b3a0(0x15c)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require('../models/all_models'),auth=require(a0_0x54b3a0(0x178)),nodemailer=require('nodemailer');function a0_0x994b(_0x24c882,_0x5ccd52){const _0x5c0055=a0_0x5c00();return a0_0x994b=function(_0x994bc9,_0x286a56){_0x994bc9=_0x994bc9-0x14d;let _0x20d944=_0x5c0055[_0x994bc9];return _0x20d944;},a0_0x994b(_0x24c882,_0x5ccd52);}var ejs=require(a0_0x54b3a0(0x17c));const path=require(a0_0x54b3a0(0x156)),users=require(a0_0x54b3a0(0x169));router[a0_0x54b3a0(0x16a)]('/view',async(_0x30a8e1,_0x11a90e)=>{const _0x23f2b2=a0_0x54b3a0;try{const _0x2ce36e=parseInt(_0x30a8e1[_0x23f2b2(0x15f)][_0x23f2b2(0x174)])||0x0,_0x5a9c03=parseInt(_0x30a8e1['query']['end'])||0xa;let _0x5c3821;_0x5c3821=await purchases[_0x23f2b2(0x151)]([{'$lookup':{'from':_0x23f2b2(0x166),'localField':'suppliers','foreignField':'name','as':'suppliers_docs'}},{'$unwind':'$suppliers_docs'},{'$unwind':_0x23f2b2(0x157)},{'$group':{'_id':'$_id','invoice':{'$first':_0x23f2b2(0x154)},'suppliers':{'$first':_0x23f2b2(0x17a)},'date':{'$first':_0x23f2b2(0x160)},'warehouse_name':{'$first':_0x23f2b2(0x155)},'room':{'$addToSet':_0x23f2b2(0x152)},'product':{'$push':_0x23f2b2(0x157)},'note':{'$first':_0x23f2b2(0x159)},'paid_amount':{'$first':'$paid_amount'},'due_amount':{'$first':'$due_amount'},'return_data':{'$first':_0x23f2b2(0x16e)},'batch_code':{'$first':'$batch_code'},'expiry_date':{'$first':_0x23f2b2(0x182)},'suppliers_docs':{'$first':_0x23f2b2(0x150)},'total_product_quantity':{'$sum':_0x23f2b2(0x164)},'level':{'$addToSet':_0x23f2b2(0x175)},'isle':{'$addToSet':'$product.bin'},'type':{'$addToSet':_0x23f2b2(0x17e)},'floorlevel':{'$addToSet':_0x23f2b2(0x161)},'finalize':{'$first':_0x23f2b2(0x185)}}},{'$sort':{'_id':0x1}},{'$project':{'_id':0x1,'invoice':0x1,'suppliers':0x1,'date':0x1,'warehouse_name':0x1,'room':0x1,'product':0x1,'note':0x1,'paid_amount':0x1,'due_amount':0x1,'return_data':0x1,'batch_code':0x1,'expiry_date':0x1,'suppliers_docs':0x1,'total_product_quantity':0x1,'level':0x1,'isle':0x1,'type':0x1,'floorlevel':0x1,'finalize':0x1}},{'$skip':_0x2ce36e},{'$limit':_0x5a9c03-_0x2ce36e}]),_0x11a90e[_0x23f2b2(0x15b)](_0x5c3821);}catch(_0x392a63){console[_0x23f2b2(0x165)](_0x23f2b2(0x171),_0x392a63),_0x11a90e[_0x23f2b2(0x170)](0xc8)['json']({'message':_0x392a63[_0x23f2b2(0x153)]});}}),router[a0_0x54b3a0(0x16c)](a0_0x54b3a0(0x17b),async(_0x1212a1,_0x2ed774)=>{const _0x2fa97e=a0_0x54b3a0,{product_code:_0x508f10}=_0x1212a1[_0x2fa97e(0x158)];var _0x1a19ed;const _0x17eaf1=await product[_0x2fa97e(0x151)]([{'$match':{'primary_code':_0x508f10,'product_category':_0x2fa97e(0x15e)}},{'$group':{'_id':'$_id','name':{'$first':'$name'},'category':{'$first':_0x2fa97e(0x17d)},'brand':{'$first':_0x2fa97e(0x177)},'unit':{'$first':_0x2fa97e(0x17f)},'alertquantity':{'$first':'$alertquantity'},'product_code':{'$first':_0x2fa97e(0x14e)},'primary_code':{'$first':_0x2fa97e(0x179)},'secondary_code':{'$first':_0x2fa97e(0x16b)},'maxStocks':{'$first':_0x2fa97e(0x16d)},'maxProdPerUnit':{'$first':_0x2fa97e(0x14f)},'product_cat':{'$first':'P'},'secondary_unit':{'$first':_0x2fa97e(0x168)}}},{'$project':{'_id':0x1,'name':0x1,'category':0x1,'brand':0x1,'unit':0x1,'alertquantity':0x1,'product_code':0x1,'primary_code':0x1,'secondary_code':0x1,'maxStocks':0x1,'maxProdPerUnit':0x1,'product_cat':0x1,'secondary_unit':0x1}}]),_0x183af2=await product[_0x2fa97e(0x151)]([{'$match':{'secondary_code':_0x508f10,'product_category':'Raw\x20Materials'}},{'$group':{'_id':_0x2fa97e(0x184),'name':{'$first':_0x2fa97e(0x181)},'category':{'$first':_0x2fa97e(0x17d)},'brand':{'$first':'$brand'},'unit':{'$first':'$unit'},'alertquantity':{'$first':_0x2fa97e(0x15d)},'product_code':{'$first':'$product_code'},'primary_code':{'$first':_0x2fa97e(0x179)},'secondary_code':{'$first':_0x2fa97e(0x16b)},'maxStocks':{'$first':_0x2fa97e(0x16d)},'maxProdPerUnit':{'$first':_0x2fa97e(0x14f)},'product_cat':{'$first':'S'},'secondary_unit':{'$first':_0x2fa97e(0x168)}}},{'$project':{'_id':0x1,'name':0x1,'category':0x1,'brand':0x1,'unit':0x1,'alertquantity':0x1,'product_code':0x1,'primary_code':0x1,'secondary_code':0x1,'maxStocks':0x1,'maxProdPerUnit':0x1,'product_cat':0x1,'secondary_unit':0x1}}]);if(_0x17eaf1['length']>0x0)_0x1a19ed=_0x17eaf1;else _0x183af2[_0x2fa97e(0x15a)]>0x0&&(_0x1a19ed=_0x183af2);_0x2ed774[_0x2fa97e(0x15b)](_0x1a19ed);}),module[a0_0x54b3a0(0x180)]=router;function a0_0x5c00(){const _0x4dcbab=['start','$product.bay','5940lLykgp','$brand','../middleware/auth','$primary_code','$suppliers','/barcode_scanner','ejs','$category','$product.type','$unit','exports','$name','$expiry_date','66HQSmqP','$_id','$finalize','190084YjjiVb','$product_code','$maxProdPerUnit','$suppliers_docs','aggregate','$product.room_name','message','$invoice','$warehouse_name','path','$product','body','$note','length','json','express','$alertquantity','Raw\x20Materials','query','$date','$product.floorlevel','3467400dSRpCR','612568sGXGFi','$product.quantity','log','suppliers','3252jjzFfm','$secondary_unit','../public/language/languages.json','get','$secondary_code','post','$maxStocks','$return_data','2302344iEjqOd','status','table\x20page','2210355fvNHWq','86628UWQzBr'];a0_0x5c00=function(){return _0x4dcbab;};return a0_0x5c00();}