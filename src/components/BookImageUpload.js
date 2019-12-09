import React, { Component } from 'react';
import firebase, { storage } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'bloomer'; 
import 'bulma/css/bulma.min.css';
import styles from '../styles/BookImageUpload.module.css'

class BookImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this
            .handleChange
            .bind(this);
            this.handleUpload = this
            .handleUpload
            .bind(this);
    }

    notify = () => toast("Wrong file type");

    componentDidMount() {
        this.checkIfBookHasCoverPicture()
    }

    handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
    handleUpload = () => {
        const {image} = this.state;
        if (image === null) {
            return;
        }

        const isFileImage = image && image['type'].split('/')[0] === 'image'
        if (!isFileImage) {
            this.notify()
    }

        const uploadTask = storage.ref(`bookcovers/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress})
        
        },
        (error) => {
            console.log(error)
        },
        () => {
            storage.ref('bookcovers').child(image.name).getDownloadURL().then(url => {
                this.setState({url})
                this.updateCoverPicture(url)
            })
        });
    }

    updateCoverPicture = (url) => {

        // 1. check what user are you logged in
        const currentUser = firebase.auth().currentUser
        const id = currentUser.uid

        this.props.onBookImageUpload(url)
    }

    checkIfBookHasCoverPicture = async () => {
        const currentUser = firebase.auth().currentUser
        const id = currentUser.uid
        const dataSnapshot = await firebase.database().ref(`/booksList/${id}/coverPicture`).once('value')
        const coverPictureUrl = dataSnapshot.val()
        if (coverPictureUrl) {
            this.setState({
                url: coverPictureUrl
            })
        }
    }

    render() {
        const showProgress = this.state.progress !== 0 && this.state.progress !== 100 
        return (
            <div>
                <div className={styles.imageUpload}>
                    <input type="file" onChange={this.handleChange}/>
                    <Button className={styles.imageUploadButton} isColor="danger" style={{borderRadius: '20px'}} type="button" onClick={this.handleUpload}>Upload</Button>
                    <div>
                        {showProgress && <progress value={this.state.progress} max="100"/>}
                    </div>
                </div>
                <ToastContainer 
                 hideProgressBar={true}
                 position="top-right"
                 />
            </div>
        )
    }
}

export default BookImageUpload;