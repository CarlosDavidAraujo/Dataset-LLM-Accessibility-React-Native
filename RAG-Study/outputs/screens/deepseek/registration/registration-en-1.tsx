import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const RegistrationScreen = () => {
  const { control, handleSubmit, reset } = useForm();
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            accessibilityLabel="first name"
            autoComplete="given-name"
            textContentType="givenName"
          />
        )}
      />

      <Text style={styles.label}>Last Name</Text>
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            accessibilityLabel="last name"
            autoComplete="family-name"
            textContentType="familyName"
          />
        )}
      />

      <Text style={styles.label}>Email Address</Text>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: true, pattern: /^\S+@\S+$/ }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            accessibilityLabel="email address"
            autoComplete="email"
            textContentType="emailAddress"
          />
        )}
      />

      <Text style={styles.label}>Password</Text>
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: true, minLength: 6 }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            accessibilityLabel="password"
            autoComplete="password"
            textContentType="password"
            secureTextEntry
          />
        )}
      />

      <Text style={styles.label}>Date of Birth</Text>
      <Button
        onPress={() => setShowDatePicker(true)}
        title="Select Date"
        accessibilityLabel="select date"
      />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "default" : "spinner"}
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setDate(selectedDate);
            }
          }}
        />
      )}

      <Text style={styles.label}>Gender</Text>
      <Controller
        name="gender"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View>
            <Button
              onPress={() => onChange("Male")}
              title="Male"
              accessibilityLabel="male"
            />
            <Button
              onPress={() => onChange("Female")}
              title="Female"
              accessibilityLabel="female"
            />
            <Button
              onPress={() => onChange("Other")}
              title="Other"
              accessibilityLabel="other"
            />
          </View>
        )}
      />

      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        accessibilityLabel="submit"
      />
      <Button title="Cancel" onPress={reset} accessibilityLabel="cancel" />
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
});

export default RegistrationScreen;
