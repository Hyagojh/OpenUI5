/*
    Dentro da função sap.ui.define, é definido um módulo com uma única dependência: "sap/ui/core/mvc/Controller". Essa dependência se refere ao módulo "sap.ui.core.mvc.Controller" do SAPUI5, que é responsável por definir controladores para as visualizações do SAPUI5.

    Dentro da função de retorno, é definida uma nova classe de controlador, utilizando o método Controller.extend. A classe de controlador é nomeada como "sap.ui.demo.walkthrough.App", indicando o namespace e o nome do controlador.

    Dentro da classe de controlador, é definido um método chamado onShowHello, que será invocado quando um evento "onShowHello" for disparado. Dentro desse método, é exibido um alerta com a mensagem "Hello there!".

    Por fim, a classe de controlador é retornada como resultado da função sap.ui.define.

    Em resumo, essa função define um controlador no SAPUI5 chamado "sap.ui.demo.walkthrough.App" que possui um método onShowHello para exibir um alerta com a mensagem "Hello there!" quando o evento "onShowHello" for disparado.
*/

sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onShowHello: function(){
            alert("Hello there!")
        }
    });
 });