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
}
