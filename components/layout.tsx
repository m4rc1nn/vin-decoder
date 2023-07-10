import Head from 'next/head';
import styles from './layout.module.scss';

export default function Layout({ children } : { children: React.ReactNode}) {
  return <div>
    {children}
  </div>;
}