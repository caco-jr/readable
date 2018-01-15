import React, { PureComponent, Fragment } from 'react'
import ReactModal from 'react-modal'
import Modal from 'react-modal';
import PostForm from './PostForm'
import uuid from 'uuid'

class AddPost extends PureComponent {
    constructor() {
        super()
        this.state = {
            showModal: false
        };

        Modal.setAppElement('body')

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    submit = (values) => {
        const post = {
            id: uuid().split("-").join(""),
            author: values.author,
            title: values.title,
            body: values.body,
            timestamp: Date.now(),
            category: values.category,
            voteScore: 0,
            deleted: false,
            commentCount: 0,
        }

        // if (values.id === undefined) {
        //     addComment(comment);
        // } else {
        //     editComment(comment)
        // }
    }

    render() {
        return (
            <Fragment>
                <button
                    onClick={this.handleOpenModal}
                    className="addpost--button">
                    +
                </button>

                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="addpost--modal Modal"
                    overlayClassName="Overlay">
                    <h2> Novo post </h2>

                    <PostForm onSubmit={this.submit} />

                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
            </Fragment>
        );
    }
}

export default AddPost