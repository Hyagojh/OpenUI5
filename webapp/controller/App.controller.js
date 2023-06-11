/*
    Dentro da função sap.ui.define, são definidos três módulos como dependências: "sap/ui/core/mvc/Controller", "sap/m/MessageToast" e "sap/ui/model/json/JSONModel". Esses módulos são do SAPUI5 e são necessários para a implementação do código.

    Dentro da função de retorno, é definida uma nova classe de controlador, utilizando o método Controller.extend. A classe de controlador é nomeada como "sap.ui.demo.walkthrough.controller.App", indicando o namespace e o nome do controlador.

    Dentro da classe de controlador, são definidos dois métodos: onInit e onShowHello.

    O método onInit é chamado automaticamente quando o controlador é inicializado. Dentro dele, é criado um objeto oData que contém uma propriedade recipient com o valor { name: "World" }. Em seguida, é criado um modelo JSON oModel usando o objeto oData. Esse modelo é definido na visão (View) associada a esse controlador usando o método setModel, tornando-o disponível para uso na visão.

    O método onShowHello é chamado quando um evento "onShowHello" é disparado. Dentro desse método, é exibida uma mensagem toast com o texto "Hello World" usando o MessageToast.show.

    Resumindo, esse código define um controlador no SAPUI5 chamado "sap.ui.demo.walkthrough.controller.App". No método onInit, um modelo JSON é criado e definido na visão associada ao controlador. No método onShowHello, uma mensagem toast é exibida com o texto "Hello World" quando o evento "onShowHello" é disparado.
*/

sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello: function () {
         // read msg from i18n model
         let oBundle = this.getView().getModel("i18n").getResourceBundle();
         let sRecipient = this.getView().getModel().getProperty("/recipient/name");
         let sMsg = oBundle.getText("helloMsg", [sRecipient]);
         MessageToast.show(sMsg)
      }
   })
})
