import React from 'react'

const Contact = () => {
    return (
        <div className="contact-us">
            <main>
                <h1>Kontakto</h1>
                <form
                name="contact v1" method="post" data-netlify="true" onSubmit="submit"
                >
                    <input type="hidden" name="form-name" value="contact v1"></input>
                    <div className="form">
                        <label>First Name <br/>
                            <input type="text" name="first-name"></input>
                        </label>
                    </div>
                    <div className="form">
                        <label htmlFor="email">Email <br/>
                            <input id="email" type="email" name="email"></input>
                        </label>
                    </div>
                    <div className="form">
                        <label>Any Comments <br/>
                            <textarea name="comments"></textarea>
                        </label>
                    </div>
                    <button className="form-button" type="submit">Submit</button>
                </form>
            </main>
        </div>
    )
}

export default Contact
