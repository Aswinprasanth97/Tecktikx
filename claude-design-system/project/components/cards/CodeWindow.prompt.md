The signature dark code-editor mockup. Build each row with `<Tok>` tokens for syntax color; add a `status` bar for terminal/agent state. Use it to show real product chrome instead of marketing illustration of code.

```jsx
<CodeWindow
  filename="agent.py"
  lines={[
    <><Tok kind="keyword">from</Tok> anthropic <Tok kind="keyword">import</Tok> Anthropic</>,
    <><Tok kind="comment"># stream a response</Tok></>,
    <>client = <Tok kind="func">Anthropic</Tok>()</>,
  ]}
  status={<><span style={{color:'var(--color-success)'}}>●</span> Connected</>}
/>
```

Tok kinds: keyword · string · comment · func · num · plain.
