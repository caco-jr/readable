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
                    <input
                        type="text"
                        value={value}
                        onChange={this.handleChange} />

                    <button
                        type="submit"
                        onClick={this.handleSubmit} >
                        Comentar
                    </button>
                </form>
            </section>
        )
    }
}

export default AddComment;