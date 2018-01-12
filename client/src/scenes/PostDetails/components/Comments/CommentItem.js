import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { getTime } from '../../../../services/utils/util'
import {
    downVoteComment,
    upVoteComment,
    enableEditing,
    disableEditing
} from '../../../../services/redux/actions'

let CommentItem = props => {
    const {
        downVoteComment,
        upVoteComment,
        toggleEditing,
        disableEditing,
        enableEditing,
        handleSubmit,
    } = props;

    const {
        id,
        body,
        author,
        voteScore,
        timestamp
    } = props.data;

    const handleEdit = () => {
        const { object } = toggleEditing

        if (toggleEditing.comment === false) {
            enableEditing('comment', props.data)
        } else if (toggleEditing.comment === true && object.id === id) {
            disableEditing('comment')
        }
    }

    const editComment = (editable, content) => {
        return toggleEditing.comment && (toggleEditing.object.id === id) ? editable : content
    }

    console.log(props)

    return (
        <section className="comment__item" >
            <form onSubmit={handleSubmit} >
                <h3>
                    {
                        editComment(
                            <Field
                                name="body"
                                component="input"
                                type="text"
                                placeholder="Escreva o seu comentário"
                                className="comment__add--input"
                            />,
                            body
                        )
                    }
                </h3>

                <p> {author} </p>

                <section>
                    <button onClick={() => downVoteComment(id)} >
                        -
                    </button>

                    {voteScore}

                    <button onClick={() => upVoteComment(id)} >
                        +
                    </button>
                </section>

                <button onClick={() => handleEdit()} type={editComment("button", "submit")} >
                    {editComment("Salvar", "Editar")}
                </button>

                <span> {getTime(timestamp)} </span>
            </form>
        </section>
    )
}

function mapStateToProps({ toggleEditing, initialValues }) {
    const { object } = toggleEditing;

    return { toggleEditing, initialValues: { ...object } }
}

function mapDispatchToProps(dispatch) {
    return {
        downVoteComment: (commentID) => dispatch(downVoteComment(commentID)),
        upVoteComment: (commentID) => dispatch(upVoteComment(commentID)),
        enableEditing: (who, object) => dispatch(enableEditing(who, object)),
        disableEditing: (who, object) => dispatch(disableEditing(who, object)),
    }
}

CommentItem = reduxForm({
    form: 'editComment',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(CommentItem)

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)