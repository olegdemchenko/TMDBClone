import React from 'react';
import ResultElem from './ResultElem';

function ResultsList() {
  const example = {
    title: 'Friends',
    date: 'September 22, 1994',
    logo: '',
    description: 'Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six friends in their 20s and 30s who live in Manhattan, New York City. The series was produced by Bright/Kauffman/Crane Productions, in association with Warner Bros. Television. The original executive producers were Kevin S. Bright, Kauffman, and Crane.',
  };
  return (
    <div className="ps-4">
      {Array(10).fill(example).map((item) => (
        <ResultElem
          title={item.title}
          date={item.date}
          logo={item.logo}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default ResultsList;
