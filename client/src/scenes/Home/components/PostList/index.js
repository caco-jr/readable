import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../../../services/redux/actions/post'
import CardPost from '../../../../components/CardPost'
import OrderBy from '../../../../components/OrderBy'

class PostList extends PureComponent {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props;

        return (
            <section className="container post__list">
                <OrderBy page="Home" />

                <section className="row">
                    {
                        Object.keys(posts).length > 0 && (
                            posts.allPosts.map(
                                post => <CardPost post={post} key={post.id} />
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