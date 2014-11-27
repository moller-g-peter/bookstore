$(function(){

	$('.customerForm').submit(function() {
		var customerSearch = {};

      $(this).find("input[type='text']").each(function() {
			customerSearch[this.name] = $(this).val();
		});
      console.log("Value of the chosen radiobutton:", $("input[name=choice]:checked").val());

      $.ajax({
      url:"libs/sql-ajax-json.php",
        dataType: "json",
        data: {
          sql: "sql/product-questions.sql",
          run: "get books by isbn",
          isbn: JSON.stringify(customerSearch["isbn"])
        },
        success: function(data) {
          $('.resultWindow').html("");
          var resultHtml = $('.resultWindow');
          console.log("Add customerSearch success data: ", data);
          

          //Observera att sales price inte kommer fram rätt än pga. att det inte matas in i kolumnen rätt just nu
          for (var i = 0; i < data.length; i++) {
            var article = $('<article class="p1"/>');
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
    return false;
 
	});
});


	





