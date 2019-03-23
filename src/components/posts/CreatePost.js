import React,{Component} from 'react';
import { connect } from 'react-redux'
import {  Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { createPost } from '../store/actions/postActions';
import {  Redirect } from 'react-router-dom'

class CreatePost extends Component {
  state = {
    title: '',
    price: '',
    detail: '',
    type:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.createPost(this.state)
  }
  render() {
    const { auth } = this.props
    if(auth.uid !== "Q3qCQZEOxFZ4qrW6a5d5oFgeqTK2" ) return <Redirect to='/' />

    return (
      <div className="create-post-area">
      <Form className="create-post">
         <FormGroup>
          <Label for="exampleDatetime">title</Label>
          <Input
           onChange= {this.handleChange}
            type="text"
            name="title"
            id="title"
            placeholder="title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">price</Label>
          <Input
           onChange= {this.handleChange}
            type="number"
            name="price"
            id="price"
            placeholder="price"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">detail</Label>
          <Input onChange= {this.handleChange} type="textarea" name="text" id="detail" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select Offer Type</Label>
          <Input onChange= {this.handleChange} type="select" name="select" id="type">
            <option>type</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>

          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input onChange= {this.handleChange} type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi vitae, et praesentium veritatis
          </FormText>
        </FormGroup>
        
    <Button className="create-post-btn" onClick={this.handleSubmit}> CreatePost </Button>
      </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
      auth: state.firebase.auth
  }
}

const mapDispatchToProps= (dispatch) => {
return{
  createPost: (post) => dispatch(createPost(post))
}
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);