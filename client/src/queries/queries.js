//query for gql module
import {gql} from 'apollo-boost';


//authors list query
const getAuthorsQuery=gql`
{
    authors{
        id
        name
    }
}
`;

//book list query
const getBooksQuery=gql `

{
    books{
        name
        type
        id
    }
}
`;
//creating mutation to add books
const addBookMutation=gql`

    # define mutation with parameters
    mutation($name:String!,$type:String!,$authorId:ID!){
    # use parameters
    addBook(
        name:$name,
        type:$type,
        authorId:$authorId
        )
        {
            id
            name
        }
    }

`;

//get book detail
const getBookQuery=gql`
    # set id as variable 
    query Getbook($id:ID){
        #get book using variable
        book(id:$id){
            id
            name
            type
            # author information
            author{
                id
                name
                age
                #for author's books
                books{
                    id
                    name
                }
            }
        }
    }
`;

//export query name
export {getAuthorsQuery,getBooksQuery,addBookMutation,getBookQuery};
