function a0_0x3cdb(_0xbda003,_0x482e0c){const _0x39e269=a0_0x39e2();return a0_0x3cdb=function(_0x3cdb8b,_0x1da155){_0x3cdb8b=_0x3cdb8b-0x134;let _0xb7fe34=_0x39e269[_0x3cdb8b];return _0xb7fe34;},a0_0x3cdb(_0xbda003,_0x482e0c);}const a0_0x2a6bc6=a0_0x3cdb;(function(_0x2e6249,_0x1f1733){const _0xde5a89=a0_0x3cdb,_0x58cf2e=_0x2e6249();while(!![]){try{const _0x450f9c=-parseInt(_0xde5a89(0x140))/0x1*(parseInt(_0xde5a89(0x159))/0x2)+-parseInt(_0xde5a89(0x135))/0x3+-parseInt(_0xde5a89(0x13d))/0x4*(-parseInt(_0xde5a89(0x175))/0x5)+-parseInt(_0xde5a89(0x178))/0x6*(-parseInt(_0xde5a89(0x15e))/0x7)+parseInt(_0xde5a89(0x174))/0x8*(-parseInt(_0xde5a89(0x142))/0x9)+-parseInt(_0xde5a89(0x179))/0xa*(parseInt(_0xde5a89(0x173))/0xb)+parseInt(_0xde5a89(0x136))/0xc;if(_0x450f9c===_0x1f1733)break;else _0x58cf2e['push'](_0x58cf2e['shift']());}catch(_0x26d43f){_0x58cf2e['push'](_0x58cf2e['shift']());}}}(a0_0x39e2,0xa95c3));function a0_0x39e2(){const _0x398f97=['render','errors','data_adjustment','$product_details._id','aggregate','$product.id_transaction_id','$sale_product.product_code','$sale_product.quantity','$product.product_name','$name','modifiedCount','monitor','$product','19326CCDdGU','$product_details','$product.to_quantity','get','$warehouse_name','1068865CEgnph','express','$product._id','$sale_product.id_transaction_from','warehouses','../../models/all_models','/join','$sale_product','push','warehouse_data','length','$product_details.product_name','$sale_product.product_name','message','$product_details.product_code','$product.to_room_name','$sale_product.room_name','status','$product.invoice','14800005047429','/negative','3870361hUZGDu','32LmjKFs','815dJiXGc','INCF-52068316','success','6eUuUlV','10FufVML','$room','map','\x20documents\x20updated','all','$product.id_transaction_from','$product.product_code','$sale_product.invoice','2251026MFGjkD','21450252zoNsul','/warehouse_monitor','$$invoice','Router','$product.room_names','table\x20page','$product.new_adjust_qty','7452akivpW','data_transfer','$to_warehouse','23MTCjoJ','invoice','507924hVZkgV','json','data_sales','flash','$product_details.invoice','valueOf','$invoice','$sale_product._id','log','_id'];a0_0x39e2=function(){return _0x398f97;};return a0_0x39e2();}const express=require(a0_0x2a6bc6(0x15f)),app=express(),router=express[a0_0x2a6bc6(0x139)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings,purchases_finished,sales_finished,adjustment_finished,transfers,transfers_finished,sales,adjustment}=require(a0_0x2a6bc6(0x163));router[a0_0x2a6bc6(0x15c)](a0_0x2a6bc6(0x172),async(_0x2af6b9,_0x2c9bfa)=>{const _0x346ffd=a0_0x2a6bc6;try{const _0x2f2ec3=await warehouse['updateMany']({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x2c9bfa['json']({'status':_0x2f2ec3[_0x346ffd(0x156)]+_0x346ffd(0x17c)});}catch(_0x14af8b){console[_0x346ffd(0x14a)](_0x346ffd(0x13b),_0x14af8b),_0x2c9bfa[_0x346ffd(0x16f)](0xc8)[_0x346ffd(0x143)]({'message':_0x14af8b[_0x346ffd(0x16b)]});}}),router[a0_0x2a6bc6(0x15c)]('/checking',async(_0xca4ec0,_0x11929a)=>{const _0x1da4d0=a0_0x2a6bc6;try{const _0x4f251b=await warehouse['aggregate']([{'$unwind':_0x1da4d0(0x15a)},{'$match':{'product_details.invoice':_0x1da4d0(0x176),'product_details.primary_code':_0x1da4d0(0x171)}},{'$group':{'_id':{'name':_0x1da4d0(0x155),'room':_0x1da4d0(0x17a)},'products':{'$push':_0x1da4d0(0x15a)}}}]);_0x11929a[_0x1da4d0(0x143)](_0x4f251b);}catch(_0x19750b){console[_0x1da4d0(0x14a)](_0x1da4d0(0x13b),_0x19750b),_0x11929a[_0x1da4d0(0x16f)](0xc8)[_0x1da4d0(0x143)]({'message':_0x19750b[_0x1da4d0(0x16b)]});}}),router[a0_0x2a6bc6(0x15c)](a0_0x2a6bc6(0x137),async(_0x363376,_0x2e8c06)=>{const _0xe8cc18=a0_0x2a6bc6;_0x2e8c06[_0xe8cc18(0x14c)](_0xe8cc18(0x157),{'success':_0x363376[_0xe8cc18(0x145)](_0xe8cc18(0x177)),'errors':_0x363376[_0xe8cc18(0x145)](_0xe8cc18(0x14d))});}),router[a0_0x2a6bc6(0x15c)](a0_0x2a6bc6(0x164),async(_0x57d92c,_0x3caa0c)=>{const _0x2a6b08=a0_0x2a6bc6;var _0x21fa03=await purchases[_0x2a6b08(0x150)]([{'$lookup':{'from':_0x2a6b08(0x162),'let':{'invoice':'$invoice'},'pipeline':[{'$unwind':'$product_details'},{'$match':{'$expr':{'$eq':[_0x2a6b08(0x138),_0x2a6b08(0x146)]}}},{'$project':{'_id':_0x2a6b08(0x14f),'product_name':_0x2a6b08(0x169),'product_code':_0x2a6b08(0x16c),'quantity_available':'$product_details.product_stock','warehouse_name':'$name','warehouse_room':_0x2a6b08(0x17a),'invoice':_0x2a6b08(0x146)}}],'as':_0x2a6b08(0x167)}}]);_0x21fa03['data_sales']={},await Promise[_0x2a6b08(0x17d)](_0x21fa03[_0x2a6b08(0x17b)](async _0x3453d7=>{const _0x1c7ca2=_0x2a6b08;_0x21fa03['data_sales'][_0x3453d7[_0x1c7ca2(0x141)]]=[],await Promise[_0x1c7ca2(0x17d)](_0x3453d7[_0x1c7ca2(0x167)][_0x1c7ca2(0x17b)](async _0x165947=>{const _0x5e8fa8=_0x1c7ca2,_0x8e1b47=await sales['aggregate']([{'$unwind':_0x5e8fa8(0x165)},{'$match':{'sale_product.id_transaction_from':_0x165947[_0x5e8fa8(0x14b)][_0x5e8fa8(0x147)](),'sale_product.invoice':_0x165947['invoice']}},{'$project':{'_id':_0x5e8fa8(0x149),'product_name':_0x5e8fa8(0x16a),'product_code':_0x5e8fa8(0x152),'quantity_available':_0x5e8fa8(0x153),'warehouse_name':'$warehouse_name','warehouse_room':_0x5e8fa8(0x16e),'product_invoice':_0x5e8fa8(0x134),'invoice':'$invoice','id_transaction_from':_0x5e8fa8(0x161)}}]);_0x8e1b47[_0x5e8fa8(0x168)]>0x0&&_0x21fa03[_0x5e8fa8(0x144)][_0x3453d7['invoice']][_0x5e8fa8(0x166)](..._0x8e1b47);}));})),_0x21fa03[_0x2a6b08(0x144)]=_0x21fa03[_0x2a6b08(0x144)],_0x21fa03[_0x2a6b08(0x14e)]={},await Promise[_0x2a6b08(0x17d)](_0x21fa03[_0x2a6b08(0x17b)](async _0x296b57=>{const _0x53c2a2=_0x2a6b08;_0x21fa03[_0x53c2a2(0x14e)][_0x296b57[_0x53c2a2(0x141)]]=[],await Promise[_0x53c2a2(0x17d)](_0x296b57[_0x53c2a2(0x167)]['map'](async _0x18052a=>{const _0x37ebd5=_0x53c2a2,_0xb8ffe3=await adjustment[_0x37ebd5(0x150)]([{'$unwind':_0x37ebd5(0x158)},{'$match':{'product.id_transaction_from':_0x18052a[_0x37ebd5(0x14b)][_0x37ebd5(0x147)](),'product.invoice':_0x18052a[_0x37ebd5(0x141)]}},{'$project':{'_id':_0x37ebd5(0x160),'product_name':_0x37ebd5(0x154),'product_code':_0x37ebd5(0x17f),'quantity_available':_0x37ebd5(0x13c),'warehouse_name':_0x37ebd5(0x15d),'warehouse_room':_0x37ebd5(0x13a),'product_invoice':_0x37ebd5(0x170),'invoice':'$invoice','id_transaction_from':_0x37ebd5(0x17e)}}]);_0xb8ffe3[_0x37ebd5(0x168)]>0x0&&_0x21fa03[_0x37ebd5(0x14e)][_0x296b57[_0x37ebd5(0x141)]][_0x37ebd5(0x166)](..._0xb8ffe3);}));})),_0x21fa03[_0x2a6b08(0x13e)]={},await Promise[_0x2a6b08(0x17d)](_0x21fa03[_0x2a6b08(0x17b)](async _0x3747b3=>{const _0x249098=_0x2a6b08;_0x21fa03[_0x249098(0x13e)][_0x3747b3[_0x249098(0x141)]]=[],await Promise[_0x249098(0x17d)](_0x3747b3[_0x249098(0x167)][_0x249098(0x17b)](async _0x2db888=>{const _0x233db0=_0x249098,_0x411a63=await transfers[_0x233db0(0x150)]([{'$unwind':_0x233db0(0x158)},{'$match':{'product.id_transaction_id':_0x2db888[_0x233db0(0x14b)][_0x233db0(0x147)](),'product.To_invoice':_0x2db888[_0x233db0(0x141)]}},{'$project':{'_id':_0x233db0(0x160),'product_name':_0x233db0(0x154),'product_code':_0x233db0(0x17f),'quantity_available':_0x233db0(0x15b),'warehouse_name':_0x233db0(0x13f),'warehouse_room':'$product.room_names','product_invoice':_0x233db0(0x16d),'invoice':_0x233db0(0x148),'id_transaction_id':_0x233db0(0x151)}}]);console[_0x233db0(0x14a)](_0x411a63),_0x411a63[_0x233db0(0x168)]>0x0&&_0x21fa03[_0x233db0(0x13e)][_0x3747b3[_0x233db0(0x141)]]['push'](..._0x411a63);}));})),_0x3caa0c[_0x2a6b08(0x143)]({'purchases_warehouse':_0x21fa03,'data_sales':_0x21fa03[_0x2a6b08(0x144)],'data_adjustment':_0x21fa03['data_adjustment'],'data_transfer':_0x21fa03[_0x2a6b08(0x13e)]});}),module['exports']=router;