import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import feather from 'feather-icons';
import './i18n';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="App-nav">
        <div className="nav-left">
          <img src="/images/logo.jpg" alt="Logo" className="logo" />
        </div>
        <div className="language-switcher">
          <img 
            src="/images/en-flag.png" 
            alt="English" 
            className="lang-flag" 
            onClick={() => changeLanguage('en')} 
          />
          <img 
            src="/images/fr-flag.jpeg" 
            alt="Français" 
            className="lang-flag" 
            onClick={() => changeLanguage('fr')} 
          />
        </div>
      </nav>

      {/* Header */}
      <header className="App-header">
        <div className="header-content">
          <h1 className="App-title">{t('features.latestFootballInfo')}</h1>
          {/* Cards */}
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="feature-item text-center">
              <i data-feather="check-circle" className="text-4xl mb-4 icon-transition hover:text-green-500"></i>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t('features.easyToUse')}</h3>
              <p className="text-base text-gray-700">{t('features.easyToUseDesc')}</p>
            </div>
            <div className="feature-item text-center">
              <i data-feather="lock" className="text-4xl mb-4 icon-transition hover:text-blue-500"></i>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t('features.secure')}</h3>
              <p className="text-base text-gray-700">{t('features.secureDesc')}</p>
            </div>
            <div className="feature-item text-center">
              <i data-feather="bar-chart-2" className="text-4xl mb-4 icon-transition hover:text-purple-500"></i>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t('features.realTimeAnalytics')}</h3>
              <p className="text-base text-gray-700">{t('features.realTimeAnalyticsDesc')}</p>
            </div>
            <div className="feature-item text-center">
              <i data-feather="rss" className="text-4xl mb-4 icon-transition hover:text-orange-500"></i>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t('features.latestNews')}</h3>
              <p className="text-base text-gray-700">{t('features.latestNewsDesc')}</p>
            </div>
            <div className="feature-item text-center">
              <i data-feather="activity" className="text-4xl mb-4 icon-transition hover:text-red-500"></i>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t('features.latestFootballInfo')}</h3>
              <p className="text-base text-gray-700">{t('features.latestFootballInfoDesc')}</p>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
