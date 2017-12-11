import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../../../services/redux/actions'
import Post from '../../../../components/Post'

class PostList extends PureComponent {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props;

        return (
            <section className="container post__list">
                <section className="row">
                    {
                        Object.keys(posts).length > 0 && (
                            posts.allPosts.map(
                                post => <Post post={post} key={post.id} />
                            )
                        )
                    }
                </section>
            </section>
        )
    }
}

function mapStateToProps({ posts }) {
    return { posts }
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);