(self.webpackChunktrade_next_ui=self.webpackChunktrade_next_ui||[]).push([[996],{hllb:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>C});var n,a,u=r("VwJU"),s=r.n(u),o=r("HSMY"),c=r("DC7k"),i=r("xIFI"),l=r.n(i),p=r("c83x"),f=r("BdPR"),d=r("Ydmf"),g=r("evEn"),h=r("027f"),x=r("S2LQ"),b=r("nXUx"),k=r("AZQT"),w=r("ZIGC"),S=r("5Xb1"),v=r("JX8b"),y=r("xDxD"),m=r("EYi+"),E=r("r61A"),Z=r("GV+Z"),I=r("W2MH"),D=(0,x.l6)(),T=l().createElement;function _(t){t.lang;(0,h.useSpotInitState)(),(0,h.useMarginInitState)(),(0,h.useTradeInitState)(),function(){var t=(0,y._n)();(0,i.useEffect)((function(){if(t)return D.getStreamTickers().subscribe((function(){n=Date.now()}))}),[t]),(0,E.Z)((function(){n&&Date.now()-n>=5e3&&a!==n&&(a=n,(0,Z.gp)({t:"ws_nodata"}),(0,I.j)("ws_nodata",{source:"spot"}))}),1e3)}();var e=(0,p.useDispatch)(),r=(0,f.Z)(x.r$),u=(0,c.Z)(r,1)[0],s=(0,f.Z)(x.Eb),o=(0,c.Z)(s,1)[0],l=(0,y.lr)().layout;l=(0,w.XY)([x.UW,x.$f,x.rh],l,x.rh);var b=o||l||x.rh;(0,i.useEffect)((function(){x.sk||e.setting.updateState({color:u||x.Pe,layout:b})}),[x.sk]);var k=(0,i.useCallback)((function(){return T(g.Ar,null)}),[]);return T(d.Z,{render:k})}_.getInitialProps=function(){var t=(0,o.Z)(s().mark((function t(e){var r,n,a,u,o,i,l,p,f,d,g,h,w,y,E,Z,I,D,T,_;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,n=r.lng,a=r.symbol,u=e.appContext,o=e.appContext.store.dispatch,t.next=3,Promise.all([(0,b.xD)(),(0,b.yE)(),(0,b._7)(),(0,b.vF)(),o.tradeNews.getTradeNews({lang:n})]);case 3:if(i=t.sent,l=(0,c.Z)(i,4),p=l[0],f=void 0===p?[]:p,d=l[1],g=l[2],h=void 0===g?[]:g,w=l[3],0!==h.length||!x.sk){t.next=13;break}throw new Error("product is empty");case 13:return y=(0,S.eW)(h,a),E=y.filterProducts,Z=void 0===E?[]:E,I=y.curSymbol,D=(0,v.getExchangeInfo)(Z),T=(0,S.U4)(Z[0])||{},_=(0,k.Qs)(f,I),o.products.updateState({currentProduct:T}),o.exchangeInfo.updateState(D),Z.length||(u.notFound=!0),o.pageStore.updateState({info:_,currency:d,symbol:(0,m.Y)(I),tradeType:x.xy.SPOT,page:x.qX.TRADE,marketTags:w||{list:[],riskys:[]},showError:!Z.length}),t.abrupt("return",{lang:n});case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();const C=_}}]);