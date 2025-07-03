import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarCategoryPage, { carTabs } from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Navigate to="/dashboard/supercars" replace />} />
        {carTabs.map(tab => (
          <Route
            key={tab.slug}
            path={`/dashboard/${tab.slug}`}
            element={<CarCategoryPage category={tab.slug} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
