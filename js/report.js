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
          isbn: JSON.stringify(ISBN["isbn"])
        },
        success: function(data) {
          $('.resultWindow').html("");
          var resultHtml = $('.resultWindow');
          
          for (var i = 0; i < data.length; i++) {
            var article = $('<article class="p1"/>');
            article.append('<h3>Title: ' + '<em>' + data[i].title + '</em>' + '</h3>');
            article.append('<h3>Author: ' + '<em>' + data[i].author + '</em>' + '</h3>');
            article.append('<h3> ISBN: ' + '<em>' + data[i].isbn + '</em>' + '</h3>');
            resultHtml.append(article);
            $('.ISBNfound').val(data[i].isbn);
          }
          if (!data.length){
              $('.resultWindow').append("<p class='error'>The isbn number your looking for is not found</p>");
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