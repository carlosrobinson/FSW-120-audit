import React from 'react';
import MyForm from './MyForm';
const { Provider, Consumer } = React.createContext();


class TweetsContextProvider extends React.Component {
  constructor() {
    super()
    this.state = {
        data : 
        [
            {
                id: 1,
                title: "John Smith",
                handle:"@john_smith",
                message: "Had a great time last night with you know who. I hope she did too. #NewGF # tillnexttime",
                imgUrl: "https://images.unsplash.com/photo-1564941547572-0740df156b88?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=335&q=80"
            },
             {
                 id:2,
                title: "John Smith",
                handle:"@john_smith",
                message: "She didn't call me back yet. Man is that a bad sign. #notmyday #callme",
                imgUrl:"https://images.unsplash.com/photo-1572574732164-ac2480d43702?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=150"
            }
        ],
        id: undefined,
        title: "",
        handle:"",
        message: "",
        imgUrl: ""
            }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };
  //handleDelete DOM Manipulation style, I tried to do it with .filter() but cannot access parentNode.id from this array as the id is being given in a different file.
  handleDelete(e) {
    let deleteBtn = document.getElementsByClassName("del")
    console.log(deleteBtn)
    for (var i = 0; i < deleteBtn.length; i++) {
      if (e.target === deleteBtn[i]) {
        let x = deleteBtn[i].parentNode
        let y = x.parentNode
        y.removeChild(x)
      }
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let newThing = {
        id: this.state.id,
        title: this.state.title,
        handle: this.state.handle,
        message: this.state.message,
        url: this.state.url
    }
    this.state.data.push(newThing)
    this.setState({
      id: undefined,
      title: "",
      handle:"",
      message: "",
      imgUrl: "",
      updating: false
    })
  }


  render() {
    const tweets = this.state.data
    return (
  
      <Provider value={{ data: tweets, delete: this.handleDelete, sub: this.handleSubmit, change: this.handleChange }} >
        { this.props.children}
        </Provider>
      
        )
        
        
      }
}

export { TweetsContextProvider, Consumer as TweetsContextConsumer };