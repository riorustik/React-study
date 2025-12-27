export let state = {
    profile : {
        postsData: [
            {id: 1, message: 'Hi', likesCount: 23},
            {id: 2, message: 'How are you?', likesCount: 4},
            {id: 2, message: 'How are you?', likesCount: 4},

            {id: 2, message: 'What?', likesCount: 4},
            {id: 2, message: 'How are you?', likesCount: 4},
            {id: 2, message: 'How are you?', likesCount: 4},
            {id: 2, message: 'How are you?', likesCount: 4},
        ]
    },
    chats : {
        chatsData: [
            {id: 1, name: 'Дмитрий'},
            {id: 2, name: 'Рустам'},
            {id: 3, name: 'Максим'},
            {id: 4, name: 'Андрей'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Do you free seven 0\'clock?'},
        ],
    }
};


export function addPost(post, data = state.profile.postsData){
    data.push({
        id: 5,
        message: post,
        likesCount: 0

    })
}