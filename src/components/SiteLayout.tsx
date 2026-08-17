import { Outlet, useLocation } from 'react-router-dom'
import { DocumentMeta } from './DocumentMeta'
import { HashScroll } from './HashScroll'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function SiteLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={isHome ? 'site site--home' : 'site'}>
      <DocumentMeta />
      <HashScroll />
      <a className="skip-link" href="#main">
        跳到主内容
      </a>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
