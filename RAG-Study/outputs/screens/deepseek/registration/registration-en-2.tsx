import { Picker } from "@react-native-picker/picker"; // Ensure you have this package installed for the picker
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const RegistrationScreen: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [gender, setGender] = React.useState("male");

  return (
    <View style={styles.container}>
      <Text
        //accessibilityRole="heading" valor invalido
        style={styles.label}
      >
        First Name
      </Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter your first name"
        accessibilityLabel="first name"
        accessibilityLabelledBy="first name label"
      />

      <Text
        //accessibilityRole="heading" valor invalido
        style={styles.label}
      >
        Last Name
      </Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Enter your last name"
        accessibilityLabel="last name"
        accessibilityLabelledBy="last name label"
      />

      <Text
        //accessibilityRole="heading" valor invalido
        style={styles.label}
      >
        Email
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        textContentType="emailAddress"
        accessibilityLabel="email"
        accessibilityLabelledBy="email label"
      />

      <Text
        //accessibilityRole="heading" valor invalido
        style={styles.label}
      >
        Password
      </Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        textContentType="password"
        accessibilityLabel="password"
        accessibilityLabelledBy="password label"
      />

      <Text
        //accessibilityRole="heading" valor invalido
        style={styles.label}
      >
        Date of Birth
      </Text>
      <TextInput
        style={styles.input}
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        placeholder="Enter your date of birth"
        keyboardType="numeric"
        accessibilityLabel="date of birth"
        accessibilityLabelledBy="date of birth label"
      />

      <Text
        //accessibilityRole="heading" valor invalido
        style={styles.label}
      >
        Gender
      </Text>
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        accessibilityLabel="gender"
        accessibilityLabelledBy="gender label"
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={() => alert("Submitting...")}
          accessibilityLabel="submit"
        />
        <Button
          title="Cancel"
          onPress={() => alert("Cancelling...")}
          accessibilityLabel="cancel"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default RegistrationScreen;
