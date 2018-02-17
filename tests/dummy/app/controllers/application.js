import Controller from '@ember/controller';

export default Controller.extend({

  init() {
    this._super(...arguments);
    setInterval(() => {
      this.set('option', {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [Math.floor(Math.random() * 1500), Math.floor(Math.random() * 1500), Math.floor(Math.random() * 1500), Math.floor(Math.random() * 1500), Math.floor(Math.random() * 1500), Math.floor(Math.random() * 1500), 1320],
          type: 'line'
        }]
      })
    }, 3000);
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
  }
});
