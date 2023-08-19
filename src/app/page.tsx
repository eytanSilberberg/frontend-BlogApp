import HomeCmp from '@/components/home/home'
import { getPostsData, getHeadingData } from '@/services/server.util.service'


// Next 13 logic creates components differently.
//  Serverside rendering is done by exporting an async function
export default async function HomePage() {
  const postsRes = await getPostsData()
  const headingRes = await getHeadingData()
  console.log(headingRes);


  const [posts, homePageData] = await Promise.all([postsRes, headingRes])
  return (
    <HomeCmp homePageDataSSR={homePageData} postsSSR={posts} />
  )
}



