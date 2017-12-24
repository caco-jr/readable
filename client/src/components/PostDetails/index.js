import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setSelected } from '../../services/redux/actions';
import Comments from '../Comments'

class PostDetails extends PureComponent {
    render() {
        const { body } = this.props.selected.post;

        return (
            <section className="details" >
                <h1>
                    {body}
                </h1>

                <Comments />
            </section>
        )
    }
}

function mapStateToProps({ selected }) {
    return { selected }
}

function mapDispatchToProps({ dispatch }) {
    return {
        setSelected: (who, object) => dispatch(setSelected(who, object))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);