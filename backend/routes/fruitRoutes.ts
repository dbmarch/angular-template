
import express from 'express';
import {  type Fruit } from '../models/index.ts';
const fruitRoutes = express.Router({mergeParams: true});

const fruits: Fruit[] = [{
   name: "apple",
   color: "red",
   },{
      name: 'orange',
      color: 'orange'
   },{
      name: 'banana',
      color: 'yellow'
   },{
      name: 'cherry',
      color: 'red'
   }];



fruitRoutes.get('/', (req, res) => {
   console.log ('GET fruit');
    res.status(200).json(fruits);
   }
);

fruitRoutes.get('/:id', (req, res) => {
   console.log ('GET fruit', req.params.id);
   
   const id:number = Number(req.params.id);
   console.log ('selecting ', id);
   console.log ({
      id: req.params.id,
      data: fruits[id]
   })   

   res.status(200).json({
      id: req.params.id,
      data: fruits[id]
   })

}
);

export {fruitRoutes};