describe("A recipe", function(){
	var noRestrictionsRecipe;
	var withNutsRecipe;

	beforeEach(function(){
		noRestrictionsRecipe = new app.Models.Recipe({
			name: "marinara",
			ingredients: [{
				baseIngredient: "pomodoros",
				quantity: '8',
				modifier: "crushed"
			},{
				baseIngredient: "onion",
				quantity: '1',
				modifier: "chopped"
			},{
				baseIngredient: "garlic",
				quantity: '2 cloves',
				modifier: "minced"
			}]
		});

		withNutsRecipe = new app.Models.Recipe({
			name: "Broccoli and Butter Sauce",
			ingredients: [{
				baseIngredient: "broccoli",
				quantity: '1 head',
				modifier: ""
			},{
				baseIngredient: "butter",
				quantity: '3 tablespoons',
				modifier: "melted"
			},{
				baseIngredient: "lemon",
				quantity: '1/4',
				modifier: "juiced"
			},{
				baseIngredient: "almonds",
				isNut: true,
				quantity: '1/2 cup',
				modifier: "juiced"
			}]
		});
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
		expect(noRestrictionsRecipe.containsNuts()).toBeFalsy();
		expect(withNutsRecipe.containsNuts()).toBeTruthy();
	});

});