const a0_0x358c72=a0_0x461e;function a0_0x5184(){const _0x2f2289=['\x20documents\x20updated','log','INCF-52068316','modifiedCount','14848749qSHaxL','10371060pJctIQ','266791XklRAH','$product_details','4650846CrPktr','/negative','express','8oqVMVD','2204TLPquh','exports','../../models/all_models','6GTacTj','1111palQPI','$room','get','json','10860eezURN','Router','532054IJMHyL','message','status','26360sdbphY'];a0_0x5184=function(){return _0x2f2289;};return a0_0x5184();}(function(_0x1c7bf2,_0x3854cd){const _0x3c4240=a0_0x461e,_0x3afc9c=_0x1c7bf2();while(!![]){try{const _0x13b5e9=-parseInt(_0x3c4240(0x1c2))/0x1*(parseInt(_0x3c4240(0x1bb))/0x2)+parseInt(_0x3c4240(0x1b4))/0x3+parseInt(_0x3c4240(0x1b8))/0x4*(parseInt(_0x3c4240(0x1c0))/0x5)+parseInt(_0x3c4240(0x1cb))/0x6+-parseInt(_0x3c4240(0x1cc))/0x7*(parseInt(_0x3c4240(0x1b7))/0x8)+-parseInt(_0x3c4240(0x1ca))/0x9+parseInt(_0x3c4240(0x1c5))/0xa*(-parseInt(_0x3c4240(0x1bc))/0xb);if(_0x13b5e9===_0x3854cd)break;else _0x3afc9c['push'](_0x3afc9c['shift']());}catch(_0x20b791){_0x3afc9c['push'](_0x3afc9c['shift']());}}}(a0_0x5184,0xe1e08));const express=require(a0_0x358c72(0x1b6)),app=express(),router=express[a0_0x358c72(0x1c1)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require(a0_0x358c72(0x1ba));function a0_0x461e(_0x2527e8,_0x2053c2){const _0x51842d=a0_0x5184();return a0_0x461e=function(_0x461e56,_0x3dc411){_0x461e56=_0x461e56-0x1b3;let _0x21a4c2=_0x51842d[_0x461e56];return _0x21a4c2;},a0_0x461e(_0x2527e8,_0x2053c2);}router['get'](a0_0x358c72(0x1b5),async(_0x4d6268,_0x52905b)=>{const _0x56854d=a0_0x358c72;try{const _0x1bc171=await warehouse['updateMany']({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x52905b[_0x56854d(0x1bf)]({'status':_0x1bc171[_0x56854d(0x1c9)]+_0x56854d(0x1c6)});}catch(_0x1b80f5){console['log']('table\x20page',_0x1b80f5),_0x52905b[_0x56854d(0x1c4)](0xc8)['json']({'message':_0x1b80f5[_0x56854d(0x1c3)]});}}),router[a0_0x358c72(0x1be)]('/checking',async(_0x4bf26b,_0xcd44f8)=>{const _0x3ee466=a0_0x358c72;try{const _0x11035f=await warehouse['aggregate']([{'$unwind':_0x3ee466(0x1b3)},{'$match':{'product_details.invoice':_0x3ee466(0x1c8),'product_details.primary_code':'14800005047429'}},{'$group':{'_id':{'name':'$name','room':_0x3ee466(0x1bd)},'products':{'$push':_0x3ee466(0x1b3)}}}]);_0xcd44f8[_0x3ee466(0x1bf)](_0x11035f);}catch(_0x1264d5){console[_0x3ee466(0x1c7)]('table\x20page',_0x1264d5),_0xcd44f8[_0x3ee466(0x1c4)](0xc8)[_0x3ee466(0x1bf)]({'message':_0x1264d5[_0x3ee466(0x1c3)]});}}),module[a0_0x358c72(0x1b9)]=router;