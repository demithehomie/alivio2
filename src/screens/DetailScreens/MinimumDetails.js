import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, useWindowDimensions } from 'react-native';



const MinimumDetails = () => {

    //const {height} = useWindowDimensions();

    const slidingimages = [
        {
            image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\ALIVIO (EX HRT)\\ALIVIO - CODING FILES\\alivio-second-version-2\\alivio2\\assets\\images\\CEVIN\\DOMINGO\\1.jpg"),
            text: "Todo Domingo, às 19hs" ,
        },
        {
            image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\ALIVIO (EX HRT)\\ALIVIO - CODING FILES\\alivio-second-version-2\\alivio2\\assets\\images\\CEVIN\\DOMINGO\\2.jpg"),
            text: "Todo Domingo, às 19hs" ,
        },
        {
            image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\ALIVIO (EX HRT)\\ALIVIO - CODING FILES\\alivio-second-version-2\\alivio2\\assets\\images\\CEVIN\\DOMINGO\\3.jpg"),
            text: "Todo Domingo, às 19hs" ,
        },
        {
            image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\ALIVIO (EX HRT)\\ALIVIO - CODING FILES\\alivio-second-version-2\\alivio2\\assets\\images\\CEVIN\\DOMINGO\\4.jpg"),
            text: "Todo Domingo, às 19hs" ,
        },
    ]    
  
return (
    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >
    
    {slidingimages.map((item, index) => (

        <View key={index} style={styles.container}>
        <ScrollView horizontal={true} >
        
        <Image 
            source= {item.image}
            style={[styles.imge, /*{height: height * 0.4}*/]} 
            resizeMode="cover"
        />
    
        </ScrollView>
        </View>

    ))}
    </ScrollView>
  )
}

export default MinimumDetails;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: "flex-end",
      width: 370,
      height: 370,
      //justifyContent: 'center',
      
   
    },
    imge: {
        margin: 18,
        borderRadius: 20,
        maxWidth: '100%',
        maxHeight: '100%',
       // alignSelf: 'center',
       
        
    }, 
  });
  