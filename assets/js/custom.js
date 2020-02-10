$(document).on('ready', function () {
    // initialization of header
    $.HSCore.components.HSHeader.init($('#js-header'));
    $.HSCore.helpers.HSHamburgers.init('.hamburger');

    // initialization of MegaMenu
    $('.js-mega-menu').HSMegaMenu();

    // initialization of HSDropdown component
    $.HSCore.components.HSDropdown.init($('[data-dropdown-target]'), {
      afterOpen: function () {
        $(this).find('input[type="search"]').focus();
      }
    });



    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');

    

    // initialization of carousel
    $.HSCore.components.HSCarousel.init('[class*="js-carousel"]');

  });

  $(window).on('load', function () {
    // initialization of sticky blocks
    setTimeout(function() { // important in this case
      $.HSCore.components.HSStickyBlock.init('.js-sticky-block');
    }, 1);
  });