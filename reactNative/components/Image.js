import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';

   const options = {
  title: 'Select a photo',
  takePhotoButtonTitle: 'Take a photo',
  chooseFromLibraryButtonTitle: 'Choose from gallery',
  quality: 1
};


class Image extends React.Component {

 constructor(){
   super()
   this.state = {
     imageSource: null
   }


 }


  selectPhoto(){

    ImagePicker.showImagePicker(options, (response) => {
      console.log("mais is here",ImagePicker)
  // console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
   console.log('ImagePicker Error: ', response.error);
  }
  else {
    let source = { uri: response.uri };
    this.setState({
      imageSource: source
    });
  }
});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>mais</Text>
        <TouchableOpacity onPress={this.selectPhoto}> 
        <Text>Select</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});

module.exports = Image;