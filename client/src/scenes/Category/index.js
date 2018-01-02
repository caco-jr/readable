import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPostsCategory } from '../../services/redux/actions';
import CardPost from '../../components/CardPost'

class Category extends Component {
    componentDidMount() {
        const { category } = this.props.match.params;

        this.props.getPostsCategory(category);
    }

    componentWillReceiveProps(nextProps) {
        const { category } = this.props.match.params;
        const { params } = nextProps.match;

        if (params.category !== category) {
            this.props.getPostsCategory(params.category);
        }
    }

    render() {
        console.log(this.props);
        const { postsCategory } = this.props.categories

        return (
            <section className="container" >
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

function mapStateToProps({ categories }) {
    return { categories }
}

function mapDispatchToProps(dispatch) {
    return {
        getPostsCategory: (category) => dispatch(getPostsCategory(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);