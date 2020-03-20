function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Login/decision.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Login/decision.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginDecisionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css\" />\n<div class=\"container text-center\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n            <div class=\"service-heading-block\">\n                <h2 class=\"text-center text-primary title\">ServitoDodo</h2>\n                <!-- <p class=\"text-center sub-title\">Lorem ipsum dolor sit amet,<span class=\"text-primary\">consectetur adipisicing</span> elit.<br/> Dolor alias provident excepturi eligendi, nam numquam iusto eum illum, ea quisquam.</p> -->\n            </div>\n        </div>\n        <hr>\n        <div class=\"col-lg-6 col-md-5 col-sm-5\">\n            <div class=\"text-center feature-block\">\n                <span class=\"fb-icon color-info\">\n                  <i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>\n                </span>\n                <h4 class=\"color-info\">Registrate</h4>\n                <p class=\"\">Quieres Contratar un Servicio?.</p>\n                <a routerLink=\"/register/USER\" class=\"btn btn-info btn-custom\">Click aqui</a>\n            </div>\n        </div>\n\n        <div class=\"col-lg-6 col-md-5 col-sm-5\">\n            <div class=\"text-center feature-block\">\n                <span class=\"fb-icon color-warning\">\n                  <i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>\n                </span>\n                <h4 class=\"color-warning\">Registrate</h4>\n                <p class=\"\">Queres ser Proveedor de Servicios?.</p>\n                <a routerLink=\"/register/PROV\" class=\"btn btn-warning btn-custom\">Click aqui</a>\n            </div>\n        </div>\n\n        <!-- <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"text-center feature-block\">\n                <span class=\"fb-icon color-success\">\n                  <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                </span>\n                <h4 class=\"color-success\">Email Service</h4>\n                <p class=\"\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-custom\">Click here</a>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"text-center feature-block\">\n                <span class=\"fb-icon color-danger\">\n                  <i class=\"fa fa-fire\" aria-hidden=\"true\"></i>\n                </span>\n                <h4 class=\"color-danger\">Quality Service</h4>\n                <p class=\"\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>\n                <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-custom\">Click here</a>\n            </div>\n        </div> -->\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"card text-center\">\n    <div class=\"card-header\">\n        <h2> Login </h2>\n    </div>\n</div>\n\n<div class=\"jumbotron\">\n    <div class=\"col-md-6 mx-auto\"> -->\n<!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->\n<!-- <form ngNativeValidate #f=\"ngForm\" (ngSubmit)=\"ingresar( f )\">\n\n\n            <div class=\"control-group\">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n                    <label>Usuario</label>\n                    <input ngModel name=\"user\" class=\"form-control\" id=\"usuario\" type=\"text\" placeholder=\"usuario\" required=\"required\" data-validation-required-message=\"Ingrese el Usuario.\">\n                    <p class=\"help-block text-danger\"></p>\n                </div>\n            </div>\n            <div class=\"control-group\">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n                    <label>Contraceña</label>\n                    <input ngModel name=\"password\" class=\"form-control\" id=\"password\" type=\"password\" placeholder=\"Contraceña\" required=\"required\" data-validation-required-message=\"Ingrese su Contraceña.\">\n                    <p class=\"help-block text-danger\"></p>\n                </div>\n            </div>\n\n            <br>\n            <div id=\"success\"></div>\n            <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary btn-xl\" id=\"sendMessageButton\">Enviar</button>\n            </div>\n\n        </form>\n    </div>\n</div> -->\n\n\n<div class=\"wrapper fadeInDown\">\n    <div id=\"formContent\">\n\n        <div class=\"fadeIn first\">\n            <!-- <img src=\"https://www.b-cube.in/wp-content/uploads/2014/05/aditya-300x177.jpg\" id=\"icon\" alt=\"User Icon\" /> -->\n            <h1>ServiTodo</h1>\n        </div>\n\n        <form ngNativeValidate #f=\"ngForm\" (ngSubmit)=\"ingresar( f )\">\n            <input ngModel name=\"user\" type=\"text\" id=\"usuario\" class=\"fadeIn second\" placeholder=\"user\">\n            <input ngModel name=\"password\" type=\"password\" id=\"password\" class=\"fadeIn third\" placeholder=\"password\">\n            <button type=\"submit\" class=\"btn btn-primary btn-xl\" id=\"sendMessageButton\">Ingresar</button>\n        </form>\n\n        <div id=\"formFooter\">\n            <a class=\"underlineHover\" href=\"#\">Retorna al Sitio</a>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Login/register.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Login/register.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"card text-center\">\n    <div class=\"card-header\">\n        <h2> Registro </h2>\n    </div>\n</div>\n\n<div class=\"jumbotron\">\n    <div class=\"col-md-6 mx-auto\"> -->\n<!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->\n<!-- <form [formGroup]=\"forma\" (ngSubmit)=\"GuargarUser()\">\n\n\n            <div class=\"floating-label-form-group controls mb-0 pb-2\">\n                <label>Usuario</label>\n                <input formControlName=\"user\" name=\"user\" class=\"form-control\" id=\"usuario\" type=\"text\" placeholder=\"usuario\" required=\"required\" data-validation-required-message=\"Ingrese el Usuario.\">\n                <p class=\"help-block text-danger\"></p>\n            </div>\n\n\n            <div class=\"floating-label-form-group controls mb-0 pb-2\">\n                <label>Correo</label>\n                <input formControlName=\"email\" name=\"email\" class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"Correo\" required=\"required\" data-validation-required-message=\"Ingrese su Correo.\">\n                <p class=\"help-block text-danger\"></p>\n            </div>\n\n\n            <div class=\"floating-label-form-group controls mb-0 pb-2\">\n                <label>Contraceña</label>\n                <input formControlName=\"password\" name=\"password\" class=\"form-control\" id=\"password\" type=\"password\" placeholder=\"Contraceña\" required=\"required\" data-validation-required-message=\"Ingrese su Contraceña.\">\n                <p class=\"help-block text-danger\"></p>\n            </div>\n\n\n            <div class=\"floating-label-form-group controls mb-0 pb-2\">\n                <label>Ingrese la Contraceña</label>\n                <input formControlName=\"password2\" name=\"password2\" class=\"form-control\" id=\"password2\" type=\"password\" placeholder=\"Contraceña\" required=\"required\" data-validation-required-message=\"Ingrese de Nuevo su Contraceña.\">\n                <p class=\"help-block text-danger\"></p>\n            </div>\n\n            <br>\n            <div id=\"success\"></div>\n            <div>\n                <button type=\"submit\" class=\"btn btn-primary btn-xl\">Enviar</button>\n            </div>\n\n        </form>\n    </div>\n</div> -->\n\n<article class=\"card-body mx-auto\" style=\"max-width: 400px;\">\n    <h4 class=\"card-title mt-3 text-center\">Registra una Cuenta</h4>\n    <p class=\"text-center\">Inicia con una Cuenta Gratuita</p>\n    <form [formGroup]=\"forma\" (ngSubmit)=\"GuargarUser()\">\n        <div class=\"form-group input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n            </div>\n            <input formControlName=\"nombre\" name=\"nombre\" class=\"form-control\" placeholder=\"Nombre Completo\" type=\"text\">\n        </div>\n        <!-- form-group// -->\n        <div class=\"form-group input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n            </div>\n            <input formControlName=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Correo Electronico\" type=\"email\">\n        </div>\n\n        <div class=\"form-group input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"> <i class=\"fa fa-user-circle\"></i> </span>\n            </div>\n            <input formControlName=\"user\" name=\"user\" class=\"form-control\" placeholder=\"Usuario\" type=\"text\">\n        </div>\n        <div class=\"form-group input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n            </div>\n            <input formControlName=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Tu Password\" type=\"password\">\n        </div>\n        <!-- form-group// -->\n        <div class=\"form-group input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n            </div>\n            <input formControlName=\"password2\" name=\"password2\" class=\"form-control\" placeholder=\"Repite el Password\" type=\"password\">\n        </div>\n        <!-- form-group// -->\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block\">Aceptar</button>\n        </div>\n        <!-- form-group// -->\n        <p class=\"text-center\">Tienes una Cuenta? <a href=\"\">Log In</a> </p>\n    </form>\n</article>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/entrada/entrada.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entrada/entrada.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEntradaEntradaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg fixed-top\" id=\"up\">\n    <img src=\"./assets/img/servitodo.png\" class=\"img-10 img-circle pointer\" width=\"160\" height=\"30\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto\">\n            <div class=\"login\">\n                <a routerLink=\"/login\" class=\"login-btn\"><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i><span class=\"d-none d-md-inline-block\">Login</span></a>\n                <a> |||  </a>\n                <a routerLink=\"/decision\" class=\"signup-btn\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i><span class=\"d-none d-md-inline-block\">Registrate</span></a></div>\n        </ul>\n\n    </div>\n</nav>\n\n<section class=\"wrapper fixed-top\">\n    <div class=\"overlays\"></div>\n    <!--Mascara de imagen-->\n    <div class=\"container h-100\">\n        <div class=\"row h-100 justify-content-between align-items-center\">\n            <div class=\"col-lg-10\">\n                <div class=\"text-center\">\n                    <!-- <p>Aplica tus conocimientos y obten beneficios por ello, consige proyectos y aprovecha tu tiempo al máximo . -->\n                    <!-- </p> -->\n                    <form (ngSubmit)=\"onkeypress(input.value)\">\n\n                        <div class=\"d-flex align-items-start\">\n                            <h5>Haz que tus proyectos se hagan realidad.</h5>\n                        </div>\n                        <div class=\"card-body row no-gutters align-items-center\">\n                            <div class=\"col-auto\">\n                                <i class=\"fas fa-search h4 text-body\"></i>\n                            </div>\n                            <!--end of col-->\n                            <div class=\"col\">\n                                <input class=\"form-control form-control-lg form-control-borderless\" #input (keyup.enter)=\"onkeypress(input.value)\" type=\"search\" placeholder=\"Busca Aqui...\">\n                            </div>\n                            <!--end of col-->\n                            <div class=\"col-auto\">\n                                <button class=\"btn btn-lg btn-success\" type=\"submit\">Empezar</button>\n                            </div>\n                            <!--end of col-->\n                        </div>\n                    </form>\n\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"cuerpo mt-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius magni, esse quod dolores veritatis facilis cum ratione aliquam fugit iure laudantium eaque atque eum cupiditate, labore necessitatibus repudiandae a molestiae.\n\n\n            </div>\n\n        </div>\n\n    </div>\n</section>\n\n\n<!-- <h2>STYLE 1</h2> -->\n\n<!-- PRICING TABLE STYLE 1-->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3 col-sm-6 col-xs-12 float-shadow\">\n            <div class=\"price_table_container\">\n                <!-- <div class=\"price_table_heading\">Starter</div> -->\n                <img src=\"./assets/img/IconoXTesis4.jpg\" class=\"center-block img-circle pointer\" width=\"200\" height=\"200\">\n                <!-- <div class=\"price_table_body\">\n                    <div class=\"price_table_row cost warning-bg\"><strong>$ 19</strong><span>/MONTH</span></div>\n                    <div class=\"price_table_row\">1 Website</div>\n                    <div class=\"price_table_row\">10 GB Storage</div>\n                    <div class=\"price_table_row\">10 GB Bandwidth</div>\n                    <div class=\"price_table_row\">10 Email Addresses</div>\n                    <div class=\"price_table_row\">Free Backup</div>\n                    <div class=\"price_table_row\">Full Time Support</div>\n                </div> -->\n                <a href=\"#\" class=\"btn btn-warning btn-lg btn-block\">Sign Up</a>\n            </div>\n        </div>\n\n        <div class=\"col-md-3 col-sm-6 col-xs-12 float-shadow\">\n            <div class=\"price_table_container\">\n                <!-- <div class=\"price_table_heading\">Basic</div> -->\n\n                <img src=\"./assets/img/IconoXTesis3.jpg\" class=\"center-block img-circle pointer\" width=\"200\" height=\"200\">\n                <!-- <div class=\"price_table_body\">\n                    <div class=\"price_table_row cost primary-bg\"><strong>$ 29</strong><span>/MONTH</span></div>\n                    <div class=\"price_table_row\">10 Websites</div>\n                    <div class=\"price_table_row\">100 GB Storage</div>\n                    <div class=\"price_table_row\">100 GB Bandwidth</div>\n                    <div class=\"price_table_row\">50 Email Addresses</div>\n                    <div class=\"price_table_row\">Free Backup</div>\n                    <div class=\"price_table_row\">Full Time Support</div>\n                </div> -->\n                <a class=\"btn btn-primary btn-lg btn-block\">Ingresa</a>\n            </div>\n        </div>\n\n        <div class=\"col-md-3 col-sm-6 col-xs-12 float-shadow\">\n            <div class=\"price_table_container\">\n                <!-- <div class=\"price_table_heading\">Premium</div> -->\n                <img src=\"./assets/img/IconoXTesis5.jpg\" class=\"center-block img-circle pointer\" width=\"200\" height=\"200\">\n                <!-- <div class=\"price_table_body\">\n                    <div class=\"price_table_row cost success-bg\"><strong>$ 39</strong><span>/MONTH</span></div>\n                    <div class=\"price_table_row\">100 Websites</div>\n                    <div class=\"price_table_row\">1 TB Storage</div>\n                    <div class=\"price_table_row\">1 TB Bandwidth</div>\n                    <div class=\"price_table_row\">100 Email Addresses</div>\n                    <div class=\"price_table_row\">Free Backup</div>\n                    <div class=\"price_table_row\">Full Time Support</div>\n                </div> -->\n                <a href=\"#\" class=\"btn btn-success btn-lg btn-block\">Sign Up</a>\n            </div>\n        </div>\n\n        <div class=\"col-md-3 col-sm-6 col-xs-12 float-shadow\">\n            <div class=\"price_table_container\">\n                <!-- <div class=\"price_table_heading\">Master</div> -->\n                <img src=\"./assets/img/IconoXTesis6.jpg\" class=\"center-block img-circle pointer\" width=\"200\" height=\"200\">\n                <!-- <div class=\"price_table_body\">\n                    <div class=\"price_table_row cost info-bg\"><strong>$ 60</strong><span>/MONTH</span></div>\n                    <div class=\"price_table_row\">Unlimited Websites</div>\n                    <div class=\"price_table_row\">10 TB Storage</div>\n                    <div class=\"price_table_row\">100 TB Bandwidth</div>\n                    <div class=\"price_table_row\">1000 Email Addresses</div>\n                    <div class=\"price_table_row\">Free Backup</div>\n                    <div class=\"price_table_row\">Full Time Support</div>\n                </div> -->\n                <a href=\"#\" class=\"btn btn-info btn-lg btn-block\">Sign Up</a>\n            </div>\n        </div>\n    </div>\n</div>\n<br>\n<br>\n\n<!-- PRICING TABLE STYLE 1-->\n\n\n<section id=\"footer\">\n    <div class=\"container\">\n        <div class=\"row text-center text-xs-center text-sm-left text-md-left\">\n            <div class=\"col-xs-12 col-sm-4 col-md-4\">\n                <h5>Quick links</h5>\n                <ul class=\"list-unstyled quick-links\">\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\n                </ul>\n            </div>\n            <div class=\"col-xs-12 col-sm-4 col-md-4\">\n                <h5>Quick links</h5>\n                <ul class=\"list-unstyled quick-links\">\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\n                </ul>\n            </div>\n            <div class=\"col-xs-12 col-sm-4 col-md-4\">\n                <h5>Quick links</h5>\n                <ul class=\"list-unstyled quick-links\">\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n                    <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n                    <li><a href=\"https://wwwe.sunlimetech.com\" title=\"Design and developed by\"><i class=\"fa fa-angle-double-right\"></i>Imprint</a></li>\n                </ul>\n            </div>\n        </div>\n        <!-- <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\n                <ul class=\"list-unstyled list-inline social text-center\">\n                    <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-facebook\"></i></a></li>\n                    <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-twitter\"></i></a></li>\n                    <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-instagram\"></i></a></li>\n                    <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-google-plus\"></i></a></li>\n                    <li class=\"list-inline-item\"><a href=\"javascript:void();\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\n                </ul>\n            </div>\n            <hr>\n        </div> -->\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white\">\n                <p><u><a href=\"https://www.nationaltransaction.com/\">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>\n                <p class=\"h6\">&copy All right Reversed.<a class=\"text-green ml-2\" href=\"https://www.sunlimetech.com\" target=\"_blank\">Sunlimetech</a></p>\n            </div>\n            <hr>\n        </div>\n    </div>\n</section>\n\n\n<script>\n    $(window).scroll(function() {\n        if ($(this).scrollTop() > 50) {\n\n            $('.navbar').css('background', '#263238');\n\n        } else {\n            $('.navbar').css('background', 'transparent');\n        }\n    });\n</script>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/entrada/listaprovee.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entrada/listaprovee.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEntradaListaproveeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top-bar\">\n    <div class=\"container\">\n        <div class=\"row d-flex align-items-center\">\n            <div class=\"col-md-6 d-md-block d-none\">\n                <img src=\"./assets/img/servitodo.png\" class=\"img-10 img-circle pointer\" width=\"160\" height=\"30\">\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"d-flex justify-content-md-end justify-content-between\">\n                    <!-- <ul class=\"list-inline contact-info d-block d-md-none\">\n                        <li class=\"list-inline-item\"><a routerLink=\"/login\"><i class=\"fa fa-phone\"></i></a></li>\n                        <li class=\"list-inline-item\"><a routerLink=\"/decision\"><i class=\"fa fa-envelope\"></i></a></li>\n                    </ul> -->\n                    <div class=\"login\"><a routerLink=\"/login\" class=\"login-btn\"><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i><span class=\"d-none d-md-inline-block\">Loging</span></a>\n                        <a routerLink=\"/decision\" class=\"signup-btn\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i><span class=\"d-none d-md-inline-block\">Registrarce</span></a></div>\n                    <ul class=\"social-custom list-inline\">\n                        <!-- <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li> -->\n                        <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>\n                        <!-- <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-envelope\"></i></a></li> -->\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"card shadow\">\n            <div class=\"card-header border-0\">\n                <h3 class=\"mb-0\">Lista de Proveedores</h3>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table align-items-center table-flush\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">Usuario</th>\n                            <th scope=\"col\">Perfil</th>\n                            <th scope=\"col\">Esperiencia</th>\n                            <th scope=\"col\">Imagen</th>\n                            <th scope=\"col\">Acciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let datas of data\">\n                            <!-- , let indice=index -->\n                            <td>\n                                <a [routerLink]=\"['/previous', datas.Iduser]\"> {{ datas.nombre }} </a>\n                                <!-- {{datas[\"Iduser\"]}} -->\n                            </td>\n                            <td>\n                                <!-- <span class=\"badge badge-dot mr-4\">\n                        <i class=\"bg-warning\"></i> pending\n                      </span> -->\n                                {{ datas.vocacion }}\n                            </td>\n                            <td>\n                                {{datas.competencias}}\n                            </td>\n                            <td>\n                                <img [src]=\"datas.img | imagen\" class=\"img-10 img-circle pointer\" width=\"50\" height=\"50\">\n                            </td>\n\n                            <td>\n                                <button [routerLink]=\"['/addpedidos', datas.Iduser]\" class=\"btn btn-primary listar-btn\">  \n                                        <i class=\"fa fa-edit\"></i>\n                                      </button>\n\n                            </td>\n\n                    </tbody>\n                </table>\n                <!-- <button (click)=\"cambiarDesde(-1)\" class=\"btn btn-secondary\">\n                    Atras\n                  </button>\n\n                <button (click)=\"cambiarDesde(1)\" class=\"btn btn-secondary\">\n                      Siguientes\n                  </button> -->\n            </div>\n            <!-- <div class=\"card-footer py-4\">\n                <nav aria-label=\"...\">\n                    <ul class=\"pagination justify-content-end mb-0\">\n                        <li class=\"page-item disabled\">\n                            <a class=\"page-link\" href=\"javascript:void(0)\" tabindex=\"-1\">\n                                <i class=\"fas fa-angle-left\"></i>\n                                <span class=\"sr-only\">Previous</span>\n                            </a>\n                        </li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"javascript:void(0)\">1</a>\n                        </li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"javascript:void(0)\">2 <span class=\"sr-only\">(current)</span></a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">3</a></li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"javascript:void(0)\">\n                                <i class=\"fas fa-angle-right\"></i>\n                                <span class=\"sr-only\">Next</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n            </div> -->\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addpedido/addpedido.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addpedido/addpedido.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddpedidoAddpedidoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container text-center\">\n    <div class=\"price-box\">\n        <div class=\"row\">\n            <div class=\"col-gl-12\">\n                <form ngNativeValidate #f=\"ngForm\" (ngSubmit)=\"guardarDatos( f )\" ngNativeValidate class=\"form-horizontal form-pricing\" role=\"form\">\n                    <div class=\"price-form \">\n\n                        <div class=\"form-group\">\n                            <div class=\"row justify-content-center\">\n                                <div class=\"col-gl-12\">\n                                    <label for=\"amount_amirol\" class=\"control-label\">Monto (Lps): </label>\n                                    <span class=\"help-text\">Agregar el Monto Acordado</span>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <input ngModel name=\"valor\" type=\"text\" id=\"amount_amirol\" class=\"form-control\">\n                                </div>\n                            </div>\n                        </div>\n                        <div style=\"margin-top:30px\"></div>\n                        <hr class=\"style \">\n\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-12\">\n                                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Proceder <span class=\"glyphicon glyphicon-chevron-right\"></span></button>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-12\">\n                                <img src=\"https://github.com/AmirolAhmad/Bootstrap-Calculator/blob/master/images/payment.png?raw=true\" class=\"img-responsive payment\" />\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n\n<script src=\"https://code.jquery.com/ui/1.10.4/jquery-ui.min.js \"></script>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dasboard/dasboard.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dasboard/dasboard.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDasboardDasboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"container d-flex align-items-center flex-column\">\n    <img class=\"masthead-avatar mb-5\" src=\"./assets/img/trabajador.jpg\" alt=\"\" width=\"200\" height=\"200\">\n\n \n    <h1 class=\"masthead-heading text-uppercase mb-0\">TODO LO QUE BUSCAS ESTA AQUI</h1>\n    <br>\n    <h2> </h2>\n\n    <div class=\"divider-custom divider-light\">\n        <div class=\"divider-custom-line\"></div>\n        <div class=\"divider-custom-icon\">\n            <i class=\"fas fa-star\"></i>\n        </div>\n        <div class=\"divider-custom-line\"></div>\n    </div>\n\n\n    <p class=\"masthead-subheading font-weight-light mb-0\">Graphic Artist - Web Designer - Illustrator</p>\n</div> -->\n\n<div class=\"container d-flex align-items-center flex-column\">\n    <div class=\"row \">\n\n        <div class=\"tab-content col-md-6 \">\n            <div role=\"tabpanel \" class=\"tab-pane profile-pane active \" id=\"profile \">\n                <div>\n                    <div>\n                        <div class=\"header \">\n                            <h5>Informacion de Perfil</h5>\n                        </div>\n                        <div class=\"content \">\n                            <div class=\"row \">\n                                <img *ngIf=\"!imagenTemp\" [src]=\"usuario[0].img | imagen\" class=\"w150\" width=\"120\" height=\"120\">\n                                <img *ngIf=\"imagenTemp\" [src]=\"imagenTemp\" class=\"w150\">\n                                <div class=\"col-sm-8 \">\n                                    <h6>Nombre: {{usuario[0].nombre}}</h6>\n                                    <h6>Ocupacion: {{usuario[0].vocacion}}</h6>\n                                </div>\n                            </div>\n                            <div class=\"row \">\n                                <h5 class=\"col-sm-3 col-sm-offset-1 col \">Saldo Actual</h5>\n                                <h5 class=\"col-sm-4 col \">Trabajos Realizados</h5>\n\n                                <h4 class=\"col-sm-10 col-sm-offset-1 title \">Supera tus Metas</h4>\n                                <div id=\"supportedCauses \" class=\"col-sm-10 col-sm-offset-1 \">\n                                    <div id=\"pane1 \" class=\"cause-info \">\n                                        <p>Escalarás posiciones mientras mejor sea tu desempeño. Gana puntos mejora tu perfil, obtén beneficios y llega a más y mejores clientes.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"header \">\n                                <h5>Inforacion de Tu Cuenta</h5>\n                            </div>\n                            <div class=\"content \">\n                                <div class=\"row\">\n\n                                    <div class=\"col-md-8\">\n\n                                        <h4>Tu Nivel</h4>\n\n                                        <h6>Puntuacion: {{ valor.puntuacion }} </h6>\n\n                                        <h6>Trabajos Realizados: {{ pedido }} </h6>\n                                        <div class=\"progress mb-4\" style=\"height: 6px;\">\n                                            <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" ng-style=\"{width: (valor +'%')}\"></div>\n                                        </div>\n\n                                        <form>\n                                            <p class=\"clasificacion\">\n                                                <input id=\"radio1\" type=\"radio\" name=\"estrellas\" value=\"5\">\n                                                <!--\n                                              --><label for=\"radio1\">★</label>\n                                                <!--\n                                              --><input id=\"radio2\" type=\"radio\" name=\"estrellas\" value=\"4\">\n                                                <!--\n                                              --><label for=\"radio2\">★</label>\n                                                <!--\n                                              --><input id=\"radio3\" type=\"radio\" name=\"estrellas\" value=\"3\">\n                                                <!--\n                                              --><label for=\"radio3\">★</label>\n                                                <!--\n                                              --><input id=\"radio4\" type=\"radio\" name=\"estrellas\" value=\"2\">\n                                                <!--\n                                              --><label for=\"radio4\">★</label>\n                                                <!--\n                                              --><input id=\"radio5\" type=\"radio\" name=\"estrellas\" value=\"1\">\n                                                <!--\n                                              --><label for=\"radio5\">★</label>\n                                            </p>\n                                        </form>\n\n                                        <!-- <div class=\"col-sm-5 col-sm-offset-4 search-bar \">\n                                            <h3>Donation Reciepts</h3>\n                                            <input type=\"text \">\n                                            <span class=\"input-group-btn \">\n                                            <button class=\"btn btn-default \"><span class=\"glyphicon glyphicon-search \"></span></button>\n                                            </span>\n                                        </div> -->\n                                    </div>\n\n\n                                    <h3 class=\"col-sm-10 col-sm-offset-1 title \">Ingresos</h3>\n                                    <div class=\"col-sm-4 col-sm-offset-1 membership-info \">\n                                        <h5>Total Obtenido</h5>\n                                    </div>\n                                    <div class=\"col-sm-6 \">\n                                        <h5>{{ racaudado }}</h5>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div role=\"tabpanel \" class=\"tab-pane \" id=\"statistics \">\n                    Estadisticas\n                </div>\n                <div role=\"tabpanel \" class=\"tab-pane \" id=\"settings \">\n                    Configuracion\n                </div>\n                <!-- <div role=\"tabpanel \" class=\"tab-pane help-pane \" id=\"help \">\n             \n                    <div class=\"jumbotron jumbotron-sm \">\n                        <div class=\"container \">\n                            <div class=\"row \">\n                                <div class=\"col-sm-12 col-lg-12 \">\n                                    <h1 class=\"h1 \">Contact us <small>Feel free to contact us</small></h1>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"container \">\n                        <div class=\"row \">\n                            <div class=\"col-md-8 \">\n                                <div class=\"well well-sm \">\n                                    <form>\n                                        <div class=\"row \">\n                                            <div class=\"col-md-6 \">\n                                                <div class=\"form-group \">\n                                                    <label for=\"name \">Company Name</label>\n                                                    <input type=\"text \" class=\"form-control \" id=\"name \" placeholder=\"Enter name \" required=\"required \" />\n                                                </div>\n                                                <div class=\"form-group \">\n                                                    <label for=\"email \">Email Address</label>\n                                                    <div class=\"input-group \">\n                                                        <span class=\"input-group-addon \">\n                                                        <span class=\"glyphicon glyphicon-envelope \"></span>\n                                                        </span>\n                                                        <input type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Enter email \" required=\"required \" />\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group \">\n                                                    <label for=\"subject \">Subject</label>\n                                                    <select id=\"subject \" name=\"subject \" class=\"form-control \" required=\"required \">\n                                                    <option value=\"na \" selected=\" \">Choose One:</option>\n                                                    <option value=\"service \">General Customer Service</option>\n                                                    <option value=\"suggestions \">Suggestions</option>\n                                                    <option value=\"product \">Product Support</option>\n                                                </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6 \">\n                                                <div class=\"form-group \">\n                                                    <label for=\"name \">Message</label>\n                                                    <textarea name=\"message \" id=\"message \" class=\"form-control \" rows=\"9 \" cols=\"25 \" required=\"required \" placeholder=\"Message \"></textarea>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-12 \">\n                                                <button type=\"submit \" class=\"btn btn-primary pull-right \" id=\"btnContactUs \">Send Message</button>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 \">\n                                <form>\n                                    <legend><span class=\"glyphicon glyphicon-globe \"></span>Our office</legend>\n                                    <address>\n                                    <strong>Givingest</strong><br>\n                                    795 Folsom Ave, Suite 600<br>\n                                    San Francisco, CA 94107<br>\n                                    <abbr title=\"Phone \">P:</abbr>\n                                    (123) 456-7890\n                                </address>\n                                    <address>\n                                    <strong>Full Name</strong><br>\n                                    <a href=\"mailto:# \">first.last@example.com</a>\n                                </address>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                \n                </div> -->\n            </div>\n        </div>\n    </div>\n\n    <script>\n        $(function() {\n            var toggleFunction;\n            $('.toggle-handle').click(toggleFunction = function() {\n                var area = $('#' + $(this).attr('data-area'));\n                if (area.hasClass('expanded')) {\n                    area.removeClass('expanded');\n                } else {\n                    area.addClass('expanded');\n                }\n                $(this).blur();\n                return false;\n            });\n\n            $('#supportedCauses').append(\n                $(document.createElement('div')).attr('id', 'pane4').addClass('cause-info').append(\n                    $(document.createElement('div')).append(\n                        $(document.createElement('img')).attr('src', 'http://lorempixel.com/420/420/people'),\n                        $(document.createElement('div')).append(\n                            $(document.createElement('h4')).text('[Name]'),\n                            $(document.createElement('h4')).text('[Cause]')\n                        ),\n                        $(document.createElement('div')).append(\n                            $(document.createElement('h4')).text('[X] Votes')\n                        )\n                    ),\n                    $(document.createElement('div')).append(\n                        $(document.createElement('h4')).text('About:'),\n                        $(document.createElement('div')).append(\n                            $(document.createElement('p')).text(\n                                'Nam ex ullum assum apeirian, facilisi splendide quo ex. Sea et nonumy accusata, in utinam vocent facilis vix. \\\n                        Cu vix eripuit temporibus mediocritatem, denique theophrastus ne mel, et graecis maiorum mediocritatem per. \\\n                        Magna tacimates sed eu, sit no graeco latine referrentur. Id sed assum quaerendum, apeirian erroribus ut his. Ex mei mazim minimum.'\n                            ),\n                            $(document.createElement('h5')).html('More at <a>[Website]</a>')\n                        ),\n                        $(document.createElement('button')).addClass('btn btn-primary pull-right').text('Give')\n                    ),\n                    $(document.createElement('div')).append(\n                        $(document.createElement('h2')).append(\n                            $(document.createElement('a')).append(\n                                $(document.createElement('span')).addClass('glyphicon glyphicon-chevron-down')\n                            ).attr('href', '#pane4').attr('data-area', 'pane4').click(toggleFunction)\n                        )\n                    )\n                )\n            );\n        });\n    </script>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historialpedidos/historialpedidos.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historialpedidos/historialpedidos.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistorialpedidosHistorialpedidosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-gl-12\">\n    <section id=\"tabs\" class=\"project-tab\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <nav>\n                    <div class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\n                        <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Project Tab 1</a>\n                        <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Project Tab 2</a>\n                        <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#nav-contact\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Project Tab 3</a>\n                    </div>\n                </nav>\n                <div class=\"tab-content\" id=\"nav-tabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\n                        <table class=\"table\" cellspacing=\"0\">\n                            <thead>\n                                <tr>\n                                    <th>Foto</th>\n                                    <th>Usuario</th>\n                                    <th>Fecha del Pedido</th>\n                                    <th>Valor</th>\n                                    <th>Status</th>\n                                    <th>Detalle</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td><a href=\"#\">Workkkkk 152505000</a></td>\n                                    <td>Doe</td>\n                                    <td>john@example.com</td>\n                                </tr>\n                                <tr>\n                                    <td><a href=\"#\">Work 2</a></td>\n                                    <td>Moe</td>\n                                    <td>mary@example.com</td>\n                                </tr>\n                                <tr>\n                                    <td><a href=\"#\">Work 3</a></td>\n                                    <td>Dooley</td>\n                                    <td>july@example.com</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\n                        <table class=\"table\" cellspacing=\"0\">\n                            <thead>\n                                <tr>\n                                    <th>Project Name</th>\n                                    <th>Employer</th>\n                                    <th>Time</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td><a href=\"#\">Work 1</a></td>\n                                    <td>Doe</td>\n                                    <td>john@example.com</td>\n                                </tr>\n                                <tr>\n                                    <td><a href=\"#\">Work 2</a></td>\n                                    <td>Moe</td>\n                                    <td>mary@example.com</td>\n                                </tr>\n                                <tr>\n                                    <td><a href=\"#\">Work 3</a></td>\n                                    <td>Dooley</td>\n                                    <td>july@example.com</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\n                        <table class=\"table\" cellspacing=\"0\">\n                            <thead>\n                                <tr>\n                                    <th>Contest Name</th>\n                                    <th>Date</th>\n                                    <th>Award Position</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td><a href=\"#\">Work 1</a></td>\n                                    <td>Doe</td>\n                                    <td>john@example.com</td>\n                                </tr>\n                                <tr>\n                                    <td><a href=\"#\">Work 2</a></td>\n                                    <td>Moe</td>\n                                    <td>mary@example.com</td>\n                                </tr>\n                                <tr>\n                                    <td><a href=\"#\">Work 3</a></td>\n                                    <td>Dooley</td>\n                                    <td>july@example.com</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-lista/main-lista.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-lista/main-lista.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMainListaMainListaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"card shadow\">\n            <div class=\"card-header border-0\">\n                <h3 class=\"mb-0\">Lista de Proveedores de Servicio</h3>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table align-items-center table-flush\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">Usuario</th>\n                            <th scope=\"col\">Perfil</th>\n                            <th scope=\"col\">Esperiencia</th>\n                            <th scope=\"col\">Imagen</th>\n                            <th scope=\"col\">Acciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let datas of data\">\n                            <!-- , let indice=index -->\n                            <td>\n                                <a [routerLink]=\"['/previous', datas['Iduser']]\"> {{ datas['nombre'] }} </a>\n                                <!-- {{datas[\"Iduser\"]}} -->\n                            </td>\n                            <td>\n                                <!-- <span class=\"badge badge-dot mr-4\">\n                        <i class=\"bg-warning\"></i> pending\n                      </span> -->\n                                {{ datas['vocacion'] }}\n                            </td>\n                            <td>\n                                {{datas['competencias']}}\n                            </td>\n                            <td>\n                                <img [src]=\"datas['img'] | imagen\" class=\"img-10 img-circle pointer\" width=\"50\" height=\"50\">\n                            </td>\n\n                            <td>\n                                <button [routerLink]=\"['/addpedidos', datas['Iduser']]\" class=\"btn btn-primary listar-btn\">  \n                                        <i class=\"fa fa-edit\"></i>\n                                      </button>\n\n                            </td>\n\n                    </tbody>\n                </table>\n                <button (click)=\"cambiarDesde(-1)\" class=\"btn btn-secondary\">\n                    Atras\n                  </button>\n\n                <button (click)=\"cambiarDesde(1)\" class=\"btn btn-secondary\">\n                      Siguientes\n                  </button>\n            </div>\n            <!-- <div class=\"card-footer py-4\">\n                <nav aria-label=\"...\">\n                    <ul class=\"pagination justify-content-end mb-0\">\n                        <li class=\"page-item disabled\">\n                            <a class=\"page-link\" href=\"javascript:void(0)\" tabindex=\"-1\">\n                                <i class=\"fas fa-angle-left\"></i>\n                                <span class=\"sr-only\">Previous</span>\n                            </a>\n                        </li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"javascript:void(0)\">1</a>\n                        </li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"javascript:void(0)\">2 <span class=\"sr-only\">(current)</span></a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">3</a></li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"javascript:void(0)\">\n                                <i class=\"fas fa-angle-right\"></i>\n                                <span class=\"sr-only\">Next</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n            </div> -->\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page.component.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    div {\n        border: 10px solid white;\n    }\n</style>\n\n\n\n<div class=\"header\">\n    <app-header></app-header>\n</div>\n<div class=\"wrapper\">\n\n\n    <app-sidebar></app-sidebar>\n    <router-outlet></router-outlet>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedidos/pedidos.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedidos/pedidos.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPedidosPedidosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"card shadow\">\n            <div class=\"card-header border-0\">\n                <h3 class=\"mb-0\">Pedidos de Servicios Solicitados Reciente</h3>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table align-items-center table-flush\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">Imagen</th>\n                            <th scope=\"col\">Usuario</th>\n                            <th scope=\"col\">Fecha</th>\n                            <th scope=\"col\">Status</th>\n                            <th scope=\"col\">Valor</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let datas of pedido\">\n                            <!-- , let indice=index -->\n                            <td>\n                                <img [src]=\"datas['img'] | imagen\" class=\"img-10 img-circle pointer\" width=\"50\" height=\"50\">\n                            </td>\n                            <td>\n                                <!-- <span class=\"badge badge-dot mr-4\">\n                            <i class=\"bg-warning\"></i> pending\n                          </span> -->\n                                {{ datas['user'] }}\n                            </td>\n                            <td>\n                                {{datas['fecha']}}\n                            </td>\n                            <td>\n                                {{ datas['status'] }}\n                            </td>\n                            <td>\n                                {{ datas['valor'] }}\n                            </td>\n\n                            <td>\n                                <button [routerLink]=\"['/userchat', datas['deiduser'], datas['Idpedido']]\" class=\"btn btn-primary listar-btn\">  \n                                    <i class=\"fa fa-edit\"></i>\n                                </button>\n                            </td>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPerfilPerfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Contact Section Form -->\n<div class=\"row animated fadeIn\">\n    <!-- Cuerpo de perfil -->\n    <div class=\"col-lg-6 mx-auto\">\n        <!--    To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->\n        <form #f=\"ngForm\" (ngSubmit)=\"guardarDatos(f)\" ngNativeValidate name=\"sentMessage\" id=\"contactForm\" novalidate=\"novalidate\">\n            <div class=\"control-group\">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n                    <label>Nombre</label>\n                    <input [(ngModel)]=\"usuario[0].nombre\" name=\"nombre\" class=\"form-control\" id=\"nombre\" type=\"text\" placeholder=\"Nombre\" required=\"required\" data-validation-required-message=\"Ingrese su nombre.\">\n                    <p class=\"help-block text-danger\"></p>\n                </div>\n            </div>\n            <div class=\"control-group\">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n                    <label>Email Address</label>\n                    <input [(ngModel)]=\"usuario[0].email\" name=\"email\" class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"Correo Electronico\" required=\"required\" data-validation-required-message=\"Ingrese su Correo.\">\n                    <p class=\"help-block text-danger\"></p>\n                </div>\n            </div>\n            <div class=\"control-group\">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n                    <label>Telefono</label>\n                    <input [(ngModel)]=\"usuario[0].telefono\" name=\"telefono\" class=\" form-control \" id=\"telefono \" type=\"tel \" placeholder=\"Telefono \" required=\"required \" data-validation-required-message=\"Ingrese su numero Telefonico. \">\n                    <p class=\"help-block text-danger \"></p>\n                </div>\n            </div>\n            <div class=\"control-group \">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2 \">\n                    <label>Direccion</label>\n                    <textarea [(ngModel)]=\"usuario[0].direccion\" name=\"direccion\" class=\"form-control \" id=\"direccion \" rows=\"5 \" placeholder=\"Direccion \" required=\"required \" data-validation-required-message=\"Por favor ingrese su Direccion. \"></textarea>\n                    <p class=\"help-block text-danger \"></p>\n                </div>\n            </div>\n\n            <!-- <div class=\"control-group \">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2 \">\n                    <img class=\"masthead-avatar mb-5\" [src]=\"usuario[0].img | imagen\" alt=\"\">\n                </div>\n            </div> -->\n\n\n            <br>\n            <div id=\"success \"></div>\n            <div class=\"form-group \">\n                <button type=\"submit \" class=\"btn btn-primary btn-xl \" id=\"sendMessageButton \">Guardar</button>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-body\" align=\"center\">\n                <h4 class=\"card-title\">Fotografía del usuario</h4>\n                <h6 class=\"card-subtitle\"> {{ usuario[0].user }} </h6>\n\n                <img *ngIf=\"!imagenTemp\" [src]=\"usuario[0].img | imagen\" class=\"w150\" width=\"300\" height=\"300\">\n                <img *ngIf=\"imagenTemp\" [src]=\"imagenTemp\" class=\"w150\">\n\n                <input (change)=\"seleccionImage($event.target.files[0])\" type=\"file\">\n\n                <br><br>\n\n                <button (click)=\"cambiarImagen()\" [disabled]=\"!imagenSubir\" type=\"button\" class=\"btn btn-block btn-success waves-effect waves-light m-r-10\">\n                        <i class=\"fa fa-save\"></i>\n                        Actualizar Foto\n                      </button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfilpro/perfilpro.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfilpro/perfilpro.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPerfilproPerfilproComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Contact Section Form -->\n<div class=\"row animated fadeIn\">\n    <div class=\"wrapper col-lg-1 mx-auto\">\n        <!-- Sidebar -->\n        <nav id=\"sidebar\">\n\n            <div class=\"sidebar-header\">\n                <h3>Menu</h3>\n            </div>\n            <ul class=\"list-unstyled components\">\n                <p>Perfil</p>\n                <li class=\"active\">\n                    <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">Opciones</a>\n                    <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\n                        <li>\n                            <a [routerLink]=\"['/pedidos', usuario[0].Iduser]\">Ver Solicitudes</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Historla de Solicitues</a>\n                        </li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#\">Perfil</a>\n                </li>\n                <li>\n                    <a href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">Configuracion</a>\n                    <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">\n                        <li>\n                            <a href=\"#\">Opciones de Perfil</a>\n                        </li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#\">Portafolio</a>\n                </li>\n                <li>\n                    <a href=\"#\">Contactos</a>\n                </li>\n            </ul>\n        </nav>\n\n    </div>\n\n\n\n    <div class=\"col-lg-6 mx-auto\">\n        <!--    To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->\n        <form #f=\"ngForm\" (ngSubmit)=\"guardarDatos(f)\" ngNativeValidate name=\"sentMessage\" id=\"contactForm\" novalidate=\"novalidate\">\n            <div class=\"control-group\">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n                    <label>Nombre</label>\n                    <input [(ngModel)]=\"usuario[0].nombre\" name=\"nombre\" class=\"form-control\" id=\"nombre\" type=\"text\" placeholder=\"Nombre\" required=\"required\" data-validation-required-message=\"Ingrese su nombre.\">\n                    <p class=\"help-block text-danger\"></p>\n                </div>\n            </div>\n            <div class=\"control-group\">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n                    <label>Email Address</label>\n                    <input [(ngModel)]=\"usuario[0].email\" name=\"email\" class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"Correo Electronico\" required=\"required\" data-validation-required-message=\"Ingrese su Correo.\">\n                    <p class=\"help-block text-danger\"></p>\n                </div>\n            </div>\n            <div class=\"control-group\">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n                    <label>Telefono</label>\n                    <input [(ngModel)]=\"usuario[0].telefono\" name=\"telefono\" class=\" form-control \" id=\"telefono \" type=\"tel \" placeholder=\"Telefono \" required=\"required \" data-validation-required-message=\"Ingrese su numero Telefonico. \">\n                    <p class=\"help-block text-danger \"></p>\n                </div>\n            </div>\n            <div class=\"control-group \">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2 \">\n                    <label>Direccion</label>\n                    <textarea [(ngModel)]=\"usuario[0].direccion\" name=\"direccion\" class=\"form-control \" id=\"direccion \" rows=\"5 \" placeholder=\"Direccion \" required=\"required \" data-validation-required-message=\"Por favor ingrese su Direccion. \"></textarea>\n                    <p class=\"help-block text-danger \"></p>\n                </div>\n            </div>\n\n            <!-- <div class=\"control-group \">\n                <div class=\"form-group floating-label-form-group controls mb-0 pb-2 \">\n                    <img class=\"masthead-avatar mb-5\" [src]=\"usuario[0].img | imagen\" alt=\"\">\n                </div>\n            </div> -->\n\n\n            <br>\n            <div id=\"success \"></div>\n            <div class=\"form-group \">\n                <button type=\"submit \" class=\"btn btn-primary btn-xl \" id=\"sendMessageButton \">Guardar</button>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-body\" align=\"center\">\n                <h4 class=\"card-title\">Fotografía del usuario</h4>\n                <h6 class=\"card-subtitle\"> {{ usuario[0].user }} </h6>\n\n                <img *ngIf=\"!imagenTemp\" [src]=\"usuario[0].img | imagen\" class=\"w150\" width=\"300\" height=\"300\">\n                <img *ngIf=\"imagenTemp\" [src]=\"imagenTemp\" class=\"w150\">\n\n                <input (change)=\"seleccionImage($event.target.files[0])\" type=\"file\">\n\n                <br><br>\n\n                <button (click)=\"cambiarImagen()\" [disabled]=\"!imagenSubir\" type=\"button\" class=\"btn btn-block btn-success waves-effect waves-light m-r-10\">\n                        <i class=\"fa fa-save\"></i>\n                        Actualizar Foto\n                      </button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/previous/previous.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/previous/previous.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPreviousPreviousComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Contact -->\n<section class=\"container\">\n\n    <!--Contact heading-->\n    <h4 class=\"h1 m-0\">Informacion del Perfil</h4>\n    <!--Contact description-->\n    <p class=\"pb-4\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>\n\n    <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-sm-5\">\n            <!--Form with header-->\n            <div class=\"card border-primary rounded-0\">\n                <div class=\"card-header p-0\">\n                    <div class=\"bg-primary text-white text-center py-2\">\n                        <h3><i class=\"fa fa-envelope\"></i> Informacion del Tecnico</h3>\n                        <!-- <p class=\"m-0\">We'll write rarely, but only the best content.</p> -->\n                    </div>\n                </div>\n                <div class=\"card-body p-3\">\n                    <!--Body-->\n                    <div class=\"form-group\">\n                        <!-- <label>Your name</label> -->\n                        <h6>Nombre: {{usuario.nombre}} </h6>\n                        <h6>Ocupacion: {{usuario.vocacion}} </h6>\n                    </div>\n                    <hr>\n                    <h5>Estadisticas</h5>\n                    <label> Calificacion por los Usuarios </label>\n                    <label> Trabajos Finalizados </label>\n                </div>\n            </div>\n            <!--Form with header-->\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-sm-5\">\n            <div class=\"card border-primary rounded-0\">\n                <div class=\"card-header p-0\">\n                    <div class=\"bg-primary text-white text-center py-2\">\n                        <h3>Datos</h3>\n                        <!-- <p class=\"m-0\">We'll write rarely, but only the best content.</p> -->\n                    </div>\n                </div>\n                <div class=\"card-body p-3\">\n                    <!--Body-->\n                    <div class=\"form-group\">\n                        <!-- <label>Your name</label> -->\n                        <h6>Direccion: {{usuario.direccion}} </h6>\n                        <h6>Correo Electronico: {{usuario.email}} </h6>\n                    </div>\n                    <hr>\n                    <h5>Estadisticas</h5>\n                    <label> Calificacion por los Usuarios </label>\n                    <label> Trabajos Finalizados </label>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n    </div>\n    <div class=\"col-sm-2\">\n        <div class=\"button\" style=\"padding-top:18px\">\n            <button [routerLink]=\"['/addpedidos', usuario.Iduser]\" type=\" button \" class=\"btn btn-light-green \">Solicitar Servicio</button>\n\n        </div>\n    </div>\n\n\n</section>\n\n<h3> Comentarios </h3>\n<div class=\"row\">\n\n\n    <tbody>\n        <tr>\n            <!-- , let indice=index -->\n            <td>\n                <!-- <a [routerLink]=\"['/previous', datas['Iduser']]\"> {{ datas['nombre'] }} </a> -->\n                <!-- {{datas[\"Iduser\"]}} -->\n            </td>\n            <td>\n                <!-- <span class=\"badge badge-dot mr-4\">\n        <i class=\"bg-warning\"></i> pending\n      </span> -->\n                <!-- {{ datas['vocacion'] }} -->\n            </td>\n            <td>\n                <!-- {{datas['competencias']}} -->\n            </td>\n            <td>\n                <!-- <img [src]=\"datas['img'] | imagen\" class=\"img-10 img-circle pointer\" width=\"50\" height=\"50\"> -->\n            </td>\n    </tbody>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card col-12 mt-12 mb-12\">\n    <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"100000\">\n        <div class=\"w-100 carousel-inner\" role=\"listbox\">\n            <div class=\"carousel-item active\">\n                <div class=\"carousel-caption\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <img src=\"http://via.placeholder.com/200x200\" alt=\"\" class=\"rounded-circle img-fluid\" />\n                        </div>\n                        <div class=\"col-4\">\n                            <h3>Gives me hope</h3>\n                            <small>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</small>\n                            <small class=\"smallest mute\">- Yayo Dudemous</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"carousel-item\">\n                <div class=\"carousel-caption\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <img src=\"http://via.placeholder.com/200x200\" alt=\"\" class=\"rounded-circle img-fluid\">\n                        </div>\n                        <div class=\"col-4\">\n                            <h3>You will love it.</h3>\n                            <small>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</small>\n                            <small class=\"smallest mute\">- Yayo Dudemous</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"carousel-item\">\n                <div class=\"carousel-caption\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <img src=\"http://via.placeholder.com/200x200\" alt=\"\" class=\"rounded-circle img-fluid\">\n                        </div>\n                        <div class=\"col-md-4\">\n                            <h3>Velvet pouch!</h3>\n                            <small>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</small>\n                            <small class=\"smallest mute\">- Yayo Dudemous</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"float-right navi\">\n            <a class=\"\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon ico\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon ico\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userchat/userchat.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userchat/userchat.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserchatUserchatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Contact -->\n<section class=\"container\">\n\n    <!--Contact heading-->\n    <h4 class=\"h1 m-0\">Detalle del Pedido</h4>\n    <!--Contact description-->\n    <p class=\"pb-4\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>\n\n    <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-sm-5\">\n            <!--Form with header-->\n            <div class=\"card border-primary rounded-0\">\n                <div class=\"card-header p-0\">\n                    <div class=\"bg-primary text-white text-center py-2\">\n                        <h3><i class=\"fa fa-th-large\"></i> Informacion </h3>\n                        <!-- <p class=\"m-0\">We'll write rarely, but only the best content.</p> -->\n                    </div>\n                </div>\n                <div class=\"card-body p-3\">\n                    <!--Body-->\n                    <div class=\"form-group\">\n\n                        <h6>Usuario: {{pedido.deuser}} </h6>\n\n                    </div>\n                    <hr>\n                    <h5>Tema</h5>\n                    <!-- <p>{{pedido.descripcion}}</p> -->\n                    <br>\n                </div>\n            </div>\n            <!--Form with header-->\n        </div>\n        <!--Grid column-->\n\n    </div>\n</section>\n\n<div class=\"card\">\n    <form [formGroup]=\"forma\" (ngSubmit)=\"enviarComent()\">\n        <textarea formControlName=\"comentario\" name=\"comentario\" class=\"form-control\" id=\"comentario\" placeholder=\"Ingrese aqui su comentario\"></textarea>\n        <button type=\"submit\" class=\"btn btn-primary btn-xl\" id=\"sendMessageButton\">Adicionar Comentario</button>\n    </form>\n</div>\n\n<h3> Comentarios </h3>\n\n<div class=\"card\" *ngFor=\"let commt of comentarioss; index as i\">\n    <div class=\"row card-header\">\n        <h6>{{commt.user}}</h6>\n        <div>{{commt.fecha}}</div>\n    </div>\n    <div class=\"card-body\">\n        <p class=\"card-text\">{{commt.comentario}}</p>\n        <a class=\"btn btn-primary\"> Responder </a>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/dataclient/dataclient.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/dataclient/dataclient.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistroDataclientDataclientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content py-5 \">\n    <form [formGroup]=\"forma\" (ngSubmit)=\"GuargarUser()\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 offset-md-1\">\n                    <span class=\"anchor\" id=\"formComplex\"></span>\n                    <hr class=\"my-5\">\n                    <h3>Ingresa tus Datos de Perfil</h3>\n                    <!-- <h1>{{usuario[0].Iduser}}</h1> -->\n                    <!-- form complex example -->\n                    <div class=\"form-row mt-4\">\n                        <!-- <div class=\"col-sm-5 pb-3\">\n                        <label for=\"exampleAccount\">Account #</label>\n                        <input type=\"text\" class=\"form-control\" id=\"exampleAccount\" placeholder=\"XXXXXXXXXXXXXXXX\">\n                    </div>\n                    <div class=\"col-sm-3 pb-3\">\n                        <label for=\"exampleCtrl\">Control #</label>\n                        <input type=\"text\" class=\"form-control\" id=\"exampleCtrl\" placeholder=\"0000\">\n                    </div>\n                    <div class=\"col-sm-4 pb-3\">\n                        <label for=\"exampleAmount\">Amount</label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\"><span class=\"input-group-text\">$</span></div>\n                            <input type=\"text\" class=\"form-control\" id=\"exampleAmount\" placeholder=\"Amount\">\n                        </div>\n                    </div> -->\n                        <div class=\"col-sm-6 pb-3\">\n                            <label for=\"exampleFirst\">Experiencia Laboral</label>\n                            <textarea formControlName=\"expLaboral\" name=\"expLaboral\" class=\"form-control\" id=\"experiencia\"></textarea>\n                        </div>\n                        <div class=\"col-sm-6 pb-3\">\n                            <label for=\"exampleLast\">Conocimientos Basicos</label>\n                            <textarea formControlName=\"conocimientos\" name=\"conocimientos\" class=\"form-control\" id=\"conocimientos\"></textarea>\n                        </div>\n\n                        <!-- <div class=\"col-md-6 pb-3\">\n                            <label for=\"exampleAccount\">Nivel Educativo</label>\n                            <div class=\"form-group small\">\n                                <div class=\"form-check form-check-inline\">\n                                    <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\"> Basico\n                                </label>\n                                </div>\n                                <div class=\"form-check form-check-inline\">\n                                    <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\"> Intermedio\n                                        </label>\n                                </div>\n                                <div class=\"form-check form-check-inline disabled\">\n                                    <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\" > Avanzado\n                                        </label>\n                                </div>\n\n                            </div>\n                        </div> -->\n                        <div class=\"col-md-6 pb-3\">\n                            <label for=\"exampleMessage\">Aptitudes en el Trabajo</label>\n                            <textarea formControlName=\"competencias\" name=\"competencias\" class=\"form-control\" id=\"exampleMessage\"></textarea>\n                            <small class=\"text-info\">\n                                  Agrega aqui tus habilidades al trabajar\n                                </small>\n                        </div>\n                        <!-- <div class=\"col-12\">\n                        <div class=\"form-row\">\n                            <label class=\"col-md col-form-label\" for=\"name\">Generated Id</label>\n                            <input type=\"text\" class=\"form-control col-md-4\" name=\"gid\" id=\"gid\" />\n                            <label class=\"col-md col-form-label\" for=\"name\">Date Assigned</label>\n                            <input type=\"text\" class=\"form-control col-md-4\" name=\"da\" id=\"da\" />\n                        </div>\n                    </div> -->\n                        <div class=\"row\">\n                            <div class=\"col-md-9 col-sm-9 col-xs-12\">\n                                <h3><span class=\"glyphicon glyphicon-cog \"></span> <b>Estas Seguro en Continuar</b></h3>\n                            </div>\n                            <div class=\"col-md-3 col-sm-3 col-xs-12 \">\n                                <button type=\"submit\" class=\"btn bg-danger twhite\">Continua</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"cta-sektion  border py-3\">\n                        <div class=\"container\">\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<!-- <div class=\"footer  py-5  \">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 footer-one\">\n                <img src=\"http://velikorodnov.com/html/autotrader/images/logo.png\" alt=\"Logo\" style=\"width:120px;\">\n\n                <p class=\"pt-4\">Cras sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n                <div class=\"social-icons\">\n                    <a href=\"https://www.facebook.com/\"><i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i></a>\n                    <a href=\"https://twitter.com/\"><i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i></a>\n                    <a href=\"https://plus.google.com/\"><i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"></i></a>\n                    <a href=\"mailto:bootsnipp@gmail.com\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 footer-two\">\n                <h5>Information </h5>\n                <ul class=\"list-unstyled\">\n                    <li><a href=\"maintenance.html\">Maintenance Tips</a></li>\n                    <li><a href=\"contact.html\">Locations</a></li>\n                    <li><a href=\"about.html\">Testimonials</a></li>\n                    <li><a href=\"about.html\">Careers</a></li>\n                    <li><a href=\"about.html\">Partners</a></li>\n                </ul>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 footer-three\">\n                <h5>Helpful Links </h5>\n                <ul class=\"list-unstyled\">\n                    <li><a href=\"maintenance.html\">Maintenance Tips</a></li>\n                    <li><a href=\"contact.html\">Locations</a></li>\n                    <li><a href=\"about.html\">Testimonials</a></li>\n                    <li><a href=\"about.html\">Careers</a></li>\n                    <li><a href=\"about.html\">Partners</a></li>\n                </ul>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 footer-four\">\n                <h5>Helpful Links </h5>\n                <ul class=\"list-unstyled\">\n                    <li><a href=\"maintenance.html\">Maintenance Tips</a></li>\n                    <li><a href=\"contact.html\">Locations</a></li>\n                    <li><a href=\"about.html\">Testimonials</a></li>\n                    <li><a href=\"about.html\">Careers</a></li>\n                    <li><a href=\"about.html\">Partners</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"copyright bglight1 border pt-2\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center\">\n            <p> © 2018 xyz Software Pvt. Ltd. </p>\n        </div>\n    </div>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/dataprovee/dataprovee.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/dataprovee/dataprovee.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistroDataproveeDataproveeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content py-5 \">\n    <form [formGroup]=\"forma\" (ngSubmit)=\"GuargarUser()\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 offset-md-1\">\n                    <span class=\"anchor\" id=\"formComplex\"></span>\n                    <hr class=\"my-5\">\n                    <h3>Ingresa tus Datos de Perfil</h3>\n                    <!-- <h1>{{usuario[0].Iduser}}</h1> -->\n                    <!-- form complex example -->\n                    <div class=\"form-row mt-4\">\n                        <!-- <div class=\"col-sm-5 pb-3\">\n                        <label for=\"exampleAccount\">Account #</label>\n                        <input type=\"text\" class=\"form-control\" id=\"exampleAccount\" placeholder=\"XXXXXXXXXXXXXXXX\">\n                    </div>\n                    <div class=\"col-sm-3 pb-3\">\n                        <label for=\"exampleCtrl\">Control #</label>\n                        <input type=\"text\" class=\"form-control\" id=\"exampleCtrl\" placeholder=\"0000\">\n                    </div>\n                    <div class=\"col-sm-4 pb-3\">\n                        <label for=\"exampleAmount\">Amount</label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\"><span class=\"input-group-text\">$</span></div>\n                            <input type=\"text\" class=\"form-control\" id=\"exampleAmount\" placeholder=\"Amount\">\n                        </div>\n                    </div> -->\n                        <div class=\"col-sm-6 pb-3\">\n                            <label for=\"exampleFirst\">Experiencia Laboral</label>\n                            <textarea formControlName=\"expLaboral\" name=\"expLaboral\" class=\"form-control\" id=\"experiencia\"></textarea>\n                        </div>\n                        <div class=\"col-sm-6 pb-3\">\n                            <label for=\"exampleLast\">Conocimientos Basicos</label>\n                            <textarea formControlName=\"conocimientos\" name=\"conocimientos\" class=\"form-control\" id=\"conocimientos\"></textarea>\n                        </div>\n\n                        <!-- <div class=\"col-md-6 pb-3\">\n                            <label for=\"exampleAccount\">Nivel Educativo</label>\n                            <div class=\"form-group small\">\n                                <div class=\"form-check form-check-inline\">\n                                    <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\"> Basico\n                                </label>\n                                </div>\n                                <div class=\"form-check form-check-inline\">\n                                    <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\"> Intermedio\n                                        </label>\n                                </div>\n                                <div class=\"form-check form-check-inline disabled\">\n                                    <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\" > Avanzado\n                                        </label>\n                                </div>\n\n                            </div>\n                        </div> -->\n                        <div class=\"col-md-6 pb-3\">\n                            <label for=\"exampleMessage\">Aptitudes en el Trabajo</label>\n                            <textarea formControlName=\"competencias\" name=\"competencias\" class=\"form-control\" id=\"exampleMessage\"></textarea>\n                            <small class=\"text-info\">\n                                  Agrega aqui tus habilidades al trabajar\n                                </small>\n                        </div>\n                        <!-- <div class=\"col-12\">\n                        <div class=\"form-row\">\n                            <label class=\"col-md col-form-label\" for=\"name\">Generated Id</label>\n                            <input type=\"text\" class=\"form-control col-md-4\" name=\"gid\" id=\"gid\" />\n                            <label class=\"col-md col-form-label\" for=\"name\">Date Assigned</label>\n                            <input type=\"text\" class=\"form-control col-md-4\" name=\"da\" id=\"da\" />\n                        </div>\n                    </div> -->\n                        <div class=\"row\">\n                            <div class=\"col-md-9 col-sm-9 col-xs-12\">\n                                <h3><span class=\"glyphicon glyphicon-cog \"></span> <b>Estas Seguro en Continuar</b></h3>\n                            </div>\n                            <div class=\"col-md-3 col-sm-3 col-xs-12 \">\n                                <button type=\"submit\" class=\"btn bg-danger twhite\">Continua</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"cta-sektion  border py-3\">\n                        <div class=\"container\">\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<!-- <div class=\"footer  py-5  \">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 footer-one\">\n                <img src=\"http://velikorodnov.com/html/autotrader/images/logo.png\" alt=\"Logo\" style=\"width:120px;\">\n\n                <p class=\"pt-4\">Cras sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n                <div class=\"social-icons\">\n                    <a href=\"https://www.facebook.com/\"><i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i></a>\n                    <a href=\"https://twitter.com/\"><i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i></a>\n                    <a href=\"https://plus.google.com/\"><i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"></i></a>\n                    <a href=\"mailto:bootsnipp@gmail.com\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 footer-two\">\n                <h5>Information </h5>\n                <ul class=\"list-unstyled\">\n                    <li><a href=\"maintenance.html\">Maintenance Tips</a></li>\n                    <li><a href=\"contact.html\">Locations</a></li>\n                    <li><a href=\"about.html\">Testimonials</a></li>\n                    <li><a href=\"about.html\">Careers</a></li>\n                    <li><a href=\"about.html\">Partners</a></li>\n                </ul>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 footer-three\">\n                <h5>Helpful Links </h5>\n                <ul class=\"list-unstyled\">\n                    <li><a href=\"maintenance.html\">Maintenance Tips</a></li>\n                    <li><a href=\"contact.html\">Locations</a></li>\n                    <li><a href=\"about.html\">Testimonials</a></li>\n                    <li><a href=\"about.html\">Careers</a></li>\n                    <li><a href=\"about.html\">Partners</a></li>\n                </ul>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 footer-four\">\n                <h5>Helpful Links </h5>\n                <ul class=\"list-unstyled\">\n                    <li><a href=\"maintenance.html\">Maintenance Tips</a></li>\n                    <li><a href=\"contact.html\">Locations</a></li>\n                    <li><a href=\"about.html\">Testimonials</a></li>\n                    <li><a href=\"about.html\">Careers</a></li>\n                    <li><a href=\"about.html\">Partners</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"copyright bglight1 border pt-2\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center\">\n            <p> © 2018 xyz Software Pvt. Ltd. </p>\n        </div>\n    </div>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/buscar/buscar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/buscar/buscar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedBuscarBuscarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-sm-12 mx-auto\" style=\"width:100%; height:auto;\">\n\n            <!-- <div class=\"col-12\" id=\"buscar\">\n                            <label for=\"inicia\">Buscar:  </label>\n                            <input name=\"inicia\" type=\"text\" class=\"form-control\" id=\"inicia\" placeholder=\"Encuentralo..\">\n                            <button type=\"button\" class=\"btn btn-primary\" id=\"btn\">Buscar</button>\n                        </div> -->\n            <div class=\"form-group floating-label-form-group controls mb-0 pb-2\">\n                <label>Encontraras todo tipo de Servicios </label>\n                <br>\n                <label>Buscar: </label>\n                <!-- <input (keydow.enter)=\"onKeypress($event)\" id=\"buscar\" type=\"text\" placeholder=\"Buscar\" required=\"required\">\n                <p class=\"help-block text-danger\"></p> -->\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    .menu {\n        background-color: rgb(102, 119, 119);\n        color: white;\n        padding: 0px;\n        position: 20px;\n    }\n</style>\n\n\n<header class=\"topbar\">\n\n    <div class=\"row-3\" id=\"login\">\n        <div>\n            <label *ngIf=\"role == 'USER'\"> | <a routerLink=\"/perfil\"> <i class=\"fa fa-cog\" aria-hidden=\"true\"></i> Perfil</a>  </label>\n            <label *ngIf=\"role == 'PROV'\"> | <a routerLink=\"/perfilpro\"> <i class=\"fa fa-cog\" aria-hidden=\"true\"></i> Perfil</a>  </label>\n            <label> | <a (click)=\"usuarioService.logout()\"> <i class=\"fa fa-power-off\" aria-hidden=\"true\"></i> Cerrar Cesion </a> | </label>\n        </div>\n    </div>\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark text-white\">\n        <a class=\"navbar-brand\" routerLink=\"/dasboard\">ServiTodo</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">Sobre Nosotros</a>\n                </li>\n                <!-- <div class=\"dropdown\">\n                    <a class=\"btn btn-secondary dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\">\n                      Dropdown link\n                    </a>\n\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n                        <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                        <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                        <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                    </ul>\n                </div> -->\n\n            </ul>\n            <form (ngSubmit)=\"onkeypress(input.value)\" class=\"form-inline my-2 my-lg-0\">\n                <input #input (keyup.enter)=\"onkeypress(input.value)\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Buscar\" aria-label=\"Search\">\n            </form>\n        </div>\n    </nav>\n\n</header>\n\n\n<!--===================\n        Header\n        =======================-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <aside class=\"sidebar left\">\n\n    <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n            <img src=\"http://via.placeholder.com/160x160\" class=\"rounded-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n            <p>bootstrap develop</p>\n            <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n        </div>\n    </div>\n    <ul class=\"list-sidebar bg-defoult\">\n        <li>\n            <a href=\"#\" data-toggle=\"collapse\" data-target=\"#dashboard\" class=\"collapsed active\"> <i class=\"fa fa-th-large\"></i> <span class=\"nav-label\"> Dashboards </span> <span class=\"fa fa-chevron-left pull-right\"></span> </a>\n            <ul class=\"sub-menu collapse\" id=\"dashboard\">\n                <li class=\"active\"><a href=\"#\">CSS3 Animation</a></li>\n                <li><a href=\"#\">General</a></li>\n                <li><a href=\"#\">Buttons</a></li>\n                <li><a href=\"#\">Tabs & Accordions</a></li>\n                <li><a href=\"#\">Typography</a></li>\n                <li><a href=\"#\">FontAwesome</a></li>\n                <li><a href=\"#\">Slider</a></li>\n                <li><a href=\"#\">Panels</a></li>\n                <li><a href=\"#\">Widgets</a></li>\n                <li><a href=\"#\">Bootstrap Model</a></li>\n            </ul>\n        </li>\n        <li> <a href=\"#\"><i class=\"fa fa-diamond\"></i> <span class=\"nav-label\">Layouts</span></a> </li>\n        <li>\n            <a href=\"#\" data-toggle=\"collapse\" data-target=\"#products\" class=\"collapsed active\"> <i class=\"fa fa-bar-chart-o\"></i> <span class=\"nav-label\">Graphs</span> <span class=\"fa fa-chevron-left pull-right\"></span> </a>\n            <ul class=\"sub-menu collapse\" id=\"products\">\n                <li class=\"active\"><a href=\"#\">CSS3 Animation</a></li>\n                <li><a href=\"#\">General</a></li>\n                <li><a href=\"#\">Buttons</a></li>\n                <li><a href=\"#\">Tabs & Accordions</a></li>\n                <li><a href=\"#\">Typography</a></li>\n                <li><a href=\"#\">FontAwesome</a></li>\n                <li><a href=\"#\">Slider</a></li>\n                <li><a href=\"#\">Panels</a></li>\n                <li><a href=\"#\">Widgets</a></li>\n                <li><a href=\"#\">Bootstrap Model</a></li>\n            </ul>\n        </li>\n        <li> <a href=\"#\"><i class=\"fa fa-laptop\"></i> <span class=\"nav-label\">Grid options</span></a> </li>\n        <li> <a href=\"#\" data-toggle=\"collapse\" data-target=\"#tables\" class=\"collapsed active\"><i class=\"fa fa-table\"></i> <span class=\"nav-label\">Tables</span><span class=\"fa fa-chevron-left pull-right\"></span></a>\n            <ul class=\"sub-menu collapse\" id=\"tables\">\n                <li><a href=\"\"> Static Tables</a></li>\n                <li><a href=\"\"> Data Tables</a></li>\n                <li><a href=\"\"> Foo Tables</a></li>\n                <li><a href=\"\"> jqGrid</a></li>\n            </ul>\n        </li>\n        <li> <a href=\"#\" data-toggle=\"collapse\" data-target=\"#e-commerce\" class=\"collapsed active\"><i class=\"fa fa-shopping-cart\"></i> <span class=\"nav-label\">E-commerce</span><span class=\"fa fa-chevron-left pull-right\"></span></a>\n            <ul class=\"sub-menu collapse\" id=\"e-commerce\">\n                <li><a href=\"\"> Products grid</a></li>\n                <li><a href=\"\"> Products list</a></li>\n                <li><a href=\"\">Product edit</a></li>\n                <li><a href=\"\"> Product detail</a></li>\n                <li><a href=\"\">Cart</a></li>\n                <li><a href=\"\"> Orders</a></li>\n                <li><a href=\"\"> Credit Card form</a> </li>\n            </ul>\n        </li>\n        <li> <a href=\"\"><i class=\"fa fa-pie-chart\"></i> <span class=\"nav-label\">Metrics</span> </a></li>\n        <li> <a href=\"#\"><i class=\"fa fa-files-o\"></i> <span class=\"nav-label\">Other Pages</span></a> </li>\n        <li> <a href=\"#\"><i class=\"fa fa-files-o\"></i> <span class=\"nav-label\">Other Pages</span></a> </li>\n        <li> <a href=\"#\"><i class=\"fa fa-files-o\"></i> <span class=\"nav-label\">Other Pages</span></a> </li>\n        <li> <a href=\"#\"><i class=\"fa fa-files-o\"></i> <span class=\"nav-label\">Other Pages</span></a> </li>\n        <li> <a href=\"#\"><i class=\"fa fa-files-o\"></i> <span class=\"nav-label\">Other Pages</span></a> </li>\n    </ul>\n\n</aside>\n\n<script>\n    $(document).ready(function() {\n        $('.button-left').click(function() {\n            $('.sidebar').toggleClass('fliph');\n        });\n\n    });\n</script> -->\n\n<aside class=\"left-sidebar\">\n    <div class=\"scroll-sidebar\">\n        <nav class=\"sidebar-nav\">\n            <div class=\"mini-submenu\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </div>\n            <div class=\"list-group\">\n                <div class=\"header\">\n                    <i class=\"fa fa-desktop\" aria-hidden=\"true\"></i> Opciones\n                </div>\n                <a routerLink=\"/dasboard\" class=\"list-group-item active-month\">\n                    <i class=\"fa fa-folder-open\"></i> Home\n                </a>\n                <a routerLink=\"/perfil\" class=\"list-group-item\">\n                    <i class=\"fa fa-cog\"></i> Perfil\n                </a>\n                <a [routerLink]=\"['/pedidos', usuario[0].Iduser]\" class=\"list-group-item\">\n                    <i class=\"fa fa-handshake-o\"></i> Actividades <span class=\"badge\"> {{ pendiente }} </span>\n                </a>\n                <a href=\"#\" class=\"list-group-item\">\n                    <i class=\"fa fa-history\"></i> Historial de Actividades\n                </a>\n                <a href=\"#\" class=\"list-group-item\">\n                    <i class=\"fa fa-registered\"></i> Registro <span class=\"badge\">14</span>\n                </a>\n            </div>\n        </nav>\n    </div>\n</aside>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/subheader/subheader.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/subheader/subheader.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSubheaderSubheaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container d-flex align-items-center flex-column\">\n    <div class=\"dashboard\">\n\n        <div class=\"col-md-10 col-md-offset-1 \">\n            <ul class=\"dashboard-tabs \">\n                <li class=\"active \">\n                    <a routerLink=\"/perfil\" class=\"btn \" aria-controls=\"profile \" role=\"tab \" data-toggle=\"tab \">\n                        <span class=\"glyphicon glyphicon-user \"></span>\n                        <h4>Profile</h4>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#statistics \" class=\"btn \" aria-controls=\"statistics \" role=\"tab \" data-toggle=\"tab \">\n                        <span class=\"glyphicon glyphicon-time \"></span>\n                        <h4>Statistics</h4>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#donate \" class=\"btn \" aria-controls=\"donate \" role=\"tab \" data-toggle=\"tab \">\n                        <span class=\"glyphicon glyphicon-usd \"></span>\n                        <h4>Donate</h4>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#settings \" class=\"btn \" aria-controls=\"settings \" role=\"tab \" data-toggle=\"tab \">\n                        <span class=\"glyphicon glyphicon-cog \"></span>\n                        <h4>Settings</h4>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#help \" class=\"btn \" aria-controls=\"help \" role=\"tab \" data-toggle=\"tab \">\n                        <span class=\"glyphicon glyphicon-question-sign \"></span>\n                        <h4>Help</h4>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Login/decision.component.css":
  /*!**********************************************!*\
    !*** ./src/app/Login/decision.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginDecisionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*============ Service Features style ============*/\n\n.container {\n    padding-top: 100px;\n}\n\n.service-heading-block {\n    display: block;\n    margin-bottom: 30px;\n}\n\n.title {\n    display: block;\n    font-size: 30px;\n    font-weight: 200;\n    margin-bottom: 10px;\n}\n\n.sub-title {\n    font-size: 18px;\n    font-weight: 100;\n    line-height: 24px;\n}\n\n.feature-block {\n    background-color: #fff;\n    border-radius: 2px;\n    padding: 15px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    margin-bottom: 15px;\n    -webkit-transition: all ease .5s;\n    transition: all ease .5s\n}\n\n.ms-feature:hover,\n.ms-feature:focus {\n    background-color: #fafafa;\n    box-shadow: 0 3px 4px 3px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 3px rgba(0, 0, 0, 0.12);\n}\n\n.fb-icon {\n    border-radius: 50%;\n    display: block;\n    font-size: 36px;\n    height: 80px;\n    line-height: 80px;\n    text-align: center;\n    margin: 1rem auto;\n    width: 80px;\n    -webkit-transition: all 0.5s ease 0s;\n    transition: all 0.5s ease 0s;\n}\n\n.feature-block:hover .fb-icon,\n.feature-block:focus .fb-icon {\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n\n.fb-icon.color-info {\n    background-color: #5bc0de;\n    color: #fff;\n}\n\n.fb-icon.color-warning {\n    background-color: #eea236;\n    color: #fff;\n}\n\n.fb-icon.color-success {\n    background-color: #5cb85c;\n    color: #fff;\n}\n\n.fb-icon.color-danger {\n    background-color: #d9534f;\n    color: #fff;\n}\n\n.feature-block h4 {\n    font-size: 16px;\n    font-weight: 500;\n    margin: 3rem 0 1rem;\n}\n\n.color-info {\n    color: #46b8da;\n}\n\n.color-warning {\n    color: #f0ad4e;\n}\n\n.color-success {\n    color: #4cae4c;\n}\n\n.color-danger {\n    color: #d43f3a;\n}\n\n.btn-custom {\n    border: medium none;\n    border-radius: 2px;\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: 500;\n    letter-spacing: 0;\n    margin: 10px 1px;\n    outline: 0 none;\n    padding: 8px 30px;\n    position: relative;\n    text-decoration: none;\n    text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW4vZGVjaXNpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtREFBbUQ7O0FBRW5EO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsK0dBQStHO0lBQy9HLG1CQUFtQjtJQUNuQixnQ0FBdUI7SUFBdkI7QUFDSjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsbUhBQW1IO0FBQ3ZIOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxvQ0FBNEI7SUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLGdIQUFnSDtJQUNoSCxpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvTG9naW4vZGVjaXNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09IFNlcnZpY2UgRmVhdHVyZXMgc3R5bGUgPT09PT09PT09PT09Ki9cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uc2VydmljZS1oZWFkaW5nLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uZmVhdHVyZS1ibG9jayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXNcbn1cblxuLm1zLWZlYXR1cmU6aG92ZXIsXG4ubXMtZmVhdHVyZTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBib3gtc2hhZG93OiAwIDNweCA0cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZmItaWNvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG59XG5cbi5mZWF0dXJlLWJsb2NrOmhvdmVyIC5mYi1pY29uLFxuLmZlYXR1cmUtYmxvY2s6Zm9jdXMgLmZiLWljb24ge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cblxuLmZiLWljb24uY29sb3ItaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmZiLWljb24uY29sb3Itd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlYTIzNjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmZiLWljb24uY29sb3Itc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmZiLWljb24uY29sb3ItZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uZmVhdHVyZS1ibG9jayBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAzcmVtIDAgMXJlbTtcbn1cblxuLmNvbG9yLWluZm8ge1xuICAgIGNvbG9yOiAjNDZiOGRhO1xufVxuXG4uY29sb3Itd2FybmluZyB7XG4gICAgY29sb3I6ICNmMGFkNGU7XG59XG5cbi5jb2xvci1zdWNjZXNzIHtcbiAgICBjb2xvcjogIzRjYWU0Yztcbn1cblxuLmNvbG9yLWRhbmdlciB7XG4gICAgY29sb3I6ICNkNDNmM2E7XG59XG5cbi5idG4tY3VzdG9tIHtcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgbWFyZ2luOiAxMHB4IDFweDtcbiAgICBvdXRsaW5lOiAwIG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Login/decision.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/Login/decision.component.ts ***!
    \*********************************************/

  /*! exports provided: DecisionComponent */

  /***/
  function srcAppLoginDecisionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DecisionComponent", function () {
      return DecisionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DecisionComponent =
    /*#__PURE__*/
    function () {
      function DecisionComponent() {
        _classCallCheck(this, DecisionComponent);
      }

      _createClass(DecisionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DecisionComponent;
    }();

    DecisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-decision',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./decision.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Login/decision.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./decision.component.css */
      "./src/app/Login/decision.component.css")).default]
    })], DecisionComponent);
    /***/
  },

  /***/
  "./src/app/Login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/Login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-form {\n    padding-left: 300px;\n}\n\n#log-form {\n    margin-top: 200px;\n}\n\n/* BASIC */\n\nhtml {\n    background-color: #56baed;\n}\n\nbody {\n    font-family: \"Poppins\", sans-serif;\n    height: 100vh;\n}\n\na {\n    color: #92badd;\n    display: inline-block;\n    text-decoration: none;\n    font-weight: 400;\n}\n\nh2 {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display: inline-block;\n    margin: 40px 8px 10px 8px;\n    color: #cccccc;\n}\n\n/* STRUCTURE */\n\n.wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 100%;\n    min-height: 100%;\n    padding: 20px;\n}\n\n#formContent {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n    text-align: center;\n}\n\n#formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n}\n\n/* TABS */\n\nh2.inactive {\n    color: #cccccc;\n}\n\nh2.active {\n    color: #0d0d0d;\n    border-bottom: 2px solid #5fbae9;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button],\ninput[type=submit],\ninput[type=reset] {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover,\ninput[type=submit]:hover,\ninput[type=reset]:hover {\n    background-color: #39ace7;\n}\n\ninput[type=button]:active,\ninput[type=submit]:active,\ninput[type=reset]:active {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n}\n\ninput[type=text] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:placeholder {\n    color: #cccccc;\n}\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n    -webkit-animation-name: fadeInDown;\n    animation-name: fadeInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n    0% {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -100%, 0);\n        transform: translate3d(0, -100%, 0);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none;\n    }\n}\n\n@keyframes fadeInDown {\n    0% {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -100%, 0);\n        transform: translate3d(0, -100%, 0);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none;\n    }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.fadeIn {\n    opacity: 0;\n    -webkit-animation: fadeIn ease-in 1;\n    animation: fadeIn ease-in 1;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n}\n\n.fadeIn.first {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n}\n\n.fadeIn.second {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n}\n\n.fadeIn.third {\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n}\n\n.fadeIn.fourth {\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    -webkit-transition: width 0.2s;\n    transition: width 0.2s;\n}\n\n.underlineHover:hover {\n    color: #0d0d0d;\n}\n\n.underlineHover:hover:after {\n    width: 100%;\n}\n\nh1 {\n    color: #60a0ff;\n}\n\n/* OTHERS */\n\n*:focus {\n    outline: none;\n}\n\n#icon {\n    width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQSxVQUFVOztBQUVWO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUdBLGNBQWM7O0FBRWQ7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBRUksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLDRDQUE0QztJQUM1QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFFbEIsNEJBQTRCO0FBQ2hDOztBQUdBLFNBQVM7O0FBRVQ7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFHQSxtQkFBbUI7O0FBRW5COzs7SUFHSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFFZixpREFBaUQ7SUFFakQsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQix3Q0FBd0M7SUFJeEMsZ0NBQWdDO0FBQ3BDOztBQUVBOzs7SUFHSSx5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUlJLDhCQUE4QjtJQUc5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUl4QyxnQ0FBZ0M7SUFFaEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBR0EsZUFBZTs7QUFHZix1Q0FBdUM7O0FBRXZDO0lBQ0ksa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDViwyQ0FBMkM7UUFDM0MsbUNBQW1DO0lBQ3ZDO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsdUJBQXVCO1FBQ3ZCLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJDQUEyQztRQUMzQyxtQ0FBbUM7SUFDdkM7SUFDQTtRQUNJLFVBQVU7UUFDVix1QkFBdUI7UUFDdkIsZUFBZTtJQUNuQjtBQUNKOztBQUdBLGtDQUFrQzs7QUFFbEM7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBV0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUNBQW1DO0lBRW5DLDJCQUEyQjtJQUMzQixxQ0FBcUM7SUFFckMsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUU5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFFN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBRTdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUU3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFFM0IsbUJBQW1CO0FBQ3ZCOztBQUdBLGtDQUFrQzs7QUFFbEM7SUFDSSxjQUFjO0lBQ2QsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsOEJBQXNCO0lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvTG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwMHB4O1xufVxuXG4jbG9nLWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG5cbi8qIEJBU0lDICovXG5cbmh0bWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hIHtcbiAgICBjb2xvcjogIzkyYmFkZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcbiAgICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG4vKiBTVFJVQ1RVUkUgKi9cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuI2Zvcm1Db250ZW50IHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb3JtRm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuXG5cbi8qIFRBQlMgKi9cblxuaDIuaW5hY3RpdmUge1xuICAgIGNvbG9yOiAjY2NjY2NjO1xufVxuXG5oMi5hY3RpdmUge1xuICAgIGNvbG9yOiAjMGQwZDBkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuXG5cbi8qIEZPUk0gVFlQT0dSQVBIWSovXG5cbmlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LCAxODYsIDIzMywgMC40KTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsIDE4NiwgMjMzLCAwLjQpO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsXG5pbnB1dFt0eXBlPXJlc2V0XTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzBkMGQwZDtcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiA4NSU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNjY2NjY2M7XG59XG5cblxuLyogQU5JTUFUSU9OUyAqL1xuXG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cblxuLmZhZGVJbkRvd24ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxufVxuXG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uZmFkZUluIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4uZmFkZUluLmZpcnN0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi5mYWRlSW4uc2Vjb25kIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbi5mYWRlSW4udGhpcmQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cblxuLmZhZGVJbi5mb3VydGgge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcbiAgICBjb2xvcjogIzBkMGQwZDtcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaDEge1xuICAgIGNvbG9yOiAjNjBhMGZmO1xufVxuXG5cbi8qIE9USEVSUyAqL1xuXG4qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jaWNvbiB7XG4gICAgd2lkdGg6IDMwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/Login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/usuario/user.service */
    "./src/app/services/usuario/user.service.ts");
    /* harmony import */


    var _models_usuarios_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/usuarios.models */
    "./src/app/models/usuarios.models.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(usuarioService, router) {
        _classCallCheck(this, LoginComponent);

        this.usuarioService = usuarioService;
        this.router = router;
        this.usuario = [];
        this.recuerdame = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.email = localStorage.getItem('email') || '';

          if (this.email.length > 1) {
            this.recuerdame = true;
          }
        }
      }, {
        key: "ingresar",
        value: function ingresar(forma) {
          var _this = this;

          var usuario = new _models_usuarios_models__WEBPACK_IMPORTED_MODULE_3__["Usuario"](forma.value.user, forma.value.password, null);
          this.usuarioService.LogearUsuario(usuario).subscribe(function (correto) {
            return _this.router.navigate(['/dasboard']);
          });
          console.log(forma.value);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/Login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/Login/register.component.css":
  /*!**********************************************!*\
    !*** ./src/app/Login/register.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xvZ2luL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Login/register.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/Login/register.component.ts ***!
    \*********************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppLoginRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/usuario/user.service */
    "./src/app/services/usuario/user.service.ts");
    /* harmony import */


    var _services_validaciones_validar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/validaciones/validar.service */
    "./src/app/services/validaciones/validar.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_usuarios_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/usuarios.models */
    "./src/app/models/usuarios.models.ts");
    /* harmony import */


    var _models_datos_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/datos.models */
    "./src/app/models/datos.models.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_service_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/service.index */
    "./src/app/services/service.index.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      // forma = new  FormGroup({
      //   user : new FormControl(''),
      //   email : new FormControl(''),
      //   password : new FormControl(''),
      //   password2 : new FormControl('')
      // });
      function RegisterComponent(usuarioService, router, activatedRoute, validarService, pedidoService) {
        var _this2 = this;

        _classCallCheck(this, RegisterComponent);

        this.usuarioService = usuarioService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.validarService = validarService;
        this.pedidoService = pedidoService;
        this.usuario = [];
        activatedRoute.params.subscribe(function (params) {
          var termino = params['termino'];
          _this2.role = termino;
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
        }
      }, {
        key: "GuargarUser",
        value: function GuargarUser() {
          var _this3 = this;

          var usuario = new _models_usuarios_models__WEBPACK_IMPORTED_MODULE_5__["Usuario"](this.forma.value.user, this.forma.value.password, this.forma.value.email, this.forma.value.nombre, this.role);
          this.emails = 'jose2010men@hotmail.com';
          this.asunto = 'Bienvenido';
          var mensj = 'Bienvenido: ' + usuario.user;
          var data = new _models_datos_models__WEBPACK_IMPORTED_MODULE_6__["DatosEmail"](usuario.email, usuario.nombre, this.asunto, this.emails, mensj);

          if (this.forma.value.password === this.forma.value.password2) {
            console.log(usuario);

            if (this.role === 'USER') {
              this.usuarioService.crearUsuario(usuario).subscribe(function (resp) {
                return _this3.router.navigate(['/login']);
              });
              this.usuarioService.enviarEmail(data).subscribe();
              console.log(data);
            }

            this.usuarioService.crearUsuario(usuario).subscribe(function (resp) {
              return _this3.router.navigate(['/regprovee/' + usuario.user]);
            });
            this.usuarioService.enviarEmail(data).subscribe();
          } else {
            console.log('password incorreto');
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _services_validaciones_validar_service__WEBPACK_IMPORTED_MODULE_3__["ValidarService"]
      }, {
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_8__["PedidosService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Login/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/Login/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'tesisproj';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Login/login.component */
    "./src/app/Login/login.component.ts");
    /* harmony import */


    var _Login_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Login/register.component */
    "./src/app/Login/register.component.ts");
    /* harmony import */


    var _Login_decision_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Login/decision.component */
    "./src/app/Login/decision.component.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _services_service_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/service.module */
    "./src/app/services/service.module.ts");
    /* harmony import */


    var _entrada_entrada_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./entrada/entrada.component */
    "./src/app/entrada/entrada.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _pages_page_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/page.module */
    "./src/app/pages/page.module.ts");
    /* harmony import */


    var _registro_dataprovee_dataprovee_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./registro/dataprovee/dataprovee.component */
    "./src/app/registro/dataprovee/dataprovee.component.ts");
    /* harmony import */


    var _registro_dataclient_dataclient_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./registro/dataclient/dataclient.component */
    "./src/app/registro/dataclient/dataclient.component.ts");
    /* harmony import */


    var _entrada_listaprovee_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./entrada/listaprovee.component */
    "./src/app/entrada/listaprovee.component.ts"); // Componentes
    // Ruteador
    // Libreria de materiales
    // Servicios


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Login_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _Login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _Login_decision_component__WEBPACK_IMPORTED_MODULE_7__["DecisionComponent"], _entrada_entrada_component__WEBPACK_IMPORTED_MODULE_15__["EntradaComponent"], _registro_dataprovee_dataprovee_component__WEBPACK_IMPORTED_MODULE_19__["DataproveeComponent"], _registro_dataclient_dataclient_component__WEBPACK_IMPORTED_MODULE_20__["DataclientComponent"], _entrada_listaprovee_component__WEBPACK_IMPORTED_MODULE_21__["ListaproveeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routes__WEBPACK_IMPORTED_MODULE_8__["APP_ROUTES"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], _pages_page_module__WEBPACK_IMPORTED_MODULE_18__["PageModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _services_service_module__WEBPACK_IMPORTED_MODULE_14__["ServiceModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__["PipesModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      exports: [_Login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _Login_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _Login_decision_component__WEBPACK_IMPORTED_MODULE_7__["DecisionComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: APP_ROUTES */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function () {
      return APP_ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Login/login.component */
    "./src/app/Login/login.component.ts");
    /* harmony import */


    var _Login_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Login/register.component */
    "./src/app/Login/register.component.ts");
    /* harmony import */


    var _Login_decision_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Login/decision.component */
    "./src/app/Login/decision.component.ts");
    /* harmony import */


    var _entrada_entrada_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./entrada/entrada.component */
    "./src/app/entrada/entrada.component.ts");
    /* harmony import */


    var _registro_dataclient_dataclient_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro/dataclient/dataclient.component */
    "./src/app/registro/dataclient/dataclient.component.ts");
    /* harmony import */


    var _registro_dataprovee_dataprovee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./registro/dataprovee/dataprovee.component */
    "./src/app/registro/dataprovee/dataprovee.component.ts");
    /* harmony import */


    var _entrada_listaprovee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./entrada/listaprovee.component */
    "./src/app/entrada/listaprovee.component.ts");

    var appRoutes = [{
      path: 'home',
      component: _entrada_entrada_component__WEBPACK_IMPORTED_MODULE_5__["EntradaComponent"]
    }, {
      path: 'regclient/:user',
      component: _registro_dataclient_dataclient_component__WEBPACK_IMPORTED_MODULE_6__["DataclientComponent"]
    }, {
      path: 'regprovee/:user',
      component: _registro_dataprovee_dataprovee_component__WEBPACK_IMPORTED_MODULE_7__["DataproveeComponent"]
    }, {
      path: 'login',
      component: _Login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'register/:termino',
      component: _Login_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: 'decision',
      component: _Login_decision_component__WEBPACK_IMPORTED_MODULE_4__["DecisionComponent"]
    }, {
      path: 'listprovee/:termino',
      component: _entrada_listaprovee_component__WEBPACK_IMPORTED_MODULE_8__["ListaproveeComponent"]
    } //  {
    //      path: '',
    //      component: PageComponent,
    //      canActivate: [ GuardsGuard ],
    //  },
    //  { path: '**', component: NopagefoundComponent }
    ];

    var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
      useHash: true
    });
    /***/

  },

  /***/
  "./src/app/config/config.ts":
  /*!**********************************!*\
    !*** ./src/app/config/config.ts ***!
    \**********************************/

  /*! exports provided: URL_SERVICIO */

  /***/
  function srcAppConfigConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_SERVICIO", function () {
      return URL_SERVICIO;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // tslint:disable-next-line:eofline


    var URL_SERVICIO = 'http://localhost:3000'; // http://35.225.0.241:3000'

    /***/
  },

  /***/
  "./src/app/entrada/entrada.component.css":
  /*!***********************************************!*\
    !*** ./src/app/entrada/entrada.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppEntradaEntradaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n    height: 100vh;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n#up {\n    border-bottom: 0px solid transparent;\n    box-shadow: 0 0 transparent;\n    background: transparent;\n}\n\n#navbarSupportedContent li {\n    margin: 0px 10px;\n}\n\n#navbarSupportedContent li a {\n    color: white;\n}\n\n#up h2 {\n    color: #00c851!important;\n    font-size: 1.3rem;\n    cursor: pointer;\n}\n\n.wrapper {\n    background: url('https://www.tuexperto.com/wp-content/uploads/2017/10/fondo-de-pantalla-paisaje.jpg');\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 100%;\n    height: 100vh;\n    position: static;\n    color: white;\n}\n\n.overlays {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    opacity: .8;\n    background: rgb(13, 13, 14);\n}\n\n/*@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');*/\n\nsection {\n    padding: 60px 0;\n}\n\nsection .section-title {\n    text-align: center;\n    color: #566573;\n    margin-bottom: 50px;\n    text-transform: uppercase;\n}\n\n#footer {\n    background: #566573 !important;\n}\n\n#footer h5 {\n    padding-left: 10px;\n    border-left: 3px solid #eeeeee;\n    padding-bottom: 6px;\n    margin-bottom: 20px;\n    color: #ffffff;\n}\n\n#footer a {\n    color: #ffffff;\n    text-decoration: none !important;\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n}\n\n#footer ul.social li {\n    padding: 3px 0;\n}\n\n#footer ul.social li a i {\n    margin-right: 5px;\n    font-size: 25px;\n    -webkit-transition: .5s all ease;\n    transition: .5s all ease;\n}\n\n#footer ul.social li:hover a i {\n    font-size: 30px;\n    margin-top: -10px;\n}\n\n#footer ul.social li a,\n#footer ul.quick-links li a {\n    color: #ffffff;\n}\n\n#footer ul.social li a:hover {\n    color: #eeeeee;\n}\n\n#footer ul.quick-links li {\n    padding: 3px 0;\n    -webkit-transition: .5s all ease;\n    transition: .5s all ease;\n}\n\n#footer ul.quick-links li:hover {\n    padding: 3px 0;\n    margin-left: 5px;\n    font-weight: 700;\n}\n\n#footer ul.quick-links li a i {\n    margin-right: 5px;\n}\n\n#footer ul.quick-links li:hover a i {\n    font-weight: 700;\n}\n\n@media (max-width:767px) {\n    #footer h5 {\n        padding-left: 0;\n        border-left: transparent;\n        padding-bottom: 0px;\n        margin-bottom: 10px;\n    }\n}\n\n/* ////////////////////////////  CARDS /////////////////////////// CARDS  //////////////////////////////////////// */\n\n/*@import url(http://fonts.googleapis.com/css?family=Open+Sans:300);*/\n\nbody {\n    background: #010101;\n}\n\n.price_table_container {\n    text-align: center;\n    color: #666;\n    margin-top: 35px;\n    font-family: 'Open Sans', sans-serif;\n}\n\n.price_table_heading {\n    font-size: 36px;\n    padding: 10px;\n    background: #EEE;\n}\n\n.centrado {\n    margin: 10px auto;\n    display: block;\n}\n\n.price_table_row {\n    padding: 15px;\n    background: #FFF;\n}\n\n.cost {\n    padding: 30px;\n    font-size: 30px;\n}\n\n.cost span {\n    font-size: 15px;\n}\n\n.price_table_row:nth-of-type(even) {\n    background: #F8F8F8;\n}\n\n.btn {\n    border-radius: 0px;\n}\n\n.recommended {\n    /*USER DEFINED COLOUR*/\n    background: #FF3A3A;\n    color: #FFF;\n    /*USER DEFINED COLOUR*/\n    padding: 3px 0 3px 0;\n    margin-top: 10px;\n    text-align: center;\n    margin-bottom: -35px;\n    font-family: 'Open Sans', sans-serif;\n}\n\n.spacer {\n    width: 100%;\n    height: 50px;\n}\n\n/*Already Defined Colours*/\n\n/*Background*/\n\n.primary-bg {\n    background: #337AB7;\n    color: #FFF;\n}\n\n.success-bg {\n    background: #5CB85C;\n    color: #FFF;\n}\n\n.info-bg {\n    background: #5BC0DE;\n    color: #FFF;\n}\n\n.warning-bg {\n    background: #F0AD4E;\n    color: #FFF;\n}\n\n.danger-bg {\n    background: #D9534F;\n    color: #FFF;\n}\n\n.dark-bg {\n    background: #444;\n    color: #FFF;\n}\n\n.royal-bg {\n    background: #8E74E2;\n    color: #FFF;\n}\n\n.static-bg {\n    background: #2BB0A6;\n    color: #FFF;\n}\n\n/*Only Text Colours*/\n\n.primary-text {\n    background: #FFF;\n    color: #337AB7;\n}\n\n.success-text {\n    background: #FFF;\n    color: #5CB85C;\n}\n\n.info-text {\n    background: #FFF;\n    color: #5BC0DE;\n}\n\n.warning-text {\n    background: #FFF;\n    color: #F0AD4E;\n}\n\n.danger-text {\n    background: #FFF;\n    color: #D9534F;\n}\n\n.dark-text {\n    background: #FFF;\n    color: #444;\n}\n\n.royal-text {\n    background: #FFF;\n    color: #8E74E2;\n}\n\n.static-text {\n    background: #FFF;\n    color: #2BB0A6;\n}\n\n/*Additional Button styles*/\n\n/*BTN-DARK*/\n\n.btn-dark {\n    color: #fff;\n    background-color: #444;\n    border-color: #444;\n}\n\n.btn-dark:hover,\n.btn-dark:focus,\n.btn-dark.focus,\n.btn-dark:active,\n.btn-dark.active,\n.open>.dropdown-toggle.btn-dark {\n    color: #fff;\n    background-color: #222;\n    border-color: #222;\n}\n\n.btn-dark:active,\n.btn-dark.active,\n.open>.dropdown-toggle.btn-dark {\n    background-image: none;\n}\n\n/*BTN-ROYAL---------*/\n\n.btn-royal {\n    color: #fff;\n    background-color: #8E74E2;\n    border-color: #8E74E2;\n}\n\n.btn-royal:hover,\n.btn-royal:focus,\n.btn-royal.focus,\n.btn-royal:active,\n.btn-royal.active,\n.open>.dropdown-toggle.btn-royal {\n    color: #fff;\n    background-color: #7451E8;\n    border-color: #7451E8;\n}\n\n.btn-royal:active,\n.btn-royal.active,\n.open>.dropdown-toggle.btn-royal {\n    background-image: none;\n}\n\n/*BTN-STATIC---------*/\n\n.btn-static {\n    color: #fff;\n    background-color: #2BB0A6;\n    border-color: #2BB0A6;\n}\n\n.btn-static:hover,\n.btn-static:focus,\n.btn-static.focus,\n.btn-static:active,\n.btn-static.active,\n.open>.dropdown-toggle.btn-static {\n    color: #fff;\n    background-color: #07A094;\n    border-color: #07A094;\n}\n\n.btn-static:active,\n.btn-static.active,\n.open>.dropdown-toggle.btn-static {\n    background-image: none;\n}\n\n/*!\n * Hover.css (http://ianlunn.co.uk/)\n * Version: 1.0.10\n * Author: Ian Lunn @IanLunn\n * Author URL: http://ianlunn.co.uk/\n * Github: https://github.com/IanLunn/Hover\n\n * Made available under a MIT License:\n * http://www.opensource.org/licenses/mit-license.php\n\n * Hover.css Copyright Ian Lunn 2014.\n */\n\n.button {\n    margin: .4em;\n    padding: 1em;\n    cursor: pointer;\n    background: #e1e1e1;\n    text-decoration: none;\n    color: #666;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)\n}\n\n.grow {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.grow:active,\n.grow:focus,\n.grow:hover {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1)\n}\n\n.shrink {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.shrink:active,\n.shrink:focus,\n.shrink:hover {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9)\n}\n\n@-webkit-keyframes pulse {\n    25% {\n        -webkit-transform: scale(1.1);\n        transform: scale(1.1)\n    }\n    75% {\n        -webkit-transform: scale(0.9);\n        transform: scale(0.9)\n    }\n}\n\n@keyframes pulse {\n    25% {\n        -webkit-transform: scale(1.1);\n        transform: scale(1.1)\n    }\n    75% {\n        -webkit-transform: scale(0.9);\n        transform: scale(0.9)\n    }\n}\n\n.pulse {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.pulse:active,\n.pulse:focus,\n.pulse:hover {\n    -webkit-animation-name: pulse;\n    animation-name: pulse;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite\n}\n\n@-webkit-keyframes pulse-grow {\n    to {\n        -webkit-transform: scale(1.1);\n        transform: scale(1.1)\n    }\n}\n\n@keyframes pulse-grow {\n    to {\n        -webkit-transform: scale(1.1);\n        transform: scale(1.1)\n    }\n}\n\n.pulse-grow {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.pulse-grow:active,\n.pulse-grow:focus,\n.pulse-grow:hover {\n    -webkit-animation-name: pulse-grow;\n    animation-name: pulse-grow;\n    -webkit-animation-duration: .3s;\n    animation-duration: .3s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-direction: alternate;\n    animation-direction: alternate\n}\n\n@-webkit-keyframes pulse-shrink {\n    to {\n        -webkit-transform: scale(0.9);\n        transform: scale(0.9)\n    }\n}\n\n@keyframes pulse-shrink {\n    to {\n        -webkit-transform: scale(0.9);\n        transform: scale(0.9)\n    }\n}\n\n.pulse-shrink {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.pulse-shrink:active,\n.pulse-shrink:focus,\n.pulse-shrink:hover {\n    -webkit-animation-name: pulse-shrink;\n    animation-name: pulse-shrink;\n    -webkit-animation-duration: .3s;\n    animation-duration: .3s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-direction: alternate;\n    animation-direction: alternate\n}\n\n@-webkit-keyframes push {\n    50% {\n        -webkit-transform: scale(0.8);\n        transform: scale(0.8)\n    }\n    100% {\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n}\n\n@keyframes push {\n    50% {\n        -webkit-transform: scale(0.8);\n        transform: scale(0.8)\n    }\n    100% {\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n}\n\n.push {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.push:active,\n.push:focus,\n.push:hover {\n    -webkit-animation-name: push;\n    animation-name: push;\n    -webkit-animation-duration: .3s;\n    animation-duration: .3s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1\n}\n\n@-webkit-keyframes pop {\n    50% {\n        -webkit-transform: scale(1.2);\n        transform: scale(1.2)\n    }\n    100% {\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n}\n\n@keyframes pop {\n    50% {\n        -webkit-transform: scale(1.2);\n        transform: scale(1.2)\n    }\n    100% {\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n}\n\n.pop {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.pop:active,\n.pop:focus,\n.pop:hover {\n    -webkit-animation-name: pop;\n    animation-name: pop;\n    -webkit-animation-duration: .3s;\n    animation-duration: .3s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1\n}\n\n.rotate {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.rotate:active,\n.rotate:focus,\n.rotate:hover {\n    -webkit-transform: rotate(4deg);\n    transform: rotate(4deg)\n}\n\n.grow-rotate {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.grow-rotate:active,\n.grow-rotate:focus,\n.grow-rotate:hover {\n    -webkit-transform: scale(1.1) rotate(4deg);\n    transform: scale(1.1) rotate(4deg)\n}\n\n.float {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.float:active,\n.float:focus,\n.float:hover {\n    -webkit-transform: translateY(-5px);\n    transform: translateY(-5px)\n}\n\n.sink {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.sink:active,\n.sink:focus,\n.sink:hover {\n    -webkit-transform: translateY(5px);\n    transform: translateY(5px)\n}\n\n@-webkit-keyframes hover {\n    50% {\n        -webkit-transform: translateY(-3px);\n        transform: translateY(-3px)\n    }\n    100% {\n        -webkit-transform: translateY(-6px);\n        transform: translateY(-6px)\n    }\n}\n\n@keyframes hover {\n    50% {\n        -webkit-transform: translateY(-3px);\n        transform: translateY(-3px)\n    }\n    100% {\n        -webkit-transform: translateY(-6px);\n        transform: translateY(-6px)\n    }\n}\n\n.hover {\n    display: inline-block;\n    -webkit-transition-duration: .5s;\n    transition-duration: .5s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.hover:active,\n.hover:focus,\n.hover:hover {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n    -webkit-animation-name: hover;\n    animation-name: hover;\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 1.5s;\n    -webkit-animation-delay: .3s;\n    animation-delay: .3s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-direction: alternate;\n    animation-direction: alternate\n}\n\n@-webkit-keyframes hang {\n    50% {\n        -webkit-transform: translateY(3px);\n        transform: translateY(3px)\n    }\n    100% {\n        -webkit-transform: translateY(6px);\n        transform: translateY(6px)\n    }\n}\n\n@keyframes hang {\n    50% {\n        -webkit-transform: translateY(3px);\n        transform: translateY(3px)\n    }\n    100% {\n        -webkit-transform: translateY(6px);\n        transform: translateY(6px)\n    }\n}\n\n.hang {\n    display: inline-block;\n    -webkit-transition-duration: .5s;\n    transition-duration: .5s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.hang:active,\n.hang:focus,\n.hang:hover {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n    -webkit-animation-name: hang;\n    animation-name: hang;\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 1.5s;\n    -webkit-animation-delay: .3s;\n    animation-delay: .3s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-direction: alternate;\n    animation-direction: alternate\n}\n\n.skew {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.skew:active,\n.skew:focus,\n.skew:hover {\n    -webkit-transform: skew(-10deg);\n    transform: skew(-10deg)\n}\n\n.skew-forward {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform-origin: 0 100%;\n    transform-origin: 0 100%;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.skew-forward:active,\n.skew-forward:focus,\n.skew-forward:hover {\n    -webkit-transform: skew(-10deg);\n    transform: skew(-10deg)\n}\n\n.skew-backward {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform-origin: 0 100%;\n    transform-origin: 0 100%;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.skew-backward:active,\n.skew-backward:focus,\n.skew-backward:hover {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg)\n}\n\n@-webkit-keyframes wobble-vertical {\n    16.65% {\n        -webkit-transform: translateY(8px);\n        transform: translateY(8px)\n    }\n    33.3% {\n        -webkit-transform: translateY(-6px);\n        transform: translateY(-6px)\n    }\n    49.95% {\n        -webkit-transform: translateY(4px);\n        transform: translateY(4px)\n    }\n    66.6% {\n        -webkit-transform: translateY(-2px);\n        transform: translateY(-2px)\n    }\n    83.25% {\n        -webkit-transform: translateY(1px);\n        transform: translateY(1px)\n    }\n    100% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0)\n    }\n}\n\n@keyframes wobble-vertical {\n    16.65% {\n        -webkit-transform: translateY(8px);\n        transform: translateY(8px)\n    }\n    33.3% {\n        -webkit-transform: translateY(-6px);\n        transform: translateY(-6px)\n    }\n    49.95% {\n        -webkit-transform: translateY(4px);\n        transform: translateY(4px)\n    }\n    66.6% {\n        -webkit-transform: translateY(-2px);\n        transform: translateY(-2px)\n    }\n    83.25% {\n        -webkit-transform: translateY(1px);\n        transform: translateY(1px)\n    }\n    100% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0)\n    }\n}\n\n.wobble-vertical {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.wobble-vertical:active,\n.wobble-vertical:focus,\n.wobble-vertical:hover {\n    -webkit-animation-name: wobble-vertical;\n    animation-name: wobble-vertical;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1\n}\n\n@-webkit-keyframes wobble-horizontal {\n    16.65% {\n        -webkit-transform: translateX(8px);\n        transform: translateX(8px)\n    }\n    33.3% {\n        -webkit-transform: translateX(-6px);\n        transform: translateX(-6px)\n    }\n    49.95% {\n        -webkit-transform: translateX(4px);\n        transform: translateX(4px)\n    }\n    66.6% {\n        -webkit-transform: translateX(-2px);\n        transform: translateX(-2px)\n    }\n    83.25% {\n        -webkit-transform: translateX(1px);\n        transform: translateX(1px)\n    }\n    100% {\n        -webkit-transform: translateX(0);\n        transform: translateX(0)\n    }\n}\n\n@keyframes wobble-horizontal {\n    16.65% {\n        -webkit-transform: translateX(8px);\n        transform: translateX(8px)\n    }\n    33.3% {\n        -webkit-transform: translateX(-6px);\n        transform: translateX(-6px)\n    }\n    49.95% {\n        -webkit-transform: translateX(4px);\n        transform: translateX(4px)\n    }\n    66.6% {\n        -webkit-transform: translateX(-2px);\n        transform: translateX(-2px)\n    }\n    83.25% {\n        -webkit-transform: translateX(1px);\n        transform: translateX(1px)\n    }\n    100% {\n        -webkit-transform: translateX(0);\n        transform: translateX(0)\n    }\n}\n\n.wobble-horizontal {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.wobble-horizontal:active,\n.wobble-horizontal:focus,\n.wobble-horizontal:hover {\n    -webkit-animation-name: wobble-horizontal;\n    animation-name: wobble-horizontal;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1\n}\n\n@-webkit-keyframes wobble-to-bottom-right {\n    16.65% {\n        -webkit-transform: translate(8px, 8px);\n        transform: translate(8px, 8px)\n    }\n    33.3% {\n        -webkit-transform: translate(-6px, -6px);\n        transform: translate(-6px, -6px)\n    }\n    49.95% {\n        -webkit-transform: translate(4px, 4px);\n        transform: translate(4px, 4px)\n    }\n    66.6% {\n        -webkit-transform: translate(-2px, -2px);\n        transform: translate(-2px, -2px)\n    }\n    83.25% {\n        -webkit-transform: translate(1px, 1px);\n        transform: translate(1px, 1px)\n    }\n    100% {\n        -webkit-transform: translate(0, 0);\n        transform: translate(0, 0)\n    }\n}\n\n@keyframes wobble-to-bottom-right {\n    16.65% {\n        -webkit-transform: translate(8px, 8px);\n        transform: translate(8px, 8px)\n    }\n    33.3% {\n        -webkit-transform: translate(-6px, -6px);\n        transform: translate(-6px, -6px)\n    }\n    49.95% {\n        -webkit-transform: translate(4px, 4px);\n        transform: translate(4px, 4px)\n    }\n    66.6% {\n        -webkit-transform: translate(-2px, -2px);\n        transform: translate(-2px, -2px)\n    }\n    83.25% {\n        -webkit-transform: translate(1px, 1px);\n        transform: translate(1px, 1px)\n    }\n    100% {\n        -webkit-transform: translate(0, 0);\n        transform: translate(0, 0)\n    }\n}\n\n.wobble-to-bottom-right {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.wobble-to-bottom-right:active,\n.wobble-to-bottom-right:focus,\n.wobble-to-bottom-right:hover {\n    -webkit-animation-name: wobble-to-bottom-right;\n    animation-name: wobble-to-bottom-right;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1\n}\n\n@-webkit-keyframes wobble-to-top-right {\n    16.65% {\n        -webkit-transform: translate(8px, -8px);\n        transform: translate(8px, -8px)\n    }\n    33.3% {\n        -webkit-transform: translate(-6px, 6px);\n        transform: translate(-6px, 6px)\n    }\n    49.95% {\n        -webkit-transform: translate(4px, -4px);\n        transform: translate(4px, -4px)\n    }\n    66.6% {\n        -webkit-transform: translate(-2px, 2px);\n        transform: translate(-2px, 2px)\n    }\n    83.25% {\n        -webkit-transform: translate(1px, -1px);\n        transform: translate(1px, -1px)\n    }\n    100% {\n        -webkit-transform: translate(0, 0);\n        transform: translate(0, 0)\n    }\n}\n\n@keyframes wobble-to-top-right {\n    16.65% {\n        -webkit-transform: translate(8px, -8px);\n        transform: translate(8px, -8px)\n    }\n    33.3% {\n        -webkit-transform: translate(-6px, 6px);\n        transform: translate(-6px, 6px)\n    }\n    49.95% {\n        -webkit-transform: translate(4px, -4px);\n        transform: translate(4px, -4px)\n    }\n    66.6% {\n        -webkit-transform: translate(-2px, 2px);\n        transform: translate(-2px, 2px)\n    }\n    83.25% {\n        -webkit-transform: translate(1px, -1px);\n        transform: translate(1px, -1px)\n    }\n    100% {\n        -webkit-transform: translate(0, 0);\n        transform: translate(0, 0)\n    }\n}\n\n.wobble-to-top-right {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.wobble-to-top-right:active,\n.wobble-to-top-right:focus,\n.wobble-to-top-right:hover {\n    -webkit-animation-name: wobble-to-top-right;\n    animation-name: wobble-to-top-right;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1\n}\n\n@-webkit-keyframes wobble-top {\n    16.65% {\n        -webkit-transform: skew(-12deg);\n        transform: skew(-12deg)\n    }\n    33.3% {\n        -webkit-transform: skew(10deg);\n        transform: skew(10deg)\n    }\n    49.95% {\n        -webkit-transform: skew(-6deg);\n        transform: skew(-6deg)\n    }\n    66.6% {\n        -webkit-transform: skew(4deg);\n        transform: skew(4deg)\n    }\n    83.25% {\n        -webkit-transform: skew(-2deg);\n        transform: skew(-2deg)\n    }\n    100% {\n        -webkit-transform: skew(0);\n        transform: skew(0)\n    }\n}\n\n@keyframes wobble-top {\n    16.65% {\n        -webkit-transform: skew(-12deg);\n        transform: skew(-12deg)\n    }\n    33.3% {\n        -webkit-transform: skew(10deg);\n        transform: skew(10deg)\n    }\n    49.95% {\n        -webkit-transform: skew(-6deg);\n        transform: skew(-6deg)\n    }\n    66.6% {\n        -webkit-transform: skew(4deg);\n        transform: skew(4deg)\n    }\n    83.25% {\n        -webkit-transform: skew(-2deg);\n        transform: skew(-2deg)\n    }\n    100% {\n        -webkit-transform: skew(0);\n        transform: skew(0)\n    }\n}\n\n.wobble-top {\n    display: inline-block;\n    -webkit-transform-origin: 0 100%;\n    transform-origin: 0 100%;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.wobble-top:active,\n.wobble-top:focus,\n.wobble-top:hover {\n    -webkit-animation-name: wobble-top;\n    animation-name: wobble-top;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1\n}\n\n@-webkit-keyframes wobble-bottom {\n    16.65% {\n        -webkit-transform: skew(-12deg);\n        transform: skew(-12deg)\n    }\n    33.3% {\n        -webkit-transform: skew(10deg);\n        transform: skew(10deg)\n    }\n    49.95% {\n        -webkit-transform: skew(-6deg);\n        transform: skew(-6deg)\n    }\n    66.6% {\n        -webkit-transform: skew(4deg);\n        transform: skew(4deg)\n    }\n    83.25% {\n        -webkit-transform: skew(-2deg);\n        transform: skew(-2deg)\n    }\n    100% {\n        -webkit-transform: skew(0);\n        transform: skew(0)\n    }\n}\n\n@keyframes wobble-bottom {\n    16.65% {\n        -webkit-transform: skew(-12deg);\n        transform: skew(-12deg)\n    }\n    33.3% {\n        -webkit-transform: skew(10deg);\n        transform: skew(10deg)\n    }\n    49.95% {\n        -webkit-transform: skew(-6deg);\n        transform: skew(-6deg)\n    }\n    66.6% {\n        -webkit-transform: skew(4deg);\n        transform: skew(4deg)\n    }\n    83.25% {\n        -webkit-transform: skew(-2deg);\n        transform: skew(-2deg)\n    }\n    100% {\n        -webkit-transform: skew(0);\n        transform: skew(0)\n    }\n}\n\n.wobble-bottom {\n    display: inline-block;\n    -webkit-transform-origin: 100% 0;\n    transform-origin: 100% 0;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.wobble-bottom:active,\n.wobble-bottom:focus,\n.wobble-bottom:hover {\n    -webkit-animation-name: wobble-bottom;\n    animation-name: wobble-bottom;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1\n}\n\n@-webkit-keyframes wobble-skew {\n    16.65% {\n        -webkit-transform: skew(-12deg);\n        transform: skew(-12deg)\n    }\n    33.3% {\n        -webkit-transform: skew(10deg);\n        transform: skew(10deg)\n    }\n    49.95% {\n        -webkit-transform: skew(-6deg);\n        transform: skew(-6deg)\n    }\n    66.6% {\n        -webkit-transform: skew(4deg);\n        transform: skew(4deg)\n    }\n    83.25% {\n        -webkit-transform: skew(-2deg);\n        transform: skew(-2deg)\n    }\n    100% {\n        -webkit-transform: skew(0);\n        transform: skew(0)\n    }\n}\n\n@keyframes wobble-skew {\n    16.65% {\n        -webkit-transform: skew(-12deg);\n        transform: skew(-12deg)\n    }\n    33.3% {\n        -webkit-transform: skew(10deg);\n        transform: skew(10deg)\n    }\n    49.95% {\n        -webkit-transform: skew(-6deg);\n        transform: skew(-6deg)\n    }\n    66.6% {\n        -webkit-transform: skew(4deg);\n        transform: skew(4deg)\n    }\n    83.25% {\n        -webkit-transform: skew(-2deg);\n        transform: skew(-2deg)\n    }\n    100% {\n        -webkit-transform: skew(0);\n        transform: skew(0)\n    }\n}\n\n.wobble-skew {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.wobble-skew:active,\n.wobble-skew:focus,\n.wobble-skew:hover {\n    -webkit-animation-name: wobble-skew;\n    animation-name: wobble-skew;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1\n}\n\n@-webkit-keyframes buzz {\n    50% {\n        -webkit-transform: translateX(3px) rotate(2deg);\n        transform: translateX(3px) rotate(2deg)\n    }\n    100% {\n        -webkit-transform: translateX(-3px) rotate(-2deg);\n        transform: translateX(-3px) rotate(-2deg)\n    }\n}\n\n@keyframes buzz {\n    50% {\n        -webkit-transform: translateX(3px) rotate(2deg);\n        transform: translateX(3px) rotate(2deg)\n    }\n    100% {\n        -webkit-transform: translateX(-3px) rotate(-2deg);\n        transform: translateX(-3px) rotate(-2deg)\n    }\n}\n\n.buzz {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.buzz:active,\n.buzz:focus,\n.buzz:hover {\n    -webkit-animation-name: buzz;\n    animation-name: buzz;\n    -webkit-animation-duration: .15s;\n    animation-duration: .15s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite\n}\n\n@-webkit-keyframes buzz-out {\n    10% {\n        -webkit-transform: translateX(3px) rotate(2deg);\n        transform: translateX(3px) rotate(2deg)\n    }\n    20% {\n        -webkit-transform: translateX(-3px) rotate(-2deg);\n        transform: translateX(-3px) rotate(-2deg)\n    }\n    30% {\n        -webkit-transform: translateX(3px) rotate(2deg);\n        transform: translateX(3px) rotate(2deg)\n    }\n    40% {\n        -webkit-transform: translateX(-3px) rotate(-2deg);\n        transform: translateX(-3px) rotate(-2deg)\n    }\n    50% {\n        -webkit-transform: translateX(2px) rotate(1deg);\n        transform: translateX(2px) rotate(1deg)\n    }\n    60% {\n        -webkit-transform: translateX(-2px) rotate(-1deg);\n        transform: translateX(-2px) rotate(-1deg)\n    }\n    70% {\n        -webkit-transform: translateX(2px) rotate(1deg);\n        transform: translateX(2px) rotate(1deg)\n    }\n    80% {\n        -webkit-transform: translateX(-2px) rotate(-1deg);\n        transform: translateX(-2px) rotate(-1deg)\n    }\n    90% {\n        -webkit-transform: translateX(1px) rotate(0);\n        transform: translateX(1px) rotate(0)\n    }\n    100% {\n        -webkit-transform: translateX(-1px) rotate(0);\n        transform: translateX(-1px) rotate(0)\n    }\n}\n\n@keyframes buzz-out {\n    10% {\n        -webkit-transform: translateX(3px) rotate(2deg);\n        transform: translateX(3px) rotate(2deg)\n    }\n    20% {\n        -webkit-transform: translateX(-3px) rotate(-2deg);\n        transform: translateX(-3px) rotate(-2deg)\n    }\n    30% {\n        -webkit-transform: translateX(3px) rotate(2deg);\n        transform: translateX(3px) rotate(2deg)\n    }\n    40% {\n        -webkit-transform: translateX(-3px) rotate(-2deg);\n        transform: translateX(-3px) rotate(-2deg)\n    }\n    50% {\n        -webkit-transform: translateX(2px) rotate(1deg);\n        transform: translateX(2px) rotate(1deg)\n    }\n    60% {\n        -webkit-transform: translateX(-2px) rotate(-1deg);\n        transform: translateX(-2px) rotate(-1deg)\n    }\n    70% {\n        -webkit-transform: translateX(2px) rotate(1deg);\n        transform: translateX(2px) rotate(1deg)\n    }\n    80% {\n        -webkit-transform: translateX(-2px) rotate(-1deg);\n        transform: translateX(-2px) rotate(-1deg)\n    }\n    90% {\n        -webkit-transform: translateX(1px) rotate(0);\n        transform: translateX(1px) rotate(0)\n    }\n    100% {\n        -webkit-transform: translateX(-1px) rotate(0);\n        transform: translateX(-1px) rotate(0)\n    }\n}\n\n.buzz-out {\n    display: inline-block;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.buzz-out:active,\n.buzz-out:focus,\n.buzz-out:hover {\n    -webkit-animation-name: buzz-out;\n    animation-name: buzz-out;\n    -webkit-animation-duration: .75s;\n    animation-duration: .75s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1\n}\n\n.border-fade {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: box-shadow;\n    transition-property: box-shadow;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.border-fade:active,\n.border-fade:focus,\n.border-fade:hover {\n    box-shadow: inset 0 0 0 4px #666, 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.hollow {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: background;\n    transition-property: background;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.hollow:active,\n.hollow:focus,\n.hollow:hover {\n    background: 0 0\n}\n\n.trim {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.trim:before {\n    content: '';\n    position: absolute;\n    border: #fff solid 4px;\n    top: 4px;\n    left: 4px;\n    right: 4px;\n    bottom: 4px;\n    opacity: 0;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: opacity;\n    transition-property: opacity\n}\n\n.trim:active:before,\n.trim:focus:before,\n.trim:hover:before {\n    opacity: 1\n}\n\n.outline-outward {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.outline-outward:before {\n    content: '';\n    position: absolute;\n    border: #e1e1e1 solid 4px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: top, right, bottom, left;\n    transition-property: top, right, bottom, left\n}\n\n.outline-outward:active:before,\n.outline-outward:focus:before,\n.outline-outward:hover:before {\n    top: -8px;\n    right: -8px;\n    bottom: -8px;\n    left: -8px\n}\n\n.outline-inward {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.outline-inward:before {\n    pointer-events: none;\n    content: '';\n    position: absolute;\n    border: #e1e1e1 solid 4px;\n    top: -16px;\n    right: -16px;\n    bottom: -16px;\n    left: -16px;\n    opacity: 0;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: top, right, bottom, left;\n    transition-property: top, right, bottom, left\n}\n\n.outline-inward:active:before,\n.outline-inward:focus:before,\n.outline-inward:hover:before {\n    top: -8px;\n    right: -8px;\n    bottom: -8px;\n    left: -8px;\n    opacity: 1\n}\n\n.round-corners {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: border-radius;\n    transition-property: border-radius;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.round-corners:active,\n.round-corners:focus,\n.round-corners:hover {\n    border-radius: 1em\n}\n\n.glow {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: box-shadow;\n    transition-property: box-shadow;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.glow:active,\n.glow:focus,\n.glow:hover {\n    box-shadow: 0 0 8px rgba(0, 0, 0, .6)\n}\n\n.box-shadow-outset {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: box-shadow;\n    transition-property: box-shadow;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.box-shadow-outset:active,\n.box-shadow-outset:focus,\n.box-shadow-outset:hover {\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, .6)\n}\n\n.box-shadow-inset {\n    display: inline-block;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: box-shadow;\n    transition-property: box-shadow;\n    box-shadow: inset 0 0 0 rgba(0, 0, 0, .6), 0 0 1px rgba(0, 0, 0, 0);\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0)\n}\n\n.box-shadow-inset:active,\n.box-shadow-inset:focus,\n.box-shadow-inset:hover {\n    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, .6), 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.float-shadow {\n    display: inline-block;\n    position: relative;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.float-shadow:before {\n    pointer-events: none;\n    position: absolute;\n    z-index: -1;\n    content: '';\n    top: 100%;\n    left: 5%;\n    height: 10px;\n    width: 90%;\n    opacity: 0;\n    background: radial-gradient(ellipse at center, rgba(0, 0, 0, .35) 0, rgba(0, 0, 0, 0) 80%);\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform, opacity;\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, -webkit-transform;\n    transition-property: transform, opacity;\n    transition-property: transform, opacity, -webkit-transform\n}\n\n.float-shadow:active,\n.float-shadow:focus,\n.float-shadow:hover {\n    -webkit-transform: translateY(-5px);\n    transform: translateY(-5px)\n}\n\n.float-shadow:active:before,\n.float-shadow:focus:before,\n.float-shadow:hover:before {\n    opacity: 1;\n    -webkit-transform: translateY(5px);\n    transform: translateY(5px)\n}\n\n@-webkit-keyframes hover {\n    50% {\n        -webkit-transform: translateY(-3px);\n        transform: translateY(-3px)\n    }\n    100% {\n        -webkit-transform: translateY(-6px);\n        transform: translateY(-6px)\n    }\n}\n\n@keyframes hover {\n    50% {\n        -webkit-transform: translateY(-3px);\n        transform: translateY(-3px)\n    }\n    100% {\n        -webkit-transform: translateY(-6px);\n        transform: translateY(-6px)\n    }\n}\n\n@-webkit-keyframes hover-shadow {\n    0% {\n        -webkit-transform: translateY(6px);\n        transform: translateY(6px);\n        opacity: .4\n    }\n    50% {\n        -webkit-transform: translateY(3px);\n        transform: translateY(3px);\n        opacity: 1\n    }\n    100% {\n        -webkit-transform: translateY(6px);\n        transform: translateY(6px);\n        opacity: .4\n    }\n}\n\n@keyframes hover-shadow {\n    0% {\n        -webkit-transform: translateY(6px);\n        transform: translateY(6px);\n        opacity: .4\n    }\n    50% {\n        -webkit-transform: translateY(3px);\n        transform: translateY(3px);\n        opacity: 1\n    }\n    100% {\n        -webkit-transform: translateY(6px);\n        transform: translateY(6px);\n        opacity: .4\n    }\n}\n\n.hover-shadow {\n    display: inline-block;\n    position: relative;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.hover-shadow:before {\n    pointer-events: none;\n    position: absolute;\n    z-index: -1;\n    content: '';\n    top: 100%;\n    left: 5%;\n    height: 10px;\n    width: 90%;\n    opacity: 0;\n    background: radial-gradient(ellipse at center, rgba(0, 0, 0, .35) 0, rgba(0, 0, 0, 0) 80%);\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform, opacity;\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, -webkit-transform;\n    transition-property: transform, opacity;\n    transition-property: transform, opacity, -webkit-transform\n}\n\n.hover-shadow:active,\n.hover-shadow:focus,\n.hover-shadow:hover {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n    -webkit-animation-name: hover;\n    animation-name: hover;\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 1.5s;\n    -webkit-animation-delay: .3s;\n    animation-delay: .3s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-direction: alternate;\n    animation-direction: alternate\n}\n\n.hover-shadow:active:before,\n.hover-shadow:focus:before,\n.hover-shadow:hover:before {\n    opacity: .4;\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n    -webkit-animation-name: hover-shadow;\n    animation-name: hover-shadow;\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 1.5s;\n    -webkit-animation-delay: .3s;\n    animation-delay: .3s;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-direction: alternate;\n    animation-direction: alternate\n}\n\n.shadow-radial {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.shadow-radial:after,\n.shadow-radial:before {\n    pointer-events: none;\n    position: absolute;\n    content: '';\n    left: 0;\n    width: 100%;\n    box-sizing: border-box;\n    height: 5px;\n    opacity: 0;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: opacity;\n    transition-property: opacity\n}\n\n.shadow-radial:before {\n    bottom: 100%;\n    background: radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, .6) 0, rgba(0, 0, 0, 0) 80%)\n}\n\n.shadow-radial:after {\n    top: 100%;\n    background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, .6) 0, rgba(0, 0, 0, 0) 80%)\n}\n\n.shadow-radial:active:after,\n.shadow-radial:active:before,\n.shadow-radial:focus:after,\n.shadow-radial:focus:before,\n.shadow-radial:hover:after,\n.shadow-radial:hover:before {\n    opacity: 1\n}\n\n.bubble-top {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.bubble-top:before {\n    pointer-events: none;\n    position: absolute;\n    z-index: -1;\n    content: '';\n    border-style: solid;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: top;\n    transition-property: top;\n    left: calc(50% - 10px);\n    top: 0;\n    border-width: 0 10px 10px;\n    border-color: transparent transparent #e1e1e1\n}\n\n.bubble-top:active:before,\n.bubble-top:focus:before,\n.bubble-top:hover:before {\n    top: -10px\n}\n\n.bubble-right {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.bubble-right:before {\n    pointer-events: none;\n    position: absolute;\n    z-index: -1;\n    content: '';\n    border-style: solid;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: right;\n    transition-property: right;\n    top: calc(50% - 10px);\n    right: 0;\n    border-width: 10px 0 10px 10px;\n    border-color: transparent transparent transparent #e1e1e1\n}\n\n.bubble-right:active:before,\n.bubble-right:focus:before,\n.bubble-right:hover:before {\n    right: -10px\n}\n\n.bubble-bottom {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.bubble-bottom:before {\n    pointer-events: none;\n    position: absolute;\n    z-index: -1;\n    content: '';\n    border-style: solid;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: bottom;\n    transition-property: bottom;\n    left: calc(50% - 10px);\n    bottom: 0;\n    border-width: 10px 10px 0;\n    border-color: #e1e1e1 transparent transparent\n}\n\n.bubble-bottom:active:before,\n.bubble-bottom:focus:before,\n.bubble-bottom:hover:before {\n    bottom: -10px\n}\n\n.bubble-left {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.bubble-left:before {\n    pointer-events: none;\n    position: absolute;\n    z-index: -1;\n    content: '';\n    border-style: solid;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: left;\n    transition-property: left;\n    top: calc(50% - 10px);\n    left: 0;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent #e1e1e1 transparent transparent\n}\n\n.bubble-left:active:before,\n.bubble-left:focus:before,\n.bubble-left:hover:before {\n    left: -10px\n}\n\n.bubble-float-top {\n    display: inline-block;\n    position: relative;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.bubble-float-top:before {\n    position: absolute;\n    z-index: -1;\n    content: '';\n    left: calc(50% - 10px);\n    top: 0;\n    border-style: solid;\n    border-width: 0 10px 10px;\n    border-color: transparent transparent #e1e1e1;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: top;\n    transition-property: top\n}\n\n.bubble-float-top:active,\n.bubble-float-top:focus,\n.bubble-float-top:hover {\n    -webkit-transform: translateY(5px) translateZ(0);\n    transform: translateY(5px) translateZ(0)\n}\n\n.bubble-float-top:active:before,\n.bubble-float-top:focus:before,\n.bubble-float-top:hover:before {\n    top: -10px\n}\n\n.bubble-float-right {\n    display: inline-block;\n    position: relative;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.bubble-float-right:before {\n    position: absolute;\n    z-index: -1;\n    top: calc(50% - 10px);\n    right: 0;\n    content: '';\n    border-style: solid;\n    border-width: 10px 0 10px 10px;\n    border-color: transparent transparent transparent #e1e1e1;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: right;\n    transition-property: right\n}\n\n.bubble-float-right:active,\n.bubble-float-right:focus,\n.bubble-float-right:hover {\n    -webkit-transform: translateX(-5px);\n    transform: translateX(-5px)\n}\n\n.bubble-float-right:active:before,\n.bubble-float-right:focus:before,\n.bubble-float-right:hover:before {\n    right: -10px\n}\n\n.bubble-float-bottom {\n    display: inline-block;\n    position: relative;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.bubble-float-bottom:before {\n    position: absolute;\n    z-index: -1;\n    content: '';\n    left: calc(50% - 10px);\n    bottom: 0;\n    border-style: solid;\n    border-width: 10px 10px 0;\n    border-color: #e1e1e1 transparent transparent;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: bottom;\n    transition-property: bottom\n}\n\n.bubble-float-bottom:active,\n.bubble-float-bottom:focus,\n.bubble-float-bottom:hover {\n    -webkit-transform: translateY(-5px) translateZ(0);\n    transform: translateY(-5px) translateZ(0)\n}\n\n.bubble-float-bottom:active:before,\n.bubble-float-bottom:focus:before,\n.bubble-float-bottom:hover:before {\n    bottom: -10px\n}\n\n.bubble-float-left {\n    display: inline-block;\n    position: relative;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.bubble-float-left:before {\n    position: absolute;\n    z-index: -1;\n    content: '';\n    top: calc(50% - 10px);\n    left: 0;\n    border-style: solid;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent #e1e1e1 transparent transparent;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: left;\n    transition-property: left\n}\n\n.bubble-float-left:active,\n.bubble-float-left:focus,\n.bubble-float-left:hover {\n    -webkit-transform: translateX(5px);\n    transform: translateX(5px)\n}\n\n.bubble-float-left:active:before,\n.bubble-float-left:focus:before,\n.bubble-float-left:hover:before {\n    left: -10px\n}\n\n.curl-top-left {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.curl-top-left:before {\n    pointer-events: none;\n    position: absolute;\n    content: '';\n    height: 0;\n    width: 0;\n    top: 0;\n    left: 0;\n    background: #fff;\n    background: linear-gradient(135deg, #fff 45%, #aaa 50%, #ccc 56%, #fff 80%);\n    filter: progid: DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='#ffffff', endColorstr='#000000');\n    z-index: 1000;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, .4);\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: width, height;\n    transition-property: width, height\n}\n\n.curl-top-left:active:before,\n.curl-top-left:focus:before,\n.curl-top-left:hover:before {\n    width: 25px;\n    height: 25px\n}\n\n.curl-top-right {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.curl-top-right:before {\n    pointer-events: none;\n    position: absolute;\n    content: '';\n    height: 0;\n    width: 0;\n    top: 0;\n    right: 0;\n    background: #fff;\n    background: linear-gradient(225deg, #fff 45%, #aaa 50%, #ccc 56%, #fff 80%);\n    box-shadow: -1px 1px 1px rgba(0, 0, 0, .4);\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: width, height;\n    transition-property: width, height\n}\n\n.curl-top-right:active:before,\n.curl-top-right:focus:before,\n.curl-top-right:hover:before {\n    width: 25px;\n    height: 25px\n}\n\n.curl-bottom-right {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.curl-bottom-right:before {\n    pointer-events: none;\n    position: absolute;\n    content: '';\n    height: 0;\n    width: 0;\n    bottom: 0;\n    right: 0;\n    background: #fff;\n    background: linear-gradient(315deg, #fff 45%, #aaa 50%, #ccc 56%, #fff 80%);\n    box-shadow: -1px -1px 1px rgba(0, 0, 0, .4);\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: width, height;\n    transition-property: width, height\n}\n\n.curl-bottom-right:active:before,\n.curl-bottom-right:focus:before,\n.curl-bottom-right:hover:before {\n    width: 25px;\n    height: 25px\n}\n\n.curl-bottom-left {\n    display: inline-block;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0)\n}\n\n.curl-bottom-left:before {\n    pointer-events: none;\n    position: absolute;\n    content: '';\n    height: 0;\n    width: 0;\n    bottom: 0;\n    left: 0;\n    background: #fff;\n    background: linear-gradient(45deg, #fff 45%, #aaa 50%, #ccc 56%, #fff 80%);\n    box-shadow: 1px -1px 1px rgba(0, 0, 0, .4);\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-property: width, height;\n    transition-property: width, height\n}\n\n.curl-bottom-left:active:before,\n.curl-bottom-left:focus:before,\n.curl-bottom-left:hover:before {\n    width: 25px;\n    height: 25px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cmFkYS9lbnRyYWRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUdBQXFHO0lBQ3JHLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBR0EsOEZBQThGOztBQUU5RjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdDQUFnQztJQUVoQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztJQUVoQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBR0Esb0hBQW9IOztBQUdwSCxxRUFBcUU7O0FBRXJFO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUdBLDBCQUEwQjs7QUFHMUIsYUFBYTs7QUFFYjtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUdBLG9CQUFvQjs7QUFFcEI7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBR0EsMkJBQTJCOztBQUczQixXQUFXOztBQUVYO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7OztJQU1JLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBR0EscUJBQXFCOztBQUVyQjtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBOzs7Ozs7SUFNSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUdBLHNCQUFzQjs7QUFFdEI7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTs7Ozs7O0lBTUksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFHQTs7Ozs7Ozs7Ozs7RUFXRTs7QUFFRjtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsOENBQThCO0lBQTlCLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsaURBQThCO0lBQzlCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTs7O0lBR0ksNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsOENBQThCO0lBQTlCLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsaURBQThCO0lBQzlCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTs7O0lBR0ksNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtRQUM3QjtJQUNKO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0I7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7UUFDN0I7SUFDSjtJQUNBO1FBQ0ksNkJBQTZCO1FBQzdCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7OztJQUdJLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsaUNBQWlDO0lBQ2pDLDJDQUEyQztJQUMzQztBQUNKOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7UUFDN0I7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7UUFDN0I7SUFDSjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTs7O0lBR0ksa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLHlDQUF5QztJQUN6QyxpQ0FBaUM7SUFDakMsMkNBQTJDO0lBQzNDLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO1FBQzdCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO1FBQzdCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7OztJQUdJLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2Qix5Q0FBeUM7SUFDekMsaUNBQWlDO0lBQ2pDLDJDQUEyQztJQUMzQyxtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtRQUM3QjtJQUNKO0lBQ0E7UUFDSSwyQkFBMkI7UUFDM0I7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7UUFDN0I7SUFDSjtJQUNBO1FBQ0ksMkJBQTJCO1FBQzNCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7OztJQUdJLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2Qix5Q0FBeUM7SUFDekMsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7UUFDN0I7SUFDSjtJQUNBO1FBQ0ksMkJBQTJCO1FBQzNCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO1FBQzdCO0lBQ0o7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBOzs7SUFHSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0Qyw4Q0FBOEI7SUFBOUIsc0NBQThCO0lBQTlCLDhCQUE4QjtJQUE5QixpREFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBOzs7SUFHSSwrQkFBK0I7SUFDL0I7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0Qyw4Q0FBOEI7SUFBOUIsc0NBQThCO0lBQTlCLDhCQUE4QjtJQUE5QixpREFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBOzs7SUFHSSwwQ0FBMEM7SUFDMUM7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0Qyw4Q0FBOEI7SUFBOUIsc0NBQThCO0lBQTlCLDhCQUE4QjtJQUE5QixpREFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBOzs7SUFHSSxtQ0FBbUM7SUFDbkM7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0Qyw4Q0FBOEI7SUFBOUIsc0NBQThCO0lBQTlCLDhCQUE4QjtJQUE5QixpREFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBOzs7SUFHSSxrQ0FBa0M7SUFDbEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUNBQW1DO1FBQ25DO0lBQ0o7SUFDQTtRQUNJLG1DQUFtQztRQUNuQztJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1DQUFtQztRQUNuQztJQUNKO0lBQ0E7UUFDSSxtQ0FBbUM7UUFDbkM7SUFDSjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsc0NBQXNDO0lBQ3RDLDhDQUE4QjtJQUE5QixzQ0FBOEI7SUFBOUIsOEJBQThCO0lBQTlCLGlEQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7OztJQUdJLG1DQUFtQztJQUNuQywyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIseUNBQXlDO0lBQ3pDLGlDQUFpQztJQUNqQywyQ0FBMkM7SUFDM0MsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QztBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQ0FBa0M7UUFDbEM7SUFDSjtJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0NBQWtDO1FBQ2xDO0lBQ0o7SUFDQTtRQUNJLGtDQUFrQztRQUNsQztJQUNKO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsOENBQThCO0lBQTlCLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsaURBQThCO0lBQzlCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTs7O0lBR0ksa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQix5Q0FBeUM7SUFDekMsaUNBQWlDO0lBQ2pDLDJDQUEyQztJQUMzQyxtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsOENBQThCO0lBQTlCLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsaURBQThCO0lBQzlCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTs7O0lBR0ksK0JBQStCO0lBQy9CO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsOENBQThCO0lBQTlCLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsaURBQThCO0lBQzlCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBOzs7SUFHSSwrQkFBK0I7SUFDL0I7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0Qyw4Q0FBOEI7SUFBOUIsc0NBQThCO0lBQTlCLDhCQUE4QjtJQUE5QixpREFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7OztJQUdJLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQ0FBa0M7UUFDbEM7SUFDSjtJQUNBO1FBQ0ksbUNBQW1DO1FBQ25DO0lBQ0o7SUFDQTtRQUNJLGtDQUFrQztRQUNsQztJQUNKO0lBQ0E7UUFDSSxtQ0FBbUM7UUFDbkM7SUFDSjtJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDO0lBQ0o7SUFDQTtRQUNJLGdDQUFnQztRQUNoQztJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtDQUFrQztRQUNsQztJQUNKO0lBQ0E7UUFDSSxtQ0FBbUM7UUFDbkM7SUFDSjtJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDO0lBQ0o7SUFDQTtRQUNJLG1DQUFtQztRQUNuQztJQUNKO0lBQ0E7UUFDSSxrQ0FBa0M7UUFDbEM7SUFDSjtJQUNBO1FBQ0ksZ0NBQWdDO1FBQ2hDO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7OztJQUdJLHVDQUF1QztJQUN2QywrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qiw4Q0FBOEM7SUFDOUMsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQ0FBa0M7UUFDbEM7SUFDSjtJQUNBO1FBQ0ksbUNBQW1DO1FBQ25DO0lBQ0o7SUFDQTtRQUNJLGtDQUFrQztRQUNsQztJQUNKO0lBQ0E7UUFDSSxtQ0FBbUM7UUFDbkM7SUFDSjtJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDO0lBQ0o7SUFDQTtRQUNJLGdDQUFnQztRQUNoQztJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtDQUFrQztRQUNsQztJQUNKO0lBQ0E7UUFDSSxtQ0FBbUM7UUFDbkM7SUFDSjtJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDO0lBQ0o7SUFDQTtRQUNJLG1DQUFtQztRQUNuQztJQUNKO0lBQ0E7UUFDSSxrQ0FBa0M7UUFDbEM7SUFDSjtJQUNBO1FBQ0ksZ0NBQWdDO1FBQ2hDO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7OztJQUdJLHlDQUF5QztJQUN6QyxpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qiw4Q0FBOEM7SUFDOUMsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQ0FBc0M7UUFDdEM7SUFDSjtJQUNBO1FBQ0ksd0NBQXdDO1FBQ3hDO0lBQ0o7SUFDQTtRQUNJLHNDQUFzQztRQUN0QztJQUNKO0lBQ0E7UUFDSSx3Q0FBd0M7UUFDeEM7SUFDSjtJQUNBO1FBQ0ksc0NBQXNDO1FBQ3RDO0lBQ0o7SUFDQTtRQUNJLGtDQUFrQztRQUNsQztJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNDQUFzQztRQUN0QztJQUNKO0lBQ0E7UUFDSSx3Q0FBd0M7UUFDeEM7SUFDSjtJQUNBO1FBQ0ksc0NBQXNDO1FBQ3RDO0lBQ0o7SUFDQTtRQUNJLHdDQUF3QztRQUN4QztJQUNKO0lBQ0E7UUFDSSxzQ0FBc0M7UUFDdEM7SUFDSjtJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7OztJQUdJLDhDQUE4QztJQUM5QyxzQ0FBc0M7SUFDdEMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qiw4Q0FBOEM7SUFDOUMsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0k7UUFDSSx1Q0FBdUM7UUFDdkM7SUFDSjtJQUNBO1FBQ0ksdUNBQXVDO1FBQ3ZDO0lBQ0o7SUFDQTtRQUNJLHVDQUF1QztRQUN2QztJQUNKO0lBQ0E7UUFDSSx1Q0FBdUM7UUFDdkM7SUFDSjtJQUNBO1FBQ0ksdUNBQXVDO1FBQ3ZDO0lBQ0o7SUFDQTtRQUNJLGtDQUFrQztRQUNsQztJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHVDQUF1QztRQUN2QztJQUNKO0lBQ0E7UUFDSSx1Q0FBdUM7UUFDdkM7SUFDSjtJQUNBO1FBQ0ksdUNBQXVDO1FBQ3ZDO0lBQ0o7SUFDQTtRQUNJLHVDQUF1QztRQUN2QztJQUNKO0lBQ0E7UUFDSSx1Q0FBdUM7UUFDdkM7SUFDSjtJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7OztJQUdJLDJDQUEyQztJQUMzQyxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qiw4Q0FBOEM7SUFDOUMsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0I7SUFDSjtJQUNBO1FBQ0ksOEJBQThCO1FBQzlCO0lBQ0o7SUFDQTtRQUNJLDhCQUE4QjtRQUM5QjtJQUNKO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0I7SUFDSjtJQUNBO1FBQ0ksOEJBQThCO1FBQzlCO0lBQ0o7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLCtCQUErQjtRQUMvQjtJQUNKO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUI7SUFDSjtJQUNBO1FBQ0ksOEJBQThCO1FBQzlCO0lBQ0o7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QjtJQUNKO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUI7SUFDSjtJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTs7O0lBR0ksa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLDhDQUE4QztJQUM5QyxzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLCtCQUErQjtRQUMvQjtJQUNKO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUI7SUFDSjtJQUNBO1FBQ0ksOEJBQThCO1FBQzlCO0lBQ0o7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QjtJQUNKO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUI7SUFDSjtJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksK0JBQStCO1FBQy9CO0lBQ0o7SUFDQTtRQUNJLDhCQUE4QjtRQUM5QjtJQUNKO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUI7SUFDSjtJQUNBO1FBQ0ksNkJBQTZCO1FBQzdCO0lBQ0o7SUFDQTtRQUNJLDhCQUE4QjtRQUM5QjtJQUNKO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUI7SUFDSjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBOzs7SUFHSSxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsOENBQThDO0lBQzlDLHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksK0JBQStCO1FBQy9CO0lBQ0o7SUFDQTtRQUNJLDhCQUE4QjtRQUM5QjtJQUNKO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUI7SUFDSjtJQUNBO1FBQ0ksNkJBQTZCO1FBQzdCO0lBQ0o7SUFDQTtRQUNJLDhCQUE4QjtRQUM5QjtJQUNKO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUI7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0I7SUFDSjtJQUNBO1FBQ0ksOEJBQThCO1FBQzlCO0lBQ0o7SUFDQTtRQUNJLDhCQUE4QjtRQUM5QjtJQUNKO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0I7SUFDSjtJQUNBO1FBQ0ksOEJBQThCO1FBQzlCO0lBQ0o7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBOzs7SUFHSSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsOENBQThDO0lBQzlDLHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksK0NBQStDO1FBQy9DO0lBQ0o7SUFDQTtRQUNJLGlEQUFpRDtRQUNqRDtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLCtDQUErQztRQUMvQztJQUNKO0lBQ0E7UUFDSSxpREFBaUQ7UUFDakQ7SUFDSjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTs7O0lBR0ksNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLHlDQUF5QztJQUN6QyxpQ0FBaUM7SUFDakMsMkNBQTJDO0lBQzNDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLCtDQUErQztRQUMvQztJQUNKO0lBQ0E7UUFDSSxpREFBaUQ7UUFDakQ7SUFDSjtJQUNBO1FBQ0ksK0NBQStDO1FBQy9DO0lBQ0o7SUFDQTtRQUNJLGlEQUFpRDtRQUNqRDtJQUNKO0lBQ0E7UUFDSSwrQ0FBK0M7UUFDL0M7SUFDSjtJQUNBO1FBQ0ksaURBQWlEO1FBQ2pEO0lBQ0o7SUFDQTtRQUNJLCtDQUErQztRQUMvQztJQUNKO0lBQ0E7UUFDSSxpREFBaUQ7UUFDakQ7SUFDSjtJQUNBO1FBQ0ksNENBQTRDO1FBQzVDO0lBQ0o7SUFDQTtRQUNJLDZDQUE2QztRQUM3QztJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLCtDQUErQztRQUMvQztJQUNKO0lBQ0E7UUFDSSxpREFBaUQ7UUFDakQ7SUFDSjtJQUNBO1FBQ0ksK0NBQStDO1FBQy9DO0lBQ0o7SUFDQTtRQUNJLGlEQUFpRDtRQUNqRDtJQUNKO0lBQ0E7UUFDSSwrQ0FBK0M7UUFDL0M7SUFDSjtJQUNBO1FBQ0ksaURBQWlEO1FBQ2pEO0lBQ0o7SUFDQTtRQUNJLCtDQUErQztRQUMvQztJQUNKO0lBQ0E7UUFDSSxpREFBaUQ7UUFDakQ7SUFDSjtJQUNBO1FBQ0ksNENBQTRDO1FBQzVDO0lBQ0o7SUFDQTtRQUNJLDZDQUE2QztRQUM3QztJQUNKO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBOzs7SUFHSSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIseUNBQXlDO0lBQ3pDLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLHVDQUF1QztJQUN2QywrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBOzs7SUFHSTtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsdUNBQXVDO0lBQ3ZDLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7OztJQUdJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEM7QUFDSjs7QUFFQTs7O0lBR0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIscURBQXFEO0lBQ3JEO0FBQ0o7O0FBRUE7OztJQUdJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIscURBQXFEO0lBQ3JEO0FBQ0o7O0FBRUE7OztJQUdJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsMENBQTBDO0lBQzFDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7OztJQUdJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4Qix1Q0FBdUM7SUFDdkMsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTs7O0lBR0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLHVDQUF1QztJQUN2QywrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBOzs7SUFHSTtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsdUNBQXVDO0lBQ3ZDLCtCQUErQjtJQUMvQixtRUFBbUU7SUFDbkUsZ0NBQWdDO0lBQ2hDO0FBQ0o7O0FBRUE7OztJQUdJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsc0NBQXNDO0lBQ3RDLDhDQUE4QjtJQUE5QixzQ0FBOEI7SUFBOUIsOEJBQThCO0lBQTlCLGlEQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osVUFBVTtJQUNWLFVBQVU7SUFFViwwRkFBMEY7SUFDMUYsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QiwrQ0FBK0M7SUFDL0MsdURBQXNDO0lBQXRDLCtDQUFzQztJQUF0Qyx1Q0FBc0M7SUFBdEM7QUFDSjs7QUFFQTs7O0lBR0ksbUNBQW1DO0lBQ25DO0FBQ0o7O0FBRUE7OztJQUdJLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUNBQW1DO1FBQ25DO0lBQ0o7SUFDQTtRQUNJLG1DQUFtQztRQUNuQztJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1DQUFtQztRQUNuQztJQUNKO0lBQ0E7UUFDSSxtQ0FBbUM7UUFDbkM7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQ0FBa0M7UUFDbEMsMEJBQTBCO1FBQzFCO0lBQ0o7SUFDQTtRQUNJLGtDQUFrQztRQUNsQywwQkFBMEI7UUFDMUI7SUFDSjtJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDLDBCQUEwQjtRQUMxQjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtDQUFrQztRQUNsQywwQkFBMEI7UUFDMUI7SUFDSjtJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDLDBCQUEwQjtRQUMxQjtJQUNKO0lBQ0E7UUFDSSxrQ0FBa0M7UUFDbEMsMEJBQTBCO1FBQzFCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsOENBQThCO0lBQTlCLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsaURBQThCO0lBQzlCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUVWLDBGQUEwRjtJQUMxRixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLCtDQUErQztJQUMvQyx1REFBc0M7SUFBdEMsK0NBQXNDO0lBQXRDLHVDQUFzQztJQUF0QztBQUNKOztBQUVBOzs7SUFHSSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLHlDQUF5QztJQUN6QyxpQ0FBaUM7SUFDakMsMkNBQTJDO0lBQzNDLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEM7QUFDSjs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIseUNBQXlDO0lBQ3pDLGlDQUFpQztJQUNqQywyQ0FBMkM7SUFDM0MsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QztBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUVaO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBRVQ7QUFDSjs7QUFFQTs7Ozs7O0lBTUk7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLE1BQU07SUFDTix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTs7O0lBR0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUI7QUFDSjs7QUFFQTs7O0lBR0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTs7O0lBR0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLE9BQU87SUFDUCw4QkFBOEI7SUFDOUI7QUFDSjs7QUFFQTs7O0lBR0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsOENBQThCO0lBQTlCLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsaURBQThCO0lBQzlCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw2Q0FBNkM7SUFDN0MsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixnQ0FBZ0M7SUFDaEM7QUFDSjs7QUFFQTs7O0lBR0ksZ0RBQWdEO0lBQ2hEO0FBQ0o7O0FBRUE7OztJQUdJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsc0NBQXNDO0lBQ3RDLDhDQUE4QjtJQUE5QixzQ0FBOEI7SUFBOUIsOEJBQThCO0lBQTlCLGlEQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixRQUFRO0lBQ1IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIseURBQXlEO0lBQ3pELGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBRUE7OztJQUdJLG1DQUFtQztJQUNuQztBQUNKOztBQUVBOzs7SUFHSTtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0Qyw4Q0FBOEI7SUFBOUIsc0NBQThCO0lBQTlCLDhCQUE4QjtJQUE5QixpREFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZDQUE2QztJQUM3QyxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQztBQUNKOztBQUVBOzs7SUFHSSxpREFBaUQ7SUFDakQ7QUFDSjs7QUFFQTs7O0lBR0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsOENBQThCO0lBQTlCLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsaURBQThCO0lBQzlCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qix5REFBeUQ7SUFDekQsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakM7QUFDSjs7QUFFQTs7O0lBR0ksa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBRUE7OztJQUdJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxRQUFRO0lBQ1IsTUFBTTtJQUNOLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsMkVBQTJFO0lBQzNFLG1IQUFtSDtJQUNuSCxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsMENBQTBDO0lBQzFDO0FBQ0o7O0FBRUE7OztJQUdJLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLE1BQU07SUFDTixRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLDJFQUEyRTtJQUMzRSwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QiwwQ0FBMEM7SUFDMUM7QUFDSjs7QUFFQTs7O0lBR0ksV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsMkVBQTJFO0lBQzNFLDJDQUEyQztJQUMzQyxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLDBDQUEwQztJQUMxQztBQUNKOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLGdCQUFnQjtJQUNoQiwwRUFBMEU7SUFDMUUsMENBQTBDO0lBQzFDLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsMENBQTBDO0lBQzFDO0FBQ0o7O0FBRUE7OztJQUdJLFdBQVc7SUFDWDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZW50cmFkYS9lbnRyYWRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG59XG5cbiN1cCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuI25hdmJhclN1cHBvcnRlZENvbnRlbnQgbGkge1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG59XG5cbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IGxpIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3VwIGgyIHtcbiAgICBjb2xvcjogIzAwYzg1MSFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3d3dy50dWV4cGVydG8uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzEwL2ZvbmRvLWRlLXBhbnRhbGxhLXBhaXNhamUuanBnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ub3ZlcmxheXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgYmFja2dyb3VuZDogcmdiKDEzLCAxMywgMTQpO1xufVxuXG5cbi8qQGltcG9ydCB1cmwoJ2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpOyovXG5cbnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggMDtcbn1cblxuc2VjdGlvbiAuc2VjdGlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNTY2NTczO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI2Zvb3RlciB7XG4gICAgYmFja2dyb3VuZDogIzU2NjU3MyAhaW1wb3J0YW50O1xufVxuXG4jZm9vdGVyIGg1IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZWVlZWVlO1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI2Zvb3RlciBhIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xufVxuXG4jZm9vdGVyIHVsLnNvY2lhbCBsaSB7XG4gICAgcGFkZGluZzogM3B4IDA7XG59XG5cbiNmb290ZXIgdWwuc29jaWFsIGxpIGEgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xuICAgIHRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcbn1cblxuI2Zvb3RlciB1bC5zb2NpYWwgbGk6aG92ZXIgYSBpIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbiNmb290ZXIgdWwuc29jaWFsIGxpIGEsXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpIGEge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jZm9vdGVyIHVsLnNvY2lhbCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2VlZWVlZTtcbn1cblxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaSB7XG4gICAgcGFkZGluZzogM3B4IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xufVxuXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpOmhvdmVyIHtcbiAgICBwYWRkaW5nOiAzcHggMDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGkgYSBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaTpob3ZlciBhIGkge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgI2Zvb3RlciBoNSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn1cblxuXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICBDQVJEUyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQ0FSRFMgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cblxuXG4vKkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDApOyovXG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6ICMwMTAxMDE7XG59XG5cbi5wcmljZV90YWJsZV9jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLnByaWNlX3RhYmxlX2hlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNFRUU7XG59XG5cbi5jZW50cmFkbyB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcmljZV90YWJsZV9yb3cge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbn1cblxuLmNvc3Qge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uY29zdCBzcGFuIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5wcmljZV90YWJsZV9yb3c6bnRoLW9mLXR5cGUoZXZlbikge1xuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG59XG5cbi5idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLnJlY29tbWVuZGVkIHtcbiAgICAvKlVTRVIgREVGSU5FRCBDT0xPVVIqL1xuICAgIGJhY2tncm91bmQ6ICNGRjNBM0E7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgLypVU0VSIERFRklORUQgQ09MT1VSKi9cbiAgICBwYWRkaW5nOiAzcHggMCAzcHggMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAtMzVweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5zcGFjZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuXG4vKkFscmVhZHkgRGVmaW5lZCBDb2xvdXJzKi9cblxuXG4vKkJhY2tncm91bmQqL1xuXG4ucHJpbWFyeS1iZyB7XG4gICAgYmFja2dyb3VuZDogIzMzN0FCNztcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLnN1Y2Nlc3MtYmcge1xuICAgIGJhY2tncm91bmQ6ICM1Q0I4NUM7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5pbmZvLWJnIHtcbiAgICBiYWNrZ3JvdW5kOiAjNUJDMERFO1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4ud2FybmluZy1iZyB7XG4gICAgYmFja2dyb3VuZDogI0YwQUQ0RTtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmRhbmdlci1iZyB7XG4gICAgYmFja2dyb3VuZDogI0Q5NTM0RjtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLmRhcmstYmcge1xuICAgIGJhY2tncm91bmQ6ICM0NDQ7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5yb3lhbC1iZyB7XG4gICAgYmFja2dyb3VuZDogIzhFNzRFMjtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLnN0YXRpYy1iZyB7XG4gICAgYmFja2dyb3VuZDogIzJCQjBBNjtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuXG4vKk9ubHkgVGV4dCBDb2xvdXJzKi9cblxuLnByaW1hcnktdGV4dCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogIzMzN0FCNztcbn1cblxuLnN1Y2Nlc3MtdGV4dCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogIzVDQjg1Qztcbn1cblxuLmluZm8tdGV4dCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogIzVCQzBERTtcbn1cblxuLndhcm5pbmctdGV4dCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogI0YwQUQ0RTtcbn1cblxuLmRhbmdlci10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIGNvbG9yOiAjRDk1MzRGO1xufVxuXG4uZGFyay10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIGNvbG9yOiAjNDQ0O1xufVxuXG4ucm95YWwtdGV4dCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogIzhFNzRFMjtcbn1cblxuLnN0YXRpYy10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIGNvbG9yOiAjMkJCMEE2O1xufVxuXG5cbi8qQWRkaXRpb25hbCBCdXR0b24gc3R5bGVzKi9cblxuXG4vKkJUTi1EQVJLKi9cblxuLmJ0bi1kYXJrIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICAgIGJvcmRlci1jb2xvcjogIzQ0NDtcbn1cblxuLmJ0bi1kYXJrOmhvdmVyLFxuLmJ0bi1kYXJrOmZvY3VzLFxuLmJ0bi1kYXJrLmZvY3VzLFxuLmJ0bi1kYXJrOmFjdGl2ZSxcbi5idG4tZGFyay5hY3RpdmUsXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1kYXJrIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgIGJvcmRlci1jb2xvcjogIzIyMjtcbn1cblxuLmJ0bi1kYXJrOmFjdGl2ZSxcbi5idG4tZGFyay5hY3RpdmUsXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG5cbi8qQlROLVJPWUFMLS0tLS0tLS0tKi9cblxuLmJ0bi1yb3lhbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhFNzRFMjtcbiAgICBib3JkZXItY29sb3I6ICM4RTc0RTI7XG59XG5cbi5idG4tcm95YWw6aG92ZXIsXG4uYnRuLXJveWFsOmZvY3VzLFxuLmJ0bi1yb3lhbC5mb2N1cyxcbi5idG4tcm95YWw6YWN0aXZlLFxuLmJ0bi1yb3lhbC5hY3RpdmUsXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1yb3lhbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0NTFFODtcbiAgICBib3JkZXItY29sb3I6ICM3NDUxRTg7XG59XG5cbi5idG4tcm95YWw6YWN0aXZlLFxuLmJ0bi1yb3lhbC5hY3RpdmUsXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1yb3lhbCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuXG4vKkJUTi1TVEFUSUMtLS0tLS0tLS0qL1xuXG4uYnRuLXN0YXRpYyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCQjBBNjtcbiAgICBib3JkZXItY29sb3I6ICMyQkIwQTY7XG59XG5cbi5idG4tc3RhdGljOmhvdmVyLFxuLmJ0bi1zdGF0aWM6Zm9jdXMsXG4uYnRuLXN0YXRpYy5mb2N1cyxcbi5idG4tc3RhdGljOmFjdGl2ZSxcbi5idG4tc3RhdGljLmFjdGl2ZSxcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXN0YXRpYyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3QTA5NDtcbiAgICBib3JkZXItY29sb3I6ICMwN0EwOTQ7XG59XG5cbi5idG4tc3RhdGljOmFjdGl2ZSxcbi5idG4tc3RhdGljLmFjdGl2ZSxcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXN0YXRpYyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuXG4vKiFcbiAqIEhvdmVyLmNzcyAoaHR0cDovL2lhbmx1bm4uY28udWsvKVxuICogVmVyc2lvbjogMS4wLjEwXG4gKiBBdXRob3I6IElhbiBMdW5uIEBJYW5MdW5uXG4gKiBBdXRob3IgVVJMOiBodHRwOi8vaWFubHVubi5jby51ay9cbiAqIEdpdGh1YjogaHR0cHM6Ly9naXRodWIuY29tL0lhbkx1bm4vSG92ZXJcblxuICogTWFkZSBhdmFpbGFibGUgdW5kZXIgYSBNSVQgTGljZW5zZTpcbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cbiAqIEhvdmVyLmNzcyBDb3B5cmlnaHQgSWFuIEx1bm4gMjAxNC5cbiAqL1xuXG4uYnV0dG9uIHtcbiAgICBtYXJnaW46IC40ZW07XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzY2NjtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLmdyb3cge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLmdyb3c6YWN0aXZlLFxuLmdyb3c6Zm9jdXMsXG4uZ3Jvdzpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXG59XG5cbi5zaHJpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLnNocmluazphY3RpdmUsXG4uc2hyaW5rOmZvY3VzLFxuLnNocmluazpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XG4gICAgMjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxuICAgIH1cbiAgICA3NSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpXG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAyNSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSlcbiAgICB9XG59XG5cbi5wdWxzZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLnB1bHNlOmFjdGl2ZSxcbi5wdWxzZTpmb2N1cyxcbi5wdWxzZTpob3ZlciB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVsc2U7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZS1ncm93IHtcbiAgICB0byB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2UtZ3JvdyB7XG4gICAgdG8ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXG4gICAgfVxufVxuXG4ucHVsc2UtZ3JvdyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLnB1bHNlLWdyb3c6YWN0aXZlLFxuLnB1bHNlLWdyb3c6Zm9jdXMsXG4ucHVsc2UtZ3Jvdzpob3ZlciB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVsc2UtZ3JvdztcbiAgICBhbmltYXRpb24tbmFtZTogcHVsc2UtZ3JvdztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Utc2hyaW5rIHtcbiAgICB0byB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSlcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Utc2hyaW5rIHtcbiAgICB0byB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSlcbiAgICB9XG59XG5cbi5wdWxzZS1zaHJpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5wdWxzZS1zaHJpbms6YWN0aXZlLFxuLnB1bHNlLXNocmluazpmb2N1cyxcbi5wdWxzZS1zaHJpbms6aG92ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHB1bHNlLXNocmluaztcbiAgICBhbmltYXRpb24tbmFtZTogcHVsc2Utc2hyaW5rO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwdXNoIHtcbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSlcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcHVzaCB7XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpXG4gICAgfVxufVxuXG4ucHVzaCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLnB1c2g6YWN0aXZlLFxuLnB1c2g6Zm9jdXMsXG4ucHVzaDpob3ZlciB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVzaDtcbiAgICBhbmltYXRpb24tbmFtZTogcHVzaDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcG9wIHtcbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSlcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcG9wIHtcbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSlcbiAgICB9XG59XG5cbi5wb3Age1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5wb3A6YWN0aXZlLFxuLnBvcDpmb2N1cyxcbi5wb3A6aG92ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHBvcDtcbiAgICBhbmltYXRpb24tbmFtZTogcG9wO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxXG59XG5cbi5yb3RhdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLnJvdGF0ZTphY3RpdmUsXG4ucm90YXRlOmZvY3VzLFxuLnJvdGF0ZTpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0ZGVnKVxufVxuXG4uZ3Jvdy1yb3RhdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLmdyb3ctcm90YXRlOmFjdGl2ZSxcbi5ncm93LXJvdGF0ZTpmb2N1cyxcbi5ncm93LXJvdGF0ZTpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZylcbn1cblxuLmZsb2F0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5mbG9hdDphY3RpdmUsXG4uZmxvYXQ6Zm9jdXMsXG4uZmxvYXQ6aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KVxufVxuXG4uc2luayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4uc2luazphY3RpdmUsXG4uc2luazpmb2N1cyxcbi5zaW5rOmhvdmVyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBob3ZlciB7XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBob3ZlciB7XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KVxuICAgIH1cbn1cblxuLmhvdmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5ob3ZlcjphY3RpdmUsXG4uaG92ZXI6Zm9jdXMsXG4uaG92ZXI6aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBob3ZlcjtcbiAgICBhbmltYXRpb24tbmFtZTogaG92ZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAuM3M7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuM3M7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBoYW5nIHtcbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweClcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgaGFuZyB7XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweClcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpXG4gICAgfVxufVxuXG4uaGFuZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4uaGFuZzphY3RpdmUsXG4uaGFuZzpmb2N1cyxcbi5oYW5nOmhvdmVyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhhbmc7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGhhbmc7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAuM3M7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuM3M7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlXG59XG5cbi5za2V3IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5za2V3OmFjdGl2ZSxcbi5za2V3OmZvY3VzLFxuLnNrZXc6aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0xMGRlZylcbn1cblxuLnNrZXctZm9yd2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLnNrZXctZm9yd2FyZDphY3RpdmUsXG4uc2tldy1mb3J3YXJkOmZvY3VzLFxuLnNrZXctZm9yd2FyZDpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTEwZGVnKVxufVxuXG4uc2tldy1iYWNrd2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLnNrZXctYmFja3dhcmQ6YWN0aXZlLFxuLnNrZXctYmFja3dhcmQ6Zm9jdXMsXG4uc2tldy1iYWNrd2FyZDpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMTBkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tldygxMGRlZylcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHdvYmJsZS12ZXJ0aWNhbCB7XG4gICAgMTYuNjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweClcbiAgICB9XG4gICAgMzMuMyUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpXG4gICAgfVxuICAgIDQ5Ljk1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpXG4gICAgfVxuICAgIDY2LjYlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KVxuICAgIH1cbiAgICA4My4yNSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyB3b2JibGUtdmVydGljYWwge1xuICAgIDE2LjY1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpXG4gICAgfVxuICAgIDMzLjMlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KVxuICAgIH1cbiAgICA0OS45NSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KVxuICAgIH1cbiAgICA2Ni42JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweClcbiAgICB9XG4gICAgODMuMjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweClcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcbiAgICB9XG59XG5cbi53b2JibGUtdmVydGljYWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi53b2JibGUtdmVydGljYWw6YWN0aXZlLFxuLndvYmJsZS12ZXJ0aWNhbDpmb2N1cyxcbi53b2JibGUtdmVydGljYWw6aG92ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHdvYmJsZS12ZXJ0aWNhbDtcbiAgICBhbmltYXRpb24tbmFtZTogd29iYmxlLXZlcnRpY2FsO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDFcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHdvYmJsZS1ob3Jpem9udGFsIHtcbiAgICAxNi42NSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KVxuICAgIH1cbiAgICAzMy4zJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweClcbiAgICB9XG4gICAgNDkuOTUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweClcbiAgICB9XG4gICAgNjYuNiUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpXG4gICAgfVxuICAgIDgzLjI1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHdvYmJsZS1ob3Jpem9udGFsIHtcbiAgICAxNi42NSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KVxuICAgIH1cbiAgICAzMy4zJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweClcbiAgICB9XG4gICAgNDkuOTUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweClcbiAgICB9XG4gICAgNjYuNiUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpXG4gICAgfVxuICAgIDgzLjI1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXG4gICAgfVxufVxuXG4ud29iYmxlLWhvcml6b250YWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi53b2JibGUtaG9yaXpvbnRhbDphY3RpdmUsXG4ud29iYmxlLWhvcml6b250YWw6Zm9jdXMsXG4ud29iYmxlLWhvcml6b250YWw6aG92ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHdvYmJsZS1ob3Jpem9udGFsO1xuICAgIGFuaW1hdGlvbi1uYW1lOiB3b2JibGUtaG9yaXpvbnRhbDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB3b2JibGUtdG8tYm90dG9tLXJpZ2h0IHtcbiAgICAxNi42NSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwgOHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LCA4cHgpXG4gICAgfVxuICAgIDMzLjMlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNnB4LCAtNnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTZweCwgLTZweClcbiAgICB9XG4gICAgNDkuOTUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIDRweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgNHB4KVxuICAgIH1cbiAgICA2Ni42JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpXG4gICAgfVxuICAgIDgzLjI1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweClcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApXG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHdvYmJsZS10by1ib3R0b20tcmlnaHQge1xuICAgIDE2LjY1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LCA4cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsIDhweClcbiAgICB9XG4gICAgMzMuMyUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC02cHgsIC02cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNnB4LCAtNnB4KVxuICAgIH1cbiAgICA0OS45NSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgNHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LCA0cHgpXG4gICAgfVxuICAgIDY2LjYlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweClcbiAgICB9XG4gICAgODMuMjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMClcbiAgICB9XG59XG5cbi53b2JibGUtdG8tYm90dG9tLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4ud29iYmxlLXRvLWJvdHRvbS1yaWdodDphY3RpdmUsXG4ud29iYmxlLXRvLWJvdHRvbS1yaWdodDpmb2N1cyxcbi53b2JibGUtdG8tYm90dG9tLXJpZ2h0OmhvdmVyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB3b2JibGUtdG8tYm90dG9tLXJpZ2h0O1xuICAgIGFuaW1hdGlvbi1uYW1lOiB3b2JibGUtdG8tYm90dG9tLXJpZ2h0O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDFcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHdvYmJsZS10by10b3AtcmlnaHQge1xuICAgIDE2LjY1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LCAtOHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LCAtOHB4KVxuICAgIH1cbiAgICAzMy4zJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTZweCwgNnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTZweCwgNnB4KVxuICAgIH1cbiAgICA0OS45NSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgLTRweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgLTRweClcbiAgICB9XG4gICAgNjYuNiUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweClcbiAgICB9XG4gICAgODMuMjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyB3b2JibGUtdG8tdG9wLXJpZ2h0IHtcbiAgICAxNi42NSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwgLThweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwgLThweClcbiAgICB9XG4gICAgMzMuMyUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC02cHgsIDZweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02cHgsIDZweClcbiAgICB9XG4gICAgNDkuOTUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIC00cHgpXG4gICAgfVxuICAgIDY2LjYlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpXG4gICAgfVxuICAgIDgzLjI1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMClcbiAgICB9XG59XG5cbi53b2JibGUtdG8tdG9wLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4ud29iYmxlLXRvLXRvcC1yaWdodDphY3RpdmUsXG4ud29iYmxlLXRvLXRvcC1yaWdodDpmb2N1cyxcbi53b2JibGUtdG8tdG9wLXJpZ2h0OmhvdmVyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB3b2JibGUtdG8tdG9wLXJpZ2h0O1xuICAgIGFuaW1hdGlvbi1uYW1lOiB3b2JibGUtdG8tdG9wLXJpZ2h0O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDFcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHdvYmJsZS10b3Age1xuICAgIDE2LjY1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0xMmRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldygtMTJkZWcpXG4gICAgfVxuICAgIDMzLjMlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMTBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMTBkZWcpXG4gICAgfVxuICAgIDQ5Ljk1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC02ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KC02ZGVnKVxuICAgIH1cbiAgICA2Ni42JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDRkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoNGRlZylcbiAgICB9XG4gICAgODMuMjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTJkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoLTJkZWcpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KDApXG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHdvYmJsZS10b3Age1xuICAgIDE2LjY1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0xMmRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldygtMTJkZWcpXG4gICAgfVxuICAgIDMzLjMlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMTBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMTBkZWcpXG4gICAgfVxuICAgIDQ5Ljk1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC02ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KC02ZGVnKVxuICAgIH1cbiAgICA2Ni42JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDRkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoNGRlZylcbiAgICB9XG4gICAgODMuMjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTJkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoLTJkZWcpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KDApXG4gICAgfVxufVxuXG4ud29iYmxlLXRvcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi53b2JibGUtdG9wOmFjdGl2ZSxcbi53b2JibGUtdG9wOmZvY3VzLFxuLndvYmJsZS10b3A6aG92ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHdvYmJsZS10b3A7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHdvYmJsZS10b3A7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgd29iYmxlLWJvdHRvbSB7XG4gICAgMTYuNjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEyZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KC0xMmRlZylcbiAgICB9XG4gICAgMzMuMyUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygxMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldygxMGRlZylcbiAgICB9XG4gICAgNDkuOTUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTZkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoLTZkZWcpXG4gICAgfVxuICAgIDY2LjYlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoNGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldyg0ZGVnKVxuICAgIH1cbiAgICA4My4yNSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMmRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldygtMmRlZylcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMClcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgd29iYmxlLWJvdHRvbSB7XG4gICAgMTYuNjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEyZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KC0xMmRlZylcbiAgICB9XG4gICAgMzMuMyUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygxMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldygxMGRlZylcbiAgICB9XG4gICAgNDkuOTUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTZkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoLTZkZWcpXG4gICAgfVxuICAgIDY2LjYlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoNGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldyg0ZGVnKVxuICAgIH1cbiAgICA4My4yNSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMmRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldygtMmRlZylcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMClcbiAgICB9XG59XG5cbi53b2JibGUtYm90dG9tIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLndvYmJsZS1ib3R0b206YWN0aXZlLFxuLndvYmJsZS1ib3R0b206Zm9jdXMsXG4ud29iYmxlLWJvdHRvbTpob3ZlciB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogd29iYmxlLWJvdHRvbTtcbiAgICBhbmltYXRpb24tbmFtZTogd29iYmxlLWJvdHRvbTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB3b2JibGUtc2tldyB7XG4gICAgMTYuNjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEyZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KC0xMmRlZylcbiAgICB9XG4gICAgMzMuMyUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygxMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldygxMGRlZylcbiAgICB9XG4gICAgNDkuOTUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTZkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoLTZkZWcpXG4gICAgfVxuICAgIDY2LjYlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoNGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldyg0ZGVnKVxuICAgIH1cbiAgICA4My4yNSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMmRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldygtMmRlZylcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMClcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgd29iYmxlLXNrZXcge1xuICAgIDE2LjY1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0xMmRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldygtMTJkZWcpXG4gICAgfVxuICAgIDMzLjMlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMTBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMTBkZWcpXG4gICAgfVxuICAgIDQ5Ljk1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC02ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KC02ZGVnKVxuICAgIH1cbiAgICA2Ni42JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDRkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoNGRlZylcbiAgICB9XG4gICAgODMuMjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTJkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoLTJkZWcpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KDApXG4gICAgfVxufVxuXG4ud29iYmxlLXNrZXcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi53b2JibGUtc2tldzphY3RpdmUsXG4ud29iYmxlLXNrZXc6Zm9jdXMsXG4ud29iYmxlLXNrZXc6aG92ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHdvYmJsZS1za2V3O1xuICAgIGFuaW1hdGlvbi1uYW1lOiB3b2JibGUtc2tldztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBidXp6IHtcbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIHJvdGF0ZSgyZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgcm90YXRlKDJkZWcpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGUoLTJkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlKC0yZGVnKVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBidXp6IHtcbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIHJvdGF0ZSgyZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgcm90YXRlKDJkZWcpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGUoLTJkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlKC0yZGVnKVxuICAgIH1cbn1cblxuLmJ1enoge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5idXp6OmFjdGl2ZSxcbi5idXp6OmZvY3VzLFxuLmJ1eno6aG92ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJ1eno7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGJ1eno7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IC4xNXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuMTVzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBidXp6LW91dCB7XG4gICAgMTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSByb3RhdGUoMmRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIHJvdGF0ZSgyZGVnKVxuICAgIH1cbiAgICAyMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGUoLTJkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlKC0yZGVnKVxuICAgIH1cbiAgICAzMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIHJvdGF0ZSgyZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgcm90YXRlKDJkZWcpXG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZSgtMmRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGUoLTJkZWcpXG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgcm90YXRlKDFkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGUoMWRlZylcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCkgcm90YXRlKC0xZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpIHJvdGF0ZSgtMWRlZylcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGUoMWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZSgxZGVnKVxuICAgIH1cbiAgICA4MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KSByb3RhdGUoLTFkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCkgcm90YXRlKC0xZGVnKVxuICAgIH1cbiAgICA5MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpIHJvdGF0ZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgcm90YXRlKDApXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSByb3RhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSByb3RhdGUoMClcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYnV6ei1vdXQge1xuICAgIDEwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgcm90YXRlKDJkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSByb3RhdGUoMmRlZylcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlKC0yZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZSgtMmRlZylcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSByb3RhdGUoMmRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIHJvdGF0ZSgyZGVnKVxuICAgIH1cbiAgICA0MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGUoLTJkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlKC0yZGVnKVxuICAgIH1cbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZSgxZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgcm90YXRlKDFkZWcpXG4gICAgfVxuICAgIDYwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpIHJvdGF0ZSgtMWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KSByb3RhdGUoLTFkZWcpXG4gICAgfVxuICAgIDcwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgcm90YXRlKDFkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGUoMWRlZylcbiAgICB9XG4gICAgODAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCkgcm90YXRlKC0xZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpIHJvdGF0ZSgtMWRlZylcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KSByb3RhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpIHJvdGF0ZSgwKVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFweCkgcm90YXRlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFweCkgcm90YXRlKDApXG4gICAgfVxufVxuXG4uYnV6ei1vdXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5idXp6LW91dDphY3RpdmUsXG4uYnV6ei1vdXQ6Zm9jdXMsXG4uYnV6ei1vdXQ6aG92ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJ1enotb3V0O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBidXp6LW91dDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjc1cztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC43NXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxXG59XG5cbi5ib3JkZXItZmFkZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4ICNlMWUxZTEsIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4uYm9yZGVyLWZhZGU6YWN0aXZlLFxuLmJvcmRlci1mYWRlOmZvY3VzLFxuLmJvcmRlci1mYWRlOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA0cHggIzY2NiwgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5ob2xsb3cge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDRweCAjZTFlMWUxLCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLmhvbGxvdzphY3RpdmUsXG4uaG9sbG93OmZvY3VzLFxuLmhvbGxvdzpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogMCAwXG59XG5cbi50cmltIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLnRyaW06YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAjZmZmIHNvbGlkIDRweDtcbiAgICB0b3A6IDRweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgcmlnaHQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eVxufVxuXG4udHJpbTphY3RpdmU6YmVmb3JlLFxuLnRyaW06Zm9jdXM6YmVmb3JlLFxuLnRyaW06aG92ZXI6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxXG59XG5cbi5vdXRsaW5lLW91dHdhcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4ub3V0bGluZS1vdXR3YXJkOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogI2UxZTFlMSBzb2xpZCA0cHg7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRcbn1cblxuLm91dGxpbmUtb3V0d2FyZDphY3RpdmU6YmVmb3JlLFxuLm91dGxpbmUtb3V0d2FyZDpmb2N1czpiZWZvcmUsXG4ub3V0bGluZS1vdXR3YXJkOmhvdmVyOmJlZm9yZSB7XG4gICAgdG9wOiAtOHB4O1xuICAgIHJpZ2h0OiAtOHB4O1xuICAgIGJvdHRvbTogLThweDtcbiAgICBsZWZ0OiAtOHB4XG59XG5cbi5vdXRsaW5lLWlud2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5vdXRsaW5lLWlud2FyZDpiZWZvcmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6ICNlMWUxZTEgc29saWQgNHB4O1xuICAgIHRvcDogLTE2cHg7XG4gICAgcmlnaHQ6IC0xNnB4O1xuICAgIGJvdHRvbTogLTE2cHg7XG4gICAgbGVmdDogLTE2cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XG59XG5cbi5vdXRsaW5lLWlud2FyZDphY3RpdmU6YmVmb3JlLFxuLm91dGxpbmUtaW53YXJkOmZvY3VzOmJlZm9yZSxcbi5vdXRsaW5lLWlud2FyZDpob3ZlcjpiZWZvcmUge1xuICAgIHRvcDogLThweDtcbiAgICByaWdodDogLThweDtcbiAgICBib3R0b206IC04cHg7XG4gICAgbGVmdDogLThweDtcbiAgICBvcGFjaXR5OiAxXG59XG5cbi5yb3VuZC1jb3JuZXJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLXJhZGl1cztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItcmFkaXVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLnJvdW5kLWNvcm5lcnM6YWN0aXZlLFxuLnJvdW5kLWNvcm5lcnM6Zm9jdXMsXG4ucm91bmQtY29ybmVyczpob3ZlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtXG59XG5cbi5nbG93IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLmdsb3c6YWN0aXZlLFxuLmdsb3c6Zm9jdXMsXG4uZ2xvdzpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIC42KVxufVxuXG4uYm94LXNoYWRvdy1vdXRzZXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4uYm94LXNoYWRvdy1vdXRzZXQ6YWN0aXZlLFxuLmJveC1zaGFkb3ctb3V0c2V0OmZvY3VzLFxuLmJveC1zaGFkb3ctb3V0c2V0OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIC42KVxufVxuXG4uYm94LXNoYWRvdy1pbnNldCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCByZ2JhKDAsIDAsIDAsIC42KSwgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKVxufVxuXG4uYm94LXNoYWRvdy1pbnNldDphY3RpdmUsXG4uYm94LXNoYWRvdy1pbnNldDpmb2N1cyxcbi5ib3gtc2hhZG93LWluc2V0OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIC42KSwgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5mbG9hdC1zaGFkb3cge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5mbG9hdC1zaGFkb3c6YmVmb3JlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gICAgY29udGVudDogJyc7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDUlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlLCByZ2JhKDAsIDAsIDAsIC4zNSkgMCwgcmdiYSgwLCAwLCAwLCAwKSA4MCUpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgwLCAwLCAwLCAuMzUpIDAsIHJnYmEoMCwgMCwgMCwgMCkgODAlKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5XG59XG5cbi5mbG9hdC1zaGFkb3c6YWN0aXZlLFxuLmZsb2F0LXNoYWRvdzpmb2N1cyxcbi5mbG9hdC1zaGFkb3c6aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KVxufVxuXG4uZmxvYXQtc2hhZG93OmFjdGl2ZTpiZWZvcmUsXG4uZmxvYXQtc2hhZG93OmZvY3VzOmJlZm9yZSxcbi5mbG9hdC1zaGFkb3c6aG92ZXI6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweClcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGhvdmVyIHtcbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpXG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhvdmVyIHtcbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpXG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgaG92ZXItc2hhZG93IHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xuICAgICAgICBvcGFjaXR5OiAuNFxuICAgIH1cbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gICAgICAgIG9wYWNpdHk6IC40XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhvdmVyLXNoYWRvdyB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcbiAgICAgICAgb3BhY2l0eTogLjRcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xuICAgICAgICBvcGFjaXR5OiAuNFxuICAgIH1cbn1cblxuLmhvdmVyLXNoYWRvdyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLmhvdmVyLXNoYWRvdzpiZWZvcmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBjb250ZW50OiAnJztcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogNSU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UsIHJnYmEoMCwgMCwgMCwgLjM1KSAwLCByZ2JhKDAsIDAsIDAsIDApIDgwJSk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDAsIDAsIDAsIC4zNSkgMCwgcmdiYSgwLCAwLCAwLCAwKSA4MCUpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHlcbn1cblxuLmhvdmVyLXNoYWRvdzphY3RpdmUsXG4uaG92ZXItc2hhZG93OmZvY3VzLFxuLmhvdmVyLXNoYWRvdzpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhvdmVyO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBob3ZlcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC4zcztcbiAgICBhbmltYXRpb24tZGVsYXk6IC4zcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGVcbn1cblxuLmhvdmVyLXNoYWRvdzphY3RpdmU6YmVmb3JlLFxuLmhvdmVyLXNoYWRvdzpmb2N1czpiZWZvcmUsXG4uaG92ZXItc2hhZG93OmhvdmVyOmJlZm9yZSB7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBob3Zlci1zaGFkb3c7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGhvdmVyLXNoYWRvdztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC4zcztcbiAgICBhbmltYXRpb24tZGVsYXk6IC4zcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGVcbn1cblxuLnNoYWRvdy1yYWRpYWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4uc2hhZG93LXJhZGlhbDphZnRlcixcbi5zaGFkb3ctcmFkaWFsOmJlZm9yZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eVxufVxuXG4uc2hhZG93LXJhZGlhbDpiZWZvcmUge1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCg1MCUgMTUwJSwgZWxsaXBzZSwgcmdiYSgwLCAwLCAwLCAuNikgMCwgcmdiYSgwLCAwLCAwLCAwKSA4MCUpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IDUwJSAxNTAlLCByZ2JhKDAsIDAsIDAsIC42KSAwLCByZ2JhKDAsIDAsIDAsIDApIDgwJSlcbn1cblxuLnNoYWRvdy1yYWRpYWw6YWZ0ZXIge1xuICAgIHRvcDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCg1MCUgLTUwJSwgZWxsaXBzZSwgcmdiYSgwLCAwLCAwLCAuNikgMCwgcmdiYSgwLCAwLCAwLCAwKSA4MCUpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IDUwJSAtNTAlLCByZ2JhKDAsIDAsIDAsIC42KSAwLCByZ2JhKDAsIDAsIDAsIDApIDgwJSlcbn1cblxuLnNoYWRvdy1yYWRpYWw6YWN0aXZlOmFmdGVyLFxuLnNoYWRvdy1yYWRpYWw6YWN0aXZlOmJlZm9yZSxcbi5zaGFkb3ctcmFkaWFsOmZvY3VzOmFmdGVyLFxuLnNoYWRvdy1yYWRpYWw6Zm9jdXM6YmVmb3JlLFxuLnNoYWRvdy1yYWRpYWw6aG92ZXI6YWZ0ZXIsXG4uc2hhZG93LXJhZGlhbDpob3ZlcjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDFcbn1cblxuLmJ1YmJsZS10b3Age1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4uYnViYmxlLXRvcDpiZWZvcmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRvcDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3A7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICB0b3A6IDA7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNlMWUxZTFcbn1cblxuLmJ1YmJsZS10b3A6YWN0aXZlOmJlZm9yZSxcbi5idWJibGUtdG9wOmZvY3VzOmJlZm9yZSxcbi5idWJibGUtdG9wOmhvdmVyOmJlZm9yZSB7XG4gICAgdG9wOiAtMTBweFxufVxuXG4uYnViYmxlLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLmJ1YmJsZS1yaWdodDpiZWZvcmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xuICAgIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZTFlMWUxXG59XG5cbi5idWJibGUtcmlnaHQ6YWN0aXZlOmJlZm9yZSxcbi5idWJibGUtcmlnaHQ6Zm9jdXM6YmVmb3JlLFxuLmJ1YmJsZS1yaWdodDpob3ZlcjpiZWZvcmUge1xuICAgIHJpZ2h0OiAtMTBweFxufVxuXG4uYnViYmxlLWJvdHRvbSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5idWJibGUtYm90dG9tOmJlZm9yZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm90dG9tO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvdHRvbTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAwO1xuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxufVxuXG4uYnViYmxlLWJvdHRvbTphY3RpdmU6YmVmb3JlLFxuLmJ1YmJsZS1ib3R0b206Zm9jdXM6YmVmb3JlLFxuLmJ1YmJsZS1ib3R0b206aG92ZXI6YmVmb3JlIHtcbiAgICBib3R0b206IC0xMHB4XG59XG5cbi5idWJibGUtbGVmdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5idWJibGUtbGVmdDpiZWZvcmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZTFlMWUxIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50XG59XG5cbi5idWJibGUtbGVmdDphY3RpdmU6YmVmb3JlLFxuLmJ1YmJsZS1sZWZ0OmZvY3VzOmJlZm9yZSxcbi5idWJibGUtbGVmdDpob3ZlcjpiZWZvcmUge1xuICAgIGxlZnQ6IC0xMHB4XG59XG5cbi5idWJibGUtZmxvYXQtdG9wIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4uYnViYmxlLWZsb2F0LXRvcDpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBjb250ZW50OiAnJztcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgIHRvcDogMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZTFlMWUxO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRvcDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3Bcbn1cblxuLmJ1YmJsZS1mbG9hdC10b3A6YWN0aXZlLFxuLmJ1YmJsZS1mbG9hdC10b3A6Zm9jdXMsXG4uYnViYmxlLWZsb2F0LXRvcDpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHRyYW5zbGF0ZVooMClcbn1cblxuLmJ1YmJsZS1mbG9hdC10b3A6YWN0aXZlOmJlZm9yZSxcbi5idWJibGUtZmxvYXQtdG9wOmZvY3VzOmJlZm9yZSxcbi5idWJibGUtZmxvYXQtdG9wOmhvdmVyOmJlZm9yZSB7XG4gICAgdG9wOiAtMTBweFxufVxuXG4uYnViYmxlLWZsb2F0LXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4uYnViYmxlLWZsb2F0LXJpZ2h0OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICByaWdodDogMDtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTBweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNlMWUxZTE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHRcbn1cblxuLmJ1YmJsZS1mbG9hdC1yaWdodDphY3RpdmUsXG4uYnViYmxlLWZsb2F0LXJpZ2h0OmZvY3VzLFxuLmJ1YmJsZS1mbG9hdC1yaWdodDpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpXG59XG5cbi5idWJibGUtZmxvYXQtcmlnaHQ6YWN0aXZlOmJlZm9yZSxcbi5idWJibGUtZmxvYXQtcmlnaHQ6Zm9jdXM6YmVmb3JlLFxuLmJ1YmJsZS1mbG9hdC1yaWdodDpob3ZlcjpiZWZvcmUge1xuICAgIHJpZ2h0OiAtMTBweFxufVxuXG4uYnViYmxlLWZsb2F0LWJvdHRvbSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLmJ1YmJsZS1mbG9hdC1ib3R0b206YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gICAgY29udGVudDogJyc7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAwO1xuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBib3R0b207XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm90dG9tXG59XG5cbi5idWJibGUtZmxvYXQtYm90dG9tOmFjdGl2ZSxcbi5idWJibGUtZmxvYXQtYm90dG9tOmZvY3VzLFxuLmJ1YmJsZS1mbG9hdC1ib3R0b206aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHRyYW5zbGF0ZVooMClcbn1cblxuLmJ1YmJsZS1mbG9hdC1ib3R0b206YWN0aXZlOmJlZm9yZSxcbi5idWJibGUtZmxvYXQtYm90dG9tOmZvY3VzOmJlZm9yZSxcbi5idWJibGUtZmxvYXQtYm90dG9tOmhvdmVyOmJlZm9yZSB7XG4gICAgYm90dG9tOiAtMTBweFxufVxuXG4uYnViYmxlLWZsb2F0LWxlZnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApXG59XG5cbi5idWJibGUtZmxvYXQtbGVmdDpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBjb250ZW50OiAnJztcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNlMWUxZTEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0XG59XG5cbi5idWJibGUtZmxvYXQtbGVmdDphY3RpdmUsXG4uYnViYmxlLWZsb2F0LWxlZnQ6Zm9jdXMsXG4uYnViYmxlLWZsb2F0LWxlZnQ6aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweClcbn1cblxuLmJ1YmJsZS1mbG9hdC1sZWZ0OmFjdGl2ZTpiZWZvcmUsXG4uYnViYmxlLWZsb2F0LWxlZnQ6Zm9jdXM6YmVmb3JlLFxuLmJ1YmJsZS1mbG9hdC1sZWZ0OmhvdmVyOmJlZm9yZSB7XG4gICAgbGVmdDogLTEwcHhcbn1cblxuLmN1cmwtdG9wLWxlZnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4uY3VybC10b3AtbGVmdDpiZWZvcmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiAnJztcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmIDQ1JSwgI2FhYSA1MCUsICNjY2MgNTYlLCAjZmZmIDgwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6IERYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KEdyYWRpZW50VHlwZT0wLCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyMwMDAwMDAnKTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjQpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBoZWlnaHQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGhlaWdodFxufVxuXG4uY3VybC10b3AtbGVmdDphY3RpdmU6YmVmb3JlLFxuLmN1cmwtdG9wLWxlZnQ6Zm9jdXM6YmVmb3JlLFxuLmN1cmwtdG9wLWxlZnQ6aG92ZXI6YmVmb3JlIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHhcbn1cblxuLmN1cmwtdG9wLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLmN1cmwtdG9wLXJpZ2h0OmJlZm9yZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZmZmIDQ1JSwgI2FhYSA1MCUsICNjY2MgNTYlLCAjZmZmIDgwJSk7XG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjQpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBoZWlnaHQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGhlaWdodFxufVxuXG4uY3VybC10b3AtcmlnaHQ6YWN0aXZlOmJlZm9yZSxcbi5jdXJsLXRvcC1yaWdodDpmb2N1czpiZWZvcmUsXG4uY3VybC10b3AtcmlnaHQ6aG92ZXI6YmVmb3JlIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHhcbn1cblxuLmN1cmwtYm90dG9tLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLmN1cmwtYm90dG9tLXJpZ2h0OmJlZm9yZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmIDQ1JSwgI2FhYSA1MCUsICNjY2MgNTYlLCAjZmZmIDgwJSk7XG4gICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDAsIDAsIDAsIC40KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aCwgaGVpZ2h0O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBoZWlnaHRcbn1cblxuLmN1cmwtYm90dG9tLXJpZ2h0OmFjdGl2ZTpiZWZvcmUsXG4uY3VybC1ib3R0b20tcmlnaHQ6Zm9jdXM6YmVmb3JlLFxuLmN1cmwtYm90dG9tLXJpZ2h0OmhvdmVyOmJlZm9yZSB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4XG59XG5cbi5jdXJsLWJvdHRvbS1sZWZ0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMClcbn1cblxuLmN1cmwtYm90dG9tLWxlZnQ6YmVmb3JlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmIDQ1JSwgI2FhYSA1MCUsICNjY2MgNTYlLCAjZmZmIDgwJSk7XG4gICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgLjQpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBoZWlnaHQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGhlaWdodFxufVxuXG4uY3VybC1ib3R0b20tbGVmdDphY3RpdmU6YmVmb3JlLFxuLmN1cmwtYm90dG9tLWxlZnQ6Zm9jdXM6YmVmb3JlLFxuLmN1cmwtYm90dG9tLWxlZnQ6aG92ZXI6YmVmb3JlIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHhcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/entrada/entrada.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/entrada/entrada.component.ts ***!
    \**********************************************/

  /*! exports provided: EntradaComponent */

  /***/
  function srcAppEntradaEntradaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntradaComponent", function () {
      return EntradaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EntradaComponent =
    /*#__PURE__*/
    function () {
      function EntradaComponent(router) {
        _classCallCheck(this, EntradaComponent);

        this.router = router;
      }

      _createClass(EntradaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onkeypress",
        value: function onkeypress(termino) {
          this.router.navigate(['/listprovee', termino]);
        }
      }]);

      return EntradaComponent;
    }();

    EntradaComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    EntradaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-entrada',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./entrada.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/entrada/entrada.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./entrada.component.css */
      "./src/app/entrada/entrada.component.css")).default]
    })], EntradaComponent);
    /***/
  },

  /***/
  "./src/app/entrada/listaprovee.component.css":
  /*!***************************************************!*\
    !*** ./src/app/entrada/listaprovee.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEntradaListaproveeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-bar {\r\n    background: #555;\r\n    color: #fff;\r\n    font-size: 0.9rem;\r\n    padding: 10px 0;\r\n}\r\n\r\n.top-bar .contact-info {\r\n    margin-right: 20px;\r\n}\r\n\r\n.top-bar ul {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.top-bar .contact-info a {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.top-bar ul.social-custom {\r\n    margin-left: 20px;\r\n}\r\n\r\n.top-bar ul {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.top-bar a.login-btn i,\r\n.top-bar a.signup-btn i {\r\n    margin-right: 10px;\r\n}\r\n\r\n.top-bar ul.social-custom a:hover {\r\n    background: #4fbfa8;\r\n    color: #fff;\r\n}\r\n\r\n.top-bar ul.social-custom a {\r\n    text-decoration: none !important;\r\n    font-size: 0.7rem;\r\n    width: 26px;\r\n    height: 26px;\r\n    line-height: 26px;\r\n    color: #999;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    margin: 0;\r\n}\r\n\r\na:focus,\r\na:hover {\r\n    color: #348e7b;\r\n    text-decoration: underline;\r\n}\r\n\r\n.top-bar a.login-btn,\r\n.top-bar a.signup-btn {\r\n    color: #eee;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1em;\r\n    text-decoration: none !important;\r\n    font-size: 0.75rem;\r\n    font-weight: 700;\r\n    margin-right: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cmFkYS9saXN0YXByb3ZlZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9lbnRyYWRhL2xpc3RhcHJvdmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLnRvcC1iYXIgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50b3AtYmFyIHVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50b3AtYmFyIC5jb250YWN0LWluZm8gYSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLnRvcC1iYXIgdWwuc29jaWFsLWN1c3RvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnRvcC1iYXIgdWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRvcC1iYXIgYS5sb2dpbi1idG4gaSxcclxuLnRvcC1iYXIgYS5zaWdudXAtYnRuIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udG9wLWJhciB1bC5zb2NpYWwtY3VzdG9tIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzRmYmZhODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udG9wLWJhciB1bC5zb2NpYWwtY3VzdG9tIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuYTpmb2N1cyxcclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzM0OGU3YjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wLWJhciBhLmxvZ2luLWJ0bixcclxuLnRvcC1iYXIgYS5zaWdudXAtYnRuIHtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/entrada/listaprovee.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/entrada/listaprovee.component.ts ***!
    \**************************************************/

  /*! exports provided: ListaproveeComponent */

  /***/
  function srcAppEntradaListaproveeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaproveeComponent", function () {
      return ListaproveeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_dataPerfil_data_perfil_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/dataPerfil/data-perfil.service */
    "./src/app/services/dataPerfil/data-perfil.service.ts");
    /* harmony import */


    var _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/usuario/user.service */
    "./src/app/services/usuario/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ListaproveeComponent =
    /*#__PURE__*/
    function () {
      function ListaproveeComponent(dataPservice, usuarioService, activatedRoute) {
        var _this4 = this;

        _classCallCheck(this, ListaproveeComponent);

        this.dataPservice = dataPservice;
        this.usuarioService = usuarioService;
        this.activatedRoute = activatedRoute;
        this.page = 1;
        activatedRoute.params.subscribe(function (params) {
          var termino = params['termino'];

          _this4.cargarparametros(termino);

          console.log(_this4.data);
        });
      }

      _createClass(ListaproveeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cargarparametros",
        value: function cargarparametros(termino) {
          var _this5 = this;

          this.limit = 2;
          this.dataPservice.cargarDataPerfil(termino, this.page).subscribe(function (resp) {
            return _this5.data = resp;
          });
        }
      }]);

      return ListaproveeComponent;
    }();

    ListaproveeComponent.ctorParameters = function () {
      return [{
        type: _services_dataPerfil_data_perfil_service__WEBPACK_IMPORTED_MODULE_2__["DataPerfilService"]
      }, {
        type: _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    ListaproveeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-listaprovee',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./listaprovee.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/entrada/listaprovee.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./listaprovee.component.css */
      "./src/app/entrada/listaprovee.component.css")).default]
    })], ListaproveeComponent);
    /***/
  },

  /***/
  "./src/app/models/comentario.models.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/comentario.models.ts ***!
    \*********************************************/

  /*! exports provided: Comentarios */

  /***/
  function srcAppModelsComentarioModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Comentarios", function () {
      return Comentarios;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Comentarios = function Comentarios(Idchat, fecha, comentario, Iduser, Idpedido) {
      _classCallCheck(this, Comentarios);

      this.Idchat = Idchat;
      this.fecha = fecha;
      this.comentario = comentario;
      this.Iduser = Iduser;
      this.Idpedido = Idpedido;
    };
    /***/

  },

  /***/
  "./src/app/models/dataperfil.models.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/dataperfil.models.ts ***!
    \*********************************************/

  /*! exports provided: DataPerfil */

  /***/
  function srcAppModelsDataperfilModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataPerfil", function () {
      return DataPerfil;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DataPerfil = function DataPerfil(competencias, expLaboral, conocimientos, Iduser) {
      _classCallCheck(this, DataPerfil);

      this.competencias = competencias;
      this.expLaboral = expLaboral;
      this.conocimientos = conocimientos;
      this.Iduser = Iduser;
    };
    /***/

  },

  /***/
  "./src/app/models/datos.models.ts":
  /*!****************************************!*\
    !*** ./src/app/models/datos.models.ts ***!
    \****************************************/

  /*! exports provided: DatosEmail */

  /***/
  function srcAppModelsDatosModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatosEmail", function () {
      return DatosEmail;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DatosEmail = function DatosEmail(email, nombre, asunto, emails, mensj) {
      _classCallCheck(this, DatosEmail);

      this.email = email;
      this.nombre = nombre;
      this.asunto = asunto;
      this.emails = emails;
      this.mensj = mensj;
    };
    /***/

  },

  /***/
  "./src/app/models/pedido.models.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/pedido.models.ts ***!
    \*****************************************/

  /*! exports provided: Pedido */

  /***/
  function srcAppModelsPedidoModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pedido", function () {
      return Pedido;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Pedido = function Pedido(deiduser, deuser, fecha, Hora, valor, status, Iduser, visto) {
      _classCallCheck(this, Pedido);

      this.deiduser = deiduser;
      this.deuser = deuser;
      this.fecha = fecha;
      this.Hora = Hora;
      this.valor = valor;
      this.status = status;
      this.Iduser = Iduser;
      this.visto = visto;
    };
    /***/

  },

  /***/
  "./src/app/models/puntuacion.models.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/puntuacion.models.ts ***!
    \*********************************************/

  /*! exports provided: Puntuacion */

  /***/
  function srcAppModelsPuntuacionModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Puntuacion", function () {
      return Puntuacion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Puntuacion = function Puntuacion(puntuacion, score, Iduser) {
      _classCallCheck(this, Puntuacion);

      this.puntuacion = puntuacion;
      this.score = score;
      this.Iduser = Iduser;
    };
    /***/

  },

  /***/
  "./src/app/models/usuarios.models.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/usuarios.models.ts ***!
    \*******************************************/

  /*! exports provided: Usuario */

  /***/
  function srcAppModelsUsuariosModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Usuario = function Usuario(user, password, email, nombre, direccion, telefono, vocacion, img, role, Iduser) {
      _classCallCheck(this, Usuario);

      this.user = user;
      this.password = password;
      this.email = email;
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.vocacion = vocacion;
      this.img = img;
      this.role = role;
      this.Iduser = Iduser;
    };
    /***/

  },

  /***/
  "./src/app/pages/addpedido/addpedido.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pages/addpedido/addpedido.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddpedidoAddpedidoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n    padding-top: 180px;\n}\n\n.price-box {\n    margin: 0 aut0o;\n    background: #E9E9E9;\n    border-radius: 10px;\n    padding: 40px 15px;\n    /*width: 500px;*/\n}\n\n.ui-widget-content {\n    border: 1px solid #bdc3c7;\n    background: #e1e1e1;\n    color: #222222;\n    margin-top: 4px;\n}\n\n.ui-slider .ui-slider-handle {\n    position: absolute;\n    z-index: 2;\n    width: 7.2em;\n    height: 2.7em;\n    cursor: default;\n    margin: 0 -40px auto !important;\n    text-align: center;\n    line-height: 30px;\n    color: #FFFFFF;\n    font-size: 12px;\n}\n\n.ui-slider .ui-slider-handle .glyphicon {\n    color: #FFFFFF;\n    margin: 0 1px;\n    font-size: 11px;\n    opacity: 0.7;\n}\n\n.ui-corner-all {\n    border-radius: 20px;\n}\n\n.ui-slider-horizontal .ui-slider-handle {\n    top: -.9em;\n}\n\n.ui-state-default,\n.ui-widget-content .ui-state-default {\n    border: 1px solid #f9f9f9;\n    background: #3498db;\n}\n\n.ui-slider-horizontal .ui-slider-handle {\n    margin-left: -0.5em;\n}\n\n.ui-slider .ui-slider-handle {\n    cursor: pointer;\n}\n\n.ui-slider a,\n.ui-slider a:focus {\n    cursor: pointer;\n    outline: none;\n}\n\n.price,\n.lead p {\n    font-weight: 600;\n    font-size: 32px;\n    display: inline-block;\n    line-height: 60px;\n    border: 0;\n    width: 245px;\n}\n\nh4.great {\n    background: #00ac98;\n    margin: 0 0 25px -60px;\n    padding: 7px 15px;\n    color: #ffffff;\n    font-size: 18px;\n    font-weight: 600;\n    border-radius: 5px;\n    display: inline-block;\n    box-shadow: 2px 4px 5px 0 #ccc;\n}\n\n.total {\n    border-bottom: 1px solid #7f8c8d;\n    /*display: inline;\n    padding: 10px 5px;*/\n    position: relative;\n    padding-bottom: 20px;\n}\n\n.total:before {\n    content: \"\";\n    display: inline;\n    position: absolute;\n    left: 0;\n    bottom: 5px;\n    width: 100%;\n    height: 3px;\n    background: #7f8c8d;\n    opacity: 0.5;\n}\n\n.price-slider {\n    margin-bottom: 70px;\n}\n\n.price-slider span {\n    font-weight: 200;\n    display: inline-block;\n    color: #7f8c8d;\n    font-size: 13px;\n}\n\n.form-pricing {\n    background: #ffffff;\n    padding: 20px;\n    border-radius: 4px;\n}\n\n.price-form {\n    background: #ffffff;\n    margin-bottom: 10px;\n    padding: 20px;\n    border: 1px solid #eeeeee;\n    min-height: 300px;\n    border-radius: 4px;\n    /*-moz-box-shadow:    0 5px 5px 0 #ccc;\n      -webkit-box-shadow: 0 5px 5px 0 #ccc;\n      box-shadow:         0 5px 5px 0 #ccc;*/\n}\n\n.form-group {\n    margin-bottom: 0;\n}\n\n.form-group span.price {\n    font-weight: 200;\n    display: inline-block;\n    color: #7f8c8d;\n    font-size: 14px;\n}\n\n.help-text {\n    display: block;\n    margin-top: -10px;\n    margin-bottom: 10px;\n    color: #737373;\n    /*position: absolute;*/\n    /*margin-left: 20px;*/\n    font-weight: 200;\n    /*text-align: right;*/\n    width: 188px;\n}\n\n.price-form label {\n    font-weight: 200;\n    font-size: 21px;\n}\n\nimg.payment {\n    display: block;\n    margin-left: auto;\n    margin-right: auto\n}\n\n.ui-slider-range-min {\n    background: #2980b9;\n}\n\n.active-month,\n.active-term {\n    background: #3276b1;\n}\n\n/* HR */\n\nhr.style {\n    margin-top: 0;\n    border: 0;\n    border-bottom: 1px dashed #ccc;\n    background: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkcGVkaWRvL2FkZHBlZGlkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBR3JCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQzt1QkFDbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCOzs0Q0FFd0M7QUFDNUM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUdBLE9BQU87O0FBRVA7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGRwZWRpZG8vYWRkcGVkaWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMTgwcHg7XG59XG5cbi5wcmljZS1ib3gge1xuICAgIG1hcmdpbjogMCBhdXQwbztcbiAgICBiYWNrZ3JvdW5kOiAjRTlFOUU5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogNDBweCAxNXB4O1xuICAgIC8qd2lkdGg6IDUwMHB4OyovXG59XG5cbi51aS13aWRnZXQtY29udGVudCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzNjNztcbiAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnVpLXNsaWRlciAudWktc2xpZGVyLWhhbmRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgd2lkdGg6IDcuMmVtO1xuICAgIGhlaWdodDogMi43ZW07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIG1hcmdpbjogMCAtNDBweCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnVpLXNsaWRlciAudWktc2xpZGVyLWhhbmRsZSAuZ2x5cGhpY29uIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW46IDAgMXB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi51aS1jb3JuZXItYWxsIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4udWktc2xpZGVyLWhvcml6b250YWwgLnVpLXNsaWRlci1oYW5kbGUge1xuICAgIHRvcDogLS45ZW07XG59XG5cbi51aS1zdGF0ZS1kZWZhdWx0LFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1zdGF0ZS1kZWZhdWx0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5O1xuICAgIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG59XG5cbi51aS1zbGlkZXItaG9yaXpvbnRhbCAudWktc2xpZGVyLWhhbmRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbn1cblxuLnVpLXNsaWRlciAudWktc2xpZGVyLWhhbmRsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udWktc2xpZGVyIGEsXG4udWktc2xpZGVyIGE6Zm9jdXMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucHJpY2UsXG4ubGVhZCBwIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHdpZHRoOiAyNDVweDtcbn1cblxuaDQuZ3JlYXQge1xuICAgIGJhY2tncm91bmQ6ICMwMGFjOTg7XG4gICAgbWFyZ2luOiAwIDAgMjVweCAtNjBweDtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDRweCA1cHggMCAjY2NjO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDRweCA1cHggMCAjY2NjO1xuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDAgI2NjYztcbn1cblxuLnRvdGFsIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdmOGM4ZDtcbiAgICAvKmRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDsqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnRvdGFsOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzdmOGM4ZDtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5wcmljZS1zbGlkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG5cbi5wcmljZS1zbGlkZXIgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZm9ybS1wcmljaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucHJpY2UtZm9ybSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLyotbW96LWJveC1zaGFkb3c6ICAgIDAgNXB4IDVweCAwICNjY2M7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDVweCAwICNjY2M7XG4gICAgICBib3gtc2hhZG93OiAgICAgICAgIDAgNXB4IDVweCAwICNjY2M7Ki9cbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5mb3JtLWdyb3VwIHNwYW4ucHJpY2Uge1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhlbHAtdGV4dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogIzczNzM3MztcbiAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAgIC8qbWFyZ2luLWxlZnQ6IDIwcHg7Ki9cbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIC8qdGV4dC1hbGlnbjogcmlnaHQ7Ki9cbiAgICB3aWR0aDogMTg4cHg7XG59XG5cbi5wcmljZS1mb3JtIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuaW1nLnBheW1lbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0b1xufVxuXG4udWktc2xpZGVyLXJhbmdlLW1pbiB7XG4gICAgYmFja2dyb3VuZDogIzI5ODBiOTtcbn1cblxuLmFjdGl2ZS1tb250aCxcbi5hY3RpdmUtdGVybSB7XG4gICAgYmFja2dyb3VuZDogIzMyNzZiMTtcbn1cblxuXG4vKiBIUiAqL1xuXG5oci5zdHlsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xuICAgIGJhY2tncm91bmQ6ICM5OTk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/addpedido/addpedido.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/addpedido/addpedido.component.ts ***!
    \********************************************************/

  /*! exports provided: AddpedidoComponent */

  /***/
  function srcAppPagesAddpedidoAddpedidoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddpedidoComponent", function () {
      return AddpedidoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_pedido_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/pedido.models */
    "./src/app/models/pedido.models.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_pedidos_pedidos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/pedidos/pedidos.service */
    "./src/app/services/pedidos/pedidos.service.ts");
    /* harmony import */


    var _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/usuario/user.service */
    "./src/app/services/usuario/user.service.ts");

    var AddpedidoComponent =
    /*#__PURE__*/
    function () {
      function AddpedidoComponent(ruter, pedidoService, usuarioService, activatedRoute) {
        var _this6 = this;

        _classCallCheck(this, AddpedidoComponent);

        this.ruter = ruter;
        this.pedidoService = pedidoService;
        this.usuarioService = usuarioService;
        this.activatedRoute = activatedRoute; // dateDay = new Date().getDay();

        this.fecha = new Date();
        this.fecha2 = this.fecha.getFullYear() + '-' + this.fecha.getMonth() + 1 + '-' + this.fecha.getDate();
        this.Hora = this.fecha.getHours() + ':' + this.fecha.getMinutes();
        this.usuario = this.usuarioService.usuario;
        activatedRoute.params.subscribe(function (params) {
          _this6.termino = params['termino'];
        });
      }

      _createClass(AddpedidoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "guardarDatos",
        value: function guardarDatos(forma) {
          var status = 'pendiente';
          var visto = 'N';
          var pedido = new _models_pedido_models__WEBPACK_IMPORTED_MODULE_2__["Pedido"](this.usuario[0].Iduser, this.usuario[0].user, this.fecha2, this.Hora, forma.value.valor, status, this.termino, visto);
          console.log(pedido);
          this.pedidoService.crearpedido(pedido).subscribe();
        }
      }]);

      return AddpedidoComponent;
    }();

    AddpedidoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_pedidos_pedidos_service__WEBPACK_IMPORTED_MODULE_4__["PedidosService"]
      }, {
        type: _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    AddpedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addpedido',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addpedido.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addpedido/addpedido.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addpedido.component.css */
      "./src/app/pages/addpedido/addpedido.component.css")).default]
    })], AddpedidoComponent);
    /***/
  },

  /***/
  "./src/app/pages/dasboard/dasboard.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pages/dasboard/dasboard.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDasboardDasboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n    background: #16a085;\n    font-family: 'Roboto', sans-serif;\n    padding-top: 40px;\n}\n\n.dashboard {\n    padding: 0 30px;\n}\n\n.dashboard .jumbotron {\n    margin-top: 0px;\n    background: #8e44ad;\n    color: #fff;\n    border-radius: 5px 5px 0 0;\n}\n\n.dashboard .jumbotron small {\n    color: #fff;\n}\n\n.dashboard .jumbotron-sm {\n    padding-top: 24px;\n    padding-bottom: 24px;\n}\n\n.help-pane {\n    background: #ecf0f1;\n    border-radius: 5px;\n}\n\n.profile-pane {\n    width: 100%;\n    display: table;\n    border-spacing: 10px;\n}\n\n.profile-pane>div {\n    display: table-row;\n}\n\n.profile-pane>div>div {\n    width: 50%;\n    display: table-cell;\n}\n\n.profile-pane .header {\n    background: #777777;\n    color: #fff;\n    padding: 5px 15px;\n    border-radius: 10px 10px 0 0;\n}\n\n.profile-pane .content {\n    background: #ecf0f1;\n    border-radius: 0 0 10px 10px;\n    padding: 5px 15px;\n}\n\n.profile-pane h4.col {\n    text-align: center;\n    margin-bottom: 40px;\n}\n\n.profile-pane button.col {\n    text-align: center;\n    padding: 0;\n}\n\n.profile-pane .title {\n    margin-top: 0;\n    padding: 10px;\n    border-bottom: 1px solid #aaa;\n}\n\n#supportedCauses {\n    padding: 0;\n}\n\n.cause-info {\n    margin-bottom: 5px;\n    padding: 5px;\n    background: #fff;\n    border-radius: 5px;\n    display: inline-block;\n}\n\n.cause-info a:hover {\n    cursor: pointer;\n}\n\n.cause-info>div:nth-of-type(3) {\n    width: 16.66666666%;\n    float: left;\n}\n\n.cause-info>div:nth-of-type(3)>* {\n    padding: 0 15px;\n    float: right;\n}\n\n.cause-info>div:nth-of-type(3) a>.glyphicon {\n    -webkit-transition: -webkit-transform .5s;\n    transition: -webkit-transform .5s;\n    transition: transform .5s;\n    transition: transform .5s, -webkit-transform .5s;\n}\n\n.cause-info:not(.expanded)>div:nth-of-type(1) {\n    width: 83.33333333%;\n    float: left;\n    display: inline-block;\n}\n\n.cause-info:not(.expanded)>div:nth-of-type(1)>img {\n    width: 20%;\n    float: left;\n}\n\n.cause-info:not(.expanded)>div:nth-of-type(1)>div {\n    width: 40%;\n    float: left;\n    padding: 0 15px;\n}\n\n.cause-info:not(.expanded)>div:nth-of-type(1)>div:nth-of-type(2):before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n}\n\n.cause-info:not(.expanded)>div:nth-of-type(2) {\n    display: none;\n}\n\n.cause-info.expanded>div:nth-of-type(1) {\n    width: 25%;\n    float: left;\n}\n\n.cause-info.expanded>div:nth-of-type(1)>img {\n    width: 66.66666667%;\n}\n\n.cause-info.expanded>div:nth-of-type(2) {\n    width: 58.33333333%;\n    float: left;\n}\n\n.cause-info.expanded>div:nth-of-type(3) a>.glyphicon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n\n.profile-pane article {\n    background: #fff;\n    border-radius: 5px;\n    padding: 5px;\n    margin-bottom: 40px;\n}\n\n.search-bar {\n    position: relative;\n    display: table;\n    border-collapse: collapse;\n}\n\n.search-bar>input {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px 0 0 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n\n.search-select {\n    border-radius: 4px;\n    border-color: #ccc;\n    height: 34px;\n    font-size: 14px;\n    color: #555;\n    background: #fff;\n    padding-right: 0;\n}\n\n.reciept-infos {\n    border: 1px solid #000;\n    padding: 0;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    border-radius: 5px;\n    background: #fff;\n}\n\n.reciept-infos>div:last-of-type {\n    border-bottom: none;\n}\n\n.reciept-infos>div {\n    display: inline-block;\n    border-bottom: 1px solid #000;\n}\n\n.reciept-infos>div>* {\n    float: left;\n}\n\n.reciept-infos>div>img {\n    width: 18%;\n    margin: 1%;\n}\n\n.reciept-infos>div>div {\n    width: 80%;\n    padding: 0 15px;\n}\n\n#form {\n    width: 250px;\n    margin: 0 auto;\n    height: 50px;\n  }\n\n#form p {\n    text-align: center;\n  }\n\n#form label {\n    font-size: 20px;\n  }\n\ninput[type=\"radio\"] {\n    display: none;\n  }\n\nlabel {\n    color: grey;\n  }\n\n.clasificacion {\n    direction: rtl;\n    unicode-bidi: bidi-override;\n  }\n\nlabel:hover,\n  label:hover ~ label {\n    color: orange;\n  }\n\ninput[type=\"radio\"]:checked ~ label {\n    color: orange;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzYm9hcmQvZGFzYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5Q0FBeUI7SUFBekIsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUF6QixnREFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBRTFCLCtDQUErQztJQUMvQyxzRkFBc0Y7SUFFdEYsOEVBQXNFO0lBQXRFLHNFQUFzRTtBQUMxRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtFQUNkOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGNBQWM7SUFDZCwyQkFBMkI7RUFDN0I7O0FBRUE7O0lBRUUsYUFBYTtFQUNmOztBQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzYm9hcmQvZGFzYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQ6ICMxNmEwODU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uZGFzaGJvYXJkIHtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG59XG5cbi5kYXNoYm9hcmQgLmp1bWJvdHJvbiB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM4ZTQ0YWQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG59XG5cbi5kYXNoYm9hcmQgLmp1bWJvdHJvbiBzbWFsbCB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5kYXNoYm9hcmQgLmp1bWJvdHJvbi1zbSB7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG5cbi5oZWxwLXBhbmUge1xuICAgIGJhY2tncm91bmQ6ICNlY2YwZjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvZmlsZS1wYW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBib3JkZXItc3BhY2luZzogMTBweDtcbn1cblxuLnByb2ZpbGUtcGFuZT5kaXYge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cblxuLnByb2ZpbGUtcGFuZT5kaXY+ZGl2IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5wcm9maWxlLXBhbmUgLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzc3Nzc3NztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xufVxuXG4ucHJvZmlsZS1wYW5lIC5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbi5wcm9maWxlLXBhbmUgaDQuY29sIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnByb2ZpbGUtcGFuZSBidXR0b24uY29sIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnByb2ZpbGUtcGFuZSAudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcbn1cblxuI3N1cHBvcnRlZENhdXNlcyB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmNhdXNlLWluZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2F1c2UtaW5mbyBhOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXVzZS1pbmZvPmRpdjpudGgtb2YtdHlwZSgzKSB7XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2JTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmNhdXNlLWluZm8+ZGl2Om50aC1vZi10eXBlKDMpPioge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jYXVzZS1pbmZvPmRpdjpudGgtb2YtdHlwZSgzKSBhPi5nbHlwaGljb24ge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XG59XG5cbi5jYXVzZS1pbmZvOm5vdCguZXhwYW5kZWQpPmRpdjpudGgtb2YtdHlwZSgxKSB7XG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jYXVzZS1pbmZvOm5vdCguZXhwYW5kZWQpPmRpdjpudGgtb2YtdHlwZSgxKT5pbWcge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jYXVzZS1pbmZvOm5vdCguZXhwYW5kZWQpPmRpdjpudGgtb2YtdHlwZSgxKT5kaXYge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uY2F1c2UtaW5mbzpub3QoLmV4cGFuZGVkKT5kaXY6bnRoLW9mLXR5cGUoMSk+ZGl2Om50aC1vZi10eXBlKDIpOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY2F1c2UtaW5mbzpub3QoLmV4cGFuZGVkKT5kaXY6bnRoLW9mLXR5cGUoMikge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYXVzZS1pbmZvLmV4cGFuZGVkPmRpdjpudGgtb2YtdHlwZSgxKSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmNhdXNlLWluZm8uZXhwYW5kZWQ+ZGl2Om50aC1vZi10eXBlKDEpPmltZyB7XG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcbn1cblxuLmNhdXNlLWluZm8uZXhwYW5kZWQ+ZGl2Om50aC1vZi10eXBlKDIpIHtcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2F1c2UtaW5mby5leHBhbmRlZD5kaXY6bnRoLW9mLXR5cGUoMykgYT4uZ2x5cGhpY29uIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ucHJvZmlsZS1wYW5lIGFydGljbGUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uc2VhcmNoLWJhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5zZWFyY2gtYmFyPmlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgLXdlYmtpdC1ib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG4gICAgLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xufVxuXG4uc2VhcmNoLXNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1jb2xvcjogI2NjYztcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLnJlY2llcHQtaW5mb3Mge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5yZWNpZXB0LWluZm9zPmRpdjpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5yZWNpZXB0LWluZm9zPmRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xufVxuXG4ucmVjaWVwdC1pbmZvcz5kaXY+KiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yZWNpZXB0LWluZm9zPmRpdj5pbWcge1xuICAgIHdpZHRoOiAxOCU7XG4gICAgbWFyZ2luOiAxJTtcbn1cblxuLnJlY2llcHQtaW5mb3M+ZGl2PmRpdiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cblxuI2Zvcm0ge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgXG4gICNmb3JtIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgI2Zvcm0gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICBsYWJlbCB7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbiAgXG4gIC5jbGFzaWZpY2FjaW9uIHtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICB1bmljb2RlLWJpZGk6IGJpZGktb3ZlcnJpZGU7XG4gIH1cbiAgXG4gIGxhYmVsOmhvdmVyLFxuICBsYWJlbDpob3ZlciB+IGxhYmVsIHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IGxhYmVsIHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/dasboard/dasboard.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/dasboard/dasboard.component.ts ***!
    \******************************************************/

  /*! exports provided: DasboardComponent */

  /***/
  function srcAppPagesDasboardDasboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DasboardComponent", function () {
      return DasboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _models_puntuacion_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/puntuacion.models */
    "./src/app/models/puntuacion.models.ts");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);

    var DasboardComponent =
    /*#__PURE__*/
    function () {
      function DasboardComponent(usuarioService, dataperfilService, pedidoService) {
        _classCallCheck(this, DasboardComponent);

        this.usuarioService = usuarioService;
        this.dataperfilService = dataperfilService;
        this.pedidoService = pedidoService;
        this.valor = new _models_puntuacion_models__WEBPACK_IMPORTED_MODULE_3__["Puntuacion"](0, 0);
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__();
        this.usuario = this.usuarioService.usuario;
      }

      _createClass(DasboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.socket.on('usuarioLoging', function () {
            console.log('un usuario esta logeado');
          });
          this.cargarPuntuaciones();
          this.cargarPedidoTerminado();
          this.cargarPedidoPendiente();
          this.cargarvalorRecaudado();
        }
      }, {
        key: "cargarPuntuaciones",
        value: function cargarPuntuaciones() {
          var _this7 = this;

          console.log(this.usuario[0].Iduser);
          var termino = this.usuario[0].Iduser;
          this.dataperfilService.cargarPuntuacion(termino).subscribe(function (puntuacion) {
            return _this7.valor = puntuacion;
          });
        }
      }, {
        key: "cargarPedidoTerminado",
        value: function cargarPedidoTerminado() {
          var _this8 = this;

          var termino = this.usuario[0].Iduser;
          this.pedidoService.cargarPedTerminados(termino).subscribe(function (terminados) {
            return _this8.pedido = terminados;
          });
        }
      }, {
        key: "cargarPedidoPendiente",
        value: function cargarPedidoPendiente() {
          var _this9 = this;

          var termino = this.usuario[0].Iduser;
          this.pedidoService.cargarPedPendientes(termino).subscribe(function (respuesta) {
            return _this9.pendiente = respuesta;
          });
        }
      }, {
        key: "cargarvalorRecaudado",
        value: function cargarvalorRecaudado() {
          var _this10 = this;

          var termino = this.usuario[0].Iduser;
          this.pedidoService.cargarRecaudado(termino).subscribe(function (resultado) {
            return _this10.racaudado = resultado;
          });
        }
      }]);

      return DasboardComponent;
    }();

    DasboardComponent.ctorParameters = function () {
      return [{
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_2__["DataPerfilService"]
      }, {
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_2__["PedidosService"]
      }];
    };

    DasboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dasboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dasboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dasboard/dasboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dasboard.component.css */
      "./src/app/pages/dasboard/dasboard.component.css")).default]
    })], DasboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/historialpedidos/historialpedidos.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/historialpedidos/historialpedidos.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistorialpedidosHistorialpedidosComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".project-tab {\r\n    padding: 5%;\r\n    margin-top: -3%;\r\n}\r\n\r\n.project-tab #tabs {\r\n    background: #007b5e;\r\n    color: #eee;\r\n}\r\n\r\n.project-tab #tabs h6.section-title {\r\n    color: #eee;\r\n}\r\n\r\n.project-tab #tabs .nav-tabs .nav-item.show .nav-link,\r\n.nav-tabs .nav-link.active {\r\n    color: #0062cc;\r\n    background-color: transparent;\r\n    border-color: transparent transparent #f3f3f3;\r\n    border-bottom: 3px solid !important;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n\r\n.project-tab .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: .25rem;\r\n    border-top-right-radius: .25rem;\r\n    color: #0062cc;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n\r\n.project-tab .nav-link:hover {\r\n    border: none;\r\n}\r\n\r\n.project-tab thead {\r\n    background: #f3f3f3;\r\n    color: #333;\r\n}\r\n\r\n.project-tab a {\r\n    text-decoration: none;\r\n    color: #333;\r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yaWFscGVkaWRvcy9oaXN0b3JpYWxwZWRpZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksY0FBYztJQUNkLDZCQUE2QjtJQUM3Qiw2Q0FBNkM7SUFDN0MsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3JpYWxwZWRpZG9zL2hpc3RvcmlhbHBlZGlkb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LXRhYiB7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIG1hcmdpbi10b3A6IC0zJTtcclxufVxyXG5cclxuLnByb2plY3QtdGFiICN0YWJzIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiNWU7XHJcbiAgICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuLnByb2plY3QtdGFiICN0YWJzIGg2LnNlY3Rpb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhYiAjdGFicyAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxyXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAwNjJjYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnByb2plY3QtdGFiIC5uYXYtbGluayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBjb2xvcjogIzAwNjJjYztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhYiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucHJvamVjdC10YWIgdGhlYWQge1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4ucHJvamVjdC10YWIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/historialpedidos/historialpedidos.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/historialpedidos/historialpedidos.component.ts ***!
    \**********************************************************************/

  /*! exports provided: HistorialpedidosComponent */

  /***/
  function srcAppPagesHistorialpedidosHistorialpedidosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialpedidosComponent", function () {
      return HistorialpedidosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HistorialpedidosComponent =
    /*#__PURE__*/
    function () {
      function HistorialpedidosComponent() {
        _classCallCheck(this, HistorialpedidosComponent);
      }

      _createClass(HistorialpedidosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HistorialpedidosComponent;
    }();

    HistorialpedidosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-historialpedidos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./historialpedidos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historialpedidos/historialpedidos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./historialpedidos.component.css */
      "./src/app/pages/historialpedidos/historialpedidos.component.css")).default]
    })], HistorialpedidosComponent);
    /***/
  },

  /***/
  "./src/app/pages/main-lista/main-lista.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/pages/main-lista/main-lista.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMainListaMainListaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tbGlzdGEvbWFpbi1saXN0YS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/main-lista/main-lista.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/main-lista/main-lista.component.ts ***!
    \**********************************************************/

  /*! exports provided: MainListaComponent */

  /***/
  function srcAppPagesMainListaMainListaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainListaComponent", function () {
      return MainListaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/usuario/user.service */
    "./src/app/services/usuario/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MainListaComponent =
    /*#__PURE__*/
    function () {
      function MainListaComponent(dataPservice, usuarioService, activatedRoute) {
        var _this11 = this;

        _classCallCheck(this, MainListaComponent);

        this.dataPservice = dataPservice;
        this.usuarioService = usuarioService;
        this.activatedRoute = activatedRoute;
        this.page = 1;
        activatedRoute.params.subscribe(function (params) {
          var termino = params['termino'];

          _this11.cargarparametros(termino);
        });
      }

      _createClass(MainListaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//  this.page = 1;
          // this.cargarUser();
          // console.log(this.user);
          //  this.cargarparametros();
        }
      }, {
        key: "cargarparametros",
        value: function cargarparametros(termino) {
          var _this12 = this;

          this.limit = 2;
          this.dataPservice.cargarDataPerfil(termino, this.page).subscribe(function (resp) {
            _this12.data = resp;
            console.log(_this12.data);
          });
        }
      }, {
        key: "cargarUser",
        value: function cargarUser() {
          var _this13 = this;

          this.usuarioService.cargarUsuarios().subscribe(function (resp) {
            return _this13.user = resp;
          });
          console.log(this.user); // console.log(this.termino);
        }
      }, {
        key: "cambiarDesde",
        value: function cambiarDesde(valor) {
          var page = this.page + valor; // if ( desde >= this.totalRegistros ) {
          //   return;
          // }

          if (page < 0) {
            return;
          }

          this.page += valor;
          console.log(this.page);
        }
      }]);

      return MainListaComponent;
    }();

    MainListaComponent.ctorParameters = function () {
      return [{
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_2__["DataPerfilService"]
      }, {
        type: _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    MainListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-lista',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-lista.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-lista/main-lista.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-lista.component.css */
      "./src/app/pages/main-lista/main-lista.component.css")).default]
    })], MainListaComponent);
    /***/
  },

  /***/
  "./src/app/pages/page.component.css":
  /*!******************************************!*\
    !*** ./src/app/pages/page.component.css ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/page.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/page.component.ts ***!
    \*****************************************/

  /*! exports provided: PageComponent */

  /***/
  function srcAppPagesPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageComponent", function () {
      return PageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageComponent =
    /*#__PURE__*/
    function () {
      function PageComponent() {
        _classCallCheck(this, PageComponent);
      }

      _createClass(PageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageComponent;
    }();

    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page.component.css */
      "./src/app/pages/page.component.css")).default]
    })], PageComponent);
    /***/
  },

  /***/
  "./src/app/pages/page.module.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/page.module.ts ***!
    \**************************************/

  /*! exports provided: PageModule */

  /***/
  function srcAppPagesPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageModule", function () {
      return PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page.component */
    "./src/app/pages/page.component.ts");
    /* harmony import */


    var _pages_routin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages.routin */
    "./src/app/pages/pages.routin.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/pages/search/search.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./perfil/perfil.component */
    "./src/app/pages/perfil/perfil.component.ts");
    /* harmony import */


    var _dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dasboard/dasboard.component */
    "./src/app/pages/dasboard/dasboard.component.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _main_lista_main_lista_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./main-lista/main-lista.component */
    "./src/app/pages/main-lista/main-lista.component.ts");
    /* harmony import */


    var _perfilpro_perfilpro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./perfilpro/perfilpro.component */
    "./src/app/pages/perfilpro/perfilpro.component.ts");
    /* harmony import */


    var _historialpedidos_historialpedidos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./historialpedidos/historialpedidos.component */
    "./src/app/pages/historialpedidos/historialpedidos.component.ts");
    /* harmony import */


    var _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pedidos/pedidos.component */
    "./src/app/pages/pedidos/pedidos.component.ts");
    /* harmony import */


    var _addpedido_addpedido_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./addpedido/addpedido.component */
    "./src/app/pages/addpedido/addpedido.component.ts");
    /* harmony import */


    var _previous_previous_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./previous/previous.component */
    "./src/app/pages/previous/previous.component.ts");
    /* harmony import */


    var _userchat_userchat_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./userchat/userchat.component */
    "./src/app/pages/userchat/userchat.component.ts"); // Libreria de materiales
    // Paginas del APP
    // Pipes


    var PageModule = function PageModule() {
      _classCallCheck(this, PageModule);
    };

    PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_14__["PerfilComponent"], _dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_15__["DasboardComponent"], _main_lista_main_lista_component__WEBPACK_IMPORTED_MODULE_17__["MainListaComponent"], _perfilpro_perfilpro_component__WEBPACK_IMPORTED_MODULE_18__["PerfilproComponent"], _historialpedidos_historialpedidos_component__WEBPACK_IMPORTED_MODULE_19__["HistorialpedidosComponent"], _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_20__["PedidosComponent"], _addpedido_addpedido_component__WEBPACK_IMPORTED_MODULE_21__["AddpedidoComponent"], _previous_previous_component__WEBPACK_IMPORTED_MODULE_22__["PreviousComponent"], _userchat_userchat_component__WEBPACK_IMPORTED_MODULE_23__["UserchatComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _pages_routin__WEBPACK_IMPORTED_MODULE_6__["PAGES_ROUTES"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"]],
      exports: [_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"], _dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_15__["DasboardComponent"]]
    })], PageModule);
    /***/
  },

  /***/
  "./src/app/pages/pages.routin.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.routin.ts ***!
    \***************************************/

  /*! exports provided: PAGES_ROUTES */

  /***/
  function srcAppPagesPagesRoutinTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGES_ROUTES", function () {
      return PAGES_ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page.component */
    "./src/app/pages/page.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/pages/search/search.component.ts");
    /* harmony import */


    var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./perfil/perfil.component */
    "./src/app/pages/perfil/perfil.component.ts");
    /* harmony import */


    var _dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dasboard/dasboard.component */
    "./src/app/pages/dasboard/dasboard.component.ts");
    /* harmony import */


    var _main_lista_main_lista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main-lista/main-lista.component */
    "./src/app/pages/main-lista/main-lista.component.ts");
    /* harmony import */


    var _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pedidos/pedidos.component */
    "./src/app/pages/pedidos/pedidos.component.ts");
    /* harmony import */


    var _addpedido_addpedido_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./addpedido/addpedido.component */
    "./src/app/pages/addpedido/addpedido.component.ts");
    /* harmony import */


    var _perfilpro_perfilpro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./perfilpro/perfilpro.component */
    "./src/app/pages/perfilpro/perfilpro.component.ts");
    /* harmony import */


    var _previous_previous_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./previous/previous.component */
    "./src/app/pages/previous/previous.component.ts");
    /* harmony import */


    var _services_guards_guards_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/guards/guards.guard */
    "./src/app/services/guards/guards.guard.ts");
    /* harmony import */


    var _historialpedidos_historialpedidos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./historialpedidos/historialpedidos.component */
    "./src/app/pages/historialpedidos/historialpedidos.component.ts");
    /* harmony import */


    var _userchat_userchat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./userchat/userchat.component */
    "./src/app/pages/userchat/userchat.component.ts");

    var pagesRouter = [{
      path: '',
      component: _page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"],
      canActivate: [_services_guards_guards_guard__WEBPACK_IMPORTED_MODULE_11__["GuardsGuard"]],
      children: [{
        path: 'dasboard',
        component: _dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_5__["DasboardComponent"]
      }, {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
      }, {
        path: 'perfil',
        component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__["PerfilComponent"]
      }, {
        path: 'perfilpro',
        component: _perfilpro_perfilpro_component__WEBPACK_IMPORTED_MODULE_9__["PerfilproComponent"]
      }, {
        path: 'pedidos/:termino',
        component: _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_7__["PedidosComponent"]
      }, {
        path: 'userchat/:iduser/:idpedido',
        component: _userchat_userchat_component__WEBPACK_IMPORTED_MODULE_13__["UserchatComponent"]
      }, {
        path: 'mainLista/:termino',
        component: _main_lista_main_lista_component__WEBPACK_IMPORTED_MODULE_6__["MainListaComponent"]
      }, {
        path: 'addpedidos/:termino',
        component: _addpedido_addpedido_component__WEBPACK_IMPORTED_MODULE_8__["AddpedidoComponent"]
      }, {
        path: 'previous/:termino',
        component: _previous_previous_component__WEBPACK_IMPORTED_MODULE_10__["PreviousComponent"]
      }, {
        path: 'vpedidos',
        component: _historialpedidos_historialpedidos_component__WEBPACK_IMPORTED_MODULE_12__["HistorialpedidosComponent"]
      }, {
        path: '',
        redirectTo: '/dasboard',
        pathMatch: 'full'
      }]
    }];

    var PAGES_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(pagesRouter);
    /***/

  },

  /***/
  "./src/app/pages/pedidos/pedidos.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/pages/pedidos/pedidos.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPedidosPedidosComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlZGlkb3MvcGVkaWRvcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/pedidos/pedidos.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/pedidos/pedidos.component.ts ***!
    \****************************************************/

  /*! exports provided: PedidosComponent */

  /***/
  function srcAppPagesPedidosPedidosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosComponent", function () {
      return PedidosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/usuario/user.service */
    "./src/app/services/usuario/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_pedidos_pedidos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/pedidos/pedidos.service */
    "./src/app/services/pedidos/pedidos.service.ts");

    var PedidosComponent =
    /*#__PURE__*/
    function () {
      function PedidosComponent(usuarioService, activatedRoute, pedidoService) {
        var _this14 = this;

        _classCallCheck(this, PedidosComponent);

        this.usuarioService = usuarioService;
        this.activatedRoute = activatedRoute;
        this.pedidoService = pedidoService;
        this.user = usuarioService.usuario;
        console.log(this.user[0].role);
        activatedRoute.params.subscribe(function (params) {
          var termino = params['termino'];

          if (_this14.user[0].role === 'USER') {
            _this14.cargarparametros(_this14.user[0].Iduser);
          }

          if (_this14.user[0].role === 'PROV') {
            _this14.cargarparametrospro(termino);
          }
        });
      }

      _createClass(PedidosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cargarparametros",
        value: function cargarparametros(termino) {
          var _this15 = this;

          console.log('el parametro es:' + termino);
          this.pedidoService.cargarPedidoPerfil(termino).subscribe(function (resp) {
            _this15.pedido = resp;
          });
        }
      }, {
        key: "cargarparametrospro",
        value: function cargarparametrospro(termino) {
          var _this16 = this;

          console.log('el parametro es:' + termino);
          this.pedidoService.cargarPedidoPerfilProv(termino).subscribe(function (resp) {
            _this16.pedido = resp;
          });
        }
      }]);

      return PedidosComponent;
    }();

    PedidosComponent.ctorParameters = function () {
      return [{
        type: _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_pedidos_pedidos_service__WEBPACK_IMPORTED_MODULE_4__["PedidosService"]
      }];
    };

    PedidosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pedidos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pedidos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedidos/pedidos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pedidos.component.css */
      "./src/app/pages/pedidos/pedidos.component.css")).default]
    })], PedidosComponent);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.component.css":
  /*!***************************************************!*\
    !*** ./src/app/pages/perfil/perfil.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPerfilPerfilComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n    background-color: rgb(97, 218, 226);\n    display: -webkit-box;\n    display: flex;\n    width: 100%;\n    -webkit-box-align: stretch;\n            align-items: stretch;\n}\n\n.wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: stretch;\n            align-items: stretch;\n}\n\n#sidebar {\n    min-width: 250px;\n    max-width: 250px;\n}\n\n#sidebar.active {\n    margin-left: -250px;\n}\n\n/* /////////////////////////////// */\n\nbody,\nhtml {\n    height: 100%;\n}\n\n/* remove outer padding */\n\n.main .row {\n    padding: 0px;\n    margin: 0px;\n}\n\n/*Remove rounded coners*/\n\nnav.sidebar.navbar {\n    border-radius: 0px;\n}\n\nnav.sidebar,\n.main {\n    -webkit-transition: margin 200ms ease-out;\n    transition: margin 200ms ease-out;\n}\n\n/* Add gap to nav and right windows.*/\n\n.main {\n    padding: 10px 10px 0 10px;\n}\n\n/* .....NavBar: Icon only with coloring/layout.....*/\n\n/*small/medium side display*/\n\n@media (min-width: 768px) {\n    /*Allow main to be next to Nav*/\n    .main {\n        position: absolute;\n        width: calc(100% - 40px);\n        /*keeps 100% minus nav size*/\n        margin-left: 40px;\n        float: right;\n    }\n    /*lets nav bar to be showed on mouseover*/\n    nav.sidebar:hover+.main {\n        margin-left: 200px;\n    }\n    /*Center Brand*/\n    nav.sidebar.navbar.sidebar>.container .navbar-brand,\n    .navbar>.container-fluid .navbar-brand {\n        margin-left: 0px;\n    }\n    /*Center Brand*/\n    nav.sidebar .navbar-brand,\n    nav.sidebar .navbar-header {\n        text-align: center;\n        width: 100%;\n        margin-left: 0px;\n    }\n    /*Center Icons*/\n    nav.sidebar a {\n        padding-right: 13px;\n    }\n    /*adds border top to first nav box */\n    nav.sidebar .navbar-nav>li:first-child {\n        border-top: 1px #e5e5e5 solid;\n    }\n    /*adds border to bottom nav boxes*/\n    nav.sidebar .navbar-nav>li {\n        border-bottom: 1px #e5e5e5 solid;\n    }\n    /* Colors/style dropdown box*/\n    nav.sidebar .navbar-nav .open .dropdown-menu {\n        position: static;\n        float: none;\n        width: auto;\n        margin-top: 0;\n        background-color: transparent;\n        border: 0;\n        box-shadow: none;\n    }\n    /*allows nav box to use 100% width*/\n    nav.sidebar .navbar-collapse,\n    nav.sidebar .container-fluid {\n        padding: 0 0px 0 0px;\n    }\n    /*colors dropdown box text */\n    .navbar-inverse .navbar-nav .open .dropdown-menu>li>a {\n        color: #777;\n    }\n    /*gives sidebar width/height*/\n    nav.sidebar {\n        width: 200px;\n        height: 100%;\n        margin-left: -160px;\n        float: left;\n        z-index: 8000;\n        margin-bottom: 0px;\n    }\n    /*give sidebar 100% width;*/\n    nav.sidebar li {\n        width: 100%;\n    }\n    /* Move nav to full on mouse over*/\n    nav.sidebar:hover {\n        margin-left: 0px;\n    }\n    /*for hiden things when navbar hidden*/\n    .forAnimate {\n        opacity: 0;\n    }\n}\n\n/* .....NavBar: Fully showing nav bar..... */\n\n@media (min-width: 1330px) {\n    /*Allow main to be next to Nav*/\n    .main {\n        width: calc(100% - 200px);\n        /*keeps 100% minus nav size*/\n        margin-left: 200px;\n    }\n    /*Show all nav*/\n    nav.sidebar {\n        margin-left: 0px;\n        float: left;\n    }\n    /*Show hidden items on nav*/\n    nav.sidebar .forAnimate {\n        opacity: 1;\n    }\n}\n\nnav.sidebar .navbar-nav .open .dropdown-menu>li>a:hover,\nnav.sidebar .navbar-nav .open .dropdown-menu>li>a:focus {\n    color: #CCC;\n    background-color: transparent;\n}\n\nnav:hover .forAnimate {\n    opacity: 1;\n}\n\nsection {\n    padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFdBQVc7SUFDWCwwQkFBb0I7WUFBcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsMEJBQW9CO1lBQXBCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBR0Esb0NBQW9DOztBQUVwQzs7SUFFSSxZQUFZO0FBQ2hCOztBQUdBLHlCQUF5Qjs7QUFFekI7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUdBLHdCQUF3Qjs7QUFFeEI7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUkseUNBQXlDO0lBR3pDLGlDQUFpQztBQUNyQzs7QUFHQSxxQ0FBcUM7O0FBRXJDO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLG9EQUFvRDs7QUFHcEQsNEJBQTRCOztBQUU1QjtJQUNJLCtCQUErQjtJQUMvQjtRQUNJLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCO0lBQ0EseUNBQXlDO0lBQ3pDO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0EsZUFBZTtJQUNmOztRQUVJLGdCQUFnQjtJQUNwQjtJQUNBLGVBQWU7SUFDZjs7UUFFSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBLGVBQWU7SUFDZjtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBLG9DQUFvQztJQUNwQztRQUNJLDZCQUE2QjtJQUNqQztJQUNBLGtDQUFrQztJQUNsQztRQUNJLGdDQUFnQztJQUNwQztJQUNBLDZCQUE2QjtJQUM3QjtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsV0FBVztRQUNYLGFBQWE7UUFDYiw2QkFBNkI7UUFDN0IsU0FBUztRQUVULGdCQUFnQjtJQUNwQjtJQUNBLG1DQUFtQztJQUNuQzs7UUFFSSxvQkFBb0I7SUFDeEI7SUFDQSw0QkFBNEI7SUFDNUI7UUFDSSxXQUFXO0lBQ2Y7SUFDQSw2QkFBNkI7SUFDN0I7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtJQUNBLDJCQUEyQjtJQUMzQjtRQUNJLFdBQVc7SUFDZjtJQUNBLGtDQUFrQztJQUNsQztRQUNJLGdCQUFnQjtJQUNwQjtJQUNBLHNDQUFzQztJQUN0QztRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUdBLDRDQUE0Qzs7QUFFNUM7SUFDSSwrQkFBK0I7SUFDL0I7UUFDSSx5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLGtCQUFrQjtJQUN0QjtJQUNBLGVBQWU7SUFDZjtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7SUFDQSwyQkFBMkI7SUFDM0I7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMjE4LCAyMjYpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4jc2lkZWJhciB7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4jc2lkZWJhci5hY3RpdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XG59XG5cblxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG5ib2R5LFxuaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi8qIHJlbW92ZSBvdXRlciBwYWRkaW5nICovXG5cbi5tYWluIC5yb3cge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuXG4vKlJlbW92ZSByb3VuZGVkIGNvbmVycyovXG5cbm5hdi5zaWRlYmFyLm5hdmJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG5uYXYuc2lkZWJhcixcbi5tYWluIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAyMDBtcyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAyMDBtcyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4gMjAwbXMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDIwMG1zIGVhc2Utb3V0O1xufVxuXG5cbi8qIEFkZCBnYXAgdG8gbmF2IGFuZCByaWdodCB3aW5kb3dzLiovXG5cbi5tYWluIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xufVxuXG5cbi8qIC4uLi4uTmF2QmFyOiBJY29uIG9ubHkgd2l0aCBjb2xvcmluZy9sYXlvdXQuLi4uLiovXG5cblxuLypzbWFsbC9tZWRpdW0gc2lkZSBkaXNwbGF5Ki9cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLypBbGxvdyBtYWluIHRvIGJlIG5leHQgdG8gTmF2Ki9cbiAgICAubWFpbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICAvKmtlZXBzIDEwMCUgbWludXMgbmF2IHNpemUqL1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgICAvKmxldHMgbmF2IGJhciB0byBiZSBzaG93ZWQgb24gbW91c2VvdmVyKi9cbiAgICBuYXYuc2lkZWJhcjpob3ZlcisubWFpbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICB9XG4gICAgLypDZW50ZXIgQnJhbmQqL1xuICAgIG5hdi5zaWRlYmFyLm5hdmJhci5zaWRlYmFyPi5jb250YWluZXIgLm5hdmJhci1icmFuZCxcbiAgICAubmF2YmFyPi5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxuICAgIC8qQ2VudGVyIEJyYW5kKi9cbiAgICBuYXYuc2lkZWJhciAubmF2YmFyLWJyYW5kLFxuICAgIG5hdi5zaWRlYmFyIC5uYXZiYXItaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICB9XG4gICAgLypDZW50ZXIgSWNvbnMqL1xuICAgIG5hdi5zaWRlYmFyIGEge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICAgIH1cbiAgICAvKmFkZHMgYm9yZGVyIHRvcCB0byBmaXJzdCBuYXYgYm94ICovXG4gICAgbmF2LnNpZGViYXIgLm5hdmJhci1uYXY+bGk6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggI2U1ZTVlNSBzb2xpZDtcbiAgICB9XG4gICAgLyphZGRzIGJvcmRlciB0byBib3R0b20gbmF2IGJveGVzKi9cbiAgICBuYXYuc2lkZWJhciAubmF2YmFyLW5hdj5saSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCAjZTVlNWU1IHNvbGlkO1xuICAgIH1cbiAgICAvKiBDb2xvcnMvc3R5bGUgZHJvcGRvd24gYm94Ki9cbiAgICBuYXYuc2lkZWJhciAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAvKmFsbG93cyBuYXYgYm94IHRvIHVzZSAxMDAlIHdpZHRoKi9cbiAgICBuYXYuc2lkZWJhciAubmF2YmFyLWNvbGxhcHNlLFxuICAgIG5hdi5zaWRlYmFyIC5jb250YWluZXItZmx1aWQge1xuICAgICAgICBwYWRkaW5nOiAwIDBweCAwIDBweDtcbiAgICB9XG4gICAgLypjb2xvcnMgZHJvcGRvd24gYm94IHRleHQgKi9cbiAgICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+bGk+YSB7XG4gICAgICAgIGNvbG9yOiAjNzc3O1xuICAgIH1cbiAgICAvKmdpdmVzIHNpZGViYXIgd2lkdGgvaGVpZ2h0Ki9cbiAgICBuYXYuc2lkZWJhciB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE2MHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgei1pbmRleDogODAwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICAvKmdpdmUgc2lkZWJhciAxMDAlIHdpZHRoOyovXG4gICAgbmF2LnNpZGViYXIgbGkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLyogTW92ZSBuYXYgdG8gZnVsbCBvbiBtb3VzZSBvdmVyKi9cbiAgICBuYXYuc2lkZWJhcjpob3ZlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxuICAgIC8qZm9yIGhpZGVuIHRoaW5ncyB3aGVuIG5hdmJhciBoaWRkZW4qL1xuICAgIC5mb3JBbmltYXRlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cblxuLyogLi4uLi5OYXZCYXI6IEZ1bGx5IHNob3dpbmcgbmF2IGJhci4uLi4uICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMzMwcHgpIHtcbiAgICAvKkFsbG93IG1haW4gdG8gYmUgbmV4dCB0byBOYXYqL1xuICAgIC5tYWluIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbiAgICAgICAgLyprZWVwcyAxMDAlIG1pbnVzIG5hdiBzaXplKi9cbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICAgIH1cbiAgICAvKlNob3cgYWxsIG5hdiovXG4gICAgbmF2LnNpZGViYXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgLypTaG93IGhpZGRlbiBpdGVtcyBvbiBuYXYqL1xuICAgIG5hdi5zaWRlYmFyIC5mb3JBbmltYXRlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbm5hdi5zaWRlYmFyIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIsXG5uYXYuc2lkZWJhciAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT5saT5hOmZvY3VzIHtcbiAgICBjb2xvcjogI0NDQztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxubmF2OmhvdmVyIC5mb3JBbmltYXRlIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5zZWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/perfil/perfil.component.ts ***!
    \**************************************************/

  /*! exports provided: PerfilComponent */

  /***/
  function srcAppPagesPerfilPerfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilComponent", function () {
      return PerfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_usuarios_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/usuarios.models */
    "./src/app/models/usuarios.models.ts");
    /* harmony import */


    var _services_service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/service.index */
    "./src/app/services/service.index.ts");

    var PerfilComponent =
    /*#__PURE__*/
    function () {
      function PerfilComponent(usuarioService) {
        _classCallCheck(this, PerfilComponent);

        this.usuarioService = usuarioService;
        this.usuario = new _models_usuarios_models__WEBPACK_IMPORTED_MODULE_3__["Usuario"]('', '', '', '', '', '', '', '', '');
        this.usuario = this.usuarioService.usuario;
      }

      _createClass(PerfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.usuario[0].user);
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "guardarDatos",
        value: function guardarDatos(f) {
          this.usuarioService.actualizarUsuario(this.usuario).subscribe(); //  console.log( this.usuario );
        }
      }, {
        key: "seleccionImage",
        value: function seleccionImage(archivo) {
          var _this17 = this;

          if (!archivo) {
            this.imagenSubir = null;
            return;
          }

          if (archivo.type.indexOf('image') < 0) {
            //  swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
            this.imagenSubir = null;
            return;
          }

          this.imagenSubir = archivo;
          var reader = new FileReader();
          var urlImagenTemp = reader.readAsDataURL(archivo);

          reader.onloadend = function () {
            return _this17.imagenTemp = reader.result;
          };
        }
      }, {
        key: "cambiarImagen",
        value: function cambiarImagen() {
          // console.log(this.imagenSubir);
          this.usuarioService.cambiarImagen(this.imagenSubir, this.usuario[0].Iduser); // this.usuarioService.cargarUsuario( this.usuario[0].Iduser ).subscribe();
        }
      }]);

      return PerfilComponent;
    }();

    PerfilComponent.ctorParameters = function () {
      return [{
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-perfil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perfil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perfil.component.css */
      "./src/app/pages/perfil/perfil.component.css")).default]
    })], PerfilComponent);
    /***/
  },

  /***/
  "./src/app/pages/perfilpro/perfilpro.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pages/perfilpro/perfilpro.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPerfilproPerfilproComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmZpbHByby9wZXJmaWxwcm8uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/perfilpro/perfilpro.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/perfilpro/perfilpro.component.ts ***!
    \********************************************************/

  /*! exports provided: PerfilproComponent */

  /***/
  function srcAppPagesPerfilproPerfilproComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilproComponent", function () {
      return PerfilproComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_usuarios_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/usuarios.models */
    "./src/app/models/usuarios.models.ts");
    /* harmony import */


    var _services_service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/service.index */
    "./src/app/services/service.index.ts");

    var PerfilproComponent =
    /*#__PURE__*/
    function () {
      function PerfilproComponent(usuarioService) {
        _classCallCheck(this, PerfilproComponent);

        this.usuarioService = usuarioService;
        this.usuario = new _models_usuarios_models__WEBPACK_IMPORTED_MODULE_3__["Usuario"]('', '', '', '', '', '', '', '', '');
        this.usuario = this.usuarioService.usuario;
      }

      _createClass(PerfilproComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "guardarDatos",
        value: function guardarDatos(f) {
          this.usuarioService.actualizarUsuario(this.usuario).subscribe(); //  console.log( this.usuario );
        }
      }, {
        key: "seleccionImage",
        value: function seleccionImage(archivo) {
          var _this18 = this;

          if (!archivo) {
            this.imagenSubir = null;
            return;
          }

          if (archivo.type.indexOf('image') < 0) {
            //  swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
            this.imagenSubir = null;
            return;
          }

          this.imagenSubir = archivo;
          var reader = new FileReader();
          var urlImagenTemp = reader.readAsDataURL(archivo);

          reader.onloadend = function () {
            return _this18.imagenTemp = reader.result;
          };
        }
      }, {
        key: "cambiarImagen",
        value: function cambiarImagen() {
          // console.log(this.imagenSubir);
          this.usuarioService.cambiarImagen(this.imagenSubir, this.usuario[0].Iduser); // this.usuarioService.cargarUsuario( this.usuario[0].Iduser ).subscribe();
        }
      }]);

      return PerfilproComponent;
    }();

    PerfilproComponent.ctorParameters = function () {
      return [{
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    PerfilproComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-perfilpro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perfilpro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfilpro/perfilpro.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perfilpro.component.css */
      "./src/app/pages/perfilpro/perfilpro.component.css")).default]
    })], PerfilproComponent);
    /***/
  },

  /***/
  "./src/app/pages/previous/previous.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pages/previous/previous.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPreviousPreviousComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css');\n/* @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);\n@import url(https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.3/css/mdb.min.css);\nbody {\n    background: #DAE3E7;\n}\n\n.row {\n    margin-top: 40px;\n}\n\nhtml,\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: \"Roboto\", sans-serif\n}\n\ndiv.card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);\n}\n\n.header {\n    padding: 10px 0;\n    background: #f5f5f5;\n    border-top: 3px solid #3AAA64;\n}\n\n.list-group {\n    list-style: disc inside;\n}\n\n.list-group-item {\n    display: list-item;\n}\n\n.find-more {\n    text-align: right;\n}\n\n.label-theme {\n    background: #3AAA64;\n    font-size: 14px;\n    padding: .3em .7em .3em;\n    color: #fff;\n    border-radius: .25em;\n}\n\n.label a {\n    color: inherit;\n} */\n.bg-dark {\n    background-color: #343a40!important;\n}\n.thumbnail {\n    padding: 0px;\n}\n.panel {\n    position: relative;\n}\n.panel>.panel-heading:after,\n.panel>.panel-heading:before {\n    position: absolute;\n    top: 11px;\n    left: -16px;\n    right: 100%;\n    width: 0;\n    height: 0;\n    display: block;\n    content: \" \";\n    border-color: transparent;\n    border-style: solid solid outset;\n    pointer-events: none;\n}\n.panel>.panel-heading:after {\n    border-width: 7px;\n    border-right-color: #f7f7f7;\n    margin-top: 1px;\n    margin-left: 2px;\n}\n.panel>.panel-heading:before {\n    border-right-color: #ddd;\n    border-width: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJldmlvdXMvcHJldmlvdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQXVEQSwwRkFBMEY7QUF2RDFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFERztBQUdIO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmV2aW91cy9wcmV2aW91cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCB1cmwoaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21kYm9vdHN0cmFwLzQuNC4zL2Nzcy9tZGIubWluLmNzcyk7XG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjREFFM0U3O1xufVxuXG4ucm93IHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5odG1sLFxuYm9keSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcbn1cblxuZGl2LmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzQUFBNjQ7XG59XG5cbi5saXN0LWdyb3VwIHtcbiAgICBsaXN0LXN0eWxlOiBkaXNjIGluc2lkZTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4uZmluZC1tb3JlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmxhYmVsLXRoZW1lIHtcbiAgICBiYWNrZ3JvdW5kOiAjM0FBQTY0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAuM2VtIC43ZW0gLjNlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcbn1cblxuLmxhYmVsIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xufSAqL1xuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC42LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XG4uYmctZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCFpbXBvcnRhbnQ7XG59XG5cbi50aHVtYm5haWwge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnBhbmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wYW5lbD4ucGFuZWwtaGVhZGluZzphZnRlcixcbi5wYW5lbD4ucGFuZWwtaGVhZGluZzpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDExcHg7XG4gICAgbGVmdDogLTE2cHg7XG4gICAgcmlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBzb2xpZCBvdXRzZXQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5wYW5lbD4ucGFuZWwtaGVhZGluZzphZnRlciB7XG4gICAgYm9yZGVyLXdpZHRoOiA3cHg7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZjdmN2Y3O1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4ucGFuZWw+LnBhbmVsLWhlYWRpbmc6YmVmb3JlIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNkZGQ7XG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/previous/previous.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/previous/previous.component.ts ***!
    \******************************************************/

  /*! exports provided: PreviousComponent */

  /***/
  function srcAppPagesPreviousPreviousComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviousComponent", function () {
      return PreviousComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/usuario/user.service */
    "./src/app/services/usuario/user.service.ts");
    /* harmony import */


    var _models_usuarios_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/usuarios.models */
    "./src/app/models/usuarios.models.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PreviousComponent =
    /*#__PURE__*/
    function () {
      function PreviousComponent(usuarioService, activatedRoute) {
        var _this19 = this;

        _classCallCheck(this, PreviousComponent);

        this.usuarioService = usuarioService;
        this.activatedRoute = activatedRoute;
        this.usuario = new _models_usuarios_models__WEBPACK_IMPORTED_MODULE_3__["Usuario"]('', '', '', '', '', '', '', '', '');
        this.data = []; //  this.usuario = this.usuarioService.usuario;

        activatedRoute.params.subscribe(function (params) {
          var termino = params['termino'];
          console.log(termino); //  this.usuarioService.cargarUsuarioId( termino ).subscribe( (resp: any) => { this.usuario = resp; });
          //  console.log(this.usuario);

          _this19.cargarusuarios(termino);
        });
      }

      _createClass(PreviousComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cargarusuarios",
        value: function cargarusuarios(termino) {
          var _this20 = this;

          this.usuarioService.cargarUsuarioId(termino).subscribe(function (usuarios) {
            return _this20.usuario = usuarios;
          }); // console.log(this.usuario[0].Iduser);
        }
      }]);

      return PreviousComponent;
    }();

    PreviousComponent.ctorParameters = function () {
      return [{
        type: _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    PreviousComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-previous',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./previous.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/previous/previous.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./previous.component.css */
      "./src/app/pages/previous/previous.component.css")).default]
    })], PreviousComponent);
    /***/
  },

  /***/
  "./src/app/pages/search/search.component.css":
  /*!***************************************************!*\
    !*** ./src/app/pages/search/search.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSearchSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n    margin: 0 auto;\n}\n\n.card .carousel-item {\n    height: 200px;\n}\n\n.card .carousel-caption {\n    padding: 0;\n    right: 0;\n    left: 0;\n    color: #3d3d3d;\n}\n\n.card .carousel-caption h3 {\n    color: #3d3d3d;\n}\n\n.card .carousel-caption p {\n    line-height: 30px;\n}\n\n.card .carousel-caption .col-sm-3 {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.card .carousel-caption .col-sm-9 {\n    text-align: left;\n}\n\n.navi a {\n    text-decoration: none;\n}\n\na>.ico {\n    background-color: grey;\n    padding: 10px;\n}\n\na:hover>.ico {\n    background-color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLE9BQU87SUFDUCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmQgLmNhcm91c2VsLWl0ZW0ge1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJkIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY29sb3I6ICMzZDNkM2Q7XG59XG5cbi5jYXJkIC5jYXJvdXNlbC1jYXB0aW9uIGgzIHtcbiAgICBjb2xvcjogIzNkM2QzZDtcbn1cblxuLmNhcmQgLmNhcm91c2VsLWNhcHRpb24gcCB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5jYXJkIC5jYXJvdXNlbC1jYXB0aW9uIC5jb2wtc20tMyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZCAuY2Fyb3VzZWwtY2FwdGlvbiAuY29sLXNtLTkge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uYXZpIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYT4uaWNvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmE6aG92ZXI+LmljbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2Njtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/search/search.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/search/search.component.ts ***!
    \**************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppPagesSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchComponent;
    }();

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.css */
      "./src/app/pages/search/search.component.css")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/pages/userchat/userchat.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pages/userchat/userchat.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserchatUserchatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css');\r\n.bg-dark {\r\n    background-color: #343a40!important;\r\n}\r\n.thumbnail {\r\n    padding: 0px;\r\n}\r\n.panel {\r\n    position: relative;\r\n}\r\n.panel>.panel-heading:after,\r\n.panel>.panel-heading:before {\r\n    position: absolute;\r\n    top: 11px;\r\n    left: -16px;\r\n    right: 100%;\r\n    width: 0;\r\n    height: 0;\r\n    display: block;\r\n    content: \" \";\r\n    border-color: transparent;\r\n    border-style: solid solid outset;\r\n    pointer-events: none;\r\n}\r\n.panel>.panel-heading:after {\r\n    border-width: 7px;\r\n    border-right-color: #f7f7f7;\r\n    margin-top: 1px;\r\n    margin-left: 2px;\r\n}\r\n.panel>.panel-heading:before {\r\n    border-right-color: #ddd;\r\n    border-width: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcmNoYXQvdXNlcmNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7QUFDMUY7SUFDSSxtQ0FBbUM7QUFDdkM7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJjaGF0L3VzZXJjaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC42LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcbi5iZy1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGh1bWJuYWlsIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBhbmVsPi5wYW5lbC1oZWFkaW5nOmFmdGVyLFxyXG4ucGFuZWw+LnBhbmVsLWhlYWRpbmc6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTFweDtcclxuICAgIGxlZnQ6IC0xNnB4O1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBzb2xpZCBvdXRzZXQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnBhbmVsPi5wYW5lbC1oZWFkaW5nOmFmdGVyIHtcclxuICAgIGJvcmRlci13aWR0aDogN3B4O1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLnBhbmVsPi5wYW5lbC1oZWFkaW5nOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNkZGQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDhweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/userchat/userchat.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/userchat/userchat.component.ts ***!
    \******************************************************/

  /*! exports provided: UserchatComponent */

  /***/
  function srcAppPagesUserchatUserchatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserchatComponent", function () {
      return UserchatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _services_pedidos_pedidos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/pedidos/pedidos.service */
    "./src/app/services/pedidos/pedidos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_comentario_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/comentario.models */
    "./src/app/models/comentario.models.ts");
    /* harmony import */


    var _models_pedido_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/pedido.models */
    "./src/app/models/pedido.models.ts");
    /* harmony import */


    var _services_comentarios_comentario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/comentarios/comentario.service */
    "./src/app/services/comentarios/comentario.service.ts");
    /* harmony import */


    var _services_websocket_sockets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/websocket/sockets.service */
    "./src/app/services/websocket/sockets.service.ts");

    var UserchatComponent =
    /*#__PURE__*/
    function () {
      function UserchatComponent(usuarioService, activatedRoute, pedidoService, comentarioService, socketService) {
        var _this21 = this;

        _classCallCheck(this, UserchatComponent);

        this.usuarioService = usuarioService;
        this.activatedRoute = activatedRoute;
        this.pedidoService = pedidoService;
        this.comentarioService = comentarioService;
        this.socketService = socketService;
        this.test = 'esto es Web Socket';
        this.fecha = new Date();
        this.fecha2 = this.fecha.getFullYear() + '-' + this.fecha.getMonth() + 1 + '-' + this.fecha.getDate();
        this.Hora = this.fecha.getHours() + ':' + this.fecha.getMinutes();
        this.pedido = new _models_pedido_models__WEBPACK_IMPORTED_MODULE_7__["Pedido"]('', '', '', '', 0, '', 0, '');
        this.usuario = usuarioService.usuario;
        activatedRoute.params.subscribe(function (params) {
          _this21.idpedidoparam = params['idpedido'];
          _this21.user = params['iduser'];
          var idpedido = params['idpedido'];

          _this21.cargarPedido(idpedido);

          _this21.cargarComentarios(idpedido);
        });
      }

      _createClass(UserchatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.socketService.listen('test event').subscribe(function (data) {
            console.log(data);
          });
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            comentario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "cargarPedido",
        value: function cargarPedido(termino) {
          var _this22 = this;

          // console.log('Id Pedido: ' + termino );
          // console.log('Id del usuario contratante: ' + this.user);
          // console.log('Id del Proveedor: ' + this.usuario[0].Iduser);
          this.pedidoService.cargarPedido(termino).subscribe(function (pedido) {
            return _this22.pedido = pedido;
          }); // console.log(this.usuario[0].Iduser);
        }
      }, {
        key: "cargarComentarios",
        value: function cargarComentarios(idpedido) {
          var _this23 = this;

          this.comentarioService.cargarComentarios(idpedido).subscribe(function (respuesta) {
            return _this23.comentarioss = respuesta;
          });
        }
      }, {
        key: "enviarComent",
        value: function enviarComent() {
          this.Idchat = 0;
          var comentarios = new _models_comentario_models__WEBPACK_IMPORTED_MODULE_6__["Comentarios"](this.Idchat, this.fecha2, this.forma.value.comentario, this.usuario[0].Iduser, this.idpedidoparam);
          console.log(comentarios);
          this.comentarioService.crearComentario(comentarios).subscribe();
        }
      }]);

      return UserchatComponent;
    }();

    UserchatComponent.ctorParameters = function () {
      return [{
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _services_pedidos_pedidos_service__WEBPACK_IMPORTED_MODULE_4__["PedidosService"]
      }, {
        type: _services_comentarios_comentario_service__WEBPACK_IMPORTED_MODULE_8__["ComentarioService"]
      }, {
        type: _services_websocket_sockets_service__WEBPACK_IMPORTED_MODULE_9__["SocketsService"]
      }];
    };

    UserchatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userchat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userchat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userchat/userchat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userchat.component.css */
      "./src/app/pages/userchat/userchat.component.css")).default]
    })], UserchatComponent);
    /***/
  },

  /***/
  "./src/app/pipes/imagen.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/imagen.pipe.ts ***!
    \**************************************/

  /*! exports provided: ImagenPipe */

  /***/
  function srcAppPipesImagenPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagenPipe", function () {
      return ImagenPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");

    var ImagenPipe =
    /*#__PURE__*/
    function () {
      function ImagenPipe() {
        _classCallCheck(this, ImagenPipe);
      }

      _createClass(ImagenPipe, [{
        key: "transform",
        value: function transform(img) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIO"] + '/img/verimagen/';

          if (!img) {
            return url + 'xxx';
          }

          return url + img;
        }
      }]);

      return ImagenPipe;
    }();

    ImagenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'imagen'
    })], ImagenPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _imagen_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./imagen.pipe */
    "./src/app/pipes/imagen.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_imagen_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"]],
      imports: [],
      exports: [_imagen_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/registro/dataclient/dataclient.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/registro/dataclient/dataclient.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistroDataclientDataclientComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/************* GENERIC  *****************/\n\na {\n    color: #696969;\n}\n\nimg {\n    width: 100%;\n}\n\n.twhite {\n    color: #fff!important;\n}\n\n.twhite a {\n    color: #fff!important;\n}\n\n/************* Background ****************/\n\n.bglight1 {\n    background: #f2f2f2;\n}\n\n/************* TOP-HEAD *****************/\n\n.top-head ul li {\n    padding-right: 8px;\n}\n\n/****************** Navigation **************/\n\n.navbar-toggler {\n    border-color: #dd0000;\n}\n\n.navbar-toggler-icon {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(221, 0, 0, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\n}\n\n/**************** Banner Slider Carousel **************/\n\n.carousel-inner img {\n    width: 100%;\n}\n\n.carousel-caption {\n    color: #000;\n    top: 110px;\n    bottom: auto;\n    text-align: left;\n}\n\n.carousel-caption h1 {\n    color: #dd0000;\n    background-color: #;\n}\n\n/************ Services **************/\n\n.most-car-box:hover {\n    background: ;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n/*********** TABS *******/\n\n.nav-tabs {\n    border-bottom: 1px solid #ccc;\n}\n\n.nav-tabs .nav-link.active {\n    border-bottom: 1px solid #dd0000;\n    border-radius: 0px;\n}\n\n/**************** Social ICONS ***************/\n\n.social-icons {\n    margin: 0;\n    padding: 0;\n    font-size: 8px;\n}\n\n.social {\n    margin: 7px 7px 7px 0px;\n}\n\n#social-fb:hover {\n    color: #3B5998;\n    -webkit-transition: all .25s;\n    transition: all .25s;\n}\n\n#social-tw:hover {\n    color: #4099FF;\n    -webkit-transition: all .25s;\n    transition: all .25s;\n}\n\n#social-gp:hover {\n    color: #d34836;\n    -webkit-transition: all .25s;\n    transition: all .25s;\n}\n\n#social-em:hover {\n    color: #f39c12;\n    -webkit-transition: all .25s;\n    transition: all .25s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8vZGF0YWNsaWVudC9kYXRhY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDOztBQUV6QztJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBR0EsMENBQTBDOztBQUUxQztJQUNJLG1CQUFtQjtBQUN2Qjs7QUFHQSx5Q0FBeUM7O0FBRXpDO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBLDZDQUE2Qzs7QUFFN0M7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzUUFBc1E7QUFDMVE7O0FBR0EsdURBQXVEOztBQUV2RDtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBR0EscUNBQXFDOztBQUVyQztJQUNJLFlBQVk7SUFDWix3RUFBd0U7QUFDNUU7O0FBR0EseUJBQXlCOztBQUV6QjtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBR0EsOENBQThDOztBQUU5QztJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDRCQUFvQjtJQUFwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNEJBQW9CO0lBQXBCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cm8vZGF0YWNsaWVudC9kYXRhY2xpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKiBHRU5FUklDICAqKioqKioqKioqKioqKioqKi9cblxuYSB7XG4gICAgY29sb3I6ICM2OTY5Njk7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50d2hpdGUge1xuICAgIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcbn1cblxuLnR3aGl0ZSBhIHtcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG59XG5cblxuLyoqKioqKioqKioqKiogQmFja2dyb3VuZCAqKioqKioqKioqKioqKioqL1xuXG4uYmdsaWdodDEge1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cblxuLyoqKioqKioqKioqKiogVE9QLUhFQUQgKioqKioqKioqKioqKioqKiovXG5cbi50b3AtaGVhZCB1bCBsaSB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKiogTmF2aWdhdGlvbiAqKioqKioqKioqKioqKi9cblxuLm5hdmJhci10b2dnbGVyIHtcbiAgICBib3JkZXItY29sb3I6ICNkZDAwMDA7XG59XG5cbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiKDIyMSwgMCwgMCwgMC43KScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7XG59XG5cblxuLyoqKioqKioqKioqKioqKiogQmFubmVyIFNsaWRlciBDYXJvdXNlbCAqKioqKioqKioqKioqKi9cblxuLmNhcm91c2VsLWlubmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0b3A6IDExMHB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiBoMSB7XG4gICAgY29sb3I6ICNkZDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIztcbn1cblxuXG4vKioqKioqKioqKioqIFNlcnZpY2VzICoqKioqKioqKioqKioqL1xuXG4ubW9zdC1jYXItYm94OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiA7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG5cbi8qKioqKioqKioqKiBUQUJTICoqKioqKiovXG5cbi5uYXYtdGFicyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkMDAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cblxuLyoqKioqKioqKioqKioqKiogU29jaWFsIElDT05TICoqKioqKioqKioqKioqKi9cblxuLnNvY2lhbC1pY29ucyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5zb2NpYWwge1xuICAgIG1hcmdpbjogN3B4IDdweCA3cHggMHB4O1xufVxuXG4jc29jaWFsLWZiOmhvdmVyIHtcbiAgICBjb2xvcjogIzNCNTk5ODtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cztcbn1cblxuI3NvY2lhbC10dzpob3ZlciB7XG4gICAgY29sb3I6ICM0MDk5RkY7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXM7XG59XG5cbiNzb2NpYWwtZ3A6aG92ZXIge1xuICAgIGNvbG9yOiAjZDM0ODM2O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzO1xufVxuXG4jc29jaWFsLWVtOmhvdmVyIHtcbiAgICBjb2xvcjogI2YzOWMxMjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/registro/dataclient/dataclient.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/registro/dataclient/dataclient.component.ts ***!
    \*************************************************************/

  /*! exports provided: DataclientComponent */

  /***/
  function srcAppRegistroDataclientDataclientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataclientComponent", function () {
      return DataclientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/usuario/user.service */
    "./src/app/services/usuario/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_usuarios_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/usuarios.models */
    "./src/app/models/usuarios.models.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_dataPerfil_data_perfil_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/dataPerfil/data-perfil.service */
    "./src/app/services/dataPerfil/data-perfil.service.ts");
    /* harmony import */


    var _models_dataperfil_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/dataperfil.models */
    "./src/app/models/dataperfil.models.ts");

    var DataclientComponent =
    /*#__PURE__*/
    function () {
      function DataclientComponent(usuarioService, router, dataPerfilService, activatedRoute) {
        var _this24 = this;

        _classCallCheck(this, DataclientComponent);

        this.usuarioService = usuarioService;
        this.router = router;
        this.dataPerfilService = dataPerfilService;
        this.usuario = new _models_usuarios_models__WEBPACK_IMPORTED_MODULE_4__["Usuario"]('', '', '', '', '', '', '', '', '');
        this.dataperfil = [];
        activatedRoute.params.subscribe(function (params) {
          var termino = params['user']; //  this.user = termino;

          _this24.usuarioService.cargarUsuarioUser(termino).subscribe(function (resp) {
            return _this24.usuario = resp;
          });

          console.log('la id es: ' + _this24.usuario); //  this.cargarparametros(termino);
        });
      }

      _createClass(DataclientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            competencias: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            expLaboral: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            conocimientos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
        }
      }, {
        key: "GuargarUser",
        value: function GuargarUser() {
          var dataperfil = new _models_dataperfil_models__WEBPACK_IMPORTED_MODULE_7__["DataPerfil"](this.forma.value.competencias, this.forma.value.expLaboral, this.forma.value.conocimientos, this.usuario[0].Iduser);
          console.log(dataperfil); // this.dataPerfilService.creardataPerfil( dataperfil ).subscribe ( resp => this.router.navigate(['/login']) );
        }
      }]);

      return DataclientComponent;
    }();

    DataclientComponent.ctorParameters = function () {
      return [{
        type: _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_dataPerfil_data_perfil_service__WEBPACK_IMPORTED_MODULE_6__["DataPerfilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    DataclientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dataclient',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dataclient.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/dataclient/dataclient.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dataclient.component.css */
      "./src/app/registro/dataclient/dataclient.component.css")).default]
    })], DataclientComponent);
    /***/
  },

  /***/
  "./src/app/registro/dataprovee/dataprovee.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/registro/dataprovee/dataprovee.component.ts ***!
    \*************************************************************/

  /*! exports provided: DataproveeComponent */

  /***/
  function srcAppRegistroDataproveeDataproveeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataproveeComponent", function () {
      return DataproveeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/usuario/user.service */
    "./src/app/services/usuario/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_dataPerfil_data_perfil_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/dataPerfil/data-perfil.service */
    "./src/app/services/dataPerfil/data-perfil.service.ts");
    /* harmony import */


    var _models_dataperfil_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/dataperfil.models */
    "./src/app/models/dataperfil.models.ts");
    /* harmony import */


    var _services_service_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/service.index */
    "./src/app/services/service.index.ts");

    var DataproveeComponent =
    /*#__PURE__*/
    function () {
      function DataproveeComponent(usuarioService, router, dataPerfilService, activatedRoute, pedidoService) {
        var _this25 = this;

        _classCallCheck(this, DataproveeComponent);

        this.usuarioService = usuarioService;
        this.router = router;
        this.dataPerfilService = dataPerfilService;
        this.pedidoService = pedidoService;
        this.dataperfil = [];
        activatedRoute.params.subscribe(function (params) {
          var termino = params['user']; //  this.user = termino;

          _this25.usuarioService.cargarUsuarioUser(termino).subscribe(function (usuarios) {
            return _this25.usuario = usuarios;
          });

          console.log('la id es: ' + _this25.usuario); //  this.cargarparametros(termino);
        });
      }

      _createClass(DataproveeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            competencias: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            expLaboral: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            conocimientos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
        }
      }, {
        key: "GuargarUser",
        value: function GuargarUser() {
          var _this26 = this;

          var dataperfil = new _models_dataperfil_models__WEBPACK_IMPORTED_MODULE_6__["DataPerfil"](this.forma.value.competencias, this.forma.value.expLaboral, this.forma.value.conocimientos, this.usuario.Iduser);
          console.log(this.usuario.Iduser);
          this.pedidoService.crearConteo(this.usuario).subscribe();
          this.dataPerfilService.creardataPerfil(dataperfil).subscribe(function (resp) {
            return _this26.router.navigate(['/login']);
          });
        }
      }]);

      return DataproveeComponent;
    }();

    DataproveeComponent.ctorParameters = function () {
      return [{
        type: _services_usuario_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_dataPerfil_data_perfil_service__WEBPACK_IMPORTED_MODULE_5__["DataPerfilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_7__["PedidosService"]
      }];
    };

    DataproveeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dataprovee',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dataprovee.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/dataprovee/dataprovee.component.html")).default
    })], DataproveeComponent);
    /***/
  },

  /***/
  "./src/app/services/comentarios/comentario.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/comentarios/comentario.service.ts ***!
    \************************************************************/

  /*! exports provided: ComentarioService */

  /***/
  function srcAppServicesComentariosComentarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComentarioService", function () {
      return ComentarioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var rxjs_Rx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/Rx */
    "./node_modules/rxjs-compat/_esm2015/Rx.js");

    var ComentarioService =
    /*#__PURE__*/
    function () {
      function ComentarioService(http, router) {
        _classCallCheck(this, ComentarioService);

        this.http = http;
        this.router = router;
      }

      _createClass(ComentarioService, [{
        key: "crearComentario",
        value: function crearComentario(comentario) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/comentario/crearComentario';
          return this.http.post(url, comentario).map(function (resp) {
            // swal('Usuario Creado', usuario.email, 'success');
            return resp.respuesta;
          }).catch(function (err) {
            console.log(err.error.mensaje); //   swal(err.error.mensaje, err.error.errors.message, 'error');

            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(err);
          });
        }
      }, {
        key: "cargarComentarios",
        value: function cargarComentarios(termino) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/comentario/SelecComentPed/' + termino;
          return this.http.get(url).map(function (resp) {
            return resp.respuesta;
          });
        }
      }]);

      return ComentarioService;
    }();

    ComentarioService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ComentarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ComentarioService);
    /***/
  },

  /***/
  "./src/app/services/dataPerfil/data-perfil.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/dataPerfil/data-perfil.service.ts ***!
    \************************************************************/

  /*! exports provided: DataPerfilService */

  /***/
  function srcAppServicesDataPerfilDataPerfilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataPerfilService", function () {
      return DataPerfilService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert */
    "./node_modules/sweetalert/dist/sweetalert.min.js");
    /* harmony import */


    var sweetalert__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/Rx */
    "./node_modules/rxjs-compat/_esm2015/Rx.js");

    var DataPerfilService =
    /*#__PURE__*/
    function () {
      function DataPerfilService(http, router) {
        _classCallCheck(this, DataPerfilService);

        this.http = http;
        this.router = router;
      }

      _createClass(DataPerfilService, [{
        key: "creardataPerfil",
        value: function creardataPerfil(dataperfil) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/dataperfil/addDataPerfil';
          return this.http.post(url, dataperfil).map(function (resp) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('Perfil Acualizado', 'success');
            return resp;
          }).catch(function (err) {
            console.log(err.error.mensaje); //   swal(err.error.mensaje, err.error.errors.message, 'error');

            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
          });
        }
      }, {
        key: "actualizardataPerfil",
        value: function actualizardataPerfil(dataperfil, usuario) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/dataperfil/editarDataPerfil/' + usuario[0].Iduser;
          var verifica = Boolean;
          console.log('Del service ');
          console.log(dataperfil[0]);
          return this.http.put(url, dataperfil[0]).map(function (resp) {
            verifica = resp.ok;

            if (verifica) {
              console.log('Registro Acualizado');
            }

            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('Registro actualizado', 'success');
          });
        }
      }, {
        key: "cargarDataPerfil",
        value: function cargarDataPerfil(termino, page) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/dataperfil/SelecDataLike/' + termino + '?page=' + page + '&limit=2';
          return this.http.get(url).map(function (resp) {
            return resp.perfiles;
          });
        }
      }, {
        key: "crearpuntuacion",
        value: function crearpuntuacion(usuario) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/puntuacion/crearpuntuacion/';
          return this.http.post(url, usuario.Iduser).map(function (resp) {
            console.log('Datos de puntaje creados');
            return resp;
          }).catch(function (err) {
            console.log(err.error.mensaje); //   swal(err.error.mensaje, err.error.errors.message, 'error');

            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
          });
        }
      }, {
        key: "sumarPuntuacion",
        value: function sumarPuntuacion(puntuacion, usuario) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/puntuacion/addpuntuacion/' + usuario.Iduser;
          return this.http.post(url, puntuacion).map(function (resp) {
            console.log('Puntuacion Actualizada');
            return resp;
          }).catch(function (err) {
            console.log(err.error.mensaje); //   swal(err.error.mensaje, err.error.errors.message, 'error');

            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
          });
        }
      }, {
        key: "calcularScore",
        value: function calcularScore(usuario) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/puntuacion/calscore';
          return this.http.post(url, usuario).map(function (resp) {
            console.log('Score Acutalizado');
            return resp;
          }).catch(function (err) {
            console.log(err.error.mensaje); //   swal(err.error.mensaje, err.error.errors.message, 'error');

            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
          });
        }
      }, {
        key: "cargarPuntuacion",
        value: function cargarPuntuacion(Id) {
          console.log(Id);
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/puntuacion/buscar/' + Id;
          return this.http.get(url).map(function (resp) {
            return resp.puntuacion;
          });
        }
      }]);

      return DataPerfilService;
    }();

    DataPerfilService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    DataPerfilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataPerfilService);
    /***/
  },

  /***/
  "./src/app/services/guards/guards.guard.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/guards/guards.guard.ts ***!
    \*************************************************/

  /*! exports provided: GuardsGuard */

  /***/
  function srcAppServicesGuardsGuardsGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardsGuard", function () {
      return GuardsGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _usuario_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../usuario/user.service */
    "./src/app/services/usuario/user.service.ts");

    var GuardsGuard =
    /*#__PURE__*/
    function () {
      function GuardsGuard(usuarioService, router) {
        _classCallCheck(this, GuardsGuard);

        this.usuarioService = usuarioService;
        this.router = router;
      }

      _createClass(GuardsGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.usuarioService.estaLogueado()) {
            console.log('logeado');
            return true;
          } else {
            console.log('Bloqueado por guard');
            this.router.navigate(['/home']);
            return false;
          }
        }
      }]);

      return GuardsGuard;
    }();

    GuardsGuard.ctorParameters = function () {
      return [{
        type: _usuario_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    GuardsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GuardsGuard);
    /***/
  },

  /***/
  "./src/app/services/pedidos/pedidos.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/pedidos/pedidos.service.ts ***!
    \*****************************************************/

  /*! exports provided: PedidosService */

  /***/
  function srcAppServicesPedidosPedidosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosService", function () {
      return PedidosService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert */
    "./node_modules/sweetalert/dist/sweetalert.min.js");
    /* harmony import */


    var sweetalert__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/Rx */
    "./node_modules/rxjs-compat/_esm2015/Rx.js"); // ERROR in node_modules/sweetalert/typings/sweetalert.d.ts(4,9):
    //  error TS2403: Subsequent variable declarations must have the same type.  Variable 'swal' cambiar a  _swal


    var PedidosService =
    /*#__PURE__*/
    function () {
      function PedidosService(http, router) {
        _classCallCheck(this, PedidosService);

        this.http = http;
        this.router = router;
      }

      _createClass(PedidosService, [{
        key: "crearpedido",
        value: function crearpedido(pedido) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/pedido/adpedido';
          return this.http.post(url, pedido).map(function (resp) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
              title: 'Se Registro el Pedido',
              text: 'Gracias por Utilizar ServiTodo',
              timer: 2000
            }); // , showConfirmButton: false

            return resp.usuario;
          }).catch(function (err) {
            console.log(err.error.mensaje); //   swal(err.error.mensaje, err.error.errors.message, 'error');

            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
          });
        }
      }, {
        key: "cargarPedido",
        value: function cargarPedido(termino) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/pedido/pedido/' + termino;
          return this.http.get(url).map(function (resp) {
            return resp.pedido;
          });
        } //   swal({title: 'Se Registro el Pedido', text: 'Gracias por Utilizar ServiTodo', timer: 2000 }); // , showConfirmButton: false

      }, {
        key: "crearConteo",
        value: function crearConteo(usuario) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/pedido/adConteo';
          var Iduser = usuario.Iduser;
          console.log(url);
          return this.http.post(url, usuario).map(function (resp) {
            return resp.respuesta;
          }).catch(function (err) {
            console.log(err.error.mensaje);
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
          });
        }
      }, {
        key: "cargarPedidoPerfil",
        value: function cargarPedidoPerfil(termino) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/pedido/Selecpedidos/' + termino;
          return this.http.get(url).map(function (resp) {
            return resp.usuarios;
          });
        }
      }, {
        key: "cargarPedidoPerfilProv",
        value: function cargarPedidoPerfilProv(termino) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/pedido/Selecpedidospro/' + termino;
          return this.http.get(url).map(function (resp) {
            return resp.usuarios;
          });
        }
      }, {
        key: "cargarPedTerminados",
        value: function cargarPedTerminados(termino) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/pedido/trabajosclose/' + termino;
          return this.http.get(url).map(function (resp) {
            return resp.resultado;
          });
        }
      }, {
        key: "cargarPedPendientes",
        value: function cargarPedPendientes(termino) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/pedido/ContaReg/' + termino;
          return this.http.get(url).map(function (resp) {
            return resp.respuesta;
          });
        }
      }, {
        key: "cargarRecaudado",
        value: function cargarRecaudado(termino) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/pedido/sumarvalor/' + termino;
          return this.http.get(url).map(function (resp) {
            return resp.resultado;
          });
        }
      }]);

      return PedidosService;
    }();

    PedidosService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    PedidosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PedidosService);
    /***/
  },

  /***/
  "./src/app/services/service.index.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/service.index.ts ***!
    \*******************************************/

  /*! exports provided: SocketsService, ComentarioService, ValidarService, GuardsGuard, PedidosService, DataPerfilService, UserService */

  /***/
  function srcAppServicesServiceIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _websocket_sockets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./websocket/sockets.service */
    "./src/app/services/websocket/sockets.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SocketsService", function () {
      return _websocket_sockets_service__WEBPACK_IMPORTED_MODULE_1__["SocketsService"];
    });
    /* harmony import */


    var _comentarios_comentario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./comentarios/comentario.service */
    "./src/app/services/comentarios/comentario.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ComentarioService", function () {
      return _comentarios_comentario_service__WEBPACK_IMPORTED_MODULE_2__["ComentarioService"];
    });
    /* harmony import */


    var _validaciones_validar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./validaciones/validar.service */
    "./src/app/services/validaciones/validar.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ValidarService", function () {
      return _validaciones_validar_service__WEBPACK_IMPORTED_MODULE_3__["ValidarService"];
    });
    /* harmony import */


    var _guards_guards_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guards/guards.guard */
    "./src/app/services/guards/guards.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GuardsGuard", function () {
      return _guards_guards_guard__WEBPACK_IMPORTED_MODULE_4__["GuardsGuard"];
    });
    /* harmony import */


    var _pedidos_pedidos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pedidos/pedidos.service */
    "./src/app/services/pedidos/pedidos.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PedidosService", function () {
      return _pedidos_pedidos_service__WEBPACK_IMPORTED_MODULE_5__["PedidosService"];
    });
    /* harmony import */


    var _dataPerfil_data_perfil_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dataPerfil/data-perfil.service */
    "./src/app/services/dataPerfil/data-perfil.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataPerfilService", function () {
      return _dataPerfil_data_perfil_service__WEBPACK_IMPORTED_MODULE_6__["DataPerfilService"];
    });
    /* harmony import */


    var _usuario_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./usuario/user.service */
    "./src/app/services/usuario/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _usuario_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"];
    });
    /***/

  },

  /***/
  "./src/app/services/service.module.ts":
  /*!********************************************!*\
    !*** ./src/app/services/service.module.ts ***!
    \********************************************/

  /*! exports provided: ServiceModule */

  /***/
  function srcAppServicesServiceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceModule", function () {
      return ServiceModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ServiceModule = function ServiceModule() {
      _classCallCheck(this, ServiceModule);
    };

    ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
      providers: [_service_index__WEBPACK_IMPORTED_MODULE_3__["UserService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["DataPerfilService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["PedidosService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["GuardsGuard"], _service_index__WEBPACK_IMPORTED_MODULE_3__["ValidarService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["ComentarioService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["SocketsService"]],
      declarations: []
    })], ServiceModule);
    /***/
  },

  /***/
  "./src/app/services/subirarchivo/subirarchivo.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/subirarchivo/subirarchivo.service.ts ***!
    \***************************************************************/

  /*! exports provided: SubirarchivoService */

  /***/
  function srcAppServicesSubirarchivoSubirarchivoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubirarchivoService", function () {
      return SubirarchivoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");

    var SubirarchivoService =
    /*#__PURE__*/
    function () {
      function SubirarchivoService() {
        _classCallCheck(this, SubirarchivoService);
      }

      _createClass(SubirarchivoService, [{
        key: "subirArchivo",
        value: function subirArchivo(archivo, tipo, id) {
          return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append('img', archivo, archivo.name);

            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  console.log('Imagen subida');
                  console.log(JSON.parse(xhr.response));
                  resolve(JSON.parse(xhr.response));
                } else {
                  console.log('Fallo la subida');
                  reject(xhr.response);
                }
              }
            };

            var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIO"] + '/img/imagenes/' + id;
            xhr.open('PUT', url, true);
            xhr.send(formData);
          });
        }
      }]);

      return SubirarchivoService;
    }();

    SubirarchivoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SubirarchivoService);
    /***/
  },

  /***/
  "./src/app/services/usuario/user.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/usuario/user.service.ts ***!
    \**************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUsuarioUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert */
    "./node_modules/sweetalert/dist/sweetalert.min.js");
    /* harmony import */


    var sweetalert__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/Rx */
    "./node_modules/rxjs-compat/_esm2015/Rx.js");
    /* harmony import */


    var _subirarchivo_subirarchivo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../subirarchivo/subirarchivo.service */
    "./src/app/services/subirarchivo/subirarchivo.service.ts"); // ERROR in node_modules/sweetalert/typings/sweetalert.d.ts(4,9):
    //  error TS2403: Subsequent variable declarations must have the same type.  Variable 'swal' cambiar a  _swal


    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http, router, subirArchivo) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.router = router;
        this.subirArchivo = subirArchivo;
        this.cargarStorage();
      }

      _createClass(UserService, [{
        key: "crearUsuario",
        value: function crearUsuario(usuario) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/usuario/crearUsuario';
          return this.http.post(url, usuario).map(function (resp) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('Usuario Creado', usuario.email, 'success');
            return resp.usuario;
          }).catch(function (err) {
            console.log(err.error.mensaje); //   swal(err.error.mensaje, err.error.errors.message, 'error');

            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
          });
        }
      }, {
        key: "cargarUsuarios",
        value: function cargarUsuarios() {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/usuario/users';
          return this.http.get(url).map(function (resp) {
            return resp.usuarios;
          });
        }
      }, {
        key: "VerificarUsuario",
        value: function VerificarUsuario(termino, usuario) {
          var _this27 = this;

          var verificar;
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/usuario/SelecionUsuario/' + termino;
          return this.http.get(url).map(function (resp) {
            verificar = resp.ok;
            console.log(verificar);

            if (verificar) {
              console.log('Existe el Registro'); //  this.actualizarUsuario(usuario) .subscribe();

              return false;
            } else {
              console.log('No existe');

              _this27.crearUsuario(usuario).subscribe();
            }
          });
        }
      }, {
        key: "cargarUsuarioId",
        value: function cargarUsuarioId(id) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/usuario/SelecionUsuario/' + id;
          return this.http.get(url).map(function (resp) {
            return resp.usuarios;
          });
        }
      }, {
        key: "cargarUsuarioUser",
        value: function cargarUsuarioUser(termino) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/usuario/SelecionUser/' + termino;
          return this.http.get(url).map(function (resp) {
            return resp.usuarios;
          }); // this.guardarStorage(resp.ok, resp.usuarios);
        }
      }, {
        key: "actualizarUsuario",
        value: function actualizarUsuario(usuario) {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/usuario/editarUsuario/' + usuario[0].Iduser;
          var verifica = Boolean;
          console.log('Del service ');
          console.log(usuario[0]);
          return this.http.put(url, usuario[0]).map(function (resp) {
            verifica = resp.ok;

            if (verifica) {
              console.log('Registro Acualizado');
            }

            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('Registro actualizado', 'success');
          });
        }
      }, {
        key: "guardarStorage",
        value: function guardarStorage(ok, usuario) {
          localStorage.setItem('ok', ok);
          localStorage.setItem('user', usuario[0].user);
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.usuario = usuario; // this.token = token;
        }
      }, {
        key: "LogearUsuario",
        value: function LogearUsuario(usuario) {
          var _this28 = this;

          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/login/logUser';
          return this.http.post(url, usuario).map(function (resp) {
            _this28.verificar = resp.ok;

            if (_this28.verificar) {
              _this28.guardarStorage(resp.ok, resp.usuarios); // return true;

            } else {
              console.log('No existe'); // swal('El Usuario o Contraceña esta Incorrecto', 'warning');
            }
          });
        }
      }, {
        key: "cargarStorage",
        value: function cargarStorage() {
          if (localStorage.getItem('ok')) {
            this.verificar = localStorage.getItem('ok');
            this.usuario = JSON.parse(localStorage.getItem('usuario')); //  this.menu = JSON.parse( localStorage.getItem('menu') );
          } else {
            //  this.token = '';
            this.usuario = null; //  this.menu = [];
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          // this.usuario = null;
          this.verificar = '';
          localStorage.removeItem('ok');
          localStorage.removeItem('usuario');
          this.router.navigate(['/home']);
        }
      }, {
        key: "limpiarStorage",
        value: function limpiarStorage() {
          localStorage.removeItem('ok');
          localStorage.removeItem('usuario');
        }
      }, {
        key: "estaLogueado",
        value: function estaLogueado() {
          console.log('esta log: ' + this.verificar);
          return this.verificar ? true : false;
        }
      }, {
        key: "cambiarImagen",
        value: function cambiarImagen(archivo, id) {
          var _this29 = this;

          // console.log( archivo + '  ' + id );
          this.subirArchivo.subirArchivo(archivo, 'usuario', id).then(function (resp) {
            _this29.usuario[0].img = resp.usuarios;
            console.log('imgane:  ' + _this29.usuario[0].img); // swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );

            _this29.guardarStorage(resp.ok, _this29.usuario);
          }).catch(function (resp) {
            console.log(resp);
          });
        }
      }, {
        key: "enviarEmail",
        value: function enviarEmail(mail) {
          var _this30 = this;

          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/formulario';
          return this.http.post(url, mail).map(function (resp) {
            _this30.verificar = resp;

            if (_this30.verificar) {
              return true;
            } else {
              console.log('Error al Enviar Correo');
              return false;
            }
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _subirarchivo_subirarchivo_service__WEBPACK_IMPORTED_MODULE_9__["SubirarchivoService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/services/validaciones/validar.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/validaciones/validar.service.ts ***!
    \**********************************************************/

  /*! exports provided: ValidarService */

  /***/
  function srcAppServicesValidacionesValidarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidarService", function () {
      return ValidarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");

    var ValidarService =
    /*#__PURE__*/
    function () {
      function ValidarService(http, router) {
        _classCallCheck(this, ValidarService);

        this.http = http;
        this.router = router;
      }

      _createClass(ValidarService, [{
        key: "generarRandon",
        value: function generarRandon() {
          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/randon/randon';
          return this.http.get(url).map(function (resp) {
            return resp.randon;
          });
        }
      }, {
        key: "enviarEmail",
        value: function enviarEmail(mail) {
          var _this31 = this;

          var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/formulario';
          return this.http.post(url, mail).map(function (resp) {
            _this31.verificar = resp;

            if (_this31.verificar) {
              return true;
            } else {
              console.log('Error al Enviar Correo');
              return false;
            }
          });
        }
      }]);

      return ValidarService;
    }();

    ValidarService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ValidarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ValidarService);
    /***/
  },

  /***/
  "./src/app/services/websocket/sockets.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/websocket/sockets.service.ts ***!
    \*******************************************************/

  /*! exports provided: SocketsService */

  /***/
  function srcAppServicesWebsocketSocketsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketsService", function () {
      return SocketsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/Rx */
    "./node_modules/rxjs-compat/_esm2015/Rx.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");

    var SocketsService =
    /*#__PURE__*/
    function () {
      function SocketsService() {
        _classCallCheck(this, SocketsService);

        this.url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
      }

      _createClass(SocketsService, [{
        key: "listen",
        value: function listen(eventemit) {
          var _this32 = this;

          return new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subcriber) {
            _this32.socket.on(eventemit, function (data) {
              subcriber.next(data);
            });
          });
        }
      }, {
        key: "emit",
        value: function emit(eventemit, data) {
          this.socket.emit(eventemit, data);
        }
      }]);

      return SocketsService;
    }();

    SocketsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocketsService);
    /***/
  },

  /***/
  "./src/app/shared/buscar/buscar.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/buscar/buscar.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedBuscarBuscarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=text],\nselect {\n    width: 50%;\n    padding: 14px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    margin-left: 15px;\n}\n\ndiv .container{\n       margin-top: 30px;\n}\n\n.btn {\n    margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2J1c2Nhci9idXNjYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO09BQ08sZ0JBQWdCO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2J1c2Nhci9idXNjYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0sXG5zZWxlY3Qge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiAuY29udGFpbmVye1xuICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/buscar/buscar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/buscar/buscar.component.ts ***!
    \***************************************************/

  /*! exports provided: BuscarComponent */

  /***/
  function srcAppSharedBuscarBuscarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuscarComponent", function () {
      return BuscarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BuscarComponent =
    /*#__PURE__*/
    function () {
      function BuscarComponent() {
        _classCallCheck(this, BuscarComponent);
      }

      _createClass(BuscarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onkeypress",
        value: function onkeypress(event) {
          console.log(event);
        }
      }]);

      return BuscarComponent;
    }();

    BuscarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buscar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buscar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/buscar/buscar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buscar.component.css */
      "./src/app/shared/buscar/buscar.component.css")).default]
    })], BuscarComponent);
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/header/header.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#mainNav {\n    background-color: rgb(102, 119, 119);\n    color: white;\n    padding: 0px;\n    position: relative;\n    top: 1px;\n}\n\n#login {\n    background-color: rgb(102, 119, 119);\n    color: black;\n    text-align: right;\n    padding-right: 10px;\n}\n\nli {\n    color: blanchedalmond;\n}\n\na {\n    color: white\n}\n\n/* \n@import \"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\";\n@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700'); */\n\nbody {\n    font-size: 14px;\n    color: #333;\n    list-style: 26px;\n    font-family: 'Roboto', sans-serif;\n}\n\n/** ======================  base css ==============================**/\n\na:hover {\n    text-decoration: none;\n}\n\n/** ======================  header ==============================**/\n\n.header {\n    background-color: #3c8dbc\n}\n\n.header .dropdown-menu {\n    position: absolute;\n    right: 0;\n    left: auto;\n    border-radius: 0px;\n}\n\n.header .user-image {\n    float: left;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    margin-right: 10px;\n    margin-top: -2px;\n}\n\n.header .navbar-light .navbar-nav .nav-link {\n    color: #fff\n}\n\n.header .navbar-light .navbar-nav .nav-link:hover,\n.header .navbar-light .navbar-nav .nav-link:focus {\n    background: rgba(0, 0, 0, 0.1);\n    color: #f6f6f6;\n}\n\n.header .fa.fa-fw.fa-bars {\n    color: #fff;\n}\n\n.header .navbar-light .navbar-nav .nav-link {\n    color: #fff;\n    padding: 10px 20px;\n    position: relative;\n}\n\n.header li>a>.label {\n    position: absolute;\n    top: 9px;\n    right: 7px;\n    text-align: center;\n    font-size: 9px;\n    padding: 2px 3px;\n    line-height: .9;\n    background-color: #333;\n    border-radius: .25em;\n}\n\n.header li>a:after {\n    display: none;\n}\n\n.header-ul {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    background-color: #ffffff;\n    padding: 7px 10px;\n    border-bottom: 1px solid #f4f4f4;\n    color: #333;\n    font-size: 14px;\n}\n\n.navbar-nav>.notifications-menu>.dropdown-menu,\n.navbar-nav>.messages-menu>.dropdown-menu,\n.navbar-nav>.tasks-menu>.dropdown-menu {\n    width: 280px;\n    padding: 0 0 0 0;\n    margin: 0;\n    top: 100%;\n}\n\n.navbar-nav>.messages-menu>.dropdown-menu li .menu>li>a>div>img {\n    margin: auto 10px auto auto;\n    width: 40px;\n    height: 40px;\n}\n\n.navbar-nav>.messages-menu>.dropdown-menu li .menu>li>a,\n.navbar-nav>.notifications-menu>.dropdown-menu li .menu>li>a {\n    margin: 0;\n    padding: 10px 10px;\n    display: block;\n    white-space: nowrap;\n    border-bottom: 1px solid #f4f4f4;\n}\n\n.navbar-nav>.messages-menu>.dropdown-menu li .menu>li>a>h4 {\n    padding: 0;\n    margin: 0 0 0 45px;\n    color: #333;\n    font-size: 15px;\n    position: relative;\n}\n\n.navbar-nav>.messages-menu>.dropdown-menu li .menu>li>a>p {\n    margin: 0 0 0 45px;\n    font-size: 12px;\n    color: #888888;\n}\n\n.footer-ul a {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    font-size: 12px;\n    background-color: #fff;\n    padding: 7px 10px;\n    border-bottom: 1px solid #eeeeee;\n    color: #333;\n    display: block;\n}\n\n.dropdown-menu-over .menu {\n    max-height: 200px;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    overflow-x: hidden;\n}\n\n.navbar-nav>.notifications-menu>.dropdown-menu li .menu>li>a {\n    color: #444444;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 10px;\n}\n\n.navbar-nav>.notifications-menu>.dropdown-menu li .menu>li>a>.glyphicon,\n.navbar-nav>.notifications-menu>.dropdown-menu li .menu>li>a>.fa,\n.navbar-nav>.notifications-menu>.dropdown-menu li .menu>li>a>.ion {\n    width: 20px;\n}\n\na.navbar-brand {\n    width: 165px;\n}\n\n/********************************************************************************************************/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtBQUNKOztBQUdBOzt3R0FFd0c7O0FBRXhHO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUdBLHFFQUFxRTs7QUFFckU7SUFDSSxxQkFBcUI7QUFDekI7O0FBR0EsbUVBQW1FOztBQUVuRTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7O0lBRUksOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBOzs7SUFHSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBLHlHQUF5RyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbk5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTE5LCAxMTkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMXB4O1xufVxuXG4jbG9naW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDIsIDExOSwgMTE5KTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxubGkge1xuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbn1cblxuYSB7XG4gICAgY29sb3I6IHdoaXRlXG59XG5cblxuLyogXG5AaW1wb3J0IFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzoxMDAsMTAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw3MDAnKTsgKi9cblxuYm9keSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxpc3Qtc3R5bGU6IDI2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5cbi8qKiA9PT09PT09PT09PT09PT09PT09PT09ICBiYXNlIGNzcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qKi9cblxuYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbi8qKiA9PT09PT09PT09PT09PT09PT09PT09ICBoZWFkZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KiovXG5cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzhkYmNcbn1cblxuLmhlYWRlciAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uaGVhZGVyIC51c2VyLWltYWdlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4uaGVhZGVyIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBjb2xvcjogI2ZmZlxufVxuXG4uaGVhZGVyIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyLFxuLmhlYWRlciAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGNvbG9yOiAjZjZmNmY2O1xufVxuXG4uaGVhZGVyIC5mYS5mYS1mdy5mYS1iYXJzIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmhlYWRlciAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlciBsaT5hPi5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOXB4O1xuICAgIHJpZ2h0OiA3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIHBhZGRpbmc6IDJweCAzcHg7XG4gICAgbGluZS1oZWlnaHQ6IC45O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XG59XG5cbi5oZWFkZXIgbGk+YTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlci11bCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjRmNGY0O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5hdmJhci1uYXY+Lm5vdGlmaWNhdGlvbnMtbWVudT4uZHJvcGRvd24tbWVudSxcbi5uYXZiYXItbmF2Pi5tZXNzYWdlcy1tZW51Pi5kcm9wZG93bi1tZW51LFxuLm5hdmJhci1uYXY+LnRhc2tzLW1lbnU+LmRyb3Bkb3duLW1lbnUge1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB0b3A6IDEwMCU7XG59XG5cbi5uYXZiYXItbmF2Pi5tZXNzYWdlcy1tZW51Pi5kcm9wZG93bi1tZW51IGxpIC5tZW51PmxpPmE+ZGl2PmltZyB7XG4gICAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byBhdXRvO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLm5hdmJhci1uYXY+Lm1lc3NhZ2VzLW1lbnU+LmRyb3Bkb3duLW1lbnUgbGkgLm1lbnU+bGk+YSxcbi5uYXZiYXItbmF2Pi5ub3RpZmljYXRpb25zLW1lbnU+LmRyb3Bkb3duLW1lbnUgbGkgLm1lbnU+bGk+YSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjRmNGY0O1xufVxuXG4ubmF2YmFyLW5hdj4ubWVzc2FnZXMtbWVudT4uZHJvcGRvd24tbWVudSBsaSAubWVudT5saT5hPmg0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCAwIDAgNDVweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2YmFyLW5hdj4ubWVzc2FnZXMtbWVudT4uZHJvcGRvd24tbWVudSBsaSAubWVudT5saT5hPnAge1xuICAgIG1hcmdpbjogMCAwIDAgNDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM4ODg4ODg7XG59XG5cbi5mb290ZXItdWwgYSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duLW1lbnUtb3ZlciAubWVudSB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5uYXZiYXItbmF2Pi5ub3RpZmljYXRpb25zLW1lbnU+LmRyb3Bkb3duLW1lbnUgbGkgLm1lbnU+bGk+YSB7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubmF2YmFyLW5hdj4ubm90aWZpY2F0aW9ucy1tZW51Pi5kcm9wZG93bi1tZW51IGxpIC5tZW51PmxpPmE+LmdseXBoaWNvbixcbi5uYXZiYXItbmF2Pi5ub3RpZmljYXRpb25zLW1lbnU+LmRyb3Bkb3duLW1lbnUgbGkgLm1lbnU+bGk+YT4uZmEsXG4ubmF2YmFyLW5hdj4ubm90aWZpY2F0aW9ucy1tZW51Pi5kcm9wZG93bi1tZW51IGxpIC5tZW51PmxpPmE+LmlvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbmEubmF2YmFyLWJyYW5kIHtcbiAgICB3aWR0aDogMTY1cHg7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(usuarioService, router) {
        _classCallCheck(this, HeaderComponent);

        this.usuarioService = usuarioService;
        this.router = router; // this.verifica = localStorage.getItem('ok');
        // if (!this.verifica) {
        //   return;
        // } else {

        this.usuario = usuarioService.usuario;
        this.role = this.usuario[0].role; // }
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "salir",
        value: function salir() {
          this.usuarioService.logout();
        }
      }, {
        key: "onkeypress",
        value: function onkeypress(termino) {
          this.router.navigate(['/mainLista', termino]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/shared/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _buscar_buscar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./buscar/buscar.component */
    "./src/app/shared/buscar/buscar.component.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _subheader_subheader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./subheader/subheader.component */
    "./src/app/shared/subheader/subheader.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]],
      declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _buscar_buscar_component__WEBPACK_IMPORTED_MODULE_10__["BuscarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"], _subheader_subheader_component__WEBPACK_IMPORTED_MODULE_13__["SubheaderComponent"]],
      exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _buscar_buscar_component__WEBPACK_IMPORTED_MODULE_10__["BuscarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"], _subheader_subheader_component__WEBPACK_IMPORTED_MODULE_13__["SubheaderComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.css":
  /*!******************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#slide-submenu {\n    background: rgba(0, 0, 0, 0.45);\n    display: inline-block;\n    padding: 0 8px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.header {\n    background: #777777;\n    color: #fff;\n    padding: 5px 15px;\n    border-radius: 10px 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2xpZGUtc3VibWVudSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzc3Nzc3NztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/service.index */
    "./src/app/services/service.index.ts");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(usuarioService, dataperfilService, pedidoService) {
        _classCallCheck(this, SidebarComponent);

        this.usuarioService = usuarioService;
        this.dataperfilService = dataperfilService;
        this.pedidoService = pedidoService;
        this.pendiente = [];
        this.usuario = this.usuarioService.usuario;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cargarPedidoPendiente();
        }
      }, {
        key: "cargarPedidoPendiente",
        value: function cargarPedidoPendiente() {
          var _this33 = this;

          var termino = this.usuario[0].Iduser;
          this.pedidoService.cargarPedPendientes(termino).subscribe(function (terminados) {
            return _this33.pendiente = terminados;
          });
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_2__["DataPerfilService"]
      }, {
        type: _services_service_index__WEBPACK_IMPORTED_MODULE_2__["PedidosService"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/shared/sidebar/sidebar.component.css")).default]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/shared/subheader/subheader.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/shared/subheader/subheader.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSubheaderSubheaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n    background: #16a085;\n    font-family: 'Roboto', sans-serif;\n    padding-top: 40px;\n}\n\n.dashboard {\n    padding: 0 30px;\n}\n\n.dashboard .jumbotron {\n    margin-top: 0px;\n    background: #8e44ad;\n    color: #fff;\n    border-radius: 5px 5px 0 0;\n}\n\n.dashboard .jumbotron small {\n    color: #fff;\n}\n\n.dashboard-tabs {\n    background-color: #ecf0f1;\n    padding: 0;\n    border: 0 solid #ecf0f1;\n    border-radius: 5px;\n}\n\n.dashboard-tabs:after {\n    content: '';\n    display: block;\n    clear: both;\n}\n\n.dashboard-tabs>li {\n    list-style: none;\n    display: inline-block;\n    width: 20%;\n    float: left;\n    padding: 0;\n}\n\n.dashboard-tabs>li:first-of-type {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n}\n\n.dashboard-tabs>li:last-of-type {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.dashboard-tabs>li>a {\n    vertical-align: middle;\n    text-align: center;\n    background-color: #ecf0f1;\n    width: 100%;\n    text-decoration: none;\n    color: #333;\n    border: 0 solid #8e44ad;\n    border-radius: 0;\n    padding: 10px 0 4px 0;\n}\n\n.dashboard-tabs>li.active>a {\n    color: #8e44ad;\n    border-width: 8px 0;\n    padding: 0;\n    margin: -4px 0;\n}\n\n.dashboard-tabs>li:first-of-type>a {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n}\n\n.dashboard-tabs>li:last-of-type>a {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.dashboard-tabs>li.active>a:before {\n    content: '';\n    position: relative;\n    border-style: solid;\n    border-width: 6px 6px 0;\n    border-color: #8E44AD transparent;\n    display: block;\n    width: 0;\n    z-index: 1;\n    margin-left: -6px;\n    top: 0;\n    left: 50%;\n}\n\n.dashboard-tabs>li>a .glyphicon {\n    color: #1abc9c;\n    padding-top: 16px;\n    font-size: 40px;\n}\n\n.dashboard .tab-content {\n    margin: 40px 0;\n}\n\n.dashboard .jumbotron-sm {\n    padding-top: 24px;\n    padding-bottom: 24px;\n}\n\n.help-pane {\n    background: #ecf0f1;\n    border-radius: 5px;\n}\n\n.profile-pane {\n    width: 100%;\n    display: table;\n    border-spacing: 10px;\n}\n\n.profile-pane>div {\n    display: table-row;\n}\n\n.profile-pane>div>div {\n    width: 50%;\n    display: table-cell;\n}\n\n.profile-pane .header {\n    background: #8e44ad;\n    color: #fff;\n    padding: 5px 15px;\n    border-radius: 10px 10px 0 0;\n}\n\n.profile-pane .content {\n    background: #ecf0f1;\n    border-radius: 0 0 10px 10px;\n    padding: 5px 15px;\n}\n\n.profile-pane h4.col {\n    text-align: center;\n    margin-bottom: 40px;\n}\n\n.profile-pane button.col {\n    text-align: center;\n    padding: 0;\n}\n\n.profile-pane .title {\n    margin-top: 0;\n    padding: 10px;\n    border-bottom: 1px solid #aaa;\n}\n\n#supportedCauses {\n    padding: 0;\n}\n\n.cause-info {\n    margin-bottom: 5px;\n    padding: 5px;\n    background: #fff;\n    border-radius: 5px;\n    display: inline-block;\n}\n\n.cause-info a:hover {\n    cursor: pointer;\n}\n\n.cause-info>div:nth-of-type(3) {\n    width: 16.66666666%;\n    float: left;\n}\n\n.cause-info>div:nth-of-type(3)>* {\n    padding: 0 15px;\n    float: right;\n}\n\n.cause-info>div:nth-of-type(3) a>.glyphicon {\n    -webkit-transition: -webkit-transform .5s;\n    transition: -webkit-transform .5s;\n    transition: transform .5s;\n    transition: transform .5s, -webkit-transform .5s;\n}\n\n.cause-info:not(.expanded)>div:nth-of-type(1) {\n    width: 83.33333333%;\n    float: left;\n    display: inline-block;\n}\n\n.cause-info:not(.expanded)>div:nth-of-type(1)>img {\n    width: 20%;\n    float: left;\n}\n\n.cause-info:not(.expanded)>div:nth-of-type(1)>div {\n    width: 40%;\n    float: left;\n    padding: 0 15px;\n}\n\n.cause-info:not(.expanded)>div:nth-of-type(1)>div:nth-of-type(2):before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n}\n\n.cause-info:not(.expanded)>div:nth-of-type(2) {\n    display: none;\n}\n\n.cause-info.expanded>div:nth-of-type(1) {\n    width: 25%;\n    float: left;\n}\n\n.cause-info.expanded>div:nth-of-type(1)>img {\n    width: 66.66666667%;\n}\n\n.cause-info.expanded>div:nth-of-type(2) {\n    width: 58.33333333%;\n    float: left;\n}\n\n.cause-info.expanded>div:nth-of-type(3) a>.glyphicon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n\n.profile-pane article {\n    background: #fff;\n    border-radius: 5px;\n    padding: 5px;\n    margin-bottom: 40px;\n}\n\n.search-bar {\n    position: relative;\n    display: table;\n    border-collapse: collapse;\n}\n\n.search-bar>input {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px 0 0 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n\n.search-select {\n    border-radius: 4px;\n    border-color: #ccc;\n    height: 34px;\n    font-size: 14px;\n    color: #555;\n    background: #fff;\n    padding-right: 0;\n}\n\n.reciept-infos {\n    border: 1px solid #000;\n    padding: 0;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    border-radius: 5px;\n    background: #fff;\n}\n\n.reciept-infos>div:last-of-type {\n    border-bottom: none;\n}\n\n.reciept-infos>div {\n    display: inline-block;\n    border-bottom: 1px solid #000;\n}\n\n.reciept-infos>div>* {\n    float: left;\n}\n\n.reciept-infos>div>img {\n    width: 18%;\n    margin: 1%;\n}\n\n.reciept-infos>div>div {\n    width: 80%;\n    padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N1YmhlYWRlci9zdWJoZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5Q0FBeUI7SUFBekIsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUF6QixnREFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBRTFCLCtDQUErQztJQUMvQyxzRkFBc0Y7SUFFdEYsOEVBQXNFO0lBQXRFLHNFQUFzRTtBQUMxRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdWJoZWFkZXIvc3ViaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMTZhMDg1O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLmRhc2hib2FyZCB7XG4gICAgcGFkZGluZzogMCAzMHB4O1xufVxuXG4uZGFzaGJvYXJkIC5qdW1ib3Ryb24ge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOGU0NGFkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xufVxuXG4uZGFzaGJvYXJkIC5qdW1ib3Ryb24gc21hbGwge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uZGFzaGJvYXJkLXRhYnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDAgc29saWQgI2VjZjBmMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kYXNoYm9hcmQtdGFiczphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5kYXNoYm9hcmQtdGFicz5saSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uZGFzaGJvYXJkLXRhYnM+bGk6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuLmRhc2hib2FyZC10YWJzPmxpOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4uZGFzaGJvYXJkLXRhYnM+bGk+YSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYm9yZGVyOiAwIHNvbGlkICM4ZTQ0YWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDAgNHB4IDA7XG59XG5cbi5kYXNoYm9hcmQtdGFicz5saS5hY3RpdmU+YSB7XG4gICAgY29sb3I6ICM4ZTQ0YWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA4cHggMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogLTRweCAwO1xufVxuXG4uZGFzaGJvYXJkLXRhYnM+bGk6Zmlyc3Qtb2YtdHlwZT5hIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuXG4uZGFzaGJvYXJkLXRhYnM+bGk6bGFzdC1vZi10eXBlPmEge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmRhc2hib2FyZC10YWJzPmxpLmFjdGl2ZT5hOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA2cHggNnB4IDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjOEU0NEFEIHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDUwJTtcbn1cblxuLmRhc2hib2FyZC10YWJzPmxpPmEgLmdseXBoaWNvbiB7XG4gICAgY29sb3I6ICMxYWJjOWM7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uZGFzaGJvYXJkIC50YWItY29udGVudCB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG59XG5cbi5kYXNoYm9hcmQgLmp1bWJvdHJvbi1zbSB7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG5cbi5oZWxwLXBhbmUge1xuICAgIGJhY2tncm91bmQ6ICNlY2YwZjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvZmlsZS1wYW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBib3JkZXItc3BhY2luZzogMTBweDtcbn1cblxuLnByb2ZpbGUtcGFuZT5kaXYge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cblxuLnByb2ZpbGUtcGFuZT5kaXY+ZGl2IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5wcm9maWxlLXBhbmUgLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzhlNDRhZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xufVxuXG4ucHJvZmlsZS1wYW5lIC5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbi5wcm9maWxlLXBhbmUgaDQuY29sIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnByb2ZpbGUtcGFuZSBidXR0b24uY29sIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnByb2ZpbGUtcGFuZSAudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcbn1cblxuI3N1cHBvcnRlZENhdXNlcyB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmNhdXNlLWluZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2F1c2UtaW5mbyBhOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXVzZS1pbmZvPmRpdjpudGgtb2YtdHlwZSgzKSB7XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2JTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmNhdXNlLWluZm8+ZGl2Om50aC1vZi10eXBlKDMpPioge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jYXVzZS1pbmZvPmRpdjpudGgtb2YtdHlwZSgzKSBhPi5nbHlwaGljb24ge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XG59XG5cbi5jYXVzZS1pbmZvOm5vdCguZXhwYW5kZWQpPmRpdjpudGgtb2YtdHlwZSgxKSB7XG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jYXVzZS1pbmZvOm5vdCguZXhwYW5kZWQpPmRpdjpudGgtb2YtdHlwZSgxKT5pbWcge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jYXVzZS1pbmZvOm5vdCguZXhwYW5kZWQpPmRpdjpudGgtb2YtdHlwZSgxKT5kaXYge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uY2F1c2UtaW5mbzpub3QoLmV4cGFuZGVkKT5kaXY6bnRoLW9mLXR5cGUoMSk+ZGl2Om50aC1vZi10eXBlKDIpOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY2F1c2UtaW5mbzpub3QoLmV4cGFuZGVkKT5kaXY6bnRoLW9mLXR5cGUoMikge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYXVzZS1pbmZvLmV4cGFuZGVkPmRpdjpudGgtb2YtdHlwZSgxKSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmNhdXNlLWluZm8uZXhwYW5kZWQ+ZGl2Om50aC1vZi10eXBlKDEpPmltZyB7XG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcbn1cblxuLmNhdXNlLWluZm8uZXhwYW5kZWQ+ZGl2Om50aC1vZi10eXBlKDIpIHtcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2F1c2UtaW5mby5leHBhbmRlZD5kaXY6bnRoLW9mLXR5cGUoMykgYT4uZ2x5cGhpY29uIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ucHJvZmlsZS1wYW5lIGFydGljbGUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uc2VhcmNoLWJhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5zZWFyY2gtYmFyPmlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgLXdlYmtpdC1ib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG4gICAgLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xufVxuXG4uc2VhcmNoLXNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1jb2xvcjogI2NjYztcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLnJlY2llcHQtaW5mb3Mge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5yZWNpZXB0LWluZm9zPmRpdjpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5yZWNpZXB0LWluZm9zPmRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xufVxuXG4ucmVjaWVwdC1pbmZvcz5kaXY+KiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yZWNpZXB0LWluZm9zPmRpdj5pbWcge1xuICAgIHdpZHRoOiAxOCU7XG4gICAgbWFyZ2luOiAxJTtcbn1cblxuLnJlY2llcHQtaW5mb3M+ZGl2PmRpdiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/subheader/subheader.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/subheader/subheader.component.ts ***!
    \*********************************************************/

  /*! exports provided: SubheaderComponent */

  /***/
  function srcAppSharedSubheaderSubheaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubheaderComponent", function () {
      return SubheaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SubheaderComponent =
    /*#__PURE__*/
    function () {
      function SubheaderComponent() {
        _classCallCheck(this, SubheaderComponent);
      }

      _createClass(SubheaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubheaderComponent;
    }();

    SubheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subheader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subheader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/subheader/subheader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subheader.component.css */
      "./src/app/shared/subheader/subheader.component.css")).default]
    })], SubheaderComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Jose\Desktop\AngularAvd\Tesis\TesisFront\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map