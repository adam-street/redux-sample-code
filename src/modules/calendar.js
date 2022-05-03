export const LOGIN = 'calendar/LOGIN'
export const ADD = 'calendar/ADD'

const initState = {
    isLoggedIn: false,
    user_list: [
        {username: 'user1', password: 'pass1'},
        {username: 'user2', password: 'pass2'}
    ]
}

export default function reducer(state = initState, action) {
    switch (action?.type) {
        case LOGIN:
            console.log(state)
            console.log(action.creds)
            const user = state.user_list.find((user) => {
                return user?.username === action.creds.username
            })

            const validPass = user?.password === action.creds.password

            return {...state, isLoggedIn: validPass};
        case ADD:
            return {...state, user_list: [...state.user_list, action.foo]};
        default:
            return state;
    }
}