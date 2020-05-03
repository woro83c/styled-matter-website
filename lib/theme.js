const colors = {
  blue: {
    500: 'hsl(210, 100%, 50%)',
  },
}

export default {
  colors: {
    ...colors,
    primary: colors.blue[500],
  },
  fonts: {
    sans:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
}
