import React, { PureComponent, Fragment } from 'react'
import ReactModal from 'react-modal'
import Modal from 'react-modal';
import uuid from 'uuid';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { addPost, openModal, closeModal } from '../../services/redux/actions/index';
import iconPost from './images/newpost-icon.svg'

class AddPost extends PureComponent {
    constructor() {
        super()

        Modal.setAppElement('body')
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

        this.props.addPost(post);
    }

    render() {
        const { closeModal, openModal, modal } = this.props;

        return (
            <Fragment>
                <button
                    onClick={() => openModal()}
                    className="addpost--button">
                    <img
                        className="addpost--button-icon"
                        src={iconPost}
                        alt="Novo Post"
                        title="Novo Post" />
                </button>

                <ReactModal
                    isOpen={modal.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={() => closeModal()}
                    className="addpost--modal Modal"
                    overlayClassName="Overlay">

                    <h2 className="addpost--title" > Novo post </h2>

                    <PostForm onSubmit={this.submit} />

                    <button onClick={() => closeModal()}>
                        Fechar
                    </button>
                </ReactModal>
            </Fragment>
        );
    }
}

function mapStateToProps({ modal }) {
    return { modal }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: (newPost) => dispatch(addPost(newPost)),
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)