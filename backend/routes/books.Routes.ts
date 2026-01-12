
import express from 'express';
import {  type Book } from '../models/index.ts';
import { BOOKS_COLLECTION } from '../data/books-collection.ts';
import type { fruitRoutes } from './fruitRoutes.ts';
const bookRoutes = express.Router({mergeParams: true});

bookRoutes.get('/', (req, res) => {
   console.log ('GET Books');
    res.status(200).json(BOOKS_COLLECTION);
   }
);

bookRoutes.get('/:id', (req, res) => {
   console.log ('GET Book', req.params.id);
   
   const id:number = Number(req.params.id);
   console.log ('selecting ', id);
   console.log ({
      id: req.params.id,
      data: BOOKS_COLLECTION[id]
   })   

   res.status(200).json({
      id: req.params.id,
      data: BOOKS_COLLECTION[id]
   })

}
);

export {bookRoutes};