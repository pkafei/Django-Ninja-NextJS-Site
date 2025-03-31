'use client';

import {
  TrashIcon,
  ArchiveBoxIcon,
  CubeIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  'Deep Kitchen Cleaning': TrashIcon,
  'Floor & Grout Cleaning': ArchiveBoxIcon,
  'Fridge & Cooler Cleaning': CubeIcon,
  'Ceiling, Wall & Light Fixture Cleaning': LightBulbIcon,
};

export default function FeatureList({ features }) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Kitchen Deep Cleaning Services We Offer
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.service_name] || TrashIcon;

            return (
              <div key={feature.id}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.service_name}
                </h3>
                <p className="mt-2 text-base text-gray-600">{feature.blurb}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
