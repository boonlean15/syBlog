(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{407:function(t,s,a){"use strict";a.r(s);var e=a(56),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-github-pages-github-actions-构建开源文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-github-pages-github-actions-构建开源文档"}},[t._v("#")]),t._v(" Vuepress + Github Pages + Github Actions 构建开源文档")]),t._v(" "),a("h2",{attrs:{id:"vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[t._v("#")]),t._v(" Vuepress")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("通过Vuepress构建文档")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("访问Vuepress"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("根据官方文档的快速开始，学习如果通过Vuepress构建个人博客或者开源官方文档")])]),t._v(" "),a("li",[a("p",[t._v("步骤")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("创建一个目录，作为项目目录")]),t._v(" "),a("p",[a("code",[t._v("mkdir vuepress-starter && cd vuepress-starter")])])]),t._v(" "),a("li",[a("p",[t._v("使用你喜欢的包管理器进行初始化")]),t._v(" "),a("p",[a("code",[t._v("yarn init # npm init")])])]),t._v(" "),a("li",[a("p",[t._v("将 VuePress 安装为本地依赖")]),t._v(" "),a("p",[a("code",[t._v("yarn add -D vuepress # npm install -D vuepress")])])]),t._v(" "),a("li",[a("p",[t._v("创建你的第一篇文档")]),t._v(" "),a("p",[a("code",[t._v("mkdir docs && echo '# Hello VuePress' > docs/README.md")])])]),t._v(" "),a("li",[a("p",[t._v("在 package.json 中添加一些 scripts脚本."),a("strong",[t._v("主要是设置启动脚本")])]),t._v(" "),a("p",[a("code",[t._v('{"scripts": {"docs:dev": "vuepress dev docs","docs:build": "vuepress build docs"}}')])])]),t._v(" "),a("li",[a("p",[t._v("在本地启动服务器")]),t._v(" "),a("p",[a("code",[t._v("yarn docs:dev # npm run docs:dev")])])]),t._v(" "),a("li",[a("p",[t._v("接着根据文档，按默认主题，设置导航和侧边栏。当然也可自定义主题")])])]),t._v(" "),a("h2",{attrs:{id:"github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[t._v("#")]),t._v(" Github Pages")]),t._v(" "),a("p",[t._v("您可以使用 GitHub Pages 直接从 GitHub 仓库托管关于自己、您的组织或您的项目的站点")]),t._v(" "),a("p",[t._v("GitHub Pages 是一项静态站点托管服务，它直接从 GitHub 上的仓库获取 HTML、CSS 和 JavaScript 文件，（可选）通过构建过程运行文件，然后发布网站。")]),t._v(" "),a("p",[t._v("我们Vuepress构建的项目可以直接托管到Github Pages上")]),t._v(" "),a("h2",{attrs:{id:"github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actions"}},[t._v("#")]),t._v(" GitHub Actions")]),t._v(" "),a("blockquote",[a("p",[t._v("Github Action是持续集成服务（Continuous Integration，简称 CI），它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器。")])]),t._v(" "),a("blockquote",[a("p",[t._v('持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码"集成"到主干。')])]),t._v(" "),a("blockquote",[a("p",[t._v("持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。")])]),t._v(" "),a("h3",{attrs:{id:"github-action-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-action-配置"}},[t._v("#")]),t._v(" Github Action 配置")]),t._v(" "),a("p",[t._v("昨天在公司用的window电脑直接通过创建.github/workflows/main.yml文件，创建workflows工作流后，回到家用家里Mac电脑，修改内容后，push代码到仓库后，发现并未自动构建。")]),t._v(" "),a("p",[t._v("经过检查和测试，最后找到原因，可能是由于未在github上创建workflows导致。")]),t._v(" "),a("p",[t._v("今天在公司拉取直接在github创建的workflows，然后发现提交文件后，项目自动构建了。")]),t._v(" "),a("p",[t._v("步骤：")]),t._v(" "),a("ul",[a("li",[t._v("在项目的Actions标签下点击，然后new workflow，创建main.yml文件，具体内容参考VuePress的Github Pages + Github Actions提供的示例，详细的是需要修改对应的项目名\n"),a("img",{attrs:{width:"800",src:"https://boonlean15.github.io/cheneyBlog/images/workflowsImg/1.jpg",alt:"png"}})])]),t._v(" "),a("h5",{attrs:{id:"yml内容如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yml内容如下"}},[t._v("#")]),t._v(" yml内容如下：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blog Demo CI\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@master\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build and Deploy\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jenkey2011/vuepress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy@master\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACCESS_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("TARGET_REPO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boonlean15/cheneyBlog\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("TARGET_BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh_pages\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BUILD_SCRIPT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" yarn build\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BUILD_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist/\n")])])]),a("ul",[a("li",[t._v("需要在自己的settings里创建一个token，并添加到Actions 的Secret,名字可以取ACCESS_TOKEN、具体参看上面代码")])]),t._v(" "),a("img",{attrs:{width:"800",src:"https://boonlean15.github.io/cheneyBlog/images/workflowsImg/2.jpg",alt:"png"}}),t._v(" "),a("ul",[a("li",[t._v("最后在项目的setting，找到Page选项，添加page的引用，我这里使用的gh_pages分支，点击save后，便有提示，项目可以准备部署到github page上")]),t._v(" "),a("li",[t._v("可以通过提交修改push到仓库，或者在git上修改代码触发构建")])]),t._v(" "),a("img",{attrs:{width:"800",src:"https://boonlean15.github.io/cheneyBlog/images/workflowsImg/3.jpg",alt:"png"}})])}),[],!1,null,null,null);s.default=n.exports}}]);