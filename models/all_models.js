function a0_0x2100(){const _0x1da5aa=['318439VwMuBE','transfer_finished','3pKXKih','s_payment','return_purchases_finish','English','10qUoDNC','purchases','product','return_sales_finished','transfer','Mixed','model','suppliers_payment','7687904TNUkXi','profile','1218OwoGhP','6936536lUmhaE','Schema','return_purchases','expenses_type','sales_finished','customer_payment','3735942HTXTax','supervisor_setup','return_sales','sing_up','Enabled','staff','15665ygYVcW','mongoose','units','warehouse','expenses','4150496rjFzoj','no\x20product','11851713RygOiG','email_settings','Types','c_payment','sales','adjustment_finished','False','brands','adjustment'];a0_0x2100=function(){return _0x1da5aa;};return a0_0x2100();}const a0_0x22bac4=a0_0x5808;(function(_0x558ce2,_0x5e4f8d){const _0x34b819=a0_0x5808,_0x1b7b82=_0x558ce2();while(!![]){try{const _0x2582e7=-parseInt(_0x34b819(0x1bf))/0x1+parseInt(_0x34b819(0x1a9))/0x2+parseInt(_0x34b819(0x1c1))/0x3*(parseInt(_0x34b819(0x1a3))/0x4)+parseInt(_0x34b819(0x1af))/0x5*(-parseInt(_0x34b819(0x1a2))/0x6)+parseInt(_0x34b819(0x1b4))/0x7+-parseInt(_0x34b819(0x1a0))/0x8+-parseInt(_0x34b819(0x1b6))/0x9*(parseInt(_0x34b819(0x1c5))/0xa);if(_0x2582e7===_0x5e4f8d)break;else _0x1b7b82['push'](_0x1b7b82['shift']());}catch(_0x2dfed1){_0x1b7b82['push'](_0x1b7b82['shift']());}}}(a0_0x2100,0xeb0be));const mongoose=require(a0_0x22bac4(0x1b0)),sing_up_data=new mongoose[(a0_0x22bac4(0x1a4))]({'name':{'type':String},'email':{'type':String,'required':!![],'unique':!![]},'password':{'type':String,'required':!![]},'mobile':{'type':Number},'role':{'type':String,'require':!![]},'code':{'type':String},'isUsed':{'type':String,'default':'False'}}),sing_up=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1ac),sing_up_data),profile_data=new mongoose[(a0_0x22bac4(0x1a4))]({'firstname':{'type':String},'lastname':{'type':String},'email':{'type':String},'image':{'type':String}}),profile=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1a1),profile_data),categories_data=new mongoose[(a0_0x22bac4(0x1a4))]({'name':{'type':String},'products':{'type':Number}}),categories=new mongoose[(a0_0x22bac4(0x19e))]('categories',categories_data),brands_data=new mongoose[(a0_0x22bac4(0x1a4))]({'name':{'type':String},'products':{'type':Number}}),brands=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1bd),brands_data),units_data=new mongoose[(a0_0x22bac4(0x1a4))]({'name':{'type':String},'secondary_unit':{'type':String},'products':{'type':Number}}),units=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1b1),units_data),product_data=new mongoose[(a0_0x22bac4(0x1a4))]({'image':{'type':String,'required':!![]},'name':{'type':String,'required':!![]},'category':{'type':String,'required':!![]},'brand':{'type':String,'required':!![]},'sku':{'type':String},'unit':{'type':String,'required':!![]},'second_unit':{'type':String},'stock':{'type':Number},'alertquantity':{'type':Number},'product_code':{'type':String,'unique':!![]},'warehouse':{'type':String},'secondary_unit':{'type':String},'sub_category':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number,'default':0x270f},'maxProdPerUnit':{'type':Number},'product_category':{'type':String}}),product=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1c7),product_data),warehouse_data=new mongoose[(a0_0x22bac4(0x1a4))]({'name':{'type':String,'required':!![]},'address':{'type':String,'required':!![]},'room':{'type':String},'status':{'type':String,'default':a0_0x22bac4(0x1ad)},'main_category':{'type':String},'category':{'type':String},'warehouse_category':{'type':String},'product_details':[{'product_name':{'type':String,'default':a0_0x22bac4(0x1b5)},'product_stock':{'type':Number,'min':0x0,'default':0x0},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema'][a0_0x22bac4(0x1b8)][a0_0x22bac4(0x1ca)]},'type':{'type':String},'floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxPerUnit':{'type':Number},'batch_code':{'type':String},'alertQTY':{'type':Number},'production_date':{'type':String},'delivery_date':{'type':String},'delivery_code':{'type':String},'product_cat':{'type':String},'invoice':{'type':String},'out_invoice':{'type':String},'adj_invoice':{'type':String},'trf_invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_incoming':{'type':String},'date_data':{'type':String}}]}),warehouse=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1b2),warehouse_data),staff_data=new mongoose[(a0_0x22bac4(0x1a4))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'status':{'type':String,'default':a0_0x22bac4(0x1ad)},'warehouse':{'type':String},'position':{'type':String},'warehouse_category':{'type':String}}),staff=new mongoose['model'](a0_0x22bac4(0x1ae),staff_data),customer_data=new mongoose['Schema']({'name':{'type':String,'required':!![]},'address':{'type':String},'mobile':{'type':Number},'email':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'ID':{'type':String},'SalesmanCode':{'type':String},'SalesmanName':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),customer=new mongoose[(a0_0x22bac4(0x19e))]('customer',customer_data),c_payment=new mongoose[(a0_0x22bac4(0x1a4))]({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),c_payment_data=new mongoose['model'](a0_0x22bac4(0x1b9),c_payment),customer_payment_data=new mongoose[(a0_0x22bac4(0x1a4))]({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),customer_payment=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1a8),customer_payment_data),suppliers_data=new mongoose[(a0_0x22bac4(0x1a4))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'company':{'type':String},'address':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'suppliers_code':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),suppliers=new mongoose['model']('suppliers',suppliers_data),s_payment=new mongoose[(a0_0x22bac4(0x1a4))]({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),s_payment_data=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1c2),s_payment),suppliers_payment_data=new mongoose[(a0_0x22bac4(0x1a4))]({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),suppliers_payment=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x19f),suppliers_payment_data),purchases_data=new mongoose['Schema']({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema'][a0_0x22bac4(0x1b8)][a0_0x22bac4(0x1ca)]},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'product_cat':{'type':String},'room_name':{'type':String},'delivery_code':{'type':String},'delivery_date':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x22bac4(0x1bc)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':a0_0x22bac4(0x1bc)},'roomList':[{'room_name':{'type':String}}]}),purchases=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1c6),purchases_data),purchases_data_finished=new mongoose[(a0_0x22bac4(0x1a4))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'product_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x22bac4(0x1bc)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'isAllowEdit':{'type':String,'default':a0_0x22bac4(0x1bc)}}),purchases_finished=new mongoose[(a0_0x22bac4(0x19e))]('purchases_finished',purchases_data_finished),purchases_return_data=new mongoose[(a0_0x22bac4(0x1a4))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'bin':{'type':mongoose['Schema']['Types'][a0_0x22bac4(0x1ca)]},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1a5),purchases_return_data),purchases_return_data_finished=new mongoose['Schema']({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return_finished=new mongoose['model'](a0_0x22bac4(0x1c3),purchases_return_data_finished),sales_data=new mongoose['Schema']({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x22bac4(0x1a4)][a0_0x22bac4(0x1b8)][a0_0x22bac4(0x1ca)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'requested_qty':{'type':Number},'delivery_date':{'type':String},'delivery_code':{'type':String},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_transaction_from':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':'False'},'SCRN':{'type':String},'finalize':{'type':String,'default':a0_0x22bac4(0x1bc)},'isAllowEdit':{'type':String,'default':a0_0x22bac4(0x1bc)}}),sales=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1ba),sales_data),sales_data_finished=new mongoose['Schema']({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema'][a0_0x22bac4(0x1b8)][a0_0x22bac4(0x1ca)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':'False'},'SCRN':{'type':String},'finalize':{'type':String,'default':a0_0x22bac4(0x1bc)},'isAllowEdit':{'type':String,'default':a0_0x22bac4(0x1bc)},'mode_transpo':{'type':String},'name_driver':{'type':String}}),sales_finished=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1a7),sales_data_finished),sales_return_data=new mongoose['Schema']({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x22bac4(0x1a4)][a0_0x22bac4(0x1b8)][a0_0x22bac4(0x1ca)]},'type':{'type':String},'floorlevel':{'type':Number}}],'note':{'type':String}}),sales_return=new mongoose['model'](a0_0x22bac4(0x1ab),sales_return_data),sales_return_data_finished=new mongoose['Schema']({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'warehouse_cat':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String}}],'return_sale_QA':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String},'bay':{'type':Number,'default':0x1}}],'note':{'type':String}}),sales_return_finished=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1c8),sales_return_data_finished),transfers_data=new mongoose[(a0_0x22bac4(0x1a4))]({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'from_bin':{'type':mongoose[a0_0x22bac4(0x1a4)][a0_0x22bac4(0x1b8)][a0_0x22bac4(0x1ca)]},'from_types':{'type':String},'from_floorlevel':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'to_bin':{'type':mongoose[a0_0x22bac4(0x1a4)]['Types'][a0_0x22bac4(0x1ca)]},'to_types':{'type':String},'to_floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'storage':{'type':String},'rack':{'type':String},'from_storage':{'type':String},'from_rack':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction_id':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x22bac4(0x1bc)},'isAllowEdit':{'type':String,'default':a0_0x22bac4(0x1bc)}}),transfers=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1c9),transfers_data),transfers_data_finished=new mongoose[(a0_0x22bac4(0x1a4))]({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxProducts':{'type':Number},'maxPerUnit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x22bac4(0x1bc)},'isAllowEdit':{'type':String,'default':a0_0x22bac4(0x1bc)}}),transfers_finished=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1c0),transfers_data_finished),expenses=new mongoose[(a0_0x22bac4(0x1a4))]({'name':{'type':String}}),expenses_type=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1a6),expenses),expenses_data=new mongoose[(a0_0x22bac4(0x1a4))]({'type':{'type':String},'date':{'type':String},'amount':{'type':Number},'note':{'type':String}}),all_expenses=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1b3),expenses_data),adjustment_data=new mongoose[(a0_0x22bac4(0x1a4))]({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x22bac4(0x1a4)][a0_0x22bac4(0x1b8)][a0_0x22bac4(0x1ca)]},'type':{'type':String},'floorlevel':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x22bac4(0x1bc)},'isAllowEdit':{'type':String,'default':a0_0x22bac4(0x1bc)}}),adjustment=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1be),adjustment_data),adjustment_data_finished=new mongoose[(a0_0x22bac4(0x1a4))]({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'maxPerUnit':{'type':Number},'invoice':{'type':String},'id_transaction':{'type':String},'date_data':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x22bac4(0x1bc)},'isAllowEdit':{'type':String,'default':a0_0x22bac4(0x1bc)}}),adjustment_finished=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1bb),adjustment_data_finished),master_settings_data=new mongoose[(a0_0x22bac4(0x1a4))]({'site_title':{'type':String},'image':{'type':String},'currency':{'type':String,'default':'$'},'currency_placement':{'type':String,'default':0x2},'timezone':{'type':String},'language':{'type':String,'default':a0_0x22bac4(0x1c4)}}),master_shop=new mongoose[(a0_0x22bac4(0x19e))]('master_shop',master_settings_data),supervisor_settings_data=new mongoose[(a0_0x22bac4(0x1a4))]({'RMSName':{'type':String},'RMSEmail':{'type':String},'RMSnumber':{'type':String},'FGSName':{'type':String},'FGSEmail':{'type':String},'FGSnumber':{'type':String}}),supervisor_settings=new mongoose['model'](a0_0x22bac4(0x1aa),supervisor_settings_data),email_settings_data=new mongoose[(a0_0x22bac4(0x1a4))]({'host':{'type':String},'port':{'type':String},'email':{'type':String},'password':{'type':String}}),email_settings=new mongoose[(a0_0x22bac4(0x19e))](a0_0x22bac4(0x1b7),email_settings_data);function a0_0x5808(_0x5b8061,_0x592c8d){const _0x210017=a0_0x2100();return a0_0x5808=function(_0x5808bf,_0x885403){_0x5808bf=_0x5808bf-0x19e;let _0x763d0d=_0x210017[_0x5808bf];return _0x763d0d;},a0_0x5808(_0x5b8061,_0x592c8d);}module['exports']={'sing_up':sing_up,'profile':profile,'categories':categories,'brands':brands,'units':units,'product':product,'warehouse':warehouse,'staff':staff,'customer':customer,'suppliers':suppliers,'suppliers_payment':suppliers_payment,'s_payment_data':s_payment_data,'purchases':purchases,'purchases_return':purchases_return,'sales':sales,'sales_return':sales_return,'customer_payment':customer_payment,'c_payment_data':c_payment_data,'transfers':transfers,'expenses_type':expenses_type,'all_expenses':all_expenses,'adjustment':adjustment,'master_shop':master_shop,'email_settings':email_settings,'purchases_finished':purchases_finished,'sales_finished':sales_finished,'adjustment_finished':adjustment_finished,'transfers_finished':transfers_finished,'purchases_return_finished':purchases_return_finished,'sales_return_finished':sales_return_finished,'supervisor_settings':supervisor_settings};