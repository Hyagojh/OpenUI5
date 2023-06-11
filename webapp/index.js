/* A lógica da aplicação será desenvolvida aqui. O SAPUI5 usa o sistema MVC, onde há uma view e um controlador. */

/*
    O método 'sap.ui.define' é usado para definir um ou mais módulos SAPUI5, especificando suas dependências e também recebe como parâmetro uma função que será executada quando o módulo for carregado. 

    O módulo XMLView é responsável por criar e carregar visualizações XML. O método XMLView.create, cria uma nova instância de view XML indicando o nome do xml a ser carregado.

    A função create retorna uma Promise e quando a promise é resolvida, o callback da função then é executado e a visualização é renderizada dentro de um elemento com o ID 'content'
*/
sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});
