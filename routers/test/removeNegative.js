const a0_0xe08d91=a0_0x294b;(function(_0x547731,_0xa32727){const _0x48fa13=a0_0x294b,_0x4c08ca=_0x547731();while(!![]){try{const _0x519997=-parseInt(_0x48fa13(0x177))/0x1*(parseInt(_0x48fa13(0x16b))/0x2)+-parseInt(_0x48fa13(0x176))/0x3*(parseInt(_0x48fa13(0x178))/0x4)+-parseInt(_0x48fa13(0x17a))/0x5+parseInt(_0x48fa13(0x16a))/0x6*(-parseInt(_0x48fa13(0x175))/0x7)+parseInt(_0x48fa13(0x17e))/0x8*(-parseInt(_0x48fa13(0x179))/0x9)+-parseInt(_0x48fa13(0x168))/0xa+parseInt(_0x48fa13(0x167))/0xb*(parseInt(_0x48fa13(0x172))/0xc);if(_0x519997===_0xa32727)break;else _0x4c08ca['push'](_0x4c08ca['shift']());}catch(_0x2a5b5c){_0x4c08ca['push'](_0x4c08ca['shift']());}}}(a0_0x482b,0xd7a88));function a0_0x482b(){const _0x2b50d6=['239173pIexoA','5860750lLJzzy','express','153852PiGgWt','1398VYuMfS','table\x20page','status','modifiedCount','exports','$room','\x20documents\x20updated','2712LMpIxx','json','message','343dCzsyc','15xOUZuK','967qCAWfz','529372lbrwdI','1010043qfoLDl','3129735aHzvNl','/checking','get','$name','16UpjEKU','../../models/all_models','/negative','Router'];a0_0x482b=function(){return _0x2b50d6;};return a0_0x482b();}const express=require(a0_0xe08d91(0x169)),app=express(),router=express[a0_0xe08d91(0x181)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require(a0_0xe08d91(0x17f));function a0_0x294b(_0x5306e7,_0x126c9e){const _0x482bf7=a0_0x482b();return a0_0x294b=function(_0x294bf9,_0xad1b35){_0x294bf9=_0x294bf9-0x167;let _0x1e411d=_0x482bf7[_0x294bf9];return _0x1e411d;},a0_0x294b(_0x5306e7,_0x126c9e);}router[a0_0xe08d91(0x17c)](a0_0xe08d91(0x180),async(_0x2a54b1,_0x58cc8f)=>{const _0x413b5d=a0_0xe08d91;try{const _0x408303=await warehouse['updateMany']({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x58cc8f[_0x413b5d(0x173)]({'status':_0x408303[_0x413b5d(0x16e)]+_0x413b5d(0x171)});}catch(_0x5789a4){console['log'](_0x413b5d(0x16c),_0x5789a4),_0x58cc8f[_0x413b5d(0x16d)](0xc8)[_0x413b5d(0x173)]({'message':_0x5789a4[_0x413b5d(0x174)]});}}),router['get'](a0_0xe08d91(0x17b),async(_0x4a5f04,_0x590215)=>{const _0x4503ab=a0_0xe08d91;try{const _0x47ceb6=await warehouse['aggregate']([{'$unwind':'$product_details'},{'$match':{'product_details.invoice':'INCF-52068316','product_details.primary_code':'14800005047429'}},{'$group':{'_id':{'name':_0x4503ab(0x17d),'room':_0x4503ab(0x170)},'products':{'$push':'$product_details'}}}]);_0x590215[_0x4503ab(0x173)](_0x47ceb6);}catch(_0x54cbb9){console['log'](_0x4503ab(0x16c),_0x54cbb9),_0x590215[_0x4503ab(0x16d)](0xc8)[_0x4503ab(0x173)]({'message':_0x54cbb9[_0x4503ab(0x174)]});}}),module[a0_0xe08d91(0x16f)]=router;