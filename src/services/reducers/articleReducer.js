import { actionTypes } from "../actions/actionTypes";
const initState = {
    articles: [{
        id: 0,
        attributes: {
            title: "",
            slug: "",
            content: ""
        }
    }],
    articles: {
        id: 0,
        attributes: {
            title: "",
            slug: "",
            content: ""
        }
    }
}

// check action and state
export const articleReducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.fetch_articles:
            return {...state, articles: action.data}
        case actionTypes.search_articles: 
            return {...state, articles: action.data}
        case actionTypes.fetch_one_article:
            return {...state, article: action.data}
        default: 
            return state
    }
}