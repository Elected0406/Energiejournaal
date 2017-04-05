/// <reference path="typings/jquery/jquery.d.ts" />
var DataList = (function () {
    function DataList() {
        this.data = new Array();
    }
    DataList.prototype.displayData = function () {
        var _this = this;
        $.getJSON('http://localhost:4051/Home/GetData', function (data) {
            _this.data = data;
        });
        var table = '<table class="table">';
        for (var i = 0; i < this.data.length; i++) {
            var tableRow = '<tr>' +
                '<td>' + this.data[i].ID + '</td>' +
                '<td>' + this.data[i].Chart + '</td>' +
                '<td>' + this.data[i].ChartName + '</td>' +
                '<td>' + this.data[i].Line + '</td>' +
                '<td>' + this.data[i].LineTypeName + '</td>' +
                '<td>' + this.data[i].Period + '</td>' +
                '<td>' + this.data[i].PeriodName + '</td>' +
                '<td>' + this.data[i].Value + '</td>' +
                '<td>' + this.data[i].Year + '</td>' +
                '<td>' + this.data[i].Month + '</td>' +
                '</tr>';
            table += tableRow;
        }
        table += '</table>';
        $('#contentt').html(table);
    };
    return DataList;
}());
var Data = (function () {
    function Data() {
    }
    return Data;
}());
window.onload = function () {
    var userList = new DataList();
    $("#displayBtn").click(function () { userList.displayData(); });
};
$(function () {
    $('#Groups').change(function () {
        // получаем выбранный id
        var id = $(this).val();
        $.ajax({
            type: 'GET',
            url: '@Url.Action("GetUsers")/' + id,
            success: function (data) {
                // заменяем содержимое присланным частичным представлением
                $('#Chart').replaceWith(data);
            }
        });
    });
});
var temperatures = [7, 1.7, 1.3, 1.3, 1.2, 0.9, 0.6, 0.6, 0.6, 1.2, 3.3, 6.6, 8.7, 10.5];
var name = 'Power Belgium Spot EUR/MWh';
