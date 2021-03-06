$(function(){

  //This function makes sure the ISBN you're looking for exists in the DB
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
          alert("Fill in all input fields.");
        }
      });
    return false;
  });
  
        // This function fetches the data for the report depending on the criteries entered
        $('.getReport').submit(function() {
            
            var year = $('#year').val();
            var month = $("#month").val();
            var dateLog = year + "-" + month;
         
            $('.reportDiv').show();

            var reportInput = {};
            reportInput["isbnLog"] = $(".ISBNfound").val();
            reportInput["dateLog"] = dateLog;

            var runCommand = "data for report";

            if (!reportInput["isbnLog"]) {
              runCommand = "simple data for report";
            }

              $.ajax({
                url:"libs/sql-ajax-json.php",
                dataType: "json",
                data: {
                  sql: "sql/product-questions.sql",
                  run: runCommand,
                  isbnLog: JSON.stringify(reportInput["isbnLog"]),
                  dateLog: reportInput["dateLog"]

              },
              success: function(data) {
                var total = 0;
                for (var i = 0; i < data.length; i++) {
                  var article = $('<article class="p1" id=reportResult/>');
                  article.append('<h3>Isbn: ' + '<em>' + data[i].isbnLog + '</em>' + '</h3>');
                  article.append('<h3>Date: ' + '<em>' + data[i].dateLog + '</em>' + '</h3>');
                  article.append('<h3>Amount: ' + '<em>' + data[i].amountLog + '</em>' + '</h3>');
                  article.append('<h3>Earnings/book: ' + '<em>' + data[i].earnings + '</em>' + '</h3>');
                  article.append('<h3> Earnings from this transaction: ' + '<em>' + data[i].totalAmount + '</em>' + '</h3>');
                  total += data[i].totalAmount;
                  $(".reportDiv").append(article);
                  
                }
               
                $(".reportDiv").append('<h3 id="totalTotal">Total earnings for this isbn in the time period: ' + total + '</h3');
              },
              error: function(data) {
              }
            });
            
            return false;
        });

  //When you click the 'X' - the div hides.
  $('.closeReport').click(function() {
    $("#totalTotal, .p1").remove();
    $('.reportDiv').hide();
    
  });

  //This function handles the auto complete of the isbn-field
  $('#isbn4').keyup(function(){
    $('.option').show();
      var scan = $('#isbn4').val();
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

    
            $('.option').html("");
            for (var i = 0; i < data.length; i++) {
              var inputField = $('<input class"underme" title="Title: '+ data[i].title + ' &#13 Author: ' + data[i].author + '" type="text" value="'+ data[i].isbn + '" >');
              inputField.data("book", data[i]);
              $('.option').append(inputField);
            }

            $(".option input[type='text']").click(function() {
              var thisBookData = $(this).data("book");
              $('#isbn4').val(thisBookData.isbn);
              $('.option').hide();

            });

          },
          error: function(data) {
            alert('error');
          }

        });
        return false;
      }
  
  });
});