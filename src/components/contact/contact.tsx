import React, { useState, Component } from "react";
import contactStyle from "./contact.module.scss";
import Modal from "../shared/modal";
import ReactGa from 'react-ga';

class Contact extends Component {
  state = {
    status: "",
    name: "",
    email: "",
    message: ""
  };

  submitForm = (ev: any) => {
    ReactGa.event({
      category: 'Button',
      action: 'Clicked on contact button'
    })
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  };

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className={contactStyle.Contact}>
        <Modal title="mail me">
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/mbjkaqrj"
            method="POST"
          >
            <div className={contactStyle.FormGroup}>
              <input
                className={contactStyle.Question}
                type="text"
                name="name"
                autoComplete="off"
                onChange={this.handleChange}
                value={this.state.name}
                required
              />
              <label htmlFor="name">
                <span>Name</span>
              </label>
            </div>

            <div className={contactStyle.FormGroup}>
              <input
                className={contactStyle.Question}
                type="email"
                name="email"
                autoComplete="off"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />
              <label htmlFor="email">
                <span>Email</span>
              </label>
            </div>

            <div className={contactStyle.FormGroup}>
              <textarea
                className={contactStyle.Question}
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
                required
              ></textarea>
              <label htmlFor="message">
                <span>Message</span>
              </label>
            </div>

            <div className={contactStyle.Button}>
              {this.state.status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
              {this.state.status === "ERROR" && <p>Ooops! There was an error.</p>}{" "}
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Contact;
