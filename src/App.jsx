import React, { useState } from 'react';
import { AlertTriangle, Search, Filter, X, Globe, ChevronUp, ChevronDown } from 'lucide-react';
import NotesSection from './NotesSection.jsx'
import { translations } from './translations.js';

// Static data that doesn't change with language
const hazardsData = [
  { id: 1, iconPath: "/images/icons/ground-instability.png" },
  { id: 2, iconPath: "/images/icons/human-equipment.png" },
  { id: 3, iconPath: "/images/icons/air-quality.png" },
  { id: 4, iconPath: "/images/icons/slips-trips-falls.png" },
  { id: 5, iconPath: "/images/icons/electrical.png" },
  { id: 6, iconPath: "/images/icons/fire.png" },
  { id: 7, iconPath: "/images/icons/confined-spaces.png" },
  { id: 8, iconPath: "/images/icons/wildlife.png" },
];

function App() {
  const [language, setLanguage] = useState('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'engineering', 'administrative', 'ppe'
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const [expandedHazardId, setExpandedHazardId] = useState(null);

  const [allNotes, setAllNotes] = useState(() => {
    const saved = localStorage.getItem('hazardNotes');
    return saved ? JSON.parse(saved) : {};
  }); 

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'es' : 'en');
  };
  
  // Combine static data with translations
  const hazards = hazardsData.map((hazardBase, index) => ({
    ...hazardBase,
    ...t.hazards[index], // Assumes order is the same and correct
    name: t.hazards[index].name, // Ensure translated name is used for filtering
  }));

  const toggleSearch = () => {
    if (isSearchVisible) {
      setSearchTerm('');
    }
    setIsSearchVisible(!isSearchVisible);
  };

  const filteredHazards = hazards.filter(hazard => {
    const matchesSearch = hazard.name.toLowerCase().includes(searchTerm.toLowerCase());
    let matchesFilter = true;
    if (filterType !== 'all') {
      matchesFilter = hazard.controls[filterType] !== undefined;
    }
    return matchesSearch && matchesFilter;
  });

  React.useEffect(() => {
    localStorage.setItem('hazardNotes', JSON.stringify(allNotes));
  }, [allNotes]);

  // Toggle expandir/colapsar hazard
  const toggleExpand = (hazardId) => {
    setExpandedHazardId(expandedHazardId === hazardId ? null : hazardId);
  };

  // Funciones para manejar notas
  const handleAddNote = (hazardId, note) => {
    setAllNotes(prev => ({
      ...prev,
      [hazardId]: [...(prev[hazardId] || []), note]
    }));
  };

  const handleDeleteNote = (hazardId, noteId) => {
    setAllNotes(prev => ({
      ...prev,
      [hazardId]: (prev[hazardId] || []).filter(note => note.id !== noteId)
    }));
  };

  const handleEditNote = (hazardId, noteId, newText) => {
    setAllNotes(prev => ({
      ...prev,
      [hazardId]: (prev[hazardId] || []).map(note => 
        note.id === noteId ? { ...note, text: newText } : note
      )
    }));
  };

 return (
  <div style={{ 
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, rgb(254 242 242), rgb(239 246 255))',
    fontFamily: 'sans-serif'
  }}>
    {/* Header */}
    <header style={{
      background: 'linear-gradient(to right, rgb(153 27 27), rgb(30 58 138))',
      color: 'white',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '5rem',
            height: '5rem',
            background: 'white',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}>
            <img 
              src="/images/logo.png" 
              alt="University Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '0.25rem'
              }}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  target.nextElementSibling.style.display = 'block';
                }
              }}
            />
            <span style={{
              color: 'rgb(153 27 27)',
              fontWeight: 'bold',
              fontSize: '0.75rem',
              textAlign: 'center',
              display: 'none',
              padding: '0.5rem'
            }}>UNIVERSITY<br/>LOGO</span>
          </div>
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', margin: 0 }}>{t.headerTitle}</h1>
            <p style={{ color: 'rgb(254 202 202)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{t.headerSubtitle}</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleLanguage} 
            title="Change Language"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '0.375rem',
              padding: '0.5rem 0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'white',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            <Globe size={20}/>
            <span>{language.toUpperCase()}</span>
          </button>
          <AlertTriangle style={{ width: '3rem', height: '3rem', color: 'rgb(253 224 71)' }} />
        </div>
      </div>
    </header>

    {/* Search and Filter Bar */}
    <div style={{
      background: 'white',
      borderBottom: '2px solid rgb(229 231 235)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1.5rem 1rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Filter Buttons */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Filter style={{ color: 'rgb(107 114 128)', width: '20px', height: '20px' }} />
            <span style={{ color: 'rgb(107 114 128)', fontSize: '0.875rem', fontWeight: '600' }}>{t.filterLabel}</span>
          
            <button onClick={() => setFilterType('all')} style={{...buttonStyle, ...(filterType === 'all' ? activeButtonStyle : {})}}>
              {t.filterAll} ({hazards.length})
            </button>
            <button onClick={() => setFilterType('engineering')} style={{...buttonStyle, ...(filterType === 'engineering' ? activeButtonStyle : {color: 'rgb(30 58 138)'})}}>
              {t.filterEngineering}
            </button>
            <button onClick={() => setFilterType('administrative')} style={{...buttonStyle, ...(filterType === 'administrative' ? {...activeButtonStyle, background: 'rgb(153 27 27)'} : {color: 'rgb(153 27 27)'})}}>
              {t.filterAdministrative}
            </button>
            <button onClick={() => setFilterType('ppe')} style={{...buttonStyle, ...(filterType === 'ppe' ? {...activeButtonStyle, background: 'rgb(21 128 61)'} : {color: 'rgb(21 128 61)'})}}>
              {t.filterPpe}
            </button>
          </div>

          {/* Search Component */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {isSearchVisible && (
              <div style={{ position: 'relative' }}>
                <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgb(107 114 128)', width: '20px', height: '20px' }} />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  autoFocus
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '250px',
                    padding: '0.75rem 1rem 0.75rem 2.75rem',
                    border: '2px solid rgb(229 231 235)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgb(30 64 175)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgb(229 231 235)'}
                />
              </div>
            )}
            <button 
              onClick={toggleSearch} 
              title={isSearchVisible ? t.closeSearch : t.openSearch} 
              style={{ background: 'rgb(243 244 246)', border: 'none', borderRadius: '50%', padding: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              {isSearchVisible ? <ChevronUp color='rgb(107 114 128)' size={20} /> : <Search color='rgb(107 114 128)' size={20} />}
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ marginTop: '1rem', color: 'rgb(107 114 128)', fontSize: '0.875rem' }}>
          <strong>{t.resultsCounter.replace('{count}', filteredHazards.length).replace('{total}', hazards.length)}</strong>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{
        background: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        {/* Table Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          background: 'linear-gradient(to right, rgb(185 28 28), rgb(30 64 175))',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.125rem'
        }}>
          <div style={{ padding: '1rem', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>{t.tableHeaderHazard}</div>
          <div style={{ padding: '1rem', borderRight: '1px solid rgba(255, 255, 255, 0.2)', textAlign: 'center' }}>{t.tableHeaderSymbol}</div>
          <div style={{ padding: '1rem' }}>{t.tableHeaderControls}</div>
        </div>

        {/* Table Body */}
        {filteredHazards.length > 0 ? (
          filteredHazards.map((hazard, index) => (
            <div key={hazard.id}>
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  borderBottom: expandedHazardId === hazard.id ? 'none' : '1px solid rgb(229 231 235)',
                  background: index % 2 === 0 ? 'rgb(249 250 251)' : 'white',
                  transition: 'background-color 0.2s',
                  cursor: 'pointer'
                }}
                onClick={() => toggleExpand(hazard.id)}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(239 246 255)'}
                onMouseLeave={(e) => e.currentTarget.style.background = index % 2 === 0 ? 'rgb(249 250 251)' : 'white'}
              >
                {/* Hazard Name + Chevron */}
                <div style={{
                  padding: '1rem',
                  borderRight: '1px solid rgb(229 231 235)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '50%',
                      background: 'rgb(185 28 28)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '0.875rem'
                    }}>
                      {hazard.id}
                    </span>
                    <span style={{ fontWeight: '600', color: 'rgb(31 41 55)' }}>{hazard.name}</span>
                  </div>
                  {expandedHazardId === hazard.id ? (
                    <ChevronUp style={{ width: '1.25rem', height: '1.25rem', color: 'rgb(107 114 128)' }} />
                  ) : (
                    <ChevronDown style={{ width: '1.25rem', height: '1.25rem', color: 'rgb(107 114 128)' }} />
                  )}
                </div>

                {/* Symbol */}
                <div style={{
                  padding: '1rem',
                  borderRight: '1px solid rgb(229 231 235)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    background: 'white',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.5rem'
                  }}>
                    <img 
                      src={hazard.iconPath} 
                      alt={hazard.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>

                {/* Critical Controls */}
                <div style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {hazard.controls.engineering && (
                      <div>
                        <span style={{ fontWeight: '600', color: 'rgb(30 58 138)' }}>{t.controlEngineering}:</span>
                        <span style={{ color: 'rgb(55 65 81)', marginLeft: '0.5rem' }}>{hazard.controls.engineering}</span>
                      </div>
                    )}
                    {hazard.controls.administrative && (
                      <div>
                        <span style={{ fontWeight: '600', color: 'rgb(153 27 27)' }}>{t.controlAdministrative}:</span>
                        <span style={{ color: 'rgb(55 65 81)', marginLeft: '0.5rem' }}>{hazard.controls.administrative}</span>
                      </div>
                    )}
                    {hazard.controls.ppe && (
                      <div>
                        <span style={{ fontWeight: '600', color: 'rgb(21 128 61)' }}>{t.controlPpe}:</span>
                        <span style={{ color: 'rgb(55 65 81)', marginLeft: '0.5rem' }}>{hazard.controls.ppe}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Notes Section - Only when expanded */}
              {expandedHazardId === hazard.id && (
                <NotesSection
                  hazardId={hazard.id}
                  notes={allNotes[hazard.id] || []}
                  onAddNote={handleAddNote}
                  onDeleteNote={handleDeleteNote}
                  onEditNote={handleEditNote}
                  t={t}
                />
              )}
            </div>
          ))
        ) : (
          <div style={{
            padding: '3rem',
            textAlign: 'center',
            color: 'rgb(107 114 128)'
          }}>
            <p style={{ fontSize: '1.125rem', fontWeight: '600' }}>{t.noHazardsFound}</p>
            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{t.tryAdjusting}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ marginTop: '2rem', textAlign: 'center', color: 'rgb(75 85 99)', fontSize: '0.875rem' }}>
        <p>{t.footerText}</p>
      </footer>
    </main>
  </div>
);
}

// Button styles for filters
const buttonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '0.375rem',
  border: 'none',
  fontWeight: '600',
  fontSize: '0.875rem',
  cursor: 'pointer',
  transition: 'all 0.2s',
  background: 'rgb(243 244 246)',
  color: 'rgb(55 65 81)'
};

const activeButtonStyle = {
  background: 'rgb(30 58 138)',
  color: 'white'
};


export default App;