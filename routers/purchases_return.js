function a0_0xd97b(){var _0x37d832=['getMonth','status','$product_details.type','product_code','find','257864DSIEje','$received','$invoice','15rANxws','invoice','$product_details.product_name','type','json','360Kugyfk','purchase_quantity','errors','/view','return_product','pallet','findById','$name','due_amount','floorlevel','Portuguese','to_Room_name','Arabic\x20(ae)','$return_product.return_qty','isle','/purchases_return/view','product_details','get','566451yGbwAG','return_purchase_invoice','$product_details.product_code','Raw\x20Materials','to_room','redirect','product_details.return_qtyproduct_details.return_qty','forEach','bay','/view/:id','Router','params','foreach\x20newproduct','Chinese','warehouse_name','primary_code_hide','136717JMTSMy','old_data','English\x20(US)','$date','Purchase\x20Return','types','supplier_docs','success','body','Spanish','stock_data','Arabic','master','$supplier_docs.address','Received\x20For\x20Purchase\x20Return','findOne','Enabled','room','primary_code','user','express','Portuguese\x20(BR)','string','$product_details.storage','399002ogxjiI','English','language','Hindi','$supplier_docs.mobile','name','note','return_qty','bin','secondary_code','../middleware/auth','$product_details.bin','getFullYear','product_code_hide','$return_product.price','../models/all_models','slice','$product_details.rack','2212580DYfHYe','suppliers','payment\x20successfull','6798848pQOTVM','product_stock','stocks','log','level','2157758IIdKpk','/receive_payment/:id','/invoice/:id','flash','$supplier_docs','save','$product_details.bay','amount','to_warehouse_name','German','stock_quantity','aggregate','210CxHvQs','$total_amount','return_purchase_edit','post','date','product_name','received','email','render','$return_product.product_name','$note','secondary_code_hide','$supplier_docs.email','map','French'];a0_0xd97b=function(){return _0x37d832;};return a0_0xd97b();}var a0_0x10b184=a0_0x53d9;(function(_0x298221,_0x5f51fd){var _0x27cd08=a0_0x53d9,_0x2d7e66=_0x298221();while(!![]){try{var _0x1820e9=parseInt(_0x27cd08(0x1a7))/0x1+parseInt(_0x27cd08(0x1c1))/0x2+-parseInt(_0x27cd08(0x1e4))/0x3*(-parseInt(_0x27cd08(0x1e1))/0x4)+parseInt(_0x27cd08(0x1b9))/0x5+-parseInt(_0x27cd08(0x1e9))/0x6*(parseInt(_0x27cd08(0x20b))/0x7)+parseInt(_0x27cd08(0x1bc))/0x8+-parseInt(_0x27cd08(0x1fb))/0x9*(parseInt(_0x27cd08(0x1cd))/0xa);if(_0x1820e9===_0x5f51fd)break;else _0x2d7e66['push'](_0x2d7e66['shift']());}catch(_0x13f35b){_0x2d7e66['push'](_0x2d7e66['shift']());}}}(a0_0xd97b,0x923dc));const express=require(a0_0x10b184(0x1a3)),app=express(),router=express[a0_0x10b184(0x205)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data}=require(a0_0x10b184(0x1b6)),auth=require(a0_0x10b184(0x1b1)),users=require('../public/language/languages.json');function a0_0x53d9(_0x211b71,_0x1ee45e){var _0xd97b95=a0_0xd97b();return a0_0x53d9=function(_0x53d995,_0x51a1f9){_0x53d995=_0x53d995-0x19d;var _0x3de219=_0xd97b95[_0x53d995];return _0x3de219;},a0_0x53d9(_0x211b71,_0x1ee45e);}router[a0_0x10b184(0x1fa)](a0_0x10b184(0x1ec),auth,async(_0x1671e2,_0x53ec2c)=>{var _0x51a93d=a0_0x10b184;try{const {username:_0x12d6d9,email:_0x22f61f,role:_0x1f634d}=_0x1671e2[_0x51a93d(0x1a2)],_0x56cf38=_0x1671e2[_0x51a93d(0x1a2)],_0x4a5e3e=await profile[_0x51a93d(0x19e)]({'email':_0x56cf38[_0x51a93d(0x1d4)]}),_0x3bce73=await master_shop[_0x51a93d(0x1e0)]();console[_0x51a93d(0x1bf)](_0x51a93d(0x217),_0x3bce73);const _0x3cfd8f=await purchases_return[_0x51a93d(0x1cc)]([{'$lookup':{'from':_0x51a93d(0x1ba),'localField':_0x51a93d(0x1ba),'foreignField':_0x51a93d(0x1ac),'as':_0x51a93d(0x211)}},{'$unwind':'$return_product'},{'$unwind':_0x51a93d(0x1c5)},{'$group':{'_id':'$_id','invoice':{'$first':_0x51a93d(0x1e3)},'date':{'$first':_0x51a93d(0x20e)},'suppliers':{'$first':'$suppliers'},'warehouse_name':{'$first':'$warehouse_name'},'product_name':{'$first':_0x51a93d(0x1d6)},'return_qty':{'$first':'$return_product.return_qty'},'price':{'$first':_0x51a93d(0x1b5)},'total':{'$sum':'$return_product.total'},'note':{'$first':_0x51a93d(0x1d7)},'total_amount':{'$first':_0x51a93d(0x1ce)},'discount':{'$first':'$discount'},'receivable':{'$first':'$receivable'},'received':{'$first':_0x51a93d(0x1e2)},'due_amount':{'$first':'$due_amount'},'mobile':{'$first':_0x51a93d(0x1ab)},'email':{'$first':_0x51a93d(0x1d9)},'address':{'$first':_0x51a93d(0x218)},'return_sum_qty':{'$sum':_0x51a93d(0x1f6)}}}]);console[_0x51a93d(0x1bf)](_0x3cfd8f);if(_0x3bce73[0x0][_0x51a93d(0x1a9)]==_0x51a93d(0x20d)){var _0x2f44db=users[_0x51a93d(0x1a8)];console[_0x51a93d(0x1bf)](_0x2f44db);}else{if(_0x3bce73[0x0][_0x51a93d(0x1a9)]==_0x51a93d(0x1aa))var _0x2f44db=users[_0x51a93d(0x1aa)];else{if(_0x3bce73[0x0][_0x51a93d(0x1a9)]==_0x51a93d(0x1ca))var _0x2f44db=users['German'];else{if(_0x3bce73[0x0]['language']==_0x51a93d(0x214))var _0x2f44db=users['Spanish'];else{if(_0x3bce73[0x0][_0x51a93d(0x1a9)]==_0x51a93d(0x1db))var _0x2f44db=users['French'];else{if(_0x3bce73[0x0][_0x51a93d(0x1a9)]==_0x51a93d(0x1a4))var _0x2f44db=users[_0x51a93d(0x1f3)];else{if(_0x3bce73[0x0][_0x51a93d(0x1a9)]==_0x51a93d(0x208))var _0x2f44db=users[_0x51a93d(0x208)];else{if(_0x3bce73[0x0]['language']==_0x51a93d(0x1f5))var _0x2f44db=users[_0x51a93d(0x216)];}}}}}}}_0x53ec2c[_0x51a93d(0x1d5)]('purchases_return',{'success':_0x1671e2[_0x51a93d(0x1c4)](_0x51a93d(0x212)),'errors':_0x1671e2[_0x51a93d(0x1c4)](_0x51a93d(0x1eb)),'role':_0x56cf38,'profile':_0x4a5e3e,'master_shop':_0x3bce73,'user':_0x3cfd8f,'language':_0x2f44db});}catch(_0x537249){console['log'](_0x537249);}}),router[a0_0x10b184(0x1fa)](a0_0x10b184(0x204),auth,async(_0xd64685,_0x1221da)=>{var _0x641ec1=a0_0x10b184;try{const {username:_0x4e8d0c,email:_0xfecd2c,role:_0x2c9f25}=_0xd64685[_0x641ec1(0x1a2)],_0xc352c=_0xd64685[_0x641ec1(0x1a2)],_0x35ca35=await profile['findOne']({'email':_0xc352c[_0x641ec1(0x1d4)]}),_0x4d52fa=await product[_0x641ec1(0x1e0)]({}),_0x3ae276=await master_shop[_0x641ec1(0x1e0)]();console[_0x641ec1(0x1bf)]('master',_0x3ae276),console['log'](_0xd64685[_0x641ec1(0x213)]);const _0x456c2a=_0xd64685[_0x641ec1(0x206)]['id'],_0x52757e=await purchases_return[_0x641ec1(0x1ef)](_0x456c2a);console[_0x641ec1(0x1bf)](_0x52757e);const _0xb8b156=await warehouse[_0x641ec1(0x1cc)]([{'$match':{'name':_0x52757e[_0x641ec1(0x209)],'room':_0x52757e[_0x641ec1(0x1a0)]}},{'$unwind':'$product_details'},{'$group':{'_id':'$product_details._id','name':{'$first':_0x641ec1(0x1e6)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x641ec1(0x1c7)},'bin':{'$first':_0x641ec1(0x1b2)},'type':{'$first':_0x641ec1(0x1de)},'floorlevel':{'$first':'$product_details.floorlevel'},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':_0x641ec1(0x1fd)},'storage':{'$first':_0x641ec1(0x1a6)},'rack':{'$first':_0x641ec1(0x1b8)}}}]);warehouse_data=await warehouse[_0x641ec1(0x1cc)]([{'$match':{'status':_0x641ec1(0x19f),'name':'Return\x20Goods','warehouse_category':_0x641ec1(0x1fe)}},{'$group':{'_id':_0x641ec1(0x1f0),'name':{'$first':_0x641ec1(0x1f0)}}},{'$sort':{'name':0x1}}]),console[_0x641ec1(0x1bf)](_0x641ec1(0x215),_0xb8b156);if(_0x3ae276[0x0][_0x641ec1(0x1a9)]==_0x641ec1(0x20d)){var _0x2929c6=users['English'];console[_0x641ec1(0x1bf)](_0x2929c6);}else{if(_0x3ae276[0x0][_0x641ec1(0x1a9)]==_0x641ec1(0x1aa))var _0x2929c6=users[_0x641ec1(0x1aa)];else{if(_0x3ae276[0x0][_0x641ec1(0x1a9)]=='German')var _0x2929c6=users['German'];else{if(_0x3ae276[0x0][_0x641ec1(0x1a9)]=='Spanish')var _0x2929c6=users[_0x641ec1(0x214)];else{if(_0x3ae276[0x0]['language']==_0x641ec1(0x1db))var _0x2929c6=users[_0x641ec1(0x1db)];else{if(_0x3ae276[0x0][_0x641ec1(0x1a9)]==_0x641ec1(0x1a4))var _0x2929c6=users[_0x641ec1(0x1f3)];else{if(_0x3ae276[0x0][_0x641ec1(0x1a9)]==_0x641ec1(0x208))var _0x2929c6=users[_0x641ec1(0x208)];else{if(_0x3ae276[0x0][_0x641ec1(0x1a9)]==_0x641ec1(0x1f5))var _0x2929c6=users['Arabic'];}}}}}}}_0x1221da[_0x641ec1(0x1d5)](_0x641ec1(0x1cf),{'success':_0xd64685[_0x641ec1(0x1c4)](_0x641ec1(0x212)),'errors':_0xd64685['flash'](_0x641ec1(0x1eb)),'role':_0xc352c,'master_shop':_0x3ae276,'profile':_0x35ca35,'user':_0x52757e,'stock':_0xb8b156,'product':_0x4d52fa,'language':_0x2929c6,'warehouse':warehouse_data});}catch(_0x3dd18c){console['log'](_0x3dd18c);}}),router['post'](a0_0x10b184(0x204),auth,async(_0x4104b4,_0x40a062)=>{var _0x264e91=a0_0x10b184;try{const _0x12c12b=_0x4104b4['params']['id'];console[_0x264e91(0x1bf)](_0x12c12b);const _0x5f39b9=await purchases_return[_0x264e91(0x19e)]({'invoice':_0x4104b4['body'][_0x264e91(0x1e5)]});console['log'](_0x264e91(0x20c),_0x5f39b9);const _0x87d720=await warehouse[_0x264e91(0x19e)]({'name':_0x5f39b9[_0x264e91(0x1c9)],'room':_0x5f39b9[_0x264e91(0x1ff)]});console[_0x264e91(0x1bf)]('old_warehouse_data',_0x87d720);const {invoice:_0x3b9c6b,suppliers:_0x47ebbe,date:_0x730f17,warehouse_name:_0x57bf88,product_name:_0x58ca71,purchase_quantity:_0x4dfacb,stocks:_0x426f85,return_qty:_0x2fd9d9,note:_0x388f8c,Room_name:_0x3f16cb,level:_0x10cf83,isle:_0x3731a1,pallet:_0x1bedfa,to_warehouse_name:_0x1d19b4,to_Room_name:_0x5d60f8}=_0x4104b4['body'];if(typeof _0x58ca71==_0x264e91(0x1a5))var _0x70a204=[_0x4104b4[_0x264e91(0x213)][_0x264e91(0x1d2)]],_0x319a68=[_0x4104b4[_0x264e91(0x213)][_0x264e91(0x1ea)]],_0x317a7e=[_0x4104b4[_0x264e91(0x213)][_0x264e91(0x1be)]],_0x2f68e9=[_0x4104b4['body'][_0x264e91(0x1ae)]],_0xaa8a9c=[_0x4104b4[_0x264e91(0x213)][_0x264e91(0x1c0)]],_0x532bc0=[_0x4104b4['body'][_0x264e91(0x1f7)]],_0x143fc8=[_0x4104b4['body'][_0x264e91(0x1ee)]],_0x1810b1=[_0x4104b4[_0x264e91(0x213)][_0x264e91(0x210)]],_0x58aefd=[_0x4104b4[_0x264e91(0x213)][_0x264e91(0x1b4)]],_0x2fda1f=[_0x4104b4[_0x264e91(0x213)][_0x264e91(0x20a)]],_0x47a61b=[_0x4104b4[_0x264e91(0x213)]['secondary_code_hide']];else var _0x70a204=[..._0x4104b4[_0x264e91(0x213)]['product_name']],_0x319a68=[..._0x4104b4[_0x264e91(0x213)][_0x264e91(0x1ea)]],_0x317a7e=[..._0x4104b4[_0x264e91(0x213)][_0x264e91(0x1be)]],_0x2f68e9=[..._0x4104b4[_0x264e91(0x213)][_0x264e91(0x1ae)]],_0xaa8a9c=[..._0x4104b4['body'][_0x264e91(0x1c0)]],_0x532bc0=[..._0x4104b4[_0x264e91(0x213)][_0x264e91(0x1f7)]],_0x143fc8=[..._0x4104b4['body'][_0x264e91(0x1ee)]],_0x58aefd=[..._0x4104b4[_0x264e91(0x213)][_0x264e91(0x1b4)]],_0x2fda1f=[..._0x4104b4[_0x264e91(0x213)]['primary_code_hide']],_0x47a61b=[..._0x4104b4[_0x264e91(0x213)][_0x264e91(0x1d8)]],_0x1810b1=[..._0x4104b4[_0x264e91(0x213)][_0x264e91(0x210)]];const _0x42801d=_0x70a204[_0x264e91(0x1da)](_0x59c1ef=>{return _0x59c1ef={'product_name':_0x59c1ef};});_0x319a68[_0x264e91(0x202)]((_0x1dbeab,_0x26a743)=>{var _0x417d4c=_0x264e91;_0x42801d[_0x26a743][_0x417d4c(0x1ea)]=_0x1dbeab;}),_0x317a7e[_0x264e91(0x202)]((_0x2e4c8b,_0x2ca569)=>{var _0x3d72d8=_0x264e91;_0x42801d[_0x2ca569][_0x3d72d8(0x1cb)]=_0x2e4c8b;}),_0x2f68e9['forEach']((_0x4e3dc2,_0x5db96f)=>{var _0x54a5cd=_0x264e91;_0x42801d[_0x5db96f][_0x54a5cd(0x1ae)]=_0x4e3dc2;}),_0xaa8a9c[_0x264e91(0x202)]((_0x1922ac,_0x31d238)=>{_0x42801d[_0x31d238]['bay']=_0x1922ac;}),_0x532bc0[_0x264e91(0x202)]((_0xa6af6f,_0x34a860)=>{_0x42801d[_0x34a860]['bin']=_0xa6af6f;}),_0x143fc8[_0x264e91(0x202)]((_0x34df58,_0x4a30ce)=>{var _0xaa12a7=_0x264e91;_0x42801d[_0x4a30ce][_0xaa12a7(0x1f2)]=_0x34df58;}),_0x58aefd['forEach']((_0x409447,_0x18d504)=>{var _0x29f9dc=_0x264e91;_0x42801d[_0x18d504][_0x29f9dc(0x1df)]=_0x409447;}),_0x2fda1f[_0x264e91(0x202)]((_0x4c2183,_0x63ee3b)=>{var _0x6ce54c=_0x264e91;_0x42801d[_0x63ee3b][_0x6ce54c(0x1a1)]=_0x4c2183;}),_0x47a61b[_0x264e91(0x202)]((_0x21bc91,_0x3725ef)=>{var _0x21dd2c=_0x264e91;_0x42801d[_0x3725ef][_0x21dd2c(0x1b0)]=_0x21bc91;}),_0x1810b1[_0x264e91(0x202)]((_0x57f234,_0x6d8799)=>{var _0x21ff2f=_0x264e91;_0x42801d[_0x6d8799][_0x21ff2f(0x1e7)]=_0x57f234;});var _0x10dc27=0x0;_0x42801d[_0x264e91(0x202)](_0x4ca02a=>{var _0x53ca6f=_0x264e91;console[_0x53ca6f(0x1bf)](_0x53ca6f(0x207),_0x4ca02a),(parseInt(_0x4ca02a[_0x53ca6f(0x1ea)])<parseInt(_0x4ca02a['return_qty'])||parseInt(_0x4ca02a[_0x53ca6f(0x1cb)])<parseInt(_0x4ca02a[_0x53ca6f(0x1ae)])||parseInt(_0x4ca02a['return_qty'])==0x0)&&_0x10dc27++;});if(_0x10dc27!=0x0)return _0x4104b4[_0x264e91(0x1c4)](_0x264e91(0x1eb),'Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty'),_0x40a062['redirect']('back');_0x5f39b9['return_product'][_0x264e91(0x202)](_0x173dbb=>{var _0x563973=_0x264e91;const _0x149764=_0x87d720[_0x563973(0x1f9)]['map'](_0x546c61=>{var _0x22d466=_0x563973;_0x546c61['product_name']==_0x173dbb['product_name']&&_0x546c61[_0x22d466(0x1f2)]==_0x173dbb[_0x22d466(0x1f2)]&&_0x546c61[_0x22d466(0x1e7)]==_0x173dbb[_0x22d466(0x1e7)]&&_0x546c61[_0x22d466(0x1af)]==_0x173dbb['bin']&&_0x546c61[_0x22d466(0x203)]==_0x173dbb[_0x22d466(0x203)]&&(_0x546c61['product_stock']=parseInt(_0x546c61['product_stock'])+parseInt(_0x173dbb['return_qty']));});}),console['log']('old_warehouse_data',_0x87d720),await _0x87d720['save'](),_0x5f39b9[_0x264e91(0x1e5)]=_0x3b9c6b,_0x5f39b9[_0x264e91(0x1ba)]=_0x47ebbe,_0x5f39b9[_0x264e91(0x1d1)]=_0x730f17,_0x5f39b9[_0x264e91(0x209)]=_0x57bf88,_0x5f39b9[_0x264e91(0x1ed)]=_0x42801d,_0x5f39b9[_0x264e91(0x1ad)]=_0x388f8c,_0x5f39b9[_0x264e91(0x1a0)]=_0x3f16cb,_0x5f39b9[_0x264e91(0x1c9)]=_0x1d19b4,_0x5f39b9[_0x264e91(0x1ff)]=_0x5d60f8;const _0x3de11a=await _0x5f39b9[_0x264e91(0x1c6)](),_0x4c74fe=await purchases_return[_0x264e91(0x19e)]({'invoice':_0x4104b4[_0x264e91(0x213)][_0x264e91(0x1e5)]}),_0x2caa8e=await warehouse[_0x264e91(0x19e)]({'name':_0x4104b4[_0x264e91(0x213)][_0x264e91(0x1c9)],'room':_0x4104b4[_0x264e91(0x213)][_0x264e91(0x1f4)]});_0x4c74fe[_0x264e91(0x1ed)][_0x264e91(0x202)](_0x3ccfc6=>{var _0x1e3707=_0x264e91;_0x2caa8e[_0x1e3707(0x1f9)][_0x1e3707(0x1da)](_0xb1f38c=>{var _0x6dabf8=_0x1e3707;_0xb1f38c[_0x6dabf8(0x1d2)]==_0x3ccfc6[_0x6dabf8(0x1d2)]&&_0xb1f38c[_0x6dabf8(0x1ee)]==_0x3ccfc6[_0x6dabf8(0x1ee)]&&(_0xb1f38c[_0x6dabf8(0x1bd)]=parseInt(_0xb1f38c[_0x6dabf8(0x1bd)])-parseInt(_0x3ccfc6['return_qty']),console[_0x6dabf8(0x1bf)](_0x6dabf8(0x201),_0x3ccfc6[_0x6dabf8(0x1ae)]));});}),console[_0x264e91(0x1bf)]('final',_0x2caa8e),await _0x2caa8e[_0x264e91(0x1c6)]();const _0x4a4833=await s_payment_data[_0x264e91(0x19e)]({'invoice':_0x4104b4[_0x264e91(0x213)]['invoice'],'reason':_0x264e91(0x20f)});await _0x4a4833[_0x264e91(0x1c6)](),_0x4104b4[_0x264e91(0x1c4)](_0x264e91(0x212),'purchase\x20return\x20successfully'),_0x40a062[_0x264e91(0x200)]('/purchases_return/view');}catch(_0x3f5335){console[_0x264e91(0x1bf)](_0x3f5335),_0x40a062[_0x264e91(0x1dd)](0xc8)[_0x264e91(0x1e8)]({'message':_0x3f5335['message']});}}),router[a0_0x10b184(0x1fa)](a0_0x10b184(0x1c3),auth,async(_0x49e951,_0x435c31)=>{var _0x52d025=a0_0x10b184;try{const {username:_0x53c100,email:_0x2bbb36,role:_0x183bd7}=_0x49e951['user'],_0x263f50=_0x49e951['user'],_0x347829=await profile['findOne']({'email':_0x263f50[_0x52d025(0x1d4)]}),_0x1f3a1f=await master_shop[_0x52d025(0x1e0)]();console[_0x52d025(0x1bf)](_0x52d025(0x217),_0x1f3a1f);const _0x766612=_0x49e951['params']['id'],_0x2afdbd=await purchases_return[_0x52d025(0x1ef)](_0x766612);console[_0x52d025(0x1bf)](_0x2afdbd);const _0x442f71=await suppliers[_0x52d025(0x19e)]({'name':_0x2afdbd[_0x52d025(0x1ba)]});console[_0x52d025(0x1bf)](_0x442f71);if(_0x1f3a1f[0x0][_0x52d025(0x1a9)]==_0x52d025(0x20d)){var _0x474418=users[_0x52d025(0x1a8)];console[_0x52d025(0x1bf)](_0x474418);}else{if(_0x1f3a1f[0x0][_0x52d025(0x1a9)]=='Hindi')var _0x474418=users[_0x52d025(0x1aa)];else{if(_0x1f3a1f[0x0][_0x52d025(0x1a9)]=='German')var _0x474418=users[_0x52d025(0x1ca)];else{if(_0x1f3a1f[0x0][_0x52d025(0x1a9)]==_0x52d025(0x214))var _0x474418=users[_0x52d025(0x214)];else{if(_0x1f3a1f[0x0][_0x52d025(0x1a9)]==_0x52d025(0x1db))var _0x474418=users[_0x52d025(0x1db)];else{if(_0x1f3a1f[0x0]['language']==_0x52d025(0x1a4))var _0x474418=users[_0x52d025(0x1f3)];else{if(_0x1f3a1f[0x0][_0x52d025(0x1a9)]==_0x52d025(0x208))var _0x474418=users[_0x52d025(0x208)];else{if(_0x1f3a1f[0x0][_0x52d025(0x1a9)]=='Arabic\x20(ae)')var _0x474418=users[_0x52d025(0x216)];}}}}}}}_0x435c31[_0x52d025(0x1d5)](_0x52d025(0x1fc),{'success':_0x49e951['flash']('success'),'errors':_0x49e951[_0x52d025(0x1c4)](_0x52d025(0x1eb)),'role':_0x263f50,'profile':_0x347829,'master_shop':_0x1f3a1f,'supplier':_0x442f71,'purchase':_0x2afdbd,'language':_0x474418});}catch(_0x1a7f00){console[_0x52d025(0x1bf)](_0x1a7f00);}}),router[a0_0x10b184(0x1d0)](a0_0x10b184(0x1c2),auth,async(_0x141275,_0x4721a1)=>{var _0xe5577f=a0_0x10b184;try{const _0x11305d=_0x141275[_0xe5577f(0x206)]['id'],{invoice:_0x269f29,suppliers:_0x30b4f1,receivable_amount:_0x2dcaed,received_amount:_0x15dc1d}=_0x141275[_0xe5577f(0x213)],_0x4c780a=await purchases_return[_0xe5577f(0x1ef)](_0x11305d);console[_0xe5577f(0x1bf)](_0x4c780a);var _0x1b5ff0=_0x2dcaed-_0x15dc1d;console[_0xe5577f(0x1bf)](_0x15dc1d),_0x4c780a['received']=parseFloat(_0x15dc1d)+parseFloat(_0x4c780a[_0xe5577f(0x1d3)]),_0x4c780a[_0xe5577f(0x1f1)]=_0x1b5ff0,console[_0xe5577f(0x1bf)](_0x4c780a);const _0x3387c4=await _0x4c780a['save'](),_0x642fb8=await s_payment_data[_0xe5577f(0x19e)]({'invoice':_0x141275['body']['invoice'],'reason':'Purchase\x20Return'});_0x642fb8[_0xe5577f(0x1c8)]=_0x1b5ff0,await _0x642fb8[_0xe5577f(0x1c6)]();let _0x5e06a6=new Date(),_0xf6601f=('0'+_0x5e06a6['getDate']())[_0xe5577f(0x1b7)](-0x2),_0x1410a0=('0'+(_0x5e06a6[_0xe5577f(0x1dc)]()+0x1))[_0xe5577f(0x1b7)](-0x2),_0x262e9f=_0x5e06a6[_0xe5577f(0x1b3)](),_0xa94492=_0x262e9f+'-'+_0x1410a0+'-'+_0xf6601f;const _0x63805c=new suppliers_payment({'invoice':_0x269f29,'date':_0x262e9f+'-'+_0x1410a0+'-'+_0xf6601f,'suppliers':_0x30b4f1,'reason':_0xe5577f(0x19d),'amount':_0x15dc1d}),_0x27c326=await _0x63805c[_0xe5577f(0x1c6)]();_0x141275['flash']('success',_0xe5577f(0x1bb)),_0x4721a1[_0xe5577f(0x200)](_0xe5577f(0x1f8));}catch(_0x4658a0){console[_0xe5577f(0x1bf)](_0x4658a0);}}),module['exports']=router;