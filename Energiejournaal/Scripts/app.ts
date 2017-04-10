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
class GroupsList {

}
class ChartsList {
    private charts: Array<vwChart> = new Array<vwChart>();
    UpdateChart(): void {
        var id = $(this).val();
        $.getJSON('http://localhost:4051/Home/GetCharts' + '?id=' + id,
            (data) => {
                this.charts = data;
                var select = '<select class="form-control">'
                for (var i = 0; i < this.charts.length; i++) {
                    var selectRow = 
                    '<option>' + this.charts[i].Name + '</option>';                    
                }
                select += '<option disabled selected> Select Chart</option>';
                select += selectRow;
                select += '</select>';
                $("#Chart").replaceWith(select);
            });        
    }
}
class vwChart {

    Id: number;
    Name: string;
    Group: number;
    Period: number;
    PeriodName: string;
}
class UserList {

    private users: Array<User> = new Array<User>();
    displayUsers(): void {
        $.getJSON('http://localhost:4051/Home/GetUsers',
            (data) => {
                this.users = data;
                var table = '<table class="table">'
                for (var i = 0; i < this.users.length; i++) {

                    var tableRow = '<tr>' +
                        '<td>' + this.users[i].Id + '</td>' +
                        '<td>' + this.users[i].Name + '</td>' +
                        '<td>' + this.users[i].Age + '</td>' +
                        '</tr>';
                    table += tableRow;
                }
                table += '</table>';
                $('#Data').html(table);
            });
    }
}
class User {

    Id: number;
    Name: string;
    Age: number;
}
window.onload = () => {
    var userList: UserList = new UserList();
    var chartsList: ChartsList = new ChartsList();
    $("#displayBtn").click(() => { userList.displayUsers(); });
    $("#displayBtn2").click(() => { chartsList.UpdateChart(); });
}