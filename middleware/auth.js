function a0_0x2d1d(_0x21df3a,_0x3d5b09){const _0x14e8b0=a0_0x14e8();return a0_0x2d1d=function(_0x2d1daf,_0x593673){_0x2d1daf=_0x2d1daf-0xe9;let _0x167b99=_0x14e8b0[_0x2d1daf];return _0x167b99;},a0_0x2d1d(_0x21df3a,_0x3d5b09);}const a0_0x7d3b16=a0_0x2d1d;(function(_0x49448d,_0x4645f3){const _0x4e7718=a0_0x2d1d,_0x267525=_0x49448d();while(!![]){try{const _0x226241=parseInt(_0x4e7718(0xf6))/0x1+parseInt(_0x4e7718(0xfb))/0x2+-parseInt(_0x4e7718(0xfa))/0x3*(parseInt(_0x4e7718(0xf2))/0x4)+-parseInt(_0x4e7718(0xeb))/0x5*(parseInt(_0x4e7718(0xf8))/0x6)+-parseInt(_0x4e7718(0xed))/0x7+-parseInt(_0x4e7718(0xf0))/0x8+parseInt(_0x4e7718(0xf9))/0x9*(parseInt(_0x4e7718(0xee))/0xa);if(_0x226241===_0x4645f3)break;else _0x267525['push'](_0x267525['shift']());}catch(_0x12d616){_0x267525['push'](_0x267525['shift']());}}}(a0_0x14e8,0x989f2));function a0_0x14e8(){const _0x373dd6=['express','40hHNgBj','errors','281533oimLEv','130LIYcHh','redirect','6146304hCuWFG','env','85388DTPdbv','verify','flash','user','60121imVpkK','jwt','822702KVQDoM','1908135KelTWH','141wpOWBG','1435148OZZGCy','You\x20Are\x20Not\x20Authorized,\x20Please\x20Login\x20First\x20...','cookies'];a0_0x14e8=function(){return _0x373dd6;};return a0_0x14e8();}const express=require(a0_0x7d3b16(0xea)),jwt=require('jsonwebtoken'),auth=async(_0x34d27e,_0x3015df,_0x37e40a)=>{const _0x26310d=a0_0x7d3b16;try{const _0x3200f5=_0x34d27e[_0x26310d(0xe9)][_0x26310d(0xf7)];if(!_0x3200f5)return _0x34d27e[_0x26310d(0xf4)]('errors',_0x26310d(0xfc)),_0x3015df[_0x26310d(0xef)]('/');const _0x417590=await jwt[_0x26310d(0xf3)](_0x3200f5,process[_0x26310d(0xf1)]['secret_key']);_0x34d27e[_0x26310d(0xf5)]=_0x417590,_0x37e40a();}catch(_0x527674){return _0x34d27e[_0x26310d(0xf4)](_0x26310d(0xec),_0x26310d(0xfc)),_0x3015df[_0x26310d(0xef)]('/');}};module['exports']=auth;