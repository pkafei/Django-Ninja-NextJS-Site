'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/main/homepage')
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="mt-4">{data.hero_blurb}</p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.features.map((feature) => (
          <div key={feature.id} className="border p-4 rounded shadow">
            <img src={feature.icon_url} alt="" className="w-8 h-8 mb-2" />
            <h2 className="text-xl font-semibold">{feature.service_name}</h2>
            <p>{feature.blurb}</p>
          </div>
        ))}
      </div>

      {data.secondary_section && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold">{data.secondary_section.title}</h2>
          <p className="mt-2">{data.secondary_section.blurb}</p>
        </div>
      )}
    </main>
  );
}
