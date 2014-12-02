$(function(){
   
  //Denna funktion söker via ajax i databasen på ett isbn nummer och skickar tillbaka valda värden tex price och title..
  $('.updateForm').submit(function() {
    var form = $('form');
    var grabisbn = form.find('#isbn3');
    var bookInfo = {};

    $(this).find("input").not("input[type='submit']").each(function() {
      bookInfo[this.name] = $(this).val();
    });

      $.ajax({
      url:"libs/sql-ajax-json.php",
        dataType: "json",
        data: {
          sql: "sql/product-questions.sql",
          run: "get books by isbn II",
          isbn: bookInfo["isbn"]
        },
        success: function(data) {
          $('.resultWindow').html("");
          var resultHtml = $('.resultWindow');
          console.log("Add bookInfo success data: ", data);
          // alert("You have succefully stored your data!");

          for (var i = 0; i < data.length; i++) {
            var article = $('<article class="p1"/>');
            article.append('<h3>ISBN: ' + '<em>' + data[i].isbn + '</em>' + '</h3>');
            article.append('<h3>Title: ' + '<em>' + data[i].title + '</em>' + '</h3>');
            article.append('<h3>Current price: ' + '<em>' + data[i].salesPrice + ':-</em>' + '</h3>');
            
            resultHtml.append(article);
            //Moving the ISBN nomber down with animation by adding a class
              $(".transportISBN").val(data[i].isbn);
          }
          if (!data.length || bookInfo.isbn.length < 13){
            grabisbn.addClass("redInput");
            $('.resultWindow').append("<p class='error'>The isbn number your looking for is not found or to short<br/><hr/></p>");
          }
          if (bookInfo.isbn.length == 13 && data.length){
            
            // 

            // $(".sellISBN").addClass("transform").val(bookInfo.isbn).delay(1000).queue(function(next){
            // $(this).removeClass("transform");
            //   next();
            // });
          }
        },
        error: function(data) {
          alert("Error: Fill in all input fields.");
        }
      });
    return false;
  });

  $('.updateFormModify').submit(function() {
    var modifyBook = {};
    $(this).find("input").not("input[type='submit']").each(function() {
      modifyBook[this.name] = $(this).val();
    });
    $.ajax({
      url:"libs/sql-ajax-json.php",
        dataType: "json",
        data: {
          sql: "sql/product-questions.sql",
          run: "modify price",
          title: JSON.stringify(modifyBook["title"]),
          salesPrice: JSON.stringify(modifyBook["salesPrice"]),
          isbn: JSON.stringify(modifyBook["isbn"])
        },
        success: function(data) {

          $('.resultWindow').html("");
          var resultHtml = $('.resultWindow');
          newPriceResult(modifyBook, data);
          $('input').val('');
        },
        error: function(data) {
          console.log("modifyBook: ", modifyBook);
          console.log("error: ", data);
          $('.resultWindow').append("<p>The isbn number your looking for is undefined..<br/><hr/></p>");
        }
    });
    return false;
  });

        function newPriceResult(modifyBook){
          var resultNewPrice = modifyBook;

          // console.log({
          //         sql: "sql/product-questions.sql",
          //         run: "modified price result",
          //         isbn: resultNewPrice["isbn"],
          //         title: resultNewPrice["title"],
          //         salesPrice: resultNewPrice["salesPrice"]
          //       });

            $.ajax({
              url:"libs/sql-ajax-json.php",
                dataType: "json",
                data: {
                  sql: "sql/product-questions.sql",
                  run: "modified price result",
                  isbn: resultNewPrice["isbn"],
                  title: resultNewPrice["title"],
                  salesPrice: resultNewPrice["salesPrice"]
                },
                success: function(modifyBook, data) {
                  console.log("modifyBook: ", modifyBook);
                  $('.resultWindow').append('<p class="p1">' + 'Price has been successfully updated: ' + '<br>' +
                    'ISBN number: ' + '<b>' + modifyBook.isbn + '</b><br>' +
                    'Title: ' + '<b>' + modifyBook.title + '</b><br>' +
                    // 'Previous price: ' + '<b>' + modifyBook.title + '.</b><br>' +
                    'Current price: ' + '<b>' + modifyBook.salesPrice + '</b><br>'
                   );
                  
                },
                error: function(data) {
                  alert("Fill in all input fields.");
                  console.log('Data: ', data);
                }
            });
        }

});
