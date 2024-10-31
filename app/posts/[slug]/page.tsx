import React from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'
import BlogPoster from '@/app/components/BlogPoster'

const markdown = '# Hi, *Pluto*!'

export default async function Page ({
  params,
}: {
  params: Promise<{ slug: string}>
}) {
  const slug  = (await params).slug
  return (
  <div>
    <BlogPoster/>
    {slug}
    <Markdown>{markdown}</Markdown>
  </div>
  )
}

