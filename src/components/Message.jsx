export default function Message({ message }) {
    return (
        <h2 className={`fw-bold text-center pb-3 ${message.type === "error" ? "text-danger" : "text-success"}`}>
            {message.text}
        </h2>
    )
}