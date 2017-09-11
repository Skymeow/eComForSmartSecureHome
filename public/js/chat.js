
$(function() {
  // live chat
  // var message = $('#message').val();
  var message = document.getElementById('message');
  var output = $('#output');
  var socket = io();

  //emit events
  $('body').on('click', '#chat-send', function(e) {
    e.preventDefault();
    console.log('sdfdafadsf',message.value)
    socket.emit('chat', {
      message: message.value,
      handle: "you",
    });
  });
  // listen for event in frontend
  socket.on('chat', function(data){
    output.html(data.message);
  })

})
