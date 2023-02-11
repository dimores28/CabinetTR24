$('.aside .nav-link').on('click', function(e) {
   e.preventDefault();

   $('.aside .nav-link').removeClass('active');
   $(this).addClass('active');
   
   let fileName = $(this).attr("href");

   if(fileName === "#") return;

   $.get(fileName, function(data) {
      $('#main').html(data);
  }, "text");

});

$('#burgerBtn').on('click', function () {
   $(this).toggleClass('opened');
   $('.aside').toggleClass('naw-show');
});

$('#myTab li:last-child button').tab('show');


$('#myTab button').on('click', function (event) {
   event.preventDefault()
   $(this).tab('show')
 })