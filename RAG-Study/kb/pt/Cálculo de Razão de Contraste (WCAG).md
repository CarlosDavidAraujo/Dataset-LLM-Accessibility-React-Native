# 13. Cálculo de Razão de Contraste (WCAG)

### Passos:

1. **HEX para RGB:**

```python
R = int(hex[1:3], 16)
G = int(hex[3:5], 16)
B = int(hex[5:7], 16)
```

2. **RGB para Luminância Relativa:**

```python
def srgb_to_linear(c):
    c = c / 255
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4

L = 0.2126 * R_linear + 0.7152 * G_linear + 0.0722 * B_linear
```

3. **Cálculo da razão de contraste:**

```python
contrast_ratio = (L1 + 0.05) / (L2 + 0.05)
```

### Requisitos mínimos:

- 4.5:1 para texto normal
- 3:1 para texto grande
- 7:1 para nível AAA

Use este cálculo para validar combinações de cores no aplicativo.
