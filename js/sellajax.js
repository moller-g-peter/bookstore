$(function(){

  $('.searchForm').submit(function() {
    var bookInfo = {};

    $(this).find("input").not("input[type='submit']").each(function() {
      bookInfo[this.name] = $(this).val();
    });

      $.ajax({
      url:"libs/sql-ajax-json.php",
        dataType: "json",
        data: {
          sql: "sql/product-questions.sql",
          run: "get books by isbn",
          isbn: JSON.stringify(bookInfo["isbn"])
        },
        success: function(data) {
          $('.resultWindow').html("");
          var resultHtml = $('.resultWindow');
          console.log("Add bookInfo success bookInfo: ", bookInfo.data);
          console.log("Add bookInfo success data: ", data);
          // alert("You have succefully stored your data!");
          for (var i = 0; i < data.length; i++) {
            var article = $('<article class="p1"/>');
            article.append('<h2>' + data[i].title +  " " + data[i].author + '</h2>');
            article.append('<h2>' + data[i].title +  " " + data[i].author + '</h2>');
            article.append('<h2>' + data[i].title +  " " + data[i].author + '</h2>');
            article.append('<h2>' + data[i].title +  " " + data[i].author + '</h2>');
            resultHtml.append(article);
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



