"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8210],{66346:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var n=t(85893),i=t(11151);const r={title:"Support transfer of coins whose base denom contains slashes",sidebar_label:"Support transfer of coins whose base denom contains slashes",sidebar_position:1,slug:"/migrations/support-denoms-with-slashes"},o="Migrating from not supporting base denoms with slashes to supporting base denoms with slashes",a={id:"migrations/support-denoms-with-slashes",title:"Support transfer of coins whose base denom contains slashes",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/versioned_docs/version-v5.4.x/04-migrations/01-support-denoms-with-slashes.md",sourceDirName:"04-migrations",slug:"/migrations/support-denoms-with-slashes",permalink:"/v5/migrations/support-denoms-with-slashes",draft:!1,unlisted:!1,tags:[],version:"v5.4.x",sidebarPosition:1,frontMatter:{title:"Support transfer of coins whose base denom contains slashes",sidebar_label:"Support transfer of coins whose base denom contains slashes",sidebar_position:1,slug:"/migrations/support-denoms-with-slashes"},sidebar:"defaultSidebar",previous:{title:"End Users",permalink:"/v5/middleware/ics29-fee/end-users"},next:{title:"SDK v0.43 to IBC-Go v1",permalink:"/v5/migrations/sdk-to-v1"}},c={},h=[{value:"Chains",id:"chains",level:2},{value:"ICS20 - Transfer",id:"ics20---transfer",level:3},{value:"Upgrade Proposal",id:"upgrade-proposal",level:3},{value:"Genesis Migration",id:"genesis-migration",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"migrating-from-not-supporting-base-denoms-with-slashes-to-supporting-base-denoms-with-slashes",children:"Migrating from not supporting base denoms with slashes to supporting base denoms with slashes"}),"\n",(0,n.jsx)(s.p,{children:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."}),"\n",(0,n.jsx)(s.p,{children:"There are four sections based on the four potential user groups of this document:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Chains"}),"\n",(0,n.jsx)(s.li,{children:"IBC Apps"}),"\n",(0,n.jsx)(s.li,{children:"Relayers"}),"\n",(0,n.jsx)(s.li,{children:"IBC Light Clients"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["This document is necessary when chains are upgrading from a version that does not support base denoms with slashes (e.g. v3.0.0) to a version that does (e.g. v3.2.0). All versions of ibc-go smaller than v1.5.0 for the v1.x release line, v2.3.0 for the v2.x release line, and v3.1.0 for the v3.x release line do ",(0,n.jsx)(s.strong,{children:"NOT"})," support IBC token transfers of coins whose base denoms contain slashes. Therefore the in-place of genesis migration described in this document are required when upgrading."]}),"\n",(0,n.jsx)(s.p,{children:"If a chain receives coins of a base denom with slashes before it upgrades to supporting it, the receive may pass however the trace information will be incorrect."}),"\n",(0,n.jsxs)(s.p,{children:["E.g. If a base denom of ",(0,n.jsx)(s.code,{children:"testcoin/testcoin/testcoin"})," is sent to a chain that does not support slashes in the base denom, the receive will be successful. However, the trace information stored on the receiving chain will be: ",(0,n.jsx)(s.code,{children:'Trace: "transfer/{channel-id}/testcoin/testcoin", BaseDenom: "testcoin"'}),"."]}),"\n",(0,n.jsx)(s.p,{children:"This incorrect trace information must be corrected when the chain does upgrade to fully supporting denominations with slashes."}),"\n",(0,n.jsx)(s.p,{children:"To do so, chain binaries should include a migration script that will run when the chain upgrades from not supporting base denominations with slashes to supporting base denominations with slashes."}),"\n",(0,n.jsx)(s.h2,{id:"chains",children:"Chains"}),"\n",(0,n.jsx)(s.h3,{id:"ics20---transfer",children:"ICS20 - Transfer"}),"\n",(0,n.jsx)(s.p,{children:"The transfer module will now support slashes in base denoms, so we must iterate over current traces to check if any of them are incorrectly formed and correct the trace information."}),"\n",(0,n.jsx)(s.h3,{id:"upgrade-proposal",children:"Upgrade Proposal"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-go",children:'app.UpgradeKeeper.SetUpgradeHandler("MigrateTraces",\n    func(ctx sdk.Context, _ upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {\n        // transfer module consensus version has been bumped to 2\n        return app.mm.RunMigrations(ctx, app.configurator, fromVM)\n    })\n\n'})}),"\n",(0,n.jsx)(s.p,{children:"This is only necessary if there are denom traces in the store with incorrect trace information from previously received coins that had a slash in the base denom. However, it is recommended that any chain upgrading to support base denominations with slashes runs this code for safety."}),"\n",(0,n.jsxs)(s.p,{children:["For a more detailed sample, please check out the code changes in ",(0,n.jsx)(s.a,{href:"https://github.com/cosmos/ibc-go/pull/1680",children:"this pull request"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"genesis-migration",children:"Genesis Migration"}),"\n",(0,n.jsx)(s.p,{children:"If the chain chooses to add support for slashes in base denoms via genesis export, then the trace information must be corrected during genesis migration."}),"\n",(0,n.jsx)(s.p,{children:"The migration code required may look like:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-go",children:"func migrateGenesisSlashedDenomsUpgrade(appState genutiltypes.AppMap, clientCtx client.Context, genDoc *tmtypes.GenesisDoc) (genutiltypes.AppMap, error) {\n\tif appState[ibctransfertypes.ModuleName] != nil {\n\t\ttransferGenState := &ibctransfertypes.GenesisState{}\n\t\tclientCtx.Codec.MustUnmarshalJSON(appState[ibctransfertypes.ModuleName], transferGenState)\n\n\t\tsubstituteTraces := make([]ibctransfertypes.DenomTrace, len(transferGenState.DenomTraces))\n\t\tfor i, dt := range transferGenState.DenomTraces {\n\t\t\t// replace all previous traces with the latest trace if validation passes\n\t\t\t// note most traces will have same value\n\t\t\tnewTrace := ibctransfertypes.ParseDenomTrace(dt.GetFullDenomPath())\n\n\t\t\tif err := newTrace.Validate(); err != nil {\n\t\t\t\tsubstituteTraces[i] = dt\n\t\t\t} else {\n\t\t\t\tsubstituteTraces[i] = newTrace\n\t\t\t}\n\t\t}\n\n\t\ttransferGenState.DenomTraces = substituteTraces\n\n\t\t// delete old genesis state\n\t\tdelete(appState, ibctransfertypes.ModuleName)\n\n\t\t// set new ibc transfer genesis state\n\t\tappState[ibctransfertypes.ModuleName] = clientCtx.Codec.MustMarshalJSON(transferGenState)\n\t}\n\n\treturn appState, nil\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["For a more detailed sample, please check out the code changes in ",(0,n.jsx)(s.a,{href:"https://github.com/cosmos/ibc-go/pull/1528",children:"this pull request"}),"."]})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>o});var n=t(67294);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);