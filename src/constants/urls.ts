const baseUrl = 'https://jsonplaceholder.typicode.com';
export const urls = {
    users:{
        allUsers : baseUrl + '/users',
        byId: (id: number) => {
            return  baseUrl + '/' + id
        }
    },
    posts : {
        allPosts : baseUrl + '/posts',
        byId: (id: number) =>  baseUrl + '/' + id,
        userPostsById: (id: number) => baseUrl + '/posts?userId=' + id

    },
    comments : {
        allComments : baseUrl + '/posts',
        byId: (id: number) =>  baseUrl + '/' + id,
        userCommentsById: (id: number) => baseUrl + '/comments?userId=' + id

    }
}
const urlDummyJSON = 'https://dummyjson.com';
export const urlDJ = {
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

        }

}
