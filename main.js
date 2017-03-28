$(function (){

  var $orders = $('#orders');

  $.ajax({
    type: 'GET', //default don't have to set
    url: "http://rest.learncode.academy/api/matt/friends",
    success: function(data) {
      //console.log('success', data);
      $.each(data, function(i, item){
        $orders.append('<li>'+item.age+'</li>');
      });
    }
  });
});
