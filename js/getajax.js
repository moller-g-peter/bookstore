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
          $('.resultWindow').append('You searched for: ' + [data] + data.author);

        },
        error: function(data) {
          console.log("error: ", data);
          alert("Fill in all input fields.");
        }
      });
    return false;
  });
});
