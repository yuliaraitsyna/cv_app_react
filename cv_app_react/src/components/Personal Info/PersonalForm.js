
import React from "react";

export default class PersonalForm extends React.Component {
    handleInputChange(event) {

    }

    handleSubmit(event) {
        event.preventDefault();

    }

    render() {
        return (
            <form className="personal-section" onSubmit={this.handleSubmit}>
                <h3>Personal info</h3>
                <input name="name" type="text" placeholder="Name" required onChange={this.handleInputChange}></input>
                <input name="surname" type="text" placeholder="Surname" required onChange={this.handleInputChange}></input>
                <input name="patronymic" type="text" placeholder="Patronymic" onChange={this.handleInputChange}></input>
                <input name="email" type="email" placeholder="Email" required onChange={this.handleInputChange}></input>
                <input name="phone_number" type="text" placeholder="Phone number" required onChange={this.handleInputChange}></input>
                <input name="location" type="text" placeholder="Location" required onChange={this.handleInputChange}></input>
                <button id="submit-person-btn" type="submit">Done</button>
            </form>
        )
    }
}
