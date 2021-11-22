(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{379:function(t,o,r){t.exports=r.p+"assets/img/prototype_array.83d6470a.png"},380:function(t,o,r){t.exports=r.p+"assets/img/prototype_func.8f4390bc.png"},381:function(t,o,r){t.exports=r.p+"assets/img/prototype_arrowfunc.abf9a5f9.png"},382:function(t,o,r){t.exports=r.p+"assets/img/prototype_link_array_structure.12ebbdf8.png"},383:function(t,o,r){t.exports=r.p+"assets/img/prototype_object_person_structure.8bf86d32.png"},384:function(t,o,r){t.exports=r.p+"assets/img/prototype_object_person_constructor.e17b6fb0.png"},385:function(t,o,r){t.exports=r.p+"assets/img/prototype_object_new_person_structure.6bae7df9.png"},406:function(t,o,r){"use strict";r.r(o);var e=r(28),p=Object(e.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"prototype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" Prototype")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("자바스크립트를 prototype 기반 언어라고 부르기도 하고 MDN에서도 많이 본 용어기도 하다. "),e("RouterLink",{attrs:{to:"/javascript/this.html"}},[t._v("Javascript의 this")]),t._v(" 글을 작성하면서 prototype이 의미하는 게 정확히 무엇인지 궁금해졌다.")],1),t._v(" "),e("h2",{attrs:{id:"prototype이란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prototype이란"}},[t._v("#")]),t._v(" prototype이란")]),t._v(" "),e("p",[t._v("javascript의 모든 객체는 prototype 객체를 가지고 있다. 배열 생성 후 "),e("strong",[t._v("console.dir(xx)")]),t._v(" 로 확인해보면 [[Prototype]] 속성에 Array의 메소드가 참조된 것을 확인할 수 있다. prototype은 "),e("code",[t._v("본래의 성질")]),t._v("이라고 할 수 있을 것 같다.")]),t._v(" "),e("img",{attrs:{src:r(379),alt:"array_variable_console",width:"300px"}}),t._v(" "),e("p",[t._v("Array뿐 아니라 "),e("code",[t._v("Function")]),t._v(" 기반의 객체라면 본인만의 prototype을 가질 수 있다. Array도 Function 기반의 객체이기 때문에 prototype을 가지는 것이다. "),e("code",[t._v("즉, 모든 함수는 prototype이라는 속성을 자동적으로 가지게 된다.")])]),t._v(" "),e("img",{attrs:{src:r(380),alt:"UDF_console",width:"400px"}}),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("단, arrow func은 prototype 속성이 없다.")]),t._v(" "),e("br"),t._v(" "),e("img",{attrs:{src:r(381),alt:"arrow_function_console",width:"450px"}}),t._v(" "),e("p",[t._v("우연히 콘솔에 UDF의 dir를 찍어보다가 arrow function도 함께 찍어봤다.")]),t._v(" "),e("p",[t._v("화살표 함수의 속성엔 prototype이 없었다. 그 원인은 "),e("code",[t._v("constructor(생성자)")]),t._v("였다. 화살표 함수에는 몇 가지의 제한점이 있는데 그중 하나가 "),e("sup",[t._v("[1]")]),t._v("생성자 함수에 대한 제한이다.")]),t._v(" "),e("div",{staticClass:"footnote"},[e("sup",[t._v("[1]")]),t._v(" 생성자 함수는 prototype 속성을 가지고 prototype object의 constructor를 사용한다. "),e("a",{attrs:{href:"#prototype-object"}},[t._v("prototype object")]),t._v("에 대한 설명은 아래에서 자세하게 한다!\n")])]),t._v(" "),e("h2",{attrs:{id:"prototype-link와-prototype-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prototype-link와-prototype-object"}},[t._v("#")]),t._v(" prototype link와 prototype object")]),t._v(" "),e("p",[t._v("prototype은 prototype link와 prototype object로 나눌 수 있다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("- prototype link = [[Prototype]] 속성\n- prototype object = constructor + [[Prototype]] 속성\n")])])]),e("h3",{attrs:{id:"prototype-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prototype-link"}},[t._v("#")]),t._v(" prototype link")]),t._v(" "),e("p",[t._v("prototype link는 위에서 말한 바와 같이 [[Prototype]] 속성을 뜻하고 본인의 "),e("code",[t._v("부모 객체를 가리킨다")]),t._v(". 배열을 생성했을 때 [[Prototype]] 속성에 Array의 메소드가 표시된 이유다. 구조를 그리면 아래와 같다.")]),t._v(" "),e("img",{attrs:{src:r(382),alt:"prototype_link_structure(array)",width:"500px"}}),t._v(" "),e("h3",{attrs:{id:"prototype-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prototype-object"}},[t._v("#")]),t._v(" prototype object")]),t._v(" "),e("p",[t._v("constructor 속성과 prototype link인 [[Prototype]] 속성으로 구성되어 있고, "),e("code",[t._v("prototype 속성을 통해 접근할 수 있는 객체")]),t._v("이다. 함수를 생성하면 함수와 함께 prototype object가 자동으로 생성된다. 따라서, 이를 참조하는 prototype 속성도 생성되는 것이다.")]),t._v(" "),e("p",[t._v("예를 들어, 아래와 같이 Person 함수를 정의하는 경우 함수 객체와 함께 prototype 객체가 생성되고 아래와 같은 구조가 될 수 있다.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("img",{attrs:{src:r(383),alt:"prototype_object_structure(function person)",width:"500px"}}),t._v(" "),e("p",[t._v("constructor 속성은 본인 함수 객체를 가리키고 prototype 속성은 prototype 객체ㄱ를 가리킨다. prototype 객체와 함수 Person 객체는 constructor과 prototype 속성을 통해 서로 참조하는 관계이다!")]),t._v(" "),e("img",{attrs:{src:r(384),alt:"prototype_object_constructor_console",width:"400px"}}),t._v(" "),e("p",[t._v("new 키워드를 통해 Person 함수의 인스턴스를 만든 경우 prototype 구조는 아래처럼 된다.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" jieun "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"seoul"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:r(385),alt:"prototype_object_structure(new Person)"}})]),t._v(" "),e("ul",[e("li",[t._v("jieun의 [[prototype]]: jieun의 부모 객체인 Person prototype 속성. 즉, prototype 속성이 가리키는 Person prototype 객체.")]),t._v(" "),e("li",[t._v("Person prorotype 객체\n"),e("ol",[e("li",[t._v("constructor: 함수 Person을 가리킴")]),t._v(" "),e("li",[t._v("[[prototype]]: "),e("sup",[t._v("[2]")]),t._v("Function의 부모 객체는 Object. 즉, Object prototype 객체를 가리킴")])])]),t._v(" "),e("li",[t._v("함수 Person 객체의 prototype: Person prototype 객체를 가리킴")])]),t._v(" "),e("div",{staticClass:"footnote"},[e("sup",[t._v("[2]")]),t._v(" 모든 객체의 조상은 Object이다. 즉, 모든 객체는 Object의 자식임\n")]),t._v(" "),e("h2",{attrs:{id:"prototype-chain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prototype-chain"}},[t._v("#")]),t._v(" prototype chain")]),t._v(" "),e("p",[t._v("배열 생성 후 map(), sort() 등 Array의 함수를 사용할 수 있는 이유도 prototype chain 구조 때문이다. prototype link를 통해 상위 prototype object에 접근하는 방식을 프로토타입 체인이라고 한다.")]),t._v(" "),e("p",[t._v("어떤 property를 요청했을 경우, 본인 property부터 상위 프로토타입 순으로 탐색을 시작한다. "),e("sup",[t._v("[3]")]),e("strong",[t._v("최상위 프로토타입 객체인 Object prototype object")]),t._v("에 도달했는데도 못 찾을 경우 "),e("u",[t._v("undefined")]),t._v("를 리턴한다.")]),t._v(" "),e("div",{staticClass:"footnote"},[e("sup",[t._v("[3]")]),t._v(" 이를 prototype chain의 종점이라고 함\n")]),t._v(" "),e("h3",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),e("ul",[e("li",[t._v("MDN 공식 문서\n"),e("ol",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object prototypes"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("상속과 프로토타입"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("오승환님의 "),e("a",{attrs:{href:"https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67",target:"_blank",rel:"noopener noreferrer"}},[t._v("[Javascript] 프로토타입 이해하기"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("WANZA님의 "),e("a",{attrs:{href:"https://blog.wanzargen.me/35",target:"_blank",rel:"noopener noreferrer"}},[t._v("[Javascript] 프로토타입(prototype) 뽀개기"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);o.default=p.exports}}]);