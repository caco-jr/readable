import React from 'react'
import { connect } from 'react-redux'
import { getTime } from '../../../../services/utils/util';
import { upVotePost, downVotePost } from '../../../../services/redux/actions/index';

const Information = props => {
    const {
        id,
        title,
        body,
        voteScore,
        category,
        timestamp,
    } = props.selected.post;

    const { downVotePost, upVotePost } = props;

    console.log(props)

    return (
        <section className="details card" >
            <h1 className="details--title" >
                {title}
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

            <span className="details--category"> {category} </span>
        </section>
    )
}

function mapStateToProps({ selected }) {
    return { selected }
}

function mapDispatchToProps(dispatch) {
    return {
        downVotePost: (postId) => dispatch(downVotePost(postId)),
        upVotePost: (postId) => dispatch(upVotePost(postId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Information)