## 說明
實作行事曆,將todolist用api串接到行事曆上

## 部署環境

安裝Composer：
```
composer install
```

安裝npm：
```
npm install
npm run dev
```

複製一份env.example 並命名為.env：
```
copy .env.example .env
```

設置.env的APP_KEY：
```
php artisan key:generate
```

## 啟動命令
執行系統
```
php artisan serve --port=8002
```

瀏覽器執行:
```
http://localhost:8002
```

### v1.0.0
- 日曆功能
- 串接side_project_reminder的api

### v1.1.0
- 新增不同顏色的提醒事項功能

### v1.2.0
- 新增顯示行事曆時間點