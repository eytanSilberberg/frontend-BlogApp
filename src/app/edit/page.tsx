import { getPost } from '@/services/util.service'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import EditPageCmp from '@/components/edit/editPageCmp'
import { Post, PostData } from '../types'
// import EditPageCmp from '../components/edit/editPageCmp'

export default async function EditPage({ searchParams }: { searchParams: { id: string } }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = searchParams
    let post = null
    if (id) {
        const res = await fetch(`http://127.0.0.1:8000/api/v1/posts/${id}`, {
            method: 'GET',
            cache: 'no-store',
        })
        post = await res.json()
        console.log('data', post);
    }
    return (
        <EditPageCmp postSSR={post} />
    )
}
