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


			$.ajax({
			url:"libs/sql-ajax-json.php",				
				dataType: "json",
				data: {					
					sql: "sql/product-questions.sql",				
					run: "book input",					
					isbn: JSON.stringify(bookInfo["isbn"])					
				},
				// When we have got an response from the server
				// run something
				success: function(data) {
					console.log("4. userLogin success: ", data, bookInfo);
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
