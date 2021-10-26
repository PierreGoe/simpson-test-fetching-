function QuoteCard({simpsons}) {

    return (


        

        <div className='DisplayEmployee'>
    
            <img src={simpsons.image} alt={simpsons.character} />
    
            <ul>
    
    
            <li>
    
                Name: {simpsons.character}
    
            </li>
    
            <li>Quote: {simpsons.quote}</li>
    
    
            </ul>
    
        </div>
    
          
    );
}



export default QuoteCard
