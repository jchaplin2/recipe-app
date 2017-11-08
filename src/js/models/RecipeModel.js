var app = window.app || {};
app.Models = app.Models || {};

app.Models.Recipe = Backbone.Model.extend({
	defaults: function(){
		return {
			name: 'Unnamed',
			rating: 0,
			ingredients: [],
			instructions: [],
			dateAdded: Date.now()
		};
	},

	checkForIngredient: function(ingredientType) {
		var ingredientsArr = this.get("ingredients");
		var ingredientFlag = false;

		for(var i = 0, len = ingredientsArr.length; i <len; i++) {
			var ingredient = ingredientsArr[i];
			if(ingredient[ingredientType])
				ingredientFlag = true;
		}

		return ingredientFlag;
	}
});