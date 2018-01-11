import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddComment = props => {
    const { handleSubmit } = props;
    console.log(props)

    return (
        <section className="comment__add">
            <form onSubmit={handleSubmit} >
                <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="João da Silva"
                    className="comment__add--input"
                />

                <Field
                    name="comment"
                    component="input"
                    type="text"
                    placeholder="Escreva o seu comentário"
                    className="comment__add--input"
                />

                <button
                    type="submit"
                    className="comment__add--button" >
                    Comentar
                </button>
            </form>
        </section>
    )
}

export default reduxForm({
    form: 'commentForm'
})(AddComment);