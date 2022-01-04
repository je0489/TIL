(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{412:function(t,e,a){"use strict";a.r(e);var s=a(28),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"오류-해결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#오류-해결"}},[t._v("#")]),t._v(" 오류 해결")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_1-shallow-update-not-allowed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-shallow-update-not-allowed"}},[t._v("#")]),t._v(" 1. shallow update not allowed")]),t._v(" "),a("p",[t._v("레파지토리 clone 후 내 제파짓에 push할 때 아래와 같은 오류가 발생했다. 최신 커밋만 가져오려고 클론할 때 depth를 설정한 게 이유가 된 것 같다...")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token blockquote punctuation"}},[t._v(">")]),t._v(" git push -u origin master\n\nTo https://github.com/je0489/----.git\n! [remote rejected] master -> master (shallow update not allowed)\nerror: failed to push some refs to 'https://github.com/je0489/----.git'\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("오류 발생 전 Log")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" git clone --depth=1 [클론 대상 레파짓.git]\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" git init\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" git remote set-url origin https://github.com/je0489/----.git\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" git add "),a("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[t._v("`*`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("5.")]),t._v(' git commit -m "Chore: Initial project version ✨"\n')])])])]),t._v(" "),a("h3",{attrs:{id:"해결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#해결"}},[t._v("#")]),t._v(" 해결")]),t._v(" "),a("p",[t._v("얕은 클론한 프로젝트는 새로운 저장소로 push할 수 없기 때문에 이전 커밋을 가져오는 fetch 명령어를 사용했다. 이후 바로 확인해 보니 정상적으로 커밋 돼있었다!")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("git fetch --unshallow [클론 대상 레파짓.git]\n\n// 또는 아래처럼 해도 된다... 아마 될 거다!..\ngit remote add old [클론 대상 레파짓.git] && git fetch --unshallow old\n")])])]),a("h3",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://backlog.com/git-tutorial/kr/stepup/stepup3_2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("backlog 깃 튜토리얼 - Fetch"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/28983842/remote-rejected-shallow-update-not-allowed-after-changing-git-remote-url",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/questions/28983842"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);