import HomeCmp from '@/components/home/home'
import { getPostsData, getHeadingData } from '@/services/server.util.service'



export default async function HomePage() {
  const postsRes = await getPostsData()
  const headingRes = await getHeadingData()
  console.log(headingRes);


  const [posts, homePageData] = await Promise.all([postsRes, headingRes])
  return (
    <HomeCmp homePageDataSSR={homePageData} postsSSR={posts} />
  )
}



