var a0_0x5ebe4f=a0_0x51c7;(function(_0x45c613,_0x405141){var _0x5e3713=a0_0x51c7,_0x3c6512=_0x45c613();while(!![]){try{var _0x45c744=parseInt(_0x5e3713(0x175))/0x1*(-parseInt(_0x5e3713(0x179))/0x2)+-parseInt(_0x5e3713(0x1a2))/0x3+-parseInt(_0x5e3713(0x1cd))/0x4*(parseInt(_0x5e3713(0x1ac))/0x5)+-parseInt(_0x5e3713(0x17e))/0x6+parseInt(_0x5e3713(0x198))/0x7*(parseInt(_0x5e3713(0x17c))/0x8)+parseInt(_0x5e3713(0x16e))/0x9*(parseInt(_0x5e3713(0x1ba))/0xa)+parseInt(_0x5e3713(0x1b4))/0xb;if(_0x45c744===_0x405141)break;else _0x3c6512['push'](_0x3c6512['shift']());}catch(_0x49ebff){_0x3c6512['push'](_0x3c6512['shift']());}}}(a0_0x3e41,0xeba39));function a0_0x51c7(_0x473f5e,_0xe6fbf6){var _0x3e412c=a0_0x3e41();return a0_0x51c7=function(_0x51c78d,_0x5c059e){_0x51c78d=_0x51c78d-0x16d;var _0x1213f1=_0x3e412c[_0x51c78d];return _0x1213f1;},a0_0x51c7(_0x473f5e,_0xe6fbf6);}const express=require('express'),app=express(),router=express[a0_0x5ebe4f(0x18d)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_finished,sales,sales_finished,sales_return,suppliers_payment,customer_payment,transfers,transfers_finished,email_settings,supervisor_settings,adjustment_finished,adjustment}=require(a0_0x5ebe4f(0x1bf)),auth=require(a0_0x5ebe4f(0x186)),users=require(a0_0x5ebe4f(0x1ab)),nodemailer=require('nodemailer');router[a0_0x5ebe4f(0x1a4)]('/view',auth,async(_0x4723bd,_0x845b34)=>{var _0x3396aa=a0_0x5ebe4f;try{const {username:_0x5aebe5,email:_0x426c4c,role:_0x1caf38}=_0x4723bd[_0x3396aa(0x1b2)],_0x356250=_0x4723bd[_0x3396aa(0x1b2)],_0x2981b7=await profile[_0x3396aa(0x19d)]({'email':_0x356250[_0x3396aa(0x1c3)]}),_0x1b8cf8=await master_shop[_0x3396aa(0x1b7)](),_0x31ab2d=await warehouse[_0x3396aa(0x190)]([{'$match':{'status':_0x3396aa(0x1cb),'warehouse_category':_0x3396aa(0x1c5)}},{'$group':{'_id':_0x3396aa(0x16d),'name':{'$first':_0x3396aa(0x16d)}}}]);if(_0x1b8cf8[0x0][_0x3396aa(0x1b6)]=='English\x20(US)')var _0x2b4ce2=users[_0x3396aa(0x193)];else{if(_0x1b8cf8[0x0][_0x3396aa(0x1b6)]==_0x3396aa(0x194))var _0x2b4ce2=users[_0x3396aa(0x194)];else{if(_0x1b8cf8[0x0][_0x3396aa(0x1b6)]=='German')var _0x2b4ce2=users[_0x3396aa(0x1c8)];else{if(_0x1b8cf8[0x0][_0x3396aa(0x1b6)]==_0x3396aa(0x18c))var _0x2b4ce2=users[_0x3396aa(0x18c)];else{if(_0x1b8cf8[0x0][_0x3396aa(0x1b6)]=='French')var _0x2b4ce2=users[_0x3396aa(0x1b1)];else{if(_0x1b8cf8[0x0][_0x3396aa(0x1b6)]==_0x3396aa(0x1ce))var _0x2b4ce2=users['Portuguese'];else{if(_0x1b8cf8[0x0][_0x3396aa(0x1b6)]==_0x3396aa(0x187))var _0x2b4ce2=users['Chinese'];else{if(_0x1b8cf8[0x0][_0x3396aa(0x1b6)]==_0x3396aa(0x172))var _0x2b4ce2=users[_0x3396aa(0x176)];}}}}}}}_0x845b34[_0x3396aa(0x1b9)]('transaction_finished',{'success':_0x4723bd[_0x3396aa(0x199)]('success'),'errors':_0x4723bd[_0x3396aa(0x199)]('errors'),'role':_0x356250,'profile':_0x2981b7,'master_shop':_0x1b8cf8,'dataProcess':_0x31ab2d,'language':_0x2b4ce2});}catch(_0x1e3437){console['log'](_0x1e3437);}}),router[a0_0x5ebe4f(0x181)](a0_0x5ebe4f(0x1bc),auth,async(_0x3bc557,_0x26be3d)=>{var _0x26c891=a0_0x5ebe4f;const {product_category:_0x4003d8,transaction_category:_0x2df6a3,transaction_date_from:_0xab6f88,transaction_date_to:_0x244326,warehouse_category:_0x4f6e14,item_code:_0x4763b0}=_0x3bc557[_0x26c891(0x1a1)];var _0x1be84b=await purchases[_0x26c891(0x190)]([{'$match':{'warehouse_name':_0x4f6e14,'date':{'$gte':_0xab6f88,'$lte':_0x244326}}},{'$lookup':{'from':_0x26c891(0x1c2),'let':{'invoice':'$invoice'},'pipeline':[{'$unwind':_0x26c891(0x1a9)},{'$match':{'$expr':{'$eq':['$$invoice',_0x26c891(0x17f)]}}},{'$project':{'_id':'$product_details._id','product_name':'$product_details.product_name','product_code':_0x26c891(0x1b8),'quantity_available':_0x26c891(0x19a),'warehouse_name':_0x26c891(0x16d),'warehouse_room':_0x26c891(0x177),'invoice':'$product_details.invoice','production_date':'$product_details.production_date','expiry_date':_0x26c891(0x171),'UOM':'$product_details.unit'}}],'as':_0x26c891(0x183)}}]);_0x1be84b[_0x26c891(0x1b5)]={},await Promise[_0x26c891(0x184)](_0x1be84b[_0x26c891(0x1bd)](async _0x416277=>{var _0x3e8826=_0x26c891;_0x1be84b[_0x3e8826(0x1b5)][_0x416277[_0x3e8826(0x1c7)]]=[],await Promise[_0x3e8826(0x184)](_0x416277[_0x3e8826(0x183)]['map'](async _0x4743e4=>{var _0x49503d=_0x3e8826;const _0x5dec8c=await sales[_0x49503d(0x190)]([{'$unwind':_0x49503d(0x173)},{'$match':{'sale_product.id_transaction_from':_0x4743e4['_id'][_0x49503d(0x1af)](),'sale_product.invoice':_0x4743e4[_0x49503d(0x1c7)]}},{'$project':{'_id':_0x49503d(0x1c0),'product_name':_0x49503d(0x1ae),'product_code':_0x49503d(0x19b),'quantity_available':'$sale_product.quantity','warehouse_name':_0x49503d(0x1c1),'warehouse_room':_0x49503d(0x196),'product_invoice':_0x49503d(0x180),'invoice':_0x49503d(0x18b),'id_transaction_from':_0x49503d(0x16f),'date':_0x49503d(0x18e),'production_date':_0x49503d(0x1ca),'expiry_date':'$sale_product.expiry_date','UOM':_0x49503d(0x185)}}]);_0x5dec8c['length']>0x0&&_0x1be84b[_0x49503d(0x1b5)][_0x416277['invoice']]['push'](..._0x5dec8c);}));})),_0x1be84b[_0x26c891(0x1b5)]=_0x1be84b[_0x26c891(0x1b5)],_0x1be84b['data_adjustment']={},await Promise[_0x26c891(0x184)](_0x1be84b[_0x26c891(0x1bd)](async _0x2125bc=>{var _0x5f83b1=_0x26c891;_0x1be84b[_0x5f83b1(0x1c9)][_0x2125bc[_0x5f83b1(0x1c7)]]=[],await Promise[_0x5f83b1(0x184)](_0x2125bc[_0x5f83b1(0x183)]['map'](async _0x3398f7=>{var _0x38a381=_0x5f83b1;const _0x57dc70=await adjustment[_0x38a381(0x190)]([{'$unwind':_0x38a381(0x18f)},{'$match':{'product.id_transaction_from':_0x3398f7['_id'][_0x38a381(0x1af)](),'product.invoice':_0x3398f7['invoice']}},{'$project':{'_id':'$product._id','product_name':_0x38a381(0x1a3),'product_code':'$product.product_code','quantity_available':_0x38a381(0x1be),'warehouse_name':_0x38a381(0x1c1),'warehouse_room':'$product.room_names','product_invoice':_0x38a381(0x19e),'invoice':'$invoice','id_transaction_from':_0x38a381(0x191),'date':_0x38a381(0x18e),'production_date':_0x38a381(0x1b0),'expiry_date':_0x38a381(0x170),'UOM':'$product.unit'}}]);_0x57dc70['length']>0x0&&_0x1be84b[_0x38a381(0x1c9)][_0x2125bc[_0x38a381(0x1c7)]]['push'](..._0x57dc70);}));})),_0x1be84b[_0x26c891(0x178)]={},await Promise['all'](_0x1be84b[_0x26c891(0x1bd)](async _0x387646=>{var _0x304092=_0x26c891;_0x1be84b[_0x304092(0x178)][_0x387646[_0x304092(0x1c7)]]=[],await Promise['all'](_0x387646[_0x304092(0x183)][_0x304092(0x1bd)](async _0x141f24=>{var _0x1e0abd=_0x304092;const _0x550e05=await transfers[_0x1e0abd(0x190)]([{'$unwind':'$product'},{'$match':{'product.id_transaction_id':_0x141f24[_0x1e0abd(0x192)][_0x1e0abd(0x1af)](),'product.To_invoice':_0x141f24[_0x1e0abd(0x1c7)]}},{'$project':{'_id':_0x1e0abd(0x1ad),'product_name':_0x1e0abd(0x1a3),'product_code':_0x1e0abd(0x1a7),'quantity_available':_0x1e0abd(0x17d),'warehouse_name':_0x1e0abd(0x182),'warehouse_room':_0x1e0abd(0x1cc),'product_invoice':'$product.to_room_name','invoice':'$invoice','id_transaction_from':_0x1e0abd(0x1bb),'date':_0x1e0abd(0x18e),'production_date':_0x1e0abd(0x1b0),'expiry_date':_0x1e0abd(0x170),'UOM':_0x1e0abd(0x17a)}}]);_0x550e05[_0x1e0abd(0x189)]>0x0&&_0x1be84b['data_transfer'][_0x387646[_0x1e0abd(0x1c7)]][_0x1e0abd(0x18a)](..._0x550e05);}));})),_0x26be3d['json']({'purchases_warehouse':_0x1be84b,'data_sales':_0x1be84b[_0x26c891(0x1b5)],'data_adjustment':_0x1be84b['data_adjustment'],'data_transfer':_0x1be84b[_0x26c891(0x178)]});}),router[a0_0x5ebe4f(0x1a4)]('/viewdata_inc_fg/:id',auth,async(_0x24bec0,_0x18f92b)=>{var _0x442781=a0_0x5ebe4f;try{const _0x4e3907=_0x24bec0[_0x442781(0x188)]['id'];var _0x556de7=await purchases_finished[_0x442781(0x195)](_0x4e3907);const _0x122692=await master_shop[_0x442781(0x1b7)](),_0x5e42f7=_0x24bec0['user'],_0x423d78=await profile['findOne']({'email':_0x5e42f7[_0x442781(0x1c3)]});if(_0x122692[0x0]['language']==_0x442781(0x19f))var _0x29da4c=users['English'];else{if(_0x122692[0x0][_0x442781(0x1b6)]==_0x442781(0x194))var _0x29da4c=users[_0x442781(0x194)];else{if(_0x122692[0x0]['language']==_0x442781(0x1c8))var _0x29da4c=users[_0x442781(0x1c8)];else{if(_0x122692[0x0][_0x442781(0x1b6)]==_0x442781(0x18c))var _0x29da4c=users[_0x442781(0x18c)];else{if(_0x122692[0x0][_0x442781(0x1b6)]=='French')var _0x29da4c=users['French'];else{if(_0x122692[0x0]['language']=='Portuguese\x20(BR)')var _0x29da4c=users[_0x442781(0x1c4)];else{if(_0x122692[0x0]['language']=='Chinese')var _0x29da4c=users[_0x442781(0x187)];else{if(_0x122692[0x0]['language']==_0x442781(0x172))var _0x29da4c=users[_0x442781(0x176)];}}}}}}}_0x18f92b[_0x442781(0x1b9)](_0x442781(0x1a5),{'success':_0x24bec0[_0x442781(0x199)]('success'),'errors':_0x24bec0[_0x442781(0x199)]('errors'),'master_shop':_0x122692,'profile':_0x423d78,'role':_0x5e42f7,'language':_0x29da4c,'data':_0x556de7});}catch(_0xf1ebd9){_0x18f92b[_0x442781(0x1b3)](_0xf1ebd9);}}),router[a0_0x5ebe4f(0x1a4)](a0_0x5ebe4f(0x174),auth,async(_0x40a92e,_0x30f4ec)=>{var _0xf0a2c=a0_0x5ebe4f;try{const _0x168ce6=_0x40a92e['params']['id'];var _0x1f254c=await sales_finished[_0xf0a2c(0x195)](_0x168ce6);const _0x218d8f=await master_shop[_0xf0a2c(0x1b7)](),_0x175d87=_0x40a92e[_0xf0a2c(0x1b2)],_0x1e28da=await profile['findOne']({'email':_0x175d87[_0xf0a2c(0x1c3)]});if(_0x218d8f[0x0]['language']==_0xf0a2c(0x19f))var _0x39bf07=users[_0xf0a2c(0x193)];else{if(_0x218d8f[0x0]['language']==_0xf0a2c(0x194))var _0x39bf07=users[_0xf0a2c(0x194)];else{if(_0x218d8f[0x0]['language']==_0xf0a2c(0x1c8))var _0x39bf07=users[_0xf0a2c(0x1c8)];else{if(_0x218d8f[0x0][_0xf0a2c(0x1b6)]=='Spanish')var _0x39bf07=users[_0xf0a2c(0x18c)];else{if(_0x218d8f[0x0][_0xf0a2c(0x1b6)]==_0xf0a2c(0x1b1))var _0x39bf07=users['French'];else{if(_0x218d8f[0x0]['language']==_0xf0a2c(0x1ce))var _0x39bf07=users[_0xf0a2c(0x1c4)];else{if(_0x218d8f[0x0][_0xf0a2c(0x1b6)]==_0xf0a2c(0x187))var _0x39bf07=users['Chinese'];else{if(_0x218d8f[0x0][_0xf0a2c(0x1b6)]=='Arabic\x20(ae)')var _0x39bf07=users[_0xf0a2c(0x176)];}}}}}}}_0x30f4ec[_0xf0a2c(0x1b9)](_0xf0a2c(0x19c),{'success':_0x40a92e[_0xf0a2c(0x199)](_0xf0a2c(0x1c6)),'errors':_0x40a92e[_0xf0a2c(0x199)]('errors'),'master_shop':_0x218d8f,'profile':_0x1e28da,'role':_0x175d87,'language':_0x39bf07,'data':_0x1f254c});}catch(_0x2c6232){_0x30f4ec[_0xf0a2c(0x1b3)](_0x2c6232);}}),router[a0_0x5ebe4f(0x1a4)](a0_0x5ebe4f(0x1a6),auth,async(_0x4fe2bd,_0x242231)=>{var _0x56f76d=a0_0x5ebe4f;try{const _0x5a8860=_0x4fe2bd[_0x56f76d(0x188)]['id'];var _0x2df7b2=await transfers_finished[_0x56f76d(0x195)](_0x5a8860);const _0x2a466f=await master_shop['find'](),_0xcd013e=_0x4fe2bd[_0x56f76d(0x1b2)],_0x1a57f6=await profile[_0x56f76d(0x19d)]({'email':_0xcd013e[_0x56f76d(0x1c3)]});if(_0x2a466f[0x0]['language']==_0x56f76d(0x19f))var _0x26fdd6=users['English'];else{if(_0x2a466f[0x0][_0x56f76d(0x1b6)]==_0x56f76d(0x194))var _0x26fdd6=users[_0x56f76d(0x194)];else{if(_0x2a466f[0x0]['language']==_0x56f76d(0x1c8))var _0x26fdd6=users[_0x56f76d(0x1c8)];else{if(_0x2a466f[0x0][_0x56f76d(0x1b6)]==_0x56f76d(0x18c))var _0x26fdd6=users[_0x56f76d(0x18c)];else{if(_0x2a466f[0x0]['language']==_0x56f76d(0x1b1))var _0x26fdd6=users['French'];else{if(_0x2a466f[0x0][_0x56f76d(0x1b6)]=='Portuguese\x20(BR)')var _0x26fdd6=users[_0x56f76d(0x1c4)];else{if(_0x2a466f[0x0][_0x56f76d(0x1b6)]==_0x56f76d(0x187))var _0x26fdd6=users['Chinese'];else{if(_0x2a466f[0x0]['language']==_0x56f76d(0x172))var _0x26fdd6=users['Arabic'];}}}}}}}_0x242231[_0x56f76d(0x1b9)](_0x56f76d(0x1aa),{'success':_0x4fe2bd[_0x56f76d(0x199)](_0x56f76d(0x1c6)),'errors':_0x4fe2bd[_0x56f76d(0x199)]('errors'),'master_shop':_0x2a466f,'profile':_0x1a57f6,'role':_0xcd013e,'language':_0x26fdd6,'data':_0x2df7b2});}catch(_0x22fbf4){_0x242231[_0x56f76d(0x1b3)](_0x22fbf4);}}),router[a0_0x5ebe4f(0x1a4)](a0_0x5ebe4f(0x197),auth,async(_0x1f4adb,_0x358285)=>{var _0x10507a=a0_0x5ebe4f;try{const {username:_0x534492,email:_0x3b047d,role:_0x2930be}=_0x1f4adb[_0x10507a(0x1b2)],_0x5c30bd=_0x1f4adb[_0x10507a(0x1b2)],_0x46b721=await profile['findOne']({'email':_0x5c30bd[_0x10507a(0x1c3)]}),_0x550315=await master_shop['find'](),_0x5097ac=await warehouse[_0x10507a(0x190)]([{'$match':{'status':_0x10507a(0x1cb),'warehouse_category':_0x10507a(0x17b)}},{'$group':{'_id':_0x10507a(0x16d),'name':{'$first':_0x10507a(0x16d)}}}]);if(_0x550315[0x0]['language']==_0x10507a(0x19f))var _0x570695=users[_0x10507a(0x193)];else{if(_0x550315[0x0][_0x10507a(0x1b6)]==_0x10507a(0x194))var _0x570695=users[_0x10507a(0x194)];else{if(_0x550315[0x0][_0x10507a(0x1b6)]=='German')var _0x570695=users['German'];else{if(_0x550315[0x0][_0x10507a(0x1b6)]=='Spanish')var _0x570695=users[_0x10507a(0x18c)];else{if(_0x550315[0x0][_0x10507a(0x1b6)]==_0x10507a(0x1b1))var _0x570695=users[_0x10507a(0x1b1)];else{if(_0x550315[0x0]['language']=='Portuguese\x20(BR)')var _0x570695=users[_0x10507a(0x1c4)];else{if(_0x550315[0x0][_0x10507a(0x1b6)]==_0x10507a(0x187))var _0x570695=users['Chinese'];else{if(_0x550315[0x0][_0x10507a(0x1b6)]==_0x10507a(0x172))var _0x570695=users['Arabic'];}}}}}}}_0x358285[_0x10507a(0x1b9)](_0x10507a(0x1a8),{'success':_0x1f4adb[_0x10507a(0x199)](_0x10507a(0x1c6)),'errors':_0x1f4adb[_0x10507a(0x199)]('errors'),'role':_0x5c30bd,'profile':_0x46b721,'master_shop':_0x550315,'dataProcess':_0x5097ac,'language':_0x570695});}catch(_0x493bea){console[_0x10507a(0x1a0)](_0x493bea);}}),module['exports']=router;function a0_0x3e41(){var _0x148c4b=['81qAskfD','$sale_product.id_transaction_from','$product.expiry_date','$product_details.expiry_date','Arabic\x20(ae)','$sale_product','/viewdata_og_fg/:id','2csFlHp','Arabic','$room','data_transfer','228238IVMlSn','$product.unit','Raw\x20Materials','11992PPPnvi','$product.to_quantity','10941924CvsYyR','$product_details.invoice','$sale_product.invoice','post','$to_warehouse','warehouse_data','all','$sale_product.unit','../middleware/auth','Chinese','params','length','push','$invoice','Spanish','Router','$date','$product','aggregate','$product.id_transaction_from','_id','English','Hindi','findById','$sale_product.room_name','/viewFG','4186hfiYUG','flash','$product_details.product_stock','$sale_product.product_code','view_og_table','findOne','$product.invoice','English\x20(US)','log','body','1711125zdFDWG','$product.product_name','get','view_table','/viewdata_tf_fg/:id','$product.product_code','transaction_finished_raw','$product_details','view_tf_table','../public/language/languages.json','2354445GbPTWT','$product._id','$sale_product.product_name','valueOf','$product.production_date','French','user','json','32745900xhThHT','data_sales','language','find','$product_details.product_code','render','205590vEfBeG','$product.id_transaction_id','/reports','map','$product.new_adjust_qty','../models/all_models','$sale_product._id','$warehouse_name','warehouses','email','Portuguese','Finished\x20Goods','success','invoice','German','data_adjustment','$sale_product.production_date','Enabled','$product.room_names','4bUWWxH','Portuguese\x20(BR)','$name'];a0_0x3e41=function(){return _0x148c4b;};return a0_0x3e41();}