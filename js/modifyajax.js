$(function(){
   
   //This function searches via ajax in the database on an isbn number and sends back values like price and title
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
        },
        error: function(data) {
          alert("Error: Fill in all input fields.");
        }
      });
    return false;
  });

  //This function handles the info entered in the "enter new price"-form 
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
          title: modifyBook["title"],
          salesPrice: modifyBook["salesPrice"],
          isbn: modifyBook["isbn"]
        },
        success: function(data) {

          $('.resultWindow').html("");
          var resultHtml = $('.resultWindow');
          console.log(modifyBook);

          newPriceResult(modifyBook);
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

        // If success in changing the price, this function prints out the result 
        function newPriceResult(modifyBook){
          var resultNewPrice = modifyBook;
          console.log(resultNewPrice);

            $.ajax({
              url:"libs/sql-ajax-json.php",
                dataType: "json",
                data: {
                  sql: "sql/product-questions.sql",
                  run: "modified price result",
                  isbn: resultNewPrice["isbn"]
                },
                success: function(modifyBook) {
                  console.log("modifyBook: ", modifyBook);
                  $('.resultWindow').append('<p class="p1">' + 'Price has been successfully updated: ' + '<br>' +
                    'ISBN number: ' + '<b>' + modifyBook[0].isbn + '</b><br>' +
                    'Title: ' + '<b>' + modifyBook[0].title + '</b><br>' +
                    // 'Previous price: ' + '<b>' + modifyBook.title + '.</b><br>' +
                    'Current price: ' + '<b>' + modifyBook[0].salesPrice + '</b><br>'
                   );
                  
                },
                error: function(data) {
                  console.log("newPriceResult error: ", data.responseText);
                  /*alert("Fill in all input fields.");*/
                }
            });
        }

    //Handles the auto complete of the isbn-field
    $('#isbn3').keyup(function(){
    $('.option').show();
      var scan = $('#isbn3').val();
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

            console.log(data);
            $('.option').html("");
            for (var i = 0; i < data.length; i++) {
              var inputField = $('<input class"underme" title="Title: '+ data[i].title + ' &#13 Author: ' + data[i].author + '" type="text" value="'+ data[i].isbn + '" >');
              inputField.data("book", data[i]);
              $('.option').append(inputField);
            }

            $(".option input[type='text']").click(function() {
              var thisBookData = $(this).data("book");
              $('#isbn3').val(thisBookData.isbn);
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
