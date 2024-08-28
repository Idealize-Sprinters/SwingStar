import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const categories = {
  Women: {
    Saree: [
      { id: '1', name: 'Saree 1', image: require('../assets/frock.png') },
      { id: '2', name: 'Saree 2', image: require('../assets/frock.png') },
    ],
    Frock: [
      { id: '3', name: 'Frock 1', image: require('../assets/frock.png') },
      { id: '4', name: 'Frock 2', image: require('../assets/frock.png') },
    ],
    Skirt: [
      { id: '5', name: 'Skirt 1', image: require('../assets/frock.png') },
      { id: '6', name: 'Skirt 2', image: require('../assets/frock.png') },
    ],
  },
  Men: {
    Shirt: [
      { id: '7', name: 'Shirt 1', image: require('../assets/frock.png') },
      { id: '8', name: 'Shirt 2', image: require('../assets/frock.png') },
    ],
    Trouser: [
      { id: '9', name: 'Trouser 1', image: require('../assets/frock.png') },
      { id: '10', name: 'Trouser 2', image: require('../assets/frock.png') },
    ],
    Jacket: [
      { id: '11', name: 'Jacket 1', image: require('../assets/frock.png') },
      { id: '12', name: 'Jacket 2', image: require('../assets/frock.png') },
    ],
  },
  Kids: {
    Dress: [
      { id: '13', name: 'Dress 1', image: require('../assets/frock.png') },
      { id: '14', name: 'Dress 2', image: require('../assets/frock.png') },
    ],
    Trouser: [
      { id: '15', name: 'Trouser 1', image: require('../assets/frock.png') },
      { id: '16', name: 'Trouser 2', image: require('../assets/frock.png') },
    ],
    Jacket: [
      { id: '17', name: 'Jacket 1', image: require('../assets/frock.png') },
      { id: '18', name: 'Jacket 2', image: require('../assets/frock.png') },
    ],
  },
};

const Order1 = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Women');
  const [activeSubCategory, setActiveSubCategory] = useState('Saree');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    setActiveSubCategory(Object.keys(categories[tab])[0]); // Set default subcategory for the new tab
  };

  const handleSubCategoryPress = (subCategory) => {
    setActiveSubCategory(subCategory);
  };

  const renderSubCategoryBoxes = () => {
    return (
      <View style={styles.subCategoryContainer}>
        {Object.keys(categories[activeTab]).map(subCategory => (
          <TouchableOpacity
            key={subCategory}
            style={styles.subCategoryBox}
            onPress={() => handleSubCategoryPress(subCategory)}
          >
            <Text style={styles.subCategoryText}>{subCategory}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScrollContainer}>
              {categories[activeTab][subCategory].map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.categoryBox}
                  onPress={() => navigation.navigate('ProductDetail', { categoryId: item.id })}
                >
                  <Image source={item.image} style={styles.categoryImage} />
                  <Text style={styles.categoryText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <FlatList
        data={categories[activeTab][activeSubCategory]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryBox}
            onPress={() => navigation.navigate('ProductDetail', { categoryId: item.id })}
          >
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your choice today</Text>
      <View style={styles.tabContainer}>
        {Object.keys(categories).map(tab => (
          <TouchableOpacity
            key={tab}
            style={activeTab === tab ? styles.activeTab : styles.inactiveTab}
            onPress={() => handleTabPress(tab)}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderSubCategoryBoxes()}
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#7D4B3E',
    paddingBottom: 5,
  },
  inactiveTab: {
    paddingBottom: 5,
  },
  tabText: {
    fontSize: 18,
    color: '#7D4B3E',
  },
  subCategoryContainer: {
    marginBottom: 20,
  },
  subCategoryBox: {
    marginVertical: 10,
  },
  subCategoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7D4B3E',
    marginBottom: 10,
  },
  imageScrollContainer: {
    flexDirection: 'row',
  },
  categoryBox: {
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  categoryImage: {
    width: 100,
    height: 100,
  },
  categoryText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Order1;
