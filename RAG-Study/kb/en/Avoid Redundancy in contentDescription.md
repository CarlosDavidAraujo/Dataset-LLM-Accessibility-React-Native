# 5. Avoid Redundancy in contentDescription

**Important:**

> Screen readers like TalkBack and VoiceOver already announce the component type (such as “button” or “text field”). Therefore:

✅ **Correct (Icon only):**

```jsx
<TouchableOpacity accessibilityLabel="Add item" accessibilityRole="button">
  <Icon name="plus" />
</TouchableOpacity>
```

✅ **Correct (Text content):**

```jsx
// No accessibilityLabel needed because the text "Submit" is read automatically.
<TouchableOpacity accessibilityRole="button">
  <Text>Submit</Text>
</TouchableOpacity>
```

⚠️ **Redundant (but not incorrect):**

```jsx
<TouchableOpacity accessibilityLabel="Submit" accessibilityRole="button">
  <Text>Submit</Text>
</TouchableOpacity>
// Output: "Submit, button" (accessibilityLabel overrides the automatic text concatenation)
// This is redundant when the label equals the visible text, but useful for custom values
```

💡 **Optional - Custom Label:**

```jsx
<TouchableOpacity
  accessibilityLabel="Tap to submit form"
  accessibilityRole="button"
>
  <Text>Submit</Text>
</TouchableOpacity>
// Output: "Tap to submit form, button" (Provides additional context)
// Use accessibilityLabel when you want a different announcement than the visible text
```

❌ **Incorrect (Redundant Role in Label):**

```jsx
<Button title="Confirm" accessibilityLabel="Button confirm submission" />
// Output: "Button confirm submission, button" (Redundant)
```

This prevents the reader from saying “button button confirm submission” or repeating the text twice.
