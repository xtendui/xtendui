import DemoIframe from 'src/app/includes/demo-iframe'

export async function generateMetadata(props) {
  return {
    title: `demos/${props.params.slug.join('/')}`,
  }
}

export default function Page(props) {
  return (
    <>
      <DemoIframe slug={`/demos/${props.params.slug.join('/')}`} />
    </>
  )
}
