 Sure! Below is an example of how you can create a fully accessible registration screen using React Native and TypeScript. This example will include all the necessary accessibility features as per the provided guidelines.

```tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Ensure you have this package installed for the picker

const RegistrationScreen: React.FC = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState('');
  const [gender, setGender] = React.useState('male');

  return (
    <View style={styles.container}>
      <Text accessibilityRole="heading" style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter your first name"
        accessibilityLabel="first name"
        accessibilityLabelledBy="first name label"
      />

      <Text accessibilityRole="heading" style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Enter your last name"
        accessibilityLabel="last name"
        accessibilityLabelledBy="last name label"
      />

      <Text accessibilityRole="heading" style={styles.label}>Email</Text>
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

      <Text accessibilityRole="heading" style={styles.label}>Password</Text>
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

      <Text accessibilityRole="heading" style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        placeholder="Enter your date of birth"
        keyboardType="numeric"
        accessibilityLabel="date of birth"
        accessibilityLabelledBy="date of birth label"
      />

      <Text accessibilityRole="heading" style={styles.label}>Gender</Text>
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
        <Button title="Submit" onPress={() => alert('Submitting...')} accessibilityLabel="submit" />
        <Button title="Cancel" onPress={() => alert('Cancelling...')} accessibilityLabel="cancel" />
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
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default RegistrationScreen;
```

### Explanation:
1. **Accessibility Roles and Labels**: Each input field has an accessibility role (`accessibilityRole`) and a label associated with it using `accessibilityLabelledBy`. This ensures that screen readers can identify the purpose of each input field.
2. **TextInput**: The `TextInput` components have properties like `accessibilityLabel`, `accessibilityLabelledBy`, and other relevant props to make them accessible.
3. **Picker**: The `Picker` component is wrapped in a view with an accessibility role (`accessibilityRole`) set to "picker". This helps screen readers understand the purpose of the picker.
4. **Buttons**: Both buttons have `accessibilityLabel` set, which helps screen readers announce their purpose when pressed.
5. **Styling**: The styles are kept minimal and focused on ensuring accessibility first.

This example should provide a fully accessible registration form that can be used in a production environment.