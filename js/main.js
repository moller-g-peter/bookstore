$(function(){



	//$('.boom').click(function(){
	//	userLogin();
	//});

	$('.staffForm').submit(function() {
		var bookInfo = {};

		$(this).find("input").not("input[type='submit']").each(function() {
			bookInfo[this.name] = $(this).val();
    	});

    	console.log("bookInfo: ", bookInfo);

		//function userLogin(data) {

			//var isbn = $('.isbn').val();
			//console.log("isbn: ",isbn);

			$.ajax({
			// Use Nodebite's magic library
			url:"libs/sql-ajax-json.php",
				// Expect json in return
				dataType: "json",
				data: {
					// Read SQL questions from this file
					sql: "sql/product-questions.sql",
					// Run the query named all products
					run: "book input",
					//data to send
					isbn: JSON.stringify(bookInfo["isbn"])
					
				},
				// When we have got an response from the server
				// run something
				success: function(data) {
					console.log("4. userLogin success: ", data, bookInfo);
				}
			});
		//}
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




		
			// $('.boom').click(function(){
			//	function isbnLogin() {
			//		console.log("qwerty");
			//		$.ajax({
			//				// Use Nodebite's magic library
			//				url:"libs/sql-ajax-json.php",
			//				// Expect json in return
			//				dataType: "json",
			//				data: {
			//				// Read SQL questions from this file
			//				sql: "sql/product-questions.sql",
			//				// Run the query named all products
			//				run: "book input",
			//				//data to send
			//				isbn: JSON.stringify(isbnLogin["isbn"])
								
			//					},
			//					// When we have got an response from the server
			//					// run something
			//					success: function(data) {
			//						console.log("4. userLogin success: ", data);
			//						console.log("now calling processLogin()...");
							
			//					}
			//			});

			//		}
			// });
	

});
