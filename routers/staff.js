const a0_0x581090=a0_0x3330;(function(_0x5575f4,_0x49875f){const _0x3d8ee7=a0_0x3330,_0x518e6b=_0x5575f4();while(!![]){try{const _0x6f5625=parseInt(_0x3d8ee7(0x17a))/0x1*(parseInt(_0x3d8ee7(0x192))/0x2)+parseInt(_0x3d8ee7(0x177))/0x3+parseInt(_0x3d8ee7(0x1ac))/0x4+-parseInt(_0x3d8ee7(0x18a))/0x5*(-parseInt(_0x3d8ee7(0x18f))/0x6)+parseInt(_0x3d8ee7(0x1a6))/0x7*(-parseInt(_0x3d8ee7(0x19d))/0x8)+parseInt(_0x3d8ee7(0x1a9))/0x9+-parseInt(_0x3d8ee7(0x197))/0xa;if(_0x6f5625===_0x49875f)break;else _0x518e6b['push'](_0x518e6b['shift']());}catch(_0x528ce2){_0x518e6b['push'](_0x518e6b['shift']());}}}(a0_0x16b0,0xec223));const express=require(a0_0x581090(0x188)),app=express(),router=express[a0_0x581090(0x191)](),bcrypt=require('bcryptjs'),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require(a0_0x581090(0x17b)),auth=require(a0_0x581090(0x178)),users=require(a0_0x581090(0x181));router[a0_0x581090(0x1a4)](a0_0x581090(0x17d),auth,async(_0x8a9634,_0xea98a5)=>{const _0x168b9a=a0_0x581090;try{const {username:_0x389700,email:_0x1d9ee8,role:_0x5eaa1a}=_0x8a9634[_0x168b9a(0x184)],_0x2c633b=_0x8a9634[_0x168b9a(0x184)],_0x3155ad=await profile[_0x168b9a(0x1b4)]({'email':_0x2c633b[_0x168b9a(0x1b3)]}),_0x116279=await master_shop['find']();console[_0x168b9a(0x19b)](_0x168b9a(0x182),_0x116279),warehouse_data=await warehouse[_0x168b9a(0x19e)]([{'$match':{'status':_0x168b9a(0x189)}},{'$group':{'_id':_0x168b9a(0x18b),'name':{'$first':'$name'}}}]);const _0x43f4aa=await staff[_0x168b9a(0x180)]();console[_0x168b9a(0x19b)](_0x43f4aa);if(_0x116279[0x0]['language']==_0x168b9a(0x186)){var _0x1ac21f=users[_0x168b9a(0x18d)];console[_0x168b9a(0x19b)](_0x1ac21f);}else{if(_0x116279[0x0][_0x168b9a(0x190)]==_0x168b9a(0x17c))var _0x1ac21f=users[_0x168b9a(0x17c)];else{if(_0x116279[0x0][_0x168b9a(0x190)]=='German')var _0x1ac21f=users[_0x168b9a(0x1a3)];else{if(_0x116279[0x0]['language']==_0x168b9a(0x17f))var _0x1ac21f=users[_0x168b9a(0x17f)];else{if(_0x116279[0x0][_0x168b9a(0x190)]==_0x168b9a(0x18c))var _0x1ac21f=users[_0x168b9a(0x18c)];else{if(_0x116279[0x0][_0x168b9a(0x190)]==_0x168b9a(0x1aa))var _0x1ac21f=users[_0x168b9a(0x19c)];else{if(_0x116279[0x0][_0x168b9a(0x190)]==_0x168b9a(0x1a2))var _0x1ac21f=users[_0x168b9a(0x1a2)];else{if(_0x116279[0x0][_0x168b9a(0x190)]==_0x168b9a(0x179))var _0x1ac21f=users['Arabic'];}}}}}}}let _0x3c1838=['Raw\x20Materials',_0x168b9a(0x1b1)];_0xea98a5['render']('staff',{'success':_0x8a9634[_0x168b9a(0x1a5)]('success'),'errors':_0x8a9634['flash'](_0x168b9a(0x1a8)),'role':_0x2c633b,'profile':_0x3155ad,'master_shop':_0x116279,'user':_0x43f4aa,'language':_0x1ac21f,'warehouse':warehouse_data,'warehouse_cat':_0x3c1838});}catch(_0x1a3a8f){console[_0x168b9a(0x19b)](_0x1a3a8f);}}),router[a0_0x581090(0x196)](a0_0x581090(0x17d),auth,async(_0xfad4c8,_0x56ac3a)=>{const _0x4ef38a=a0_0x581090;try{const {name:_0x1888cb,email:_0x4140c5,mobile:_0x1388b5,password:_0x340b55,status:_0x5e8f43,warehouse:_0x195e89,position:_0x28d020,warehouse_cat:_0x4ba042}=_0xfad4c8[_0x4ef38a(0x1a1)],_0x3b50d9=await bcrypt[_0x4ef38a(0x195)](_0x340b55,0xa),_0x476e26=new staff({'name':_0x1888cb,'email':_0x4140c5,'mobile':_0x1388b5,'status':_0x5e8f43,'warehouse':_0x195e89,'position':_0x28d020,'warehouse_category':_0x4ba042}),_0x19dcc2=await staff[_0x4ef38a(0x1b4)]({'email':_0x4140c5});console[_0x4ef38a(0x19b)](_0x19dcc2);if(_0x19dcc2)return _0xfad4c8[_0x4ef38a(0x1a5)](_0x4ef38a(0x1a8),_0x4ef38a(0x198)+_0x4140c5+_0x4ef38a(0x19a)),_0x56ac3a[_0x4ef38a(0x19f)](_0x4ef38a(0x194)),![];const _0x3976b5=await _0x476e26[_0x4ef38a(0x193)](),_0xd941b1=new sing_up({'name':_0x1888cb,'email':_0x4140c5,'password':_0x3b50d9,'role':'staff'}),_0x216587=await _0xd941b1[_0x4ef38a(0x193)](),_0x521636=new profile({'firstname':_0x1888cb,'email':_0x4140c5}),_0x4c2f0e=await _0x521636[_0x4ef38a(0x193)]();_0xfad4c8[_0x4ef38a(0x1a5)]('success',_0x1888cb+'\x20is\x20add\x20successfully'),_0x56ac3a[_0x4ef38a(0x19f)](_0x4ef38a(0x1a0));}catch(_0x4f3989){console[_0x4ef38a(0x19b)](_0x4f3989);}}),router[a0_0x581090(0x1a4)](a0_0x581090(0x199),auth,async(_0x1a90f5,_0x3eb5d3)=>{const _0x1d3406=a0_0x581090;try{const _0x34a24b=_0x1a90f5['params']['id'],_0x59271d=await master_shop['find'](),_0x17aa6a=await staff[_0x1d3406(0x18e)](_0x34a24b);if(_0x59271d[0x0]['language']==_0x1d3406(0x186)){var _0x1f9d70=users[_0x1d3406(0x18d)];console['log'](_0x1f9d70);}else{if(_0x59271d[0x0]['language']==_0x1d3406(0x17c))var _0x1f9d70=users[_0x1d3406(0x17c)];else{if(_0x59271d[0x0][_0x1d3406(0x190)]=='German')var _0x1f9d70=users[_0x1d3406(0x1a3)];else{if(_0x59271d[0x0]['language']==_0x1d3406(0x17f))var _0x1f9d70=users[_0x1d3406(0x17f)];else{if(_0x59271d[0x0]['language']=='French')var _0x1f9d70=users[_0x1d3406(0x18c)];else{if(_0x59271d[0x0][_0x1d3406(0x190)]=='Portuguese\x20(BR)')var _0x1f9d70=users[_0x1d3406(0x19c)];else{if(_0x59271d[0x0][_0x1d3406(0x190)]==_0x1d3406(0x1a2))var _0x1f9d70=users[_0x1d3406(0x1a2)];else{if(_0x59271d[0x0]['language']==_0x1d3406(0x179))var _0x1f9d70=users[_0x1d3406(0x176)];}}}}}}}let _0x3699ee=[_0x1d3406(0x1af),_0x1d3406(0x1b1)];_0x3eb5d3[_0x1d3406(0x183)](_0x1d3406(0x185),{'success':_0x1a90f5['flash'](_0x1d3406(0x1b0)),'errors':_0x1a90f5['flash'](_0x1d3406(0x1a8)),'master_shop':_0x59271d,'user':_0x17aa6a,'language':_0x1f9d70,'warehouse_cat':_0x3699ee});}catch(_0x1bd733){console[_0x1d3406(0x19b)](_0x1bd733);}}),router['post'](a0_0x581090(0x199),auth,async(_0x3077ac,_0xa738f0)=>{const _0x84beaf=a0_0x581090;try{const _0xeba6fd=_0x3077ac[_0x84beaf(0x1a7)]['id'],_0x33bf1a=await staff[_0x84beaf(0x18e)](_0xeba6fd),{name:_0x579700,email:_0x1af0e6,mobile:_0x23a3ff,password:_0x3b89cf,status:_0x27a90e,warehouse:_0x4e5373,position:_0x22b729,warehouse_cat:_0x2f5841}=_0x3077ac[_0x84beaf(0x1a1)];_0x33bf1a['name']=_0x579700,_0x33bf1a[_0x84beaf(0x1b3)]=_0x1af0e6,_0x33bf1a[_0x84beaf(0x1b2)]=_0x23a3ff,_0x33bf1a['password']=_0x3b89cf,_0x33bf1a['status']=_0x27a90e,_0x33bf1a[_0x84beaf(0x1ad)]=_0x4e5373,_0x33bf1a[_0x84beaf(0x1ab)]=_0x22b729,_0x33bf1a[_0x84beaf(0x17e)]=_0x2f5841;const _0x2c782d=await _0x33bf1a[_0x84beaf(0x193)](),_0x26b986=await profile['findOne']({'email':_0x1af0e6});_0x26b986[_0x84beaf(0x1ae)]=_0x579700,_0x26b986[_0x84beaf(0x1b3)]=_0x1af0e6,await _0x26b986[_0x84beaf(0x193)](),_0x3077ac[_0x84beaf(0x1a5)](_0x84beaf(0x1b0),'staff\x20data\x20update\x20successfully'),_0xa738f0[_0x84beaf(0x19f)](_0x84beaf(0x1a0));}catch(_0x2d003d){console[_0x84beaf(0x19b)](_0x2d003d),_0xa738f0[_0x84beaf(0x187)](0xc8)['json'](_0x2d003d);}}),module['exports']=router;function a0_0x3330(_0x59a37f,_0x28ccd6){const _0x16b00c=a0_0x16b0();return a0_0x3330=function(_0x3330af,_0x547714){_0x3330af=_0x3330af-0x176;let _0xa59bb1=_0x16b00c[_0x3330af];return _0xa59bb1;},a0_0x3330(_0x59a37f,_0x28ccd6);}function a0_0x16b0(){const _0x1334af=['French','English','findById','6348otTmLr','language','Router','1707872LCjKSi','save','back','hash','post','30199060ARvrtV','Email\x20','/view/:id','\x20is\x20alredy\x20added.\x20please\x20choose\x20another','log','Portuguese','11536jyTHQs','aggregate','redirect','/staff/view','body','Chinese','German','get','flash','742ozCmKo','params','errors','13098402eyCABA','Portuguese\x20(BR)','position','1642232VeTLCM','warehouse','firstname','Raw\x20Materials','success','Finished\x20Goods','mobile','email','findOne','Arabic','765303TPuwPU','../middleware/auth','Arabic\x20(ae)','2QhefOu','../models/all_models','Hindi','/view','warehouse_category','Spanish','find','../public/language/languages.json','master','render','user','staff','English\x20(US)','status','express','Enabled','1470euHsRt','$name'];a0_0x16b0=function(){return _0x1334af;};return a0_0x16b0();}