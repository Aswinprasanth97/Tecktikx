Brand glyph (SpikeMark) and the SpikeMark+label lockup (Wordmark). Use the Wordmark in nav bars and the footer; use SpikeMark inline as a content marker.

```jsx
<Wordmark label="Claude" size={22} />
<SpikeMark size={16} color="var(--color-primary)" />
```

- SpikeMark inherits `currentColor` — tint via `color`.
- Never invert the mark to white inside the wordmark; on dark surfaces pass `color="var(--color-on-dark)"` to the whole Wordmark.
