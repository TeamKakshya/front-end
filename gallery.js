 $modal = $('.modal');
 $modalImg=$('#img01');
 $close=$('.close');
 $caption_show=$('.caption_show');
//caption

$(document).ready(function(){
  $('img').on('click',displayModal);
  function displayModal() {
    console.log(this.id);
    $modalImg.attr("src",(this).src);
    console.log($modal);
    $modal.css("display","block");
    $caption_show.html(this.alt);
  }
  $close.on('click',closeModal);
  function closeModal() {
    $modal.css("display","none");
  }
});
