describe("A recipe", function(){
	var noRestrictionsRecipe;

	beforeEach(function(){
		noRestrictionsRecipe = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
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
		expect(recipe.get("dateAdded")).toBeDefined();		
	});

	it("should identify if it has nuts.", function(){
		var withNutsRecipe = new app.Models.Recipe(FIXTURES.recipes.withNuts);

		expect(noRestrictionsRecipe.checkForIngredient("isNut")).toBeFalsy();
		expect(withNutsRecipe.checkForIngredient("isNut")).toBeTruthy();
	});

	it("should identify if it has eggs", function(){
		var withEggsRecipe = new app.Models.Recipe(FIXTURES.recipes.withEggs);

		expect(noRestrictionsRecipe.checkForIngredient("isEggs")).toBeFalsy();
		expect(withEggsRecipe.checkForIngredient("isEggs")).toBeTruthy();
	});

	it("should identify if it is vegetarian", function(){
		var vegetarianRecipe = new app.Models.Recipe(FIXTURES.recipes.vegetarianRecipe);
		var nonVegetarianRecipe = new app.Models.Recipe(FIXTURES.recipes.nonVegetarianRecipe);
		
		expect(vegetarianRecipe.checkForIngredient("isMeat")).toBeFalsy();
		expect(nonVegetarianRecipe.checkForIngredient("isMeat")).toBeTruthy();
	});

	it("should should delegate to checkForIngredient", function(){
		var withEggsRecipe = new app.Models.Recipe(FIXTURES.recipes.withEggs);
		var mySpy = spyOn(withEggsRecipe, 'checkForIngredient').and.callThrough();
		var hasEggs = withEggsRecipe.containsEggs();

		expect(mySpy).toHaveBeenCalled();
		expect(mySpy).toHaveBeenCalledWith('isEggs');
		expect(hasEggs).toBeTruthy();
		expect(mySpy.calls.count()).toBe(1);
	});

});