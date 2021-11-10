(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{395:function(s,t,a){"use strict";a.r(t);var e=a(28),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-시작하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-시작하기"}},[s._v("#")]),s._v(" VuePress 시작하기")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("TIL(Today I Learned)를 제작하며 VuePress에 대해 학습한 것을 첫 기록으로 남긴다.")]),s._v(" "),a("h2",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[s._v("#")]),s._v(" intro")]),s._v(" "),a("p",[s._v("VuePress 학습 정리에 앞서 이를 구축하게 된 이유는 TIL 문서, 단 하나였다.")]),s._v(" "),a("p",[s._v("개발 욕심이 많아졌을 당시 다양한 형태의 기술 블로그를 쉽게 접할 수 있었다. 나도 그런 멋진 블로그를 제작하고 싶었지만, 거창하고 뭔가 부담스러웠다. (?)")]),s._v(" "),a("p",[s._v("그러던 중 한재엽님의 "),a("a",{attrs:{href:"https://jbee.io/essay/how_do_i_study_2/#2-daily-commit-or-today-i-learned",target:"_blank",rel:"noopener noreferrer"}},[s._v("나는 어떻게 개발 공부를 했나, 2편"),a("OutboundLink")],1),s._v("를 읽으며 "),a("sup",[s._v("[1]")]),s._v(" 잘못된 정보를 포스팅할까 지레 겁먹지 말라는 글을 보고 큰 용기를 얻었고 그 후로, 직접 구축할 기술 블로그를 본격적으로 찾아보게 됐다.")]),s._v(" "),a("p",[s._v("Github page를 이용해 블로그를 호스팅하고 싶어서 "),a("strong",[s._v("Static Site Generator(SSG)")]),s._v(" 위주로 알아보았다. SSG 중 비교적 "),a("code",[s._v("설치가 간단")]),s._v("하고 "),a("code",[s._v("레이아웃이 간단 + 직관적인")]),s._v(" 프레임워크를 고르는데 생각보다 많은 시간이 걸렸다.")]),s._v(" "),a("aside",[a("sup",[s._v("[1]")]),s._v(" 물론 오류를 최소화하는게 우선이고, 댓글 기능을 추가하여 피드백을 받을 예정이다.")]),s._v(" "),a("h2",{attrs:{id:"static-site-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-site-generator"}},[s._v("#")]),s._v(" Static Site Generator")]),s._v(" "),a("p",[s._v("Static Site Generator(SSG)는 정적 사이트를 만들어주는 툴이고 "),a("a",{attrs:{href:"https://jamstack.org/generators/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jamstack Sites"),a("OutboundLink")],1),s._v("를 참고하여 아래의 후보 중 고민했다.")]),s._v(" "),a("ul",[a("li",[s._v("Jekyll: "),a("code",[s._v("Ruby 기반")]),s._v(" 다양한 테마가 지원되나 심플하면서 직관적인 테마가 없음. custom 하기엔 Ruby 언어를 경험해 본 적이 없음.")]),s._v(" "),a("li",[s._v("Hugo: "),a("code",[s._v("Go 기반")]),s._v(" 빌드가 제일 빠르고 테마가 다양하나 Jekyll와 동일한 이유임.")]),s._v(" "),a("li",[s._v("VuePress: "),a("code",[s._v("Vue 기반")]),s._v(" 기본적으로 제공하는 UI에서 필요한 부분을 custom 하여 나만의 블로그를 만들 수 있음. 현재 UI도 딱 깔끔함 💚")]),s._v(" "),a("li",[s._v("Notion: jamstack엔 없지만, 마크다운 기반으로 레이아웃이 심플하나.. 개인 블로그로 관리하기엔 한계가 있을 것 같음.")])]),s._v(" "),a("p",[s._v("따라서, "),a("strong",[s._v("VuePress")]),s._v("로 결정!")]),s._v(" "),a("blockquote",[a("p",[s._v("(+) SSG 조사하다가 본 Gitbook의 우측 사이드바 custom theme 구현이 가능하다면 추가하기로!!")])]),s._v(" "),a("h2",{attrs:{id:"vuepress-시작하기-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-시작하기-2"}},[s._v("#")]),s._v(" VuePress 시작하기")]),s._v(" "),a("h3",{attrs:{id:"_1-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-설치"}},[s._v("#")]),s._v(" 1. 설치")]),s._v(" "),a("p",[s._v("공식 문서는 "),a("code",[s._v("create-vuepress-site")]),s._v("를 통해 기본 vuepress site 구조를 설치했지만, 필자는 빈 폴더에서 필요한 파일을 생성하는 방식으로 진행했다.")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1. 폴더 생성")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" TIL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" code TIL\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2. package.json 및 VuePress 설치")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D vuepress\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3. 폴더 생성")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" documents "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" documents/README.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_2-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-실행"}},[s._v("#")]),s._v(" 2. 실행")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json의 scripts 수정")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev documents"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build documents"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# VuePress 실행")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("package.json의 scripts를 수정한 후 VuePress가 실행이 되면 "),a("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080"),a("OutboundLink")],1),s._v(" 에 "),a("code",[s._v("Hello VuePress")]),s._v("가 표시된다.")]),s._v(" "),a("h3",{attrs:{id:"_3-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-설정"}},[s._v("#")]),s._v(" 3. 설정")]),s._v(" "),a("p",[s._v("설치 완료 후 아래와 같은 구조로 디레토리 및 파일을 생성했다. "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/directory-structure.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("공식 문서 (디렉토리 구조)"),a("OutboundLink")],1),s._v("을 참고하여 필요한 파일을 생성하면 된다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// .vuepress\n.TIL\n├── documents\n│   ├── .vuepress (Optional)\n│   │    ├── public (Optional)\n│   │    ├── styles (Optional)  /* 일부 custom을 위해 추가 */\n│   │    │   ├── index.styl\n│   │    │   └── palette.styl\n│   │    ├── config.js (Optional)\n│   ├── README.md\n└── package.json\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Today Jieun Learned"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TIL by vuepress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"link"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"icon"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/logo.png"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HOME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sidebarDepth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("title")]),s._v(": 사이트의 Title 명")]),s._v(" "),a("li",[a("code",[s._v("description")]),s._v(": 사이트의 Desciption. HTML의 <meta> 로 랜더링된다.")]),s._v(" "),a("li",[a("code",[s._v("head")]),s._v(": HTML의 <head> 내에서 사용되는 태그 기재. 필자는 로고를 넣었고 파일 위치는 "),a("strong",[s._v(".vuepress/public 폴더")]),s._v("에 위치해야 한다.")]),s._v(" "),a("li",[a("code",[s._v("themeConfig")]),s._v(": 기본 테마와 관련된 옵션이며 Navbar, Search Box 등 관리할 수 있다.\n"),a("ul",[a("li",[a("code",[s._v("nav")]),s._v(": Navbar 추가 옵션이며 dropdown 기능이 있는 nav도 있다. 자세한건 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links",target:"_blank",rel:"noopener noreferrer"}},[s._v("공식 문서 Nav"),a("OutboundLink")],1),s._v(" 참고")]),s._v(" "),a("li",[a("code",[s._v("sidebar")]),s._v(": 'auto' 값 지정시 "),a("strong",[s._v("documents/README.md")]),s._v("내에 정의한 Header 태그 기준으로 sidebar가 표시된다.")]),s._v(" "),a("li",[a("code",[s._v("sidebarDepth")]),s._v(": 사이드바에 표시되는 Header depth를 설정할 수 있다. (기본값: 2)")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("그 외에 필요한 config는 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/config/#basic-config",target:"_blank",rel:"noopener noreferrer"}},[s._v("공식 문서 Basic Config"),a("OutboundLink")],1),s._v("를 참고하도록 한다.")])]),s._v(" "),a("h3",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" Reference")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vuepress 공식 문서"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);