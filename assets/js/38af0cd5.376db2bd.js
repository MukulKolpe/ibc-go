"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4152],{71760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(85893),i=t(11151);const a={slug:"/",sidebar_position:0},s="IBC-Go Documentation",r={id:"intro",title:"IBC-Go Documentation",description:"Welcome to the documentation for IBC-Go, the Golang implementation of the Inter-Blockchain Communication Protocol! Looking for information on ibc-rs? Click here to go to the ibc-rs github repo.",source:"@site/versioned_docs/version-v8.3.x/00-intro.md",sourceDirName:".",slug:"/",permalink:"/v8/",draft:!1,unlisted:!1,tags:[],version:"v8.3.x",sidebarPosition:0,frontMatter:{slug:"/",sidebar_position:0},sidebar:"defaultSidebar",next:{title:"Overview",permalink:"/v8/ibc/overview"}},c={},l=[{value:"High-level overview of IBC",id:"high-level-overview-of-ibc",level:2}];function h(e){const n={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ibc-go-documentation",children:"IBC-Go Documentation"}),"\n",(0,o.jsxs)(n.p,{children:["Welcome to the documentation for IBC-Go, the Golang implementation of the Inter-Blockchain Communication Protocol! Looking for information on ibc-rs? ",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-rs",children:"Click here to go to the ibc-rs github repo"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The Inter-Blockchain Communication Protocol (IBC) is an end-to-end, connection-oriented, stateful protocol for reliable, ordered, and authenticated communication between heterogeneous blockchains arranged in an unknown and dynamic topology."}),"\n",(0,o.jsx)(n.p,{children:"IBC is a protocol that allows blockchains to talk to each other. Chains that speak IBC can share any type of data as long as it's encoded in bytes, enabling the industry\u2019s most feature-rich cross-chain interactions. IBC is secure and permissionless."}),"\n",(0,o.jsx)(n.p,{children:"The protocol realizes this interoperability by specifying a set of data structures, abstractions, and semantics that can be implemented by any distributed ledger that satisfies a small set of requirements."}),"\n",(0,o.jsx)(n.p,{children:"IBC can be used to build a wide range of cross-chain applications that include token transfers, atomic swaps, multi-chain smart contracts (with or without mutually comprehensible VMs), cross-chain account control, and data and code sharding of various kinds."}),"\n",(0,o.jsx)(n.h2,{id:"high-level-overview-of-ibc",children:"High-level overview of IBC"}),"\n",(0,o.jsx)(n.p,{children:"The following diagram shows how IBC works at a high level:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"Light Mode IBC Overview",src:t(7309).Z+"#gh-light-mode-only",width:"1920",height:"1080"}),(0,o.jsx)(n.img,{alt:"Dark Mode IBC Overview",src:t(70848).Z+"#gh-dark-mode-only",width:"1920",height:"1080"})]}),"\n",(0,o.jsx)(n.p,{children:"The transport layer (TAO) provides the necessary infrastructure to establish secure connections and authenticate data packets between chains. The application layer builds on top of the transport layer and defines exactly how data packets should be packaged and interpreted by the sending and receiving chains."}),"\n",(0,o.jsx)(n.p,{children:"IBC provides a reliable, permissionless, and generic base layer (allowing for the secure relaying of data packets), while allowing for composability and modularity with separation of concerns by moving application designs (interpreting and acting upon the packet data) to a higher-level layer. This separation is reflected in the categories:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"IBC/TAO"})," comprises the Transport, Authentication, and Ordering of packets, i.e. the infrastructure layer."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"IBC/APP"})," consists of the application handlers for the data packets being passed over the transport layer. These include but are not limited to fungible token transfers (ICS-20), NFT transfers (ICS-721), and interchain accounts (ICS-27)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Application module:"})," groups any application, middleware or smart contract that may wrap downsteam application handlers to provide enhanced functionality."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Note three crucial elements in the diagram:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'The chains depend on relayers to communicate. Relayers are the "physical" connection layer of IBC: off-chain processes responsible for relaying data between two chains running the IBC protocol by scanning the state of each chain, constructing appropriate datagrams, and executing them on the opposite chain as is allowed by the protocol.'}),"\n",(0,o.jsx)(n.li,{children:"Many relayers can serve one or more channels to send messages between the chains."}),"\n",(0,o.jsx)(n.li,{children:"Each side of the connection uses the light client of the other chain to quickly verify incoming messages."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},70848:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/ibcoverview-dark-a87e85203e0f25729b015ad033560fd1.svg"},7309:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/ibcoverview-light-4cb201f14c87ac95e440893000bf95bf.svg"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(67294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);