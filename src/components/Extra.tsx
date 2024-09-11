'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { animateOnScroll, slideIn } from '@/animations';

const Extra: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      animateOnScroll(elementRef.current, () =>
        slideIn(elementRef.current, 'right', 3000)
      );
    }
  }, []);
  return (
    <div
      id="extra"
      ref={elementRef}
      className="flex items-center justify-center p-5 bg-slate-50"
    >
      <div className="shadow-xl rounded-lg p-10 text-center bg-white max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Extra</h1>
        <Image
          src="/images/bonus.png"
          alt="bonus"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4"
        />
        <div className="text-left">
          <p className="text-lg font-semibold">サイト名:</p>
          <span className="text-lg text-gray-600 mb-2 block hover:text-blue-500 underline">
            <a
              href="https://prameter-with-spotify-audio-features.vercel.app/"
              target="_blank"
            >
              parameter with spotify audio features
            </a>
          </span>
          <p className="text-lg font-semibold">概要:</p>
          <span className="text-lg text-gray-600 mb-2 block">
            SpotifyAPIを使用したサイトになります。<br></br>
            楽曲の音響情報を視覚的に確認できたら面白いかなと感じたため制作しました。
          </span>
          <p className="text-lg font-semibold">操作:</p>
          <span className="text-lg text-gray-600 mb-2 block">
            「Let's play」からSpotifyへログイン
            ログイン後にユーザーのお気に入り楽曲が表示されるので楽曲を選択
            楽曲の音響情報が表示され、その楽曲をもとにおすすめ楽曲が表示されます
            おすすめ楽曲のイメージをクリックすると音響情報が表示され比較ができます
            「add」ボタンを押すとプレイリスト作成の対象楽曲になります 「create
            playlist」ボタンを押すとプレイリストが作成できます
          </span>
        </div>
      </div>
    </div>
  );
};

export default Extra;
