/// <reference path="typings/jquery/jquery.d.ts" />
var temperatures = [7, 1.7, 1.3, 1.3, 1.2, 0.9, 0.6, 0.6, 0.6, 1.2, 3.3, 6.6, 8.7, 10.5];
var name = 'Power Belgium Spot EUR/MWh';
//$('#Groups').change(function () {
//    // получаем выбранный id
//    var id = $(this).val();
//    $.ajax({
//        type: 'GET',
//        url: 'http://localhost:4051/Home/GetCharts' +'?id=' + id,
//        success: function (data) {
//            // заменяем содержимое присланным частичным представлением
//            $('#Chart').replaceWith(data);
//            $('#Chart').change(function () {
//                var id = $(this).val();
//                $.ajax({
//                    type: 'GET',
//                    url: 'http://localhost:4051/Home/GetData' + '?id=' + id,
//                    success: function (data) {
//                        $('#Data').replaceWith(data);
//                    }
//                });
//            });
//        }
//    });
//});
var GroupsList = (function () {
    function GroupsList() {
    }
    return GroupsList;
}());
var ChartsList = (function () {
    function ChartsList() {
        this.charts = new Array();
    }
    ChartsList.prototype.UpdateChart = function () {
        var _this = this;
        var id = $(this).val();
        $.getJSON('http://localhost:4051/Home/GetCharts' + '?id=' + id, function (data) {
            _this.charts = data;
            var select = '<select class="form-control">';
            for (var i = 0; i < _this.charts.length; i++) {
                var selectRow = '<option>' + _this.charts[i].Name + '</option>';
            }
            select += '<option disabled selected> Select Chart</option>';
            select += selectRow;
            select += '</select>';
            $("#Chart").replaceWith(select);
        });
    };
    return ChartsList;
}());
var vwChart = (function () {
    function vwChart() {
    }
    return vwChart;
}());
var UserList = (function () {
    function UserList() {
        this.users = new Array();
    }
    UserList.prototype.displayUsers = function () {
        var _this = this;
        $.getJSON('http://localhost:4051/Home/GetUsers', function (data) {
            _this.users = data;
            var table = '<table class="table">';
            for (var i = 0; i < _this.users.length; i++) {
                var tableRow = '<tr>' +
                    '<td>' + _this.users[i].Id + '</td>' +
                    '<td>' + _this.users[i].Name + '</td>' +
                    '<td>' + _this.users[i].Age + '</td>' +
                    '</tr>';
                table += tableRow;
            }
            table += '</table>';
            $('#Data').html(table);
        });
    };
    return UserList;
}());
var User = (function () {
    function User() {
    }
    return User;
}());
window.onload = function () {
    var userList = new UserList();
    var chartsList = new ChartsList();
    $("#displayBtn").click(function () { userList.displayUsers(); });
    $("#displayBtn2").click(function () { chartsList.UpdateChart(); });
};
