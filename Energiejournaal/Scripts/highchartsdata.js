$(function () {
    $('#datetimepicker1').datetimepicker(
        { format: "DD.MM.YYYY" });
    $('#datetimepicker2').datetimepicker({
        format: "DD.MM.YYYY"
    });
    $("#datetimepicker1").on("dp.change", function (e) {
        $("#datetimepicker2").data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker2").on("dp.change", function (e) {
        $("#datetimepicker1").data("DateTimePicker").maxDate(e.date);
    });
});
//$(function () {
//    $('#container1').highcharts({
//        chart: {
//            type: 'spline'
//        },
//        title: {
//            text: 'Oil Belgium Spot EUR/Barel'
//        },
//        xAxis: {
//            type: 'datetime',
//            labels: {
//                overflow: 'justify'
//            }
//        },
//        tooltip: {
//            valueSuffix: ''
//        },
//        plotOptions: {
//            spline: {
//                lineWidth: 2,
//                states: {
//                    hover: {
//                        lineWidth: 3
//                    }
//                },
//                marker: {
//                    enabled: false
//                },
//                tickInterval: 7 * 24 * 3600 * 1000, // one week
//                tickWidth: 0,
//                pointInterval: 86400000, // one hour
//                pointStart: Date.UTC(1999, 1, 1, 0, 0, 0)

//            },
//            series: {
//                cursor: 'pointer',
//        //        point: {
//        //            events: {
//        //                click: function (e) {
//        //                    hs.htmlExpand(null, {
//        //                        pageOrigin: {
//        //                            x: e.pageX || e.clientX,
//        //                            y: e.pageY || e.clientY
//        //                        },
//        //                        headingText: this.series.name,
//        //                        maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
//        //                            this.y + ' visits',
//        //                        width: 200
//        //                    });
//        //                }
//        //    }
//        //},
//        yAxis: {
//            title: {
//                text: ''
//            },
//            minorGridLineWidth: 0,
//            gridLineWidth: 0,
//            alternateGridColor: null,
//        },
//        navigation: {
//            menuItemStyle: {
//                fontSize: '10px'
//            }
//        },
//        series: [{
//            name: name,
//            data: temperatures,
//        }],
//    });
//});
//$(function () {
//    $('#container2').highcharts({
//        chart: {
//            type: 'spline'
//        },
//        title: {
//            text: 'Oil Belgium Spot EUR/Barel'
//        },
//        xAxis: {
//            type: 'datetime',
//            labels: {
//                overflow: 'justify'
//            }
//        },
//        tooltip: {
//            valueSuffix: ''
//        },
//        plotOptions: {
//            spline: {
//                lineWidth: 2,
//                states: {
//                    hover: {
//                        lineWidth: 3
//                    }
//                },
//                marker: {
//                    enabled: false
//                },
//                pointInterval: 86400000, // one hour
//                pointStart: Date.UTC(2017, 1, 1, 0, 0, 0)
//            }
//        },
//        yAxis: {
//            title: {
//                text: ''
//            },
//            minorGridLineWidth: 0,
//            gridLineWidth: 0,
//            alternateGridColor: null,
//        },
//        navigation: {
//            menuItemStyle: {
//                fontSize: '10px'
//            }
//        },
//        series: [{
//            name: 'Oil Belgium Spot EUR/Barel',
//            data: [0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
//        }],
//    });
//});
$(function () {
    $('#container3').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Gas Belgium Spot EUR/Сubic meter'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 86400000, // one hour
                pointStart: Date.UTC(2017, 1, 1, 0, 0, 0)
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
        },
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        },
        series: [{
            name: 'Gas Belgium Spot EUR/Сubic meter',
            data: [0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
        }],
    });
});
$(function () {
    $('#container4').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Gold Belgium Spot EUR/Oz'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 86400000, // one hour
                pointStart: Date.UTC(2017, 1, 1, 0, 0, 0)
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
        },
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        },
        series: [{
            name: 'Gold Belgium Spot EUR/Oz',
            data: [0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
        }],
    });
});