import React from 'react'
import Sidebar from './Sidebar'
import HomepageCard from './Homepage'
import HomepageInterface from './HomepageInterface'


const items = [
  { name: 'home', label: 'Home' },
  { name: 'skate', label: 'Skateboarding'},
  { name: 'yoga', label: 'Yoga'},
  { name: 'singing', label: 'Singing'},
  { name: 'running', label: 'Running'},
  { name: 'drumming', label: 'Drumming'},
  { name: 'guitar', label: 'Guitar'},
  { name: 'music production', label: 'Music Production'},
  { name: 'coding', label: 'Coding'},
  { name: 'music theory', label: 'Music Theory'},
  { name: 'tagalog', label: 'Tagalog'},
]

function App() {
  return (
    <div>
      <Sidebar items={items} />
      <HomepageInterface />
    </div>
  )
} 

export default App