import NewsBoard from "./NewsBoard.js";

const API_KEY = "cff4aa421fae4c30a27c064004dcedad";

const newsBoard = new NewsBoard(API_KEY);
newsBoard.getNewsSources();