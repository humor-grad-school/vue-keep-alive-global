# vue-keep-alive-global

```
<KeepAliveGlobal>
  <YourComponent
    :key="uniqueKey"
  />
</KeepAliveGlobal>
```

With Array,

```
<template v-for="(item, index) of array">
    <KeepAliveGlobal :key="`blah-blah-${index}`">
        <YourComponent
            :item="item"
            :key="`your-component-${index}`"
        />
    </KeepAliveGlobal>
</template>
```
