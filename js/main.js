
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
		var isbnTrue = true;
		var form = $('form');
		var isbn1 = form.find('#isbn1').val();
		var grabisbn = form.find('#isbn1');
		isbnTrue = isbn1.length == 13;
			
		if (isbnTrue){

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
					isbn: parseInt(bookInfo["isbn"]),
					title: JSON.stringify(bookInfo["title"]),
					author: JSON.stringify(bookInfo["author"]),
					fPrice: JSON.stringify(bookInfo["fPrice"]),
					amount: JSON.stringify(bookInfo["amount"]),
					shelf: JSON.stringify(bookInfo["shelf"]),
					salesPrice: JSON.stringify(bookInfo["salesPrice"])
				},

				success: function(data) {
					grabisbn.removeClass("redInput");
					// alert("You have succefully stored your data!");
					$('.resultWindow').append('<p class="p1">' + 'You added: ' + '<b>' + bookInfo.title + '.</b><br>' + 'By author: ' + '<b>' + bookInfo.author + '.</b><br>' + ' Amount added: ' + '<b>' + bookInfo.amount + '.</b>' + '<br>' + 
							'Added to shelf: ' + '<b>' + bookInfo.shelf + '.<span class="check"> √ </span><div class="clearfix"></div></b><hr>');
					$('input', '.inputForm').val('');
					autoPriceInsert(bookInfo, data);
				},
				
				error: function(data) {
					alert("Fill in all input fields.");
					}
			});
		}
		else {
			$('.resultWindow').append('<p class="error">The isbn is to short<br/><hr/></p> </p>');
			grabisbn.addClass("redInput");
		}
		return false;
	});



// This is Autu insert salesprice to PRICELIST TABLE
	function autoPriceInsert(bookInfo, data){
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
					},
					error: function(data) {
						alert("Fill in all input fields.");
					}
			});
	}



	$('#isbn1').keyup(function(){
		$('.option').show();
			var scan = $('#isbn1').val();
			if (scan) {
				$.ajax({
				url:"libs/sql-ajax-json.php",
					dataType: "json",
					data: {
						sql: "sql/product-questions.sql",
						run: "match isbn",
						isbn: parseInt(scan)
					},
					success: function(data) {

						

						$('.option').html("");
						for (var i = 0; i < data.length; i++) {
							var inputField = $('<input class"underme" title="Title: '+ data[i].title + ' &#13 Author: ' + data[i].author + '" type="text" value="'+ data[i].isbn + '" >');
							inputField.data("book", data[i]);
							$('.option').append(inputField);

							$('#title1').val(data[i].title);
							$('#author1').val(data[i].author);
							$('#shelf1').val(data[i].shelf);

						}

						$(".option input[type='text']").click(function() {
							console.log("this fields data: ", $(this).data("book"));
							var thisBookData = $(this).data("book");
							// var isbn = $(this).val();
							$('#isbn1').val(thisBookData.isbn);
							$('#title1').val(thisBookData.title);
							$('#author1').val(thisBookData.author);
							$('#shelf1').val(thisBookData.shelf);
							$('.option').hide();

						});

						if (data.length === 0) {
							$('#title1').val('');
							$('#author1').val('');
							$('#shelf1').val('');
						}

					},
					error: function(data) {
						console.log("error data :", data, scan);
					}

				});
				return false;
			}
	
	});

});