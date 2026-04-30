// ===================================================================
// affiliate.js  ―  アフィリエイト商品データ
// ===================================================================
// ★ このファイルだけ編集すれば商品を追加・変更・URLを更新できます
// ★ script.js や index.html を触る必要はありません
//
// 【Amazonアソシエイト URL の貼り方】
//   link: "https://www.amazon.co.jp/dp/XXXXXXXXXX?tag=あなたのタグ-22"
//   ↑ "#" を上記の形式のURLに置き換えるだけでOKです
//
// 【商品の追加方法】
//   下の配列の末尾に { ... }, を追加するだけです
//
// 【各フィールドの意味】
//   name        : 商品名（画面に表示される）
//   type        : "チョコ" または "クッキー"（バッジの色が変わる）
//   emoji       : 商品に使う絵文字（🍫 または 🍪 を推奨）
//   description : 商品説明（1〜2文で）
//   link        : AmazonアソシエイトのURL（今は "#" のまま）
// ===================================================================

const snackItems = [

  // ── チョコレート ────────────────────────────────────────────────
  {
    name: "明治 ミルクチョコレート",
    type: "チョコ",
    emoji: "🍫",
    description: "定番のまろやかなミルクチョコ。疲れた時の小さな休憩においしい一枚。",
    link: "https://www.amazon.co.jp/%E6%98%8E%E6%B2%BB-%E3%83%9F%E3%83%AB%E3%82%AF%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88%E3%83%9F%E3%83%8B%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96-250g/dp/B0CPT9K9XX?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=171AYTC5PCC6M&dib=eyJ2IjoiMSJ9.kWvzfzFjYKoOWW4-7SXBoqFcVQ_2KXHf3yb7OM_pUxWxyRuHH8uDjxsD9JCcVbLYw09oufliFz0K3J49wBiaHJl8qjg7H4AyaIoS2g1hyYYNd2bl83HpHpeT5pvUj4eiOrYZeuMZoKH7rusFLdeYw3MoTxxlHSKo51kRePMMJyoUNRpv9kq6Jt7fVLJT18F7g_OWKpQie_t5rr4UJmR8VnudwZE5zGvpkwRS14mh-CK_c9rrctzP95lfqwzMteGOkTHv6WR2xVFdJ1D5cm1GI4PJESe-DAlgz-HxO8oSyQE.NmUzXGNNDHB7cg0JON5epO7Qn6I9aZvliU7Q_0XQG_U&dib_tag=se&keywords=%E6%98%8E%E6%B2%BB%E3%83%9F%E3%83%AB%E3%82%AF%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88&qid=1777575234&sprefix=%E6%98%8E%E6%B2%BB%2B%E3%83%9F%E3%83%AB%E3%82%AF%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88%2Caps%2C464&sr=8-7&th=1&linkCode=ll2&tag=bonbafoi-22&linkId=54bb8296f1978915faee44d11a93cd56&ref_=as_li_ss_tl",
  },
  {
    name: "ロイズ 生チョコレート オーレ",
    type: "チョコ",
    emoji: "🍫",
    description: "口の中でふわっととける贅沢な生チョコ。自分へのご褒美にぴったり。",
    link: "https://www.amazon.co.jp/%E5%86%B7%E8%94%B5%E4%BE%BF-ROYCE-%E3%83%AD%E3%82%A4%E3%82%BA-%E7%94%9F%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88-%E3%82%AA%E3%83%BC%E3%83%AC/dp/B005PL0O28?crid=1PIP0CRN39917&dib=eyJ2IjoiMSJ9.OSKPJIazY581RocmPZ7hn5ieKZv1eyoKrDGHB8nKfsPww3qXgKX6LL5OVkFv6EGiDCenAoYBV7oTJP36eQft3rzraxSAE0jE20bdKM3VbCIgp9ntpbhx1-6L17d9OLBToAgZKPKlautzPqi1t02TrrHkfu4QJ4ObUqP-foYT8_3D4CxyfELHqdNK2F9P-xptO0T1c0mIVfkEbye6FXBKmQp_-g8r5Qm6ezHv_l9d5GMcsaTeyOqT4u8NTlVRMuf1C3jClEc0R9e4OppHRMzQ5lrRhoBwlTUbPccLt7pErs0.sRGkh_6pg7bT7YAqM9pDqF8nE7RHAdMt_0Gdp3YTSjc&dib_tag=se&keywords=%E3%83%AD%E3%82%A4%E3%82%BA+%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88+%E3%82%AA%E3%83%BC%E3%83%AC&qid=1777575306&sprefix=%E3%83%AD%E3%82%A4%E3%82%BA+%E7%94%9F%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88+%E3%82%AA%E3%83%BC%E3%83%AC%22%2Caps%2C219&sr=8-1&linkCode=ll2&tag=bonbafoi-22&linkId=0ce6b51729db70931d0fb8b65af15faa&ref_=as_li_ss_tl",
  },
  {
    name: "フェレロ ロシェ チョコレート",
    type: "チョコ",
    emoji: "🍫",
    description: "サクサクのウエハースとヘーゼルナッツのプレミアムチョコ。幸福感たっぷり。",
    link: "https://www.amazon.co.jp/FERRERO-%E3%83%95%E3%82%A7%E3%83%AC%E3%83%AD-%E3%83%95%E3%82%A7%E3%83%AC%E3%83%AD%E3%83%AD%E3%82%B7%E3%82%A7-%EF%BC%B4%EF%BC%8D%EF%BC%91%EF%BC%96%EF%BC%8816%E7%B2%92%C3%971%E5%80%8B%EF%BC%89/dp/B0CJY8G4WW?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3LQPCKZAR34HM&dib=eyJ2IjoiMSJ9.N0D1k8lUB5DZM1xFb7jV22N2hBoa1oPhrrIqR0JsUq9Luet5yWBvIBwjmziX-19NkIHMVb6_9vHj77-QNwXKQCpQkQKFZSnycdYrBaXwZcEMlnwWPMWuL5r5zShSfOLoHklVEtbNhM0iaEjfjYwflxg5Ri7VjC6lTlImeDqwBSJqUgwttNzr7zmrvuFeLzj5JK8Y05acLmjC0QKnhiDGC7QQV0LpTdbaaG-SUkXSqfZwCSufUNa2D-bj2VKVu6AWIXNYxO5LadFkLKqZFT4jV1lKIDhc0m-lkxqPsqdXJ9E.fnCBHlEe24rn5FzVp32jZwaITyQgECrJFYj1k6dFBBA&dib_tag=se&keywords=%E3%83%95%E3%82%A7%E3%83%AC%E3%83%AD%2B%E3%83%AD%E3%82%B7%E3%82%A7%2B%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88&qid=1777575343&sprefix=%E3%83%95%E3%82%A7%E3%83%AC%E3%83%AD%2B%E3%83%AD%E3%82%B7%E3%82%A7%2B%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88%2Caps%2C336&sr=8-7&th=1&linkCode=ll2&tag=bonbafoi-22&linkId=4dc090d86031b7a585c80c8cfa6dbfa9&ref_=as_li_ss_tl",
  },
  {
    name: "GODIVA チョコレート アソートメント",
    type: "チョコ",
    emoji: "🍫",
    description: "上質なチョコレートで心を満たして。特別な日の自分へのギフトにも。",
    link: "https://www.amazon.co.jp/GODIVA-%E3%82%B4%E3%83%87%E3%82%A3%E3%83%90-%E3%83%8A%E3%83%9D%E3%83%AA%E3%82%BF%E3%83%B3-4%E7%A8%AE%E3%82%A2%E3%82%BD%E3%83%BC%E3%83%88-%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88/dp/B0GCXQWFSP?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=364ITVA3ENXIO&dib=eyJ2IjoiMSJ9.T-lxX7HtfrfRvkWvw2UxaeZck-nMCCJ4WDuKQE1aVjYLKpyaou-FxjrRvP90cNZ_DRKa_SSRr-ALH6uQzaLeQuuRVo_arCht5_ivDxss_TE.39pDpRqze-jaCEpAhKEXsZ_wk-B4kJQ75syGQx4qGas&dib_tag=se&keywords=GODIVA+%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88+%E3%82%A2%E3%82%BD%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88&qid=1777575439&sprefix=godiva+%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88+%E3%82%A2%E3%82%BD%E3%83%BC%E3%83%88%E3%83%A1%E3%83%B3%E3%83%88%2Caps%2C256&sr=8-58&xpid=rbQIFIr6_va8x&linkCode=ll2&tag=bonbafoi-22&linkId=f944a08047e3b708030b433aeb20a84b&ref_=as_li_ss_tl",
  },
  {
    name: "森永 ダース ミルク",
    type: "チョコ",
    emoji: "🍫",
    description: "手軽なひと口サイズのミルクチョコ。ちょっとした甘いひと息に。",
    link: "https://www.amazon.co.jp/%E3%80%90%E3%82%A2%E3%82%BD%E3%83%BC%E3%83%88%E3%80%91%E9%A3%9F%E3%81%B9%E6%AF%94%E3%81%B9-DARS-%E3%83%80%E3%83%BC%E3%82%B9-%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88%E8%8F%93%E5%AD%90-%EF%BC%94%E7%A8%AE%E9%A1%9E%EF%BC%88%E3%83%9F%E3%83%AB%E3%82%AF%E3%80%81%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%80%81%E8%8A%B3%E9%86%87%E3%81%84%E3%81%A1%E3%81%94%E3%80%81%E8%8A%B3%E9%86%87%E3%82%AB%E3%82%AB%E3%82%AA%EF%BC%89/dp/B0FVS5K25S?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1MJQNRTH14L8B&dib=eyJ2IjoiMSJ9.cKX_rE4dJOWCC1cImBdR5nbuyO3-WGfvEJVG4mPc6rRZPIePEiBz-cT90vimwXvMPl40ULJEENkNlec2xtYFJDiNU_aVRa4_Kgo7cjgtSxu9Zh20MuB5gsGV98srtFOQez0QUoRZMH5JgDVOtw8ym1a_wqwOsRm1gP02OjuRxgM5DepyZayFyFuudKhKRz8RW2Rx8vAu7nVsaFfSDeXIFDGlq3DgzGXpJ1Koq1uHE_fPDwKF80a0fAP2Wehc_6fcstcrYK4ac9pecwxwiF-__Mt8CXbSb06pPiR4pnIHeVs.eG_-8lX4ML5Oc1QOhc0ALaFPDlINTNbOTZvjG_vdxgc&dib_tag=se&keywords=%E6%A3%AE%E6%B0%B8+%E3%83%80%E3%83%BC%E3%82%B9+%E3%83%9F%E3%83%AB%E3%82%AF&qid=1777575483&sprefix=%E6%A3%AE%E6%B0%B8+%E3%83%80%E3%83%BC%E3%82%B9+%E3%83%9F%E3%83%AB%E3%82%AF%2Caps%2C235&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll2&tag=bonbafoi-22&linkId=4a3fc70df0aadc4bf6a4c502ac4a225f&ref_=as_li_ss_tl",
  },

  // ── クッキー ────────────────────────────────────────────────────
  {
    name: "カントリーマアム",
    type: "クッキー",
    emoji: "🍪",
    description: "しっとり柔らかくて懐かしい定番クッキー。ほっとする甘さが後を引く。",
    link: "https://www.amazon.co.jp/%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%9E%E3%82%A2%E3%83%A0-%E3%83%90%E3%83%8B%E3%83%A9%EF%BC%86%E3%82%B3%E3%82%B3%E3%82%A2-%E3%83%93%E3%82%B9%E3%82%B1%E3%83%83%E3%83%88-%E3%82%AF%E3%83%83%E3%82%AD%E3%83%BC-%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88/dp/B0CXXQ4YLS?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=JA3L98VSOOD6&dib=eyJ2IjoiMSJ9.3dDCr6nOgkj6VHDnAApd1CJiEahwD6rzY3PD4-lBmUbXE4ZrY4fEAryFHzE-4Lc4FOy5VTQAxvDQt_vq3vob9wqp09yc5MGeNsUzRo7r38o2ZX0AROwvErH-YFP1NKI0oSBQsJ3SOmVQwVsqbozyK73txA7cztFsIUVU7ktOul7NlBaMSBvivCrWd44bvY5JXs4cjcM4MbsQU18PJJ7WSmnvb_I9mTNfppKqOvB1qnkcyMjKaS3-abr-FeNZ1B1eerfMoQTWmVGTFV7AP2iwJnWqtanXxbxTwzgme4OShHA.U07kF_peGrOOsanSc11GshSxufS8F0rlRreOAcCmzOM&dib_tag=se&keywords=%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%9E%E3%82%A2%E3%83%A0+%E3%83%90%E3%83%8B%E3%83%A9%26%E3%82%B4%E3%83%BC%E3%83%95%E3%83%AC%E3%83%83%E3%83%88&qid=1777575554&sprefix=%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%9E%E3%82%A2%E3%83%A0+%E3%83%90%E3%83%8B%E3%83%A9%26%E3%82%B4%E3%83%BC%E3%83%95%E3%83%AC%E3%83%83%E3%83%88%2Caps%2C208&sr=8-5&linkCode=ll2&tag=bonbafoi-22&linkId=eebc87972a25d4228d80bc47251c00c8&ref_=as_li_ss_tl",
  },
  {
    name: "ステラおばさんのクッキー アソート",
    type: "クッキー",
    emoji: "🍪",
    description: "手作り感あふれるバラエティクッキー。いろんな味を少しずつ楽しめる。",
    link: "https://www.amazon.co.jp/%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B9%E3%83%86%E3%83%A9-%E3%80%90Amazon-co-jp%E9%99%90%E5%AE%9A%E3%80%91%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B9%E3%83%86%E3%83%A9-%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%82%AC%E3%82%BC%E3%83%83%E3%83%88-S-12%E6%9E%9A%C3%971%E7%AE%B1%E2%96%A0%E5%8C%85%E8%A3%85%E6%B8%88%E3%81%BF%E2%96%A0%E6%89%8B%E6%8F%90%E3%81%92%E8%A2%8B%E4%BB%98%E3%81%8D%E2%96%A0/dp/B0BQXHDBJ3?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=VIAL3ZL8HE5M&dib=eyJ2IjoiMSJ9.ahwIK-wwJrW7DaBVlQzWWFw8eEVv6Z4O1aHLKQZDmrp7D0EbZ2HT-z0lfc1GKnq3W5Ir53LRIt8trFk1Ck6ZmwmWX84xzg82yJvMCimKheYSKw-qgItGFqaSH2ocyjyAo6x3mbngaVjNcTDp8b2f0_jYFOIH2_JjQKc8s_joQIP_dCa_3MeQqI4HA92WMakcrOMceHXkoDqPYoEGehcph6d4ISqpf7K6I2fZH2J-HZfeDD6VJNwd-UXnavainsorumyNN5rVXsmYcE236xVhFIFZrBof23k1KNbsZnwAnAE.3aZIdeq_vseDG1arSl7GsWoOBhFHT-XSZdhdPOYHZBc&dib_tag=se&keywords=%E3%82%B9%E3%83%86%E3%83%A9%E3%81%8A%E3%81%B0%E3%81%95%E3%82%93%E3%81%AE%E3%82%AF%E3%83%83%E3%82%AD%E3%83%BC%2B%E3%82%A2%E3%82%BD%E3%83%BC%E3%83%88&qid=1777575635&rdc=1&sprefix=%E3%82%B9%E3%83%86%E3%83%A9%E3%81%8A%E3%81%B0%E3%81%95%E3%82%93%E3%81%AE%E3%82%AF%E3%83%83%E3%82%AD%E3%83%BC%2B%E3%82%A2%E3%82%BD%E3%83%BC%E3%83%88%2Caps%2C210&sr=8-6&th=1&linkCode=ll2&tag=bonbafoi-22&linkId=da8d695b4e4ebcedaf55aec0519416fd&ref_=as_li_ss_tl",
  },
  {
    name: "白い恋人 ラング・ド・シャ",
    type: "クッキー",
    emoji: "🍪",
    description: "サクッと軽いクッキーにホワイトチョコがサンドされた北海道の銘菓。",
    link: "https://www.amazon.co.jp/%E7%9F%B3%E5%B1%8B%E8%A3%BD%E8%8F%93-ISHIYA-%E7%99%BD%E3%81%84%E6%81%8B%E4%BA%BA%EF%BC%88%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%EF%BC%8912%E6%9E%9A%E5%85%A5/dp/B0F1CVFM8Q?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2NCZFWGHTGABM&dib=eyJ2IjoiMSJ9.27X404KSTnyugLDUYGY3poZ25yXqCpXa_LTsfdHKKnuvbYH5LTg-fT5idiqs1_MJebRAwqc_HGxSukndohgz-2RSb4i9lJoQ5NDR9lLeK29OJ5pkUJ6Uw4nG6AkhYQPFYasMbcjQjrMDu6WMBCOIUwwj-PjC0YNEZy4P56tWq9-t6swheZoYmSWLsHDchahVYBwELW8V0U8ju8sRvmIaEghaz64emijiXLzhpoWyPCGryfrNPfjVhE1Lh19Rn8DQ9czTBvH8mvvIq84MFBahgkisTe6trYpdBbeDMtVz4H4.v25Z7GbblqY5lb7dhPiS_8yRXo7VF-lN5vzVlksz9K4&dib_tag=se&keywords=%E7%99%BD%E3%81%84%E6%81%8B%E4%BA%BA+%E3%83%A9%E3%83%B3%E3%82%B0%E3%83%BB%E3%83%89%E3%83%BB%E3%82%B7%E3%83%A3&qid=1777575693&sprefix=%E7%99%BD%E3%81%84%E6%81%8B%E4%BA%BA+%E3%83%A9%E3%83%B3%E3%82%B0+%E3%83%89+%E3%82%B7%E3%83%A3%2Caps%2C181&sr=8-5&linkCode=ll2&tag=bonbafoi-22&linkId=4a2984e7cdb41391cc57f157b1bd223d&ref_=as_li_ss_tl",
  },
  {
    name: "シュガーバターサンドの木",
    type: "クッキー",
    emoji: "🍪",
    description: "シリアルクッキーのザクザク食感に芳醇なバタークリームのサンド。",
    link: "https://www.amazon.co.jp/%E3%82%B7%E3%83%A5%E3%82%AC%E3%83%BC%E3%83%90%E3%82%BF%E3%83%BC%E3%81%AE%E6%9C%A8-%E8%A9%B0%E5%90%88%E3%81%9B-%E3%81%8A%E8%8F%93%E5%AD%90-%E4%BA%BA%E6%B0%97%E5%95%86%E5%93%81-%E3%83%A9%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E6%B8%88/dp/B095K73GFM?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1FY0U3P3HVX5P&dib=eyJ2IjoiMSJ9.4QUeDyXOW9hq2Be3uZ9QClYWVykZVuC57jClsJ6Z2N_ghODVeyyX9ybgY9OA6dx08YQHwIn5vFLwv-XamxZl68cPQix1a2ua0-VJzjsbTEJz5TrFsd2vPjhlaZBit-Vjy4H7pj8nubtRKDwee_00MRTo5VIkeryPm9NYz4UxFsYX6OkiaI4q2mAMpf3-jltRr6Alney8iUq_Q66va5l36ENLF17pVRc5xWIaUtMHLJVh5cqprLzkbpge2g_4VtdgtPRnmC42rjCt_2nF1tpvFdrglLN_wlSSai2mE5GEn_A.nvbyxXnRUg70sg3gSgblqZI-Yt5evWRkiPbZO5Az3Fo&dib_tag=se&keywords=%E3%82%B7%E3%83%A5%E3%82%AC%E3%83%BC%E3%83%90%E3%82%BF%E3%83%BC%E3%82%B5%E3%83%B3%E3%83%89%E3%81%AE%E6%9C%A8&qid=1777575734&sprefix=%E3%82%B7%E3%83%A5%E3%82%AC%E3%83%BC%E3%83%90%E3%82%BF%E3%83%BC%E3%82%B5%E3%83%B3%E3%83%89%E3%81%AE%E6%9C%A8%2Caps%2C243&sr=8-8&th=1&linkCode=ll2&tag=bonbafoi-22&linkId=f2e0e2132eb497992c9b166ba5596c61&ref_=as_li_ss_tl",
  },
  {
    name: "アーモンドフロランタン",
    type: "クッキー",
    emoji: "🍪",
    description: "キャラメルとアーモンドが香ばしい、贅沢なフランス菓子風クッキー。",
    link: "https://www.amazon.co.jp/%E8%B5%A4%E3%81%84%E5%B8%BD%E5%AD%90-%E3%83%8A%E3%83%83%E3%83%86%E3%82%A3%E3%82%A2-21%E6%9E%9A/dp/B0BNMSQYBX?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=Y5Q3MZFJSHQM&dib=eyJ2IjoiMSJ9.Z10QzHq6PgaCnru_asUCBeg03SIxsu_cSaK8WMntyvjCdy1Jqx7hwpuzArDohfe7qhfpkHBXkcUzLYY3u94u74QtEcSI0ABeiXQD3xkJ6taLn603uLpLn8fJh1x4gyZoBHe8OVdeeFlPR_mPtfNsObNfRhJJKyswcLT13Sw6cklhuxF5hf6suQhRWcztoAhwIO0XL1HpJmfJMtKmMwOPGlFkm5paftie1jQ40uiPZjEZkj29qD79ci7UiDDwnQS7XGlDvI1TU3wvmhOhvO11OfyWAqb51T9ZPQboBswGqGw.BgPL4AfASALvCr9zHysqpVHs7JqdnlyL_h3-CUWgya4&dib_tag=se&keywords=%E3%82%A2%E3%83%BC%E3%83%A2%E3%83%B3%E3%83%89%E3%83%95%E3%83%AD%E3%83%A9%E3%83%B3%E3%82%BF%E3%83%B3&qid=1777575819&sprefix=%E3%82%A2%E3%83%BC%E3%83%A2%E3%83%B3%E3%83%89%E3%83%95%E3%83%AD%E3%83%A9%E3%83%B3%E3%82%BF%E3%83%B3%2Caps%2C217&sr=8-5&th=1&linkCode=ll2&tag=bonbafoi-22&linkId=c1ebfdf044d960668a53bf73e3363e2e&ref_=as_li_ss_tl",
  },

];

window.snackItems = snackItems;
