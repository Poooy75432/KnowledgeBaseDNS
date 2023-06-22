"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[75],{4137:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),v=o,b=p["".concat(d,".").concat(v)]||p[v]||u[v]||a;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6080:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(3117),o=r(102),a=(r(7294),r(4137)),s=["components"],i={title:"\xdcberblick",sidebar_position:1},d=void 0,l={unversionedId:"public-dns/overview",id:"public-dns/overview",title:"\xdcberblick",description:"What is AdGuard DNS?",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/public-dns/overview.md",sourceDirName:"public-dns",slug:"/public-dns/overview",permalink:"/KnowledgeBaseDNS/de/public-dns/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\xdcberblick",sidebar_position:1},sidebar:"sidebar",previous:{title:"Bekannte DNS-Anbieter",permalink:"/KnowledgeBaseDNS/de/general/dns-providers"},next:{title:"So leeren Sie den DNS-Cache",permalink:"/KnowledgeBaseDNS/de/public-dns/solving-problems/how-to-flush-dns-cache"}},c={},u=[{value:"What is AdGuard DNS?",id:"what-is-adguard-dns",level:2},{value:"Public AdGuard DNS servers",id:"public-adguard-dns-servers",level:2},{value:"AdGuard DNS protocols",id:"adguard-dns-protocols",level:2},{value:"DNSCrypt",id:"dnscrypt",level:3},{value:"DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)",id:"dns-over-https-doh-and-dns-over-tls-dot",level:3},{value:"DNS-over-QUIC (DoQ)",id:"dns-over-quic-doq",level:3}],p={toc:u};function v(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-adguard-dns"},"What is AdGuard DNS?"),(0,a.kt)("p",null,"AdGuard DNS is a free, privacy-oriented DNS resolver that provides secure connection and also can block tracking, ads, phishing and adult content (optionally). AdGuard DNS does not require installing any applications. It is easy to use and can be effortlessly set up on any device (smartphones, desktops, routers, game consoles, etc.)."),(0,a.kt)("h2",{id:"public-adguard-dns-servers"},"Public AdGuard DNS servers"),(0,a.kt)("p",null,'AdGuard DNS has three different types of public servers. "Default" server is for blocking ads, trackers, malware and phishing websites. "Family protection" does the same, but also blocks websites with adult content and enforces "Safe search" option in browsers that provide it. "Non-filtering" provides a secure and reliable connection but doesn\'t block anything. You can find detailed instructions on setting up AdGuard DNS on any device on ',(0,a.kt)("a",{parentName:"p",href:"https://adguard-dns.io/public-dns.html"},"our website"),". Each server supports different secure protocols: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT), and DNS-over-QUIC (DoQ)."),(0,a.kt)("h2",{id:"adguard-dns-protocols"},"AdGuard DNS protocols"),(0,a.kt)("p",null,"Besides plain DNS (both IPv4 and IPv6) AdGuard DNS supports various encrypted protocols, so you can choose the one that suits you best."),(0,a.kt)("h3",{id:"dnscrypt"},"DNSCrypt"),(0,a.kt)("p",null,"AdGuard DNS allows you to use a specific encrypted protocol \u2014 DNSCrypt. Thanks to it, all DNS requests are being encrypted, which protects you from possible request interception and subsequent eavesdropping and/or alteration. But compared to the DoH, DoT and DoQ protocols, DNSCrypt is considered obsolete and if possible we recommend using these protocols."),(0,a.kt)("h3",{id:"dns-over-https-doh-and-dns-over-tls-dot"},"DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)"),(0,a.kt)("p",null,"DoH and DoT are modern secure DNS protocols that gain more and more popularity and will become the industry standards for the foreseeable future. Both are more reliable than DNSCrypt and both are supported by AdGuard DNS."),(0,a.kt)("h3",{id:"dns-over-quic-doq"},"DNS-over-QUIC (DoQ)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/blog/dns-over-quic.html"},"DNS-over-QUIC is a new DNS encryption protocol")," and AdGuard DNS is the first public resolver that supports it. Unlike DoH and DoT, it uses QUIC as a transport protocol and finally brings DNS back to its roots \u2014 working over UDP. It brings all the good things that QUIC has to offer \u2014 out-of-the-box encryption, reduced connection times, better performance when data packets are lost. Also, QUIC is supposed to be a transport-level protocol and there are no risks of metadata leaks that could happen with DoH."))}v.isMDXComponent=!0}}]);