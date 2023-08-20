import '@/styles/globals.css'
import Sidebar from '../components/sidebar';
import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}
