import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppConfig } from '@/lib/utils/AppConfig';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '@/lib/theme/theme'

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
