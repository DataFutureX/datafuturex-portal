import { Outlet } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'

export function SiteLayout() {
  return (
    <div className="site">
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
