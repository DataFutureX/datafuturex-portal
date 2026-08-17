import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDocPage } from '../data/docs'
import { site } from '../data/site'
import { getWork, shotMedium } from '../data/works'

type PageMeta = {
  title: string
  description: string
  url: string
  image?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function resolveMeta(pathname: string): PageMeta {
  const brand = `${site.name} · ${site.englishName}`
  const url = `${site.origin}${pathname === '/' ? '/' : pathname}`

  if (pathname === '/') {
    return { title: brand, description: site.description, url }
  }
  if (pathname === '/works') {
    return {
      title: `作品 · ${site.name}`,
      description: '浏览工坊作品：云起开源底座、物联网、监测孪生与行业应用。',
      url,
    }
  }
  if (pathname.startsWith('/works/')) {
    const slug = pathname.split('/')[2] ?? ''
    const work = getWork(slug)
    if (work) {
      const cover = work.screenshots[0]
      return {
        title: `${work.name} · ${site.name}`,
        description: work.summary,
        url,
        image: cover
          ? `${site.origin}${shotMedium(cover.src, cover.medium)}`
          : undefined,
      }
    }
  }
  if (pathname === '/docs' || pathname.startsWith('/docs/')) {
    const slug = pathname.replace(/^\/docs\/?/, '').split('/')[0] || 'getting-started'
    const doc = getDocPage(slug)
    if (doc) {
      return {
        title: `${doc.title} · ${site.name}`,
        description: doc.summary,
        url,
      }
    }
    return {
      title: `文档 · ${site.name}`,
      description: '快速开始、作品说明与体验入口。',
      url,
    }
  }
  if (pathname === '/support') {
    return {
      title: `支持 · ${site.name}`,
      description: '联系方式、许可证与常见问题。',
      url,
    }
  }
  return {
    title: `页面未找到 · ${site.name}`,
    description: '该地址不存在或已移动。',
    url,
  }
}

/** 路由变化时更新 document.title 与 Open Graph */
export function DocumentMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = resolveMeta(pathname)
    document.title = meta.title
    upsertMeta('name', 'description', meta.description)
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:url', meta.url)
    if (meta.image) upsertMeta('property', 'og:image', meta.image)
    else document.head.querySelector('meta[property="og:image"]')?.remove()
  }, [pathname])

  return null
}
