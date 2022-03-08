$(document).ready(function() {
    $('#button').click(function() {
        $('#contact').attr('action',
                       'mailto:mawuenatord7@gmail.com?subject=' +
                       $('#tb1').val() + '&body=' + $('#tb2').val());
        $('#contact').submit();
    });
});

const banner = document.querySelector('.text-container')
function openUp(event) {
    banner.style.height = '350px'

}
banner.addEventListener('ontouchstart', openUp)