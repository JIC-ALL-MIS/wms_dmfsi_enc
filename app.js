const a0_0xc90043=a0_0xf1b8;(function(_0x5429e0,_0xe77176){const _0x48b099=a0_0xf1b8,_0x1d3fd3=_0x5429e0();while(!![]){try{const _0x36cb46=-parseInt(_0x48b099(0x1b8))/0x1*(-parseInt(_0x48b099(0x1af))/0x2)+-parseInt(_0x48b099(0x170))/0x3+-parseInt(_0x48b099(0x1a2))/0x4*(-parseInt(_0x48b099(0x1be))/0x5)+-parseInt(_0x48b099(0x19d))/0x6*(parseInt(_0x48b099(0x1c0))/0x7)+parseInt(_0x48b099(0x1b4))/0x8+parseInt(_0x48b099(0x19f))/0x9+parseInt(_0x48b099(0x173))/0xa*(parseInt(_0x48b099(0x19b))/0xb);if(_0x36cb46===_0xe77176)break;else _0x1d3fd3['push'](_0x1d3fd3['shift']());}catch(_0x2b08d1){_0x1d3fd3['push'](_0x1d3fd3['shift']());}}}(a0_0x5e5f,0x883e4),require('dotenv')['config']());const express=require(a0_0xc90043(0x186)),app=express(),bodyParser=require('body-parser'),path=require(a0_0xc90043(0x1bf)),ejs=require(a0_0xc90043(0x194)),port=process[a0_0xc90043(0x1a8)][a0_0xc90043(0x16d)]||0x1388,mongoose=require(a0_0xc90043(0x17e)),flash=require('connect-flash');var session=require(a0_0xc90043(0x164));function a0_0x5e5f(){const _0x31dae2=['connect','mongoose','/all_expenses','./routers/transfer_finished','/warehousemap_Income','views','json','./routers/transaction_reports_finished','./routers/all_sales_finsished','express','/transaction_reports','/staff','./routers/expenses','/all_sales','/stock_report','./routers/purchase_return_finished','/all_purchases_finished','connect-mongodb-session','/adjustment','/all_purchases','./routers/products','/purchases_return','./routers/index','ejs','/warehousemap_Outcome','./routers/password_reset','./routers/warehousemap_outgoing','DATABASE_STRING_TEST','/edit_approval','join','1749MrxXPC','./routers/purchases_return','325848jiSAWT','SESSION_STRING_TEST','7202376hTcFpt','./routers/warehouse','./routers/profile','549540zdBJBr','NODE_ENV','/warehouse','./routers/master_settings','set','./routers/test/removeNegative','env','DATABASE_STRING','/transfer_finished','./routers/all_purchases_finished','SESSION_COLLECTION_TEST','./routers/all_sales','./routers/login','18UbnldO','./routers/staff','production','/sales_return_finished','/profile','5431640WSimim','SESSION_STRING','log','./routers/adjustment_finished','2399ZXVvlS','/master_shop','this\x20is\x20my\x20secretkey','cookie-parser','./routers/warehousemap_income','./routers/adjustment','20dBxBRF','path','119EoMhjZ','express-session','/transfer','/TEST','/picking_list','then','./routers/sales_return','/products','./routers/stock_report','/payment_report','PORT','./routers/transfer','./routers/sales_return_finished','3214983cBazJe','/report','dev','31610qSPqin','server\x20running\x20on\x20port\x20','/forgotPassword','use','./routers/report','urlencoded','catch','view\x20engine','./routers/supplier','/all_sales_finished'];a0_0x5e5f=function(){return _0x31dae2;};return a0_0x5e5f();}const mongoDbsession=require(a0_0xc90043(0x18e))(session),cookieParser=require(a0_0xc90043(0x1bb));function a0_0xf1b8(_0x49a14a,_0x2e0974){const _0x5e5f8a=a0_0x5e5f();return a0_0xf1b8=function(_0xf1b806,_0x28fe4b){_0xf1b806=_0xf1b806-0x164;let _0x396c91=_0x5e5f8a[_0xf1b806];return _0x396c91;},a0_0xf1b8(_0x49a14a,_0x2e0974);}let databaseString,sessionString,sessionCollection;if(process[a0_0xc90043(0x1a8)][a0_0xc90043(0x1a3)]==a0_0xc90043(0x1b1))databaseString=process['env'][a0_0xc90043(0x1a9)],sessionString=process[a0_0xc90043(0x1a8)][a0_0xc90043(0x1b5)],sessionCollection=process['env']['SESSION_COLLECTION'];else process[a0_0xc90043(0x1a8)][a0_0xc90043(0x1a3)]==a0_0xc90043(0x172)&&(databaseString=process[a0_0xc90043(0x1a8)][a0_0xc90043(0x198)],sessionString=process[a0_0xc90043(0x1a8)][a0_0xc90043(0x19e)],sessionCollection=process[a0_0xc90043(0x1a8)][a0_0xc90043(0x1ac)]);mongoose[a0_0xc90043(0x17d)](databaseString,{'useNewUrlParser':!![],'useUnifiedTopology':!![]})[a0_0xc90043(0x168)](()=>{console['log']('db\x20connected\x20!!!!!');})[a0_0xc90043(0x179)](_0x95a445=>{const _0x197cbf=a0_0xc90043;console[_0x197cbf(0x1b6)](_0x95a445);});const store=new mongoDbsession({'uri':sessionString,'collection':sessionCollection});app[a0_0xc90043(0x176)](session({'secret':a0_0xc90043(0x1ba),'resave':![],'cookie':{'maxAge':0x3e8*0x3c},'saveUninitialized':!![],'store':store})),app[a0_0xc90043(0x176)](flash()),app[a0_0xc90043(0x176)](bodyParser[a0_0xc90043(0x178)]({'extended':![]})),app[a0_0xc90043(0x176)](cookieParser()),app[a0_0xc90043(0x176)](bodyParser[a0_0xc90043(0x183)]()),app[a0_0xc90043(0x176)](express[a0_0xc90043(0x183)]()),app[a0_0xc90043(0x1a6)](a0_0xc90043(0x17a),'ejs'),app[a0_0xc90043(0x1a6)](a0_0xc90043(0x182),path['join'](__dirname,a0_0xc90043(0x182))),app[a0_0xc90043(0x176)](express['static'](path[a0_0xc90043(0x19a)](__dirname,'public')));const index_router=require(a0_0xc90043(0x193)),products_router=require(a0_0xc90043(0x191)),warehouse_router=require(a0_0xc90043(0x1a0)),staff_router=require(a0_0xc90043(0x1b0)),customer_router=require('./routers/customer'),supplier_router=require(a0_0xc90043(0x17b)),all_purchases_router=require('./routers/all_purchases'),purchases_return_router=require(a0_0xc90043(0x19c)),all_sales_router=require(a0_0xc90043(0x1ad)),sales_return_router=require(a0_0xc90043(0x169)),adjustment_router=require(a0_0xc90043(0x1bd)),transfer_router=require(a0_0xc90043(0x16e)),all_expenses_router=require(a0_0xc90043(0x189)),stock_report_router=require(a0_0xc90043(0x16b)),payment_report=require('./routers/payment_report'),all_report=require(a0_0xc90043(0x177)),master_shop=require(a0_0xc90043(0x1a5)),warehousemap_incoming=require(a0_0xc90043(0x1bc)),warehousemap_outgoing=require(a0_0xc90043(0x197)),transaction_reports_finished=require(a0_0xc90043(0x184)),profile_router=require(a0_0xc90043(0x1a1)),sing_up_router=require('./routers/sing_up'),login_router=require(a0_0xc90043(0x1ae)),all_purchases_router_finished=require(a0_0xc90043(0x1ab)),all_sales_router_finished=require(a0_0xc90043(0x185)),adjustment_router_finished=require(a0_0xc90043(0x1b7)),transfer_router_finished=require(a0_0xc90043(0x180)),purchases_return_finished=require(a0_0xc90043(0x18c)),sales_return_finished=require(a0_0xc90043(0x16f)),pdfOutReport=require('./routers/pickinglist'),edit_approver_router=require('./routers/edit_approval'),passwordChanger=require(a0_0xc90043(0x196)),Tester=require(a0_0xc90043(0x1a7));app['use'](a0_0xc90043(0x166),Tester),app[a0_0xc90043(0x176)](a0_0xc90043(0x175),passwordChanger),app['use'](a0_0xc90043(0x199),edit_approver_router),app[a0_0xc90043(0x176)]('/',index_router),app[a0_0xc90043(0x176)](a0_0xc90043(0x16a),products_router),app['use'](a0_0xc90043(0x1a4),warehouse_router),app[a0_0xc90043(0x176)](a0_0xc90043(0x188),staff_router),app[a0_0xc90043(0x176)]('/customer',customer_router),app[a0_0xc90043(0x176)]('/supplier',supplier_router),app['use'](a0_0xc90043(0x190),all_purchases_router),app['use'](a0_0xc90043(0x192),purchases_return_router),app[a0_0xc90043(0x176)](a0_0xc90043(0x18a),all_sales_router),app['use']('/sales_return',sales_return_router),app['use'](a0_0xc90043(0x18f),adjustment_router),app[a0_0xc90043(0x176)](a0_0xc90043(0x165),transfer_router),app[a0_0xc90043(0x176)](a0_0xc90043(0x17f),all_expenses_router),app[a0_0xc90043(0x176)](a0_0xc90043(0x18b),stock_report_router),app[a0_0xc90043(0x176)](a0_0xc90043(0x16c),payment_report),app[a0_0xc90043(0x176)](a0_0xc90043(0x171),all_report),app['use'](a0_0xc90043(0x1b9),master_shop),app['use'](a0_0xc90043(0x181),warehousemap_incoming),app[a0_0xc90043(0x176)](a0_0xc90043(0x195),warehousemap_outgoing),app[a0_0xc90043(0x176)](a0_0xc90043(0x18d),all_purchases_router_finished),app[a0_0xc90043(0x176)](a0_0xc90043(0x17c),all_sales_router_finished),app[a0_0xc90043(0x176)]('/purchases_return_finished',purchases_return_finished),app[a0_0xc90043(0x176)](a0_0xc90043(0x1b2),sales_return_finished),app[a0_0xc90043(0x176)](a0_0xc90043(0x167),pdfOutReport),app[a0_0xc90043(0x176)]('/adjustment_finished',adjustment_router_finished),app[a0_0xc90043(0x176)](a0_0xc90043(0x1aa),transfer_router_finished),app['use'](a0_0xc90043(0x187),transaction_reports_finished),app['use'](a0_0xc90043(0x1b3),profile_router),app[a0_0xc90043(0x176)]('/',sing_up_router),app['use']('/',login_router),app['listen'](port,()=>{const _0x251edd=a0_0xc90043;console[_0x251edd(0x1b6)](_0x251edd(0x174)+port);});