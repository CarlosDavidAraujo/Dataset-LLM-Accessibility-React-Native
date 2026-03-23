# Accessibility Labels

Ensure all interactive elements have descriptive labels for screen readers.

❌ Incorrect:

```jsx
<TextInput />
```

> No accessibility label. Screen readers cannot identify the input field's purpose.

✅ Correct:

```jsx
<View>
  <Text nativeID="usernameLabel">Username</Text>
  <TextInput
    accessibilityLabel="username"
    accessibilityLabelledBy="usernameLabel"
    autoComplete="username"
    textContentType="username"
  />
</View>
```

> A reference to another element via `nativeID` is used to build complex forms. The value of `accessibilityLabelledBy` matches the `nativeID` of the related element. In this example, the screen reader announces "Username, Edit Box for Username" when focusing on the TextInput, deriving the name from the visible text.

❌ Incorrect:

```jsx
<Button title="Submit" />
```

> The button has text, but no additional accessibility information for screen readers that may need additional context.

✅ Correct:

```jsx
<Button title="Submit" accessibilityLabel="Submit form data" />
```

> An `accessibilityLabel` prop provides a clear, descriptive label for screen readers, improving accessibility.
