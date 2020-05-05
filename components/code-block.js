import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import UI from '../lib/ui'

const { Pre } = UI

function CodeBlock({ children, className }) {
  const language = className.replace('language-', '')

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre
          className={className}
          fontFamily="mono"
          fontSize={1}
          fontSmoothing="auto"
          m={0}
          p={5}
          rounded="lg"
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
