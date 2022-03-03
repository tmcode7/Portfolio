$(document).ready(function() {
    $('#button').click(function() {
        $('#contact').attr('action',
                       'mailto:mawuenatord7@gmail.com?subject=' +
                       $('#tb1').val() + '&body=' + $('#tb2').val());
        $('#contact').submit();
    });
});