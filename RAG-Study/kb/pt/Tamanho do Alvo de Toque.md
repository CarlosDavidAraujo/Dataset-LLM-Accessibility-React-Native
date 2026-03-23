# Tamanho do Alvo de Toque

Garanta que elementos interativos tenham um alvo de toque grande o suficiente (pelo menos 48x48dp) para fácil interação.

❌ Incorreto:

```jsx
<TouchableOpacity style={{ width: 16, height: 16 }}>
  {/* ... */}
</TouchableOpacity>
```

> O alvo de toque é muito pequeno para interação fácil.

✅ Correto:

```jsx
<TouchableOpacity style={{ minWidth: 48, minHeight: 48 }}>
  {/* ... */}
</TouchableOpacity>
```

> O alvo de toque atende ao tamanho mínimo recomendado de 48x48 pixels.

❌ Incorreto:

```jsx
<TouchableOpacity>
  <Image source={icon} />
</TouchableOpacity>
```

> Uma imagem dentro de um componente tocável sem tamanho ou preenchimento suficiente, tornando difícil de tocar.

✅ Correto:

```jsx
<TouchableOpacity style={{ minWidth: 48, minHeight: 48 }}>
  <Image source={icon} accessibilityLabel="texto descritivo do ícone" />
</TouchableOpacity>
```

> Um `TouchableOpacity` com dimensões mínimas e preenchimento, garantindo um alvo de toque grande o suficiente. A imagem também possui um `accessibilityLabel`.
