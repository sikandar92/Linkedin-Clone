import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>Linked in News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        'Imran khan is elected new prime minister of Pakistan 2023',
        'Top news - PTV'
      )}
      {newsArticle('Cronavirus: pakistan updates', 'Top news - PTV')}
      {newsArticle('Tesla hits new highs', 'Top news - PTV')}
      {newsArticle('Bitcoin Break', 'Top news - PT')}
      {newsArticle('IT is top trend in Pakistan 2023', 'Top news - PTV')}
      {newsArticle(
        'Agaicode Technologies IT company lanch new technologs 2023',
        'Top news - PTV'
      )}
    </div>
  );
}

export default Widgets;
// 348
