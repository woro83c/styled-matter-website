/**
 * @see {@link https://github.com/acdlite/recompose}
 */
export function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component
  }

  if (!Component) {
    return undefined
  }

  return Component.displayName || Component.name || 'Component'
}
