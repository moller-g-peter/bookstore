$(function(){

	$('.staffForm').submit(function() {
		var bookInfo = {};

		$(this).find("input").not("input[type='submit']").each(function() {
			bookInfo[this.name] = $(this).val();
		});

			console.log("bookInfo: ", bookInfo);

			$.ajax({
			// Use Nodebite's magic library
			url:"libs/sql-ajax-json.php",
				// Expect json in return
				dataType: "json",
				data: {
					// Read SQL questions from this file
					sql: "sql/product-questions.sql",
					// Run the query named book input
					run: "book input",
					//data to send
				data: {					
					sql: "sql/product-questions.sql",				
					run: "book input",					
					isbn: JSON.stringify(bookInfo["isbn"]),
					fPrice: JSON.stringify(bookInfo["fPrice"]),
					amount: JSON.stringify(bookInfo["amount"]),
					shelf: JSON.stringify(bookInfo["shelf"])
				},
				success: function(data) {
					console.log("Add bookInfo success: ", data, bookInfo);
				},
				error: function(data) {
        			console.log("error: ", data);
      			}
			});
		return false;
	});


	function forStaff(){

		$('.price').click(function(){
			console.log('Add Price.');
		});

		$('.quantity').click(function(){
			console.log('Add Quantity.');
		});

		$('.daytime').click(function(){
			console.log('Add date of arrival.');
		});

		$('.bookshelf').click(function(){
			console.log('Add place in shelf.');
		});

		$('.manualPrice').click(function(){
			console.log('Change the price manualy.');
		});
	}

	forStaff();
});
