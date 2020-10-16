function Mendchilgee(){//punkts component. props-ugui
    return <h1>hello</h1>;    
}
function Mendchilgee123(props){//Punkts component, props-toi
    return <h1> { props.ner} </h1>;
}
function Mendchilgee456(props){//Punkts component, props-toi, olon html renderlene
    return (<div>
                <h2> { props.ner} </h2>
                <p> { props.nas} </p>
            </div> 
        )
}
function EtsegComp(props){
    return(
        <div>
            <Mendchilgee/>
            <Mendchilgee123 ner={props.ner}/>
            <Mendchilgee456 ner={props.ner} nas={props.nas}/>
            <table>
                <tr><td>  {props.angi[0]}</td></tr>
                <tr><td>  {props.angi[1]}</td></tr>
                <tr><td>  {props.angi[2]}</td></tr>
            </table>
        </div>
    )
}


ReactDOM.render(
    // <Mendchilgee456 ner="Hello dorj" nas='20'/>,
    <EtsegComp ner="BMW" nas='19' angi={['SW','MC','HBBMC']}/>,
    document.getElementById('root')
);
