function a0_0xb91b(){const _0x2194a3=['purchases','Schema','suppliers','321270POnNEy','c_payment','356026CtrXfx','15zNQvXr','65186010kmNveW','return_sales','12kKFNtm','profile','return_sales_finished','sales','staff','email_settings','model','12864616PCndVJ','adjustment_finished','Enabled','Mixed','transfer_finished','English','Types','customer','warehouse','expenses','False','sales_finished','s_payment','supervisor_setup','mongoose','adjustment','1687208WtodsW','suppliers_payment','return_purchases_finish','140GKFllC','brands','10462788HqFPnI','exports','no\x20product','expenses_type','1195624MXUXsi','master_shop'];a0_0xb91b=function(){return _0x2194a3;};return a0_0xb91b();}const a0_0x1970e0=a0_0x3b7f;function a0_0x3b7f(_0x399362,_0x1b95cb){const _0xb91b9c=a0_0xb91b();return a0_0x3b7f=function(_0x3b7fe0,_0x19ae23){_0x3b7fe0=_0x3b7fe0-0xf2;let _0x3d61d9=_0xb91b9c[_0x3b7fe0];return _0x3d61d9;},a0_0x3b7f(_0x399362,_0x1b95cb);}(function(_0x5d31ab,_0x1233d7){const _0x49a6b1=a0_0x3b7f,_0x423a4c=_0x5d31ab();while(!![]){try{const _0x55dea0=-parseInt(_0x49a6b1(0x108))/0x1+-parseInt(_0x49a6b1(0x10f))/0x2*(-parseInt(_0x49a6b1(0x113))/0x3)+-parseInt(_0x49a6b1(0xff))/0x4*(parseInt(_0x49a6b1(0x110))/0x5)+-parseInt(_0x49a6b1(0x10d))/0x6*(parseInt(_0x49a6b1(0x102))/0x7)+-parseInt(_0x49a6b1(0x11a))/0x8+-parseInt(_0x49a6b1(0x104))/0x9+parseInt(_0x49a6b1(0x111))/0xa;if(_0x55dea0===_0x1233d7)break;else _0x423a4c['push'](_0x423a4c['shift']());}catch(_0x30b994){_0x423a4c['push'](_0x423a4c['shift']());}}}(a0_0xb91b,0xe2972));const mongoose=require(a0_0x1970e0(0xfd)),sing_up_data=new mongoose[(a0_0x1970e0(0x10b))]({'name':{'type':String},'email':{'type':String,'required':!![],'unique':!![]},'password':{'type':String,'required':!![]},'mobile':{'type':Number},'role':{'type':String,'require':!![]},'code':{'type':String},'isUsed':{'type':String,'default':a0_0x1970e0(0xf9)}}),sing_up=new mongoose[(a0_0x1970e0(0x119))]('sing_up',sing_up_data),profile_data=new mongoose[(a0_0x1970e0(0x10b))]({'firstname':{'type':String},'lastname':{'type':String},'email':{'type':String},'image':{'type':String}}),profile=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0x114),profile_data),categories_data=new mongoose[(a0_0x1970e0(0x10b))]({'name':{'type':String},'products':{'type':Number}}),categories=new mongoose[(a0_0x1970e0(0x119))]('categories',categories_data),brands_data=new mongoose[(a0_0x1970e0(0x10b))]({'name':{'type':String},'products':{'type':Number}}),brands=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0x103),brands_data),units_data=new mongoose[(a0_0x1970e0(0x10b))]({'name':{'type':String},'secondary_unit':{'type':String},'products':{'type':Number}}),units=new mongoose[(a0_0x1970e0(0x119))]('units',units_data),product_data=new mongoose[(a0_0x1970e0(0x10b))]({'image':{'type':String,'required':!![]},'name':{'type':String,'required':!![]},'category':{'type':String,'required':!![]},'brand':{'type':String,'required':!![]},'sku':{'type':String},'unit':{'type':String,'required':!![]},'second_unit':{'type':String},'stock':{'type':Number},'alertquantity':{'type':Number},'product_code':{'type':String,'unique':!![]},'warehouse':{'type':String},'secondary_unit':{'type':String},'sub_category':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number,'default':0x270f},'maxProdPerUnit':{'type':Number},'product_category':{'type':String}}),product=new mongoose[(a0_0x1970e0(0x119))]('product',product_data),warehouse_data=new mongoose[(a0_0x1970e0(0x10b))]({'name':{'type':String,'required':!![]},'address':{'type':String,'required':!![]},'room':{'type':String},'status':{'type':String,'default':'Enabled'},'main_category':{'type':String},'category':{'type':String},'warehouse_category':{'type':String},'product_details':[{'product_name':{'type':String,'default':a0_0x1970e0(0x106)},'product_stock':{'type':Number,'min':0x0,'default':0x0},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1970e0(0x10b)][a0_0x1970e0(0xf5)][a0_0x1970e0(0xf2)]},'type':{'type':String},'floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxPerUnit':{'type':Number},'batch_code':{'type':String},'alertQTY':{'type':Number},'production_date':{'type':String},'delivery_date':{'type':String},'delivery_code':{'type':String},'product_cat':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_incoming':{'type':String}}]}),warehouse=new mongoose['model'](a0_0x1970e0(0xf7),warehouse_data),staff_data=new mongoose[(a0_0x1970e0(0x10b))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'status':{'type':String,'default':a0_0x1970e0(0x11c)},'warehouse':{'type':String},'position':{'type':String},'warehouse_category':{'type':String}}),staff=new mongoose['model'](a0_0x1970e0(0x117),staff_data),customer_data=new mongoose['Schema']({'name':{'type':String,'required':!![]},'address':{'type':String},'mobile':{'type':Number},'email':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'ID':{'type':String},'SalesmanCode':{'type':String},'SalesmanName':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),customer=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0xf6),customer_data),c_payment=new mongoose['Schema']({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),c_payment_data=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0x10e),c_payment),customer_payment_data=new mongoose[(a0_0x1970e0(0x10b))]({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),customer_payment=new mongoose[(a0_0x1970e0(0x119))]('customer_payment',customer_payment_data),suppliers_data=new mongoose[(a0_0x1970e0(0x10b))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'company':{'type':String},'address':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'suppliers_code':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),suppliers=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0x10c),suppliers_data),s_payment=new mongoose[(a0_0x1970e0(0x10b))]({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),s_payment_data=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0xfb),s_payment),suppliers_payment_data=new mongoose[(a0_0x1970e0(0x10b))]({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),suppliers_payment=new mongoose['model'](a0_0x1970e0(0x100),suppliers_payment_data),purchases_data=new mongoose[(a0_0x1970e0(0x10b))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1970e0(0x10b)][a0_0x1970e0(0xf5)][a0_0x1970e0(0xf2)]},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'product_cat':{'type':String},'room_name':{'type':String},'delivery_code':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x1970e0(0xf9)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':'False'},'roomList':[{'room_name':{'type':String}}]}),purchases=new mongoose['model'](a0_0x1970e0(0x10a),purchases_data),purchases_data_finished=new mongoose[(a0_0x1970e0(0x10b))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'product_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x1970e0(0xf9)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'isAllowEdit':{'type':String,'default':a0_0x1970e0(0xf9)}}),purchases_finished=new mongoose[(a0_0x1970e0(0x119))]('purchases_finished',purchases_data_finished),purchases_return_data=new mongoose['Schema']({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1970e0(0x10b)][a0_0x1970e0(0xf5)][a0_0x1970e0(0xf2)]},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return=new mongoose[(a0_0x1970e0(0x119))]('return_purchases',purchases_return_data),purchases_return_data_finished=new mongoose[(a0_0x1970e0(0x10b))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return_finished=new mongoose['model'](a0_0x1970e0(0x101),purchases_return_data_finished),sales_data=new mongoose[(a0_0x1970e0(0x10b))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1970e0(0x10b)]['Types'][a0_0x1970e0(0xf2)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'requested_qty':{'type':Number},'delivery_date':{'type':String},'delivery_code':{'type':String},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':a0_0x1970e0(0xf9)},'SCRN':{'type':String},'finalize':{'type':String,'default':a0_0x1970e0(0xf9)},'isAllowEdit':{'type':String,'default':a0_0x1970e0(0xf9)}}),sales=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0x116),sales_data),sales_data_finished=new mongoose[(a0_0x1970e0(0x10b))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1970e0(0x10b)][a0_0x1970e0(0xf5)][a0_0x1970e0(0xf2)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':a0_0x1970e0(0xf9)},'SCRN':{'type':String},'finalize':{'type':String,'default':a0_0x1970e0(0xf9)},'isAllowEdit':{'type':String,'default':a0_0x1970e0(0xf9)},'mode_transpo':{'type':String},'name_driver':{'type':String}}),sales_finished=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0xfa),sales_data_finished),sales_return_data=new mongoose[(a0_0x1970e0(0x10b))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1970e0(0x10b)][a0_0x1970e0(0xf5)][a0_0x1970e0(0xf2)]},'type':{'type':String},'floorlevel':{'type':Number}}],'note':{'type':String}}),sales_return=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0x112),sales_return_data),sales_return_data_finished=new mongoose[(a0_0x1970e0(0x10b))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'warehouse_cat':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String}}],'return_sale_QA':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String},'bay':{'type':Number,'default':0x1}}],'note':{'type':String}}),sales_return_finished=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0x115),sales_return_data_finished),transfers_data=new mongoose['Schema']({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'from_bin':{'type':mongoose[a0_0x1970e0(0x10b)][a0_0x1970e0(0xf5)][a0_0x1970e0(0xf2)]},'from_types':{'type':String},'from_floorlevel':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'to_bin':{'type':mongoose[a0_0x1970e0(0x10b)]['Types'][a0_0x1970e0(0xf2)]},'to_types':{'type':String},'to_floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'storage':{'type':String},'rack':{'type':String},'from_storage':{'type':String},'from_rack':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction_id':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x1970e0(0xf9)},'isAllowEdit':{'type':String,'default':a0_0x1970e0(0xf9)}}),transfers=new mongoose[(a0_0x1970e0(0x119))]('transfer',transfers_data),transfers_data_finished=new mongoose['Schema']({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxProducts':{'type':Number},'maxPerUnit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x1970e0(0xf9)},'isAllowEdit':{'type':String,'default':'False'}}),transfers_finished=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0xf3),transfers_data_finished),expenses=new mongoose[(a0_0x1970e0(0x10b))]({'name':{'type':String}}),expenses_type=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0x107),expenses),expenses_data=new mongoose[(a0_0x1970e0(0x10b))]({'type':{'type':String},'date':{'type':String},'amount':{'type':Number},'note':{'type':String}}),all_expenses=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0xf8),expenses_data),adjustment_data=new mongoose[(a0_0x1970e0(0x10b))]({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1970e0(0x10b)][a0_0x1970e0(0xf5)][a0_0x1970e0(0xf2)]},'type':{'type':String},'floorlevel':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x1970e0(0xf9)},'isAllowEdit':{'type':String,'default':a0_0x1970e0(0xf9)}}),adjustment=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0xfe),adjustment_data),adjustment_data_finished=new mongoose['Schema']({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'maxPerUnit':{'type':Number},'invoice':{'type':String},'id_transaction':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x1970e0(0xf9)},'isAllowEdit':{'type':String,'default':a0_0x1970e0(0xf9)}}),adjustment_finished=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0x11b),adjustment_data_finished),master_settings_data=new mongoose[(a0_0x1970e0(0x10b))]({'site_title':{'type':String},'image':{'type':String},'currency':{'type':String,'default':'$'},'currency_placement':{'type':String,'default':0x2},'timezone':{'type':String},'language':{'type':String,'default':a0_0x1970e0(0xf4)}}),master_shop=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0x109),master_settings_data),supervisor_settings_data=new mongoose[(a0_0x1970e0(0x10b))]({'RMSName':{'type':String},'RMSEmail':{'type':String},'RMSnumber':{'type':String},'FGSName':{'type':String},'FGSEmail':{'type':String},'FGSnumber':{'type':String}}),supervisor_settings=new mongoose['model'](a0_0x1970e0(0xfc),supervisor_settings_data),email_settings_data=new mongoose[(a0_0x1970e0(0x10b))]({'host':{'type':String},'port':{'type':String},'email':{'type':String},'password':{'type':String}}),email_settings=new mongoose[(a0_0x1970e0(0x119))](a0_0x1970e0(0x118),email_settings_data);module[a0_0x1970e0(0x105)]={'sing_up':sing_up,'profile':profile,'categories':categories,'brands':brands,'units':units,'product':product,'warehouse':warehouse,'staff':staff,'customer':customer,'suppliers':suppliers,'suppliers_payment':suppliers_payment,'s_payment_data':s_payment_data,'purchases':purchases,'purchases_return':purchases_return,'sales':sales,'sales_return':sales_return,'customer_payment':customer_payment,'c_payment_data':c_payment_data,'transfers':transfers,'expenses_type':expenses_type,'all_expenses':all_expenses,'adjustment':adjustment,'master_shop':master_shop,'email_settings':email_settings,'purchases_finished':purchases_finished,'sales_finished':sales_finished,'adjustment_finished':adjustment_finished,'transfers_finished':transfers_finished,'purchases_return_finished':purchases_return_finished,'sales_return_finished':sales_return_finished,'supervisor_settings':supervisor_settings};