/* eslint-env node */
module.exports = {
  description: 'Ember addon for Baidu\'s echarts.',

  normalizeEntityName: function () {},

  afterInstall() {
    return this.addPackageToProject('echarts', '^4.0.2');
  }

};
