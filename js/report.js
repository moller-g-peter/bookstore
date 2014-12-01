$(function(){

  $('.CheckISBNforReport').submit(function() {
    var form = $('form');
    var grabisbn = form.find('#isbn4');
    var ISBN = {};

    $(this).find("input").not("input[type='submit']").each(function() {
      ISBN[this.name] = $(this).val();
    });
    $.ajax({
      url:"libs/sql-ajax-json.php",
        dataType: "json",
        data: {
          sql: "sql/product-questions.sql",
          run: "get books by isbn",
          isbn: JSON.stringify(ISBN["isbn"])
        },
        success: function(data) {
          grabisbn.removeClass("redInput");
          $('.resultWindow').html("");
          var resultHtml = $('.resultWindow');
          
          for (var i = 0; i < data.length; i++) {
            var article = $('<article class="p1"/>');
            article.append('<h3>Title: ' + '<em>' + data[i].title + '</em>' + '</h3>');
            article.append('<h3>Author: ' + '<em>' + data[i].author + '</em>' + '</h3>');
            article.append('<h3> ISBN: ' + '<em>' + data[i].isbn + '</em>' + '</h3>');
            resultHtml.append(article);
          }

           if (ISBN.isbn.length == 13 && data.length){
            $(".ISBNfound").addClass("transform").val(ISBN.isbn).delay(1000).queue(function(next){
            $(this).removeClass("transform");
              next();
            });
          }
          if (!data.length || ISBN.isbn.length < 13){
            grabisbn.addClass("redInput");
            $('.resultWindow').append("<p class='error'>The isbn number your looking for is not found or to short<br/><hr/></p>");
          }

        },
        error: function(data) {
          console.log("error: ", data);
          alert("Fill in all input fields.");
        }
      });
    return false;
  });
  
  $('.getReport').submit(function() {
      var year = $('#year').val();
      var month = $("#month").val();
      console.log(year, month);
      $('.reportDiv').show();

            $.ajax({
        url:"libs/sql-ajax-json.php",
        dataType: "json",
        data: {
          sql: "sql/product-questions.sql",
          run: "get books by isbn",
          isbn: JSON.stringify(customerSearch["customerInput"])
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
      

      return false;
  });

  //When you click the 'X' - the div hides.
  $('.closeReport').click(function() {
    $('.reportDiv').hide();
  });

});
