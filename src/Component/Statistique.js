import React, { useEffect, useState } from 'react';
import '../params/Statistique.css';

const Statistique = ({ titre, saison }) => {
  const [jsonData, setJsonData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://stat-basket.onrender.com/statistiques');
      
      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log('API Response:', data);
  
      setJsonData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <div className="body-content">
      <h3>Domicile/ {titre} </h3>
      <div className="stat_saison">
        <h2>{saison} SAISON STATS</h2>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>JOUEUR</th>
              <th>EQUIPE</th>
              <th>M</th>
              <th>PPM</th>
              <th>RPM</th>
              <th>PDPM</th>
              <th>MPM</th>
              <th>FG%</th>
              <th>3P%</th>
              <th>%LF</th>
            </tr>
          </thead>
          <tbody>
            {jsonData &&
              jsonData.Data.map((item, index) => (
                <tr key={index}>
                  <td>{item.joueur.nom}</td>
                  <td>{item.joueur.equipe.nom}</td>
                  <td>{item.pointsParMatch}</td>
                  <td>{item.pointsParMatch}</td>
                  <td>{item.rebondParMatch}</td>
                  <td>{item.passeDecisiveParMatch}</td>
                  <td>{item.minuteParMatch}</td>
                  <td>{item.tir}</td>
                  <td>{item.tir3points}</td>
                  <td>{item.tirLancerFranc}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistique;
