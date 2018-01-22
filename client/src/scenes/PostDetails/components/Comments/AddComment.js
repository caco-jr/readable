import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomInput from '../../../../components/CustomInput'

const AddComment = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className="comment__add">
            <h3 className="comment__add--title"> Deixe um comentário </h3>

            <Field
                name="author"
                label="Nome*"
                component={CustomInput}
                type="text"
                placeholder="João da Silva"
                className="comment__add--field" />

            <Field
                name="body"
                component={CustomInput}
                textarea={true}
                label="Seu comentário*"
                rows="3"
                placeholder="Adicionar um comentário..."
                className="comment__add--field" />

            <button
                type="submit"
                className="comment__add--button" >
                Enviar o comentário
            </button>
        </form>
    )
}

//Post side validation
function validate(values) {
    const errors = {};

    if (!values.author || values.author.trim() === '') {
        errors.author = 'Campo obrigatório';
    }

    if (values.author && values.author.length > 10) {
        errors.author = 'Too big, max 10 characters';
    }

    if (!values.body || values.body.trim() === '') {
        errors.body = 'Campo obrigatório';
    }

    return errors;
}

export default reduxForm({
    form: 'commentForm',
    validate,
})(AddComment);