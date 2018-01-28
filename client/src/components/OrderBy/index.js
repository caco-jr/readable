import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { orderBy } from '../../services/redux/actions/post';
import { orderByPostsCategory } from '../../services/redux/actions/category';

class OrderBy extends PureComponent {
    state = {
        order: false
    }

    handleToggle = () => {
        const { order } = this.state;
        const { orderBy, orderByPostsCategory, page } = this.props;

        this.setState({ order: !this.state.order });

        page === "Home" ? orderBy(order) : orderByPostsCategory(order);
    }

    render() {
        const { order } = this.state

        return (
            <Fragment>
                <span className="orderBy--title"> Order by: </span>

                <button
                    className={`orderBy ${!order ? 'selected' : ''}`}
                    onClick={() => this.handleToggle()}
                    disabled={!order} >
                    Score
                </button>

                <button
                    className={`orderBy ${order ? 'selected' : ''}`}
                    onClick={() => this.handleToggle()}
                    disabled={order} >
                    Recent
                </button>
            </Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        orderBy: (order) => dispatch(orderBy(order)),
        orderByPostsCategory: (order) => dispatch(orderByPostsCategory(order)),
    }
}

export default connect(null, mapDispatchToProps)(OrderBy);