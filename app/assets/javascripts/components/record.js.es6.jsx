// ES5

// const Record = React.createClass({
//   render() {
//     let record = this.props.record;
//     return (
//       <tr>
//         <td>{record.date}</td>
//         <td>{record.title}</td>
//         <td>{amountFormat(record.amount)}</td>
//       </tr>
//     );
//   }
// });

// ES6
const Record = ({record}) => (
  <tr>
    <td>{record.date}</td>
    <td>{record.title}</td>
    <td>{amountFormat(record.amount)}</td>
  </tr>
);
