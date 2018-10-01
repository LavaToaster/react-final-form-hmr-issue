import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import { Form, Field } from 'react-final-form'

class App extends Component {
  render() {
    return (
        <Form
            onSubmit={this.handleSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
                <form onSubmit={handleSubmit}>
                    <h2>Simple Default Input</h2>
                    <div>
                        <label>First Name</label>
                        <Field name="firstName" component="input" placeholder="First Name" />
                    </div>

                    <h2>Render Function</h2>
                    <Field
                        name="bio"
                        render={({ input, meta }) => (
                            <div>
                                <label>Bio</label>
                                <textarea {...input} />
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                            </div>
                        )}
                    />

                    <h2>Render Function as Children</h2>
                    <Field name="phone">
                        {({ input, meta }) => (
                            <div>
                                <label>Phone</label>
                                <input type="text" {...input} placeholder="Phone" />
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    <button type="submit" disabled={pristine || invalid}>
                        Submit
                    </button>
                </form>
            )}
        />
    );
  }

  handleSubmit = (values) => {
      console.log("Submit!", values);
  }
}

export default hot(module)(App);
