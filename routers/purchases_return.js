function a0_0x3314(){var _0x5ab48a=['bay','payment\x20successfull','message','status','purchase\x20return\x20successfully','product_code','Enabled','$date','primary_code_hide','$return_product.product_name','redirect','secondary_code_hide','Portuguese','Arabic\x20(ae)','$supplier_docs.email','$product_details.type','save','$invoice','../public/language/languages.json','322980MdIfLu','isle','suppliers','$name','German','due_amount','language','Chinese','$supplier_docs','Arabic','$product_details.bin','findOne','note','invoice','to_Room_name','map','/receive_payment/:id','1768lCTNWm','return_qty','find','English\x20(US)','$note','$product_details.product_stock','product_stock','express','pallet','Hindi','to_room','product_code_hide','user','json','French','stock_quantity','final','flash','/view/:id','346142IMClqE','purchases_return','back','Raw\x20Materials','log','string','foreach\x20newproduct','Spanish','$product_details.storage','aggregate','room','slice','$return_product.price','supplier_docs','get','stocks','bin','product_name','Purchase\x20Return','Return\x20Goods','primary_code','Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty','warehouse_name','$return_product','English','$product_details.bay','product_details','type','to_warehouse_name','10227pnYpcU','errors','$product_details','floorlevel','$received','purchase_quantity','return_purchase_invoice','/invoice/:id','$supplier_docs.mobile','params','$total_amount','exports','2769498sDsRCy','findById','success','post','forEach','../middleware/auth','master','/purchases_return/view','8tlmXSu','$product_details._id','$supplier_docs.address','body','Portuguese\x20(BR)','156594QFmzLm','2319030mBBfPX','email','$product_details.product_code','getDate','level','17412939KKVipI','types','render'];a0_0x3314=function(){return _0x5ab48a;};return a0_0x3314();}function a0_0xdc1b(_0x38cb8e,_0x2358c9){var _0x331425=a0_0x3314();return a0_0xdc1b=function(_0xdc1b10,_0x31dae0){_0xdc1b10=_0xdc1b10-0x1bf;var _0x594334=_0x331425[_0xdc1b10];return _0x594334;},a0_0xdc1b(_0x38cb8e,_0x2358c9);}var a0_0x34285b=a0_0xdc1b;(function(_0x36a87d,_0x235754){var _0x5b013a=a0_0xdc1b,_0x57c9b2=_0x36a87d();while(!![]){try{var _0x570169=-parseInt(_0x5b013a(0x211))/0x1+parseInt(_0x5b013a(0x1db))/0x2+-parseInt(_0x5b013a(0x204))/0x3+-parseInt(_0x5b013a(0x20c))/0x4*(parseInt(_0x5b013a(0x212))/0x5)+parseInt(_0x5b013a(0x22d))/0x6+-parseInt(_0x5b013a(0x1f8))/0x7*(-parseInt(_0x5b013a(0x1c8))/0x8)+parseInt(_0x5b013a(0x217))/0x9;if(_0x570169===_0x235754)break;else _0x57c9b2['push'](_0x57c9b2['shift']());}catch(_0x284f50){_0x57c9b2['push'](_0x57c9b2['shift']());}}}(a0_0x3314,0x747fd));const express=require(a0_0x34285b(0x1cf)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data}=require('../models/all_models'),auth=require(a0_0x34285b(0x209)),users=require(a0_0x34285b(0x22c));router[a0_0x34285b(0x1e9)]('/view',auth,async(_0x290880,_0x870aff)=>{var _0x45f604=a0_0x34285b;try{const {username:_0x3b35ad,email:_0x9f6b4a,role:_0x19074f}=_0x290880[_0x45f604(0x1d4)],_0x14b7a8=_0x290880[_0x45f604(0x1d4)],_0x44b986=await profile[_0x45f604(0x1c2)]({'email':_0x14b7a8[_0x45f604(0x213)]}),_0x4fbb5c=await master_shop[_0x45f604(0x1ca)]();console['log'](_0x45f604(0x20a),_0x4fbb5c);const _0x65c2ed=await purchases_return[_0x45f604(0x1e4)]([{'$lookup':{'from':_0x45f604(0x22f),'localField':_0x45f604(0x22f),'foreignField':'name','as':_0x45f604(0x1e8)}},{'$unwind':_0x45f604(0x1f2)},{'$unwind':_0x45f604(0x1bf)},{'$group':{'_id':'$_id','invoice':{'$first':_0x45f604(0x22b)},'date':{'$first':_0x45f604(0x221)},'suppliers':{'$first':'$suppliers'},'warehouse_name':{'$first':'$warehouse_name'},'product_name':{'$first':_0x45f604(0x223)},'return_qty':{'$first':'$return_product.return_qty'},'price':{'$first':_0x45f604(0x1e7)},'total':{'$sum':'$return_product.total'},'note':{'$first':_0x45f604(0x1cc)},'total_amount':{'$first':_0x45f604(0x202)},'discount':{'$first':'$discount'},'receivable':{'$first':'$receivable'},'received':{'$first':_0x45f604(0x1fc)},'due_amount':{'$first':'$due_amount'},'mobile':{'$first':_0x45f604(0x200)},'email':{'$first':_0x45f604(0x228)},'address':{'$first':_0x45f604(0x20e)},'return_sum_qty':{'$sum':'$return_product.return_qty'}}}]);console[_0x45f604(0x1df)](_0x65c2ed);if(_0x4fbb5c[0x0][_0x45f604(0x233)]==_0x45f604(0x1cb)){var _0x3eedf9=users[_0x45f604(0x1f3)];console[_0x45f604(0x1df)](_0x3eedf9);}else{if(_0x4fbb5c[0x0]['language']==_0x45f604(0x1d1))var _0x3eedf9=users['Hindi'];else{if(_0x4fbb5c[0x0][_0x45f604(0x233)]==_0x45f604(0x231))var _0x3eedf9=users[_0x45f604(0x231)];else{if(_0x4fbb5c[0x0][_0x45f604(0x233)]==_0x45f604(0x1e2))var _0x3eedf9=users[_0x45f604(0x1e2)];else{if(_0x4fbb5c[0x0][_0x45f604(0x233)]==_0x45f604(0x1d6))var _0x3eedf9=users[_0x45f604(0x1d6)];else{if(_0x4fbb5c[0x0]['language']==_0x45f604(0x210))var _0x3eedf9=users[_0x45f604(0x226)];else{if(_0x4fbb5c[0x0]['language']==_0x45f604(0x234))var _0x3eedf9=users[_0x45f604(0x234)];else{if(_0x4fbb5c[0x0][_0x45f604(0x233)]==_0x45f604(0x227))var _0x3eedf9=users[_0x45f604(0x1c0)];}}}}}}}_0x870aff['render'](_0x45f604(0x1dc),{'success':_0x290880[_0x45f604(0x1d9)](_0x45f604(0x206)),'errors':_0x290880[_0x45f604(0x1d9)](_0x45f604(0x1f9)),'role':_0x14b7a8,'profile':_0x44b986,'master_shop':_0x4fbb5c,'user':_0x65c2ed,'language':_0x3eedf9});}catch(_0xa901a8){console[_0x45f604(0x1df)](_0xa901a8);}}),router[a0_0x34285b(0x1e9)](a0_0x34285b(0x1da),auth,async(_0x35fd9f,_0x2c4e5d)=>{var _0x49caf0=a0_0x34285b;try{const {username:_0x403392,email:_0x2e8e50,role:_0x4c6a7a}=_0x35fd9f['user'],_0x358b17=_0x35fd9f['user'],_0x591949=await profile[_0x49caf0(0x1c2)]({'email':_0x358b17[_0x49caf0(0x213)]}),_0x2b93e3=await product[_0x49caf0(0x1ca)]({}),_0x23c2b9=await master_shop[_0x49caf0(0x1ca)]();console[_0x49caf0(0x1df)](_0x49caf0(0x20a),_0x23c2b9),console['log'](_0x35fd9f[_0x49caf0(0x20f)]);const _0x429aa8=_0x35fd9f[_0x49caf0(0x201)]['id'],_0x1a9e41=await purchases_return[_0x49caf0(0x205)](_0x429aa8);console[_0x49caf0(0x1df)](_0x1a9e41);const _0x15c963=await warehouse[_0x49caf0(0x1e4)]([{'$match':{'name':_0x1a9e41[_0x49caf0(0x1f1)],'room':_0x1a9e41[_0x49caf0(0x1e5)]}},{'$unwind':_0x49caf0(0x1fa)},{'$group':{'_id':_0x49caf0(0x20d),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':_0x49caf0(0x1cd)},'bay':{'$first':_0x49caf0(0x1f4)},'bin':{'$first':_0x49caf0(0x1c1)},'type':{'$first':_0x49caf0(0x229)},'floorlevel':{'$first':'$product_details.floorlevel'},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':_0x49caf0(0x214)},'storage':{'$first':_0x49caf0(0x1e3)},'rack':{'$first':'$product_details.rack'}}}]);warehouse_data=await warehouse[_0x49caf0(0x1e4)]([{'$match':{'status':_0x49caf0(0x220),'name':_0x49caf0(0x1ee),'warehouse_category':_0x49caf0(0x1de)}},{'$group':{'_id':_0x49caf0(0x230),'name':{'$first':_0x49caf0(0x230)}}},{'$sort':{'name':0x1}}]),console['log']('stock_data',_0x15c963);if(_0x23c2b9[0x0][_0x49caf0(0x233)]=='English\x20(US)'){var _0x17463e=users[_0x49caf0(0x1f3)];console['log'](_0x17463e);}else{if(_0x23c2b9[0x0][_0x49caf0(0x233)]==_0x49caf0(0x1d1))var _0x17463e=users[_0x49caf0(0x1d1)];else{if(_0x23c2b9[0x0][_0x49caf0(0x233)]==_0x49caf0(0x231))var _0x17463e=users['German'];else{if(_0x23c2b9[0x0]['language']=='Spanish')var _0x17463e=users['Spanish'];else{if(_0x23c2b9[0x0][_0x49caf0(0x233)]==_0x49caf0(0x1d6))var _0x17463e=users['French'];else{if(_0x23c2b9[0x0][_0x49caf0(0x233)]==_0x49caf0(0x210))var _0x17463e=users['Portuguese'];else{if(_0x23c2b9[0x0][_0x49caf0(0x233)]==_0x49caf0(0x234))var _0x17463e=users[_0x49caf0(0x234)];else{if(_0x23c2b9[0x0][_0x49caf0(0x233)]=='Arabic\x20(ae)')var _0x17463e=users['Arabic'];}}}}}}}_0x2c4e5d[_0x49caf0(0x219)]('return_purchase_edit',{'success':_0x35fd9f[_0x49caf0(0x1d9)](_0x49caf0(0x206)),'errors':_0x35fd9f[_0x49caf0(0x1d9)](_0x49caf0(0x1f9)),'role':_0x358b17,'master_shop':_0x23c2b9,'profile':_0x591949,'user':_0x1a9e41,'stock':_0x15c963,'product':_0x2b93e3,'language':_0x17463e,'warehouse':warehouse_data});}catch(_0x354867){console[_0x49caf0(0x1df)](_0x354867);}}),router[a0_0x34285b(0x207)](a0_0x34285b(0x1da),auth,async(_0x543519,_0x13f009)=>{var _0x14c6f7=a0_0x34285b;try{const _0xa83a22=_0x543519['params']['id'];console[_0x14c6f7(0x1df)](_0xa83a22);const _0x1cd787=await purchases_return['findOne']({'invoice':_0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x1c4)]});console[_0x14c6f7(0x1df)]('old_data',_0x1cd787);const _0x3cdd3c=await warehouse[_0x14c6f7(0x1c2)]({'name':_0x1cd787[_0x14c6f7(0x1f7)],'room':_0x1cd787[_0x14c6f7(0x1d2)]});console[_0x14c6f7(0x1df)]('old_warehouse_data',_0x3cdd3c);const {invoice:_0x54946e,suppliers:_0x254225,date:_0x1fb465,warehouse_name:_0x160b21,product_name:_0x4efece,purchase_quantity:_0x4e3796,stocks:_0x347f29,return_qty:_0x343183,note:_0x56cdf6,Room_name:_0x1576c7,level:_0x43236f,isle:_0x47ec5b,pallet:_0x208147,to_warehouse_name:_0x1030eb,to_Room_name:_0x5500d2}=_0x543519[_0x14c6f7(0x20f)];if(typeof _0x4efece==_0x14c6f7(0x1e0))var _0xa2f5f9=[_0x543519['body'][_0x14c6f7(0x1ec)]],_0x4d1c89=[_0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x1fd)]],_0x3e84b5=[_0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x1ea)]],_0x5e2cb5=[_0x543519[_0x14c6f7(0x20f)]['return_qty']],_0x49e52f=[_0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x216)]],_0x4e8b3b=[_0x543519['body'][_0x14c6f7(0x22e)]],_0x221943=[_0x543519[_0x14c6f7(0x20f)]['pallet']],_0x358e9a=[_0x543519[_0x14c6f7(0x20f)]['types']],_0x14b118=[_0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x1d3)]],_0x50e377=[_0x543519['body'][_0x14c6f7(0x222)]],_0x4b1ae9=[_0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x225)]];else var _0xa2f5f9=[..._0x543519[_0x14c6f7(0x20f)]['product_name']],_0x4d1c89=[..._0x543519[_0x14c6f7(0x20f)]['purchase_quantity']],_0x3e84b5=[..._0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x1ea)]],_0x5e2cb5=[..._0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x1c9)]],_0x49e52f=[..._0x543519[_0x14c6f7(0x20f)]['level']],_0x4e8b3b=[..._0x543519['body'][_0x14c6f7(0x22e)]],_0x221943=[..._0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x1d0)]],_0x14b118=[..._0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x1d3)]],_0x50e377=[..._0x543519[_0x14c6f7(0x20f)]['primary_code_hide']],_0x4b1ae9=[..._0x543519['body'][_0x14c6f7(0x225)]],_0x358e9a=[..._0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x218)]];const _0x1bee75=_0xa2f5f9[_0x14c6f7(0x1c6)](_0xade0e=>{return _0xade0e={'product_name':_0xade0e};});_0x4d1c89[_0x14c6f7(0x208)]((_0x42c567,_0x35636d)=>{_0x1bee75[_0x35636d]['purchase_quantity']=_0x42c567;}),_0x3e84b5[_0x14c6f7(0x208)]((_0x35434c,_0x4ac6a5)=>{var _0x3559e4=_0x14c6f7;_0x1bee75[_0x4ac6a5][_0x3559e4(0x1d7)]=_0x35434c;}),_0x5e2cb5[_0x14c6f7(0x208)]((_0x22938b,_0x414359)=>{_0x1bee75[_0x414359]['return_qty']=_0x22938b;}),_0x49e52f[_0x14c6f7(0x208)]((_0x4294ec,_0x135084)=>{var _0x569fc7=_0x14c6f7;_0x1bee75[_0x135084][_0x569fc7(0x21a)]=_0x4294ec;}),_0x4e8b3b[_0x14c6f7(0x208)]((_0xe70a84,_0x4949a5)=>{var _0x326e5d=_0x14c6f7;_0x1bee75[_0x4949a5][_0x326e5d(0x1eb)]=_0xe70a84;}),_0x221943[_0x14c6f7(0x208)]((_0x186504,_0x295a30)=>{var _0x104885=_0x14c6f7;_0x1bee75[_0x295a30][_0x104885(0x1fb)]=_0x186504;}),_0x14b118[_0x14c6f7(0x208)]((_0x5ea972,_0x5188ac)=>{var _0x1b7d66=_0x14c6f7;_0x1bee75[_0x5188ac][_0x1b7d66(0x21f)]=_0x5ea972;}),_0x50e377[_0x14c6f7(0x208)]((_0x177f5b,_0x2ab20d)=>{var _0x3de567=_0x14c6f7;_0x1bee75[_0x2ab20d][_0x3de567(0x1ef)]=_0x177f5b;}),_0x4b1ae9[_0x14c6f7(0x208)]((_0x5ac18b,_0x1d6c64)=>{_0x1bee75[_0x1d6c64]['secondary_code']=_0x5ac18b;}),_0x358e9a[_0x14c6f7(0x208)]((_0x4daf0c,_0x18c878)=>{var _0x4cf64c=_0x14c6f7;_0x1bee75[_0x18c878][_0x4cf64c(0x1f6)]=_0x4daf0c;});var _0x49ac6c=0x0;_0x1bee75[_0x14c6f7(0x208)](_0xb96907=>{var _0x5f1b30=_0x14c6f7;console[_0x5f1b30(0x1df)](_0x5f1b30(0x1e1),_0xb96907),(parseInt(_0xb96907['purchase_quantity'])<parseInt(_0xb96907[_0x5f1b30(0x1c9)])||parseInt(_0xb96907[_0x5f1b30(0x1d7)])<parseInt(_0xb96907[_0x5f1b30(0x1c9)])||parseInt(_0xb96907['return_qty'])==0x0)&&_0x49ac6c++;});if(_0x49ac6c!=0x0)return _0x543519[_0x14c6f7(0x1d9)](_0x14c6f7(0x1f9),_0x14c6f7(0x1f0)),_0x13f009['redirect'](_0x14c6f7(0x1dd));_0x1cd787['return_product']['forEach'](_0x40a3d7=>{var _0x5f30ae=_0x14c6f7;const _0xd16c8d=_0x3cdd3c['product_details'][_0x5f30ae(0x1c6)](_0xe7fdc7=>{var _0x46e056=_0x5f30ae;_0xe7fdc7['product_name']==_0x40a3d7[_0x46e056(0x1ec)]&&_0xe7fdc7[_0x46e056(0x1fb)]==_0x40a3d7[_0x46e056(0x1fb)]&&_0xe7fdc7[_0x46e056(0x1f6)]==_0x40a3d7['type']&&_0xe7fdc7[_0x46e056(0x1eb)]==_0x40a3d7[_0x46e056(0x1eb)]&&_0xe7fdc7[_0x46e056(0x21a)]==_0x40a3d7['bay']&&(_0xe7fdc7[_0x46e056(0x1ce)]=parseInt(_0xe7fdc7['product_stock'])+parseInt(_0x40a3d7[_0x46e056(0x1c9)]));});}),console[_0x14c6f7(0x1df)]('old_warehouse_data',_0x3cdd3c),await _0x3cdd3c[_0x14c6f7(0x22a)](),_0x1cd787['invoice']=_0x54946e,_0x1cd787['suppliers']=_0x254225,_0x1cd787['date']=_0x1fb465,_0x1cd787[_0x14c6f7(0x1f1)]=_0x160b21,_0x1cd787['return_product']=_0x1bee75,_0x1cd787[_0x14c6f7(0x1c3)]=_0x56cdf6,_0x1cd787[_0x14c6f7(0x1e5)]=_0x1576c7,_0x1cd787[_0x14c6f7(0x1f7)]=_0x1030eb,_0x1cd787[_0x14c6f7(0x1d2)]=_0x5500d2;const _0x21b3a=await _0x1cd787[_0x14c6f7(0x22a)](),_0x1aee57=await purchases_return[_0x14c6f7(0x1c2)]({'invoice':_0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x1c4)]}),_0x2f0966=await warehouse[_0x14c6f7(0x1c2)]({'name':_0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x1f7)],'room':_0x543519['body'][_0x14c6f7(0x1c5)]});_0x1aee57['return_product'][_0x14c6f7(0x208)](_0x2eb38e=>{var _0x169624=_0x14c6f7;_0x2f0966[_0x169624(0x1f5)][_0x169624(0x1c6)](_0x5b8abf=>{var _0x3f66e0=_0x169624;_0x5b8abf['product_name']==_0x2eb38e[_0x3f66e0(0x1ec)]&&_0x5b8abf[_0x3f66e0(0x1d0)]==_0x2eb38e[_0x3f66e0(0x1d0)]&&(_0x5b8abf[_0x3f66e0(0x1ce)]=parseInt(_0x5b8abf[_0x3f66e0(0x1ce)])-parseInt(_0x2eb38e[_0x3f66e0(0x1c9)]),console['log']('product_details.return_qtyproduct_details.return_qty',_0x2eb38e[_0x3f66e0(0x1c9)]));});}),console[_0x14c6f7(0x1df)](_0x14c6f7(0x1d8),_0x2f0966),await _0x2f0966[_0x14c6f7(0x22a)]();const _0x35a09d=await s_payment_data[_0x14c6f7(0x1c2)]({'invoice':_0x543519[_0x14c6f7(0x20f)][_0x14c6f7(0x1c4)],'reason':_0x14c6f7(0x1ed)});await _0x35a09d[_0x14c6f7(0x22a)](),_0x543519[_0x14c6f7(0x1d9)](_0x14c6f7(0x206),_0x14c6f7(0x21e)),_0x13f009['redirect'](_0x14c6f7(0x20b));}catch(_0x3e8cbe){console[_0x14c6f7(0x1df)](_0x3e8cbe),_0x13f009[_0x14c6f7(0x21d)](0xc8)[_0x14c6f7(0x1d5)]({'message':_0x3e8cbe[_0x14c6f7(0x21c)]});}}),router[a0_0x34285b(0x1e9)](a0_0x34285b(0x1ff),auth,async(_0x3eccca,_0x44cf8d)=>{var _0x3a837d=a0_0x34285b;try{const {username:_0x55f552,email:_0x57bd40,role:_0x44813f}=_0x3eccca[_0x3a837d(0x1d4)],_0xd9325d=_0x3eccca[_0x3a837d(0x1d4)],_0x5329cb=await profile[_0x3a837d(0x1c2)]({'email':_0xd9325d[_0x3a837d(0x213)]}),_0x2f5928=await master_shop[_0x3a837d(0x1ca)]();console[_0x3a837d(0x1df)](_0x3a837d(0x20a),_0x2f5928);const _0x574242=_0x3eccca[_0x3a837d(0x201)]['id'],_0x5830ad=await purchases_return[_0x3a837d(0x205)](_0x574242);console[_0x3a837d(0x1df)](_0x5830ad);const _0x528ea0=await suppliers['findOne']({'name':_0x5830ad[_0x3a837d(0x22f)]});console[_0x3a837d(0x1df)](_0x528ea0);if(_0x2f5928[0x0][_0x3a837d(0x233)]==_0x3a837d(0x1cb)){var _0x4cbea2=users[_0x3a837d(0x1f3)];console[_0x3a837d(0x1df)](_0x4cbea2);}else{if(_0x2f5928[0x0][_0x3a837d(0x233)]==_0x3a837d(0x1d1))var _0x4cbea2=users['Hindi'];else{if(_0x2f5928[0x0][_0x3a837d(0x233)]=='German')var _0x4cbea2=users[_0x3a837d(0x231)];else{if(_0x2f5928[0x0][_0x3a837d(0x233)]=='Spanish')var _0x4cbea2=users[_0x3a837d(0x1e2)];else{if(_0x2f5928[0x0]['language']==_0x3a837d(0x1d6))var _0x4cbea2=users[_0x3a837d(0x1d6)];else{if(_0x2f5928[0x0]['language']==_0x3a837d(0x210))var _0x4cbea2=users['Portuguese'];else{if(_0x2f5928[0x0][_0x3a837d(0x233)]==_0x3a837d(0x234))var _0x4cbea2=users[_0x3a837d(0x234)];else{if(_0x2f5928[0x0]['language']==_0x3a837d(0x227))var _0x4cbea2=users[_0x3a837d(0x1c0)];}}}}}}}_0x44cf8d[_0x3a837d(0x219)](_0x3a837d(0x1fe),{'success':_0x3eccca[_0x3a837d(0x1d9)]('success'),'errors':_0x3eccca['flash'](_0x3a837d(0x1f9)),'role':_0xd9325d,'profile':_0x5329cb,'master_shop':_0x2f5928,'supplier':_0x528ea0,'purchase':_0x5830ad,'language':_0x4cbea2});}catch(_0x508c8e){console[_0x3a837d(0x1df)](_0x508c8e);}}),router[a0_0x34285b(0x207)](a0_0x34285b(0x1c7),auth,async(_0x2974f5,_0x452884)=>{var _0x523bd6=a0_0x34285b;try{const _0x7d0b0b=_0x2974f5['params']['id'],{invoice:_0x57b33d,suppliers:_0x16e57f,receivable_amount:_0x2b12d9,received_amount:_0x2a1896}=_0x2974f5[_0x523bd6(0x20f)],_0x5e887c=await purchases_return['findById'](_0x7d0b0b);console[_0x523bd6(0x1df)](_0x5e887c);var _0x184875=_0x2b12d9-_0x2a1896;console[_0x523bd6(0x1df)](_0x2a1896),_0x5e887c['received']=parseFloat(_0x2a1896)+parseFloat(_0x5e887c['received']),_0x5e887c[_0x523bd6(0x232)]=_0x184875,console['log'](_0x5e887c);const _0x35436e=await _0x5e887c[_0x523bd6(0x22a)](),_0x27ca8c=await s_payment_data[_0x523bd6(0x1c2)]({'invoice':_0x2974f5[_0x523bd6(0x20f)][_0x523bd6(0x1c4)],'reason':_0x523bd6(0x1ed)});_0x27ca8c['amount']=_0x184875,await _0x27ca8c[_0x523bd6(0x22a)]();let _0x4a80f8=new Date(),_0x5d5ead=('0'+_0x4a80f8[_0x523bd6(0x215)]())[_0x523bd6(0x1e6)](-0x2),_0x24be2c=('0'+(_0x4a80f8['getMonth']()+0x1))['slice'](-0x2),_0x152c47=_0x4a80f8['getFullYear'](),_0x25cd19=_0x152c47+'-'+_0x24be2c+'-'+_0x5d5ead;const _0x173849=new suppliers_payment({'invoice':_0x57b33d,'date':_0x152c47+'-'+_0x24be2c+'-'+_0x5d5ead,'suppliers':_0x16e57f,'reason':'Received\x20For\x20Purchase\x20Return','amount':_0x2a1896}),_0x346e2e=await _0x173849[_0x523bd6(0x22a)]();_0x2974f5[_0x523bd6(0x1d9)](_0x523bd6(0x206),_0x523bd6(0x21b)),_0x452884[_0x523bd6(0x224)]('/purchases_return/view');}catch(_0x3cc6d8){console[_0x523bd6(0x1df)](_0x3cc6d8);}}),module[a0_0x34285b(0x203)]=router;