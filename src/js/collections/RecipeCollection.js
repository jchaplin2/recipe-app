var app = window.app || {};
app.Collections = app.Collections || {};

app.Collections.Recipes = Backbone.Collection.extend({
	model: app.Models.Recipe,
	comparator: "dateAdded",
	getRecipeNames: function(){
		return _.uniq(this.pluck('name'));
	},
	url: '/recipes',
	getNewestRecipeForName: function(recipeName) {
		var variations = this.where({
			name: recipeName
		});

		return _.last(variations);
	}
});