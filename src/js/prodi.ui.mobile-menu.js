

/**
 * @return the init function to start the module.
 */
prodi.ui.mobileMenu = (function () {

    var options = {
        button: '.hamburger',
        links: '.header__nav__icon',
        menu: '.main__header__nav, .main__header__social'
    };
    
    function activateButtons(){
        $(options.button+ ', ' + options.links).on('click', function(){
            $(options.menu).toggleClass('show');
        });
    }

    function init() {
        activateButtons();
    }

    return {
        init: init
    };

})();
