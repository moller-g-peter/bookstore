// This file contains functions concerning the customer-page

$(function(){

	$(".passwordMand").hide();

	//This function is used when the customer searches for a book.
	//If-else if-else for different data types isbn/title/author
	$('.customerForm').submit(function() {
		var customerSearch = {};

      $(this).find("input[type='text']").each(function() {
			customerSearch[this.name] = $(this).val();
		});
      console.log("Value of the chosen radiobutton:", $("input[name=choice]:checked").val());
		
		if (($("input[name=choice]:checked").val()) == ("isbn")) {
			$.ajax({
				url:"libs/sql-ajax-json.php",
				dataType: "json",
				data: {
					sql: "sql/product-questions.sql",
					run: "get info for customer by isbn",
					isbn: JSON.stringify(customerSearch["customerInput"])
				},
				success: function(data) {
					$('.resultWindow').html("");
					var resultHtml = $('.resultWindow');
					console.log("Add customerSearch success data: ", data);

					for (var i = 0; i < data.length; i++) {
						var article = $('<article class="p1"/>');
						article.append('<h3>ISBN: ' + '<em>' + data[i].isbn + '</em>' + '</h3>');
						article.append('<h3>Title: ' + '<em>' + data[i].title + '</em>' + '</h3>');
						article.append('<h3>Author: ' + '<em>' + data[i].author + '</em>' + '</h3>');
						//*1.06 gives you the price including taxes
						article.append('<h3>Price: ' + '<em>' + data[i].salesPrice*1.06 + ':-</em>' + '</h3>');
						article.append('<h3> Amount in store: ' + '<em>' + data[i].amount + ' </em>' + 'pcs</h3>');
						article.append('<h3> Shelf: ' + '<em>' + data[i].shelf + '</em>' + '</h3><hr/>');

						resultHtml.append(article);

					}
					if (!data.length){
					$('.resultWindow').append("<p class='error'>We can't find that book in the system!<br/><hr/></p>");
					}
				},
				error: function(data) {
					alert("Error in customer.js-file");
				}
			});
		}

		else if(($("input[name=choice]:checked").val()) == ("title")) {
			$.ajax({
				url:"libs/sql-ajax-json.php",
				dataType: "json",
				data: {
					sql: "sql/product-questions.sql",
					run: "get info for customer by title",
					title: JSON.stringify(customerSearch["customerInput"])
				},
				success: function(data) {
					$('.resultWindow').html("");
					var resultHtml = $('.resultWindow');
					console.log("Add customerSearch success data: ", data);

					//Observera att sales price inte kommer fram rätt än pga. att det inte matas in i kolumnen rätt just nu
					for (var i = 0; i < data.length; i++) {
						var article = $('<article class="p1"/>');
						article.append('<h3>ISBN: ' + '<em>' + data[i].isbn + '</em>' + '</h3>');
						article.append('<h3>Title: ' + '<em>' + data[i].title + '</em>' + '</h3>');
						article.append('<h3>Author: ' + '<em>' + data[i].author + '</em>' + '</h3>');
						//*1.06 gives you the price including taxes
						article.append('<h3>Price: ' + '<em>' + data[i].salesPrice*1.06 + ':-</em>' + '</h3>');
						article.append('<h3> Amount in store: ' + '<em>' + data[i].amount + ' </em>' + 'pcs</h3>');
						article.append('<h3> Shelf: ' + '<em>' + data[i].shelf + '</em>' + '</h3><hr/>');

						resultHtml.append(article);

					}
					if (!data.length){
					$('.resultWindow').append("<p class='error'>We can't find that book in the system!<br/><hr/></p>");
					}
				},
				error: function(data) {
					alert("Error in customer.js-file");
				}
			});
		}

		else if (($("input[name=choice]:checked").val()) == ("author")) {
			$.ajax({
				url:"libs/sql-ajax-json.php",
				dataType: "json",
				data: {
					sql: "sql/product-questions.sql",
					run: "get info for customer by author",
					author: JSON.stringify(customerSearch["customerInput"])
				},
				success: function(data) {
					$('.resultWindow').html("");
					var resultHtml = $('.resultWindow');
					console.log("Add customerSearch success data: ", data);

					//Observera att sales price inte kommer fram rätt än pga. att det inte matas in i kolumnen rätt just nu
					for (var i = 0; i < data.length; i++) {
						var article = $('<article class="p1"/>');
						article.append('<h3>ISBN: ' + '<em>' + data[i].isbn + '</em>' + '</h3>');
						article.append('<h3>Title: ' + '<em>' + data[i].title + '</em>' + '</h3>');
						article.append('<h3>Author: ' + '<em>' + data[i].author + '</em>' + '</h3>');
						//*1.06 gives you the price including taxes
						article.append('<h3>Price: ' + '<em>' + data[i].salesPrice*1.06 + ':-</em>' + '</h3>');
						article.append('<h3> Amount in store: ' + '<em>' + data[i].amount + ' </em>' + 'pcs</h3>');
						article.append('<h3> Shelf: ' + '<em>' + data[i].shelf + '</em>' + '</h3><hr/>');

						resultHtml.append(article);

					}
					if (!data.length){
					$('.resultWindow').append("<p class='error'>We can't find that book in the system!<br/><hr/></p>");
					}
				},
				error: function(data) {
					alert("Error in customer.js-file");
				}
			});
		}
		else {
			console.log("something's wrong");
		}

    return false;
 
	});


		$('.customlink').click(function() {
			$(".passwordMand").show();
			console.log("success I");
			return false;
		});

		$('.passwordMand').submit(function() {
			var userLogin = {};
			console.log("success II");
    $(this).find("input").not("input[type='submit']").each(function() {
      userLogin[this.name] = $(this).val();
      console.log("userLogin: ", userLogin);
    });

    $.ajax({
      url:"libs/sql-ajax-json.php",
        dataType: "json",
        data: {
          sql: "sql/product-questions.sql",
          run: "get user login",
          userID: userLogin["userID"],
          userPWD: userLogin["userPWD"]
        },
        success: function(data) {
        	if(data.length){
        		// console.log("success III: ", data);
        		var currUrl = window.location.href;
        		// console.log("currUrl: ", currUrl);
        		var filename = currUrl.substring(currUrl.lastIndexOf('/')+1);
        		// console.log("filename: ", filename);
        		var newUrl = currUrl.replace(filename, "");
        		// console.log("newUrl: ", newUrl);
        		window.location.href = newUrl;
        		alert("You logged in successfully.");
        	} else {
        		console.log("failure III: ", data);
        		alert("User ID or password is wrong.");
        	}
	        console.log("success IV");
	        $(".loginResult").show();
        },
        error: function(data) {
          // console.log("userLogin: ", userLogin);
          console.log("error: ", data);

        }
    });
    return false;
  });
});


	





