const a0_0xb14652=a0_0x5870;function a0_0x5870(_0x14ac7f,_0x2be699){const _0x1b9d7e=a0_0x1b9d();return a0_0x5870=function(_0x587054,_0x5c2bbb){_0x587054=_0x587054-0xaa;let _0x555b5a=_0x1b9d7e[_0x587054];return _0x555b5a;},a0_0x5870(_0x14ac7f,_0x2be699);}(function(_0xbbb597,_0x397458){const _0x289716=a0_0x5870,_0x4d4d57=_0xbbb597();while(!![]){try{const _0x4dad3a=-parseInt(_0x289716(0xbb))/0x1*(parseInt(_0x289716(0xbe))/0x2)+parseInt(_0x289716(0xae))/0x3+parseInt(_0x289716(0xc5))/0x4*(-parseInt(_0x289716(0xca))/0x5)+-parseInt(_0x289716(0xc4))/0x6+-parseInt(_0x289716(0xc0))/0x7*(-parseInt(_0x289716(0xb4))/0x8)+-parseInt(_0x289716(0xb5))/0x9+parseInt(_0x289716(0xbc))/0xa;if(_0x4dad3a===_0x397458)break;else _0x4d4d57['push'](_0x4d4d57['shift']());}catch(_0x4354a5){_0x4d4d57['push'](_0x4d4d57['shift']());}}}(a0_0x1b9d,0x81548));const express=require(a0_0xb14652(0xc2)),app=express(),router=express[a0_0xb14652(0xb9)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require(a0_0xb14652(0xc1));function a0_0x1b9d(){const _0x2e7aaf=['aggregate','3482172PCvhrP','793280uWnzjW','$product_details','render','message','/checking','5wWhOVB','modifiedCount','table\x20page','INCF-52068316','/negative','flash','2789343OmZzZv','success','14800005047429','status','$name','$room','2821408THwDAq','4291335oORXvR','log','errors','json','Router','monitor','1aFDXFF','12378190erWPFA','/warehouse_monitor','1470086mrlRwE','get','7BvwwDN','../../models/all_models','express'];a0_0x1b9d=function(){return _0x2e7aaf;};return a0_0x1b9d();}router[a0_0xb14652(0xbf)](a0_0xb14652(0xac),async(_0xaf4e67,_0x51b201)=>{const _0x2ecef7=a0_0xb14652;try{const _0x50ca57=await warehouse['updateMany']({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x51b201[_0x2ecef7(0xb8)]({'status':_0x50ca57[_0x2ecef7(0xcb)]+'\x20documents\x20updated'});}catch(_0xd86af3){console[_0x2ecef7(0xb6)](_0x2ecef7(0xaa),_0xd86af3),_0x51b201['status'](0xc8)[_0x2ecef7(0xb8)]({'message':_0xd86af3[_0x2ecef7(0xc8)]});}}),router['get'](a0_0xb14652(0xc9),async(_0x13c8b6,_0x16e852)=>{const _0x2d2139=a0_0xb14652;try{const _0x202dfb=await warehouse[_0x2d2139(0xc3)]([{'$unwind':_0x2d2139(0xc6)},{'$match':{'product_details.invoice':_0x2d2139(0xab),'product_details.primary_code':_0x2d2139(0xb0)}},{'$group':{'_id':{'name':_0x2d2139(0xb2),'room':_0x2d2139(0xb3)},'products':{'$push':_0x2d2139(0xc6)}}}]);_0x16e852['json'](_0x202dfb);}catch(_0x2d2a0f){console[_0x2d2139(0xb6)]('table\x20page',_0x2d2a0f),_0x16e852[_0x2d2139(0xb1)](0xc8)['json']({'message':_0x2d2a0f[_0x2d2139(0xc8)]});}}),router[a0_0xb14652(0xbf)](a0_0xb14652(0xbd),async(_0x5771a9,_0x3e15bc)=>{const _0x3c101b=a0_0xb14652;_0x3e15bc[_0x3c101b(0xc7)](_0x3c101b(0xba),{'success':_0x5771a9[_0x3c101b(0xad)](_0x3c101b(0xaf)),'errors':_0x5771a9[_0x3c101b(0xad)](_0x3c101b(0xb7))});}),module['exports']=router;