var a0_0x2d4965=a0_0x4bdb;function a0_0x56fc(){var _0x2df719=['$product_details.storage','getMonth','slice','purchase\x20return\x20successfully','$customer_docs','$product_details._id','$product_details.product_name','return_sale','language','findOne','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','email','Chinese','$product_details.floorlevel','body','616412gBWRdR','Sale\x20Return','subtract','suppliers','data','4hRbJBv','map','2345700deCxBP','master','stock','type','$product_details.secondary_code','save','Portuguese','Return\x20Rooms','user','6732608BsTJQG','name','20238OIGLBN','customers','sales_quantity','c_payment','redirect','json','old_data','back','flash','sale_qty','findById','return_qty','/invoice/:id','Spanish','/view/:id','156204jAiesk','8112672kOIUQG','sales_return_invoice','ToWarehouse','params','express','new\x20new_data','all_data','German','../middleware/auth','1036uRxzPu','product_name','due_amount','8YyoPNz','bin','Returned\x20Payment\x20For\x20Sale\x20Return','customer_docs','Enabled','bay','3405755AbmAuI','foreach\x20newproduct','$product_details.bay','$product_details.product_code','post','../models/all_models','date','types','customer','/give_payment/:id','aggregate','Portuguese\x20(BR)','amount','$product_details.primary_code','forEach','product_code','$product_details','English','errors','find','string','getFullYear','Arabic\x20(ae)','return_sale_edit','warehouse_name','invoice','payment\x20successfull','get','French','old_warehouse_data','floorlevel','log','/sales_return/view','paid_amount','success','primary_code','exports','Router','render','product_stock','Hindi','../public/language/languages.json','English\x20(US)','$name','Arabic','/view','secondary_code','ToRoom'];a0_0x56fc=function(){return _0x2df719;};return a0_0x56fc();}(function(_0x16b212,_0x12ac14){var _0x19be59=a0_0x4bdb,_0x5f7d9f=_0x16b212();while(!![]){try{var _0x36c1b5=-parseInt(_0x19be59(0x143))/0x1+-parseInt(_0x19be59(0x171))/0x2*(-parseInt(_0x19be59(0x164))/0x3)+-parseInt(_0x19be59(0x148))/0x4*(-parseInt(_0x19be59(0x177))/0x5)+parseInt(_0x19be59(0x155))/0x6*(parseInt(_0x19be59(0x16e))/0x7)+parseInt(_0x19be59(0x153))/0x8+-parseInt(_0x19be59(0x165))/0x9+-parseInt(_0x19be59(0x14a))/0xa;if(_0x36c1b5===_0x12ac14)break;else _0x5f7d9f['push'](_0x5f7d9f['shift']());}catch(_0x45ebdb){_0x5f7d9f['push'](_0x5f7d9f['shift']());}}}(a0_0x56fc,0x74a75));function a0_0x4bdb(_0x772448,_0x168c74){var _0x56fc6d=a0_0x56fc();return a0_0x4bdb=function(_0x4bdb62,_0x447066){_0x4bdb62=_0x4bdb62-0x138;var _0x4f2a6e=_0x56fc6d[_0x4bdb62];return _0x4f2a6e;},a0_0x4bdb(_0x772448,_0x168c74);}const express=require(a0_0x2d4965(0x169)),app=express(),router=express[a0_0x2d4965(0x19c)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x2d4965(0x17c)),auth=require(a0_0x2d4965(0x16d)),users=require(a0_0x2d4965(0x1a0));router[a0_0x2d4965(0x192)](a0_0x2d4965(0x1a4),auth,async(_0x323a53,_0x4a3b46)=>{var _0x2d8d77=a0_0x2d4965;try{const {username:_0x2e9bdb,email:_0x28a597,role:_0x4fb173}=_0x323a53['user'],_0x468708=_0x323a53[_0x2d8d77(0x152)],_0x3f9628=await profile[_0x2d8d77(0x13d)]({'email':_0x468708[_0x2d8d77(0x13f)]}),_0x39402d=await master_shop[_0x2d8d77(0x18a)]();console['log'](_0x2d8d77(0x14b),_0x39402d);const _0x842108=await sales_return['aggregate']([{'$lookup':{'from':_0x2d8d77(0x156),'localField':_0x2d8d77(0x17f),'foreignField':_0x2d8d77(0x154),'as':_0x2d8d77(0x174)}},{'$unwind':_0x2d8d77(0x138)}]);console[_0x2d8d77(0x196)](_0x2d8d77(0x16b),_0x842108);if(_0x39402d[0x0][_0x2d8d77(0x13c)]==_0x2d8d77(0x1a1)){var _0x2e3f17=users[_0x2d8d77(0x188)];console[_0x2d8d77(0x196)](_0x2e3f17);}else{if(_0x39402d[0x0]['language']==_0x2d8d77(0x19f))var _0x2e3f17=users[_0x2d8d77(0x19f)];else{if(_0x39402d[0x0]['language']==_0x2d8d77(0x16c))var _0x2e3f17=users[_0x2d8d77(0x16c)];else{if(_0x39402d[0x0][_0x2d8d77(0x13c)]=='Spanish')var _0x2e3f17=users['Spanish'];else{if(_0x39402d[0x0][_0x2d8d77(0x13c)]=='French')var _0x2e3f17=users[_0x2d8d77(0x193)];else{if(_0x39402d[0x0]['language']==_0x2d8d77(0x182))var _0x2e3f17=users[_0x2d8d77(0x150)];else{if(_0x39402d[0x0][_0x2d8d77(0x13c)]==_0x2d8d77(0x140))var _0x2e3f17=users[_0x2d8d77(0x140)];else{if(_0x39402d[0x0][_0x2d8d77(0x13c)]==_0x2d8d77(0x18d))var _0x2e3f17=users[_0x2d8d77(0x1a3)];}}}}}}}_0x4a3b46[_0x2d8d77(0x19d)]('sales_return',{'success':_0x323a53[_0x2d8d77(0x15d)](_0x2d8d77(0x199)),'errors':_0x323a53['flash'](_0x2d8d77(0x189)),'role':_0x468708,'profile':_0x3f9628,'master_shop':_0x39402d,'user':_0x842108,'language':_0x2e3f17});}catch(_0x1bef01){console[_0x2d8d77(0x196)](_0x1bef01);}}),router['get'](a0_0x2d4965(0x163),auth,async(_0x2590ac,_0x48d044)=>{var _0x2211ff=a0_0x2d4965;try{const {username:_0x4266fd,email:_0x381d5e,role:_0x4674c3}=_0x2590ac['user'],_0x11b72b=_0x2590ac[_0x2211ff(0x152)],_0xdb8e9e=await profile[_0x2211ff(0x13d)]({'email':_0x11b72b[_0x2211ff(0x13f)]}),_0x5123f2=await master_shop[_0x2211ff(0x18a)]();console[_0x2211ff(0x196)](_0x2211ff(0x14b),_0x5123f2);const _0x36950d=_0x2590ac[_0x2211ff(0x168)]['id'];console[_0x2211ff(0x196)](_0x36950d);var _0x14a534=[_0x2211ff(0x151)];const _0x47a883=await sales_return[_0x2211ff(0x15f)](_0x36950d),_0x15ef38=await warehouse[_0x2211ff(0x181)]([{'$match':{'name':_0x47a883[_0x2211ff(0x167)],'room':_0x47a883[_0x2211ff(0x1a6)]}},{'$unwind':_0x2211ff(0x187)},{'$group':{'_id':_0x2211ff(0x139),'name':{'$first':_0x2211ff(0x13a)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x2211ff(0x179)},'bin':{'$first':'$product_details.bin'},'type':{'$first':'$product_details.type'},'floorlevel':{'$first':_0x2211ff(0x141)},'primary_code':{'$first':_0x2211ff(0x184)},'secondary_code':{'$first':_0x2211ff(0x14e)},'product_code':{'$first':_0x2211ff(0x17a)},'storage':{'$first':_0x2211ff(0x1a7)},'rack':{'$first':'$product_details.rack'}}}]);console[_0x2211ff(0x196)](_0x15ef38);const _0x5a6c6f=await warehouse[_0x2211ff(0x181)]([{'$match':{'status':_0x2211ff(0x175),'name':'Return\x20Goods','warehouse_category':'Raw\x20Materials'}},{'$group':{'_id':'$name','name':{'$first':_0x2211ff(0x1a2)}}},{'$sort':{'name':0x1}}]),_0x338652=await product[_0x2211ff(0x18a)]({});if(_0x5123f2[0x0][_0x2211ff(0x13c)]=='English\x20(US)'){var _0x41746a=users[_0x2211ff(0x188)];console[_0x2211ff(0x196)](_0x41746a);}else{if(_0x5123f2[0x0][_0x2211ff(0x13c)]==_0x2211ff(0x19f))var _0x41746a=users['Hindi'];else{if(_0x5123f2[0x0][_0x2211ff(0x13c)]=='German')var _0x41746a=users[_0x2211ff(0x16c)];else{if(_0x5123f2[0x0][_0x2211ff(0x13c)]==_0x2211ff(0x162))var _0x41746a=users[_0x2211ff(0x162)];else{if(_0x5123f2[0x0][_0x2211ff(0x13c)]==_0x2211ff(0x193))var _0x41746a=users[_0x2211ff(0x193)];else{if(_0x5123f2[0x0][_0x2211ff(0x13c)]=='Portuguese\x20(BR)')var _0x41746a=users[_0x2211ff(0x150)];else{if(_0x5123f2[0x0][_0x2211ff(0x13c)]=='Chinese')var _0x41746a=users[_0x2211ff(0x140)];else{if(_0x5123f2[0x0]['language']=='Arabic\x20(ae)')var _0x41746a=users[_0x2211ff(0x1a3)];}}}}}}}_0x48d044['render'](_0x2211ff(0x18e),{'success':_0x2590ac[_0x2211ff(0x15d)](_0x2211ff(0x199)),'errors':_0x2590ac[_0x2211ff(0x15d)]('errors'),'role':_0x11b72b,'profile':_0xdb8e9e,'master_shop':_0x5123f2,'user':_0x47a883,'stock':_0x15ef38,'unit':_0x338652,'language':_0x41746a,'warehouses':_0x5a6c6f,'rooms':_0x14a534});}catch(_0x5b1834){console[_0x2211ff(0x196)](_0x5b1834);}}),router[a0_0x2d4965(0x17b)](a0_0x2d4965(0x163),auth,async(_0x2a3bd3,_0x1838aa)=>{var _0x5f9eed=a0_0x2d4965;try{const _0x356613=_0x2a3bd3[_0x5f9eed(0x168)]['id'];console['log'](_0x356613);const _0x133609=await sales_return['findOne']({'invoice':_0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x190)]});console[_0x5f9eed(0x196)](_0x5f9eed(0x15b),_0x133609);const _0x5c543c=await warehouse[_0x5f9eed(0x13d)]({'name':_0x133609[_0x5f9eed(0x167)],'room':_0x133609[_0x5f9eed(0x1a6)]});console['log']('old_warehouse_data',_0x5c543c);const {invoice:_0x59d3e3,customer:_0x33effb,date:_0x1746c0,warehouse_name:_0x474643,product_name:_0x35a414,primary_code:_0x1069ee,secondary_code:_0x510721,product_code:_0x429842,sales_quantity:_0x288214,stocks:_0x4fad20,return_qty:_0x2cf0d3,note:_0x4691d4,to_warehouse_name:_0x1774b3,to_Room_name:_0x4a0969}=_0x2a3bd3['body'];console['log'](_0x2a3bd3['body']);if(typeof _0x35a414==_0x5f9eed(0x18b))var _0x1289d7=[_0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x16f)]],_0x26272e=[_0x2a3bd3['body'][_0x5f9eed(0x19a)]],_0x27891a=[_0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x1a5)]],_0x4ec410=[_0x2a3bd3[_0x5f9eed(0x142)]['product_code']],_0x1a9007=[_0x2a3bd3['body'][_0x5f9eed(0x157)]],_0xa47b68=[_0x2a3bd3[_0x5f9eed(0x142)]['stocks']],_0xe7c6dd=[_0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x160)]],_0x2dd39f=[_0x2a3bd3['body'][_0x5f9eed(0x176)]],_0x52a293=[_0x2a3bd3['body']['bin']],_0x3e7bce=[_0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x17e)]],_0x561cae=[_0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x195)]];else var _0x1289d7=[..._0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x16f)]],_0x26272e=[..._0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x19a)]],_0x27891a=[..._0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x1a5)]],_0x4ec410=[..._0x2a3bd3['body'][_0x5f9eed(0x186)]],_0x1a9007=[..._0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x157)]],_0xa47b68=[..._0x2a3bd3[_0x5f9eed(0x142)]['stocks']],_0xe7c6dd=[..._0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x160)]],_0x2dd39f=[..._0x2a3bd3['body'][_0x5f9eed(0x176)]],_0x52a293=[..._0x2a3bd3['body'][_0x5f9eed(0x172)]],_0x3e7bce=[..._0x2a3bd3['body'][_0x5f9eed(0x17e)]],_0x561cae=[..._0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x195)]];const _0x5220ae=_0x1289d7[_0x5f9eed(0x149)](_0x247fe7=>{return _0x247fe7={'product_name':_0x247fe7};});_0x26272e[_0x5f9eed(0x185)]((_0x32c533,_0x4f71f9)=>{var _0xabdea8=_0x5f9eed;_0x5220ae[_0x4f71f9][_0xabdea8(0x19a)]=_0x32c533;}),_0x27891a[_0x5f9eed(0x185)]((_0x2740e3,_0x3be655)=>{var _0x51f2a2=_0x5f9eed;_0x5220ae[_0x3be655][_0x51f2a2(0x1a5)]=_0x2740e3;}),_0x4ec410['forEach']((_0x224db6,_0x155029)=>{var _0x22e6d5=_0x5f9eed;_0x5220ae[_0x155029][_0x22e6d5(0x186)]=_0x224db6;}),_0x1a9007[_0x5f9eed(0x185)]((_0x189e20,_0x45c036)=>{var _0x5e0821=_0x5f9eed;_0x5220ae[_0x45c036][_0x5e0821(0x15e)]=_0x189e20;}),_0xa47b68[_0x5f9eed(0x185)]((_0x5b57f7,_0x3614f4)=>{_0x5220ae[_0x3614f4]['stock']=_0x5b57f7;}),_0xe7c6dd[_0x5f9eed(0x185)]((_0x463ce8,_0x957452)=>{var _0x9f2fd=_0x5f9eed;_0x5220ae[_0x957452][_0x9f2fd(0x160)]=_0x463ce8;}),_0x2dd39f[_0x5f9eed(0x185)]((_0x616d98,_0x1fd061)=>{_0x5220ae[_0x1fd061]['bay']=_0x616d98;}),_0x52a293['forEach']((_0x28e1b9,_0x588099)=>{var _0x1a2642=_0x5f9eed;_0x5220ae[_0x588099][_0x1a2642(0x172)]=_0x28e1b9;}),_0x3e7bce[_0x5f9eed(0x185)]((_0xab2d44,_0x36a67b)=>{_0x5220ae[_0x36a67b]['type']=_0xab2d44;}),_0x561cae[_0x5f9eed(0x185)]((_0x3e4a4f,_0x58c32c)=>{var _0x24799e=_0x5f9eed;_0x5220ae[_0x58c32c][_0x24799e(0x195)]=_0x3e4a4f;});var _0x332c21=0x0;_0x5220ae['forEach'](_0x1fbd68=>{var _0x21e994=_0x5f9eed;console[_0x21e994(0x196)](_0x21e994(0x178),_0x1fbd68),(parseInt(_0x1fbd68[_0x21e994(0x15e)])<parseInt(_0x1fbd68['return_qty'])||parseInt(_0x1fbd68[_0x21e994(0x14c)])<parseInt(_0x1fbd68[_0x21e994(0x160)])&&parseInt(_0x1fbd68[_0x21e994(0x15e)])>parseInt(_0x1fbd68[_0x21e994(0x160)])||parseInt(_0x1fbd68['return_qty'])==0x0)&&_0x332c21++;});if(_0x332c21!=0x0)return _0x2a3bd3[_0x5f9eed(0x15d)](_0x5f9eed(0x189),_0x5f9eed(0x13e)),_0x1838aa['redirect'](_0x5f9eed(0x15c));_0x133609[_0x5f9eed(0x13b)]['forEach'](_0x3cd9cb=>{var _0x4e8b74=_0x5f9eed;const _0x5ebae6=_0x5c543c['product_details'][_0x4e8b74(0x149)](_0x3c35dc=>{var _0x420dc9=_0x4e8b74;_0x3c35dc[_0x420dc9(0x16f)]==_0x3cd9cb['product_name']&&_0x3c35dc[_0x420dc9(0x195)]==_0x3cd9cb[_0x420dc9(0x195)]&&_0x3c35dc[_0x420dc9(0x14d)]==_0x3cd9cb[_0x420dc9(0x14d)]&&_0x3c35dc[_0x420dc9(0x172)]==_0x3cd9cb['bin']&&_0x3c35dc['bay']==_0x3cd9cb['bay']&&(_0x3c35dc[_0x420dc9(0x19e)]=parseInt(_0x3c35dc[_0x420dc9(0x19e)])+parseInt(_0x3cd9cb[_0x420dc9(0x160)]));});}),console['log'](_0x5f9eed(0x194),_0x5c543c),await _0x5c543c['save'](),_0x133609['invoice']=_0x59d3e3,_0x133609[_0x5f9eed(0x17f)]=_0x33effb,_0x133609['date']=_0x1746c0,_0x133609[_0x5f9eed(0x18f)]=_0x474643,_0x133609[_0x5f9eed(0x13b)]=_0x5220ae,_0x133609['note']=_0x4691d4,_0x133609[_0x5f9eed(0x167)]=_0x1774b3,_0x133609['ToRoom']=_0x4a0969;const _0x1f3442=await _0x133609['save']();console['log'](_0x5f9eed(0x16a),_0x1f3442);const _0x55e621=await c_payment_data[_0x5f9eed(0x13d)]({'invoice':_0x2a3bd3[_0x5f9eed(0x142)][_0x5f9eed(0x190)],'reason':_0x5f9eed(0x144)});_0x55e621[_0x5f9eed(0x146)]=_0x2a3bd3[_0x5f9eed(0x142)]['suppliers'],_0x55e621[_0x5f9eed(0x17d)]=_0x2a3bd3['body'][_0x5f9eed(0x17d)],await _0x55e621[_0x5f9eed(0x14f)](),_0x2a3bd3[_0x5f9eed(0x15d)](_0x5f9eed(0x199),_0x5f9eed(0x1aa)),_0x1838aa['redirect'](_0x5f9eed(0x197));}catch(_0xfe71bf){console[_0x5f9eed(0x196)](_0xfe71bf),_0x1838aa['status'](0xc8)[_0x5f9eed(0x15a)]({'message':_0xfe71bf['message']});}}),router[a0_0x2d4965(0x17b)](a0_0x2d4965(0x180),auth,async(_0x5d5a02,_0x436d38)=>{var _0x4ed111=a0_0x2d4965;try{const _0x1887c2=_0x5d5a02[_0x4ed111(0x168)]['id'],{invoice:_0x2c5b01,customer:_0x1e0a2a,payable_to_customer:_0x397b3e,paid_amount:_0xe98a0e}=_0x5d5a02[_0x4ed111(0x142)],_0x2cb8e4=await sales_return['findById'](_0x1887c2);console['log'](_0x4ed111(0x147),_0x2cb8e4),console[_0x4ed111(0x196)](_0x397b3e),console[_0x4ed111(0x196)](_0xe98a0e);var _0x20b2f3=_0x397b3e-_0xe98a0e;console[_0x4ed111(0x196)](_0x4ed111(0x145),_0x20b2f3),_0x2cb8e4['paid_amount']=parseFloat(_0xe98a0e)+parseFloat(_0x2cb8e4[_0x4ed111(0x198)]),_0x2cb8e4[_0x4ed111(0x170)]=_0x20b2f3,console['log'](_0x2cb8e4);const _0x1e6802=await _0x2cb8e4[_0x4ed111(0x14f)]();console[_0x4ed111(0x196)](0x1b207);const _0x319bed=await c_payment_data[_0x4ed111(0x13d)]({'invoice':_0x5d5a02['body'][_0x4ed111(0x190)],'reason':_0x4ed111(0x144)});console['log'](_0x4ed111(0x158),_0x319bed),_0x319bed[_0x4ed111(0x183)]=_0x20b2f3,await _0x319bed[_0x4ed111(0x14f)]();let _0x105af6=new Date(),_0x406eb9=('0'+_0x105af6['getDate']())[_0x4ed111(0x1a9)](-0x2),_0x262844=('0'+(_0x105af6[_0x4ed111(0x1a8)]()+0x1))[_0x4ed111(0x1a9)](-0x2),_0x8d520e=_0x105af6[_0x4ed111(0x18c)](),_0x1f6cc4=_0x8d520e+'-'+_0x262844+'-'+_0x406eb9;const _0x136dcc=new customer_payment({'invoice':_0x2c5b01,'date':_0x8d520e+'-'+_0x262844+'-'+_0x406eb9,'customer':_0x1e0a2a,'reason':_0x4ed111(0x173),'amount':_0xe98a0e}),_0x516a2e=await _0x136dcc[_0x4ed111(0x14f)]();_0x5d5a02[_0x4ed111(0x15d)](_0x4ed111(0x199),_0x4ed111(0x191)),_0x436d38[_0x4ed111(0x159)]('/sales_return/view');}catch(_0x2ca294){console[_0x4ed111(0x196)](_0x2ca294);}}),router[a0_0x2d4965(0x192)](a0_0x2d4965(0x161),auth,async(_0x52e421,_0x2192cc)=>{var _0x2530c8=a0_0x2d4965;try{const {username:_0x870a28,email:_0x1fb49f,role:_0x39ee31}=_0x52e421[_0x2530c8(0x152)],_0x5787da=_0x52e421['user'],_0x3427b7=await profile['findOne']({'email':_0x5787da[_0x2530c8(0x13f)]}),_0x52bde2=await master_shop[_0x2530c8(0x18a)]();console[_0x2530c8(0x196)](_0x2530c8(0x14b),_0x52bde2);const _0x5977e9=_0x52e421[_0x2530c8(0x168)]['id'],_0x4c7d0e=await sales_return[_0x2530c8(0x15f)](_0x5977e9);console['log'](_0x4c7d0e);const _0x13281b=await customer[_0x2530c8(0x13d)]({'name':_0x4c7d0e[_0x2530c8(0x17f)]});console['log'](_0x13281b);if(_0x52bde2[0x0]['language']==_0x2530c8(0x1a1)){var _0x477f5c=users['English'];console['log'](_0x477f5c);}else{if(_0x52bde2[0x0]['language']==_0x2530c8(0x19f))var _0x477f5c=users[_0x2530c8(0x19f)];else{if(_0x52bde2[0x0][_0x2530c8(0x13c)]==_0x2530c8(0x16c))var _0x477f5c=users[_0x2530c8(0x16c)];else{if(_0x52bde2[0x0][_0x2530c8(0x13c)]==_0x2530c8(0x162))var _0x477f5c=users[_0x2530c8(0x162)];else{if(_0x52bde2[0x0][_0x2530c8(0x13c)]==_0x2530c8(0x193))var _0x477f5c=users[_0x2530c8(0x193)];else{if(_0x52bde2[0x0]['language']==_0x2530c8(0x182))var _0x477f5c=users[_0x2530c8(0x150)];else{if(_0x52bde2[0x0][_0x2530c8(0x13c)]==_0x2530c8(0x140))var _0x477f5c=users[_0x2530c8(0x140)];else{if(_0x52bde2[0x0]['language']==_0x2530c8(0x18d))var _0x477f5c=users[_0x2530c8(0x1a3)];}}}}}}}_0x2192cc[_0x2530c8(0x19d)](_0x2530c8(0x166),{'success':_0x52e421['flash'](_0x2530c8(0x199)),'errors':_0x52e421[_0x2530c8(0x15d)](_0x2530c8(0x189)),'role':_0x5787da,'profile':_0x3427b7,'master_shop':_0x52bde2,'customers':_0x13281b,'sales':_0x4c7d0e,'language':_0x477f5c});}catch(_0x5e41af){console[_0x2530c8(0x196)](_0x5e41af);}}),module[a0_0x2d4965(0x19b)]=router;