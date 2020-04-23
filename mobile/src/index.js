import React, { useEffect, useState} from 'react';

import {SafeAreaView,FlatList,Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import api from './services/api';

export default function app(){
    const [repositories, setRepositories] = useState([]);

    useEffect(()=> {
        api.get('repositories').then(response => {
            console.log(response.data);
            setRepositories(response.data);
        });
    },[]);

    async function handleAddRepository(){
        const response = await api.post('repositories',{
            id: "eeee",
            url: "https://github.com/josepholiveira",
            title: `Desafio mobile ${Date.now()}`,
            techs: ["React", "Node.js"]
        });
        setRepositories([...repositories,response.data]);
    }

    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"></StatusBar>
        <SafeAreaView style={styles.conteiner}>
        <FlatList  
            data={repositories}
            keyExtractor={repository => repository.id}
            renderItem={({item: repository}) => (
                <Text style={styles.repository} >{repository.title}</Text>
            )}
        />
        <TouchableOpacity 
            onPress={handleAddRepository} 
            activeOpacity={0.6} 
            style={styles.button}>
            <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
        </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    repository: {
        color: '#FFF',
        fontSize: 30,        
    },
    button: {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});