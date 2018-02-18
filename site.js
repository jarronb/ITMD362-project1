$.noConflict();
(function($) {
  $('#signup-form').on('submit', function(e) {
    e.preventDefault(); //No id value in url

    console.log("start");
    var email = {
    val: $('#email').val(),
    pattern: /^[^\s@]+@[^\s@]+$/
    }
    var valid = {
      email: false,
      name: false
    }

    if (((email.pattern.test(email.val)) === true) || (email.val.length === 0)) {
      valid.email = true;
      console.log("email:" + valid.email);
    } else {
      $('#form-item-email').prepend('<span class="warning">Please enter a valid email!');
      $('#email').css('background', '#D24D57');
    }
      console.log("Email");

    if (($('#name').val().length <= 0) || ($('#name').val().length === null)) {
      console.log("here");
      if ($('span.warning').length <= 0) {
      $('#form-item-name').prepend('<span class="warning">Please enter your name!');
      $('#name').css('background', '#D24D57');
      }
    } else {
      console.log("Else name");
      valid.name = true;
      console.log("name:" + valid.name);
      }

    if ((valid.email === true) && (valid.name === true)) {
      $('#header.para').replaceWith('<p>Thank you ' + $('#name').val() + ', for signing up.' +
      'Please confirm your email ' + email.val + '.</p>');
      window.location.href = "congratulations/index.html";
    }
});
})(jQuery);
