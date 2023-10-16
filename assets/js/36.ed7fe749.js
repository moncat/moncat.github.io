(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{454:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("code",[s._v("@FeignClient")]),s._v(" 是 Spring Cloud 中用于声明和配置微服务客户端的注解。它可以与 Spring Cloud Netflix 的 Feign 组件一起使用，简化了微服务之间的 HTTP 通信。")]),s._v(" "),t("p",[t("code",[s._v("@FeignClient")]),s._v(" 注解可以用于接口上，用来标识一个声明式的 REST 客户端。下面是一些常用的注解属性及其说明：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("name")]),s._v("：指定要调用的微服务的名称。在 Ribbon 负载均衡时，会根据服务名称找到对应的实例。例如，"),t("code",[s._v('@FeignClient(name = "user-service")')]),s._v(" 指定了要调用名为 "),t("code",[s._v("user-service")]),s._v(" 的微服务。")]),s._v(" "),t("li",[t("code",[s._v("url")]),s._v("：指定要调用的微服务的 URL 地址。使用该属性时，将绕过注册中心，直接访问指定的 URL。")]),s._v(" "),t("li",[t("code",[s._v("path")]),s._v("：指定基本路径，用于拼接在 URL 上。例如，"),t("code",[s._v('@FeignClient(name = "user-service", path = "/api/users")')]),s._v(" 中的 "),t("code",[s._v("/api/users")]),s._v(" 会与 "),t("code",[s._v("name")]),s._v(" 或 "),t("code",[s._v("url")]),s._v(" 属性拼接为最终请求的 URL。")]),s._v(" "),t("li",[t("code",[s._v("fallback")]),s._v("：指定一个类，实现了当前注解所在接口的熔断器逻辑。当远程服务不可用时，会执行熔断器逻辑中的方法。熔断器逻辑类必须实现当前注解所在接口，并用 "),t("code",[s._v("@Component")]),s._v(" 或其他 Spring 管理 Bean 的注解进行注解。")]),s._v(" "),t("li",[t("code",[s._v("fallbackFactory")]),s._v("：指定一个工厂类，用于创建熔断器逻辑的实例。可以根据不同的错误类型创建不同的熔断器逻辑。工厂类必须实现 "),t("code",[s._v("FallbackFactory")]),s._v(" 接口，并用 "),t("code",[s._v("@Component")]),s._v(" 或其他 Spring 管理 Bean 的注解进行注解。")]),s._v(" "),t("li",[t("code",[s._v("configuration")]),s._v("：指定一个配置类，用于进一步配置 Feign 客户端的行为。配置类必须实现 "),t("code",[s._v("FeignClientSpecification")]),s._v(" 接口。")])]),s._v(" "),t("p",[s._v("除了上述常用属性外，"),t("code",[s._v("@FeignClient")]),s._v(" 还支持继承接口、使用 Spring MVC 注解进行请求映射和参数绑定等功能，使得定义和使用 REST 客户端变得简单和灵活。")]),s._v(" "),t("p",[s._v("下面是一个示例：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@FeignClient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user-service"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8080"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/api/users"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserFeignClient")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/{id}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUserById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@PathVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@PostMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createUser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestBody")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("在上述示例中，"),t("code",[s._v("UserFeignClient")]),s._v(" 接口使用了 "),t("code",[s._v("@FeignClient")]),s._v(" 注解来声明一个微服务客户端。通过指定微服务的名称、URL 和路径，定义了调用用户服务的接口方法 "),t("code",[s._v("getUserById")]),s._v(" 和 "),t("code",[s._v("createUser")]),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);