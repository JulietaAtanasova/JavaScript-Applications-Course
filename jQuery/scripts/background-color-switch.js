$(document).ready(function() {
    $('#paintButton').click(function() {
        var selectedClass = $('#inputClass').val();
        var selectedColor = $('#inputColor').val();
        $('.' + selectedClass).css('background', selectedColor);
    });
});
