var a0_0x3acaa4=a0_0x344a;(function(_0x2eb351,_0x4f560a){var _0x3d36ab=a0_0x344a,_0x25199e=_0x2eb351();while(!![]){try{var _0x11416f=parseInt(_0x3d36ab(0x122))/0x1*(parseInt(_0x3d36ab(0x143))/0x2)+-parseInt(_0x3d36ab(0x136))/0x3*(parseInt(_0x3d36ab(0x155))/0x4)+parseInt(_0x3d36ab(0x130))/0x5*(-parseInt(_0x3d36ab(0x129))/0x6)+parseInt(_0x3d36ab(0x153))/0x7*(-parseInt(_0x3d36ab(0x145))/0x8)+-parseInt(_0x3d36ab(0x126))/0x9+-parseInt(_0x3d36ab(0x125))/0xa+-parseInt(_0x3d36ab(0x124))/0xb*(-parseInt(_0x3d36ab(0x141))/0xc);if(_0x11416f===_0x4f560a)break;else _0x25199e['push'](_0x25199e['shift']());}catch(_0x4b08b3){_0x25199e['push'](_0x25199e['shift']());}}}(a0_0x3694,0xec97e));const express=require(a0_0x3acaa4(0x12b)),app=express(),router=express[a0_0x3acaa4(0x11d)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases}=require(a0_0x3acaa4(0x132)),auth=require(a0_0x3acaa4(0x151)),users=require(a0_0x3acaa4(0x121));router['get'](a0_0x3acaa4(0x14b),auth,async(_0x50c21a,_0x417054)=>{var _0x2d00c1=a0_0x3acaa4;try{const _0x1e2bad=_0x50c21a[_0x2d00c1(0x15a)];console[_0x2d00c1(0x148)](_0x2d00c1(0x144),_0x50c21a[_0x2d00c1(0x15a)]);const _0x11c42d=await profile[_0x2d00c1(0x11f)]({'email':_0x1e2bad[_0x2d00c1(0x12c)]}),_0x11e643=await master_shop[_0x2d00c1(0x133)]();console[_0x2d00c1(0x148)](_0x2d00c1(0x149),_0x11e643);const _0x5afab2=await warehouse[_0x2d00c1(0x133)]({}),_0x4bcd7e=await product[_0x2d00c1(0x133)]({});if(_0x11e643[0x0]['language']==_0x2d00c1(0x15c)){var _0x246cf4=users[_0x2d00c1(0x14d)];console[_0x2d00c1(0x148)](_0x246cf4);}else{if(_0x11e643[0x0][_0x2d00c1(0x15d)]==_0x2d00c1(0x146))var _0x246cf4=users[_0x2d00c1(0x146)];else{if(_0x11e643[0x0][_0x2d00c1(0x15d)]=='German')var _0x246cf4=users[_0x2d00c1(0x154)];else{if(_0x11e643[0x0]['language']=='Spanish')var _0x246cf4=users['Spanish'];else{if(_0x11e643[0x0][_0x2d00c1(0x15d)]==_0x2d00c1(0x14a))var _0x246cf4=users[_0x2d00c1(0x14a)];else{if(_0x11e643[0x0][_0x2d00c1(0x15d)]==_0x2d00c1(0x11c))var _0x246cf4=users[_0x2d00c1(0x12a)];else{if(_0x11e643[0x0][_0x2d00c1(0x15d)]==_0x2d00c1(0x12e))var _0x246cf4=users[_0x2d00c1(0x12e)];else{if(_0x11e643[0x0][_0x2d00c1(0x15d)]==_0x2d00c1(0x120))var _0x246cf4=users[_0x2d00c1(0x12d)];}}}}}}}_0x417054['render'](_0x2d00c1(0x137),{'success':_0x50c21a[_0x2d00c1(0x156)](_0x2d00c1(0x128)),'errors':_0x50c21a[_0x2d00c1(0x156)](_0x2d00c1(0x157)),'role':_0x1e2bad,'profile':_0x11c42d,'master_shop':_0x11e643,'warehouse':_0x5afab2,'product':_0x4bcd7e,'warehouse_doc':[],'product_doc':[],'language':_0x246cf4});}catch(_0x3b70f5){console['log'](_0x3b70f5);}}),router[a0_0x3acaa4(0x13f)](a0_0x3acaa4(0x150),auth,async(_0x2db459,_0x11295f)=>{var _0x5b1c92=a0_0x3acaa4;try{const _0x11e6ed=await master_shop[_0x5b1c92(0x133)]();console['log'](_0x5b1c92(0x149),_0x11e6ed);if(_0x2db459[_0x5b1c92(0x13b)]['id']==_0x5b1c92(0x123)){const _0x142626=await warehouse[_0x5b1c92(0x133)]();console[_0x5b1c92(0x148)](_0x142626);if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]==_0x5b1c92(0x15c)){var _0x1bd0d1=users[_0x5b1c92(0x14d)];console[_0x5b1c92(0x148)](_0x1bd0d1);}else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]=='Hindi')var _0x1bd0d1=users[_0x5b1c92(0x146)];else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]=='German')var _0x1bd0d1=users[_0x5b1c92(0x154)];else{if(_0x11e6ed[0x0]['language']=='Spanish')var _0x1bd0d1=users['Spanish'];else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]==_0x5b1c92(0x14a))var _0x1bd0d1=users['French'];else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]==_0x5b1c92(0x11c))var _0x1bd0d1=users[_0x5b1c92(0x12a)];else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]==_0x5b1c92(0x12e))var _0x1bd0d1=users[_0x5b1c92(0x12e)];else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]=='Arabic\x20(ae)')var _0x1bd0d1=users['Arabic'];}}}}}}}_0x11295f['status'](0xc8)[_0x5b1c92(0x142)]({'data':_0x142626,'language':_0x1bd0d1['warehouse']});}else{const _0x399bbb=await product[_0x5b1c92(0x133)]();console[_0x5b1c92(0x148)](_0x5b1c92(0x12f),_0x399bbb);if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]==_0x5b1c92(0x15c)){var _0x1bd0d1=users[_0x5b1c92(0x14d)];console[_0x5b1c92(0x148)](_0x1bd0d1);}else{if(_0x11e6ed[0x0]['language']==_0x5b1c92(0x146))var _0x1bd0d1=users[_0x5b1c92(0x146)];else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]==_0x5b1c92(0x154))var _0x1bd0d1=users[_0x5b1c92(0x154)];else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]==_0x5b1c92(0x131))var _0x1bd0d1=users[_0x5b1c92(0x131)];else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]==_0x5b1c92(0x14a))var _0x1bd0d1=users[_0x5b1c92(0x14a)];else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]==_0x5b1c92(0x11c))var _0x1bd0d1=users[_0x5b1c92(0x12a)];else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]==_0x5b1c92(0x12e))var _0x1bd0d1=users[_0x5b1c92(0x12e)];else{if(_0x11e6ed[0x0][_0x5b1c92(0x15d)]=='Arabic\x20(ae)')var _0x1bd0d1=users[_0x5b1c92(0x12d)];}}}}}}}_0x11295f['status'](0xc8)[_0x5b1c92(0x142)]({'data':_0x399bbb,'language':_0x1bd0d1[_0x5b1c92(0x139)]});}}catch(_0x2bae74){console[_0x5b1c92(0x148)](_0x2bae74);}}),router[a0_0x3acaa4(0x13f)](a0_0x3acaa4(0x147),auth,async(_0x529d0d,_0xdea2ae)=>{var _0x419c8a=a0_0x3acaa4;try{const _0x3a7a9a=_0x529d0d[_0x419c8a(0x13b)]['id'];console['log'](_0x3a7a9a);const _0x2d2c79=await master_shop[_0x419c8a(0x133)]();console['log'](_0x419c8a(0x149),_0x2d2c79);const _0x3ad185=await warehouse[_0x419c8a(0x13a)]([{'$match':{'name':_0x3a7a9a}},{'$unwind':'$product_details'},{'$lookup':{'from':_0x419c8a(0x139),'localField':'product_details.product_name','foreignField':'name','as':_0x419c8a(0x15f)}},{'$unwind':'$product_docs'},{'$project':{'name':0x1,'product_name':'$product_details.product_name','product_stock':_0x419c8a(0x134),'category':_0x419c8a(0x135),'brand':'$product_docs.brand','sku':_0x419c8a(0x13c),'unit':_0x419c8a(0x15b),'rak':_0x419c8a(0x14f),'bin':'product_details.bin_name'}}]);console[_0x419c8a(0x148)](_0x3ad185);if(_0x2d2c79[0x0][_0x419c8a(0x15d)]==_0x419c8a(0x15c)){var _0x3ccae2=users['English'];console[_0x419c8a(0x148)](_0x3ccae2);}else{if(_0x2d2c79[0x0][_0x419c8a(0x15d)]==_0x419c8a(0x146))var _0x3ccae2=users[_0x419c8a(0x146)];else{if(_0x2d2c79[0x0][_0x419c8a(0x15d)]==_0x419c8a(0x154))var _0x3ccae2=users[_0x419c8a(0x154)];else{if(_0x2d2c79[0x0]['language']==_0x419c8a(0x131))var _0x3ccae2=users[_0x419c8a(0x131)];else{if(_0x2d2c79[0x0][_0x419c8a(0x15d)]=='French')var _0x3ccae2=users[_0x419c8a(0x14a)];else{if(_0x2d2c79[0x0]['language']==_0x419c8a(0x11c))var _0x3ccae2=users[_0x419c8a(0x12a)];else{if(_0x2d2c79[0x0]['language']==_0x419c8a(0x12e))var _0x3ccae2=users[_0x419c8a(0x12e)];else{if(_0x2d2c79[0x0]['language']==_0x419c8a(0x120))var _0x3ccae2=users[_0x419c8a(0x12d)];}}}}}}}_0xdea2ae['status'](0xc8)['json']({'data':_0x3ad185,'language':_0x3ccae2});}catch(_0x36ee49){console[_0x419c8a(0x148)](_0x36ee49);}}),router[a0_0x3acaa4(0x13f)](a0_0x3acaa4(0x13d),auth,async(_0x378a69,_0x28bd46)=>{var _0x172335=a0_0x3acaa4;try{const _0xe4de7e=_0x378a69[_0x172335(0x13b)]['id'];console[_0x172335(0x148)](_0xe4de7e);const _0x48c447=await master_shop[_0x172335(0x133)]();console[_0x172335(0x148)](_0x172335(0x149),_0x48c447);const _0x58896b=await product[_0x172335(0x11f)]({'name':_0xe4de7e});console[_0x172335(0x148)](_0x172335(0x140),_0x58896b);const _0x149c67=await warehouse['aggregate']([{'$unwind':'$product_details'},{'$match':{'product_details.product_name':_0xe4de7e}},{'$project':{'name':0x1,'product_name':_0x172335(0x138),'product_stock':_0x172335(0x134)}}]);console['log'](_0x172335(0x11e),_0x149c67);if(_0x48c447[0x0][_0x172335(0x15d)]==_0x172335(0x15c)){var _0x17ad87=users[_0x172335(0x14d)];console[_0x172335(0x148)](_0x17ad87);}else{if(_0x48c447[0x0][_0x172335(0x15d)]==_0x172335(0x146))var _0x17ad87=users[_0x172335(0x146)];else{if(_0x48c447[0x0][_0x172335(0x15d)]==_0x172335(0x154))var _0x17ad87=users[_0x172335(0x154)];else{if(_0x48c447[0x0][_0x172335(0x15d)]=='Spanish')var _0x17ad87=users[_0x172335(0x131)];else{if(_0x48c447[0x0][_0x172335(0x15d)]==_0x172335(0x14a))var _0x17ad87=users[_0x172335(0x14a)];else{if(_0x48c447[0x0][_0x172335(0x15d)]==_0x172335(0x11c))var _0x17ad87=users[_0x172335(0x12a)];else{if(_0x48c447[0x0][_0x172335(0x15d)]==_0x172335(0x12e))var _0x17ad87=users[_0x172335(0x12e)];else{if(_0x48c447[0x0][_0x172335(0x15d)]=='Arabic\x20(ae)')var _0x17ad87=users['Arabic'];}}}}}}}_0x28bd46['status'](0xc8)[_0x172335(0x142)]({'product_data':_0x58896b,'warehouse_data':_0x149c67,'language':_0x17ad87});}catch(_0x31dd28){console[_0x172335(0x148)](_0x31dd28);}}),router[a0_0x3acaa4(0x158)](a0_0x3acaa4(0x127),async(_0x22219c,_0x23cdd9)=>{var _0x448dee=a0_0x3acaa4;const {warehouseNew:_0x49298a,rooms:_0x55e891,Type:_0x11c11d,process_cat:_0x1ff268,room_cat:_0x37bd28}=_0x22219c[_0x448dee(0x152)];let _0x505840;console[_0x448dee(0x148)](_0x22219c[_0x448dee(0x152)]);if(_0x1ff268==_0x448dee(0x14e))_0x505840=await warehouse['aggregate']([{'$match':{'name':_0x49298a,'room':_0x55e891,'warehouse_category':_0x448dee(0x160)}},{'$unwind':_0x448dee(0x15e)},{'$match':{'product_details.type':_0x11c11d,'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]);else _0x1ff268==_0x448dee(0x159)?_0x55e891=='All'?_0x505840=await warehouse[_0x448dee(0x13a)]([{'$match':{'name':_0x49298a,'warehouse_category':_0x448dee(0x13e)}},{'$unwind':_0x448dee(0x15e)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x505840=await warehouse[_0x448dee(0x13a)]([{'$match':{'name':_0x49298a,'room':_0x55e891,'warehouse_category':'Finished\x20Goods'}},{'$unwind':_0x448dee(0x15e)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):(console[_0x448dee(0x148)]('ssd'),Include=[{'$unwind':_0x448dee(0x15e)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}],_0x505840=await warehouse[_0x448dee(0x13a)](Include));_0x23cdd9['json'](_0x505840);}),router['post'](a0_0x3acaa4(0x14c),async(_0x564587,_0x1bb409)=>{var _0x4fc65b=a0_0x3acaa4;const {warehouseNew:_0x2109bb,rooms:_0x161bd6,Type:_0x521ba5,process_cat:_0x29be92,room_cat:_0x97e383}=_0x564587[_0x4fc65b(0x152)],_0x4e9eda=await product[_0x4fc65b(0x133)]();_0x1bb409[_0x4fc65b(0x142)](_0x4e9eda);}),module['exports']=router;function a0_0x344a(_0x41ae88,_0x4f74cd){var _0x36942d=a0_0x3694();return a0_0x344a=function(_0x344a81,_0x198f4e){_0x344a81=_0x344a81-0x11c;var _0x3e0014=_0x36942d[_0x344a81];return _0x3e0014;},a0_0x344a(_0x41ae88,_0x4f74cd);}function a0_0x3694(){var _0x3c1c22=['/view/:id','../middleware/auth','body','18802aymgMN','German','6527732obTdiw','flash','errors','post','finish','user','$product_docs.unit','English\x20(US)','language','$product_details','product_docs','Raw\x20Materials','Portuguese\x20(BR)','Router','warehouse_data','findOne','Arabic\x20(ae)','../public/language/languages.json','5QOrHtJ','warehouse','47993MyUxoI','819440Srehci','15779520xUsjFU','/Reports','success','181086WSctmI','Portuguese','express','email','Arabic','Chinese','111','5mxffeW','Spanish','../models/all_models','find','$product_details.product_stock','$product_docs.category','3MDrbNu','stock_report','$product_details.product_name','products','aggregate','params','$product_docs.sku','/view/product/:id','Finished\x20Goods','get','product_data','9468AhMvKg','json','563246NNzvbs','role_data','1144WrdjHf','Hindi','/view/warehouse/:id','log','master','French','/view','/Reports_product','English','raw','product_details.rak_name'];a0_0x3694=function(){return _0x3c1c22;};return a0_0x3694();}