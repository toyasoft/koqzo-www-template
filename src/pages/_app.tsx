import "src/styles/global.scss";
import { RelayEnvironmentProvider } from "react-relay";
import { useEnvironment } from "src/libs/RelayEnvironment";

export default function App({ Component, pageProps }) {
  const environment = useEnvironment(pageProps.initialRecords);

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}
