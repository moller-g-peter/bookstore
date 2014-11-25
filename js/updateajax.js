$(function(){
	
	$('.updateForm').submit(function() {
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
					fPrice: JSON.stringify(bookInfo["fPrice"])
				},
				success: function(data) {
					console.log("Add bookInfo success: ", data, bookInfo);
					$('.resultWindow').append('The price on ISBN: ' + '<b>' + bookinfo.isbn + '</b>' + ', Title: ' + '<b>' + bookInfo.title + '</b>' + ', has been updated!');
					$(':input', '.inputForm').val('');
				},
				error: function(data) {
					console.log("error: ", data);
					alert("Cannot find specific ISBN number. Please try again.");
					}
			});
		return false;
	});
});