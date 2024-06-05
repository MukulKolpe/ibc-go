"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9359],{63673:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var s=r(85893),t=r(11151);const l={title:"Client",sidebar_label:"Client",sidebar_position:9,slug:"/apps/transfer/client"},o="Client",a={id:"apps/transfer/client",title:"Client",description:"CLI",source:"@site/versioned_docs/version-v7.5.x/02-apps/01-transfer/09-client.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/client",permalink:"/v7/apps/transfer/client",draft:!1,unlisted:!1,tags:[],version:"v7.5.x",sidebarPosition:9,frontMatter:{title:"Client",sidebar_label:"Client",sidebar_position:9,slug:"/apps/transfer/client"},sidebar:"defaultSidebar",previous:{title:"Authorizations",permalink:"/v7/apps/transfer/authorizations"},next:{title:"Overview",permalink:"/v7/apps/interchain-accounts/overview"}},c={},i=[{value:"CLI",id:"cli",level:2},{value:"Query",id:"query",level:3},{value:"<code>total-escrow</code>",id:"total-escrow",level:4},{value:"gRPC",id:"grpc",level:2},{value:"<code>TotalEscrowForDenom</code>",id:"totalescrowfordenom",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"client",children:"Client"}),"\n",(0,s.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,s.jsxs)(n.p,{children:["A user can query and interact with the ",(0,s.jsx)(n.code,{children:"transfer"})," module using the CLI. Use the ",(0,s.jsx)(n.code,{children:"--help"})," flag to discover the available commands:"]}),"\n",(0,s.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"query"})," commands allow users to query ",(0,s.jsx)(n.code,{children:"transfer"})," state."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd query ibc-transfer --help\n"})}),"\n",(0,s.jsx)(n.h4,{id:"total-escrow",children:(0,s.jsx)(n.code,{children:"total-escrow"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"total-escrow"})," command allows users to query the total amount in escrow for a particular coin denomination regardless of the transfer channel from where the coins were sent out."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd query ibc-transfer total-escrow [denom] [flags]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd query ibc-transfer total-escrow samoleans\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'amount: "100"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"grpc",children:"gRPC"}),"\n",(0,s.jsxs)(n.p,{children:["A user can query the ",(0,s.jsx)(n.code,{children:"transfer"})," module using gRPC endpoints."]}),"\n",(0,s.jsx)(n.h3,{id:"totalescrowfordenom",children:(0,s.jsx)(n.code,{children:"TotalEscrowForDenom"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"TotalEscrowForDenom"})," endpoint allows users to query the total amount in escrow for a particular coin denomination regardless of the transfer channel from where the coins were sent out."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ibc.applications.transfer.v1.Query/TotalEscrowForDenom\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'grpcurl -plaintext \\\n  -d \'{"denom":"samoleans"}\' \\\n  localhost:9090 \\\n  ibc.applications.transfer.v1.Query/TotalEscrowForDenom\n'})}),"\n",(0,s.jsx)(n.p,{children:"Example output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'{\n  "amount": "100"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var s=r(67294);const t={},l=s.createContext(t);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);