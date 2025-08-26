// src/layouts/WithHeader.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from '../components/TopHeader';

export default function WithHeader() {
  return (
    <>
      <TopHeader />
      <Outlet />
    </>
  );
}
