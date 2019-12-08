import React, { Component } from 'react';
import firebase, { storage } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'bloomer'; 
import 'bulma/css/bulma.min.css';
import styles from '../styles/BookImageUpload.module.css'

class BookImageUpload extends Component {
    notify = () => toast("Wrong file type");
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
            // progress function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress})
        
        },
        (error) => {
            // error function
            console.log(error)
        },
        () => {
            // complete function
            storage.ref('bookcovers').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url})
                this.updateCoverPicture(url)
            })
        });
    }

    updateCoverPicture = (url) => {
        console.log(url);
        // 1. check what user are you logged in
        const currentUser = firebase.auth().currentUser
        const id = currentUser.uid
        this.props.onBookImageUpload(url)



        // 2. get the url and update book profile

    }

    checkIfBookHasCoverPicture = async () => {
        // 1. get current user id
        const currentUser = firebase.auth().currentUser
        const id = currentUser.uid

        // 2. fetch current book cover picture
        const dataSnapshot = await firebase.database().ref(`/booksList/${id}/coverPicture`).once('value')
        const coverPictureUrl = dataSnapshot.val()

        // 3. if there is a picture, use it
        if (coverPictureUrl) {
            // 4. update state of the component
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
                    {/* <p>Upload book cover picture</p> */}
                    <input type="file" onChange={this.handleChange}/>
                    <Button isColor="danger" style={{borderRadius: '20px'}} type="button" onClick={this.handleUpload}>Upload</Button>
                    <div>
                        {/* <img src={this.state.url} alt="Book cover pic" height= "100" width= "80"/> */}
                        {showProgress && <progress value={this.state.progress} max="100"/>}
                    </div>
                </div>
                <ToastContainer 
                 hideProgressBar={true}
                 position="bottom-right"
                 />
            </div>
        )
    }
}

export default BookImageUpload;