import React,{Component} from 'react';
import { connect } from 'react-redux'
import {  Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { createPost } from '../store/actions/postActions';

class CreatePost extends Component {
  state = {
    title: '',
    price: '',
    detail: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state)
  }
  render() {
    return (
      <Form>
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
            placeholder="number placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">detail</Label>
          <Input onChange= {this.handleChange} type="textarea" name="text" id="detail" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input onChange= {this.handleChange} type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        
        <Button onClick={this.handleSubmit}>CreatePost</Button>
      </Form>
    );
  }
}
const mapDispatchToProps= (dispatch) => {
return{
  createPost: (post) => dispatch(createPost(post))
}
}
export default connect(null, mapDispatchToProps)(CreatePost);