import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,Image
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';


export default class TransactionsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: '',
      buttonState: 'normal',
      scannedBookId:'',
      scannedStudentId:'',
    };
  }

  getCamerPermission = async (id) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      hasCameraPermissions: status === 'granted',
      buttonState: id,
      scanned:false
    });
  };

  handleBarCodeScanned = async (type, data) => {
    this.setState({
      scanned: true,
      scannedData: data,
      buttonState: 'normal',
    });
  };

  render() {
    const hasCameraPermissions = this.state.hasCameraPermissions;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;
    if (buttonState !== 'normal' && hasCameraPermissions) {
      return (
        <BarCodeScanner
          onBarcodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    } else if (buttonState === 'normal') {
      return (
        <View style={styles.view}>
        <Image source={require('assets/booklogo.jpg')} style={{widt:200, height:200}} />
          <View style={styles.inputview}>
            <TextInput style={styles.input} placeholder="Book ID" value={this.state.scannedBookId}></TextInput>
            <TouchableOpacity style={styles.button} onPress={()=>{
              this.getCamerPermission("BookId")
            }}>
              <Text syle={styles.buttontext}> Scan </Text>
            </TouchableOpacity>
          </View>
           <View style={styles.inputview}>
            <TextInput style={styles.input} placeholder="Student ID" value={this.state.scannedBookId}></TextInput>
            <TouchableOpacity style={styles.button} onPress={()=>{
              this.getCamerPermission("BookId")
            }}>
              <Text syle={styles.buttontext}> Scan </Text>
            </TouchableOpacity>
          </View>
        </View>
        // <View style={styles.view}>
        //   <Text style={styles.text}>
        //     {hasCameraPermissions
        //       ? this.state.scannedData
        //       : 'Allow Camera Permissions'}
        //   </Text>
        //   <TouchableOpacity
        //     style={styles.button}
        //     onPress={this.getCamerPermission}>
        //     <Text style={styles.buttontext}>Scan QR Code </Text>
        //   </TouchableOpacity>
        // </View>
      );
    }
    //else{
    return <Text style={styles.text}>Nothing</Text>;
    // }
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'MV Boli',
    color: 'red',
    alignSelf: 'center',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems:'center',
  },
  inputview: {
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    width: 200,
    height: 50,
    borderWidth: 3,
    borderRightWidth:0,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 0,
    width: 50,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:3,
    borderLeftWidth:0,

  },
  buttontext: {
    color: 'white',
    alignText: 'center',
    fontWeight: 'bold',
  },
});
