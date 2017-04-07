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
    }
    ChartsList.prototype.UpdateChart = function () {
        $("#Groups").change(function () {
            var id = $("#Groups").val();
            $.ajax('http://localhost:4051/Home/GetCharts' + '?id=' + id, function (data) {
                $("#Chart").replaceWith(data);
            });
        });
    };
    return ChartsList;
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
    $("#displayBtn").click(function () { userList.displayUsers(); chartsList.UpdateChart; });
};
//# sourceMappingURL=app.js.map