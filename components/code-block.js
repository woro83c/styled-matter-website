import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/ultramin'
import UI from '../lib/ui'

const { Pre, Span } = UI

function CodeBlock({ children, className }) {
  const language = className.replace('language-', '')

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <Pre bg="gray.30" className={className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <Span
                  key={key}
                  xcss={{
                    '&.deleted-sign': { color: 'gray.300' },
                    '&.inserted-sign': { bg: 'green.30', color: 'green.700' },
                  }}
                  {...getTokenProps({ token, key })}
                />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
