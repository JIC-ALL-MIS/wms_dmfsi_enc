var a0_0x5b6aea=a0_0x5bbd;function a0_0x4057(){var _0x2b75d1=['transaction_finished','36370cdZUnJ','Finished\x20Goods','$sale_product','user','errors','11TwMUSy','view_og_table','/viewdata_inc_fg/:id','email','nodemailer','findById','aggregate','216776ImfLZy','4378GxNXph','Spanish','9503340AFRoEG','../middleware/auth','find','/viewdata_tf_fg/:id','Arabic\x20(ae)','Portuguese','German','log','English','56afXAWM','366QOZuxg','Arabic','$product','length','../models/all_models','json','findOne','language','view_table','$date','params','Portuguese\x20(BR)','Enabled','body','105cUiErp','$warehouse_name','render','success','flash','83139irUqzj','view_tf_table','../public/language/languages.json','English\x20(US)','get','1756670YbmXID','$name','31LhuWrj','Hindi','Chinese','4033323FXDiQG','$invoice','French','/viewdata_og_fg/:id'];a0_0x4057=function(){return _0x2b75d1;};return a0_0x4057();}(function(_0xc9051e,_0x458408){var _0x476934=a0_0x5bbd,_0x2d6146=_0xc9051e();while(!![]){try{var _0x58f005=parseInt(_0x476934(0x1f4))/0x1*(parseInt(_0x476934(0x209))/0x2)+parseInt(_0x476934(0x1ed))/0x3*(-parseInt(_0x476934(0x214))/0x4)+-parseInt(_0x476934(0x1fc))/0x5*(parseInt(_0x476934(0x215))/0x6)+-parseInt(_0x476934(0x223))/0x7*(parseInt(_0x476934(0x208))/0x8)+parseInt(_0x476934(0x1f7))/0x9+-parseInt(_0x476934(0x1f2))/0xa*(-parseInt(_0x476934(0x201))/0xb)+parseInt(_0x476934(0x20b))/0xc;if(_0x58f005===_0x458408)break;else _0x2d6146['push'](_0x2d6146['shift']());}catch(_0x48e3b6){_0x2d6146['push'](_0x2d6146['shift']());}}}(a0_0x4057,0x3bedb));const express=require('express'),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_finished,sales,sales_finished,sales_return,suppliers_payment,customer_payment,transfers,transfers_finished,email_settings,supervisor_settings,adjustment_finished}=require(a0_0x5b6aea(0x219)),auth=require(a0_0x5b6aea(0x20c)),users=require(a0_0x5b6aea(0x1ef)),nodemailer=require(a0_0x5b6aea(0x205));function a0_0x5bbd(_0x1951f6,_0x39147f){var _0x4057fc=a0_0x4057();return a0_0x5bbd=function(_0x5bbd27,_0x570b26){_0x5bbd27=_0x5bbd27-0x1ed;var _0xd3698=_0x4057fc[_0x5bbd27];return _0xd3698;},a0_0x5bbd(_0x1951f6,_0x39147f);}router[a0_0x5b6aea(0x1f1)]('/view',auth,async(_0xb7f054,_0x18a5e4)=>{var _0x146b82=a0_0x5b6aea;try{const {username:_0x27f863,email:_0x3658bb,role:_0x36a7d5}=_0xb7f054[_0x146b82(0x1ff)],_0xdb1a41=_0xb7f054[_0x146b82(0x1ff)],_0x14966d=await profile['findOne']({'email':_0xdb1a41[_0x146b82(0x204)]}),_0x421610=await master_shop[_0x146b82(0x20d)](),_0x5e9e52=await warehouse[_0x146b82(0x207)]([{'$match':{'status':_0x146b82(0x221),'warehouse_category':_0x146b82(0x1fd)}},{'$group':{'_id':_0x146b82(0x1f3),'name':{'$first':_0x146b82(0x1f3)}}}]);if(_0x421610[0x0][_0x146b82(0x21c)]==_0x146b82(0x1f0))var _0x6e4458=users[_0x146b82(0x213)];else{if(_0x421610[0x0][_0x146b82(0x21c)]==_0x146b82(0x1f5))var _0x6e4458=users[_0x146b82(0x1f5)];else{if(_0x421610[0x0]['language']==_0x146b82(0x211))var _0x6e4458=users['German'];else{if(_0x421610[0x0]['language']=='Spanish')var _0x6e4458=users['Spanish'];else{if(_0x421610[0x0]['language']==_0x146b82(0x1f9))var _0x6e4458=users['French'];else{if(_0x421610[0x0][_0x146b82(0x21c)]==_0x146b82(0x220))var _0x6e4458=users['Portuguese'];else{if(_0x421610[0x0][_0x146b82(0x21c)]==_0x146b82(0x1f6))var _0x6e4458=users[_0x146b82(0x1f6)];else{if(_0x421610[0x0][_0x146b82(0x21c)]==_0x146b82(0x20f))var _0x6e4458=users['Arabic'];}}}}}}}_0x18a5e4[_0x146b82(0x225)](_0x146b82(0x1fb),{'success':_0xb7f054[_0x146b82(0x227)](_0x146b82(0x226)),'errors':_0xb7f054[_0x146b82(0x227)](_0x146b82(0x200)),'role':_0xdb1a41,'profile':_0x14966d,'master_shop':_0x421610,'dataProcess':_0x5e9e52,'language':_0x6e4458});}catch(_0x32e591){console[_0x146b82(0x212)](_0x32e591);}}),router['post']('/reports',auth,async(_0x3735b2,_0xf937da)=>{var _0x158c20=a0_0x5b6aea;const {product_category:_0x524985,transaction_category:_0x5f1a39,transaction_date_from:_0x34ccda,transaction_date_to:_0x3b7f0e,warehouse_category:_0x5e0f15,item_code:_0x4dc7fb}=_0x3735b2[_0x158c20(0x222)];var _0x23756a;if(_0x524985=='rm'){}else{if(_0x524985=='fg')switch(_0x5f1a39){case'IC':_0x4dc7fb[_0x158c20(0x218)]>0x0?_0x23756a=await purchases_finished['aggregate']([{'$match':{'warehouse_name':_0x5e0f15,'date':{'$gte':_0x34ccda,'$lte':_0x3b7f0e}}},{'$unwind':'$product'},{'$match':{'$or':[{'product.product_code':_0x4dc7fb}]}},{'$group':{'_id':_0x158c20(0x1f8),'date':{'$first':'$date'},'warehouse_name':{'$first':_0x158c20(0x224)},'products':{'$push':_0x158c20(0x217)}}}]):_0x23756a=await purchases_finished[_0x158c20(0x207)]([{'$match':{'warehouse_name':_0x5e0f15,'date':{'$gte':_0x34ccda,'$lte':_0x3b7f0e}}},{'$unwind':_0x158c20(0x217)},{'$group':{'_id':_0x158c20(0x1f8),'date':{'$first':_0x158c20(0x21e)},'warehouse_name':{'$first':_0x158c20(0x224)},'products':{'$push':'$product'}}}]);break;case'OG':_0x4dc7fb[_0x158c20(0x218)]>0x0?_0x23756a=await sales_finished[_0x158c20(0x207)]([{'$match':{'warehouse_name':_0x5e0f15,'date':{'$gte':_0x34ccda,'$lte':_0x3b7f0e}}},{'$unwind':_0x158c20(0x1fe)},{'$match':{'$or':[{'sale_product.product_code':_0x4dc7fb}]}},{'$group':{'_id':_0x158c20(0x1f8),'date':{'$first':_0x158c20(0x21e)},'warehouse_name':{'$first':_0x158c20(0x224)},'products':{'$push':_0x158c20(0x1fe)}}}]):_0x23756a=await sales_finished['aggregate']([{'$match':{'warehouse_name':_0x5e0f15,'date':{'$gte':_0x34ccda,'$lte':_0x3b7f0e}}},{'$unwind':'$sale_product'},{'$group':{'_id':_0x158c20(0x1f8),'date':{'$first':'$date'},'warehouse_name':{'$first':_0x158c20(0x224)},'products':{'$push':_0x158c20(0x1fe)}}}]);break;case'AJ':break;case'TF':_0x23756a=await transfers_finished[_0x158c20(0x20d)]({'warehouse':_0x5e0f15,'date':{'$gte':_0x34ccda,'$lte':_0x3b7f0e}});break;}}_0xf937da[_0x158c20(0x21a)]({'data':_0x23756a});}),router[a0_0x5b6aea(0x1f1)](a0_0x5b6aea(0x203),auth,async(_0x214c95,_0x3cf2f2)=>{var _0x571052=a0_0x5b6aea;try{const _0x594228=_0x214c95[_0x571052(0x21f)]['id'];var _0x3d466b=await purchases_finished[_0x571052(0x206)](_0x594228);const _0x3d07e4=await master_shop[_0x571052(0x20d)](),_0x265235=_0x214c95[_0x571052(0x1ff)],_0x5038ba=await profile[_0x571052(0x21b)]({'email':_0x265235[_0x571052(0x204)]});if(_0x3d07e4[0x0]['language']==_0x571052(0x1f0))var _0x5e088b=users[_0x571052(0x213)];else{if(_0x3d07e4[0x0][_0x571052(0x21c)]==_0x571052(0x1f5))var _0x5e088b=users['Hindi'];else{if(_0x3d07e4[0x0][_0x571052(0x21c)]==_0x571052(0x211))var _0x5e088b=users['German'];else{if(_0x3d07e4[0x0]['language']==_0x571052(0x20a))var _0x5e088b=users[_0x571052(0x20a)];else{if(_0x3d07e4[0x0][_0x571052(0x21c)]==_0x571052(0x1f9))var _0x5e088b=users['French'];else{if(_0x3d07e4[0x0]['language']=='Portuguese\x20(BR)')var _0x5e088b=users[_0x571052(0x210)];else{if(_0x3d07e4[0x0][_0x571052(0x21c)]==_0x571052(0x1f6))var _0x5e088b=users[_0x571052(0x1f6)];else{if(_0x3d07e4[0x0]['language']==_0x571052(0x20f))var _0x5e088b=users[_0x571052(0x216)];}}}}}}}_0x3cf2f2['render'](_0x571052(0x21d),{'success':_0x214c95[_0x571052(0x227)]('success'),'errors':_0x214c95[_0x571052(0x227)](_0x571052(0x200)),'master_shop':_0x3d07e4,'profile':_0x5038ba,'role':_0x265235,'language':_0x5e088b,'data':_0x3d466b});}catch(_0x41afbc){_0x3cf2f2['json'](_0x41afbc);}}),router[a0_0x5b6aea(0x1f1)](a0_0x5b6aea(0x1fa),auth,async(_0x327929,_0x320540)=>{var _0x5f304b=a0_0x5b6aea;try{const _0x4a3b87=_0x327929[_0x5f304b(0x21f)]['id'];var _0x30eb79=await sales_finished[_0x5f304b(0x206)](_0x4a3b87);const _0x26132c=await master_shop[_0x5f304b(0x20d)](),_0xea4043=_0x327929['user'],_0x2e9f93=await profile[_0x5f304b(0x21b)]({'email':_0xea4043[_0x5f304b(0x204)]});if(_0x26132c[0x0]['language']==_0x5f304b(0x1f0))var _0x29d21d=users[_0x5f304b(0x213)];else{if(_0x26132c[0x0][_0x5f304b(0x21c)]=='Hindi')var _0x29d21d=users[_0x5f304b(0x1f5)];else{if(_0x26132c[0x0][_0x5f304b(0x21c)]=='German')var _0x29d21d=users[_0x5f304b(0x211)];else{if(_0x26132c[0x0]['language']==_0x5f304b(0x20a))var _0x29d21d=users[_0x5f304b(0x20a)];else{if(_0x26132c[0x0][_0x5f304b(0x21c)]==_0x5f304b(0x1f9))var _0x29d21d=users['French'];else{if(_0x26132c[0x0]['language']==_0x5f304b(0x220))var _0x29d21d=users[_0x5f304b(0x210)];else{if(_0x26132c[0x0][_0x5f304b(0x21c)]==_0x5f304b(0x1f6))var _0x29d21d=users['Chinese'];else{if(_0x26132c[0x0][_0x5f304b(0x21c)]==_0x5f304b(0x20f))var _0x29d21d=users[_0x5f304b(0x216)];}}}}}}}_0x320540[_0x5f304b(0x225)](_0x5f304b(0x202),{'success':_0x327929[_0x5f304b(0x227)](_0x5f304b(0x226)),'errors':_0x327929['flash']('errors'),'master_shop':_0x26132c,'profile':_0x2e9f93,'role':_0xea4043,'language':_0x29d21d,'data':_0x30eb79});}catch(_0x206509){_0x320540['json'](_0x206509);}}),router[a0_0x5b6aea(0x1f1)](a0_0x5b6aea(0x20e),auth,async(_0xb5f25d,_0xfeb95c)=>{var _0x5dc24b=a0_0x5b6aea;try{const _0x1594c0=_0xb5f25d['params']['id'];var _0x18a3aa=await transfers_finished['findById'](_0x1594c0);const _0x358bbc=await master_shop[_0x5dc24b(0x20d)](),_0x5de9d5=_0xb5f25d[_0x5dc24b(0x1ff)],_0x541d93=await profile[_0x5dc24b(0x21b)]({'email':_0x5de9d5[_0x5dc24b(0x204)]});if(_0x358bbc[0x0][_0x5dc24b(0x21c)]=='English\x20(US)')var _0x461888=users['English'];else{if(_0x358bbc[0x0]['language']==_0x5dc24b(0x1f5))var _0x461888=users['Hindi'];else{if(_0x358bbc[0x0][_0x5dc24b(0x21c)]=='German')var _0x461888=users[_0x5dc24b(0x211)];else{if(_0x358bbc[0x0][_0x5dc24b(0x21c)]==_0x5dc24b(0x20a))var _0x461888=users[_0x5dc24b(0x20a)];else{if(_0x358bbc[0x0][_0x5dc24b(0x21c)]=='French')var _0x461888=users['French'];else{if(_0x358bbc[0x0][_0x5dc24b(0x21c)]==_0x5dc24b(0x220))var _0x461888=users['Portuguese'];else{if(_0x358bbc[0x0][_0x5dc24b(0x21c)]==_0x5dc24b(0x1f6))var _0x461888=users[_0x5dc24b(0x1f6)];else{if(_0x358bbc[0x0][_0x5dc24b(0x21c)]==_0x5dc24b(0x20f))var _0x461888=users[_0x5dc24b(0x216)];}}}}}}}_0xfeb95c['render'](_0x5dc24b(0x1ee),{'success':_0xb5f25d[_0x5dc24b(0x227)](_0x5dc24b(0x226)),'errors':_0xb5f25d[_0x5dc24b(0x227)](_0x5dc24b(0x200)),'master_shop':_0x358bbc,'profile':_0x541d93,'role':_0x5de9d5,'language':_0x461888,'data':_0x18a3aa});}catch(_0x308249){_0xfeb95c[_0x5dc24b(0x21a)](_0x308249);}}),module['exports']=router;