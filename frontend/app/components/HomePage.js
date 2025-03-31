'use client';
import { useEffect, useState } from 'react';

import Hero from './Hero';
import FeatureList from './FeatureList';
import SecondarySection from './SecondarySection';

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/main/homepage')
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Hero
        title={data.title}
        blurb={data.hero_blurb}
        image={data.hero_image}
        scheduleLink={data.schedule_link}
        callLink={data.call_link}
      />
      <FeatureList features={data.features} />
      <SecondarySection data={data.secondary_section} />
      {/* Features + Secondary Section coming next */}
    </>
  );
}
