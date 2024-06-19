import { LCATable } from '@/components/lca-table'
import { LCATableMobile } from '@/components/lca-table-mobile';
import { trpc } from '@/lib/trpc';
import { Input, Layout, Spin, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Content, Footer, Header } = Layout;
const { Title } = Typography;
const { Search } = Input;
import React, { useLayoutEffect } from 'react'


export default function Page() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "black"
});
  const router = useRouter();
  const { query } = router.query;
  const [searchQuery, setSearchQuery] = useState<string | undefined>('');
  // const { data: lcaData, isLoading } = trpc.useQuery(['lca.findAll', { searchQuery: query as string | undefined }]);

  const [isMobile, setIsMobile] = useState<boolean>(true);

  // useEffect(() => {
  //   if (
  //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
  //       navigator.userAgent
  //     )
  //   ) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // }, []);

  const onSearch = (value: string) => {
    router.push({
      pathname: router.asPath.split('?')[0],
      query: value?
            { query: value.toLowerCase() }:
            undefined,
    });
  };


  useEffect(() => {
    setSearchQuery(query as string);
  }, [query]);

  return (
        <Layout style={{ background: "black", maxHeight: "100vh", minHeight: "100vh", }}>

          <Header style={{ background: "black", margin: 'auto', height: "auto" }}>
            <Title level={isMobile ? 2 : 1} style={{textAlign: "left", margin: "5% 0%"}}>
              <div className="animation-text">
                Search H1B1 data, explore insights.
              </div>
            </Title>
            <div>
            This page has been deprecated, please visit <Link
              href="https://h1b1.work"
              className="font-medium underline underline-offset-4 hover:text-black transition-colors text-red-300"
            >
              h1b1.work
            </Link>
          </div>
          </Header>

          <Footer style={{ textAlign: 'center' }}>Built by{' '}
            <Link
              href="https://github.com/koonweee"
              className="font-medium underline underline-offset-4 hover:text-black transition-colors"
            >
              Jeremy Tan
            </Link>
            ,{' '}
            <Link
              href="https://github.com/chuyouchia"
              className="font-medium underline underline-offset-4 hover:text-black transition-colors"
            >
              Jacob Chia
            </Link>{' '}
            and{' '}
            <Link
              href="https://github.com/iamgenechua"
              className="font-medium underline underline-offset-4 hover:text-black transition-colors"
            >
              Gene Chua
            </Link>
          </Footer>
        </Layout>
  )
}
