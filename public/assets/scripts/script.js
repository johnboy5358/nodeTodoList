(function ($) {

  // show/hide Delete button on hover.
  $('li').on({
    mouseenter: function() {
      $(this).find(":button").show()
    },
    mouseleave: function() {
      $(this).find(":button").hide()
    }
  })

  // Client side delete logic.
  $('button.delete').on('click', function() {
    $('li').on('click', function(){
      let item = $(this).find("span.id").text();
      const jqxhr = $.ajax({
        type: 'DELETE',
        url: '/todo/delete/' + item
      })
      jqxhr.done(function(data) {
        console.log("Successful delete operation.")
      })
      .fail(function(err) {
        console.log("ERROR: ", err)
      })
      .always(function() {
        // refresh
        location.assign('/todo')
      })  
    });
  });

    
}(jQuery))
