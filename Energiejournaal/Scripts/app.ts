/// <reference path="typings/jquery/jquery.d.ts" />
var temperatures = [7, 1.7, 1.3, 1.3, 1.2, 0.9, 0.6, 0.6, 0.6, 1.2, 3.3, 6.6, 8.7, 10.5];
var name = 'Power Belgium Spot EUR/MWh';
$('#Groups').change(function () {
    // получаем выбранный id
    var id = $(this).val();
    $.ajax({
        type: 'GET',
        url: 'http://localhost:4051/Home/GetCharts' +'?id=' + id,
        success: function (data) {
            // заменяем содержимое присланным частичным представлением
            $('#Chart').replaceWith(data);
            $('#Chart').change(function () {
                var id = $(this).val();
                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:4051/Home/GetData' + '?id=' + id,
                    success: function (data) {
                        $('#Data').replaceWith(data);
                    }
                });
            });
        }
    });
});