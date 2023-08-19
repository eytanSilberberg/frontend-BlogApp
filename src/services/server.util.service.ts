export const getPostsData = async () => {
	const postsData = await fetch('http://127.0.0.1:8000/api/v1/posts', {
		method: 'GET',
		cache: 'no-store',
	})
	return await postsData.json()
}

export const getHeadingData = async () => {
	const headingData = await fetch('http://127.0.0.1:8000/api/v1/hpd', {
		method: 'GET',
	})
	return await headingData.json()
}

export const getPostData = async (id: string) => {
	const res = await fetch(`http://127.0.0.1:8000/api/v1/posts/${id}`, {
		method: 'GET',
		cache: 'no-store',
	})
	const data = await res.json()
	return data
}
