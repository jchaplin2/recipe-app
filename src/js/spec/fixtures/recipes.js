var FIXTURES = window.FIXTURES || {};

FIXTURES.recipes = {
		noRestrictions: {
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
		},
		withNuts: {
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
		},
		withEggs: {
			name: "Eggs Benedict",
			ingredients: [{
				baseIngredient: "Eggs",
				isEgg: true,
				quantity: "4",
				modifier: ""
			},{
				baseIngredient: "English Muffin",
				quantity: "2",
				modifier: ""
			},{
				baseIngredient: "Canadian Bacon",
				quantity: '4 slices',
				modifier: "juliened"
			},{
				baseIngredient: "Hollandaise Sauce",
				quantity: '1/2 cup',
				modifier: ""
			}]
		}
};