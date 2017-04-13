/// <reference path="typings/jquery/jquery.d.ts" />
//import Highcharts from "../highcharts.js";
interface IvwChart {
    Id: number;
    Name: string;
    Group: number;
    Period: number;
    PeriodName: string;
}
class vwChart implements IvwChart {
    constructor(
        public Id: number,
        public Name: string,
        public Group: number,
        public Period: number,
        public PeriodName: string) { }
}
interface IvwData {
    ID: number;
    Chart: number;
    ChartName: string;
    Line: number;
    LineName: string;
    LineType: number;
    LineTypeName: string;
    Period: number;
    PeriodName: string;
    Date: string;
    Value: number;
    Year: number;
    Month: number;
}
class vwData implements IvwData {
    constructor(
        public  ID: number,
        public  Chart: number,
        public  ChartName: string,
        public  Line: number,
        public  LineName: string,
        public  LineType: number,
        public  LineTypeName: string,
        public  Period: number,
        public  PeriodName: string,
        public  Date: string,
        public  Value: number,
        public  Year: number,
        public  Month: number) { }
}
class ChartsList {
    public charts: Array<vwChart> = new Array<vwChart>();
    UpdateChartList(): void {
            $.getJSON('http://localhost:4051/Home/GetCharts' + '?id=' + $('#Groups').val(),
                (data) => {
                        var select = '<select class="form-control">'
                        for (var i = 0; i < data.length; i++) {
                            var selectRow =
                                '<option label="' + data[i].Name +
                                '" value="' + data[i].ID + '">' + '</option>';
                        }
                        select += '<option disabled selected> Select Chart</option>';
                        select += selectRow;
                        select += '</select>';
                        $("#Chart").html(select);             
        });
    }
}
class DataList {
    public ChartData: Array<vwData> = new Array<vwData>();
    UpdateChartData(): void {

        $.getJSON('http://localhost:4051/Home/GetData' + '?id=' + $('#Chart').val()
            + '&' + 'mindate=' + $('#mindate').val() + '&' + 'maxdate=' + $('#maxdate').val(),
            (data) => {
                Highcharts.chart('container', {})
                var select =
                    '<div class="row fpr">' +
                    '<div class="col-sm-6 btn-primary">' + 'ChartName' + '</div>' +
                    '<div class="col-sm-1 btn-primary">' + 'Line' + '</div>' +
                    '<div class="col-sm-2 btn-primary">' + 'LineName' + '</div>' +
                    '<div class="col-sm-1 btn-primary">' + 'Value' + '</div>' +
                    '<div class="col-sm-1 btn-primary">' + 'Year' + '</div>' +
                    '<div class="col-sm-1 btn-primary">' + 'Month' + '</div>' +
                    '</div>' + '<div class="row fpr">';
                for (var i = 0; i < data.length; i++) {
                    this.ChartData = data
                    var selectRow =
                        '<div class="col-sm-6">' + this.ChartData[i].ChartName + '</div>' +
                        '<div class="col-sm-1">' + this.ChartData[i].Line + '</div>' +
                        '<div class="col-sm-2">' + this.ChartData[i].LineName + '</div>' +
                        '<div class="col-sm-1">' + this.ChartData[i].Value + '</div>' +
                        '<div class="col-sm-1">' + this.ChartData[i].Year + '</div>' +
                        '<div class="col-sm-1">' + this.ChartData[i].Month + '</div>';
                        select += selectRow;
                }            
                select += '</div>';
                $("#Data").html(select);
            });
    }
}
var chartsList: ChartsList = new ChartsList();
$('#Groups').change(function () { chartsList.UpdateChartList(); });
var ChartData: DataList = new DataList();
$('#displayBtn').click(function () { ChartData.UpdateChartData(); });
var temperatures = [7, 1.7, 1.3, 1.3, 1.2, 0.9, 0.6, 0.6, 0.6, 1.2, 3.3, 6.6, 8.7, 10.5];
var name = 'Power Belgium Spot EUR/MWh';