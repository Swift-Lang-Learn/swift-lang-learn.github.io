var Plugin = {
  relative: function relative(element) {
    var attrData = $.extend({}, $(element).data());
    var time = moment(attrData.time).isValid() ? attrData.time : moment();
    $(element).html(moment(time).fromNow());
  },

  totop: function totop(element) {
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $(element).fadeIn();
      } else {
        $(element).fadeOut();
      }
    });
    $(element).on('click', function (event) {
      event.preventDefault();
      $("body,html").animate({
        scrollTop: 0
      }, 600);
    });
  },
};

$(document).on("jekyll.plugin", function () {
  $("[data-momentum]").each(function () {
    window.moment !== undefined && $(this).is(":visible") && Plugin[$(this).attr("data-momentum")](this);
  });
  $("[data-plugin]").each(function () {
    $(this).is(":visible") && Plugin[$(this).attr("data-plugin")](this);
  });
}).trigger("jekyll.plugin");


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// Tooltip initialize
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
