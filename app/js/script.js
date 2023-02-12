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

 $('.toast').toast({autohide: false});

 $('#liveToastBtn').on('click', function() {
   $('#liveToast').toast('show');
 })

 $('#closeToastBtn').on('click', function() {
   $('#liveToast').toast('hide');
 }) 

 var clipboard = new ClipboardJS('#copyToastBtn');

 $('#copyToastBtn').tooltip({delay: { "show": 500, "hide": 100 }});

 $('#copyToastBtn').on('click', function() {
   clipboard.on('success', function(e) {
     
      $('#copyToastBtn').attr("title", "Copied!")
      .tooltip("_fixTitle")
      .tooltip("show")
      .attr("title", "Copy to clipboard")
      .tooltip("_fixTitle");

      e.clearSelection();
   });
 });

 $('.refs').on('click', function() {
   $('#liveToast').toast('show');
 });



// clipboard.on('success', function(e) {
//     console.info('Action:', e.action);
//     console.info('Text:', e.text);
//     console.info('Trigger:', e.trigger);

//     e.clearSelection();
// });

// clipboard.on('error', function(e) {
//     console.error('Action:', e.action);
//     console.error('Trigger:', e.trigger);
// });