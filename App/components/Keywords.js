import React, {Component} from 'react';
import echarts from 'echarts';

class Keywords extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $.ajax({
                type:     'GET',
                url:      '/api/v1/keywords',
                dataType: 'json',
                success:  function (res) {
                    var data = [];
                    this.setState({data: res.data, loading: false});

                    var myChart = echarts.init(document.getElementById('main'));
                    // 绘制图表
                    myChart.setOption({
                        title: { text: '词频分布' },
                        tooltip: {},
                        xAxis: {},
                        yAxis: {
                            data: res.data.map(item => item.word)
                        },
                        series: [{
                            name: '词频',
                            type: 'bar',
                            data: res.data.map(item => item.cnt)
                        }]
                    });
                }.bind(this),
                error:    function (err) {
                    console.log(err);
                }
            });
    }

    render() {
        return (
            <div id='main' style={{height: 3000}}></div>
        );
    }
}

export default Keywords;
