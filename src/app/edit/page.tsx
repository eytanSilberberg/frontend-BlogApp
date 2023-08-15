import { getPostData } from '@/services/server.util.service'
import React from 'react'
import EditPageCmp from '@/components/edit/editPageCmp'
import { Post } from '../../types'
import { Metadata, ResolvingMetadata } from 'next'


type Props = {
    searchParams: { id: string }
}

export async function generateMetadata(
    {
        searchParams
    }: Props,
    parent?: ResolvingMetadata
): Promise<Metadata> {
    const { id } = searchParams
    console.log(id);
    let post = null
    let res = null
    if (id) {
        res = await getPostData(id)
        post = res.data
    }
    console.log(res);

    return {
        title: `Edit page-${post?.title ? post.title : ''}`,
        openGraph: {
            images: post?.image,
        },
    }
}


export default async function EditPage({ searchParams }: { searchParams: { id: string } }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = searchParams
    let post = null
    if (id) post = await getPostData(id)
    return (
        <EditPageCmp postSSR={post} />
    )
}
