export const TodoinitialState=[{
    id: 1,
    title: "This is a Laptop",
    body: "This is a Laptop, lorem inv and dolla`"
}]

export default function TodoSliceReducer(state=TodoinitialState , action) {
    if (action.type === "ADD_TODO") {

        return (
            [
                ...state,
                {
                    id: parseInt(Math.random() * 99999),
                    title: action.todo.title,
                    body: action.todo.body,
                }
            ]

        )
    }
    return state
}
