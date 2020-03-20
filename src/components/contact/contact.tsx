import React, { useState } from "react";
import contactStyle from "./contact.module.scss";
import Modal from "../shared/modal";

const Contact: React.FC = props => {
  const [status, setStatus] = useState("");

  const submitForm = (ev: any) => {
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
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <div>
      <Modal title="mail me">
        <div className={contactStyle.Form}>
          <form
            onSubmit={submitForm}
            action="https://formspree.io/mbjkaqrj"
            method="POST"
          >
            <div className={contactStyle.FormGroup}>
              <label>Name:</label>
              <input type="name" name="name" placeholder="Full Name" required/>
            </div>
            <div className={contactStyle.FormGroup}>
              <label>Email:</label>
              <input type="email" name="email" placeholder="Email" required/>
            </div>
            <div className={contactStyle.FormGroup}>
              <label>Message:</label>
              <textarea id="msg" name="message" placeholder="Message" maxLength={400} required/>
            </div>
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
