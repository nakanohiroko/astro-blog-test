import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // 1秒ごとにカウントアップ
    }, 1000);

    return () => clearInterval(interval); // コンポーネントが削除されたらクリア
  }, []);

  return (
    <div>
      <h2>リアルタイムカウント: {count}</h2>
    </div>
  );
}