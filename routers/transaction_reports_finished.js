var a0_0xef55e0=a0_0x4cff;(function(_0x71915e,_0x40c947){var _0x4a29cf=a0_0x4cff,_0x386ad2=_0x71915e();while(!![]){try{var _0x31d83a=parseInt(_0x4a29cf(0x1dd))/0x1+-parseInt(_0x4a29cf(0x1f4))/0x2*(parseInt(_0x4a29cf(0x1e7))/0x3)+-parseInt(_0x4a29cf(0x1ef))/0x4*(-parseInt(_0x4a29cf(0x203))/0x5)+parseInt(_0x4a29cf(0x1f5))/0x6+parseInt(_0x4a29cf(0x1f1))/0x7+parseInt(_0x4a29cf(0x1e0))/0x8*(-parseInt(_0x4a29cf(0x1ed))/0x9)+-parseInt(_0x4a29cf(0x1e2))/0xa;if(_0x31d83a===_0x40c947)break;else _0x386ad2['push'](_0x386ad2['shift']());}catch(_0x10bac4){_0x386ad2['push'](_0x386ad2['shift']());}}}(a0_0x5c87,0x3bf56));function a0_0x5c87(){var _0x2cc3a8=['1739540JwyVZL','params','English\x20(US)','errors','flash','989865LjkzIH','$product','English','exports','Spanish','success','302220reSulG','find','8OKArBA','Arabic\x20(ae)','2402925mWOaTZ','/viewdata_tf_fg/:id','findById','2hUKFWC','471666YiZPyH','body','json','express','log','transaction_finished','user','Arabic','Chinese','aggregate','findOne','get','Portuguese','email','998960FCREtS','../models/all_models','render','$name','/viewdata_og_fg/:id','view_table','Hindi','Portuguese\x20(BR)','French','German','../public/language/languages.json','Finished\x20Goods','../middleware/auth','28769VFkVrl','Router','language','24WFUJKl','/viewdata_inc_fg/:id'];a0_0x5c87=function(){return _0x2cc3a8;};return a0_0x5c87();}function a0_0x4cff(_0x53ef33,_0x3355ef){var _0x5c8726=a0_0x5c87();return a0_0x4cff=function(_0x4cffd9,_0x4c8e06){_0x4cffd9=_0x4cffd9-0x1d1;var _0x36b311=_0x5c8726[_0x4cffd9];return _0x36b311;},a0_0x4cff(_0x53ef33,_0x3355ef);}const express=require(a0_0xef55e0(0x1f8)),app=express(),router=express[a0_0xef55e0(0x1de)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_finished,sales,sales_finished,sales_return,suppliers_payment,customer_payment,transfers,transfers_finished,email_settings,supervisor_settings,adjustment_finished}=require(a0_0xef55e0(0x1d1)),auth=require(a0_0xef55e0(0x1dc)),users=require(a0_0xef55e0(0x1da)),nodemailer=require('nodemailer');router['get']('/view',auth,async(_0x168c5c,_0x4885e7)=>{var _0x1d2d95=a0_0xef55e0;try{const {username:_0x11ab5f,email:_0x235caf,role:_0x2a48a7}=_0x168c5c[_0x1d2d95(0x1fb)],_0x23249c=_0x168c5c[_0x1d2d95(0x1fb)],_0x4608ae=await profile[_0x1d2d95(0x1ff)]({'email':_0x23249c[_0x1d2d95(0x202)]}),_0x4972ac=await master_shop[_0x1d2d95(0x1ee)](),_0x54c03e=await warehouse[_0x1d2d95(0x1fe)]([{'$match':{'status':'Enabled','warehouse_category':_0x1d2d95(0x1db)}},{'$group':{'_id':'$name','name':{'$first':_0x1d2d95(0x1d3)}}}]);if(_0x4972ac[0x0]['language']==_0x1d2d95(0x1e4))var _0x36f262=users['English'];else{if(_0x4972ac[0x0][_0x1d2d95(0x1df)]==_0x1d2d95(0x1d6))var _0x36f262=users[_0x1d2d95(0x1d6)];else{if(_0x4972ac[0x0]['language']==_0x1d2d95(0x1d9))var _0x36f262=users[_0x1d2d95(0x1d9)];else{if(_0x4972ac[0x0][_0x1d2d95(0x1df)]==_0x1d2d95(0x1eb))var _0x36f262=users['Spanish'];else{if(_0x4972ac[0x0][_0x1d2d95(0x1df)]==_0x1d2d95(0x1d8))var _0x36f262=users['French'];else{if(_0x4972ac[0x0][_0x1d2d95(0x1df)]==_0x1d2d95(0x1d7))var _0x36f262=users['Portuguese'];else{if(_0x4972ac[0x0][_0x1d2d95(0x1df)]==_0x1d2d95(0x1fd))var _0x36f262=users['Chinese'];else{if(_0x4972ac[0x0][_0x1d2d95(0x1df)]=='Arabic\x20(ae)')var _0x36f262=users[_0x1d2d95(0x1fc)];}}}}}}}_0x4885e7[_0x1d2d95(0x1d2)](_0x1d2d95(0x1fa),{'success':_0x168c5c['flash']('success'),'errors':_0x168c5c['flash'](_0x1d2d95(0x1e5)),'role':_0x23249c,'profile':_0x4608ae,'master_shop':_0x4972ac,'dataProcess':_0x54c03e,'language':_0x36f262});}catch(_0x3270ca){console[_0x1d2d95(0x1f9)](_0x3270ca);}}),router['post']('/reports',auth,async(_0x551709,_0x548fe8)=>{var _0x4b5506=a0_0xef55e0;const {product_category:_0x59c1dd,transaction_category:_0x21eb79,transaction_date_from:_0x37ec94,transaction_date_to:_0x5b60a7,warehouse_category:_0x283985}=_0x551709[_0x4b5506(0x1f6)];var _0x149f05;if(_0x59c1dd=='rm'){}else{if(_0x59c1dd=='fg')switch(_0x21eb79){case'IC':_0x149f05=await purchases_finished[_0x4b5506(0x1fe)]([{'$match':{'date':{'$gte':_0x37ec94,'$lte':_0x5b60a7}}},{'$unwind':_0x4b5506(0x1e8)},{'$match':{'product.product_code':'1000004071'}}]);break;case'OG':_0x149f05=await sales_finished[_0x4b5506(0x1ee)]({'warehouse':_0x283985,'date':{'$gte':_0x37ec94,'$lte':_0x5b60a7}});break;case'AJ':_0x149f05=await adjustment_finished['find']({'warehouse':_0x283985,'date':{'$gte':_0x37ec94,'$lte':_0x5b60a7}});break;case'TF':_0x149f05=await transfers_finished[_0x4b5506(0x1ee)]({'warehouse':_0x283985,'date':{'$gte':_0x37ec94,'$lte':_0x5b60a7}});break;}}_0x548fe8[_0x4b5506(0x1f7)]({'data':_0x149f05});}),router['get'](a0_0xef55e0(0x1e1),auth,async(_0x36ded4,_0x168470)=>{var _0x255f37=a0_0xef55e0;try{const _0x2cca69=_0x36ded4[_0x255f37(0x1e3)]['id'];var _0x10c14f=await purchases_finished[_0x255f37(0x1f3)](_0x2cca69);const _0x59ba5a=await master_shop[_0x255f37(0x1ee)](),_0x450d69=_0x36ded4[_0x255f37(0x1fb)],_0x5d5ae8=await profile[_0x255f37(0x1ff)]({'email':_0x450d69['email']});if(_0x59ba5a[0x0][_0x255f37(0x1df)]=='English\x20(US)')var _0x277141=users[_0x255f37(0x1e9)];else{if(_0x59ba5a[0x0][_0x255f37(0x1df)]==_0x255f37(0x1d6))var _0x277141=users[_0x255f37(0x1d6)];else{if(_0x59ba5a[0x0][_0x255f37(0x1df)]==_0x255f37(0x1d9))var _0x277141=users[_0x255f37(0x1d9)];else{if(_0x59ba5a[0x0][_0x255f37(0x1df)]==_0x255f37(0x1eb))var _0x277141=users[_0x255f37(0x1eb)];else{if(_0x59ba5a[0x0][_0x255f37(0x1df)]==_0x255f37(0x1d8))var _0x277141=users['French'];else{if(_0x59ba5a[0x0][_0x255f37(0x1df)]==_0x255f37(0x1d7))var _0x277141=users[_0x255f37(0x201)];else{if(_0x59ba5a[0x0][_0x255f37(0x1df)]==_0x255f37(0x1fd))var _0x277141=users[_0x255f37(0x1fd)];else{if(_0x59ba5a[0x0][_0x255f37(0x1df)]==_0x255f37(0x1f0))var _0x277141=users['Arabic'];}}}}}}}_0x168470[_0x255f37(0x1d2)](_0x255f37(0x1d5),{'success':_0x36ded4[_0x255f37(0x1e6)](_0x255f37(0x1ec)),'errors':_0x36ded4[_0x255f37(0x1e6)](_0x255f37(0x1e5)),'master_shop':_0x59ba5a,'profile':_0x5d5ae8,'role':_0x450d69,'language':_0x277141,'data':_0x10c14f});}catch(_0x4b09ec){_0x168470[_0x255f37(0x1f7)](_0x4b09ec);}}),router[a0_0xef55e0(0x200)](a0_0xef55e0(0x1d4),auth,async(_0x31f2ee,_0x499aaa)=>{var _0x481b71=a0_0xef55e0;try{const _0x182ab6=_0x31f2ee[_0x481b71(0x1e3)]['id'];var _0x225423=await sales_finished[_0x481b71(0x1f3)](_0x182ab6);const _0x374188=await master_shop['find'](),_0x21bbf9=_0x31f2ee['user'],_0x122781=await profile[_0x481b71(0x1ff)]({'email':_0x21bbf9[_0x481b71(0x202)]});if(_0x374188[0x0]['language']=='English\x20(US)')var _0x340463=users['English'];else{if(_0x374188[0x0][_0x481b71(0x1df)]==_0x481b71(0x1d6))var _0x340463=users['Hindi'];else{if(_0x374188[0x0][_0x481b71(0x1df)]==_0x481b71(0x1d9))var _0x340463=users['German'];else{if(_0x374188[0x0][_0x481b71(0x1df)]=='Spanish')var _0x340463=users[_0x481b71(0x1eb)];else{if(_0x374188[0x0][_0x481b71(0x1df)]==_0x481b71(0x1d8))var _0x340463=users[_0x481b71(0x1d8)];else{if(_0x374188[0x0]['language']==_0x481b71(0x1d7))var _0x340463=users[_0x481b71(0x201)];else{if(_0x374188[0x0][_0x481b71(0x1df)]==_0x481b71(0x1fd))var _0x340463=users[_0x481b71(0x1fd)];else{if(_0x374188[0x0][_0x481b71(0x1df)]=='Arabic\x20(ae)')var _0x340463=users['Arabic'];}}}}}}}_0x499aaa[_0x481b71(0x1d2)]('view_og_table',{'success':_0x31f2ee[_0x481b71(0x1e6)](_0x481b71(0x1ec)),'errors':_0x31f2ee[_0x481b71(0x1e6)]('errors'),'master_shop':_0x374188,'profile':_0x122781,'role':_0x21bbf9,'language':_0x340463,'data':_0x225423});}catch(_0x3a442b){_0x499aaa[_0x481b71(0x1f7)](_0x3a442b);}}),router['get'](a0_0xef55e0(0x1f2),auth,async(_0x50f37b,_0x24198b)=>{var _0x301232=a0_0xef55e0;try{const _0x447e17=_0x50f37b[_0x301232(0x1e3)]['id'];var _0xfb41ab=await transfers_finished['findById'](_0x447e17);const _0x4bf3df=await master_shop[_0x301232(0x1ee)](),_0x1e0812=_0x50f37b[_0x301232(0x1fb)],_0x5bb8ce=await profile[_0x301232(0x1ff)]({'email':_0x1e0812[_0x301232(0x202)]});if(_0x4bf3df[0x0][_0x301232(0x1df)]=='English\x20(US)')var _0x176af8=users[_0x301232(0x1e9)];else{if(_0x4bf3df[0x0][_0x301232(0x1df)]=='Hindi')var _0x176af8=users['Hindi'];else{if(_0x4bf3df[0x0][_0x301232(0x1df)]==_0x301232(0x1d9))var _0x176af8=users[_0x301232(0x1d9)];else{if(_0x4bf3df[0x0][_0x301232(0x1df)]=='Spanish')var _0x176af8=users['Spanish'];else{if(_0x4bf3df[0x0][_0x301232(0x1df)]==_0x301232(0x1d8))var _0x176af8=users['French'];else{if(_0x4bf3df[0x0][_0x301232(0x1df)]==_0x301232(0x1d7))var _0x176af8=users[_0x301232(0x201)];else{if(_0x4bf3df[0x0][_0x301232(0x1df)]==_0x301232(0x1fd))var _0x176af8=users[_0x301232(0x1fd)];else{if(_0x4bf3df[0x0][_0x301232(0x1df)]=='Arabic\x20(ae)')var _0x176af8=users[_0x301232(0x1fc)];}}}}}}}_0x24198b[_0x301232(0x1d2)]('view_tf_table',{'success':_0x50f37b[_0x301232(0x1e6)](_0x301232(0x1ec)),'errors':_0x50f37b[_0x301232(0x1e6)]('errors'),'master_shop':_0x4bf3df,'profile':_0x5bb8ce,'role':_0x1e0812,'language':_0x176af8,'data':_0xfb41ab});}catch(_0x26b8e0){_0x24198b[_0x301232(0x1f7)](_0x26b8e0);}}),module[a0_0xef55e0(0x1ea)]=router;