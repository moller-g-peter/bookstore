$(function(){
function getbooks(){
    $.ajax({
      // Use Nodebite's magic library
      url:"libs/sql-ajax-json.php",
      // Expect json in return
      dataType: "json",
      data: {
        // Read SQL questions from this file
        sql: "sql/product-questions.sql",
        // Run the query named all products
        run: "get books by isbn"
      },
      // When we have got an response from the server
      // run listAllProducts
      success:function(data);
    });
  }






});
