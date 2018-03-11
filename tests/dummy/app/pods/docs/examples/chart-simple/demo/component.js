// BEGIN-SNIPPET chart-simple.js
import Component from '@ember/component';

export default Component.extend({
  option: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  },

  onEvents: {
    click(params, echart) {
      console.log('onClick', params, echart);
    },
  },
  onChartReady(chart) {
    chart.hideLoading();
  },
  beforeSetup() {
    // console.log('Before Setup');
  },
  afterSetup() {
    // console.log('After Setup');
  },

});

// END-SNIPPET


