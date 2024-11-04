"use client"
import { useState, useEffect } from 'react'; // For client-side data fetching

export default function MyPage() {
  const [data, setData] = useState<String|null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const filePath = 'app/content/post.md'; // Replace with your actual path
      const res = await fetch(filePath); // Fetch from a URL or local file
      const data = await res.text();
      setData(data);
    };

    fetchData();
  }, []);

  // Use the fetched data in your component
  if (data) {
    console.log("====");
    return <div dangerouslySetInnerHTML={{ __html: data }} />; // Be cautious with raw HTML
  }

  return <div>Loading...</div>;
}