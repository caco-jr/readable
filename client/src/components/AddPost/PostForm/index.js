import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

let PostForm = props => {
    const { handleSubmit, categories } = props

    console.log(props)

    return (
        <section className="post__add">
            <form onSubmit={handleSubmit} >
                <Field
                    name="author"
                    component="input"
                    type="text"
                    placeholder="Enzo da Silva"
                    className="post__add--input" />

                <Field
                    name="title"
                    component="input"
                    type="text"
                    placeholder="ex: Vida secreta das capivaras"
                    className="post__add--input" />

                <Field
                    name="body"
                    component="input"
                    type="text"
                    className="post__add--input" />

                <section>
                    {
                        categories.allCategories.map(
                            (category, index) => (
                                <label key={index} >
                                    <Field
                                        name="category"
                                        component="input"
                                        type="radio"
                                        value={category.name}
                                        className="post__add--input" />

                                    {category.name}
                                </label>
                            )
                        )
                    }
                </section>

                <button
                    type="submit"
                    className="post__add--button" >
                    Postar
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