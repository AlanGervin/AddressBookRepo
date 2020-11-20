import React from 'react';



class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          firstName: '',
          lastName: '',
          addressBook: this.props.array    
      };
  
      this.handleChangeFirst = this.handleChangeFirst.bind(this);
      this.handleChangeLast = this.handleChangeLast.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeFirst(event) {
      this.setState({firstName: event.target.value});
    }

    handleChangeLast(event) {
      this.setState({lastName: event.target.value});  
    }

    handleSubmit(event) {    
      let adb = this.state.addressBook  
      adb.push(this.state.firstName);
      adb.push(this.state.lastName);
      this.setState({addressBook:adb});
      console.log(this.state.addressBook);
      
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name :
            <input type="text" value={this.state.firstName} onChange={this.handleChangeFirst} />
          </label>
          <label>
            Last Name :
            <input type="text" value={this.state.lastName}  onChange={this.handleChangeLast} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm