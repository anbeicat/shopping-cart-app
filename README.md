<!--
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-03-31 13:29:58
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-06 01:21:32
 * @description: 
 * @FilePath: /shopping-cart-app/README.md
-->
# Shopping Cart App

**React + TypeScript + Vite** 기반의 쇼핑 카트 애플리케이션입니다.  
**React + TypeScript + Vite** 构建的购物车应用程序。

---

## 프로젝트 구조 / 项目结构

```plaintext
shopping-cart-app/
├── public/                     # 정적 리소스 / 静态资源
├── src/
│   ├── components/             # 공통 컴포넌트 / 公共组件
│   │   ├── SearchBar/          # 검색바 컴포넌트 / 搜索栏组件
│   │   ├── TabBar/             # 하단 네비게이션 컴포넌트 / 底部导航组件
│   ├── pages/                  # 페이지 / 页面
│   │   ├── Home/               # 홈 페이지 / 首页
│   │   ├── SearchList/         # 검색 리스트 페이지 / 搜索列表页面
│   ├── assets/                 # 정적 리소스 (이미지, 아이콘 등) / 静态资源（图片、图标等）
│   ├── App.tsx                 # 애플리케이션 엔트리 / 应用程序入口
│   ├── index.tsx               # 프로젝트 엔트리 파일 / 项目入口文件
├── package.json                # 프로젝트 의존성 설정 / 项目依赖配置
├── README.md                   # 프로젝트 설명 파일 / 项目说明文件
```

---

## 주요 기능 / 主要功能


---

## 기술 스택 / 技术栈

- **프론트엔드 프레임워크 / 前端框架**: React
- **UI 컴포넌트 라이브러리 / UI 组件库**: Ant Design Mobile
- **라우팅 관리 / 路由管理**: React Router
- **상태 관리 / 状态管理**: React Hooks
- **스타일링 / 样式**: SCSS

---

## 설치 및 실행 / 安装与运行

### 1. 프로젝트 클론 / 克隆项目

```bash
git clone https://github.com/your-repo/shopping-cart-app.git
cd shopping-cart-app
```

### 2. 의존성 설치 / 安装依赖

```bash
npm install
```

### 3. 프로젝트 실행 / 启动项目

```bash
npm dev
```

프로젝트가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.  
项目启动后，可在 [http://localhost:3000](http://localhost:3000) 查看。

---

## 주요 컴포넌트 설명 / 主要组件说明


- **파일 경로 / 文件路径**: `src/pages/SearchList/`
- **기능 / 功能**:
  - 상품 분류를 표시합니다.  
    显示商品分类。
  - `SideBar` 컴포넌트를 사용하여 분류 네비게이션을 제공합니다.  
    使用 `SideBar` 组件提供分类导航。

---

## 스타일링 / 样式

- **전역 스타일 / 全局样式**: `src/index.scss`
- **컴포넌트 스타일 / 组件样式**: 각 컴포넌트에 독립적인 SCSS 파일이 있습니다.  
  每个组件都有独立的 SCSS 文件。
  - 예 / 示例: `SearchBar.scss`, `TabBar.scss`

---

## 배포 / 部署

### Vercel을 사용한 배포 / 使用 Vercel 部署

1. Vercel CLI 설치 / 安装 Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. 프로젝트 배포 / 部署项目:
   ```bash
   vercel
   ```
3. 배포가 완료되면 Vercel에서 제공하는 URL을 통해 프로젝트를 확인할 수 있습니다.  
   部署完成后，可通过 Vercel 提供的 URL 查看项目。

---

## 개발 시 주의사항 / 开发注意事项

1. **컴포넌트 재사용 / 组件复用**  
   공통 컴포넌트는 `src/components/` 디렉토리에 배치하며, 최대한 범용적으로 설계합니다.  
   公共组件放置在 `src/components/` 目录下，尽量设计为通用组件。

2. **상태 관리 / 状态管理**  
   React Hooks를 사용하여 컴포넌트 상태를 관리하며, 전역 상태는 최소화합니다.  
   使用 React Hooks 管理组件状态，尽量减少全局状态。

3. **스타일 규칙 / 样式规则**  
   SCSS를 사용하여 스타일을 작성하며, BEM 네이밍 규칙을 따릅니다.  
   使用 SCSS 编写样式，并遵循 BEM 命名规则。

---

## 기여 / 贡献

이 프로젝트를 개선하기 위해 Issue 또는 Pull Request를 제출해 주세요.  
欢迎通过 Issue 或 Pull Request 为本项目贡献改进。

---

## 라이선스 / 许可证

[MIT License](LICENSE)

---

### **추가 설명 / 补充说明**
- 이 문서는 프로젝트의 주요 기능과 구조를 간략히 설명하며, 개발 및 배포에 필요한 정보를 제공합니다.  
  本文档简要说明了项目的主要功能和结构，并提供了开发和部署所需的信息。
- 필요에 따라 문서를 수정하거나 확장할 수 있습니다.  
  可根据需要修改或扩展文档。
