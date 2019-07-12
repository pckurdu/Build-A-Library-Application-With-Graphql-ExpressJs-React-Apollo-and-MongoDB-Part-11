//for create component
import React,{Component} from 'react';
//for use graphql query
import {graphql} from 'react-apollo';

//for use getBookQuery 
import {getBookQuery} from '../queries/queries';

//create component class
class BookDetails extends Component{
    showBookDetail(){
        //access to the book's information
        const {book}=this.props.data;
        //if there is a book
        if(book){
            return(
                //book information
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.type}</p>
                    <p>{book.author.name}</p>
                    {/* comes author's other books  */}
                    <ul className="other-books"> 
                        {book.author.books.map(b=>{
                            return <li key={b.id}>{b.name}</li>
                        })}
                    </ul>
                    
                </div>
            )
        }
        else{
            return(<div>Please select book for details</div>)
        }
    }
    render(){
        //show props
        console.log(this.props);
        
        return(
            <div id="book-details">
                {this.showBookDetail()}
            </div>
        );
    }
}

//export this component and getBookQuery
export default graphql(getBookQuery,{
    options:(props)=>{
        return{
            //run getBookQuery with bookId
            variables:{
                id:props.bookId
            }
        }
    }
}) (BookDetails)