import Form from "./Form";
import Message from "./Message";

export default function Main({ handleFormData, formData, handleSubmit, message }) {
    return (
        <main>
            <div className="container">
                {message && (
                    <Message message={message} />
                )}
                <Form handleFormData={handleFormData} formData={formData} handleSubmit={handleSubmit} />
            </div >
        </main >
    )
}