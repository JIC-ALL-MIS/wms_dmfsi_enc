const a0_0x11cbf3=a0_0xde3b;(function(_0x371eca,_0x2d119f){const _0xf5e6fb=a0_0xde3b,_0x3887f3=_0x371eca();while(!![]){try{const _0x387c19=-parseInt(_0xf5e6fb(0x8f))/0x1+parseInt(_0xf5e6fb(0xca))/0x2*(-parseInt(_0xf5e6fb(0xad))/0x3)+parseInt(_0xf5e6fb(0x94))/0x4+parseInt(_0xf5e6fb(0xa4))/0x5+parseInt(_0xf5e6fb(0x89))/0x6*(-parseInt(_0xf5e6fb(0x7c))/0x7)+-parseInt(_0xf5e6fb(0x6e))/0x8+parseInt(_0xf5e6fb(0xdd))/0x9*(parseInt(_0xf5e6fb(0xa1))/0xa);if(_0x387c19===_0x2d119f)break;else _0x3887f3['push'](_0x3887f3['shift']());}catch(_0x586575){_0x3887f3['push'](_0x3887f3['shift']());}}}(a0_0x46e8,0x6c536));const express=require(a0_0x11cbf3(0xd9)),app=express(),router=express[a0_0x11cbf3(0x92)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,purchases_return_finished}=require(a0_0x11cbf3(0xb3)),auth=require(a0_0x11cbf3(0x96)),users=require(a0_0x11cbf3(0xcb));router[a0_0x11cbf3(0x84)](a0_0x11cbf3(0x93),auth,async(_0x24e487,_0x1f43c6)=>{const _0x5d67cf=a0_0x11cbf3;try{const {username:_0x5d6574,email:_0x338d78,role:_0xf18d49}=_0x24e487['user'],_0x43e684=_0x24e487[_0x5d67cf(0xc0)],_0x4072cc=await profile['findOne']({'email':_0x43e684[_0x5d67cf(0xd8)]}),_0x29a57b=await master_shop['find']();console[_0x5d67cf(0xbb)](_0x5d67cf(0x75),_0x29a57b);const _0xc90a33=await purchases_return_finished['aggregate']([{'$lookup':{'from':_0x5d67cf(0xb9),'localField':_0x5d67cf(0xb9),'foreignField':_0x5d67cf(0xbe),'as':_0x5d67cf(0xd4)}},{'$unwind':_0x5d67cf(0x95)},{'$unwind':_0x5d67cf(0xcc)},{'$group':{'_id':'$_id','invoice':{'$first':_0x5d67cf(0x76)},'date':{'$first':_0x5d67cf(0xae)},'suppliers':{'$first':'$suppliers'},'warehouse_name':{'$first':_0x5d67cf(0xa5)},'product_name':{'$first':_0x5d67cf(0x79)},'return_qty':{'$first':'$return_product.return_qty'},'price':{'$first':_0x5d67cf(0x80)},'total':{'$sum':_0x5d67cf(0xcf)},'note':{'$first':'$note'},'total_amount':{'$first':_0x5d67cf(0x8c)},'discount':{'$first':_0x5d67cf(0xab)},'receivable':{'$first':_0x5d67cf(0xc3)},'received':{'$first':_0x5d67cf(0x99)},'due_amount':{'$first':_0x5d67cf(0x9d)},'mobile':{'$first':_0x5d67cf(0xa6)},'email':{'$first':'$supplier_docs.email'},'address':{'$first':_0x5d67cf(0x74)},'return_sum_qty':{'$sum':'$return_product.return_qty'}}}]);console[_0x5d67cf(0xbb)](_0xc90a33);if(_0x29a57b[0x0][_0x5d67cf(0xaa)]==_0x5d67cf(0xdc)){var _0x5b91df=users[_0x5d67cf(0x86)];console[_0x5d67cf(0xbb)](_0x5b91df);}else{if(_0x29a57b[0x0][_0x5d67cf(0xaa)]==_0x5d67cf(0x9b))var _0x5b91df=users[_0x5d67cf(0x9b)];else{if(_0x29a57b[0x0][_0x5d67cf(0xaa)]=='German')var _0x5b91df=users[_0x5d67cf(0x87)];else{if(_0x29a57b[0x0][_0x5d67cf(0xaa)]=='Spanish')var _0x5b91df=users['Spanish'];else{if(_0x29a57b[0x0][_0x5d67cf(0xaa)]==_0x5d67cf(0x8a))var _0x5b91df=users['French'];else{if(_0x29a57b[0x0][_0x5d67cf(0xaa)]==_0x5d67cf(0xac))var _0x5b91df=users['Portuguese'];else{if(_0x29a57b[0x0]['language']==_0x5d67cf(0x7b))var _0x5b91df=users[_0x5d67cf(0x7b)];else{if(_0x29a57b[0x0][_0x5d67cf(0xaa)]==_0x5d67cf(0xd1))var _0x5b91df=users[_0x5d67cf(0x7d)];}}}}}}}_0x1f43c6[_0x5d67cf(0x9c)]('purchases_return_finished',{'success':_0x24e487[_0x5d67cf(0xb0)](_0x5d67cf(0xbc)),'errors':_0x24e487[_0x5d67cf(0xb0)](_0x5d67cf(0xb1)),'role':_0x43e684,'profile':_0x4072cc,'master_shop':_0x29a57b,'user':_0xc90a33,'language':_0x5b91df});}catch(_0x17e5b5){console[_0x5d67cf(0xbb)](_0x17e5b5);}}),router[a0_0x11cbf3(0x84)]('/view/:id',auth,async(_0x152968,_0x393c36)=>{const _0x2d1c49=a0_0x11cbf3;try{const {username:_0x5d2fe1,email:_0x47970e,role:_0x133c0a}=_0x152968[_0x2d1c49(0xc0)],_0x2c2a9c=_0x152968[_0x2d1c49(0xc0)],_0x420f19=await profile['findOne']({'email':_0x2c2a9c[_0x2d1c49(0xd8)]}),_0x33b267=await product[_0x2d1c49(0x91)]({}),_0x1cb4e1=await master_shop[_0x2d1c49(0x91)](),_0xcac88d=_0x152968[_0x2d1c49(0x72)]['id'],_0x258c69=await purchases_return_finished['findById'](_0xcac88d),_0x537809=await warehouse['aggregate']([{'$match':{'name':_0x258c69[_0x2d1c49(0x7e)],'room':_0x258c69[_0x2d1c49(0x83)],'warehouse_category':_0x2d1c49(0xd0)}},{'$unwind':_0x2d1c49(0xaf)},{'$group':{'_id':_0x2d1c49(0xdb),'name':{'$first':_0x2d1c49(0xb2)},'product_stock':{'$first':_0x2d1c49(0xde)},'bay':{'$first':_0x2d1c49(0xd3)},'bin':{'$first':_0x2d1c49(0xb8)},'type':{'$first':'$product_details.type'},'floorlevel':{'$first':'$product_details.floorlevel'},'primary_code':{'$first':_0x2d1c49(0xe1)},'secondary_code':{'$first':_0x2d1c49(0x6f)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x2d1c49(0xc9)},'rack':{'$first':'$product_details.rack'}}}]);warehouse_data=await warehouse['aggregate']([{'$match':{'status':'Enabled','name':_0x2d1c49(0x81),'warehouse_category':_0x2d1c49(0xd0)}},{'$group':{'_id':_0x2d1c49(0x6b),'name':{'$first':_0x2d1c49(0x6b)}}},{'$sort':{'name':0x1}}]),console['log']('stock_data',_0x537809);if(_0x1cb4e1[0x0][_0x2d1c49(0xaa)]==_0x2d1c49(0xdc)){var _0x3b842f=users[_0x2d1c49(0x86)];console[_0x2d1c49(0xbb)](_0x3b842f);}else{if(_0x1cb4e1[0x0][_0x2d1c49(0xaa)]=='Hindi')var _0x3b842f=users['Hindi'];else{if(_0x1cb4e1[0x0][_0x2d1c49(0xaa)]==_0x2d1c49(0x87))var _0x3b842f=users[_0x2d1c49(0x87)];else{if(_0x1cb4e1[0x0][_0x2d1c49(0xaa)]==_0x2d1c49(0x9a))var _0x3b842f=users['Spanish'];else{if(_0x1cb4e1[0x0]['language']==_0x2d1c49(0x8a))var _0x3b842f=users[_0x2d1c49(0x8a)];else{if(_0x1cb4e1[0x0][_0x2d1c49(0xaa)]==_0x2d1c49(0xac))var _0x3b842f=users[_0x2d1c49(0x70)];else{if(_0x1cb4e1[0x0][_0x2d1c49(0xaa)]==_0x2d1c49(0x7b))var _0x3b842f=users['Chinese'];else{if(_0x1cb4e1[0x0][_0x2d1c49(0xaa)]==_0x2d1c49(0xd1))var _0x3b842f=users[_0x2d1c49(0x7d)];}}}}}}}_0x393c36['render'](_0x2d1c49(0xc5),{'success':_0x152968['flash'](_0x2d1c49(0xbc)),'errors':_0x152968[_0x2d1c49(0xb0)](_0x2d1c49(0xb1)),'role':_0x2c2a9c,'master_shop':_0x1cb4e1,'profile':_0x420f19,'user':_0x258c69,'stock':_0x537809,'product':_0x33b267,'language':_0x3b842f,'warehouse':warehouse_data});}catch(_0x50d284){console['log'](_0x50d284);}}),router[a0_0x11cbf3(0x73)](a0_0x11cbf3(0xa2),auth,async(_0x1e6250,_0x434cc5)=>{const _0x2df874=a0_0x11cbf3;try{const _0x1c23f1=_0x1e6250[_0x2df874(0x72)]['id'],_0x3a52b6=await purchases_return_finished['findOne']({'invoice':_0x1e6250[_0x2df874(0x98)][_0x2df874(0x77)]}),_0x3d01f6=await warehouse[_0x2df874(0x71)]({'name':_0x3a52b6[_0x2df874(0xda)],'room':_0x3a52b6[_0x2df874(0xb7)],'warehouse_category':_0x2df874(0xd0)}),{invoice:_0x24a2ca,suppliers:_0x5a0e42,date:_0x14c17e,warehouse_name:_0x1963b0,product_name:_0x5f342f,purchase_quantity:_0x3f052f,stocks:_0x370bc8,return_qty:_0x177ce2,note:_0x100e3c,Room_name:_0x478531,level:_0x12e3b3,isle:_0x931fb2,pallet:_0x36c9cd,to_warehouse_name:_0x4bd1eb,to_Room_name:_0x265ed1}=_0x1e6250[_0x2df874(0x98)];if(typeof _0x5f342f==_0x2df874(0xd6))var _0x21b390=[_0x1e6250[_0x2df874(0x98)][_0x2df874(0x85)]],_0x135bd7=[_0x1e6250[_0x2df874(0x98)][_0x2df874(0x7a)]],_0x5892cf=[_0x1e6250[_0x2df874(0x98)][_0x2df874(0xb5)]],_0x1dd575=[_0x1e6250[_0x2df874(0x98)][_0x2df874(0xba)]],_0x2ff48a=[_0x1e6250['body'][_0x2df874(0xa3)]],_0x2ba469=[_0x1e6250[_0x2df874(0x98)][_0x2df874(0xd7)]],_0x240321=[_0x1e6250['body'][_0x2df874(0xe0)]],_0x14048b=[_0x1e6250[_0x2df874(0x98)][_0x2df874(0x97)]];else var _0x21b390=[..._0x1e6250[_0x2df874(0x98)]['product_name']],_0x135bd7=[..._0x1e6250[_0x2df874(0x98)]['purchase_quantity']],_0x5892cf=[..._0x1e6250[_0x2df874(0x98)][_0x2df874(0xb5)]],_0x1dd575=[..._0x1e6250[_0x2df874(0x98)][_0x2df874(0xba)]],_0x2ff48a=[..._0x1e6250[_0x2df874(0x98)][_0x2df874(0xa3)]],_0x2ba469=[..._0x1e6250['body'][_0x2df874(0xd7)]],_0x240321=[..._0x1e6250['body'][_0x2df874(0xe0)]],_0x14048b=[..._0x1e6250['body'][_0x2df874(0x97)]];const _0xa1b806=_0x21b390[_0x2df874(0x8e)](_0xd43edb=>{return _0xd43edb={'product_name':_0xd43edb};});_0x135bd7[_0x2df874(0x7f)]((_0xa37dc6,_0x4501b7)=>{const _0x8ba29c=_0x2df874;_0xa1b806[_0x4501b7][_0x8ba29c(0x7a)]=_0xa37dc6;}),_0x5892cf[_0x2df874(0x7f)]((_0x33a549,_0x53e969)=>{const _0x32ef3=_0x2df874;_0xa1b806[_0x53e969][_0x32ef3(0x9e)]=_0x33a549;}),_0x1dd575[_0x2df874(0x7f)]((_0x270528,_0x1f5c9e)=>{const _0x44b947=_0x2df874;_0xa1b806[_0x1f5c9e][_0x44b947(0xba)]=_0x270528;}),_0x2ff48a['forEach']((_0x15dac9,_0x2a23af)=>{const _0x3d55b6=_0x2df874;_0xa1b806[_0x2a23af][_0x3d55b6(0x9f)]=_0x15dac9;}),_0x2ba469[_0x2df874(0x7f)]((_0x30df3d,_0x32117c)=>{_0xa1b806[_0x32117c]['product_code']=_0x30df3d;}),_0x240321[_0x2df874(0x7f)]((_0xf0c44e,_0x257951)=>{const _0x278bc6=_0x2df874;_0xa1b806[_0x257951][_0x278bc6(0x78)]=_0xf0c44e;}),_0x14048b[_0x2df874(0x7f)]((_0x8d8d60,_0x43a316)=>{_0xa1b806[_0x43a316]['secondary_code']=_0x8d8d60;});var _0x105715=0x0;_0xa1b806[_0x2df874(0x7f)](_0x199256=>{const _0x105fa6=_0x2df874;(parseInt(_0x199256[_0x105fa6(0x7a)])<parseInt(_0x199256['return_qty'])||parseInt(_0x199256[_0x105fa6(0x9e)])<parseInt(_0x199256['return_qty']))&&_0x105715++;});if(_0x105715!=0x0)return _0x1e6250[_0x2df874(0xb0)](_0x2df874(0xb1),_0x2df874(0x6c)),_0x434cc5[_0x2df874(0xa0)]('back');_0x3a52b6[_0x2df874(0xdf)]['forEach'](_0x4c373d=>{const _0x21c03c=_0x2df874;if(_0x4c373d['return_qty']>0x0){const _0x52d3c6=_0x3d01f6[_0x21c03c(0xd5)]['map'](_0x3bb0b6=>{const _0x53e5e0=_0x21c03c;_0x3bb0b6[_0x53e5e0(0x85)]==_0x4c373d[_0x53e5e0(0x85)]&&_0x3bb0b6[_0x53e5e0(0x9f)]==_0x4c373d[_0x53e5e0(0x9f)]&&(_0x3bb0b6[_0x53e5e0(0xa9)]=parseInt(_0x3bb0b6[_0x53e5e0(0xa9)])+parseInt(_0x4c373d[_0x53e5e0(0xba)]));});}}),await _0x3d01f6[_0x2df874(0xce)](),_0x3a52b6[_0x2df874(0x77)]=_0x24a2ca,_0x3a52b6['suppliers']=_0x5a0e42,_0x3a52b6[_0x2df874(0xc1)]=_0x14c17e,_0x3a52b6[_0x2df874(0x7e)]=_0x1963b0,_0x3a52b6[_0x2df874(0xdf)]=_0xa1b806,_0x3a52b6['note']=_0x100e3c,_0x3a52b6[_0x2df874(0x83)]=_0x478531,_0x3a52b6['to_warehouse_name']=_0x4bd1eb,_0x3a52b6[_0x2df874(0xb7)]=_0x265ed1;const _0xa79997=await _0x3a52b6['save'](),_0x318808=await purchases_return_finished[_0x2df874(0x71)]({'invoice':_0x1e6250[_0x2df874(0x98)][_0x2df874(0x77)]}),_0x14760e=await warehouse[_0x2df874(0x71)]({'name':_0x1e6250[_0x2df874(0x98)][_0x2df874(0xda)],'room':_0x1e6250[_0x2df874(0x98)]['to_Room_name'],'warehouse_category':_0x2df874(0xd0)});_0x318808['return_product'][_0x2df874(0x7f)](_0x220bae=>{const _0x37cf66=_0x2df874;_0x14760e[_0x37cf66(0xd5)]['map'](_0x415a89=>{const _0x1ab459=_0x37cf66;_0x415a89[_0x1ab459(0x85)]==_0x220bae[_0x1ab459(0x85)]&&_0x415a89['bay']==_0x220bae['bay']&&(_0x415a89['product_stock']=parseInt(_0x415a89['product_stock'])-parseInt(_0x220bae[_0x1ab459(0xba)]));});}),await _0x14760e[_0x2df874(0xce)]();const _0x1afb05=await s_payment_data[_0x2df874(0x71)]({'invoice':_0x1e6250[_0x2df874(0x98)]['invoice'],'reason':_0x2df874(0x88)});await _0x1afb05['save'](),_0x1e6250[_0x2df874(0xb0)]('success',_0x2df874(0xc6)),_0x434cc5[_0x2df874(0xa0)](_0x2df874(0xb6));}catch(_0x1dbe84){console[_0x2df874(0xbb)](_0x1dbe84),_0x434cc5[_0x2df874(0x8b)](0xc8)[_0x2df874(0xd2)]({'message':_0x1dbe84['message']});}}),router[a0_0x11cbf3(0x84)](a0_0x11cbf3(0xb4),auth,async(_0x4da008,_0xe9d409)=>{const _0x2bbf47=a0_0x11cbf3;try{const {username:_0xcc462b,email:_0x4932ca,role:_0x272786}=_0x4da008[_0x2bbf47(0xc0)],_0x41245a=_0x4da008['user'],_0xd80335=await profile[_0x2bbf47(0x71)]({'email':_0x41245a[_0x2bbf47(0xd8)]}),_0xa30827=await master_shop[_0x2bbf47(0x91)]();console[_0x2bbf47(0xbb)](_0x2bbf47(0x75),_0xa30827);const _0x103293=_0x4da008[_0x2bbf47(0x72)]['id'],_0x8f3eb3=await purchases_return[_0x2bbf47(0xa7)](_0x103293);console[_0x2bbf47(0xbb)](_0x8f3eb3);const _0x23b73c=await suppliers[_0x2bbf47(0x71)]({'name':_0x8f3eb3[_0x2bbf47(0xb9)]});console['log'](_0x23b73c);if(_0xa30827[0x0][_0x2bbf47(0xaa)]==_0x2bbf47(0xdc)){var _0x292d59=users[_0x2bbf47(0x86)];console[_0x2bbf47(0xbb)](_0x292d59);}else{if(_0xa30827[0x0][_0x2bbf47(0xaa)]==_0x2bbf47(0x9b))var _0x292d59=users[_0x2bbf47(0x9b)];else{if(_0xa30827[0x0]['language']=='German')var _0x292d59=users['German'];else{if(_0xa30827[0x0]['language']==_0x2bbf47(0x9a))var _0x292d59=users['Spanish'];else{if(_0xa30827[0x0][_0x2bbf47(0xaa)]==_0x2bbf47(0x8a))var _0x292d59=users[_0x2bbf47(0x8a)];else{if(_0xa30827[0x0][_0x2bbf47(0xaa)]=='Portuguese\x20(BR)')var _0x292d59=users[_0x2bbf47(0x70)];else{if(_0xa30827[0x0][_0x2bbf47(0xaa)]==_0x2bbf47(0x7b))var _0x292d59=users['Chinese'];else{if(_0xa30827[0x0]['language']=='Arabic\x20(ae)')var _0x292d59=users[_0x2bbf47(0x7d)];}}}}}}}_0xe9d409[_0x2bbf47(0x9c)](_0x2bbf47(0xc7),{'success':_0x4da008['flash'](_0x2bbf47(0xbc)),'errors':_0x4da008[_0x2bbf47(0xb0)](_0x2bbf47(0xb1)),'role':_0x41245a,'profile':_0xd80335,'master_shop':_0xa30827,'supplier':_0x23b73c,'purchase':_0x8f3eb3,'language':_0x292d59});}catch(_0x148ff9){console[_0x2bbf47(0xbb)](_0x148ff9);}}),router[a0_0x11cbf3(0x73)](a0_0x11cbf3(0x8d),auth,async(_0xdd44e7,_0xe2a0f2)=>{const _0x2ec3ee=a0_0x11cbf3;try{const _0x4af83d=_0xdd44e7[_0x2ec3ee(0x72)]['id'],{invoice:_0x4c0280,suppliers:_0x217a6c,receivable_amount:_0x4e3796,received_amount:_0x36cb17}=_0xdd44e7[_0x2ec3ee(0x98)],_0x6e20f8=await purchases_return[_0x2ec3ee(0xa7)](_0x4af83d);console[_0x2ec3ee(0xbb)](_0x6e20f8);var _0x2c03a8=_0x4e3796-_0x36cb17;console[_0x2ec3ee(0xbb)](_0x36cb17),_0x6e20f8[_0x2ec3ee(0xbf)]=parseFloat(_0x36cb17)+parseFloat(_0x6e20f8['received']),_0x6e20f8[_0x2ec3ee(0x90)]=_0x2c03a8,console[_0x2ec3ee(0xbb)](_0x6e20f8);const _0x2aacde=await _0x6e20f8['save'](),_0x2913ed=await s_payment_data[_0x2ec3ee(0x71)]({'invoice':_0xdd44e7['body'][_0x2ec3ee(0x77)],'reason':'Purchase\x20Return'});_0x2913ed[_0x2ec3ee(0xc2)]=_0x2c03a8,await _0x2913ed['save']();let _0x54c744=new Date(),_0x10dbd4=('0'+_0x54c744[_0x2ec3ee(0xa8)]())[_0x2ec3ee(0xc8)](-0x2),_0x5d37ad=('0'+(_0x54c744[_0x2ec3ee(0xbd)]()+0x1))[_0x2ec3ee(0xc8)](-0x2),_0x3e96f7=_0x54c744['getFullYear'](),_0x299517=_0x3e96f7+'-'+_0x5d37ad+'-'+_0x10dbd4;const _0x5ea793=new suppliers_payment({'invoice':_0x4c0280,'date':_0x3e96f7+'-'+_0x5d37ad+'-'+_0x10dbd4,'suppliers':_0x217a6c,'reason':_0x2ec3ee(0x6d),'amount':_0x36cb17}),_0xdb4b60=await _0x5ea793[_0x2ec3ee(0xce)]();_0xdd44e7[_0x2ec3ee(0xb0)](_0x2ec3ee(0xbc),_0x2ec3ee(0xc4)),_0xe2a0f2[_0x2ec3ee(0xa0)](_0x2ec3ee(0xcd));}catch(_0x6c0b19){console[_0x2ec3ee(0xbb)](_0x6c0b19);}}),module[a0_0x11cbf3(0x82)]=router;function a0_0xde3b(_0x31bea2,_0x4dd384){const _0x46e8ec=a0_0x46e8();return a0_0xde3b=function(_0xde3bed,_0x5de799){_0xde3bed=_0xde3bed-0x6b;let _0x42b683=_0x46e8ec[_0xde3bed];return _0x42b683;},a0_0xde3b(_0x31bea2,_0x4dd384);}function a0_0x46e8(){const _0x49face=['json','$product_details.bay','supplier_docs','product_details','string','product_code_hide','email','express','to_warehouse_name','$product_details._id','English\x20(US)','45KHPpQM','$product_details.product_stock','return_product','primary_code_hide','$product_details.primary_code','$name','Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty','Received\x20For\x20Purchase\x20Return','3385256YuCvkK','$product_details.secondary_code','Portuguese','findOne','params','post','$supplier_docs.address','master','$invoice','invoice','primary_code','$return_product.product_name','purchase_quantity','Chinese','7SVEQLj','Arabic','warehouse_name','forEach','$return_product.price','Return\x20Goods','exports','room','get','product_name','English','German','Purchase\x20Return','4903476dkBiIG','French','status','$total_amount','/receive_payment/:id','map','501674kTYqRt','due_amount','find','Router','/view','920648FbMxjm','$return_product','../middleware/auth','secondary_code_hide','body','$received','Spanish','Hindi','render','$due_amount','stock_quantity','bay','redirect','4872150IHESOH','/view/:id','level','1641520EKjjZr','$warehouse_name','$supplier_docs.mobile','findById','getDate','product_stock','language','$discount','Portuguese\x20(BR)','2426286ajrnHO','$date','$product_details','flash','errors','$product_details.product_name','../models/all_models','/invoice/:id','stocks','/purchases_return_finished/view','to_room','$product_details.bin','suppliers','return_qty','log','success','getMonth','name','received','user','date','amount','$receivable','payment\x20successfull','return_purchase_edit_finished','purchase\x20return\x20successfully','return_purchase_invoice','slice','$product_details.storage','2Jspsdh','../public/language/languages.json','$supplier_docs','/purchases_return/view','save','$return_product.total','Finished\x20Goods','Arabic\x20(ae)'];a0_0x46e8=function(){return _0x49face;};return a0_0x46e8();}