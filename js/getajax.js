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
          console.log("Add bookInfo success bookInfo: ", bookInfo);
           console.log("Add bookInfo success data: ", data);
          // alert("You have succefully stored your data!");
          $('.resultWindow').append('<p class="p1">' + 'You added: ' + '<b>' + data.title + '</b>' + '. By author: ' + '<b>' + data.author + '.</b>' + ' Amount added: ' + '<b>' + data.amount + '.</b>' + '<br>' + 
            'Added to shelf: ' + '<b>' + data.shelf + '.</b>');
          $(':input', '.inputForm').val('');
        },
        error: function(data) {
          console.log("error: ", data);
          alert("Fill in all input fields.");
          }
      });
    return false;
  });
  






});
