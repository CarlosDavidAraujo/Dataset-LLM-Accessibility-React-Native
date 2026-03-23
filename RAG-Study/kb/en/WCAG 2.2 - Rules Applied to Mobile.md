# 10. WCAG 2.2 - Rules Applied to Mobile

Principles:

- Perceivable
- Operable
- Understandable
- Robust

Useful criteria:

- Minimum target: 48x48dp
- Visible focus
- User feedback

Example:

```tsx
<TouchableOpacity
  style={{
    borderWidth: 2,
    borderColor: "blue", // visual focus
    minWidth: 48, // minimum target size
    minHeight: 48,
    justifyContent: "center",
    padding: 10,
  }}
>
  <Text>Action</Text>
</TouchableOpacity>
```
