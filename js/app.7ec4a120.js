(function(){"use strict";var t={4810:function(t,e,s){var o=s(144),i=s(2648),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("main",{style:t.tasks.backgroundColor.code.indexOf("background")>-1?t.tasks.backgroundColor.code:""},[e("section",{staticClass:"t-container",style:t.tasks.textFont.code.indexOf("font-family")>-1?t.tasks.textFont.code:""},[e("div",{staticClass:"promo",style:t.tasks.paddingTop.code.indexOf("padding")>-1?t.tasks.paddingTop.code:""},[e("header",{style:t.tasks.imgCenter.code},[e("img",{style:t.tasks.logoFixed.code.indexOf("position")>-1?t.tasks.logoFixed.code:"",attrs:{src:s(8688),alt:"logo"}})]),e("task-item",{staticClass:"t-code-logo-center",attrs:{item:t.tasks.imgCenter,"position-left":""},on:{"set-code":t.setCode}}),e("task-item",{staticClass:"t-code-padding-top",attrs:{item:t.tasks.paddingTop,"position-left":""},on:{"set-code":t.setCode}}),e("task-item",{staticClass:"t-code-fixed",attrs:{item:t.tasks.logoFixed,"position-left":""},on:{"set-code":t.setCode}}),e("div",{staticClass:"promo-wrap"},[e("p",{staticClass:"promo-text",style:t.tasks.textOpacity.code.indexOf("opacity")>-1?t.tasks.textOpacity.code:""},[t._v(" frontend development { "),e("br"),t._v(" speed: quick; "),e("br"),t._v(" level: easy; "),e("br"),t._v(" spirit: fun; "),e("br")]),e("task-item",{staticClass:"t-code-text-opacity",attrs:{item:t.tasks.textOpacity},on:{"set-code":t.setCode}}),e("task-item",{staticClass:"t-code-text-font",attrs:{item:t.tasks.textFont},on:{"set-code":t.setCode}})],1)],1)]),e("section",{staticClass:"slider"},[e("task-item",{staticClass:"t-code-background-color",attrs:{item:t.tasks.backgroundColor,"position-left":""},on:{"set-code":t.setCode}}),e("task-item",{staticClass:"t-code-background-img",attrs:{item:t.tasks.backgroundImg,"position-left":"",dark:""},on:{"set-code":t.setCode}}),t.tasks.backgroundImg.code.indexOf("background-image: url(")>-1?e("task-item",{staticClass:"t-code-border-radius",attrs:{item:t.tasks.borderRadius,"position-left":""},on:{"set-code":t.setCode}}):t._e(),t.tasks.backgroundImg.code.indexOf("background-image: url(")>-1?e("task-item",{staticClass:"t-code-text-position",attrs:{item:t.tasks.textPosition,"position-left":""},on:{"set-code":t.setCode}}):t._e(),e("swiper",{ref:"swiper",staticClass:"slider-swiper",attrs:{options:t.swiperOptions}},[e("swiper-slide",{style:t.tasks.borderRadius.code.indexOf("border-radius")>-1?t.tasks.borderRadius.code:""},[e("div",{staticClass:"slide-wrap",style:t.tasks.backgroundImg.code.indexOf("background-image")>-1?t.tasks.backgroundImg.code:""},[e("span",{staticClass:"slide-one",style:t.tasks.textPosition.code.indexOf("margin")>-1||t.tasks.textPosition.code.indexOf("align-self")>-1?t.tasks.textPosition.code:""},[t._v("слайдер "),e("br"),t._v(" делает")]),e("span",{staticClass:"slide-two"},[t._v("вжух")])])]),e("swiper-slide",{style:t.tasks.borderRadius.code.indexOf("border-radius")>-1?t.tasks.borderRadius.code:""},[e("div",{staticClass:"slide-wrap",staticStyle:{"background-image":"url(img/slide-2.png)"}},[e("span",{staticClass:"slide-center"},[t._v("ого...")])])]),e("div",{staticClass:"swiper-button-next",style:t.tasks.arrowShow.code.indexOf("display")>-1?t.tasks.arrowShow.code:""},[e("svg",{attrs:{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M27.3333 14.0002L14 27.3335L11.625 25.0002L20.9583 15.6668L0.666626 15.6668L0.666626 12.3335L20.9583 12.3335L11.625 3.00016L14 0.66683L27.3333 14.0002Z",fill:"#F9F4DE"}})])]),e("div",{staticClass:"swiper-button-prev"},[e("svg",{attrs:{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M27.3333 14.0002L14 27.3335L11.625 25.0002L20.9583 15.6668L0.666626 15.6668L0.666626 12.3335L20.9583 12.3335L11.625 3.00016L14 0.66683L27.3333 14.0002Z",fill:"#F9F4DE"}})])])],1),e("task-item",{staticClass:"t-code-arrow",attrs:{item:t.tasks.arrowShow},on:{"set-code":t.setCode}})],1),e("section",{staticClass:"modal-block"},[e("div",{staticClass:"modal-button",style:t.tasks.cursor.code.indexOf("cursor")>-1?t.tasks.cursor.code:"",on:{click:function(e){return t.openModal()}}},[e("span",[t._v(" "+t._s(t.textBtn)+" ")])]),e("task-item",{staticClass:"t-code-cursor",attrs:{item:t.tasks.cursor},on:{"set-code":t.setCode}}),t.firstClick?t._e():e("task-item",{staticClass:"t-code-modal",attrs:{item:t.tasks.modal},on:{"set-code":t.setCode}})],1),t.modal?e("modal-cmp",{attrs:{dialog:t.modal},on:{closeModal:t.closeModal}}):t._e(),e("section",{staticClass:"promo-wrap block"},[e("p",[t._v("Cверстай сам ")]),e(i.Z,{attrs:{label:"Введите html код",filled:"","auto-grow":"",clearable:"","clear-icon":"mdi-close-circle",dark:""},model:{value:t.block,callback:function(e){t.block=e},expression:"block"}}),e("div",{staticClass:"block-html",domProps:{innerHTML:t._s(t.block)}})],1),e("section",{staticClass:"promo-wrap block"},[e("p",[t._v("Создай свой блок!")]),e(i.Z,{attrs:{label:"Введите html код",filled:"","auto-grow":"",clearable:"","clear-icon":"mdi-close-circle",dark:""},model:{value:t.html,callback:function(e){t.html=e},expression:"html"}}),e("div",{staticClass:"block-html",domProps:{innerHTML:t._s(t.html)}})],1)],1)])},l=[],r=s(1653),n=s(5697),d=s(7394),c=s(4324),p=s(1088),u=s(9139),m=s(5942),f=function(){var t=this,e=t._self._c;return e(p.Z,{staticClass:"row",attrs:{justify:"center"}},[e(n.Z,{attrs:{dark:"",fab:"",small:""},on:{click:function(e){e.stopPropagation(),t.dialog=!t.dialog}}},[e(c.Z,{attrs:{"x-large":""}},[t._v(" mdi-alert-circle ")])],1),e(d.Z5,[t.dialog?e(r.Z,{directives:[{def:m.Z,name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"alert",class:{_left:t.positionLeft},attrs:{prominent:"",shaped:"",elevation:"11",dark:"",text:""}},[e("p",[t._v(" "+t._s(t.item.task)+" ")]),e(u.Z,{attrs:{label:"Введите код",required:""},on:{input:function(e){return t.$emit("set-code",{item:t.item.name,code:t.code})}},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),!t.help&&t.item.help?e(n.Z,{attrs:{dark:""},on:{click:function(e){t.help=!t.help}}},[e(c.Z,[t._v(" mdi-help ")])],1):t.item.help?e("span",[t._v(" "+t._s(t.item.help)+" ")]):t._e()],1):t._e()],1)],1)},g=[],k={data(){return{dialog:!1,code:"",help:""}},props:{item:{type:Object,default:()=>{}},positionLeft:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},methods:{close(){this.dialog=!1}}},x=k,h=s(1001),b=(0,h.Z)(x,f,g,!1,null,"23ed14a9",null),w=b.exports,v=function(){var t=this,e=t._self._c;return e(d.Z5,[t.dialog?e("div",{staticClass:"overlay"},[e("div",{staticClass:"modal-content"},[e("span",[t._v("ну и ну, хех)")]),e("div",{staticClass:"modal-close",on:{click:t.closeModal}},[e("svg",{attrs:{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M2.6 26L0 23.4L10.4 13L0 2.6L2.6 0L13 10.4L23.4 0L26 2.6L15.6 13L26 23.4L23.4 26L13 15.6L2.6 26Z",fill:"#F9F4DE"}})])])])]):t._e()])},C=[],y={data(){return{}},props:{dialog:{type:Boolean,default:!1}},methods:{disableScroll(){const t=document.querySelector("body");if("fixed"!==t.style.position){const e=window.pageYOffset,s=window.innerWidth;this.hasScrollbar()?t.style.cssText=`top: ${-e}px; position: fixed; overflow-y: scroll; max-width: ${s}px`:t.style.cssText=`top: ${-e}px; position: fixed; max-width: ${s}px`}},enableScroll(){const t=document.querySelector("body"),e=t.style.top;e&&(t.style.cssText="top: auto; position: static; overflow-y: auto; max-width: 100%",window.scrollTo({top:-parseInt(e,10),behavior:"instant"}))},closeModal(){this.enableScroll(),this.$emit("closeModal")},hasScrollbar(){return document.body.offsetHeight>window.innerHeight}},mounted(){this.dialog&&this.disableScroll()}},A=y,L=(0,h.Z)(A,v,C,!1,null,"7d0d58cd",null),O=L.exports,F={components:{TaskItem:w,ModalCmp:O},data(){return{firstClick:!0,html:'<p style="font-size: 20px; color: red; margin-left: 20px"> пример </p>',textBtn:"a нажми",block:'<p style="font-size: 20px; color: red; margin-left: 40px"> здесь пишем html-код, а в атрибуте style у каждого тега - inline стили </p>',modal:!1,tasks:{logoFixed:{name:"logoFixed",task:"А давай зафиксируем логотип, чтоб при скролле он оставался прибитым к верху",help:"position: fixed",code:""},textOpacity:{name:"textOpacity",task:"Кажется, текст слишком бледный... Измени прозрачность цвета",help:"opacity: 1",code:""},textFont:{name:"textFont",task:"Шрифт не тот, давай сделаем Source Code Pro? Он подключен, осталось применить :)",help:'font-family: "Source Code Pro"',code:""},backgroundColor:{name:"backgroundColor",task:"Кажется, цвет фона тоже не соответствует макету. Исправим на черный?",help:"background-color: #000000",code:""},paddingTop:{name:"paddingTop",task:"А сверху отступа не хватает, давай попробуем добавить внутренний. Сколько там по макету?",help:"padding-top: 32px",code:""},imgCenter:{name:"imgCenter",task:"Нужно логотип выровнять по центру (по горизонтали), есть идеи? Можно использовать больше одного правила через точку с запятой :)",help:"",code:""},backgroundImg:{name:"backgroundImg",task:"Кажется у фона слайда пропала картинка, попробуем вернуть? Ее относительный путь: img/slide-1.png",help:"background-image: url(img/slide-1.png)",code:""},borderRadius:{name:"borderRadius",task:"Скруглим края картинки?",help:"border-radius: 24px",code:""},textPosition:{name:"textPosition",task:"Поправим расположение текста? Он должен прижиматься к нижнему краю картинки. К блоку с картинкой применен display: flex",help:"align-self: flex-end или margin-top: auto",code:""},arrowShow:{name:"arrowShow",task:"Тут должна быть стрелка! Где она? А в разметке есть. Может, изменим ей свойство display? Только не блочный и не строчный, прошу",help:"display: inline-flex или display: flex",code:""},cursor:{name:"cursor",task:"Нужно заменить курсор на кнопке с дефолтного на pointer. Легко же звучит?",help:"cursor: pointer",code:""},modal:{name:"modal",task:"Нужно кнопку починить, чтоб открылась модалка... Как быть?",help:'Это пока слишком сложно для тебя, поэтому пока просто введи "Откройся"',code:""}},swiperOptions:{slidesPerView:1,spaceBetween:16,grabCursor:!0,effect:"flip",flipEffect:{slideShadows:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},methods:{setCode(t){this.tasks[t.item].code=t.code,"modal"===t.item&&"откройся"===t.code.toLowerCase()&&(this.textBtn="а вот щас?")},openModal(){this.firstClick?(this.firstClick=!1,this.textBtn="блин, не работает"):"откройся"===this.tasks.modal.code.toLowerCase()&&(this.modal=!0)},closeModal(){this.modal=!1}}},Z=F,S=(0,h.Z)(Z,a,l,!1,null,"969c4b92",null),B=S.exports,H=s(8864);o["default"].use(H.Z);var T=new H.Z({}),M=s(697),V=s.n(M);o["default"].config.productionTip=!1,o["default"].use(V()),new o["default"]({vuetify:T,render:t=>t(B)}).$mount("#app")},8688:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAAyCAYAAABMHLX6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqCSURBVHgB7VtrdtNKEq5u2cEZHDArwAbmN2YFOCvArCDJChJWgLMCwgpIVpBkBZgVYP7O3GCxApwHN4kldc9XLclIsl42MZlL/J2TE1vqLlVXVderZUH/B9Dfhw13hba11l1N1BAkbFzeX6m3DugOQNIt4/L7sDmu6s+uUsKzxOt79SetMdEbLag7vhi+oyUWj+uLr5+vLk52Uu/9GB5m3VvihnB59tcmrP1D1v3x92Eb9z/SEosDdsGQ3VHRGPrDcWsxwfkxfKu1Ol591LJzBwr641GhWwBbv9J6U7vWeu44uCuhRZ+WuHlAuPvw9RtF48q4qyXmwMXFsF3Gz7O7ygvafxJ+uzuqkj4U5L7OG8PWj8Kt4zlii5a4WRSlpJFx+8v6YAFg6y7j48NxdIfw21LUygptICM6KEpJZZXdlejREjeLstZd1l3dWVxeIlii20lz4DZS0l/h93cjMzu6PB92BHldIeQrfG2Sp2lcNYLiInaAUnbgafdgde3ffcrB9dmwS1I/R1t6k4UytqgjLHrF2Q9paoBYKCjb58htTj7PAObXkrRh6Kbwq7T6hOJwr8gdXp/91RWW9Sr8jnlfavWne/w50nLvaH6G/2f/aut9qinAD3Kq9FaTLpWdgIF9z6HdrMWxdStHrFv3IHhP9yJCz4PNcwpbGsAFmnwrVf0OQulQCUghetX7rd2s+5fnJz2MeRt+1yT6tXprffz3cLsE/zYp9ebeg2dHNANigTns7ZdVgM+k3rQQTPX3z1PMmbYDFsFBWSu9V1IBjCYC9OfxxX/aeYPYaqsV/bGsAhhIDnpcCNIMMH2ucvw3ScrDWenHlMDCJH+LTQCmd5X21pUlWg6JF9A0F1qD6BgIoX1VeTClOCnlW0+rb7xwik8YYUu/V0pt8Z/WYoeESFpPQ1PlY1aMMNeF/JAQjM20mM+QX6ZPCffG/Fye/7dDJSBIN2P8g3chxD7LJeDZTs7h8e5lcQz8+YxwUbBaCC2WmTiOeFF/1BqkTbw6P9kDM9uRS6MV57QlHr0YGXpYpCBrRwh6ThHFQigHNQ/XH7VGSZo8Rwrr4zSTYg/+9k1sLII9+I0u1F4Bv6l0oTDsrI9RPniHgub6NA9xdzQBG47Qu2F8KDEnJo88THaCFV+Q8fVZCmDcc2WPHxS51Liy1roxGlJgk8R3FnlWL01QHIuggA+8QxK3RgiOInrUacYm+MVu3Uqjy+DYwvdjzyPdTnOhWXBcsZ6mAEN/7WkP8eJN4nIjzTukQf5kimL+lzOfvIm8YKXoOHZNRGi4FQQpk6nEUKNRqqA46+Birrb2dMcj/cZ3g+bv/T33rAcO26ELuaq4yVgxKsrSgvsxo3GqjSaVQJFBMmoPn+7BrfSj17A7tssoepKiwlJepzBdwJ22owmWlNbDyXxY3/ji6yAZNLFw3rZx1xKcL9Rc+YK//yvF4v6+ODmWQrLw+6xgVXEnrsQTlcItH4DHTYTiKY/pDYomcfZHJeBpbxe7uRO5hN1Q93nOwUQJpYQegAshy0Pg1Ozv9eS60nHXw13QpC/mzAtpaxcBdE+T+6XmVgZXltdD/OhluROGUBo+WRg6Qepq0wz8SscIfJ7ibVAmVWbwWpBdxhSNXcQuup83L7eV7RdXXkcL67GU1J4UWJ5uaP8JuWDmYeXrnG5SXABNITS2r4WCSsMnStJCPYTfZ6v7lLHojiVk7qE/C5scr8NuEfHoMYiy4E3hhm1K8wCG9q3sWDYiGJhNEdce9Q5ZmFICC/66QhuIqd0xsU+XnKYxM8GTsolJMW2dLFAc5KzzOQIlg3TswaKLp3Qlqlwoo0+RCpTdlYWqGwrqpfEbxJNNCLs5EbamG4KyZxkN8Yyij056hzTElMDFz1jqdyDULFqDNuW68bHtgqFUr5ug1grS4O2iOdoonzpQxiYEv0VwV8jfYi2HUPhjhcJSF7gZk14iv/e/NWkGoGIuG2/mxkQJXOVNFVU+F7yAASz1SGjvm6pag9VVXxhZeX0WVh8828e/fbZsIRV6NIIV3scua6dVo6wMq0qHcFgN7j2F13m+w1W6Py8xh2xkJX1kbgNX0Kf7DowliDWXZ19RW8ymBKTuj2nBMEpgC01RADemelWXjvMC5jzwM6fhY1TTu5xj8zU+e7Zg1RBSLP/n1BnKiOfg2BlQTDsxDsr0dmdJMMpAKf1olvHJVJ+096VojlFC4CKiKNdA06I5z3tB5gwZ/h8KaIXXApe1iXu9ZCBHavo8OldKvZHg46i21npd9FzEuYezvsiEIP+y7Fi/xaIbCQJ20bzQHcWtyryU9cymYnTybl6dD7cRrGNVtGfBxzt+Spo2hxWPlshBtCUSDW7S4lQznukoct9TGQhRGL9S0GC3W2qHIZNM8obMr180LTVFLROMTPoqda6VKKFgSKJDMT7pUElrlNd7x5YexexV69MJTQglmWxaJYq1oNpu0hwAfS4w+3ljgh2a7B/ZK/WflTbLDDVRV3IrxrMm9Ue4nlH8obJwCzpVxb2cZvRaMh1bdeR+krbx8ZzxZMDvIYm4uxG6P+ENzCfnILZ0KQdGQOhL0ZzgBGF8cZI5n3lO60BHz8q5q8rHBJZlvVQkuxj/gbNRvmeUgCLsIPlQzpbS2sh8goV2BHr4YpMKYPpL0w05tMwpk7aTqLANP448Cj9X/Uo5plju0aQdn7JwTFqcQtPwJ0XpCprXywdULLjw2NTQZ3mYM5i4S+fTvGid4+FAiOPsyv3W1uqDJ5vmnSpLvuPekggHpVS1ATHRRzU7ElqiSkYxFF2M1kfws1ErtPlHHpQQxNgXQjtlZdybHxi68aPOCbiJF2ZQIa5OT3Y4vaVpmKNGn1/R1LwzRbSFQIOosBD73tfWnu1ECaS0pXnnNWg2VxZLbND32kE/uTG1DhwHYAMMzE4IWr2cXUy3mLlw8qvZDsV6QNRfcWXSrUwrEbsBff51FjhN3eSDm4BuUgFcnyA1TTLO4I6lOVSZRvMnv/Hag8d7SsV2ZZmWAsdHFiiV71WlZpYIjimyhRFiN05iHEd/TMZJFB0UcGWEU6s/WQ/qBztyt2H6NwlckbHyUdopVyp9PnVzxYus/r3P79NeGXpsLHwyyOOT8QTPKZUtGSOFYHNlo/ncQ+/ywdKUArSCtcfjXBj72NWmJs3GPSEVVNGUTmvbk9agXs/vq6eBYwhYmfSCuDCrKq8ZpY9UDkZn/GarbNcyRBo95peqVj+s7ssi66B/cj8hG0Hye9gNzitqA7obpnusvVNU4tue1sdsHHOUWrOBA6MlrZdQwFbeOD45Q5ZzmuZ+fieKlPBrtPnIV3Z9uuoorD0W/la2Oex3KP/HICkV9J+IQOj95PWFvota+idR5lDn7r5/urCdEPzGoKtdK/+3CH57+3m0S3rXsDh3lHIGkAZ2V0EKeGexEHfk91Hky6J3M/nVQi4GZ82GligBrhA5y8gbY165ROq6/GHggnYCl+hpFWIMcFeK9PFyFywInA9f/zg5zLx/B38SdStgIWe9Ve3fK//C7BJzglsJ8PmfWdhh6zdsgxfFi7uGhbYtTNC1dA+H98+132G1F3EY/0/H/wDa8VZQksXPVAAAAABJRU5ErkJggg=="}},e={};function s(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,o,i,a){if(!o){var l=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],a=t[c][2];for(var r=!0,n=0;n<o.length;n++)(!1&a||l>=a)&&Object.keys(s.O).every((function(t){return s.O[t](o[n])}))?o.splice(n--,1):(r=!1,a<l&&(l=a));if(r){t.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[o,i,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,a,l=o[0],r=o[1],n=o[2],d=0;if(l.some((function(e){return 0!==t[e]}))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(n)var c=n(s)}for(e&&e(o);d<l.length;d++)a=l[d],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(c)},o=self["webpackChunkgame_mk"]=self["webpackChunkgame_mk"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(4810)}));o=s.O(o)})();
//# sourceMappingURL=app.7ec4a120.js.map