const a0_0x2717b6=a0_0x34bd;function a0_0x34bd(_0x17fc52,_0x26949c){const _0x61f590=a0_0x61f5();return a0_0x34bd=function(_0x34bde1,_0x538bcd){_0x34bde1=_0x34bde1-0x98;let _0x1684db=_0x61f590[_0x34bde1];return _0x1684db;},a0_0x34bd(_0x17fc52,_0x26949c);}(function(_0x1cac88,_0x3fd0ab){const _0x1a8196=a0_0x34bd,_0x3101ee=_0x1cac88();while(!![]){try{const _0x309cb0=-parseInt(_0x1a8196(0xa9))/0x1*(-parseInt(_0x1a8196(0xb4))/0x2)+-parseInt(_0x1a8196(0xa8))/0x3*(-parseInt(_0x1a8196(0xb1))/0x4)+parseInt(_0x1a8196(0xaa))/0x5*(-parseInt(_0x1a8196(0xa7))/0x6)+parseInt(_0x1a8196(0xac))/0x7+-parseInt(_0x1a8196(0x9c))/0x8*(-parseInt(_0x1a8196(0xb5))/0x9)+-parseInt(_0x1a8196(0x9e))/0xa+parseInt(_0x1a8196(0xa6))/0xb*(parseInt(_0x1a8196(0x9b))/0xc);if(_0x309cb0===_0x3fd0ab)break;else _0x3101ee['push'](_0x3101ee['shift']());}catch(_0x1e6c4a){_0x3101ee['push'](_0x3101ee['shift']());}}}(a0_0x61f5,0xe281e));function a0_0x61f5(){const _0x1eadbe=['113YmZojb','15puXGBq','aggregate','6221348EcLlHG','modifiedCount','log','exports','INCF-52068316','4LIDHKq','table\x20page','$product_details','7646efDEzQ','9WhVCbe','updateMany','Router','../../models/all_models','4399476SaZYGM','5305576uyDULn','json','16258090IlDgId','get','14800005047429','status','$room','message','/checking','\x20documents\x20updated','11IPXPEw','1637976CEbbId','3065964ztyvOE'];a0_0x61f5=function(){return _0x1eadbe;};return a0_0x61f5();}const express=require('express'),app=express(),router=express[a0_0x2717b6(0x99)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require(a0_0x2717b6(0x9a));router[a0_0x2717b6(0x9f)]('/negative',async(_0x18f33f,_0x5c214a)=>{const _0x4f80cb=a0_0x2717b6;try{const _0x3c92f6=await warehouse[_0x4f80cb(0x98)]({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x5c214a[_0x4f80cb(0x9d)]({'status':_0x3c92f6[_0x4f80cb(0xad)]+_0x4f80cb(0xa5)});}catch(_0x212f07){console['log'](_0x4f80cb(0xb2),_0x212f07),_0x5c214a[_0x4f80cb(0xa1)](0xc8)[_0x4f80cb(0x9d)]({'message':_0x212f07[_0x4f80cb(0xa3)]});}}),router['get'](a0_0x2717b6(0xa4),async(_0x1d7daa,_0x44786e)=>{const _0x2a170=a0_0x2717b6;try{const _0x6d4264=await warehouse[_0x2a170(0xab)]([{'$unwind':_0x2a170(0xb3)},{'$match':{'product_details.invoice':_0x2a170(0xb0),'product_details.primary_code':_0x2a170(0xa0)}},{'$group':{'_id':{'name':'$name','room':_0x2a170(0xa2)},'products':{'$push':_0x2a170(0xb3)}}}]);_0x44786e['json'](_0x6d4264);}catch(_0x5d2fdb){console[_0x2a170(0xae)]('table\x20page',_0x5d2fdb),_0x44786e['status'](0xc8)['json']({'message':_0x5d2fdb[_0x2a170(0xa3)]});}}),module[a0_0x2717b6(0xaf)]=router;