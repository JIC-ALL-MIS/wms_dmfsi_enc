const a0_0x190e2a=a0_0x75c2;function a0_0x75c2(_0x5d768e,_0x45acc8){const _0x524446=a0_0x5244();return a0_0x75c2=function(_0x75c266,_0x1e465e){_0x75c266=_0x75c266-0x150;let _0x1302b2=_0x524446[_0x75c266];return _0x1302b2;},a0_0x75c2(_0x5d768e,_0x45acc8);}(function(_0x14374f,_0x13900a){const _0x42da6d=a0_0x75c2,_0x2e4694=_0x14374f();while(!![]){try{const _0x397528=-parseInt(_0x42da6d(0x180))/0x1+-parseInt(_0x42da6d(0x16f))/0x2*(parseInt(_0x42da6d(0x156))/0x3)+parseInt(_0x42da6d(0x16a))/0x4*(parseInt(_0x42da6d(0x183))/0x5)+parseInt(_0x42da6d(0x160))/0x6+-parseInt(_0x42da6d(0x175))/0x7*(-parseInt(_0x42da6d(0x167))/0x8)+-parseInt(_0x42da6d(0x185))/0x9*(parseInt(_0x42da6d(0x163))/0xa)+-parseInt(_0x42da6d(0x153))/0xb*(-parseInt(_0x42da6d(0x184))/0xc);if(_0x397528===_0x13900a)break;else _0x2e4694['push'](_0x2e4694['shift']());}catch(_0x3c4301){_0x2e4694['push'](_0x2e4694['shift']());}}}(a0_0x5244,0x671d2));function a0_0x5244(){const _0xbb7949=['164mYImWK','False','invoice_incomings','plugin','supervisor_setup','70TtjKmw','units','purchases','brands','connection','Schema','119WUZHoS','product','now','customer_payment','invoice_init','s_payment','English','transfer_finished','staff','adjustment_finished','mongoose-auto-increment','737394RufpJw','no\x20product','sing_up','81430girlvK','12tkbNgX','1703772hhcXho','return_sales','return_purchases_finish','Enabled','exports','7496841eeGMcH','sales','suppliers','1698XMVowq','sales_spmx','c_payment','email_settings','initialize','suppliers_payment','profile','model','warehouse','Types','1545684yAxFnx','expenses','return_sales_finished','40niFmOb','Mixed','invoice_outgoings','expenses_type','155256fmJJCF','mongoose','purchases_spmx'];a0_0x5244=function(){return _0xbb7949;};return a0_0x5244();}const mongoose=require(a0_0x190e2a(0x168)),autoIncrement=require(a0_0x190e2a(0x17f));autoIncrement[a0_0x190e2a(0x15a)](mongoose[a0_0x190e2a(0x173)]);const sing_up_data=new mongoose[(a0_0x190e2a(0x174))]({'name':{'type':String},'email':{'type':String,'required':!![],'unique':!![]},'password':{'type':String,'required':!![]},'mobile':{'type':Number},'role':{'type':String,'require':!![]},'code':{'type':String},'isUsed':{'type':String,'default':a0_0x190e2a(0x16b)}}),sing_up=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x182),sing_up_data),profile_data=new mongoose[(a0_0x190e2a(0x174))]({'firstname':{'type':String},'lastname':{'type':String},'email':{'type':String},'image':{'type':String}}),profile=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x15c),profile_data),categories_data=new mongoose['Schema']({'name':{'type':String},'products':{'type':Number}}),categories=new mongoose[(a0_0x190e2a(0x15d))]('categories',categories_data),brands_data=new mongoose[(a0_0x190e2a(0x174))]({'name':{'type':String},'products':{'type':Number}}),brands=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x172),brands_data),units_data=new mongoose[(a0_0x190e2a(0x174))]({'name':{'type':String},'secondary_unit':{'type':String},'products':{'type':Number}}),units=new mongoose['model'](a0_0x190e2a(0x170),units_data),product_data=new mongoose[(a0_0x190e2a(0x174))]({'image':{'type':String,'required':!![]},'name':{'type':String,'required':!![]},'category':{'type':String,'required':!![]},'brand':{'type':String,'required':!![]},'sku':{'type':String},'unit':{'type':String,'required':!![]},'second_unit':{'type':String},'stock':{'type':Number},'alertquantity':{'type':Number},'product_code':{'type':String,'unique':!![]},'warehouse':{'type':String},'secondary_unit':{'type':String},'sub_category':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number,'default':0x270f},'maxProdPerUnit':{'type':Number},'product_category':{'type':String},'product_code_spmx':{'type':String}}),product=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x176),product_data),warehouse_data=new mongoose['Schema']({'name':{'type':String,'required':!![]},'address':{'type':String,'required':!![]},'room':{'type':String},'status':{'type':String,'default':a0_0x190e2a(0x151)},'main_category':{'type':String},'category':{'type':String},'warehouse_category':{'type':String},'product_details':[{'product_name':{'type':String,'default':a0_0x190e2a(0x181)},'product_stock':{'type':Number,'min':0x0,'default':0x0},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x190e2a(0x174)][a0_0x190e2a(0x15f)][a0_0x190e2a(0x164)]},'type':{'type':String},'floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxPerUnit':{'type':Number},'batch_code':{'type':String},'alertQTY':{'type':Number},'production_date':{'type':String},'delivery_date':{'type':String},'delivery_code':{'type':String},'product_cat':{'type':String},'invoice':{'type':String},'out_invoice':{'type':String},'adj_invoice':{'type':String},'trf_invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_incoming':{'type':String},'date_data':{'type':String}}],'product_details_spmx':[{'product_code':{'type':String},'spicemix_spmx':{'type':String},'spicemix_spmx_qty':{'type':Number,'min':0x0,'default':0x0},'extenders_spmx':{'type':String},'extenders_spmx_qty':{'type':Number,'min':0x0,'default':0x0},'curing_spmx':{'type':String},'curing_spmx_qty':{'type':Number,'min':0x0,'default':0x0},'unit_spmx':{'type':String},'brand_spmx':{'type':String},'category_spmx':{'type':String},'inv_incoming':{'type':String},'id_incoming':{'type':String},'createdAt':{'type':Date,'default':Date[a0_0x190e2a(0x177)]}}]}),warehouse=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x15e),warehouse_data),staff_data=new mongoose[(a0_0x190e2a(0x174))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'status':{'type':String,'default':'Enabled'},'warehouse':{'type':String},'position':{'type':String},'warehouse_category':{'type':String}}),staff=new mongoose['model'](a0_0x190e2a(0x17d),staff_data),customer_data=new mongoose['Schema']({'name':{'type':String,'required':!![]},'address':{'type':String},'mobile':{'type':Number},'email':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'ID':{'type':String},'SalesmanCode':{'type':String},'SalesmanName':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),customer=new mongoose['model']('customer',customer_data),c_payment=new mongoose['Schema']({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),c_payment_data=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x158),c_payment),customer_payment_data=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),customer_payment=new mongoose['model'](a0_0x190e2a(0x178),customer_payment_data),suppliers_data=new mongoose[(a0_0x190e2a(0x174))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'company':{'type':String},'address':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'suppliers_code':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),suppliers=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x155),suppliers_data),s_payment=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),s_payment_data=new mongoose['model'](a0_0x190e2a(0x17a),s_payment),suppliers_payment_data=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),suppliers_payment=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x15b),suppliers_payment_data),purchases_data=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x190e2a(0x174)][a0_0x190e2a(0x15f)]['Mixed']},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'product_cat':{'type':String},'room_name':{'type':String},'delivery_code':{'type':String},'delivery_date':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x190e2a(0x16b)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x190e2a(0x16b)},'isAllowEdit':{'type':String,'default':a0_0x190e2a(0x16b)},'roomList':[{'room_name':{'type':String}}]}),purchases=new mongoose['model'](a0_0x190e2a(0x171),purchases_data),purchases_data_finished=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'product_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x190e2a(0x16b)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'isAllowEdit':{'type':String,'default':a0_0x190e2a(0x16b)}}),purchases_finished=new mongoose[(a0_0x190e2a(0x15d))]('purchases_finished',purchases_data_finished),invoice_incoming=new mongoose[(a0_0x190e2a(0x174))]({'invoice_init':{'type':Number,'default':0x0}});invoice_incoming[a0_0x190e2a(0x16d)](autoIncrement['plugin'],{'model':a0_0x190e2a(0x16c),'field':'invoice_init','startAt':0x1,'incrementBy':0x1});const invoice_for_incoming=new mongoose[(a0_0x190e2a(0x15d))]('invoice_incomings',invoice_incoming),purchases_spmx_data=new mongoose['Schema']({'invoice':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_code':{'type':String},'spicemix_spmx':{'type':String},'spicemix_spmx_qty':{'type':Number},'extenders_spmx':{'type':String},'extenders_spmx_qty':{'type':Number},'curing_spmx':{'type':String},'curing_spmx_qty':{'type':Number},'unit_spmx':{'type':String},'brand_spmx':{'type':String},'category_spmx':{'type':String},'room_spmx':{'type':String},'type':{'type':String},'createdAt':{'type':Date,'default':Date[a0_0x190e2a(0x177)]}}],'note':{'type':String},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'finalize':{'type':String,'default':'False'},'createdAt':{'type':Date,'default':Date['now']}}),purchases_spmx=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x169),purchases_spmx_data),invoice_outgoing=new mongoose[(a0_0x190e2a(0x174))]({'invoice_init':{'type':Number,'default':0x0}});invoice_outgoing[a0_0x190e2a(0x16d)](autoIncrement[a0_0x190e2a(0x16d)],{'model':a0_0x190e2a(0x165),'field':a0_0x190e2a(0x179),'startAt':0x1,'incrementBy':0x1});const invoice_for_outgoing=new mongoose[(a0_0x190e2a(0x15d))]('invoice_outgoings',invoice_outgoing),sales_data_spmx=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'sale_product':[{'product_code':{'type':String},'spicemix_spmx':{'type':String},'spicemix_spmx_qty_stock':{'type':Number},'spicemix_spmx_qty':{'type':Number},'extenders_spmx':{'type':String},'extenders_spmx_qty_stock':{'type':Number},'extenders_spmx_qty':{'type':Number},'curing_spmx':{'type':String},'curing_spmx_qty_stock':{'type':Number},'curing_spmx_qty':{'type':Number},'unit_spmx':{'type':String},'brand_spmx':{'type':String},'category_spmx':{'type':String},'room_spmx':{'type':String},'id_transaction_from':{'type':String},'incoming_invoice':{'type':String},'createdAt':{'type':Date,'default':Date[a0_0x190e2a(0x177)]}}],'note':{'type':String},'return_data':{'type':String,'default':a0_0x190e2a(0x16b)},'SCRN':{'type':String},'finalize':{'type':String,'default':a0_0x190e2a(0x16b)}}),sales_spmx=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x157),sales_data_spmx),purchases_return_data=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x190e2a(0x174)][a0_0x190e2a(0x15f)][a0_0x190e2a(0x164)]},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return=new mongoose[(a0_0x190e2a(0x15d))]('return_purchases',purchases_return_data),purchases_return_data_finished=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return_finished=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x150),purchases_return_data_finished),sales_data=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x190e2a(0x174)][a0_0x190e2a(0x15f)][a0_0x190e2a(0x164)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'requested_qty':{'type':Number},'delivery_date':{'type':String},'delivery_code':{'type':String},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_transaction_from':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':a0_0x190e2a(0x16b)},'SCRN':{'type':String},'finalize':{'type':String,'default':a0_0x190e2a(0x16b)},'isAllowEdit':{'type':String,'default':a0_0x190e2a(0x16b)}}),sales=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x154),sales_data),sales_data_finished=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x190e2a(0x174)]['Types']['Mixed']},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':a0_0x190e2a(0x16b)},'SCRN':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':a0_0x190e2a(0x16b)},'mode_transpo':{'type':String},'name_driver':{'type':String}}),sales_finished=new mongoose[(a0_0x190e2a(0x15d))]('sales_finished',sales_data_finished),sales_return_data=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x190e2a(0x174)]['Types'][a0_0x190e2a(0x164)]},'type':{'type':String},'floorlevel':{'type':Number}}],'note':{'type':String}}),sales_return=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x186),sales_return_data),sales_return_data_finished=new mongoose[(a0_0x190e2a(0x174))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'warehouse_cat':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String}}],'return_sale_QA':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String},'bay':{'type':Number,'default':0x1}}],'note':{'type':String}}),sales_return_finished=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x162),sales_return_data_finished),transfers_data=new mongoose[(a0_0x190e2a(0x174))]({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'from_bin':{'type':mongoose['Schema'][a0_0x190e2a(0x15f)][a0_0x190e2a(0x164)]},'from_types':{'type':String},'from_floorlevel':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'to_bin':{'type':mongoose[a0_0x190e2a(0x174)]['Types']['Mixed']},'to_types':{'type':String},'to_floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'storage':{'type':String},'rack':{'type':String},'from_storage':{'type':String},'from_rack':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction_id':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x190e2a(0x16b)},'isAllowEdit':{'type':String,'default':a0_0x190e2a(0x16b)}}),transfers=new mongoose[(a0_0x190e2a(0x15d))]('transfer',transfers_data),transfers_data_finished=new mongoose[(a0_0x190e2a(0x174))]({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxProducts':{'type':Number},'maxPerUnit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x190e2a(0x16b)},'isAllowEdit':{'type':String,'default':a0_0x190e2a(0x16b)}}),transfers_finished=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x17c),transfers_data_finished),expenses=new mongoose[(a0_0x190e2a(0x174))]({'name':{'type':String}}),expenses_type=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x166),expenses),expenses_data=new mongoose['Schema']({'type':{'type':String},'date':{'type':String},'amount':{'type':Number},'note':{'type':String}}),all_expenses=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x161),expenses_data),adjustment_data=new mongoose['Schema']({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x190e2a(0x174)][a0_0x190e2a(0x15f)][a0_0x190e2a(0x164)]},'type':{'type':String},'floorlevel':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x190e2a(0x16b)},'isAllowEdit':{'type':String,'default':a0_0x190e2a(0x16b)}}),adjustment=new mongoose[(a0_0x190e2a(0x15d))]('adjustment',adjustment_data),adjustment_data_finished=new mongoose[(a0_0x190e2a(0x174))]({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'maxPerUnit':{'type':Number},'invoice':{'type':String},'id_transaction':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x190e2a(0x16b)},'isAllowEdit':{'type':String,'default':a0_0x190e2a(0x16b)}}),adjustment_finished=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x17e),adjustment_data_finished),master_settings_data=new mongoose['Schema']({'site_title':{'type':String},'image':{'type':String},'currency':{'type':String,'default':'$'},'currency_placement':{'type':String,'default':0x2},'timezone':{'type':String},'language':{'type':String,'default':a0_0x190e2a(0x17b)}}),master_shop=new mongoose[(a0_0x190e2a(0x15d))]('master_shop',master_settings_data),supervisor_settings_data=new mongoose['Schema']({'RMSName':{'type':String},'RMSEmail':{'type':String},'RMSnumber':{'type':String},'FGSName':{'type':String},'FGSEmail':{'type':String},'FGSnumber':{'type':String}}),supervisor_settings=new mongoose['model'](a0_0x190e2a(0x16e),supervisor_settings_data),email_settings_data=new mongoose[(a0_0x190e2a(0x174))]({'host':{'type':String},'port':{'type':String},'email':{'type':String},'password':{'type':String}}),email_settings=new mongoose[(a0_0x190e2a(0x15d))](a0_0x190e2a(0x159),email_settings_data);module[a0_0x190e2a(0x152)]={'sing_up':sing_up,'profile':profile,'categories':categories,'brands':brands,'units':units,'product':product,'warehouse':warehouse,'staff':staff,'customer':customer,'purchases_spmx':purchases_spmx,'invoice_for_incoming':invoice_for_incoming,'sales_spmx':sales_spmx,'invoice_for_outgoing':invoice_for_outgoing,'suppliers':suppliers,'suppliers_payment':suppliers_payment,'s_payment_data':s_payment_data,'purchases':purchases,'purchases_return':purchases_return,'sales':sales,'sales_return':sales_return,'customer_payment':customer_payment,'c_payment_data':c_payment_data,'transfers':transfers,'expenses_type':expenses_type,'all_expenses':all_expenses,'adjustment':adjustment,'master_shop':master_shop,'email_settings':email_settings,'purchases_finished':purchases_finished,'sales_finished':sales_finished,'adjustment_finished':adjustment_finished,'transfers_finished':transfers_finished,'purchases_return_finished':purchases_return_finished,'sales_return_finished':sales_return_finished,'supervisor_settings':supervisor_settings};