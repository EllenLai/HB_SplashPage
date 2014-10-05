$(document).ready(function(){
  var s = skrollr.init({
    render: function(data) {
      $('#info').text(data.curTop);
    }
  });
});