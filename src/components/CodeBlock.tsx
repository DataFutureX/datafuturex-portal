import { useState } from 'react'

type CodeBlockProps = {
  children: string
}

export function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const code = children.replace(/^\n+|\n+$/g, '')

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="code-block-wrap">
      <pre className="code-block">
        <code>{code}</code>
      </pre>
      <button
        type="button"
        className="code-block__copy"
        onClick={handleCopy}
        aria-label={copied ? '已复制代码' : '复制代码'}
      >
        {copied ? '已复制' : '复制'}
      </button>
    </div>
  )
}
