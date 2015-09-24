$('#add').on('click',function(){
  var row = '<div class="eight wide column ui input"><input class="xval" type="number" placeholder="Empty"></div>'
  + '<div class="eight wide column ui input"><input class="yval" type="number" placeholder="Empty"></div>';
  $('#content').append(row);
});

$('body').ready(function(){
  $('#error_msg').hide();
  console.log("ready");
});

$('#clear').on('click',function(){
  $('.xval,.yval').val("");
});

var validateForm = function(){
  var ret = true;
  $('.xval,.yval').each(function(){
    if(!$.isNumeric($(this).val())){
      $(this).parent().addClass('error');
      ret = false;
    }
    else{
      $(this).parent().removeClass('error');
    }
  });
  if(ret){
    $('#error_msg').hide();
  }
  else{
    $('#error_msg').show();
  }
  return ret;
}

$('#send').on('click',function(){
  console.log(validateForm());
});
