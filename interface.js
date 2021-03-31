

/*
var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', 'index.html', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("myElement").innerHTML = xhr.responseText;
    }
}
xhr.send();*/
/*
$(document).ready(function () {

    $(document).on('.onchange', '.refresher', function () {
        $.ajax({
            url: 'index.html',
            method: "GET",
            dataType: 'json',
            success: function (response) {
                $('#rect').html(response);
            }
        });
    });

});
*/
