import React from 'react';

class SearchField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search:''
      };
      //bindings
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeSearch = this.handleChangeSearch.bind(this);

    }

   
    handleChangeSearch(event) {
      this.setState({search:event.target.value});
    }

    handleSubmit(event) {
      //find the changeSearch
      const contactContainer = document.querySelector('#contactContainer');
      contactContainer.innerHTML = "";
      for(let i = 0; i < this.props.array.length; i++) {
        if (this.props.array[i].includes(this.state.search)) {
          console.log(this.props.array[i])
          var contact = document.createElement('li');
          contact.innerHTML = this.props.array[i];
          
          
          contactContainer.appendChild(contact);
        };
      }
      event.preventDefault();
    }

    //methods
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
              Search :
               <input type="text" value={this.state.search} onChange={this.handleChangeSearch} />
              </label>
              <input type="submit" value="Submit" />
            </form>
        );
    }
}


export default SearchField;
