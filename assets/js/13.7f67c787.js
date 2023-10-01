(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{432:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"gradle-配置repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle-配置repository"}},[s._v("#")]),s._v(" gradle 配置repository")]),s._v(" "),t("p",[s._v("在 Gradle 中配置仓库（repository），你可以使用 "),t("code",[s._v("repositories")]),s._v(" 块。它用于指定构建脚本中要使用的仓库。")]),s._v(" "),t("p",[s._v("Gradle 支持多种仓库类型，如 Maven 仓库、JCenter、Ivy 仓库等。以下是使用不同类型仓库的示例：")]),s._v(" "),t("ol",[t("li",[s._v("Maven 仓库：")])]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("repositories "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mavenCentral")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 Maven Central 仓库")]),s._v("\n    maven "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" url "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://repo.example.com"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义远程 Maven 仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者使用简写形式")]),s._v("\nrepositories "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mavenCentral")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    maven "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        url "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://repo.example.com"')])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("JCenter 仓库：")])]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("repositories "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jcenter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 JCenter 仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("Ivy 仓库：")])]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("repositories "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ivy "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        url "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://repo.example.com"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Ivy 仓库的 URL")]),s._v("\n        layout "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pattern"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            artifact "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[module]/[revision]/[artifact]-[revision].[ext]"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 仓库布局模式")]),s._v("\n            ivy "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[module]/[revision]/ivy-[revision].xml"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Ivy 文件位置")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("除了上述示例中的仓库类型，Gradle 还支持其他类型的仓库，如本地文件系统仓库、平台特定的仓库（如 Google Android 仓库）等。")])])}),[],!1,null,null,null);t.default=e.exports}}]);