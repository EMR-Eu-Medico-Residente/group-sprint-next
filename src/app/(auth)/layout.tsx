import '@/styles/globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'MedClub',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <head></head>
      <body className={`${poppins.className} bg-red-200`}>{children}</body>
    </html>
  );
}
