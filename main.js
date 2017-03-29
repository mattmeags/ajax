$(function (){

  var $orders = $('#friends'),
    $name = $('#name'),
    $occupation = $('#occupation'),
    $age = $('#age');

    function addOrder (order){
        $orders.append('<li>Name: '+order.name+ ' Occupation: '+order.occupation+' Age: '+order.age+' id: '+order.id+'</li>');
    }
  $.ajax({
    type: 'GET', //default don't have to set
    url: "http://rest.learncode.academy/api/matt/friends",
    success: function(data) {
      //console.log('success', data);
      $.each(data, function(i, item){
        addOrder(item);
      });
  },
  error: function(){
      $orders.append('<li>Unable to load data at the moment please try again</li>');
  }
  });

  $('#add-friend').on('click', function(){
      var friend = {
          name: $name.val(),
          occupation: $occupation.val(),
          age: $age.val()
      };

      $.ajax({
         type: 'POST',
         url: "http://rest.learncode.academy/api/matt/friends",
         data: friend,
         success: function(newFriend) {
             addOrder(newFriend);
         },
         error: function() {
             $orders.append('<li>Unable to load data at the moment please try again</li>');
         }
      });
  });
});
