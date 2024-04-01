import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export interface quizState {
  categories: any;
  questions: any;
  categoryLoading: boolean;
  questionsLoading: boolean;
  categoryError: string | null;
  questionsError: string | null;
  //questionsError: any;
}

const initialState: quizState = {
  categories: [],
  questions: [],
  categoryLoading: false,
  questionsLoading: false,
  categoryError: null,
  questionsError: null,
};

const API_URL = 'https://opentdb.com/';

export const getCategories = createAsyncThunk(
  'quiz/fetchCategories',
  async function () {
    const response = await axios.get(`${API_URL}api_category.php`);
    //console.log(response.data.trivia_categories);

    return response.data.trivia_categories;
  },
);

export const getQuestions = createAsyncThunk(
  'quiz/fetchQuestions',
  async function ({difficulty = '', category = ''}) {
    let custom_url = '';
    custom_url = difficulty.id && `&difficulty=${difficulty?.id}`;
    custom_url += category.id && `&category=${category?.id}`;
    const response = await axios.get(
      `${API_URL}api.php?amount=10${custom_url}`,
    );
    //console.log(response.data.results);
    return response.data.results;
  },
);

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //
      // Categories
      //
      .addCase(getCategories.pending, state => {
        state.categoryLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categoryLoading = false;
        state.categories = action.payload;
        state.categoryError = null;
        //console.log('data stored succesfully');
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.categoryLoading = false;
        state.categoryError = action.error.message;
      })
      //
      // Questions
      //
      .addCase(getQuestions.pending, state => {
        state.questionsLoading = true;
        //console.log('Questions fetch start');
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.questionsLoading = false;
        state.questions = action.payload;
        state.questionsError = null;
        //console.log('Questions data stored succesfully');
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.questionsLoading = false;
        state.questionsError = action.error.message;
        console.log(action.error.message);
      });
  },
});

export const {} = quizSlice.actions;

export default quizSlice.reducer;
