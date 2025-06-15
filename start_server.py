#!/usr/bin/env python3
"""
Project Card 本地服务器启动脚本
自动处理端口冲突，智能端口管理
"""

import http.server
import socketserver
import socket
import subprocess
import sys
import os
import time

def kill_process_on_port(port):
    """终止占用指定端口的进程"""
    killed = False
    try:
        if os.name == 'nt':  # Windows系统
            # 查找占用端口的进程
            result = subprocess.run(
                f'netstat -ano | findstr :{port}',
                shell=True,
                capture_output=True,
                text=True
            )
            
            if result.stdout:
                lines = result.stdout.strip().split('\n')
                for line in lines:
                    if f':{port}' in line and 'LISTENING' in line:
                        parts = line.split()
                        if len(parts) >= 5:
                            pid = parts[-1]
                            print(f"🔄 正在终止占用端口 {port} 的进程 (PID: {pid})...")
                            kill_result = subprocess.run(
                                f'taskkill /F /PID {pid}', 
                                shell=True, 
                                capture_output=True,
                                text=True
                            )
                            if kill_result.returncode == 0:
                                killed = True
                                print(f"✅ 成功终止进程 {pid}")
                            else:
                                print(f"⚠️ 终止进程 {pid} 失败")
                            break
        else:  # Unix/Linux/Mac系统
            result = subprocess.run(
                f'lsof -ti:{port}',
                shell=True,
                capture_output=True,
                text=True
            )
            
            if result.stdout:
                pids = result.stdout.strip().split('\n')
                for pid in pids:
                    if pid:
                        print(f"🔄 正在终止占用端口 {port} 的进程 (PID: {pid})...")
                        kill_result = subprocess.run(f'kill -9 {pid}', shell=True)
                        if kill_result.returncode == 0:
                            killed = True
                            print(f"✅ 成功终止进程 {pid}")
                        
    except Exception as e:
        print(f"❌ 处理端口冲突时出错: {e}")
    
    if killed:
        # 等待进程完全终止
        time.sleep(2)
    
    return killed

def is_port_available(port):
    """检查端口是否可用"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.bind(('localhost', port))
            return True
        except socket.error:
            return False

def find_available_port(start_port=8000, max_attempts=10):
    """查找可用端口"""
    for port in range(start_port, start_port + max_attempts):
        if is_port_available(port):
            return port
    return None

def start_server(preferred_port=8000):
    """启动HTTP服务器"""
    port = preferred_port
    max_retries = 3
    
    for attempt in range(max_retries):
        print(f"🔍 检查端口 {port} 可用性...")
        
        if is_port_available(port):
            print(f"✅ 端口 {port} 可用")
            break
        else:
            print(f"⚠️ 端口 {port} 被占用")
            
            if attempt < max_retries - 1:  # 不是最后一次尝试
                print(f"🔄 尝试释放端口 {port} (第 {attempt + 1}/{max_retries} 次)")
                if kill_process_on_port(port):
                    # 再次检查端口
                    if is_port_available(port):
                        print(f"✅ 端口 {port} 已成功释放")
                        break
                    else:
                        print(f"❌ 端口 {port} 仍被占用")
                else:
                    print(f"❌ 无法释放端口 {port}")
                
                # 如果释放失败，尝试查找其他可用端口
                if attempt == max_retries - 2:  # 倒数第二次尝试
                    print("🔍 正在查找其他可用端口...")
                    alternative_port = find_available_port(port + 1)
                    if alternative_port:
                        port = alternative_port
                        print(f"🔄 切换到端口 {port}")
                    else:
                        print("❌ 未找到可用端口")
                        return False
            else:
                print("❌ 所有尝试均失败，无法启动服务器")
                return False
    
    try:
        # 设置服务器
        handler = http.server.SimpleHTTPRequestHandler
        
        # 自定义处理器以避免缓存问题
        class NoCacheHTTPRequestHandler(handler):
            def end_headers(self):
                self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
                self.send_header('Pragma', 'no-cache')
                self.send_header('Expires', '0')
                super().end_headers()
            
            def log_message(self, format, *args):
                # 简化日志输出
                pass
        
        with socketserver.TCPServer(("", port), NoCacheHTTPRequestHandler) as httpd:
            print("\n" + "=" * 50)
            print("🚀 Project Card 服务器已启动!")
            print("=" * 50)
            print(f"📱 本地访问: http://localhost:{port}")
            print(f"🌐 网络访问: http://127.0.0.1:{port}")
            print(f"📁 服务目录: {os.getcwd()}")
            print(f"⏹️  按 Ctrl+C 停止服务器")
            print("-" * 50)
            
            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                print(f"\n🛑 服务器已停止")
                return True
                
    except Exception as e:
        print(f"❌ 启动服务器时出错: {e}")
        return False

if __name__ == "__main__":
    # 确保在正确的目录中运行
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    print("=" * 50)
    print("🎯 Project Card 智能服务器")
    print("=" * 50)
    
    success = start_server()
    if not success:
        print("\n❌ 服务器启动失败")
        input("按回车键退出...")
        sys.exit(1) 