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
					// alert("You have succefully stored your data!");
					$('.resultWindow').append('<p class="p1">' + 'You added: ' + '<b>' + bookInfo.title + '</b>' + '. By author: ' + '<b>' + bookInfo.author + '.</b>' + ' Amount added: ' + '<b>' + bookInfo.amount + '.</b>' + '<br>' + 
												'Added to shelf: ' + '<b>' + bookInfo.shelf + '.</b>');
					$(':input', '.inputForm').val('');
				},
				error: function(data) {
					console.log("error: ", data);
					alert("Fill in all input fields.");
					}
			});
		return false;
	});
});