function a0_0x5318(_0x20625f,_0x152d50){const _0x83ba12=a0_0x83ba();return a0_0x5318=function(_0x53186d,_0x8d98e5){_0x53186d=_0x53186d-0xbe;let _0x56535b=_0x83ba12[_0x53186d];return _0x56535b;},a0_0x5318(_0x20625f,_0x152d50);}const a0_0xdede62=a0_0x5318;(function(_0x24e0f6,_0x558d81){const _0x300921=a0_0x5318,_0x570c6f=_0x24e0f6();while(!![]){try{const _0x37a844=-parseInt(_0x300921(0xe6))/0x1+-parseInt(_0x300921(0xe0))/0x2+parseInt(_0x300921(0xdc))/0x3+parseInt(_0x300921(0xf2))/0x4+parseInt(_0x300921(0xd1))/0x5+-parseInt(_0x300921(0xbf))/0x6*(-parseInt(_0x300921(0xf4))/0x7)+-parseInt(_0x300921(0xf5))/0x8;if(_0x37a844===_0x558d81)break;else _0x570c6f['push'](_0x570c6f['shift']());}catch(_0x343b29){_0x570c6f['push'](_0x570c6f['shift']());}}}(a0_0x83ba,0x4cc0d));const express=require(a0_0xdede62(0xf9)),app=express(),router=express[a0_0xdede62(0xe9)](),bcrypt=require(a0_0xdede62(0xc4)),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require('../models/all_models'),auth=require(a0_0xdede62(0xc9)),users=require(a0_0xdede62(0xd7));function a0_0x83ba(){const _0x16dc58=['mobile','Router','body','Arabic\x20(ae)','errors','findById','redirect','get','Portuguese\x20(BR)','findOne','1122008jdkiFJ','user','35kxrmiG','6658816nOGydF','aggregate','warehouse_category','find','express','English\x20(US)','email','218364JgwQsy','Raw\x20Materials','Email\x20','Hindi','language','bcryptjs','Spanish','flash','status','params','../middleware/auth','post','Chinese','staff\x20data\x20update\x20successfully','staff','Finished\x20Goods','back','Portuguese','2879710RxphlW','French','English','position','$name','save','../public/language/languages.json','/staff/view','German','exports','/view','720090kEGLdA','Enabled','log','success','4520llJfti','render','firstname','\x20is\x20alredy\x20added.\x20please\x20choose\x20another','/view/:id','Arabic','129451madgvy','\x20is\x20add\x20successfully'];a0_0x83ba=function(){return _0x16dc58;};return a0_0x83ba();}router[a0_0xdede62(0xef)](a0_0xdede62(0xdb),auth,async(_0x2f28cb,_0x1e2e58)=>{const _0x1ebfe1=a0_0xdede62;try{const {username:_0x59d0b4,email:_0x10ec1,role:_0x4b8748}=_0x2f28cb[_0x1ebfe1(0xf3)],_0x50e7e5=_0x2f28cb[_0x1ebfe1(0xf3)],_0x12acc8=await profile[_0x1ebfe1(0xf1)]({'email':_0x50e7e5['email']}),_0x5ef2ed=await master_shop[_0x1ebfe1(0xf8)]();console[_0x1ebfe1(0xde)]('master',_0x5ef2ed),warehouse_data=await warehouse[_0x1ebfe1(0xf6)]([{'$match':{'status':_0x1ebfe1(0xdd)}},{'$group':{'_id':_0x1ebfe1(0xd5),'name':{'$first':_0x1ebfe1(0xd5)}}}]);const _0x5d244a=await staff[_0x1ebfe1(0xf8)]();console[_0x1ebfe1(0xde)](_0x5d244a);if(_0x5ef2ed[0x0][_0x1ebfe1(0xc3)]==_0x1ebfe1(0xfa)){var _0x36bdd9=users['English'];console[_0x1ebfe1(0xde)](_0x36bdd9);}else{if(_0x5ef2ed[0x0]['language']==_0x1ebfe1(0xc2))var _0x36bdd9=users[_0x1ebfe1(0xc2)];else{if(_0x5ef2ed[0x0][_0x1ebfe1(0xc3)]=='German')var _0x36bdd9=users[_0x1ebfe1(0xd9)];else{if(_0x5ef2ed[0x0][_0x1ebfe1(0xc3)]==_0x1ebfe1(0xc5))var _0x36bdd9=users[_0x1ebfe1(0xc5)];else{if(_0x5ef2ed[0x0]['language']==_0x1ebfe1(0xd2))var _0x36bdd9=users['French'];else{if(_0x5ef2ed[0x0][_0x1ebfe1(0xc3)]==_0x1ebfe1(0xf0))var _0x36bdd9=users[_0x1ebfe1(0xd0)];else{if(_0x5ef2ed[0x0][_0x1ebfe1(0xc3)]==_0x1ebfe1(0xcb))var _0x36bdd9=users[_0x1ebfe1(0xcb)];else{if(_0x5ef2ed[0x0]['language']=='Arabic\x20(ae)')var _0x36bdd9=users['Arabic'];}}}}}}}let _0x4e979b=[_0x1ebfe1(0xc0),_0x1ebfe1(0xce)];_0x1e2e58[_0x1ebfe1(0xe1)](_0x1ebfe1(0xcd),{'success':_0x2f28cb['flash'](_0x1ebfe1(0xdf)),'errors':_0x2f28cb[_0x1ebfe1(0xc6)]('errors'),'role':_0x50e7e5,'profile':_0x12acc8,'master_shop':_0x5ef2ed,'user':_0x5d244a,'language':_0x36bdd9,'warehouse':warehouse_data,'warehouse_cat':_0x4e979b});}catch(_0xf4c5f2){console['log'](_0xf4c5f2);}}),router[a0_0xdede62(0xca)](a0_0xdede62(0xdb),auth,async(_0x4638b2,_0x16876a)=>{const _0x2c5f14=a0_0xdede62;try{const {name:_0x332206,email:_0x5f11e8,mobile:_0x5ebc77,password:_0x589969,status:_0x55f403,warehouse:_0x22dcfd,position:_0x144bb8,warehouse_cat:_0x4970ee}=_0x4638b2[_0x2c5f14(0xea)],_0x1b10a9=await bcrypt['hash'](_0x589969,0xa),_0x1a890d=new staff({'name':_0x332206,'email':_0x5f11e8,'mobile':_0x5ebc77,'status':_0x55f403,'warehouse':_0x22dcfd,'position':_0x144bb8,'warehouse_category':_0x4970ee}),_0x2dc901=await staff[_0x2c5f14(0xf1)]({'email':_0x5f11e8});console[_0x2c5f14(0xde)](_0x2dc901);if(_0x2dc901)return _0x4638b2['flash'](_0x2c5f14(0xec),_0x2c5f14(0xc1)+_0x5f11e8+_0x2c5f14(0xe3)),_0x16876a[_0x2c5f14(0xee)](_0x2c5f14(0xcf)),![];const _0x5021dc=await _0x1a890d['save'](),_0x23f6e8=new sing_up({'name':_0x332206,'email':_0x5f11e8,'password':_0x1b10a9,'role':_0x2c5f14(0xcd)}),_0x16207c=await _0x23f6e8['save'](),_0x262fd0=new profile({'firstname':_0x332206,'email':_0x5f11e8}),_0x524501=await _0x262fd0[_0x2c5f14(0xd6)]();_0x4638b2[_0x2c5f14(0xc6)](_0x2c5f14(0xdf),_0x332206+_0x2c5f14(0xe7)),_0x16876a[_0x2c5f14(0xee)](_0x2c5f14(0xd8));}catch(_0x2d1b4c){console[_0x2c5f14(0xde)](_0x2d1b4c);}}),router[a0_0xdede62(0xef)](a0_0xdede62(0xe4),auth,async(_0x3f2680,_0x28cf80)=>{const _0x523b16=a0_0xdede62;try{const _0x3536fe=_0x3f2680['params']['id'],_0x178862=await master_shop[_0x523b16(0xf8)](),_0x5f2a75=await staff[_0x523b16(0xed)](_0x3536fe);if(_0x178862[0x0][_0x523b16(0xc3)]==_0x523b16(0xfa)){var _0x3838ed=users[_0x523b16(0xd3)];console[_0x523b16(0xde)](_0x3838ed);}else{if(_0x178862[0x0][_0x523b16(0xc3)]==_0x523b16(0xc2))var _0x3838ed=users[_0x523b16(0xc2)];else{if(_0x178862[0x0][_0x523b16(0xc3)]==_0x523b16(0xd9))var _0x3838ed=users[_0x523b16(0xd9)];else{if(_0x178862[0x0]['language']==_0x523b16(0xc5))var _0x3838ed=users[_0x523b16(0xc5)];else{if(_0x178862[0x0][_0x523b16(0xc3)]==_0x523b16(0xd2))var _0x3838ed=users[_0x523b16(0xd2)];else{if(_0x178862[0x0][_0x523b16(0xc3)]==_0x523b16(0xf0))var _0x3838ed=users[_0x523b16(0xd0)];else{if(_0x178862[0x0]['language']=='Chinese')var _0x3838ed=users[_0x523b16(0xcb)];else{if(_0x178862[0x0][_0x523b16(0xc3)]==_0x523b16(0xeb))var _0x3838ed=users[_0x523b16(0xe5)];}}}}}}}let _0x3adc79=[_0x523b16(0xc0),_0x523b16(0xce)];_0x28cf80[_0x523b16(0xe1)](_0x523b16(0xcd),{'success':_0x3f2680[_0x523b16(0xc6)](_0x523b16(0xdf)),'errors':_0x3f2680[_0x523b16(0xc6)]('errors'),'master_shop':_0x178862,'user':_0x5f2a75,'language':_0x3838ed,'warehouse_cat':_0x3adc79});}catch(_0x21f8e1){console[_0x523b16(0xde)](_0x21f8e1);}}),router[a0_0xdede62(0xca)](a0_0xdede62(0xe4),auth,async(_0x2cee59,_0x1ebf84)=>{const _0x2764a2=a0_0xdede62;try{const _0x1b10da=_0x2cee59[_0x2764a2(0xc8)]['id'],_0x4ce115=await staff['findById'](_0x1b10da),{name:_0x530647,email:_0x85b2fd,mobile:_0x5a5686,password:_0x31a103,status:_0x53f3a5,warehouse:_0x293ca4,position:_0x3ac99e,warehouse_cat:_0x52dd9e}=_0x2cee59[_0x2764a2(0xea)];_0x4ce115['name']=_0x530647,_0x4ce115[_0x2764a2(0xbe)]=_0x85b2fd,_0x4ce115[_0x2764a2(0xe8)]=_0x5a5686,_0x4ce115['password']=_0x31a103,_0x4ce115[_0x2764a2(0xc7)]=_0x53f3a5,_0x4ce115['warehouse']=_0x293ca4,_0x4ce115[_0x2764a2(0xd4)]=_0x3ac99e,_0x4ce115[_0x2764a2(0xf7)]=_0x52dd9e;const _0x1ce583=await _0x4ce115['save'](),_0x2aee0b=await profile[_0x2764a2(0xf1)]({'email':_0x85b2fd});_0x2aee0b[_0x2764a2(0xe2)]=_0x530647,_0x2aee0b[_0x2764a2(0xbe)]=_0x85b2fd,await _0x2aee0b['save'](),_0x2cee59[_0x2764a2(0xc6)](_0x2764a2(0xdf),_0x2764a2(0xcc)),_0x1ebf84['redirect'](_0x2764a2(0xd8));}catch(_0x251508){console[_0x2764a2(0xde)](_0x251508),_0x1ebf84['status'](0xc8)['json'](_0x251508);}}),module[a0_0xdede62(0xda)]=router;