// BEGIN-SNIPPET chart-dynamic.js
import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({

  init() {
    this._super(...arguments);
  },

  timeTicket: null,
  count: 51,

  fetchNewDate() {
    let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
    let option = get(this, 'option');
    set(option.title, 'text', 'Hello echarts-for-ember.' + new Date().getSeconds());
    let series = get(option , 'series');

    let data0 = get(series[0], 'data');
    let data1 = get(series[1], 'data');

    data0.shift();
    data0.push(Math.round(Math.random() * 1000));
    data1.shift();
    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

    get(option.xAxis[0], 'data').shift();
    get(option.xAxis[0], 'data').push(axisData);
    get(option.xAxis[1], 'data').shift();
    get(option.xAxis[1], 'data').push(this.count++);

    set(this, 'option', Object.assign({}, option));
  },

  didInsertElement(){
    this._super(...arguments);

    if (get(this, 'timeTicket')) {
      clearInterval(get(this, 'timeTicket'));
    }
    set(this, 'timeTicket', setInterval(() => {
      this.fetchNewDate();
    }, 1000));
  },

  willDestroyElement() {
    if (get(this, 'timeTicket')) {
      clearInterval(get(this, 'timeTicket'));
    }
  },

  option: {
    title: {
      text:'Hello echarts-for-ember.',
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['最新成交价', '预购队列']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    grid: {
      top: 60,
      left: 30,
      right: 60,
      bottom:30
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1000,
      color: ['#BE002F', '#F20C00', '#F00056', '#FF2D51', '#FF2121', '#FF4C00', '#FF7500',
        '#FF8936', '#FFA400', '#F0C239', '#FFF143', '#FAFF72', '#C9DD22', '#AFDD22',
        '#9ED900', '#00E500', '#0EB83A', '#0AA344', '#0C8918', '#057748', '#177CB0']
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: (function (){
          let now = new Date();
          let res = [];
          let len = 50;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
            now = new Date(now - 2000);
          }
          return res;
        })()
      },
      {
        type: 'category',
        boundaryGap: true,
        data: (function (){
          let res = [];
          let len = 50;
          while (len--) {
            res.push(50 - len + 1);
          }
          return res;
        })()
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: '价格',
        max: 20,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        name: '预购量',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name:'预购队列',
        type:'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 4,
          }
        },
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return idx * 10;
        },
        animationDelayUpdate: function (idx) {
          return idx * 10;
        },
        data:(function (){
          let res = [];
          let len = 50;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })()
      },
      {
        name:'最新成交价',
        type:'line',
        data:(function (){
          let res = [];
          let len = 0;
          while (len < 50) {
            res.push((Math.random()*10 + 5).toFixed(1) - 0);
            len++;
          }
          return res;
        })()
      }
    ]
  },

});

// END-SNIPPET


