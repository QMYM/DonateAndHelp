


// import PhotoUpload from 'react-native-photo-upload'
// import React from 'react';
// import ImagePicker from 'react-native-image-picker';
// import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


//   const options = {
//  title: 'Select a photo',
//   takePhotoButtonTitle: 'Take a photo',
//   chooseFromLibraryButtonTitle: 'Choose from gallery',
//   quality: 1
// };



// class ImagePickerExample extends React.Component {

//  constructor(){
//    super()
//    this.state = {
//      imageSource: null
//    }
// }

//   selectPhoto(){
//   ImagePicker.showImagePicker(options, (response) => {
//      // console.log("mais is here",ImagePicker)
//   // console.log('Response = ', response);
//   if (response.didCancel) {
//     return;
//   }
//   else if (response.error) {
//    console.log('ImagePicker Error: ', response.error);
//   }
//   else {
//     var source = { uri: response.uri };
//     this.setState({
//       imageSource: source
//     });
//   }
// });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//  <Image
//           style={{width: 50, height: 50}}
//           source={{uri:this.state.imageSource !==null ? this.state.imageSource : 
//   'https://img00.deviantart.net/93f6/i/2010/155/1/1/facebook_default_picture_by_adnac.jpg'}}
//         />
//   <TouchableOpacity onPress={this.selectPhoto.bind(this)}> 

//         <Text>Select</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

// }


// const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//  yusur:{
//   width:40,
//   height:40,

//  }
// });
 
// module.exports = ImagePickerExample;

//the end











// render(){
//   return(
//     <View>
//      <PhotoUpload
//    onPhotoSelect={avatar => {
//      if (avatar) {
//        console.log('Image base64 string: ', avatar)
//      }
//    }}
//  >
//    <Image
//      style={{
//        paddingVertical: 30,
//        width: 150,
//        height: 150,
//        borderRadius: 75
//      }}
//      resizeMode='cover'
//      source={{
//        uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
//      }}
//    /></PhotoUpload>
//    </View>


//     )
// }

// }












// module.exports = ImagePickerExample;







//   selectPhoto(){
//   ImagePicker.showImagePicker(options, (response) => {
//      // console.log("mais is here",ImagePicker)
//   // console.log('Response = ', response);
//   if (response.didCancel) {
//     return;
//   }
//   else if (response.error) {
//    console.log('ImagePicker Error: ', response.error);
//   }
//   else {
//     var source = { uri: response.uri };
//     this.setState({
//       imageSource: source
//     });
//   }
// });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//  <Image
//           style={{width: 50, height: 50}}
//           source={{uri:this.state.imageSource !==null ? this.state.imageSource : 
//   'https://img00.deviantart.net/93f6/i/2010/155/1/1/facebook_default_picture_by_adnac.jpg'}}
//         />
//   <TouchableOpacity onPress={this.selectPhoto.bind(this)}> 

//         <Text>Select</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }








// module.exports = ImagePickerExample;





//  import { View, Image } from 'react-native'
//  import PhotoUpload from 'react-native-photo-upload'
// import React from 'react';
// import ImagePicker from 'react-native-image-picker';


//     const options = {
//   title: 'Select a photo',
//   takePhotoButtonTitle: 'Take a photo',
//   chooseFromLibraryButtonTitle: 'Choose from gallery',
//   quality: 1
// };



// class ImagePickerExample extends React.Component {

//  constructor(){
//    super()
//    this.state = {
//      imageSource: null
//    }

// }
 
// render(){
//   return(
//     <View>
//      <PhotoUpload
//    onPhotoSelect={avatar => {
//      if (avatar) {
//        console.log('Image base64 string: ', avatar)
//      }
//    }}
//  >
//    <Image
//      style={{
//        paddingVertical: 30,
//        width: 150,
//        height: 150,
//        borderRadius: 75
//      }}
//      resizeMode='cover'
//      source={{
//        uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
//      }}
//    /></PhotoUpload>
//    </View>


//     )
// }

// }


// const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//  yusur:{
//   width:40,
//   height:40,

//  }
// });









// module.exports = ImagePickerExample;








