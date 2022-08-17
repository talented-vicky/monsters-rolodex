import React from "react";
import {Card} from '../card/card.component'

import './card-list.styles.css'

export const CardList = props => (
    <div className="card-list">  
        { props.monsters.map(mons => (
            <Card key={mons.id} monster={mons}/>
        )) } 
    </div>
)
