import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getPosts, setSelected, downVotePost, upVotePost } from '../../services/redux/actions';
import Comments from './components/Comments';

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
        const { title, body, voteScore, id } = this.props.selected.post;
        const { downVotePost, upVotePost } = this.props;

        return (
            <section className="details" >
                <h1>
                    {title}
                </h1>

                <p>
                    {body}
                </p>

                <section>
                    <button onClick={() => downVotePost(id)} > - </button>
                    {voteScore}
                    <button onClick={() => upVotePost(id)} > + </button>
                </section>

                <Comments />
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
        upVotePost: (postID) => dispatch(upVotePost(postID)),
        downVotePost: (postID) => dispatch(downVotePost(postID)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);