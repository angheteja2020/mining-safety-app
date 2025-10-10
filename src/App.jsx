import React from 'react';
import { AlertTriangle } from 'lucide-react';

function App() {
  const hazards = [
    {
      id: 1,
      name: "Ground Instability",
      iconPath: "/images/icons/ground-instability.png",
      controls: {
        engineering: "Installation and maintenance of ground support.",
        administrative: "Exclusion zones and regular visual monitoring of the roof and walls."
      }
    },
    {
      id: 2,
      name: "Human-Equipment Interaction",
      iconPath: "/images/icons/human-equipment.png",
      controls: {
        engineering: "Installing proximity warnings systems in key pathways to alert workers to the presence of moving equipment including demonstration machinery.",
        administrative: "Clearly marked pedestrian pathways and visitors guidelines, including special areas for demonstration equipment."
      }
    },
    {
      id: 3,
      name: "Air Quality",
      iconPath: "/images/icons/air-quality.png",
      controls: {
        engineering: "Adequate mechanical ventilation to dilute and remove contaminants.",
        administrative: "Regular monitoring of air quality (dust, diesel gases, toxic gases, etc)."
      }
    },
    {
      id: 4,
      name: "Slips, Trips, and Falls",
      iconPath: "/images/icons/slips-trips-falls.png",
      controls: {
        administrative: "Housekeeping and area maintenance; unsafe conditions report form.",
        ppe: "Slip resistant footwear."
      }
    },
    {
      id: 5,
      name: "Stored Energy",
      iconPath: "/images/icons/stored-energy.png",
      controls: {
        administrative: "Lock-out and tag-out procedures for equipment maintenance.",
        engineering: "Safety guards in moving parts."
      }
    },
    {
      id: 6,
      name: "Electrical Hazards",
      iconPath: "/images/icons/electrical.png",
      controls: {
        engineering: "Use of ground fault circuit interruptors (GFCI) and ensuring that electric boxes are closed and protected.",
        administrative: "Regular inspections of cable and electrical equipment."
      }
    },
    {
      id: 7,
      name: "Fire",
      iconPath: "/images/icons/fire.png",
      controls: {
        engineering: "Properly marked and adequate fire extinguishers on mobile equipment and in key areas.",
        administrative: "Prohibition of unauthorized flammable materials and emergency response plan."
      }
    },
    {
      id: 8,
      name: "Confined Spaces",
      iconPath: "/images/icons/confined-spaces.png",
      controls: {
        administrative: "Entry permits for confined spaces; testing the surroundings before entry.",
        engineering: "Forced ventilation if necessary."
      }
    },
    {
      id: 9,
      name: "Noise",
      iconPath: "/images/icons/noise.png",
      controls: {
        administrative: "Isolation of noise sources or use of silencers.",
        ppe: "Mandatory hearing protection in high noise areas."
      }
    },
    {
      id: 10,
      name: "Wildlife",
      iconPath: "/images/icons/wildlife.png",
      controls: {
        administrative: "Keeping surface areas clear and without trash; training about local wildlife and response protocols.",
        engineering: "Sealing off unauthorized entrances to the mine."
      }
    }
  ];

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
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', margin: 0 }}>Major Safety Hazards</h1>
              <p style={{ color: 'rgb(254 202 202)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Mining Operations Safety Guide</p>
            </div>
          </div>
          <AlertTriangle style={{ width: '3rem', height: '3rem', color: 'rgb(253 224 71)' }} />
        </div>
      </header>

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
            gridTemplateColumns: '2.5fr 1fr 3fr',
            background: 'linear-gradient(to right, rgb(185 28 28), rgb(30 64 175))',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.125rem'
          }}>
            <div style={{ padding: '1rem', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>Major Safety Hazard</div>
            <div style={{ padding: '1rem', borderRight: '1px solid rgba(255, 255, 255, 0.2)', textAlign: 'center' }}>Symbol</div>
            <div style={{ padding: '1rem' }}>Critical Controls</div>
          </div>

          {/* Table Body */}
          {hazards.map((hazard, index) => (
            <div 
              key={hazard.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '2.5fr 1fr 3fr',
                borderBottom: index === hazards.length - 1 ? 'none' : '1px solid rgb(229 231 235)',
                background: index % 2 === 0 ? 'rgb(249 250 251)' : 'white',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(239 246 255)'}
              onMouseLeave={(e) => e.currentTarget.style.background = index % 2 === 0 ? 'rgb(249 250 251)' : 'white'}
            >
              {/* Hazard Name */}
              <div style={{
                padding: '1rem',
                borderRight: '1px solid rgb(229 231 235)',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    flexShrink: 0,
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
                  background: 'white', // Gradient background for the icon
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  padding: '0.5rem' // Padding for the white icon inside
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {hazard.controls.engineering && (
                    <div>
                      <strong style={{ color: 'rgb(30 58 138)' }}>Engineering:</strong>
                      <span style={{ color: 'rgb(55 65 81)', marginLeft: '0.5rem' }}>{hazard.controls.engineering}</span>
                    </div>
                  )}
                  {hazard.controls.administrative && (
                    <div>
                      <strong style={{ color: 'rgb(153 27 27)' }}>Administrative:</strong>
                      <span style={{ color: 'rgb(55 65 81)', marginLeft: '0.5rem' }}>{hazard.controls.administrative}</span>
                    </div>
                  )}
                  {hazard.controls.ppe && (
                    <div>
                      <strong style={{ color: 'rgb(21 128 61)' }}>PPE:</strong>
                      <span style={{ color: 'rgb(55 65 81)', marginLeft: '0.5rem' }}>{hazard.controls.ppe}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer style={{ marginTop: '2rem', textAlign: 'center', color: 'rgb(75 85 99)', fontSize: '0.875rem' }}>
          <p>Always follow safety protocols and report any hazards immediately.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;