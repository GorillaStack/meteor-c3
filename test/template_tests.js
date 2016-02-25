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

Tinytest.add('getLoadUnloadDetails specifies columns to unload whereby for data.rows', (test) => {
});
