import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../../../../services/session/actions'

class Categories extends PureComponent {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { categories } = this.props;

        return (
            <div>
                {
                    Object.keys(categories).length > 0 && (
                        categories.allCategories.map(
                            (categorie, index) => (
                                <span key={index} > {categorie.name} </span>
                            )
                        )
                    )
                }
            </div>
        )
    }
}

function mapStateToProps({ categories }) {
    return {
        categories,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCategories: () => dispatch(getCategories()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);