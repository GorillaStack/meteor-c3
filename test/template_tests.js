const columnData1 = {
  data: {
    columns: [
      ['key1', 80],
      ['key2', 67],
      ['key6', 19],
      ['key4', 52],
      ['key8', 30]
    ]
  }
};

const columnData2 = {
  data: {
    columns: [
      ['key1', 80],
      ['key7', 67],
      ['key3', 19],
      ['key4', 52],
      ['key9', 30]
    ]
  }
};

const rowData1 = {
  data: {
    rows: [
      ['key1', 'key2', 'key3', 'key4', 'key5'],
      [23, 67, 66, 88, 53]
    ]
  }
};

const rowData2 = {
  data: {
    rows: [
      ['key6', 'key7', 'key2', 'key5', 'key3'],
      [23, 67, 66, 88, 53]
    ]
  }
};

Tinytest.add('getFieldNames can find field names for data.columns', (test) => {
  test.equal(getFieldNames(columnData1), ['key1', 'key2', 'key6', 'key4', 'key8']);
});

Tinytest.add('getFieldNames can find field names for data.rows', (test) => {
  test.equal(getFieldNames(rowData1), ['key1', 'key2', 'key3', 'key4', 'key5']);
});

Tinytest.add('getLoadUnloadDetails specifies data to unload for data.rows where data removed', (test) => {
  test.equal(getLoadUnloadDetails(rowData1, rowData2), { rows: rowData2.data.rows, unload: ['key1', 'key4'] });
});

Tinytest.add('getLoadUnloadDetails specifies data to unload for data.columns where data removed', (test) => {
  test.equal(getLoadUnloadDetails(columnData1, columnData2), { columns: columnData2.data.columns, unload: ['key2', 'key6', 'key8'] });
});

Tinytest.add('getDataAsColumns is an identity function on column data', (test) => {
  test.equal(getDataAsColumns(columnData1), columnData1.data.columns);
});

Tinytest.add('getDataAsColumns converts row data to column data', (test) => {
  test.equal(getDataAsColumns(rowData2), [['key6', 23],  ['key7', 67], ['key2', 66], ['key5', 88], ['key3', 53]]);
});
