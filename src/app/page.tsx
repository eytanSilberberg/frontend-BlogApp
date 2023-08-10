import HomeCmp from '@/components/home/home'

const getPostsData = async () => {

  // Fetch data from external API
  const postsData = await fetch('http://127.0.0.1:8000/api/v1/posts', {
    method: 'GET',
    cache: 'no-store',
  })
  return await postsData.json()
}

const getHeadingData = async () => {
  const headingData = await fetch('http://127.0.0.1:8000/api/v1/hpd', {
    method: 'GET',
    cache: 'no-store',
  })
  return await headingData.json()
}

export default async function HomePage() {
  const postsRes = await getPostsData()
  const headingRes = await getHeadingData()
  console.log(headingRes);


  const [posts, homePageData] = await Promise.all([postsRes, headingRes])
  return (
    <HomeCmp homePageDataSSR={homePageData} postsSSR={posts} />
  )
}



