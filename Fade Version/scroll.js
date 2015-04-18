$(window).scroll(function()
{

    var bgHeight= 900;
    var pos = $(this).scrollTop();

        /*One*/

        if (pos < bgHeight)
        {
        	$('#first').fadeIn('normal').removeClass('hidden');
        }
        if (pos > bgHeight)
        {
        	$('#first').css('display', 'none');
        }

        /*Two*/


        if (pos > bgHeight && pos < bgHeight*2)
        {
            $('#second').fadeIn('normal').removeClass('hidden');
        }
        if (pos < bgHeight || pos > bgHeight*2 )
        {
            $('#second').css('display', 'none');
        }

        /*Three*/


        if (pos > bgHeight*2  && pos < bgHeight*3 )
        {
            $('#third').fadeIn('normal').removeClass('hidden');
        }
        if (pos < bgHeight*2  || pos > bgHeight*3 )
        {
            $('#third').css('display', 'none');
        }

        /*Four*/

        if (pos > bgHeight*3  && pos < bgHeight*4 )
        {
            $('#fourth').fadeIn('normal').removeClass('hidden');
        }
        if (pos < bgHeight*3  || pos > bgHeight*4 )
        {
            $('#fourth').css('display', 'none');
        }

        /*Five*/

        if (pos > bgHeight*4  && pos < bgHeight*5 )
        {
            $('#fifth').fadeIn('normal').removeClass('hidden');
        }
        if (pos < bgHeight*4  || pos > bgHeight*5 )
        {
            $('#fifth').css('display', 'none');
        }

});