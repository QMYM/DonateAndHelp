import React from 'react';
import { ImageEditor, Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import axios from 'axios'
export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

componentDidMount(){
  axios.get('https://donatandhelp.herokuapp.com/getImageDonor')
      .then(response => {
        this.fetchDonorData()
        const posts = response['data']
        this.setState({
          image: posts.image
          
        })
      })
      .catch(function (error) {
        console.log(error)
      })
}

  render() {
    let { image } = this.state;

    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200, resizeMode: 'contain' }} />}
      </View>
    );
  }

  _pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    
    if (result.cancelled) {
      console.log('got here');
      return;
    }

    let resizedUri = await new Promise((resolve, reject) => {
      ImageEditor.cropImage(result.uri,
        {
          offset: { x: 0, y: 0 },
          size: { width: result.width, height: result.height },
          displaySize: { width: 50, height: 50 },
          resizeMode: 'contain',
        },
        (uri) => resolve(uri),
        () => reject(),
      );
    });
    
    // this gives you a rct-image-store URI or a base64 image tag that
    // you can use from ImageStore
    console.log("hello world", "yusur jackel mohammed qays!! mais Alo alo!!!@!@")
    this.setState({image:resizedUri})
  };
}