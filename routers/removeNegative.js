const a0_0x5e7cf6=a0_0x560a;function a0_0x560a(_0x263871,_0x266ad2){const _0x4af05d=a0_0x4af0();return a0_0x560a=function(_0x560a43,_0x107c93){_0x560a43=_0x560a43-0x8e;let _0x462a25=_0x4af05d[_0x560a43];return _0x462a25;},a0_0x560a(_0x263871,_0x266ad2);}(function(_0x4c8bd1,_0x24a395){const _0x564b77=a0_0x560a,_0x2efe7a=_0x4c8bd1();while(!![]){try{const _0x3c4293=parseInt(_0x564b77(0xbd))/0x1*(-parseInt(_0x564b77(0xcb))/0x2)+parseInt(_0x564b77(0xc2))/0x3*(-parseInt(_0x564b77(0xc6))/0x4)+parseInt(_0x564b77(0xd3))/0x5+parseInt(_0x564b77(0xa8))/0x6*(-parseInt(_0x564b77(0x96))/0x7)+-parseInt(_0x564b77(0x8f))/0x8*(-parseInt(_0x564b77(0xbb))/0x9)+parseInt(_0x564b77(0xc0))/0xa+parseInt(_0x564b77(0xcd))/0xb;if(_0x3c4293===_0x24a395)break;else _0x2efe7a['push'](_0x2efe7a['shift']());}catch(_0x2a6735){_0x2efe7a['push'](_0x2efe7a['shift']());}}}(a0_0x4af0,0x4e72a));function a0_0x4af0(){const _0x5d411b=['3739190izUdMt','$product','921369oLaMnE','$product_details.product_name','$sale_product.product_code','$product_details.invoice','8YLtRhe','status','$product_details.product_code','$sale_product._id','$product.id_transaction_id','326cwBoyr','json','3264635ZXQrlr','valueOf','$product_details','message','$invoice','table\x20page','1605820lZsJLw','_id','updateMany','get','704tPpeOW','$sale_product.invoice','monitor','aggregate','log','14800005047429','$to_warehouse','704039ZMxoGo','/negative','warehouse_data','$product.product_code','INCF-52068316','\x20documents\x20updated','$product.to_room_name','success','$sale_product.quantity','$room','Router','$product.product_name','$product.room_names','length','/join','$warehouse_name','$product.to_quantity','$product.id_transaction_from','6NtHGXi','/warehouse_monitor','exports','$$invoice','$name','invoice','flash','$product.new_adjust_qty','errors','data_transfer','$sale_product.id_transaction_from','all','push','$product._id','$sale_product.product_name','map','/checking','data_sales','data_adjustment','13347OqpQyJ','$product.invoice','529qyKAeM','render','../../models/all_models'];a0_0x4af0=function(){return _0x5d411b;};return a0_0x4af0();}const express=require('express'),app=express(),router=express[a0_0x5e7cf6(0xa0)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings,purchases_finished,sales_finished,adjustment_finished,transfers,transfers_finished,sales,adjustment}=require(a0_0x5e7cf6(0xbf));router[a0_0x5e7cf6(0x8e)](a0_0x5e7cf6(0x97),async(_0x200c67,_0x3c0518)=>{const _0x7c72ad=a0_0x5e7cf6;try{const _0x1828e4=await warehouse[_0x7c72ad(0xd5)]({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x3c0518[_0x7c72ad(0xcc)]({'status':_0x1828e4['modifiedCount']+_0x7c72ad(0x9b)});}catch(_0x59557f){console[_0x7c72ad(0x93)](_0x7c72ad(0xd2),_0x59557f),_0x3c0518[_0x7c72ad(0xc7)](0xc8)['json']({'message':_0x59557f[_0x7c72ad(0xd0)]});}}),router[a0_0x5e7cf6(0x8e)](a0_0x5e7cf6(0xb8),async(_0x115079,_0x41339d)=>{const _0x3c0e2b=a0_0x5e7cf6;try{const _0x435bb0=await warehouse[_0x3c0e2b(0x92)]([{'$unwind':_0x3c0e2b(0xcf)},{'$match':{'product_details.invoice':_0x3c0e2b(0x9a),'product_details.primary_code':_0x3c0e2b(0x94)}},{'$group':{'_id':{'name':_0x3c0e2b(0xac),'room':_0x3c0e2b(0x9f)},'products':{'$push':_0x3c0e2b(0xcf)}}}]);_0x41339d[_0x3c0e2b(0xcc)](_0x435bb0);}catch(_0x55bce3){console[_0x3c0e2b(0x93)](_0x3c0e2b(0xd2),_0x55bce3),_0x41339d[_0x3c0e2b(0xc7)](0xc8)[_0x3c0e2b(0xcc)]({'message':_0x55bce3[_0x3c0e2b(0xd0)]});}}),router[a0_0x5e7cf6(0x8e)](a0_0x5e7cf6(0xa9),async(_0x2b1a34,_0x1dbbe5)=>{const _0x15afe7=a0_0x5e7cf6;_0x1dbbe5[_0x15afe7(0xbe)](_0x15afe7(0x91),{'success':_0x2b1a34[_0x15afe7(0xae)](_0x15afe7(0x9d)),'errors':_0x2b1a34['flash'](_0x15afe7(0xb0))});}),router['get'](a0_0x5e7cf6(0xa4),async(_0x1651a3,_0x314787)=>{const _0x1f1aff=a0_0x5e7cf6;var _0x402086=await purchases[_0x1f1aff(0x92)]([{'$lookup':{'from':'warehouses','let':{'invoice':'$invoice'},'pipeline':[{'$unwind':'$product_details'},{'$match':{'$expr':{'$eq':[_0x1f1aff(0xab),_0x1f1aff(0xc5)]}}},{'$project':{'_id':'$product_details._id','product_name':_0x1f1aff(0xc3),'product_code':_0x1f1aff(0xc8),'quantity_available':'$product_details.product_stock','warehouse_name':_0x1f1aff(0xac),'warehouse_room':_0x1f1aff(0x9f),'invoice':_0x1f1aff(0xc5)}}],'as':'warehouse_data'}}]);_0x402086['data_sales']={},await Promise['all'](_0x402086['map'](async _0xa37beb=>{const _0x476e8c=_0x1f1aff;_0x402086[_0x476e8c(0xb9)][_0xa37beb[_0x476e8c(0xad)]]=[],await Promise['all'](_0xa37beb[_0x476e8c(0x98)][_0x476e8c(0xb7)](async _0x5a01bc=>{const _0x3df58c=_0x476e8c,_0x18dc66=await sales['aggregate']([{'$unwind':'$sale_product'},{'$match':{'sale_product.id_transaction_from':_0x5a01bc[_0x3df58c(0xd4)]['valueOf'](),'sale_product.invoice':_0x5a01bc[_0x3df58c(0xad)]}},{'$project':{'_id':_0x3df58c(0xc9),'product_name':_0x3df58c(0xb6),'product_code':_0x3df58c(0xc4),'quantity_available':_0x3df58c(0x9e),'warehouse_name':_0x3df58c(0xa5),'warehouse_room':'$sale_product.room_name','product_invoice':_0x3df58c(0x90),'invoice':'$invoice','id_transaction_from':_0x3df58c(0xb2)}}]);_0x18dc66[_0x3df58c(0xa3)]>0x0&&_0x402086[_0x3df58c(0xb9)][_0xa37beb[_0x3df58c(0xad)]][_0x3df58c(0xb4)](..._0x18dc66);}));})),_0x402086[_0x1f1aff(0xb9)]=_0x402086[_0x1f1aff(0xb9)],_0x402086['data_adjustment']={},await Promise[_0x1f1aff(0xb3)](_0x402086[_0x1f1aff(0xb7)](async _0x2ad672=>{const _0x3e3eb0=_0x1f1aff;_0x402086[_0x3e3eb0(0xba)][_0x2ad672[_0x3e3eb0(0xad)]]=[],await Promise['all'](_0x2ad672['warehouse_data'][_0x3e3eb0(0xb7)](async _0x14fd9c=>{const _0x5682ef=_0x3e3eb0,_0x5339de=await adjustment[_0x5682ef(0x92)]([{'$unwind':'$product'},{'$match':{'product.id_transaction_from':_0x14fd9c['_id'][_0x5682ef(0xce)](),'product.invoice':_0x14fd9c['invoice']}},{'$project':{'_id':_0x5682ef(0xb5),'product_name':_0x5682ef(0xa1),'product_code':'$product.product_code','quantity_available':_0x5682ef(0xaf),'warehouse_name':_0x5682ef(0xa5),'warehouse_room':_0x5682ef(0xa2),'product_invoice':_0x5682ef(0xbc),'invoice':_0x5682ef(0xd1),'id_transaction_from':_0x5682ef(0xa7)}}]);_0x5339de['length']>0x0&&_0x402086[_0x5682ef(0xba)][_0x2ad672[_0x5682ef(0xad)]][_0x5682ef(0xb4)](..._0x5339de);}));})),_0x402086[_0x1f1aff(0xb1)]={},await Promise['all'](_0x402086['map'](async _0x39af2d=>{const _0x46af24=_0x1f1aff;_0x402086['data_transfer'][_0x39af2d[_0x46af24(0xad)]]=[],await Promise[_0x46af24(0xb3)](_0x39af2d[_0x46af24(0x98)]['map'](async _0x2e8534=>{const _0x5223d9=_0x46af24,_0x1cb558=await transfers[_0x5223d9(0x92)]([{'$unwind':_0x5223d9(0xc1)},{'$match':{'product.id_transaction_id':_0x2e8534[_0x5223d9(0xd4)][_0x5223d9(0xce)](),'product.To_invoice':_0x2e8534[_0x5223d9(0xad)]}},{'$project':{'_id':_0x5223d9(0xb5),'product_name':'$product.product_name','product_code':_0x5223d9(0x99),'quantity_available':_0x5223d9(0xa6),'warehouse_name':_0x5223d9(0x95),'warehouse_room':_0x5223d9(0xa2),'product_invoice':_0x5223d9(0x9c),'invoice':_0x5223d9(0xd1),'id_transaction_id':_0x5223d9(0xca)}}]);console['log'](_0x1cb558),_0x1cb558[_0x5223d9(0xa3)]>0x0&&_0x402086['data_transfer'][_0x39af2d[_0x5223d9(0xad)]][_0x5223d9(0xb4)](..._0x1cb558);}));})),_0x314787[_0x1f1aff(0xcc)]({'purchases_warehouse':_0x402086,'data_sales':_0x402086[_0x1f1aff(0xb9)],'data_adjustment':_0x402086[_0x1f1aff(0xba)],'data_transfer':_0x402086[_0x1f1aff(0xb1)]});}),module[a0_0x5e7cf6(0xaa)]=router;