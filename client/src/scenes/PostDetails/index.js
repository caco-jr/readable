import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getPosts, setSelected, editPost } from '../../services/redux/actions';
import Information from './components/Information'
import CommentBox from './components/Comments';

class PostDetails extends PureComponent {
    componentDidMount() {
        const { post } = this.props.selected;

        if (Object.keys(post).length === 0) {
            this.props.getPosts();
        }
    }

    componentWillReceiveProps({ posts }) {
        if (Object.keys(posts).length !== Object.keys(this.props.posts).length) {
            this.setPostSelected(posts)
        }
    }

    setPostSelected(posts) {
        const { id } = this.props.match.params;
        const { setSelected, selected } = this.props;

        if (Object.keys(selected.post).length === 0) {
            const post = posts.allPosts.map(post => post).filter(post => id === post.id)
            setSelected('post', ...post)
        }
    }

    submit = (values) => {
        const { editPost, selected, setSelected } = this.props

        const post = {
            id: values.id,
            timestamp: values.timestamp,
            title: values.title || selected.post.title,
            body: values.body || selected.post.body,
            author: values.author,
            category: values.category,
            comments: values.comments || []
        }

        editPost(post)
        setSelected('post', post)
    }

    render() {
        return (
            <section className="container">
                <Information onSubmit={this.submit} history={this.props.history} />

                <CommentBox />
            </section>
        )
    }
}

function mapStateToProps({ selected, posts }) {
    return { selected, posts }
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts()),
        setSelected: (who, object) => dispatch(setSelected(who, object)),
        editPost: (post) => dispatch(editPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);