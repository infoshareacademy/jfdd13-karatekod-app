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
            buttons: false
        }
        this.handleChange = this
            .handleChange
            .bind(this);
            this.handleUpload = this
            .handleUpload
            .bind(this);
        this.showUpload = this.showUpload.bind(this)
    }
    showUpload () {
        const {buttons} = this.state
       this.setState({
            
           buttons: !buttons
       })
        
    }

    componentDidMount() {
        this.checkIfUserHasProfilePicture()
    }

    handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
    handleUpload = () => {
        const {image} = this.state;
        if (image) { 
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress})
        },
        (error) => {
            console.log(error)
        },
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url})
                this.updateProfilePicture(url)
                this.setState({buttons:false})
            })
        });
    } }

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
                    <img src={this.state.url || "https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg"} alt="Profile pic" height= "200" width= "200" className={styles.userImg}/>
                </div>
                
            <div className={styles.backOfProfilePic} onClick={this.showUpload}>Click here to upload image</div>
             </div>
             <div className={styles.loadPicSec} >
                    
             { (this.state.buttons) ? (
             <div className={styles.uploadButtons}>
             <input type="file" onChange={this.handleChange} accept="image/*"/>
             <button className={styles.uploadButton} onClick={this.handleUpload}>Upload</button>
             </div>): (null)
             }   
             
         </div>
         </>
        )
    }
}

export default ImageUpload;