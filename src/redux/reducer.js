import data from "./data"

const intialstate = {
    products: data.products,
    tags: data.tags,
    users: data.users,
    cart: data.cart,
    orders: data.orders,
    filters: data.filters,
    tagname: [],
    search: '',
    col: 'id',
    order: true,
    loggedin: false,
    user: null
}
function reducer(state = intialstate, action) {
    console.log("---from---reducer.js", action)
    switch (action.type) {
        case "tagname": return { ...state, tagname:[...state.tagname, action.value] }
        case "search": return { ...state, search: action.value }
        case "col": return { ...state, col: action.col, order: action.order }
        case "login": return { ...state, user: action.user,loggedin:true, }
        case "logout": return { ...state, user:null,loggedin:false, }
        case "signup": return { ...state, users:action.payload, }
        default: return state
    }
}
export default reducer