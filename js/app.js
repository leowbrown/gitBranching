$(window).load(function() {
    $('.flexslider').flexslider();
  });


var myImgs = JSON.parse(JSON.stringify(img))

function imgSlider(){
  var i;
  for (i=0; i < myImgs.length; i ++) {
    $('.slides').append( 
      ' <li><img src="' + myImgs[i].img + '/> </li>'
    )
  }
}