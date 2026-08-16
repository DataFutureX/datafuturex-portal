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
const DocsPage = lazy(() =>
  import('./pages/DocsPage').then((m) => ({ default: m.DocsPage })),
)
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
          <Route path="docs" element={<DocsPage />} />
          <Route path="examples" element={<Navigate to="/docs#try" replace />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
