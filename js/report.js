$(function(){

  $('.CheckISBNforReport').submit(function() {
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
          isbn: JSON.stringify(ISBN["cat"])
        },
        success: function(data) {
          $('.resultWindow').html("");
          var resultHtml = $('.resultWindow');
          
          for (var i = 0; i < data.length; i++) {
            var article = $('<article class="p1"/>');
            article.append('<h2>Title: ' + '<em>' + data[i].title + '</em>' + '</h2>');
            article.append('<h2>Author: ' + '<em>' + data[i].author + '</em>' + '</h2>');
            article.append('<h2> ISBN: ' + '<em>' + data[i].isbn + '</em>' + '</h2>');
            resultHtml.append(article);
            $('.ISBNfound').val(data[i].isbn);
          }
        },
        error: function(data) {
          console.log("error: ", data);
          alert("Fill in all input fields.");
        }
      });
    return false;
  });
});

/*$("input:text").val("Glenn Quagmire");*/