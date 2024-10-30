import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function markdownToHtml(filePath: string): Promise<{ content: string; data: any }> {
  // 读取 Markdown 文件
  console.log(filePath)
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // 使用 gray-matter 解析元数据和内容
  const { data, content } = matter(fileContents);

  // 使用 remark 将 Markdown 转换为 HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    content: contentHtml,
    data,
  };
}