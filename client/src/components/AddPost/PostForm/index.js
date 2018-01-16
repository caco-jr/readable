import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import CustomInput from '../../CustomInput'

let PostForm = ({ handleSubmit, categories }) => {
    return (
        <section className="addpost__form">
            <form onSubmit={handleSubmit} >
                <Field
                    name="author"
                    component={CustomInput}
                    type="text"
                    label="Nome*"
                    placeholder="Enzo da Silva"
                    className="addpost__form" />

                <Field
                    name="title"
                    component={CustomInput}
                    label="Título*"
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
                    type="submit"
                    className="addpost__form--button" >
                    Publicar
                </button>
            </form>
        </section>
    )
}

function mapStateToProps({ categories }) {
    return { categories }
}

PostForm = reduxForm({
    form: 'postForm'
})(PostForm);

export default connect(mapStateToProps)(PostForm)