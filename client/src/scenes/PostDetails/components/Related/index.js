import React, { PureComponent, Fragment } from 'react'
import { getPostsCategory } from '../../../../services/redux/actions'
import { connect } from 'react-redux'

class Related extends PureComponent {
    componentWillReceiveProps(nextProps) {
        const { category } = this.props;

        if (nextProps.category !== category) {
            this.props.getPostsCategory(nextProps.category)
        }
    }

    render() {
        console.log(this.props)
        const { postsCategory } = this.props.categories

        return (
            <Fragment>
                {
                    Object.keys(postsCategory).length > 0 && (
                        <section className="card" >
                            <h2> Posts Relacionados </h2>
                        </section>
                    )
                }
            </Fragment>
        )
    }
}

function mapStateToProps({ categories }) {
    return { categories }
}

function mapDispatchToProps(dispatch) {
    return {
        getPostsCategory: (category) => dispatch(getPostsCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Related);