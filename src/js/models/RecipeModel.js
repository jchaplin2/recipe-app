var app = window.app || {};
app.Models = app.Models || {};

app.Models.Recipe = Backbone.Model.extend({
	defaults: function(){
		return {
			name: 'Unnamed',
			rating: 0,
			ingredients: [],
			instructions: []
		};
	},
	containsNuts: function() {
		var ingredientsArr = this.get("ingredients");
		var nutsFlag = false;

		for(var i = 0, len = ingredientsArr.length; i <len; i++) {
			var ingredient = ingredientsArr[i];
			if(ingredient.isNut)
				nutsFlag = true;
		}

		return nutsFlag;
	}
});