import Form from "./Form";

export default function Main({ handleFormData, formData, handleSubmit }) {
    return (
        <main>
            <div className="container">
                <Form handleFormData={handleFormData} formData={formData} handleSubmit={handleSubmit} />
            </div >
        </main >
    )
}