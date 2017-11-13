import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../../services/redux/actions'

class Navbar extends PureComponent {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { categories } = this.props;

        return (
            <nav>
                {
                    Object.keys(categories).length > 0 && (
                        categories.allCategories.map(
                            (categorie, index) => (
                                <NavLink key={index} to={categorie.path} >
                                    <span>
                                        {categorie.name}
                                    </span>
                                </NavLink>
                            )
                        )
                    )
                }
            </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);