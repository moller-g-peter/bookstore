
$(function(){
	$('.grey').addClass("activate");
	$('.lightGrey').addClass("notactivate");
	$('.searchFields').hide();
	$('.inputFields').show();

	$('.grey').click(function(){
		$('.lightGrey').removeClass("activate");
		$('.grey').removeClass("notactivate");
		$('.lightGrey').addClass("notactivate");
		$('.grey').addClass("activate");
		$('.inputFields').show();
		$('.searchFields').hide();

	});

	$('.lightGrey').click(function(){
		$('.grey').removeClass("activate");
		$('.lightGrey').removeClass("notactivate");
		$('.grey').addClass("notactivate");
		$('.lightGrey').addClass("activate");
		$('.searchFields').show();
		$('.inputFields').hide();
	});

	$('.inputForm').submit(function() {
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
					// alert("You have succefully stored your data!");
					$('.resultWindow').append('You added: ' + '<b>' + bookInfo.title + '</b>' + '. By author: ' + '<b>' + bookInfo.author + '</b>' + '. Amount added: ' + '<b>' + bookInfo.amount + '</b>' + '<br>');
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