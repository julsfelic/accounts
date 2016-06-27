// ES5
// var Records = React.createClass({
//   getInitialState: function() {
//     return {
//       records: this.props.data
//     }
//   },
//   getDefaultProps: function() {
//     records: []
//   },
//   render: function() {
//     return(
//       <div className="records">
//         <h2 className="title">Records</h2>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Title</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.records.map(function(record) {
//               return <Record key={record.id} record={record} />
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// });

// ES6

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: props.data
    };
  }

  addRecord(record) {
    let records = this.state.records.slice();
    records.push(record);
    this.setState({records: records});
  }

  render() {
    return(
      <div className="records">
        <h2 className="title">Records</h2>
        <RecordForm handleNewRecord={this.addRecord.bind(this)} />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.records.map(function(record) {
              return <Record key={record.id} record={record} />
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
