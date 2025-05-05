const baseUrl = 'https://jsonplaceholder.typicode.com'
export const urlJsonPlaceholder = {
    users:{
        allUsers : baseUrl+'/users',
        byId: (id: number) => {
            return  baseUrl +'/'+ id
        }
    },
    posts : {
        allPosts : baseUrl+'/posts',
        byId: (id: number) =>  baseUrl+'/'+id,
        userPostsById: (id: number) => baseUrl + '/posts'+id

    },
    comments : {
        allComments : baseUrl+'/comments',
        byId: (id: number) =>  baseUrl+'/'+id,
        userCommentsById: (id: number) => baseUrl + '/comments'+id

    }
}







const urlDummyJSON = 'https://dummyjson.com';
export const urlDummyJson= {
    users: {
        allUsers: urlDummyJSON + '/users',
        byId: (id: number) => {
            return urlDummyJSON + '/' + id
        },
    },

    posts: {
        allPosts: urlDummyJSON + '/posts',
        byId: (id: number) => urlDummyJSON + '/' + id,
        userDummyJSONPostsById: (id: number) => urlDummyJSON + '/posts?userId=' + id

        },
    comments : {
        allComments : urlDummyJSON + '/posts',
        byId: (id: number) =>  urlDummyJSON + '/' + id,
        userDummyJSONCommentsById: (id: number) => urlDummyJSON + '/comments?userId=' + id

    }

}
