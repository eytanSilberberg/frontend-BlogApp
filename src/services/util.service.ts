'use client'
import { Post, ToastInput } from '@/types'
import axios from 'axios'
export const getPosts = async () => {
	const res = await fetch('http://127.0.0.1:8000/api/v1/posts/', {
		method: 'GET',
	})
	const data = await res.json()
	return data
}

export const getHpData = async () => {
	const res = await axios.get('http://127.0.0.1:8000/api/v1/hpd')
	const data = await res.data
	return data
}

export const getPost = async (id: string) => {
	const res = await fetch(`http://127.0.0.1:8000/api/v1/posts/${id}`, {
		method: 'GET',
	})
	const data = await res.json()
	return data
}

export const updatePost = async (id: string, post: Post) => {
	console.log('asdfasdfasdf')
	const res = await axios.put(`http://127.0.0.1:8000/api/v1/posts/${id}`, post)
	const data = res.data.data

	return data
}
export const savePost = async (post: Post) => {
	const res = await axios.post(`http://127.0.0.1:8000/api/v1/posts/`, post)

	return res.data.data
}
export const deletePost = async (id: string) => {
	const res = await axios.delete(`http://127.0.0.1:8000/api/v1/posts/${id}`)
	const data = await res.data
	return data
}

export const chakraToastSuccess = (message: string) => {
	return {
		title: 'Success!',
		description: message,
		position: 'top',
		status: 'success',
		duration: 3000,
		isClosable: true,
	} as ToastInput
}

export const chakraToastError = (message: string) => {
	return {
		title: 'Error!',
		description: message,
		status: 'error',
		duration: 3000,
		position: 'top',
		isClosable: true,
	} as ToastInput
}

export const headerButtons = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Posts',
		path: '/posts',
	},
	{
		name: 'Edit',
		path: '/edit',
	},
]

export const footerDummyLinks = {
	group1: ['Tutorials', 'Pricing', 'Releases'],
	group2: ['About Us', 'Press', 'Careers', 'Contact Us', 'Partners'],
	group3: [
		'Terms of Service',
		'Privacy Policy',
		'Cookie Policy',
		'Security',
		'GDPR Compliance',
	],
	group4: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'],
}
