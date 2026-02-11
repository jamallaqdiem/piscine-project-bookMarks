import assert from "node:assert";
import {test,describe} from "node:test";
import { sortBookMarks } from "./logic.js";


const objectsToTest = [
    {
    id: 1,
    title: 'Past BookMark',
    url: 'http://sexample1.com',
    description: 'Testing oldest BookMark',
    likes: 0,
    timestamp: 1000,
  },
  {
  id: 3,
    title: 'Future BookMark',
    url: 'http://sexample1.com',
    description: 'Testing future BookMark',
    likes: 0,
    timestamp: 3000,
  },
  {
   id: 2,
    title: 'Past BookMark',
    url: 'http://sexample1.com',
    description: 'Testing present BookMark',
    likes: 0,
    timestamp: 2000,
  },
  
]

describe('Test the BookMarks logic', () => {
    test('Should sort the BookMarks and return newest first', () => {
     
    const result = sortBookMarks('test', objectsToTest)
    assert.strictEqual(result[0].timestamp,3000)
    assert.strictEqual(result[2].timestamp,1000)
    })

    test('Should return an empty array if BookMarks is empty', ()=> {
      const result = sortBookMarks('test', null)
      assert.deepStrictEqual(result,[])

    })
} )