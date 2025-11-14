import React, { Fragment } from "react";
import { Link, Navigate } from "react-router-dom";

const CreateTask = () => {
  return (
    <Fragment>
      <section className="container">
        <p className="lead">
          <i className="fas fa-user"></i> Create your Task
        </p>

        <h2 className="my-2">Task List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th className="hide-sm">Description</th>
              <th className="hide-sm">Assignee</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tech Guy Web Solutions</td>
              <td className="hide-sm">Senior Developer</td>
              <td className="hide-sm">02-03-2009 - 01-02-2014</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Traversy Media</td>
              <td className="hide-sm">Instructor & Developer</td>
              <td className="hide-sm">02-03-2015 - Now</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Fragment>
  );
};

export default CreateTask;
