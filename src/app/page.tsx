import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// 로그인 기능

const Home: NextPage = () => {
  return (
    <main data-testid="mian">
      테스트 입니다.
      <div data-testid="test">
        <h1>하이1</h1>
      </div>
      <div>
        <h1>하이2</h1>
      </div>
    </main>
  );
};
export default Home;