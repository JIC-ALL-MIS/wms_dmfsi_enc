const a0_0x80160e=a0_0x4ef3;(function(_0x4819ee,_0x169f38){const _0x1cc6e2=a0_0x4ef3,_0x3db7c2=_0x4819ee();while(!![]){try{const _0x5afac9=parseInt(_0x1cc6e2(0x1ab))/0x1+parseInt(_0x1cc6e2(0x1ae))/0x2*(parseInt(_0x1cc6e2(0x1db))/0x3)+-parseInt(_0x1cc6e2(0x1a9))/0x4+-parseInt(_0x1cc6e2(0x1c1))/0x5+-parseInt(_0x1cc6e2(0x1ac))/0x6*(-parseInt(_0x1cc6e2(0x1da))/0x7)+parseInt(_0x1cc6e2(0x1e1))/0x8*(parseInt(_0x1cc6e2(0x1bf))/0x9)+-parseInt(_0x1cc6e2(0x1b8))/0xa*(-parseInt(_0x1cc6e2(0x1a1))/0xb);if(_0x5afac9===_0x169f38)break;else _0x3db7c2['push'](_0x3db7c2['shift']());}catch(_0x53dfaf){_0x3db7c2['push'](_0x3db7c2['shift']());}}}(a0_0x55d7,0x6bf82),require(a0_0x80160e(0x1be))['config']());function a0_0x55d7(){const _0x59b4e5=['34902Oxqybs','/all_expenses','8PdmDKc','listen','public','PORT','views','SESSION_STRING_TEST','SESSION_STRING','ejs','/all_sales','/warehouse','930EZhOpq','/mobile_rw_inc','env','this\x20is\x20my\x20secretkey','mongoose','./routers/warehousemap_outgoing','dotenv','297KVwzJd','static','4408095jUVeow','./mobile_routers/warehouse','/transfer_finished','DATABASE_STRING_TEST','dev','./routers/customer','./routers/stock_report','/report','./routers/transfer','./routers/test/removeNegative','SESSION_COLLECTION','use','./routers/index','db\x20connected\x20!!!!!','./routers/pickinglist','/transfer','./routers/purchases_return','/customer','./routers/profile','/purchases_return_finished','./routers/report','join','./routers/warehousemap_income','/staff','./routers/payment_report','427Mcxbin','227235ciyKUc','production','/products','connect-mongodb-session','/master_shop','DATABASE_STRING','184840mDdInN','json','/mobile_warehouse','express-session','body-parser','./routers/all_purchases_finished','catch','cookie-parser','/purchases_return','/stock_report','log','connect-flash','view\x20engine','./mobile_routers/login','./routers/adjustment','./routers/warehouse','SESSION_COLLECTION_TEST','./routers/staff','server\x20running\x20on\x20port\x20','/picking_list','./routers/edit_approval','./routers/all_purchases','/warehousemap_Income','./routers/all_sales','NODE_ENV','/edit_approval','set','/TEST','7403kgGUFM','./routers/sales_return','/adjustment_finished','/supplier','/all_purchases','./routers/password_reset','/all_sales_finished','/sales_return_finished','2958488YGBSWE','/sales_return','580612NGqZpp'];a0_0x55d7=function(){return _0x59b4e5;};return a0_0x55d7();}const express=require('express'),app=express(),bodyParser=require(a0_0x80160e(0x1e5)),path=require('path'),ejs=require('ejs'),port=process['env'][a0_0x80160e(0x1b1)]||0x1388,mongoose=require(a0_0x80160e(0x1bc)),flash=require(a0_0x80160e(0x1ec));function a0_0x4ef3(_0xc58b27,_0x3d3530){const _0x55d785=a0_0x55d7();return a0_0x4ef3=function(_0x4ef3b8,_0x4153d8){_0x4ef3b8=_0x4ef3b8-0x19c;let _0x5c8a67=_0x55d785[_0x4ef3b8];return _0x5c8a67;},a0_0x4ef3(_0xc58b27,_0x3d3530);}var session=require(a0_0x80160e(0x1e4));const mongoDbsession=require(a0_0x80160e(0x1de))(session),cookieParser=require(a0_0x80160e(0x1e8));let databaseString,sessionString,sessionCollection;if(process[a0_0x80160e(0x1ba)][a0_0x80160e(0x19d)]==a0_0x80160e(0x1dc))databaseString=process[a0_0x80160e(0x1ba)][a0_0x80160e(0x1e0)],sessionString=process[a0_0x80160e(0x1ba)][a0_0x80160e(0x1b4)],sessionCollection=process[a0_0x80160e(0x1ba)][a0_0x80160e(0x1cb)];else process['env'][a0_0x80160e(0x19d)]==a0_0x80160e(0x1c5)&&(databaseString=process[a0_0x80160e(0x1ba)][a0_0x80160e(0x1c4)],sessionString=process['env'][a0_0x80160e(0x1b3)],sessionCollection=process[a0_0x80160e(0x1ba)][a0_0x80160e(0x1f1)]);mongoose['connect'](databaseString,{'useNewUrlParser':!![],'useUnifiedTopology':!![]})['then'](()=>{const _0x3ce561=a0_0x80160e;console[_0x3ce561(0x1eb)](_0x3ce561(0x1ce));})[a0_0x80160e(0x1e7)](_0x3115c0=>{console['log'](_0x3115c0);});const store=new mongoDbsession({'uri':sessionString,'collection':sessionCollection});app[a0_0x80160e(0x1cc)](session({'secret':a0_0x80160e(0x1bb),'resave':![],'cookie':{'maxAge':0x3e8*0x3c},'saveUninitialized':!![],'store':store})),app[a0_0x80160e(0x1cc)](flash()),app[a0_0x80160e(0x1cc)](bodyParser['urlencoded']({'extended':![]})),app[a0_0x80160e(0x1cc)](cookieParser()),app[a0_0x80160e(0x1cc)](bodyParser[a0_0x80160e(0x1e2)]()),app[a0_0x80160e(0x1cc)](express[a0_0x80160e(0x1e2)]()),app[a0_0x80160e(0x19f)](a0_0x80160e(0x1ed),a0_0x80160e(0x1b5)),app[a0_0x80160e(0x19f)](a0_0x80160e(0x1b2),path[a0_0x80160e(0x1d6)](__dirname,'views')),app[a0_0x80160e(0x1cc)](express[a0_0x80160e(0x1c0)](path[a0_0x80160e(0x1d6)](__dirname,a0_0x80160e(0x1b0))));const index_router=require(a0_0x80160e(0x1cd)),products_router=require('./routers/products'),warehouse_router=require(a0_0x80160e(0x1f0)),staff_router=require(a0_0x80160e(0x1f2)),customer_router=require(a0_0x80160e(0x1c6)),supplier_router=require('./routers/supplier'),all_purchases_router=require(a0_0x80160e(0x1f6)),purchases_return_router=require(a0_0x80160e(0x1d1)),all_sales_router=require(a0_0x80160e(0x19c)),sales_return_router=require(a0_0x80160e(0x1a2)),adjustment_router=require(a0_0x80160e(0x1ef)),transfer_router=require(a0_0x80160e(0x1c9)),all_expenses_router=require('./routers/expenses'),stock_report_router=require(a0_0x80160e(0x1c7)),payment_report=require(a0_0x80160e(0x1d9)),all_report=require(a0_0x80160e(0x1d5)),master_shop=require('./routers/master_settings'),warehousemap_incoming=require(a0_0x80160e(0x1d7)),warehousemap_outgoing=require(a0_0x80160e(0x1bd)),transaction_reports_finished=require('./routers/transaction_reports_finished'),profile_router=require(a0_0x80160e(0x1d3)),sing_up_router=require('./routers/sing_up'),login_router=require('./routers/login'),all_purchases_router_finished=require(a0_0x80160e(0x1e6)),all_sales_router_finished=require('./routers/all_sales_finsished'),adjustment_router_finished=require('./routers/adjustment_finished'),transfer_router_finished=require('./routers/transfer_finished'),purchases_return_finished=require('./routers/purchase_return_finished'),sales_return_finished=require('./routers/sales_return_finished'),pdfOutReport=require(a0_0x80160e(0x1cf)),edit_approver_router=require(a0_0x80160e(0x1f5)),passwordChanger=require(a0_0x80160e(0x1a6)),Tester=require(a0_0x80160e(0x1ca));app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1a0),Tester),app[a0_0x80160e(0x1cc)]('/forgotPassword',passwordChanger),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x19e),edit_approver_router),app[a0_0x80160e(0x1cc)]('/',index_router),app['use'](a0_0x80160e(0x1dd),products_router),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1b7),warehouse_router),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1d8),staff_router),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1d2),customer_router),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1a4),supplier_router),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1a5),all_purchases_router),app['use'](a0_0x80160e(0x1e9),purchases_return_router),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1b6),all_sales_router),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1aa),sales_return_router),app[a0_0x80160e(0x1cc)]('/adjustment',adjustment_router),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1d0),transfer_router),app['use'](a0_0x80160e(0x1ad),all_expenses_router),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1ea),stock_report_router),app[a0_0x80160e(0x1cc)]('/payment_report',payment_report),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1c8),all_report),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1df),master_shop),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1f7),warehousemap_incoming),app[a0_0x80160e(0x1cc)]('/warehousemap_Outcome',warehousemap_outgoing),app[a0_0x80160e(0x1cc)]('/all_purchases_finished',all_purchases_router_finished),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1a7),all_sales_router_finished),app['use'](a0_0x80160e(0x1d4),purchases_return_finished),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1a8),sales_return_finished),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1f4),pdfOutReport),app['use'](a0_0x80160e(0x1a3),adjustment_router_finished),app['use'](a0_0x80160e(0x1c3),transfer_router_finished),app[a0_0x80160e(0x1cc)]('/transaction_reports',transaction_reports_finished),app['use']('/profile',profile_router),app[a0_0x80160e(0x1cc)]('/',sing_up_router),app[a0_0x80160e(0x1cc)]('/',login_router);const mobile_login=require(a0_0x80160e(0x1ee)),mobile_rw_inc=require('./mobile_routers/rw_inc'),mobile_warehouse=require(a0_0x80160e(0x1c2));app[a0_0x80160e(0x1cc)]('/mobile_login',mobile_login),app[a0_0x80160e(0x1cc)](a0_0x80160e(0x1b9),mobile_rw_inc),app['use'](a0_0x80160e(0x1e3),mobile_warehouse),app[a0_0x80160e(0x1af)](port,()=>{const _0x2bef49=a0_0x80160e;console['log'](_0x2bef49(0x1f3)+port);});