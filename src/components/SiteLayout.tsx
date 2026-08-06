import { Outlet } from 'react-router-dom'
import { HashScroll } from './HashScroll'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function SiteLayout() {
  return (
    <div className="site">
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
