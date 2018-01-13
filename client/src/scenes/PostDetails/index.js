import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getPosts, setSelected } from '../../services/redux/actions';
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

    render() {
        const { commentCount, id } = this.props.selected.post;

        return (
            <section className="container">
                <Information />

                {commentCount > 0 && <CommentBox parentId={id} />}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);