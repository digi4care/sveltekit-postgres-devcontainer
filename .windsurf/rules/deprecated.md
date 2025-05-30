---
trigger: always_on
---

# Deprecated APIs and Migration Paths

## SvelteKit 2.12+ Deprecations

### 1. $app/stores → $app/state

#### Deprecated in SvelteKit 2.12

SvelteKit 2.12 introduced `$app/state` based on the Svelte 5 runes API. This
provides everything that `$app/stores` provides but with more flexibility as to
where and how you use it. The page object is now fine-grained, meaning updates
to `page.state` will not invalidate `page.data` and vice-versa.

**Migration:**

```svelte
<script>
    // Old (deprecated)
    import { page } from "$app/stores";
    $: console.log($page.url.pathname);

    // New (preferred)
    import { page } from "$app/state";
    console.log(page.url.pathname);
</script>

<!-- Old (deprecated) -->

<div>Current path: {$page.url.pathname}</div>

<!-- New (preferred) -->

<div>Current path: {page.url.pathname}</div>
```

### 2. onMount → $effect

#### Deprecated in Svelte 5

With Svelte 5's runes, `onMount` is replaced by `$effect` for side effects that
should run when the component mounts.

**Migration:**

```svelte
<script>
    // Old (deprecated)
    import { onMount } from "svelte";
    onMount(() => {
        console.log("Component mounted");
    });

    // New (preferred)
    import { effect } from "svelte";
    effect(() => {
        console.log("Component mounted");
    });
</script>
```

### 3. createEventDispatcher → $props

#### Deprecated in Svelte 5 (createEventDispatcher)

With Svelte 5's new props system, `createEventDispatcher` is no longer needed.
Use `$props()` with callback functions instead.

**Migration:**

```svelte
<!-- Child.svelte -->

<script>
    // Old (deprecated)
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch("message", { text: "Hello!" });
    }

    // New (preferred)
    let { onMessage } = $props();

    function handleClick() {
        onMessage?.({ text: "Hello!" });
    }
</script>

<button on:click={handleClick}>Click me</button>
```

```svelte
<!-- Parent.svelte -->
<Child onMessage={(e) => console.log(e.detail.text)} />
```

## General Migration Guidelines

1. **Update Imports**: Replace deprecated imports with their modern equivalents
2. **Remove $ Prefixes**: When using `$app/state`, you don't need the `$` prefix
   when accessing store values (remove the $ character)
3. **Use Runes**: Prefer Svelte 5 runes (`$state`, `$derived`, `$effect`) over
   the older APIs
4. **Check Documentation**: Always refer to the latest Svelte and SvelteKit
   documentation for the most up-to-date patterns
