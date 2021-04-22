import type AboutPageType from '/Users/isaactait/Desktop/Web_Dev/portfolio-site-2.0/web/src/pages/AboutPage/AboutPage'
import type FatalErrorPageType from '/Users/isaactait/Desktop/Web_Dev/portfolio-site-2.0/web/src/pages/FatalErrorPage/FatalErrorPage'
import type HomePageType from '/Users/isaactait/Desktop/Web_Dev/portfolio-site-2.0/web/src/pages/HomePage/HomePage'
import type NotFoundPageType from '/Users/isaactait/Desktop/Web_Dev/portfolio-site-2.0/web/src/pages/NotFoundPage/NotFoundPage'

declare global {
  const AboutPage: typeof AboutPageType
  const FatalErrorPage: typeof FatalErrorPageType
  const HomePage: typeof HomePageType
  const NotFoundPage: typeof NotFoundPageType
}
