var a0_0x4b6060=a0_0x3a14;(function(_0x4ca90c,_0x1b3aab){var _0x4f758d=a0_0x3a14,_0x46cb5c=_0x4ca90c();while(!![]){try{var _0xd31839=parseInt(_0x4f758d(0x1a3))/0x1*(parseInt(_0x4f758d(0x181))/0x2)+parseInt(_0x4f758d(0x1b7))/0x3+parseInt(_0x4f758d(0x182))/0x4*(parseInt(_0x4f758d(0x18a))/0x5)+-parseInt(_0x4f758d(0x187))/0x6*(-parseInt(_0x4f758d(0x1e5))/0x7)+parseInt(_0x4f758d(0x1c4))/0x8*(-parseInt(_0x4f758d(0x1d5))/0x9)+-parseInt(_0x4f758d(0x1b2))/0xa*(parseInt(_0x4f758d(0x17e))/0xb)+-parseInt(_0x4f758d(0x1b8))/0xc;if(_0xd31839===_0x1b3aab)break;else _0x46cb5c['push'](_0x46cb5c['shift']());}catch(_0x16157d){_0x46cb5c['push'](_0x46cb5c['shift']());}}}(a0_0x30d7,0x44122));function a0_0x30d7(){var _0x348166=['errors','Arabic\x20(ae)','findOne','1298223uFfWHI','2234928eswKYb','data_sales','data_adjustment','push','$sale_product._id','$product_details','$room','render','$sale_product.product_name','Raw\x20Materials','/viewdata_tf_fg/:id','$product.new_adjust_qty','57944yEvzAl','valueOf','$invoice','findById','$product.id_transaction','$sale_product.expiry_date','$product._id','$product_details.unit','post','data_transfer','flash','$product_details.product_code','warehouse_data','aggregate','$product.invoice','$sale_product','$sale_product.quantity','594KcaXGQ','params','Chinese','$product.production_date','English\x20(US)','$product_details.product_stock','$product','all','$sale_product.product_code','map','$product.product_code','exports','/viewFG','$$invoice','success','Enabled','69447mwaZEG','view_table','../middleware/auth','French','Portuguese','$product_details.production_date','1594285mzoLzm','user','$product_details.expiry_date','196tkBkvU','244chzaly','$product.room_names','warehouses','transaction_finished','$date','174DSOoIY','$product.to_quantity','$name','36170iKHkCU','Finished\x20Goods','_id','view_tf_table','$to_warehouse','log','Hindi','json','$product_details.invoice','../public/language/languages.json','Arabic','invoice','body','express','length','$sale_product.id_transaction_from','../models/all_models','$product.to_room_name','English','Portuguese\x20(BR)','/viewdata_og_fg/:id','$sale_product.production_date','email','Spanish','get','727EHmsxr','$sale_product.invoice','German','$warehouse_name','$product.id_transaction_from','$product.id_transaction_id','$product_details._id','$sale_product.room_name','$product_details.product_name','find','/viewdata_inc_fg/:id','$sale_product.unit','$product.unit','language','$product.product_name','20djfReB','$product.expiry_date'];a0_0x30d7=function(){return _0x348166;};return a0_0x30d7();}const express=require(a0_0x4b6060(0x197)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_finished,sales,sales_finished,sales_return,suppliers_payment,customer_payment,transfers,transfers_finished,email_settings,supervisor_settings,adjustment_finished,adjustment}=require(a0_0x4b6060(0x19a)),auth=require(a0_0x4b6060(0x17a)),users=require(a0_0x4b6060(0x193)),nodemailer=require('nodemailer');function a0_0x3a14(_0x2f6f33,_0x277a55){var _0x30d7c7=a0_0x30d7();return a0_0x3a14=function(_0x3a14bd,_0x7b51e5){_0x3a14bd=_0x3a14bd-0x179;var _0x4e24e1=_0x30d7c7[_0x3a14bd];return _0x4e24e1;},a0_0x3a14(_0x2f6f33,_0x277a55);}router[a0_0x4b6060(0x1a2)]('/view',auth,async(_0x149edc,_0x494102)=>{var _0x5da089=a0_0x4b6060;try{const {username:_0x56eedc,email:_0x52d65e,role:_0x40265f}=_0x149edc['user'],_0x3fe656=_0x149edc['user'],_0x1062bc=await profile['findOne']({'email':_0x3fe656[_0x5da089(0x1a0)]}),_0x49c037=await master_shop[_0x5da089(0x1ac)](),_0x48ba1f=await warehouse[_0x5da089(0x1d1)]([{'$match':{'status':_0x5da089(0x1e4),'warehouse_category':_0x5da089(0x18b)}},{'$group':{'_id':_0x5da089(0x189),'name':{'$first':'$name'}}}]);if(_0x49c037[0x0][_0x5da089(0x1b0)]=='English\x20(US)')var _0x480e3a=users['English'];else{if(_0x49c037[0x0][_0x5da089(0x1b0)]==_0x5da089(0x190))var _0x480e3a=users['Hindi'];else{if(_0x49c037[0x0][_0x5da089(0x1b0)]==_0x5da089(0x1a5))var _0x480e3a=users[_0x5da089(0x1a5)];else{if(_0x49c037[0x0][_0x5da089(0x1b0)]==_0x5da089(0x1a1))var _0x480e3a=users[_0x5da089(0x1a1)];else{if(_0x49c037[0x0]['language']==_0x5da089(0x17b))var _0x480e3a=users['French'];else{if(_0x49c037[0x0]['language']==_0x5da089(0x19d))var _0x480e3a=users[_0x5da089(0x17c)];else{if(_0x49c037[0x0][_0x5da089(0x1b0)]==_0x5da089(0x1d7))var _0x480e3a=users[_0x5da089(0x1d7)];else{if(_0x49c037[0x0][_0x5da089(0x1b0)]==_0x5da089(0x1b5))var _0x480e3a=users[_0x5da089(0x194)];}}}}}}}_0x494102['render'](_0x5da089(0x185),{'success':_0x149edc[_0x5da089(0x1ce)]('success'),'errors':_0x149edc[_0x5da089(0x1ce)](_0x5da089(0x1b4)),'role':_0x3fe656,'profile':_0x1062bc,'master_shop':_0x49c037,'dataProcess':_0x48ba1f,'language':_0x480e3a});}catch(_0x205629){console['log'](_0x205629);}}),router[a0_0x4b6060(0x1cc)]('/reports',auth,async(_0x1f603f,_0x3797bb)=>{var _0x2a66bb=a0_0x4b6060;const {product_category:_0x57589e,transaction_category:_0x4541b4,transaction_date_from:_0x15af76,transaction_date_to:_0x45bb10,warehouse_category:_0x3b1e42,item_code:_0x2ec90f}=_0x1f603f[_0x2a66bb(0x196)];console[_0x2a66bb(0x18f)](_0x3b1e42);if(_0x57589e=='rm'){if(_0x3b1e42==_0x2a66bb(0x1dc)){var _0x42842f=await purchases[_0x2a66bb(0x1d1)]([{'$match':{'date':{'$gte':_0x15af76,'$lte':_0x45bb10}}},{'$lookup':{'from':_0x2a66bb(0x184),'let':{'invoice':_0x2a66bb(0x1c6)},'pipeline':[{'$unwind':_0x2a66bb(0x1bd)},{'$match':{'$expr':{'$eq':['$$invoice',_0x2a66bb(0x192)]}}},{'$project':{'_id':_0x2a66bb(0x1a9),'product_name':_0x2a66bb(0x1ab),'product_code':_0x2a66bb(0x1cf),'quantity_available':_0x2a66bb(0x1da),'warehouse_name':_0x2a66bb(0x189),'warehouse_room':_0x2a66bb(0x1be),'invoice':'$product_details.invoice','production_date':_0x2a66bb(0x17d),'expiry_date':'$product_details.expiry_date','UOM':_0x2a66bb(0x1cb)}}],'as':_0x2a66bb(0x1d0)}}]);_0x42842f[_0x2a66bb(0x1b9)]={},await Promise['all'](_0x42842f[_0x2a66bb(0x1de)](async _0x5cd1e3=>{var _0x3def3f=_0x2a66bb;_0x42842f['data_sales'][_0x5cd1e3[_0x3def3f(0x195)]]=[],await Promise[_0x3def3f(0x1dc)](_0x5cd1e3[_0x3def3f(0x1d0)]['map'](async _0x1a15ca=>{var _0x2c5665=_0x3def3f;const _0x20f225=await sales[_0x2c5665(0x1d1)]([{'$unwind':_0x2c5665(0x1d3)},{'$match':{'sale_product.id_transaction_from':_0x1a15ca['_id'][_0x2c5665(0x1c5)](),'sale_product.invoice':_0x1a15ca['invoice']}},{'$project':{'_id':_0x2c5665(0x1bc),'product_name':_0x2c5665(0x1c0),'product_code':'$sale_product.product_code','quantity_available':_0x2c5665(0x1d4),'warehouse_name':_0x2c5665(0x1a6),'warehouse_room':_0x2c5665(0x1aa),'product_invoice':_0x2c5665(0x1a4),'invoice':'$invoice','id_transaction_from':_0x2c5665(0x199),'date':_0x2c5665(0x186),'production_date':_0x2c5665(0x19f),'expiry_date':'$sale_product.expiry_date','UOM':_0x2c5665(0x1ae)}}]);_0x20f225[_0x2c5665(0x198)]>0x0&&_0x42842f['data_sales'][_0x5cd1e3[_0x2c5665(0x195)]][_0x2c5665(0x1bb)](..._0x20f225);}));})),_0x42842f[_0x2a66bb(0x1b9)]=_0x42842f[_0x2a66bb(0x1b9)],_0x42842f[_0x2a66bb(0x1ba)]={},await Promise['all'](_0x42842f[_0x2a66bb(0x1de)](async _0x45550d=>{var _0x6ea981=_0x2a66bb;_0x42842f[_0x6ea981(0x1ba)][_0x45550d[_0x6ea981(0x195)]]=[],await Promise[_0x6ea981(0x1dc)](_0x45550d[_0x6ea981(0x1d0)][_0x6ea981(0x1de)](async _0x55f26d=>{var _0x5ae93c=_0x6ea981;const _0x105994=await adjustment[_0x5ae93c(0x1d1)]([{'$unwind':_0x5ae93c(0x1db)},{'$match':{'product.id_transaction_from':_0x55f26d[_0x5ae93c(0x18c)][_0x5ae93c(0x1c5)](),'product.invoice':_0x55f26d[_0x5ae93c(0x195)]}},{'$project':{'_id':'$product._id','product_name':_0x5ae93c(0x1b1),'product_code':_0x5ae93c(0x1df),'quantity_available':_0x5ae93c(0x1c3),'warehouse_name':_0x5ae93c(0x1a6),'warehouse_room':'$product.room_names','product_invoice':_0x5ae93c(0x1d2),'invoice':_0x5ae93c(0x1c6),'id_transaction_from':_0x5ae93c(0x1a7),'date':_0x5ae93c(0x186),'production_date':_0x5ae93c(0x1d8),'expiry_date':_0x5ae93c(0x1b3),'UOM':'$product.unit'}}]);_0x105994[_0x5ae93c(0x198)]>0x0&&_0x42842f[_0x5ae93c(0x1ba)][_0x45550d[_0x5ae93c(0x195)]]['push'](..._0x105994);}));})),_0x42842f['data_transfer']={},await Promise[_0x2a66bb(0x1dc)](_0x42842f[_0x2a66bb(0x1de)](async _0xf1d6d7=>{var _0x3a02ef=_0x2a66bb;_0x42842f[_0x3a02ef(0x1cd)][_0xf1d6d7['invoice']]=[],await Promise[_0x3a02ef(0x1dc)](_0xf1d6d7[_0x3a02ef(0x1d0)][_0x3a02ef(0x1de)](async _0x2bdf45=>{var _0x566ff1=_0x3a02ef;const _0xeb2e55=await transfers['aggregate']([{'$unwind':_0x566ff1(0x1db)},{'$match':{'product.id_transaction_id':_0x2bdf45[_0x566ff1(0x18c)][_0x566ff1(0x1c5)](),'product.To_invoice':_0x2bdf45['invoice']}},{'$project':{'_id':_0x566ff1(0x1ca),'product_name':_0x566ff1(0x1b1),'product_code':'$product.product_code','quantity_available':_0x566ff1(0x188),'warehouse_name':_0x566ff1(0x18e),'warehouse_room':_0x566ff1(0x183),'product_invoice':_0x566ff1(0x19b),'invoice':_0x566ff1(0x1c6),'id_transaction_from':_0x566ff1(0x1a8),'date':_0x566ff1(0x186),'production_date':_0x566ff1(0x1d8),'expiry_date':_0x566ff1(0x1b3),'UOM':_0x566ff1(0x1af)}}]);_0xeb2e55[_0x566ff1(0x198)]>0x0&&_0x42842f[_0x566ff1(0x1cd)][_0xf1d6d7['invoice']][_0x566ff1(0x1bb)](..._0xeb2e55);}));})),_0x3797bb[_0x2a66bb(0x191)]({'purchases_warehouse':_0x42842f,'data_sales':_0x42842f[_0x2a66bb(0x1b9)],'data_adjustment':_0x42842f['data_adjustment'],'data_transfer':_0x42842f[_0x2a66bb(0x1cd)]});}else{var _0x42842f=await purchases[_0x2a66bb(0x1d1)]([{'$match':{'warehouse_name':_0x3b1e42,'date':{'$gte':_0x15af76,'$lte':_0x45bb10}}},{'$lookup':{'from':_0x2a66bb(0x184),'let':{'invoice':_0x2a66bb(0x1c6)},'pipeline':[{'$unwind':_0x2a66bb(0x1bd)},{'$match':{'$expr':{'$eq':[_0x2a66bb(0x1e2),_0x2a66bb(0x192)]}}},{'$project':{'_id':_0x2a66bb(0x1a9),'product_name':'$product_details.product_name','product_code':_0x2a66bb(0x1cf),'quantity_available':_0x2a66bb(0x1da),'warehouse_name':_0x2a66bb(0x189),'warehouse_room':_0x2a66bb(0x1be),'invoice':_0x2a66bb(0x192),'production_date':_0x2a66bb(0x17d),'expiry_date':_0x2a66bb(0x180),'UOM':'$product_details.unit'}}],'as':_0x2a66bb(0x1d0)}}]);_0x42842f[_0x2a66bb(0x1b9)]={},await Promise[_0x2a66bb(0x1dc)](_0x42842f['map'](async _0xf981be=>{var _0x1da61e=_0x2a66bb;_0x42842f[_0x1da61e(0x1b9)][_0xf981be[_0x1da61e(0x195)]]=[],await Promise[_0x1da61e(0x1dc)](_0xf981be[_0x1da61e(0x1d0)][_0x1da61e(0x1de)](async _0x2003f3=>{var _0x30b99d=_0x1da61e;const _0x22b7dc=await sales[_0x30b99d(0x1d1)]([{'$unwind':_0x30b99d(0x1d3)},{'$match':{'sale_product.id_transaction_from':_0x2003f3[_0x30b99d(0x18c)][_0x30b99d(0x1c5)](),'sale_product.invoice':_0x2003f3[_0x30b99d(0x195)]}},{'$project':{'_id':'$sale_product._id','product_name':'$sale_product.product_name','product_code':_0x30b99d(0x1dd),'quantity_available':_0x30b99d(0x1d4),'warehouse_name':_0x30b99d(0x1a6),'warehouse_room':_0x30b99d(0x1aa),'product_invoice':_0x30b99d(0x1a4),'invoice':_0x30b99d(0x1c6),'id_transaction_from':_0x30b99d(0x199),'date':_0x30b99d(0x186),'production_date':_0x30b99d(0x19f),'expiry_date':_0x30b99d(0x1c9),'UOM':_0x30b99d(0x1ae)}}]);_0x22b7dc[_0x30b99d(0x198)]>0x0&&_0x42842f[_0x30b99d(0x1b9)][_0xf981be[_0x30b99d(0x195)]]['push'](..._0x22b7dc);}));})),_0x42842f[_0x2a66bb(0x1b9)]=_0x42842f[_0x2a66bb(0x1b9)],_0x42842f[_0x2a66bb(0x1ba)]={},await Promise[_0x2a66bb(0x1dc)](_0x42842f[_0x2a66bb(0x1de)](async _0x178145=>{var _0x2a2221=_0x2a66bb;_0x42842f[_0x2a2221(0x1ba)][_0x178145[_0x2a2221(0x195)]]=[],await Promise[_0x2a2221(0x1dc)](_0x178145[_0x2a2221(0x1d0)][_0x2a2221(0x1de)](async _0x32abee=>{var _0x213fd5=_0x2a2221;const _0x654e5c=await adjustment[_0x213fd5(0x1d1)]([{'$unwind':'$product'},{'$match':{'product.id_transaction_from':_0x32abee[_0x213fd5(0x18c)]['valueOf'](),'product.invoice':_0x32abee[_0x213fd5(0x195)]}},{'$project':{'_id':_0x213fd5(0x1ca),'product_name':_0x213fd5(0x1b1),'product_code':'$product.product_code','quantity_available':'$product.new_adjust_qty','warehouse_name':_0x213fd5(0x1a6),'warehouse_room':_0x213fd5(0x183),'product_invoice':_0x213fd5(0x1d2),'invoice':_0x213fd5(0x1c6),'id_transaction_from':_0x213fd5(0x1a7),'date':_0x213fd5(0x186),'production_date':_0x213fd5(0x1d8),'expiry_date':_0x213fd5(0x1b3),'UOM':'$product.unit'}}]);_0x654e5c[_0x213fd5(0x198)]>0x0&&_0x42842f['data_adjustment'][_0x178145['invoice']]['push'](..._0x654e5c);}));})),_0x42842f[_0x2a66bb(0x1cd)]={},await Promise[_0x2a66bb(0x1dc)](_0x42842f[_0x2a66bb(0x1de)](async _0x9855f4=>{var _0x34fa94=_0x2a66bb;_0x42842f[_0x34fa94(0x1cd)][_0x9855f4[_0x34fa94(0x195)]]=[],await Promise[_0x34fa94(0x1dc)](_0x9855f4[_0x34fa94(0x1d0)]['map'](async _0x4fc1e9=>{var _0x42dcba=_0x34fa94;const _0x37399f=await transfers[_0x42dcba(0x1d1)]([{'$unwind':'$product'},{'$match':{'product.id_transaction_id':_0x4fc1e9[_0x42dcba(0x18c)][_0x42dcba(0x1c5)](),'product.To_invoice':_0x4fc1e9[_0x42dcba(0x195)]}},{'$project':{'_id':_0x42dcba(0x1ca),'product_name':_0x42dcba(0x1b1),'product_code':_0x42dcba(0x1df),'quantity_available':'$product.to_quantity','warehouse_name':_0x42dcba(0x18e),'warehouse_room':_0x42dcba(0x183),'product_invoice':'$product.to_room_name','invoice':_0x42dcba(0x1c6),'id_transaction_from':_0x42dcba(0x1a8),'date':_0x42dcba(0x186),'production_date':_0x42dcba(0x1d8),'expiry_date':'$product.expiry_date','UOM':_0x42dcba(0x1af)}}]);_0x37399f['length']>0x0&&_0x42842f[_0x42dcba(0x1cd)][_0x9855f4[_0x42dcba(0x195)]][_0x42dcba(0x1bb)](..._0x37399f);}));})),_0x3797bb[_0x2a66bb(0x191)]({'purchases_warehouse':_0x42842f,'data_sales':_0x42842f[_0x2a66bb(0x1b9)],'data_adjustment':_0x42842f[_0x2a66bb(0x1ba)],'data_transfer':_0x42842f[_0x2a66bb(0x1cd)]});}}else{if(_0x3b1e42==_0x2a66bb(0x1dc)){var _0x42842f=await purchases_finished[_0x2a66bb(0x1d1)]([{'$match':{'date':{'$gte':_0x15af76,'$lte':_0x45bb10}}},{'$lookup':{'from':_0x2a66bb(0x184),'let':{'invoice':'$invoice'},'pipeline':[{'$unwind':_0x2a66bb(0x1bd)},{'$match':{'$expr':{'$eq':[_0x2a66bb(0x1e2),'$product_details.invoice']}}},{'$project':{'_id':_0x2a66bb(0x1a9),'product_name':_0x2a66bb(0x1ab),'product_code':_0x2a66bb(0x1cf),'quantity_available':_0x2a66bb(0x1da),'warehouse_name':_0x2a66bb(0x189),'warehouse_room':_0x2a66bb(0x1be),'invoice':_0x2a66bb(0x192),'production_date':_0x2a66bb(0x17d),'expiry_date':_0x2a66bb(0x180),'UOM':_0x2a66bb(0x1cb)}}],'as':_0x2a66bb(0x1d0)}}]);_0x42842f[_0x2a66bb(0x1b9)]={},await Promise[_0x2a66bb(0x1dc)](_0x42842f[_0x2a66bb(0x1de)](async _0x194af4=>{var _0x5bdc8a=_0x2a66bb;_0x42842f[_0x5bdc8a(0x1b9)][_0x194af4['invoice']]=[],await Promise['all'](_0x194af4[_0x5bdc8a(0x1d0)][_0x5bdc8a(0x1de)](async _0x2a6286=>{var _0x70815d=_0x5bdc8a;const _0x33781d=await sales_finished['aggregate']([{'$unwind':_0x70815d(0x1d3)},{'$match':{'sale_product.id_transaction_from':_0x2a6286['_id'][_0x70815d(0x1c5)](),'sale_product.invoice':_0x2a6286[_0x70815d(0x195)]}},{'$project':{'_id':'$sale_product._id','product_name':_0x70815d(0x1c0),'product_code':'$sale_product.product_code','quantity_available':_0x70815d(0x1d4),'warehouse_name':'$warehouse_name','warehouse_room':_0x70815d(0x1aa),'product_invoice':_0x70815d(0x1a4),'invoice':'$invoice','id_transaction_from':_0x70815d(0x199),'date':_0x70815d(0x186),'production_date':_0x70815d(0x19f),'expiry_date':'$sale_product.expiry_date','UOM':'$sale_product.unit'}}]);_0x33781d[_0x70815d(0x198)]>0x0&&_0x42842f[_0x70815d(0x1b9)][_0x194af4[_0x70815d(0x195)]][_0x70815d(0x1bb)](..._0x33781d);}));})),_0x42842f[_0x2a66bb(0x1b9)]=_0x42842f[_0x2a66bb(0x1b9)],_0x42842f[_0x2a66bb(0x1ba)]={},await Promise[_0x2a66bb(0x1dc)](_0x42842f[_0x2a66bb(0x1de)](async _0x59d74f=>{var _0x194ff2=_0x2a66bb;_0x42842f[_0x194ff2(0x1ba)][_0x59d74f[_0x194ff2(0x195)]]=[],await Promise[_0x194ff2(0x1dc)](_0x59d74f[_0x194ff2(0x1d0)]['map'](async _0x344f3c=>{var _0x12eb64=_0x194ff2;const _0xaa7960=await adjustment_finished[_0x12eb64(0x1d1)]([{'$unwind':'$product'},{'$match':{'product.id_transaction_from':_0x344f3c[_0x12eb64(0x18c)][_0x12eb64(0x1c5)](),'product.invoice':_0x344f3c[_0x12eb64(0x195)]}},{'$project':{'_id':_0x12eb64(0x1ca),'product_name':_0x12eb64(0x1b1),'product_code':_0x12eb64(0x1df),'quantity_available':_0x12eb64(0x1c3),'warehouse_name':_0x12eb64(0x1a6),'warehouse_room':'$product.room_names','product_invoice':_0x12eb64(0x1d2),'invoice':_0x12eb64(0x1c6),'id_transaction_from':_0x12eb64(0x1a7),'date':_0x12eb64(0x186),'production_date':_0x12eb64(0x1d8),'expiry_date':_0x12eb64(0x1b3),'UOM':_0x12eb64(0x1af)}}]);_0xaa7960[_0x12eb64(0x198)]>0x0&&_0x42842f['data_adjustment'][_0x59d74f[_0x12eb64(0x195)]][_0x12eb64(0x1bb)](..._0xaa7960);}));})),_0x42842f[_0x2a66bb(0x1cd)]={},await Promise[_0x2a66bb(0x1dc)](_0x42842f['map'](async _0x535cef=>{var _0x373c75=_0x2a66bb;_0x42842f[_0x373c75(0x1cd)][_0x535cef['invoice']]=[],await Promise[_0x373c75(0x1dc)](_0x535cef['warehouse_data'][_0x373c75(0x1de)](async _0x55d60a=>{var _0x1fb1e6=_0x373c75;const _0x500a18=await transfers_finished[_0x1fb1e6(0x1d1)]([{'$unwind':_0x1fb1e6(0x1db)},{'$match':{'product.id_transaction':_0x55d60a[_0x1fb1e6(0x18c)][_0x1fb1e6(0x1c5)](),'product.from_invoice':_0x55d60a[_0x1fb1e6(0x195)]}},{'$project':{'_id':_0x1fb1e6(0x1ca),'product_name':'$product.product_name','product_code':_0x1fb1e6(0x1df),'quantity_available':_0x1fb1e6(0x188),'warehouse_name':_0x1fb1e6(0x18e),'warehouse_room':'$product.room_names','product_invoice':'$product.to_room_name','invoice':_0x1fb1e6(0x1c6),'id_transaction_from':'$product.id_transaction','date':_0x1fb1e6(0x186),'production_date':_0x1fb1e6(0x1d8),'expiry_date':_0x1fb1e6(0x1b3),'UOM':_0x1fb1e6(0x1af)}}]);_0x500a18['length']>0x0&&_0x42842f[_0x1fb1e6(0x1cd)][_0x535cef[_0x1fb1e6(0x195)]]['push'](..._0x500a18);}));})),_0x3797bb[_0x2a66bb(0x191)]({'purchases_warehouse':_0x42842f,'data_sales':_0x42842f['data_sales'],'data_adjustment':_0x42842f['data_adjustment'],'data_transfer':_0x42842f[_0x2a66bb(0x1cd)]});}else{var _0x42842f=await purchases_finished[_0x2a66bb(0x1d1)]([{'$match':{'warehouse_name':_0x3b1e42,'date':{'$gte':_0x15af76,'$lte':_0x45bb10}}},{'$lookup':{'from':_0x2a66bb(0x184),'let':{'invoice':'$invoice'},'pipeline':[{'$unwind':_0x2a66bb(0x1bd)},{'$match':{'$expr':{'$eq':[_0x2a66bb(0x1e2),_0x2a66bb(0x192)]}}},{'$project':{'_id':_0x2a66bb(0x1a9),'product_name':_0x2a66bb(0x1ab),'product_code':_0x2a66bb(0x1cf),'quantity_available':_0x2a66bb(0x1da),'warehouse_name':_0x2a66bb(0x189),'warehouse_room':_0x2a66bb(0x1be),'invoice':'$product_details.invoice','production_date':_0x2a66bb(0x17d),'expiry_date':'$product_details.expiry_date','UOM':_0x2a66bb(0x1cb)}}],'as':_0x2a66bb(0x1d0)}}]);_0x42842f[_0x2a66bb(0x1b9)]={},await Promise[_0x2a66bb(0x1dc)](_0x42842f[_0x2a66bb(0x1de)](async _0x392c47=>{var _0x2f9c6a=_0x2a66bb;_0x42842f[_0x2f9c6a(0x1b9)][_0x392c47[_0x2f9c6a(0x195)]]=[],await Promise[_0x2f9c6a(0x1dc)](_0x392c47['warehouse_data'][_0x2f9c6a(0x1de)](async _0x2c6f4e=>{var _0x508552=_0x2f9c6a;const _0x359afa=await sales_finished[_0x508552(0x1d1)]([{'$unwind':'$sale_product'},{'$match':{'sale_product.id_transaction_from':_0x2c6f4e['_id'][_0x508552(0x1c5)](),'sale_product.invoice':_0x2c6f4e[_0x508552(0x195)]}},{'$project':{'_id':_0x508552(0x1bc),'product_name':'$sale_product.product_name','product_code':'$sale_product.product_code','quantity_available':_0x508552(0x1d4),'warehouse_name':'$warehouse_name','warehouse_room':_0x508552(0x1aa),'product_invoice':'$sale_product.invoice','invoice':_0x508552(0x1c6),'id_transaction_from':'$sale_product.id_transaction_from','date':'$date','production_date':_0x508552(0x19f),'expiry_date':_0x508552(0x1c9),'UOM':_0x508552(0x1ae)}}]);_0x359afa['length']>0x0&&_0x42842f[_0x508552(0x1b9)][_0x392c47[_0x508552(0x195)]][_0x508552(0x1bb)](..._0x359afa);}));})),_0x42842f[_0x2a66bb(0x1b9)]=_0x42842f['data_sales'],_0x42842f[_0x2a66bb(0x1ba)]={},await Promise[_0x2a66bb(0x1dc)](_0x42842f[_0x2a66bb(0x1de)](async _0x44806b=>{var _0x345510=_0x2a66bb;_0x42842f[_0x345510(0x1ba)][_0x44806b['invoice']]=[],await Promise['all'](_0x44806b[_0x345510(0x1d0)][_0x345510(0x1de)](async _0x43634b=>{var _0x276a6b=_0x345510;const _0x31554c=await adjustment_finished['aggregate']([{'$unwind':_0x276a6b(0x1db)},{'$match':{'product.id_transaction_from':_0x43634b['_id'][_0x276a6b(0x1c5)](),'product.invoice':_0x43634b[_0x276a6b(0x195)]}},{'$project':{'_id':_0x276a6b(0x1ca),'product_name':_0x276a6b(0x1b1),'product_code':_0x276a6b(0x1df),'quantity_available':'$product.new_adjust_qty','warehouse_name':_0x276a6b(0x1a6),'warehouse_room':_0x276a6b(0x183),'product_invoice':_0x276a6b(0x1d2),'invoice':_0x276a6b(0x1c6),'id_transaction_from':_0x276a6b(0x1a7),'date':_0x276a6b(0x186),'production_date':_0x276a6b(0x1d8),'expiry_date':_0x276a6b(0x1b3),'UOM':_0x276a6b(0x1af)}}]);_0x31554c[_0x276a6b(0x198)]>0x0&&_0x42842f[_0x276a6b(0x1ba)][_0x44806b[_0x276a6b(0x195)]]['push'](..._0x31554c);}));})),_0x42842f[_0x2a66bb(0x1cd)]={},await Promise[_0x2a66bb(0x1dc)](_0x42842f[_0x2a66bb(0x1de)](async _0x6a62e6=>{var _0x7142f8=_0x2a66bb;_0x42842f[_0x7142f8(0x1cd)][_0x6a62e6['invoice']]=[],await Promise[_0x7142f8(0x1dc)](_0x6a62e6[_0x7142f8(0x1d0)][_0x7142f8(0x1de)](async _0x597c6d=>{var _0x2d7094=_0x7142f8;const _0x3fc6f9=await transfers_finished[_0x2d7094(0x1d1)]([{'$unwind':_0x2d7094(0x1db)},{'$match':{'product.id_transaction':_0x597c6d['_id'][_0x2d7094(0x1c5)](),'product.from_invoice':_0x597c6d[_0x2d7094(0x195)]}},{'$project':{'_id':_0x2d7094(0x1ca),'product_name':_0x2d7094(0x1b1),'product_code':_0x2d7094(0x1df),'quantity_available':_0x2d7094(0x188),'warehouse_name':_0x2d7094(0x18e),'warehouse_room':_0x2d7094(0x183),'product_invoice':_0x2d7094(0x19b),'invoice':_0x2d7094(0x1c6),'id_transaction_from':_0x2d7094(0x1c8),'date':_0x2d7094(0x186),'production_date':_0x2d7094(0x1d8),'expiry_date':_0x2d7094(0x1b3),'UOM':'$product.unit'}}]);_0x3fc6f9[_0x2d7094(0x198)]>0x0&&_0x42842f[_0x2d7094(0x1cd)][_0x6a62e6[_0x2d7094(0x195)]][_0x2d7094(0x1bb)](..._0x3fc6f9);}));})),_0x3797bb[_0x2a66bb(0x191)]({'purchases_warehouse':_0x42842f,'data_sales':_0x42842f[_0x2a66bb(0x1b9)],'data_adjustment':_0x42842f['data_adjustment'],'data_transfer':_0x42842f['data_transfer']});}}}),router[a0_0x4b6060(0x1a2)](a0_0x4b6060(0x1ad),auth,async(_0x23a5e3,_0x20e9c7)=>{var _0x477485=a0_0x4b6060;try{const _0x33dc71=_0x23a5e3[_0x477485(0x1d6)]['id'];var _0x4a0ddf=await purchases_finished[_0x477485(0x1c7)](_0x33dc71);const _0x14e629=await master_shop[_0x477485(0x1ac)](),_0x5d33a8=_0x23a5e3[_0x477485(0x17f)],_0x3fff2f=await profile[_0x477485(0x1b6)]({'email':_0x5d33a8[_0x477485(0x1a0)]});if(_0x14e629[0x0][_0x477485(0x1b0)]=='English\x20(US)')var _0x47350c=users[_0x477485(0x19c)];else{if(_0x14e629[0x0][_0x477485(0x1b0)]==_0x477485(0x190))var _0x47350c=users['Hindi'];else{if(_0x14e629[0x0][_0x477485(0x1b0)]==_0x477485(0x1a5))var _0x47350c=users['German'];else{if(_0x14e629[0x0][_0x477485(0x1b0)]=='Spanish')var _0x47350c=users['Spanish'];else{if(_0x14e629[0x0][_0x477485(0x1b0)]==_0x477485(0x17b))var _0x47350c=users[_0x477485(0x17b)];else{if(_0x14e629[0x0][_0x477485(0x1b0)]=='Portuguese\x20(BR)')var _0x47350c=users[_0x477485(0x17c)];else{if(_0x14e629[0x0][_0x477485(0x1b0)]==_0x477485(0x1d7))var _0x47350c=users['Chinese'];else{if(_0x14e629[0x0][_0x477485(0x1b0)]==_0x477485(0x1b5))var _0x47350c=users[_0x477485(0x194)];}}}}}}}_0x20e9c7[_0x477485(0x1bf)](_0x477485(0x179),{'success':_0x23a5e3[_0x477485(0x1ce)](_0x477485(0x1e3)),'errors':_0x23a5e3[_0x477485(0x1ce)](_0x477485(0x1b4)),'master_shop':_0x14e629,'profile':_0x3fff2f,'role':_0x5d33a8,'language':_0x47350c,'data':_0x4a0ddf});}catch(_0x542962){_0x20e9c7[_0x477485(0x191)](_0x542962);}}),router[a0_0x4b6060(0x1a2)](a0_0x4b6060(0x19e),auth,async(_0x91b067,_0x42d352)=>{var _0x3fb456=a0_0x4b6060;try{const _0x2658af=_0x91b067['params']['id'];var _0x4c3a7c=await sales_finished[_0x3fb456(0x1c7)](_0x2658af);const _0x3b9f8b=await master_shop[_0x3fb456(0x1ac)](),_0x407b21=_0x91b067[_0x3fb456(0x17f)],_0x4e4de2=await profile[_0x3fb456(0x1b6)]({'email':_0x407b21[_0x3fb456(0x1a0)]});if(_0x3b9f8b[0x0][_0x3fb456(0x1b0)]==_0x3fb456(0x1d9))var _0x52c4a7=users[_0x3fb456(0x19c)];else{if(_0x3b9f8b[0x0]['language']==_0x3fb456(0x190))var _0x52c4a7=users[_0x3fb456(0x190)];else{if(_0x3b9f8b[0x0][_0x3fb456(0x1b0)]==_0x3fb456(0x1a5))var _0x52c4a7=users[_0x3fb456(0x1a5)];else{if(_0x3b9f8b[0x0][_0x3fb456(0x1b0)]=='Spanish')var _0x52c4a7=users[_0x3fb456(0x1a1)];else{if(_0x3b9f8b[0x0][_0x3fb456(0x1b0)]=='French')var _0x52c4a7=users[_0x3fb456(0x17b)];else{if(_0x3b9f8b[0x0]['language']==_0x3fb456(0x19d))var _0x52c4a7=users[_0x3fb456(0x17c)];else{if(_0x3b9f8b[0x0][_0x3fb456(0x1b0)]==_0x3fb456(0x1d7))var _0x52c4a7=users[_0x3fb456(0x1d7)];else{if(_0x3b9f8b[0x0][_0x3fb456(0x1b0)]=='Arabic\x20(ae)')var _0x52c4a7=users['Arabic'];}}}}}}}_0x42d352[_0x3fb456(0x1bf)]('view_og_table',{'success':_0x91b067[_0x3fb456(0x1ce)]('success'),'errors':_0x91b067[_0x3fb456(0x1ce)]('errors'),'master_shop':_0x3b9f8b,'profile':_0x4e4de2,'role':_0x407b21,'language':_0x52c4a7,'data':_0x4c3a7c});}catch(_0x15a33e){_0x42d352[_0x3fb456(0x191)](_0x15a33e);}}),router[a0_0x4b6060(0x1a2)](a0_0x4b6060(0x1c2),auth,async(_0xa29d3e,_0x228cc9)=>{var _0xc1e926=a0_0x4b6060;try{const _0xf2eb1b=_0xa29d3e[_0xc1e926(0x1d6)]['id'];var _0x584940=await transfers_finished['findById'](_0xf2eb1b);const _0x50d601=await master_shop['find'](),_0x1e050b=_0xa29d3e['user'],_0x4ae252=await profile[_0xc1e926(0x1b6)]({'email':_0x1e050b[_0xc1e926(0x1a0)]});if(_0x50d601[0x0][_0xc1e926(0x1b0)]==_0xc1e926(0x1d9))var _0x22e777=users[_0xc1e926(0x19c)];else{if(_0x50d601[0x0][_0xc1e926(0x1b0)]==_0xc1e926(0x190))var _0x22e777=users[_0xc1e926(0x190)];else{if(_0x50d601[0x0]['language']==_0xc1e926(0x1a5))var _0x22e777=users[_0xc1e926(0x1a5)];else{if(_0x50d601[0x0][_0xc1e926(0x1b0)]=='Spanish')var _0x22e777=users[_0xc1e926(0x1a1)];else{if(_0x50d601[0x0][_0xc1e926(0x1b0)]==_0xc1e926(0x17b))var _0x22e777=users[_0xc1e926(0x17b)];else{if(_0x50d601[0x0][_0xc1e926(0x1b0)]==_0xc1e926(0x19d))var _0x22e777=users[_0xc1e926(0x17c)];else{if(_0x50d601[0x0][_0xc1e926(0x1b0)]=='Chinese')var _0x22e777=users[_0xc1e926(0x1d7)];else{if(_0x50d601[0x0]['language']==_0xc1e926(0x1b5))var _0x22e777=users['Arabic'];}}}}}}}_0x228cc9[_0xc1e926(0x1bf)](_0xc1e926(0x18d),{'success':_0xa29d3e['flash']('success'),'errors':_0xa29d3e[_0xc1e926(0x1ce)]('errors'),'master_shop':_0x50d601,'profile':_0x4ae252,'role':_0x1e050b,'language':_0x22e777,'data':_0x584940});}catch(_0x1ec0f6){_0x228cc9[_0xc1e926(0x191)](_0x1ec0f6);}}),router[a0_0x4b6060(0x1a2)](a0_0x4b6060(0x1e1),auth,async(_0xfda85d,_0x490f73)=>{var _0x40a0b2=a0_0x4b6060;try{const {username:_0x3abe45,email:_0x282d5b,role:_0x39680f}=_0xfda85d[_0x40a0b2(0x17f)],_0x4d81fa=_0xfda85d[_0x40a0b2(0x17f)],_0x1e9414=await profile[_0x40a0b2(0x1b6)]({'email':_0x4d81fa[_0x40a0b2(0x1a0)]}),_0x11c066=await master_shop[_0x40a0b2(0x1ac)](),_0x4b0228=await warehouse[_0x40a0b2(0x1d1)]([{'$match':{'status':'Enabled','warehouse_category':_0x40a0b2(0x1c1)}},{'$group':{'_id':'$name','name':{'$first':_0x40a0b2(0x189)}}}]);if(_0x11c066[0x0]['language']==_0x40a0b2(0x1d9))var _0x1f3c19=users['English'];else{if(_0x11c066[0x0]['language']==_0x40a0b2(0x190))var _0x1f3c19=users['Hindi'];else{if(_0x11c066[0x0][_0x40a0b2(0x1b0)]==_0x40a0b2(0x1a5))var _0x1f3c19=users[_0x40a0b2(0x1a5)];else{if(_0x11c066[0x0]['language']==_0x40a0b2(0x1a1))var _0x1f3c19=users[_0x40a0b2(0x1a1)];else{if(_0x11c066[0x0][_0x40a0b2(0x1b0)]==_0x40a0b2(0x17b))var _0x1f3c19=users[_0x40a0b2(0x17b)];else{if(_0x11c066[0x0][_0x40a0b2(0x1b0)]==_0x40a0b2(0x19d))var _0x1f3c19=users[_0x40a0b2(0x17c)];else{if(_0x11c066[0x0][_0x40a0b2(0x1b0)]==_0x40a0b2(0x1d7))var _0x1f3c19=users[_0x40a0b2(0x1d7)];else{if(_0x11c066[0x0][_0x40a0b2(0x1b0)]==_0x40a0b2(0x1b5))var _0x1f3c19=users[_0x40a0b2(0x194)];}}}}}}}_0x490f73[_0x40a0b2(0x1bf)]('transaction_finished_raw',{'success':_0xfda85d['flash'](_0x40a0b2(0x1e3)),'errors':_0xfda85d[_0x40a0b2(0x1ce)](_0x40a0b2(0x1b4)),'role':_0x4d81fa,'profile':_0x1e9414,'master_shop':_0x11c066,'dataProcess':_0x4b0228,'language':_0x1f3c19});}catch(_0x5eb6dc){console[_0x40a0b2(0x18f)](_0x5eb6dc);}}),module[a0_0x4b6060(0x1e0)]=router;