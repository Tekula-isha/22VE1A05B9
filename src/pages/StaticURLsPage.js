import React, { useEffect, useState } from 'react';

function StaticURLsPage() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchURLs = async () => {
      const res = await fetch('http://localhost:3000/api/shortner');
      const data = await res.json();
      setUrls(data);
    };
    fetchURLs();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>All Shortened URLs</h2>
      {urls.length === 0 ? (
        <p>No URLs found.</p>
      ) : (
        <ul>
          {urls.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong>: {item.url}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StaticURLsPage;
