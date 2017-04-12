/// <reference path="typings/jquery/jquery.d.ts" />
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
    Chart: number;
    ChartName: string;
    Value: number;
}
class vwData implements IvwData {
    constructor(
        public Chart: number,
        public ChartName: string,
        public Value: number) { }
}
class ChartsList {
    public charts: Array<vwChart> = new Array<vwChart>();
    public chartdata: Array<vwData> = new Array<vwData>();
    UpdateChart(): void {
        $(document).on('change', '#Groups', function () {
            var id = $('#Groups').val();
            $.getJSON('http://localhost:4051/Home/GetCharts' + '?id=' + id,
                (data) => {
                    this.data = data;
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
var chartsList: ChartsList = new ChartsList();
chartsList.UpdateChart();








var temperatures = [7, 1.7, 1.3, 1.3, 1.2, 0.9, 0.6, 0.6, 0.6, 1.2, 3.3, 6.6, 8.7, 10.5];
var name = 'Power Belgium Spot EUR/MWh';