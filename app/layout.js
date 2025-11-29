import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gym Simulator',
  description: 'Interactive Gym Workout Planner',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0', 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
