var FIXTURES = window.FIXTURES || {};

FIXTURES.recipes = {
		noRestrictions: {
			name: "Marinara",
			dateAdded: 1509494400000,
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
		noRestrictionsNovFourth: {
			name: "Marinara",
			dateAdded: 1509753600000,
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
		},
		vegetarianRecipe: {
			name: "Cheese Tortellini with Spinach and brown butter",
			ingredients: [{
				baseIngredient: "cheese tortellini",
				quantity: '1 pound',
				modifier: "frozen"
			},{
				baseIngredient: "butter",
				quantity: '4 tablespoons',
				modifier: "unsalted"
			},{
				baseIngredient: "flat leaf spinach",
				quantity: '6 cups',
				modifier: ""
			},{
				baseIngredient: "medium beefsteak tomato",
				quantity: '1',
				modifier: "coarsely chopped"
			},{
				baseIngredient: "lemon zest",
				quantity: '1 tsp',
				modifier: "finely grated"
			},{
				baseIngredient: "lemon juice",
				quantity: '1 tbsp',
				modifier: ""
			},{
				baseIngredient: "salt",
				quantity: '1/2 tsp',
				modifier: ""
			},{
				baseIngredient: "pepper",
				quantity: '1/4 tsp',
				modifier: ""
		}]
	},
	nonVegetarianRecipe: {
		name: "Meatballs",
		ingredients: [{
			baseIngredient: "ground beef",
			quantity: '1 pound',
			isMeat: true,
			modifier: ""
		},{
			baseIngredient: "ground veal",
			quantity: '1/2 pound',
			isMeat: true,
			modifier: ""
		},{
			baseIngredient: "ground pork",
			quantity: '1/2 pound',
			isMeat: true,
			modifier: ""
		},{
			baseIngredient: "cloves of garlic",
			quantity: '2',
			modifier: "minced"
		},{
			baseIngredient: "eggs",
			quantity: '2',
			modifier: ""
		},{
			baseIngredient: "romano cheese",
			quantity: '1 cup',
			modifier: "grated "
		},{
			baseIngredient: "flat leaf parsely",
			quantity: '1 1/2 tablespoons',
			modifier: "chopped"
		},{
			baseIngredient: "butter",
			quantity: '3 tablespoons',
			modifier: "melted"
		},{
			baseIngredient: "salt",
			quantity: '1/2 tsp',
			modifier: ""
		},{
			baseIngredient: "ground black pepper",
			quantity: '1/2 tsp',
			modifier: ""
		},{
			baseIngredient: "italian bread",
			quantity: '2 cups',
			modifier: "stale, crumbled"
		},{
			baseIngredient: "olive oil",
			quantity: '1 cup',
			modifier: ""
		},{
			baseIngredient: "water",
			quantity: '1.5 cups',
			modifier: "warm"
		}]	
	}
};