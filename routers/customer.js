function a0_0x2ddb(){const _0x426d40=['public/Migration/','\x20added\x20successfully','Sale\x20Return','/products_export_migrate_file','127160JjOWiT','post','mobile','Arabic\x20(ae)','Arabic','single','PBrands','findOne','Sheets','Router','/customer/view','../models/all_models','redirect','save','customer\x20update\x20successfully','receivable','email','sale','params','$reason','3055014MuYEqM','3935022dIehLD','originalname','success','1BYhDNr','contactperson','sheet_to_json','then','Customers','13839480QuItLA','Name','payable','element','flash','attachment;\x20filename=customer_Migration_File.xlsx','payable_sum','render','/view/:id','$amount','setHeader','log','96828TGDSuL','/view/payment/:id','error','multer','Portuguese','French','SalesmanName','../public/language/languages.json','get','message','amount','customer','SalesmanCode','name','Portuguese\x20(BR)','\x20Failed','columns','../middleware/auth','body','receivable_sum','findById','public/Migration','English\x20(US)','landline','utils','Hindi','117161uMDyJO','status','payment_data','English','errors','PUnits','customer_data','address','Spanish','express','Chinese','customer_payment','sale_return','customer_product_fule','aggregate','customer_docs','PName','xlsx','master','357fpEiGa','language','/view','255fjDZtI','German','/customer_import_migrate_file','data','2390hHKPdO','find','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','2746359gGBkux','user','write','Sale'];a0_0x2ddb=function(){return _0x426d40;};return a0_0x2ddb();}const a0_0x4a141a=a0_0x5205;function a0_0x5205(_0x218e62,_0x20af3e){const _0x2ddb84=a0_0x2ddb();return a0_0x5205=function(_0x520557,_0x4f4d0f){_0x520557=_0x520557-0x68;let _0x4e977f=_0x2ddb84[_0x520557];return _0x4e977f;},a0_0x5205(_0x218e62,_0x20af3e);}(function(_0x36a9cf,_0x25670c){const _0x22b0f2=a0_0x5205,_0x4e7632=_0x36a9cf();while(!![]){try{const _0x27b69c=-parseInt(_0x22b0f2(0x6d))/0x1*(parseInt(_0x22b0f2(0x69))/0x2)+-parseInt(_0x22b0f2(0x6a))/0x3+parseInt(_0x22b0f2(0xbd))/0x4*(-parseInt(_0x22b0f2(0xae))/0x5)+-parseInt(_0x22b0f2(0x7e))/0x6*(-parseInt(_0x22b0f2(0xab))/0x7)+parseInt(_0x22b0f2(0x72))/0x8+parseInt(_0x22b0f2(0xb5))/0x9+-parseInt(_0x22b0f2(0xb2))/0xa*(-parseInt(_0x22b0f2(0x98))/0xb);if(_0x27b69c===_0x25670c)break;else _0x4e7632['push'](_0x4e7632['shift']());}catch(_0x10a266){_0x4e7632['push'](_0x4e7632['shift']());}}}(a0_0x2ddb,0xe648a));const express=require(a0_0x4a141a(0xa1)),app=express(),router=express[a0_0x4a141a(0xc6)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x4a141a(0xc8)),auth=require(a0_0x4a141a(0x8f)),users=require(a0_0x4a141a(0x85)),excelJS=require('exceljs'),xlsx=require(a0_0x4a141a(0xa9)),multer=require(a0_0x4a141a(0x81));router[a0_0x4a141a(0x86)]('/view',auth,async(_0x593a4d,_0x446826)=>{const _0x127316=a0_0x4a141a;try{const {username:_0x49da2f,email:_0x127851,role:_0x253fd9}=_0x593a4d[_0x127316(0xb6)],_0x2183a3=_0x593a4d['user'],_0x28f842=await profile[_0x127316(0xc4)]({'email':_0x2183a3[_0x127316(0xcd)]}),_0x39eecd=await master_shop[_0x127316(0xb3)]();console['log'](_0x127316(0xaa),_0x39eecd);const _0x233131=await customer[_0x127316(0xb3)](),_0x1bb9f6=await customer[_0x127316(0xa6)]([{'$lookup':{'from':'c_payments','localField':_0x127316(0x8b),'foreignField':'customer','as':_0x127316(0xa7)}}]);console[_0x127316(0x7d)](_0x1bb9f6);const _0x131071=_0x1bb9f6['map'](_0x20db39=>{const _0x5ddf7f=_0x127316;console[_0x5ddf7f(0x7d)](_0x5ddf7f(0xb1),_0x20db39);var _0x4d78bd=0x0,_0x38cc19=0x0;return _0x20db39[_0x5ddf7f(0xa7)]['forEach'](_0x589ed8=>{const _0x1363eb=_0x5ddf7f;console[_0x1363eb(0x7d)](_0x1363eb(0x75),_0x589ed8),_0x589ed8['reason']==_0x1363eb(0xb8)?_0x4d78bd+=_0x589ed8[_0x1363eb(0x88)]:_0x38cc19+=_0x589ed8[_0x1363eb(0x88)];}),_0x20db39[_0x5ddf7f(0xce)]=parseFloat(_0x4d78bd)+0x0,_0x20db39[_0x5ddf7f(0xa4)]=parseFloat(_0x38cc19)+0x0,_0x20db39;});console[_0x127316(0x7d)](_0x127316(0x9a),_0x131071);if(_0x39eecd[0x0][_0x127316(0xac)]=='English\x20(US)'){var _0x136733=users[_0x127316(0x9b)];console['log'](_0x136733);}else{if(_0x39eecd[0x0][_0x127316(0xac)]==_0x127316(0x97))var _0x136733=users[_0x127316(0x97)];else{if(_0x39eecd[0x0][_0x127316(0xac)]==_0x127316(0xaf))var _0x136733=users[_0x127316(0xaf)];else{if(_0x39eecd[0x0][_0x127316(0xac)]==_0x127316(0xa0))var _0x136733=users['Spanish'];else{if(_0x39eecd[0x0]['language']=='French')var _0x136733=users[_0x127316(0x83)];else{if(_0x39eecd[0x0][_0x127316(0xac)]==_0x127316(0x8c))var _0x136733=users[_0x127316(0x82)];else{if(_0x39eecd[0x0]['language']=='Chinese')var _0x136733=users[_0x127316(0xa2)];else{if(_0x39eecd[0x0][_0x127316(0xac)]==_0x127316(0xc0))var _0x136733=users['Arabic'];}}}}}}}_0x446826[_0x127316(0x79)](_0x127316(0x89),{'success':_0x593a4d[_0x127316(0x76)]('success'),'errors':_0x593a4d[_0x127316(0x76)](_0x127316(0x9c)),'user':_0x233131,'role':_0x2183a3,'profile':_0x28f842,'payment':_0x131071,'master_shop':_0x39eecd,'language':_0x136733});}catch(_0x534e78){console[_0x127316(0x7d)](_0x534e78);}}),router['post'](a0_0x4a141a(0xad),auth,async(_0x1b5423,_0x13b2c8)=>{const _0xaeaad2=a0_0x4a141a;try{const {name:_0x294640,address:_0x52b1dc,mobile:_0x4322f3,email:_0x30ecbf,receivable:_0x51fcfe,payable:_0x28a573,contactperson:_0x268af8,landline:_0x29faf4}=_0x1b5423[_0xaeaad2(0x90)],_0x5d3b47=new customer({'name':_0x294640,'address':_0x52b1dc,'mobile':_0x4322f3,'email':_0x30ecbf,'receivable':_0x51fcfe,'payable':_0x28a573,'contactperson':_0x268af8,'landline':_0x29faf4}),_0x1273c9=await _0x5d3b47['save']();_0x1b5423[_0xaeaad2(0x76)](_0xaeaad2(0x6c),'customer\x20add\x20successfully'),_0x13b2c8[_0xaeaad2(0xc9)](_0xaeaad2(0xc7));}catch(_0x50428f){console[_0xaeaad2(0x7d)](_0x50428f);}}),router['get'](a0_0x4a141a(0x7a),auth,async(_0x2b795a,_0x150f6d)=>{const _0xc3c615=a0_0x4a141a;try{const {username:_0x261d33,email:_0x1aaf90,role:_0x5daadf}=_0x2b795a[_0xc3c615(0xb6)],_0x39e821=_0x2b795a['user'],_0x3d0f28=await profile[_0xc3c615(0xc4)]({'email':_0x39e821['email']}),_0xab400c=await master_shop[_0xc3c615(0xb3)]();console[_0xc3c615(0x7d)](_0xc3c615(0xaa),_0xab400c);const _0x40ace7=_0x2b795a['params']['id'],_0x57b34c=await customer[_0xc3c615(0x92)](_0x40ace7);if(_0xab400c[0x0][_0xc3c615(0xac)]==_0xc3c615(0x94)){var _0x2acdfa=users[_0xc3c615(0x9b)];console[_0xc3c615(0x7d)](_0x2acdfa);}else{if(_0xab400c[0x0][_0xc3c615(0xac)]==_0xc3c615(0x97))var _0x2acdfa=users['Hindi'];else{if(_0xab400c[0x0][_0xc3c615(0xac)]=='German')var _0x2acdfa=users[_0xc3c615(0xaf)];else{if(_0xab400c[0x0][_0xc3c615(0xac)]==_0xc3c615(0xa0))var _0x2acdfa=users['Spanish'];else{if(_0xab400c[0x0][_0xc3c615(0xac)]=='French')var _0x2acdfa=users[_0xc3c615(0x83)];else{if(_0xab400c[0x0]['language']==_0xc3c615(0x8c))var _0x2acdfa=users[_0xc3c615(0x82)];else{if(_0xab400c[0x0][_0xc3c615(0xac)]==_0xc3c615(0xa2))var _0x2acdfa=users[_0xc3c615(0xa2)];else{if(_0xab400c[0x0]['language']=='Arabic\x20(ae)')var _0x2acdfa=users[_0xc3c615(0xc1)];}}}}}}}_0x150f6d[_0xc3c615(0x79)](_0xc3c615(0x89),{'success':_0x2b795a[_0xc3c615(0x76)](_0xc3c615(0x6c)),'errors':_0x2b795a['flash'](_0xc3c615(0x9c)),'role':_0x39e821,'profile':_0x3d0f28,'user':_0x57b34c,'master_shop':_0xab400c,'language':_0x2acdfa});}catch(_0x2f6fbf){console[_0xc3c615(0x7d)](_0x2f6fbf);}}),router[a0_0x4a141a(0xbe)](a0_0x4a141a(0x7a),auth,async(_0x3d4392,_0x4bdce3)=>{const _0x555ceb=a0_0x4a141a;try{const _0x28c56a=_0x3d4392[_0x555ceb(0xcf)]['id'],_0x5d63ce=await customer['findById'](_0x28c56a),{name:_0x29a937,address:_0x530731,mobile:_0x2ab236,email:_0x108647,receivable:_0x5cd134,payable:_0x1e5f5b,contactperson:_0x1ba3ff,landline:_0x1c9632}=_0x3d4392[_0x555ceb(0x90)];_0x5d63ce[_0x555ceb(0x8b)]=_0x29a937,_0x5d63ce[_0x555ceb(0x9f)]=_0x530731,_0x5d63ce[_0x555ceb(0xbf)]=_0x2ab236,_0x5d63ce[_0x555ceb(0xcd)]=_0x108647,_0x5d63ce[_0x555ceb(0xcc)]=_0x5cd134,_0x5d63ce[_0x555ceb(0x74)]=_0x1e5f5b,_0x5d63ce[_0x555ceb(0x6e)]=_0x1ba3ff,_0x5d63ce[_0x555ceb(0x95)]=_0x1c9632;const _0x2a27b3=await _0x5d63ce[_0x555ceb(0xca)]();_0x3d4392[_0x555ceb(0x76)](_0x555ceb(0x6c),_0x555ceb(0xcb)),_0x4bdce3[_0x555ceb(0xc9)]('/customer/view');}catch(_0xdb030c){console[_0x555ceb(0x7d)](_0xdb030c);}}),router[a0_0x4a141a(0x86)](a0_0x4a141a(0x7f),auth,async(_0x4981ab,_0x48e6f4)=>{const _0x9c9d2a=a0_0x4a141a;try{const {username:_0xf385c0,email:_0x48f58f,role:_0x4c3f6b}=_0x4981ab['user'],_0x49bc01=_0x4981ab[_0x9c9d2a(0xb6)],_0x202d80=await profile[_0x9c9d2a(0xc4)]({'email':_0x49bc01[_0x9c9d2a(0xcd)]}),_0x150f6f=await master_shop['find']();console[_0x9c9d2a(0x7d)]('master',_0x150f6f),console[_0x9c9d2a(0x7d)](_0x4981ab[_0x9c9d2a(0xcf)]['id']);const _0x596c89=await customer['findOne']({'_id':_0x4981ab[_0x9c9d2a(0xcf)]['id']});console[_0x9c9d2a(0x7d)](_0x9c9d2a(0x9e),_0x596c89);const _0xa3fef6=await c_payment_data['find']({'customer':_0x596c89['name']});console[_0x9c9d2a(0x7d)](_0xa3fef6);const _0x25d25f=await c_payment_data['aggregate']([{'$match':{'customer':_0x596c89['name']}},{'$match':{'reason':'Sale'}},{'$group':{'_id':_0x9c9d2a(0x68),'sum':{'$sum':_0x9c9d2a(0x7b)}}}]);console[_0x9c9d2a(0x7d)](_0x9c9d2a(0x78),_0x25d25f);const _0x52b8a8=await c_payment_data[_0x9c9d2a(0xa6)]([{'$match':{'customer':_0x596c89[_0x9c9d2a(0x8b)]}},{'$match':{'reason':_0x9c9d2a(0xbb)}},{'$group':{'_id':_0x9c9d2a(0x68),'sum':{'$sum':_0x9c9d2a(0x7b)}}}]);console[_0x9c9d2a(0x7d)](_0x9c9d2a(0x91),_0x52b8a8);if(_0x150f6f[0x0]['language']==_0x9c9d2a(0x94)){var _0x31be4c=users[_0x9c9d2a(0x9b)];console[_0x9c9d2a(0x7d)](_0x31be4c);}else{if(_0x150f6f[0x0][_0x9c9d2a(0xac)]=='Hindi')var _0x31be4c=users['Hindi'];else{if(_0x150f6f[0x0][_0x9c9d2a(0xac)]==_0x9c9d2a(0xaf))var _0x31be4c=users[_0x9c9d2a(0xaf)];else{if(_0x150f6f[0x0][_0x9c9d2a(0xac)]==_0x9c9d2a(0xa0))var _0x31be4c=users[_0x9c9d2a(0xa0)];else{if(_0x150f6f[0x0]['language']==_0x9c9d2a(0x83))var _0x31be4c=users[_0x9c9d2a(0x83)];else{if(_0x150f6f[0x0][_0x9c9d2a(0xac)]==_0x9c9d2a(0x8c))var _0x31be4c=users[_0x9c9d2a(0x82)];else{if(_0x150f6f[0x0][_0x9c9d2a(0xac)]==_0x9c9d2a(0xa2))var _0x31be4c=users[_0x9c9d2a(0xa2)];else{if(_0x150f6f[0x0]['language']==_0x9c9d2a(0xc0))var _0x31be4c=users[_0x9c9d2a(0xc1)];}}}}}}}_0x48e6f4[_0x9c9d2a(0x79)](_0x9c9d2a(0xa3),{'success':_0x4981ab['flash'](_0x9c9d2a(0x6c)),'errors':_0x4981ab[_0x9c9d2a(0x76)](_0x9c9d2a(0x9c)),'role':_0x49bc01,'profile':_0x202d80,'payment':_0xa3fef6,'payable':_0x25d25f,'receivable':_0x52b8a8,'master_shop':_0x150f6f,'language':_0x31be4c});}catch(_0x165891){console[_0x9c9d2a(0x7d)](_0x165891);}}),router[a0_0x4a141a(0x86)](a0_0x4a141a(0xbc),auth,async(_0x28f8b0,_0x1c6885)=>{const _0xc8bc69=a0_0x4a141a;try{const _0x3bb7f6=new excelJS['Workbook'](),_0x520df0=_0x3bb7f6['addWorksheet'](_0xc8bc69(0x71));return _0x520df0[_0xc8bc69(0x8e)]=[{'header':'ID','key':_0xc8bc69(0xa8),'width':0xa},{'header':_0xc8bc69(0x73),'key':_0xc8bc69(0xc3),'width':0xa},{'header':_0xc8bc69(0x8a),'key':_0xc8bc69(0x9d),'width':0xa},{'header':_0xc8bc69(0x84),'key':_0xc8bc69(0x84),'width':0xa},{'header':_0xc8bc69(0x9f),'key':_0xc8bc69(0x9f),'width':0xa},{'header':_0xc8bc69(0xbf),'key':_0xc8bc69(0xbf),'width':0xa},{'header':'email','key':_0xc8bc69(0xcd),'width':0xa}],_0x1c6885[_0xc8bc69(0x7c)]('Content-Type',_0xc8bc69(0xb4)),_0x1c6885[_0xc8bc69(0x7c)]('Content-Disposition',_0xc8bc69(0x77)),_0x3bb7f6[_0xc8bc69(0xa9)][_0xc8bc69(0xb7)](_0x1c6885)[_0xc8bc69(0x70)](()=>{_0x1c6885['status'](0xc8);});}catch(_0x2d5bd0){_0x1c6885[_0xc8bc69(0x99)](0x190)['send']({'errors':_0x2d5bd0[_0xc8bc69(0x87)]});}});const storage1=multer['diskStorage']({'destination':(_0xba37f3,_0x2e0a02,_0x1e9032)=>{const _0x55d4b1=a0_0x4a141a;_0x1e9032(null,_0x55d4b1(0x93));},'filename':(_0x2102d3,_0x24f9fb,_0x4d8d67)=>{const _0x36356c=a0_0x4a141a;_0x4d8d67(null,Date['now']()+_0x24f9fb[_0x36356c(0x6b)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x4a141a(0xbe)](a0_0x4a141a(0xb0),auth,uploadMigrate[a0_0x4a141a(0xc2)](a0_0x4a141a(0xa5)),async(_0x1f07e9,_0x569ba2)=>{const _0x49c3ed=a0_0x4a141a,_0x438efe=_0x1f07e9['file']['filename'],_0x2eb8fd=await xlsx['readFile'](_0x49c3ed(0xb9)+_0x438efe);let _0x2ee0fb=_0x2eb8fd['SheetNames'],_0x2c29b5=xlsx[_0x49c3ed(0x96)][_0x49c3ed(0x6f)](_0x2eb8fd[_0x49c3ed(0xc5)][_0x2ee0fb[0x0]]);for(const _0x2efbc1 of _0x2c29b5){const _0x9463d4=_0x2efbc1['ID'],_0x185888=_0x2efbc1['Name'],_0x39f1af=_0x2efbc1[_0x49c3ed(0x8a)],_0x1e72d3=_0x2efbc1[_0x49c3ed(0x84)],_0x2d1d73=_0x2efbc1['address'],_0x32828a=_0x2efbc1[_0x49c3ed(0xbf)],_0x5dd12b=_0x2efbc1[_0x49c3ed(0xcd)];try{let _0x41dacd=await customer['findOne']({'name':_0x185888});if(!_0x41dacd){const _0x5bc5a4=new customer({'name':_0x185888,'ID':_0x9463d4,'SalesmanCode':_0x39f1af,'SalesmanName':_0x1e72d3,'address':_0x2d1d73,'mobile':_0x32828a,'email':_0x5dd12b});_0x41dacd=await _0x5bc5a4[_0x49c3ed(0xca)](),_0x1f07e9[_0x49c3ed(0x76)](_0x49c3ed(0x6c),_0x185888+_0x49c3ed(0xba));}else _0x1f07e9['flash'](_0x49c3ed(0x80),_0x185888+_0x49c3ed(0x8d));}catch(_0x4c6e31){_0x569ba2['status'](0x1f4)['json']({'proderror':_0x4c6e31[_0x49c3ed(0x87)],'aproduct':ProductName});}}_0x569ba2['redirect']('/customer/view');}),module['exports']=router;