import Item from './Item'

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