/// <reference path="typings/jquery/jquery.d.ts" />
class DataList {

    private data: Array<Data> = new Array<Data>();
    displayData(): void {
        $.getJSON('http://localhost:4051/Home/GetData',
            (data) => {
                this.data = data;
            })
        var table = '<table class="table">'
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
    }
}
class Data {
    ID: number;
    Chart: number;
    ChartName: string; 
    Line: number;
    LineName: string;
    LineType: number;
    LineTypeName: string;
    Period: number;
    PeriodName: string;
    Value: number;
    Year: number;
    Month: number;
}

window.onload = () => {
    var userList: DataList = new DataList();
    $("#displayBtn").click(() => { userList.displayData(); });
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
})
var temperatures = [7, 1.7, 1.3, 1.3, 1.2, 0.9, 0.6, 0.6, 0.6, 1.2, 3.3, 6.6, 8.7, 10.5];
var name = 'Power Belgium Spot EUR/MWh';