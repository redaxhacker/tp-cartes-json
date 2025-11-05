import React from 'react';
import { View, Text, Image, StyleSheet ,TouchableOpacity, Linking } from 'react-native';

export default function CardItem({ title, description, image,url,}) {
  const openWebsite = () => {
    Linking.openURL(url);
  };
    return (
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.cover} />
        <View style={styles.body}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{description}</Text>
          <TouchableOpacity style={styles.button} onPress={openWebsite}>
            <Text style={styles.buttonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 16,
      elevation: 3, // ombre Android
    },
    cover: { width: '100%', height: 150 },
    body: { padding: 12 },
    title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
    desc: { color: '#555' },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 8,
      alignSelf: 'flex-start'
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold'
    }
  
  });
  