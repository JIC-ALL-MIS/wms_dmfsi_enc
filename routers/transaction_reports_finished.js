var a0_0x16bc04=a0_0x1e0f;(function(_0x2c4e95,_0x21b4e0){var _0x4e2ed5=a0_0x1e0f,_0x13f236=_0x2c4e95();while(!![]){try{var _0x72320a=-parseInt(_0x4e2ed5(0x136))/0x1*(parseInt(_0x4e2ed5(0x130))/0x2)+parseInt(_0x4e2ed5(0x137))/0x3*(-parseInt(_0x4e2ed5(0x15f))/0x4)+parseInt(_0x4e2ed5(0x142))/0x5*(-parseInt(_0x4e2ed5(0x110))/0x6)+parseInt(_0x4e2ed5(0xfa))/0x7*(parseInt(_0x4e2ed5(0x118))/0x8)+-parseInt(_0x4e2ed5(0x131))/0x9+-parseInt(_0x4e2ed5(0x122))/0xa+-parseInt(_0x4e2ed5(0x145))/0xb*(-parseInt(_0x4e2ed5(0x146))/0xc);if(_0x72320a===_0x21b4e0)break;else _0x13f236['push'](_0x13f236['shift']());}catch(_0x5f8274){_0x13f236['push'](_0x13f236['shift']());}}}(a0_0x25be,0x53df2));function a0_0x1e0f(_0x218c46,_0x4c8233){var _0x25bef9=a0_0x25be();return a0_0x1e0f=function(_0x1e0fe0,_0x2ff8dd){_0x1e0fe0=_0x1e0fe0-0xe8;var _0x563663=_0x25bef9[_0x1e0fe0];return _0x563663;},a0_0x1e0f(_0x218c46,_0x4c8233);}function a0_0x25be(){var _0x1c9665=['$product_details.expiry_date','$product.room_names','Raw\x20Materials','$product.secondary_unit','478iJFohn','2626515tWJqCx','$product_details.product_code','render','aggregate','$invoice','141eLkiBk','2172hDifOf','Chinese','../models/all_models','transaction_finished_raw','Arabic\x20(ae)','express','admin','$sale_product.extenders_spmx','$product.quantity','$product_details.invoice','Hindi','155gZZFNE','English','$product.extenders_spmx_qty','429mmaxab','186144eYmnxR','exports','$to_warehouse','_id','$sale_product.id_transaction_from','push','$product','length','findOne','/reports_spmx','user','Spanish','$product_details','$product.production_date','nodemailer','SPMX','$sale_product.room_name','True','$product_details.production_date','../middleware/auth','French','$product.product_code','$product.spicemix_spmx','$sale_product.unit','post','392CJNwck','$sale_product.extenders_spmx_qty','$product_details._id','Enabled','$product.expiry_date','/viewdata_inc_fg/:id','body','findById','success','get','data_adjustment','Portuguese\x20(BR)','errors','view_tf_table','log','INCOMING','$product.to_room_name','$product.unit','Arabic','$sale_product.spicemix_spmx','email','$product_details.product_name','English\x20(US)','$sale_product.unit_spmx','json','warehouse_category','German','flash','$sale_product.spicemix_spmx_qty','$product.to_quantity','$product_details.unit','$product.curing_spmx_qty','$date','$sale_product','$product.curing_spmx','2059477eiasxd','$sale_product._id','$sale_product.curing_spmx','params','role','/viewFG','$product.extenders_spmx','find','$product.spicemix_spmx_qty','/view','/reports','view_og_table','OUTGOING','$sale_product.expiry_date','warehouses','$product.unit_spmx','$product.id_transaction_from','$product.product_name','$sale_product.product_code','$sale_product.curing_spmx_qty','$product.invoice','all','64806rNRWbr','map','invoice','$$invoice','$sale_product.product_name','../public/language/languages.json','$product.standard_unit','/viewdata_og_fg/:id','16wRPtWa','valueOf','$warehouse_name','$sale_product.production_date','warehouse_data','view_table','language','$room','$sale_product.invoice','data_sales','1185350rqvBxf','transaction_finished_spmx','data_transfer','$name','$product.new_adjust_qty','$product.id_transaction','$product._id','$sale_product.quantity','$product_details.product_stock','Portuguese'];a0_0x25be=function(){return _0x1c9665;};return a0_0x25be();}const express=require(a0_0x16bc04(0x13c)),app=express(),router=express['Router'](),{profile,master_shop,purchases_spmx,sales_spmx,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_finished,sales,sales_finished,sales_return,suppliers_payment,customer_payment,transfers,transfers_finished,email_settings,supervisor_settings,adjustment_finished,adjustment}=require(a0_0x16bc04(0x139)),auth=require(a0_0x16bc04(0x159)),users=require(a0_0x16bc04(0x115)),nodemailer=require(a0_0x16bc04(0x154));router[a0_0x16bc04(0x168)](a0_0x16bc04(0x103),auth,async(_0xf9ea7a,_0x31f37c)=>{var _0x5c976b=a0_0x16bc04;try{const {username:_0x5ef2ae,email:_0x3f7732,role:_0x122356}=_0xf9ea7a[_0x5c976b(0x150)],_0x18d999=_0xf9ea7a[_0x5c976b(0x150)],_0x5f1ca4=await profile[_0x5c976b(0x14e)]({'email':_0x18d999[_0x5c976b(0xeb)]}),_0xf88641=await master_shop['find'](),_0x3186cb=await warehouse[_0x5c976b(0x134)]([{'$match':{'status':'Enabled','warehouse_category':'Finished\x20Goods'}},{'$group':{'_id':_0x5c976b(0x125),'name':{'$first':'$name'}}}]);if(_0xf88641[0x0]['language']==_0x5c976b(0xed))var _0x26bf4e=users[_0x5c976b(0x143)];else{if(_0xf88641[0x0]['language']==_0x5c976b(0x141))var _0x26bf4e=users[_0x5c976b(0x141)];else{if(_0xf88641[0x0][_0x5c976b(0x11e)]=='German')var _0x26bf4e=users[_0x5c976b(0xf1)];else{if(_0xf88641[0x0][_0x5c976b(0x11e)]==_0x5c976b(0x151))var _0x26bf4e=users['Spanish'];else{if(_0xf88641[0x0][_0x5c976b(0x11e)]=='French')var _0x26bf4e=users[_0x5c976b(0x15a)];else{if(_0xf88641[0x0]['language']==_0x5c976b(0x16a))var _0x26bf4e=users[_0x5c976b(0x12b)];else{if(_0xf88641[0x0]['language']==_0x5c976b(0x138))var _0x26bf4e=users[_0x5c976b(0x138)];else{if(_0xf88641[0x0]['language']==_0x5c976b(0x13b))var _0x26bf4e=users[_0x5c976b(0xe9)];}}}}}}}_0x31f37c[_0x5c976b(0x133)]('transaction_finished',{'success':_0xf9ea7a['flash'](_0x5c976b(0x167)),'errors':_0xf9ea7a[_0x5c976b(0xf2)](_0x5c976b(0x16b)),'role':_0x18d999,'profile':_0x5f1ca4,'master_shop':_0xf88641,'dataProcess':_0x3186cb,'language':_0x26bf4e});}catch(_0x1ac27d){console[_0x5c976b(0x16d)](_0x1ac27d);}}),router[a0_0x16bc04(0x168)]('/view_spmx',auth,async(_0x93c603,_0x1e728)=>{var _0x2bc71e=a0_0x16bc04;try{const {username:_0x8463ad,email:_0x511717,role:_0x42e4b4}=_0x93c603['user'],_0x287496=_0x93c603['user'],_0x2fa730=await profile[_0x2bc71e(0x14e)]({'email':_0x287496['email']}),_0x2b943e=await master_shop[_0x2bc71e(0x101)]();console['log'](_0x287496);let _0x5276ed;_0x287496[_0x2bc71e(0xfe)]==_0x2bc71e(0x13d)?_0x5276ed=await warehouse['aggregate']([{'$match':{'status':_0x2bc71e(0x162),'warehouse_category':_0x2bc71e(0x155)}},{'$group':{'_id':_0x2bc71e(0x125),'name':{'$first':_0x2bc71e(0x125)}}}]):_0x5276ed=await warehouse[_0x2bc71e(0x134)]([{'$match':{'status':'Enabled','warehouse_category':_0x287496[_0x2bc71e(0xf0)]}},{'$group':{'_id':_0x2bc71e(0x125),'name':{'$first':_0x2bc71e(0x125)}}}]);if(_0x2b943e[0x0]['language']=='English\x20(US)')var _0x5a951d=users['English'];else{if(_0x2b943e[0x0][_0x2bc71e(0x11e)]==_0x2bc71e(0x141))var _0x5a951d=users[_0x2bc71e(0x141)];else{if(_0x2b943e[0x0][_0x2bc71e(0x11e)]==_0x2bc71e(0xf1))var _0x5a951d=users['German'];else{if(_0x2b943e[0x0][_0x2bc71e(0x11e)]=='Spanish')var _0x5a951d=users[_0x2bc71e(0x151)];else{if(_0x2b943e[0x0]['language']==_0x2bc71e(0x15a))var _0x5a951d=users[_0x2bc71e(0x15a)];else{if(_0x2b943e[0x0][_0x2bc71e(0x11e)]=='Portuguese\x20(BR)')var _0x5a951d=users[_0x2bc71e(0x12b)];else{if(_0x2b943e[0x0][_0x2bc71e(0x11e)]==_0x2bc71e(0x138))var _0x5a951d=users[_0x2bc71e(0x138)];else{if(_0x2b943e[0x0][_0x2bc71e(0x11e)]==_0x2bc71e(0x13b))var _0x5a951d=users['Arabic'];}}}}}}}_0x1e728[_0x2bc71e(0x133)](_0x2bc71e(0x123),{'success':_0x93c603['flash'](_0x2bc71e(0x167)),'errors':_0x93c603['flash'](_0x2bc71e(0x16b)),'role':_0x287496,'profile':_0x2fa730,'master_shop':_0x2b943e,'dataProcess':_0x5276ed,'language':_0x5a951d});}catch(_0x3fcfb1){console[_0x2bc71e(0x16d)](_0x3fcfb1);}}),router[a0_0x16bc04(0x168)](a0_0x16bc04(0x104),async(_0x2dc714,_0xedb514)=>{var _0x2fb5e0=a0_0x16bc04;try{var _0x4abc9c='',_0x3ddd4e=await purchases_finished['aggregate']([{'$match':{'warehouse_name':_0x4abc9c,'date':{'$gte':transaction_date_from,'$lte':transaction_date_to}}},{'$unwind':'$product'},{'$group':{'_id':{'item_code':'$product.product_code','item_description':_0x2fb5e0(0x10b),'production_date':'$product.production_date','expiry_date':_0x2fb5e0(0x163)},'totalQty':{'$sum':_0x2fb5e0(0x13f)},'unit':{'$first':_0x2fb5e0(0x116)},'secondary_unit':{'$first':_0x2fb5e0(0x12f)}}}]);_0xedb514[_0x2fb5e0(0xef)](_0x3ddd4e);}catch(_0x5c15ae){_0xedb514['json'](_0x5c15ae);}}),router['post'](a0_0x16bc04(0x104),auth,async(_0x22e724,_0x583752)=>{var _0x538a32=a0_0x16bc04;const {product_category:_0x3888f3,transaction_category:_0x5a6759,transaction_date_from:_0x4ca7da,transaction_date_to:_0x6ffe19,warehouse_category:_0x3bb770,item_code:_0x268a5e}=_0x22e724[_0x538a32(0x165)];console[_0x538a32(0x16d)](_0x3bb770);if(_0x3888f3=='rm'){if(_0x3bb770=='all'){var _0x3e583d=await purchases[_0x538a32(0x134)]([{'$match':{'date':{'$gte':_0x4ca7da,'$lte':_0x6ffe19}}},{'$lookup':{'from':_0x538a32(0x108),'let':{'invoice':_0x538a32(0x135)},'pipeline':[{'$unwind':'$product_details'},{'$match':{'$expr':{'$eq':[_0x538a32(0x113),_0x538a32(0x140)]}}},{'$project':{'_id':_0x538a32(0x161),'product_name':_0x538a32(0xec),'product_code':'$product_details.product_code','quantity_available':_0x538a32(0x12a),'warehouse_name':'$name','warehouse_room':_0x538a32(0x11f),'invoice':_0x538a32(0x140),'production_date':'$product_details.production_date','expiry_date':_0x538a32(0x12c),'UOM':_0x538a32(0xf5)}}],'as':'warehouse_data'}}]);_0x3e583d[_0x538a32(0x121)]={},await Promise[_0x538a32(0x10f)](_0x3e583d[_0x538a32(0x111)](async _0x762b42=>{var _0x13d885=_0x538a32;_0x3e583d[_0x13d885(0x121)][_0x762b42[_0x13d885(0x112)]]=[],await Promise[_0x13d885(0x10f)](_0x762b42[_0x13d885(0x11c)]['map'](async _0x47d673=>{var _0x28a496=_0x13d885;const _0x566539=await sales[_0x28a496(0x134)]([{'$unwind':'$sale_product'},{'$match':{'sale_product.id_transaction_from':_0x47d673[_0x28a496(0x149)]['valueOf'](),'sale_product.invoice':_0x47d673[_0x28a496(0x112)]}},{'$project':{'_id':_0x28a496(0xfb),'product_name':'$sale_product.product_name','product_code':_0x28a496(0x10c),'quantity_available':_0x28a496(0x129),'warehouse_name':_0x28a496(0x11a),'warehouse_room':_0x28a496(0x156),'product_invoice':'$sale_product.invoice','invoice':_0x28a496(0x135),'id_transaction_from':_0x28a496(0x14a),'date':'$date','production_date':_0x28a496(0x11b),'expiry_date':_0x28a496(0x107),'UOM':_0x28a496(0x15d)}}]);_0x566539[_0x28a496(0x14d)]>0x0&&_0x3e583d[_0x28a496(0x121)][_0x762b42[_0x28a496(0x112)]][_0x28a496(0x14b)](..._0x566539);}));})),_0x3e583d[_0x538a32(0x121)]=_0x3e583d[_0x538a32(0x121)],_0x3e583d[_0x538a32(0x169)]={},await Promise['all'](_0x3e583d['map'](async _0x32f9bc=>{var _0x51af7f=_0x538a32;_0x3e583d[_0x51af7f(0x169)][_0x32f9bc['invoice']]=[],await Promise[_0x51af7f(0x10f)](_0x32f9bc[_0x51af7f(0x11c)][_0x51af7f(0x111)](async _0x7db497=>{var _0x47d191=_0x51af7f;const _0x2a0d12=await adjustment[_0x47d191(0x134)]([{'$unwind':'$product'},{'$match':{'product.id_transaction_from':_0x7db497[_0x47d191(0x149)][_0x47d191(0x119)](),'product.invoice':_0x7db497[_0x47d191(0x112)]}},{'$project':{'_id':_0x47d191(0x128),'product_name':_0x47d191(0x10b),'product_code':'$product.product_code','quantity_available':'$product.new_adjust_qty','warehouse_name':'$warehouse_name','warehouse_room':_0x47d191(0x12d),'product_invoice':_0x47d191(0x10e),'invoice':_0x47d191(0x135),'id_transaction_from':_0x47d191(0x10a),'date':_0x47d191(0xf7),'production_date':_0x47d191(0x153),'expiry_date':'$product.expiry_date','UOM':_0x47d191(0xe8)}}]);_0x2a0d12['length']>0x0&&_0x3e583d[_0x47d191(0x169)][_0x32f9bc['invoice']][_0x47d191(0x14b)](..._0x2a0d12);}));})),_0x3e583d[_0x538a32(0x124)]={},await Promise[_0x538a32(0x10f)](_0x3e583d[_0x538a32(0x111)](async _0x5e0820=>{var _0x27b30e=_0x538a32;_0x3e583d[_0x27b30e(0x124)][_0x5e0820['invoice']]=[],await Promise[_0x27b30e(0x10f)](_0x5e0820['warehouse_data'][_0x27b30e(0x111)](async _0x19f63f=>{var _0x2b5c85=_0x27b30e;const _0x2d3e28=await transfers[_0x2b5c85(0x134)]([{'$unwind':_0x2b5c85(0x14c)},{'$match':{'product.id_transaction_id':_0x19f63f[_0x2b5c85(0x149)][_0x2b5c85(0x119)](),'product.To_invoice':_0x19f63f['invoice']}},{'$project':{'_id':_0x2b5c85(0x128),'product_name':_0x2b5c85(0x10b),'product_code':_0x2b5c85(0x15b),'quantity_available':_0x2b5c85(0xf4),'warehouse_name':_0x2b5c85(0x148),'warehouse_room':_0x2b5c85(0x12d),'product_invoice':_0x2b5c85(0x16f),'invoice':'$invoice','id_transaction_from':'$product.id_transaction_id','date':_0x2b5c85(0xf7),'production_date':'$product.production_date','expiry_date':_0x2b5c85(0x163),'UOM':_0x2b5c85(0xe8)}}]);_0x2d3e28[_0x2b5c85(0x14d)]>0x0&&_0x3e583d[_0x2b5c85(0x124)][_0x5e0820[_0x2b5c85(0x112)]]['push'](..._0x2d3e28);}));})),_0x583752['json']({'purchases_warehouse':_0x3e583d,'data_sales':_0x3e583d['data_sales'],'data_adjustment':_0x3e583d[_0x538a32(0x169)],'data_transfer':_0x3e583d['data_transfer']});}else{var _0x3e583d=await purchases[_0x538a32(0x134)]([{'$match':{'warehouse_name':_0x3bb770,'date':{'$gte':_0x4ca7da,'$lte':_0x6ffe19}}},{'$lookup':{'from':'warehouses','let':{'invoice':'$invoice'},'pipeline':[{'$unwind':_0x538a32(0x152)},{'$match':{'$expr':{'$eq':['$$invoice',_0x538a32(0x140)]}}},{'$project':{'_id':_0x538a32(0x161),'product_name':_0x538a32(0xec),'product_code':_0x538a32(0x132),'quantity_available':_0x538a32(0x12a),'warehouse_name':'$name','warehouse_room':_0x538a32(0x11f),'invoice':'$product_details.invoice','production_date':_0x538a32(0x158),'expiry_date':_0x538a32(0x12c),'UOM':_0x538a32(0xf5)}}],'as':_0x538a32(0x11c)}}]);_0x3e583d['data_sales']={},await Promise[_0x538a32(0x10f)](_0x3e583d[_0x538a32(0x111)](async _0x59268d=>{var _0x5e50df=_0x538a32;_0x3e583d[_0x5e50df(0x121)][_0x59268d[_0x5e50df(0x112)]]=[],await Promise['all'](_0x59268d[_0x5e50df(0x11c)][_0x5e50df(0x111)](async _0x1940cd=>{var _0x36fc78=_0x5e50df;const _0x286993=await sales[_0x36fc78(0x134)]([{'$unwind':_0x36fc78(0xf8)},{'$match':{'sale_product.id_transaction_from':_0x1940cd[_0x36fc78(0x149)]['valueOf'](),'sale_product.invoice':_0x1940cd[_0x36fc78(0x112)]}},{'$project':{'_id':'$sale_product._id','product_name':_0x36fc78(0x114),'product_code':'$sale_product.product_code','quantity_available':_0x36fc78(0x129),'warehouse_name':'$warehouse_name','warehouse_room':_0x36fc78(0x156),'product_invoice':'$sale_product.invoice','invoice':_0x36fc78(0x135),'id_transaction_from':_0x36fc78(0x14a),'date':_0x36fc78(0xf7),'production_date':_0x36fc78(0x11b),'expiry_date':_0x36fc78(0x107),'UOM':_0x36fc78(0x15d)}}]);_0x286993['length']>0x0&&_0x3e583d[_0x36fc78(0x121)][_0x59268d[_0x36fc78(0x112)]]['push'](..._0x286993);}));})),_0x3e583d[_0x538a32(0x121)]=_0x3e583d['data_sales'],_0x3e583d['data_adjustment']={},await Promise[_0x538a32(0x10f)](_0x3e583d['map'](async _0x2773b1=>{var _0x4d71ba=_0x538a32;_0x3e583d['data_adjustment'][_0x2773b1[_0x4d71ba(0x112)]]=[],await Promise[_0x4d71ba(0x10f)](_0x2773b1[_0x4d71ba(0x11c)][_0x4d71ba(0x111)](async _0x2a32c3=>{var _0x2cc490=_0x4d71ba;const _0x3bfedc=await adjustment[_0x2cc490(0x134)]([{'$unwind':_0x2cc490(0x14c)},{'$match':{'product.id_transaction_from':_0x2a32c3[_0x2cc490(0x149)][_0x2cc490(0x119)](),'product.invoice':_0x2a32c3['invoice']}},{'$project':{'_id':_0x2cc490(0x128),'product_name':'$product.product_name','product_code':_0x2cc490(0x15b),'quantity_available':'$product.new_adjust_qty','warehouse_name':_0x2cc490(0x11a),'warehouse_room':_0x2cc490(0x12d),'product_invoice':_0x2cc490(0x10e),'invoice':'$invoice','id_transaction_from':'$product.id_transaction_from','date':_0x2cc490(0xf7),'production_date':'$product.production_date','expiry_date':_0x2cc490(0x163),'UOM':_0x2cc490(0xe8)}}]);_0x3bfedc['length']>0x0&&_0x3e583d[_0x2cc490(0x169)][_0x2773b1[_0x2cc490(0x112)]][_0x2cc490(0x14b)](..._0x3bfedc);}));})),_0x3e583d['data_transfer']={},await Promise['all'](_0x3e583d['map'](async _0x4f2d84=>{var _0x585ed9=_0x538a32;_0x3e583d[_0x585ed9(0x124)][_0x4f2d84[_0x585ed9(0x112)]]=[],await Promise[_0x585ed9(0x10f)](_0x4f2d84['warehouse_data'][_0x585ed9(0x111)](async _0x536138=>{var _0x49d04f=_0x585ed9;const _0x3299ba=await transfers[_0x49d04f(0x134)]([{'$unwind':_0x49d04f(0x14c)},{'$match':{'product.id_transaction_id':_0x536138[_0x49d04f(0x149)][_0x49d04f(0x119)](),'product.To_invoice':_0x536138[_0x49d04f(0x112)]}},{'$project':{'_id':_0x49d04f(0x128),'product_name':_0x49d04f(0x10b),'product_code':'$product.product_code','quantity_available':_0x49d04f(0xf4),'warehouse_name':_0x49d04f(0x148),'warehouse_room':_0x49d04f(0x12d),'product_invoice':_0x49d04f(0x16f),'invoice':_0x49d04f(0x135),'id_transaction_from':'$product.id_transaction_id','date':_0x49d04f(0xf7),'production_date':'$product.production_date','expiry_date':_0x49d04f(0x163),'UOM':_0x49d04f(0xe8)}}]);_0x3299ba[_0x49d04f(0x14d)]>0x0&&_0x3e583d[_0x49d04f(0x124)][_0x4f2d84[_0x49d04f(0x112)]]['push'](..._0x3299ba);}));})),_0x583752[_0x538a32(0xef)]({'purchases_warehouse':_0x3e583d,'data_sales':_0x3e583d[_0x538a32(0x121)],'data_adjustment':_0x3e583d[_0x538a32(0x169)],'data_transfer':_0x3e583d[_0x538a32(0x124)]});}}else{if(_0x3bb770=='all'){var _0x3e583d=await purchases_finished[_0x538a32(0x134)]([{'$match':{'date':{'$gte':_0x4ca7da,'$lte':_0x6ffe19}}},{'$lookup':{'from':'warehouses','let':{'invoice':_0x538a32(0x135)},'pipeline':[{'$unwind':'$product_details'},{'$match':{'$expr':{'$eq':[_0x538a32(0x113),_0x538a32(0x140)]}}},{'$project':{'_id':_0x538a32(0x161),'product_name':_0x538a32(0xec),'product_code':'$product_details.product_code','quantity_available':_0x538a32(0x12a),'warehouse_name':_0x538a32(0x125),'warehouse_room':_0x538a32(0x11f),'invoice':_0x538a32(0x140),'production_date':_0x538a32(0x158),'expiry_date':_0x538a32(0x12c),'UOM':_0x538a32(0xf5)}}],'as':_0x538a32(0x11c)}}]);_0x3e583d[_0x538a32(0x121)]={},await Promise[_0x538a32(0x10f)](_0x3e583d[_0x538a32(0x111)](async _0x39ddbd=>{var _0x53d69c=_0x538a32;_0x3e583d[_0x53d69c(0x121)][_0x39ddbd[_0x53d69c(0x112)]]=[],await Promise[_0x53d69c(0x10f)](_0x39ddbd[_0x53d69c(0x11c)]['map'](async _0x451987=>{var _0x447db2=_0x53d69c;const _0x58ccc2=await sales_finished[_0x447db2(0x134)]([{'$unwind':_0x447db2(0xf8)},{'$match':{'sale_product.id_transaction_from':_0x451987['_id'][_0x447db2(0x119)](),'sale_product.invoice':_0x451987[_0x447db2(0x112)]}},{'$project':{'_id':_0x447db2(0xfb),'product_name':_0x447db2(0x114),'product_code':_0x447db2(0x10c),'quantity_available':_0x447db2(0x129),'warehouse_name':_0x447db2(0x11a),'warehouse_room':_0x447db2(0x156),'product_invoice':_0x447db2(0x120),'invoice':'$invoice','id_transaction_from':_0x447db2(0x14a),'date':_0x447db2(0xf7),'production_date':_0x447db2(0x11b),'expiry_date':'$sale_product.expiry_date','UOM':'$sale_product.unit'}}]);_0x58ccc2[_0x447db2(0x14d)]>0x0&&_0x3e583d['data_sales'][_0x39ddbd['invoice']][_0x447db2(0x14b)](..._0x58ccc2);}));})),_0x3e583d[_0x538a32(0x121)]=_0x3e583d[_0x538a32(0x121)],_0x3e583d[_0x538a32(0x169)]={},await Promise[_0x538a32(0x10f)](_0x3e583d[_0x538a32(0x111)](async _0x32c1b0=>{var _0x56af82=_0x538a32;_0x3e583d[_0x56af82(0x169)][_0x32c1b0[_0x56af82(0x112)]]=[],await Promise[_0x56af82(0x10f)](_0x32c1b0[_0x56af82(0x11c)][_0x56af82(0x111)](async _0x1cbdd6=>{var _0x5a5c2c=_0x56af82;const _0x5c665c=await adjustment_finished[_0x5a5c2c(0x134)]([{'$unwind':_0x5a5c2c(0x14c)},{'$match':{'product.id_transaction_from':_0x1cbdd6[_0x5a5c2c(0x149)]['valueOf'](),'product.invoice':_0x1cbdd6[_0x5a5c2c(0x112)]}},{'$project':{'_id':'$product._id','product_name':'$product.product_name','product_code':'$product.product_code','quantity_available':'$product.new_adjust_qty','warehouse_name':_0x5a5c2c(0x11a),'warehouse_room':'$product.room_names','product_invoice':_0x5a5c2c(0x10e),'invoice':_0x5a5c2c(0x135),'id_transaction_from':_0x5a5c2c(0x10a),'date':'$date','production_date':_0x5a5c2c(0x153),'expiry_date':_0x5a5c2c(0x163),'UOM':_0x5a5c2c(0xe8)}}]);_0x5c665c['length']>0x0&&_0x3e583d[_0x5a5c2c(0x169)][_0x32c1b0[_0x5a5c2c(0x112)]][_0x5a5c2c(0x14b)](..._0x5c665c);}));})),_0x3e583d[_0x538a32(0x124)]={},await Promise[_0x538a32(0x10f)](_0x3e583d[_0x538a32(0x111)](async _0x256478=>{var _0x490d97=_0x538a32;_0x3e583d['data_transfer'][_0x256478[_0x490d97(0x112)]]=[],await Promise['all'](_0x256478[_0x490d97(0x11c)]['map'](async _0x134c0f=>{var _0x7ce67e=_0x490d97;const _0x3a1569=await transfers_finished[_0x7ce67e(0x134)]([{'$unwind':_0x7ce67e(0x14c)},{'$match':{'product.id_transaction':_0x134c0f[_0x7ce67e(0x149)][_0x7ce67e(0x119)](),'product.from_invoice':_0x134c0f[_0x7ce67e(0x112)]}},{'$project':{'_id':_0x7ce67e(0x128),'product_name':'$product.product_name','product_code':'$product.product_code','quantity_available':_0x7ce67e(0xf4),'warehouse_name':'$to_warehouse','warehouse_room':'$product.room_names','product_invoice':'$product.to_room_name','invoice':_0x7ce67e(0x135),'id_transaction_from':'$product.id_transaction','date':_0x7ce67e(0xf7),'production_date':_0x7ce67e(0x153),'expiry_date':_0x7ce67e(0x163),'UOM':_0x7ce67e(0xe8)}}]);_0x3a1569['length']>0x0&&_0x3e583d[_0x7ce67e(0x124)][_0x256478[_0x7ce67e(0x112)]][_0x7ce67e(0x14b)](..._0x3a1569);}));})),_0x583752[_0x538a32(0xef)]({'purchases_warehouse':_0x3e583d,'data_sales':_0x3e583d[_0x538a32(0x121)],'data_adjustment':_0x3e583d[_0x538a32(0x169)],'data_transfer':_0x3e583d[_0x538a32(0x124)]});}else{var _0x3e583d=await purchases_finished[_0x538a32(0x134)]([{'$match':{'warehouse_name':_0x3bb770,'date':{'$gte':_0x4ca7da,'$lte':_0x6ffe19}}},{'$lookup':{'from':_0x538a32(0x108),'let':{'invoice':_0x538a32(0x135)},'pipeline':[{'$unwind':_0x538a32(0x152)},{'$match':{'$expr':{'$eq':[_0x538a32(0x113),'$product_details.invoice']}}},{'$project':{'_id':'$product_details._id','product_name':'$product_details.product_name','product_code':_0x538a32(0x132),'quantity_available':'$product_details.product_stock','warehouse_name':_0x538a32(0x125),'warehouse_room':_0x538a32(0x11f),'invoice':'$product_details.invoice','production_date':'$product_details.production_date','expiry_date':_0x538a32(0x12c),'UOM':_0x538a32(0xf5)}}],'as':_0x538a32(0x11c)}}]);_0x3e583d['data_sales']={},await Promise['all'](_0x3e583d[_0x538a32(0x111)](async _0x58aab0=>{var _0x5bffb4=_0x538a32;_0x3e583d['data_sales'][_0x58aab0[_0x5bffb4(0x112)]]=[],await Promise['all'](_0x58aab0[_0x5bffb4(0x11c)][_0x5bffb4(0x111)](async _0x354431=>{var _0x29770a=_0x5bffb4;const _0x498090=await sales_finished[_0x29770a(0x134)]([{'$unwind':_0x29770a(0xf8)},{'$match':{'sale_product.id_transaction_from':_0x354431['_id'][_0x29770a(0x119)](),'sale_product.invoice':_0x354431[_0x29770a(0x112)]}},{'$project':{'_id':_0x29770a(0xfb),'product_name':_0x29770a(0x114),'product_code':_0x29770a(0x10c),'quantity_available':_0x29770a(0x129),'warehouse_name':_0x29770a(0x11a),'warehouse_room':_0x29770a(0x156),'product_invoice':_0x29770a(0x120),'invoice':'$invoice','id_transaction_from':'$sale_product.id_transaction_from','date':_0x29770a(0xf7),'production_date':_0x29770a(0x11b),'expiry_date':_0x29770a(0x107),'UOM':_0x29770a(0x15d)}}]);_0x498090['length']>0x0&&_0x3e583d[_0x29770a(0x121)][_0x58aab0['invoice']][_0x29770a(0x14b)](..._0x498090);}));})),_0x3e583d[_0x538a32(0x121)]=_0x3e583d[_0x538a32(0x121)],_0x3e583d['data_adjustment']={},await Promise[_0x538a32(0x10f)](_0x3e583d['map'](async _0x1fa0c9=>{var _0xf50445=_0x538a32;_0x3e583d[_0xf50445(0x169)][_0x1fa0c9[_0xf50445(0x112)]]=[],await Promise['all'](_0x1fa0c9[_0xf50445(0x11c)][_0xf50445(0x111)](async _0xf5995c=>{var _0x44005e=_0xf50445;const _0x2f1585=await adjustment_finished[_0x44005e(0x134)]([{'$unwind':_0x44005e(0x14c)},{'$match':{'product.id_transaction_from':_0xf5995c[_0x44005e(0x149)][_0x44005e(0x119)](),'product.invoice':_0xf5995c[_0x44005e(0x112)]}},{'$project':{'_id':'$product._id','product_name':_0x44005e(0x10b),'product_code':'$product.product_code','quantity_available':_0x44005e(0x126),'warehouse_name':_0x44005e(0x11a),'warehouse_room':_0x44005e(0x12d),'product_invoice':_0x44005e(0x10e),'invoice':_0x44005e(0x135),'id_transaction_from':_0x44005e(0x10a),'date':_0x44005e(0xf7),'production_date':_0x44005e(0x153),'expiry_date':_0x44005e(0x163),'UOM':_0x44005e(0xe8)}}]);_0x2f1585[_0x44005e(0x14d)]>0x0&&_0x3e583d[_0x44005e(0x169)][_0x1fa0c9[_0x44005e(0x112)]]['push'](..._0x2f1585);}));})),_0x3e583d[_0x538a32(0x124)]={},await Promise['all'](_0x3e583d[_0x538a32(0x111)](async _0x266d2f=>{var _0x247c20=_0x538a32;_0x3e583d['data_transfer'][_0x266d2f[_0x247c20(0x112)]]=[],await Promise[_0x247c20(0x10f)](_0x266d2f[_0x247c20(0x11c)][_0x247c20(0x111)](async _0xbcc4a7=>{var _0x250a58=_0x247c20;const _0x45e7fb=await transfers_finished['aggregate']([{'$unwind':'$product'},{'$match':{'product.id_transaction':_0xbcc4a7[_0x250a58(0x149)]['valueOf'](),'product.from_invoice':_0xbcc4a7[_0x250a58(0x112)]}},{'$project':{'_id':_0x250a58(0x128),'product_name':'$product.product_name','product_code':_0x250a58(0x15b),'quantity_available':'$product.to_quantity','warehouse_name':_0x250a58(0x148),'warehouse_room':_0x250a58(0x12d),'product_invoice':_0x250a58(0x16f),'invoice':_0x250a58(0x135),'id_transaction_from':_0x250a58(0x127),'date':_0x250a58(0xf7),'production_date':_0x250a58(0x153),'expiry_date':'$product.expiry_date','UOM':_0x250a58(0xe8)}}]);_0x45e7fb[_0x250a58(0x14d)]>0x0&&_0x3e583d['data_transfer'][_0x266d2f[_0x250a58(0x112)]]['push'](..._0x45e7fb);}));})),_0x583752[_0x538a32(0xef)]({'purchases_warehouse':_0x3e583d,'data_sales':_0x3e583d[_0x538a32(0x121)],'data_adjustment':_0x3e583d[_0x538a32(0x169)],'data_transfer':_0x3e583d[_0x538a32(0x124)]});}}}),router[a0_0x16bc04(0x15e)](a0_0x16bc04(0x14f),auth,async(_0xe001fe,_0x4c9e77)=>{var _0x2af8bc=a0_0x16bc04;const {product_category:_0x1d5139,transaction_category:_0x505af2,transaction_date_from:_0x4f0d92,transaction_date_to:_0x2ccb71,warehouse_category:_0x21f919,item_code:_0x27e9ea}=_0xe001fe[_0x2af8bc(0x165)];console[_0x2af8bc(0x16d)](_0x21f919);if(_0x21f919==_0x2af8bc(0x10f)){console[_0x2af8bc(0x16d)](_0x27e9ea[_0x2af8bc(0x14d)]);if(_0x27e9ea[_0x2af8bc(0x14d)]>0x0){var _0x3cd8c9=await purchases_spmx[_0x2af8bc(0x134)]([{'$match':{'date':{'$gte':_0x4f0d92,'$lte':_0x2ccb71}}},{'$unwind':_0x2af8bc(0x14c)},{'$match':{'product.product_code':_0x27e9ea}},{'$group':{'_id':{'invoice':_0x2af8bc(0x135),'date':_0x2af8bc(0xf7),'product_code':_0x2af8bc(0x15b),'curing_spmx':_0x2af8bc(0xf9),'extenders_spmx':_0x2af8bc(0x100),'spicemix_spmx':_0x2af8bc(0x15c)},'type_cat':{'$first':_0x2af8bc(0x16e)},'unit_spmx':{'$first':_0x2af8bc(0x109)},'warehouse_name':{'$first':'$warehouse_name'},'total_curing_spmx_qty':{'$sum':_0x2af8bc(0xf6)},'total_extenders_spmx_qty':{'$sum':_0x2af8bc(0x144)},'total_spicemix_spmx_qty':{'$sum':'$product.spicemix_spmx_qty'}}}]),_0x481e0b=await sales_spmx[_0x2af8bc(0x134)]([{'$match':{'date':{'$gte':_0x4f0d92,'$lte':_0x2ccb71},'finalize':'True'}},{'$unwind':_0x2af8bc(0xf8)},{'$match':{'sale_product.product_code':_0x27e9ea}},{'$group':{'_id':{'invoice':_0x2af8bc(0x135),'date':_0x2af8bc(0xf7),'product_code':'$sale_product.product_code','curing_spmx':'$sale_product.curing_spmx','extenders_spmx':_0x2af8bc(0x13e),'spicemix_spmx':_0x2af8bc(0xea)},'type_cat':{'$first':'OUTGOING'},'unit_spmx':{'$first':'$sale_product.unit_spmx'},'warehouse_name':{'$first':_0x2af8bc(0x11a)},'total_curing_spmx_qty':{'$sum':_0x2af8bc(0x10d)},'total_extenders_spmx_qty':{'$sum':_0x2af8bc(0x160)},'total_spicemix_spmx_qty':{'$sum':_0x2af8bc(0xf3)}}}]);_0x4c9e77[_0x2af8bc(0xef)]({'purchases_warehouse':_0x3cd8c9,'sales':_0x481e0b});}else{var _0x3cd8c9=await purchases_spmx[_0x2af8bc(0x134)]([{'$match':{'date':{'$gte':_0x4f0d92,'$lte':_0x2ccb71}}},{'$unwind':_0x2af8bc(0x14c)},{'$group':{'_id':{'invoice':_0x2af8bc(0x135),'date':_0x2af8bc(0xf7),'product_code':_0x2af8bc(0x15b),'curing_spmx':_0x2af8bc(0xf9),'extenders_spmx':_0x2af8bc(0x100),'spicemix_spmx':_0x2af8bc(0x15c)},'type_cat':{'$first':_0x2af8bc(0x16e)},'unit_spmx':{'$first':_0x2af8bc(0x109)},'warehouse_name':{'$first':_0x2af8bc(0x11a)},'total_curing_spmx_qty':{'$sum':_0x2af8bc(0xf6)},'total_extenders_spmx_qty':{'$sum':_0x2af8bc(0x144)},'total_spicemix_spmx_qty':{'$sum':_0x2af8bc(0x102)}}}]),_0x481e0b=await sales_spmx[_0x2af8bc(0x134)]([{'$match':{'date':{'$gte':_0x4f0d92,'$lte':_0x2ccb71},'finalize':_0x2af8bc(0x157)}},{'$unwind':_0x2af8bc(0xf8)},{'$group':{'_id':{'invoice':_0x2af8bc(0x135),'date':_0x2af8bc(0xf7),'product_code':_0x2af8bc(0x10c),'curing_spmx':_0x2af8bc(0xfc),'extenders_spmx':_0x2af8bc(0x13e),'spicemix_spmx':_0x2af8bc(0xea)},'type_cat':{'$first':_0x2af8bc(0x106)},'unit_spmx':{'$first':_0x2af8bc(0xee)},'warehouse_name':{'$first':_0x2af8bc(0x11a)},'total_curing_spmx_qty':{'$sum':_0x2af8bc(0x10d)},'total_extenders_spmx_qty':{'$sum':'$sale_product.extenders_spmx_qty'},'total_spicemix_spmx_qty':{'$sum':_0x2af8bc(0xf3)}}}]);_0x4c9e77['json']({'purchases_warehouse':_0x3cd8c9,'sales':_0x481e0b});}}else{console[_0x2af8bc(0x16d)](_0x4f0d92[_0x2af8bc(0x14d)]);if(_0x4f0d92[_0x2af8bc(0x14d)]==0x0){var _0x3cd8c9=await purchases_spmx[_0x2af8bc(0x134)]([{'$match':{'warehouse_name':_0x21f919}},{'$unwind':_0x2af8bc(0x14c)},{'$group':{'_id':{'invoice':_0x2af8bc(0x135),'date':_0x2af8bc(0xf7),'product_code':_0x2af8bc(0x15b),'curing_spmx':_0x2af8bc(0xf9),'extenders_spmx':_0x2af8bc(0x100),'spicemix_spmx':'$product.spicemix_spmx'},'type_cat':{'$first':_0x2af8bc(0x16e)},'unit_spmx':{'$first':_0x2af8bc(0x109)},'warehouse_name':{'$first':_0x2af8bc(0x11a)},'total_curing_spmx_qty':{'$sum':_0x2af8bc(0xf6)},'total_extenders_spmx_qty':{'$sum':'$product.extenders_spmx_qty'},'total_spicemix_spmx_qty':{'$sum':_0x2af8bc(0x102)}}}]),_0x481e0b=await sales_spmx[_0x2af8bc(0x134)]([{'$match':{'finalize':'True','warehouse_name':_0x21f919}},{'$unwind':'$sale_product'},{'$group':{'_id':{'invoice':_0x2af8bc(0x135),'date':'$date','product_code':_0x2af8bc(0x10c),'curing_spmx':_0x2af8bc(0xfc),'extenders_spmx':'$sale_product.extenders_spmx','spicemix_spmx':'$sale_product.spicemix_spmx'},'type_cat':{'$first':_0x2af8bc(0x106)},'unit_spmx':{'$first':_0x2af8bc(0xee)},'warehouse_name':{'$first':_0x2af8bc(0x11a)},'total_curing_spmx_qty':{'$sum':_0x2af8bc(0x10d)},'total_extenders_spmx_qty':{'$sum':_0x2af8bc(0x160)},'total_spicemix_spmx_qty':{'$sum':_0x2af8bc(0xf3)}}}]);_0x4c9e77['json']({'purchases_warehouse':_0x3cd8c9,'sales':_0x481e0b});}else{var _0x3cd8c9=await purchases_spmx[_0x2af8bc(0x134)]([{'$match':{'date':{'$gte':_0x4f0d92,'$lte':_0x2ccb71},'warehouse_name':_0x21f919}},{'$unwind':_0x2af8bc(0x14c)},{'$group':{'_id':{'invoice':_0x2af8bc(0x135),'date':_0x2af8bc(0xf7),'product_code':_0x2af8bc(0x15b),'curing_spmx':'$product.curing_spmx','extenders_spmx':_0x2af8bc(0x100),'spicemix_spmx':_0x2af8bc(0x15c)},'type_cat':{'$first':_0x2af8bc(0x16e)},'unit_spmx':{'$first':_0x2af8bc(0x109)},'warehouse_name':{'$first':'$warehouse_name'},'total_curing_spmx_qty':{'$sum':_0x2af8bc(0xf6)},'total_extenders_spmx_qty':{'$sum':_0x2af8bc(0x144)},'total_spicemix_spmx_qty':{'$sum':_0x2af8bc(0x102)}}}]),_0x481e0b=await sales_spmx[_0x2af8bc(0x134)]([{'$match':{'date':{'$gte':_0x4f0d92,'$lte':_0x2ccb71},'finalize':_0x2af8bc(0x157),'warehouse_name':_0x21f919}},{'$unwind':_0x2af8bc(0xf8)},{'$group':{'_id':{'invoice':_0x2af8bc(0x135),'date':_0x2af8bc(0xf7),'product_code':_0x2af8bc(0x10c),'curing_spmx':_0x2af8bc(0xfc),'extenders_spmx':'$sale_product.extenders_spmx','spicemix_spmx':_0x2af8bc(0xea)},'type_cat':{'$first':_0x2af8bc(0x106)},'unit_spmx':{'$first':_0x2af8bc(0xee)},'warehouse_name':{'$first':'$warehouse_name'},'total_curing_spmx_qty':{'$sum':_0x2af8bc(0x10d)},'total_extenders_spmx_qty':{'$sum':_0x2af8bc(0x160)},'total_spicemix_spmx_qty':{'$sum':_0x2af8bc(0xf3)}}}]);_0x4c9e77[_0x2af8bc(0xef)]({'purchases_warehouse':_0x3cd8c9,'sales':_0x481e0b});}}}),router['get'](a0_0x16bc04(0x164),auth,async(_0x405f10,_0xd8daea)=>{var _0x220d9f=a0_0x16bc04;try{const _0x147c03=_0x405f10[_0x220d9f(0xfd)]['id'];var _0x54c08a=await purchases_finished[_0x220d9f(0x166)](_0x147c03);const _0x422055=await master_shop[_0x220d9f(0x101)](),_0x2d51da=_0x405f10['user'],_0x1af580=await profile[_0x220d9f(0x14e)]({'email':_0x2d51da[_0x220d9f(0xeb)]});if(_0x422055[0x0][_0x220d9f(0x11e)]==_0x220d9f(0xed))var _0x119eef=users[_0x220d9f(0x143)];else{if(_0x422055[0x0][_0x220d9f(0x11e)]=='Hindi')var _0x119eef=users[_0x220d9f(0x141)];else{if(_0x422055[0x0][_0x220d9f(0x11e)]==_0x220d9f(0xf1))var _0x119eef=users['German'];else{if(_0x422055[0x0][_0x220d9f(0x11e)]==_0x220d9f(0x151))var _0x119eef=users[_0x220d9f(0x151)];else{if(_0x422055[0x0][_0x220d9f(0x11e)]=='French')var _0x119eef=users[_0x220d9f(0x15a)];else{if(_0x422055[0x0][_0x220d9f(0x11e)]==_0x220d9f(0x16a))var _0x119eef=users[_0x220d9f(0x12b)];else{if(_0x422055[0x0][_0x220d9f(0x11e)]==_0x220d9f(0x138))var _0x119eef=users[_0x220d9f(0x138)];else{if(_0x422055[0x0][_0x220d9f(0x11e)]=='Arabic\x20(ae)')var _0x119eef=users[_0x220d9f(0xe9)];}}}}}}}_0xd8daea[_0x220d9f(0x133)](_0x220d9f(0x11d),{'success':_0x405f10[_0x220d9f(0xf2)]('success'),'errors':_0x405f10[_0x220d9f(0xf2)](_0x220d9f(0x16b)),'master_shop':_0x422055,'profile':_0x1af580,'role':_0x2d51da,'language':_0x119eef,'data':_0x54c08a});}catch(_0x95c2a3){_0xd8daea[_0x220d9f(0xef)](_0x95c2a3);}}),router[a0_0x16bc04(0x168)](a0_0x16bc04(0x117),auth,async(_0x47f963,_0x5b7ddc)=>{var _0x4cbf45=a0_0x16bc04;try{const _0x2aecd8=_0x47f963[_0x4cbf45(0xfd)]['id'];var _0x507b11=await sales_finished[_0x4cbf45(0x166)](_0x2aecd8);const _0x46fea5=await master_shop[_0x4cbf45(0x101)](),_0x454543=_0x47f963['user'],_0x579048=await profile[_0x4cbf45(0x14e)]({'email':_0x454543[_0x4cbf45(0xeb)]});if(_0x46fea5[0x0]['language']==_0x4cbf45(0xed))var _0x695727=users[_0x4cbf45(0x143)];else{if(_0x46fea5[0x0][_0x4cbf45(0x11e)]==_0x4cbf45(0x141))var _0x695727=users[_0x4cbf45(0x141)];else{if(_0x46fea5[0x0][_0x4cbf45(0x11e)]==_0x4cbf45(0xf1))var _0x695727=users['German'];else{if(_0x46fea5[0x0][_0x4cbf45(0x11e)]==_0x4cbf45(0x151))var _0x695727=users['Spanish'];else{if(_0x46fea5[0x0][_0x4cbf45(0x11e)]=='French')var _0x695727=users[_0x4cbf45(0x15a)];else{if(_0x46fea5[0x0]['language']==_0x4cbf45(0x16a))var _0x695727=users['Portuguese'];else{if(_0x46fea5[0x0][_0x4cbf45(0x11e)]=='Chinese')var _0x695727=users[_0x4cbf45(0x138)];else{if(_0x46fea5[0x0][_0x4cbf45(0x11e)]=='Arabic\x20(ae)')var _0x695727=users[_0x4cbf45(0xe9)];}}}}}}}_0x5b7ddc[_0x4cbf45(0x133)](_0x4cbf45(0x105),{'success':_0x47f963[_0x4cbf45(0xf2)](_0x4cbf45(0x167)),'errors':_0x47f963['flash'](_0x4cbf45(0x16b)),'master_shop':_0x46fea5,'profile':_0x579048,'role':_0x454543,'language':_0x695727,'data':_0x507b11});}catch(_0x43aa6d){_0x5b7ddc[_0x4cbf45(0xef)](_0x43aa6d);}}),router[a0_0x16bc04(0x168)]('/viewdata_tf_fg/:id',auth,async(_0x3f5714,_0x5026aa)=>{var _0x27b4f2=a0_0x16bc04;try{const _0x4236a1=_0x3f5714[_0x27b4f2(0xfd)]['id'];var _0x4f2b37=await transfers_finished[_0x27b4f2(0x166)](_0x4236a1);const _0x220106=await master_shop['find'](),_0x311065=_0x3f5714['user'],_0x561a51=await profile[_0x27b4f2(0x14e)]({'email':_0x311065[_0x27b4f2(0xeb)]});if(_0x220106[0x0][_0x27b4f2(0x11e)]=='English\x20(US)')var _0x2f93dd=users[_0x27b4f2(0x143)];else{if(_0x220106[0x0]['language']=='Hindi')var _0x2f93dd=users[_0x27b4f2(0x141)];else{if(_0x220106[0x0][_0x27b4f2(0x11e)]==_0x27b4f2(0xf1))var _0x2f93dd=users[_0x27b4f2(0xf1)];else{if(_0x220106[0x0]['language']==_0x27b4f2(0x151))var _0x2f93dd=users[_0x27b4f2(0x151)];else{if(_0x220106[0x0][_0x27b4f2(0x11e)]==_0x27b4f2(0x15a))var _0x2f93dd=users[_0x27b4f2(0x15a)];else{if(_0x220106[0x0][_0x27b4f2(0x11e)]==_0x27b4f2(0x16a))var _0x2f93dd=users[_0x27b4f2(0x12b)];else{if(_0x220106[0x0][_0x27b4f2(0x11e)]==_0x27b4f2(0x138))var _0x2f93dd=users[_0x27b4f2(0x138)];else{if(_0x220106[0x0][_0x27b4f2(0x11e)]==_0x27b4f2(0x13b))var _0x2f93dd=users[_0x27b4f2(0xe9)];}}}}}}}_0x5026aa[_0x27b4f2(0x133)](_0x27b4f2(0x16c),{'success':_0x3f5714['flash'](_0x27b4f2(0x167)),'errors':_0x3f5714['flash'](_0x27b4f2(0x16b)),'master_shop':_0x220106,'profile':_0x561a51,'role':_0x311065,'language':_0x2f93dd,'data':_0x4f2b37});}catch(_0x4c0eb3){_0x5026aa['json'](_0x4c0eb3);}}),router[a0_0x16bc04(0x168)](a0_0x16bc04(0xff),auth,async(_0x11ec98,_0x487027)=>{var _0x1838ad=a0_0x16bc04;try{const {username:_0x5d58fa,email:_0x2d149b,role:_0x3f2b83}=_0x11ec98['user'],_0x296c63=_0x11ec98['user'],_0x1359dc=await profile[_0x1838ad(0x14e)]({'email':_0x296c63[_0x1838ad(0xeb)]}),_0x5245a2=await master_shop[_0x1838ad(0x101)](),_0x54fcd1=await warehouse[_0x1838ad(0x134)]([{'$match':{'status':_0x1838ad(0x162),'warehouse_category':_0x1838ad(0x12e)}},{'$group':{'_id':_0x1838ad(0x125),'name':{'$first':'$name'}}}]);if(_0x5245a2[0x0][_0x1838ad(0x11e)]==_0x1838ad(0xed))var _0x1f6028=users['English'];else{if(_0x5245a2[0x0][_0x1838ad(0x11e)]=='Hindi')var _0x1f6028=users[_0x1838ad(0x141)];else{if(_0x5245a2[0x0][_0x1838ad(0x11e)]==_0x1838ad(0xf1))var _0x1f6028=users[_0x1838ad(0xf1)];else{if(_0x5245a2[0x0]['language']=='Spanish')var _0x1f6028=users[_0x1838ad(0x151)];else{if(_0x5245a2[0x0][_0x1838ad(0x11e)]==_0x1838ad(0x15a))var _0x1f6028=users['French'];else{if(_0x5245a2[0x0][_0x1838ad(0x11e)]==_0x1838ad(0x16a))var _0x1f6028=users[_0x1838ad(0x12b)];else{if(_0x5245a2[0x0][_0x1838ad(0x11e)]==_0x1838ad(0x138))var _0x1f6028=users[_0x1838ad(0x138)];else{if(_0x5245a2[0x0][_0x1838ad(0x11e)]=='Arabic\x20(ae)')var _0x1f6028=users['Arabic'];}}}}}}}_0x487027['render'](_0x1838ad(0x13a),{'success':_0x11ec98[_0x1838ad(0xf2)](_0x1838ad(0x167)),'errors':_0x11ec98[_0x1838ad(0xf2)](_0x1838ad(0x16b)),'role':_0x296c63,'profile':_0x1359dc,'master_shop':_0x5245a2,'dataProcess':_0x54fcd1,'language':_0x1f6028});}catch(_0xda142){console[_0x1838ad(0x16d)](_0xda142);}}),module[a0_0x16bc04(0x147)]=router;