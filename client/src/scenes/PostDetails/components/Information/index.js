import React from 'react'
import { connect } from 'react-redux'
import { getTime } from '../../../../services/utils/util';
import {
    upVotePost,
    downVotePost,
    disableEditing,
    enableEditing
} from '../../../../services/redux/actions/index';

const Information = props => {
    const {
        selected,
        downVotePost,
        upVotePost,
        toggleEditing,
        disableEditing,
        enableEditing,
    } = props;

    const {
        id,
        title,
        body,
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
            <h1 className="details--title" >
                {
                    handleToggle(
                        "Olá",
                        title
                    )
                }
            </h1>

            <span> {getTime(timestamp)} </span>

            <p>
                {body}
            </p>

            <section>
                <button onClick={() => downVotePost(id)} > - </button>
                {voteScore}
                <button onClick={() => upVotePost(id)} > + </button>
            </section>

            <button onClick={() => handleEdit()} >
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
        </section>
    )
}

function mapStateToProps({ selected, toggleEditing }) {
    return { selected, toggleEditing }
}

function mapDispatchToProps(dispatch) {
    return {
        downVotePost: (postId) => dispatch(downVotePost(postId)),
        upVotePost: (postId) => dispatch(upVotePost(postId)),
        disableEditing: () => dispatch(disableEditing()),
        enableEditing: (who, object) => dispatch(enableEditing(who, object)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Information)