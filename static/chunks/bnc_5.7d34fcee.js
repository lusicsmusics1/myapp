(self.webpackChunktrade_next_ui=self.webpackChunktrade_next_ui||[]).push([[18],{"/Olr":(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>H});var i=r("DC7k"),n=r("xIFI"),o=r.n(n),a=r("2W6z"),l=r.n(a),s=r("9Koi"),c=r("qN/k"),u=r("DtyY"),d=r("ouRf"),m=r("MXyZ"),f=r("jYz7"),h=r("52t6"),x=r("ebi9"),p=r("GE9+"),v=o().createElement,y=20,g=function(e){var t=e.currentType,r=e.data,i=e.type,o=e.reverse,a=void 0!==o&&o,l=e.allowScroll,s=void 0!==l&&l,c=e.decimalPlace,g=e.quantityPrecision,k=e.orders,b=void 0===k?[]:k,S=e.renderOverlay,Z=e.renderRow,P=e.configs,w=e.renderAutoSizer,C=e.listStyle,M=void 0===C?{}:C,z=e.enablePriceClick,O=(0,n.useRef)(0),A=(0,n.useState)(a),E=A[0],W=A[1],I=(0,p.l)((function(e){return e.showOverlay})),T=!!S&&I;(0,n.useEffect)((function(){"ask"===t&&W(!0)}),[t]);var q=(0,n.useState)(-1),N=q[0],R=q[1],F=(0,n.useState)(0),B=F[0],H=F[1],D=(0,d.D)((function(e){var t=e.scrollOffset,r=Math.floor(t/y)-Math.floor(B/y);S&&r&&R(r+N),H(t)}),1e3/60,!0),L=(0,m.D)((function(e){var t=e.index,n=e.style,o=O.current,l=r.length,d=Math.max(o-l,0);if(a&&t<d||!a&&t>=l)return null;var m=a?t-d:t;a&&!s&&o>0&&l>o&&(m=l-o+t);var f=r[m],h=f.price,p=f.amount,y=f.total,k=T&&(a?N<=t:N>=t),w=Z(P,r,m,a),C=w.progress,M=w.datas;return v(x.Z,{className:"".concat(k?"bar-hoverbg":""," ").concat(N===t&&k?a?"hover-top":"hover-bottom":""),decimalPlace:c,quantityPrecision:g,price:h,amount:p,total:y,type:i,onMouseEnter:function(){S&&R(t)},point:b.includes(h),style:(0,u.Z)((0,u.Z)({},n),{},{boxSizing:"border-box"}),enablePriceClick:z,progress:C,datas:M})})),_=(0,n.useCallback)((function(e){e&&E&&(e.scrollToItem(O.current-1),W(!1))}),[E]);return v("div",{className:"orderbook-list",flex:1},v(f.Z,null,(function(e){var t=e.width,o=e.height,l=s?Math.max(r.length,Math.ceil(o/y)):Math.floor(o/y);return a&&(O.current=l),w&&w(l),v(n.Fragment,null,v(h.t7,{ref:_,style:M,itemSize:y,itemCount:l,height:o,width:t,onScroll:D},L),!!S&&-1!==N&&S({hoverIndex:N,showOverlay:T,reverse:a,scrollHeight:B,rowCountRef:O,rowHeight:y,height:o,data:r,type:i}))})))};const k=o().memo(g);var b=r("zU/C"),S=r("IJk6"),Z=r("Y+p1"),P=r.n(Z),w=r("mrSG"),C=r("vJk+");const M=function(e){return o().createElement(C.Z,(0,w.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o().createElement("path",{d:"M5 13.47l1.41-1.41 5.1 5.1V3h1.99v14.15l5.09-5.09L20 13.47l-7.5 7.5-7.5-7.5z",fill:"currentColor"}))};var z=r("r61A"),O=r("I+8M"),A=r("wHkB"),E=o().createElement,W="#CACED3",I={price:void 0,times:0},T=Array(4).fill(W),q=o().memo((function(e){var t=e.isConnected,r=e.themeColor,i=void 0===r?"#00C582":r,o=e.contractPrice,a=Array(4).fill(i),l=(0,n.useState)(t?a:T),c=l[0],u=l[1],d=(0,n.useState)(0),m=d[0],f=d[1],h=(0,s.$)().t;(0,n.useEffect)((function(){f(0),u(t?a:T)}),[t,i]),(0,z.Z)((function(){var e=new Array(4).fill("").map((function(e,t){return t<=m?"#F0B90B":W}));f((m+1)%4),u(e)}),t?null:500),(0,z.Z)((function(){o===I.price?(I.times++,3===I.times&&u([i,i,i,W])):(I.times=0,I.price=o,P()(a,p)||u(a))}),t?1e3:null);var x=t?h("trd-orderBook-net-online",{defaultValue:"System Status: Operational"}):h("trd-orderBook-net-offline",{defaultValue:"System Status: Connecting"}),p=(0,O.B)(c);return(0,n.useMemo)((function(){return E(A.Z,{tip:x,placement:"bottom",delay:1e3},E("svg",{width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("rect",{y:"7",width:"2.66667",height:"5",fill:p[0]}),E("rect",{x:"4.44446",y:"4",width:"2.66667",height:"8",fill:p[1]}),E("rect",{x:"8.88892",y:"2",width:"2.66667",height:"10",fill:p[2]}),E("rect",{x:"13.3333",width:"2.66667",height:"12",fill:p[3]})))}),[p,x])})),N=function(e){var t,r=e.lastPriceSign,i=e.contractPrice,n=e.markPrice,o=e.isConnected,a=e.quoteAsset,l=e.baseAsset,s=e.t,c=e.locale,u=e.isMore,d=e.themeColor,m="status-primary";switch(r){case-1:t=E(M,{className:"arrow-icon ".concat(m="status-sell")});break;case 1:t=E(M,{style:{transform:"rotate(180deg)"},className:"arrow-icon ".concat(m="status-green")});break;default:m="status-primary",t=E("div",{style:{width:"16px"}})}return E("div",{className:"orderbook-ticker"},E("div",{className:"contractPrice ".concat(m)},i,t),E("div",{className:"markPrice"},n),E("div",null,u&&E("a",{className:"more",target:"",href:"/".concat(c,"/orderbook/").concat(l,"_").concat(a)},s("trd-orderBook-More",{defaultValue:"More"})),E(q,{isConnected:o,themeColor:d,contractPrice:i})))};const R=o().memo(N);var F=o().createElement,B=function(e){var t=e.asks,r=e.bids,a=e.askOrders,u=void 0===a?[]:a,d=e.bidOrders,m=void 0===d?[]:d,f=e.contractPrice,h=void 0===f?0:f,x=e.markPrice,p=e.currentLevel,v=void 0===p?0:p,y=e.isConnected,g=void 0!==y&&y,Z=e.treeLevels,P=void 0===Z?[]:Z,w=e.treeLevelsMapTickSize,C=void 0===w?{}:w,M=e.decimalPlace,z=void 0===M?2:M,O=e.quantityPrecision,A=void 0===O?3:O,E=e.lastPriceSign,W=void 0===E?0:E,I=e.quoteAsset,T=e.baseAsset,q=e.handleDecimalChange,N=e.isMore,B=void 0===N||N,H=e.typeList,D=e.tableHeaderConfig,L=void 0===D?[]:D,_=e.type,Y=void 0===_?"all":_,j=e.changeType,V=e.renderRow,G=e.renderAutoSizer,X=e.themeColor,Q=e.listStyle,J=void 0===Q?{}:Q,K=e.renderOverlay,U=e.enablePriceClick,$=void 0!==U&&U;l()(!!I,'"quoteAsset" can not be empty.'),l()(!!T,'"baseAsset" can not be empty.');var ee=(0,s.$)(),te=ee.t,re=ee.i18n.language,ie=o().useState(Y),ne=(0,i.Z)(ie,2),oe=ne[0],ae=ne[1],le=(0,n.useCallback)((function(e){ae(e),j&&j(e)}),[]);return F(c.Z,{tx:"orderBook",variant:"container"},F(S.Z,{type:oe,treeLevels:P,treeLevelsMapTickSize:C,typeList:H,currentLevel:v,handleTypeClick:le,handleDecimalChange:q,hasOverlay:!!K}),F(b.Z,{configs:L}),F("div",{className:"orderlist-container"},"bid"!==oe&&F(k,{currentType:oe,reverse:!0,type:"ask",data:t,decimalPlace:z,quantityPrecision:A,baseAsset:T,quoteAsset:I,allowScroll:"ask"===oe,orders:u,renderOverlay:K,renderRow:V,configs:L,renderAutoSizer:G,listStyle:J,enablePriceClick:$}),F(R,{contractPrice:h,markPrice:x,isConnected:g,lastPriceSign:W,t:te,locale:re,baseAsset:T,quoteAsset:I,isMore:B,themeColor:X}),"ask"!==oe&&F(k,{currentType:oe,reverse:!1,type:"bid",data:r,decimalPlace:z,quantityPrecision:A,baseAsset:T,quoteAsset:I,allowScroll:"bid"===oe,orders:m,renderOverlay:K,renderRow:V,configs:L,renderAutoSizer:G,enablePriceClick:$,listStyle:J})))};B.defaultProps={asks:[],bids:[]};const H=B},"0RB1":(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ee});var i,n=r("xIFI"),o=r.n(n),a=r("Ng/A"),l=r("qN/k"),s=r("I78S"),c=r("DtyY"),u=r("XP5A"),d=(i="px",function(e){return"".concat(e).concat(i)}),m={my:0,py:"xs",display:"flex",alignItems:"center",flexGrow:0,flexShrink:0,color:"t.third",fontSize:[0],cursor:"auto"},f={userSelect:"none",px:"xs",flexGrow:1,fontWeight:"normal",whiteSpace:"nowrap"},h={date:{minWidth:d(110)},pair:{minWidth:d(90)},side:{minWidth:d(30)},price:{minWidth:d(75)},filled:{minWidth:d(85)},fee:{minWidth:d(110)},total:{minWidth:d(125)}},x={time:{minWidth:d(120)},symbol:{minWidth:d(90)},side:{minWidth:d(30)},price:{minWidth:d(75)},quantity:{minWidth:d(75)},fee:{minWidth:d(110)},profit:{minWidth:d(125)}},p=function(e){return e?x:h},v=function(e){return Object.keys(p(e)).reduce((function(t,r){return t+parseInt(p(e)[r].minWidth,10)}),0)},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=p(t)[e]||{};return(0,c.Z)((0,c.Z)((0,c.Z)({},f),r),{},{flexBasis:r.minWidth})},g=o().createElement,k=function(e){return g(s.Z,e)},b=function(e){var t=(0,e.useColumn)((0,u.Z)(e,["useColumn"])),r=t.nextDate,i=t.nextPair,n=t.nextSide,o=t.nextPrice,a=t.nextQty,d=t.nextFee,f=t.nextProfit;return g(l.Z,{sx:(0,c.Z)((0,c.Z)({},m),{},{color:"table.color",fontSize:[0],cursor:"auto",py:0,width:"100%"})},g(s.Z,{sx:(0,c.Z)({color:"table.timeColor"},y("time",!0))},r),g(s.Z,{sx:y("symbol",!0)},i),g(s.Z,Object.assign({},n,{sx:y("side",!0)})),g(k,{sx:y("price",!0)},o),g(k,{sx:y("quantity",!0)},a),g(s.Z,{sx:y("fee",!0)},d),g(k,{sx:y("profit",!0)},f))};const S=o().memo(b);var Z=r("jYz7"),P=r("X84v"),w=r("ZODY"),C=o().createElement,M=function(e){var t=e.loading,r=void 0!==t&&t,i=e.data,l=e.renderRow,s=e.empty,u=e.isEmpty,d=e.hasMore,m=e.loadMore,f=e.rowHeight,h=void 0===f?80:f,x=e.minWidth,p=void 0===x?0:x,v=e.sx,y=(0,n.useRef)({data:i,flag:-1});y.current.data!==i&&(y.current.flag*=-1),y.current.data=i;var g=(0,n.useRef)(null);(0,n.useEffect)((function(){if(g.current){var e=g.current.listRef;if(e&&e.current)e.current.resetAfterIndex(0,!0)}}),[y.current.flag]);var k=(0,n.useMemo)((function(){return[{title:"",dataIndex:"",hideTitle:!0,render:l}]}),[l]);return u?C(o().Fragment,null,s):C(a.Z,{sx:(0,c.Z)({position:"relative",".list-grid":{width:"100%","> div > div":{border:0,"> div":{my:0,px:0,height:"100%",borderBottom:"1px solid",borderBottomColor:"lines.light"}}}},v)},C(w.Z,{fullScreen:!0,inner:!0,show:r}),C(Z.Z,null,(function(e){var t=e.height,r=e.width;return C(P.Z,{threshold:5,hasMore:d,loadMore:m,className:"list-grid",columns:k,ref:g,data:i,listGridConfig:{collapseHeight:h,height:Math.max(t-4,0),width:Math.max(r,p)},__hackDataChanged:y.current.flag})})))};const z=o().memo(M);var O=r("BSl2"),A=o().createElement,E=function(e){return A(s.Z,e)},W=function(e){var t=(0,e.useColumn)((0,u.Z)(e,["useColumn"])),r=t.nextDate,i=t.nextPair,n=t.nextSide,o=t.nextPrice,a=t.nextQty,d=t.nextFee,f=t.nextTotal;return A(l.Z,{sx:(0,c.Z)((0,c.Z)({},m),{},{color:"table.color",fontSize:[0],cursor:"auto",py:0,width:"100%"})},A(s.Z,{sx:(0,c.Z)({color:"table.timeColor"},y("date"))},r),A(s.Z,{sx:y("pair")},i),A(s.Z,Object.assign({},n,{sx:y("side")})),A(E,{sx:y("price")},o),A(E,{sx:y("filled")},a),A(s.Z,{sx:y("fee")},d),A(E,{sx:y("total")},f))};const I=o().memo(W);var T=o().createElement,q=[{key:"date",text:"Date",i18n:"date"},{key:"pair",text:"Pair",i18n:"pair"},{key:"side",text:"Side",i18n:"side"},{key:"price",text:"Price",i18n:"price"},{key:"filled",text:"Filled",i18n:"filled"},{key:"fee",text:"Fee",i18n:"fee"},{key:"total",text:"Total",i18n:"total"}],N=[{key:"time",text:"Time",i18n:"time"},{key:"symbol",text:"Symbol",i18n:"symbol"},{key:"side",text:"Side",i18n:"side"},{key:"price",text:"Price",i18n:"price"},{key:"quantity",text:"Quantity",i18n:"quantity"},{key:"fee",text:"Fee",i18n:"fee"},{key:"profit",text:"Realized Profit",i18n:"realizedProfit"}],R=function(e,t){return function(r,i){return T(e?S:I,Object.assign({},i,{useColumn:t}))}},F=function(){var e=(0,O.Z)().getI18n;return T(a.Z,{sx:{color:"t.secondary",textAlign:"center",fontSize:[0],marginTop:"xs"}},e("nodata",{defaultValue:"You have no trades."}))},B=function(e,t){var r=e.isFutures,i=e.isEmpty,o=e.hasMore,c=e.loadMore,u=e.loading,d=e.data,f=void 0===d?[]:d,h=e.useColumn,x=(0,O.Z)().getI18n,p=(0,n.useMemo)((function(){return T(l.Z,{sx:m},function(e){return e?N:q}(r).map((function(e){var t=e||{},i=t.key,n=t.i18n,o=t.text,l=x(n,{defaultValue:o});return T(a.Z,{key:i,sx:y(i,r)},T(s.Z,{sx:{fontSize:0,color:"t.secondary"}},l))})))}),[x,r]);return T(l.Z,{ref:t,sx:{flexDirection:"column",flex:"1 0",overflowX:"auto"}},p,T(z,{sx:{flex:"1 0"},loading:u,rowHeight:32,renderRow:R(r,h),data:f,hasMore:o,loadMore:c,isEmpty:i,empty:T(F,null),minWidth:v(r)}))};const H=o().memo(o().forwardRef(B));var D=r("MKSq"),L=r("S2LQ"),_=r("wVdo"),Y=r("ASW3"),j=r("FXY6"),V=r("xRl8"),G=r("c83x"),X=o().createElement,Q=function(e){var t=e.hideOtherPairs,r=e.onHideOtherPairs,i=e.hideText,n=e.hideName,a=(0,G.useSelector)((function(e){return e.pageStore.page})),c=(0,_.C)()===L.UW&&"futures"===a;return X(o().Fragment,null,c?X(l.Z,{sx:{alignItems:"center",fontSize:[1,0],color:"t.thead",userSelect:"none",position:"absolute",top:"-36px",right:c?"5px":"28px",zIndex:"999",height:"40px"}},X(Y.ZP,{trigger:"click",placement:"bottom-end",enablePortal:!0,overlay:X(l.Z,{sx:{bg:"t.grey700",py:"4px",px:"8px",alignItems:"center",fontSize:[1,0],color:"t.thead",cursor:["auto","pointer"],lineHeight:["30px","24px"]},onClick:function(){return r(!t)}},X(j.ZP,{name:n,size:[18,16],checked:t,onChange:function(){return!1}}),X(s.Z,{sx:{lineHeight:1}},i))},X(V.Z,{size:20,sx:{color:"t.primary",cursor:"pointer",display:"inline-block"}}))):X(l.Z,{sx:{alignItems:"center",fontSize:[1,0],color:"t.thead",userSelect:"none",position:"absolute",top:"-36px",right:c?"5px":"28px",zIndex:"999",height:"40px"},onClick:function(){return r(!t)}},X(j.ZP,{name:n,size:[18,16],checked:t,onChange:function(){return!1}}),X(s.Z,{sx:{lineHeight:1}},i)))};const J=function(e){var t=e.type,r=e.onSearch,i=e.hideOtherPairs,n=e.onHideOtherPairs,o=e.hideText,a=e.hideName;return X(l.Z,{sx:{alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",mb:1,mt:2}},X(D.Z,{type:t,onSearch:r}),X(Q,{sx:{marginLeft:"auto"},hideOtherPairs:i,onHideOtherPairs:n,hideText:o,hideName:a}))};var K=r("z2t1"),U=o().createElement;var $=function(e){var t=e.isFutures,r=e.filterType,i=e.onSearch,l=e.hideOtherPairs,s=e.onHideOtherPairs,c=e.hasMore,u=e.loadMore,d=e.isEmpty,m=e.data,f=e.loading,h=e.currentPage,x=e.useColumn,p=e.hideText,v=e.hideName,y=function(e){var t=(0,n.useRef)(null);return(0,n.useEffect)((function(){if(e===K.li){var r=t.current;if(r&&r instanceof Element){var i=r.querySelector(".list-grid");i&&(i.scrollTop=0)}}})),t}(h);return U(o().Fragment,null,U(a.Z,{sx:{position:"relative"}},U(J,{type:r,onSearch:i,hideOtherPairs:l,onHideOtherPairs:s,hideText:p,hideName:v})),U(H,{ref:y,"data-testid":"tradeInfoTable",isFutures:t,hasMore:c,loadMore:u,isEmpty:d,data:m,loading:f,useColumn:x}))};const ee=o().memo($)},"2W6z":e=>{"use strict";var t=function(){};e.exports=t}}]);