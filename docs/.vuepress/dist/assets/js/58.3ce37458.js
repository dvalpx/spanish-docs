(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{204:function(s,e,t){"use strict";t.r(e);var a=t(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content"},[t("div",{pre:!0},[t("h1",{pre:!0,attrs:{id:"proveedores-de-servicios"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#proveedores-de-servicios","aria-hidden":"true"}},[s._v("#")]),s._v(" Proveedores de Servicios")]),s._v(" "),t("ul",[t("li",[t("a",{pre:!0,attrs:{href:"#introduction"}},[s._v("Introducción")])]),s._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#writing-service-providers"}},[s._v("Escribiendo Proveedores de Servicios")]),s._v(" "),t("ul",[t("li",[t("a",{pre:!0,attrs:{href:"#the-register-method"}},[s._v("Método Register")])]),s._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#the-boot-method"}},[s._v("Método Boot")])])])]),s._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#registering-providers"}},[s._v("Registrando Proveedores")])]),s._v(" "),t("li",[t("a",{pre:!0,attrs:{href:"#deferred-providers"}},[s._v("Proveedores Diferidos")])])]),s._v(" "),t("p",[t("a",{pre:!0,attrs:{name:"introduction"}})]),s._v(" "),t("h2",{pre:!0,attrs:{id:"introduccion"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion","aria-hidden":"true"}},[s._v("#")]),s._v(" Introducción")]),s._v(" "),t("p",[s._v("Los proveedores de servicios son la parte central de la maquetación de una aplicación Laravel. Tu propia aplicación, así como todos los servicios principales de Laravel son maquetados usando proveedores de servicios.")]),s._v(" "),t("p",[s._v('Pero, ¿qué queremos decir por "maquetación"? En general, nos referimos a '),t("strong",[s._v("registrar")]),s._v(" cosas, incluyendo registrar enlaces de contenedores de servicios, listeners de eventos, middleware e incluso rutas. Los proveedores de servicios son el lugar principal para configurar tu aplicación.")]),s._v(" "),t("p",[s._v("Si abres el archivo "),t("code",[s._v("config/app.php")]),s._v(" incluido con Laravel, verás un arreglo "),t("code",[s._v("providers")]),s._v('. Estos son todos los proveedores de servicio que serán cargados para tu aplicación. Observa que muchos de éstos son proveedores "diferidos", lo que significa que no serán cargados en cada solicitud, sino sólo cuando los servicios que proporcionan sean necesarios.')]),s._v(" "),t("p",[s._v("En este resumen aprendarás a escribir tus propios proveedores de servicio y registrarlos en tu aplicación de Laravel.")]),s._v(" "),t("p",[t("a",{pre:!0,attrs:{name:"writing-service-providers"}})]),s._v(" "),t("h2",{pre:!0,attrs:{id:"escribiendo-proveedores-de-servicios"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#escribiendo-proveedores-de-servicios","aria-hidden":"true"}},[s._v("#")]),s._v(" Escribiendo Proveedores de Servicios")]),s._v(" "),t("p",[s._v("Todos los proveedores de servicios extienden de la clase "),t("code",[s._v("Illuminate\\Support\\ServiceProvider")]),s._v(". La mayoría de los proveedores de servicio contienen un método "),t("code",[s._v("register")]),s._v(" y "),t("code",[s._v("boot")]),s._v(". Dentro del método "),t("code",[s._v("register")]),s._v(", debes "),t("strong",[s._v("enlazar cosas sólo al "),t("a",{pre:!0,attrs:{href:"/docs/5.8/container"}},[s._v("contenedor de servicios")])]),s._v(". Nunca debes tratar de registrar ningún listener de eventos, rutas o cualquier otra pieza de funcionalidad dentro del método "),t("code",[s._v("register")]),s._v(".")]),s._v(" "),t("p",[s._v("La línea de comandos Artisan puede generar un nuevo proveedor mediante el comando "),t("code",[s._v("make:provider")]),s._v(":")]),s._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[s._v("php artisan make"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("provider RiakServiceProvider\n")])])]),t("p",[t("a",{pre:!0,attrs:{name:"the-register-method"}})]),s._v(" "),t("h3",{pre:!0,attrs:{id:"metodo-register"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#metodo-register","aria-hidden":"true"}},[s._v("#")]),s._v(" Método Register")]),s._v(" "),t("p",[s._v("Como mencionamos anteriormente, dentro del método "),t("code",[s._v("register")]),s._v(", debes sólo enlazar cosas al "),t("a",{pre:!0,attrs:{href:"/docs/5.8/container"}},[s._v("contenedor de servicio")]),s._v(". Nunca debes intentar registrar ningún listener de eventos, rutas o cualquier otra pieza de funcionalidad dentro del método "),t("code",[s._v("register")]),s._v(". De lo contrario, puedes accidentalmente usar un servicio que es proporcionado por un proveedor de servicio que no aún no  se ha cargado.")]),s._v(" "),t("p",[s._v("Vamos a echar un vistazo a un proveedor de servicio básico. Dentro de cualquiera de los métodos de tu proveedor de servicios, siempre tienes acceso a la propiedad "),t("code",[s._v("$app")]),s._v(" que proporciona acceso al contenedor de servicios:")]),s._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Providers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Riak"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Connection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ServiceProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RiakServiceProvider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceProvider")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n    * Register bindings in the container.\n    *\n    * @return void\n    */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("register")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("singleton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'riak'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),t("p",[s._v("Este proveedor de servicios sólo define un método "),t("code",[s._v("register")]),s._v(" y usa dicho método para definir una implementación de "),t("code",[s._v("Riak\\Connection")]),s._v(" en el contenedor de servicios. Si no entiendes cómo el contenedor de servicios funciona, revisa "),t("a",{pre:!0,attrs:{href:"/docs/5.8/container"}},[s._v("su documentación")]),s._v(".")]),s._v(" "),t("h4",{pre:!0,attrs:{id:"propiedades-bindings-y-singletons"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#propiedades-bindings-y-singletons","aria-hidden":"true"}},[s._v("#")]),s._v(" Propiedades "),t("code",[s._v("bindings")]),s._v(" y "),t("code",[s._v("singletons")])]),s._v(" "),t("p",[s._v("Si tu proveedor de servicios registra muchos bindings simples, puedes querer usar las propiedades "),t("code",[s._v("bindings")]),s._v(" y "),t("code",[s._v("singletons")]),s._v(" en lugar de manualmente registrar cada binding de contenedor. Cuando el proveedor de servicios es cargado por el framework, automáticamente comprobará dichas propiedades y registrará sus bindings:")]),s._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Providers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Contracts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ServerProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Contracts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("DowntimeNotifier")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ServiceProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Services"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("PingdomDowntimeNotifier")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Services"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("DigitalOceanServerProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AppServiceProvider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceProvider")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n    * All of the container bindings that should be registered.\n    *\n    * @var array\n    */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bindings")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        ServerProvider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" DigitalOceanServerProvider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n    * All of the container singletons that should be registered.\n    *\n    * @var array\n    */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$singletons")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        DowntimeNotifier"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" PingdomDowntimeNotifier"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),t("p",[t("a",{pre:!0,attrs:{name:"the-boot-method"}})]),s._v(" "),t("h3",{pre:!0,attrs:{id:"metodo-boot"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#metodo-boot","aria-hidden":"true"}},[s._v("#")]),s._v(" Método Boot")]),s._v(" "),t("p",[s._v("Entonces, ¿qué sucede si necesitamos registrar un "),t("a",{pre:!0,attrs:{href:"/docs/5.8/views#view-composers"}},[s._v("view composer")]),s._v(" dentro de nuestro proveedor de servicios? Esto debería ser hecho dentro del método "),t("code",[s._v("boot")]),s._v(". "),t("strong",[s._v("Este método es llamado luego de que todos los demás proveedores de servicio sean registrados")]),s._v(", lo que quiere decir que tienes acceso a todos los demás proveedores de servicio que han sido registrados por el framework:")]),s._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Providers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ServiceProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ComposerServiceProvider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceProvider")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n    * Bootstrap any application services.\n    *\n    * @return void\n    */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("boot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("view")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'view'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),t("h4",{pre:!0,attrs:{id:"inyeccion-de-dependencias-en-el-metodo-boot"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#inyeccion-de-dependencias-en-el-metodo-boot","aria-hidden":"true"}},[s._v("#")]),s._v(" Inyección de Dependencias en el Método Boot")]),s._v(" "),t("p",[s._v("Puedes escribir manualmente las dependencias para el método "),t("code",[s._v("boot")]),s._v(" de tu proveedor de servicios. El "),t("a",{pre:!0,attrs:{href:"/docs/5.8/container"}},[s._v("contenedor de servicios")]),s._v(" inyectará automáticamente cualquier dependencia que necesites:")]),s._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Contracts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Routing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ResponseFactory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("boot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ResponseFactory "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$response")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$response")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("macro")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'caps'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("a",{pre:!0,attrs:{name:"registering-providers"}})]),s._v(" "),t("h2",{pre:!0,attrs:{id:"registrando-proveedores"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#registrando-proveedores","aria-hidden":"true"}},[s._v("#")]),s._v(" Registrando Proveedores")]),s._v(" "),t("p",[s._v("Todos los proveedores de servicios son registrados en el archivo de configuración "),t("code",[s._v("config/app.php")]),s._v(". Este archivo contiene un arreglo "),t("code",[s._v("providers")]),s._v(" donde puedes listar los nombres de clase de tus proveedores de servicios. Por defecto, una serie de proveedores de servicios principales de Laravel son listados en este arreglo. Estos proveedores maquetan los componentes principales de Laravel, como mailer, queue, cache entre otros.")]),s._v(" "),t("p",[s._v("Para registrar tu proveedor, agregalo al arreglo:")]),s._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'providers'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Other Service Providers")]),s._v("\n\n    App\\"),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Providers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ComposerServiceProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("p",[t("a",{pre:!0,attrs:{name:"deferred-providers"}})]),s._v(" "),t("h2",{pre:!0,attrs:{id:"proveedores-diferidos"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#proveedores-diferidos","aria-hidden":"true"}},[s._v("#")]),s._v(" Proveedores Diferidos")]),s._v(" "),t("p",[s._v("Si tu proveedor "),t("strong",[s._v("sólo")]),s._v(" está registrando enlaces en el "),t("a",{pre:!0,attrs:{href:"/docs/5.8/container"}},[s._v("contenedor de servicios")]),s._v(", puedes elegir diferir su registro hasta que uno de los enlaces registrados sea necesario. Diferir la carga de dicho proveedor mejorará el rendimiento de tu aplicación, ya que no es cargado desde el sistema de archivos en cada solicitud.")]),s._v(" "),t("p",[s._v("Laravel compila y almacena una lista de todos los servicios suministrados por proveedores de servicios diferidos, junto con el nombre de clase de su proveedor de servicio. Luego, sólo cuando intentas resolver uno de estos servicios Laravel carga el proveedor de servicio.")]),s._v(" "),t("p",[s._v("Para diferir la carga de un proveedor, Implementa la interfaz "),t("code",[s._v("\\Illuminate\\Contracts\\Support\\DeferrableProvider")]),s._v(" y define un método "),t("code",[s._v("provides")]),s._v(". El método "),t("code",[s._v("provides")]),s._v(" debe retornar los enlaces del contenedor de servicio registrados por el proveedor:")]),s._v(" "),t("div",{pre:!0,attrs:{class:"language-php extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Providers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Riak"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Connection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ServiceProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Contracts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("DeferrableProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RiakServiceProvider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceProvider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeferrableProvider")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n    * Register the service provider.\n    *\n    * @return void\n    */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("register")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("singleton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'config'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'riak'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n    * Get the services provided by the provider.\n    *\n    * @return array\n    */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("provides")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])])])}],!1,null,null,null);e.default=n.exports}}]);