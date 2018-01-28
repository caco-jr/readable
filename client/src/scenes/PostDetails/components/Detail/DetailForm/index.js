import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEdit, faSave } from '@fortawesome/fontawesome-free-regular'
import DeleteButton from '../../DeleteButton'
import CustomInput from '../../../../../components/CustomInput'
import {
    disableEditing,
    enableEditing,
} from '../../../../../services/redux/actions/toggleEditing';

let DetailForm = props => {
    const {
        selected,
        handleSubmit,
        toggleEditing,
        disableEditing,
        enableEditing,
    } = props;

    const {
        id,
        title,
        body,
    } = selected.post;

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
        <form className="details__form" onSubmit={handleSubmit} >

            {
                handleToggle(
                    <Field
                        name="title"
                        component={CustomInput}
                        label="Título:"
                        type="text"
                        className="details__form--title"
                    />,
                    <h1 className="details__form--title" > {title} </h1>
                )
            }

            {
                handleToggle(
                    <Field
                        name="body"
                        component={CustomInput}
                        textarea={true}
                        className="details__form--body" />,
                    <p className="details__form--body">
                        {body}
                    </p>
                )
            }

            {
                handleToggle(
                    <button
                        className="details__form--button cancel"
                        type="button"
                        onClick={() => disableEditing('post')} >
                        Cancelar
                    </button>,
                    null
                )
            }

            <button
                className="details__form--button save"
                onClick={() => handleEdit()}
                type={handleToggle("button", "submit")} >

                {
                    handleToggle(
                        <span>
                            <FontAwesomeIcon
                                className={`details__form--button-icon`}
                                icon={faSave} />
                            Salvar
                        </span>,
                        <span>
                            <FontAwesomeIcon
                                className={`details__form--button-icon`}
                                icon={faEdit} />
                            Editar
                        </span>
                    )
                }

            </button>

            <DeleteButton
                component="post"
                id={id}
                text="Apagar Post"
                className="details__form--button" />
        </form>
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

    if (!values.body || values.body.trim() === '') {
        errors.body = 'Campo obrigatório';
    }

    return errors;
}

function mapStateToProps({ selected, toggleEditing, initialValues }) {
    const { object } = toggleEditing;

    return { selected, toggleEditing, initialValues: { ...object } }
}

function mapDispatchToProps(dispatch) {
    return {
        disableEditing: () => dispatch(disableEditing()),
        enableEditing: (who, object) => dispatch(enableEditing(who, object)),
    }
}

DetailForm = reduxForm({
    form: 'postEdit',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    validate,
})(DetailForm)

export default connect(mapStateToProps, mapDispatchToProps)(DetailForm)