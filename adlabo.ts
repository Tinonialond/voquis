enum DataSourceType {
  Column = 3,
  Table = 5,
  API = 7
}

console.log(DataSourceType.Column); // Output: 3
console.log(DataSourceType[3]);     // Output: "Column"
