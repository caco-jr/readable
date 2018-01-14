import React from 'react'
import { connect } from 'react-redux'
import { getTime } from '../../../../services/utils/util';
import { Field, reduxForm } from 'redux-form'
import {
    upVotePost,
    downVotePost,
    disableEditing,
    enableEditing
} from '../../../../services/redux/actions/index';

let Information = props => {
    const {
        selected,
        downVotePost,
        upVotePost,
        toggleEditing,
        disableEditing,
        enableEditing,
        handleSubmit,
    } = props;

    const {
        id,
        title,
        body,
        author,
        voteScore,
        category,
        timestamp,
    } = props.selected.post;

    const handleEdit = () => {
        const { object } = toggleEditing

        if (toggleEditing.post === false) {
            disableEditing()
            enableEditing('post', selected.post)
        } else if (toggleEditing.post === true && object.id === id) {
            disableEditing()
        }
    }

    const handleToggle = (enable, disable) => {
        return toggleEditing.post && (toggleEditing.object.id === id) ? enable : disable
    }

    return (
        <section className="details card" >
            <form onSubmit={handleSubmit} >
                <h1 className="details--title" >
                    {
                        handleToggle(
                            <Field
                                name="title"
                                component="input"
                                type="text"
                                className="details--title-input"
                            />,
                            title
                        )
                    }
                </h1>

                <span> {getTime(timestamp)} </span>

                <p className="details--body">
                    {
                        handleToggle(
                            <Field
                                name="body"
                                component="input"
                                type="text"
                                className="details--body-input"
                            />,
                            body
                        )
                    }
                </p>

                <p> {author} </p>

                <section>
                    <button onClick={() => downVotePost(id)} > - </button>
                    {voteScore}
                    <button onClick={() => upVotePost(id)} > + </button>
                </section>

                <button
                    onClick={() => handleEdit()}
                    type={handleToggle("button", "submit")} >
                    {
                        handleToggle(
                            "Salvar",
                            "Editar"
                        )
                    }
                </button>

                {
                    handleToggle(
                        <button type="button" onClick={() => disableEditing('post')} >
                            Cancelar
                        </button>,
                        null
                    )
                }

                <span className="details--category"> {category} </span>
            </form>
        </section>
    )
}

function mapStateToProps({ selected, toggleEditing, initialValues }) {
    const { object } = toggleEditing;

    return { selected, toggleEditing, initialValues: { ...object } }
}

function mapDispatchToProps(dispatch) {
    return {
        downVotePost: (postId) => dispatch(downVotePost(postId)),
        upVotePost: (postId) => dispatch(upVotePost(postId)),
        disableEditing: () => dispatch(disableEditing()),
        enableEditing: (who, object) => dispatch(enableEditing(who, object)),
    }
}

Information = reduxForm({
    form: 'postEdit',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(Information)

export default connect(mapStateToProps, mapDispatchToProps)(Information)