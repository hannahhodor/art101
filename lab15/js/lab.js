// Author: Emily Baer and Hannah Hodor
// Date: 11/21/2022
// Email: egbaer@ucsc.edu hhodor@ucsc.edu
// Public Domain

$('#activate').click(function(){
  $.ajax({
    url: 'https://api.chucknorris.io/jokes/random',
      data: {},
        type: 'GET',
          dataType: 'json',
            success: function (data) {
              $('#output').html(data.value);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error oopsy", textStatus, errorThrown);
            }
  });
});

$('#push').click(function(){
  $.ajax({
    url: 'https://www.chickensmoothie.com/',
      data: {},
        type: 'GET',
          dataType: 'html',
            success: function (data) {
              console.log(data);
              $('#anotheroutput').load("https://www.chickensmoothie.com/ div#welcome")
              $('#anotheroutput').load("https://www.chickensmoothie.com/ li.reqjs");
              $('#anotheroutput').load("https://www.chickensmoothie.com/ div#newslist")
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error oopsy", textStatus, errorThrown);
            }
  });
});
