(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{382:function(t,e,_){t.exports=_.p+"assets/img/client_server.62665830.jpeg"},413:function(t,e,_){"use strict";_.r(e);var s=_(28),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"web이란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web이란"}},[t._v("#")]),t._v(" Web이란")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("Web은 인터넷으로 연결된 사용자 간 정보를 공유하는 서비스로, 정보는 "),s("strong",[t._v("web browser")]),t._v("를 통해 확인할 수 있다.")]),t._v(" "),s("h2",{attrs:{id:"internet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#internet"}},[t._v("#")]),t._v(" Internet")]),t._v(" "),s("p",[t._v("인터넷은 TCP/IP 기반의 네트워크가 세계적으로 연결된 네트워크이고 웹은 "),s("code",[t._v("그 인터넷을 통해 제공되는 서비스의 일종")]),t._v("이다. (그 외로 이메일, FTP(파일 공유) 등 다양한 서비스가 있음)")]),t._v(" "),s("h2",{attrs:{id:"웹-동작-원리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#웹-동작-원리"}},[t._v("#")]),t._v(" 웹 동작 원리")]),t._v(" "),s("p",[t._v("간단하게 말하자면, "),s("code",[t._v("인터넷으로 연결된 두 대의 컴퓨터(host)가 정보를 주고 받는 것")]),t._v("이다. Web browser(client)가 Web server(server)에 접근을 요청하면 웹 페이지의 사본을 전송한다.")]),t._v(" "),s("p",[s("img",{attrs:{src:_(382),alt:"client_server"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("구체적인 동작 순서는 아래와 같다.")]),t._v(" "),s("ol",[s("li",[t._v("웹 브라우저에서 검색창에 주소를 입력한다.")]),t._v(" "),s("li",[t._v("웹 브라우저가 "),s("a",{attrs:{href:"#dns-domain-name-system"}},[t._v("DNS")]),t._v(" 서버에게 주소(도메인)를 요청한다.")]),t._v(" "),s("li",[t._v("DNS가 웹 브라우저에게 서버의 IP 주소를 보낸다.")]),t._v(" "),s("li",[t._v("웹 브라우저가 IP 주소의 주인인 서버에게 "),s("a",{attrs:{href:"#http-%E1%84%86%E1%85%A6%E1%84%89%E1%85%A6%E1%84%8C%E1%85%B5"}},[t._v("HTTP 요청 메세지")]),t._v("를 "),s("sup",[t._v("[1]")]),t._v("전송한다.")]),t._v(" "),s("li",[t._v("웹 서버는 웹 브라우저에게 "),s("sup",[t._v("[2]")]),t._v("HTTP 상태 코드와 웹 사이트의 파일을 HTTP 응답 메세지로 전송한다.")]),t._v(" "),s("li",[t._v("웹 브라우저는 전달받은 메세지를 변환한 후 웹 페이지를 출력한다.")])]),t._v(" "),s("div",{staticClass:"footnote"},[s("sup",[t._v("[1]")]),t._v(" 모든 데이터는 TCP/IP 통신을 통해 전송됨"),s("br"),t._v(" "),s("sup",[t._v("[2]")]),t._v(" 1xx: 정보, 2xx: 성공, 3xx: 리다이렉션, 4xx: 클라이언트(요청) 오류, 5xx: 서버 오류\n")])])]),t._v(" "),s("h3",{attrs:{id:"dns-domain-name-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-domain-name-system"}},[t._v("#")]),t._v(" DNS(Domain Name System)")]),t._v(" "),s("p",[t._v("전화번호부라고 생각하면 이해하기 쉬울 것 같다. Host 간의 통신을 위해서는 서로의 "),s("sup",[t._v("[3]")]),t._v("IP 주소가 반드시 필요한데 Domain Name System이 그 "),s("code",[t._v("IP 주소와 도메인 명을 관리")]),t._v("한다. DNS를 통해 전달받은 IP 주소로 호스트끼리 연결해서 통신을 할 수 있는 것이다!")]),t._v(" "),s("p",[t._v("DNS 서버의 IP 주소는 각 운영체제에 저장돼있다. 이는 제어판 등에서 확인할 수 있고 "),s("sup",[t._v("[4]")]),t._v("사용 중인 인터넷 서비스 업체의 DNS IP 주소가 기본적으로 셋팅되어 있다.")]),t._v(" "),s("div",{staticClass:"footnote"},[s("sup",[t._v("[3]")]),t._v(" x.x.x.x 형식의 인터넷 고유 주소를 의미"),s("br"),t._v(" "),s("sup",[t._v("[4]")]),t._v(" 다른 public DNS로 변경 가능"),s("br")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("DNS이 등장하기 전에는..")]),t._v(" "),s("p",[t._v("Standford Research Insitute라는 단체가 전 세계의 "),s("sup",[t._v("[5]")]),t._v("hosts 파일을 수기로 관리하며 사용자가 갱신된 hosts 파일을 다운로드하는 방식으로 운영됐다. 이런 방식은 아래와 같은 문제점이 있었다.")]),t._v(" "),s("ol",[s("li",[t._v("단체 내에서 수기로 관리하므로 파일 갱신에 많은 시간과 비용 발생")]),t._v(" "),s("li",[t._v("사용자가 파일을 다운로드하기 전까진 갱신된 도메인을 이용할 수 없음")]),t._v(" "),s("li",[t._v("파일 내에 저장된 데이터양이 많아질수록 관리가 힘들어짐")])]),t._v(" "),s("div",{staticClass:"footnote"},[s("sup",[t._v("[5]")]),t._v(" 현재도 hosts 파일로 도메인과 IP를 관리할 수 있음!"),s("br"),t._v("\n         DNS보다 도메인에 대한 우선권을 가지게 되고 모든 OS에 hosts라는 파일이 존재함"),s("br"),t._v("\n         (Mac의 경우, /etc 내에 위치 ➲ "),s("strong",[t._v("x.x.x.x _.com")]),t._v(" 형식으로 관리)\n")])]),t._v(" "),s("h3",{attrs:{id:"http-메세지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-메세지"}},[t._v("#")]),t._v(" HTTP 메세지")]),t._v(" "),s("p",[t._v("HTTP(HyperText Transfer Protocol)란? "),s("code",[t._v("웹 페이지 전송을 위한 통신 규약")]),t._v("이다. HTTP 메세지는 그 프로토콜을 통해 생성되고 Request와 Response 메세지로 구성된다. HTTP 통신을 통해 생성되는 "),s("sup",[t._v("[6]")]),s("strong",[t._v("네트워크로 전송되는 데이터")]),t._v("이므로 "),s("u",[t._v("HTTP 패킷")]),t._v("이라고도 불린다.")]),t._v(" "),s("p",[t._v("크게 Header와 Body로 나뉘며 개발자 도구의 Network 탭에서 확인할 수 있다.")]),t._v(" "),s("div",{staticClass:"footnote"},[s("sup",[t._v("[6]")]),t._v(" 이를 패킷이라고 한다.\n")]),t._v(" "),s("h3",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/How_the_Web_works",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 문서 - How the web works"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Youtube egoing님\n"),s("ol",[s("li",[s("a",{attrs:{href:"https://youtu.be/tZooW6PritE",target:"_blank",rel:"noopener noreferrer"}},[t._v("생활코딩 WEB1- HTML & Internet"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://youtu.be/zrqivQVj3JM",target:"_blank",rel:"noopener noreferrer"}},[t._v("생활코딩 WEB2-Domain Name System"),s("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);