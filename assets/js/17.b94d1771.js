(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{389:function(t,s,e){"use strict";e.r(s);var a=e(46),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress-시작하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-시작하기"}},[t._v("#")]),t._v(" VuePress 시작하기")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("TIL(Today I Learned)를 제작하며 VuePress에 대해 학습한 것을 첫 기록으로 남긴다.")]),t._v(" "),e("h2",{attrs:{id:"intro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" intro")]),t._v(" "),e("p",[t._v("VuePress 학습 정리에 앞서 이를 구축하게 된 이유는 TIL 문서, 단 하나였다.")]),t._v(" "),e("p",[t._v("개발 욕심이 많아졌을 당시 다양한 형태의 기술 블로그를 쉽게 접할 수 있었다. 나도 그런 멋진 블로그를 제작하고 싶었지만, 거창하고 뭔가 부담스러웠다. (?)")]),t._v(" "),e("p",[t._v("그러던 중 한재엽님의 "),e("a",{attrs:{href:"https://jbee.io/essay/how_do_i_study_2/#2-daily-commit-or-today-i-learned",target:"_blank",rel:"noopener noreferrer"}},[t._v("나는 어떻게 개발 공부를 했나, 2편"),e("OutboundLink")],1),t._v("를 읽으며 "),e("sup",[t._v("[1]")]),t._v(" 잘못된 정보를 포스팅할까 지레 겁먹지 말라는 글을 보고 큰 용기를 얻었고 그 후로, 직접 구축할 기술 블로그를 본격적으로 찾아보게 됐다.")]),t._v(" "),e("p",[t._v("Github page를 이용해 블로그를 호스팅하고 싶어서 "),e("strong",[t._v("Static Site Generator(SSG)")]),t._v(" 위주로 알아보았다. SSG 중 비교적 "),e("code",[t._v("설치가 간단")]),t._v("하고 "),e("code",[t._v("레이아웃이 간단 + 직관적인")]),t._v(" 프레임워크를 고르는데 생각보다 많은 시간이 걸렸다.")]),t._v(" "),e("aside",[e("sup",[t._v("[1]")]),t._v(" 물론 오류를 최소화하는게 우선이고, 댓글 기능을 추가하여 피드백을 받을 예정이다.")]),t._v(" "),e("h2",{attrs:{id:"static-site-generator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#static-site-generator"}},[t._v("#")]),t._v(" Static Site Generator")]),t._v(" "),e("p",[t._v("Static Site Generator(SSG)는 정적 사이트를 만들어주는 툴이고 "),e("a",{attrs:{href:"https://jamstack.org/generators/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jamstack Sites"),e("OutboundLink")],1),t._v("를 참고하여 아래의 후보 중 고민했다.")]),t._v(" "),e("ul",[e("li",[t._v("Jekyll: "),e("code",[t._v("Ruby 기반")]),t._v(" 다양한 테마가 지원되나 심플하면서 직관적인 테마가 없음. custom 하기엔 Ruby 언어를 경험해 본 적이 없음.")]),t._v(" "),e("li",[t._v("Hugo: "),e("code",[t._v("Go 기반")]),t._v(" 빌드가 제일 빠르고 테마가 다양하나 Jekyll와 동일한 이유임.")]),t._v(" "),e("li",[t._v("VuePress: "),e("code",[t._v("Vue 기반")]),t._v(" 기본적으로 제공하는 UI에서 필요한 부분을 custom 하여 나만의 블로그를 만들 수 있음. 현재 UI도 딱 깔끔함 💚")]),t._v(" "),e("li",[t._v("Notion: jamstack엔 없지만, 마크다운 기반으로 레이아웃이 심플하나.. 개인 블로그로 관리하기엔 한계가 있을 것 같음.")])]),t._v(" "),e("p",[t._v("따라서, "),e("strong",[t._v("VuePress")]),t._v("로 결정!")]),t._v(" "),e("blockquote",[e("p",[t._v("(+) SSG 조사하다가 본 Gitbook의 우측 사이드바 custom theme 구현이 가능하다면 추가하기로!!")])]),t._v(" "),e("h2",{attrs:{id:"vuepress-시작하기-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-시작하기-2"}},[t._v("#")]),t._v(" VuePress 시작하기")]),t._v(" "),e("h3",{attrs:{id:"_1-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-설치"}},[t._v("#")]),t._v(" 1. 설치")]),t._v(" "),e("p",[t._v("공식 문서는 "),e("code",[t._v("create-vuepress-site")]),t._v("를 통해 기본 vuepress site 구조를 설치했지만, 필자는 빈 폴더에서 필요한 파일을 생성하는 방식으로 진행했다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1. 폴더 생성")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" TIL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" code TIL\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2. package.json 및 VuePress 설치")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D vuepress\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3. 폴더 생성")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" documents "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# Hello VuePress'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" documents/README.md\n")])])]),e("h3",{attrs:{id:"_2-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-실행"}},[t._v("#")]),t._v(" 2. 실행")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json의 scripts 수정")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev documents"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build documents"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# VuePress 실행")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:dev\n")])])]),e("p",[t._v("package.json의 scripts를 수정한 후 VuePress가 실행이 되면 "),e("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),e("OutboundLink")],1),t._v(" 에 "),e("code",[t._v("Hello VuePress")]),t._v("가 표시된다.")]),t._v(" "),e("h3",{attrs:{id:"_3-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-설정"}},[t._v("#")]),t._v(" 3. 설정")]),t._v(" "),e("p",[t._v("설치 완료 후 아래와 같은 구조로 디레토리 및 파일을 생성했다. "),e("a",{attrs:{href:"https://vuepress.vuejs.org/guide/directory-structure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 문서 (디렉토리 구조)"),e("OutboundLink")],1),t._v("을 참고하여 필요한 파일을 생성하면 된다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// .vuepress\n.TIL\n├── documents\n│   ├── .vuepress (Optional)\n│   │    ├── public (Optional)\n│   │    ├── styles (Optional)  /* 일부 custom을 위해 추가 */\n│   │    │   ├── index.styl\n│   │    │   └── palette.styl\n│   │    ├── config.js (Optional)\n│   ├── README.md\n└── package.json\n")])])]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Today Jieun Learned"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TIL by vuepress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  head"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icon"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/logo.png"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nav"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HOME"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sidebar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sidebarDepth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ul",[e("li",[e("code",[t._v("title")]),t._v(": 사이트의 Title 명")]),t._v(" "),e("li",[e("code",[t._v("description")]),t._v(": 사이트의 Desciption. HTML의 <meta> 로 랜더링된다.")]),t._v(" "),e("li",[e("code",[t._v("head")]),t._v(": HTML의 <head> 내에서 사용되는 태그 기재. 필자는 로고를 넣었고 파일 위치는 "),e("strong",[t._v(".vuepress/public 폴더")]),t._v("에 위치해야 한다.")]),t._v(" "),e("li",[e("code",[t._v("themeConfig")]),t._v(": 기본 테마와 관련된 옵션이며 Navbar, Search Box 등 관리할 수 있다.\n"),e("ul",[e("li",[e("code",[t._v("nav")]),t._v(": Navbar 추가 옵션이며 dropdown 기능이 있는 nav도 있다. 자세한건 "),e("a",{attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 문서 Nav"),e("OutboundLink")],1),t._v(" 참고")]),t._v(" "),e("li",[e("code",[t._v("sidebar")]),t._v(": 'auto' 값 지정시 "),e("strong",[t._v("documents/README.md")]),t._v("내에 정의한 Header 태그 기준으로 sidebar가 표시된다.")]),t._v(" "),e("li",[e("code",[t._v("sidebarDepth")]),t._v(": 사이드바에 표시되는 Header depth를 설정할 수 있다. (기본값: 2)")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("그 외에 필요한 config는 "),e("a",{attrs:{href:"https://vuepress.vuejs.org/config/#basic-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 문서 Basic Config"),e("OutboundLink")],1),t._v("를 참고하도록 한다.")])]),t._v(" "),e("h3",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress 공식 문서"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);