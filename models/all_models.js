function a0_0x1c6f(){const _0x460bad=['warehouse','categories','1069593yyLVGM','purchases_finished','customer','suppliers','brands','mongoose','purchases','Mixed','1903730HoOKUz','2300331wzmxxe','staff','model','transfer_finished','5777080vexXEM','sales','5166648TNPCUN','product','English','s_payment','False','transfer','Schema','1017080rKZkAP','6LSzmaX','expenses_type','13340nLlOUR','customer_payment','8rOvdEP','units','adjustment','50wwwdcx','exports','Enabled','suppliers_payment','email_settings','return_sales_finished','Types','return_sales','profile','c_payment','supervisor_setup','90tCDeGo'];a0_0x1c6f=function(){return _0x460bad;};return a0_0x1c6f();}function a0_0x23d1(_0x45ef53,_0x57780b){const _0x1c6ff4=a0_0x1c6f();return a0_0x23d1=function(_0x23d1a6,_0x1e3396){_0x23d1a6=_0x23d1a6-0xd1;let _0xe89357=_0x1c6ff4[_0x23d1a6];return _0xe89357;},a0_0x23d1(_0x45ef53,_0x57780b);}const a0_0x9959c5=a0_0x23d1;(function(_0x179371,_0x19e847){const _0x190066=a0_0x23d1,_0x4e7fa9=_0x179371();while(!![]){try{const _0x3450d7=parseInt(_0x190066(0xee))/0x1+parseInt(_0x190066(0xe0))/0x2+-parseInt(_0x190066(0xd5))/0x3*(-parseInt(_0x190066(0xf1))/0x4)+-parseInt(_0x190066(0xe5))/0x5+-parseInt(_0x190066(0xef))/0x6*(-parseInt(_0x190066(0xd8))/0x7)+parseInt(_0x190066(0xf3))/0x8*(parseInt(_0x190066(0xe7))/0x9)+parseInt(_0x190066(0xf6))/0xa*(-parseInt(_0x190066(0xe1))/0xb);if(_0x3450d7===_0x19e847)break;else _0x4e7fa9['push'](_0x4e7fa9['shift']());}catch(_0x2bf468){_0x4e7fa9['push'](_0x4e7fa9['shift']());}}}(a0_0x1c6f,0x9139d));const mongoose=require(a0_0x9959c5(0xdd)),sing_up_data=new mongoose[(a0_0x9959c5(0xed))]({'name':{'type':String},'email':{'type':String,'required':!![],'unique':!![]},'password':{'type':String,'required':!![]},'mobile':{'type':Number},'role':{'type':String,'require':!![]},'code':{'type':String},'isUsed':{'type':String,'default':'False'}}),sing_up=new mongoose[(a0_0x9959c5(0xe3))]('sing_up',sing_up_data),profile_data=new mongoose[(a0_0x9959c5(0xed))]({'firstname':{'type':String},'lastname':{'type':String},'email':{'type':String},'image':{'type':String}}),profile=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xd2),profile_data),categories_data=new mongoose['Schema']({'name':{'type':String},'products':{'type':Number}}),categories=new mongoose['model'](a0_0x9959c5(0xd7),categories_data),brands_data=new mongoose[(a0_0x9959c5(0xed))]({'name':{'type':String},'products':{'type':Number}}),brands=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xdc),brands_data),units_data=new mongoose[(a0_0x9959c5(0xed))]({'name':{'type':String},'secondary_unit':{'type':String},'products':{'type':Number}}),units=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xf4),units_data),product_data=new mongoose[(a0_0x9959c5(0xed))]({'image':{'type':String,'required':!![]},'name':{'type':String,'required':!![]},'category':{'type':String,'required':!![]},'brand':{'type':String,'required':!![]},'sku':{'type':String},'unit':{'type':String,'required':!![]},'second_unit':{'type':String},'stock':{'type':Number},'alertquantity':{'type':Number},'product_code':{'type':String,'unique':!![]},'warehouse':{'type':String},'secondary_unit':{'type':String},'sub_category':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number,'default':0x270f},'maxProdPerUnit':{'type':Number},'product_category':{'type':String}}),product=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xe8),product_data),warehouse_data=new mongoose[(a0_0x9959c5(0xed))]({'name':{'type':String,'required':!![]},'address':{'type':String,'required':!![]},'room':{'type':String},'status':{'type':String,'default':a0_0x9959c5(0xf8)},'main_category':{'type':String},'category':{'type':String},'warehouse_category':{'type':String},'product_details':[{'product_name':{'type':String,'default':'no\x20product'},'product_stock':{'type':Number,'min':0x0,'default':0x0},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x9959c5(0xed)][a0_0x9959c5(0xfc)][a0_0x9959c5(0xdf)]},'type':{'type':String},'floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxPerUnit':{'type':Number},'batch_code':{'type':String},'alertQTY':{'type':Number},'production_date':{'type':String},'delivery_date':{'type':String},'delivery_code':{'type':String},'product_cat':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_incoming':{'type':String}}]}),warehouse=new mongoose['model'](a0_0x9959c5(0xd6),warehouse_data),staff_data=new mongoose[(a0_0x9959c5(0xed))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'status':{'type':String,'default':'Enabled'},'warehouse':{'type':String},'position':{'type':String},'warehouse_category':{'type':String}}),staff=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xe2),staff_data),customer_data=new mongoose[(a0_0x9959c5(0xed))]({'name':{'type':String,'required':!![]},'address':{'type':String},'mobile':{'type':Number},'email':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'ID':{'type':String},'SalesmanCode':{'type':String},'SalesmanName':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),customer=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xda),customer_data),c_payment=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),c_payment_data=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xd3),c_payment),customer_payment_data=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),customer_payment=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xf2),customer_payment_data),suppliers_data=new mongoose['Schema']({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'company':{'type':String},'address':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'suppliers_code':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),suppliers=new mongoose['model'](a0_0x9959c5(0xdb),suppliers_data),s_payment=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),s_payment_data=new mongoose['model'](a0_0x9959c5(0xea),s_payment),suppliers_payment_data=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),suppliers_payment=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xf9),suppliers_payment_data),purchases_data=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema'][a0_0x9959c5(0xfc)][a0_0x9959c5(0xdf)]},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'product_cat':{'type':String},'room_name':{'type':String},'delivery_code':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x9959c5(0xeb)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x9959c5(0xeb)},'isAllowEdit':{'type':String,'default':a0_0x9959c5(0xeb)},'roomList':[{'room_name':{'type':String}}]}),purchases=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xde),purchases_data),purchases_data_finished=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'product_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':'False'},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'isAllowEdit':{'type':String,'default':a0_0x9959c5(0xeb)}}),purchases_finished=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xd9),purchases_data_finished),purchases_return_data=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x9959c5(0xed)][a0_0x9959c5(0xfc)][a0_0x9959c5(0xdf)]},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return=new mongoose[(a0_0x9959c5(0xe3))]('return_purchases',purchases_return_data),purchases_return_data_finished=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return_finished=new mongoose[(a0_0x9959c5(0xe3))]('return_purchases_finish',purchases_return_data_finished),sales_data=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema'][a0_0x9959c5(0xfc)][a0_0x9959c5(0xdf)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'requested_qty':{'type':Number},'delivery_date':{'type':String},'delivery_code':{'type':String},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':'False'},'SCRN':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':a0_0x9959c5(0xeb)}}),sales=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xe6),sales_data),sales_data_finished=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema'][a0_0x9959c5(0xfc)][a0_0x9959c5(0xdf)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':a0_0x9959c5(0xeb)},'SCRN':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':a0_0x9959c5(0xeb)},'mode_transpo':{'type':String},'name_driver':{'type':String}}),sales_finished=new mongoose[(a0_0x9959c5(0xe3))]('sales_finished',sales_data_finished),sales_return_data=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x9959c5(0xed)]['Types'][a0_0x9959c5(0xdf)]},'type':{'type':String},'floorlevel':{'type':Number}}],'note':{'type':String}}),sales_return=new mongoose['model'](a0_0x9959c5(0xd1),sales_return_data),sales_return_data_finished=new mongoose[(a0_0x9959c5(0xed))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'warehouse_cat':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String}}],'return_sale_QA':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String},'bay':{'type':Number,'default':0x1}}],'note':{'type':String}}),sales_return_finished=new mongoose['model'](a0_0x9959c5(0xfb),sales_return_data_finished),transfers_data=new mongoose[(a0_0x9959c5(0xed))]({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'from_bin':{'type':mongoose[a0_0x9959c5(0xed)]['Types'][a0_0x9959c5(0xdf)]},'from_types':{'type':String},'from_floorlevel':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'to_bin':{'type':mongoose[a0_0x9959c5(0xed)]['Types']['Mixed']},'to_types':{'type':String},'to_floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'storage':{'type':String},'rack':{'type':String},'from_storage':{'type':String},'from_rack':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction_id':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x9959c5(0xeb)},'isAllowEdit':{'type':String,'default':'False'}}),transfers=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xec),transfers_data),transfers_data_finished=new mongoose['Schema']({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxProducts':{'type':Number},'maxPerUnit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x9959c5(0xeb)},'isAllowEdit':{'type':String,'default':'False'}}),transfers_finished=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xe4),transfers_data_finished),expenses=new mongoose[(a0_0x9959c5(0xed))]({'name':{'type':String}}),expenses_type=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xf0),expenses),expenses_data=new mongoose[(a0_0x9959c5(0xed))]({'type':{'type':String},'date':{'type':String},'amount':{'type':Number},'note':{'type':String}}),all_expenses=new mongoose[(a0_0x9959c5(0xe3))]('expenses',expenses_data),adjustment_data=new mongoose['Schema']({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x9959c5(0xed)]['Types'][a0_0x9959c5(0xdf)]},'type':{'type':String},'floorlevel':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':a0_0x9959c5(0xeb)}}),adjustment=new mongoose[(a0_0x9959c5(0xe3))](a0_0x9959c5(0xf5),adjustment_data),adjustment_data_finished=new mongoose[(a0_0x9959c5(0xed))]({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'maxPerUnit':{'type':Number},'invoice':{'type':String},'id_transaction':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x9959c5(0xeb)},'isAllowEdit':{'type':String,'default':'False'}}),adjustment_finished=new mongoose[(a0_0x9959c5(0xe3))]('adjustment_finished',adjustment_data_finished),master_settings_data=new mongoose[(a0_0x9959c5(0xed))]({'site_title':{'type':String},'image':{'type':String},'currency':{'type':String,'default':'$'},'currency_placement':{'type':String,'default':0x2},'timezone':{'type':String},'language':{'type':String,'default':a0_0x9959c5(0xe9)}}),master_shop=new mongoose[(a0_0x9959c5(0xe3))]('master_shop',master_settings_data),supervisor_settings_data=new mongoose[(a0_0x9959c5(0xed))]({'RMSName':{'type':String},'RMSEmail':{'type':String},'RMSnumber':{'type':String},'FGSName':{'type':String},'FGSEmail':{'type':String},'FGSnumber':{'type':String}}),supervisor_settings=new mongoose['model'](a0_0x9959c5(0xd4),supervisor_settings_data),email_settings_data=new mongoose[(a0_0x9959c5(0xed))]({'host':{'type':String},'port':{'type':String},'email':{'type':String},'password':{'type':String}}),email_settings=new mongoose['model'](a0_0x9959c5(0xfa),email_settings_data);module[a0_0x9959c5(0xf7)]={'sing_up':sing_up,'profile':profile,'categories':categories,'brands':brands,'units':units,'product':product,'warehouse':warehouse,'staff':staff,'customer':customer,'suppliers':suppliers,'suppliers_payment':suppliers_payment,'s_payment_data':s_payment_data,'purchases':purchases,'purchases_return':purchases_return,'sales':sales,'sales_return':sales_return,'customer_payment':customer_payment,'c_payment_data':c_payment_data,'transfers':transfers,'expenses_type':expenses_type,'all_expenses':all_expenses,'adjustment':adjustment,'master_shop':master_shop,'email_settings':email_settings,'purchases_finished':purchases_finished,'sales_finished':sales_finished,'adjustment_finished':adjustment_finished,'transfers_finished':transfers_finished,'purchases_return_finished':purchases_return_finished,'sales_return_finished':sales_return_finished,'supervisor_settings':supervisor_settings};