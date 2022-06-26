import React, { useEffect, useState } from 'react';
import { Button, Badge, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import styled from 'styled-components';
import USAMap from "react-usa-map";
import icon from './icon.png'
 

const RED = "red";
const BLUE = "blue";

//"NH": {'gov': 'Chris Sununu', 'info': '107 N Main St # 208, Concord, NH 03301'},
const NEEDS_CONVINCING ={ 
  "MI": {'gov': 'Gretchen Whitmer', 'info': '111 S Capitol Ave, Lansing, MI 48933'},
  "ID": {'gov': 'Brad Little', 'info': '700 W Jefferson St #228, Boise, ID 83720'},
  "PA": {'gov': 'Tom Wolf', 'info': '508 Main Capitol Building, Harrisburg, PA 17120'},
  "VA": {'gov': 'Glenn Youngkin', 'info': '1111 E Broad St Ste 3, Richmond, VA 23219'},
  "NC": {'gov': 'Roy Cooper', 'info': '20301 Mail Service Ctr, Raleigh, NC 27699'},
  "WV": {'gov': 'Jim Justice', 'info': '1900 Kanawha Blvd E, East End, WV 25311'},
  "GA": {'gov': 'Brian Kemp', 'info': '206 Washington St SW Ste 111, Atlanta, GA 30334'},
  "FL": {'gov': 'Ron DeSantis', 'info': '400 S Monroe St, Tallahassee, FL 32399'},
  "AL": {'gov': 'Kay Ivey', 'info': '600 Dexter Ave, Montgomery, AL 36130'},
  "MS": {'gov': 'Tate Reeves', 'info': '550 High St Ste 19, Jackson, MS 39201'},
  "LA": {'gov': 'John Bel Edwards', 'info': '300 S Spring St Ste 16701, Los Angeles, CA 90013'},
  "TX": {'gov': 'Greg Abbott', 'info': '1100 San Jacinto Blvd, Austin, TX 78711'},
  "TN": {'gov': 'Bill Lee', 'info': '600 Dr Martin L King Jr Blvd, Nashville, TN 37243'},
  "KY": {'gov': 'Andy Beshear', 'info': '700 Capital Ave Ste 100, Frankfort, KY 40601'},
  "OH": {'gov': 'Mike DeWine', 'info': '77 S High St, Columbus, OH 43215'},
  "WI": {'gov': 'Tony Evers', 'info': '115 Capitol View Ter, Madison, WI 53703'},
  "IN": {'gov': 'Eric Holcomb', 'info': '200 W Washington St Ste 206, Indianapolis, IN 46204'},
  "MO": {'gov': 'Mike Parson', 'info': '201 W Capitol Ave, Jefferson City, MO 65101'},
  "AR": {'gov': 'Asa Hutchinson', 'info': '500 Woodlane St Ste 250, Little Rock, AR 72201'},
  "OK": {'gov': 'Kevin Stitt', 'info': '2300 N Lincoln Blvd Ste 212, Oklahoma City, OK 73105'},
  "AZ": {'gov': 'Doug Doucey (Tell him to go fuck himself)', 'info': '1700 W Washington St, Phoenix, AZ 85007'},
  "UT": {'gov': 'Spencer Cox', 'info': '350 N State St Ste 200, Salt Lake City, UT 84114'},
  "WY": {'gov': 'Mark Gordon', 'info': '200 W 24th St, Cheyenne, WY 82001'},
  "ND": {'gov': 'Doug Burgum', 'info': '600 E Boulevard Ave Ste 101, Bismarck, ND 58505'},
  "SD": {'gov': 'Kristi Noem', 'info': '500 E Capitol Ave, Pierre, SD 57501'},
  "SC": {'gov': 'Henry McMaster', 'info': '1100 Gervais St, Columbia, SC 29201'},
  "NE": {'gov': 'Pete Ricketts', 'info': '1445 K St, Lincoln, NE 68508'},
  "KS": {'gov': 'Laura Kelly', 'info': '300 SW 10th Ave, Topeka, KS 66612'},
  "MT": {'gov': 'Greg Gianforte', 'info': '1301 E 6th Ave, Helena, MT 59601'}
}
const OK_FOR_NOW = [
  "ME",
  "NH",
  "RI",
  "NY",
  "NJ",
  "MD",
  "IL",
  "IA",
  "MN",
  "CO",
  "NV",
  "CA",
  "OR",
  "WA",
  "AK",
  "HI",
  "MT",
  "VT",
  "DE",
  "DC",
  "CT",
  "RI",
  "MA",
  "NM"
]

const quotes = [
  "Birth Control - individual choice, safe contraceptive methods, as well as abortions when necessary - is a fundamental prerequisite for the emancipation of women. - Angela Davis",
  "Women's freedom is the sign of social freedom. - Rosa Lexemburg",
  "No pride for some of us without liberation for all of us. - Marsha P Johnson",
  "I wanted to be free. I wanted to express desires on my own, to shape my own life. - Alexandra Kollantai",
  "I am not free while any woman is unfree, even when her shackles are very different from my own. - Audre Lorde"
]

const Title = () => {
  return <h3>Abortion Security and Places You Can Go To Do Something About It</h3>;
}

const StyleTitle = styled(Title)`
  text-align: center;
`;

const Legend = () => {
  return (
    <div>
    <Badge bg="primary">Ok for now</Badge>{' '}<Badge bg="danger">Needs Convincing</Badge>
    </div>
  )
}

const StyledMapHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;


const CardImg = ({link}) => {
  return <a href={link}><img src={icon} height='90rem' width='90rem' alt="maps icon"/></a>
}

const StyledCardImg = styled(CardImg)`
  padding-bottom: 10px;
`;

const StateInfo = ({abbr, setCurState}) => {
  const link = 'https://maps.google.com/?q=' + NEEDS_CONVINCING[abbr].info;
  return (
    <Card style={{ width: '30rem', display: 'flex', 
                   flexDirection: 'column', alignItems: 'center' }}>
      <Card.Header style={{width: '100%'}}> 
      {quotes[Math.floor(quotes.length * Math.random())]} 
      </Card.Header>
      <Card.Body>
        <Card.Title> Abortion rights are banned or unsecure in {abbr}</Card.Title>
        <Card.Text>
          Your state governor <b>{NEEDS_CONVINCING[abbr].gov}</b> can change that.<br /> Their publicly available office is at:  
          <br /> <a href={link}>{NEEDS_CONVINCING[abbr].info}</a>  
        </Card.Text>
      </Card.Body>
      <StyledCardImg link={link} />
      <Button style={{width: '100%'}} onClick={() => setCurState('')}>Close</Button>
    </Card>
  );
}

const App = () => {
  const [curState, setCurState] = useState('');
  useEffect(() => {
    document.title = 'Roe V. Wade'
  }, [])
  /* mandatory */
  const mapHandler = (event) => {
    const abbr = event.target.dataset.name;
    alert('Abortions are protected for now in ' + abbr);
  };
 
  /* optional customization of filling per state and calling custom callbacks per state */
  const statesCustomConfig = () => {
    const blues = {};
    const reds = {};
    OK_FOR_NOW.forEach(abbr => blues[abbr] = {fill: BLUE});
    Object.entries(NEEDS_CONVINCING).forEach(([id, v]) => {
      reds[id] = {
        fill: RED,
        clickHandler: (event) => setCurState(event.target.dataset.name)
      }
    });

    const all = {...blues, ...reds};
    return all; 
  }
  return (
    <>
      <StyledMapHolder className="App">
        <StyleTitle />
        {
          curState === '' ? ( 
              <>
                <Legend />
                <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
                <p>{'*All state information is found publicly via google and all legal analysis is sourced from Guttmacher Institute, Center for Reproductive Rights, and Post reporting'}</p>
              </>
            )
            :
              <StateInfo abbr={curState} setCurState={setCurState} />
        }
      </StyledMapHolder>
    </>
  );
}
 
export default App;