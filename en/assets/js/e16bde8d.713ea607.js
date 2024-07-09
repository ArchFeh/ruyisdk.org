"use strict";(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[5216],{7642:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=s(4848),o=s(8453);const r={title:"Early Access: Using Box64 to Run WPS Office on RISC-V Systems",authors:["white"]},c="Early Access: Using Box64 to Run WPS Office on RISC-V Systems",l={permalink:"/ruyisdk-org/en/blog/2024/07/08/box64-wps-office-poc",source:"@site/i18n/en/docusaurus-plugin-content-blog/2024-07-08-box64-wps-office-poc.md",title:"Early Access: Using Box64 to Run WPS Office on RISC-V Systems",description:"\u5f97\u76ca\u4e8e Box64 RISC-V \u79fb\u690d\u5de5\u4f5c\u7684\u8fdb\u5c55\uff0c\u5728 RISC-V Linux \u684c\u9762\u53d1\u884c\u7248\u4e0a\u8fd0\u884c WPS",date:"2024-07-08T00:00:00.000Z",tags:[],readingTime:5.075,hasTruncateMarker:!1,authors:[{name:"xen0n",title:"Maintainer of ruyi",url:"https://github.com/xen0n",imageURL:"https://avatars.githubusercontent.com/u/1175567?v=4",key:"white"}],frontMatter:{title:"Early Access: Using Box64 to Run WPS Office on RISC-V Systems",authors:["white"]},unlisted:!1,nextItem:{title:"Release notes for RuyiSDK 0.12",permalink:"/ruyisdk-org/en/blog/2024/06/11/ruyi-0.12"}},t={authorsImageUrls:[void 0]},d=[{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u5141\u8bb8\u5b89\u88c5\u9884\u53d1\u5e03\u7248\u672c\u7684\u8f6f\u4ef6\u5305",id:"\u5141\u8bb8\u5b89\u88c5\u9884\u53d1\u5e03\u7248\u672c\u7684\u8f6f\u4ef6\u5305",level:3},{value:"\u5b89\u88c5 Box64",id:"\u5b89\u88c5-box64",level:3},{value:"\u914d\u7f6e Linux <code>binfmt_misc</code> \u673a\u5236",id:"\u914d\u7f6e-linux-binfmt_misc-\u673a\u5236",level:3},{value:"\u5b89\u88c5 x86 sysroot",id:"\u5b89\u88c5-x86-sysroot",level:3},{value:"\u5b89\u88c5 WPS Office",id:"\u5b89\u88c5-wps-office",level:3},{value:"\u8c03\u6574 WPS Office \u542f\u52a8\u5668\u811a\u672c",id:"\u8c03\u6574-wps-office-\u542f\u52a8\u5668\u811a\u672c",level:3},{value:"\u8fd0\u884c WPS Office",id:"\u8fd0\u884c-wps-office",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5f97\u76ca\u4e8e Box64 RISC-V \u79fb\u690d\u5de5\u4f5c\u7684\u8fdb\u5c55\uff0c\u5728 RISC-V Linux \u684c\u9762\u53d1\u884c\u7248\u4e0a\u8fd0\u884c WPS\nOffice \u7b49\u5e38\u89c1 x86 \u4e8c\u8fdb\u5236\u8f6f\u4ef6\u5df2\u6210\u4e3a\u53ef\u80fd\u3002RuyiSDK \u6b63\u5728\u5f00\u5c55\u6b64\u65b9\u9762\u7684\u96c6\u6210\u5de5\u4f5c\uff1b\n\u6309\u4ee5\u4e0b\u7684\u6b65\u9aa4\u64cd\u4f5c\uff0c\u60a8\u5c06\u80fd\u5148\u884c\u4e00\u6b65\u611f\u53d7 RISC-V \u529e\u516c\u4f53\u9a8c\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u5047\u5b9a\u60a8\u5728\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4e4b\u524d\uff0c\u5df2\u7ecf\u5347\u7ea7\u5230\u4e86 ",(0,i.jsx)(n.code,{children:"ruyi"})," 0.14.0 \u6216\u66f4\u9ad8\u7684\u7248\u672c\uff0c\n\u5e76\u6267\u884c\u4e86 ",(0,i.jsx)(n.code,{children:"ruyi update"})," \u4ee5\u5c06\u8f6f\u4ef6\u6e90\u4fe1\u606f\u540c\u6b65\u5230\u6700\u65b0\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u64cd\u4f5c\u6b65\u9aa4",children:"\u64cd\u4f5c\u6b65\u9aa4"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u53d9\u8ff0\u65b9\u4fbf\uff0c\u8bbe\u60a8\u7684 ",(0,i.jsx)(n.code,{children:"$HOME"})," \u4e3a ",(0,i.jsx)(n.code,{children:"/home/foo"}),"\uff0c\u67b6\u6784\uff08",(0,i.jsx)(n.code,{children:"uname -m"})," \u8f93\u51fa\uff09\u4e3a\n",(0,i.jsx)(n.code,{children:"riscv64"}),"\uff0c\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"sudo"})," \u63d0\u6743\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5141\u8bb8\u5b89\u88c5\u9884\u53d1\u5e03\u7248\u672c\u7684\u8f6f\u4ef6\u5305",children:"\u5141\u8bb8\u5b89\u88c5\u9884\u53d1\u5e03\u7248\u672c\u7684\u8f6f\u4ef6\u5305"}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e Box64 RISC-V \u652f\u6301\u8fdb\u5c55\u8fc5\u901f\uff0c\u76ee\u524d\uff082024 \u5e74 7 \u6708\u521d\uff09\u5f88\u591a\u529f\u80fd\u6539\u8fdb\u6ca1\u6709\u5728\n\u5176\u6700\u65b0\u7a33\u5b9a\u7248\u672c\u5f97\u5230\u4f53\u73b0\u3002\u6211\u4eec\u6253\u5305\u4e86 Box64 \u7684\u5f00\u53d1\u5feb\u7167\u7248\u672c\uff1b\u4e3a\u4e86\u80fd\u591f\u5b89\u88c5\u6b64\u7248\u672c\uff0c\n\u60a8\u9700\u8981\u914d\u7f6e ",(0,i.jsx)(n.code,{children:"ruyi"})," \u4ee5\u4f7f\u5176\u5728\u5b89\u88c5\u8f6f\u4ef6\u5305\u65f6\u8003\u8651\u9884\u53d1\u5e03\u7248\u672c\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c ",(0,i.jsx)(n.code,{children:"~/.config/ruyi"})," \u76ee\u5f55\u4e0d\u5b58\u5728\uff0c\u5219\u521b\u5efa\u4e4b\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7f16\u8f91 ",(0,i.jsx)(n.code,{children:"~/.config/ruyi/config.toml"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[packages]\nprereleases = true\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5b89\u88c5-box64",children:"\u5b89\u88c5 Box64"}),"\n",(0,i.jsxs)(n.p,{children:["\u6309\u7167 RuyiSDK \u8f6f\u4ef6\u5305\u7684\u547d\u540d\u4e60\u60ef\uff0c\u4ece Box64 \u7684\u4e0a\u6e38\uff08\u800c\u975e PLCT \u6216\u67d0\u4e9b\u5382\u5546\u7684 fork\uff09\n\u6784\u5efa\u7684 Box64 \u4e8c\u8fdb\u5236\u5305\uff0c\u540d\u5b57\u53eb ",(0,i.jsx)(n.code,{children:"box64-upstream"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"ruyi install box64-upstream\n# ...\n# info: package box64-upstream-0.2.8-ruyi.20240702 installed to /home/foo/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.8-ruyi.20240702\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8bb0\u4e0b\u5b89\u88c5\u8def\u5f84\u3002"}),"\n",(0,i.jsxs)(n.h3,{id:"\u914d\u7f6e-linux-binfmt_misc-\u673a\u5236",children:["\u914d\u7f6e Linux ",(0,i.jsx)(n.code,{children:"binfmt_misc"})," \u673a\u5236"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e WPS Office \u7684\u6253\u5305\u65b9\u5f0f\u7279\u6b8a\uff0c\u5b83\u53ea\u80fd\u4ece\u5f00\u53d1\u5546\u63d0\u4f9b\u7684\u542f\u52a8\u5668\u811a\u672c\u88ab\u95f4\u63a5\u62c9\u8d77\uff0c\n\u800c\u4e0d\u80fd\u76f4\u63a5\u4ea4\u7531 Box64 \u542f\u52a8\u3002\u56e0\u6b64\u60a8\u9700\u8981\u786e\u4fdd\u60a8\u7684\u7cfb\u7edf\u652f\u6301 ",(0,i.jsx)(n.code,{children:"binfmt_misc"}),"\uff1a\n\u5982\u679c\u4e0d\u652f\u6301\uff0c\u63a5\u4e0b\u6765\u7684\u64cd\u4f5c\u4f1a\u5931\u8d25\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0d\u540c Linux \u53d1\u884c\u7248\u7684 ",(0,i.jsx)(n.code,{children:"binfmt_misc"})," \u914d\u7f6e\u65b9\u5f0f\u4e0d\u5c3d\u76f8\u540c\uff0c\u4ee5\u4e0b\u9488\u5bf9\u91c7\u7528 systemd\n\u7684\u7cfb\u7edf\u53d9\u8ff0\u3002\u60a8\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u60c5\u51b5\u81ea\u884c\u8c03\u6574\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# \u786e\u8ba4 Box64 \u53ef\u6267\u884c\u6587\u4ef6\u7684\u4f4d\u7f6e\nls /home/foo/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.8-ruyi.20240702/bin/box64\n\n# \u8c03\u6574 Box64 `binfmt.d` \u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\n# \u5047\u8bbe\u60a8\u4f7f\u7528 nano \u7f16\u8f91\u5668\nnano /home/foo/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.8-ruyi.20240702/etc/binfmt.d/box64.conf\n# \u5c06\u884c\u5c3e\u7684 //bin/box64 \u6539\u4e3a\u5148\u524d\u9a8c\u8bc1\u8fc7\u7684\u7edd\u5bf9\u8def\u5f84\n\n# \u5c06\u5176\u90e8\u7f72\u5230\u7cfb\u7edf\nsudo cp /home/foo/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.8-ruyi.20240702/etc/binfmt.d/box64.conf /etc/binfmt.d/box64.conf\nsudo systemctl restart systemd-binfmt\n\n# \u68c0\u67e5\u90e8\u7f72\u7ed3\u679c\ncat /proc/sys/fs/binfmt_misc/box64\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5b89\u88c5-x86-sysroot",children:"\u5b89\u88c5 x86 sysroot"}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8e Box64 \u4e3b\u8981\u9762\u5411\u6e38\u620f\u7b49\u8f6f\u4ef6\u7684\u6a21\u62df\uff0c\u800c\u8fd9\u4e9b\u8f6f\u4ef6\u57fa\u672c\u90fd\u81ea\u5e26\u6240\u6709\u4f9d\u8d56\uff0c\u6240\u4ee5 Box64\n\u672c\u8eab\u57fa\u672c\u6ca1\u6709\u81ea\u5e26\u4ec0\u4e48 x86 \u8fd0\u884c\u65f6\u5e93\u3002WPS Office \u4f5c\u4e3a\u4e00\u4e2a\u9884\u671f\u88ab\u7cfb\u7edf\u5305\u7ba1\u7406\u5668\u7ba1\u7406\u7684\n\u684c\u9762\u5e94\u7528\uff0cBox64 \u81ea\u5e26\u7684\u5c11\u91cf x86 \u8fd0\u884c\u65f6\u5e93\u65e0\u6cd5\u6ee1\u8db3\u5b83\u7684\u9700\u6c42\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u81ea\u884c\u51c6\u5907\nx86 \u73af\u5883\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# \u4e0b\u8f7d\u9884\u5236\u7684 x86 sysroot\n# \u6b64\u4e3a\u4e34\u65f6\u6027\u7684\u94fe\u63a5\u3002\u540e\u7eed\u5f85\u672c\u529f\u80fd\u8fed\u4ee3\u7a33\u5b9a\u4e4b\u540e\uff0c\u64cd\u4f5c\u65b9\u5f0f\u5c06\u6539\u53d8\uff0c\u6b64\u94fe\u63a5\u4e5f\u5c06\u5931\u6548\n# \u5047\u8bbe\u6b64\u6587\u4ef6\u653e\u5728\u4e86 ~/Downloads \u76ee\u5f55\u4e0b\nwget https://mirror.iscas.ac.cn/ruyisdk/dist/temp/debian-bookworm.gui.20240705.amd64.tar.zst\n\n# \u5047\u8bbe\u5b89\u88c5\u5230 /opt/debian-bookworm.amd64\nsudo mkdir /opt/debian-bookworm.amd64\npushd /opt/debian-bookworm.amd64\ntar -xf ~/Downloads/debian-bookworm.gui.20240705.amd64.tar.zst\npopd\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5b89\u88c5-wps-office",children:"\u5b89\u88c5 WPS Office"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f3a\u5236\u5b89\u88c5 ",(0,i.jsx)(n.code,{children:"x86_64"})," \u67b6\u6784\u7684 WPS Office \u8f6f\u4ef6\u5305\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"ruyi install --host x86_64 wps-office\n# ...\n# info: package wps-office-11.1.0-r.11719 installed to /home/foo/.local/share/ruyi/binaries/x86_64/wps-office-11.1.0-r.11719\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e WPS Office \u5b98\u65b9\u4e0b\u8f7d\u9875\u9762\u7684\u9650\u5236\uff0c",(0,i.jsx)(n.code,{children:"ruyi"})," \u65e0\u6cd5\u81ea\u52a8\u4e0b\u8f7d\u5b89\u88c5\u5305\u3002\n\u8bf7\u6309\u7167\u63d0\u793a\u4fe1\u606f\u64cd\u4f5c\uff0c\u4e4b\u540e\u91cd\u65b0\u6267\u884c\u8be5\u547d\u4ee4\u4ee5\u5b89\u88c5\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u8c03\u6574-wps-office-\u542f\u52a8\u5668\u811a\u672c",children:"\u8c03\u6574 WPS Office \u542f\u52a8\u5668\u811a\u672c"}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e WPS Office \u9884\u671f\u81ea\u8eab\u88ab\u7cfb\u7edf\u5305\u7ba1\u7406\u5668\u7ba1\u7406\uff0c\u5b83\u7684\u542f\u52a8\u5668\u811a\u672c\u5047\u5b9a\u4e86\u81ea\u8eab\u7684\u5b89\u88c5\u8def\u5f84\n\u4e3a ",(0,i.jsx)(n.code,{children:"/opt/kingsoft/wps-office"}),"\uff0c\u9700\u8981\u4e3a\u5b83\u4eec\u6253\u8865\u4e01\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'pushd /home/foo/.local/share/ruyi/binaries/x86_64/wps-office-11.1.0-r.11719\n\n# \u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u8def\u5f84\u4e2d\u5e94\u5f53\u4e0d\u542b\u7279\u6b8a\u5b57\u7b26\u3002\n# \u5982\u679c\u542b\u6709\uff0c\u8bf7\u81ea\u884c\u9002\u5f53\u8c03\u6574 sed \u547d\u4ee4\u7684\u53c2\u6570\nsed -i "s@gInstallPath=/@gInstallPath=$(pwd)/@" ./usr/bin/*\n\npopd\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u8fd0\u884c-wps-office",children:"\u8fd0\u884c WPS Office"}),"\n",(0,i.jsx)(n.p,{children:"\u51c6\u5907\u5de5\u4f5c\u7ec8\u4e8e\u5b8c\u6210\uff0c\u73b0\u5728\u5c06\u6240\u6709\u90e8\u5206\u4e32\u8d77\u6765\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# \u6b64\u52a8\u6001\u94fe\u63a5\u5e93\u7684\u539f\u751f\u8f6c\u53d1\u4ecd\u6709\u4e9b\u95ee\u9898\uff0c\u56e0\u6b64\u5f3a\u5236\u4ee5\u6a21\u62df\u65b9\u5f0f\u6267\u884c\nexport BOX64_EMULATED_LIBS=libsqlite3.so.0\n# \u914d\u7f6e Box64 \u5e93\u641c\u7d22\u8def\u5f84\nexport BOX64_LD_LIBRARY_PATH=/opt/debian-bookworm.amd64/usr/lib/x86_64-linux-gnu\n\n# \u73b0\u5728\u53ef\u4ee5\u6267\u884c\u4e86\uff01\n/home/foo/.local/share/ruyi/binaries/x86_64/wps-office-11.1.0-r.11719/usr/bin/wps\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7ed3\u8bed",children:"\u7ed3\u8bed"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0a\u662f RuyiSDK \u5bf9 RISC-V \u4e8c\u8fdb\u5236\u7ffb\u8bd1 x86 \u8f6f\u4ef6\u7684\u521d\u6b65\u96c6\u6210\u6210\u679c\u3002\n\u4eca\u540e\u6211\u4eec\u4ecd\u5c06\u8fed\u4ee3\u8fd9\u4e00\u8fc7\u7a0b\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u4ee5\u671f\u7528\u6237\u5728 RISC-V \u7cfb\u7edf\u4e0a\u8fd0\u884c\u9700\u8981\u7684\u5e94\u7528\n\u66f4\u52a0\u65b9\u4fbf\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(6540);const o={},r=i.createContext(o);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);