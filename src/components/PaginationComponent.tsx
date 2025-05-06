import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
     const [query,setQuery]= useSearchParams({pg:'1'});


    return (
        <div>
             <button onClick={()=>{
                const pg=query.get('pg');
                if(pg){
                    let currentPage =+pg;
                    setQuery({pg:(--currentPage).toString()});
                }
             }}>Prev</button>

             <button onClick={()=>{
                 const pg=query.get('pg');
                 if(pg){
                     let currentPage =+pg;
                     setQuery({pg:(++currentPage).toString()});
                 }
             }}>Next</button>
        </div>
    );
};

export default PaginationComponent;