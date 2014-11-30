$(function(){
   
  //Denna funktion söker via ajax i databasen på ett isbn nummer och skickar tillbaka valda värden tex price och title..
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
          console.log("Add bookInfo success data: ", data);
          // alert("You have succefully stored your data!");
          for (var i = 0; i < data.length; i++) {
            var article = $('<article class="p1"/>');
            article.append('<h3>Title: ' + '<em>' + data[i].title + '</em>' + '</h3>');
            article.append('<h3>Author: ' + '<em>' + data[i].author + '</em>' + '</h3>');
            article.append('<h3>Price: ' + '<em>' + data[i].fPrice + ':-</em>' + '</h3>');
            article.append('<h3> Amount in store: ' + '<em>' + data[i].amount + '</em>' + ' pcs</h3>');
            article.append('<h3> Shelf: ' + '<em>' + data[i].shelf + '</em>' + '</h3><hr/>');
            
            resultHtml.append(article);
            //Moving the ISBN nomber down with animation by adding a class
            $(".sellISBN").addClass("transform").val(data[i].isbn).delay(1000).queue(function(next){
            $(this).removeClass("transform");
            next();
          });
            // add data[i].isbn to the hidden form
            $('.isbnM').val(data[i].isbn);
          }
          
          if (!data.length){
            $('.resultWindow').append("<p class='error'>The isbn number your looking for is not found<br/><hr/></p>");
          }
        },
        error: function(data) {
          alert("Error: Fill in all input fields.");
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
          console.log("Add sellBook success data: ", data, sellBook);
          $('.isbnMq').val(sellBook.amountLog);
          // alert("You have succefully stored your data!");
          for (var i = 0; i < data.length; i++) {
            var article = $('<article class="p1"/>');
            article.append('<h2>' + 'You sold book with ISBN: ' + data.isbn +  ". " + 'This amount of copies: ' + data.amount + '.</h2>');
            resultHtml.append(article);
          }
        },
        error: function(data) {
          console.log("error: ", data);
          $('.resultWindow').append("<p>The isbn number your looking for is undefined..<br/><hr/></p>");
        }
    });
    return false;
  });

  $('.minusBooklist').submit(function() {
    var updateBooklist = {};

    $(this).find("input").not("input[type='submit']").each(function() {
      updateBooklist[this.name] = $(this).val();
    });

    $.ajax({
      url:"libs/sql-ajax-json.php",
        dataType: "json",
        data: {
          sql: "sql/product-questions.sql",
          run: "update booklist",
          isbnU: JSON.stringify(updateBooklist["isbnU"]),
          amountU: JSON.stringify(updateBooklist["amountU"])
        },
        success: function(data) {
          console.log('Success: ', data, updateBooklist);
          /*for(var i = 0; i < data.length; i++){
            console.log('Success: ', data, updateBooklist);
          }*/
        },
        error: function(data) {
          console.log('Error: ', data);
        }
    });
    return false;
  });

});
