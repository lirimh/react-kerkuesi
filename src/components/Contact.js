import React from 'react'

const Contact = () => {
    return (
        <div className="contact-us">
            <main>
                <h1>Kontakto</h1>
                <form name="contact" method="POST" data-netlify="true">
                <div className="form">
                    <label>Your Name: <input type="text" name="name" /></label>   
                </div>
                <div className="form">
                    <label>Your Email: <input type="email" name="email" /></label>
               </div>
               <div className="form">
                    <label>Message: <textarea name="message"></textarea></label>
                </div>
                <p>
                    <button  className="form-button" type="submit">Send</button>
                </p>
                </form>
            </main>
        </div>
    )
}

export default Contact
