$(function(){

  $('.CheckISBNforReport').submit(function() {
    var form = $('form');
    var grabisbn = form.find('#isbn4');
    var ISBN = {};

    $(this).find("input").not("input[type='submit']").each(function() {
      ISBN[this.name] = $(this).val();
    });
    $.ajax({
      url:"libs/sql-ajax-json.php",
        dataType: "json",
        data: {
          sql: "sql/product-questions.sql",
          run: "get books by isbn",
          isbn: JSON.stringify(ISBN["isbn"])
        },
        success: function(data) {
          grabisbn.removeClass("redInput");
          $('.resultWindow').html("");
          var resultHtml = $('.resultWindow');
          
          for (var i = 0; i < data.length; i++) {
            var article = $('<article class="p1"/>');
            article.append('<h3>Title: ' + '<em>' + data[i].title + '</em>' + '</h3>');
            article.append('<h3>Author: ' + '<em>' + data[i].author + '</em>' + '</h3>');
            article.append('<h3> ISBN: ' + '<em>' + data[i].isbn + '</em>' + '</h3>');
            resultHtml.append(article);
          }

           if (ISBN.isbn.length == 13 && data.length){
            $(".ISBNfound").addClass("transform").val(ISBN.isbn).delay(1000).queue(function(next){
            $(this).removeClass("transform");
              next();
            });
          }
          if (!data.length || ISBN.isbn.length < 13){
            grabisbn.addClass("redInput");
            $('.resultWindow').append("<p class='error'>The isbn number your looking for is not found or to short<br/><hr/></p>");
          }

        },
        error: function(data) {
          console.log("error: ", data);
          alert("Fill in all input fields.");
        }
      });
    return false;
  });
  
  $('.getReport').submit(function() {
      
      var year = $('#year').val();
      var month = $("#month").val();
      var dateLog = year + "-" + month;
      console.log("year:", year, "month:", month, "date:", dateLog);
      $('.reportDiv').show();

      var reportInput = {};
      $(this).find("input").not("input[type='submit']").each(function() {
        reportInput[this.name] = $(this).val();
      });

      $.ajax({
        url:"libs/sql-ajax-json.php",
        dataType: "json",
        data: {
          sql: "sql/product-questions.sql",
          run: "data for report",
          isbnLog: JSON.stringify(reportInput["isbnLog"]),
          dateLog: JSON.stringify(reportInput["dateLog"])

        },
        success: function(data) {
          console.log("Success for raport-ajax!", data);
          for (var i = 0; i < data.length; i++) {
            var article = $('<article class="p1"/>');
            article.append('<h3>Title: ' + '<em>' + data[i].isbnLog + '</em>' + '</h3>');
            article.append('<h3>Author: ' + '<em>' + data[i].dateLog + '</em>' + '</h3>');
            $(".reportDiv").append(article);
          }
        },
        error: function(data) {
          console.log("Error with the report:", data);
        }
      });
      
      return false;
  });

  //When you click the 'X' - the div hides.
  $('.closeReport').click(function() {
    $('.reportDiv').hide();
  });

});