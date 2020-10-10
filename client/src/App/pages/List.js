import React, { Component } from 'react';

class List extends Component {
  // Initialize the state

  this.state = {
    list: []
  }


  // Fetch the list on first mount
  componentDidMount = () => {
    console.log('componentDidMount...')
    this.getList();
    // const response = await fetch('/api/gratitudes');
    // const json = await response.json();
    // console.log(json)
    //this.setState({ data: json });

  }

  // Retrieves the list of items from the Express app
  getList = () =>  {
    try {
      // const response = await fetch('/api/getList');
      // const json = await response.json();
      // this.setState({ data: json });
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  
    } catch (error) {
      console.log('catch: ', error)
    }
    
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;