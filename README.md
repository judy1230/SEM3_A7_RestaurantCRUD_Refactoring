# Project
<h3>Restaurant CRUD</h3>

# Getting Start
<pre><code>
[~/] $ git clone https://github.com/judy1230/SEM3_A7_RestaurantCRUD_Refactoring.git
[~/] $ npm i express
[~/] $ npm run dev
connect to mongo DB,
[~/SEM3_A7_RestaurantCRUD_Refactoring/models/seeds] $ node restaurantSeeder.js
</pre></code>
<h4> open browser, typing localhost:3000 to start </h4>

this project will run in node.js enviroment, install it by below command in your teminal:
<pre><code>
[~/] $ nvm install 10.15.0
[~/] $ nvm install 10.15.
</pre></code>
# Display
![Minion](https://upload.cc/i1/2019/06/22/Bk4MTh.png)

</pre></code>
# Material
<h4>browser: https://localhost＠port:3000</h4>
<h4>software framewark: <h4>
<h5>1. express: for sending req / res request</h5>
<h5>2. express-handlebars</h5>
<h5>3. express body-parser</h5>
<h5>4. monogo DB</h5>  
  

# Features
|       Option       |                                           Description                               |
| ------------------ |------------------------------------------------------------------------------------ |
| 使用者可以新增餐廳   |  首頁按下加入新餐廳按鈕, redirect到 'http://localhost:3000/restaurants/new'新增資料                  |
|                    |    相關資料: new.handlebars                                                         |
| 使用者可以瀏覽餐廳   |  餐廳欄位按下detail, redirect到 'http://localhost:3000/restaurants/:id'瀏覽該筆資料                 |
|                    |    相關資料: new.handlebars                                                          |
| 使用者可以修改餐廳   |  餐廳欄位與detail頁面按下edit, redirect到 'http://localhost:3000/restaurants/:id/edit'修改該筆資料    |
|                     |    相關資料: index.handlebars, show.handlebars                                        |
| 使用者可以刪除餐廳   |  餐廳欄位與detail頁面按下delete, redirect到 'http://localhost:3000/restaurants/:id/delete'刪除該筆資料 |
|                    |     相關資料: index.handlebars   function: 加入刪除提醒                                  |
| 使用者可以搜尋餐廳      |  餐廳欄位與detail頁面按下delete, redirect到 'http://localhost:3000/search?keyword=中東'搜尋資料 |
|                    |     相關資料: index.handlebars,  routers/restaurants.js                                  |  
| 使用者可以排列餐廳      |  餐廳欄位與detail頁面按下delete, redirect到 http://localhost:3000/restaurants/sort?time 排列資料, 可依a-z, time, rating |
|                    |     相關資料: index.handlebars,  routers/restaurants.js                                  |  

use git log --date=local --pretty=format:"%h%x09%an%x09%ad%x09%s" > ../commits.local.tsv.txt to download commit log
# Authors
  <li>Judy</li> <p>first edited on 06/22/2019</p>
