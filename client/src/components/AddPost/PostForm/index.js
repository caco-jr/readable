import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PostForm = props => {
    const { handleSubmit } = props

    return (
        <section className="post__add">
            <form onSubmit={handleSubmit} >
                <Field
                    name="author"
                    component="input"
                    type="text"
                    placeholder="João da Silva"
                    className="post__add--input"
                />

                <Field
                    name="title"
                    component="input"
                    type="text"
                    placeholder="ex: Vida secreta das capivaras"
                    className="post__add--input"
                />

                <Field
                    name="body"
                    component="input"
                    type="text"
                    placeholder="Escreva o seu comentário"
                    className="post__add--input"
                />

                <button
                    type="submit"
                    className="post__add--button" >
                    Comentar
                </button>
            </form>
        </section>
    )
}


export default reduxForm({
    form: 'postForm'
})(PostForm);