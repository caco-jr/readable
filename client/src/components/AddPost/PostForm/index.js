import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

const customInput = ({
    input,
    label,
    type,
    className,
    textarea = false,
    rows = 5,
    placeholder,
    meta: { touched, error, warning }
}) => (
        <div className={className} >
            <label className={`${className}--label`}>{label}</label>
            {
                textarea ? (
                    <textarea
                        placeholder={placeholder}
                        className={`${className}--input`}
                        {...input}
                        rows={rows} />
                ) : (
                        <input
                            className={`${className}--input`}
                            {...input}
                            type={type}
                            placeholder={placeholder} />
                    )
            }
            {touched &&
                ((error && <span className="errorInput">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    )

let PostForm = ({ handleSubmit, categories }) => {
    return (
        <section className="addpost__form">
            <form onSubmit={handleSubmit} >
                <Field
                    name="author"
                    component={customInput}
                    type="text"
                    label="Nome"
                    placeholder="Enzo da Silva"
                    className="addpost__form" />

                <Field
                    name="title"
                    component={customInput}
                    label="Título"
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
                    component={customInput}
                    type="text"
                    textarea={true}
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