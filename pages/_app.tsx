import '../styles/globals.css';
import type { AppProps } from 'next/app';
import UserContextProvider from 'app/user.context';
import { LoadingIndicatorProvider } from 'hooks/with_provider/useLoadingIndicator';
import { NotificationProvider } from 'hooks/with_provider/useNotification';
import { AlertDialogProvider } from 'hooks/with_provider/useAlertDialog';
import { ConfirmDialogProvider } from 'hooks/with_provider/useConfirmDialog';
import { SessionProvider } from 'next-auth/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#20871f"
    }
  }
});

interface AppPropsWithSession extends AppProps {
  pageProps: { session: any; };
}

function MyApp({ Component, pageProps }: AppPropsWithSession) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <UserContextProvider>
          <LoadingIndicatorProvider>
            <NotificationProvider>
              <AlertDialogProvider>
                <ConfirmDialogProvider>
                  <Component {...pageProps} />
                </ConfirmDialogProvider>
              </AlertDialogProvider>
            </NotificationProvider>
          </LoadingIndicatorProvider>
        </UserContextProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
