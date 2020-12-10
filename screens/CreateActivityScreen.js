import React, {useState} from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'
import firebase from '../database/firebase'


const CreateActivityScreen = (props) => {

    const [state, setState] = useState({
        nombre:"",
        dia:"",
        estudiante:"",
    });

    const handleChangeText = (nombre, value) => {
        setState ({...state, [nombre]: value})
    }

    const saveNewActivity = async() => {
        if (state.nombre === ''){
            alert('por favor escriba un nombre')
        } else{
            try {
                await firebase.db.collection('activities').add({
                    nombre: state.nombre,
                    dia: state.dia,
                    estudiante: state.estudiante,
                })
                props.navigation.navigate("ActivityList");
                
            } catch (error) {
                console.log('error')
            }
        }
    }

    return (
       <ScrollView style= {styles.container}>

           <View style= {styles.imputGroup}>
               <TextInput 
               placeholder="Nombre actividad"
               onChangeText={(value) => handleChangeText ("nombre", value)}
               />

           </View>
           <View style= {styles.imputGroup}>
               <TextInput placeholder="Dias"
               onChangeText={(value) => handleChangeText ("dia", value)}
               />

           </View>
           <View style= {styles.imputGroup}>
               <TextInput placeholder="Estudiantes"
               onChangeText={(value) => handleChangeText ("estudiante", value)}
               />
           </View>
           <View>
               <Button title="Guardar" onPress={() => saveNewActivity()}/>
           </View>
          
       </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35,

    },
    imputGroup:{
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#77b31d'
    }
})

export default CreateActivityScreen
