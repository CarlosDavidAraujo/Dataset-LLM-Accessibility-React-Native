import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ProfileViewScreen = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [profile, setProfile] = React.useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  return (
    <View style={styles.container} accessible={true}>
      {/* Profile Picture with proper contrast and size */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: "https://example.com/profile.jpg" }}
          style={styles.profilePicture}
          accessibilityLabel="Profile picture of John Doe"
          accessibilityRole="image"
        />
      </View>

      {/* Profile Fields with proper labels and contrast */}
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text nativeID="firstNameLabel" style={styles.label}>
            First Name
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profile.firstName}
              onChangeText={(text) =>
                setProfile({ ...profile, firstName: text })
              }
              accessibilityLabelledBy="firstNameLabel"
              accessibilityLabel="First name input"
              autoComplete="name-given"
            />
          ) : (
            <Text style={styles.textValue}>{profile.firstName}</Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text nativeID="lastNameLabel" style={styles.label}>
            Last Name
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profile.lastName}
              onChangeText={(text) =>
                setProfile({ ...profile, lastName: text })
              }
              accessibilityLabelledBy="lastNameLabel"
              accessibilityLabel="Last name input"
              autoComplete="name-family"
            />
          ) : (
            <Text style={styles.textValue}>{profile.lastName}</Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text nativeID="emailLabel" style={styles.label}>
            Email
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profile.email}
              onChangeText={(text) => setProfile({ ...profile, email: text })}
              accessibilityLabelledBy="emailLabel"
              accessibilityLabel="Email input"
              autoComplete="email"
              keyboardType="email-address"
            />
          ) : (
            <Text style={styles.textValue}>{profile.email}</Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text nativeID="phoneLabel" style={styles.label}>
            Phone
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profile.phone}
              onChangeText={(text) => setProfile({ ...profile, phone: text })}
              accessibilityLabelledBy="phoneLabel"
              accessibilityLabel="Phone number input"
              autoComplete="tel"
              keyboardType="phone-pad"
            />
          ) : (
            <Text style={styles.textValue}>{profile.phone}</Text>
          )}
        </View>
      </View>

      {/* Action Buttons with proper size and labels */}
      <View style={styles.buttonContainer}>
        {isEditing ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleSave}
            accessibilityLabel="Save profile changes"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsEditing(true)}
            accessibilityLabel="Edit profile information"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#333333", // High contrast border
  },
  formContainer: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#333333", // Dark gray for good contrast on white
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#000000", // Black text for best contrast
    backgroundColor: "#FFFFFF",
  },
  textValue: {
    fontSize: 16,
    color: "#000000", // Black text for best contrast
    paddingVertical: 12,
  },
  buttonContainer: {
    marginTop: 16,
  },
  button: {
    backgroundColor: "#0066CC", // Blue button with white text for good contrast
    minHeight: 48,
    minWidth: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  buttonText: {
    color: "#FFFFFF", // White text on blue background
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileViewScreen;
