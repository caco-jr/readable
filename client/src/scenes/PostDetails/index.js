import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPosts } from '../../services/redux/actions/post';
import { setSelected } from '../../services/redux/actions/selected';
import DetailBox from './components/Detail';
import CommentBox from './components/Comments';

class PostDetails extends PureComponent {
    componentDidMount() {
        const { post } = this.props.selected;

        if (Object.keys(post).length === 0) {
            this.props.getPosts();
        }
    }

    componentWillReceiveProps(nextProps) {
        const { posts } = this.props;

        if (Object.keys(nextProps.posts).length !== Object.keys(posts).length) {
            this.setPostSelected(nextProps.posts);
        }

        if (Object.keys(posts).length > 0) {
            this.setPostSelected(nextProps.posts);
        }
    }

    setPostSelected(posts) {
        const { id } = this.props.match.params;
        const { setSelected, selected, history } = this.props;

        const post = posts.allPosts.map(post => post).filter(post => id === post.id);

        post.length === 0 && history.push("/404")

        if (Object.keys(selected.post).length === 0 && post.length > 0) {
            setSelected('post', ...post);
        } else if (Object.keys(selected.post).length > 0) {
            const postChange = post.shift();

            postChange !== selected.post && setSelected('post', postChange);
        }
    }

    render() {
        return (
            <section className="container">
                <DetailBox />

                <CommentBox />
            </section>
        )
    }
}

const mapStateToProps = ({ selected, posts }) => ({ selected, posts })

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts()),
    setSelected: (who, object) => dispatch(setSelected(who, object)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));