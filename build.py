#!/usr/bin/env python3
"""
Project Card 构建脚本
用于优化和压缩资源文件
"""

import os
import re
import json
import shutil
from pathlib import Path

def minify_css(css_content):
    """简单的CSS压缩"""
    # 移除注释
    css_content = re.sub(r'/\*.*?\*/', '', css_content, flags=re.DOTALL)
    # 移除多余的空白
    css_content = re.sub(r'\s+', ' ', css_content)
    # 移除分号前的空格
    css_content = re.sub(r'\s*;\s*', ';', css_content)
    # 移除大括号周围的空格
    css_content = re.sub(r'\s*{\s*', '{', css_content)
    css_content = re.sub(r'\s*}\s*', '}', css_content)
    # 移除冒号后的空格
    css_content = re.sub(r':\s+', ':', css_content)
    return css_content.strip()

def minify_js(js_content):
    """简单的JavaScript压缩"""
    # 移除单行注释（保留URL中的//）
    js_content = re.sub(r'(?<!:)//.*$', '', js_content, flags=re.MULTILINE)
    # 移除多行注释
    js_content = re.sub(r'/\*.*?\*/', '', js_content, flags=re.DOTALL)
    # 移除多余的空白（保留字符串中的空白）
    lines = js_content.split('\n')
    minified_lines = []
    for line in lines:
        line = line.strip()
        if line:
            minified_lines.append(line)
    return '\n'.join(minified_lines)

def create_build_directory():
    """创建构建目录"""
    build_dir = Path('dist')
    if build_dir.exists():
        shutil.rmtree(build_dir)
    build_dir.mkdir()
    return build_dir

def copy_assets(build_dir):
    """复制资源文件"""
    # 复制图片文件夹
    if Path('src').exists():
        shutil.copytree('src', build_dir / 'src')
    
    # 复制其他必要文件
    files_to_copy = ['start_server.py', 'start.bat', '.gitignore']
    for file in files_to_copy:
        if Path(file).exists():
            shutil.copy2(file, build_dir / file)

def build_html(build_dir):
    """构建HTML文件"""
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # 可以在这里添加HTML优化
    # 例如：内联关键CSS，压缩HTML等
    
    with open(build_dir / 'index.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print("✅ HTML文件已构建")

def build_css(build_dir):
    """构建CSS文件"""
    with open('styles.css', 'r', encoding='utf-8') as f:
        css_content = f.read()
    
    # 压缩CSS
    minified_css = minify_css(css_content)
    
    with open(build_dir / 'styles.css', 'w', encoding='utf-8') as f:
        f.write(minified_css)
    
    print("✅ CSS文件已压缩")

def build_js(build_dir):
    """构建JavaScript文件"""
    # 构建配置文件
    with open('config.js', 'r', encoding='utf-8') as f:
        config_content = f.read()
    
    with open(build_dir / 'config.js', 'w', encoding='utf-8') as f:
        f.write(config_content)
    
    # 构建主脚本文件
    with open('script.js', 'r', encoding='utf-8') as f:
        js_content = f.read()
    
    # 压缩JavaScript
    minified_js = minify_js(js_content)
    
    with open(build_dir / 'script.js', 'w', encoding='utf-8') as f:
        f.write(minified_js)
    
    print("✅ JavaScript文件已压缩")

def generate_build_info(build_dir):
    """生成构建信息"""
    import datetime
    
    build_info = {
        "buildTime": datetime.datetime.now().isoformat(),
        "version": "1.0.0",
        "environment": "production",
        "features": {
            "minified": True,
            "optimized": True
        }
    }
    
    with open(build_dir / 'build-info.json', 'w', encoding='utf-8') as f:
        json.dump(build_info, f, indent=2, ensure_ascii=False)
    
    print("✅ 构建信息已生成")

def main():
    """主构建函数"""
    print("🚀 开始构建 Project Card...")
    print("=" * 50)
    
    # 创建构建目录
    build_dir = create_build_directory()
    print(f"📁 构建目录已创建: {build_dir}")
    
    # 复制资源文件
    copy_assets(build_dir)
    print("📋 资源文件已复制")
    
    # 构建各种文件
    build_html(build_dir)
    build_css(build_dir)
    build_js(build_dir)
    
    # 生成构建信息
    generate_build_info(build_dir)
    
    print("=" * 50)
    print("🎉 构建完成！")
    print(f"📦 构建文件位于: {build_dir.absolute()}")
    print("\n💡 提示:")
    print("- 可以直接部署 dist 文件夹到服务器")
    print("- 使用 python dist/start_server.py 启动本地服务器测试")

if __name__ == "__main__":
    main()