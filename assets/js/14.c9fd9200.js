(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{391:function(s,t,a){s.exports=a.p+"assets/img/gh_pages_setting.d2e1d838.png"},434:function(s,t,a){"use strict";a.r(t);var e=a(28),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"github에-배포하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github에-배포하기"}},[s._v("#")]),s._v(" Github에 배포하기")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("Github의 pages 기능을 이용해 웹 호스팅하며 남긴 기록이다. 새 브랜치를 따서 저장소에 올렸는데 그 과정이 개념적으로 이해되지 않아 생각보다 오랜 시간이 걸렸다.")]),s._v(" "),e("h2",{attrs:{id:"_1-브랜치-생성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-브랜치-생성"}},[s._v("#")]),s._v(" 1. 브랜치 생성")]),s._v(" "),e("p",[s._v("VSCode에 깃허브를 연동해 사용 중이라 VSCode 내에서 "),e("code",[s._v("gh-pages")]),s._v("라는 새 브랜치를 생성했다. 또는 아래의 명령어를 통해 새 브랜치를 생성하면 된다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch gh-pages\n")])])]),e("h2",{attrs:{id:"_2-build-폴더-지정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-build-폴더-지정"}},[s._v("#")]),s._v(" 2. build 폴더 지정")]),s._v(" "),e("p",[s._v("vuePress의 config.js 내에서 "),e("code",[s._v("dest")]),s._v(" 값을 통해 build의 output 디렉토리를 지정할 수 있다. 필자는 별도의 폴더를 지정해주었다. (dest 값 미기재시 "),e("code",[s._v(".vuepress/dist")]),s._v("에 빌드됨)")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule.exports = "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .. 생략")]),s._v("\n  dest"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  themeConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    sidebarDepth"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 생략 ..")]),s._v("\n")])])]),e("h2",{attrs:{id:"_3-배포하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-배포하기"}},[s._v("#")]),s._v(" 3. 배포하기")]),s._v(" "),e("p",[s._v("생성한 브랜치로 checkout 후 아래의 명령어를 입력하면 build된 폴더만 ph-pages 브랜치에 push된다. 자주 사용하는 명령어는 package.json의 scripts로 기재해 사용 중이다!")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("vuepress build documents "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" build "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Build: Deploy'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" subtree push --prefix build https://github.com/je0489/TIL.git gh-pages\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev documents"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build documents"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"commit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"vuepress build documents && git add build && git commit -m 'Build: Deploy'\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git subtree push --prefix build https://github.com/je0489/TIL.git gh-pages"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"gh-pull"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git pull origin master"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eject"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress eject"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),e("h2",{attrs:{id:"_4-reposit-pages-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-reposit-pages-설정"}},[s._v("#")]),s._v(" 4. Reposit pages 설정")]),s._v(" "),e("p",[s._v("Github의 웹호스팅할 저장소 홈페이지로 들어가 "),e("code",[s._v("Settings > pages")]),s._v("에서 브랜치와 루트를 아래와 같이 설정해주면 끝~~~!")]),s._v(" "),e("p",[e("img",{attrs:{src:a(391),alt:"Github_pages_setting"}})]),s._v(" "),e("h3",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" Reference")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://vuepress.vuejs.org/config/#dest",target:"_blank",rel:"noopener noreferrer"}},[s._v("공식 문서 config(dest)"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.imkh.dev/github-pages-subtree/",target:"_blank",rel:"noopener noreferrer"}},[s._v("github 특정폴더만 배포시키기(subtree)"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);