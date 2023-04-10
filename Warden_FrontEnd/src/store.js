import { configureStore} from '@reduxjs/toolkit'
import { questionaireReducer_ } from './components/Admin/QuestionaireTemplates/QuestionaireReducer'


// Create your Redux store with potentially multiple reducer pairs
export const store = configureStore({
    reducer: {
        QuestionaireTemplates: questionaireReducer_
    }
});