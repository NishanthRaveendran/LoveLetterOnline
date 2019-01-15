$('#playbutton').click(function() {
  $('#welcome').slideUp(1600);
  $('#waiting').slideDown(1600);
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



$(document).ready(function() {


  $(function() {
    var socket = io();
    $('form').submit(function() {
      socket.emit('chat message', $('#play').val());
      $('#play').val('');
      return false;
    });
    socket.on('chat message', function(msg) {
      $('#playerlist').append($('<li>').text(msg));
    });
  });
});
