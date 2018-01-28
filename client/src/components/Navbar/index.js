import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../../services/redux/actions/category'
import home from './images/home.svg'

class Navbar extends PureComponent {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { categories } = this.props;

        return (
            <nav className="navbar" >
                <section className="container" >
                    <ul className="navbar__list" >
                        <li key="homeMenu" className="navbar__list--item">
                            <NavLink
                                className="navbar__list--item-link"
                                to="/">
                                <img src={home} alt="home" width="20px" />
                            </NavLink>
                        </li>

                        {
                            Object.keys(categories).length > 0 && (
                                categories.allCategories.map(
                                    (categorie, index) => (
                                        <li key={index} className="navbar__list--item">
                                            <NavLink
                                                className="navbar__list--item-link"
                                                to={`/${categorie.path}`} >

                                                <span>
                                                    {categorie.name}
                                                </span>

                                            </NavLink>
                                        </li>
                                    )
                                )
                            )
                        }
                    </ul>
                </section>
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