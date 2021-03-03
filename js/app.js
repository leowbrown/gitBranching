$(document).ready(function(){

var mydata = JSON.parse(JSON.stringify(mockdata))

function imgSlider(){
  var i;
  for (i=0; i < mydata.length; i ++) {
    $('.slides').append( 
      ' <li><img src="' + mydata[i].img + '/> </li>'
    )
  }
}

imgSlider();

});