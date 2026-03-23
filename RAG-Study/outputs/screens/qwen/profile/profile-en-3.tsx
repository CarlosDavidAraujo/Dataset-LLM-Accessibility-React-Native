import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
  });

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert('Profile Updated', 'Your profile information has been saved successfully.');
  };

  const handleChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const onAccessibilityAction = (event: any) => {
    switch (event.nativeEvent.actionName) {
      case 'activate':
        setIsEditing(!isEditing);
        break;
      case 'escape':
        if (isEditing) setIsEditing(false);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View 
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel="Profile Section"
        style={styles.headerContainer}
      >
        <Text style={styles.title}>My Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://placehold.co/100x100' }}
          style={styles.profileImage}
          accessible={true}
          accessibilityLabel="Profile Picture"
          accessibilityRole="image"
        />
        <TouchableOpacity
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Change profile picture"
          onPress={() => Alert.alert('Feature', 'Upload new picture functionality would open here')}
          style={styles.changePhotoButton}
        >
          <Text style={styles.changePhotoText}>Change Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text 
            nativeID="firstNameLabel" 
            style={styles.label}
          >
            First Name
          </Text>
          <TextInput
            style={[styles.input, isEditing ? styles.editableInput : styles.readonlyInput]}
            value={profileData.firstName}
            onChangeText={(value) => handleChange('firstName', value)}
            editable={isEditing}
            accessible={true}
            accessibilityLabel="First Name"
            accessibilityLabelledBy="firstNameLabel"
            accessibilityRole={isEditing ? "text" : undefined}
            selectTextOnFocus={isEditing}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text 
            nativeID="lastNameLabel" 
            style={styles.label}
          >
            Last Name
          </Text>
          <TextInput
            style={[styles.input, isEditing ? styles.editableInput : styles.readonlyInput]}
            value={profileData.lastName}
            onChangeText={(value) => handleChange('lastName', value)}
            editable={isEditing}
            accessible={true}
            accessibilityLabel="Last Name"
            accessibilityLabelledBy="lastNameLabel"
            accessibilityRole={isEditing ? "text" : undefined}
            selectTextOnFocus={isEditing}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text 
            nativeID="emailLabel" 
            style={styles.label}
          >
            Email Address
          </Text>
          <TextInput
            style={[styles.input, isEditing ? styles.editableInput : styles.readonlyInput]}
            value={profileData.email}
            onChangeText={(value) => handleChange('email', value)}
            editable={isEditing}
            keyboardType="email-address"
            autoCapitalize="none"
            accessible={true}
            accessibilityLabel="Email Address"
            accessibilityLabelledBy="emailLabel"
            accessibilityRole={isEditing ? "text" : undefined}
            selectTextOnFocus={isEditing}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text 
            nativeID="phoneLabel" 
            style={styles.label}
          >
            Phone Number
          </Text>
          <TextInput
            style={[styles.input, isEditing ? styles.editableInput : styles.readonlyInput]}
            value={profileData.phone}
            onChangeText={(value) => handleChange('phone', value)}
            editable={isEditing}
            keyboardType="phone-pad"
            accessible={true}
            accessibilityLabel="Phone Number"
            accessibilityLabelledBy="phoneLabel"
            accessibilityRole={isEditing ? "text" : undefined}
            selectTextOnFocus={isEditing}
          />
        </View>
      </View>

      <View 
        style={styles.buttonContainer}
        accessible={true}
        accessibilityActions={[
          { name: 'activate', label: isEditing ? 'Save profile' : 'Edit profile' },
          { name: 'escape', label: 'Cancel editing' }
        ]}
        onAccessibilityAction={onAccessibilityAction}
      >
        <TouchableOpacity
          style={[styles.button, isEditing ? styles.saveButton : styles.editButton]}
          onPress={() => isEditing ? handleSave() : setIsEditing(true)}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={isEditing ? "Save Profile" : "Edit Profile"}
        >
          <Text style={styles.buttonText}>
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Text>
        </TouchableOpacity>

        {isEditing && (
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => setIsEditing(false)}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Cancel Editing"
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  changePhotoButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
  },
  changePhotoText: {
    color: '#333',
    fontWeight: '600',
  },
  formContainer: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  readonlyInput: {
    backgroundColor: '#f9f9f9',
    color: '#666',
  },
  editableInput: {
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  editButton: {
    backgroundColor: '#007AFF',
  },
  saveButton: {
    backgroundColor: '#34C759',
  },
  cancelButton: {
    backgroundColor: '#FF9500',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
