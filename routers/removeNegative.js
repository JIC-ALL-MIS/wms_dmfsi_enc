const a0_0x35ca53=a0_0xe0b9;function a0_0xe0b9(_0x2eb35f,_0x154906){const _0x57bba1=a0_0x57bb();return a0_0xe0b9=function(_0xe0b92c,_0x4f29ba){_0xe0b92c=_0xe0b92c-0x119;let _0x502a0a=_0x57bba1[_0xe0b92c];return _0x502a0a;},a0_0xe0b9(_0x2eb35f,_0x154906);}(function(_0x16bfd1,_0x5b9012){const _0x240bee=a0_0xe0b9,_0x55c025=_0x16bfd1();while(!![]){try{const _0x44d73b=parseInt(_0x240bee(0x11b))/0x1*(parseInt(_0x240bee(0x12f))/0x2)+-parseInt(_0x240bee(0x124))/0x3*(-parseInt(_0x240bee(0x11c))/0x4)+parseInt(_0x240bee(0x12b))/0x5+parseInt(_0x240bee(0x11e))/0x6+-parseInt(_0x240bee(0x119))/0x7+-parseInt(_0x240bee(0x130))/0x8*(parseInt(_0x240bee(0x12c))/0x9)+-parseInt(_0x240bee(0x12d))/0xa;if(_0x44d73b===_0x5b9012)break;else _0x55c025['push'](_0x55c025['shift']());}catch(_0x341cc4){_0x55c025['push'](_0x55c025['shift']());}}}(a0_0x57bb,0x31ded));function a0_0x57bb(){const _0x5e72cd=['52336RlTrAD','1200vgnbLD','INCF-52068316','aggregate','modifiedCount','express','$name','31619tOenft','14800005047429','1NQnKWh','110408qMBsVB','$product_details','1358706nAxAFb','table\x20page','$room','updateMany','Router','/negative','21PwniUO','message','status','../../models/all_models','get','\x20documents\x20updated','json','1564540VsdRlZ','2529CvSDSi','5078050wcsaqz','/checking'];a0_0x57bb=function(){return _0x5e72cd;};return a0_0x57bb();}const express=require(a0_0x35ca53(0x134)),app=express(),router=express[a0_0x35ca53(0x122)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require(a0_0x35ca53(0x127));router[a0_0x35ca53(0x128)](a0_0x35ca53(0x123),async(_0x2b89b8,_0x125284)=>{const _0x2b3112=a0_0x35ca53;try{const _0x356e94=await warehouse[_0x2b3112(0x121)]({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x125284['json']({'status':_0x356e94[_0x2b3112(0x133)]+_0x2b3112(0x129)});}catch(_0x4565b1){console['log']('table\x20page',_0x4565b1),_0x125284[_0x2b3112(0x126)](0xc8)[_0x2b3112(0x12a)]({'message':_0x4565b1[_0x2b3112(0x125)]});}}),router['get'](a0_0x35ca53(0x12e),async(_0x40cdca,_0x55edfa)=>{const _0x3cd8f7=a0_0x35ca53;try{const _0x2c98f9=await warehouse[_0x3cd8f7(0x132)]([{'$unwind':_0x3cd8f7(0x11d)},{'$match':{'product_details.invoice':_0x3cd8f7(0x131),'product_details.primary_code':_0x3cd8f7(0x11a)}},{'$group':{'_id':{'name':_0x3cd8f7(0x135),'room':_0x3cd8f7(0x120)},'products':{'$push':_0x3cd8f7(0x11d)}}}]);_0x55edfa['json'](_0x2c98f9);}catch(_0x11636c){console['log'](_0x3cd8f7(0x11f),_0x11636c),_0x55edfa[_0x3cd8f7(0x126)](0xc8)[_0x3cd8f7(0x12a)]({'message':_0x11636c[_0x3cd8f7(0x125)]});}}),module['exports']=router;