import axios from "axios"

export default function Form() {
    return (
        <form>
            <div class="mb-3">
                <label for="authorField" class="form-label">Author</label>
                <input type="text" class="form-control" id="authorField" placeholder="Inserisci un autore..." />
            </div>
            <div class="mb-3">
                <label for="titleField" class="form-label">Title</label>
                <input type="text" class="form-control" id="titleField" placeholder="Inserisci un titolo" />
            </div>
            <div class="mb-3">
                <label for="bodyField" class="form-label">Body</label>
                <textarea class="form-control" id="bodyField" placeholder='Scrivi la trama...' rows={3}> </textarea>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <div class="form-check ">
                    <input class="form-check-input" type="checkbox" value="" id="checkPublic" />
                    <label class="form-check-label" for="checkPublic">Public</label>
                </div>
                <div>
                    <button type='submit' className='btn btn-dark'>Send Form</button>
                </div>
            </div>
        </form>
    )
}