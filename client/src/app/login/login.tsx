import React from 'react';
import { Link } from 'react-router-dom';

export function Login(): JSX.Element {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-4">
          <h1 className="display-5">Temporary Login</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est eros,
            elementum sed nisi nec, tempor sollicitudin urna. Sed vehicula quis purus
            at tincidunt. Vestibulum interdum massa quis sapien mollis, vel blandit
            magna egestas.
          </p>
          <div className="text-right">
            <Link className="btn btn-primary btn-block mt-4" to='/project'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
