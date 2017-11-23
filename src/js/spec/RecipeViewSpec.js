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

	describe("A rendered view. ", function() {
		var recipeView, recipeModel;

		beforeEach(function(){
			recipeModel = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
			recipeView = new app.Views.Recipe({
				model: recipeModel
			});
			recipeView.render();
		});

		it("should have a title.", function() {
			expect(recipeView.$(".recipe-name")).toHaveText(recipeModel.get('name'));
		});

		it("should have a rating", function() {
			expect(recipeView.$(".rating")).toHaveText(recipeModel.get('rating'));
		});

		it("should list ingredients", function() {
			var ingredientEl = recipeView.$(".ingredient").first();
			var ingredient = recipeModel.get("ingredients")[0];

			var expectedString = ingredient.quantity + ' ' +
				ingredient.baseIngredient + ', ' + ingredient.modifier;

			expect(ingredientEl).toHaveText(expectedString);
		});

		it("should list instructions", function(){
			var instructionEl = recipeView.$(".instruction").first();
			var instruction = recipeModel.get("instructions")[0];

			expect(instructionEl).toHaveText(instruction);
		});

	});

});