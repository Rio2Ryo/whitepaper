# 開発フロー（Git Flow）

## 概要
このプロジェクトでは、複数人での開発を円滑に進めるため、Feature Branch Workflowを採用します。

## ブランチ戦略

### メインブランチ
- `main`: 本番環境（Vercel自動デプロイ）
  - 直接pushは禁止
  - PRのマージのみ許可
  - 全てのテストがパスする必要あり

### 開発ブランチ
- `feature/*`: 新機能開発
- `fix/*`: バグ修正
- `hotfix/*`: 緊急修正
- `refactor/*`: リファクタリング
- `docs/*`: ドキュメント更新

## 開発手順

### 1. 新機能開発を始める

```bash
# 最新のmainを取得
git checkout main
git pull origin main

# featureブランチを作成
git checkout -b feature/your-feature-name

# 例：
# git checkout -b feature/add-user-authentication
# git checkout -b fix/navbar-responsive-issue
```

### 2. 開発作業

```bash
# 作業を進める
npm run dev  # 開発サーバー起動

# コミット（細かく）
git add .
git commit -m "feat: ユーザー認証機能を追加"

# 定期的にリモートへpush
git push origin feature/your-feature-name
```

### 3. PRの作成

```bash
# mainの最新を取り込む
git checkout main
git pull origin main
git checkout feature/your-feature-name
git merge main  # またはrebase

# コンフリクト解決後、push
git push origin feature/your-feature-name
```

GitHub上でPRを作成：
1. Compare & pull requestボタンをクリック
2. タイトルとdescriptionを記入
3. レビュアーを指名
4. Create pull request

### 4. コードレビュー

- 最低1名のApproveが必要
- CI/CDチェックがすべてパス
- コメントへの対応完了

### 5. マージ

```bash
# Squash and mergeを推奨
# GitHub上でMergeボタンをクリック
```

### 6. クリーンアップ

```bash
# マージ後、ローカルブランチを削除
git checkout main
git pull origin main
git branch -d feature/your-feature-name
```

## コミットメッセージ規約

```
<type>: <subject>

<body>（オプション）

<footer>（オプション）
```

### Type
- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント
- `style`: フォーマット変更
- `refactor`: リファクタリング
- `test`: テスト追加・修正
- `chore`: ビルドプロセスや補助ツールの変更

### 例
```
feat: ユーザー登録機能を追加

- メールアドレス検証
- パスワード強度チェック
- 確認メール送信

Closes #123
```

## Vercelデプロイ設定

### 自動デプロイ
- `main`ブランチ: 本番環境へ自動デプロイ
- PRブランチ: プレビュー環境へ自動デプロイ

### プレビューURL
各PRにプレビューURLが自動生成されます。
レビュー時に実際の動作を確認できます。

## GitHubリポジトリ設定

### 必要な設定（リポジトリ管理者が行う）

1. **Branch Protection Rules**
   - Settings → Branches → Add rule
   - Branch name pattern: `main`
   - 以下をチェック：
     - ✅ Require a pull request before merging
     - ✅ Require approvals (1)
     - ✅ Dismiss stale pull request approvals
     - ✅ Require status checks to pass
     - ✅ Require branches to be up to date
     - ✅ Include administrators

2. **GitHub Actions**
   - CI/CDワークフローの設定（後述）

3. **Vercel Integration**
   - Vercel側で設定済み
   - Production Branch: `main`
   - Preview Branches: All branches

## トラブルシューティング

### コンフリクトが発生した場合

```bash
# mainの最新を取り込む
git checkout main
git pull origin main
git checkout feature/your-branch
git merge main

# コンフリクトを解決
# VSCodeなどでファイルを編集

# 解決後
git add .
git commit -m "fix: merge conflicts"
git push origin feature/your-branch
```

### プッシュできない場合

```bash
# force pushが必要な場合（注意して使用）
git push origin feature/your-branch --force-with-lease
```

## チーム開発のベストプラクティス

1. **頻繁にコミット**: 小さな単位でコミット
2. **明確なコミットメッセージ**: 何を変更したか明確に
3. **早めのPR**: WIP（Work In Progress）でもOK
4. **レビュー重視**: コードの品質向上
5. **テスト作成**: 新機能には必ずテスト
6. **ドキュメント更新**: 変更に合わせて更新

## 連絡先

質問や問題がある場合は、Slackまたはチームチャットでご連絡ください。