import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { getTime } from '../../../../services/utils/util'
import DeleteButton from '../DeleteButton'
import Vote from '../../../../components/Vote'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faClock, faUser, faSave, faEdit } from '@fortawesome/fontawesome-free-regular';
import {
    enableEditing,
    disableEditing,
} from '../../../../services/redux/actions/toggleEditing'

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
                <h3 className="comment__item--title">
                    {
                        handleToggle(
                            <Field
                                name="body"
                                component="input"
                                type="text"
                                placeholder="Escreva o seu comentário"
                                className="comment__item--title-input"
                            />,
                            body
                        )
                    }
                </h3>

                <span className="comment__item--author">
                    <FontAwesomeIcon
                        className={`details__form--author-icon`}
                        icon={faUser} />
                    {author}
                </span>

                <span className="comment__item--time">
                    <FontAwesomeIcon
                        className={`details__form--time-icon`}
                        icon={faClock} />
                    {getTime(timestamp)}
                </span>

                <div className="comment__item--buttons" >
                    <Vote
                        id={id}
                        className="comment__item--vote"
                        component="comment" >
                        {voteScore}
                    </Vote>

                    <button
                        onClick={() => handleEdit()}
                        className="comment__item--button save"
                        type={handleToggle("button", "submit")} >
                        {handleToggle(
                            <span>
                                <FontAwesomeIcon
                                    className={`comment__item--button-icon`}
                                    icon={faSave} />
                                Salvar
                        </span>,
                            <span>
                                <FontAwesomeIcon
                                    className={`comment__item--button-icon`}
                                    icon={faEdit} />
                                Editar
                        </span>
                        )}
                    </button>

                    {
                        handleToggle(
                            <button
                                type="button"
                                className="comment__item--button"
                                onClick={() => disableEditing('comment')} >
                                Cancelar
                            </button>,
                            null
                        )
                    }

                    <DeleteButton
                        id={id}
                        component="comment"
                        text="Apagar Comentário"
                        className="comment__item--button" />
                </div>
            </form>
        </section>
    )
}

//Post side validation
function validate(values) {
    const errors = {};

    if (!values.body || values.body.trim() === '') {
        errors.body = 'Campo obrigatório';
    }

    return errors;
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
    keepDirtyOnReinitialize: true,
    validate,
})(CommentItem)

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)