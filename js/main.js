
$(function(){

	$('.searchFields').hide();
	$('.search').hide();

	$('#inputTab').click(function(){
		$('.searchFields').show();
		$('.search').hide();
	});
	$('#searchTab').click(function(){
		$('.search').show();
		$('.searchFields').hide();
	});

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
					isbn: JSON.stringify(bookInfo["isbn"]),
					title: JSON.stringify(bookInfo["title"]),
					author: JSON.stringify(bookInfo["author"]),
					fPrice: JSON.stringify(bookInfo["fPrice"]),
					amount: JSON.stringify(bookInfo["amount"]),
					shelf: JSON.stringify(bookInfo["shelf"])
				},
				success: function(data) {
					console.log("Add bookInfo success: ", data, bookInfo);
					alert("You have succefully stored your data!");
				},
				error: function(data) {
					console.log("error: ", data);
					alert("Fill in all input fields.");
					}
			});
		return false;
	});
});