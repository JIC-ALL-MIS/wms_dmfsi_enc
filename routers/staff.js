const a0_0x3ca54c=a0_0x6063;(function(_0x2e17e2,_0x322c19){const _0x537212=a0_0x6063,_0x33883f=_0x2e17e2();while(!![]){try{const _0x539206=parseInt(_0x537212(0x171))/0x1+parseInt(_0x537212(0x175))/0x2*(-parseInt(_0x537212(0x174))/0x3)+-parseInt(_0x537212(0x167))/0x4+parseInt(_0x537212(0x17f))/0x5*(-parseInt(_0x537212(0x164))/0x6)+parseInt(_0x537212(0x183))/0x7+parseInt(_0x537212(0x186))/0x8+-parseInt(_0x537212(0x16e))/0x9*(parseInt(_0x537212(0x17c))/0xa);if(_0x539206===_0x322c19)break;else _0x33883f['push'](_0x33883f['shift']());}catch(_0x17ba36){_0x33883f['push'](_0x33883f['shift']());}}}(a0_0xfbd6,0xa6eae));const express=require(a0_0x3ca54c(0x15a)),app=express(),router=express['Router'](),bcrypt=require('bcryptjs'),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require(a0_0x3ca54c(0x188)),auth=require(a0_0x3ca54c(0x165)),users=require('../public/language/languages.json');function a0_0x6063(_0x306354,_0x5c5be3){const _0xfbd60d=a0_0xfbd6();return a0_0x6063=function(_0x60635,_0x56d0dc){_0x60635=_0x60635-0x14e;let _0xcc733d=_0xfbd60d[_0x60635];return _0xcc733d;},a0_0x6063(_0x306354,_0x5c5be3);}function a0_0xfbd6(){const _0x188bdc=['user','redirect','status','password','5116722oFcRaB','../middleware/auth','Spanish','4138200DMKtyf','Portuguese','back','json','findById','English','mobile','2461869vHYVtZ','Portuguese\x20(BR)','\x20is\x20add\x20successfully','1037283ebZStp','Chinese','Arabic\x20(ae)','476919LQgUxJ','10IZWVmy','French','Raw\x20Materials','save','post','body','\x20is\x20alredy\x20added.\x20please\x20choose\x20another','10ixDlez','/view','language','5wQtFKW','aggregate','English\x20(US)','/staff/view','9513098EHwQxV','exports','success','9945120SZjEir','$name','../models/all_models','staff','findOne','Hindi','render','Finished\x20Goods','SPMX','warehouse','flash','Arabic','params','warehouse_category','email','/view/:id','errors','express','German','hash','find','firstname','log'];a0_0xfbd6=function(){return _0x188bdc;};return a0_0xfbd6();}router['get'](a0_0x3ca54c(0x17d),auth,async(_0x3e3127,_0x2e8b76)=>{const _0x380106=a0_0x3ca54c;try{const {username:_0x3c6242,email:_0x5e284b,role:_0x4cd73f}=_0x3e3127[_0x380106(0x160)],_0x310c90=_0x3e3127[_0x380106(0x160)],_0x5469e5=await profile['findOne']({'email':_0x310c90[_0x380106(0x157)]}),_0x4307b6=await master_shop['find']();console[_0x380106(0x15f)]('master',_0x4307b6),warehouse_data=await warehouse[_0x380106(0x180)]([{'$match':{'status':'Enabled'}},{'$group':{'_id':_0x380106(0x187),'name':{'$first':'$name'}}}]);const _0xeba812=await staff[_0x380106(0x15d)]();console[_0x380106(0x15f)](_0xeba812);if(_0x4307b6[0x0]['language']==_0x380106(0x181)){var _0x4f6775=users[_0x380106(0x16c)];console[_0x380106(0x15f)](_0x4f6775);}else{if(_0x4307b6[0x0][_0x380106(0x17e)]==_0x380106(0x14e))var _0x4f6775=users['Hindi'];else{if(_0x4307b6[0x0][_0x380106(0x17e)]==_0x380106(0x15b))var _0x4f6775=users['German'];else{if(_0x4307b6[0x0][_0x380106(0x17e)]==_0x380106(0x166))var _0x4f6775=users[_0x380106(0x166)];else{if(_0x4307b6[0x0][_0x380106(0x17e)]=='French')var _0x4f6775=users[_0x380106(0x176)];else{if(_0x4307b6[0x0]['language']==_0x380106(0x16f))var _0x4f6775=users[_0x380106(0x168)];else{if(_0x4307b6[0x0][_0x380106(0x17e)]==_0x380106(0x172))var _0x4f6775=users[_0x380106(0x172)];else{if(_0x4307b6[0x0]['language']=='Arabic\x20(ae)')var _0x4f6775=users[_0x380106(0x154)];}}}}}}}let _0x3c951a=[_0x380106(0x177),_0x380106(0x150),'SPMX'];_0x2e8b76[_0x380106(0x14f)](_0x380106(0x189),{'success':_0x3e3127[_0x380106(0x153)]('success'),'errors':_0x3e3127['flash'](_0x380106(0x159)),'role':_0x310c90,'profile':_0x5469e5,'master_shop':_0x4307b6,'user':_0xeba812,'language':_0x4f6775,'warehouse':warehouse_data,'warehouse_cat':_0x3c951a});}catch(_0x338151){console[_0x380106(0x15f)](_0x338151);}}),router[a0_0x3ca54c(0x179)]('/view',auth,async(_0x576c44,_0x3348bd)=>{const _0x4bbc31=a0_0x3ca54c;try{const {name:_0x333726,email:_0x13a267,mobile:_0x4f3801,password:_0x1c719f,status:_0xb06d5c,warehouse:_0x87bcd3,position:_0x41c33a,warehouse_cat:_0x252e11}=_0x576c44[_0x4bbc31(0x17a)],_0x29e35f=await bcrypt[_0x4bbc31(0x15c)](_0x1c719f,0xa),_0x3901e3=new staff({'name':_0x333726,'email':_0x13a267,'mobile':_0x4f3801,'status':_0xb06d5c,'warehouse':_0x87bcd3,'position':_0x41c33a,'warehouse_category':_0x252e11}),_0x1ed8a0=await staff[_0x4bbc31(0x18a)]({'email':_0x13a267});console[_0x4bbc31(0x15f)](_0x1ed8a0);if(_0x1ed8a0)return _0x576c44[_0x4bbc31(0x153)](_0x4bbc31(0x159),'Email\x20'+_0x13a267+_0x4bbc31(0x17b)),_0x3348bd[_0x4bbc31(0x161)](_0x4bbc31(0x169)),![];const _0x38500f=await _0x3901e3[_0x4bbc31(0x178)](),_0x408d3a=new sing_up({'name':_0x333726,'email':_0x13a267,'password':_0x29e35f,'role':'staff'}),_0x36e73b=await _0x408d3a[_0x4bbc31(0x178)](),_0x501bbb=new profile({'firstname':_0x333726,'email':_0x13a267}),_0x2b938c=await _0x501bbb[_0x4bbc31(0x178)]();_0x576c44[_0x4bbc31(0x153)](_0x4bbc31(0x185),_0x333726+_0x4bbc31(0x170)),_0x3348bd[_0x4bbc31(0x161)](_0x4bbc31(0x182));}catch(_0x110c63){console['log'](_0x110c63);}}),router['get'](a0_0x3ca54c(0x158),auth,async(_0x226380,_0x44ef2d)=>{const _0x517b65=a0_0x3ca54c;try{const _0x313279=_0x226380[_0x517b65(0x155)]['id'],_0x3e08d2=await master_shop[_0x517b65(0x15d)](),_0x3becb5=await staff[_0x517b65(0x16b)](_0x313279);if(_0x3e08d2[0x0][_0x517b65(0x17e)]=='English\x20(US)'){var _0x4de138=users[_0x517b65(0x16c)];console[_0x517b65(0x15f)](_0x4de138);}else{if(_0x3e08d2[0x0][_0x517b65(0x17e)]==_0x517b65(0x14e))var _0x4de138=users[_0x517b65(0x14e)];else{if(_0x3e08d2[0x0][_0x517b65(0x17e)]=='German')var _0x4de138=users[_0x517b65(0x15b)];else{if(_0x3e08d2[0x0][_0x517b65(0x17e)]==_0x517b65(0x166))var _0x4de138=users['Spanish'];else{if(_0x3e08d2[0x0][_0x517b65(0x17e)]==_0x517b65(0x176))var _0x4de138=users[_0x517b65(0x176)];else{if(_0x3e08d2[0x0][_0x517b65(0x17e)]==_0x517b65(0x16f))var _0x4de138=users[_0x517b65(0x168)];else{if(_0x3e08d2[0x0][_0x517b65(0x17e)]==_0x517b65(0x172))var _0x4de138=users['Chinese'];else{if(_0x3e08d2[0x0][_0x517b65(0x17e)]==_0x517b65(0x173))var _0x4de138=users[_0x517b65(0x154)];}}}}}}}let _0x47b2d2=[_0x517b65(0x177),_0x517b65(0x150),_0x517b65(0x151)];_0x44ef2d['render']('staff',{'success':_0x226380[_0x517b65(0x153)](_0x517b65(0x185)),'errors':_0x226380[_0x517b65(0x153)](_0x517b65(0x159)),'master_shop':_0x3e08d2,'user':_0x3becb5,'language':_0x4de138,'warehouse_cat':_0x47b2d2});}catch(_0xdd7752){console[_0x517b65(0x15f)](_0xdd7752);}}),router[a0_0x3ca54c(0x179)](a0_0x3ca54c(0x158),auth,async(_0x36155c,_0x5771c3)=>{const _0x83a646=a0_0x3ca54c;try{const _0x4664d3=_0x36155c[_0x83a646(0x155)]['id'],_0x3d10a7=await staff[_0x83a646(0x16b)](_0x4664d3),{name:_0x4764d1,email:_0x543e92,mobile:_0x523aa6,password:_0x2cf76b,status:_0x38434f,warehouse:_0xdb50a9,position:_0x50c209,warehouse_cat:_0x47a68a}=_0x36155c[_0x83a646(0x17a)];_0x3d10a7['name']=_0x4764d1,_0x3d10a7['email']=_0x543e92,_0x3d10a7[_0x83a646(0x16d)]=_0x523aa6,_0x3d10a7[_0x83a646(0x163)]=_0x2cf76b,_0x3d10a7[_0x83a646(0x162)]=_0x38434f,_0x3d10a7[_0x83a646(0x152)]=_0xdb50a9,_0x3d10a7['position']=_0x50c209,_0x3d10a7[_0x83a646(0x156)]=_0x47a68a;const _0x250ef3=await _0x3d10a7['save'](),_0x55baa7=await profile[_0x83a646(0x18a)]({'email':_0x543e92});_0x55baa7[_0x83a646(0x15e)]=_0x4764d1,_0x55baa7['email']=_0x543e92,await _0x55baa7[_0x83a646(0x178)](),_0x36155c['flash'](_0x83a646(0x185),'staff\x20data\x20update\x20successfully'),_0x5771c3[_0x83a646(0x161)]('/staff/view');}catch(_0x33f950){console[_0x83a646(0x15f)](_0x33f950),_0x5771c3[_0x83a646(0x162)](0xc8)[_0x83a646(0x16a)](_0x33f950);}}),module[a0_0x3ca54c(0x184)]=router;