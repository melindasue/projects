//initialize up list of books
var cookbookList = ['The Bonne Femme Cookbook', 'In a Polish Country House', 'Very Fond of Food', 'Vegetable Literacy', 'Smitten Kitchen Cookbok', 'Sprouted Kitchen Cookbook', 'Jersalem', 'My Berlin Kitchen', 'Ripe: A Cook in the Orchard', 'An Everlasting Meal', 
	'Dinner: A Love Story', 'A Girl and Her Pig', 'The Little Paris Kitchen', "Jeni's Splendid Ice Creams", 'Wild Fermentation', 'Super Natural Every Day', 'Canal House Cooking: The Grocery Store', 'Nigella Kitchen', 'Heart of the Artichoke', 'Essential New York Times Cookbook', 'The Best Casserole Cookbook Ever', 'The Blue Chair Jam Cookbook', 'In the Kitchen w/ a Good Appetite', 'Around My French Table', 'Good to the Grain', 'Tender: A Cook and His Vegetable Patch', 'Ready for Dessert - David Lebovitz', 'Canal House Cooking: Fall & Holiday', 'The Taste of Country Cooking - Edna Lewis'];

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
