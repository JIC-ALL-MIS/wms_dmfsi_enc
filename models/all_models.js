const a0_0x1262de=a0_0x121a;function a0_0x121a(_0x5a7e0f,_0x2e2215){const _0x256d2e=a0_0x256d();return a0_0x121a=function(_0x121a24,_0x2fce07){_0x121a24=_0x121a24-0x1d2;let _0x1525cb=_0x256d2e[_0x121a24];return _0x1525cb;},a0_0x121a(_0x5a7e0f,_0x2e2215);}(function(_0x2588d2,_0x291f8d){const _0x4de3fb=a0_0x121a,_0x5e9d98=_0x2588d2();while(!![]){try{const _0x40fef9=-parseInt(_0x4de3fb(0x1ec))/0x1+parseInt(_0x4de3fb(0x1d8))/0x2+parseInt(_0x4de3fb(0x1d6))/0x3+parseInt(_0x4de3fb(0x1e0))/0x4*(-parseInt(_0x4de3fb(0x1e1))/0x5)+parseInt(_0x4de3fb(0x1ef))/0x6*(parseInt(_0x4de3fb(0x1e9))/0x7)+parseInt(_0x4de3fb(0x1ee))/0x8*(parseInt(_0x4de3fb(0x1dc))/0x9)+parseInt(_0x4de3fb(0x1e6))/0xa*(-parseInt(_0x4de3fb(0x1f1))/0xb);if(_0x40fef9===_0x291f8d)break;else _0x5e9d98['push'](_0x5e9d98['shift']());}catch(_0x394e33){_0x5e9d98['push'](_0x5e9d98['shift']());}}}(a0_0x256d,0xe4a18));const mongoose=require(a0_0x1262de(0x1d7)),sing_up_data=new mongoose[(a0_0x1262de(0x1ea))]({'name':{'type':String},'email':{'type':String,'required':!![],'unique':!![]},'password':{'type':String,'required':!![]},'mobile':{'type':Number},'role':{'type':String,'require':!![]},'code':{'type':String},'isUsed':{'type':String,'default':a0_0x1262de(0x1f2)}}),sing_up=new mongoose['model']('sing_up',sing_up_data),profile_data=new mongoose[(a0_0x1262de(0x1ea))]({'firstname':{'type':String},'lastname':{'type':String},'email':{'type':String},'image':{'type':String}}),profile=new mongoose[(a0_0x1262de(0x1f0))]('profile',profile_data),categories_data=new mongoose[(a0_0x1262de(0x1ea))]({'name':{'type':String},'products':{'type':Number}}),categories=new mongoose[(a0_0x1262de(0x1f0))]('categories',categories_data),brands_data=new mongoose[(a0_0x1262de(0x1ea))]({'name':{'type':String},'products':{'type':Number}}),brands=new mongoose['model'](a0_0x1262de(0x1d4),brands_data),units_data=new mongoose[(a0_0x1262de(0x1ea))]({'name':{'type':String},'secondary_unit':{'type':String},'products':{'type':Number}}),units=new mongoose[(a0_0x1262de(0x1f0))]('units',units_data),product_data=new mongoose[(a0_0x1262de(0x1ea))]({'image':{'type':String,'required':!![]},'name':{'type':String,'required':!![]},'category':{'type':String,'required':!![]},'brand':{'type':String,'required':!![]},'sku':{'type':String},'unit':{'type':String,'required':!![]},'second_unit':{'type':String},'stock':{'type':Number},'alertquantity':{'type':Number},'product_code':{'type':String,'unique':!![]},'warehouse':{'type':String},'secondary_unit':{'type':String},'sub_category':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number,'default':0x270f},'maxProdPerUnit':{'type':Number},'product_category':{'type':String}}),product=new mongoose[(a0_0x1262de(0x1f0))]('product',product_data),warehouse_data=new mongoose[(a0_0x1262de(0x1ea))]({'name':{'type':String,'required':!![]},'address':{'type':String,'required':!![]},'room':{'type':String},'status':{'type':String,'default':a0_0x1262de(0x1f7)},'main_category':{'type':String},'category':{'type':String},'warehouse_category':{'type':String},'product_details':[{'product_name':{'type':String,'default':'no\x20product'},'product_stock':{'type':Number,'default':0x0},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1262de(0x1ea)][a0_0x1262de(0x1d2)][a0_0x1262de(0x1db)]},'type':{'type':String},'floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxPerUnit':{'type':Number},'batch_code':{'type':String},'alertQTY':{'type':Number},'production_date':{'type':String},'delivery_date':{'type':String},'delivery_code':{'type':String},'product_cat':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String}}]}),warehouse=new mongoose['model']('warehouse',warehouse_data),staff_data=new mongoose[(a0_0x1262de(0x1ea))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'status':{'type':String,'default':'Enabled'},'warehouse':{'type':String},'position':{'type':String},'warehouse_category':{'type':String}}),staff=new mongoose['model'](a0_0x1262de(0x1d9),staff_data),customer_data=new mongoose[(a0_0x1262de(0x1ea))]({'name':{'type':String,'required':!![]},'address':{'type':String},'mobile':{'type':Number},'email':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'ID':{'type':String},'SalesmanCode':{'type':String},'SalesmanName':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),customer=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1d5),customer_data),c_payment=new mongoose['Schema']({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),c_payment_data=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1dd),c_payment),customer_payment_data=new mongoose[(a0_0x1262de(0x1ea))]({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),customer_payment=new mongoose['model'](a0_0x1262de(0x1e3),customer_payment_data),suppliers_data=new mongoose[(a0_0x1262de(0x1ea))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'company':{'type':String},'address':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'suppliers_code':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),suppliers=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1e8),suppliers_data),s_payment=new mongoose['Schema']({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),s_payment_data=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1f5),s_payment),suppliers_payment_data=new mongoose[(a0_0x1262de(0x1ea))]({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),suppliers_payment=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1e7),suppliers_payment_data),purchases_data=new mongoose[(a0_0x1262de(0x1ea))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1262de(0x1ea)]['Types'][a0_0x1262de(0x1db)]},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'product_cat':{'type':String},'room_name':{'type':String},'delivery_code':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x1262de(0x1f2)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':a0_0x1262de(0x1f2)},'roomList':[{'room_name':{'type':String}}]}),purchases=new mongoose['model'](a0_0x1262de(0x1e5),purchases_data),purchases_data_finished=new mongoose[(a0_0x1262de(0x1ea))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'product_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x1262de(0x1f2)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'isAllowEdit':{'type':String,'default':'False'}}),purchases_finished=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1eb),purchases_data_finished),purchases_return_data=new mongoose['Schema']({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1262de(0x1ea)][a0_0x1262de(0x1d2)][a0_0x1262de(0x1db)]},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1f6),purchases_return_data),purchases_return_data_finished=new mongoose[(a0_0x1262de(0x1ea))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return_finished=new mongoose['model'](a0_0x1262de(0x1da),purchases_return_data_finished),sales_data=new mongoose[(a0_0x1262de(0x1ea))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema'][a0_0x1262de(0x1d2)][a0_0x1262de(0x1db)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'requested_qty':{'type':Number},'delivery_date':{'type':String},'delivery_code':{'type':String},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':a0_0x1262de(0x1f2)},'SCRN':{'type':String},'finalize':{'type':String,'default':a0_0x1262de(0x1f2)},'isAllowEdit':{'type':String,'default':a0_0x1262de(0x1f2)}}),sales=new mongoose['model'](a0_0x1262de(0x1df),sales_data),sales_data_finished=new mongoose[(a0_0x1262de(0x1ea))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1262de(0x1ea)]['Types'][a0_0x1262de(0x1db)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':'False'},'SCRN':{'type':String},'finalize':{'type':String,'default':a0_0x1262de(0x1f2)},'isAllowEdit':{'type':String,'default':'False'},'mode_transpo':{'type':String},'name_driver':{'type':String}}),sales_finished=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1ed),sales_data_finished),sales_return_data=new mongoose[(a0_0x1262de(0x1ea))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1262de(0x1ea)]['Types'][a0_0x1262de(0x1db)]},'type':{'type':String},'floorlevel':{'type':Number}}],'note':{'type':String}}),sales_return=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1e2),sales_return_data),sales_return_data_finished=new mongoose[(a0_0x1262de(0x1ea))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'warehouse_cat':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String}}],'return_sale_QA':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String},'bay':{'type':Number,'default':0x1}}],'note':{'type':String}}),sales_return_finished=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1d3),sales_return_data_finished),transfers_data=new mongoose[(a0_0x1262de(0x1ea))]({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'from_bin':{'type':mongoose[a0_0x1262de(0x1ea)][a0_0x1262de(0x1d2)]['Mixed']},'from_types':{'type':String},'from_floorlevel':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'to_bin':{'type':mongoose['Schema'][a0_0x1262de(0x1d2)][a0_0x1262de(0x1db)]},'to_types':{'type':String},'to_floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'storage':{'type':String},'rack':{'type':String},'from_storage':{'type':String},'from_rack':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x1262de(0x1f2)},'isAllowEdit':{'type':String,'default':a0_0x1262de(0x1f2)}}),transfers=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1f3),transfers_data),transfers_data_finished=new mongoose[(a0_0x1262de(0x1ea))]({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxProducts':{'type':Number},'maxPerUnit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x1262de(0x1f2)},'isAllowEdit':{'type':String,'default':a0_0x1262de(0x1f2)}}),transfers_finished=new mongoose[(a0_0x1262de(0x1f0))]('transfer_finished',transfers_data_finished),expenses=new mongoose[(a0_0x1262de(0x1ea))]({'name':{'type':String}}),expenses_type=new mongoose['model'](a0_0x1262de(0x1f4),expenses),expenses_data=new mongoose[(a0_0x1262de(0x1ea))]({'type':{'type':String},'date':{'type':String},'amount':{'type':Number},'note':{'type':String}}),all_expenses=new mongoose['model']('expenses',expenses_data),adjustment_data=new mongoose[(a0_0x1262de(0x1ea))]({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x1262de(0x1ea)][a0_0x1262de(0x1d2)][a0_0x1262de(0x1db)]},'type':{'type':String},'floorlevel':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'invoice':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x1262de(0x1f2)},'isAllowEdit':{'type':String,'default':a0_0x1262de(0x1f2)}}),adjustment=new mongoose[(a0_0x1262de(0x1f0))](a0_0x1262de(0x1e4),adjustment_data),adjustment_data_finished=new mongoose['Schema']({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'maxPerUnit':{'type':Number},'invoice':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':a0_0x1262de(0x1f2)}}),adjustment_finished=new mongoose[(a0_0x1262de(0x1f0))]('adjustment_finished',adjustment_data_finished),master_settings_data=new mongoose[(a0_0x1262de(0x1ea))]({'site_title':{'type':String},'image':{'type':String},'currency':{'type':String,'default':'$'},'currency_placement':{'type':String,'default':0x2},'timezone':{'type':String},'language':{'type':String,'default':a0_0x1262de(0x1de)}}),master_shop=new mongoose[(a0_0x1262de(0x1f0))]('master_shop',master_settings_data),supervisor_settings_data=new mongoose[(a0_0x1262de(0x1ea))]({'RMSName':{'type':String},'RMSEmail':{'type':String},'RMSnumber':{'type':String},'FGSName':{'type':String},'FGSEmail':{'type':String},'FGSnumber':{'type':String}}),supervisor_settings=new mongoose[(a0_0x1262de(0x1f0))]('supervisor_setup',supervisor_settings_data),email_settings_data=new mongoose[(a0_0x1262de(0x1ea))]({'host':{'type':String},'port':{'type':String},'email':{'type':String},'password':{'type':String}}),email_settings=new mongoose['model']('email_settings',email_settings_data);function a0_0x256d(){const _0x1973c7=['sales_finished','8dqpPKX','6fmDJxE','model','22KWaTJY','False','transfer','expenses_type','s_payment','return_purchases','Enabled','Types','return_sales_finished','brands','customer','5168832uRSoFA','mongoose','3565276InNYCC','staff','return_purchases_finish','Mixed','15082992WDFXJu','c_payment','English','sales','225172FgMtmf','55oLHeVV','return_sales','customer_payment','adjustment','purchases','15521570ADqalH','suppliers_payment','suppliers','6874777mHIxYK','Schema','purchases_finished','1503572LaeHNB'];a0_0x256d=function(){return _0x1973c7;};return a0_0x256d();}module['exports']={'sing_up':sing_up,'profile':profile,'categories':categories,'brands':brands,'units':units,'product':product,'warehouse':warehouse,'staff':staff,'customer':customer,'suppliers':suppliers,'suppliers_payment':suppliers_payment,'s_payment_data':s_payment_data,'purchases':purchases,'purchases_return':purchases_return,'sales':sales,'sales_return':sales_return,'customer_payment':customer_payment,'c_payment_data':c_payment_data,'transfers':transfers,'expenses_type':expenses_type,'all_expenses':all_expenses,'adjustment':adjustment,'master_shop':master_shop,'email_settings':email_settings,'purchases_finished':purchases_finished,'sales_finished':sales_finished,'adjustment_finished':adjustment_finished,'transfers_finished':transfers_finished,'purchases_return_finished':purchases_return_finished,'sales_return_finished':sales_return_finished,'supervisor_settings':supervisor_settings};