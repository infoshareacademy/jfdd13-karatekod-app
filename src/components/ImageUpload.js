import React, { Component } from 'react';
import firebase, { storage } from '../firebase';
import styles from '../styles/ImageUpload.module.css'

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
            buttons: true,
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this
            .handleUpload
            .bind(this);
    }

    componentDidMount() {
        this.checkIfUserHasProfilePicture()
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState({ image },
                () => {
                    this.handleUpload()
                    this.setState({ image: null })
                });
        }
    }
    handleUpload = () => {
        const { image } = this.state;
        if (image) {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState({ progress })
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        console.log(url);
                        this.setState({ url })
                        this.updateProfilePicture(url)
                        this.setState({ buttons: false })
                    })
                });
        }
    }
    updateProfilePicture = (url) => {
        const currentUser = firebase.auth().currentUser
        const id = currentUser.uid
        firebase.database().ref(`/users/${id}/profilePicture`).set(url)
    }
    checkIfUserHasProfilePicture = async () => {
        const currentUser = firebase.auth().currentUser
        const id = currentUser.uid
        const dataSnapshot = await firebase.database().ref(`/users/${id}/profilePicture`).once('value')
        const profilePictureUrl = dataSnapshot.val()
        if (profilePictureUrl) {
            this.setState({
                url: profilePictureUrl
            })
        }
    }

    render() {
        const showProgress = this.state.progress !== 0 && this.state.progress !== 100
        return (
            <>
                <div className={styles.profilPictureEdit}>
                    <div className={styles.profilePicture} >
                        <img src={this.state.url || "https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg"} alt="Profile pic" className={styles.userImg} />
                    </div>
                </div>
                <div className={styles.loadPicSec} >
                    <div className={styles.uploadButtons}>
                        <label for="file" className={styles.inputFileLabel}>Choose new Profile Picture</label>
                        <input className={styles.inputFileHidden} type="file" onChange={this.handleChange} accept="image/*" style={{ width: '100%' }} name="file" id="file" />
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillBig}><p className={styles.skillsSmallsP}>Username:</p>
                            <h2 className={styles.nameTitle} style={{ color: 'white' }}>{firebase.auth().currentUser.displayName}</h2>
                        </div>
                        <div className={styles.skillBig}><p className={styles.skillsSmallsP}>Username:</p>
                            <h2 className={styles.nameTitleFirst} style={{ color: 'white' }}>{firebase.auth().currentUser.displayName}</h2>
                        </div>
                        <div className={styles.skillBig}><p className={styles.skillsSmallsP}>Username:</p>
                            <h2 className={styles.nameTitle} style={{ color: 'white' }}>{firebase.auth().currentUser.displayName}</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ImageUpload;