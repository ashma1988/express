var express = require('express');
var router = express.Router();
// レスポンスのデータ（ノート全件）
const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = "mongodb+srv://2401335031pc:H8yGCaid7iZ5QDIC@cluster0.73td3cp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async(req, res) =>{
const database = client.db('notes');
const notes = database.collection('notes');
// idが１のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note);
})
module.exports = router;
