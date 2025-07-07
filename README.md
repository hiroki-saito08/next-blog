# 📝 Next.js + TypeScript Practice Blog

This is a practice project built with **Next.js 15**, **TypeScript**, and **Prisma**.  
It works as a simple blog application where users can post articles with a title, image, and Markdown-formatted content.

簡易ブログアプリとして、画像付きの投稿とマークダウンによる本文記述、ライブプレビュー機能が実装されています。

---

## 🚀 Tech Stack / 使用技術

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Prisma**
- **Supabase** (Auth)
- **Zod** (Validation)

---

## 📁 Project Structure / ディレクトリ構成

```plaintext
.
├── app/                 # App Router-based pages
├── components/          # Reusable UI components / 再利用可能なUI部品
├── lib/                 # Utility functions (DB, auth) / 認証・DB系ユーティリティ
├── prisma/              # Prisma schema & config / DBスキーマ
├── public/              # Static files / 公開画像など
├── styles/              # Tailwind設定など
└── tsconfig.json        # TypeScript config
🧑‍💻 Features / 機能
📌 Simple blog posts with title, image, and content
タイトル・画像・本文からなる投稿が可能です。

🖼️ Image upload
投稿にカバー画像を設定できます。

✍️ Markdown support for content
本文は Markdown 記法で記述でき、装飾や見出しが使えます。

👀 Live preview
入力と同時に Markdown のプレビューを確認できます。

🛠️ How to Run / 実行方法

git clone https://github.com/hiroki-saito08/next-blog.git
cd next-blog

# Install dependencies / 依存パッケージをインストール
npm install

# Start the development server / 開発サーバーを起動
npm run dev

# Optional: View DB with Prisma Studio / Prisma Studio でDBを確認
npx prisma studio
Open your browser and go to:
http://localhost:3000

📚 Learning Purpose / 学習目的
This project was created to practice modern full-stack development techniques:

このプロジェクトは以下の技術を学ぶ目的で作成されました：

Building applications with Next.js App Router

Type-safe forms using TypeScript + Zod

Implementing authentication with Supabase

Modeling and querying databases via Prisma

Handling Markdown input and rendering live preview
