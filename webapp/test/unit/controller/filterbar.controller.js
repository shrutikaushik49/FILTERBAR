/*global QUnit*/

sap.ui.define([
	"filterbar/controller/filterbar.controller"
], function (Controller) {
	"use strict";

	QUnit.module("filterbar Controller");

	QUnit.test("I should test the filterbar controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
