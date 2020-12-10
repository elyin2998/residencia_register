import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import firebase from '../database/firebase'
import {ListItem, Avatar} from 'react-native-elements'

const ActivityList = (props) => {
    const [actividades , setActivitidades] = useState([])


    useEffect (() => {
        firebase.db.collection('activities').onSnapshot ( querySnapshot=>{
            const actividades = [];

            querySnapshot.docs.forEach(doc => {
                const {nombre , dia, estudiante} = doc.data()
                actividades.push({
                    id: doc.id,
                    nombre,
                    dia,
                    estudiante,
                })
            });

            setActivitidades (actividades)
        });
    },[])


    return (
        <ScrollView>
            <Button title="Agregar Actividad" onPress={() => 
            props.navigation.navigate('CreateActivityScreen')}
            />

            {actividades.map((actividad) =>{
                    return(
                        <ListItem key= {actividad.id} bottomDivider onPress={() =>{
                            props.navigation.navigate('ActivityDetailScreen', {
                                actividadId: actividad.id
                            })
                        }}>
                        <ListItem.Chevron/>
                        <Avatar source={{uri: 'https://image.freepik.com/vector-gratis/limpiadores-productos-limpieza-servicio-limpieza_18591-52068.jpg'}}/>
                        <ListItem.Content>

                        <ListItem.Title>{actividad.nombre}</ListItem.Title>
                        <ListItem.Subtitle>{actividad.dia}</ListItem.Subtitle>
                        <ListItem.Subtitle>{actividad.estudiante}</ListItem.Subtitle>

                       

                        </ListItem.Content>
                        </ListItem>

                        
                    );

            })}
        </ScrollView>
       
    )
}

export default ActivityList
