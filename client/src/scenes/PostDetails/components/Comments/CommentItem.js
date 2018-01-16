import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { getTime } from '../../../../services/utils/util'
import DeleteButton from '../DeleteButton'
import {
    downVoteComment,
    upVoteComment,
    enableEditing,
    disableEditing,
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
    } = props.comment;

    const handleEdit = () => {
        const { object } = toggleEditing

        if (toggleEditing.comment === false) {
            disableEditing()
            enableEditing('comment', props.comment)
        } else if (toggleEditing.comment === true && object.id === id) {
            disableEditing()
        }
    }

    const handleToggle = (enable, disable) => {
        return toggleEditing.comment && (toggleEditing.object.id === id) ? enable : disable
    }

    return (
        <section className="comment__item" >
            <form onSubmit={handleSubmit} >
                <h3>
                    {
                        handleToggle(
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
                    <button type="button" onClick={() => downVoteComment(id)} >
                        -
                    </button>

                    {voteScore}

                    <button type="button" onClick={() => upVoteComment(id)} >
                        +
                    </button>
                </section>

                <button
                    onClick={() => handleEdit()}
                    type={handleToggle("button", "submit")} >
                    {handleToggle("Salvar", "Editar")}
                </button>

                {
                    handleToggle(
                        <button type="button" onClick={() => disableEditing('comment')} >
                            Cancelar
                        </button>,
                        null
                    )
                }

                <span> {getTime(timestamp)} </span>

                <DeleteButton component="comment" id={id} />
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
        disableEditing: () => dispatch(disableEditing()),
        enableEditing: (who, object) => dispatch(enableEditing(who, object)),
    }
}

CommentItem = reduxForm({
    form: 'commentEdit',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(CommentItem)

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)