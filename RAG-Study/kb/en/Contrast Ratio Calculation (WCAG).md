# 13. Contrast Ratio Calculation (WCAG)

### Steps:

1. **HEX to RGB:**

```python
R = int(hex[1:3], 16)
G = int(hex[3:5], 16)
B = int(hex[5:7], 16)
```

2. **RGB to Relative Luminance:**

```python
def srgb_to_linear(c):
    c = c / 255
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4

L = 0.2126 * R_linear + 0.7152 * G_linear + 0.0722 * B_linear
```

3. **Contrast ratio calculation:**

```python
contrast_ratio = (L1 + 0.05) / (L2 + 0.05)
```

### Minimum requirements:

- 4.5:1 for normal text
- 3:1 for large text
- 7:1 for AAA level

Use this calculation to validate color combinations in the app.
