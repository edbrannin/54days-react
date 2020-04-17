import React from 'react'
import { useParams } from "react-router-dom";

import "./react-tabs-pill.css";

import Button from './Button'

import { Link } from "react-router-dom";


import ALL_MYSTERIES from '../data/mysteries'
import MysteriesList from './MysteriesList'

const categories = [
  "Joyful",
  "Luminous",
  "Sorrowful",
  "Glorious",
]

const Pray = () => {
  const { mysteryCategory } = useParams();
  return (
    <React.Fragment>
      <Link to="/">
        <Button>
          Back
      </Button>
      </Link>
      <Link to="1">
        <Button>
          Start
      </Button>
      </Link>
      <MysteriesList mysteries={ALL_MYSTERIES[mysteryCategory]} />
    </React.Fragment>
  );
};

export default Pray;