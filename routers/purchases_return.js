function a0_0x5303(){var _0x119074=['level','$warehouse_name','bin','2864460vgRYPh','$return_product.price','suppliers','$product_details.storage','111cDGuXO','$invoice','params','$product_details','old_data','$total_amount','$return_product.total','aggregate','French','German','primary_code','English','note','Raw\x20Materials','body','$received','$supplier_docs.address','$product_details.floorlevel','171juZZRQ','warehouse_name','$supplier_docs.email','get','date','Portuguese','$return_product.return_qty','return_product','$product_details.product_code','purchases_return','types','product_details','findById','88584zfvhrT','render','string','$product_details._id','bay','../middleware/auth','$return_product','to_room','Arabic\x20(ae)','$product_details.bin','purchase_quantity','933015GCFCpv','Received\x20For\x20Purchase\x20Return','Chinese','$note','post','getFullYear','find','$name','stocks','/view','$return_product.product_name','$product_details.type','$suppliers','Enabled','invoice','getDate','$product_details.primary_code','primary_code_hide','back','supplier_docs','1333017wwcaRt','language','stock_quantity','/view/:id','received','pallet','../public/language/languages.json','285012BNRibO','Arabic','errors','../models/all_models','express','$product_details.product_name','$due_amount','email','product_stock','name','success','product_code_hide','Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty','English\x20(US)','product_name','master','to_warehouse_name','$_id','isle','json','Portuguese\x20(BR)','map','message','payment\x20successfull','to_Room_name','save','user','$product_details.bay','stock_data','Spanish','Purchase\x20Return','flash','product_code','forEach','return_qty','4353LmyYwi','$supplier_docs.mobile','$product_details.secondary_code','/receive_payment/:id','Hindi','findOne','final','redirect','secondary_code_hide','22kyyibU','/purchases_return/view','product_details.return_qtyproduct_details.return_qty','due_amount','35716tAcRqf','type','room','$date','old_warehouse_data','log','status'];a0_0x5303=function(){return _0x119074;};return a0_0x5303();}function a0_0x1dbe(_0x24995c,_0x128a86){var _0x5303d3=a0_0x5303();return a0_0x1dbe=function(_0x1dbe73,_0xd92f54){_0x1dbe73=_0x1dbe73-0x1f1;var _0x4f09fe=_0x5303d3[_0x1dbe73];return _0x4f09fe;},a0_0x1dbe(_0x24995c,_0x128a86);}var a0_0x57b233=a0_0x1dbe;(function(_0x1d98b2,_0x4336c0){var _0x48a7d9=a0_0x1dbe,_0x185e78=_0x1d98b2();while(!![]){try{var _0x289e52=parseInt(_0x48a7d9(0x21c))/0x1*(parseInt(_0x48a7d9(0x225))/0x2)+parseInt(_0x48a7d9(0x237))/0x3*(parseInt(_0x48a7d9(0x229))/0x4)+parseInt(_0x48a7d9(0x261))/0x5+-parseInt(_0x48a7d9(0x1f9))/0x6+parseInt(_0x48a7d9(0x1f2))/0x7+-parseInt(_0x48a7d9(0x256))/0x8*(parseInt(_0x48a7d9(0x249))/0x9)+-parseInt(_0x48a7d9(0x233))/0xa;if(_0x289e52===_0x4336c0)break;else _0x185e78['push'](_0x185e78['shift']());}catch(_0x40eb3c){_0x185e78['push'](_0x185e78['shift']());}}}(a0_0x5303,0x3380b));const express=require(a0_0x57b233(0x1fd)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data}=require(a0_0x57b233(0x1fc)),auth=require(a0_0x57b233(0x25b)),users=require(a0_0x57b233(0x1f8));router[a0_0x57b233(0x24c)](a0_0x57b233(0x26a),auth,async(_0x152e88,_0x2598bb)=>{var _0x3955c2=a0_0x57b233;try{const {username:_0x28fd33,email:_0xef1aea,role:_0x2f2f6c}=_0x152e88[_0x3955c2(0x213)],_0x517ab0=_0x152e88[_0x3955c2(0x213)],_0x3c06ee=await profile['findOne']({'email':_0x517ab0[_0x3955c2(0x200)]}),_0x4bf4f8=await master_shop['find']();console[_0x3955c2(0x22e)]('master',_0x4bf4f8);const _0x55b73d=await purchases_return[_0x3955c2(0x23e)]([{'$lookup':{'from':_0x3955c2(0x235),'localField':_0x3955c2(0x235),'foreignField':_0x3955c2(0x202),'as':_0x3955c2(0x1f1)}},{'$unwind':_0x3955c2(0x25c)},{'$unwind':'$supplier_docs'},{'$group':{'_id':_0x3955c2(0x20a),'invoice':{'$first':_0x3955c2(0x238)},'date':{'$first':_0x3955c2(0x22c)},'suppliers':{'$first':_0x3955c2(0x26d)},'warehouse_name':{'$first':_0x3955c2(0x231)},'product_name':{'$first':_0x3955c2(0x26b)},'return_qty':{'$first':_0x3955c2(0x24f)},'price':{'$first':_0x3955c2(0x234)},'total':{'$sum':_0x3955c2(0x23d)},'note':{'$first':_0x3955c2(0x264)},'total_amount':{'$first':_0x3955c2(0x23c)},'discount':{'$first':'$discount'},'receivable':{'$first':'$receivable'},'received':{'$first':_0x3955c2(0x246)},'due_amount':{'$first':_0x3955c2(0x1ff)},'mobile':{'$first':_0x3955c2(0x21d)},'email':{'$first':_0x3955c2(0x24b)},'address':{'$first':_0x3955c2(0x247)},'return_sum_qty':{'$sum':_0x3955c2(0x24f)}}}]);console[_0x3955c2(0x22e)](_0x55b73d);if(_0x4bf4f8[0x0][_0x3955c2(0x1f3)]==_0x3955c2(0x206)){var _0x31bbb7=users['English'];console[_0x3955c2(0x22e)](_0x31bbb7);}else{if(_0x4bf4f8[0x0][_0x3955c2(0x1f3)]=='Hindi')var _0x31bbb7=users[_0x3955c2(0x220)];else{if(_0x4bf4f8[0x0]['language']==_0x3955c2(0x240))var _0x31bbb7=users[_0x3955c2(0x240)];else{if(_0x4bf4f8[0x0][_0x3955c2(0x1f3)]==_0x3955c2(0x216))var _0x31bbb7=users[_0x3955c2(0x216)];else{if(_0x4bf4f8[0x0]['language']==_0x3955c2(0x23f))var _0x31bbb7=users[_0x3955c2(0x23f)];else{if(_0x4bf4f8[0x0][_0x3955c2(0x1f3)]==_0x3955c2(0x20d))var _0x31bbb7=users[_0x3955c2(0x24e)];else{if(_0x4bf4f8[0x0]['language']==_0x3955c2(0x263))var _0x31bbb7=users[_0x3955c2(0x263)];else{if(_0x4bf4f8[0x0][_0x3955c2(0x1f3)]=='Arabic\x20(ae)')var _0x31bbb7=users[_0x3955c2(0x1fa)];}}}}}}}_0x2598bb[_0x3955c2(0x257)](_0x3955c2(0x252),{'success':_0x152e88['flash']('success'),'errors':_0x152e88[_0x3955c2(0x218)](_0x3955c2(0x1fb)),'role':_0x517ab0,'profile':_0x3c06ee,'master_shop':_0x4bf4f8,'user':_0x55b73d,'language':_0x31bbb7});}catch(_0x1998da){console[_0x3955c2(0x22e)](_0x1998da);}}),router[a0_0x57b233(0x24c)]('/view/:id',auth,async(_0x3f1b55,_0x17ec2d)=>{var _0x249237=a0_0x57b233;try{const {username:_0x519cfa,email:_0x46e067,role:_0x1489f9}=_0x3f1b55[_0x249237(0x213)],_0x8e4c69=_0x3f1b55[_0x249237(0x213)],_0xa202fb=await profile[_0x249237(0x221)]({'email':_0x8e4c69[_0x249237(0x200)]}),_0x167c0a=await product['find']({}),_0x50ae97=await master_shop[_0x249237(0x267)]();console[_0x249237(0x22e)](_0x249237(0x208),_0x50ae97),console[_0x249237(0x22e)](_0x3f1b55[_0x249237(0x245)]);const _0x4c9157=_0x3f1b55['params']['id'],_0x2a909c=await purchases_return[_0x249237(0x255)](_0x4c9157);console[_0x249237(0x22e)](_0x2a909c);const _0x589604=await warehouse[_0x249237(0x23e)]([{'$match':{'name':_0x2a909c[_0x249237(0x24a)],'room':_0x2a909c[_0x249237(0x22b)]}},{'$unwind':_0x249237(0x23a)},{'$group':{'_id':_0x249237(0x259),'name':{'$first':_0x249237(0x1fe)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x249237(0x214)},'bin':{'$first':_0x249237(0x25f)},'type':{'$first':_0x249237(0x26c)},'floorlevel':{'$first':_0x249237(0x248)},'primary_code':{'$first':_0x249237(0x271)},'secondary_code':{'$first':_0x249237(0x21e)},'product_code':{'$first':_0x249237(0x251)},'storage':{'$first':_0x249237(0x236)},'rack':{'$first':'$product_details.rack'}}}]);warehouse_data=await warehouse[_0x249237(0x23e)]([{'$match':{'status':_0x249237(0x26e),'name':'Return\x20Goods','warehouse_category':_0x249237(0x244)}},{'$group':{'_id':_0x249237(0x268),'name':{'$first':_0x249237(0x268)}}},{'$sort':{'name':0x1}}]),console[_0x249237(0x22e)](_0x249237(0x215),_0x589604);if(_0x50ae97[0x0][_0x249237(0x1f3)]=='English\x20(US)'){var _0x1ab433=users[_0x249237(0x242)];console[_0x249237(0x22e)](_0x1ab433);}else{if(_0x50ae97[0x0]['language']==_0x249237(0x220))var _0x1ab433=users[_0x249237(0x220)];else{if(_0x50ae97[0x0]['language']=='German')var _0x1ab433=users[_0x249237(0x240)];else{if(_0x50ae97[0x0][_0x249237(0x1f3)]==_0x249237(0x216))var _0x1ab433=users[_0x249237(0x216)];else{if(_0x50ae97[0x0][_0x249237(0x1f3)]==_0x249237(0x23f))var _0x1ab433=users[_0x249237(0x23f)];else{if(_0x50ae97[0x0]['language']==_0x249237(0x20d))var _0x1ab433=users[_0x249237(0x24e)];else{if(_0x50ae97[0x0][_0x249237(0x1f3)]==_0x249237(0x263))var _0x1ab433=users[_0x249237(0x263)];else{if(_0x50ae97[0x0][_0x249237(0x1f3)]==_0x249237(0x25e))var _0x1ab433=users[_0x249237(0x1fa)];}}}}}}}_0x17ec2d['render']('return_purchase_edit',{'success':_0x3f1b55[_0x249237(0x218)](_0x249237(0x203)),'errors':_0x3f1b55[_0x249237(0x218)](_0x249237(0x1fb)),'role':_0x8e4c69,'master_shop':_0x50ae97,'profile':_0xa202fb,'user':_0x2a909c,'stock':_0x589604,'product':_0x167c0a,'language':_0x1ab433,'warehouse':warehouse_data});}catch(_0x25e0c9){console['log'](_0x25e0c9);}}),router[a0_0x57b233(0x265)](a0_0x57b233(0x1f5),auth,async(_0x39e438,_0x256ab5)=>{var _0x1cc75b=a0_0x57b233;try{const _0x1c096c=_0x39e438['params']['id'];console[_0x1cc75b(0x22e)](_0x1c096c);const _0x4b190c=await purchases_return['findOne']({'invoice':_0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x26f)]});console[_0x1cc75b(0x22e)](_0x1cc75b(0x23b),_0x4b190c);const _0x3ff749=await warehouse[_0x1cc75b(0x221)]({'name':_0x4b190c[_0x1cc75b(0x209)],'room':_0x4b190c['to_room']});console[_0x1cc75b(0x22e)](_0x1cc75b(0x22d),_0x3ff749);const {invoice:_0xf97d90,suppliers:_0x1e9f33,date:_0x5a6a67,warehouse_name:_0x305a0e,product_name:_0x18306c,purchase_quantity:_0x2bce67,stocks:_0xffcefd,return_qty:_0x2f5b8a,note:_0x31fabc,Room_name:_0x4de962,level:_0x175338,isle:_0x34a08a,pallet:_0x272f77,to_warehouse_name:_0x4ac2b4,to_Room_name:_0x1b2641}=_0x39e438[_0x1cc75b(0x245)];if(typeof _0x18306c==_0x1cc75b(0x258))var _0x9422f9=[_0x39e438['body'][_0x1cc75b(0x207)]],_0x1dfb09=[_0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x260)]],_0x40b130=[_0x39e438['body']['stocks']],_0x39df54=[_0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x21b)]],_0x6e288b=[_0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x230)]],_0x28dc09=[_0x39e438['body'][_0x1cc75b(0x20b)]],_0x1565b4=[_0x39e438[_0x1cc75b(0x245)]['pallet']],_0x332716=[_0x39e438['body'][_0x1cc75b(0x253)]],_0x505c29=[_0x39e438['body'][_0x1cc75b(0x204)]],_0x32f2a4=[_0x39e438['body'][_0x1cc75b(0x272)]],_0x546ec5=[_0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x224)]];else var _0x9422f9=[..._0x39e438['body'][_0x1cc75b(0x207)]],_0x1dfb09=[..._0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x260)]],_0x40b130=[..._0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x269)]],_0x39df54=[..._0x39e438['body'][_0x1cc75b(0x21b)]],_0x6e288b=[..._0x39e438[_0x1cc75b(0x245)]['level']],_0x28dc09=[..._0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x20b)]],_0x1565b4=[..._0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x1f7)]],_0x505c29=[..._0x39e438['body'][_0x1cc75b(0x204)]],_0x32f2a4=[..._0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x272)]],_0x546ec5=[..._0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x224)]],_0x332716=[..._0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x253)]];const _0x3dce0a=_0x9422f9['map'](_0x169cb9=>{return _0x169cb9={'product_name':_0x169cb9};});_0x1dfb09[_0x1cc75b(0x21a)]((_0x285d24,_0x1b85b1)=>{var _0x214404=_0x1cc75b;_0x3dce0a[_0x1b85b1][_0x214404(0x260)]=_0x285d24;}),_0x40b130[_0x1cc75b(0x21a)]((_0x355b93,_0x52832a)=>{_0x3dce0a[_0x52832a]['stock_quantity']=_0x355b93;}),_0x39df54[_0x1cc75b(0x21a)]((_0x37264b,_0x304a08)=>{var _0x2598be=_0x1cc75b;_0x3dce0a[_0x304a08][_0x2598be(0x21b)]=_0x37264b;}),_0x6e288b['forEach']((_0x4eb154,_0x371944)=>{var _0x5eff85=_0x1cc75b;_0x3dce0a[_0x371944][_0x5eff85(0x25a)]=_0x4eb154;}),_0x28dc09[_0x1cc75b(0x21a)]((_0x12829d,_0x59582)=>{var _0x170e72=_0x1cc75b;_0x3dce0a[_0x59582][_0x170e72(0x232)]=_0x12829d;}),_0x1565b4['forEach']((_0x4bbd42,_0x46bc50)=>{_0x3dce0a[_0x46bc50]['floorlevel']=_0x4bbd42;}),_0x505c29['forEach']((_0x3d0a70,_0x320a18)=>{var _0x12ff5a=_0x1cc75b;_0x3dce0a[_0x320a18][_0x12ff5a(0x219)]=_0x3d0a70;}),_0x32f2a4['forEach']((_0x2428ae,_0xdd63ac)=>{var _0x142832=_0x1cc75b;_0x3dce0a[_0xdd63ac][_0x142832(0x241)]=_0x2428ae;}),_0x546ec5['forEach']((_0x8a7c8e,_0x224996)=>{_0x3dce0a[_0x224996]['secondary_code']=_0x8a7c8e;}),_0x332716['forEach']((_0x446b82,_0x34cc44)=>{_0x3dce0a[_0x34cc44]['type']=_0x446b82;});var _0x5a8f78=0x0;_0x3dce0a[_0x1cc75b(0x21a)](_0x47245f=>{var _0x4de3fb=_0x1cc75b;console[_0x4de3fb(0x22e)]('foreach\x20newproduct',_0x47245f),(parseInt(_0x47245f[_0x4de3fb(0x260)])<parseInt(_0x47245f[_0x4de3fb(0x21b)])||parseInt(_0x47245f[_0x4de3fb(0x1f4)])<parseInt(_0x47245f[_0x4de3fb(0x21b)])||parseInt(_0x47245f['return_qty'])==0x0)&&_0x5a8f78++;});if(_0x5a8f78!=0x0)return _0x39e438[_0x1cc75b(0x218)](_0x1cc75b(0x1fb),_0x1cc75b(0x205)),_0x256ab5[_0x1cc75b(0x223)](_0x1cc75b(0x273));_0x4b190c['return_product'][_0x1cc75b(0x21a)](_0x7d32e4=>{var _0x5af9ef=_0x1cc75b;const _0x134321=_0x3ff749[_0x5af9ef(0x254)][_0x5af9ef(0x20e)](_0x59ede7=>{var _0x5dced5=_0x5af9ef;_0x59ede7['product_name']==_0x7d32e4[_0x5dced5(0x207)]&&_0x59ede7['floorlevel']==_0x7d32e4['floorlevel']&&_0x59ede7['type']==_0x7d32e4[_0x5dced5(0x22a)]&&_0x59ede7['bin']==_0x7d32e4[_0x5dced5(0x232)]&&_0x59ede7['bay']==_0x7d32e4['bay']&&(_0x59ede7['product_stock']=parseInt(_0x59ede7['product_stock'])+parseInt(_0x7d32e4[_0x5dced5(0x21b)]));});}),console[_0x1cc75b(0x22e)](_0x1cc75b(0x22d),_0x3ff749),await _0x3ff749[_0x1cc75b(0x212)](),_0x4b190c[_0x1cc75b(0x26f)]=_0xf97d90,_0x4b190c['suppliers']=_0x1e9f33,_0x4b190c[_0x1cc75b(0x24d)]=_0x5a6a67,_0x4b190c[_0x1cc75b(0x24a)]=_0x305a0e,_0x4b190c[_0x1cc75b(0x250)]=_0x3dce0a,_0x4b190c[_0x1cc75b(0x243)]=_0x31fabc,_0x4b190c[_0x1cc75b(0x22b)]=_0x4de962,_0x4b190c[_0x1cc75b(0x209)]=_0x4ac2b4,_0x4b190c[_0x1cc75b(0x25d)]=_0x1b2641;const _0x14a8c9=await _0x4b190c[_0x1cc75b(0x212)](),_0x193924=await purchases_return['findOne']({'invoice':_0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x26f)]}),_0x4cd3ef=await warehouse[_0x1cc75b(0x221)]({'name':_0x39e438['body'][_0x1cc75b(0x209)],'room':_0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x211)]});_0x193924[_0x1cc75b(0x250)][_0x1cc75b(0x21a)](_0x1022f5=>{_0x4cd3ef['product_details']['map'](_0x277459=>{var _0x2cc907=a0_0x1dbe;_0x277459['product_name']==_0x1022f5['product_name']&&_0x277459[_0x2cc907(0x1f7)]==_0x1022f5['pallet']&&(_0x277459['product_stock']=parseInt(_0x277459[_0x2cc907(0x201)])-parseInt(_0x1022f5[_0x2cc907(0x21b)]),console[_0x2cc907(0x22e)](_0x2cc907(0x227),_0x1022f5['return_qty']));});}),console['log'](_0x1cc75b(0x222),_0x4cd3ef),await _0x4cd3ef[_0x1cc75b(0x212)]();const _0x526a85=await s_payment_data[_0x1cc75b(0x221)]({'invoice':_0x39e438[_0x1cc75b(0x245)][_0x1cc75b(0x26f)],'reason':_0x1cc75b(0x217)});await _0x526a85[_0x1cc75b(0x212)](),_0x39e438['flash'](_0x1cc75b(0x203),'purchase\x20return\x20successfully'),_0x256ab5['redirect'](_0x1cc75b(0x226));}catch(_0x13b272){console[_0x1cc75b(0x22e)](_0x13b272),_0x256ab5[_0x1cc75b(0x22f)](0xc8)[_0x1cc75b(0x20c)]({'message':_0x13b272[_0x1cc75b(0x20f)]});}}),router[a0_0x57b233(0x24c)]('/invoice/:id',auth,async(_0x48e7db,_0x455693)=>{var _0x306089=a0_0x57b233;try{const {username:_0xa6f4ba,email:_0x23ebac,role:_0x1f6b04}=_0x48e7db[_0x306089(0x213)],_0x151b00=_0x48e7db['user'],_0x118c42=await profile[_0x306089(0x221)]({'email':_0x151b00['email']}),_0x1160b0=await master_shop[_0x306089(0x267)]();console[_0x306089(0x22e)](_0x306089(0x208),_0x1160b0);const _0x540f64=_0x48e7db['params']['id'],_0x4ec751=await purchases_return[_0x306089(0x255)](_0x540f64);console['log'](_0x4ec751);const _0x48fce7=await suppliers[_0x306089(0x221)]({'name':_0x4ec751['suppliers']});console[_0x306089(0x22e)](_0x48fce7);if(_0x1160b0[0x0][_0x306089(0x1f3)]==_0x306089(0x206)){var _0x383af4=users[_0x306089(0x242)];console[_0x306089(0x22e)](_0x383af4);}else{if(_0x1160b0[0x0][_0x306089(0x1f3)]==_0x306089(0x220))var _0x383af4=users[_0x306089(0x220)];else{if(_0x1160b0[0x0]['language']==_0x306089(0x240))var _0x383af4=users[_0x306089(0x240)];else{if(_0x1160b0[0x0][_0x306089(0x1f3)]==_0x306089(0x216))var _0x383af4=users['Spanish'];else{if(_0x1160b0[0x0][_0x306089(0x1f3)]==_0x306089(0x23f))var _0x383af4=users[_0x306089(0x23f)];else{if(_0x1160b0[0x0][_0x306089(0x1f3)]==_0x306089(0x20d))var _0x383af4=users['Portuguese'];else{if(_0x1160b0[0x0][_0x306089(0x1f3)]==_0x306089(0x263))var _0x383af4=users[_0x306089(0x263)];else{if(_0x1160b0[0x0][_0x306089(0x1f3)]==_0x306089(0x25e))var _0x383af4=users[_0x306089(0x1fa)];}}}}}}}_0x455693['render']('return_purchase_invoice',{'success':_0x48e7db[_0x306089(0x218)](_0x306089(0x203)),'errors':_0x48e7db['flash']('errors'),'role':_0x151b00,'profile':_0x118c42,'master_shop':_0x1160b0,'supplier':_0x48fce7,'purchase':_0x4ec751,'language':_0x383af4});}catch(_0x5422af){console[_0x306089(0x22e)](_0x5422af);}}),router['post'](a0_0x57b233(0x21f),auth,async(_0x3826ad,_0x35ce15)=>{var _0x3d8654=a0_0x57b233;try{const _0x4859d2=_0x3826ad[_0x3d8654(0x239)]['id'],{invoice:_0x1716b7,suppliers:_0x29ee67,receivable_amount:_0x3348d4,received_amount:_0x2b7af6}=_0x3826ad[_0x3d8654(0x245)],_0x43686d=await purchases_return[_0x3d8654(0x255)](_0x4859d2);console['log'](_0x43686d);var _0x75089=_0x3348d4-_0x2b7af6;console[_0x3d8654(0x22e)](_0x2b7af6),_0x43686d[_0x3d8654(0x1f6)]=parseFloat(_0x2b7af6)+parseFloat(_0x43686d['received']),_0x43686d[_0x3d8654(0x228)]=_0x75089,console[_0x3d8654(0x22e)](_0x43686d);const _0x41e42b=await _0x43686d[_0x3d8654(0x212)](),_0x521b2b=await s_payment_data[_0x3d8654(0x221)]({'invoice':_0x3826ad[_0x3d8654(0x245)][_0x3d8654(0x26f)],'reason':_0x3d8654(0x217)});_0x521b2b['amount']=_0x75089,await _0x521b2b[_0x3d8654(0x212)]();let _0x355f17=new Date(),_0x2d164a=('0'+_0x355f17[_0x3d8654(0x270)]())['slice'](-0x2),_0x320d70=('0'+(_0x355f17['getMonth']()+0x1))['slice'](-0x2),_0x56fb63=_0x355f17[_0x3d8654(0x266)](),_0x917882=_0x56fb63+'-'+_0x320d70+'-'+_0x2d164a;const _0x3dca27=new suppliers_payment({'invoice':_0x1716b7,'date':_0x56fb63+'-'+_0x320d70+'-'+_0x2d164a,'suppliers':_0x29ee67,'reason':_0x3d8654(0x262),'amount':_0x2b7af6}),_0x479884=await _0x3dca27['save']();_0x3826ad[_0x3d8654(0x218)](_0x3d8654(0x203),_0x3d8654(0x210)),_0x35ce15[_0x3d8654(0x223)](_0x3d8654(0x226));}catch(_0x149ffc){console['log'](_0x149ffc);}}),module['exports']=router;