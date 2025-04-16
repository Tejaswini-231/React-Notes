import "./index.css";

function List(props){

    const groupName=props.groupOf;
    const items=props.name;

    // const group=colors.map(color=> <li>{color}</li>)    

    // const sortedList=colors.sort();     //regular sort

    // colors.sort((a,b)=>a.lovedBy-b.lovedBy);    //numerical order

    // colors.sort((a,b)=>b.lovedBy-a.lovedBy);    //reverse numerical order
 
    // colors.sort((a,b)=>a.name.localeCompare(b.name))   //alphabetical order

    // colors.sort((a,b)=>b.name.localeCompare(a.name))      //reverse alphabetical order

    //     const MostLoved=colors.filter(color=>color.lovedBy>50)

    //     const MostHated=colors.filter(color=>color.lovedBy<50)

    // const itemsList1=MostLoved.map(color=><li key={color.id}>
    //                                 {color.id} &nbsp; {color.name} : &nbsp; {color.lovedBy}
    //                                 </li>)

    // const itemsList2=MostHated.map(color=><li key={color.id}>
    //                             {color.id} &nbsp; {color.name} : &nbsp; {color.lovedBy}
    //                             </li>)


    const listItems=items.map(item=>
        <li key={item.id} className="item">
           <b> {item.name} </b> : &nbsp; <i>{item.lovedBy}%</i>
        </li>
    )


    return(
        <>
        <h3 className="Category">" <b>{groupName} "</b> Loved by people</h3>
            <ol className="list-items">
            {listItems}
                {/* {itemsList1}
                {itemsList2} */}
            </ol>
        </>
    );
}

export default List;