
$(function(){
	$('.input').addClass("activated");
	$('.sell, .modPrice, .report').addClass("notactivated");
	$('.searchFields').hide();
	$('.inputFields').show();

	$(".topTabs li").click(function(){
		var myClass=$(this).attr("id");
		$(".topTabs").siblings().hide();
		$(".show"+myClass).show();
		$(this).siblings().removeClass("activated");
		$(this).siblings().addClass("notactivated");
		$(this).removeClass("notactivated");
		$(this).addClass("activated");
	});

	/*$('.sell').click(function() {
		$('.searchFields').show();

	});*/
		



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
					fPrice: JSON.stringify(bookInfo["fPrice"]*1.8),
					amount: JSON.stringify(bookInfo["amount"]),
					shelf: JSON.stringify(bookInfo["shelf"])
				},
				success: function(data) {
					console.log("Add bookInfo success: ", data, bookInfo);
					// alert("You have succefully stored your data!");
					$('.resultWindow').append('<p class="p1">' + 'You added: ' + '<b>' + bookInfo.title + '</b>' + '. By author: ' + '<b>' + bookInfo.author + '</b>' + '. Amount added: ' + '<b>' + bookInfo.amount + '</b>' + '</p>' + '<br>');
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