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

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="Profile screen"
    >
      {/* Profile Picture with proper contrast and size */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: "https://example.com/profile.jpg" }}
          style={styles.profilePicture}
          accessibilityLabel="Profile picture"
          accessibilityRole="image"
        />
      </View>

      {/* Profile Fields with proper labels and contrast */}
      <View style={styles.formContainer}>
        <Text nativeID="firstNameLabel" style={styles.label}>
          First Name
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.firstName}
            onChangeText={(text) => setProfile({ ...profile, firstName: text })}
            accessibilityLabelledBy="firstNameLabel"
            accessibilityLabel="First name input field"
            autoComplete="name-given"
          />
        ) : (
          <Text style={styles.value}>{profile.firstName}</Text>
        )}

        <Text nativeID="lastNameLabel" style={styles.label}>
          Last Name
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.lastName}
            onChangeText={(text) => setProfile({ ...profile, lastName: text })}
            accessibilityLabelledBy="lastNameLabel"
            accessibilityLabel="Last name input field"
            autoComplete="name-family"
          />
        ) : (
          <Text style={styles.value}>{profile.lastName}</Text>
        )}

        <Text nativeID="emailLabel" style={styles.label}>
          Email
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.email}
            onChangeText={(text) => setProfile({ ...profile, email: text })}
            accessibilityLabelledBy="emailLabel"
            accessibilityLabel="Email input field"
            autoComplete="email"
            keyboardType="email-address"
          />
        ) : (
          <Text style={styles.value}>{profile.email}</Text>
        )}

        <Text nativeID="phoneLabel" style={styles.label}>
          Phone
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.phone}
            onChangeText={(text) => setProfile({ ...profile, phone: text })}
            accessibilityLabelledBy="phoneLabel"
            accessibilityLabel="Phone number input field"
            autoComplete="tel"
            keyboardType="phone-pad"
          />
        ) : (
          <Text style={styles.value}>{profile.phone}</Text>
        )}
      </View>

      {/* Action Buttons with proper touch targets and labels */}
      <View style={styles.buttonsContainer}>
        {isEditing ? (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setIsEditing(false)}
              accessibilityLabel="Save profile changes"
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setIsEditing(false)}
              accessibilityLabel="Cancel editing profile"
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </>
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
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333", // Dark gray for good contrast on white
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#000000", // Black for best contrast on white
    marginBottom: 16,
    paddingVertical: 8,
  },
  input: {
    fontSize: 16,
    color: "#000000", // Black text for best contrast
    borderWidth: 1,
    borderColor: "#333333", // Dark border for contrast
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  button: {
    backgroundColor: "#0066CC", // Blue with good contrast against white
    minWidth: 120,
    minHeight: 48, // Meets minimum touch target size
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cancelButton: {
    backgroundColor: "#CCCCCC", // Light gray
  },
  buttonText: {
    color: "#FFFFFF", // White text for contrast on colored buttons
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileViewScreen;
