import React from 'react'

import "./react-tabs-pill.css";

import Button from './Button'
import { Link } from "@reach/router"

import ALL_MYSTERIES from '../data/mysteries'
import MysteriesList from './MysteriesList'

const categories = [
  "Joyful",
  "Luminous",
  "Sorrowful",
  "Glorious",
]

const Pray = ({ mysteryCategory }) => (
  <div>
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
  </div>
);

export default Pray;