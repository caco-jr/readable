import React from 'react'
import { connect } from 'react-redux'
import { getTime } from '../../../../services/utils/util'
import {
    downVoteComment,
    upVoteComment,
    enableEditing,
    disableEditing
} from '../../../../services/redux/actions'

const CommentItem = props => {
    const {
        downVoteComment,
        upVoteComment,
        toggleEditing,
        disableEditing,
        enableEditing,
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

    const editComment = ( editable, content ) => {
        return toggleEditing.comment && (toggleEditing.object.id === id) ? editable : content
    }

    console.log(props)

    return (
        <section className="comment__item" >
            <h3>
                {/* TODO: Mudar o "Editavel" pelo campo do redux form */}
                {
                    editComment(
                        "Editavel",
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

            <button onClick={() => handleEdit()} >
                { editComment("Salvar", "Editar") }
            </button>

            <span> {getTime(timestamp)} </span>
        </section>
    )
}

function mapStateToProps({ toggleEditing }) {
    return { toggleEditing }
}

function mapDispatchToProps(dispatch) {
    return {
        downVoteComment: (commentID) => dispatch(downVoteComment(commentID)),
        upVoteComment: (commentID) => dispatch(upVoteComment(commentID)),
        enableEditing: (who, object) => dispatch(enableEditing(who, object)),
        disableEditing: (who, object) => dispatch(disableEditing(who, object)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)