var a0_0x2a8b85=a0_0x51f2;function a0_0x51f2(_0x1530a8,_0x1e9b7e){var _0x4dce65=a0_0x4dce();return a0_0x51f2=function(_0x51f29f,_0x560a6a){_0x51f29f=_0x51f29f-0x154;var _0x16b5b5=_0x4dce65[_0x51f29f];return _0x16b5b5;},a0_0x51f2(_0x1530a8,_0x1e9b7e);}function a0_0x4dce(){var _0x7b2636=['view_og_table','Chinese','889752iKsucA','$product','exports','German','8GjceAt','4730830frQZix','1270218HwGQZx','/viewdata_inc_fg/:id','errors','$sale_product','render','../public/language/languages.json','Arabic\x20(ae)','/viewdata_tf_fg/:id','$name','Finished\x20Goods','success','findOne','English','/viewdata_og_fg/:id','json','1rLfumC','Router','findById','log','email','../models/all_models','Enabled','length','$warehouse_name','Portuguese\x20(BR)','Spanish','find','288076RWfInh','params','French','flash','English\x20(US)','aggregate','/view','$date','20yPJBDt','language','631158IWUyVZ','view_table','2820580llEaWR','Hindi','get','view_tf_table','nodemailer','1072323QwDoQY','post','Portuguese','express','user','$invoice','Arabic'];a0_0x4dce=function(){return _0x7b2636;};return a0_0x4dce();}(function(_0x391a2c,_0x5318b0){var _0x341cdb=a0_0x51f2,_0x3112dc=_0x391a2c();while(!![]){try{var _0x51baa5=parseInt(_0x341cdb(0x15d))/0x1*(parseInt(_0x341cdb(0x183))/0x2)+-parseInt(_0x341cdb(0x189))/0x3+-parseInt(_0x341cdb(0x169))/0x4*(-parseInt(_0x341cdb(0x171))/0x5)+-parseInt(_0x341cdb(0x173))/0x6+parseInt(_0x341cdb(0x175))/0x7+-parseInt(_0x341cdb(0x187))/0x8*(-parseInt(_0x341cdb(0x17a))/0x9)+-parseInt(_0x341cdb(0x188))/0xa;if(_0x51baa5===_0x5318b0)break;else _0x3112dc['push'](_0x3112dc['shift']());}catch(_0x158edd){_0x3112dc['push'](_0x3112dc['shift']());}}}(a0_0x4dce,0x3ddad));const express=require(a0_0x2a8b85(0x17d)),app=express(),router=express[a0_0x2a8b85(0x15e)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_finished,sales,sales_finished,sales_return,suppliers_payment,customer_payment,transfers,transfers_finished,email_settings,supervisor_settings,adjustment_finished}=require(a0_0x2a8b85(0x162)),auth=require('../middleware/auth'),users=require(a0_0x2a8b85(0x18e)),nodemailer=require(a0_0x2a8b85(0x179));router[a0_0x2a8b85(0x177)](a0_0x2a8b85(0x16f),auth,async(_0x1f7c6f,_0x4e4350)=>{var _0x479cd7=a0_0x2a8b85;try{const {username:_0xe51749,email:_0x535db5,role:_0x174969}=_0x1f7c6f[_0x479cd7(0x17e)],_0x492b8f=_0x1f7c6f[_0x479cd7(0x17e)],_0x582fdb=await profile[_0x479cd7(0x159)]({'email':_0x492b8f[_0x479cd7(0x161)]}),_0x1f0690=await master_shop[_0x479cd7(0x168)](),_0x58bb03=await warehouse['aggregate']([{'$match':{'status':_0x479cd7(0x163),'warehouse_category':_0x479cd7(0x157)}},{'$group':{'_id':'$name','name':{'$first':_0x479cd7(0x156)}}}]);if(_0x1f0690[0x0][_0x479cd7(0x172)]=='English\x20(US)')var _0x31ec9b=users[_0x479cd7(0x15a)];else{if(_0x1f0690[0x0]['language']==_0x479cd7(0x176))var _0x31ec9b=users[_0x479cd7(0x176)];else{if(_0x1f0690[0x0]['language']==_0x479cd7(0x186))var _0x31ec9b=users[_0x479cd7(0x186)];else{if(_0x1f0690[0x0][_0x479cd7(0x172)]==_0x479cd7(0x167))var _0x31ec9b=users[_0x479cd7(0x167)];else{if(_0x1f0690[0x0][_0x479cd7(0x172)]==_0x479cd7(0x16b))var _0x31ec9b=users[_0x479cd7(0x16b)];else{if(_0x1f0690[0x0]['language']==_0x479cd7(0x166))var _0x31ec9b=users[_0x479cd7(0x17c)];else{if(_0x1f0690[0x0]['language']=='Chinese')var _0x31ec9b=users[_0x479cd7(0x182)];else{if(_0x1f0690[0x0][_0x479cd7(0x172)]==_0x479cd7(0x154))var _0x31ec9b=users[_0x479cd7(0x180)];}}}}}}}_0x4e4350[_0x479cd7(0x18d)]('transaction_finished',{'success':_0x1f7c6f[_0x479cd7(0x16c)](_0x479cd7(0x158)),'errors':_0x1f7c6f[_0x479cd7(0x16c)](_0x479cd7(0x18b)),'role':_0x492b8f,'profile':_0x582fdb,'master_shop':_0x1f0690,'dataProcess':_0x58bb03,'language':_0x31ec9b});}catch(_0x551500){console[_0x479cd7(0x160)](_0x551500);}}),router[a0_0x2a8b85(0x17b)]('/reports',auth,async(_0x331cb2,_0x429e37)=>{var _0x2ff219=a0_0x2a8b85;const {product_category:_0xd6ea68,transaction_category:_0x40f892,transaction_date_from:_0x1ef2fa,transaction_date_to:_0x4fe1c9,warehouse_category:_0xe8d08a,item_code:_0x1572dc}=_0x331cb2['body'];var _0x6deefe;if(_0xd6ea68=='rm'){}else{if(_0xd6ea68=='fg')switch(_0x40f892){case'IC':_0x1572dc[_0x2ff219(0x164)]>0x0?_0x6deefe=await purchases_finished[_0x2ff219(0x16e)]([{'$match':{'warehouse_name':_0xe8d08a,'date':{'$gte':_0x1ef2fa,'$lte':_0x4fe1c9}}},{'$unwind':_0x2ff219(0x184)},{'$match':{'$or':[{'product.product_code':_0x1572dc}]}},{'$group':{'_id':_0x2ff219(0x17f),'date':{'$first':_0x2ff219(0x170)},'warehouse_name':{'$first':_0x2ff219(0x165)},'products':{'$push':_0x2ff219(0x184)}}}]):_0x6deefe=await purchases_finished['aggregate']([{'$match':{'warehouse_name':_0xe8d08a,'date':{'$gte':_0x1ef2fa,'$lte':_0x4fe1c9}}},{'$unwind':_0x2ff219(0x184)},{'$group':{'_id':_0x2ff219(0x17f),'date':{'$first':_0x2ff219(0x170)},'warehouse_name':{'$first':'$warehouse_name'},'products':{'$push':'$product'}}}]);break;case'OG':_0x1572dc['length']>0x0?_0x6deefe=await sales_finished['aggregate']([{'$match':{'warehouse_name':_0xe8d08a,'date':{'$gte':_0x1ef2fa,'$lte':_0x4fe1c9}}},{'$unwind':'$sale_product'},{'$match':{'$or':[{'sale_product.product_code':_0x1572dc}]}},{'$group':{'_id':_0x2ff219(0x17f),'date':{'$first':_0x2ff219(0x170)},'warehouse_name':{'$first':_0x2ff219(0x165)},'products':{'$push':_0x2ff219(0x18c)}}}]):_0x6deefe=await sales_finished[_0x2ff219(0x16e)]([{'$match':{'warehouse_name':_0xe8d08a,'date':{'$gte':_0x1ef2fa,'$lte':_0x4fe1c9}}},{'$unwind':_0x2ff219(0x18c)},{'$group':{'_id':_0x2ff219(0x17f),'date':{'$first':_0x2ff219(0x170)},'warehouse_name':{'$first':_0x2ff219(0x165)},'products':{'$push':_0x2ff219(0x18c)}}}]);break;case'AJ':break;case'TF':_0x6deefe=await transfers_finished[_0x2ff219(0x168)]({'warehouse':_0xe8d08a,'date':{'$gte':_0x1ef2fa,'$lte':_0x4fe1c9}});break;}}_0x429e37[_0x2ff219(0x15c)]({'data':_0x6deefe});}),router[a0_0x2a8b85(0x177)](a0_0x2a8b85(0x18a),auth,async(_0x2b6432,_0x5540c6)=>{var _0x5eb9ef=a0_0x2a8b85;try{const _0x6f9dde=_0x2b6432['params']['id'];var _0x4add75=await purchases_finished[_0x5eb9ef(0x15f)](_0x6f9dde);const _0x499e1a=await master_shop[_0x5eb9ef(0x168)](),_0x44ccae=_0x2b6432['user'],_0x5bd94e=await profile[_0x5eb9ef(0x159)]({'email':_0x44ccae[_0x5eb9ef(0x161)]});if(_0x499e1a[0x0][_0x5eb9ef(0x172)]=='English\x20(US)')var _0x4ef4f3=users[_0x5eb9ef(0x15a)];else{if(_0x499e1a[0x0]['language']==_0x5eb9ef(0x176))var _0x4ef4f3=users[_0x5eb9ef(0x176)];else{if(_0x499e1a[0x0][_0x5eb9ef(0x172)]==_0x5eb9ef(0x186))var _0x4ef4f3=users[_0x5eb9ef(0x186)];else{if(_0x499e1a[0x0]['language']=='Spanish')var _0x4ef4f3=users['Spanish'];else{if(_0x499e1a[0x0][_0x5eb9ef(0x172)]==_0x5eb9ef(0x16b))var _0x4ef4f3=users['French'];else{if(_0x499e1a[0x0]['language']==_0x5eb9ef(0x166))var _0x4ef4f3=users[_0x5eb9ef(0x17c)];else{if(_0x499e1a[0x0][_0x5eb9ef(0x172)]==_0x5eb9ef(0x182))var _0x4ef4f3=users['Chinese'];else{if(_0x499e1a[0x0][_0x5eb9ef(0x172)]=='Arabic\x20(ae)')var _0x4ef4f3=users[_0x5eb9ef(0x180)];}}}}}}}_0x5540c6[_0x5eb9ef(0x18d)](_0x5eb9ef(0x174),{'success':_0x2b6432['flash'](_0x5eb9ef(0x158)),'errors':_0x2b6432['flash'](_0x5eb9ef(0x18b)),'master_shop':_0x499e1a,'profile':_0x5bd94e,'role':_0x44ccae,'language':_0x4ef4f3,'data':_0x4add75});}catch(_0x2e5491){_0x5540c6['json'](_0x2e5491);}}),router['get'](a0_0x2a8b85(0x15b),auth,async(_0x3c8e2d,_0x498305)=>{var _0x19dcf5=a0_0x2a8b85;try{const _0x74b7e0=_0x3c8e2d[_0x19dcf5(0x16a)]['id'];var _0x52b94f=await sales_finished[_0x19dcf5(0x15f)](_0x74b7e0);const _0x3f363c=await master_shop[_0x19dcf5(0x168)](),_0xd33275=_0x3c8e2d[_0x19dcf5(0x17e)],_0x130181=await profile[_0x19dcf5(0x159)]({'email':_0xd33275[_0x19dcf5(0x161)]});if(_0x3f363c[0x0][_0x19dcf5(0x172)]==_0x19dcf5(0x16d))var _0x10f4f2=users[_0x19dcf5(0x15a)];else{if(_0x3f363c[0x0][_0x19dcf5(0x172)]==_0x19dcf5(0x176))var _0x10f4f2=users['Hindi'];else{if(_0x3f363c[0x0][_0x19dcf5(0x172)]==_0x19dcf5(0x186))var _0x10f4f2=users[_0x19dcf5(0x186)];else{if(_0x3f363c[0x0][_0x19dcf5(0x172)]=='Spanish')var _0x10f4f2=users[_0x19dcf5(0x167)];else{if(_0x3f363c[0x0][_0x19dcf5(0x172)]==_0x19dcf5(0x16b))var _0x10f4f2=users[_0x19dcf5(0x16b)];else{if(_0x3f363c[0x0][_0x19dcf5(0x172)]==_0x19dcf5(0x166))var _0x10f4f2=users[_0x19dcf5(0x17c)];else{if(_0x3f363c[0x0]['language']==_0x19dcf5(0x182))var _0x10f4f2=users['Chinese'];else{if(_0x3f363c[0x0][_0x19dcf5(0x172)]==_0x19dcf5(0x154))var _0x10f4f2=users[_0x19dcf5(0x180)];}}}}}}}_0x498305[_0x19dcf5(0x18d)](_0x19dcf5(0x181),{'success':_0x3c8e2d[_0x19dcf5(0x16c)]('success'),'errors':_0x3c8e2d['flash'](_0x19dcf5(0x18b)),'master_shop':_0x3f363c,'profile':_0x130181,'role':_0xd33275,'language':_0x10f4f2,'data':_0x52b94f});}catch(_0x3f3875){_0x498305[_0x19dcf5(0x15c)](_0x3f3875);}}),router[a0_0x2a8b85(0x177)](a0_0x2a8b85(0x155),auth,async(_0x2accae,_0xaf29f4)=>{var _0x3ec20b=a0_0x2a8b85;try{const _0x4fea90=_0x2accae[_0x3ec20b(0x16a)]['id'];var _0x1edf0d=await transfers_finished[_0x3ec20b(0x15f)](_0x4fea90);const _0x9bc978=await master_shop[_0x3ec20b(0x168)](),_0x23ddb5=_0x2accae[_0x3ec20b(0x17e)],_0x4688ff=await profile[_0x3ec20b(0x159)]({'email':_0x23ddb5[_0x3ec20b(0x161)]});if(_0x9bc978[0x0][_0x3ec20b(0x172)]==_0x3ec20b(0x16d))var _0x57be19=users[_0x3ec20b(0x15a)];else{if(_0x9bc978[0x0]['language']=='Hindi')var _0x57be19=users[_0x3ec20b(0x176)];else{if(_0x9bc978[0x0][_0x3ec20b(0x172)]=='German')var _0x57be19=users[_0x3ec20b(0x186)];else{if(_0x9bc978[0x0][_0x3ec20b(0x172)]==_0x3ec20b(0x167))var _0x57be19=users[_0x3ec20b(0x167)];else{if(_0x9bc978[0x0]['language']=='French')var _0x57be19=users['French'];else{if(_0x9bc978[0x0][_0x3ec20b(0x172)]==_0x3ec20b(0x166))var _0x57be19=users[_0x3ec20b(0x17c)];else{if(_0x9bc978[0x0][_0x3ec20b(0x172)]==_0x3ec20b(0x182))var _0x57be19=users['Chinese'];else{if(_0x9bc978[0x0][_0x3ec20b(0x172)]==_0x3ec20b(0x154))var _0x57be19=users['Arabic'];}}}}}}}_0xaf29f4[_0x3ec20b(0x18d)](_0x3ec20b(0x178),{'success':_0x2accae['flash'](_0x3ec20b(0x158)),'errors':_0x2accae[_0x3ec20b(0x16c)](_0x3ec20b(0x18b)),'master_shop':_0x9bc978,'profile':_0x4688ff,'role':_0x23ddb5,'language':_0x57be19,'data':_0x1edf0d});}catch(_0x1359a6){_0xaf29f4['json'](_0x1359a6);}}),module[a0_0x2a8b85(0x185)]=router;