import React from 'react'

const Contact = () => {
    return (
        <div className="contact-us">
            <main>
                <h1>Kontakto</h1>
                <form name="contact" method="POST" data-netlify="true">
                    <input tupe="hidden" name="form-name" value="contact-form"/>
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
                </form>
            </main>
        </div>
    )
}

export default Contact
