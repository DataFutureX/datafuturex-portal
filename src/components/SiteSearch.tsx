import { useEffect, useId, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { searchSite, type SearchItem } from '../data/search'

type SiteSearchProps = {
  onNavigate?: () => void
}

export function SiteSearch({ onNavigate }: SiteSearchProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const navigate = useNavigate()

  const results = searchSite(query)
  const hot = ['云起', '演示', '快速开始', 'MQTT', '万象', '源码']

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      if (!dialog.open) dialog.showModal()
      setQuery('')
      setActive(0)
      window.setTimeout(() => inputRef.current?.focus(), 0)
    } else if (dialog.open) {
      dialog.close()
    }
  }, [open])

  function close() {
    setOpen(false)
    onNavigate?.()
  }

  function go(item: SearchItem) {
    close()
    navigate(item.href)
  }

  function onInputKeyDown(e: ReactKeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault()
      go(results[active])
    }
  }

  return (
    <>
      <button
        type="button"
        className="site-search__trigger"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        title="搜索（Ctrl+K）"
      >
        <span className="site-search__trigger-label">搜索</span>
        <kbd className="site-search__kbd mono">Ctrl K</kbd>
      </button>

      <dialog
        ref={dialogRef}
        className="site-search"
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setOpen(false)
        }}
      >
        <div className="site-search__panel">
          <h2 id={titleId} className="sr-only">
            站内搜索
          </h2>
          <input
            ref={inputRef}
            className="site-search__input"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActive(0)
            }}
            onKeyDown={onInputKeyDown}
            placeholder="搜索作品、文档与页面…"
            aria-autocomplete="list"
            aria-controls="site-search-results"
            autoComplete="off"
          />

          {!query.trim() ? (
            <div className="site-search__empty">
              <p>试试这些关键词：</p>
              <div className="site-search__hot">
                {hot.map((term) => (
                  <button
                    key={term}
                    type="button"
                    className="site-search__chip"
                    onClick={() => setQuery(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
              <p className="site-search__hint">
                也可前往 <Link to="/products" onClick={close}>作品</Link>、{' '}
                <Link to="/docs" onClick={close}>文档</Link> 或{' '}
                <Link to="/support" onClick={close}>支持</Link>。
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="site-search__empty">
              <p>没有匹配「{query.trim()}」的结果。</p>
              <p className="site-search__hint">
                返回 <Link to="/products" onClick={close}>作品</Link> ·{' '}
                <Link to="/docs" onClick={close}>文档</Link> ·{' '}
                <Link to="/support" onClick={close}>支持</Link>
              </p>
            </div>
          ) : (
            <ul id="site-search-results" className="site-search__results" role="listbox">
              {results.map((item, index) => (
                <li key={item.id} role="option" aria-selected={index === active}>
                  <button
                    type="button"
                    className={
                      index === active
                        ? 'site-search__result is-active'
                        : 'site-search__result'
                    }
                    onMouseEnter={() => setActive(index)}
                    onClick={() => go(item)}
                  >
                    <span className="site-search__group mono">{item.group}</span>
                    <span className="site-search__title">{item.title}</span>
                    <span className="site-search__desc">{item.description}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </dialog>
    </>
  )
}
