var a0_0x8b3922=a0_0x4761;function a0_0x4761(_0x40b5a7,_0x5e9a02){var _0x5bc920=a0_0x5bc9();return a0_0x4761=function(_0x47617c,_0x3967d4){_0x47617c=_0x47617c-0xb7;var _0x5f3d17=_0x5bc920[_0x47617c];return _0x5f3d17;},a0_0x4761(_0x40b5a7,_0x5e9a02);}(function(_0x1edaf3,_0x56eedc){var _0x446338=a0_0x4761,_0x39059b=_0x1edaf3();while(!![]){try{var _0x5f589c=-parseInt(_0x446338(0xef))/0x1+parseInt(_0x446338(0xe1))/0x2*(-parseInt(_0x446338(0xf5))/0x3)+-parseInt(_0x446338(0xcd))/0x4*(parseInt(_0x446338(0x10a))/0x5)+parseInt(_0x446338(0xc5))/0x6+parseInt(_0x446338(0xe6))/0x7*(-parseInt(_0x446338(0x104))/0x8)+-parseInt(_0x446338(0xe9))/0x9+parseInt(_0x446338(0xf4))/0xa;if(_0x5f589c===_0x56eedc)break;else _0x39059b['push'](_0x39059b['shift']());}catch(_0x4f5d23){_0x39059b['push'](_0x39059b['shift']());}}}(a0_0x5bc9,0x58393));function a0_0x5bc9(){var _0x1cb5e6=['/viewFG','$name','$product.unit','view_og_table','findById','warehouses','French','data_adjustment','../models/all_models','params','$sale_product.quantity','post','/viewdata_og_fg/:id','285222omzbKt','$sale_product._id','user','/reports','invoice','411670EdAfyI','find','$product.to_room_name','4362435scljtR','json','Hindi','success','data_sales','_id','52717pCXYvl','$sale_product.invoice','English\x20(US)','Arabic','/viewdata_inc_fg/:id','20190050QvaBJt','12hOCQnD','German','errors','$sale_product.room_name','view_tf_table','$product_details.production_date','$warehouse_name','$room','$product.production_date','$sale_product.expiry_date','transaction_finished_raw','data_transfer','Raw\x20Materials','length','$product_details._id','48BicYks','$sale_product.unit','English','$product.id_transaction_id','Arabic\x20(ae)','Chinese','5885oPsdhy','$product.invoice','view_table','Router','body','$$invoice','$product_details.product_stock','push','warehouse_data','Enabled','/viewdata_tf_fg/:id','flash','email','$to_warehouse','render','map','$product','findOne','transaction_finished','all','log','exports','$product.expiry_date','$invoice','$sale_product.product_code','$product.room_names','Portuguese\x20(BR)','$sale_product.id_transaction_from','1466814xGFEsL','$product.product_code','language','$sale_product','get','aggregate','Spanish','$product.product_name','1500MTQaMY','Portuguese','$date','/view','$product_details.product_code','$product.id_transaction_from','valueOf'];a0_0x5bc9=function(){return _0x1cb5e6;};return a0_0x5bc9();}const express=require('express'),app=express(),router=express[a0_0x8b3922(0x10d)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_finished,sales,sales_finished,sales_return,suppliers_payment,customer_payment,transfers,transfers_finished,email_settings,supervisor_settings,adjustment_finished,adjustment}=require(a0_0x8b3922(0xdc)),auth=require('../middleware/auth'),users=require('../public/language/languages.json'),nodemailer=require('nodemailer');router[a0_0x8b3922(0xc9)](a0_0x8b3922(0xd0),auth,async(_0x1b9c2f,_0x3357e7)=>{var _0x15045f=a0_0x8b3922;try{const {username:_0x470213,email:_0x463bce,role:_0x522059}=_0x1b9c2f['user'],_0x4a7b90=_0x1b9c2f['user'],_0x5b24fe=await profile['findOne']({'email':_0x4a7b90[_0x15045f(0x116)]}),_0x54b3a8=await master_shop[_0x15045f(0xe7)](),_0x2cdd39=await warehouse[_0x15045f(0xca)]([{'$match':{'status':_0x15045f(0x113),'warehouse_category':'Finished\x20Goods'}},{'$group':{'_id':_0x15045f(0xd5),'name':{'$first':'$name'}}}]);if(_0x54b3a8[0x0][_0x15045f(0xc7)]==_0x15045f(0xf1))var _0x1060df=users['English'];else{if(_0x54b3a8[0x0]['language']==_0x15045f(0xeb))var _0x1060df=users[_0x15045f(0xeb)];else{if(_0x54b3a8[0x0][_0x15045f(0xc7)]==_0x15045f(0xf6))var _0x1060df=users[_0x15045f(0xf6)];else{if(_0x54b3a8[0x0][_0x15045f(0xc7)]==_0x15045f(0xcb))var _0x1060df=users[_0x15045f(0xcb)];else{if(_0x54b3a8[0x0]['language']==_0x15045f(0xda))var _0x1060df=users[_0x15045f(0xda)];else{if(_0x54b3a8[0x0][_0x15045f(0xc7)]==_0x15045f(0xc3))var _0x1060df=users[_0x15045f(0xce)];else{if(_0x54b3a8[0x0][_0x15045f(0xc7)]==_0x15045f(0x109))var _0x1060df=users[_0x15045f(0x109)];else{if(_0x54b3a8[0x0][_0x15045f(0xc7)]==_0x15045f(0x108))var _0x1060df=users[_0x15045f(0xf2)];}}}}}}}_0x3357e7['render'](_0x15045f(0xbb),{'success':_0x1b9c2f[_0x15045f(0x115)]('success'),'errors':_0x1b9c2f[_0x15045f(0x115)]('errors'),'role':_0x4a7b90,'profile':_0x5b24fe,'master_shop':_0x54b3a8,'dataProcess':_0x2cdd39,'language':_0x1060df});}catch(_0x4f3ed4){console[_0x15045f(0xbd)](_0x4f3ed4);}}),router[a0_0x8b3922(0xdf)](a0_0x8b3922(0xe4),auth,async(_0x426204,_0x2a7fd7)=>{var _0x2010d4=a0_0x8b3922;const {product_category:_0x1cec81,transaction_category:_0xc14e79,transaction_date_from:_0x5392bc,transaction_date_to:_0x57de58,warehouse_category:_0x41dc3b,item_code:_0x288f2f}=_0x426204[_0x2010d4(0x10e)];var _0x569494=await purchases['aggregate']([{'$match':{'warehouse_name':_0x41dc3b,'date':{'$gte':_0x5392bc,'$lte':_0x57de58}}},{'$lookup':{'from':_0x2010d4(0xd9),'let':{'invoice':_0x2010d4(0xc0)},'pipeline':[{'$unwind':'$product_details'},{'$match':{'$expr':{'$eq':[_0x2010d4(0x10f),'$product_details.invoice']}}},{'$project':{'_id':_0x2010d4(0x103),'product_name':'$product_details.product_name','product_code':_0x2010d4(0xd1),'quantity_available':_0x2010d4(0x110),'warehouse_name':_0x2010d4(0xd5),'warehouse_room':_0x2010d4(0xfc),'invoice':'$product_details.invoice','production_date':_0x2010d4(0xfa),'expiry_date':'$product_details.expiry_date','UOM':'$product_details.unit'}}],'as':_0x2010d4(0x112)}}]);_0x569494['data_sales']={},await Promise['all'](_0x569494['map'](async _0x52dc0e=>{var _0x50e2a1=_0x2010d4;_0x569494[_0x50e2a1(0xed)][_0x52dc0e[_0x50e2a1(0xe5)]]=[],await Promise[_0x50e2a1(0xbc)](_0x52dc0e[_0x50e2a1(0x112)]['map'](async _0x389a5b=>{var _0x40101d=_0x50e2a1;const _0x202f9c=await sales[_0x40101d(0xca)]([{'$unwind':_0x40101d(0xc8)},{'$match':{'sale_product.id_transaction_from':_0x389a5b[_0x40101d(0xee)]['valueOf'](),'sale_product.invoice':_0x389a5b[_0x40101d(0xe5)]}},{'$project':{'_id':_0x40101d(0xe2),'product_name':'$sale_product.product_name','product_code':_0x40101d(0xc1),'quantity_available':_0x40101d(0xde),'warehouse_name':_0x40101d(0xfb),'warehouse_room':_0x40101d(0xf8),'product_invoice':_0x40101d(0xf0),'invoice':_0x40101d(0xc0),'id_transaction_from':_0x40101d(0xc4),'date':_0x40101d(0xcf),'production_date':'$sale_product.production_date','expiry_date':_0x40101d(0xfe),'UOM':_0x40101d(0x105)}}]);_0x202f9c[_0x40101d(0x102)]>0x0&&_0x569494[_0x40101d(0xed)][_0x52dc0e[_0x40101d(0xe5)]][_0x40101d(0x111)](..._0x202f9c);}));})),_0x569494[_0x2010d4(0xed)]=_0x569494['data_sales'],_0x569494[_0x2010d4(0xdb)]={},await Promise[_0x2010d4(0xbc)](_0x569494[_0x2010d4(0xb8)](async _0x2787e3=>{var _0xf22391=_0x2010d4;_0x569494[_0xf22391(0xdb)][_0x2787e3[_0xf22391(0xe5)]]=[],await Promise[_0xf22391(0xbc)](_0x2787e3[_0xf22391(0x112)][_0xf22391(0xb8)](async _0x4f2c12=>{var _0x24ff2d=_0xf22391;const _0x3ec467=await adjustment['aggregate']([{'$unwind':_0x24ff2d(0xb9)},{'$match':{'product.id_transaction_from':_0x4f2c12[_0x24ff2d(0xee)]['valueOf'](),'product.invoice':_0x4f2c12[_0x24ff2d(0xe5)]}},{'$project':{'_id':'$product._id','product_name':_0x24ff2d(0xcc),'product_code':_0x24ff2d(0xc6),'quantity_available':'$product.new_adjust_qty','warehouse_name':_0x24ff2d(0xfb),'warehouse_room':'$product.room_names','product_invoice':_0x24ff2d(0x10b),'invoice':_0x24ff2d(0xc0),'id_transaction_from':_0x24ff2d(0xd2),'date':_0x24ff2d(0xcf),'production_date':_0x24ff2d(0xfd),'expiry_date':_0x24ff2d(0xbf),'UOM':_0x24ff2d(0xd6)}}]);_0x3ec467[_0x24ff2d(0x102)]>0x0&&_0x569494[_0x24ff2d(0xdb)][_0x2787e3[_0x24ff2d(0xe5)]][_0x24ff2d(0x111)](..._0x3ec467);}));})),_0x569494[_0x2010d4(0x100)]={},await Promise[_0x2010d4(0xbc)](_0x569494['map'](async _0x4e4ff4=>{var _0x469272=_0x2010d4;_0x569494[_0x469272(0x100)][_0x4e4ff4[_0x469272(0xe5)]]=[],await Promise['all'](_0x4e4ff4[_0x469272(0x112)][_0x469272(0xb8)](async _0x27d645=>{var _0x4d1a4c=_0x469272;const _0x25ac48=await transfers[_0x4d1a4c(0xca)]([{'$unwind':'$product'},{'$match':{'product.id_transaction_id':_0x27d645[_0x4d1a4c(0xee)][_0x4d1a4c(0xd3)](),'product.To_invoice':_0x27d645[_0x4d1a4c(0xe5)]}},{'$project':{'_id':'$product._id','product_name':_0x4d1a4c(0xcc),'product_code':'$product.product_code','quantity_available':'$product.to_quantity','warehouse_name':_0x4d1a4c(0x117),'warehouse_room':_0x4d1a4c(0xc2),'product_invoice':_0x4d1a4c(0xe8),'invoice':'$invoice','id_transaction_from':_0x4d1a4c(0x107),'date':_0x4d1a4c(0xcf),'production_date':_0x4d1a4c(0xfd),'expiry_date':_0x4d1a4c(0xbf),'UOM':_0x4d1a4c(0xd6)}}]);_0x25ac48[_0x4d1a4c(0x102)]>0x0&&_0x569494[_0x4d1a4c(0x100)][_0x4e4ff4[_0x4d1a4c(0xe5)]][_0x4d1a4c(0x111)](..._0x25ac48);}));})),_0x2a7fd7[_0x2010d4(0xea)]({'purchases_warehouse':_0x569494,'data_sales':_0x569494[_0x2010d4(0xed)],'data_adjustment':_0x569494[_0x2010d4(0xdb)],'data_transfer':_0x569494[_0x2010d4(0x100)]});}),router['get'](a0_0x8b3922(0xf3),auth,async(_0x432546,_0xfb8019)=>{var _0x465a36=a0_0x8b3922;try{const _0x1671e2=_0x432546[_0x465a36(0xdd)]['id'];var _0x11af90=await purchases_finished[_0x465a36(0xd8)](_0x1671e2);const _0x4fad79=await master_shop['find'](),_0x157ba5=_0x432546[_0x465a36(0xe3)],_0x1a386d=await profile['findOne']({'email':_0x157ba5[_0x465a36(0x116)]});if(_0x4fad79[0x0][_0x465a36(0xc7)]=='English\x20(US)')var _0x2612cb=users['English'];else{if(_0x4fad79[0x0]['language']==_0x465a36(0xeb))var _0x2612cb=users[_0x465a36(0xeb)];else{if(_0x4fad79[0x0]['language']=='German')var _0x2612cb=users['German'];else{if(_0x4fad79[0x0][_0x465a36(0xc7)]==_0x465a36(0xcb))var _0x2612cb=users[_0x465a36(0xcb)];else{if(_0x4fad79[0x0][_0x465a36(0xc7)]==_0x465a36(0xda))var _0x2612cb=users[_0x465a36(0xda)];else{if(_0x4fad79[0x0]['language']=='Portuguese\x20(BR)')var _0x2612cb=users['Portuguese'];else{if(_0x4fad79[0x0][_0x465a36(0xc7)]==_0x465a36(0x109))var _0x2612cb=users[_0x465a36(0x109)];else{if(_0x4fad79[0x0][_0x465a36(0xc7)]=='Arabic\x20(ae)')var _0x2612cb=users[_0x465a36(0xf2)];}}}}}}}_0xfb8019[_0x465a36(0xb7)](_0x465a36(0x10c),{'success':_0x432546['flash'](_0x465a36(0xec)),'errors':_0x432546[_0x465a36(0x115)](_0x465a36(0xf7)),'master_shop':_0x4fad79,'profile':_0x1a386d,'role':_0x157ba5,'language':_0x2612cb,'data':_0x11af90});}catch(_0x4180f5){_0xfb8019[_0x465a36(0xea)](_0x4180f5);}}),router[a0_0x8b3922(0xc9)](a0_0x8b3922(0xe0),auth,async(_0x4bf295,_0x2c9362)=>{var _0x1caf39=a0_0x8b3922;try{const _0x369450=_0x4bf295[_0x1caf39(0xdd)]['id'];var _0x31a112=await sales_finished[_0x1caf39(0xd8)](_0x369450);const _0x3252cd=await master_shop[_0x1caf39(0xe7)](),_0x173647=_0x4bf295[_0x1caf39(0xe3)],_0x4c0a78=await profile[_0x1caf39(0xba)]({'email':_0x173647['email']});if(_0x3252cd[0x0][_0x1caf39(0xc7)]==_0x1caf39(0xf1))var _0x353b2d=users[_0x1caf39(0x106)];else{if(_0x3252cd[0x0][_0x1caf39(0xc7)]==_0x1caf39(0xeb))var _0x353b2d=users['Hindi'];else{if(_0x3252cd[0x0]['language']==_0x1caf39(0xf6))var _0x353b2d=users[_0x1caf39(0xf6)];else{if(_0x3252cd[0x0][_0x1caf39(0xc7)]==_0x1caf39(0xcb))var _0x353b2d=users[_0x1caf39(0xcb)];else{if(_0x3252cd[0x0][_0x1caf39(0xc7)]==_0x1caf39(0xda))var _0x353b2d=users[_0x1caf39(0xda)];else{if(_0x3252cd[0x0][_0x1caf39(0xc7)]==_0x1caf39(0xc3))var _0x353b2d=users['Portuguese'];else{if(_0x3252cd[0x0][_0x1caf39(0xc7)]==_0x1caf39(0x109))var _0x353b2d=users[_0x1caf39(0x109)];else{if(_0x3252cd[0x0][_0x1caf39(0xc7)]==_0x1caf39(0x108))var _0x353b2d=users[_0x1caf39(0xf2)];}}}}}}}_0x2c9362[_0x1caf39(0xb7)](_0x1caf39(0xd7),{'success':_0x4bf295[_0x1caf39(0x115)](_0x1caf39(0xec)),'errors':_0x4bf295[_0x1caf39(0x115)](_0x1caf39(0xf7)),'master_shop':_0x3252cd,'profile':_0x4c0a78,'role':_0x173647,'language':_0x353b2d,'data':_0x31a112});}catch(_0x5d288a){_0x2c9362['json'](_0x5d288a);}}),router['get'](a0_0x8b3922(0x114),auth,async(_0x5b13dc,_0x5a46d5)=>{var _0x2e72fe=a0_0x8b3922;try{const _0xc1fef7=_0x5b13dc[_0x2e72fe(0xdd)]['id'];var _0x3fd619=await transfers_finished[_0x2e72fe(0xd8)](_0xc1fef7);const _0x1bab68=await master_shop['find'](),_0xdea498=_0x5b13dc[_0x2e72fe(0xe3)],_0x548f5c=await profile[_0x2e72fe(0xba)]({'email':_0xdea498[_0x2e72fe(0x116)]});if(_0x1bab68[0x0][_0x2e72fe(0xc7)]==_0x2e72fe(0xf1))var _0x5bbbc3=users['English'];else{if(_0x1bab68[0x0][_0x2e72fe(0xc7)]==_0x2e72fe(0xeb))var _0x5bbbc3=users[_0x2e72fe(0xeb)];else{if(_0x1bab68[0x0][_0x2e72fe(0xc7)]==_0x2e72fe(0xf6))var _0x5bbbc3=users['German'];else{if(_0x1bab68[0x0][_0x2e72fe(0xc7)]=='Spanish')var _0x5bbbc3=users[_0x2e72fe(0xcb)];else{if(_0x1bab68[0x0][_0x2e72fe(0xc7)]=='French')var _0x5bbbc3=users['French'];else{if(_0x1bab68[0x0]['language']==_0x2e72fe(0xc3))var _0x5bbbc3=users['Portuguese'];else{if(_0x1bab68[0x0][_0x2e72fe(0xc7)]=='Chinese')var _0x5bbbc3=users[_0x2e72fe(0x109)];else{if(_0x1bab68[0x0][_0x2e72fe(0xc7)]==_0x2e72fe(0x108))var _0x5bbbc3=users['Arabic'];}}}}}}}_0x5a46d5[_0x2e72fe(0xb7)](_0x2e72fe(0xf9),{'success':_0x5b13dc[_0x2e72fe(0x115)](_0x2e72fe(0xec)),'errors':_0x5b13dc[_0x2e72fe(0x115)]('errors'),'master_shop':_0x1bab68,'profile':_0x548f5c,'role':_0xdea498,'language':_0x5bbbc3,'data':_0x3fd619});}catch(_0xd10fa6){_0x5a46d5[_0x2e72fe(0xea)](_0xd10fa6);}}),router[a0_0x8b3922(0xc9)](a0_0x8b3922(0xd4),auth,async(_0x22f5a1,_0x3f9973)=>{var _0x4f0a91=a0_0x8b3922;try{const {username:_0x1bae33,email:_0x1b6fcd,role:_0x389dc7}=_0x22f5a1[_0x4f0a91(0xe3)],_0x5b9736=_0x22f5a1[_0x4f0a91(0xe3)],_0x511e3e=await profile['findOne']({'email':_0x5b9736['email']}),_0x91c0a9=await master_shop['find'](),_0x229069=await warehouse[_0x4f0a91(0xca)]([{'$match':{'status':_0x4f0a91(0x113),'warehouse_category':_0x4f0a91(0x101)}},{'$group':{'_id':_0x4f0a91(0xd5),'name':{'$first':_0x4f0a91(0xd5)}}}]);if(_0x91c0a9[0x0][_0x4f0a91(0xc7)]==_0x4f0a91(0xf1))var _0x4b2072=users[_0x4f0a91(0x106)];else{if(_0x91c0a9[0x0]['language']==_0x4f0a91(0xeb))var _0x4b2072=users[_0x4f0a91(0xeb)];else{if(_0x91c0a9[0x0][_0x4f0a91(0xc7)]==_0x4f0a91(0xf6))var _0x4b2072=users[_0x4f0a91(0xf6)];else{if(_0x91c0a9[0x0][_0x4f0a91(0xc7)]==_0x4f0a91(0xcb))var _0x4b2072=users['Spanish'];else{if(_0x91c0a9[0x0][_0x4f0a91(0xc7)]=='French')var _0x4b2072=users[_0x4f0a91(0xda)];else{if(_0x91c0a9[0x0]['language']==_0x4f0a91(0xc3))var _0x4b2072=users['Portuguese'];else{if(_0x91c0a9[0x0]['language']==_0x4f0a91(0x109))var _0x4b2072=users[_0x4f0a91(0x109)];else{if(_0x91c0a9[0x0][_0x4f0a91(0xc7)]=='Arabic\x20(ae)')var _0x4b2072=users[_0x4f0a91(0xf2)];}}}}}}}_0x3f9973[_0x4f0a91(0xb7)](_0x4f0a91(0xff),{'success':_0x22f5a1[_0x4f0a91(0x115)](_0x4f0a91(0xec)),'errors':_0x22f5a1[_0x4f0a91(0x115)]('errors'),'role':_0x5b9736,'profile':_0x511e3e,'master_shop':_0x91c0a9,'dataProcess':_0x229069,'language':_0x4b2072});}catch(_0x5a4d79){console[_0x4f0a91(0xbd)](_0x5a4d79);}}),module[a0_0x8b3922(0xbe)]=router;