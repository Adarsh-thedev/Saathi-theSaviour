import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Alert } from 'react-native';

export default function Padestrian() {
    const padestrian = () =>{
        Alert.alert(
         ''
      )
   }
    return ( 

<View style = {styles.container}>
<View> 
	<Text style = {styles.text3}>
		       Saathi
	</Text>
    </View>
    <View>
     
        <Text style = {styles.text2}>
           --The savior
        </Text>
        <Text style = {styles.text4}>
          You're a -
        </Text>

    </View>
 <TouchableOpacity onPress={()=>padestrian()}>

            <Text style = {styles.text}>
               PADESTRAIN
            </Text>
         </TouchableOpacity>
<TouchableOpacity>
            <Text style = {styles.text1}>
               VEHICLE DRIVER
            </Text>
         </TouchableOpacity>
      </View>

    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    text: {
        height: 100,
        width: 280,
        borderWidth: 1,
        
        padding: 25,
	color: 'white',
        borderColor: 'black',
        backgroundColor: '#550000',
        alignContent: 'center',
	borderRadius:10, 
	textAlign: 'center',
	fontWeight: 'bold',
	fontSize: 30,

    },
 text1: {
        height: 100,
        width: 280,
        borderWidth: 1,
        marginTop: 100,
        borderRadius:10, 
        padding: 25,
	color: 'white',
        borderColor: 'black',
        backgroundColor: '#550000',
        alignContent: 'center',
    	textAlign: 'center',
    	fontWeight: 'bold',
    	fontSize: 30,

    },
    text2: {
        alignContent: 'center',
    },
text3: {
        height: 100,
        width: 280,
        fontFamily: 'Roboto',
	    marginTop: 100,
        alignContent: 'center',
    	textAlign: 'center',
    	fontWeight: 'bold',
    	fontSize: 60,
        color: '#550000',
       


    },
text4: {
        
fontSize: 35,
fontWeight: 'bold',
fontFamily: 'Roboto',
	

    }


})
