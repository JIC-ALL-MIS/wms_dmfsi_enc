const a0_0x52b2aa=a0_0x59b4;function a0_0x59b4(_0x4e2078,_0x5b0f02){const _0x5eda3a=a0_0x5eda();return a0_0x59b4=function(_0x59b428,_0x48d11e){_0x59b428=_0x59b428-0x194;let _0x454084=_0x5eda3a[_0x59b428];return _0x454084;},a0_0x59b4(_0x4e2078,_0x5b0f02);}function a0_0x5eda(){const _0x4895f5=['247751pEHecq','express','844555pIiYvl','/checking','flash','\x20documents\x20updated','status','$product.invoice','$product.product_name','data_sales','2655DpvpuX','$product_details._id','27590gghHCu','$product.new_adjust_qty','../../models/all_models','map','$product','modifiedCount','$room','data_adjustment','$sale_product','2253848vBbIsY','valueOf','$product._id','$product.id_transaction_from','$product.room_names','_id','length','6NNeXEW','errors','log','monitor','all','$sale_product.id_transaction_from','$sale_product.product_code','/warehouse_monitor','$product_details.invoice','$product_details.product_code','json','get','updateMany','warehouses','418860ZSDNfJ','$product.to_quantity','$to_warehouse','$sale_product.product_name','message','aggregate','$invoice','$product.id_transaction_id','exports','2324961bnAOUK','128uBXpAC','data_transfer','success','135078TNIQzU','$product_details','$$invoice','table\x20page','Router','$sale_product.quantity','$name','$product.product_code','14800005047429','push','$warehouse_name','invoice','warehouse_data'];a0_0x5eda=function(){return _0x4895f5;};return a0_0x5eda();}(function(_0x375c89,_0x29cfde){const _0x23c303=a0_0x59b4,_0x1e6289=_0x375c89();while(!![]){try{const _0x424360=-parseInt(_0x23c303(0x1cc))/0x1+parseInt(_0x23c303(0x195))/0x2+parseInt(_0x23c303(0x1d5))/0x3+parseInt(_0x23c303(0x1b7))/0x4+-parseInt(_0x23c303(0x1a4))/0x5*(parseInt(_0x23c303(0x1be))/0x6)+parseInt(_0x23c303(0x1a2))/0x7*(parseInt(_0x23c303(0x1d6))/0x8)+-parseInt(_0x23c303(0x1ac))/0x9*(parseInt(_0x23c303(0x1ae))/0xa);if(_0x424360===_0x29cfde)break;else _0x1e6289['push'](_0x1e6289['shift']());}catch(_0x1d9cfe){_0x1e6289['push'](_0x1e6289['shift']());}}}(a0_0x5eda,0x8b4e8));const express=require(a0_0x52b2aa(0x1a3)),app=express(),router=express[a0_0x52b2aa(0x199)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings,purchases_finished,sales_finished,adjustment_finished,transfers,transfers_finished,sales,adjustment}=require(a0_0x52b2aa(0x1b0));router['get']('/negative',async(_0xafd973,_0x1e20cc)=>{const _0xf138a9=a0_0x52b2aa;try{const _0xd1e83=await warehouse[_0xf138a9(0x1ca)]({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x1e20cc['json']({'status':_0xd1e83[_0xf138a9(0x1b3)]+_0xf138a9(0x1a7)});}catch(_0x529643){console[_0xf138a9(0x1c0)](_0xf138a9(0x198),_0x529643),_0x1e20cc[_0xf138a9(0x1a8)](0xc8)[_0xf138a9(0x1c8)]({'message':_0x529643['message']});}}),router[a0_0x52b2aa(0x1c9)](a0_0x52b2aa(0x1a5),async(_0x1a6556,_0x9505fa)=>{const _0x4eed3d=a0_0x52b2aa;try{const _0x12e499=await warehouse[_0x4eed3d(0x1d1)]([{'$unwind':'$product_details'},{'$match':{'product_details.invoice':'INCF-52068316','product_details.primary_code':_0x4eed3d(0x19d)}},{'$group':{'_id':{'name':_0x4eed3d(0x19b),'room':_0x4eed3d(0x1b4)},'products':{'$push':_0x4eed3d(0x196)}}}]);_0x9505fa[_0x4eed3d(0x1c8)](_0x12e499);}catch(_0x22af56){console['log'](_0x4eed3d(0x198),_0x22af56),_0x9505fa[_0x4eed3d(0x1a8)](0xc8)['json']({'message':_0x22af56[_0x4eed3d(0x1d0)]});}}),router[a0_0x52b2aa(0x1c9)](a0_0x52b2aa(0x1c5),async(_0x212f27,_0x4ef06f)=>{const _0x776765=a0_0x52b2aa;_0x4ef06f['render'](_0x776765(0x1c1),{'success':_0x212f27['flash'](_0x776765(0x194)),'errors':_0x212f27[_0x776765(0x1a6)](_0x776765(0x1bf))});}),router['get']('/join',async(_0x379ea0,_0xb8dbc1)=>{const _0x33d305=a0_0x52b2aa;var _0x7cff96=await purchases['aggregate']([{'$lookup':{'from':_0x33d305(0x1cb),'let':{'invoice':_0x33d305(0x1d2)},'pipeline':[{'$unwind':'$product_details'},{'$match':{'$expr':{'$eq':[_0x33d305(0x197),_0x33d305(0x1c6)]}}},{'$project':{'_id':_0x33d305(0x1ad),'product_name':'$product_details.product_name','product_code':_0x33d305(0x1c7),'quantity_available':'$product_details.product_stock','warehouse_name':_0x33d305(0x19b),'warehouse_room':'$room','invoice':_0x33d305(0x1c6)}}],'as':_0x33d305(0x1a1)}}]);_0x7cff96[_0x33d305(0x1ab)]={},await Promise['all'](_0x7cff96[_0x33d305(0x1b1)](async _0x28c64f=>{const _0x202797=_0x33d305;_0x7cff96[_0x202797(0x1ab)][_0x28c64f[_0x202797(0x1a0)]]=[],await Promise[_0x202797(0x1c2)](_0x28c64f[_0x202797(0x1a1)][_0x202797(0x1b1)](async _0x26fe40=>{const _0x35c530=_0x202797,_0x5a56b5=await sales[_0x35c530(0x1d1)]([{'$unwind':_0x35c530(0x1b6)},{'$match':{'sale_product.id_transaction_from':_0x26fe40[_0x35c530(0x1bc)]['valueOf'](),'sale_product.invoice':_0x26fe40['invoice']}},{'$project':{'_id':'$sale_product._id','product_name':_0x35c530(0x1cf),'product_code':_0x35c530(0x1c4),'quantity_available':_0x35c530(0x19a),'warehouse_name':_0x35c530(0x19f),'warehouse_room':'$sale_product.room_name','product_invoice':'$sale_product.invoice','invoice':'$invoice','id_transaction_from':_0x35c530(0x1c3)}}]);_0x5a56b5[_0x35c530(0x1bd)]>0x0&&_0x7cff96[_0x35c530(0x1ab)][_0x28c64f[_0x35c530(0x1a0)]]['push'](..._0x5a56b5);}));})),_0x7cff96[_0x33d305(0x1ab)]=_0x7cff96[_0x33d305(0x1ab)],_0x7cff96[_0x33d305(0x1b5)]={},await Promise[_0x33d305(0x1c2)](_0x7cff96[_0x33d305(0x1b1)](async _0xc1b298=>{const _0x1e8ea5=_0x33d305;_0x7cff96[_0x1e8ea5(0x1b5)][_0xc1b298[_0x1e8ea5(0x1a0)]]=[],await Promise['all'](_0xc1b298[_0x1e8ea5(0x1a1)][_0x1e8ea5(0x1b1)](async _0xec8d17=>{const _0x12e4d2=_0x1e8ea5,_0x2312ac=await adjustment['aggregate']([{'$unwind':_0x12e4d2(0x1b2)},{'$match':{'product.id_transaction_from':_0xec8d17[_0x12e4d2(0x1bc)][_0x12e4d2(0x1b8)](),'product.invoice':_0xec8d17['invoice']}},{'$project':{'_id':_0x12e4d2(0x1b9),'product_name':_0x12e4d2(0x1aa),'product_code':_0x12e4d2(0x19c),'quantity_available':_0x12e4d2(0x1af),'warehouse_name':'$warehouse_name','warehouse_room':_0x12e4d2(0x1bb),'product_invoice':_0x12e4d2(0x1a9),'invoice':_0x12e4d2(0x1d2),'id_transaction_from':_0x12e4d2(0x1ba)}}]);_0x2312ac[_0x12e4d2(0x1bd)]>0x0&&_0x7cff96[_0x12e4d2(0x1b5)][_0xc1b298[_0x12e4d2(0x1a0)]][_0x12e4d2(0x19e)](..._0x2312ac);}));})),_0x7cff96[_0x33d305(0x1d7)]={},await Promise['all'](_0x7cff96[_0x33d305(0x1b1)](async _0x3568e5=>{const _0xe765b6=_0x33d305;_0x7cff96[_0xe765b6(0x1d7)][_0x3568e5[_0xe765b6(0x1a0)]]=[],await Promise[_0xe765b6(0x1c2)](_0x3568e5[_0xe765b6(0x1a1)][_0xe765b6(0x1b1)](async _0x814e5c=>{const _0x14c9a8=_0xe765b6,_0x491353=await transfers[_0x14c9a8(0x1d1)]([{'$unwind':_0x14c9a8(0x1b2)},{'$match':{'product.id_transaction_id':_0x814e5c[_0x14c9a8(0x1bc)][_0x14c9a8(0x1b8)](),'product.To_invoice':_0x814e5c['invoice']}},{'$project':{'_id':_0x14c9a8(0x1b9),'product_name':'$product.product_name','product_code':'$product.product_code','quantity_available':_0x14c9a8(0x1cd),'warehouse_name':_0x14c9a8(0x1ce),'warehouse_room':_0x14c9a8(0x1bb),'product_invoice':'$product.to_room_name','invoice':'$invoice','id_transaction_id':_0x14c9a8(0x1d3)}}]);console[_0x14c9a8(0x1c0)](_0x491353),_0x491353[_0x14c9a8(0x1bd)]>0x0&&_0x7cff96['data_transfer'][_0x3568e5['invoice']][_0x14c9a8(0x19e)](..._0x491353);}));})),_0xb8dbc1['json']({'purchases_warehouse':_0x7cff96,'data_sales':_0x7cff96[_0x33d305(0x1ab)],'data_adjustment':_0x7cff96[_0x33d305(0x1b5)],'data_transfer':_0x7cff96[_0x33d305(0x1d7)]});}),module[a0_0x52b2aa(0x1d4)]=router;