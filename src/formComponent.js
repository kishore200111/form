import React, { useState } from 'react';
import {View,Text, TextInput, StyleSheet, Pressable} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearFormData, setFormData } from './redux/action';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import FormReducer from './redux/reducer'



const FormComponent=()=>{
    const dispatch=useDispatch();
   const formValue=useSelector(state=>state.FormReducer.form);
    
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    console.log("Formvalue Main",formValue)
    
    const submitBtn=()=>{
            dispatch(setFormData({name,email}))
            console.log('formValue:', formValue);
            console.log('name:', name);
            console.log('email:', email);
    }
    const clearBtn=()=>{
            dispatch(clearFormData());
            setName('');
            setEmail('');
    }
    
    return(
        <View style={styles.container}>
            <Text>Redux Form</Text>
            <TextInput  style={styles.input} placeholder='Enter Your name' onChangeText={setName} value={name} ></TextInput>
            <TextInput style={styles.input} placeholder='Enter Your email' onChangeText={setEmail} value={email}></TextInput>
            <View style={{flexDirection:'row',gap:20}}>
                <Pressable style={styles.btn} onPress={()=>{submitBtn()}}>
                    <Text style={{textAlign:'center'}}>Submit</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={()=>{clearBtn()}}>
                    <Text style={{textAlign:'center'}}>Clear</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
        fontSize:20,
        fontWeight:'700',
        color:'darkpink'
    },
    input:{
        borderWidth:2,
        backgroundColor:'skyblue',
        color:'yellow',
        width:wp('40%'),
        height:hp('5%'),
        borderRadius:10,
        marginTop:5
    },
    btn:{
        backgroundColor:'magenta',
        padding:5,
        borderRadius:10,
        width:wp('15%'),
        height:hp('3%'),
        marginTop:5,
    }
})

export default FormComponent;