import type { SiteContent } from './types';
import { email, profiles, repos, resumes } from './facts';

/**
 * 日本語コピー。事実は 2026-11-17 時点のプロフィールに限る。
 * 雇用主・日付・数値・在留資格・選考中の企業は足さない。
 */
const content: SiteContent = {
  locale: 'ja',
  meta: {
    title: '盧 嘉宸（ロ カチン）· ソフトウェア / AIエンジニア',
    description:
      '盧 嘉宸（Jiachen (Chris) Lu）。南カリフォルニア大学コンピュータサイエンス修士（2027年5月修了見込み）。ソフトウェア／AIエンジニア職を志望。ワシントン大学で応用・計算数理科学を修了。',
    htmlLang: 'ja',
    ogLocale: 'ja_JP',
    ogLocaleAlternate: 'en_US',
    ogImageAlt:
      '盧 嘉宸（ロ カチン）/ Jiachen (Chris) Lu。ソフトウェア / AIエンジニア。南カリフォルニア大学コンピュータサイエンス修士、2027年5月修了見込み。',
  },
  ui: {
    skip: '本文へスキップ',
    navLabel: 'ページ内',
    langLabel: '言語',
    themeToDark: 'ダークモードにする',
    themeToLight: 'ライトモードにする',
    opensNewTab: '新しいタブで開く',
    currentPage: '表示中の言語',
    resumeMissing: 'PDFは未掲載です',
    resumeReady: 'PDFをダウンロードできます',
  },
  brand: {
    mark: '盧',
    name: '盧 嘉宸',
    nameLang: 'ja',
    homeHref: '/ja/#top',
  },
  languages: [
    { href: '/', label: 'EN', lang: 'en' },
    { href: '/ja/', label: '日本語', lang: 'ja' },
  ],
  nav: [
    { href: '#about', label: '紹介' },
    { href: '#education', label: '学歴' },
    { href: '#experience', label: '経験' },
    { href: '#projects', label: '開発' },
    { href: '#skills', label: 'スキル' },
    { href: '#languages', label: '言語' },
    { href: '#resume', label: '履歴書' },
    { href: '#contact', label: '連絡' },
  ],
  hero: {
    kicker: '新卒採用 · ソフトウェア / AIエンジニア',
    name: '盧 嘉宸',
    nameLang: 'ja',
    reading: 'ロ カチン',
    altName: 'Jiachen (Chris) Lu',
    altNameLang: 'en',
    summary:
      '南カリフォルニア大学でコンピュータサイエンスの修士課程に在籍しており、2027年5月の修了を見込んでいます。数値計算、倉庫向けロボットのインテグレーション、業務プロセスの自動化を中心に、実装と不具合の調査で課題を解いてきました。',
    preference:
      '新卒のソフトウェアエンジニア、AIエンジニアとして就職先を探しています。勤務地は米国を第一に希望しており、日本の企業の方ともぜひお話ししたいです。',
    facts: [
      { label: '拠点', value: 'カリフォルニア州ロサンゼルス' },
      { label: '学位', value: '南カリフォルニア大学 CS修士' },
      { label: '修了', value: '2027年5月（見込み）' },
      { label: '入社', value: '2027年夏を希望' },
      { label: '言語', value: '日本語・英語・中国語' },
    ],
    ctas: [
      { label: 'メール', href: `mailto:${email}` },
      { label: 'LinkedIn', href: profiles.linkedin, external: true },
      { label: 'GitHub', href: profiles.github, external: true },
      { label: '履歴書', href: '#resume' },
    ],
  },
  about: {
    id: 'about',
    index: '01',
    title: '自己紹介',
    paragraphs: [
      '盧 嘉宸（ロ カチン）と申します。英語名は Jiachen Lu で、Chris の名前でも活動しています。南カリフォルニア大学でコンピュータサイエンスの修士号取得を目指しており、修了見込みは2027年5月です。その前はワシントン大学で応用・計算数理科学の学士を取得し、科学計算・数値解析を専攻しました。副専攻は応用数学とデータサイエンスです。',
      'これまでソフトウェア開発、数値計算、ロボットシステムのインテグレーション、業務の自動化に携わってきました。2026年夏は Mujin のアトランタ拠点でインターンとして、倉庫自動化のインテグレーション、不具合調査、受け入れ試験、パレットパターンのツールに取り組みました。PxNexus では、人事書類の自動化、システム連携、書類処理とエージェント・ワークフローの試作（ChatZO）に携わっています。',
      '実装、デバッグ、設計を自分の手で担い、実システムの一部を任せてもらえる技術の土台を作りたいと考えています。英語、日本語、中国語でやり取りできます。',
      '学業と仕事の外では、NBA の観戦、ゲーム、ポケモンが好きです。',
    ],
  },
  education: {
    id: 'education',
    index: '02',
    title: '学歴',
    intro:
      '修士課程は在学中です。USC の授業課題と、プロフィールに記載のあるワシントン大学の授業・演習は「開発」にまとめています。',
    schools: [
      {
        school: '南カリフォルニア大学（University of Southern California）',
        degree: 'コンピュータサイエンス修士（M.S.）',
        dates: '2025年8月 – 2027年5月（修了見込み）',
        location: 'カリフォルニア州ロサンゼルス',
        gpa: 'GPA 3.50 / 4.00',
        points: [
          'GPA は2026年10月の応募資料に記載された値であり、成績証明書を新たに確認した数字ではありません。',
          '2026年秋学期の履修科目は、CSCI 572（情報検索とウェブ検索エンジン）、CSCI 585（データベースシステム）、EE 542（インターネットとクラウドコンピューティング）です。',
        ],
      },
      {
        school: 'ワシントン大学（University of Washington）',
        degree: '応用・計算数理科学 学士（B.S.）· 科学計算・数値解析',
        dates: '2021年9月 – 2025年6月',
        location: 'ワシントン州シアトル',
        gpa: 'GPA 3.79 / 4.00',
        points: [
          '副専攻は応用数学とデータサイエンスです。',
          '並列数値計算の授業では、C++ と MPI のリダクションによる分散数値積分と、CUDA/cuFFT による GPU 上のスペクトル微分に取り組み、三次元格子を5種類のサイズ（最大 256 × 256 × 256）で計測しました。',
          '公開している AMATH 583 のリポジトリに、MPI と CUDA/cuFFT を含む課題があります。別の科学計算ノート（ニュートン法や二分法による求根、常微分方程式の境界値問題など）は Scientific-Computing リポジトリにあります。',
          'ワシントン実験数学研究室での研究は「経験」に記載しています。公開の FEM リポジトリは、その研究室の有限要素法コード（MATLAB）です。',
        ],
      },
    ],
  },
  experience: {
    id: 'experience',
    index: '03',
    title: '職務経験',
    intro: 'ロボットのインテグレーションインターン、非常勤の開発、学部での研究、そして以前の API 開発のインターンです。',
    roles: [
      {
        org: 'Mujin',
        title: 'ソフトウェアインテグレーションエンジニア インターン',
        dates: '2026年5月 – 2026年8月',
        location: '米国ジョージア州アトランタ（拠点）。カンザスシティの顧客先導入にも対応',
        points: [
          'Quicktron 製 AGV のタスク実行とパレット搬送の不具合を、SSH、ログ解析、プロセス監視、バッチテストで調査しました。フリート通信の問題は、他のエンジニアと一緒に切り分けました。',
          'パレタイジング、ビンピッキング、AGV、倉庫実行システム、梱包、ラッピングを含む倉庫ワークフローのインテグレーションと受け入れ試験を行いました。',
          '単一SKUおよび混載SKUのパレタイジングについて、シミュレーション、コントローラ、WebUI、実機にわたるサイト受け入れ試験を実施し、サイクルタイムのボトルネックも調べました。',
          'JSON、TOPS、RoboPalExport 形式のパレットレイアウトを取り込み、編集、検証、保存したうえで、開発用コントローラで既存オーダーを再実行し、下流の挙動を確認しました。',
        ],
      },
      {
        org: 'PxNexus（旧 PeopleX）',
        title: 'CTO 兼 Board Member',
        dates: '2024年 – 現在',
        location: '非常勤 · リモート',
        note: '直近の応募資料では、現在の役職を CTO 兼 Board Member としています。それより前の資料では、2024年7月からのソフトウェアエンジニア・インターンと記載されています。2024年は入社年であり、CTO としての在任期間ではありません。勤務は非常勤・リモートです。古い資料にある「東京」は会社側の拠点であり、居住地はロサンゼルスです。',
        points: [
          'Python と UiPath で人事書類の取り込みと検証を自動化し、日本の人事担当者と、書類処理・検証の要件を擦り合わせました。',
          '5つ以上の人事システムに対し、REST と GraphQL の API を連携しました。',
          'テストと AWS ECS へのデプロイのため、Docker と GitHub Actions のパイプラインを用意しました。',
          '履歴書では、100万人超が利用するプラットフォームにおける人事処理時間の50%削減に貢献した、と記載しています。これはプラットフォーム全体の成果として履歴書に記した数字であり、基盤をすべて単独で構築したことや、削減幅を単独で測定したことを意味しません。',
          'ChatZO は試作です。日本の年末調整書類を想定し、Google Document AI と OpenAI の画像理解で項目を抽出し、値を正規化し、業務ルールで検証し、LLM で再確認し、判断が分かれる案件は人に回します。本番化の有無、処理件数、精度、レイテンシ、コストは未確定です。',
          '業務のヒアリングから、プロセスの可視化、要件の整理、実行の支援、ワークフロー内での人による確認までを整理しました。',
        ],
      },
      {
        org: 'ワシントン大学',
        title: '研究アシスタント（Washington Experimental Mathematics Lab）',
        dates: '2024年9月 – 2025年6月',
        location: 'ワシントン州シアトル',
        points: [
          '移流拡散方程式向けの有限要素ソルバを MATLAB で実装し、行列の組み立て、境界条件、時間積分を扱いました。',
          'ステップ間で変わらない行列は再利用し、毎回組み立て直さないようにしました。',
          '陰的オイラー法、クランク・ニコルソン法、BDF2 を、5段階のメッシュ細分化で比較し、L2 誤差で収束を見ました。',
        ],
      },
      {
        org: 'Accenture',
        title: 'ソフトウェアエンジニア インターン',
        dates: '2023年7月 – 2023年9月',
        location: '香港特別行政区',
        points: [
          'Flask と FastAPI で Python の API を開発しました。',
          'AWS EC2 上の自然言語処理パイプラインを支援しました。履歴書では規模を1億トークン超と記載しています。これは資料にあるプロジェクト規模であり、このサイトのために測り直した値ではありません。',
          'pytest で自動テストを追加しました。',
        ],
      },
    ],
  },
  projects: {
    id: 'projects',
    index: '04',
    title: '開発・課題',
    intro:
      '授業、研究コード、コースの提案書です。リンクは github.com/jlu1211 の公開リポジトリだけです。ChatZO は上の PxNexus に書いており、公開リポジトリは載せていません。',
    items: [
      {
        title: '有限要素法のコード（WXML）',
        context: 'ワシントン大学 · 研究',
        summary:
          'ワシントン実験数学研究室の有限要素法プロジェクトの MATLAB コードを公開しています。メッシュ、要素行列、境界条件、L2 誤差を含みます。移流拡散、時間積分、5段階のメッシュ比較は「経験」に書いています。',
        points: [],
        href: repos.fem,
        linkLabel: 'github.com/jlu1211/FEM',
      },
      {
        title: 'AMATH 583 — 並列数値計算',
        context: 'ワシントン大学 · Computational Methods for Data Analysis',
        summary:
          'AMATH 583 の課題です。C++ と MPI、CUDA/cuFFT によるスペクトル微分を含みます。計測した三次元格子は5サイズで、最大は 256 × 256 × 256 です。',
        points: [],
        href: repos.amath583,
        linkLabel: 'github.com/jlu1211/AMATH-583',
      },
      {
        title: '科学計算のノート',
        context: '授業課題',
        summary:
          '数値解法の公開ノートです。求根（ニュートン法、二分法）や、常微分方程式の境界値問題などを含みます。',
        points: [],
        href: repos.scientificComputing,
        linkLabel: 'github.com/jlu1211/Scientific-Computing',
      },
      {
        title: '機械学習の授業ノート',
        context: '授業課題',
        summary:
          '線形回帰、ロジスティック回帰、決定木、分類、ニューラルネット、モデル比較の公開ノートです。下の USC の犬猫分類とは別です。',
        points: [],
        href: repos.machineLearning,
        linkLabel: 'github.com/jlu1211/Machine-Learning',
      },
      {
        title: '犬と猫の画像分類',
        context: 'USC · EE 542 · グループ課題',
        summary:
          'PyTorch のグループ演習です。学習画像は約2万枚、未見の評価画像は5,000枚です。CPU と GPU、入力処理の違いを比較しました。出力層が ReLU のとき学習が進まず、線形出力に変えたあと、3つのシードで評価精度は 77.0%–78.4% でした。授業資料に残っている結果です。',
        points: [],
      },
      {
        title: 'マルチスレッドのウェブクローラ',
        context: 'USC · CSCI 572',
        summary:
          'Python、Requests、BeautifulSoup で実装し、スレッドは7本です。robots.txt の確認、URL の重複排除、アクセス間隔の制御を入れました。記録された実行では、10,000回の取得試行のうち HTTP 200 が 9,573 件でした。ユニークページ数でも、一般的な成功率でもありません。',
        points: [],
      },
      {
        title: 'データベース設計とモデル出力の確認',
        context: 'USC · CSCI 585',
        summary:
          '授業で配布された比較用アプリケーションを使い、Ollama 経由で Llama 3 と Gemma 2 の出力を比べました。比較アプリの開発や、モデルの学習はしていません。生成された歯科医院のスキーマについて、構文エラーや、属性・キー・カーディナリティの欠落を確認し、予約、処置、請求、保険を含む ER 図を設計しました。',
        points: [],
      },
      {
        title: '日本の住民票からの項目抽出',
        context: '文書処理 · ChatZO とは別',
        summary:
          '住民票から構造化して項目を取る OCR のパイプラインです。Python、OpenAI Vision、Azure OCR、OpenCV による前処理を使い、pytesseract など他の OCR も検討しました。ChatZO の年末調整の試作とは別物で、データも同じものではありません。',
        points: [],
      },
      {
        title: 'Elderly Digital Clone',
        context: 'USC · EE 542 · Group 6 の提案書 · 2026年10月',
        summary:
          '高齢の家族に毎日電話し、家族が許可した記憶について話し、家族へは短い要約を送る、という提案です。リポジトリにあるのは2026年10月の提案書で、提供中の製品ではありません。',
        points: [],
        href: repos.elderlyDigitalClone,
        linkLabel: 'github.com/jlu1211/elderly-digital-clone',
      },
    ],
  },
  skills: {
    id: 'skills',
    index: '05',
    title: 'スキル',
    intro:
      '上の職務と授業で使った技術です。習熟度の順位ではなく、すべてを同じ深さで扱えるという意味でもありません。',
    groups: [
      {
        title: 'プログラミング',
        items: 'Python、C++、C、SQL、MATLAB、Bash、TypeScript/JavaScript',
      },
      {
        title: 'バックエンドと API',
        items: 'FastAPI、Flask、REST、GraphQL',
      },
      {
        title: 'ウェブ',
        items: 'React、Next.js',
        note: '応募資料に記載があります。直近でどこまで実装したかの記述は、バックエンドや数値計算より薄いです。',
      },
      {
        title: 'AI と文書理解',
        items:
          'PyTorch、OpenAI API / Vision、Google Document AI、Azure OCR、OpenCV、pytesseract、Ollama',
      },
      {
        title: 'クラウドとリリース',
        items: 'AWS EC2、AWS ECS、Docker、GitHub Actions',
      },
      {
        title: 'システムとデバッグ',
        items: 'Linux、SSH、プロセス監視、ログ、バッチテスト、Git',
      },
      {
        title: 'テスト',
        items: 'pytest、受け入れ試験、条件を揃えた比較',
      },
      {
        title: '数値計算',
        items: '有限要素法、PDE、数値積分、誤差と収束、MPI、CUDA/cuFFT',
      },
      {
        title: '検索とデータ設計',
        items: 'Requests、BeautifulSoup、URL の重複排除、robots.txt、ER 図',
      },
      {
        title: '業務自動化',
        items: 'UiPath、書類の検証、人事システム連携、人による確認',
      },
    ],
  },
  languagesSection: {
    id: 'languages',
    index: '06',
    title: '言語',
    intro: '資格は履歴書に記載のあるものです。',
    items: [
      {
        name: '日本語',
        detail: 'ネイティブレベル。履歴書の記載では、JLPT N1 に2018年12月合格。',
      },
      {
        name: '英語',
        detail:
          '大学、職務、応募、日常で使っています。履歴書のスコアは IELTS 7.5（2020年12月）と TOEFL 110（2020年）です。いずれも過去の結果であり、特定の応募で今も有効だという主張ではありません。',
      },
      {
        name: '中国語（標準中国語）',
        detail: '日常の会話で使っており、英語の応募資料では Mandarin Chinese と記載しています。',
      },
    ],
  },
  resume: {
    id: 'resume',
    index: '07',
    title: '履歴書',
    intro: '英語版と日本語版の PDF です。ファイルをサイトに置いてから、ボタンでダウンロードできます。',
    pendingNote:
      'PDF がリポジトリにまだ無い場合、ボタンは押せない状態になり、その旨を表示します。エラーページには飛びません。',
    files: [
      {
        href: resumes.en,
        label: '履歴書（英語・PDF）',
        missingLabel: '英語版の履歴書 — PDFは未掲載です',
      },
      {
        href: resumes.ja,
        label: '履歴書（日本語・PDF）',
        missingLabel: '日本語版の履歴書 — PDFは未掲載です',
      },
    ],
  },
  contact: {
    id: 'contact',
    index: '08',
    title: '連絡先',
    intro: '採用に関するご連絡はメールが確実です。英語でも日本語でも読めます。',
    links: [
      { label: email, href: `mailto:${email}` },
      { label: 'linkedin.com/in/jiachenlu2002', href: profiles.linkedin, external: true },
      { label: 'github.com/jlu1211', href: profiles.github, external: true },
    ],
  },
  footer: {
    note: '盧 嘉宸（Jiachen (Chris) Lu）· ロサンゼルス · 2027年5月修了見込み',
  },
  schemaDescription:
    '南カリフォルニア大学コンピュータサイエンス修士課程在籍（2027年5月修了見込み）。ソフトウェアおよび AI エンジニア職を志望。',
};

export default content;
