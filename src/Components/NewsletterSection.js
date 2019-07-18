import React, { setState } from "react";
import { Button, Checkbox, Form, Icon, Header } from 'semantic-ui-react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default function NewsletterSection() {

  function openModal() {
      Modal.setState({modalIsOpen: true});
}

  const NewsletterForm = () => (
    <Form className="newsletter-form">
      <h2>Sign-Up For Our Newsletter!</h2>
      <Icon name='settings' />
      <Icon  size="big"/>
      <Form.Field>
        <label>First Name:  </label>
        <input type="text" placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name:  </label>
        <input type="text" placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <label>Email:  </label>
        <input type="email" placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
        <a onClick={()=> openModal()} href="#">Terms and Conditions</a>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )

  return (
    <NewsletterForm />
  )
}