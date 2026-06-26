CTA primitive. Coral `primary` is the signature — use it for the single main action per view; everything else is `secondary` / `text`.

```jsx
<Button variant="primary">Try Claude</Button>
<Button variant="secondary">Learn more</Button>
<Button variant="text">Sign in</Button>
<Button variant="on-coral">Get started</Button>      // inside a coral callout
<Button variant="secondary-on-dark">Docs</Button>    // over a dark surface
```

Sizes: `sm` 32px · `md` 40px (default) · `lg` 48px. Only default + press states are styled — primary darkens to `--color-primary-active` on press. Don't add hover styling.
