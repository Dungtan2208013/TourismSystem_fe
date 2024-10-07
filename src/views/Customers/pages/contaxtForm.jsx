import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/sendMail', formData)
            .then(response => {
                alert(response.data); // Success message
            })
            .catch(error => {
                console.error("There was an error sending the email!", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Subject:</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit">Send Email</button>
        </form>
    );
};

export default ContactForm;
