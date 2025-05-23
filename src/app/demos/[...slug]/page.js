import DemoIframe from 'src/app/includes/demo-iframe'

const demosIframe = [
  'components/drop/api',
  'components/form/validation',
  'components/global/googlelocator',
  'components/global/jumptocontent',
  'components/global/stickyfooter',
  'components/hero/direction',
  'components/hero/outside',
  'components/hero/shadow',
  'components/hero/usage',
  'components/infinitescroll/usage',
  'components/listing/usage',
  'components/overlay/api',
  'components/overlay/hash',
  'components/overlay/unclosable',
  'components/overlay/usage-self',
  'components/row/overflow',
  'components/scrollto/overlay',
  'components/scrollto/toggle',
  'components/scrollto/usage',
  'components/scrollto/usage-simple',
  'components/scrolltrigger/fade',
  'components/scrolltrigger/fade-distance',
  'components/scrolltrigger/fade-infinite',
  'components/scrolltrigger/fade-inside',
  'components/scrolltrigger/fade-matchmedia',
  'components/scrolltrigger/fade-outside',
  'components/scrolltrigger/fade-outside-infinite',
  'components/scrolltrigger/parallax',
  'components/scrolltrigger/parallax-actions',
  'components/scrolltrigger/parallax-image',
  'components/scrolltrigger/parallax-multiple',
  'components/scrolltrigger/parallax-pin',
  'components/scrolltrigger/parallax-range',
  'components/scrolltrigger/sticky',
  'components/scrolltrigger/sticky-hide',
  'components/scrolltrigger/sticky-hide-direction',
  'components/scrolltrigger/sticky-hide-direction-sub',
  'components/scrolltrigger/sticky-matchmedia',
  'components/scrolltrigger/sticky-stack',
  'components/slider/api',
  'components/slider/hash',
  'components/stickyflow/usage',
  'components/stickyflow/position',
  'components/toggle/api',
  'components/toggle/hash',
  'components/tooltip/api',
  'hidden/test/scrolltrigger-matches',
  'themes/animation/collapse-animation-v1',
  'themes/animation/electric-animation-v1',
  'themes/animation/ellipse-animation-v1',
  'themes/animation/float-animation-v1',
  'themes/animation/polygon-animation-v1',
  'themes/animation/ripple-animation-v1',
  'themes/animation/slide-animation-v1',
  'themes/featured/blocks-featured-v1',
  'themes/gallery/products-gallery-v1',
  'themes/hero/slider-hero-v1',
  'themes/hero/slider-hero-v2',
  'themes/implementation/drop-implementation-v1',
  'themes/implementation/nav-implementation-v1',
  'themes/implementation/nav-implementation-v2',
  'themes/implementation/nav-implementation-v3',
  'themes/implementation/overlay-implementation-v1',
  'themes/implementation/tabs-implementation-v1',
  'themes/implementation/tabs-implementation-v2',
  'themes/implementation/tabs-implementation-v3',
  'themes/implementation/toggle-implementation-v1',
  'themes/implementation/tooltip-implementation-v1',
  'themes/listing/products-listing-v1',
  'themes/listing/products-listing-v2',
  'themes/listing/products-listing-v3',
  'themes/listing/stores-listing-v1',
  'themes/listing/stores-listing-v2',
  'themes/navigation/megamenu-v1',
  'themes/navigation/multilevel-v1',
]

export async function generateStaticParams() {
  return demosIframe.map(demoIframe => ({
    slug: demoIframe.split('/'),
  }))
}

export async function generateMetadata(props) {
  let { slug } = await props.params
  slug = slug.join('/')
  return {
    title: `demos/${slug}`,
  }
}

export default async function Page(props) {
  let { slug } = await props.params
  slug = slug.join('/')
  if (!demosIframe.includes(slug)) return <></>
  return (
    <>
      <DemoIframe slug={`/demos/${slug}`} />
    </>
  )
}
