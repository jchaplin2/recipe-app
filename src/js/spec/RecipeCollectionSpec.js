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

	it('should have a remote data source.', function(){
		var recipes = new app.Collections.Recipes();

		expect(recipes.url).toBeDefined();
	});

	it('should instantiate data from the back end.', function() {
		var recipes = new app.Collections.Recipes();

		spyOn(recipes, "fetch").and.callFake(function(options) {
			var responseArray = [
				JSON.stringify([FIXTURES.recipes.noRestrictions])
			];

			recipes.model.set(responseArray[0]);
			expect(recipes.model.length).toBeGreaterThan(0);
		});
	});
});