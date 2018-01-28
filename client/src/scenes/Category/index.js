import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPosts } from '../../services/redux/actions/post';
import { getPostsCategory } from '../../services/redux/actions/category';
import CardPost from '../../components/CardPost'
import OrderBy from '../../components/OrderBy'

class Category extends Component {
    componentDidMount() {
        const { category } = this.props.match.params;
        const { getPostsCategory, posts, getPosts } = this.props;

        getPostsCategory(category);

        if (Object.keys(posts).length === 0) {
            getPosts();
        }
    }

    componentWillReceiveProps(nextProps) {
        const { getPostsCategory } = this.props
        const { category } = this.props.match.params;
        const { params } = nextProps.match;

        if (params.category !== category) {
            getPostsCategory(params.category);
        }
    }

    render() {
        const { postsCategory } = this.props.categories;

        return (
            <section className="container post__list" >
                <OrderBy page="Category" />

                <section className="row">
                    {
                        Object.keys(postsCategory).length > 0 && (
                            postsCategory.map(
                                post => (
                                    <CardPost post={post} key={post.id} />
                                )
                            )
                        )
                    }
                </section>
            </section>
        )
    }
}

function mapStateToProps({ categories, posts }) {
    return { categories, posts }
}

function mapDispatchToProps(dispatch) {
    return {
        getPostsCategory: (category) => dispatch(getPostsCategory(category)),
        getPosts: () => dispatch(getPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);