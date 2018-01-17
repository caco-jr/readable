import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { getTime } from '../../../../services/utils/util'
import DeleteButton from '../DeleteButton'
import Vote from '../../../../components/Vote'
import {
    enableEditing,
    disableEditing,
} from '../../../../services/redux/actions'

let CommentItem = props => {
    const {
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
                                className="comment__item--input"
                            />,
                            body
                        )
                    }
                </h3>

                <p> {author} </p>

                <Vote
                    id={id}
                    className="comment__item--vote"
                    component="comment" >
                    {voteScore}
                </Vote>

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