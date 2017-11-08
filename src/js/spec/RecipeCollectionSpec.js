describe("A recipe", function() {
	it('should exist', function(){
		expect(app.Collections.Recipes).toBeDefined();
	});

	it("should contain recipes", function(){
		var recipes = new app.Collections.Recipes([
			FIXTURES.recipes.noRestrictions,
			FIXTURES.recipes.withEggs
		]);

		expect(recipes.length).toEqual(2);
		expect(recipes.first() instanceof app.Models.Recipe).toBeTruthy();
	});

	it('should consolidate recipe names', function(){
		var recipes = new app.Collections.Recipes([
			FIXTURES.recipes.noRestrictions,
			FIXTURES.recipes.noRestrictions,
			FIXTURES.recipes.withEggs
		]);	

		expect(recipes.getRecipeNames()).toEqual(['Marinara', 'Eggs Benedict']);
	});

	it('should return the most recent recipe of a given name.', function(){
		var recipes = new app.Collections.Recipes([
			FIXTURES.recipes.noRestrictions,
			FIXTURES.recipes.noRestrictionsNovFourth
		]);	

		var newestDate = recipes.getNewestRecipeForName("Marinara").get("dateAdded");

		expect(newestDate).toEqual(FIXTURES.recipes.noRestrictionsNovFourth.dateAdded);
	});
});