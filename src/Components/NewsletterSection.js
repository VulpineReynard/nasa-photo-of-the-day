import React from "react";
import { Button, Checkbox, Form, Icon, Header } from 'semantic-ui-react';

export default function NewsletterSection() {

  const NewsletterForm = () => (
    <Form className="newsletter-form">
      <h2>Sign-Up For Our Newsletter!</h2>
      <Icon name='settings' />
      <Icon  size="big"/>
      <Form.Field>
        <label>First Name: </label>
        <input type="text" placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name: </label>
        <input type="text" placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <label>Email: </label>
        <input type="email" placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )

  return (
    <NewsletterForm />
  )
}