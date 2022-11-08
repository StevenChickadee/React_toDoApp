import React from 'react';
//Components import
import ListSection_listEntity from "./ListSection_listEntity";

//List section
function ListSection({ listSection_list, listSection_listEntity_edit_text, listSection_listEntity_delete}) {
    
    //JSX
    return (
        //Section with list of all TO-DO entities
        <ul id="listSection">
            {listSection_list.map(listSection_listEntity => (
                <ListSection_listEntity
                    key={listSection_listEntity.id}
                    listSection_listEntity={listSection_listEntity}
                    id={listSection_listEntity.id}
                    listSection_listEntity_delete={(id) => listSection_listEntity_delete(id)}
                    listSection_listEntity_edit_text={(e, id) => listSection_listEntity_edit_text(e, id)} />
            ))}

        </ul>
    );
}

export default ListSection;