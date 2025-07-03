import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DashboardPage.css';

export const fallbackImg = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80';

export const carTabs = [
  {
    label: 'Supercars',
    slug: 'supercars',
    cars: [
      {
        name: 'Lamborghini Aventador',
        award: 'Supercar of the Year',
        date: '2023',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Ferrari 488 GTB',
        award: 'Design Award',
        date: '2022',
        image: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'McLaren 720S',
        award: 'Performance Award',
        date: '2024',
        image: 'https://images.unsplash.com/photo-1465146344425-f00d5f8b7885?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    label: 'SUVs',
    slug: 'suvs',
    cars: [
      {
        name: 'Range Rover Sport',
        award: 'Luxury SUV',
        date: '2023',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Tesla Model X',
        award: 'Electric SUV',
        date: '2024',
        image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'BMW X5',
        award: 'Best Handling',
        date: '2022',
        image: 'https://images.unsplash.com/photo-1511391403515-1c1c5b8a1cfa?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    label: 'Classics',
    slug: 'classics',
    cars: [
      {
        name: 'Ford Mustang 1967',
        award: 'Classic Icon',
        date: '1967',
        image: 'https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Chevrolet Camaro SS',
        award: 'Muscle Car',
        date: '1969',
        image: 'https://images.unsplash.com/photo-1503736318-1c1c5b8a1cfa?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Porsche 911 Carrera',
        award: 'Timeless Design',
        date: '1973',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    label: 'Electric',
    slug: 'electric',
    cars: [
      {
        name: 'Tesla Roadster',
        award: 'Electric Supercar',
        date: '2023',
        image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Porsche Taycan',
        award: 'Performance EV',
        date: '2022',
        image: 'https://images.unsplash.com/photo-1503736323876-1d1b7c1e1b8e?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Lucid Air',
        award: 'Luxury Electric',
        date: '2024',
        image: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    label: 'Concepts',
    slug: 'concepts',
    cars: [
      {
        name: 'Mercedes-Benz Vision AVTR',
        award: 'Futuristic Design',
        date: '2025',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'BMW Vision Next 100',
        award: 'Innovation Award',
        date: '2024',
        image: 'https://images.unsplash.com/photo-1465146344425-f00d5f8b7885?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Audi AI:ME',
        award: 'Urban Concept',
        date: '2023',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
];

export default function CarCategoryPage({ category }) {
  const location = useLocation();
  const tab = carTabs.find(t => t.slug === category);
  if (!tab) return <div style={{ color: '#fff', textAlign: 'center', marginTop: 64 }}>Category not found.</div>;
  return (
    <div className="dashboard-container">
      <nav className="dashboard-tabs animate-slide-up">
        {carTabs.map(t => (
          <Link
            key={t.slug}
            to={`/dashboard/${t.slug}`}
            className={`dashboard-tab${category === t.slug ? ' active' : ''}`}
            style={{ textDecoration: 'none' }}
          >
            {t.label}
          </Link>
        ))}
      </nav>
      <header className="dashboard-header animate-fade-in">
        <h1>{tab.label} — Cars Collection Website</h1>
        <p>Explore the world's finest {tab.label.toLowerCase()}.</p>
      </header>
      <section className="dashboard-projects animate-fade-in-delay">
        <h2>{tab.label}</h2>
        <div className="projects-list">
          {tab.cars.map((car, i) => (
            <div className="project-card animate-pop-in" key={car.name + i}>
              <div className="project-image-enhanced">
                <img
                  src={car.image}
                  alt={car.name}
                  onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
                />
              </div>
              <div className="project-info">
                <h3>{car.name}</h3>
                <span className="award-badge">{car.award}</span>
                <p>{car.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="dashboard-footer animate-fade-in">
        <span>© 2024 Cars Collection Website — All rights reserved</span>
      </footer>
    </div>
  );
} 