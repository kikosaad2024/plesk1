// Custom JavaScript if necessary.
(function ($) {

  // Insert necessary JavaScript stuff here.
  $(document).ready(function () {

    // ... or here

  });

})(jQuery);
;
/*
 * All Custom JS in here
 * move to behaviours when creating the Drupal Theme
 * https://www.lullabot.com/articles/understanding-javascript-behaviors-in-drupal
 */
(function ($) {
  Drupal.behaviors.unit_custom = {
    attach: function (context) {

      $('.accordion').find('.accordion__tab').click(function(e) {
          e.preventDefault();
          $(this).next().slideToggle('fast');
          $(this).parent().toggleClass('accordion--closed');
      });
        // TODO fix this
        // $(".equalize").equalize();
        // $(".equalized").equalize({
        //     target: ".is-equal",
        //     minWidth: "480px"
        // });
        //$("input[type=checkbox], input[type=radio]").checkbox();
      $("select").dropdown();

      // add custom event tracking on Google Analytics for accordion event on page /help-support
      if ($('body').hasClass('path-help-support')) {
          $('.container').on("click", '.accordion-tab', function() {
              var question = $(this).text();
              ga('send', {
                hitType: 'event',
                eventCategory: 'help-support FAQ',
                eventAction: 'expand FAQ',
                eventLabel: question
              });
          });
      }

      // add custom event tracking on Google Analytics for accordion event on page /help-support
      if ($('body').hasClass('path-help-support')) {
          $('.container').on("click", '.accordion-tab', function() {
              var question = $(this).text();
              ga('send', {
                hitType: 'event',
                eventCategory: 'help-support FAQ',
                eventAction: 'expand FAQ',
                eventLabel: question
              });
          });
      }

      //store alert title and body if user clicks close
      $('a[data-dismiss="alert"]').click(function() {
        $.cookie('alert_timestamp', $('.message__content .alert-timestamp').html());
      });  
      
      //check if this is an alert user has already seen and closed
      if( $.cookie('alert_timestamp') == $('.message__content .alert-timestamp').html() ){
          $('#block-views-alert-block').css('display', 'none');
      }

      $('.menu-13397 a').attr('target', '_blank');
      $('.menu-13396 a').attr('target', '_blank');
      $('.menu-13398 a').attr('target', '_blank');
    }
  };
  
})(jQuery);

;