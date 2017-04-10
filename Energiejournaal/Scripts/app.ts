/// <reference path="typings/jquery/jquery.d.ts" />
var temperatures = [7, 1.7, 1.3, 1.3, 1.2, 0.9, 0.6, 0.6, 0.6, 1.2, 3.3, 6.6, 8.7, 10.5];
var name = 'Power Belgium Spot EUR/MWh';
class ChartsList {
    private charts: Array<vwChart> = new Array<vwChart>();
    private chartdata: Array<vwData> = new Array<vwData>();
    UpdateChart(): void {
        $("#Groups").change(function () {
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
class vwData {
    Chart: number;
    ChartName: string;
    Value: number;
}
window.onload = () => {
    var chartsList: ChartsList = new ChartsList();
    chartsList.UpdateChart();
}