$(function(){

	function forStaff(){

		$('.ISBN').submit(function(){
			console.log('Search via ISBN.');
				function userLogin() {
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
							isbn: JSON.stringify(["isbn"]),
						 
						},
						// When we have got an response from the server
						// run something
						success: function(data) {
							console.log("4. userLogin success: ", data);
							console.log("now calling processLogin()...");
							userLogin(data);
						}
					});
				}
		});

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

  function userLogin() {
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
        isbn: JSON.stringify(["isbn"]),
       
      },
      // When we have got an response from the server
      // run something
      success: function(data) {
        console.log("4. userLogin success: ", data);
        console.log("now calling processLogin()...");
        userLogin(data);
      }
    });
  }