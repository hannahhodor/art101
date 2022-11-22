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
  
