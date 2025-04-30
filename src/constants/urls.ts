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
const secondBaseUrl = 'https://dummyjson.com';
export const urlTwo = {
    users: {
        allUsers: secondBaseUrl + '/users',
        byId: (id: number) => {
            return secondBaseUrl + '/' + id
        },
    },

    posts: {
            allPosts: secondBaseUrl + '/posts',
            byId: (id: number) => secondBaseUrl + '/' + id,
            userSecondPostsById: (id: number) => secondBaseUrl + '/posts?userId=' + id

        }

}