$.noConflict();
(function($) {
  $('#signup-form').on('submit', function(e) {
    var user = {
      email: $('#email').val(),
      email_pattern: /^[^\s@]+@[^\s@]+$/,
      name: $('#name').val(),
      valid: {
        email: false,
        name: false
      }
    };

    e.preventDefault(); // No id value in url

    console.log("start");

    if (((user.email_pattern.test(user.email)) === true) || (user.email.length === 0)) {
      user.valid.email = true;
      console.log("email:" + user.valid.email);
    } else {
      $('#form-item-email').prepend('<span class="warning">Please enter a valid email!');
      $('#email').css('background', '#D24D57');
      $('#name').css('color', 'white');
    }
    console.log("Email");

    if ((user.name.length <= 0) || (user.name.length === null)) {
      console.log("here");
      if ($('span.warning').length <= 0) {
        $('#form-item-name').prepend('<span class="warning">Please enter your name!');
        $('#name').css('background', '#D24D57');
        $('#name').css('color', 'white');
      }
    } else {
      console.log("Else name");
      user.valid.name = true;
      console.log("name:" + user.valid.name);
    }

    if ((user.valid.email === true) && (user.valid.name === true)) {
      $('#form-content').replaceWith('<p>Thank you ' + user.name + ', for signing up.' +
      'Please confirm your email ' + user.email + '.</p>');
    }
  });
})(jQuery);
