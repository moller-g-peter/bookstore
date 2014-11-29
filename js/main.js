
$(function(){
	
	//adding and removing classes with style properties to/from the tabs and hide/show the right elements
	$('.input').addClass("activated");
	$('.sell, .modPrice, .report').addClass("notactivated");
	$('.searchFields').hide();
	$('.inputFields').show();

	//Clickfunction that fixes the right look + visibility of the tabs
	$(".topTabs li").click(function(){
		var myClass=$(this).attr("id");
		$(".topTabs").siblings().hide();
		$(".show"+myClass).show();
		$(this).siblings().removeClass("activated");
		$(this).siblings().addClass("notactivated");
		$(this).removeClass("notactivated");
		$(this).addClass("activated");
	});

	$('.inputForm').submit(function() {
		var bookInfo = {};

		$(this).find("input").not("input[type='submit']").each(function() {
			bookInfo[this.name] = $(this).val();
		});

			bookInfo.salesPrice = bookInfo.fPrice*1.8;

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
					shelf: JSON.stringify(bookInfo["shelf"]),
					salesPrice: JSON.stringify(bookInfo["salesPrice"])
				},
				success: function(data) {
					console.log("Add bookInfo success: ", data, bookInfo);
					$('.resultWindow').append('<p class="p1">' + 'You added: ' + '<b>' + bookInfo.title + '</b>' + '. By author: ' + '<b>' + bookInfo.author + '.</b>' + ' Amount added: ' + '<b>' + bookInfo.amount + '.</b>' + '<br>' + 
							'Added to shelf: ' + '<b>' + bookInfo.shelf + '.</b>');
					$('input', '.inputForm').val('');

					autoPriceInsert(bookInfo, data);
				},
				error: function(data) {
					console.log("error: ", data);
					alert("Fill in all input fields.");
					}
			});
		return false;
	});

		function autoPriceInsert(bookInfo, data){
			console.log("bookInfo: ", bookInfo);
			var insertAutoPrice = bookInfo;

				$.ajax({
					url:"libs/sql-ajax-json.php",
						dataType: "json",
						data: {
							sql: "sql/product-questions.sql",
							run: "price input",
							isbn: JSON.stringify(insertAutoPrice["isbn"]),
							salesPrice: JSON.stringify(insertAutoPrice["salesPrice"])
						},
						success: function(bookInfo, data) {
							console.log("success data 2 :",data);
							console.log("success bookInfo 2 :",bookInfo);
						},
						error: function(data) {
							console.log("error: ", data);
							alert("Fill in all input fields.");
						}
				});
		}
});