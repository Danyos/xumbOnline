export const DELETE_POST='DELETE_POST'
export const Api_UPDATE_POST='Api_UPDATE_POST'
export default function  ViewPost(state){
    return state.posts
}
export function Deletepost(id){
    return {
        type:DELETE_POST,
        post:id
    }

}
export function APIUPDATEPOST(data){
    return {
        type:Api_UPDATE_POST,
        payload:data
    }
}