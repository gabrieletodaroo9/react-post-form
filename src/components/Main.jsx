import Form from "./Form";

export default function Main({ handleFormData, formData }) {
    return (
        <main>
            <div className="container">
                <Form handleFormData={handleFormData} formData={formData} />
            </div >
        </main >
    )
}