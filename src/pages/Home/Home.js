import React from 'react'
import { Link } from 'react-router-dom'

import './homee.css'

export default function Home() {

    return (
        <div className='body'>
            <div className='nav'>
                <h1 className='logo tracking-in-contract '>YogaAI</h1>
            </div>


            <div className='divBox'>
                <h1 className="center details">Welcome to AI Yoga Wellness Hub</h1>

                <div className="center">
                    <Link to='/start'>
                        <button>
                            <span>Start</span>
                        </button>
                    </Link>
                    <Link to='/tutorials'>
                        <button>
                            <span>Tutorial</span>
                        </button>
                    </Link>

                </div>
            </div>
        <footer>
        <p>&copy;2024 Krishnendu and team | All Rights Reserved</p>
        </footer>
        </div>
    )
}
