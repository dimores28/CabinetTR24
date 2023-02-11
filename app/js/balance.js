$('.balance__card').on('click', function() {
   $('.balance__card').removeClass('active');
   $(this).addClass('active');
   paymentMethodActivation($(this).children().text());
});

$('.balance__card a').on('click', function(e) {
   e.preventDefault();
   $('.balance__card').removeClass('active');
   $(this).parent().addClass('active');
   paymentMethodActivation($(this).text());
});

function paymentMethodActivation(method) {
   $('#methodPayment').text(`payment instructions ${method}`);
   $('#amountMoney').attr("placeholder", `0 ${method.trim()}`);
}