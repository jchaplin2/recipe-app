var app = window.app || {};
app.Collections = app.Collections || {};

app.Collections.Recipes = Backbone.Collection.extend({
	model: app.Models.Recipe,
	getRecipeNames: function(){
		return _.uniq(this.pluck('name'));
	}
});