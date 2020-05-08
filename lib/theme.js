const colors = {
  blue: {
    500: 'hsl(210, 100%, 50%)',
  },
  gray: {
    30: 'hsl(0, 0%, 97%)',
    100: 'hsl(0, 0%, 90%)',
  },
  pink: {
    400: 'hsl(330, 80%, 60%)',
  },
  yellow: {
    100: 'hsl(45, 100%, 90%)',
    700: 'hsl(45, 100%, 30%)',
    800: 'hsl(45, 100%, 20%)',
  },
}

export default {
  colors: {
    ...colors,
    primary: colors.blue[500],
  },
  fonts: {
    sans:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    mono: '"Roboto Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  radii: {
    true: '.375rem',
  },
}
