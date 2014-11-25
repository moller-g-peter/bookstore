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

  $('.makeSale').submit(function() {
    var sellBook = {};

    $(this).find("input").not("input[type='submit']").each(function() {
      sellBook[this.name] = $(this).val();
    });

    $.ajax({
      url:"libs/sql-ajax-json.php",
        dataType: "json",
        data: {
          sql: "sql/product-questions.sql",
          run: "update books",
          isbnLog: JSON.stringify(sellBook["isbnLog"]),
          amountLog: JSON.stringify(sellBook["amountLog"])
        },
        success: function(data) {
          $('.resultWindow').html("");
          var resultHtml = $('.resultWindow');
          console.log("Add sellBook success: ", sellBook.data);
          console.log("Add sellBook success data: ", data);
          // alert("You have succefully stored your data!");
          for (var i = 0; i < data.length; i++) {
            var article = $('<article class="p1"/>');
            article.append('<h2>' + 'You sold book with ISBN: ' + data[i].isbn +  ". " + 'This amount of copies: ' + data[i].amount + '.</h2>');
            resultHtml.append(article);
          }
        },
        error: function(data) {
          console.log("error: ", data);
        }
      });
    return false;
  });
});



