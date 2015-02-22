//initialize up list of books
var cookbookList = ['The Bonne Femme Cookbook', 'In a Polish Country House', 'Very Fond of Food', 'Vegetable Literacy', 'Smitten Kitchen Cookbok', 'Sprouted Kitchen Cookbook', 'Jersalem', 'My Berlin Kitchen', 'Ripe: A Cook in the Orchard', 'An Everlasting Meal', 
	'Dinner: A Love Story', 'A Girl and Her Pig', 'The Little Paris Kitchen', "Jeni's Splendid Ice Creams", 'Wild Fermentation', 'Super Natural Every Day', 'Canal House Cooking: The Grocery Store', 'Nigella Kitchen', 'Heart of the Artichoke', 
	'Essential New York Times Cookbook', 'The Best Casserole Cookbook Ever', 'The Blue Chair Jam Cookbook', 'In the Kitchen w/ a Good Appetite', 'Around My French Table', 'Good to the Grain', 'Tender: A Cook and His Vegetable Patch', 'Ready for Dessert - David Lebovitz', 
	'Canal House Cooking: Fall & Holiday', 'The Taste of Country Cooking - Edna Lewis', 'The Martha Stewart Living Cookbook', 'Ratio - Michel Ruhlman', 'The Sandwich Book - Nancy Silverton', 'Nigella Christmas', 'Real Fast Puddings - Nigel Slater', 
	'Nourishing Traditions - Sally Fallon', 'Chez Panisse Desserts - Lindsey Shere', 'The Sweet Life in Paris - David Lebovitz', 'A Homemade Life - Molly Wizenberg', 'Breakfast, Lunch, Tea: The Many Meals of Rose Bakery', "Nigel Slater's Real Food", 'A Platter of Figs - David Tanis',
	'Joy of Cooking', 'French Provincial Cooking - Elizabeth David', 'Chez Panisse Fruit - Alice Waters', 'The Kitchen Diaries: A Year in the Kitchen with Nigel Slater', 'Home Cooking: A Writer in the Kitchen - Laurie Colwin', "The New Best Recipe - Cook's Illustrated", 'The Perfect Scoop - David Lebovitz',
	'All About Braising - Molly Stevens', 'Nigella Bites', 'Essentials of Classic Italian Cooking - Marcella Hazan', 'Mastering the Art of French Cooking - Julia Child', 'Real Fast Food - Nigel Slater', 'Veganomicon', 'Cooking for Mr. Latte - Amanda Hesser', 'Chez Panisse Vegetables - Alice Waters',
	'The Cook and the Gardener - Amanda Hesser', 'Vegetarian Cooking for Everyone - Deborah Madison', 'The Fannie Farmer Cookbook - Marion Cunningham', 'The Breakfast Book - Marion Cunningham', 'The Great Scandinavian Baking Book - Beatrice Ojankangas', 'Simple French Food - Richard Olney', 'New England Soup Factory Cookbook',
	'A Book of Mediterranean Food - Elizabeth David', 'Barefoot Contessa Family Style - Ina Garten', 'How To Be A Domestic Goddess - Nigella Lawson', 'Feast - Nigella Lawson', 'The New York Times Dessert Cookbook', 'The Cake Bible - Rose Levy Bernhaum', 'Cookwise - Shirley Corriher', 'The Art of Simple Food - Alice Waters', 
	'Barefoot Contessa Parties - Ina Garten', 'Chez Panisse Cafe Cookbook - Alice Waters', 'How to Eat - Nigella Lawson', 'Baking - Dorie Greenspan', 'Barefoot in Paris - Ina Garten', 'The Zuni Cafe Cookbook - Judy Rodgers', 'The Silver Palate Cookbook', 'The Best 30 Minute Recipes - Cooks Illusrrated',
	'The Silver Palate Cookbook', 'Nigella Express', 'The Blue Bottle Craft of Coffee', 'Blood, Bones & Butter - Gabrielle Hamilton', 'Petit Appetit: Food for Kids', 'The Nordic Diet - Trine Hahnemann', "Cook's Illusrrated How-To-Cook Library", 'The Swiss Cookbook' , 'Eat - Nigel Slater' ];

var kidsbookList = ['Where The Wild Things Are', "Hans Christian Andersen's Fairy Tales"]

//function to select random book
function getBookResult () {
	
	if ($('#select-book option:selected').val().toString() == "Cookbooks") {
		var book = cookbookList[Math.floor(Math.random()*cookbookList.length)];
	}
	else {
		var book = kidsbookList[Math.floor(Math.random()*kidsbookList.length)];
	}

	//update HTML with result
	var bookResult = document.getElementById('book-result');
	bookResult.innerHTML = book;
}

$('#book-button').click(getBookResult);
