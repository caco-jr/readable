import React from 'react'
import { connect } from 'react-redux'
import { getTime } from '../../../../services/utils/util';
import { Field, reduxForm } from 'redux-form'
import CustomInput from '../../../../components/CustomInput'
import {
    upVotePost,
    downVotePost,
    disableEditing,
    enableEditing,
    deletePost
} from '../../../../services/redux/actions/index';

let Information = props => {
    const {
        selected,
        handleSubmit,
        downVotePost,
        upVotePost,
        toggleEditing,
        disableEditing,
        enableEditing,
        deletePost,
        history
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

    const handleDelete = () => {
        deletePost(id);
        history.goBack()
    }

    return (
        <section className="details card" >
            <form onSubmit={handleSubmit} >

                {
                    handleToggle(
                        <Field
                            name="title"
                            component={CustomInput}
                            label="Título:"
                            type="text"
                            className="details--title"
                        />,
                        <h1 className="details--title" > {title} </h1>
                    )
                }

                <span> {getTime(timestamp)} </span>

                {
                    handleToggle(
                        <Field
                            name="body"
                            component={CustomInput}
                            textarea={true}
                            className="details--body" />,
                        <p className="details--body">
                            {body}
                        </p>
                    )
                }

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

                <button type="button" onClick={() => handleDelete()} >
                    Apagar
                </button>

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
        deletePost: (postId) => dispatch(deletePost(postId)),
    }
}

Information = reduxForm({
    form: 'postEdit',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(Information)

export default connect(mapStateToProps, mapDispatchToProps)(Information)