const a0_0x14a4c3=a0_0x13d7;function a0_0x2ee7(){const _0x17df74=['master_shop','customer','c_payment','units','brands','Enabled','return_sales_finished','1962513rJyBOS','purchases','sales','categories','expenses','expenses_type','Mixed','3826823SsnaPT','product','16286904rexgew','supervisor_setup','return_sales','2hAuySW','mongoose','3793475oXfjmB','exports','customer_payment','transfer','Schema','False','transfer_finished','return_purchases_finish','adjustment','suppliers_payment','model','suppliers','Types','sales_finished','7452882bsazkt','842688PXUgou','English','purchases_finished','warehouse','email_settings','1144316aMtpKS','adjustment_finished'];a0_0x2ee7=function(){return _0x17df74;};return a0_0x2ee7();}(function(_0x3b601c,_0x3c36bc){const _0x26200a=a0_0x13d7,_0x2d2557=_0x3b601c();while(!![]){try{const _0x14d847=-parseInt(_0x26200a(0xbc))/0x1*(-parseInt(_0x26200a(0xa6))/0x2)+-parseInt(_0x26200a(0x9a))/0x3+-parseInt(_0x26200a(0xb7))/0x4+parseInt(_0x26200a(0xa8))/0x5+parseInt(_0x26200a(0xb6))/0x6+parseInt(_0x26200a(0xa1))/0x7+-parseInt(_0x26200a(0xa3))/0x8;if(_0x14d847===_0x3c36bc)break;else _0x2d2557['push'](_0x2d2557['shift']());}catch(_0xe94231){_0x2d2557['push'](_0x2d2557['shift']());}}}(a0_0x2ee7,0xc1265));const mongoose=require(a0_0x14a4c3(0xa7)),sing_up_data=new mongoose['Schema']({'name':{'type':String},'email':{'type':String,'required':!![],'unique':!![]},'password':{'type':String,'required':!![]},'mobile':{'type':Number},'role':{'type':String,'require':!![]},'code':{'type':String},'isUsed':{'type':String,'default':a0_0x14a4c3(0xad)}}),sing_up=new mongoose['model']('sing_up',sing_up_data),profile_data=new mongoose[(a0_0x14a4c3(0xac))]({'firstname':{'type':String},'lastname':{'type':String},'email':{'type':String},'image':{'type':String}}),profile=new mongoose[(a0_0x14a4c3(0xb2))]('profile',profile_data),categories_data=new mongoose[(a0_0x14a4c3(0xac))]({'name':{'type':String},'products':{'type':Number}}),categories=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0x9d),categories_data),brands_data=new mongoose[(a0_0x14a4c3(0xac))]({'name':{'type':String},'products':{'type':Number}}),brands=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0x97),brands_data),units_data=new mongoose[(a0_0x14a4c3(0xac))]({'name':{'type':String},'secondary_unit':{'type':String},'products':{'type':Number}}),units=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0x96),units_data),product_data=new mongoose[(a0_0x14a4c3(0xac))]({'image':{'type':String,'required':!![]},'name':{'type':String,'required':!![]},'category':{'type':String,'required':!![]},'brand':{'type':String,'required':!![]},'sku':{'type':String},'unit':{'type':String,'required':!![]},'second_unit':{'type':String},'stock':{'type':Number},'alertquantity':{'type':Number},'product_code':{'type':String,'unique':!![]},'warehouse':{'type':String},'secondary_unit':{'type':String},'sub_category':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number,'default':0x270f},'maxProdPerUnit':{'type':Number},'product_category':{'type':String}}),product=new mongoose['model'](a0_0x14a4c3(0xa2),product_data),warehouse_data=new mongoose['Schema']({'name':{'type':String,'required':!![]},'address':{'type':String,'required':!![]},'room':{'type':String},'status':{'type':String,'default':a0_0x14a4c3(0x98)},'main_category':{'type':String},'category':{'type':String},'warehouse_category':{'type':String},'product_details':[{'product_name':{'type':String,'default':'no\x20product'},'product_stock':{'type':Number,'min':0x0,'default':0x0},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x14a4c3(0xac)]['Types'][a0_0x14a4c3(0xa0)]},'type':{'type':String},'floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxPerUnit':{'type':Number},'batch_code':{'type':String},'alertQTY':{'type':Number},'production_date':{'type':String},'delivery_date':{'type':String},'delivery_code':{'type':String},'product_cat':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_incoming':{'type':String}}]}),warehouse=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xba),warehouse_data),staff_data=new mongoose[(a0_0x14a4c3(0xac))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'status':{'type':String,'default':a0_0x14a4c3(0x98)},'warehouse':{'type':String},'position':{'type':String},'warehouse_category':{'type':String}}),staff=new mongoose[(a0_0x14a4c3(0xb2))]('staff',staff_data),customer_data=new mongoose['Schema']({'name':{'type':String,'required':!![]},'address':{'type':String},'mobile':{'type':Number},'email':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'ID':{'type':String},'SalesmanCode':{'type':String},'SalesmanName':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),customer=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0x94),customer_data),c_payment=new mongoose[(a0_0x14a4c3(0xac))]({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),c_payment_data=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0x95),c_payment),customer_payment_data=new mongoose[(a0_0x14a4c3(0xac))]({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),customer_payment=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xaa),customer_payment_data),suppliers_data=new mongoose['Schema']({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'company':{'type':String},'address':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'suppliers_code':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),suppliers=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xb3),suppliers_data),s_payment=new mongoose['Schema']({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),s_payment_data=new mongoose[(a0_0x14a4c3(0xb2))]('s_payment',s_payment),suppliers_payment_data=new mongoose['Schema']({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),suppliers_payment=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xb1),suppliers_payment_data),purchases_data=new mongoose[(a0_0x14a4c3(0xac))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema'][a0_0x14a4c3(0xb4)][a0_0x14a4c3(0xa0)]},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'product_cat':{'type':String},'room_name':{'type':String},'delivery_code':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x14a4c3(0xad)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x14a4c3(0xad)},'isAllowEdit':{'type':String,'default':a0_0x14a4c3(0xad)},'roomList':[{'room_name':{'type':String}}]}),purchases=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0x9b),purchases_data),purchases_data_finished=new mongoose[(a0_0x14a4c3(0xac))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'product_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':'False'},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'isAllowEdit':{'type':String,'default':a0_0x14a4c3(0xad)}}),purchases_finished=new mongoose['model'](a0_0x14a4c3(0xb9),purchases_data_finished),purchases_return_data=new mongoose[(a0_0x14a4c3(0xac))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x14a4c3(0xac)][a0_0x14a4c3(0xb4)]['Mixed']},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return=new mongoose['model']('return_purchases',purchases_return_data),purchases_return_data_finished=new mongoose[(a0_0x14a4c3(0xac))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return_finished=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xaf),purchases_return_data_finished),sales_data=new mongoose['Schema']({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x14a4c3(0xac)]['Types'][a0_0x14a4c3(0xa0)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'requested_qty':{'type':Number},'delivery_date':{'type':String},'delivery_code':{'type':String},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':'False'},'SCRN':{'type':String},'finalize':{'type':String,'default':a0_0x14a4c3(0xad)},'isAllowEdit':{'type':String,'default':a0_0x14a4c3(0xad)}}),sales=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0x9c),sales_data),sales_data_finished=new mongoose['Schema']({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x14a4c3(0xac)]['Types'][a0_0x14a4c3(0xa0)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':'False'},'SCRN':{'type':String},'finalize':{'type':String,'default':a0_0x14a4c3(0xad)},'isAllowEdit':{'type':String,'default':'False'},'mode_transpo':{'type':String},'name_driver':{'type':String}}),sales_finished=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xb5),sales_data_finished),sales_return_data=new mongoose['Schema']({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema']['Types']['Mixed']},'type':{'type':String},'floorlevel':{'type':Number}}],'note':{'type':String}}),sales_return=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xa5),sales_return_data),sales_return_data_finished=new mongoose[(a0_0x14a4c3(0xac))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'warehouse_cat':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String}}],'return_sale_QA':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String},'bay':{'type':Number,'default':0x1}}],'note':{'type':String}}),sales_return_finished=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0x99),sales_return_data_finished),transfers_data=new mongoose[(a0_0x14a4c3(0xac))]({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'from_bin':{'type':mongoose[a0_0x14a4c3(0xac)]['Types'][a0_0x14a4c3(0xa0)]},'from_types':{'type':String},'from_floorlevel':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'to_bin':{'type':mongoose['Schema'][a0_0x14a4c3(0xb4)][a0_0x14a4c3(0xa0)]},'to_types':{'type':String},'to_floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'storage':{'type':String},'rack':{'type':String},'from_storage':{'type':String},'from_rack':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction_id':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':a0_0x14a4c3(0xad)}}),transfers=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xab),transfers_data),transfers_data_finished=new mongoose[(a0_0x14a4c3(0xac))]({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxProducts':{'type':Number},'maxPerUnit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x14a4c3(0xad)},'isAllowEdit':{'type':String,'default':a0_0x14a4c3(0xad)}}),transfers_finished=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xae),transfers_data_finished),expenses=new mongoose[(a0_0x14a4c3(0xac))]({'name':{'type':String}}),expenses_type=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0x9f),expenses),expenses_data=new mongoose['Schema']({'type':{'type':String},'date':{'type':String},'amount':{'type':Number},'note':{'type':String}}),all_expenses=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0x9e),expenses_data),adjustment_data=new mongoose[(a0_0x14a4c3(0xac))]({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x14a4c3(0xac)][a0_0x14a4c3(0xb4)][a0_0x14a4c3(0xa0)]},'type':{'type':String},'floorlevel':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':a0_0x14a4c3(0xad)}}),adjustment=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xb0),adjustment_data),adjustment_data_finished=new mongoose[(a0_0x14a4c3(0xac))]({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'maxPerUnit':{'type':Number},'invoice':{'type':String},'id_transaction':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x14a4c3(0xad)},'isAllowEdit':{'type':String,'default':a0_0x14a4c3(0xad)}}),adjustment_finished=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0x92),adjustment_data_finished),master_settings_data=new mongoose[(a0_0x14a4c3(0xac))]({'site_title':{'type':String},'image':{'type':String},'currency':{'type':String,'default':'$'},'currency_placement':{'type':String,'default':0x2},'timezone':{'type':String},'language':{'type':String,'default':a0_0x14a4c3(0xb8)}}),master_shop=new mongoose['model'](a0_0x14a4c3(0x93),master_settings_data),supervisor_settings_data=new mongoose['Schema']({'RMSName':{'type':String},'RMSEmail':{'type':String},'RMSnumber':{'type':String},'FGSName':{'type':String},'FGSEmail':{'type':String},'FGSnumber':{'type':String}}),supervisor_settings=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xa4),supervisor_settings_data),email_settings_data=new mongoose['Schema']({'host':{'type':String},'port':{'type':String},'email':{'type':String},'password':{'type':String}}),email_settings=new mongoose[(a0_0x14a4c3(0xb2))](a0_0x14a4c3(0xbb),email_settings_data);function a0_0x13d7(_0x260c4e,_0x145aa5){const _0x2ee715=a0_0x2ee7();return a0_0x13d7=function(_0x13d75a,_0x2635c7){_0x13d75a=_0x13d75a-0x92;let _0x5534ec=_0x2ee715[_0x13d75a];return _0x5534ec;},a0_0x13d7(_0x260c4e,_0x145aa5);}module[a0_0x14a4c3(0xa9)]={'sing_up':sing_up,'profile':profile,'categories':categories,'brands':brands,'units':units,'product':product,'warehouse':warehouse,'staff':staff,'customer':customer,'suppliers':suppliers,'suppliers_payment':suppliers_payment,'s_payment_data':s_payment_data,'purchases':purchases,'purchases_return':purchases_return,'sales':sales,'sales_return':sales_return,'customer_payment':customer_payment,'c_payment_data':c_payment_data,'transfers':transfers,'expenses_type':expenses_type,'all_expenses':all_expenses,'adjustment':adjustment,'master_shop':master_shop,'email_settings':email_settings,'purchases_finished':purchases_finished,'sales_finished':sales_finished,'adjustment_finished':adjustment_finished,'transfers_finished':transfers_finished,'purchases_return_finished':purchases_return_finished,'sales_return_finished':sales_return_finished,'supervisor_settings':supervisor_settings};