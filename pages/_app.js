import "../styles/globals.css";

// Next.js에서 pages/_app.js 파일은 모든 페이지의 공통 레이아웃을 정의하고, 페이지를 초기화하는 역할
// ✅ 모든 페이지에 공통 적용되는 로직을 관리
// ✅ 페이지 이동 시 상태를 유지하도록 함
// ✅ 전역 CSS 및 스타일 적용 가능
// ✅ 전역적인 Provider(Redux, Context API 등) 설정 가능
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
  // * Component: 현재 렌더링해야 할 페이지 컴포넌트 (예: pages/index.js, pages/about.js 등)
  // * pageProps: 페이지 컴포넌트가 받는 초기 데이터 (props)
  // → getInitialProps, getServerSideProps, getStaticProps 등에서 반환된 데이터를 포함할 수 있음.
}

export default MyApp;
