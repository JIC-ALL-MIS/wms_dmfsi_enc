const a0_0x167185=a0_0x375a;function a0_0x375a(_0x48698a,_0x10a784){const _0x1f4876=a0_0x1f48();return a0_0x375a=function(_0x375aaf,_0xf872e4){_0x375aaf=_0x375aaf-0x197;let _0x3b757d=_0x1f4876[_0x375aaf];return _0x3b757d;},a0_0x375a(_0x48698a,_0x10a784);}(function(_0x578459,_0x4a0f56){const _0x3d46b2=a0_0x375a,_0xeba021=_0x578459();while(!![]){try{const _0x1fe921=parseInt(_0x3d46b2(0x1d0))/0x1+parseInt(_0x3d46b2(0x1b0))/0x2+parseInt(_0x3d46b2(0x1d2))/0x3*(parseInt(_0x3d46b2(0x1a1))/0x4)+-parseInt(_0x3d46b2(0x198))/0x5+parseInt(_0x3d46b2(0x19f))/0x6+parseInt(_0x3d46b2(0x1af))/0x7*(parseInt(_0x3d46b2(0x1aa))/0x8)+parseInt(_0x3d46b2(0x199))/0x9*(parseInt(_0x3d46b2(0x1bc))/0xa);if(_0x1fe921===_0x4a0f56)break;else _0xeba021['push'](_0xeba021['shift']());}catch(_0x4947ac){_0xeba021['push'](_0xeba021['shift']());}}}(a0_0x1f48,0x60412));function a0_0x1f48(){const _0x313805=['/transfer','English\x20(US)','find','express','30YXwbUb','/adjustment','False','Transfer\x20Finished\x20Goods','/adjustment_finished','adjf','findOne','nodemailer','Hindi','trff','../public/language/languages.json','/outgoing','invoice','German','edit_approvals_view','../middleware/auth','log','language','errors','out','53700BvFxaq','render','17484RfroYr','Outgoing\x20Raw\x20materials','flash','Chinese','3592325ufYCkT','374157KFyHzi','Arabic','approvals_view','post','Spanish','English','767106SXRhIc','save','116ORDfiq','Portuguese\x20(BR)','Adjustment\x20Raw\x20materials','success','email','Arabic\x20(ae)','Portuguese','Adjustment\x20Finished\x20Goods','message','24WOODDw','French','/view','/outgoing_finished','json','1243921ZrwwIz','208664qtixvy','body','Router','user','/transfer_finished','isAllowEdit','Outgoing\x20Finished\x20Goods','get'];a0_0x1f48=function(){return _0x313805;};return a0_0x1f48();}const express=require(a0_0x167185(0x1bb)),app=express(),router=express[a0_0x167185(0x1b2)](),auth=require(a0_0x167185(0x1cb)),{profile,master_shop,sales_finished,adjustment_finished,transfers_finished,sales,adjustment,transfers}=require('../models/all_models'),users=require(a0_0x167185(0x1c6)),nodemailer=require(a0_0x167185(0x1c3));router[a0_0x167185(0x1b7)](a0_0x167185(0x1ac),auth,async(_0x308977,_0x2872f4)=>{const _0x577adf=a0_0x167185;try{const {username:_0x52d72d,email:_0x267f00,role:_0x1adf72}=_0x308977[_0x577adf(0x1b3)],_0x282e62=_0x308977[_0x577adf(0x1b3)],_0x503975=await profile[_0x577adf(0x1c2)]({'email':_0x282e62[_0x577adf(0x1a5)]}),_0x575c4e=await master_shop[_0x577adf(0x1ba)](),_0x5e5a50=await sales['find']({'finalize':_0x577adf(0x1be)}),_0x24de7e=await adjustment[_0x577adf(0x1ba)]({'finalize':'False'}),_0x6f7eb4=await transfers['find']({'finalize':_0x577adf(0x1be)});if(_0x575c4e[0x0][_0x577adf(0x1cd)]==_0x577adf(0x1b9))var _0x185d66=users[_0x577adf(0x19e)];else{if(_0x575c4e[0x0]['language']==_0x577adf(0x1c4))var _0x185d66=users[_0x577adf(0x1c4)];else{if(_0x575c4e[0x0][_0x577adf(0x1cd)]=='German')var _0x185d66=users[_0x577adf(0x1c9)];else{if(_0x575c4e[0x0]['language']==_0x577adf(0x19d))var _0x185d66=users[_0x577adf(0x19d)];else{if(_0x575c4e[0x0][_0x577adf(0x1cd)]=='French')var _0x185d66=users['French'];else{if(_0x575c4e[0x0][_0x577adf(0x1cd)]==_0x577adf(0x1a2))var _0x185d66=users[_0x577adf(0x1a7)];else{if(_0x575c4e[0x0][_0x577adf(0x1cd)]==_0x577adf(0x197))var _0x185d66=users[_0x577adf(0x197)];else{if(_0x575c4e[0x0][_0x577adf(0x1cd)]=='Arabic\x20(ae)')var _0x185d66=users['Arabic'];}}}}}}}_0x2872f4[_0x577adf(0x1d1)](_0x577adf(0x1ca),{'success':_0x308977['flash'](_0x577adf(0x1a4)),'errors':_0x308977[_0x577adf(0x1d4)](_0x577adf(0x1ce)),'role':_0x282e62,'profile':_0x503975,'master_shop':_0x575c4e,'language':_0x185d66,'sales':_0x5e5a50,'adjustment':_0x24de7e,'transfer':_0x6f7eb4});}catch(_0xfbd6d1){console[_0x577adf(0x1cc)](_0xfbd6d1);}}),router[a0_0x167185(0x1b7)](a0_0x167185(0x1c7),auth,async(_0x4423cd,_0x2c0a7f)=>{const _0x2c972c=a0_0x167185;try{const {username:_0x4a1ef0,email:_0x434ccf,role:_0x2382bc}=_0x4423cd[_0x2c972c(0x1b3)],_0x5dce37=_0x4423cd[_0x2c972c(0x1b3)],_0x1a0243=await profile[_0x2c972c(0x1c2)]({'email':_0x5dce37['email']}),_0x41d3af=await master_shop[_0x2c972c(0x1ba)](),_0x527e40=await sales[_0x2c972c(0x1ba)]({'finalize':_0x2c972c(0x1be)}),_0xdf8c96={'name':_0x2c972c(0x1d3),'code':_0x2c972c(0x1cf)};if(_0x41d3af[0x0]['language']==_0x2c972c(0x1b9))var _0x5d8843=users[_0x2c972c(0x19e)];else{if(_0x41d3af[0x0][_0x2c972c(0x1cd)]==_0x2c972c(0x1c4))var _0x5d8843=users[_0x2c972c(0x1c4)];else{if(_0x41d3af[0x0]['language']==_0x2c972c(0x1c9))var _0x5d8843=users['German'];else{if(_0x41d3af[0x0][_0x2c972c(0x1cd)]==_0x2c972c(0x19d))var _0x5d8843=users['Spanish'];else{if(_0x41d3af[0x0]['language']==_0x2c972c(0x1ab))var _0x5d8843=users[_0x2c972c(0x1ab)];else{if(_0x41d3af[0x0][_0x2c972c(0x1cd)]==_0x2c972c(0x1a2))var _0x5d8843=users[_0x2c972c(0x1a7)];else{if(_0x41d3af[0x0][_0x2c972c(0x1cd)]=='Chinese')var _0x5d8843=users['Chinese'];else{if(_0x41d3af[0x0]['language']==_0x2c972c(0x1a6))var _0x5d8843=users[_0x2c972c(0x19a)];}}}}}}}_0x2c0a7f['render'](_0x2c972c(0x19b),{'success':_0x4423cd['flash']('success'),'errors':_0x4423cd[_0x2c972c(0x1d4)](_0x2c972c(0x1ce)),'role':_0x5dce37,'profile':_0x1a0243,'master_shop':_0x41d3af,'language':_0x5d8843,'data':_0x527e40,'titleName':_0xdf8c96});}catch(_0x3b4edc){console[_0x2c972c(0x1cc)](_0x3b4edc);}}),router['post'](a0_0x167185(0x1c7),auth,async(_0x207962,_0x55eb7a)=>{const _0x1e5ea8=a0_0x167185;try{const {id:_0x168fda,invoice:_0x51d13d,value:_0x51f7cf}=_0x207962['body'],_0xcfcf3e=await sales[_0x1e5ea8(0x1c2)]({'_id':_0x168fda,'invoice':_0x51d13d});_0xcfcf3e['isAllowEdit']=_0x51f7cf;const _0x406d04=await _0xcfcf3e['save']();_0x55eb7a[_0x1e5ea8(0x1ae)]({'status':0xc8,'data':{'BoolData':_0x406d04[_0x1e5ea8(0x1b5)],'InvoiceNum':_0x406d04[_0x1e5ea8(0x1c8)]}});}catch(_0x3a1d38){return console[_0x1e5ea8(0x1cc)](_0x3a1d38),{'status':0x194,'data':_0x3a1d38[_0x1e5ea8(0x1a9)]};}}),router[a0_0x167185(0x1b7)](a0_0x167185(0x1bd),auth,async(_0x180e78,_0x2299fd)=>{const _0x234672=a0_0x167185;try{const {username:_0x21e084,email:_0x4ddf41,role:_0x42a104}=_0x180e78['user'],_0x20bbd8=_0x180e78['user'],_0x384881=await profile[_0x234672(0x1c2)]({'email':_0x20bbd8[_0x234672(0x1a5)]}),_0x10e12d=await master_shop[_0x234672(0x1ba)](),_0x2c93c6=await adjustment[_0x234672(0x1ba)]({'finalize':_0x234672(0x1be)}),_0x4864c3={'name':_0x234672(0x1a3),'code':'adj'};if(_0x10e12d[0x0][_0x234672(0x1cd)]==_0x234672(0x1b9))var _0x305fce=users[_0x234672(0x19e)];else{if(_0x10e12d[0x0][_0x234672(0x1cd)]=='Hindi')var _0x305fce=users[_0x234672(0x1c4)];else{if(_0x10e12d[0x0][_0x234672(0x1cd)]==_0x234672(0x1c9))var _0x305fce=users[_0x234672(0x1c9)];else{if(_0x10e12d[0x0]['language']==_0x234672(0x19d))var _0x305fce=users[_0x234672(0x19d)];else{if(_0x10e12d[0x0]['language']=='French')var _0x305fce=users[_0x234672(0x1ab)];else{if(_0x10e12d[0x0]['language']==_0x234672(0x1a2))var _0x305fce=users[_0x234672(0x1a7)];else{if(_0x10e12d[0x0][_0x234672(0x1cd)]==_0x234672(0x197))var _0x305fce=users[_0x234672(0x197)];else{if(_0x10e12d[0x0][_0x234672(0x1cd)]==_0x234672(0x1a6))var _0x305fce=users[_0x234672(0x19a)];}}}}}}}_0x2299fd[_0x234672(0x1d1)](_0x234672(0x19b),{'success':_0x180e78[_0x234672(0x1d4)](_0x234672(0x1a4)),'errors':_0x180e78[_0x234672(0x1d4)](_0x234672(0x1ce)),'role':_0x20bbd8,'profile':_0x384881,'master_shop':_0x10e12d,'language':_0x305fce,'data':_0x2c93c6,'titleName':_0x4864c3});}catch(_0x2bc7b3){console['log'](_0x2bc7b3);}}),router['post'](a0_0x167185(0x1bd),auth,async(_0x2e468c,_0x3812a5)=>{const _0x17b784=a0_0x167185;try{const {id:_0x508f97,invoice:_0x33c194,value:_0x27da4b}=_0x2e468c[_0x17b784(0x1b1)],_0x2187f0=await adjustment['findOne']({'_id':_0x508f97,'invoice':_0x33c194});_0x2187f0[_0x17b784(0x1b5)]=_0x27da4b;const _0x25f2e6=await _0x2187f0['save']();_0x3812a5[_0x17b784(0x1ae)]({'status':0xc8,'data':{'BoolData':_0x25f2e6['isAllowEdit'],'InvoiceNum':_0x25f2e6[_0x17b784(0x1c8)]}});}catch(_0x1e3e04){return{'status':0x194,'data':_0x1e3e04[_0x17b784(0x1a9)]};}}),router['get'](a0_0x167185(0x1b8),auth,async(_0x5cd501,_0x46da38)=>{const _0x48ed92=a0_0x167185;try{const {username:_0x26303c,email:_0x33f93c,role:_0x18858e}=_0x5cd501[_0x48ed92(0x1b3)],_0x269efd=_0x5cd501[_0x48ed92(0x1b3)],_0x31271d=await profile[_0x48ed92(0x1c2)]({'email':_0x269efd['email']}),_0x33dc89=await master_shop['find'](),_0x2d7aa4=await transfers[_0x48ed92(0x1ba)]({'finalize':'False'}),_0x2228a8={'name':'Transfer\x20Raw\x20materials','code':'trf'};if(_0x33dc89[0x0][_0x48ed92(0x1cd)]==_0x48ed92(0x1b9))var _0xeff39e=users[_0x48ed92(0x19e)];else{if(_0x33dc89[0x0][_0x48ed92(0x1cd)]==_0x48ed92(0x1c4))var _0xeff39e=users[_0x48ed92(0x1c4)];else{if(_0x33dc89[0x0][_0x48ed92(0x1cd)]==_0x48ed92(0x1c9))var _0xeff39e=users['German'];else{if(_0x33dc89[0x0][_0x48ed92(0x1cd)]=='Spanish')var _0xeff39e=users[_0x48ed92(0x19d)];else{if(_0x33dc89[0x0]['language']==_0x48ed92(0x1ab))var _0xeff39e=users['French'];else{if(_0x33dc89[0x0]['language']==_0x48ed92(0x1a2))var _0xeff39e=users[_0x48ed92(0x1a7)];else{if(_0x33dc89[0x0][_0x48ed92(0x1cd)]=='Chinese')var _0xeff39e=users[_0x48ed92(0x197)];else{if(_0x33dc89[0x0]['language']==_0x48ed92(0x1a6))var _0xeff39e=users[_0x48ed92(0x19a)];}}}}}}}_0x46da38['render'](_0x48ed92(0x19b),{'success':_0x5cd501[_0x48ed92(0x1d4)]('success'),'errors':_0x5cd501['flash'](_0x48ed92(0x1ce)),'role':_0x269efd,'profile':_0x31271d,'master_shop':_0x33dc89,'language':_0xeff39e,'data':_0x2d7aa4,'titleName':_0x2228a8});}catch(_0x535a36){console[_0x48ed92(0x1cc)](_0x535a36);}}),router[a0_0x167185(0x19c)]('/transfer',auth,async(_0x47139f,_0x356ec1)=>{const _0x2c4c34=a0_0x167185;try{const {id:_0x421386,invoice:_0x397c98,value:_0x498673}=_0x47139f[_0x2c4c34(0x1b1)],_0x19fd17=await transfers[_0x2c4c34(0x1c2)]({'_id':_0x421386,'invoice':_0x397c98});_0x19fd17[_0x2c4c34(0x1b5)]=_0x498673;const _0x50ccf4=await _0x19fd17[_0x2c4c34(0x1a0)]();_0x356ec1['json']({'status':0xc8,'data':{'BoolData':_0x50ccf4['isAllowEdit'],'InvoiceNum':_0x50ccf4[_0x2c4c34(0x1c8)]}});}catch(_0x1b4795){return{'status':0x194,'data':_0x1b4795['message']};}}),router[a0_0x167185(0x1b7)](a0_0x167185(0x1ad),auth,async(_0x4a3960,_0xe8478d)=>{const _0x55326b=a0_0x167185;try{const {username:_0x4d8e56,email:_0x25e3cf,role:_0x3de8bc}=_0x4a3960[_0x55326b(0x1b3)],_0x3d6b3d=_0x4a3960[_0x55326b(0x1b3)],_0x30309d=await profile[_0x55326b(0x1c2)]({'email':_0x3d6b3d[_0x55326b(0x1a5)]}),_0x16e7be=await master_shop[_0x55326b(0x1ba)](),_0x12bd9c=await sales_finished['find']({'finalize':_0x55326b(0x1be)}),_0x5473ef={'name':_0x55326b(0x1b6),'code':'outF'};if(_0x16e7be[0x0][_0x55326b(0x1cd)]=='English\x20(US)')var _0x33a149=users[_0x55326b(0x19e)];else{if(_0x16e7be[0x0][_0x55326b(0x1cd)]==_0x55326b(0x1c4))var _0x33a149=users[_0x55326b(0x1c4)];else{if(_0x16e7be[0x0][_0x55326b(0x1cd)]==_0x55326b(0x1c9))var _0x33a149=users[_0x55326b(0x1c9)];else{if(_0x16e7be[0x0]['language']==_0x55326b(0x19d))var _0x33a149=users['Spanish'];else{if(_0x16e7be[0x0][_0x55326b(0x1cd)]==_0x55326b(0x1ab))var _0x33a149=users['French'];else{if(_0x16e7be[0x0][_0x55326b(0x1cd)]=='Portuguese\x20(BR)')var _0x33a149=users[_0x55326b(0x1a7)];else{if(_0x16e7be[0x0]['language']==_0x55326b(0x197))var _0x33a149=users[_0x55326b(0x197)];else{if(_0x16e7be[0x0][_0x55326b(0x1cd)]==_0x55326b(0x1a6))var _0x33a149=users[_0x55326b(0x19a)];}}}}}}}_0xe8478d['render']('approvals_view',{'success':_0x4a3960['flash']('success'),'errors':_0x4a3960[_0x55326b(0x1d4)](_0x55326b(0x1ce)),'role':_0x3d6b3d,'profile':_0x30309d,'master_shop':_0x16e7be,'language':_0x33a149,'data':_0x12bd9c,'titleName':_0x5473ef});}catch(_0x1e01d4){console[_0x55326b(0x1cc)](_0x1e01d4);}}),router[a0_0x167185(0x19c)](a0_0x167185(0x1ad),auth,async(_0x44522c,_0x4efa0e)=>{const _0x9fa0aa=a0_0x167185;try{const {id:_0x13e8a5,invoice:_0x19a0f2,value:_0x16a1fc}=_0x44522c[_0x9fa0aa(0x1b1)],_0x572cf4=await sales_finished['findOne']({'_id':_0x13e8a5,'invoice':_0x19a0f2});_0x572cf4[_0x9fa0aa(0x1b5)]=_0x16a1fc;const _0x47e984=await _0x572cf4[_0x9fa0aa(0x1a0)]();_0x4efa0e[_0x9fa0aa(0x1ae)]({'status':0xc8,'data':{'BoolData':_0x47e984['isAllowEdit'],'InvoiceNum':_0x47e984[_0x9fa0aa(0x1c8)]}});}catch(_0x460fe3){return console[_0x9fa0aa(0x1cc)](_0x460fe3),{'status':0x194,'data':_0x460fe3['message']};}}),router['get'](a0_0x167185(0x1c0),auth,async(_0x487a94,_0x4d0166)=>{const _0x3941a1=a0_0x167185;try{const {username:_0x8a270a,email:_0xe9a8b7,role:_0x4b3fee}=_0x487a94['user'],_0x32df60=_0x487a94[_0x3941a1(0x1b3)],_0x5bbb3c=await profile[_0x3941a1(0x1c2)]({'email':_0x32df60['email']}),_0x5925b4=await master_shop[_0x3941a1(0x1ba)](),_0x351fe1=await adjustment_finished['find']({'finalize':_0x3941a1(0x1be)}),_0xa56844={'name':_0x3941a1(0x1a8),'code':_0x3941a1(0x1c1)};if(_0x5925b4[0x0][_0x3941a1(0x1cd)]==_0x3941a1(0x1b9))var _0x200c89=users['English'];else{if(_0x5925b4[0x0][_0x3941a1(0x1cd)]==_0x3941a1(0x1c4))var _0x200c89=users[_0x3941a1(0x1c4)];else{if(_0x5925b4[0x0][_0x3941a1(0x1cd)]=='German')var _0x200c89=users[_0x3941a1(0x1c9)];else{if(_0x5925b4[0x0][_0x3941a1(0x1cd)]==_0x3941a1(0x19d))var _0x200c89=users[_0x3941a1(0x19d)];else{if(_0x5925b4[0x0]['language']==_0x3941a1(0x1ab))var _0x200c89=users[_0x3941a1(0x1ab)];else{if(_0x5925b4[0x0]['language']=='Portuguese\x20(BR)')var _0x200c89=users[_0x3941a1(0x1a7)];else{if(_0x5925b4[0x0][_0x3941a1(0x1cd)]==_0x3941a1(0x197))var _0x200c89=users[_0x3941a1(0x197)];else{if(_0x5925b4[0x0][_0x3941a1(0x1cd)]==_0x3941a1(0x1a6))var _0x200c89=users['Arabic'];}}}}}}}_0x4d0166[_0x3941a1(0x1d1)](_0x3941a1(0x19b),{'success':_0x487a94[_0x3941a1(0x1d4)](_0x3941a1(0x1a4)),'errors':_0x487a94[_0x3941a1(0x1d4)](_0x3941a1(0x1ce)),'role':_0x32df60,'profile':_0x5bbb3c,'master_shop':_0x5925b4,'language':_0x200c89,'data':_0x351fe1,'titleName':_0xa56844});}catch(_0x4566f2){console['log'](_0x4566f2);}}),router[a0_0x167185(0x19c)](a0_0x167185(0x1c0),auth,async(_0x5810d7,_0x2a06a7)=>{const _0x50743d=a0_0x167185;try{const {id:_0x4feae1,invoice:_0x19def8,value:_0x53e33c}=_0x5810d7[_0x50743d(0x1b1)],_0x338db8=await adjustment_finished[_0x50743d(0x1c2)]({'_id':_0x4feae1,'invoice':_0x19def8});_0x338db8['isAllowEdit']=_0x53e33c;const _0x4c80ab=await _0x338db8[_0x50743d(0x1a0)]();_0x2a06a7[_0x50743d(0x1ae)]({'status':0xc8,'data':{'BoolData':_0x4c80ab['isAllowEdit'],'InvoiceNum':_0x4c80ab[_0x50743d(0x1c8)]}});}catch(_0x11197a){return{'status':0x194,'data':_0x11197a[_0x50743d(0x1a9)]};}}),router[a0_0x167185(0x1b7)](a0_0x167185(0x1b4),auth,async(_0x34ba14,_0x3249a4)=>{const _0x2d1800=a0_0x167185;try{const {username:_0x59c9b1,email:_0x3b2541,role:_0x3b9c81}=_0x34ba14[_0x2d1800(0x1b3)],_0x5d0220=_0x34ba14[_0x2d1800(0x1b3)],_0x1543bd=await profile[_0x2d1800(0x1c2)]({'email':_0x5d0220[_0x2d1800(0x1a5)]}),_0x3097b0=await master_shop['find'](),_0x2e0cb1=await transfers_finished[_0x2d1800(0x1ba)]({'finalize':'False'}),_0x78ae09={'name':_0x2d1800(0x1bf),'code':_0x2d1800(0x1c5)};if(_0x3097b0[0x0][_0x2d1800(0x1cd)]==_0x2d1800(0x1b9))var _0x31b16c=users[_0x2d1800(0x19e)];else{if(_0x3097b0[0x0][_0x2d1800(0x1cd)]==_0x2d1800(0x1c4))var _0x31b16c=users['Hindi'];else{if(_0x3097b0[0x0]['language']=='German')var _0x31b16c=users['German'];else{if(_0x3097b0[0x0][_0x2d1800(0x1cd)]==_0x2d1800(0x19d))var _0x31b16c=users[_0x2d1800(0x19d)];else{if(_0x3097b0[0x0][_0x2d1800(0x1cd)]==_0x2d1800(0x1ab))var _0x31b16c=users[_0x2d1800(0x1ab)];else{if(_0x3097b0[0x0][_0x2d1800(0x1cd)]==_0x2d1800(0x1a2))var _0x31b16c=users['Portuguese'];else{if(_0x3097b0[0x0][_0x2d1800(0x1cd)]=='Chinese')var _0x31b16c=users[_0x2d1800(0x197)];else{if(_0x3097b0[0x0][_0x2d1800(0x1cd)]==_0x2d1800(0x1a6))var _0x31b16c=users[_0x2d1800(0x19a)];}}}}}}}_0x3249a4[_0x2d1800(0x1d1)]('approvals_view',{'success':_0x34ba14['flash'](_0x2d1800(0x1a4)),'errors':_0x34ba14[_0x2d1800(0x1d4)](_0x2d1800(0x1ce)),'role':_0x5d0220,'profile':_0x1543bd,'master_shop':_0x3097b0,'language':_0x31b16c,'data':_0x2e0cb1,'titleName':_0x78ae09});}catch(_0xa831b3){console[_0x2d1800(0x1cc)](_0xa831b3);}}),router['post'](a0_0x167185(0x1b4),auth,async(_0x9f94f6,_0x14e29b)=>{const _0x26eb58=a0_0x167185;try{const {id:_0x282c85,invoice:_0x28a87f,value:_0x2f622c}=_0x9f94f6[_0x26eb58(0x1b1)],_0x5ad230=await transfers_finished[_0x26eb58(0x1c2)]({'_id':_0x282c85,'invoice':_0x28a87f});_0x5ad230[_0x26eb58(0x1b5)]=_0x2f622c;const _0xf72e82=await _0x5ad230['save']();_0x14e29b[_0x26eb58(0x1ae)]({'status':0xc8,'data':{'BoolData':_0xf72e82['isAllowEdit'],'InvoiceNum':_0xf72e82[_0x26eb58(0x1c8)]}});}catch(_0x1df836){return{'status':0x194,'data':_0x1df836[_0x26eb58(0x1a9)]};}}),module['exports']=router;