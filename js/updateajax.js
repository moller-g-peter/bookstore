$(function(){
  //a function to verify a user

    $('.updateForm').submit(function() {
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
        console.log("if success: ", data);

        //om ovan fungerar så körs nedan funktion....VIKTIG
        modifyPrice(bookInfo);

      },
      error: function(data) {
        console.log("error: ", data);
      }
    });
       return false;
  });

  //function to register a new password in the database
  function modifyPrice(bookInfo) {
    $.ajax({
      // Use Nodebite's magic library
      url:"libs/sql-ajax-json.php",
      // Expect json in return
      dataType: "json",
      data: {
        // Read SQL questions from this file
        sql: "sql/product-questions.sql",
        // Run the query named all products
        run: "modify price",
        //data to send
        fPrice: JSON.stringify(bookInfo["fPrice"])
      },
      // When we have got an response from the server
      // run userLogin()
      success: function(data) {
        console.log("3. modifyPrice success: ", data);
        console.log("now calling userLogin()...");
        // userLogin(bookInfo);
      }
    });
  }

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