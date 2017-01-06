$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#unload').highcharts({
            chart: {
                type: 'line',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
				
				backgroundColor: null,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Setting1'
            },
			credits: {
      enabled: false
  }
			,
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Setting 1',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});

/*** second Chart in Dashboard page ***/

$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#load').highcharts({
            chart: {
                type: 'column',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
				
				backgroundColor: null,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Setting2'
            },
			credits: {
      enabled: false
  }
			,
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Setting 2',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1500,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});



/*** Third Chart in Dashboard page ***/

$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#space').highcharts({
            chart: {
                type: 'scatter',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
				
				backgroundColor: null,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Setting2'
            },
			credits: {
      enabled: false
  }
			,
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Setting 2',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1500,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});

/*** Fourth Chart in Dashboard page ***/

$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#unloaded').highcharts({
            chart: {
                type: 'pie',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
				
				backgroundColor: null,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Setting2'
            },
			credits: {
      enabled: false
  }
			,
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Setting 2',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1500,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});


/*** 5th Chart in Dashboard page ***/

$(function () {
    var chart = new Highcharts.Chart({
    
        chart: {
            renderTo: 'loaded',
            type: 'gauge',
            alignTicks: false,
			backgroundColor: null,
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
    
        title: {
            text: ''
        },
        
        pane: {
            startAngle: -150,
            endAngle: 150
        },            
    
			credits: {
      enabled: false
  },
        yAxis: [{
            min: 0,
            max: 200,
            lineColor: '#339',
            tickColor: '#339',
            minorTickColor: '#339',
            offset: -25,
            lineWidth: 2,
            labels: {
                distance: -20,
                rotation: 'auto'
            },
            tickLength: 5,
            minorTickLength: 5,
            endOnTick: false
        }, {
            min: 0,
            max: 124,
            tickPosition: 'outside',
            lineColor: '#933',
            lineWidth: 2,
            minorTickPosition: 'outside',
            tickColor: '#933',
            minorTickColor: '#933',
            tickLength: 5,
            minorTickLength: 5,
            labels: {
                distance: 12,
                rotation: 'auto'
            },
            offset: -20,
            endOnTick: false
        }],
    
        series: [{
            name: 'Speed',
            data: [80],
            dataLabels: {
                formatter: function () {
                    var kmh = this.y,
                        mph = Math.round(kmh * 0.621);
                    return '<span style="color:#339">'+ kmh + ' km/h</span><br/>' +
                        '<span style="color:#933">' + mph + ' mph</span>';
                },
                backgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#DDD'],
                        [1, '#FFF']
                    ]
                }
            },
			
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]
    
    },
    // Add some life
    function(chart) {
        setInterval(function() {
            var point = chart.series[0].points[0],
                newVal, inc = Math.round((Math.random() - 0.5) * 20);
    
            newVal = point.y + inc;
            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }
    
            point.update(newVal);
    
        }, 1000);
    
    });
});
