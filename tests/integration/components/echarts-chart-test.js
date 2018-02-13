import { moduleForComponent, test } from 'ember-qunit';
import { run } from '@ember/runloop';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('echarts-chart', 'Integration | Component | echarts chart', {
  integration: true,
  beforeEach() {
    this.set('options', {
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
    });
  }
});

test('it renders', function(assert) {
  assert.expect(1);
  this.render(hbs`{{echarts-chart}}`);
  assert.equal(this.$().text(), '');
});

test('it displays data', function(assert) {
  assert.expect(1);
  let done = assert.async();

  this.render(hbs`{{echarts-chart options=options}}`);
  run.later(() => {
    assert.equal(this.$().find('canvas').length, 1);
    done();
  }, 2000);
});
