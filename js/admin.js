jQuery(document).ready(function($) {
	$('#wpadminbar').removeClass('nojq').removeClass('nojs').find('li.menupop').not('.sticky').hoverIntent({
	                        over: function(e){
	                                $(this).addClass('hover');
	                                heightCheck($(this));
	                        },
	                        out: function(e){
	                                $(this).removeClass('hover');

	                        interval: 100
	                });

	                $('.sticky', '#wpadminbar').click(function(e){
	                        e.preventDefault();
	                        $(this).toggleClass('hover');
	                });

	                $('#wp-admin-bar-get-shortlink').click(function(e){
	                        e.preventDefault();
	                        $(this).addClass('selected').children('.shortlink-input').blur(function(){

	                        e.preventDefault();
	                        $('html, body').animate({ scrollTop: 0 }, 'fast');
	                });



	        });

	        function heightCheck( menu ) {
	                // Add overflow if sub menu height exceeds window height
	                var wHeight = jQuery(window).height(),
	                        toolbarPlusPadding = 28 + 23,
	                        subWrapper = menu.find('.ab-sub-wrapper'),
	                        subMenuHeight = subWrapper.height() + toolbarPlusPadding;

	                if ( subMenuHeight > wHeight )
	                        subWrapper.css({ 'overflow-y': 'auto', 'overflow-x': 'hidden', 'height': wHeight - toolbarPlusPadding + 'px'});
	        }
	});
});