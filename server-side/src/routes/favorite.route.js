import express from 'express';
import * as FavoriteController from '../controllers/favorite.controller.js';

const favoriteRouter = express.Router();

favoriteRouter.route('/').post(FavoriteController.addBookToFavorite).get(FavoriteController.getFavoriteBook);

export default favoriteRouter;
