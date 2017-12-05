import React, { PureComponent } from 'react'

class Vote extends PureComponent {
    state = {
        count: 0
    }

    down = () => {
        const { count } = this.state;

        return count > 0 && this.setState({ count: count - 1 })
    }

    up = () => {
        const { count } = this.state;

        return this.setState({ count: count + 1 })
    }

    render() {
        const { count } = this.state;

        return (
            <section>
                <button onClick={this.down} > - </button>
                {count}
                <button onClick={this.up} > + </button>
            </section>
        )
    }
}

export default Vote;