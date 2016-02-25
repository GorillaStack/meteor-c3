const getSafe = (obj, path, defaultValue) => {
  if (!obj) {
    return defaultValue;
  }

  let value = obj;
  let components = path.split(/\./);

  while (components.length) {
    let component = components.shift();
    if (typeof value[component] !== 'undefined') {
      value = value[component];
    } else {
      return defaultValue;
    }
  }

  return value;
};

const getData = () => {
  let thisData = UI.getData();
  let data;
  if (getSafe(thisData, 'data.data')) {
    data = thisData.data;
    data.bindto = thisData.id ? '#' + thisData.id : '#chart';
  } else {
    data = thisData || { data: { columns: [] } };
  }

  return data;
};

getFieldNames = (fields) => {
  let columns = getSafe(fields, 'data.columns');
  if (columns) {
    return columns.map((column) => {
      return column[0];
    });
  }

  let rows = getSafe(fields, 'data.rows');
  if (rows) {
    return rows[0];
  }
};

getLoadUnloadDetails = (previousData, currentData) => {
  let previousFields = getFieldNames(previousData);
  let currentFields = getFieldNames(currentData);


};

const drawChart = (template) => {
  let data = getData();
  template.mostRecentData = data;
  template.chart = c3.generate(data);
};

const updateChart = (template) => {
  let data = getData();
  let loadUnload = getLoadUnloadDetails(template.mostRecentData, data);

  template.chart.load(loadUnload);
  template.mostRecentData = data;
};

Template.c3.rendered = function() {
  let template = this;

  drawChart(template);
  this.autorun(function (tracker) {
    if (UI.getData()) {
      updateChart(template);
    }
  });
};

Template.c3.helpers({
  chartId: function() {
    return this.id || 'chart';
  }
});
