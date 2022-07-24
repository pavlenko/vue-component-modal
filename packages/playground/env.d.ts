/**
 * WARNING!!! You must add the path to this file to the "include" array of tsconfig.json
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
