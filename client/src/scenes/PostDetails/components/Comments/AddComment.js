import React, { PureComponent } from 'react'

class AddComment extends PureComponent {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const { value } = this.state;

        return (
            <section className="comment__add">
                <form>
                    <textarea
                        placeholder="Escreva um comentário..."
                        value={value}
                        className="comment__add--input"
                        onChange={this.handleChange} />

                    <button
                        type="submit"
                        className="comment__add--button"
                        onClick={this.handleSubmit} >
                        Comentar
                    </button>
                </form>
            </section>
        )
    }
}

export default AddComment;