describe("A recipe view", function(){
	it("should be defined.", function(){
		expect(app.Views.Recipe).toBeDefined();
		expect($('#recipe-tmpl')).toBeInDOM();
	});
	it('should have a template', function(){
		var recipeModel = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);

		var recipeView = new app.Views.Recipe({
			model: recipeModel
		});

		expect(recipeView.template).toBeDefined();
	});	
});