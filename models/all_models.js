const a0_0x2e9de4=a0_0x5835;function a0_0x5835(_0x28389c,_0x126895){const _0x58ac7e=a0_0x58ac();return a0_0x5835=function(_0x5835df,_0x107104){_0x5835df=_0x5835df-0x173;let _0x3ae334=_0x58ac7e[_0x5835df];return _0x3ae334;},a0_0x5835(_0x28389c,_0x126895);}function a0_0x58ac(){const _0x482340=['expenses','1144206cOskHo','adjustment_finished','transfer','4482525BRVNFL','purchases_finished','expenses_type','transfer_finished','model','1016zPLzMH','customer_payment','1792wbBAWF','master_shop','mongoose','c_payment','suppliers_payment','Schema','Enabled','return_purchases_finish','brands','supervisor_setup','product','1326aWuJDt','purchases','620zLyRzR','categories','23937AnJPaB','Mixed','warehouse','adjustment','797190kAwKqB','False','sales_finished','English','26955830KzRXKN','profile','sing_up','81JwLRTY','25039DozGrr','s_payment','customer','Types','return_purchases','suppliers','sales','staff'];a0_0x58ac=function(){return _0x482340;};return a0_0x58ac();}(function(_0x4d5568,_0x10bcc){const _0x147409=a0_0x5835,_0x65f19=_0x4d5568();while(!![]){try{const _0x31b596=-parseInt(_0x147409(0x191))/0x1*(parseInt(_0x147409(0x186))/0x2)+parseInt(_0x147409(0x195))/0x3*(parseInt(_0x147409(0x193))/0x4)+-parseInt(_0x147409(0x17f))/0x5+parseInt(_0x147409(0x17c))/0x6+parseInt(_0x147409(0x173))/0x7*(-parseInt(_0x147409(0x184))/0x8)+-parseInt(_0x147409(0x1a0))/0x9*(parseInt(_0x147409(0x199))/0xa)+parseInt(_0x147409(0x19d))/0xb;if(_0x31b596===_0x10bcc)break;else _0x65f19['push'](_0x65f19['shift']());}catch(_0x369f66){_0x65f19['push'](_0x65f19['shift']());}}}(a0_0x58ac,0x97c39));const mongoose=require(a0_0x2e9de4(0x188)),sing_up_data=new mongoose[(a0_0x2e9de4(0x18b))]({'name':{'type':String},'email':{'type':String,'required':!![],'unique':!![]},'password':{'type':String,'required':!![]},'mobile':{'type':Number},'role':{'type':String,'require':!![]},'code':{'type':String},'isUsed':{'type':String,'default':a0_0x2e9de4(0x19a)}}),sing_up=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x19f),sing_up_data),profile_data=new mongoose[(a0_0x2e9de4(0x18b))]({'firstname':{'type':String},'lastname':{'type':String},'email':{'type':String},'image':{'type':String}}),profile=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x19e),profile_data),categories_data=new mongoose[(a0_0x2e9de4(0x18b))]({'name':{'type':String},'products':{'type':Number}}),categories=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x194),categories_data),brands_data=new mongoose[(a0_0x2e9de4(0x18b))]({'name':{'type':String},'products':{'type':Number}}),brands=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x18e),brands_data),units_data=new mongoose[(a0_0x2e9de4(0x18b))]({'name':{'type':String},'secondary_unit':{'type':String},'products':{'type':Number}}),units=new mongoose[(a0_0x2e9de4(0x183))]('units',units_data),product_data=new mongoose['Schema']({'image':{'type':String,'required':!![]},'name':{'type':String,'required':!![]},'category':{'type':String,'required':!![]},'brand':{'type':String,'required':!![]},'sku':{'type':String},'unit':{'type':String,'required':!![]},'second_unit':{'type':String},'stock':{'type':Number},'alertquantity':{'type':Number},'product_code':{'type':String,'unique':!![]},'warehouse':{'type':String},'secondary_unit':{'type':String},'sub_category':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number,'default':0x270f},'maxProdPerUnit':{'type':Number},'product_category':{'type':String}}),product=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x190),product_data),warehouse_data=new mongoose['Schema']({'name':{'type':String,'required':!![]},'address':{'type':String,'required':!![]},'room':{'type':String},'status':{'type':String,'default':a0_0x2e9de4(0x18c)},'main_category':{'type':String},'category':{'type':String},'warehouse_category':{'type':String},'product_details':[{'product_name':{'type':String,'default':'no\x20product'},'product_stock':{'type':Number,'min':0x0,'default':0x0},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema'][a0_0x2e9de4(0x176)][a0_0x2e9de4(0x196)]},'type':{'type':String},'floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxPerUnit':{'type':Number},'batch_code':{'type':String},'alertQTY':{'type':Number},'production_date':{'type':String},'delivery_date':{'type':String},'delivery_code':{'type':String},'product_cat':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_incoming':{'type':String}}]}),warehouse=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x197),warehouse_data),staff_data=new mongoose[(a0_0x2e9de4(0x18b))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'status':{'type':String,'default':'Enabled'},'warehouse':{'type':String},'position':{'type':String},'warehouse_category':{'type':String}}),staff=new mongoose['model'](a0_0x2e9de4(0x17a),staff_data),customer_data=new mongoose['Schema']({'name':{'type':String,'required':!![]},'address':{'type':String},'mobile':{'type':Number},'email':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'ID':{'type':String},'SalesmanCode':{'type':String},'SalesmanName':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),customer=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x175),customer_data),c_payment=new mongoose[(a0_0x2e9de4(0x18b))]({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),c_payment_data=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x189),c_payment),customer_payment_data=new mongoose[(a0_0x2e9de4(0x18b))]({'invoice':{'type':String},'date':{'type':String},'customer':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),customer_payment=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x185),customer_payment_data),suppliers_data=new mongoose[(a0_0x2e9de4(0x18b))]({'name':{'type':String,'required':!![]},'email':{'type':String,'required':!![]},'mobile':{'type':Number,'required':!![]},'company':{'type':String},'address':{'type':String},'receivable':{'type':Number},'payable':{'type':Number},'suppliers_code':{'type':String},'contactperson':{'type':String},'landline':{'type':String}}),suppliers=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x178),suppliers_data),s_payment=new mongoose[(a0_0x2e9de4(0x18b))]({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),s_payment_data=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x174),s_payment),suppliers_payment_data=new mongoose[(a0_0x2e9de4(0x18b))]({'invoice':{'type':String},'date':{'type':String},'suppliers':{'type':String},'reason':{'type':String},'amount':{'type':Number}}),suppliers_payment=new mongoose['model'](a0_0x2e9de4(0x18a),suppliers_payment_data),purchases_data=new mongoose[(a0_0x2e9de4(0x18b))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x2e9de4(0x18b)][a0_0x2e9de4(0x176)]['Mixed']},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'product_cat':{'type':String},'room_name':{'type':String},'delivery_code':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x2e9de4(0x19a)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x2e9de4(0x19a)},'isAllowEdit':{'type':String,'default':a0_0x2e9de4(0x19a)},'roomList':[{'room_name':{'type':String}}]}),purchases=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x192),purchases_data),purchases_data_finished=new mongoose[(a0_0x2e9de4(0x18b))]({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'quantity':{'type':Number},'standard_unit':{'type':String},'secondary_unit':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'maxStocks':{'type':Number},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'product_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String}}],'note':{'type':String},'batch_code':{'type':String},'paid_amount':{'type':Number,'default':0x0},'due_amount':{'type':Number},'return_data':{'type':String,'default':a0_0x2e9de4(0x19a)},'room':{'type':String},'POnumber':{'type':String},'SCRN':{'type':String},'JO_number':{'type':String},'isAllowEdit':{'type':String,'default':'False'}}),purchases_finished=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x180),purchases_data_finished),purchases_return_data=new mongoose['Schema']({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x2e9de4(0x18b)][a0_0x2e9de4(0x176)]['Mixed']},'type':{'type':String},'floorlevel':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x177),purchases_return_data),purchases_return_data_finished=new mongoose['Schema']({'invoice':{'type':String},'suppliers':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'to_warehouse_name':{'type':String},'to_room':{'type':String},'return_product':[{'product_name':{'type':String},'purchase_quantity':{'type':Number},'return_qty':{'type':Number},'stock_quantity':{'type':Number},'bay':{'type':Number},'secondary_code':{'type':String},'product_code':{'type':String},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'expiry_date':{'type':String}}],'note':{'type':String}}),purchases_return_finished=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x18d),purchases_return_data_finished),sales_data=new mongoose['Schema']({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema'][a0_0x2e9de4(0x176)][a0_0x2e9de4(0x196)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'requested_qty':{'type':Number},'delivery_date':{'type':String},'delivery_code':{'type':String},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'actual_qty':{'type':String},'actual_uom':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':a0_0x2e9de4(0x19a)},'SCRN':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':a0_0x2e9de4(0x19a)}}),sales=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x179),sales_data),sales_data_finished=new mongoose[(a0_0x2e9de4(0x18b))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'Toroom':{'type':String},'sale_product':[{'product_name':{'type':String},'quantity':{'type':Number},'stock':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x2e9de4(0x18b)][a0_0x2e9de4(0x176)][a0_0x2e9de4(0x196)]},'type':{'type':String},'floorlevel':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_name':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'return_data':{'type':String,'default':'False'},'SCRN':{'type':String},'finalize':{'type':String,'default':a0_0x2e9de4(0x19a)},'isAllowEdit':{'type':String,'default':a0_0x2e9de4(0x19a)},'mode_transpo':{'type':String},'name_driver':{'type':String}}),sales_finished=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x19b),sales_data_finished),sales_return_data=new mongoose[(a0_0x2e9de4(0x18b))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose['Schema'][a0_0x2e9de4(0x176)][a0_0x2e9de4(0x196)]},'type':{'type':String},'floorlevel':{'type':Number}}],'note':{'type':String}}),sales_return=new mongoose[(a0_0x2e9de4(0x183))]('return_sales',sales_return_data),sales_return_data_finished=new mongoose[(a0_0x2e9de4(0x18b))]({'invoice':{'type':String},'customer':{'type':String},'date':{'type':String},'warehouse_name':{'type':String},'room':{'type':String},'warehouse_cat':{'type':String},'ToWarehouse':{'type':String},'ToRoom':{'type':String},'return_sale':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'bay':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String}}],'return_sale_QA':[{'product_name':{'type':String},'sale_qty':{'type':Number},'return_qty':{'type':Number},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'production_date':{'type':String},'expiry_date':{'type':String},'batch_code':{'type':String},'maxPerUnit':{'type':Number},'maxProducts':{'type':Number},'secondary_unit':{'type':String},'unit':{'type':String},'bay':{'type':Number,'default':0x1}}],'note':{'type':String}}),sales_return_finished=new mongoose['model']('return_sales_finished',sales_return_data_finished),transfers_data=new mongoose[(a0_0x2e9de4(0x18b))]({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'from_bin':{'type':mongoose['Schema'][a0_0x2e9de4(0x176)][a0_0x2e9de4(0x196)]},'from_types':{'type':String},'from_floorlevel':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'to_bin':{'type':mongoose['Schema'][a0_0x2e9de4(0x176)][a0_0x2e9de4(0x196)]},'to_types':{'type':String},'to_floorlevel':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'storage':{'type':String},'rack':{'type':String},'from_storage':{'type':String},'from_rack':{'type':String},'maxperunit':{'type':Number},'alertQTY':{'type':Number},'production_date':{'type':String},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction_id':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':a0_0x2e9de4(0x19a)}}),transfers=new mongoose['model'](a0_0x2e9de4(0x17e),transfers_data),transfers_data_finished=new mongoose[(a0_0x2e9de4(0x18b))]({'date':{'type':String},'invoice':{'type':String},'from_warehouse':{'type':String},'from_room':{'type':String},'to_warehouse':{'type':String},'to_room':{'type':String},'product':[{'product_name':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'product_code':{'type':String},'from_quantity':{'type':Number},'from_bay':{'type':Number},'to_quantity':{'type':Number},'to_bay':{'type':Number},'maxProducts':{'type':Number,'default':0x270f},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'maxProducts':{'type':Number},'maxPerUnit':{'type':Number},'alertQTY':{'type':Number},'prod_cat':{'type':String},'from_room_name':{'type':String},'to_room_name':{'type':String},'from_invoice':{'type':String},'To_invoice':{'type':String},'id_transaction':{'type':String}}],'note':{'type':String},'expiry_date':{'type':String},'finalize':{'type':String,'default':a0_0x2e9de4(0x19a)},'isAllowEdit':{'type':String,'default':a0_0x2e9de4(0x19a)}}),transfers_finished=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x182),transfers_data_finished),expenses=new mongoose[(a0_0x2e9de4(0x18b))]({'name':{'type':String}}),expenses_type=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x181),expenses),expenses_data=new mongoose['Schema']({'type':{'type':String},'date':{'type':String},'amount':{'type':Number},'note':{'type':String}}),all_expenses=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x17b),expenses_data),adjustment_data=new mongoose['Schema']({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'storage':{'type':String},'rack':{'type':String},'bay':{'type':Number},'bin':{'type':mongoose[a0_0x2e9de4(0x18b)][a0_0x2e9de4(0x176)][a0_0x2e9de4(0x196)]},'type':{'type':String},'floorlevel':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'primary_code':{'type':String},'secondary_code':{'type':String},'invoice':{'type':String},'id_transaction_from':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':a0_0x2e9de4(0x19a)},'isAllowEdit':{'type':String,'default':a0_0x2e9de4(0x19a)}}),adjustment=new mongoose['model'](a0_0x2e9de4(0x198),adjustment_data),adjustment_data_finished=new mongoose[(a0_0x2e9de4(0x18b))]({'warehouse_name':{'type':String},'room':{'type':String},'date':{'type':String},'product':[{'product_name':{'type':String},'product_code':{'type':String},'bay':{'type':Number},'stockBefore':{'type':Number},'types':{'type':String},'adjust_qty':{'type':Number},'new_adjust_qty':{'type':Number},'unit':{'type':String},'secondary_unit':{'type':String},'batch_code':{'type':String},'expiry_date':{'type':String},'production_date':{'type':String},'alertQTY':{'type':Number},'prod_cat':{'type':String},'room_names':{'type':String},'maxPerUnit':{'type':Number},'invoice':{'type':String},'id_transaction':{'type':String}}],'note':{'type':String},'invoice':{'type':String},'JO_number':{'type':String},'finalize':{'type':String,'default':'False'},'isAllowEdit':{'type':String,'default':'False'}}),adjustment_finished=new mongoose['model'](a0_0x2e9de4(0x17d),adjustment_data_finished),master_settings_data=new mongoose['Schema']({'site_title':{'type':String},'image':{'type':String},'currency':{'type':String,'default':'$'},'currency_placement':{'type':String,'default':0x2},'timezone':{'type':String},'language':{'type':String,'default':a0_0x2e9de4(0x19c)}}),master_shop=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x187),master_settings_data),supervisor_settings_data=new mongoose['Schema']({'RMSName':{'type':String},'RMSEmail':{'type':String},'RMSnumber':{'type':String},'FGSName':{'type':String},'FGSEmail':{'type':String},'FGSnumber':{'type':String}}),supervisor_settings=new mongoose[(a0_0x2e9de4(0x183))](a0_0x2e9de4(0x18f),supervisor_settings_data),email_settings_data=new mongoose[(a0_0x2e9de4(0x18b))]({'host':{'type':String},'port':{'type':String},'email':{'type':String},'password':{'type':String}}),email_settings=new mongoose[(a0_0x2e9de4(0x183))]('email_settings',email_settings_data);module['exports']={'sing_up':sing_up,'profile':profile,'categories':categories,'brands':brands,'units':units,'product':product,'warehouse':warehouse,'staff':staff,'customer':customer,'suppliers':suppliers,'suppliers_payment':suppliers_payment,'s_payment_data':s_payment_data,'purchases':purchases,'purchases_return':purchases_return,'sales':sales,'sales_return':sales_return,'customer_payment':customer_payment,'c_payment_data':c_payment_data,'transfers':transfers,'expenses_type':expenses_type,'all_expenses':all_expenses,'adjustment':adjustment,'master_shop':master_shop,'email_settings':email_settings,'purchases_finished':purchases_finished,'sales_finished':sales_finished,'adjustment_finished':adjustment_finished,'transfers_finished':transfers_finished,'purchases_return_finished':purchases_return_finished,'sales_return_finished':sales_return_finished,'supervisor_settings':supervisor_settings};