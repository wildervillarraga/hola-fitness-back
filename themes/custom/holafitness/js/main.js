
(function($, Drupal) {

  'use strict';
  /**
   * Filter enhancements.
   */
  Drupal.behaviors.holaFitness = {
    attach: function(context) {
        $('.animate-box').waypoint( function() {
            $(this).addClass('fadeInUp animated-fast');
        } , { offset: '85%' } );
    }
  };

})(jQuery, Drupal);
