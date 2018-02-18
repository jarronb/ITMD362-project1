$.noConflict();
(function($) {
  $('#signup-form').on('submit', function(e) {
    e.preventDefault(); //No id value in url
    var name = document.getElementById('name').value;
    $('#signup-form').append("yo");
    console.log(name);

    if (name.length < 4 || name.length > 50) {
      $('#form-item-name').prepend('<span class="warning">Name shoud be between 4 and 50 characters long.</span>');
      $('#name').css('background', '#D24D57')
    }
    var address = document.getElementById('address').value;
    console.log(address);

    if (address.length < 4 || address.length > 50) {
      $('#form-item-address').prepend('<span class="warning">Address shoud be between 4 and 50 characters long.</span>');
      $('#address').css('background', '#D24D57')
    }

    var ssn = document.getElementById('ssn').value;
    console.log(ssn);
    var pattern = /^\d{3}-\d{2}-\d{4}$/;

    if ((pattern.test(ssn)) === true) {
    } else {
      $('#form-item-ssn').prepend('<span class="warning">Social Security Number shoud be in format XXX-XX-XXXX');
      $('#ssn').css('background', '#D24D57');
    }

});
})(jQuery);
