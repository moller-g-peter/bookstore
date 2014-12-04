$(function(){

  $('.isbnM').hide();
  $('.isbnMq').hide();
   
  //Denna funktion söker via ajax i databasen på ett isbn nummer och skickar tillbaka valda värden tex price och title..
  $('.searchForm').submit(function() {
    var form = $('form');
    var grabisbn = form.find('#isbn2');
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
          grabisbn.removeClass("redInput");
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
          
            // add data[i].isbn to the hidden form
            $('.isbnM').val(data[i].isbn);
          }
          
          if (bookInfo.isbn.length == 13 && data.length){
            $(".sellISBN").addClass("transform").val(bookInfo.isbn).delay(1000).queue(function(next){
            $(this).removeClass("transform");
              next();
            });
          }
          if (!data.length || bookInfo.isbn.length < 13){
            grabisbn.addClass("redInput");
            $('.resultWindow').append("<p class='error'>The isbn number your looking for is not found or to short<br/><hr/></p>");
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
          var article = $('<article class="p1"/>');
          article.append('<h2>' + 'You sold book with ISBN: ' + sellBook.isbnLog +  ". " + 'Amount of copies sold: ' + sellBook.amountLog + '.</h2>');
          resultHtml.append(article);
        },
        error: function(data) {
          console.log("error: ", data);
          $('.resultWindow').append("<p>The isbn number your looking for is undefined..<br/><hr/></p>");
        }
    });
    return false;
  });

  $('.makeSale').submit(function() {

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
            isbnLog: JSON.stringify(updateBooklist["isbnLog"]),
            amountLog: JSON.stringify(updateBooklist["amountLog"])
          },
          success: function(data) {
            console.log('Success: ', data, updateBooklist);
            var resultHtml = $('.resultWindow');
            var article = $('<article class="p1"/>');
            article.append('<h2>' + 'Book with ISBN: ' + updateBooklist.isbnLog +  ". " + 'Amount of copies with this ISBN removed from booklistDB: ' + updateBooklist.amountLog + '.' + '</h2>');
            resultHtml.append(article);
          },
          error: function(data) {
            console.log('Error: ', data);
          }
      });
      return false;
    });
  
    $('#isbn2').keyup(function(){
    $('.option').show();
      var scan = $('#isbn2').val();
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
            console.log("success");

            $('.option').html("");
            for (var i = 0; i < data.length; i++) {
              var inputField = $('<input class"underme" title="Title: '+ data[i].title + ' &#13 Author: ' + data[i].author + '" type="text" value="'+ data[i].isbn + '" >');
              inputField.data("book", data[i]);
              $('.option').append(inputField);

            }

            $(".option input[type='text']").click(function() {
              var thisBookData = $(this).data("book");
              // var isbn = $(this).val();
              $('#isbn2').val(thisBookData.isbn);
              $('.option').hide();
            });

          },
          error: function(data) {
            console.log("error data :", data, scan);
          }

        });
        return false;
      }
  
  });


});
