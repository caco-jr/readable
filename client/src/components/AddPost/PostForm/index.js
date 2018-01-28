import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import CustomInput from '../../CustomInput'
import { closeModal } from '../../../services/redux/actions/modal';

let PostForm = ({ handleSubmit, categories, closeModal }) => {
    return (
        <section className="addpost__form">
            <form onSubmit={handleSubmit} >
                <Field
                    name="author"
                    component={CustomInput}
                    type="text"
                    label="Seu Nome*"
                    placeholder="Enzo da Silva"
                    className="addpost__form" />

                <Field
                    name="title"
                    component={CustomInput}
                    label="Título do Post*"
                    type="text"
                    placeholder="ex: Vida secreta das capivaras"
                    className="addpost__form" />

                <section className="addpost__form--categories" >
                    {
                        categories.allCategories.map(
                            (category, index) => (
                                <label key={index} >
                                    <Field
                                        name="category"
                                        component="input"
                                        type="radio"
                                        value={category.name}
                                        className="addpost__form--input" />

                                    {category.name}
                                </label>
                            )
                        )
                    }
                </section>

                <Field
                    name="body"
                    component={CustomInput}
                    type="text"
                    textarea={true}
                    rows="10"
                    className="addpost__form" />

                <button
                    type="button"
                    className="addpost__form--button cancel"
                    onClick={() => closeModal()}>
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="addpost__form--button publish" >
                    Publicar
                </button>
            </form>
        </section>
    )
}

//Post side validation
function validate(values) {
    const errors = {};

    if (!values.title || values.title.trim() === '') {
        errors.title = 'Campo obrigatório';
    }

    if (values.title && values.title.length > 25) {
        errors.title = 'Too big, max 25 characters';
    }

    if (!values.author || values.author.trim() === '') {
        errors.author = 'Campo obrigatório';
    }

    if (values.author && values.author.length > 25) {
        errors.author = 'Too big, max 10 characters';
    }

    if (!values.body || values.body.trim() === '') {
        errors.body = 'Campo obrigatório';
    }

    return errors;
}

function mapStateToProps({ categories }) {
    return { categories }
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

PostForm = reduxForm({
    form: 'postForm',
    validate
})(PostForm);

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)