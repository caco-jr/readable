import React, { PureComponent } from 'react'
import { getPosts } from '../../services/api/ReadableAPI';
import { connect } from 'react-redux';

class PostDetails extends PureComponent {
    render() {
        console.log(this.props);

        return (
            <h1>
                Olá
            </h1>
        )
    }
}

function mapStateToProps({ posts }) {
    return { posts }
}

// TODO: Pegar o Post Id, do Item da Lista Clicado.
function mapDispatchToProps({ dispatch }) {
    return {
        getPosts: () => dispatch(getPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);