class RecordForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      date: '',
      amount: ''
    };
  }

  handleChange(e) {
    let name = e.target.name;
    this.state[name] = e.target.value;
    this.setState(this.state);
  }

  valid() {
    return this.state.title && this.state.date && this.state.amount;
  }

  handleSubmit(e) {
    e.preventDefault();
    $.post('', { record: this.state }, (data) => {
      this.props.handleNewRecord(data);
      this.setState({ title: '', date: '', amount: ''});
    },'json');
  }

  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 placeholder="Date"
                 name="date"
                 value={this.state.date}
                 onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 placeholder="Title"
                 name="title"
                 value={this.state.title}
                 onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 placeholder="Amount"
                 name="amount"
                 value={this.state.amount}
                 onChange={this.handleChange.bind(this)} />
        </div>
        <input type="submit"
                className="btn btn-primary"
                disabled={!this.valid()}
                onClick={this.handleSubmit.bind(this)}
                value="Create record" />
      </form>
    );
  }
}
