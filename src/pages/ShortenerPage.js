import React, { useState } from 'react';

function ShortenerPage() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [shortened, setShortened] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/shortner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, url }),
    });

    const data = await res.json();
    if (res.ok) {
      setShortened(data);
      setName('');
      setUrl('');
    } else {
      alert(data.error || 'Something went wrong');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Shorten Your URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ display: 'block', margin: '1rem 0' }}
        />
        <input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{ display: 'block', margin: '1rem 0' }}
        />
        <button type="submit">Shorten</button>
      </form>

      {shortened && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Shortened:</strong>
          <p>Name: {shortened.name}</p>
          <p>URL: {shortened.url}</p>
        </div>
      )}
    </div>
  );
}

export default ShortenerPage;
