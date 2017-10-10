// Obtenir l'accès à mon module que je suis en train de créer
var monModule = angular.module('Todo',[]);

// Je définis un controleur sur mon module
monModule.controller('MainController',function(){
	// pour avoir ce à quoi je m'attend
	var self = this;
	// je crée un tableau avec mes 3 valeurs
	self.todoList=[
		{value:'Se laver les dents', checked:false},
		{value:'Faire le flan de courgettes', checked:false},
		{value:'réviser Angular', checked:false}
	];

	self.addElt = function(newElt){
		self.elt='';
		self.todoList.push({value: newElt , checked:false});
	};
});