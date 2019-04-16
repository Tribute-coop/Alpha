import React, { Component, FormEvent, ChangeEvent } from 'react';

/* eslint-disable */

export interface ISomething<T> {
  handler: Function;
}

export class ProjectNameSetupComponent extends Component<
  ISomething<string>,
  any
> {
  constructor(props: ISomething<string>) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.handler({ projectName: this.state.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="basicEmail">Email address</label>
          <input
            type="text"
            className="form-control"
            id="basicEmail"
            placeholder="Enter email"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>

        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}
