import ContactForm from "../components/ContactForm.jsx";

function ContactPage() {
    return (
        <>
            <section>
                <div>
                    <h2 style={{paddingTop: 20, paddingBottom:20, textAlign:"center"}}>Zapraszam do kontaktu</h2>
                </div>
                <div style={{height: 500, width: 500, textAlign: "right"}}>
                    <ContactForm/>
                </div>
            </section>
        </>
    )
}

export default ContactPage;