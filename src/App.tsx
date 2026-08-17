import { lazy, Suspense } from 'react'
import { Navigate, Routes, Route, useParams } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'

function LegacyProductsRedirect() {
  const { slug } = useParams()
  return <Navigate to={slug ? `/works/${slug}` : '/works'} replace />
}

const HomePage = lazy(() =>
  import('./pages/HomePage').then((m) => ({ default: m.HomePage })),
)
const ProductsPage = lazy(() =>
  import('./pages/ProductsPage').then((m) => ({ default: m.ProductsPage })),
)
const ProductDetailPage = lazy(() =>
  import('./pages/ProductDetailPage').then((m) => ({ default: m.ProductDetailPage })),
)
const DocsShell = lazy(() =>
  import('./components/DocsShell').then((m) => ({ default: m.DocsShell })),
)
const docsPages = () => import('./pages/DocsPages')
const DocsIndexRedirect = lazy(() =>
  docsPages().then((m) => ({ default: m.DocsIndexRedirect })),
)
const GettingStartedDoc = lazy(() =>
  docsPages().then((m) => ({ default: m.GettingStartedDoc })),
)
const YunqiDoc = lazy(() => docsPages().then((m) => ({ default: m.YunqiDoc })))
const SmartIotDoc = lazy(() => docsPages().then((m) => ({ default: m.SmartIotDoc })))
const WanxiangDoc = lazy(() => docsPages().then((m) => ({ default: m.WanxiangDoc })))
const LingshuDoc = lazy(() => docsPages().then((m) => ({ default: m.LingshuDoc })))
const SupportPage = lazy(() =>
  import('./pages/SupportPage').then((m) => ({ default: m.SupportPage })),
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

function PageFallback() {
  return <div className="page page--narrow" aria-busy="true" />
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="works" element={<ProductsPage />} />
          <Route path="works/:slug" element={<ProductDetailPage />} />
          <Route path="products" element={<Navigate to="/works" replace />} />
          <Route path="products/:slug" element={<LegacyProductsRedirect />} />
          <Route path="docs" element={<DocsShell />}>
            <Route index element={<DocsIndexRedirect />} />
            <Route path="getting-started" element={<GettingStartedDoc />} />
            <Route path="yunqi" element={<YunqiDoc />} />
            <Route path="smart-iot" element={<SmartIotDoc />} />
            <Route path="wanxiang" element={<WanxiangDoc />} />
            <Route path="lingshu" element={<LingshuDoc />} />
          </Route>
          <Route
            path="examples"
            element={<Navigate to="/docs/getting-started#run" replace />}
          />
          <Route path="support" element={<SupportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
