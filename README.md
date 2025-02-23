# Maker Nav SDK

A toolkit to help you build custom components for Maker Nav using React.

## Installation

### NPM:
```bash
npm install @makerinc/nav-sdk
```

### Yarn:
```bash
yarn add @makerinc/nav-sdk
```

## Prerequisites

- React 16.14 or higher (features of React 18 or higher are not yet supported.)
- Typescript

## Usage
Register your custom components using the provided `registry.register()` function inside your main React app. Data fetching and syncing will be handled by Nav and the registry will pass the data down to your custom component as props.

```tsx
import React from "@makerinc/nav-sdk/react"; // ⚠️ see note below
import { registry, Product } from "@makerinc/nav-sdk";

type Props = {
  data: Product
}

const MyCustomProductCard = ({data}: Props) => {
  return (
    // Your component code here
  );
};

registry.register("product", "my-product-card", MyCustomProductCard);

export default MyCustomProductCard;
```

> **⚠️ Important Note:** The `react` import from `@makerinc/nav-sdk` is required for the hooks to correctly work inside Nav as React would not recognize and track hook usage correctly when the instances are different.
>
>If you wish to use your existing React component in Nav, you can simply replace the react import in your component like so:
> #### Before:
> ```tsx
> import React, {useState, useMemo, ...others} from "react";
> ```
> #### After:
> ```tsx
> import React from "@makerinc/nav-sdk/react";
> const useState = React.useState;
> const useMemo = React.useMemo;
> // ...others
> ```

## Registry API
`registry.register(type, id, component)`

| Parameter | Type | Description |
| --- | --- | --- |
| type | `'product-card' \| 'category-card' \| 'banner' \| 'products-section' \| 'categories-section' \| 'banners-section'` | The type of component to be registered. This influences the type of data passed to your component. <br><br>See [`ComponentTypeMapping`](https://github.com/makerinc/nav-sdk/blob/main/src/types/ComponentTypeMapping.ts) for available types.
| id | `string` | The id of the component, this will be used to tell Nav which component to render in a specific node or section. <br><br>It must be unique for each custom component. |
| component | `({ data }) => JSX.Element` | React component to be rendered by Nav. <br><br>`data` will be of type [`Product`](https://github.com/makerinc/nav-sdk/blob/main/src/types/Product.ts), [`Category`](https://github.com/makerinc/nav-sdk/blob/main/src/types/Category.ts) or [`Banner`](https://github.com/makerinc/nav-sdk/blob/main/src/types/Banner.ts) depending on the `type` parameter.
