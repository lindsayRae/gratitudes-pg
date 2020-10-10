import React, { Component } from 'react';

class List extends Component {
  // Initialize the state

  state = {
    list: []
  }


  // Fetch the list on first mount
  async componentDidMount() {
    console.log('componentDidMount...')
    //this.getList();
    const response = await fetch('/api/gratitudes');
    const json = await response.json();
    console.log(json)
    //this.setState({ data: json });

  }

  // Retrieves the list of items from the Express app
  // function getList()  {
  //   try {

  //     let url = '/api/gratitudes'

  //     let headers = {
  //       "Content-Type": "application/json",
  //       "x-auth-token": localStorage.getItem('token')
  //   }

  //   let res = await fetch(url, {
  //       method: "GET",
  //       headers: headers
  //   })
  //   let json = await res.json()
  //   console.log(json)

  //     // fetch()
  //     // .then(res => res.json())
  //     // .then(list => this.setState({ list }))
  //   } catch (error) {
  //     console.log('catch: ', error)
  //   }
    
  // }

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