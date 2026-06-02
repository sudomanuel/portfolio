# Custom logos

Drop your own logo images here (PNG / SVG) and reference them in the data
arrays inside the page files, e.g.:

```ts
logo: "/logos/coca-cola.png"
```

By default the site pulls logos automatically:

- **Technologies** → Simple Icons CDN  (`lib/logos.ts` → `tech("python")`)
- **Companies / universities** → favicon service  (`lib/logos.ts` → `site("coca-cola.com")`)

Logos render in grayscale and reveal their real color on hover.
To override any of them with a hand-picked image, just put the file here and
swap the `logo:` value to `/logos/<filename>`.
