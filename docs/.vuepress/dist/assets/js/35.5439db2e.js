(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{266:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{pre:!0},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Todas las excepciones son manejadas por la clase "),a("code",[t._v("App\\Exceptions\\Handler")]),t._v(". Esta clase contiene dos métodos: "),a("code",[t._v("report")]),t._v(" y "),a("code",[t._v("render")]),t._v(". Examinaremos cada uno de estos métodos en detalle. El método "),a("code",[t._v("report")]),t._v(" se usa para registrar excepciones o enviarlas a un servicio externo como "),a("a",{pre:!0,attrs:{href:"https://bugsnag.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bugsnag"),a("OutboundLink",{pre:!0})],1),t._v(" o "),a("a",{pre:!0,attrs:{href:"https://github.com/getsentry/sentry-laravel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sentry"),a("OutboundLink",{pre:!0})],1),t._v(". De forma predeterminada, el método "),a("code",[t._v("report")]),t._v(" pasa la excepción a la clase base donde la excepción es registrada. Sin embargo, eres libre de registrar excepciones en la forma que desees.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15)]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),t._m(45)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{pre:!0,attrs:{id:"manejo-de-errores"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#manejo-de-errores","aria-hidden":"true"}},[this._v("#")]),this._v(" Manejo de Errores")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{pre:!0,attrs:{href:"#introduction"}},[t._v("Introducción")])]),t._v(" "),a("li",[a("a",{pre:!0,attrs:{href:"#configuration"}},[t._v("Configuración")])]),t._v(" "),a("li",[a("a",{pre:!0,attrs:{href:"#the-exception-handler"}},[t._v("Manejador de Excepciones")]),t._v(" "),a("ul",[a("li",[a("a",{pre:!0,attrs:{href:"#report-method"}},[t._v("Método Report")])]),t._v(" "),a("li",[a("a",{pre:!0,attrs:{href:"#render-method"}},[t._v("Método Render")])]),t._v(" "),a("li",[a("a",{pre:!0,attrs:{href:"#renderable-exceptions"}},[t._v("Excepciones Renderizables y Reportables")])])])]),t._v(" "),a("li",[a("a",{pre:!0,attrs:{href:"#http-exceptions"}},[t._v("Excepciones HTTP")]),t._v(" "),a("ul",[a("li",[a("a",{pre:!0,attrs:{href:"#custom-http-error-pages"}},[t._v("Páginas de Error HTTP Personalizadas")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{pre:!0,attrs:{name:"introduction"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{pre:!0,attrs:{id:"introduccion"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#introduccion","aria-hidden":"true"}},[this._v("#")]),this._v(" Introducción")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Cuando comienzas un nuevo proyecto de Laravel, el manejo de excepciones y errores ya está configurado para ti. La clase "),e("code",[this._v("App\\Exceptions\\Handler")]),this._v(" es donde todas las excepciones disparadas por tu aplicación son registradas y después renderizadas de vuelta al usuario. Revisaremos más profundamente dentro de esta clase a través de esta documentación.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{pre:!0,attrs:{name:"configuration"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{pre:!0,attrs:{id:"configuracion"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuración")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("La opción "),a("code",[t._v("debug")]),t._v(" en tu archivo de configuración "),a("code",[t._v("config/app.php")]),t._v(" determina cuanta información sobre un error se muestra realmente al usuario. Por defecto, esta opción es establecida para respetar el valor de la variable de entorno "),a("code",[t._v("APP_DEBUG")]),t._v(", la cual es almacenada en tu archivo "),a("code",[t._v(".env")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Para desarrollo local, deberías establecer la variable de entorno a "),e("code",[this._v("true")]),this._v(". En tu entorno de producción, este valor debería estar siempre "),e("code",[this._v("false")]),this._v(". Si el valor es establecido a "),e("code",[this._v("true")]),this._v(" en producción, te arriesgas a exponer valores de configuración sensitivos a los usuarios finales de tu aplicación.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{pre:!0,attrs:{name:"the-exception-handler"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{pre:!0,attrs:{id:"manejador-de-excepciones"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#manejador-de-excepciones","aria-hidden":"true"}},[this._v("#")]),this._v(" Manejador de Excepciones")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{pre:!0,attrs:{name:"report-method"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{pre:!0,attrs:{id:"metodo-report"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#metodo-report","aria-hidden":"true"}},[this._v("#")]),this._v(" Método Report")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Por ejemplo, si necesitas reportar distintos tipos de excepciones en diferentes formas, puedes usar el operador de comparación "),e("code",[this._v("instanceof")]),this._v(" de PHP:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{pre:!0,attrs:{class:"language-php extra-class"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Report or log an exception.\n*\n* This is a great spot to send exceptions to Sentry, Bugsnag, etc.\n*\n* @param  \\Exception  $exception\n* @return void\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exception")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exception")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{pre:!0,attrs:{class:"tip custom-block"}},[a("p",{pre:!0,attrs:{class:"custom-block-title"}},[t._v("TIP")]),t._v(" "),a("p",[t._v("En lugar de hacer uso de muchos "),a("code",[t._v("instanceof")]),t._v(" en tu método "),a("code",[t._v("report")]),t._v(", considera usar "),a("a",{pre:!0,attrs:{href:"/docs/%7B%7Bversion%7D%7D/errors#renderable-exceptions"}},[t._v("excepciones reportables")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"contexto-de-log-global"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contexto-de-log-global","aria-hidden":"true"}},[this._v("#")]),this._v(" Contexto De Log Global")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("De estar disponible, Laravel automáticamente agrega el ID del usuario actual al mensaje de log de cada excepción como datos contextuales. Puedes definir tus propios datos contextuales sobrescribiendo el método "),e("code",[this._v("context")]),this._v(" de la clase "),e("code",[this._v("App\\Exceptions\\Handler")]),this._v(" de tu aplicación. Esta información será incluida en cada mensaje de log de excepción escrito por tu aplicación:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Get the default context variables for logging.\n*\n* @return array\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("array_merge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'foo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"helper-report"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helper-report","aria-hidden":"true"}},[this._v("#")]),this._v(" Helper "),e("code",[this._v("report")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Algunas veces puede que necesites reportar una execpción pero continuar manejando la solicitud actual. La función helper "),e("code",[this._v("report")]),this._v(" permite que reportes rápidamente una excepción usando el método "),e("code",[this._v("report")]),this._v(" de tu manejador de excepción sin renderizar una página de error:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isValid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Validate the value...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"ignorando-excepciones-por-tipo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignorando-excepciones-por-tipo","aria-hidden":"true"}},[this._v("#")]),this._v(" Ignorando Excepciones por Tipo")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("La propiedad "),e("code",[this._v("$dontReport")]),this._v(" del manejador de excepción contiene un arreglo de tipos de excepción que no serán registrados. Por ejemplo, excepciones que resulten de errores 404, al igual que otros varios tipos de errores, no son escritos a tus archivos de log. Puedes agregar otros tipos de excepción a este arreglo cuando lo necesites:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* A list of the exception types that should not be reported.\n*\n* @var array\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dontReport")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    \\"),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AuthenticationException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \\"),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AuthorizationException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \\"),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HttpKernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HttpException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \\"),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ModelNotFoundException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \\"),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Validation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ValidationException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"render-method"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"metodo-render"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metodo-render","aria-hidden":"true"}},[this._v("#")]),this._v(" Método Render")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("El método "),e("code",[this._v("render")]),this._v(" es responsable de convertir una excepción dada en una respuesta HTTP que debería ser devuelta al navegador. De forma predeterminada, la excepción es pasada a la clase base la cual genera una respuesta para ti. Sin embargo, eres libre de revisar el tipo de excepción o devolver tu propia respuesta personalizada:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Render an exception into an HTTP response.\n*\n* @param  \\Illuminate\\Http\\Request  $request\n* @param  \\Exception  $exception\n* @return \\Illuminate\\Http\\Response\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exception")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'errors.custom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exception")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"renderable-exceptions"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"excepciones-renderizables-y-reportables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#excepciones-renderizables-y-reportables","aria-hidden":"true"}},[this._v("#")]),this._v(" Excepciones Renderizables y Reportables")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("En lugar de hacer verificaciones por tipo de excepciones en los métodos "),a("code",[t._v("report")]),t._v(" y "),a("code",[t._v("render")]),t._v(" del manejador de excepción, puedes definir métodos "),a("code",[t._v("report")]),t._v(" y "),a("code",[t._v("render")]),t._v(" directamente en tu excepción personalizada. Cuando estos métodos existen, serán ejecutados automáticamente por el framework:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Exceptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Exception")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RenderException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * Report the exception.\n    *\n    * @return void\n    */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * Render the exception into an HTTP response.\n    *\n    * @param  \\Illuminate\\Http\\Request\n    * @return \\Illuminate\\Http\\Response\n    */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("Puedes declarar el tipo de cualquier dependencia requerida en el método "),e("code",[this._v("report")]),this._v(" y el "),e("a",{attrs:{href:"/docs/%7B%7Bversion%7D%7D/container"}},[this._v("contenedor de servicios")]),this._v(" las inyectará automáticamente en el método.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"http-exceptions"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"excepciones-http"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#excepciones-http","aria-hidden":"true"}},[this._v("#")]),this._v(" Excepciones HTTP")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('Algunas excepciones describen códigos de error HTTP del servidor. Por ejemplo, esto puede ser un error "página no encontrada" (404), un "error no autorizado" (401) o incluso un error 500 generado por el desarrollador. Con el propósito de generar tal respuesta desde cualquier lugar en tu aplicación, puedes usar el helper '),e("code",[this._v("abort")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("abort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[this._v("404")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("El helper "),e("code",[this._v("abort")]),this._v(" provocará inmediatamente una excepción la cual será renderizada por el manejador de excepción. Opcionalmente, puedes proporcionar el texto de la respuesta:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Unauthorized action.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{name:"custom-http-error-pages"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"paginas-de-error-http-personalizadas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#paginas-de-error-http-personalizadas","aria-hidden":"true"}},[this._v("#")]),this._v(" Páginas de Error HTTP Personalizadas")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Laravel hace fácil mostrar páginas de error personalizadas para varios códigos de estado HTTP. Por ejemplo, si deseas personalizar la página de error para los códigos de estado HTTP 404, crea una vista "),a("code",[t._v("resources/views/errors/404.blade.php")]),t._v(". Este archivo será servido en todos los errores 404 generados por tu aplicación. La vista dentro de este directorio debería ser nombrada para coincidir con el código de estado HTTP que les corresponde. La instancia "),a("code",[t._v("HttpException")]),t._v(" provocada por la función "),a("code",[t._v("abort")]),t._v(" será pasada a la vista como una variable "),a("code",[t._v("$exception")]),t._v(":")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exception")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Puedes publicar las plantillas de página de error de Laravel usando el comando de Artisan "),e("code",[this._v("vender:publish")]),this._v(". Una vez que las plantillas han sido publicadas, puedes personalizarlas de la forma que quieras:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("php artisan vendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("publish "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("laravel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("errors\n")])])])}],!1,null,null,null);e.default=n.exports}}]);