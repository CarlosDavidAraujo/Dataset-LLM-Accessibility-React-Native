# Touch Target Size

Ensure interactive elements have a large enough touch target (at least 48x48dp) for easy interaction.

❌ Incorrect:

```jsx
<TouchableOpacity style={{ width: 16, height: 16 }}>
  {/* ... */}
</TouchableOpacity>
```

> The touch target is too small for easy interaction.

✅ Correct:

```jsx
<TouchableOpacity style={{ minWidth: 48, minHeight: 48 }}>
  {/* ... */}
</TouchableOpacity>
```

> The touch target meets the recommended minimum size of 48x48 pixels.

❌ Incorrect:

```jsx
<TouchableOpacity>
  <Image source={icon} />
</TouchableOpacity>
```

> An image within a touchable component without enough size or padding, making it hard to tap.

✅ Correct:

```jsx
<TouchableOpacity style={{ minWidth: 48, minHeight: 48 }}>
  <Image source={icon} accessibilityLabel="descriptive icon text" />
</TouchableOpacity>
```

> A `TouchableOpacity` with minimum dimensions and padding, ensuring a large enough touch target. The image also has an `accessibilityLabel`.
