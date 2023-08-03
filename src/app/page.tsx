import HomeCmp from '@/components/home/home'

const getPostsData = async () => {

  const postsData = await fetch('https://blogpy-1-p2885582.deta.app/api/v1/posts', {
    method: 'GET',
    cache: 'no-store',
  })
  return await postsData.json()
}

const getHeadingData = async () => {
  const headingData = await fetch('https://blogpy-1-p2885582.deta.app/api/v1/hpd', {
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



