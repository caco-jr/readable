import React from 'react';
import Vote from '../Vote';
import { connect } from 'react-redux';
import { setSelected } from '../../services/redux/actions';

const Post = ({ post, setSelected, selected }) => {
    const {
        title,
        voteScore,
        body
    } = post;

    return (
        <section className="card__post" onClick={() => setSelected('post', post)} >
            <h3> {title} </h3>
            <p> {body} </p>
            <span> {`Número de comentários: ${voteScore}`} </span>
            <Vote />
        </section>
    )
}

function mapStateToProps({ selected }) {
    return { selected }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelected: (who, object) => dispatch(setSelected(who, object))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);