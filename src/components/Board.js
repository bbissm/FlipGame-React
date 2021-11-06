import React from 'react';
import Item from './Item'
import uuidv4 from 'uuid/dist/v4'

function Board({icons}) {

    return (
        <div className="max-w-md mx-auto my-12 h-96 center grid grid-cols-4 gap-8">
            {icons.map(icon => {
                return <Item
                    key={icon.id}
                    icon={icon}
                    style={icon.IconStyle}
                />
            })}
        </div>
    )
}

export default Board;