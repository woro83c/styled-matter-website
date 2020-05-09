import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/ultramin'
import UI from '../lib/ui'

const { Pre } = UI

function CodeBlock({ children, className }) {
  const language = className.replace('language-', '')

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={theme}>
      {({ className, getLineProps, getTokenProps, tokens }) => (
        <Pre bg="gray.30" className={className}>
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
