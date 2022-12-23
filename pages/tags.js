import { PageSEO } from '@/components/SEO'

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en')
//   const AFFIX = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       AFFIX,
//     },
//   }
// }

export default function Tags() {
  return (
    <>
      <PageSEO title={`Affix`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            US
          </h1>
        </div>
        <h1 className="text-5xl font-extrabold text-rose-500">
          Tyrannical, Bursting, Grievous, Thundering
        </h1>
      </div>
    </>
  )
}
