import originalReact from 'react';
window.__MAKER_REACT__ = window.__MAKER_REACT__ || originalReact;

// For builder
export type { Product, Category, ContentType } from './src/types/index'
export { registry, useRegistrationListener } from './src/util/registry'
export { default as Image } from './src/components/Image'
export const React = window.__MAKER_REACT__

// For showside
export { Renderer } from './src/components/Renderer'
export { ComponentLoader } from './src/components/ComponentLoader'
export { Provider as SharedComponentsProvider } from './src/components/SharedComponents'
