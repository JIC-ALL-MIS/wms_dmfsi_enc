function a0_0xf121(_0x57097a,_0x481d13){const _0x12d6fb=a0_0x12d6();return a0_0xf121=function(_0xf121d6,_0x4e8991){_0xf121d6=_0xf121d6-0xad;let _0x74751a=_0x12d6fb[_0xf121d6];return _0x74751a;},a0_0xf121(_0x57097a,_0x481d13);}const a0_0x4e0a72=a0_0xf121;(function(_0x18b21c,_0x4f52e3){const _0x18f12a=a0_0xf121,_0x2c16d5=_0x18b21c();while(!![]){try{const _0x3c0f02=-parseInt(_0x18f12a(0xe5))/0x1+parseInt(_0x18f12a(0xc8))/0x2+-parseInt(_0x18f12a(0xcf))/0x3*(parseInt(_0x18f12a(0xdc))/0x4)+parseInt(_0x18f12a(0xe2))/0x5+-parseInt(_0x18f12a(0xd5))/0x6*(-parseInt(_0x18f12a(0xd6))/0x7)+-parseInt(_0x18f12a(0xcb))/0x8+parseInt(_0x18f12a(0xdf))/0x9;if(_0x3c0f02===_0x4f52e3)break;else _0x2c16d5['push'](_0x2c16d5['shift']());}catch(_0x5b4d7e){_0x2c16d5['push'](_0x2c16d5['shift']());}}}(a0_0x12d6,0x9cd52));const express=require(a0_0x4e0a72(0xcd)),app=express(),router=express[a0_0x4e0a72(0xb0)](),bcrypt=require(a0_0x4e0a72(0xca)),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require(a0_0x4e0a72(0xc9)),auth=require('../middleware/auth'),users=require(a0_0x4e0a72(0xde));router[a0_0x4e0a72(0xb8)](a0_0x4e0a72(0xc0),auth,async(_0x29e62a,_0x19771c)=>{const _0x5d5666=a0_0x4e0a72;try{const {username:_0x265add,email:_0x2d5256,role:_0x4a5443}=_0x29e62a['user'],_0x14e7d9=_0x29e62a[_0x5d5666(0xb3)],_0x488e3b=await profile[_0x5d5666(0xad)]({'email':_0x14e7d9['email']}),_0x3fb7b2=await master_shop[_0x5d5666(0xc6)]();console[_0x5d5666(0xb4)](_0x5d5666(0xe6),_0x3fb7b2),warehouse_data=await warehouse[_0x5d5666(0xb6)]([{'$match':{'status':_0x5d5666(0xdd)}},{'$group':{'_id':_0x5d5666(0xb1),'name':{'$first':_0x5d5666(0xb1)}}}]);const _0x536119=await staff['find']();console[_0x5d5666(0xb4)](_0x536119);if(_0x3fb7b2[0x0][_0x5d5666(0xc7)]==_0x5d5666(0xd2)){var _0x47f7f1=users['English'];console['log'](_0x47f7f1);}else{if(_0x3fb7b2[0x0]['language']==_0x5d5666(0xae))var _0x47f7f1=users[_0x5d5666(0xae)];else{if(_0x3fb7b2[0x0]['language']==_0x5d5666(0xaf))var _0x47f7f1=users[_0x5d5666(0xaf)];else{if(_0x3fb7b2[0x0]['language']=='Spanish')var _0x47f7f1=users[_0x5d5666(0xd7)];else{if(_0x3fb7b2[0x0][_0x5d5666(0xc7)]==_0x5d5666(0xc4))var _0x47f7f1=users['French'];else{if(_0x3fb7b2[0x0][_0x5d5666(0xc7)]=='Portuguese\x20(BR)')var _0x47f7f1=users[_0x5d5666(0xc3)];else{if(_0x3fb7b2[0x0][_0x5d5666(0xc7)]==_0x5d5666(0xd0))var _0x47f7f1=users[_0x5d5666(0xd0)];else{if(_0x3fb7b2[0x0][_0x5d5666(0xc7)]==_0x5d5666(0xd9))var _0x47f7f1=users[_0x5d5666(0xe7)];}}}}}}}let _0x35a6a2=['Raw\x20Materials',_0x5d5666(0xcc)];_0x19771c[_0x5d5666(0xd1)](_0x5d5666(0xbc),{'success':_0x29e62a[_0x5d5666(0xc2)](_0x5d5666(0xb5)),'errors':_0x29e62a[_0x5d5666(0xc2)](_0x5d5666(0xba)),'role':_0x14e7d9,'profile':_0x488e3b,'master_shop':_0x3fb7b2,'user':_0x536119,'language':_0x47f7f1,'warehouse':warehouse_data,'warehouse_cat':_0x35a6a2});}catch(_0x4a853e){console[_0x5d5666(0xb4)](_0x4a853e);}}),router[a0_0x4e0a72(0xdb)]('/view',auth,async(_0x34764d,_0x19d7b9)=>{const _0x3b9926=a0_0x4e0a72;try{const {name:_0x26bf2f,email:_0x15dc5f,mobile:_0x443b70,password:_0x37daad,status:_0x210a61,warehouse:_0x2be474,position:_0x4eb2e9,warehouse_cat:_0x350f0b}=_0x34764d[_0x3b9926(0xda)],_0x3258bc=await bcrypt['hash'](_0x37daad,0xa),_0x3477a5=new staff({'name':_0x26bf2f,'email':_0x15dc5f,'mobile':_0x443b70,'status':_0x210a61,'warehouse':_0x2be474,'position':_0x4eb2e9,'warehouse_category':_0x350f0b}),_0x5afd1d=await staff[_0x3b9926(0xad)]({'email':_0x15dc5f});console[_0x3b9926(0xb4)](_0x5afd1d);if(_0x5afd1d)return _0x34764d[_0x3b9926(0xc2)]('errors',_0x3b9926(0xe0)+_0x15dc5f+'\x20is\x20alredy\x20added.\x20please\x20choose\x20another'),_0x19d7b9['redirect']('back'),![];const _0x3f7195=await _0x3477a5[_0x3b9926(0xe3)](),_0x5043f4=new sing_up({'name':_0x26bf2f,'email':_0x15dc5f,'password':_0x3258bc,'role':_0x3b9926(0xbc)}),_0x3f580e=await _0x5043f4[_0x3b9926(0xe3)](),_0x288cff=new profile({'firstname':_0x26bf2f,'email':_0x15dc5f}),_0x533caf=await _0x288cff[_0x3b9926(0xe3)]();_0x34764d[_0x3b9926(0xc2)](_0x3b9926(0xb5),_0x26bf2f+'\x20is\x20add\x20successfully'),_0x19d7b9[_0x3b9926(0xb9)](_0x3b9926(0xce));}catch(_0x1c4f16){console[_0x3b9926(0xb4)](_0x1c4f16);}}),router['get'](a0_0x4e0a72(0xb2),auth,async(_0x5ec96a,_0xfd8b29)=>{const _0x4a47b0=a0_0x4e0a72;try{const _0x431c42=_0x5ec96a['params']['id'],_0x339049=await master_shop[_0x4a47b0(0xc6)](),_0x2fd72a=await staff[_0x4a47b0(0xbd)](_0x431c42);if(_0x339049[0x0][_0x4a47b0(0xc7)]==_0x4a47b0(0xd2)){var _0xafddc8=users[_0x4a47b0(0xc1)];console[_0x4a47b0(0xb4)](_0xafddc8);}else{if(_0x339049[0x0][_0x4a47b0(0xc7)]=='Hindi')var _0xafddc8=users[_0x4a47b0(0xae)];else{if(_0x339049[0x0][_0x4a47b0(0xc7)]==_0x4a47b0(0xaf))var _0xafddc8=users[_0x4a47b0(0xaf)];else{if(_0x339049[0x0][_0x4a47b0(0xc7)]==_0x4a47b0(0xd7))var _0xafddc8=users[_0x4a47b0(0xd7)];else{if(_0x339049[0x0][_0x4a47b0(0xc7)]==_0x4a47b0(0xc4))var _0xafddc8=users[_0x4a47b0(0xc4)];else{if(_0x339049[0x0]['language']==_0x4a47b0(0xe4))var _0xafddc8=users[_0x4a47b0(0xc3)];else{if(_0x339049[0x0][_0x4a47b0(0xc7)]==_0x4a47b0(0xd0))var _0xafddc8=users['Chinese'];else{if(_0x339049[0x0]['language']==_0x4a47b0(0xd9))var _0xafddc8=users[_0x4a47b0(0xe7)];}}}}}}}let _0x134ac9=[_0x4a47b0(0xc5),_0x4a47b0(0xcc)];_0xfd8b29['render'](_0x4a47b0(0xbc),{'success':_0x5ec96a[_0x4a47b0(0xc2)]('success'),'errors':_0x5ec96a[_0x4a47b0(0xc2)]('errors'),'master_shop':_0x339049,'user':_0x2fd72a,'language':_0xafddc8,'warehouse_cat':_0x134ac9});}catch(_0x43122f){console[_0x4a47b0(0xb4)](_0x43122f);}}),router[a0_0x4e0a72(0xdb)](a0_0x4e0a72(0xb2),auth,async(_0x3bbd15,_0x992eca)=>{const _0x4cd2b7=a0_0x4e0a72;try{const _0x4a5113=_0x3bbd15[_0x4cd2b7(0xbe)]['id'],_0x4cc7f4=await staff[_0x4cd2b7(0xbd)](_0x4a5113),{name:_0x495b2e,email:_0x47031b,mobile:_0x21ab79,password:_0x5a5a5f,status:_0x228039,warehouse:_0x55ad0c,position:_0x12789d,warehouse_cat:_0x2c979c}=_0x3bbd15[_0x4cd2b7(0xda)];_0x4cc7f4[_0x4cd2b7(0xe1)]=_0x495b2e,_0x4cc7f4[_0x4cd2b7(0xd8)]=_0x47031b,_0x4cc7f4['mobile']=_0x21ab79,_0x4cc7f4['password']=_0x5a5a5f,_0x4cc7f4[_0x4cd2b7(0xb7)]=_0x228039,_0x4cc7f4[_0x4cd2b7(0xd3)]=_0x55ad0c,_0x4cc7f4['position']=_0x12789d,_0x4cc7f4[_0x4cd2b7(0xbb)]=_0x2c979c;const _0x4ef93c=await _0x4cc7f4['save'](),_0x160951=await profile[_0x4cd2b7(0xad)]({'email':_0x47031b});_0x160951[_0x4cd2b7(0xbf)]=_0x495b2e,_0x160951[_0x4cd2b7(0xd8)]=_0x47031b,await _0x160951['save'](),_0x3bbd15[_0x4cd2b7(0xc2)]('success','staff\x20data\x20update\x20successfully'),_0x992eca[_0x4cd2b7(0xb9)](_0x4cd2b7(0xce));}catch(_0x3eb58e){console[_0x4cd2b7(0xb4)](_0x3eb58e),_0x992eca[_0x4cd2b7(0xb7)](0xc8)['json'](_0x3eb58e);}}),module[a0_0x4e0a72(0xd4)]=router;function a0_0x12d6(){const _0x15d6b5=['Finished\x20Goods','express','/staff/view','3246ijAFTs','Chinese','render','English\x20(US)','warehouse','exports','6FDWkNr','5751137nTOxso','Spanish','email','Arabic\x20(ae)','body','post','3164shzxTy','Enabled','../public/language/languages.json','5394240ZondDR','Email\x20','name','3440710cFmxyS','save','Portuguese\x20(BR)','11869zjhImZ','master','Arabic','findOne','Hindi','German','Router','$name','/view/:id','user','log','success','aggregate','status','get','redirect','errors','warehouse_category','staff','findById','params','firstname','/view','English','flash','Portuguese','French','Raw\x20Materials','find','language','966512TpNPWs','../models/all_models','bcryptjs','8657856KMgwSw'];a0_0x12d6=function(){return _0x15d6b5;};return a0_0x12d6();}