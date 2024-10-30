import { GetStaticProps, GetStaticPaths } from 'next';
import { markdownToHtml } from '../../lib/markdownToHtml';

interface PostProps {
  content: string;
  data: {
    title: string;
    date: string;
  };
}

export default function Post({ content, data }: PostProps) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'post' } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  if(!slug) {
    return {
      notFound: true,
    }
  }
  const filePath = `/content/${slug}.md`;
  console.log(filePath);
  const { content, data } = await markdownToHtml(filePath);

  return {
    props: {
      content,
      data,
    },
  };
};