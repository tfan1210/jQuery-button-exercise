$(document).ready(function() {

  // Start: Title button's functionality
	$('#title-input').val();
  $('#title-form .button').on('click', function() {
    var title = $('#title-input').val();
		$('.list-title').text(title);
     $('#title-input').val('');
  });
  // End

  // Start: Item button's functionality
	$('#item-input').val();

  $('#item-form .button').on('click', function() {
    var itemText = $('#item-input').val();
    var $item = $('<li><span>' + itemText + '</span><i 		class="glyphicon glyphicon-remove"></i></li>');
  $('.list').append($item);
    $('#item-input').val('');
  });

  // End
});
