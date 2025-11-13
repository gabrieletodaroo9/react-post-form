
export default function Form({ handleFormData, formData }) {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="authorField" className="form-label">Author</label>
                <input type="text" name="author" className="form-control" id="authorField" placeholder="Inserisci un autore..." value={formData.author} onChange={handleFormData} />
            </div>
            <div className="mb-3">
                <label htmlFor="titleField" className="form-label">Title</label>
                <input type="text" name="title" className="form-control" id="titleField" placeholder="Inserisci un titolo" value={formData.title} onChange={handleFormData} />
            </div>
            <div className="mb-3">
                <label htmlFor="bodyField" className="form-label">Body</label>
                <textarea name="body" className="form-control" id="bodyField" placeholder='Scrivi la trama...' rows={3} value={formData.body} onChange={handleFormData}></textarea>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <div className="form-check ">
                    <input name="public" className="form-check-input" type="checkbox" checked={formData.public} id="checkPublic" onChange={handleFormData} />
                    <label className="form-check-label" htmlFor="checkPublic">Public</label>
                </div>
                <div>
                    <button type='submit' className='btn btn-dark'>Send Form</button>
                </div>
            </div>
        </form>
    )
}