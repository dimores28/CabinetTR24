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

$('#depositModalBtn').on('click', function() {
  let content = `<div class="modal-content p-3">
                  <div>
                    <div class="form-row align-items-center">
                      <div class="col-auto my-1">
                        <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                          <option selected>USDT <small class="text-muted">Tether</small></option>
                          <option value="1">ETH <small class="text-muted">Erhereum</small></option>
                          <option value="2">BTC <small class="text-muted">Bitcoin</small></option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                      <label class="form-check-label" for="exampleRadios1">
                        TRC20
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" disabled>
                      <label class="form-check-label" for="exampleRadios2">
                        Visa/MasterCard
                      </label>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="form-group">
                      <label for="walletAddress">Wallet address</label>
                      <input type="text" class="form-control" id="walletAddress" aria-describedby="walletlHelp">
                      <small id="walletlHelp" class="form-text text-muted">Enter wallet address TRC20</small>
                    </div>
                    <div class="form-group">
                      <label for="amountMoney">Number</label>
                      <input type="number" class="form-control" id="amountMoney" placeholder="Enter 1-1468950">
                    </div>
                  </div>
                  <button type="button" class="btn btn-warning mt-4">Are you problems?</button>
                </div>`;

  $('.modal-form').html(content);
});

$('#openDepositModal').on('click', function() {
  let content = `<div class="modal-content p-3">
                  <div>
                    <div class="form-row align-items-center">
                      <div class="col-auto my-1">
                        <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                          <option selected>USDT <small class="text-muted">Tether</small></option>
                          <option value="1">ETH <small class="text-muted">Erhereum</small></option>
                          <option value="2">BTC <small class="text-muted">Bitcoin</small></option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                      <label class="form-check-label" for="exampleRadios1">
                        TRC20
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" disabled>
                      <label class="form-check-label" for="exampleRadios2">
                        Visa/MasterCard
                      </label>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="form-group">
                      <label for="walletAddress">Wallet address</label>
                      <input type="text" class="form-control" id="walletAddress" aria-describedby="walletlHelp">
                      <small id="walletlHelp" class="form-text text-muted">Enter wallet address TRC20</small>
                    </div>
                    <div class="form-group">
                      <label for="amountMoney">Number</label>
                      <input type="number" class="form-control" id="amountMoney" placeholder="Enter 1-1468950">
                    </div>
                  </div>
                  <button type="button" class="btn btn-warning mt-4">Are you problems?</button>
                </div>`;

  $('.modal-form').html(content);
});

$('#withdrawalModalBtn').on('click', function() {
  let content = 
  `<div class="modal-content p-3">
    <h4>
      Wallet balance: 
      <span class="text-muted">100$</span>
    </h4>
    <div>
      <p class="mt-1">
        Select currency
      </p>
      <div>
        <div class="form-row align-items-center">
          <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>USDT <small class="text-muted">Tether</small></option>
              <option value="1">ETH <small class="text-muted">Erhereum</small></option>
              <option value="2">BTC <small class="text-muted">Bitcoin</small></option>
            </select>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
          <label class="form-check-label" for="exampleRadios1">
            TRC20
          </label>
        </div>
        <div class="form-check mt-2">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" disabled>
          <label class="form-check-label" for="exampleRadios2">
            Visa/MasterCard
          </label>
        </div>
      </div>

      <div class="mt-4">
        <div class="form-group">
          <label for="walletAddress">Wallet address</label>
          <input type="text" class="form-control" id="walletAddress" aria-describedby="walletlHelp">
          <small id="walletlHelp" class="form-text text-muted">Enter wallet address TRC20</small>
        </div>
        <button type="button" class="btn btn-primary">Confirm</button>
      </div>

      <div class="mt-4">
        <div class="form-group">
          <label for="emailCode">Code on mail</label>
          <input type="number" class="form-control" id="emailCode" placeholder="Please enter confirmation code">
        </div>
        <button type="button" class="btn btn-primary">Send</button>
      </div>
    </div>
    <button type="button" class="btn btn-warning mt-4">Are you problems?</button>
  </div>`;

  $('.modal-form').html(content);
});

$('#balanceNavBtn').on('click', function() {
  let content = 
  `<div class="modal-content p-3">
    <h4>
      Wallet balance: 
      <span class="text-muted">100$</span>
    </h4>
  </div>`;

  $('.modal-form').html(content);
});