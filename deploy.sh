#!/bin/bash

# 构建生产版本
echo "Building production version..."
npm run build

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "Build successful!"
    
    # 启动生产服务器
    echo "Starting production server..."
    npm start
else
    echo "Build failed!"
    exit 1
fi 