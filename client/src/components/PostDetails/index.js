import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setSelected } from '../../services/redux/actions';

class PostDetails extends PureComponent {
    render() {
        console.log(this.props)
        const { body } = this.props.selected.post;

        return (
            <h1>
                {body}
            </h1>
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