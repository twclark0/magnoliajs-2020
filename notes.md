# ES8

- String padding with padStart and padEnd

# ES9

- New Regex stuff

# ES10

- .flatMap
- String trimStart, trimEnd

# ES11

- ??
- ?.

---

<Title text="New Regex stuff" />

- Flag /s (dotAll)
- Unicode Property Escapes
- Lookbehind Assertions
- Named capture groups

---

<CodeSurferLayout>

```js title="Flag /s (dotAll)"
const itemsToCount = ["pants", "socks", "shoes", "hats"];

Object.fromEntries(itemsToCount.map(item => [item, 0]));

// {pants: 0, socks: 0, shoes: 0, hats: 0}
```

  </CodeSurferLayout>

---

<Title text="New Regex stuff" />

- Flag /s (dotAll)
- Unicode Property Escapes
- Lookbehind Assertions
- Named capture groups
