$(document).ready(function() {
    $('#button').click(function() {
        $('#contact').attr('action',
                       'mailto:mawuenatord7@gmail.com?subject=' +
                       $('#tb1').val() + '&body=' + $('#tb2').val());
        $('#contact').submit();
    });
});

const banner = document.querySelectorAll('.text-container').addEventListener('click', openUp)
function openUp() {
    banner.style.height = '350px'

}