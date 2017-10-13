describe("A recipe", function(){
	var noRestrictionsRecipe;
	var withNutsRecipe;
	var withEggsRecipe;

	beforeEach(function(){
		noRestrictionsRecipe = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
		withNutsRecipe = new app.Models.Recipe(FIXTURES.recipes.withNuts);
		withEggsRecipe = new app.Models.Recipe(FIXTURES.recipes.withEggs);
	});

	it("should exist", function(){
		expect(app.Models.Recipe).toBeDefined();
	});

	it("should have certain defaults.", function(){
		var recipe = new app.Models.Recipe();

		expect(recipe.get("name")).toEqual("Unnamed");
		expect(recipe.get("rating")).toEqual(0);
		expect(recipe.get("ingredients").length).toEqual(0);
		expect(recipe.get("instructions").length).toEqual(0);
	});

	it("should identify if it has nuts.", function(){
		expect(noRestrictionsRecipe.checkForIngredient("isNut")).toBeFalsy();
		expect(withNutsRecipe.checkForIngredient("isNut")).toBeTruthy();
	});

	it("should identify if it has eggs", function(){
		expect(noRestrictionsRecipe.checkForIngredient("isEgg")).toBeFalsy();
		expect(withEggsRecipe.checkForIngredient("isEgg")).toBeTruthy();
	});
});