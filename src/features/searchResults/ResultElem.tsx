import React from 'react';

interface ResultElemProps {
  title: string;
  logo: string;
  date: string;
  description: string;
}

function ResultElem({
  title,
  logo,
  date,
  description,
}: ResultElemProps) {
  return (
    <div className="mb-3 d-flex result-elem">
      <div className="logo-wrapper flex-shrink-0">
        <img src={logo} alt="logo" />
      </div>
      <div className="data-wrapper flex-grow-1">
        <h6 className="m-0 fs-5 fw-bold">{title}</h6>
        <p className="text-muted">{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ResultElem;
